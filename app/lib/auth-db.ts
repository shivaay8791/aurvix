import { promises as fs } from "fs";
import path from "path";
import { randomBytes, scrypt, timingSafeEqual, createHash } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);
const dbPath = path.join(process.cwd(), "data", "users.json");

export type PublicUser = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type UserRecord = PublicUser & {
  passwordHash: string;
  passwordSalt: string;
};

type SessionRecord = {
  tokenHash: string;
  userId: string;
  createdAt: string;
  expiresAt: string;
};

type AuthDatabase = {
  users: UserRecord[];
  sessions: SessionRecord[];
};

const emptyDb: AuthDatabase = {
  users: [],
  sessions: [],
};

async function ensureDb() {
  await fs.mkdir(path.dirname(dbPath), { recursive: true });

  try {
    await fs.access(dbPath);
  } catch {
    await fs.writeFile(dbPath, JSON.stringify(emptyDb, null, 2));
  }
}

async function readDb(): Promise<AuthDatabase> {
  await ensureDb();
  const raw = await fs.readFile(dbPath, "utf8");
  return JSON.parse(raw) as AuthDatabase;
}

async function writeDb(db: AuthDatabase) {
  await ensureDb();
  await fs.writeFile(dbPath, JSON.stringify(db, null, 2));
}

function toPublicUser(user: UserRecord): PublicUser {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
  };
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

async function hashPassword(password: string, salt = randomBytes(16).toString("hex")) {
  const derivedKey = (await scryptAsync(password, salt, 64)) as Buffer;
  return {
    passwordHash: derivedKey.toString("hex"),
    passwordSalt: salt,
  };
}

async function verifyPassword(password: string, user: UserRecord) {
  const { passwordHash } = await hashPassword(password, user.passwordSalt);
  const savedHash = Buffer.from(user.passwordHash, "hex");
  const incomingHash = Buffer.from(passwordHash, "hex");

  return (
    savedHash.length === incomingHash.length &&
    timingSafeEqual(savedHash, incomingHash)
  );
}

function hashSessionToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

export async function createUser(name: string, email: string, password: string) {
  const db = await readDb();
  const normalizedEmail = normalizeEmail(email);
  const existingUser = db.users.find((user) => user.email === normalizedEmail);

  if (existingUser) {
    throw new Error("An account already exists for this email.");
  }

  const passwordFields = await hashPassword(password);
  const user: UserRecord = {
    id: randomBytes(12).toString("hex"),
    name: name.trim(),
    email: normalizedEmail,
    createdAt: new Date().toISOString(),
    ...passwordFields,
  };

  db.users.push(user);
  await writeDb(db);

  return toPublicUser(user);
}

export async function authenticateUser(email: string, password: string) {
  const db = await readDb();
  const normalizedEmail = normalizeEmail(email);
  const user = db.users.find((item) => item.email === normalizedEmail);

  if (!user || !(await verifyPassword(password, user))) {
    return null;
  }

  return toPublicUser(user);
}

export async function createSession(userId: string) {
  const db = await readDb();
  const token = randomBytes(32).toString("hex");
  const now = new Date();
  const expiresAt = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 7);

  db.sessions = db.sessions.filter(
    (session) => new Date(session.expiresAt).getTime() > now.getTime(),
  );
  db.sessions.push({
    tokenHash: hashSessionToken(token),
    userId,
    createdAt: now.toISOString(),
    expiresAt: expiresAt.toISOString(),
  });

  await writeDb(db);

  return {
    token,
    expiresAt,
  };
}

export async function getUserBySessionToken(token: string | undefined) {
  if (!token) {
    return null;
  }

  const db = await readDb();
  const now = Date.now();
  const tokenHash = hashSessionToken(token);
  const session = db.sessions.find(
    (item) =>
      item.tokenHash === tokenHash &&
      new Date(item.expiresAt).getTime() > now,
  );

  if (!session) {
    return null;
  }

  const user = db.users.find((item) => item.id === session.userId);

  return user ? toPublicUser(user) : null;
}

import { NextResponse } from "next/server";
import { authenticateUser, createSession } from "@/app/lib/auth-db";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password are required." },
      { status: 400 },
    );
  }

  const user = await authenticateUser(email, password);

  if (!user) {
    return NextResponse.json(
      { message: "Invalid email or password." },
      { status: 401 },
    );
  }

  const session = await createSession(user.id);
  const response = NextResponse.json({ user });

  response.cookies.set("aurvix_session", session.token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    expires: session.expiresAt,
    path: "/",
  });

  return response;
}

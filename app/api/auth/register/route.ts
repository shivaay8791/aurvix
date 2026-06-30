import { NextResponse } from "next/server";
import { createSession, createUser } from "@/app/lib/auth-db";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    return NextResponse.json(
      { message: "Name, email, and password are required." },
      { status: 400 },
    );
  }

  if (password.length < 8) {
    return NextResponse.json(
      { message: "Password must be at least 8 characters." },
      { status: 400 },
    );
  }

  try {
    const user = await createUser(name, email, password);
    const session = await createSession(user.id);
    const response = NextResponse.json({ user }, { status: 201 });

    response.cookies.set("aurvix_session", session.token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      expires: session.expiresAt,
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "Unable to create account.",
      },
      { status: 409 },
    );
  }
}

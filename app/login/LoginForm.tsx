"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type AuthMode = "login" | "register";

export default function LoginForm() {
  const router = useRouter();
  const [mode, setMode] = useState<AuthMode>("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

    const response = await fetch(`/api/auth/${mode === "login" ? "login" : "register"}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    setIsLoading(false);

    if (!response.ok) {
      setMessage(data.message || "Something went wrong.");
      return;
    }

    setMessage(
      mode === "login"
        ? "Signed in successfully."
        : "Account created successfully.",
    );
    router.push("/account");
    router.refresh();
  }

  return (
    <section className="mx-auto w-full max-w-md rounded-[28px] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur-2xl sm:p-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          {mode === "login" ? "Sign in" : "Create account"}
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          {mode === "login"
            ? "Use your Aurvix account to continue."
            : "Start your Aurvix workspace in a minute."}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3">
        <button
          type="button"
          className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:bg-white/15"
        >
          Google
        </button>
        <button
          type="button"
          className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:bg-white/15"
        >
          GitHub
        </button>
      </div>

      <div className="my-7 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-500">
        <div className="h-px flex-1 bg-white/10" />
        or
        <div className="h-px flex-1 bg-white/10" />
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {mode === "register" && (
          <label className="block">
            <span className="text-sm font-medium text-gray-200">Name</span>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-400/10"
            />
          </label>
        )}

        <label className="block">
          <span className="text-sm font-medium text-gray-200">Email</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-400/10"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-200">Password</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-400/10"
          />
        </label>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-gray-300">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-white/20 bg-black accent-cyan-400"
            />
            Remember me
          </label>
          <a href="#" className="font-medium text-cyan-300 hover:text-cyan-200">
            Forgot password?
          </a>
        </div>

        {message && (
          <p className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-100">
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600 px-5 py-4 font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.01] hover:shadow-cyan-500/35 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading
            ? "Please wait..."
            : mode === "login"
              ? "Sign in"
              : "Create account"}
        </button>
      </form>

      <p className="mt-7 text-center text-sm text-gray-400">
        {mode === "login" ? "New to Aurvix?" : "Already have an account?"}{" "}
        <button
          type="button"
          onClick={() => {
            setMode(mode === "login" ? "register" : "login");
            setMessage("");
          }}
          className="font-semibold text-cyan-300 hover:text-cyan-200"
        >
          {mode === "login" ? "Create an account" : "Sign in"}
        </button>
      </p>
    </section>
  );
}

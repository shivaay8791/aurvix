import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import AurvixLogo from "../components/AurvixLogo";
import { getUserBySessionToken } from "../lib/auth-db";
import LogoutButton from "./LogoutButton";

export const dynamic = "force-dynamic";

export default async function AccountPage() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("aurvix_session")?.value;
  const user = await getUserBySessionToken(sessionToken);

  if (!user) {
    redirect("/login");
  }

  const createdDate = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(user.createdAt));

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-gray-900 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-600/12 blur-[140px]" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-7">
          <header className="flex items-center justify-between gap-4">
            <Link href="/" aria-label="Go to Aurvix home">
              <AurvixLogo />
            </Link>
            <LogoutButton />
          </header>

          <section className="grid flex-1 items-center gap-8 py-12 lg:grid-cols-[1fr_420px]">
            <div className="max-w-3xl">
              <p className="mb-5 w-fit rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-200">
                Account workspace
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Hi,{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {user.name}
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300">
                Your Aurvix account is ready. From here you can jump back into
                AI tools, manage workspace access, and keep your projects in one
                place.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/tools/resume-builder"
                  className="rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600 px-5 py-3 text-center text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.01]"
                >
                  Open Resume Builder
                </Link>
                <Link
                  href="/"
                  className="rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-cyan-300 hover:bg-white/15"
                >
                  Back to home
                </Link>
              </div>
            </div>

            <aside className="rounded-2xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur-2xl">
              <h2 className="text-xl font-bold">Profile</h2>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Name
                  </p>
                  <p className="mt-2 font-semibold text-white">{user.name}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Email
                  </p>
                  <p className="mt-2 break-words font-semibold text-white">
                    {user.email}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Member since
                  </p>
                  <p className="mt-2 font-semibold text-white">{createdDate}</p>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </div>
    </main>
  );
}

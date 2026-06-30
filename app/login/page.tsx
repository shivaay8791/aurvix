import Link from "next/link";
import AurvixLogo from "../components/AurvixLogo";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-black via-slate-950 to-gray-900 text-white">
      <div className="relative min-h-screen">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-600/12 blur-[140px]" />
        <div className="absolute bottom-24 left-0 h-[320px] w-[320px] rounded-full bg-fuchsia-500/10 blur-[130px]" />

        <div className="relative mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 px-6 py-7 lg:grid-cols-[1fr_460px] lg:items-center lg:gap-14">
          <section className="flex min-h-[240px] flex-col justify-between py-4 lg:min-h-[560px]">
            <Link href="/" aria-label="Go to Aurvix home" className="w-fit">
              <AurvixLogo />
            </Link>

            <div className="max-w-2xl">
              <p className="mb-5 w-fit rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-200">
                Secure workspace access
              </p>
              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Welcome back to{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Aurvix
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-gray-300">
                Sign in to continue building resumes, automations, AI documents,
                and everyday workflow tools from one clean dashboard.
              </p>
            </div>

            <div className="hidden grid-cols-3 gap-4 text-sm text-gray-300 lg:grid">
              {["AI tools", "Templates", "API access"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur"
                >
                  <div className="h-1.5 w-10 rounded-full bg-cyan-400" />
                  <p className="mt-3 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <LoginForm />
        </div>
      </div>
    </main>
  );
}

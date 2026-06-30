import Link from "next/link";
import AurvixLogo from "../components/AurvixLogo";

const integrationOptions = [
  {
    title: "AI Tool Embed",
    description: "Add Aurvix tools to your app with a hosted workspace link.",
    action: "Generate embed key",
  },
  {
    title: "Workflow API",
    description: "Connect resume, PDF, QR, and writing automations to your backend.",
    action: "Create API project",
  },
  {
    title: "Team Workspace",
    description: "Invite collaborators and keep every integration under one account.",
    action: "Set up workspace",
  },
];

export default function IntegratePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-black via-slate-950 to-gray-900 text-white">
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-600/15 blur-[140px]" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8">
          <header className="flex items-center justify-between gap-4">
            <Link href="/" aria-label="Go to Aurvix home">
              <AurvixLogo />
            </Link>
            <Link
              href="/integration-guide"
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:bg-white/15"
            >
              Guide
            </Link>
          </header>

          <section className="grid flex-1 items-center gap-10 py-14 lg:grid-cols-[1fr_480px]">
            <div className="max-w-3xl">
              <p className="mb-5 w-fit rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200">
                Integration setup
              </p>
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Connect Aurvix AI to your workflow.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
                Choose an integration path, create your project, and start
                routing AI-powered tools into your website or internal system.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/login"
                  className="rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-fuchsia-600 px-6 py-4 text-center font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.01]"
                >
                  Start with account
                </Link>
                <Link
                  href="/integration-guide"
                  className="rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-center font-semibold text-white transition hover:border-cyan-300 hover:bg-white/15"
                >
                  Read guide
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              {integrationOptions.map((option) => (
                <article
                  key={option.title}
                  className="rounded-[24px] border border-white/10 bg-white/[0.07] p-6 shadow-xl shadow-cyan-950/20 backdrop-blur-2xl"
                >
                  <h2 className="text-xl font-bold">{option.title}</h2>
                  <p className="mt-3 leading-7 text-gray-300">
                    {option.description}
                  </p>
                  <button className="mt-5 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-extrabold text-black transition hover:bg-cyan-300">
                    {option.action}
                  </button>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

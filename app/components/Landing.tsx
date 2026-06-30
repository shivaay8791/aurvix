import Link from "next/link";

export default function Landing() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[170px]" />
      <div className="absolute -right-40 top-36 h-[320px] w-[320px] rounded-full bg-purple-500/15 blur-[140px]" />
      <div className="absolute -left-40 bottom-0 h-[320px] w-[320px] rounded-full bg-blue-500/15 blur-[140px]" />

      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center justify-center px-6 py-16">
        <div className="max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-300 backdrop-blur-md">
            AI Powered Workflow Platform
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Orchestrate
            </span>
            <span className="block text-white">Workflows with</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Integrated Aurvix AI
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Leverage one unified platform for professional AI resume building,
            advanced PDF manipulation, QR automation, and workflow
            orchestration powered by cutting-edge AI.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/integrate"
              className="w-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/40 sm:w-auto"
            >
              Integrate Now
            </Link>

            <Link
              href="/integration-guide"
              className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-white/10 sm:w-auto"
            >
              View Integration Guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

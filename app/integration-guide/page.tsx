import Link from "next/link";
import AurvixLogo from "../components/AurvixLogo";

const steps = [
  {
    title: "Create your Aurvix account",
    body: "Sign in or create an account so every API key and workflow belongs to your workspace.",
  },
  {
    title: "Choose an integration path",
    body: "Use hosted tools for quick launches, or connect the workflow API when you need backend automation.",
  },
  {
    title: "Connect your first tool",
    body: "Start with one high-value flow such as resume generation, PDF merging, QR creation, or AI email drafting.",
  },
  {
    title: "Review and launch",
    body: "Test the flow from your account page, then publish it to your team or website.",
  },
];

export default function IntegrationGuidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-gray-900 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-fuchsia-500/10 blur-[130px]" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8">
          <header className="flex items-center justify-between gap-4">
            <Link href="/" aria-label="Go to Aurvix home">
              <AurvixLogo />
            </Link>
            <Link
              href="/integrate"
              className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.01]"
            >
              Integrate
            </Link>
          </header>

          <section className="py-14">
            <div className="max-w-3xl">
              <p className="mb-5 w-fit rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200">
                Integration guide
              </p>
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Launch your first Aurvix workflow.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
                Follow these steps to connect Aurvix tools to a product,
                portfolio, internal dashboard, or client workflow.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[24px] border border-white/10 bg-white/[0.07] p-6 shadow-xl shadow-cyan-950/20 backdrop-blur-2xl"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-lg font-black text-black">
                    {index + 1}
                  </div>
                  <h2 className="mt-5 text-2xl font-bold">{step.title}</h2>
                  <p className="mt-4 leading-7 text-gray-300">{step.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[24px] border border-cyan-400/20 bg-cyan-500/10 p-6">
              <h2 className="text-2xl font-bold">Recommended first flow</h2>
              <p className="mt-3 max-w-3xl leading-7 text-gray-300">
                Start with the AI Resume Builder, because it already exists in
                your Aurvix app and gives users an immediate, practical result.
              </p>
              <Link
                href="/tools/resume-builder"
                className="mt-6 inline-flex rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-extrabold text-black transition hover:bg-cyan-300"
              >
                Open Resume Builder
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

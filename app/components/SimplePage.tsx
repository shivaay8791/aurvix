import Link from "next/link";
import AurvixLogo from "./AurvixLogo";

type PageCard = {
  title: string;
  body: string;
  href?: string;
  action?: string;
};

type SimplePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  cards: PageCard[];
  primaryHref?: string;
  primaryLabel?: string;
};

export default function SimplePage({
  eyebrow,
  title,
  description,
  cards,
  primaryHref = "/login",
  primaryLabel = "Get Started",
}: SimplePageProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-gray-900 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-600/12 blur-[140px]" />

        <div className="relative mx-auto min-h-screen w-full max-w-7xl px-6 py-7">
          <header className="flex items-center justify-between gap-4">
            <Link href="/" aria-label="Go to Aurvix home">
              <AurvixLogo />
            </Link>
            <Link
              href={primaryHref}
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.01]"
            >
              {primaryLabel}
            </Link>
          </header>

          <section className="py-12">
            <div className="max-w-3xl">
              <p className="mb-5 w-fit rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-200">
                {eyebrow}
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                {title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300">
                {description}
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {cards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.07] p-5 shadow-xl shadow-cyan-950/20 backdrop-blur-2xl"
                >
                  <h2 className="text-xl font-bold">{card.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-gray-300">
                    {card.body}
                  </p>
                  {card.href && (
                    <Link
                      href={card.href}
                      className="mt-5 inline-flex rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-bold text-black transition hover:bg-cyan-300"
                    >
                      {card.action ?? "Open"}
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

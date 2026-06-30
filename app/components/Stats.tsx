export default function Stats() {
  const stats = [
    { label: "Total AI Workflows", number: "15+", description: "Professional Tools" },
    { label: "AI Service Uptime", number: "99.98%", description: "High Availability" },
    { label: "Enterprise Customizations", number: "700k+", description: "Active Integrations" },
    { label: "Unique Users Secured", number: "2.5M+", description: "Verified Profiles" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#050716] bg-[radial-gradient(circle_at_50%_-20%,rgba(99,102,241,0.12),transparent_60%)] px-4 py-16">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[240px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 rounded-2xl border border-white/[0.08] bg-[#0d1127]/40 p-6 text-center shadow-[0_8px_32px_0_rgba(0,0,0,0.28)] backdrop-blur-xl md:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className={`relative flex flex-col justify-center px-4 py-2 ${
              index !== stats.length - 1 ? "md:border-r md:border-white/[0.08]" : ""
            } ${
              index !== 0 ? "mt-4 border-t border-white/[0.08] pt-6 md:mt-0 md:border-t-0 md:py-2" : ""
            }`}
          >
            <p className="mb-2 text-[12px] font-normal tracking-wide text-slate-400">
              {item.label}
            </p>
            <h2 className="my-1 text-3xl font-bold tracking-tight text-white md:text-4xl">
              {item.number}
            </h2>
            <p className="mt-2 text-[12px] font-normal tracking-wide text-slate-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

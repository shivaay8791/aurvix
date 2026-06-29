export default function Stats() {
  const stats = [
    { number: "15+", label: "AI Tools" },
    { number: "99.9%", label: "Uptime" },
    { number: "24×7", label: "Support" },
    { number: "100%", label: "Secure" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center hover:border-cyan-400 transition"
          >
            <h2 className="text-4xl font-bold text-cyan-400">
              {item.number}
            </h2>

            <p className="mt-2 text-gray-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
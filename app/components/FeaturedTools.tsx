export default function FeaturedTools() {
  const tools = [
    {
      title: "AI Resume Builder",
      desc: "Create ATS-friendly resumes in minutes.",
      icon: "📄",
    },
    {
      title: "PDF Merge",
      desc: "Merge multiple PDFs instantly.",
      icon: "📑",
    },
    {
      title: "QR Code Generator",
      desc: "Generate custom QR codes.",
      icon: "📱",
    },
    {
      title: "Image Compressor",
      desc: "Compress images without quality loss.",
      icon: "🖼️",
    },
    {
      title: "AI Email Writer",
      desc: "Generate professional emails using AI.",
      icon: "✉️",
    },
    {
      title: "Invoice Generator",
      desc: "Create beautiful invoices online.",
      icon: "🧾",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-5xl font-bold text-center mb-14">
        Popular <span className="text-cyan-400">Tools</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <div
            key={tool.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
          >
            <div className="text-5xl">{tool.icon}</div>

            <h3 className="mt-5 text-2xl font-bold">
              {tool.title}
            </h3>

            <p className="mt-4 text-gray-400">
              {tool.desc}
            </p>

            <button className="mt-8 rounded-xl bg-cyan-500 px-5 py-3 font-semibold hover:bg-cyan-600 transition">
              Open Tool →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
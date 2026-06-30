import Link from "next/link";

export default function FeaturedTools() {
  const tools = [
    {
      title: "AI Resume Builder",
      desc: "Create ATS-friendly resumes in minutes.",
      icon: "CV",
      buttonText: "Generate Resume",
      href: "/tools/resume-builder",
    },
    {
      title: "PDF Merge",
      desc: "Merge multiple PDFs instantly.",
      icon: "PDF",
      buttonText: "Start Merging PDFs",
      href: "/tools/pdf-merge",
    },
    {
      title: "QR Code Generator",
      desc: "Generate custom QR codes.",
      icon: "QR",
      buttonText: "Create QR Template",
      href: "/tools/qr-code-generator",
    },
    {
      title: "Image Compressor",
      desc: "Compress images without quality loss.",
      icon: "IMG",
      buttonText: "Compress Images",
      href: "/tools/image-compressor",
    },
    {
      title: "AI Email Writer",
      desc: "Generate professional emails using AI.",
      icon: "AI",
      buttonText: "Write AI Email",
      href: "/tools/ai-email-writer",
    },
    {
      title: "Invoice Generator",
      desc: "Create beautiful invoices online.",
      icon: "INV",
      buttonText: "Generate Invoice",
      href: "/tools/invoice-generator",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <p className="text-sm font-medium text-cyan-300">Tools</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Popular Tools</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <div
            key={tool.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-sm font-black text-black">
              {tool.icon}
            </div>

            <h3 className="mt-5 text-xl font-bold">{tool.title}</h3>
            <p className="mt-3 text-sm leading-6 text-gray-400">{tool.desc}</p>

            <Link
              href={tool.href}
              className="mt-6 inline-flex rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-bold text-black transition hover:bg-cyan-600"
            >
              {tool.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

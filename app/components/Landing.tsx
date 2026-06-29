export default function Landing() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">

        <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-300">
          ✨ New • AI Powered Platform
        </span>

        <h1 className="mt-8 text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
          Build Faster with
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Aurvix AI Tools
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl text-gray-400 leading-9">
          Create resumes, edit PDFs, compress images, generate QR codes,
          write AI emails and boost your productivity using one powerful platform.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold hover:bg-cyan-600 transition">
            Get Started
          </button>

          <button className="rounded-xl border border-white/20 px-8 py-4 hover:border-cyan-400 transition">
            View Tools
          </button>

        </div>

      </div>
    </section>
  );
}
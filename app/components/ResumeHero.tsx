export default function ResumeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-slate-950 to-slate-900 py-24">

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Side */}
        <div>

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-medium">
            🚀 AI Powered Resume Builder
          </span>

          <h1
            style={{
              marginTop: "35px",
              fontSize: "72px",
              lineHeight: "1.1",
              fontWeight: 900,
            }}
          >
            <span style={{ color: "#ffffff" }}>
              Build a
            </span>

            <br />

            <span
              style={{
                background:
                  "linear-gradient(90deg,#38bdf8,#60a5fa,#818cf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Professional Resume
            </span>

            <br />

            <span style={{ color: "#ffffff" }}>
              in Minutes
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-xl leading-9">
            Create ATS-friendly resumes with beautiful templates,
            live preview and one-click PDF download.
          </p>

          <div className="mt-10 flex gap-5">

            <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-bold">
              Start Building
            </button>

            <button className="border border-white/20 hover:border-cyan-400 px-8 py-4 rounded-xl">
              View Demo
            </button>

          </div>

          <div className="mt-12 flex gap-10">

            <div>
              <h2 className="text-3xl font-bold text-white">
                50K+
              </h2>

              <p className="text-gray-400">
                Users
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">
                100+
              </h2>

              <p className="text-gray-400">
                Templates
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">
                ATS
              </h2>

              <p className="text-gray-400">
                Optimized
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <div className="w-[360px] bg-white rounded-3xl shadow-2xl p-8 rotate-3 hover:rotate-0 transition-all duration-500">

            <div className="w-24 h-24 rounded-full bg-cyan-500 mx-auto"></div>

            <h2 className="text-center text-2xl font-bold mt-5 text-gray-900">
              Shivam Chaudhary
            </h2>

            <p className="text-center text-gray-500">
              Network Engineer
            </p>

            <hr className="my-6" />

            <div className="space-y-4">

              <div className="h-3 rounded bg-gray-300"></div>
              <div className="h-3 rounded bg-gray-300 w-5/6"></div>
              <div className="h-3 rounded bg-gray-300 w-4/6"></div>

            </div>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Skills
            </h3>

            <div className="flex flex-wrap gap-3 mt-4">

              <span className="px-3 py-2 rounded-lg bg-cyan-100 text-cyan-700">
                CCNA
              </span>

              <span className="px-3 py-2 rounded-lg bg-cyan-100 text-cyan-700">
                Linux
              </span>

              <span className="px-3 py-2 rounded-lg bg-cyan-100 text-cyan-700">
                Networking
              </span>

              <span className="px-3 py-2 rounded-lg bg-cyan-100 text-cyan-700">
                AWS
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
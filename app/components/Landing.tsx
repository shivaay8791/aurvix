export default function Landing() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[180px]" />
      <div className="absolute -right-40 top-40 w-[350px] h-[350px] rounded-full bg-purple-500/20 blur-[150px]" />
      <div className="absolute -left-40 bottom-0 w-[350px] h-[350px] rounded-full bg-blue-500/20 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 min-h-[85vh] flex items-center justify-center">
        <div className="text-center max-w-5xl">

          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-md">
            ✨ AI Powered Workflow Platform
          </div>

          {/* Heading */}
          <h1 className="mt-6 font-extrabold leading-tight tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <div className="bg-gradient-to-r from-cyan-400 text-4xl via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Orchestrate
            </div>

            <div className="text-white text-4xl">
              Workflows with
            </div>

  

            <div className="bg-gradient-to-r text-4xl from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Integrated Aurvix AI
            </div>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto m-6 max-w-3xl text-base sm:text-lg lg:text-xl text-gray-400 leading-8">
            Leverage one unified platform for professional AI resume
            building, advanced PDF manipulation, QR automation,
            and workflow orchestration powered by cutting-edge AI.
          </p>

          {/* Buttons */}
          <div className="m-6 flex flex-col sm:flex-row items-center justify-center gap-5">

            <button className="w-full sm:w-auto rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50">
              Integrate Now
            </button>

            <button className="w-full sm:w-auto rounded-full border border-white/20 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-white/10">
              View Integration Guide
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}
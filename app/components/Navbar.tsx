export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">
            <span className="text-white">Aur</span>
            <span className="text-cyan-400">vix</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <a href="#" className="hover:text-cyan-400 transition">Home</a>
          <a href="#" className="hover:text-cyan-400 transition">Tools</a>
          <a href="#" className="hover:text-cyan-400 transition">Features</a>
          <a href="#" className="hover:text-cyan-400 transition">Pricing</a>
          <a href="#" className="hover:text-cyan-400 transition">Contact</a>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-gray-300 hover:text-white transition">
            Sign In
          </button>

          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 rounded-xl font-semibold hover:scale-105 transition">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
}
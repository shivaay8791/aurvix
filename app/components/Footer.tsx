export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-white">Aur</span>
              <span className="text-cyan-400">vix</span>
            </h2>

            <p className="text-gray-400 mt-3 max-w-md">
              All-in-One AI Platform for Resume Builder, PDF Tools,
              QR Generator, Image Compressor and much more.
            </p>
          </div>

          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-cyan-400">Home</a>
            <a href="#" className="hover:text-cyan-400">Tools</a>
            <a href="#" className="hover:text-cyan-400">About</a>
            <a href="#" className="hover:text-cyan-400">Contact</a>
          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-500">
          © 2026 Aurvix. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
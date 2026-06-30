import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold">
              <span className="text-white">Aur</span>
              <span className="text-cyan-400">vix</span>
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
              All-in-One AI Platform for Resume Builder, PDF Tools, QR
              Generator, Image Compressor and much more.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-cyan-400">
              Home
            </Link>
            <Link href="/tools" className="hover:text-cyan-400">
              Tools
            </Link>
            <Link href="/about" className="hover:text-cyan-400">
              About
            </Link>
            <Link href="/contact" className="hover:text-cyan-400">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-500">
          2026 Aurvix. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

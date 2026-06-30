import Link from "next/link";
import AurvixLogo from "./AurvixLogo";

const navItems = [
  { label: "AI Tool Hub", href: "/tools" },
  { label: "Workflow Templates", href: "/templates" },
  { label: "Developer API", href: "/developer-api" },
  { label: "Community Showcase", href: "/community" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Go to Aurvix home">
          <AurvixLogo />
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-gray-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-cyan-400"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden text-gray-300 transition hover:text-white md:block"
          >
            Sign In
          </Link>

          <Link
            href="/login"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold transition hover:scale-[1.02]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

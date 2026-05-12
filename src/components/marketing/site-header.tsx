import Link from "next/link";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="bg-brand-blue text-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight">
          My Landlord Certificate
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-blue-200 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/book"
          className="bg-brand-green hover:bg-brand-green-dark text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
        >
          Book Now
        </Link>
      </div>
    </header>
  );
}

import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-brand-charcoal text-brand-grey text-sm">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="text-white font-semibold mb-2">My Landlord Certificate</p>
          <p className="text-xs leading-relaxed">
            Fast, compliant, trusted. UK property certificates booked online.
          </p>
        </div>
        <div>
          <p className="text-white font-semibold mb-2">Services</p>
          <ul className="space-y-1">
            {["Gas Safety (CP12)", "EPC", "EICR", "PAT Testing"].map((s) => (
              <li key={s}>
                <Link href="/services" className="hover:text-white transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-2">Company</p>
          <ul className="space-y-1">
            {[
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-4 text-center text-xs">
        © {new Date().getFullYear()} My Landlord Certificate Ltd. All rights reserved.
      </div>
    </footer>
  );
}

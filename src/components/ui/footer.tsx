import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FooterColumn {
  heading: string;
  links: { href: string; label: string }[];
}

interface FooterProps {
  className?: string;
}

const columns: FooterColumn[] = [
  {
    heading: "Services",
    links: [
      { href: "/electrical-safety", label: "Electrical Safety" },
      { href: "/gas-safety", label: "Gas Safety" },
      { href: "/fire-safety", label: "Fire Safety" },
      { href: "/epc", label: "EPC Certificates" },
      { href: "/asbestos-survey", label: "Asbestos Survey" },
      { href: "/pricing", label: "All Services & Pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/#how-it-works", label: "How It Works" },
      { href: "/blog", label: "Blog" },
      { href: "/letting-agents", label: "Letting Agents" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Pricing Guides",
    links: [
      { href: "/eicr", label: "EICR Cost Guide" },
      { href: "/gas-safety-certificate", label: "Gas Safety Cost Guide" },
      { href: "/epc", label: "EPC Cost Guide" },
      { href: "/pat-testing", label: "PAT Testing" },
      { href: "/fire-risk-assessment", label: "Fire Risk Assessment" },
      { href: "/pricing", label: "All Prices" },
      { href: "/faq", label: "FAQs" },
      { href: "/coverage-areas", label: "Coverage Areas" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { href: "tel:03301330066", label: "0330 133 0066" },
      { href: "mailto:info@mylandlordcertificate.co.uk", label: "Email Us" },
      { href: "https://wa.me/443301330066", label: "WhatsApp Us" },
      { href: "/contact", label: "Contact Form" },
      { href: "/book", label: "Book Online" },
    ],
  },
];

/**
 * Site-wide footer on a charcoal background.
 * 4-column grid (Services / Company / Resources / Contact) that collapses to 2 cols on small screens.
 */
export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn("bg-brand-charcoal text-white", className)}
      aria-label="Site footer"
    >
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-4">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Brand blurb */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="max-w-md">
            <Image
              src="/logo-white.svg"
              alt="My Landlord Certificate"
              width={64}
              height={64}
              unoptimized
              className="h-16 w-auto object-contain mb-2"
            />
            <p className="text-blue-200 text-sm mb-2">Compliant. Sorted.</p>
            <p className="text-sm text-white/50 leading-relaxed">
              NICEIC & Gas Safe accredited property compliance across London and
              the Home Counties. Fixed prices, same-week appointments, no
              hidden fees.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {year} My Landlord Certificate Ltd. All rights reserved.</p>
          <nav className="flex gap-4" aria-label="Legal links">
            <Link
              href="/privacy"
              className="hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white/70 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="hover:text-white/70 transition-colors"
            >
              Cookie Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PHONE_DISPLAY, TEL, WHATSAPP_URL, MAILTO, EMAIL, GOOGLE_REVIEW_URL } from "@/lib/constants";

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
      { href: "/legionella-risk-assessment", label: "Legionella Risk Assessment" },
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

          {/* Contact column — rendered manually for branded icons */}
          <div>
            <h3 className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href={TEL} className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors">
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
                    <path d="M2 3a1 1 0 011-1h2.5a1 1 0 011 1v1.586a1 1 0 01-.293.707l-1 1a8.001 8.001 0 004.5 4.5l1-1a1 1 0 01.707-.293H14a1 1 0 011 1V13a1 1 0 01-1 1h-1C6.268 14 2 9.732 2 4.5V3z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-[#25D366] transition-colors">
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href={MAILTO} className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors">
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M2.5 4.5h15a1 1 0 011 1v9a1 1 0 01-1 1h-15a1 1 0 01-1-1v-9a1 1 0 011-1z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.5 5.5l8.5 6 8.5-6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {EMAIL}
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/70 hover:text-white transition-colors">Contact Form</Link>
              </li>
              <li>
                <Link href="/book" className="text-sm text-white/70 hover:text-white transition-colors">Book Online</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Brand blurb */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="max-w-md">
            <div className="bg-white rounded-xl px-4 py-2 inline-block mb-4">
              <Image
                src="/header-logo.png"
                alt="My Landlord Certificate"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-blue-200 text-sm mb-2">Compliant. Sorted.</p>
            <p className="text-sm text-white/50 leading-relaxed">
              NICEIC & Gas Safe accredited property compliance across London and
              the Home Counties. Fixed prices, same-week appointments, no
              hidden fees.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61589410869490"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="My Landlord Certificate on Facebook"
                className="text-white/40 hover:text-compliance-blue transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/mylandlordcertificate"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="My Landlord Certificate on Instagram"
                className="text-white/40 hover:text-compliance-blue transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/my-landlord-certificate/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="My Landlord Certificate on LinkedIn"
                className="text-white/40 hover:text-compliance-blue transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {year} My Landlord Certificate Ltd. All rights reserved.</p>
          <nav className="flex gap-4 flex-wrap items-center" aria-label="Legal links">
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
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors"
            >
              Leave a Google review ★
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

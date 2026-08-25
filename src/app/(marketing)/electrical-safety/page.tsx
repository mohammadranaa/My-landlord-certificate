import type { Metadata } from "next";
import Link from "next/link";
import { Zap, Building2, Search, Settings, Lightbulb, Plug } from "lucide-react";
import { JsonLd } from "@/components/shared/json-ld";
import { CTABanner } from "@/components/ui/cta-banner";
import { HeroRating } from "@/components/ui/hero-rating";
import { ReviewsBlock } from "@/components/marketing/reviews-block";
import { FROM_PRICES } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Electrical Safety Certificates | EICR, PAT Testing & More",
  description:
    "NICEIC approved electrical safety certificates across London. Domestic EICR from £67.99, PAT testing from £59.99, fuse box installation from £599.99. Fixed prices, same-week appointments.",
  alternates: { canonical: "https://www.mylandlordcertificate.co.uk/electrical-safety" },
};

const services = [
  {
    href: "/eicr",
    icon: <Zap className="w-5 h-5" />,
    title: "Domestic EICR",
    price: FROM_PRICES.eicr,
    description:
      "Legally required every 5 years for all rental properties in England. NICEIC approved electricians, certificate emailed within 24 hours.",
    badge: "Required every 5 years",
  },
  {
    href: "/commercial-eicr",
    icon: <Building2 className="w-5 h-5" />,
    title: "Commercial EICR",
    price: FROM_PRICES["commercial-eicr"],
    description:
      "Full condition report for commercial premises, offices, and HMOs. Priced per consumer unit — transparent, no hidden extras.",
    badge: "Up to 8 consumer units",
  },
  {
    href: "/electrical-diagnostic",
    icon: <Search className="w-5 h-5" />,
    title: "Electrical Diagnostic",
    price: FROM_PRICES["electrical-diagnostic"],
    description:
      "Trace and resolve electrical faults, tripping circuits, and intermittent issues. Hourly rate with no call-out fees.",
    badge: "Fault finding",
  },
  {
    href: "/fuse-box-installation",
    icon: <Settings className="w-5 h-5" />,
    title: "Fuse Box Installation",
    price: FROM_PRICES["fuse-box"],
    description:
      "Upgrade to a modern consumer unit with RCD protection. Essential for older properties or failed EICRs.",
    badge: "Full installation",
  },
  {
    href: "/emergency-lights-certificate",
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Emergency Lights Certificate",
    price: FROM_PRICES.elc,
    description:
      "Annual testing and certification of emergency lighting systems. Required for HMOs, blocks of flats, and commercial properties.",
    badge: "Annual requirement",
  },
  {
    href: "/pat-testing",
    icon: <Plug className="w-5 h-5" />,
    title: "PAT Testing",
    price: FROM_PRICES.pat,
    description:
      "Portable Appliance Testing for furnished rental properties. Fast on-site testing with full written report and labels.",
    badge: "Up to 50 appliances",
  },
] as const;

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Electrical Safety", item: "https://www.mylandlordcertificate.co.uk/electrical-safety" },
  ],
};

export default function ElectricalSafetyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section className="bg-hero-blue text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/30">/</li>
              <li className="text-white">Electrical Safety</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-3">
              NICEIC &amp; NAPIT Approved · London &amp; M25
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Electrical Safety Certificates
            </h1>

            <HeroRating theme="dark" className="mb-5" />
            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl">
              From mandatory EICR inspections to PAT testing and fuse box upgrades — our
              NICEIC and NAPIT approved engineers cover every electrical compliance need for
              landlords across London. Fixed prices, no call-out fees.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/book"
                className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Book Online
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center border border-white/30 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                View All Prices
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="py-16 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">
            Electrical Safety Services
          </h2>
          <p className="text-brand-grey mb-8">
            All work carried out by NICEIC &amp; NAPIT approved electricians. Certificates emailed within 24 hours.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group bg-white rounded-2xl border border-border p-6 hover:border-compliance-blue hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-compliance-blue/10 text-compliance-blue flex items-center justify-center shrink-0">
                  {svc.icon}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-brand-grey mb-1">{svc.badge}</p>
                  <h3 className="font-semibold text-brand-charcoal text-base mb-2 group-hover:text-compliance-blue transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-brand-grey leading-relaxed">{svc.description}</p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="font-bold text-brand-charcoal text-sm">{svc.price}</span>
                  <span className="text-xs text-compliance-blue font-medium group-hover:translate-x-0.5 transition-transform">
                    Book now →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us ── */}
      <section className="py-14 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-2xl font-bold text-compliance-blue mb-2">18th Edition</p>
              <p className="text-sm text-brand-grey">
                All electricians are trained and certified to BS 7671:2018 (18th Edition Wiring
                Regulations) — the current UK standard referenced directly in every EICR report
                we issue. NICEIC &amp; NAPIT approved.
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-compliance-blue mb-2">Within 24 hours</p>
              <p className="text-sm text-brand-grey">
                EICR certificates emailed within 24 hours of the inspection — ready for your
                tenants immediately.
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-compliance-blue mb-2">Fixed price</p>
              <p className="text-sm text-brand-grey">
                No call-out fees, no hidden extras. The price you see is the price you pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ReviewsBlock />

      {/* ── CTA ── */}
      <section className="py-14 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTABanner
            heading="Book your electrical inspection today"
            subheading="Same-week appointments available across all 33 London boroughs. NICEIC & NAPIT approved engineers, fixed prices."
            primaryHref="/book"
            primaryLabel="Book Online"
            secondaryHref="/pricing"
            secondaryLabel="View All Prices"
            showTrustBadges
            variant="blue"
          />
        </div>
      </section>
    </>
  );
}

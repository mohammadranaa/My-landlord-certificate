import type { Metadata } from "next";
import Link from "next/link";
import { Bell, ClipboardList, Flame, Shield, Siren } from "lucide-react";
import { JsonLd } from "@/components/shared/json-ld";
import { CTABanner } from "@/components/ui/cta-banner";
import { FROM_PRICES } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Fire Safety Certificates & Assessments | My Landlord Certificate",
  description:
    "Fire safety certificates from £54.99, fire risk assessments from £74.99, fire alarm installation from £209.99/alarm. Accredited fire safety engineers across London.",
  alternates: { canonical: "https://www.mylandlordcertificate.co.uk/fire-safety" },
};

const services = [
  {
    href: "/fire-safety-certificate",
    icon: <Bell className="w-5 h-5" />,
    title: "Fire Safety Certificate",
    price: FROM_PRICES["fire-safety-cert"],
    description:
      "Testing and certification of smoke and heat detectors in residential properties. Required for HMOs and recommended for all rentals.",
    badge: "Annual recommendation",
  },
  {
    href: "/fire-risk-assessment",
    icon: <ClipboardList className="w-5 h-5" />,
    title: "Fire Risk Assessment",
    price: FROM_PRICES["fra-residential"],
    description:
      "Legally required under the Regulatory Reform (Fire Safety) Order 2005 for HMOs, blocks of flats, and commercial properties.",
    badge: "Legal requirement for HMOs",
  },
  {
    href: "/fire-alarm-installation",
    icon: <Siren className="w-5 h-5" />,
    title: "Fire Alarm Installation",
    price: FROM_PRICES["fire-alarm-installation"],
    description:
      "Supply and installation of Grade D mains-wired interlinked smoke and heat alarms. Meets BS 5839-6 requirements.",
    badge: "Per alarm installed",
  },
  {
    href: "/fire-door-certificate",
    icon: <Shield className="w-5 h-5" />,
    title: "Fire Door Certificate",
    price: FROM_PRICES["fire-door-cert"],
    description:
      "Inspection and certification of fire doors in HMOs and blocks of flats. Checks gap tolerance, self-closing, and intumescent strips.",
    badge: "HMO & flat requirement",
  },
  {
    href: "/fire-extinguisher-testing",
    icon: <Flame className="w-5 h-5" />,
    title: "Fire Extinguisher Testing",
    price: FROM_PRICES["fire-extinguisher"],
    description:
      "Annual service and inspection of portable fire extinguishers to BS 5306-3. Required for commercial properties and HMOs.",
    badge: "Annual service",
  },
] as const;

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Fire Safety", item: "https://www.mylandlordcertificate.co.uk/fire-safety" },
  ],
};

export default function FireSafetyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section className="bg-compliance-blue text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/30">/</li>
              <li className="text-white">Fire Safety</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-3">
              Accredited Fire Safety Engineers
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Fire Safety Certificates &amp; Assessments
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl">
              From fire risk assessments and alarm installation to fire door inspections and
              extinguisher servicing. We help landlords and HMO operators meet their obligations
              under the Regulatory Reform (Fire Safety) Order 2005.
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

      {/* ── Legal notice ── */}
      <div className="bg-brand-amber/10 border-b border-brand-amber/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-sm text-brand-charcoal">
            <span className="font-semibold text-brand-amber">Legal requirement:</span>{" "}
            The Regulatory Reform (Fire Safety) Order 2005 requires a written fire risk
            assessment for all HMOs, blocks of flats, and commercial properties. Private
            landlords must also install working smoke alarms under the Smoke and Carbon Monoxide
            Alarm Regulations 2022.
          </p>
        </div>
      </div>

      {/* ── Services grid ── */}
      <section className="py-16 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">Fire Safety Services</h2>
          <p className="text-brand-grey mb-8">
            Accredited engineers. Reports and certificates issued same day.
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
              <p className="text-3xl font-bold text-compliance-blue mb-2">Accredited</p>
              <p className="text-sm text-brand-grey">
                Fire risk assessors and engineers hold recognised qualifications under the
                Institute of Fire Safety Managers (IFSM) framework.
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-compliance-blue mb-2">Same day</p>
              <p className="text-sm text-brand-grey">
                Fire risk assessment reports and safety certificates issued the same day.
                No weeks-long wait.
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-compliance-blue mb-2">Fixed price</p>
              <p className="text-sm text-brand-grey">
                Transparent pricing per property size or per appliance — you know the cost
                before we arrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTABanner
            heading="Book your fire safety inspection today"
            subheading="Same-week appointments across London. Accredited fire safety engineers, written reports same day."
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

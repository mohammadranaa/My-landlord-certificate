import type { Metadata } from "next";
import Link from "next/link";
import { Home, Building2 } from "lucide-react";
import { JsonLd } from "@/components/shared/json-ld";
import { CTABanner } from "@/components/ui/cta-banner";
import { FROM_PRICES } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Energy Performance Certificates (EPC) | Domestic & Commercial | My Landlord Certificate",
  description:
    "Domestic EPC from £89.99, commercial EPC from £249.99. Accredited DEA assessors across London. Required by law before letting or selling — 10-year validity.",
  alternates: { canonical: "https://mylandlordcertificate.co.uk/epc" },
};

const services = [
  {
    href: "/epc",
    icon: <Home className="w-5 h-5" />,
    title: "Domestic EPC",
    price: FROM_PRICES.epc,
    description:
      "Required by law before renting or selling a residential property. Assesses energy efficiency and provides an A–G rating. Valid for 10 years.",
    badge: "10-year validity",
  },
  {
    href: "/commercial-epc",
    icon: <Building2 className="w-5 h-5" />,
    title: "Commercial EPC",
    price: FROM_PRICES["commercial-epc"],
    description:
      "Mandatory for commercial properties before sale, letting, or major renovation. Priced by floor area. Includes recommendation report.",
    badge: "By floor area",
  },
] as const;

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "EPC", item: "https://mylandlordcertificate.co.uk/epc" },
  ],
};

export default function EPCPage() {
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
              <li className="text-white">EPC</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-3">
              Accredited DEA Assessors
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Energy Performance Certificates
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl">
              Domestic and commercial EPCs are required by law before renting or selling any
              property in the UK. Our accredited Domestic Energy Assessors (DEAs) cover all of
              London, with certificates registered on the national EPC register within 24 hours.
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
            All landlords must have a valid EPC with a minimum E rating before letting a
            property under the Minimum Energy Efficiency Standards (MEES). Properties rated
            F or G cannot legally be let on a new tenancy.
          </p>
        </div>
      </div>

      {/* ── Services grid ── */}
      <section className="py-16 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">EPC Services</h2>
          <p className="text-brand-grey mb-8">
            Accredited DEA assessors. Certificates registered on the national EPC register within 24 hours.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
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

      {/* ── MEES explainer ── */}
      <section className="py-14 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
              What is MEES and why does it matter?
            </h2>
            <p className="text-brand-grey leading-relaxed mb-4">
              The Minimum Energy Efficiency Standards (MEES) require all privately rented
              properties in England and Wales to have an EPC rating of E or above. Letting a
              property rated F or G on a new tenancy is unlawful and can result in a fine of
              up to £5,000.
            </p>
            <p className="text-brand-grey leading-relaxed mb-6">
              The government has proposed raising the minimum standard to C by 2028 for new
              tenancies. If your property is currently rated D or E, it is worth acting now
              — an EPC assessment identifies exactly which improvements will make the biggest
              difference to your rating.
            </p>
            <Link
              href="/epc-cost"
              className="inline-flex items-center text-sm font-medium text-compliance-blue hover:underline"
            >
              Learn more about domestic EPC →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why us ── */}
      <section className="py-14 bg-warm-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-compliance-blue mb-2">Accredited</p>
              <p className="text-sm text-brand-grey">
                All our assessors are accredited Domestic Energy Assessors (DEA) registered
                with Elmhurst Energy or STROMA.
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-compliance-blue mb-2">24 hours</p>
              <p className="text-sm text-brand-grey">
                EPC registered on the national EPC register within 24 hours of assessment.
                Your certificate number immediately.
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-compliance-blue mb-2">10 years</p>
              <p className="text-sm text-brand-grey">
                A valid EPC lasts 10 years. One assessment covers you for an entire decade
                of lettings — no annual renewal needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTABanner
            heading="Book your EPC assessment today"
            subheading="Same-week appointments across London. Accredited DEA assessors, certificate registered within 24 hours."
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

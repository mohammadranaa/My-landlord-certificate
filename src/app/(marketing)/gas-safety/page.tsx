import type { Metadata } from "next";
import Link from "next/link";
import { Flame, Building2, Thermometer } from "lucide-react";
import { JsonLd } from "@/components/shared/json-ld";
import { CTABanner } from "@/components/ui/cta-banner";
import { FROM_PRICES } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Gas Safety Certificates | CP12, CP42 & Boiler Installation",
  description:
    "Gas Safe Registered engineers for domestic CP12 from £49.99, commercial CP42 from £159.99, and boiler installation from £2,499. Annual gas safety certificates for landlords across London.",
  alternates: { canonical: "https://www.mylandlordcertificate.co.uk/gas-safety" },
};

const services = [
  {
    href: "/gas-safety-certificate",
    icon: <Flame className="w-5 h-5" />,
    title: "Gas Safety Certificate (CP12)",
    price: FROM_PRICES["gas-safety-cp12"],
    description:
      "Legally required every 12 months for rental properties with gas appliances. Gas Safe Registered engineers, certificate emailed within 24 hours.",
    badge: "Annual legal requirement",
  },
  {
    href: "/commercial-gas-safety-certificate",
    icon: <Building2 className="w-5 h-5" />,
    title: "Commercial Gas Safety (CP42)",
    price: FROM_PRICES["gas-safety-cp42"],
    description:
      "Inspection and certification for commercial gas installations, restaurants, and multi-appliance premises. Priced per appliance.",
    badge: "Up to 8 appliances",
  },
  {
    href: "/boiler-installation",
    icon: <Thermometer className="w-5 h-5" />,
    title: "Boiler Installation",
    price: FROM_PRICES["boiler-installation"],
    description:
      "Full boiler replacement and installation by Gas Safe Registered engineers. Includes commissioning, flue check, and first-year gas safety certificate.",
    badge: "Supply & install",
  },
] as const;

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Gas Safety", item: "https://www.mylandlordcertificate.co.uk/gas-safety" },
  ],
};

export default function GasSafetyPage() {
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
              <li className="text-white">Gas Safety</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-3">
              Gas Safe Registered Engineers · London &amp; M25
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Gas Safety Certificates &amp; Services
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl">
              Annual gas safety inspections (CP12), commercial gas certification (CP42), and
              full boiler installations. All work carried out by Gas Safe Registered engineers —
              the legal requirement for working on gas appliances in the UK.
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
            Landlords must provide tenants with a valid Gas Safety Certificate (CP12) before they
            move in and renew it every 12 months under the Gas Safety (Installation and Use)
            Regulations 1998.
          </p>
        </div>
      </div>

      {/* ── Services grid ── */}
      <section className="py-16 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">Gas Safety Services</h2>
          <p className="text-brand-grey mb-8">
            Gas Safe Registered engineers. Certificates emailed within 24 hours.
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
              <p className="text-3xl font-bold text-compliance-blue mb-2">Gas Safe ID</p>
              <p className="text-sm text-brand-grey">
                Every engineer carries a Gas Safe Register ID card. By law, you can — and
                should — ask to see it before any gas work begins. Our engineers expect this
                and encourage it. Verify any engineer at gassaferegister.co.uk using their
                licence number.
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-compliance-blue mb-2">Within 24 hours</p>
              <p className="text-sm text-brand-grey">
                CP12 certificates emailed within 24 hours of the inspection. Your tenants can
                see their copy immediately.
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-compliance-blue mb-2">Fixed price</p>
              <p className="text-sm text-brand-grey">
                No call-out charge, no surprises. The price is agreed upfront — per appliance,
                not per hour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTABanner
            heading="Book your gas safety inspection today"
            subheading="Same-week appointments across London. Gas Safe Registered engineers, fixed prices, no call-out fees."
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

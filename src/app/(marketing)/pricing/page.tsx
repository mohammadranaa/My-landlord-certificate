import type { Metadata } from "next";
import { LazyStickyMobileCTA as StickyMobileCTA } from "@/components/lazy";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { PriceTable } from "@/components/ui/price-table";
import { cn } from "@/lib/utils";
import {
  ADDITIONAL_CHARGES,
  ASBESTOS_SURVEY_TABLE,
  BOILER_INSTALLATION_FROM,
  COMMERCIAL_EICR_EXTRA_CIRCUIT_CHARGE,
  COMMERCIAL_EICR_TABLE,
  COMMERCIAL_EPC_TABLE,
  DOMESTIC_EICR_TABLE,
  DOMESTIC_EPC_TABLE,
  ELC_TABLE,
  ELECTRICAL_DIAGNOSTIC_HOURLY_RATE,
  FIRE_ALARM_INSTALLATION_PER_ALARM,
  FIRE_ALARM_PANELS_TABLE,
  FIRE_DOOR_CERT_PRICE,
  FIRE_EXTINGUISHER_TABLE,
  FIRE_SAFETY_CERT_TABLE,
  FRA_COMMERCIAL_TABLE,
  FRA_RESIDENTIAL_TABLE,
  FROM_PRICES,
  FUSE_BOX_TABLE,
  GAS_SAFETY_CP12_TABLE,
  GAS_SAFETY_CP42_TABLE,
  PAT_TABLE,
} from "@/lib/pricing";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Pricing — All Landlord Compliance Certificates | My Landlord Certificate",
  description:
    "Full pricing for EICR, Gas Safety Certificate, EPC, Fire Risk Assessment, PAT Testing, ELC, Asbestos Survey and more. Fixed prices, no hidden fees. From £50.",
  alternates: { canonical: "https://www.mylandlordcertificate.co.uk/pricing" },
  openGraph: {
    title: "Pricing — All Landlord Compliance Certificates",
    description:
      "Transparent, fixed pricing for every landlord compliance certificate. EICR from £67.99, Gas Safety from £50, EPC from £89.99 and more. No hidden fees.",
    url: "https://www.mylandlordcertificate.co.uk/pricing",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.mylandlordcertificate.co.uk",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Pricing",
      item: "https://www.mylandlordcertificate.co.uk/pricing",
    },
  ],
};

// ── Quick-nav sections ────────────────────────────────────────────────────────

const sections = [
  { id: "electrical", label: "Electrical" },
  { id: "gas", label: "Gas" },
  { id: "energy", label: "EPC" },
  { id: "fire", label: "Fire Safety" },
  { id: "other", label: "Other" },
  { id: "bundles", label: "Bundles" },
  { id: "additional", label: "Additional" },
];

// ── "From" prices summary cards ───────────────────────────────────────────────

const summaryServices = [
  { label: "EICR", from: FROM_PRICES["eicr"], href: "/eicr" },
  { label: "Gas Safety (CP12)", from: FROM_PRICES["gas-safety-cp12"], href: "/gas-safety-certificate" },
  { label: "EPC", from: FROM_PRICES["epc"], href: "/epc" },
  { label: "Fire Risk Assessment", from: FROM_PRICES["fra-residential"], href: "/fire-risk-assessment" },
  { label: "PAT Testing", from: FROM_PRICES["pat"], href: "/pat-testing" },
  { label: "Fire Safety Cert", from: FROM_PRICES["fire-safety-cert"], href: "/pricing#fire" },
  { label: "ELC", from: FROM_PRICES["elc"], href: "/pricing#electrical" },
  { label: "Asbestos Survey", from: FROM_PRICES["asbestos-survey"], href: "/pricing#other" },
  { label: "Commercial EICR", from: FROM_PRICES["commercial-eicr"], href: "/commercial-eicr" },
  { label: "Commercial EPC", from: FROM_PRICES["commercial-epc"], href: "/commercial-epc" },
  { label: "Commercial Gas (CP42)", from: FROM_PRICES["gas-safety-cp42"], href: "/commercial-gas-safety-certificate" },
  { label: "Boiler Installation", from: FROM_PRICES["boiler-installation"], href: "/pricing#gas" },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section aria-labelledby="pricing-heading" className="bg-compliance-blue text-white">
        <Container className="py-16 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-blue-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li className="text-white font-medium">Pricing</li>
            </ol>
          </nav>

          <Heading level={1} id="pricing-heading" inverted className="mb-4">
            Transparent, fixed pricing
          </Heading>
          <p className="text-blue-100 text-lg max-w-2xl">
            Every price you see is the price you pay. No call-out charges, no
            hidden fees, no surprises. All certificates emailed within 24 hours.
          </p>
        </Container>
      </section>

      {/* ── Quick-nav ── */}
      <div className="sticky top-0 z-10 bg-white border-b border-border shadow-sm">
        <Container>
          <nav aria-label="Pricing sections" className="overflow-x-auto">
            <ol className="flex gap-1 py-3 text-sm font-medium whitespace-nowrap">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="px-3 py-1.5 rounded-md text-brand-grey hover:text-compliance-blue hover:bg-compliance-blue/5 transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </Container>
      </div>

      <Container className="py-16 space-y-24">

        {/* ── "From" prices summary ── */}
        <section aria-labelledby="summary-heading">
          <Heading level={2} id="summary-heading" className="mb-2">
            Entry prices at a glance
          </Heading>
          <p className="text-brand-grey mb-8">
            Click any service to jump to the full price breakdown.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {summaryServices.map((svc) => (
              <Link
                key={svc.label}
                href={svc.href}
                className="group flex flex-col gap-1 rounded-xl border border-border bg-white p-4 hover:border-compliance-blue hover:shadow-sm transition-all"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-grey group-hover:text-compliance-blue transition-colors">
                  {svc.label}
                </span>
                <span className="text-lg font-bold text-brand-charcoal">
                  {svc.from}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ══ ELECTRICAL ══════════════════════════════════════════════════════ */}
        <section id="electrical" aria-labelledby="electrical-heading">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-compliance-blue/10 text-compliance-blue flex items-center justify-center text-lg font-bold shrink-0">
              ⚡
            </div>
            <Heading level={2} id="electrical-heading">Electrical</Heading>
          </div>

          <div className="space-y-8">
            {/* Domestic EICR */}
            <div>
              <div className="flex items-baseline justify-between mb-3 flex-wrap gap-2">
                <h3 className="text-base font-semibold text-brand-charcoal">
                  Domestic EICR
                </h3>
                <div className="flex items-center gap-4">
                  <Link href="/eicr-cost" className="text-sm text-brand-grey hover:text-compliance-blue hover:underline">
                    Cost guide →
                  </Link>
                  <Link href="/eicr" className="text-sm text-compliance-blue hover:underline">
                    Service page →
                  </Link>
                </div>
              </div>
              <PriceTable
                title="Domestic EICR — by property size"
                rows={DOMESTIC_EICR_TABLE}
                highlightCheapest
              />
            </div>

            {/* Commercial EICR */}
            <div>
              <div className="flex items-baseline justify-between mb-3 flex-wrap gap-2">
                <h3 className="text-base font-semibold text-brand-charcoal">
                  Commercial EICR
                </h3>
                <Link href="/commercial-eicr" className="text-sm text-compliance-blue hover:underline">
                  Service page →
                </Link>
              </div>
              <p className="text-sm text-brand-grey mb-3">
                Each unit covers up to 10 circuits. Additional circuits are charged at{" "}
                <strong className="text-brand-charcoal">£{COMMERCIAL_EICR_EXTRA_CIRCUIT_CHARGE}</strong> each.
              </p>
              <PriceTable
                title="Commercial EICR — by consumer units"
                rows={COMMERCIAL_EICR_TABLE}
                highlightCheapest
              />
              <p className="mt-3 text-sm text-brand-grey">
                Commercial EICR projects over £500?{" "}
                <a href="mailto:info@mylandlordcertificate.co.uk" className="text-compliance-blue hover:underline font-medium">
                  Email us
                </a>{" "}
                for a custom quote.
              </p>
            </div>

            {/* Electrical Diagnostic */}
            <div>
              <h3 className="text-base font-semibold text-brand-charcoal mb-3">
                Electrical Diagnostic
              </h3>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="bg-compliance-blue px-5 py-4">
                  <p className="text-base font-semibold text-white">Electrical Diagnostic</p>
                </div>
                <div className="bg-warm-white px-5 py-4 flex items-center justify-between">
                  <span className="text-sm text-brand-charcoal">Hourly rate</span>
                  <span className="text-base font-bold text-brand-charcoal">
                    £{ELECTRICAL_DIAGNOSTIC_HOURLY_RATE}/hr
                  </span>
                </div>
              </div>
            </div>

            {/* Fuse Box Installation */}
            <div>
              <h3 className="text-base font-semibold text-brand-charcoal mb-3">
                Fuse Box (Consumer Unit) Installation
              </h3>
              <PriceTable
                title="Fuse Box Installation — by unit type"
                rows={FUSE_BOX_TABLE}
                highlightCheapest
              />
            </div>

            {/* ELC */}
            <div>
              <h3 className="text-base font-semibold text-brand-charcoal mb-3">
                Emergency Lights Certificate (ELC)
              </h3>
              <PriceTable
                title="Emergency Lights Certificate — by light count"
                rows={ELC_TABLE}
                highlightCheapest
              />
            </div>

            {/* PAT Testing */}
            <div>
              <div className="flex items-baseline justify-between mb-3 flex-wrap gap-2">
                <h3 className="text-base font-semibold text-brand-charcoal">
                  PAT Testing
                </h3>
                <Link href="/pat-testing" className="text-sm text-compliance-blue hover:underline">
                  Service page →
                </Link>
              </div>
              <PriceTable
                title="PAT Testing — by appliance count"
                rows={PAT_TABLE}
                highlightCheapest
              />
            </div>
          </div>
        </section>

        {/* ══ GAS ══════════════════════════════════════════════════════════ */}
        <section id="gas" aria-labelledby="gas-heading">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-compliance-blue/10 text-compliance-blue flex items-center justify-center text-lg font-bold shrink-0">
              🔥
            </div>
            <Heading level={2} id="gas-heading">Gas</Heading>
          </div>

          <div className="space-y-8">
            {/* CP12 */}
            <div>
              <div className="flex items-baseline justify-between mb-3 flex-wrap gap-2">
                <h3 className="text-base font-semibold text-brand-charcoal">
                  Gas Safety Certificate (CP12 — Domestic)
                </h3>
                <div className="flex items-center gap-4">
                  <Link href="/gas-safety-certificate-cost" className="text-sm text-brand-grey hover:text-compliance-blue hover:underline">
                    Cost guide →
                  </Link>
                  <Link href="/gas-safety-certificate" className="text-sm text-compliance-blue hover:underline">
                    Service page →
                  </Link>
                </div>
              </div>
              <PriceTable
                title="Gas Safety Certificate CP12 — domestic"
                rows={GAS_SAFETY_CP12_TABLE}
              />
            </div>

            {/* CP42 */}
            <div>
              <div className="flex items-baseline justify-between mb-3 flex-wrap gap-2">
                <h3 className="text-base font-semibold text-brand-charcoal">
                  Commercial Gas Safety (CP42)
                </h3>
                <Link href="/commercial-gas-safety-certificate" className="text-sm text-compliance-blue hover:underline">
                  Service page →
                </Link>
              </div>
              <PriceTable
                title="Gas Safety Certificate CP42 — commercial"
                rows={GAS_SAFETY_CP42_TABLE}
                highlightCheapest
              />
              <p className="mt-3 text-sm text-brand-grey">
                Commercial gas projects over £500?{" "}
                <a href="mailto:info@mylandlordcertificate.co.uk" className="text-compliance-blue hover:underline font-medium">
                  Email us
                </a>{" "}
                for a custom quote.
              </p>
            </div>

            {/* Boiler Installation */}
            <div>
              <h3 className="text-base font-semibold text-brand-charcoal mb-3">
                Boiler Installation
              </h3>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="bg-compliance-blue px-5 py-4">
                  <p className="text-base font-semibold text-white">Boiler Installation</p>
                </div>
                <div className="bg-warm-white px-5 py-4 flex items-center justify-between">
                  <span className="text-sm text-brand-charcoal">Installation (price varies by make/model)</span>
                  <span className="text-base font-bold text-brand-charcoal">
                    from £{BOILER_INSTALLATION_FROM.toLocaleString()}
                  </span>
                </div>
              </div>
              <p className="mt-3 text-sm text-brand-grey">
                Boiler installation pricing depends on make, model and complexity.{" "}
                <a href="mailto:info@mylandlordcertificate.co.uk" className="text-compliance-blue hover:underline font-medium">
                  Email us
                </a>{" "}
                for a bespoke quote.
              </p>
            </div>
          </div>
        </section>

        {/* ══ EPC ══════════════════════════════════════════════════════════ */}
        <section id="energy" aria-labelledby="energy-heading">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-compliance-blue/10 text-compliance-blue flex items-center justify-center text-lg font-bold shrink-0">
              🌿
            </div>
            <Heading level={2} id="energy-heading">Energy Performance Certificate (EPC)</Heading>
          </div>

          <div className="space-y-8">
            {/* Domestic EPC */}
            <div>
              <div className="flex items-baseline justify-between mb-3 flex-wrap gap-2">
                <h3 className="text-base font-semibold text-brand-charcoal">
                  Domestic EPC
                </h3>
                <div className="flex items-center gap-4">
                  <Link href="/epc-cost" className="text-sm text-brand-grey hover:text-compliance-blue hover:underline">
                    Cost guide →
                  </Link>
                  <Link href="/epc" className="text-sm text-compliance-blue hover:underline">
                    Service page →
                  </Link>
                </div>
              </div>
              <PriceTable
                title="Domestic EPC — by property size"
                rows={DOMESTIC_EPC_TABLE}
                highlightCheapest
              />
            </div>

            {/* Commercial EPC */}
            <div>
              <div className="flex items-baseline justify-between mb-3 flex-wrap gap-2">
                <h3 className="text-base font-semibold text-brand-charcoal">
                  Commercial EPC
                </h3>
                <Link href="/commercial-epc" className="text-sm text-compliance-blue hover:underline">
                  Service page →
                </Link>
              </div>
              <PriceTable
                title="Commercial EPC — by floor area"
                rows={COMMERCIAL_EPC_TABLE}
                highlightCheapest
              />
              <p className="mt-3 text-sm text-brand-grey">
                Commercial EPC for properties over 750m²?{" "}
                <a href="mailto:info@mylandlordcertificate.co.uk" className="text-compliance-blue hover:underline font-medium">
                  Email us
                </a>{" "}
                for a custom quote.
              </p>
            </div>
          </div>
        </section>

        {/* ══ FIRE SAFETY ══════════════════════════════════════════════════ */}
        <section id="fire" aria-labelledby="fire-heading">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-compliance-blue/10 text-compliance-blue flex items-center justify-center text-lg font-bold shrink-0">
              🛡
            </div>
            <Heading level={2} id="fire-heading">Fire Safety</Heading>
          </div>

          <div className="space-y-8">
            {/* FRA Residential */}
            <div>
              <div className="flex items-baseline justify-between mb-3 flex-wrap gap-2">
                <h3 className="text-base font-semibold text-brand-charcoal">
                  Fire Risk Assessment — Residential
                </h3>
                <Link href="/fire-risk-assessment" className="text-sm text-compliance-blue hover:underline">
                  Service page →
                </Link>
              </div>
              <PriceTable
                title="Residential Fire Risk Assessment"
                rows={FRA_RESIDENTIAL_TABLE}
                highlightCheapest
              />
            </div>

            {/* FRA Commercial */}
            <div>
              <div className="flex items-baseline justify-between mb-3 flex-wrap gap-2">
                <h3 className="text-base font-semibold text-brand-charcoal">
                  Fire Risk Assessment — Commercial
                </h3>
                <Link href="/commercial-fire-risk-assessment" className="text-sm text-compliance-blue hover:underline">
                  Service page →
                </Link>
              </div>
              <PriceTable
                title="Commercial Fire Risk Assessment"
                rows={FRA_COMMERCIAL_TABLE}
                highlightCheapest
              />
              <p className="mt-3 text-sm text-brand-grey">
                Commercial FRA over £500?{" "}
                <a href="mailto:info@mylandlordcertificate.co.uk" className="text-compliance-blue hover:underline font-medium">
                  Email us
                </a>{" "}
                for a custom quote.
              </p>
            </div>

            {/* Fire Safety Certificate */}
            <div>
              <h3 className="text-base font-semibold text-brand-charcoal mb-3">
                Fire Safety Certificate
              </h3>
              <PriceTable
                title="Fire Safety Certificate — by alarm count"
                rows={FIRE_SAFETY_CERT_TABLE}
                highlightCheapest
              />
            </div>

            {/* Fire Alarm Panels */}
            <div>
              <h3 className="text-base font-semibold text-brand-charcoal mb-3">
                Fire Alarm Panels
              </h3>
              <PriceTable
                title="Fire Alarm Panels — by alarm count"
                rows={FIRE_ALARM_PANELS_TABLE}
                highlightCheapest
              />
            </div>

            {/* Fire Alarm Installation */}
            <div>
              <h3 className="text-base font-semibold text-brand-charcoal mb-3">
                Fire Alarm Installation
              </h3>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="bg-compliance-blue px-5 py-4">
                  <p className="text-base font-semibold text-white">Fire Alarm Installation</p>
                </div>
                <div className="bg-warm-white px-5 py-4 flex items-center justify-between">
                  <span className="text-sm text-brand-charcoal">Mains Powered — per alarm</span>
                  <span className="text-base font-bold text-brand-charcoal">
                    £{FIRE_ALARM_INSTALLATION_PER_ALARM}/alarm
                  </span>
                </div>
              </div>
            </div>

            {/* Fire Door Certificate */}
            <div>
              <h3 className="text-base font-semibold text-brand-charcoal mb-3">
                Fire Door Certificate
              </h3>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="bg-compliance-blue px-5 py-4">
                  <p className="text-base font-semibold text-white">Fire Door Certificate</p>
                </div>
                <div className="bg-warm-white px-5 py-4 flex items-center justify-between">
                  <span className="text-sm text-brand-charcoal">Per certificate</span>
                  <span className="text-base font-bold text-brand-charcoal">
                    £{FIRE_DOOR_CERT_PRICE}
                  </span>
                </div>
              </div>
            </div>

            {/* Fire Extinguisher Testing */}
            <div>
              <h3 className="text-base font-semibold text-brand-charcoal mb-3">
                Fire Extinguisher Testing
              </h3>
              <PriceTable
                title="Fire Extinguisher Testing — by extinguisher count"
                rows={FIRE_EXTINGUISHER_TABLE}
                highlightCheapest
              />
            </div>
          </div>
        </section>

        {/* ══ OTHER ════════════════════════════════════════════════════════ */}
        <section id="other" aria-labelledby="other-heading">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-compliance-blue/10 text-compliance-blue flex items-center justify-center text-lg font-bold shrink-0">
              📋
            </div>
            <Heading level={2} id="other-heading">Other Services</Heading>
          </div>

          <div className="space-y-8">
            {/* Asbestos Survey */}
            <div>
              <h3 className="text-base font-semibold text-brand-charcoal mb-3">
                Asbestos Survey (Management Survey)
              </h3>
              <PriceTable
                title="Asbestos Survey — by sample count"
                rows={ASBESTOS_SURVEY_TABLE}
                highlightCheapest
              />
            </div>
          </div>
        </section>

        {/* ══ BUNDLES ══════════════════════════════════════════════════════ */}
        <section id="bundles" aria-labelledby="bundles-heading">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-compliance-blue/10 text-compliance-blue flex items-center justify-center text-lg font-bold shrink-0">
              📦
            </div>
            <Heading level={2} id="bundles-heading">Bundles — save when you combine</Heading>
          </div>

          <div className="overflow-hidden rounded-xl border border-border">
            <div className="bg-compliance-blue px-5 py-4">
              <p className="text-base font-semibold text-white">Landlord Certificate Bundles</p>
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr className="hidden md:table-row border-b border-border bg-compliance-blue/5">
                  <th scope="col" className="px-5 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-brand-grey">Bundle</th>
                  <th scope="col" className="px-5 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-brand-grey">Includes</th>
                  <th scope="col" className="px-5 py-2.5 text-right text-xs font-semibold uppercase tracking-wider text-brand-grey">You save</th>
                  <th scope="col" className="px-5 py-2.5 text-right text-xs font-semibold uppercase tracking-wider text-brand-grey">Bundle price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Essential Bundle",
                    includes: "EICR (1–3 bed) + Gas Safety CP12 (1 appliance)",
                    saving: "£14.99",
                    price: "£130",
                  },
                  {
                    name: "Full Compliance Bundle",
                    includes: "EICR (1–3 bed) + Gas Safety CP12 + EPC (1–3 bed)",
                    saving: "£24.98",
                    price: "£230",
                    popular: true,
                  },
                  {
                    name: "HMO Complete Bundle",
                    includes: "EICR (4 bed) + Gas Safety CP12 (2 apps) + EPC (5 bed) + FRA (4 bed)",
                    saving: "£44.97",
                    price: "£450",
                  },
                ].map((b, i) => (
                  <tr key={b.name} className={`block border-b border-border last:border-0 md:table-row ${i % 2 === 0 ? "bg-warm-white" : "bg-white"}`}>
                    <td className="block px-5 pt-4 pb-1 md:table-cell md:py-4">
                      <span className="flex flex-wrap items-center gap-2 text-sm font-semibold text-brand-charcoal">
                        {b.name}
                        {b.popular && (
                          <span className="inline-flex items-center rounded-full bg-compliance-blue/10 border border-compliance-blue/30 px-2 py-0.5 text-xs font-medium text-compliance-blue">
                            Most popular
                          </span>
                        )}
                      </span>
                    </td>
                    <td className="block px-5 pb-1 pt-0.5 md:table-cell md:py-4 text-sm text-brand-charcoal/70">{b.includes}</td>
                    <td className="block px-5 pb-1 pt-0.5 md:table-cell md:py-4 md:text-right">
                      <span className="inline-flex items-center rounded-full bg-action-green/15 border border-action-green/30 px-2.5 py-0.5 text-sm font-semibold text-brand-charcoal">
                        save {b.saving}
                      </span>
                    </td>
                    <td className="block px-5 pb-4 pt-0.5 md:table-cell md:py-4 md:text-right">
                      <span className="text-base font-bold text-brand-charcoal">{b.price}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-center">
            <Link href="/landlord-certificates-bundle" className="text-sm text-compliance-blue hover:underline font-medium">
              See full bundle details and book →
            </Link>
          </div>
        </section>

        {/* ══ ADDITIONAL CHARGES ═══════════════════════════════════════════ */}
        <section id="additional" aria-labelledby="additional-heading">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-compliance-blue/10 text-compliance-blue flex items-center justify-center text-lg font-bold shrink-0">
              +
            </div>
            <Heading level={2} id="additional-heading">Additional charges</Heading>
          </div>

          <div className="overflow-hidden rounded-xl border border-border">
            <div className="bg-compliance-blue px-5 py-4">
              <p className="text-base font-semibold text-white">Site-specific additional charges</p>
            </div>
            <div className="divide-y divide-border">
              <div className="flex items-center justify-between px-5 py-4 bg-warm-white">
                <div>
                  <p className="text-sm font-medium text-brand-charcoal">Parking charge</p>
                  <p className="text-xs text-brand-grey">Applied where no free on-site parking is available</p>
                </div>
                <span className="text-base font-bold text-brand-charcoal ml-4">£{ADDITIONAL_CHARGES.parking}</span>
              </div>
              <div className="flex items-center justify-between px-5 py-4 bg-white">
                <div>
                  <p className="text-sm font-medium text-brand-charcoal">Congestion Charge Zone</p>
                  <p className="text-xs text-brand-grey">Applied for properties within the London Congestion Charge Zone</p>
                </div>
                <span className="text-base font-bold text-brand-charcoal ml-4">£{ADDITIONAL_CHARGES.congestionZone}</span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm text-brand-grey">
            These are the only additional charges we apply. All other pricing is fixed and inclusive.
          </p>
        </section>

        {/* ── Commercial CTA ── */}
        <section
          aria-labelledby="commercial-cta-heading"
          className="rounded-2xl bg-warm-white border border-border px-8 py-10"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <Heading level={2} id="commercial-cta-heading" className="mb-2">
                Commercial work over £500?
              </Heading>
              <p className="text-brand-grey max-w-lg">
                Large commercial EICRs, multi-building fire risk assessments,
                CP42 gas safety for complex kitchens — we can quote any job.
                Call us and we&apos;ll put together a fixed price within 24 hours.
              </p>
            </div>
            <a
              href="mailto:info@mylandlordcertificate.co.uk"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "shrink-0")}
            >
              Email us
            </a>
          </div>
        </section>

        {/* ── Booking CTA ── */}
        <section
          aria-labelledby="book-cta-heading"
          className="rounded-2xl bg-compliance-blue px-8 py-10 text-center text-white"
        >
          <Heading level={2} id="book-cta-heading" inverted className="mb-2">
            Ready to book?
          </Heading>
          <p className="text-blue-200 mb-6 max-w-md mx-auto">
            Book any certificate online in under 3 minutes. Fixed pricing.
            Same-week appointments. Certificates emailed within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/book"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book your certificate
            </Link>
            <Link
              href="/landlord-certificates-bundle"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white/10 border border-white/30 text-white hover:bg-white/20",
              )}
            >
              View bundle deals
            </Link>
          </div>
        </section>
      </Container>

      <StickyMobileCTA
        href="/book"
        label="Book Now"
        price={50}
        serviceName="Certificates from"
      />
    </>
  );
}

import type { Metadata } from "next";
import { LazyFAQAccordion as FAQAccordion, LazyStickyMobileCTA as StickyMobileCTA } from "@/components/lazy";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { TrustBadges } from "@/components/ui/trust-badges";
import { cn } from "@/lib/utils";
import {
  ADDITIONAL_CHARGES,
  GAS_SAFETY_CP12_TABLE,
  GAS_SAFETY_CP42_TABLE,
  getPriceForGasSafety,
} from "@/lib/pricing";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Gas Safety Certificate Cost 2025 — How Much Does a CP12 Cost? | My Landlord Certificate",
  description:
    "Gas Safety Certificate (CP12) costs from £50 for 1 appliance. Full domestic and commercial price breakdown, what affects the cost, and how to get a fixed price with no hidden charges.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/gas-safety-certificate-cost",
  },
  openGraph: {
    title: "Gas Safety Certificate Cost 2025 — How Much Does a CP12 Cost?",
    description:
      "CP12 prices start from £50 for 1 appliance. Full domestic price breakdown, what affects the cost, and how to book at a fixed price with no hidden charges.",
    url: "https://www.mylandlordcertificate.co.uk/gas-safety-certificate-cost",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Does a Gas Safety Certificate Cost? Full 2025 Price Guide",
  description:
    "A complete guide to Gas Safety Certificate (CP12) costs for landlords — domestic and commercial pricing, what affects the cost, how our prices compare to the national average, and how to get a fixed price.",
  url: "https://www.mylandlordcertificate.co.uk/gas-safety-certificate-cost",
  datePublished: "2025-01-01",
  dateModified: "2025-05-01",
  publisher: {
    "@type": "Organization",
    name: "My Landlord Certificate",
    url: "https://www.mylandlordcertificate.co.uk",
  },
  author: {
    "@type": "Organization",
    name: "My Landlord Certificate",
  },
};

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
      name: "Gas Safety Certificate",
      item: "https://www.mylandlordcertificate.co.uk/gas-safety-certificate",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Gas Safety Certificate Cost",
      item: "https://www.mylandlordcertificate.co.uk/gas-safety-certificate-cost",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a gas safety certificate cost in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A domestic Gas Safety Certificate (CP12) costs from £50 for 1 appliance, £60 for 2 appliances, and £70 for 3 appliances. The national average quoted by comparison sites is £60–£120 for a typical property with one boiler. A combined Gas Safety + Boiler Service costs £84.99.",
      },
    },
    {
      "@type": "Question",
      name: "What is a CP12 certificate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A CP12 is the industry shorthand for a Gas Safety Certificate — named after the CORGI Proforma 12 form that was used before the Gas Safe Register replaced CORGI in 2009. It is the annual certificate landlords must provide to tenants under the Gas Safety (Installation and Use) Regulations 1998.",
      },
    },
    {
      "@type": "Question",
      name: "Why does the gas safety certificate cost more for more appliances?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each gas appliance must be individually inspected and tested. A property with a boiler and a gas hob requires two separate tests, which takes more time than inspecting a single boiler. The price increases in £10 bands per additional appliance.",
      },
    },
    {
      "@type": "Question",
      name: "Are there any extra charges on top of the gas safety certificate price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We charge £5 for parking if no free on-site parking is available, and £18 for properties in the London Congestion Charge Zone. There are no call-out charges, no hidden fees — the price in the table is the price you pay.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a commercial gas safety certificate cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A commercial Gas Safety Certificate (CP42) starts from £159.99 for 1 appliance, rising to £499.99 for 8 appliances. Commercial inspections are carried out to the CP42 standard under the Gas Safety (Installation and Use) Regulations 1998.",
      },
    },
    {
      "@type": "Question",
      name: "Can I save money by bundling the gas safety certificate with other certificates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — our Essential Bundle (EICR + Gas Safety Certificate) costs £130 versus £144.99 if booked separately, saving £14.99. The Full Compliance Bundle (EICR + Gas Safety + EPC) is £230, saving £24.98 on three certificates in one visit.",
      },
    },
  ],
};

// ── FAQ items ─────────────────────────────────────────────────────────────────

const faqItems = [
  {
    question: "How much does a gas safety certificate cost in the UK?",
    answer:
      "A domestic Gas Safety Certificate (CP12) costs from £50 for 1 appliance. The national average quoted by comparison sites is £60–£120 for a typical property with one boiler. Our 1-appliance CP12 is £50 — at the competitive end of the market for a Gas Safe registered engineer, same-day certificate. A combined Gas Safety + Boiler Service costs £84.99.",
  },
  {
    question: "What is a CP12 certificate?",
    answer:
      "CP12 is the industry shorthand for a Gas Safety Certificate — named after the CORGI Proforma 12 form used before Gas Safe Register replaced CORGI in 2009. It is the annual certificate landlords must provide to tenants under the Gas Safety (Installation and Use) Regulations 1998. The full name is Landlord Gas Safety Record (LGSR), but CP12 and Gas Safety Certificate are the common terms.",
  },
  {
    question: "Why does the gas safety certificate cost more for more appliances?",
    answer:
      "Each gas appliance must be individually inspected and tested — checking the burner pressure, gas rate, flue performance, safety devices and ventilation. A property with a boiler and a gas hob requires two complete inspection sequences, which takes more time. Prices increase in £10 bands per additional appliance.",
  },
  {
    question: "How much does a gas safety certificate cost with a boiler service?",
    answer:
      "A combined Gas Safety Certificate + Boiler Service costs £84.99. This bundles the annual CP12 inspection with a full boiler service — including cleaning, filter check, pump and pressure tests. It is the most cost-effective way to carry out both requirements in a single visit.",
  },
  {
    question: "Are there any extra charges on top of the price?",
    answer:
      "We charge £5 for parking where no free on-site parking is available, and £18 for properties in the London Congestion Charge Zone. There are no call-out charges, no hidden fees — the price in the table is the price you pay.",
  },
  {
    question: "How much does a commercial gas safety certificate cost?",
    answer:
      "A commercial Gas Safety Certificate (CP42) starts from £159.99 for 1 appliance, rising to £499.99 for 8 appliances. Commercial inspections are carried out to the CP42 standard. See the commercial pricing table above.",
  },
  {
    question: "Can I save money by bundling with other certificates?",
    answer:
      "Yes — our Essential Bundle (EICR + Gas Safety Certificate) costs £130 versus £144.99 if booked separately, saving £14.99. The Full Compliance Bundle (EICR + Gas Safety + EPC) is £230, saving £24.98. All certificates are completed in one visit.",
  },
  {
    question: "How do I know if a gas engineer is legally qualified to issue a CP12?",
    answer:
      "Only Gas Safe registered engineers can legally carry out gas safety inspections and issue CP12 certificates. You can verify any engineer on the Gas Safe Register website at gassaferegister.co.uk. All our engineers are Gas Safe registered — you can check their registration details on their ID card before they start work.",
  },
];

const lowestPrice = getPriceForGasSafety(1);
const twoAppliancePrice = getPriceForGasSafety(2);
const threeAppliancePrice = getPriceForGasSafety(3);

const cp12TableWithBadge = GAS_SAFETY_CP12_TABLE.map((row, i) =>
  i === 2 ? { ...row, badge: "most-popular" as const } : row,
);

// ── Page ──────────────────────────────────────────────────────────────────────

export default function GasSafetyCertificateCostPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
      <section
        aria-labelledby="gas-cost-heading"
        className="bg-compliance-blue text-white"
      >
        <Container className="py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-blue-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li>
                <Link
                  href="/gas-safety-certificate"
                  className="hover:text-white transition-colors"
                >
                  Gas Safety Certificate
                </Link>
              </li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li className="text-white font-medium">Gas Safety Certificate Cost</li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            Transparent Pricing · No Hidden Charges · 2025 Price Guide
          </p>

          <Heading level={1} id="gas-cost-heading" inverted className="mb-4 max-w-3xl">
            How much does a gas safety certificate cost?
          </Heading>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-6">
            A domestic Gas Safety Certificate (CP12) starts from{" "}
            <strong className="text-white">£{lowestPrice}</strong> for 1 appliance,{" "}
            <strong className="text-white">£{twoAppliancePrice}</strong> for 2 appliances,
            and{" "}
            <strong className="text-white">£{threeAppliancePrice}</strong> for 3 appliances.
            Commercial CP42 certificates start from{" "}
            <strong className="text-white">£159.99</strong>. Full breakdown below — fixed
            prices, no call-out charges.
          </p>

          <PriceDisplay
            price={lowestPrice}
            from
            size="lg"
            className="mb-8 [&>span:last-child]:text-white"
          />

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/book?service=gas-safety-certificate"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book my CP12 — from £{lowestPrice}
            </Link>
            <Link
              href="/gas-safety-certificate"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white/10 border border-white/30 text-white hover:bg-white/20",
              )}
            >
              Gas Safety service page
            </Link>
          </div>

          <TrustBadges serviceKey="gas-safety" variant="dark" />
        </Container>
      </section>

      {/* ── Quick stats bar ── */}
      <div className="bg-brand-charcoal text-sm py-3">
        <Container>
          <dl className="flex flex-wrap gap-x-8 gap-y-1 text-brand-grey">
            <div className="flex gap-1.5">
              <dt>1 appliance</dt>
              <dd className="text-white font-semibold">£{lowestPrice}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>2 appliances</dt>
              <dd className="text-white font-semibold">£{twoAppliancePrice}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>3 appliances</dt>
              <dd className="text-white font-semibold">£{threeAppliancePrice}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Valid</dt>
              <dd className="text-white font-semibold">12 months</dd>
            </div>
          </dl>
        </Container>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── Domestic pricing table ── */}
        <section id="domestic-pricing" aria-labelledby="domestic-heading">
          <Heading level={2} id="domestic-heading" className="mb-2">
            Domestic gas safety certificate costs (CP12)
          </Heading>
          <p className="text-brand-grey mb-6">
            All domestic CP12 prices are fixed by number of gas appliances. The
            price you see is the price you pay — no call-out charge, no hidden fees.
          </p>

          <PriceTable
            title="Gas Safety Certificate (CP12) — full price breakdown"
            rows={cp12TableWithBadge}
          />

          <div className="mt-4 rounded-xl border border-border bg-warm-white p-4 text-sm text-brand-charcoal/70">
            <p className="font-medium text-brand-charcoal mb-1">
              Additional charges (where applicable)
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Parking charge if no free on-site parking:{" "}
                <strong>£{ADDITIONAL_CHARGES.parking}</strong>
              </li>
              <li>
                Congestion Charge Zone:{" "}
                <strong>£{ADDITIONAL_CHARGES.congestionZone}</strong>
              </li>
            </ul>
          </div>
        </section>

        {/* ── What the cost covers ── */}
        <section aria-labelledby="what-included-heading">
          <Heading level={2} id="what-included-heading" className="mb-4">
            What does the gas safety certificate cost cover?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            A CP12 is not a simple paperwork exercise — it is a structured
            safety inspection of every gas appliance in the property, carried
            out by a Gas Safe registered engineer. Here is what the cost covers.
          </p>
          <ul className="space-y-3 mb-5" role="list">
            {[
              "Visual inspection of each gas appliance, pipework, and gas meter",
              "Burner pressure and gas rate test on each appliance",
              "Flue flow and combustion performance check (including CO spillage test on boilers)",
              "Safety device operation test — overheat thermostat, flame failure device",
              "Ventilation adequacy check for each appliance",
              "Gas tightness test on the pipework installation",
              "CP12 Landlord Gas Safety Record issued and emailed on the same day",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-action-green/15 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-action-green"
                    fill="none"
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-brand-charcoal/80 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-brand-charcoal/70">
            Only a Gas Safe registered engineer can legally carry out this inspection
            and issue a CP12. You can verify any engineer&apos;s registration at{" "}
            <a
              href="https://www.gassaferegister.co.uk/check-the-register"
              target="_blank"
              rel="noopener noreferrer"
              className="text-compliance-blue hover:underline"
            >
              gassaferegister.co.uk
            </a>
            .
          </p>
        </section>

        {/* ── Market comparison ── */}
        <section aria-labelledby="compare-heading">
          <Heading level={2} id="compare-heading" className="mb-4">
            How our gas safety certificate costs compare
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            The national average for a domestic CP12 quoted by comparison sites
            is typically <strong>£60–£120</strong> for a single boiler, with
            London prices often running higher. Prices vary significantly because
            many engineers quote by the hour rather than a fixed upfront price —
            meaning the final bill depends on how long the job takes.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-compliance-blue text-white">
                  <th scope="col" className="text-left px-4 py-3 font-semibold">
                    Appliances
                  </th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold">
                    Market range
                  </th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold">
                    Our price
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { appliances: "1 appliance (boiler only)", market: "£60–£120", ours: `£${lowestPrice}` },
                  { appliances: "2 appliances", market: "£80–£150", ours: `£${twoAppliancePrice}` },
                  { appliances: "3 appliances", market: "£100–£180", ours: `£${threeAppliancePrice}` },
                  { appliances: "Gas Safety + Boiler Service", market: "£100–£200", ours: "£84.99" },
                ].map(({ appliances, market, ours }, i) => (
                  <tr key={appliances} className={i % 2 === 0 ? "bg-white" : "bg-warm-white"}>
                    <td className="px-4 py-3 text-brand-charcoal font-medium">{appliances}</td>
                    <td className="px-4 py-3 text-brand-grey">{market}</td>
                    <td className="px-4 py-3 text-compliance-blue font-semibold">{ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-brand-grey">
            Market range figures are approximate, based on published price
            comparison data for London and South East England (2025).
          </p>
        </section>

        {/* ── What affects the cost ── */}
        <section aria-labelledby="cost-factors-heading">
          <Heading level={2} id="cost-factors-heading" className="mb-6">
            What affects the cost of a gas safety certificate?
          </Heading>

          <dl className="space-y-4">
            {[
              {
                title: "Number of gas appliances",
                body: "The primary driver. Each appliance — boiler, gas hob, gas fire, back boiler, warm air unit — must be individually tested. Prices increase in £10 bands per appliance. A property with just a combi boiler is the simplest and cheapest inspection; one with a boiler, hob and gas fire will cost more.",
              },
              {
                title: "Boiler service",
                body: "A full boiler service is not included in the standard CP12 price but can be added for a combined cost of £84.99. This includes cleaning the heat exchanger, checking the pump, pressure vessel and condensate trap, and replacing the boiler filter. Most landlords carry out both annually at the same visit.",
              },
              {
                title: "Appliance condition and access",
                body: "If an appliance is poorly maintained, difficult to access, or requires the engineer to move furniture or locate a hidden gas valve, this adds time. Our fixed price covers standard residential access — appliances should be accessible before the engineer arrives.",
              },
              {
                title: "Whether unsafe work is found",
                body: "If an appliance or section of pipework is found to be immediately dangerous, the engineer must issue a Warning Notice and may need to disconnect the appliance. Remedial work is quoted separately. A well-maintained property with annually serviced appliances is unlikely to encounter this.",
              },
              {
                title: "Commercial vs domestic",
                body: "Commercial gas safety inspections (CP42) are more complex — covering larger appliances, higher gas pressures, and commercial-grade safety devices. Commercial certificates are priced significantly higher than domestic CP12s, starting from £159.99.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="flex gap-5 p-5 bg-white rounded-xl border border-border"
              >
                <div className="w-1.5 rounded-full bg-compliance-blue shrink-0 self-stretch" />
                <div>
                  <dt className="font-semibold text-brand-charcoal mb-1">{title}</dt>
                  <dd className="text-sm text-brand-grey leading-relaxed">{body}</dd>
                </div>
              </div>
            ))}
          </dl>
        </section>

        {/* ── Commercial CP42 pricing ── */}
        <section id="commercial-pricing" aria-labelledby="commercial-heading">
          <Heading level={2} id="commercial-heading" className="mb-2">
            Commercial gas safety certificate costs (CP42)
          </Heading>
          <p className="text-brand-grey mb-6">
            Commercial properties require a CP42 certificate rather than a CP12.
            Prices are fixed by number of gas appliances.
          </p>

          <PriceTable
            title="Commercial Gas Safety Certificate (CP42)"
            rows={GAS_SAFETY_CP42_TABLE}
            highlightCheapest
          />

          <p className="mt-5 text-sm text-brand-grey">
            Need a commercial gas safety certificate?{" "}
            <Link
              href="/commercial-gas-safety-certificate"
              className="text-compliance-blue hover:underline font-medium"
            >
              View the commercial gas safety service page →
            </Link>
          </p>
        </section>

        {/* ── Tips to keep costs down ── */}
        <section aria-labelledby="tips-heading">
          <Heading level={2} id="tips-heading" className="mb-6">
            How to keep your gas safety certificate cost as low as possible
          </Heading>
          <ul className="space-y-3" role="list">
            {[
              "Count your appliances correctly before booking — only appliances supplied as part of the tenancy need testing. A tenant's own gas cooker is their responsibility.",
              "Book the boiler service at the same visit — the combined Gas Safety + Boiler Service at £84.99 saves money over booking separately and keeps both records aligned.",
              "Bundle with your EICR — our Essential Bundle (EICR + Gas Safety) costs £130 versus £144.99 separately, saving £14.99 in a single visit.",
              "Don't let it lapse — a missed annual renewal creates urgency and some providers charge a premium. Book one to two months before expiry.",
              "Ensure the engineer has clear access — all appliances, the gas meter, and the boiler flue terminal (if external) should be accessible before the appointment.",
              "Choose fixed pricing — an hourly rate quote is unpredictable. Fixed-price providers show the full cost before you book.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-action-green/15 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-action-green"
                    fill="none"
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-brand-charcoal/80 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Bundle cross-sell ── */}
        <section aria-labelledby="bundle-heading">
          <Heading level={2} id="bundle-heading" className="mb-4">
            Save more — bundle your gas safety certificate
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            Most landlords who need a Gas Safety Certificate also need an{" "}
            <Link href="/eicr" className="text-compliance-blue hover:underline font-medium">
              EICR
            </Link>{" "}
            in the same year. Booking them together in one visit saves money and
            eliminates a second access appointment with your tenant.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: "Essential Bundle",
                description: "EICR (1–3 bed) + Gas Safety Certificate",
                individually: "£144.99",
                bundle: "£130",
                saving: "£14.99",
                href: "/book?bundle=essential",
              },
              {
                name: "Full Compliance Bundle",
                description: "EICR + Gas Safety Certificate + EPC",
                individually: "£254.98",
                bundle: "£230",
                saving: "£24.98",
                href: "/book?bundle=full-compliance",
              },
            ].map(({ name, description, individually, bundle, saving, href }) => (
              <div
                key={name}
                className="rounded-xl border border-border bg-warm-white p-5"
              >
                <p className="font-semibold text-brand-charcoal mb-1">{name}</p>
                <p className="text-sm text-brand-grey mb-3">{description}</p>
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-2xl font-bold text-brand-charcoal">{bundle}</span>
                  <span className="text-sm text-brand-grey line-through mb-0.5">
                    {individually}
                  </span>
                  <span className="text-sm font-semibold text-action-green mb-0.5">
                    save {saving}
                  </span>
                </div>
                <Link
                  href={href}
                  className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "w-full")}
                >
                  Book {name}
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-center text-brand-grey">
            <Link
              href="/landlord-certificates-bundle"
              className="text-compliance-blue hover:underline font-medium"
            >
              See all bundle options including HMO Complete →
            </Link>
          </p>
        </section>

        {/* ── Other cost guides ── */}
        <section aria-labelledby="other-cost-guides-heading">
          <Heading level={2} id="other-cost-guides-heading" className="mb-4">
            Compare other landlord certificate costs
          </Heading>
          <p className="text-brand-charcoal/80 mb-5 text-sm leading-relaxed">
            Most landlords who need a Gas Safety Certificate also need an EICR and
            an EPC. See what each costs and compare all services on our pricing page.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "EICR Certificate Cost", href: "/eicr-cost", price: "from £67.99" },
              { label: "EPC Certificate Cost", href: "/epc-cost", price: "from £89.99" },
              { label: "All Services & Prices", href: "/pricing", price: "Full price list" },
            ].map(({ label, href, price }) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-border bg-warm-white p-4 hover:border-compliance-blue transition-colors block"
              >
                <p className="font-semibold text-brand-charcoal text-sm mb-1">{label}</p>
                <p className="text-compliance-blue text-sm font-medium">{price}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── FAQs ── */}
        <section aria-labelledby="faq-heading" className="below-fold">
          <Heading level={2} id="faq-heading" className="mb-6">
            Gas safety certificate cost — frequently asked questions
          </Heading>
          <FAQAccordion items={faqItems} includeSchema={false} />
        </section>

        {/* ── CTA ── */}
        <section
          aria-labelledby="cta-heading"
          className="rounded-2xl bg-compliance-blue px-8 py-10 text-center text-white"
        >
          <Heading level={2} id="cta-heading" inverted className="mb-2">
            Get your Gas Safety Certificate at a fixed price
          </Heading>
          <p className="text-blue-200 mb-6 max-w-md mx-auto">
            The price on this page is the price you pay — no call-out charges,
            no hidden fees, no re-quote on the day.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/book?service=gas-safety-certificate"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book my CP12 — from £{lowestPrice}
            </Link>
            <Link
              href="/gas-safety-certificate"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white/10 border border-white/30 text-white hover:bg-white/20",
              )}
            >
              Gas Safety service overview
            </Link>
          </div>
          <p className="mt-4 text-xs text-blue-300">
            No hidden charges. Gas Safe registered engineers. Certificate emailed same day.
          </p>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=gas-safety-certificate"
        label="Book CP12"
        price={lowestPrice}
        serviceName="Gas Safety from"
      />
    </>
  );
}

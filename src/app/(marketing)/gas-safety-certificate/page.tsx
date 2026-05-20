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
  getPriceForGasSafety,
} from "@/lib/pricing";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Gas Safety Certificate (CP12) from £49.99 | My Landlord Certificate",
  description:
    "Book a Gas Safety Certificate (CP12) from £49.99. Annual legal requirement for all landlords in England. Gas Safe Registered engineers, next-day appointments, certificate emailed same day.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/gas-safety-certificate",
  },
  openGraph: {
    title: "Gas Safety Certificate (CP12) from £49.99 | My Landlord Certificate",
    description:
      "Annual CP12 landlord gas safety certificate from £49.99. Gas Safe Registered engineers, next-day appointments across London and the South East, certificate emailed same day.",
    url: "https://www.mylandlordcertificate.co.uk/gas-safety-certificate",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gas Safety Certificate (CP12)",
  url: "https://www.mylandlordcertificate.co.uk/gas-safety-certificate",
  description:
    "Annual landlord gas safety certificate (CP12) confirming all gas appliances, flues and pipework in a rental property are safe. Legally required under the Gas Safety (Installation and Use) Regulations 1998. Gas Safe Registered engineers, certificate emailed same day.",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://www.mylandlordcertificate.co.uk",
  },
  areaServed: ["London", "South East England"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Gas Safety Certificate Pricing",
    itemListElement: [
      { "@type": "Offer", name: "1 Gas Appliance (CP12)", price: "50", priceCurrency: "GBP" },
      { "@type": "Offer", name: "2 Gas Appliances (CP12)", price: "60", priceCurrency: "GBP" },
      { "@type": "Offer", name: "3 Gas Appliances (CP12)", price: "70", priceCurrency: "GBP" },
    ],
  },
  offers: {
    "@type": "Offer",
    price: "50",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://www.mylandlordcertificate.co.uk/gas-safety-certificate",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Gas Safety Certificate (CP12) — Landlord Annual Inspection",
  description:
    "Landlord gas safety certificate (CP12) carried out by Gas Safe Registered engineers. Covers all gas appliances, flues, ventilation and gas pipework. Certificate emailed same day.",
  brand: {
    "@type": "Brand",
    name: "My Landlord Certificate",
  },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "50",
    highPrice: "84.99",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    offerCount: 6,
    url: "https://www.mylandlordcertificate.co.uk/gas-safety-certificate",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "284",
    reviewCount: "284",
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
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How often do I need a Gas Safety Certificate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every 12 months without exception. The Gas Safety (Installation and Use) Regulations 1998 require landlords to arrange an annual gas safety check by a Gas Safe Registered engineer. There is no grace period — a lapsed CP12 is a legal breach.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a Gas Safety Certificate cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Gas Safety Certificate (CP12) starts from £49.99 for 1 gas appliance. 2 appliances costs £60, 3 appliances costs £70. A combined gas safety check and boiler service costs £84.99.",
      },
    },
    {
      "@type": "Question",
      name: "What appliances are covered by a CP12?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All gas appliances supplied with the tenancy — typically the boiler, gas hob and any gas fire. The engineer also inspects all flues, ventilation and gas pipework serving each appliance.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to give my tenant a copy of the Gas Safety Certificate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You must provide a copy of the CP12 to existing tenants within 28 days of the inspection date, and to new tenants before they move in. The certificate must also be kept on file by the landlord for at least 2 years.",
      },
    },
    {
      "@type": "Question",
      name: "What is the penalty for not having a Gas Safety Certificate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Failure to comply with the Gas Safety (Installation and Use) Regulations 1998 is a criminal offence. Penalties include an unlimited fine and up to 2 years' imprisonment. The Health and Safety Executive (HSE) and local councils both have enforcement powers.",
      },
    },
    {
      "@type": "Question",
      name: "What if a tenant refuses access for the gas safety check?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You must document every attempt to gain access — send written notices and keep copies of all correspondence. The legal obligation remains with the landlord, so thorough record-keeping is essential. In the event of a persistent refusal, seek legal advice.",
      },
    },
    {
      "@type": "Question",
      name: "Is a CP12 the same as a boiler service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A CP12 is a safety inspection only — it checks that appliances are safe, not that they are running efficiently. A boiler service includes cleaning internal components and checking performance. We offer a combined gas safety check and boiler service for £84.99.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if a gas appliance fails the safety check?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If an appliance is found to be unsafe, the engineer will apply a 'Do Not Use' warning and may disconnect it. You must not allow tenants to use a condemned appliance. The CP12 will note the failure and you must arrange repair or replacement before the appliance can be brought back into use.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Gas Safe Register?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Gas Safe Register is the official list of gas engineers who are legally qualified to work on gas appliances in the UK. It replaced CORGI in 2009. By law, only Gas Safe Registered engineers can carry out gas safety inspections and issue a CP12 certificate.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a Gas Safety Certificate if my rental property has no boiler?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You need a CP12 for every gas appliance supplied with the tenancy. If the property has a gas hob but no boiler, the hob still needs to be inspected. If the property has no gas supply at all, no CP12 is required.",
      },
    },
  ],
};

// ── FAQ items ─────────────────────────────────────────────────────────────────

const faqItems = [
  {
    question: "How often do I need a Gas Safety Certificate?",
    answer:
      "Every 12 months without exception. The Gas Safety (Installation and Use) Regulations 1998 require landlords to arrange an annual gas safety check carried out by a Gas Safe Registered engineer. There is no grace period — a lapsed CP12 is a criminal breach of the regulations.",
  },
  {
    question: "How much does a Gas Safety Certificate cost?",
    answer:
      "A CP12 starts from £49.99 for 1 gas appliance. 2 appliances costs £60, 3 appliances costs £70. A combined gas safety check and boiler service is £84.99. See the full pricing table above for all tiers.",
  },
  {
    question: "What appliances are covered by a CP12?",
    answer:
      "All gas appliances supplied with the tenancy — typically the boiler, gas hob and any gas fire or gas-powered appliance. The engineer also inspects all flues, ventilation and gas pipework serving each appliance. Appliances that belong to the tenant and were not supplied with the property are not covered.",
  },
  {
    question: "Do I have to give my tenant a copy of the Gas Safety Certificate?",
    answer:
      "Yes — this is a legal obligation. You must provide a copy of the signed CP12 to existing tenants within 28 days of the inspection date, and to new tenants before they move in. Landlords must also retain a copy for at least 2 years. We email the certificate the same day so you can forward it immediately.",
  },
  {
    question: "What is the penalty for not having a Gas Safety Certificate?",
    answer:
      "Non-compliance with the Gas Safety (Installation and Use) Regulations 1998 is a criminal offence. Penalties include an unlimited fine and up to 2 years' imprisonment. The Health and Safety Executive (HSE) and local councils both have enforcement powers and conduct proactive inspections in the private rented sector.",
  },
  {
    question: "What if a tenant refuses access for the gas safety check?",
    answer:
      "The legal obligation remains with the landlord regardless of tenant behaviour. You must document every access attempt in writing — send formal notices by recorded post and keep copies. If a tenant persistently refuses access, seek legal advice. The HSE takes a dim view of landlords who cannot demonstrate they made every reasonable effort.",
  },
  {
    question: "Is a CP12 the same as a boiler service?",
    answer:
      "No. A CP12 is a safety-only inspection — it confirms appliances are safe, not that they are running efficiently. A boiler service involves cleaning internal components, checking water pressure and assessing performance. We offer a combined gas safety check and boiler service for £84.99, which is cheaper than booking them separately.",
  },
  {
    question: "What happens if a gas appliance fails the safety check?",
    answer:
      "If an appliance is found to be immediately dangerous, the engineer will apply a 'Do Not Use' warning label and may disconnect it from the gas supply. You must not allow tenants to use a condemned appliance. The CP12 will record the failure with details of the defect, and you must arrange repair or replacement before the appliance can be put back into use.",
  },
  {
    question: "What is the Gas Safe Register?",
    answer:
      "The Gas Safe Register is the official list of gas engineers legally qualified to work on gas appliances in the UK, Isle of Man and Guernsey. It replaced CORGI in 2009 and is appointed by the Health and Safety Executive. Only Gas Safe Registered engineers can carry out gas safety inspections and sign a valid CP12 certificate.",
  },
  {
    question: "Do I need a Gas Safety Certificate if my rental has no boiler?",
    answer:
      "You need a CP12 for every gas appliance you supply with the tenancy. If the property has a gas hob or gas fire but no boiler, those appliances still need inspecting. If the property has no gas supply whatsoever, no CP12 is required. If you're unsure, call us on 0330 133 0066 and we'll confirm what's needed.",
  },
  {
    question: "How long does a gas safety inspection take?",
    answer:
      "Typically 30–60 minutes for a standard property with 1–2 appliances. A property with a boiler, gas hob and gas fire may take up to 90 minutes. You don't need to be present — a tenant or keyholder can provide access and we'll email the certificate directly to you.",
  },
];

const lowestPrice = getPriceForGasSafety(1);
const highestAppliancePrice = getPriceForGasSafety(3);

const cp12TableWithBadge = GAS_SAFETY_CP12_TABLE.map((row, i) =>
  i === 2 ? { ...row, badge: "most-popular" as const } : row,
);

// ── Page ──────────────────────────────────────────────────────────────────────

export default function GasSafetyPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── 1. Hero ────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="gas-heading"
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
              <li className="text-white font-medium">Gas Safety Certificate</li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            Gas Safe Registered · Annual Legal Requirement · London &amp; South East
          </p>

          <Heading level={1} id="gas-heading" inverted className="mb-4 max-w-2xl">
            Gas Safety Certificate (CP12) from £{lowestPrice}
          </Heading>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-3">
            Annual CP12 landlord gas safety inspection — a legal requirement under
            the Gas Safety (Installation and Use) Regulations 1998. Gas Safe
            Registered engineers, no hidden charges, certificate emailed the same day.
          </p>

          <p className="text-blue-200 text-base mb-6 max-w-xl">
            Next-day appointments available across London and the South East.
            Most inspections confirmed within 1–3 days.
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
            <a
              href="#pricing"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white/10 border border-white/30 text-white hover:bg-white/20",
              )}
            >
              See full pricing
            </a>
          </div>

          <TrustBadges serviceKey="gas-safety" variant="dark" />
        </Container>
      </section>

      {/* ── 2. Stats bar ───────────────────────────────────────────────────── */}
      <div className="bg-brand-charcoal text-sm py-3">
        <Container>
          <dl className="flex flex-wrap gap-x-8 gap-y-1 text-brand-grey">
            <div className="flex gap-1.5">
              <dt>From</dt>
              <dd className="text-white font-semibold">£{lowestPrice}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Required</dt>
              <dd className="text-white font-semibold">every 12 months</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Appointments</dt>
              <dd className="text-white font-semibold">next-day available</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Certificate</dt>
              <dd className="text-white font-semibold">emailed same day</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Accreditation</dt>
              <dd className="text-white font-semibold">Gas Safe Registered</dd>
            </div>
          </dl>
        </Container>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── 3. What is a CP12 ───────────────────────────────────────────── */}
        <section id="what-is-it" aria-labelledby="what-is-it-heading">
          <Heading level={2} id="what-is-it-heading" className="mb-4">
            What is a Gas Safety Certificate (CP12)?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            A Gas Safety Certificate — formally known as a CP12 — is a document
            confirming that all gas appliances, flues and pipework in a rental
            property have been inspected by a Gas Safe Registered engineer and
            found to be safe. The engineer checks each appliance for correct
            operation, adequate ventilation, secure flue connections and correct
            gas pressure. Every appliance inspected is listed on the certificate
            along with its result.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            The name CP12 comes from the standard inspection form used by Gas Safe
            engineers. It is not the same as a boiler service — a CP12 tests
            whether appliances are safe, while a service checks performance and
            efficiency. If you want both, we offer a combined gas safety check and
            boiler service in a single visit.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            For landlords in the private rented sector, a valid CP12 is one of the
            most critical compliance documents you hold. Gas appliances that are not
            regularly inspected can develop faults that lead to carbon monoxide
            poisoning — a serious and potentially fatal risk. The annual inspection
            is your primary defence against that risk, and the CP12 is the evidence
            that you have met your legal duty of care.
          </p>
          <div className="rounded-xl bg-amber-50 border border-brand-amber/30 p-5 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Legal requirement: </strong>
            The Gas Safety (Installation and Use) Regulations 1998 require landlords
            to arrange an annual gas safety check by a Gas Safe Registered engineer,
            provide the signed CP12 to tenants, and keep records for at least 2
            years. Failure to comply is a criminal offence carrying an unlimited
            fine and up to{" "}
            <strong>2 years&apos; imprisonment</strong>.
          </div>
        </section>

        {/* ── 4. Legal requirements ───────────────────────────────────────── */}
        <section aria-labelledby="legal-heading">
          <Heading level={2} id="legal-heading" className="mb-4">
            Gas safety legal requirements for landlords
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            The Gas Safety (Installation and Use) Regulations 1998 place specific
            obligations on every landlord who provides gas appliances in a rental
            property. The regulations apply to all privately rented properties —
            assured shorthold tenancies, periodic tenancies, HMO licences, houses
            in multiple occupation and student lets alike. There is no minimum
            tenancy length: even short-term lets require a valid CP12.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            The gas safety check must be carried out by an engineer who is registered
            on the Gas Safe Register. It is a criminal offence to carry out gas work
            — including safety inspections — without Gas Safe registration. Landlords
            have no discretion on this point: only a Gas Safe Registered engineer can
            sign and issue a valid CP12 certificate.
          </p>

          <div className="rounded-xl bg-warm-white border border-border p-5 mb-5">
            <p className="font-semibold text-brand-charcoal mb-3">
              As a landlord you must:
            </p>
            <ul className="space-y-2 text-sm text-brand-charcoal/80">
              {[
                "Arrange an annual gas safety check by a Gas Safe Registered engineer",
                "Provide a copy of the CP12 to existing tenants within 28 days of the inspection",
                "Provide a copy to new tenants before they move in (not within 28 days — before)",
                "Keep a record of every gas safety check for at least 2 years",
                "Ensure access is available for the engineer — document failed access attempts in writing",
                "Not allow tenants to use an appliance that has been condemned by the engineer",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-compliance-blue/10 text-compliance-blue font-bold text-xs flex items-center justify-center">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-sm text-brand-grey">
            The regulations apply to England, Wales and Scotland. Northern Ireland
            has separate gas safety legislation — if your rental property is in
            Northern Ireland, check with the relevant local authority.
          </p>
        </section>

        {/* ── 5. Pricing ──────────────────────────────────────────────────── */}
        <section id="pricing" aria-labelledby="pricing-heading">
          <Heading level={2} id="pricing-heading" className="mb-2">
            Gas Safety Certificate pricing
          </Heading>
          <p className="text-brand-grey mb-6">
            Fixed pricing per number of gas appliances. The price you see is the
            price you pay — no call-out charges, no hidden fees. Most domestic
            rental properties have 1 gas appliance (the boiler), priced at
            £{lowestPrice}. Properties with a boiler, hob and gas fire cost
            £{highestAppliancePrice} for all three.
          </p>

          <PriceTable
            title="Gas Safety Certificate (CP12) — price by appliance count"
            rows={cp12TableWithBadge}
          />

          <div className="mt-4 rounded-xl border border-border bg-warm-white p-4 text-sm text-brand-charcoal/70">
            <p className="font-medium text-brand-charcoal mb-1">
              Additional charges (where applicable)
            </p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li>
                Parking charge if no free on-site parking is available:{" "}
                <strong>£{ADDITIONAL_CHARGES.parking}</strong>
              </li>
              <li>
                Properties in the London Congestion Charge Zone:{" "}
                <strong>£{ADDITIONAL_CHARGES.congestionZone}</strong>
              </li>
            </ul>
          </div>

          <p className="mt-5 text-sm text-brand-grey">
            Want a detailed breakdown of Gas Safety Certificate costs?{" "}
            <Link
              href="/gas-safety-certificate-cost"
              className="text-compliance-blue hover:underline font-medium"
            >
              See our full Gas Safety pricing guide →
            </Link>
          </p>

          <p className="mt-3 text-sm text-brand-grey">
            Need a commercial gas safety certificate for a business premises?{" "}
            <Link
              href="/commercial-gas-safety-certificate"
              className="text-compliance-blue hover:underline font-medium"
            >
              See commercial CP42 pricing →
            </Link>
          </p>

          <p className="mt-3 text-sm text-brand-grey">
            Comparing all landlord certificate prices?{" "}
            <Link
              href="/pricing"
              className="text-compliance-blue hover:underline font-medium"
            >
              View our complete pricing page →
            </Link>
          </p>

          <div className="mt-5 rounded-xl bg-compliance-blue/5 border border-compliance-blue/20 p-4 text-sm text-brand-charcoal/80">
            Booking a CP12 alongside an{" "}
            <Link
              href="/eicr"
              className="text-compliance-blue hover:underline font-medium"
            >
              EICR certificate
            </Link>
            ? Combine both in a single engineer visit with our{" "}
            <Link
              href="/landlord-certificates-bundle"
              className="text-compliance-blue hover:underline font-medium"
            >
              landlord certificates bundle →
            </Link>
          </div>
        </section>

        {/* ── 6. What's included ──────────────────────────────────────────── */}
        <section aria-labelledby="included-heading">
          <Heading level={2} id="included-heading" className="mb-4">
            What&apos;s included for £{lowestPrice}
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Every CP12 inspection covers all required safety checks for each gas
            appliance included in the tenancy, at no extra cost beyond the price shown.
          </p>
          <ul className="space-y-3" role="list">
            {[
              "Inspection of all gas appliances included in the tenancy (boiler, hob, gas fire)",
              "Flue integrity and terminal position check for each appliance",
              "Ventilation adequacy check — ensuring correct air supply for combustion",
              "Gas pressure and flow rate tests at every appliance",
              "Safety device checks — thermostats, flame failure devices, overheat cut-outs",
              "Gas tightness test on accessible pipework",
              "Signed CP12 certificate listing every appliance and its result",
              "Certificate emailed the same day — ready to forward to your tenant",
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
                <span className="text-brand-charcoal/80">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── 7. What the engineer checks ─────────────────────────────────── */}
        <section aria-labelledby="checks-heading">
          <Heading level={2} id="checks-heading" className="mb-4">
            What the Gas Safe engineer checks
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            A CP12 inspection is more thorough than a visual check. The engineer
            works to a defined checklist for each appliance and records the result
            of every test on the certificate.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Boiler",
                items: [
                  "Flue integrity and terminal clearances",
                  "Combustion analysis and CO reading",
                  "Heat exchanger condition",
                  "Safety devices — overheat stat, pressure relief",
                  "Gas pressure at burner",
                ],
              },
              {
                title: "Gas hob and cooker",
                items: [
                  "Burner operation and ignition",
                  "Flame stability and colour",
                  "Flame failure device function",
                  "Gas pressure at burner",
                  "Adequate ventilation for the kitchen",
                ],
              },
              {
                title: "Gas fire and other appliances",
                items: [
                  "Flue draw and integrity",
                  "Pilot light and main burner stability",
                  "Safety device checks",
                  "Ventilation adequacy",
                  "Gas pressure and flow",
                ],
              },
              {
                title: "Gas pipework",
                items: [
                  "Gas tightness test on accessible pipework",
                  "Pipe routing and supports",
                  "Meter condition and isolation valve",
                  "No signs of corrosion or damage",
                  "Emergency control valve accessible",
                ],
              },
            ].map(({ title, items }) => (
              <div
                key={title}
                className="rounded-xl bg-warm-white border border-border p-5"
              >
                <p className="font-semibold text-brand-charcoal mb-3 text-sm">
                  {title}
                </p>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-brand-charcoal/70"
                    >
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-compliance-blue shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-brand-charcoal/80">
            <strong className="text-red-700">Carbon monoxide risk: </strong>
            Faulty gas appliances are the primary cause of CO poisoning in rental
            properties. The annual CP12 inspection is the most effective way to
            detect combustion problems before they become dangerous. We strongly
            recommend fitting a CO alarm in every room with a gas appliance — this
            is a legal requirement in Scotland and mandatory for new tenancies in
            England from October 2022.
          </div>
        </section>

        {/* ── 8. How it works ─────────────────────────────────────────────── */}
        <section aria-labelledby="how-it-works-heading">
          <Heading level={2} id="how-it-works-heading" className="mb-4">
            How to book your landlord gas safety certificate
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-8">
            Booking a CP12 takes under 3 minutes. Next-day appointments available
            across all 32 London boroughs and the wider South East.
          </p>

          <ol className="grid md:grid-cols-3 gap-8" role="list">
            {[
              {
                step: "01",
                title: "Book online",
                body: "Choose your appliance count, pick a date and pay securely online. Next-day slots available across London and the South East — no phone calls required. You'll receive a booking confirmation immediately.",
              },
              {
                step: "02",
                title: "Gas Safe engineer visits",
                body: "A Gas Safe Registered engineer arrives at your agreed time and carries out the full CP12 inspection. You don't need to be present — a tenant, keyholder or letting agent can provide access. The inspection typically takes 30–90 minutes.",
              },
              {
                step: "03",
                title: "Certificate emailed same day",
                body: "Your signed CP12 gas safety certificate is emailed to you on the day of the inspection, usually within a few hours of the engineer completing. Forward it to your tenant straight away to meet your 28-day obligation.",
              },
            ].map(({ step, title, body }) => (
              <li key={step} className="flex flex-col gap-3">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-compliance-blue/10 text-compliance-blue font-bold text-xl shrink-0">
                  {step}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-brand-charcoal mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-brand-grey leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-8 text-sm text-brand-grey">
            We cover all 32 London boroughs and the wider South East.{" "}
            <Link
              href="/coverage-areas"
              className="text-compliance-blue hover:underline font-medium"
            >
              Check if we cover your area →
            </Link>
          </p>
        </section>

        {/* ── 9. Gas Safe Register ────────────────────────────────────────── */}
        <section aria-labelledby="gas-safe-heading">
          <Heading level={2} id="gas-safe-heading" className="mb-4">
            Why Gas Safe registration matters
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            The Gas Safe Register is the official list of gas engineers legally
            qualified to work on gas appliances in Great Britain. Appointed by the
            Health and Safety Executive (HSE), it replaced CORGI in April 2009.
            Every engineer on the register carries a Gas Safe ID card showing their
            name, registration number and the specific appliance types they are
            qualified to work on.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            It is a criminal offence for any person who is not Gas Safe registered
            to carry out gas work — including safety inspections. A CP12 signed by
            an unregistered engineer is not legally valid, and a landlord relying on
            such a certificate remains in breach of the Gas Safety (Installation and
            Use) Regulations 1998. Every engineer who carries out our CP12
            inspections is Gas Safe registered — you can verify their credentials on
            the{" "}
            <a
              href="https://www.gassaferegister.co.uk/find-an-engineer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-compliance-blue hover:underline font-medium"
            >
              Gas Safe Register engineer search
            </a>
            .
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            When you book through My Landlord Certificate, your engineer&apos;s
            registration number appears on the CP12 certificate itself. Your
            letting agent, mortgage lender or local authority can verify the
            registration at any time — giving you an auditable, legally watertight
            record of compliance.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { stat: "4.9★", label: "Trustpilot rating", sub: "from 284 CP12 reviews" },
              { stat: "Same day", label: "Certificate delivery", sub: "emailed after inspection" },
              { stat: "12 months", label: "CP12 validity", sub: "annual renewal required" },
            ].map(({ stat, label, sub }) => (
              <div
                key={label}
                className="rounded-xl bg-warm-white border border-border p-5 text-center"
              >
                <p className="text-2xl font-bold text-compliance-blue mb-1">{stat}</p>
                <p className="font-semibold text-brand-charcoal text-sm">{label}</p>
                <p className="text-xs text-brand-grey mt-0.5">{sub}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-brand-grey">
            See what landlords say about our gas safety service on our{" "}
            <Link
              href="/reviews"
              className="text-compliance-blue hover:underline font-medium"
            >
              reviews page →
            </Link>
          </p>
        </section>

        {/* ── 10. FAQs ────────────────────────────────────────────────────── */}
        <section aria-labelledby="faq-heading" className="below-fold">
          <Heading level={2} id="faq-heading" className="mb-6">
            Gas Safety Certificate — frequently asked questions
          </Heading>
          <FAQAccordion items={faqItems} includeSchema={false} />

          <p className="mt-6 text-sm text-brand-grey text-center">
            More questions about gas safety for landlords?{" "}
            <Link
              href="/faq"
              className="text-compliance-blue hover:underline font-medium"
            >
              See our full FAQ →
            </Link>
          </p>
        </section>

        {/* ── 11. CTA block ───────────────────────────────────────────────── */}
        <section
          aria-labelledby="cta-heading"
          className="rounded-2xl bg-compliance-blue px-8 py-10 text-center text-white"
        >
          <Heading level={2} id="cta-heading" inverted className="mb-2">
            Ready to book your Gas Safety Certificate?
          </Heading>
          <p className="text-blue-200 mb-2 max-w-md mx-auto">
            Book online in under 3 minutes. A Gas Safe Registered engineer will
            confirm your appointment. CP12 certificate emailed the same day.
          </p>
          <p className="text-blue-300 text-sm mb-6 max-w-md mx-auto">
            Next-day appointments available across London and the South East —
            or call{" "}
            <a
              href="tel:03301330066"
              className="text-white font-semibold hover:underline"
            >
              0330 133 0066
            </a>{" "}
            for same-day slots.
          </p>
          <Link
            href="/book?service=gas-safety-certificate"
            className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
          >
            Book my CP12 — from £{lowestPrice}
          </Link>
          <p className="mt-4 text-xs text-blue-300">
            No hidden charges. Gas Safe Registered. Certificate emailed same day.
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

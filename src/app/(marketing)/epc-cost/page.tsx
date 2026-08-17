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
  COMMERCIAL_EPC_TABLE,
  DOMESTIC_EPC_TABLE,
  getPriceForEPC,
} from "@/lib/pricing";
import { HeroRating } from "@/components/ui/hero-rating";
import { ReviewsBlock } from "@/components/marketing/reviews-block";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "EPC Cost Guide 2025, How Much Does an EPC Cost?",
  description:
    "EPC costs from £89.99 for a studio to £149.99 for a 5-bedroom property. Full domestic and commercial EPC price breakdown, what drives the cost, and how to get a fixed price with no hidden charges.",
  alternates: { canonical: "https://www.mylandlordcertificate.co.uk/epc-cost" },
  openGraph: {
    title: "EPC Cost Guide 2025, How Much Does an EPC Cost?",
    description:
      "EPC prices start from £89.99. Full domestic and commercial price breakdown, what affects the cost, and how to book at a fixed price with no hidden charges.",
    url: "https://www.mylandlordcertificate.co.uk/epc-cost",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Does an EPC Cost? Full 2025 Price Guide",
  description:
    "A complete guide to Energy Performance Certificate (EPC) costs for landlords, domestic and commercial pricing, what affects the cost, MEES implications, and how to get a fixed price.",
  url: "https://www.mylandlordcertificate.co.uk/epc-cost",
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
      name: "EPC Certificate",
      item: "https://www.mylandlordcertificate.co.uk/epc",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "EPC Cost",
      item: "https://www.mylandlordcertificate.co.uk/epc-cost",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does an EPC cost in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A domestic EPC costs from £89.99 for a studio apartment to £149.99 for a 5-bedroom property. The national average quoted by comparison sites is £60–£120, though accredited DEA assessors in London typically charge £80–£150. Commercial EPCs start from £250 for properties up to 50m².",
      },
    },
    {
      "@type": "Question",
      name: "How long does an EPC last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An EPC is valid for 10 years. If energy efficiency improvements have been made to the property, it is worth commissioning a new EPC earlier to potentially achieve a higher rating.",
      },
    },
    {
      "@type": "Question",
      name: "Why does an EPC cost more for larger properties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Larger properties take longer to assess, the DEA must measure every room, inspect the heating system, hot water cylinder, insulation, windows, and lighting throughout the property. More rooms equals more measurement and data entry time.",
      },
    },
    {
      "@type": "Question",
      name: "Are there any extra charges on top of the EPC price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We charge £10 for parking if no free on-site parking is available, and £20 for properties in the London Congestion Charge Zone. There are no other hidden fees, the price in the table is the price you pay.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a commercial EPC cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A commercial EPC starts from £250 for properties up to 50m², rising to £999 for properties up to 850m². Commercial EPCs are more complex than domestic assessments and are priced by floor area.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum EPC rating required to rent a property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The current minimum under the Minimum Energy Efficiency Standards (MEES) is an E rating. Landlords cannot legally let a property rated F or G. The government has signalled its intention to raise this to a C rating for new tenancies, though no firm date has been legislated.",
      },
    },
  ],
};

// ── FAQ items ─────────────────────────────────────────────────────────────────

const faqItems = [
  {
    question: "How much does an EPC cost in the UK?",
    answer:
      "A domestic EPC costs from £89.99 for a studio to £149.99 for a 5-bedroom property. The national average quoted by comparison sites is £60–£120, though accredited assessors in London typically charge more. Our studio EPC at £89.99 is competitive for a next-day lodgement by an accredited DEA. Commercial EPCs start from £250 for properties up to 50m².",
  },
  {
    question: "How long does an EPC last?",
    answer:
      "An EPC is valid for 10 years from the date of issue. If you have made significant energy improvements, new boiler, loft insulation, double glazing, it is worth commissioning a new assessment before the 10-year expiry, as a better rating could allow you to increase rent or attract better tenants.",
  },
  {
    question: "Why does an EPC cost more for larger properties?",
    answer:
      "The DEA (Domestic Energy Assessor) must measure every room, inspect the heating system, hot water provision, insulation levels, window glazing, and lighting throughout the property. A studio takes 30–45 minutes; a 5-bedroom house can take 90 minutes or more. Larger properties require more data collection time, which is reflected in the price.",
  },
  {
    question: "What is the minimum EPC rating required to let a property?",
    answer:
      "The current minimum under MEES (Minimum Energy Efficiency Standards) is an E rating. Landlords cannot legally let a property rated F or G, doing so can result in a fine of up to £30,000. The government has signalled it intends to raise the minimum to a C rating for new tenancies, though no firm date has been legislated as of 2025.",
  },
  {
    question: "Can I get a new EPC before the 10 years is up?",
    answer:
      "Yes, you can commission a new EPC at any time. A new assessment is worth considering if you have made energy efficiency improvements, if the current rating is F or G, or if you want to demonstrate a higher rating to prospective tenants.",
  },
  {
    question: "Are there any extra charges on top of the EPC price?",
    answer:
      "We charge £10 for parking where no free on-site parking is available, and £20 for properties in the London Congestion Charge Zone. There are no other hidden fees, the price in the table is the price you pay.",
  },
  {
    question: "How much does a commercial EPC cost?",
    answer:
      "A commercial EPC starts from £250 for properties up to 50m², rising to £999 for properties up to 850m². Commercial EPCs are significantly more complex than domestic assessments, they require a different methodology (SBEM rather than RdSAP) and are priced by floor area.",
  },
  {
    question: "Can I save money by bundling an EPC with other certificates?",
    answer:
      "Yes, our Full Compliance Bundle (EICR + Gas Safety Certificate + EPC) costs £230 versus £254.98 if booked separately, saving £24.98. All three certificates are completed in one visit.",
  },
];

const lowestPrice = getPriceForEPC("studio");
const popularPrice = getPriceForEPC("1-3bed");
const largestPrice = getPriceForEPC("5bed");

// ── Page ──────────────────────────────────────────────────────────────────────

export default function EpcCostPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
      <section
        aria-labelledby="epc-cost-heading"
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
                <Link href="/epc" className="hover:text-white transition-colors">
                  EPC Certificate
                </Link>
              </li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li className="text-white font-medium">EPC Cost</li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            Transparent Pricing · No Hidden Charges · 2025 Price Guide
          </p>

          <Heading level={1} id="epc-cost-heading" inverted className="mb-4 max-w-3xl">
            How much does an EPC cost?
          </Heading>
          <HeroRating theme="dark" className="mb-5" />

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-6">
            A domestic EPC starts from{" "}
            <strong className="text-white">£{lowestPrice}</strong> for a studio,{" "}
            <strong className="text-white">£{popularPrice}</strong> for a 1–3
            bedroom property, and up to{" "}
            <strong className="text-white">£{largestPrice}</strong> for a 5-bedroom
            home. Commercial EPCs start from{" "}
            <strong className="text-white">£250</strong>. Full breakdown below,
            fixed prices, no call-out charges.
          </p>

          <PriceDisplay
            price={lowestPrice}
            from
            size="lg"
            className="mb-8 [&>span:last-child]:text-white"
          />

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/book?service=epc"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book my EPC, from £{lowestPrice}
            </Link>
            <Link
              href="/epc"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white/10 border border-white/30 text-white hover:bg-white/20",
              )}
            >
              EPC service page
            </Link>
          </div>

          <TrustBadges serviceKey="epc" variant="dark" />
        </Container>
      </section>

      {/* ── Stats bar ── */}
      <div className="bg-brand-charcoal text-sm py-3">
        <Container>
          <dl className="flex flex-wrap gap-x-8 gap-y-1 text-brand-grey">
            <div className="flex gap-1.5">
              <dt>Studio</dt>
              <dd className="text-white font-semibold">£{lowestPrice}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>1–3 bed</dt>
              <dd className="text-white font-semibold">£{popularPrice}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Commercial from</dt>
              <dd className="text-white font-semibold">£250</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Valid</dt>
              <dd className="text-white font-semibold">10 years</dd>
            </div>
          </dl>
        </Container>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── Domestic pricing table ── */}
        <section id="domestic-pricing" aria-labelledby="domestic-heading">
          <Heading level={2} id="domestic-heading" className="mb-2">
            Domestic EPC costs
          </Heading>
          <p className="text-brand-grey mb-6">
            All domestic EPC prices are fixed by property size. The price you
            see is the price you pay, no call-out charge, no hidden fees, no
            adjustment on the day.
          </p>

          <PriceTable
            title="Domestic EPC, full price breakdown"
            rows={DOMESTIC_EPC_TABLE}
            highlightCheapest
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
            What does the EPC cost cover?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            An EPC assessment is more involved than many landlords expect. The
            assessor must collect detailed data on the property&apos;s construction,
            heating, insulation, and lighting before producing the rating. Here
            is what the cost covers.
          </p>
          <ul className="space-y-3 mb-5" role="list">
            {[
              "Room-by-room measurement of the property's floor area",
              "Inspection of the heating system, boiler type, age, controls, and programmer",
              "Hot water system assessment, cylinder insulation, thermostat, immersion heater",
              "Insulation check, loft, wall type (solid, cavity, or insulated), floor insulation",
              "Window and door glazing type and age",
              "Lighting assessment, fixed lighting, energy-saving bulbs",
              "SAP (Standard Assessment Procedure) calculation run using RdSAP methodology",
              "EPC lodged on the national register at the Landmark Trust EPC Register",
              "A–G rating certificate and improvement recommendations emailed within 24 hours",
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
            The assessment is carried out by an accredited Domestic Energy Assessor
            (DEA) registered with an approved scheme (Elmhurst Energy, Stroma, or
            ECMK). You can verify any assessor and look up any EPC on the{" "}
            <a
              href="https://www.epcregister.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-compliance-blue hover:underline"
            >
              national EPC register
            </a>
            .
          </p>
        </section>

        {/* ── Market comparison ── */}
        <section aria-labelledby="compare-heading">
          <Heading level={2} id="compare-heading" className="mb-4">
            How our EPC costs compare
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            The national average for a domestic EPC quoted by comparison sites is
            typically <strong>£60–£120</strong>. In London, accredited assessors
            often charge <strong>£80–£150</strong> for a standard property, with
            larger homes and next-day lodgement attracting a premium. Prices at
            the very low end (under £50) often come from newly qualified assessors
            building their portfolio, experience and accreditation scheme matter
            for the quality of improvement recommendations you receive.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-compliance-blue text-white">
                  <th scope="col" className="text-left px-4 py-3 font-semibold">
                    Property size
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
                  { size: "Studio / 1 bed", market: "£60–£100", ours: `£${lowestPrice}` },
                  { size: "1–3 bedrooms", market: "£80–£130", ours: `£${popularPrice}` },
                  { size: "4 bedrooms", market: "£100–£150", ours: "£129.99" },
                  { size: "5 bedrooms", market: "£120–£180", ours: `£${largestPrice}` },
                ].map(({ size, market, ours }, i) => (
                  <tr key={size} className={i % 2 === 0 ? "bg-white" : "bg-warm-white"}>
                    <td className="px-4 py-3 text-brand-charcoal font-medium">{size}</td>
                    <td className="px-4 py-3 text-brand-grey">{market}</td>
                    <td className="px-4 py-3 text-compliance-blue font-semibold">{ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-brand-grey">
            Market range figures are approximate, based on published price
            comparison data for London and the M25 area (2025).
          </p>
        </section>

        {/* ── MEES callout ── */}
        <section aria-labelledby="mees-heading">
          <Heading level={2} id="mees-heading" className="mb-4">
            Why the EPC cost matters more than ever, MEES
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Under the Minimum Energy Efficiency Standards (MEES), landlords cannot
            legally let a property with an EPC rating of F or G. The penalty for
            non-compliance can reach <strong>£30,000</strong>. Knowing your
            property&apos;s current EPC rating is the first step, you cannot improve
            what you have not measured.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            The government has indicated it intends to raise the minimum to a
            C rating for new tenancies, though no firm date has been set in
            legislation as of 2025. Landlords whose properties are currently D
            or E would be wise to commission an EPC now to understand what
            improvement works, if any, would be needed to comply.
          </p>

          {/* A–G rating scale */}
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="bg-compliance-blue px-4 py-3">
              <p className="text-white font-semibold text-sm">EPC Rating Scale</p>
            </div>
            <div className="divide-y divide-border">
              {[
                { band: "A", range: "92–100", label: "Most efficient", bg: "bg-green-600", text: "text-white" },
                { band: "B", range: "81–91", label: "Very efficient", bg: "bg-green-500", text: "text-white" },
                { band: "C", range: "69–80", label: "Efficient", bg: "bg-lime-500", text: "text-white", note: "Proposed future minimum" },
                { band: "D", range: "55–68", label: "Average", bg: "bg-yellow-400", text: "text-brand-charcoal" },
                { band: "E", range: "39–54", label: "Below average", bg: "bg-orange-400", text: "text-white", note: "Current legal minimum" },
                { band: "F", range: "21–38", label: "Inefficient", bg: "bg-red-500", text: "text-white", illegal: true },
                { band: "G", range: "1–20", label: "Very inefficient", bg: "bg-red-700", text: "text-white", illegal: true },
              ].map(({ band, range, label, bg, text, note, illegal }) => (
                <div
                  key={band}
                  className="flex items-center gap-4 px-4 py-2.5 bg-white"
                >
                  <span
                    className={cn(
                      "w-8 h-8 rounded font-bold text-sm flex items-center justify-center shrink-0",
                      bg,
                      text,
                    )}
                  >
                    {band}
                  </span>
                  <span className="text-sm text-brand-charcoal w-20 shrink-0">
                    {range} SAP
                  </span>
                  <span className="text-sm text-brand-grey flex-1">{label}</span>
                  {note && (
                    <span className="text-xs font-medium text-compliance-blue bg-compliance-blue/10 px-2 py-0.5 rounded-full shrink-0">
                      {note}
                    </span>
                  )}
                  {illegal && (
                    <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded-full shrink-0">
                      Cannot let
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What affects the cost ── */}
        <section aria-labelledby="cost-factors-heading">
          <Heading level={2} id="cost-factors-heading" className="mb-6">
            What affects the cost of an EPC?
          </Heading>

          <dl className="space-y-4">
            {[
              {
                title: "Property size",
                body: "The primary driver. A larger property takes more time to measure and assess, more rooms, more heating zones, more data collection. A studio might take 30–45 minutes; a 5-bedroom house can take 90 minutes or more. Our pricing reflects this assessment time directly.",
              },
              {
                title: "Property type and construction",
                body: "Older or unusual properties can take longer to assess accurately, solid walls, non-standard construction (timber frame, concrete panel), and converted buildings require more judgement calls from the assessor. Our standard domestic prices cover conventional residential construction.",
              },
              {
                title: "Heating system complexity",
                body: "A property with multiple heating zones, underfloor heating, heat pumps, or solar thermal panels takes longer to assess and document correctly than one with a single combi boiler. The SAP calculation must account for each system accurately.",
              },
              {
                title: "Data available to the assessor",
                body: "An assessor can award better ratings if documentary evidence exists, for example, installation certificates for cavity wall insulation, window FENSA certificates, or boiler commissioning records. Without evidence, the assessor must default to conservative assumptions, which can lower the rating.",
              },
              {
                title: "Commercial vs domestic",
                body: "Commercial EPCs use a different methodology (SBEM rather than RdSAP) and require a Level 4 or 5 energy assessor. They assess the building fabric, HVAC systems, and lighting in much greater detail, which is why commercial EPC costs are significantly higher than domestic assessments.",
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

        {/* ── Commercial EPC pricing ── */}
        <section id="commercial-pricing" aria-labelledby="commercial-heading">
          <Heading level={2} id="commercial-heading" className="mb-2">
            Commercial EPC costs
          </Heading>
          <p className="text-brand-grey mb-6">
            Commercial EPCs are priced by floor area and require a Level 4 or 5
            Non-Domestic Energy Assessor. All commercial properties being let or
            sold must have a valid EPC, the penalty for non-compliance is £500–£5,000.
          </p>

          <PriceTable
            title="Commercial EPC, price by floor area"
            rows={COMMERCIAL_EPC_TABLE}
            highlightCheapest
          />

          <p className="mt-5 text-sm text-brand-grey">
            Need a commercial EPC?{" "}
            <Link
              href="/commercial-epc"
              className="text-compliance-blue hover:underline font-medium"
            >
              View the commercial EPC service page →
            </Link>
          </p>
        </section>

        {/* ── Tips ── */}
        <section aria-labelledby="tips-heading">
          <Heading level={2} id="tips-heading" className="mb-6">
            How to keep your EPC cost as low as possible
          </Heading>
          <ul className="space-y-3" role="list">
            {[
              "Select the correct property size, a studio and a 1-bed are often different tiers. Check your bedroom count before booking.",
              "Have documentation ready, installation certificates for insulation, FENSA certificates for windows, and boiler commissioning records all allow the assessor to award credit without making conservative assumptions.",
              "Make improvements before the assessment, fitting LED lighting and a boiler programmer costs very little but can nudge a D rating towards a C, which matters for MEES compliance.",
              "Bundle with EICR and Gas Safety, our Full Compliance Bundle (all three) costs £230 versus £254.98 separately, saving £24.98 in one visit.",
              "Don't wait until the 10-year expiry, if your property is F or G, renewing the EPC after improvements demonstrates compliance immediately. Commission a new EPC as soon as improvements are made.",
              "Choose a fixed-price provider, variable-rate EPC quotes can be difficult to compare. Our prices are fixed by property size and shown in full before you book.",
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
            Save more, bundle your EPC
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            Most landlords commissioning an EPC also need an{" "}
            <Link href="/eicr" className="text-compliance-blue hover:underline font-medium">
              EICR
            </Link>{" "}
            and a{" "}
            <Link
              href="/gas-safety-certificate"
              className="text-compliance-blue hover:underline font-medium"
            >
              Gas Safety Certificate
            </Link>{" "}
            within the same compliance cycle. Booking all three together saves
            money and eliminates two extra access appointments.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: "Full Compliance Bundle",
                description: "EICR + Gas Safety Certificate + EPC (1–3 bed)",
                individually: "£254.98",
                bundle: "£230",
                saving: "£24.98",
                href: "/book?bundle=full-compliance",
                highlight: true,
              },
              {
                name: "HMO Complete Bundle",
                description: "EICR + Gas Safety + EPC + Fire Risk Assessment",
                individually: "£494.97",
                bundle: "£450",
                saving: "£44.97",
                href: "/book?bundle=hmo-complete",
                highlight: false,
              },
            ].map(({ name, description, individually, bundle, saving, href, highlight }) => (
              <div
                key={name}
                className={cn(
                  "rounded-xl border p-5",
                  highlight
                    ? "border-compliance-blue bg-compliance-blue/5"
                    : "border-border bg-warm-white",
                )}
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
                  className={cn(
                    buttonVariants({
                      variant: highlight ? "primary" : "secondary",
                      size: "sm",
                    }),
                    "w-full",
                  )}
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
              See all bundle options →
            </Link>
          </p>
        </section>

        {/* ── Other cost guides ── */}
        <section aria-labelledby="other-cost-guides-heading">
          <Heading level={2} id="other-cost-guides-heading" className="mb-4">
            Compare other landlord certificate costs
          </Heading>
          <p className="text-brand-charcoal/80 mb-5 text-sm leading-relaxed">
            Most landlords who need an EPC also need an EICR and a Gas Safety
            Certificate. See what each costs and compare all services on our pricing page.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "EICR Certificate Cost", href: "/eicr-cost", price: "from £67.99" },
              { label: "Gas Safety Certificate Cost", href: "/gas-safety-certificate-cost", price: "from £50" },
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
            EPC cost, frequently asked questions
          </Heading>
          <FAQAccordion items={faqItems} includeSchema={false} />
        </section>

        {/* ── CTA ── */}
        <section
          aria-labelledby="cta-heading"
          className="rounded-2xl bg-compliance-blue px-8 py-10 text-center text-white"
        >
          <Heading level={2} id="cta-heading" inverted className="mb-2">
            Get your EPC at a fixed price
          </Heading>
          <p className="text-blue-200 mb-6 max-w-md mx-auto">
            The price on this page is the price you pay, no call-out charges,
            no hidden fees, lodged on the national register within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/book?service=epc"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book my EPC, from £{lowestPrice}
            </Link>
            <Link
              href="/epc"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white/10 border border-white/30 text-white hover:bg-white/20",
              )}
            >
              EPC service overview
            </Link>
          </div>
          <p className="mt-4 text-xs text-blue-300">
            No hidden charges. Accredited DEA assessors. Lodged on national register within 24 hours.
          </p>
        </section>
      </div>

      <ReviewsBlock />

      <StickyMobileCTA
        href="/book?service=epc"
        label="Book EPC"
        price={lowestPrice}
        serviceName="EPC from"
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Heading } from "@/components/ui/heading";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { TrustBadges } from "@/components/ui/trust-badges";
import { cn } from "@/lib/utils";
import {
  ADDITIONAL_CHARGES,
  DOMESTIC_EPC_TABLE,
  getPriceForEPC,
} from "@/lib/pricing";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "EPC Certificate from £89.99 | My Landlord Certificate",
  description:
    "Book an Energy Performance Certificate (EPC) from £89.99. Required before letting any property in England. Accredited DEA assessors, next-day appointments, certificate emailed and lodged on the national register same day.",
  alternates: { canonical: "https://mylandlordcertificate.co.uk/epc" },
  openGraph: {
    title: "EPC Certificate from £89.99 | My Landlord Certificate",
    description:
      "Energy Performance Certificate from £89.99. Accredited DEA assessors, A–G rating, next-day appointments across London and the South East. Certificate emailed and lodged on the national register same day.",
    url: "https://mylandlordcertificate.co.uk/epc",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "EPC — Energy Performance Certificate",
  url: "https://mylandlordcertificate.co.uk/epc",
  description:
    "An EPC rates a property's energy efficiency from A to G. Required before marketing or letting any property in England and Wales. Carried out by accredited Domestic Energy Assessors (DEA). Valid for 10 years. Lodged on the national register same day.",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://mylandlordcertificate.co.uk",
  },
  areaServed: ["London", "South East England"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "EPC Pricing by Property Size",
    itemListElement: [
      { "@type": "Offer", name: "Studio Apartment", price: "89.99", priceCurrency: "GBP" },
      { "@type": "Offer", name: "1–3 Bedrooms", price: "109.99", priceCurrency: "GBP" },
      { "@type": "Offer", name: "4 Bedrooms", price: "129.99", priceCurrency: "GBP" },
      { "@type": "Offer", name: "5 Bedrooms", price: "149.99", priceCurrency: "GBP" },
    ],
  },
  offers: {
    "@type": "Offer",
    price: "89.99",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://mylandlordcertificate.co.uk/epc",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "196",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "EPC Certificate — Energy Performance Certificate for Landlords",
  description:
    "Domestic EPC carried out by accredited Domestic Energy Assessors (DEA). A–G rating, 10-year validity. Lodged on the government Energy Performance of Buildings Register and emailed same day.",
  brand: {
    "@type": "Brand",
    name: "My Landlord Certificate",
  },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "89.99",
    highPrice: "149.99",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    offerCount: 4,
    url: "https://mylandlordcertificate.co.uk/epc",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "196",
    reviewCount: "196",
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
      item: "https://mylandlordcertificate.co.uk",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "EPC Certificate",
      item: "https://mylandlordcertificate.co.uk/epc",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does an EPC cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An EPC starts from £89.99 for a studio apartment. 1–3 bedroom properties cost £109.99, 4 bedrooms cost £129.99, and 5 bedrooms cost £149.99.",
      },
    },
    {
      "@type": "Question",
      name: "How long is an EPC valid for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An EPC is valid for 10 years from the date of assessment, unless significant energy works are carried out — for example, installing wall insulation, a new boiler or solar panels — in which case a new EPC is recommended.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum EPC rating required to let a property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under the Minimum Energy Efficiency Standards (MEES), rental properties in England and Wales must have a minimum EPC rating of E. Properties rated F or G cannot legally be let without a registered exemption from the local authority.",
      },
    },
    {
      "@type": "Question",
      name: "What is MEES?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEES stands for the Minimum Energy Efficiency Standards, introduced by the Energy Efficiency (Private Rented Property) (England and Wales) Regulations 2015. They set a minimum EPC rating of E for all private rented properties. Landlords with F or G rated properties must either improve them or register a valid exemption.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a new EPC for each new tenancy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — as long as your EPC is within its 10-year validity period, you can reuse the same certificate for successive tenancies. You must be able to provide a copy to prospective tenants before marketing the property.",
      },
    },
    {
      "@type": "Question",
      name: "What happens during an EPC assessment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An accredited Domestic Energy Assessor (DEA) visits the property and surveys construction type, insulation, heating systems, hot water, windows and lighting. The assessment takes 30–60 minutes, requires no testing and causes no disruption. The DEA then calculates the SAP rating and produces the certificate.",
      },
    },
    {
      "@type": "Question",
      name: "Is the EPC lodged on the national register?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All EPCs are lodged on the government's Energy Performance of Buildings Register on the day of assessment. You can access your certificate at any time using your property's postcode at epcregister.com.",
      },
    },
    {
      "@type": "Question",
      name: "My property is rated F or G — what are my options?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You must either improve the property to achieve an E rating or register a valid exemption. Common improvements include loft insulation, cavity wall insulation, a more efficient boiler or LED lighting. If improvement costs exceed £3,500 (the cost cap), you may be able to register a cost-cap exemption.",
      },
    },
    {
      "@type": "Question",
      name: "What factors affect an EPC rating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main factors are: boiler efficiency and age, insulation (loft, walls, floor), window glazing type, heating controls, hot water system, lighting type, and the property's construction and age. Older properties with solid walls and electric heating typically score lower.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use an existing EPC when I buy a rental property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, if the existing EPC is within its 10-year validity period and reflects the current state of the property. If significant works have been done since the last assessment, or if it will expire during your planned tenancy, commission a fresh EPC.",
      },
    },
  ],
};

// ── FAQ items ─────────────────────────────────────────────────────────────────

const faqItems = [
  {
    question: "How much does an EPC cost?",
    answer:
      "An EPC starts from £89.99 for a studio apartment. 1–3 bedroom properties cost £109.99, 4 bedrooms cost £129.99, and 5 bedrooms cost £149.99. See the full pricing table above.",
  },
  {
    question: "How long is an EPC valid for?",
    answer:
      "10 years from the date of assessment, unless significant energy works are carried out — for example, installing wall insulation, a new boiler or solar panels. In those cases a new EPC is recommended so the rating reflects the improvements and can be used to demonstrate compliance with MEES.",
  },
  {
    question: "Do I need a new EPC for each new tenancy?",
    answer:
      "No. As long as your EPC is within its 10-year validity period, you can reuse it for successive tenancies. You must provide a copy to prospective tenants before marketing the property — not just at the point of signing. You only need a fresh EPC when the current one expires or when significant works have changed the property's energy performance.",
  },
  {
    question: "What is the minimum EPC rating to legally let a property?",
    answer:
      "Under the Minimum Energy Efficiency Standards (MEES), all private rented properties in England and Wales must have a minimum EPC rating of E. Properties rated F or G cannot be legally let without a registered exemption. The government has signalled intentions to raise the minimum to C in the future — landlords with lower-rated properties should plan ahead.",
  },
  {
    question: "What is MEES?",
    answer:
      "MEES stands for the Minimum Energy Efficiency Standards, introduced by the Energy Efficiency (Private Rented Property) (England and Wales) Regulations 2015. They set a minimum EPC rating of E for all privately rented properties. Landlords with F or G rated properties must either carry out qualifying improvements or register a valid exemption with their local authority.",
  },
  {
    question: "My property is rated F or G — what are my options?",
    answer:
      "You must either improve the property to reach an E rating or register a valid exemption. The most cost-effective improvements are typically loft insulation, cavity wall insulation, an efficient condensing boiler and LED lighting. If the cost of all relevant improvements would exceed £3,500 (the cost cap), you may qualify for a cost-cap exemption — but the property still cannot be let while rated below E without a registered exemption.",
  },
  {
    question: "What happens during an EPC assessment?",
    answer:
      "An accredited Domestic Energy Assessor (DEA) visits the property and surveys construction type, insulation, heating system, hot water, window glazing and lighting. The assessment takes 30–60 minutes, requires no testing and causes no disruption to the property or tenants. The DEA then calculates the Standard Assessment Procedure (SAP) score and produces the certificate.",
  },
  {
    question: "Is the EPC lodged on the national register?",
    answer:
      "Yes — all EPCs we produce are lodged on the government's Energy Performance of Buildings Register on the day of assessment. You can access your certificate at any time using your property's postcode at epcregister.com. Your tenant can also check it online.",
  },
  {
    question: "What factors affect an EPC rating?",
    answer:
      "The main factors are: boiler efficiency and age, loft and wall insulation, window glazing type (single, double or triple), heating controls, hot water system, lighting type and the property's construction type and age. Older properties with solid brick walls and electric storage heating typically score lower. An EPC includes a list of recommended improvements with their estimated impact on the rating.",
  },
  {
    question: "Can I use an existing EPC when I buy a rental property?",
    answer:
      "Yes, if the existing EPC is within its 10-year validity period and accurately reflects the current state of the property. If significant works have been done since the last assessment — such as a new boiler or insulation — commission a fresh EPC so the rating reflects those improvements. Contact us on 0330 133 0066 if you're unsure.",
  },
];

const lowestPrice = getPriceForEPC("studio");
const highestPrice = getPriceForEPC("5bed");

// ── EPC rating bands ──────────────────────────────────────────────────────────

const ratingBands = [
  { band: "A", range: "92–100", label: "Most efficient", bg: "bg-green-700", text: "text-white" },
  { band: "B", range: "81–91", label: "Very efficient", bg: "bg-green-500", text: "text-white" },
  { band: "C", range: "69–80", label: "Efficient", bg: "bg-lime-500", text: "text-white" },
  { band: "D", range: "55–68", label: "Average", bg: "bg-yellow-400", text: "text-brand-charcoal" },
  { band: "E", range: "39–54", label: "Minimum for letting", bg: "bg-orange-400", text: "text-white", note: true },
  { band: "F", range: "21–38", label: "Below minimum — cannot let", bg: "bg-orange-600", text: "text-white", illegal: true },
  { band: "G", range: "1–20", label: "Least efficient — cannot let", bg: "bg-red-700", text: "text-white", illegal: true },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function EpcPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── 1. Hero ────────────────────────────────────────────────────────── */}
      <section aria-labelledby="epc-heading" className="bg-compliance-blue text-white">
        <Container className="py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-blue-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li className="text-white font-medium">EPC Certificate</li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            Accredited DEA Assessors · National Register Lodgement · London &amp; South East
          </p>

          <Heading level={1} id="epc-heading" inverted className="mb-4 max-w-2xl">
            EPC Certificate from £{lowestPrice}
          </Heading>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-3">
            Energy Performance Certificate — required before marketing or letting
            any property in England. Accredited Domestic Energy Assessors,
            no hidden charges, A–G rating lodged on the national register and
            emailed the same day.
          </p>

          <p className="text-blue-200 text-base mb-6 max-w-xl">
            Next-day appointments available across London and the South East.
            Most assessments confirmed within 1–3 days.
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
              Book my EPC — from £{lowestPrice}
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

          <TrustBadges variant="dark" />
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
              <dt>Valid for</dt>
              <dd className="text-white font-semibold">10 years</dd>
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
              <dt>Lodged on</dt>
              <dd className="text-white font-semibold">national register</dd>
            </div>
          </dl>
        </Container>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── 3. What is an EPC ───────────────────────────────────────────── */}
        <section id="what-is-it" aria-labelledby="what-is-it-heading">
          <Heading level={2} id="what-is-it-heading" className="mb-4">
            What is an EPC?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            An Energy Performance Certificate (EPC) is an official document that
            rates a property&apos;s energy efficiency on a scale from A (most
            efficient) to G (least efficient). An accredited Domestic Energy
            Assessor (DEA) visits the property, surveys construction, insulation,
            heating systems, hot water, windows and lighting, then calculates a
            Standard Assessment Procedure (SAP) score using government-approved
            software. The result is your energy efficiency rating and a set of
            tailored improvement recommendations.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            The certificate is valid for 10 years and must be made available to
            prospective tenants before the property is marketed — not just at the
            point of tenancy agreement. A copy is automatically lodged on the
            government&apos;s Energy Performance of Buildings Register, where tenants
            and local authorities can check it at any time.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            For landlords, the EPC also determines whether your property meets
            the Minimum Energy Efficiency Standards (MEES). Properties rated F or
            G cannot be legally let without a registered exemption — making the
            EPC one of the most consequential compliance documents in the private
            rented sector.
          </p>
          <div className="rounded-xl bg-amber-50 border border-brand-amber/30 p-5 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Legal requirement: </strong>
            The Energy Performance of Buildings (England and Wales) Regulations
            2012 require a valid EPC before any property is marketed for let or
            sale. The Minimum Energy Efficiency Standards (MEES) additionally
            require a minimum rating of E — failure to meet either requirement
            can result in a civil penalty of up to{" "}
            <strong>£5,000 per property</strong>.
          </div>
        </section>

        {/* ── 4. MEES and legal requirements ─────────────────────────────── */}
        <section aria-labelledby="mees-heading">
          <Heading level={2} id="mees-heading" className="mb-4">
            MEES — Minimum Energy Efficiency Standards for landlords
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            The Minimum Energy Efficiency Standards, introduced by the Energy
            Efficiency (Private Rented Property) (England and Wales) Regulations
            2015, set a legal floor on the energy performance of rental properties.
            Since 1 April 2020, no landlord in England or Wales may let a property
            — to a new or existing tenant — with an EPC rating below E, unless a
            valid exemption is registered with the local authority.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            If your property is currently rated F or G, you must carry out qualifying
            improvement works to reach E before reletting. The cost-cap rule means
            that if all relevant improvements would cost more than £3,500 (including
            VAT), you can register a cost-cap exemption — but the property cannot be
            let while rated below E without it. The government has signalled a
            future intention to raise the minimum to C; landlords with D and E rated
            properties should factor this into their longer-term plans.
          </p>

          <div className="rounded-xl bg-warm-white border border-border p-5">
            <p className="font-semibold text-brand-charcoal mb-3">
              As a landlord you must:
            </p>
            <ul className="space-y-2 text-sm text-brand-charcoal/80">
              {[
                "Hold a valid EPC before marketing the property for let",
                "Provide a copy of the EPC to prospective tenants before they sign",
                "Ensure the property meets the minimum E rating under MEES before letting",
                "Register a valid exemption if the property cannot reach E — and renew it every 5 years",
                "Commission a new EPC if the current one expires or significant works change the rating",
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
        </section>

        {/* ── 5. A–G rating scale ─────────────────────────────────────────── */}
        <section aria-labelledby="ratings-heading">
          <Heading level={2} id="ratings-heading" className="mb-4">
            EPC rating bands explained
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Each EPC rating corresponds to a SAP score from 1 to 100. The higher
            the score, the more energy-efficient the property and the lower the
            estimated running costs. The rating shown is the current rating — the
            EPC also shows a potential rating, indicating what could be achieved
            if all recommended improvements were carried out.
          </p>

          <div className="space-y-2" role="list" aria-label="EPC rating bands">
            {ratingBands.map(({ band, range, label, bg, text, note, illegal }) => (
              <div
                key={band}
                role="listitem"
                className="flex items-center gap-3"
              >
                <span
                  className={cn(
                    "inline-flex items-center justify-center w-10 h-10 rounded-lg font-bold text-lg shrink-0",
                    bg,
                    text,
                  )}
                >
                  {band}
                </span>
                <div className="flex-1 min-w-0">
                  <div
                    className={cn(
                      "rounded-md px-3 py-2 flex items-center justify-between gap-2",
                      bg,
                      "opacity-90",
                    )}
                  >
                    <span className={cn("text-sm font-medium", text)}>
                      {label}
                    </span>
                    <span className={cn("text-xs font-mono", text, "opacity-80")}>
                      SAP {range}
                    </span>
                  </div>
                </div>
                {(note || illegal) && (
                  <span className={cn(
                    "text-xs font-semibold shrink-0 px-2 py-1 rounded",
                    illegal
                      ? "bg-red-100 text-red-700"
                      : "bg-orange-100 text-orange-700",
                  )}>
                    {illegal ? "Cannot let" : "Minimum"}
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm text-brand-grey">
            Most pre-2000 properties without insulation improvements sit at D or
            E. Modern new builds typically achieve B or C. The national average
            for rental properties is around D (SAP 60).
          </p>
        </section>

        {/* ── 6. Pricing ──────────────────────────────────────────────────── */}
        <section id="pricing" aria-labelledby="pricing-heading">
          <Heading level={2} id="pricing-heading" className="mb-2">
            EPC pricing
          </Heading>
          <p className="text-brand-grey mb-6">
            Fixed pricing by property size. The price you see is the price you
            pay — no call-out charges, no hidden fees. Our EPC covers studio
            apartments from £{lowestPrice} up to 5-bedroom properties at
            £{highestPrice}. For larger or commercial properties see the link below.
          </p>

          <PriceTable
            title="Domestic EPC — price by property size"
            rows={DOMESTIC_EPC_TABLE}
            highlightCheapest
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
            Need an EPC for a commercial property?{" "}
            <Link
              href="/commercial-epc"
              className="text-compliance-blue hover:underline font-medium"
            >
              See commercial EPC pricing →
            </Link>
          </p>

          <div className="mt-5 rounded-xl bg-compliance-blue/5 border border-compliance-blue/20 p-4 text-sm text-brand-charcoal/80">
            Need an EPC alongside an{" "}
            <Link
              href="/eicr"
              className="text-compliance-blue hover:underline font-medium"
            >
              EICR
            </Link>{" "}
            or{" "}
            <Link
              href="/gas-safety-certificate"
              className="text-compliance-blue hover:underline font-medium"
            >
              Gas Safety Certificate (CP12)
            </Link>
            ? Save by booking all three in our{" "}
            <Link
              href="/landlord-certificates-bundle"
              className="text-compliance-blue hover:underline font-medium"
            >
              landlord certificates bundle →
            </Link>
          </div>
        </section>

        {/* ── 7. What's included ──────────────────────────────────────────── */}
        <section aria-labelledby="included-heading">
          <Heading level={2} id="included-heading" className="mb-4">
            What&apos;s included for £{lowestPrice}
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Every EPC assessment covers the full SAP calculation for the property
            at no extra cost beyond the price shown.
          </p>
          <ul className="space-y-3" role="list">
            {[
              "Full domestic energy assessment by an accredited Domestic Energy Assessor (DEA)",
              "Survey of construction, insulation, heating, hot water, windows and lighting",
              "Standard Assessment Procedure (SAP) score calculation",
              "A–G energy efficiency rating and potential rating if improvements are made",
              "Tailored improvement recommendations with estimated impact on rating and bills",
              "Automatic lodgement on the government's Energy Performance of Buildings Register",
              "EPC certificate emailed on the day of the assessment",
              "10-year validity from date of assessment",
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

        {/* ── 8. How it works ─────────────────────────────────────────────── */}
        <section aria-labelledby="how-it-works-heading">
          <Heading level={2} id="how-it-works-heading" className="mb-4">
            How to book your landlord EPC
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-8">
            Booking an EPC takes under 3 minutes. Next-day appointments available
            across all 32 London boroughs and the wider South East.
          </p>

          <ol className="grid md:grid-cols-3 gap-8" role="list">
            {[
              {
                step: "01",
                title: "Book online",
                body: "Select your property size, choose a date and pay securely online. Next-day slots available across London and the South East — no phone calls required. Confirmation arrives immediately.",
              },
              {
                step: "02",
                title: "DEA assessor visits",
                body: "An accredited Domestic Energy Assessor arrives and surveys the property. The assessment takes 30–60 minutes and causes no disruption — no testing, no drilling. Your tenant can provide access if you can't be there.",
              },
              {
                step: "03",
                title: "Certificate emailed same day",
                body: "Your EPC is lodged on the national register and emailed to you on the day of the assessment. Share it with prospective tenants, your letting agent or your mortgage lender — it's instantly verifiable online.",
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

        {/* ── 9. DEA accreditation ────────────────────────────────────────── */}
        <section aria-labelledby="dea-heading">
          <Heading level={2} id="dea-heading" className="mb-4">
            Accredited Domestic Energy Assessors
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Only an accredited Domestic Energy Assessor (DEA) can produce a
            legally valid EPC. DEAs are trained and assessed against government
            standards and must belong to a government-approved accreditation
            scheme — such as Elmhurst Energy, Stroma or ECMK — which monitor
            their work, manage their software licences and maintain their right
            to lodge certificates on the national register.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            An EPC produced by an unaccredited assessor cannot be lodged on the
            register and is legally worthless — it will not satisfy the
            requirements of the Energy Performance of Buildings Regulations 2012
            or MEES. Every assessment booked through My Landlord Certificate is
            carried out by a fully accredited DEA. You can verify any assessor&apos;s
            accreditation on the{" "}
            <a
              href="https://www.epcregister.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-compliance-blue hover:underline font-medium"
            >
              EPC Register
            </a>
            .
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            After the assessment, the DEA lodges the certificate directly on the
            national register using their accreditation credentials. Your EPC is
            then publicly searchable by postcode — tenants, letting agents and
            local authorities can verify it independently without contacting you.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { stat: "4.8★", label: "Trustpilot rating", sub: "from 196 EPC reviews" },
              { stat: "Same day", label: "Certificate & lodgement", sub: "on day of assessment" },
              { stat: "10 years", label: "EPC validity", sub: "from date of assessment" },
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
            See what landlords say about our EPC service on our{" "}
            <Link
              href="/reviews"
              className="text-compliance-blue hover:underline font-medium"
            >
              reviews page →
            </Link>
          </p>
        </section>

        {/* ── 10. FAQs ────────────────────────────────────────────────────── */}
        <section aria-labelledby="faq-heading">
          <Heading level={2} id="faq-heading" className="mb-6">
            EPC frequently asked questions
          </Heading>
          <FAQAccordion items={faqItems} includeSchema={false} />

          <p className="mt-6 text-sm text-brand-grey text-center">
            More questions about EPCs?{" "}
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
            Ready to book your EPC?
          </Heading>
          <p className="text-blue-200 mb-2 max-w-md mx-auto">
            Book online in under 3 minutes. An accredited DEA assessor will
            confirm your appointment. EPC lodged on the national register and
            emailed the same day.
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
            href="/book?service=epc"
            className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
          >
            Book my EPC — from £{lowestPrice}
          </Link>
          <p className="mt-4 text-xs text-blue-300">
            No hidden charges. Accredited DEA assessors. National register lodgement same day.
          </p>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=epc"
        label="Book EPC"
        price={lowestPrice}
        serviceName="EPC from"
      />
    </>
  );
}

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
  DOMESTIC_EICR_TABLE,
  getPriceForEICR,
} from "@/lib/pricing";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "EICR Certificate from £67.99 | My Landlord Certificate",
  description:
    "Book an EICR (Electrical Installation Condition Report) from £67.99. Legally required for all landlords in England since 2020. NICEIC approved and NAPIT certified electricians, next-day appointments, certificate emailed same day.",
  alternates: { canonical: "https://www.mylandlordcertificate.co.uk/eicr" },
  openGraph: {
    title: "EICR Certificate from £67.99 | My Landlord Certificate",
    description:
      "Electrical Installation Condition Report from £67.99. NICEIC approved and NAPIT certified engineers, next-day appointments across London and the South East, certificate emailed same day.",
    url: "https://www.mylandlordcertificate.co.uk/eicr",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "EICR — Electrical Installation Condition Report",
  url: "https://www.mylandlordcertificate.co.uk/eicr",
  description:
    "An EICR (Electrical Installation Condition Report) is a formal assessment of all fixed electrical wiring and installations in a property. Legally required for all private rented properties in England. NICEIC approved and NAPIT certified electricians, certificate emailed same day.",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://www.mylandlordcertificate.co.uk",
  },
  areaServed: ["London", "South East England"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "EICR Pricing by Property Size",
    itemListElement: [
      { "@type": "Offer", name: "Studio Apartment", price: "67.99", priceCurrency: "GBP" },
      { "@type": "Offer", name: "1–3 Bedrooms", price: "94.99", priceCurrency: "GBP" },
      { "@type": "Offer", name: "4 Bedrooms", price: "104.99", priceCurrency: "GBP" },
    ],
  },
  offers: {
    "@type": "Offer",
    price: "67.99",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://www.mylandlordcertificate.co.uk/eicr",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "EICR Certificate — Electrical Installation Condition Report",
  description:
    "Landlord EICR (Electrical Installation Condition Report) carried out by NICEIC approved and NAPIT certified electricians. Covers all fixed wiring, consumer units, sockets and light fittings. Certificate emailed same day.",
  brand: {
    "@type": "Brand",
    name: "My Landlord Certificate",
  },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "67.99",
    highPrice: "199.99",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    offerCount: 7,
    url: "https://www.mylandlordcertificate.co.uk/eicr",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "312",
    reviewCount: "312",
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
      name: "EICR Certificate",
      item: "https://www.mylandlordcertificate.co.uk/eicr",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is an EICR a legal requirement for landlords?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020 require all landlords in England to hold a valid EICR. New tenancies required compliance from July 2020; all existing tenancies from April 2021. Failure to comply carries a civil penalty of up to £30,000.",
      },
    },
    {
      "@type": "Question",
      name: "How often do I need an EICR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every 5 years, or at each change of tenancy — whichever comes first. If the report recommends a shorter re-inspection interval (e.g. 2 years for an older installation), that interval applies instead.",
      },
    },
    {
      "@type": "Question",
      name: "How much does an EICR cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An EICR starts from £67.99 for a studio apartment. A 1–3 bedroom property costs £94.99. Prices scale by property size up to £199.99 for an 8-bedroom property. See our full pricing table on this page.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my property fails an EICR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You will receive a C1 (danger present) or C2 (potentially dangerous) code. The result is 'unsatisfactory' and remedial works must be completed within 28 days. You must evidence completion in writing to your local authority. C1 hazards must be made safe before the engineer leaves.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an EICR inspection take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically 2–4 hours depending on property size and the age of the wiring. An older property with complex wiring may take longer. Our engineer will call ahead to confirm the expected duration.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a new EICR for each new tenancy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily — your EICR is valid for 5 years from the date of issue. You need a new one if your current certificate has expired, or if the engineer recommended a shorter re-inspection interval.",
      },
    },
    {
      "@type": "Question",
      name: "Does an EICR cover electrical appliances?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. An EICR covers only fixed electrical wiring, consumer units, sockets and light fittings — the permanent installation. Portable appliances (white goods, lamps, TVs) are tested separately by PAT Testing.",
      },
    },
    {
      "@type": "Question",
      name: "What accreditations do your electricians hold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our electricians are either NICEIC approved or NAPIT certified — both are government-recognised competent person schemes assessed against BS 7671 (the IET Wiring Regulations). An EICR carried out by a NICEIC approved or NAPIT certified electrician is accepted by all UK local authorities, letting agents and mortgage lenders.",
      },
    },
  ],
};

// ── FAQ items ─────────────────────────────────────────────────────────────────

const faqItems = [
  {
    question: "Is an EICR a legal requirement for landlords?",
    answer:
      "Yes. The Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020 require all landlords in England to hold a valid EICR. New tenancies required compliance from July 2020; all existing tenancies from April 2021. Failure to comply carries a civil penalty of up to £30,000 per property.",
  },
  {
    question: "How often do I need an EICR?",
    answer:
      "Every 5 years, or at each change of tenancy — whichever comes first. If the report recommends a shorter re-inspection interval (for example 2 years on an older or complex installation), that interval applies instead. Always keep the certificate on file — you must be able to provide it to tenants and your local authority on request.",
  },
  {
    question: "How much does an EICR cost?",
    answer:
      "An EICR starts from £67.99 for a studio apartment. A 1–3 bedroom property costs £94.99. Prices scale by property size up to £199.99 for an 8-bedroom HMO. See the full pricing table above, or visit our EICR cost guide for a breakdown of what affects the price.",
  },
  {
    question: "What happens if my property fails an EICR?",
    answer:
      "You will receive a C1 (danger present) or C2 (potentially dangerous) code — either results in an 'unsatisfactory' report. Remedial works must be completed within 28 days and evidenced in writing to your local authority. C1 hazards are made safe by the engineer on the day before they leave. We can arrange remedial works through our network of NICEIC approved electricians.",
  },
  {
    question: "How long does an EICR inspection take?",
    answer:
      "Typically 2–4 hours depending on property size and the age of the electrical installation. Older properties with rewirable fuses or aluminium wiring may take longer. You don't need to be present — a tenant or keyholder can provide access and the certificate will be emailed directly to you.",
  },
  {
    question: "Do I need a new EICR for each new tenancy?",
    answer:
      "Not necessarily. Your EICR is valid for 5 years from the date of issue. You need a new one only if the current certificate has expired or if the engineer recommended a shorter re-inspection interval. You must provide a copy of your current EICR to each new tenant before they move in.",
  },
  {
    question: "Does an EICR cover electrical appliances?",
    answer:
      "No. An EICR covers only the fixed electrical installation — wiring, consumer unit, sockets, switches and light fittings. Portable appliances supplied with a furnished tenancy (white goods, TVs, lamps) are covered separately by PAT Testing. If you supply appliances, you may need both.",
  },
  {
    question: "What accreditations do your electricians hold?",
    answer:
      "Our electricians are either NICEIC approved or NAPIT certified — both are government-recognised competent person schemes assessed annually against BS 7671 (the IET Wiring Regulations). An EICR from a NICEIC approved or NAPIT certified electrician is accepted by all UK local authorities, letting agents and mortgage lenders. You can verify any engineer's registration on the NICEIC contractor search or the NAPIT member finder.",
  },
];

const lowestPrice = getPriceForEICR("studio");
const highestPrice = getPriceForEICR("8bed");

// ── Page ──────────────────────────────────────────────────────────────────────

export default function EicrPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── 1. Hero ────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="eicr-heading"
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
              <li className="text-white font-medium">EICR Certificate</li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            NICEIC Approved · NAPIT Certified · Electrical Safety Certificate
          </p>

          <Heading level={1} id="eicr-heading" inverted className="mb-4 max-w-2xl">
            EICR Certificate from £{lowestPrice}
          </Heading>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-3">
            Electrical Installation Condition Report — a legal requirement for all
            private rented properties in England since 2020. NICEIC approved and
            NAPIT certified electricians, no hidden charges, certificate emailed the same day.
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
              href="/book?service=eicr"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book my EICR — from £{lowestPrice}
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

          <TrustBadges serviceKey="eicr" variant="dark" />
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
              <dd className="text-white font-semibold">5 years</dd>
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
              <dd className="text-white font-semibold">NICEIC &amp; NAPIT</dd>
            </div>
          </dl>
        </Container>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── 3. What is an EICR ─────────────────────────────────────────── */}
        <section id="what-is-it" aria-labelledby="what-is-it-heading">
          <Heading level={2} id="what-is-it-heading" className="mb-4">
            What is an EICR?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            An EICR (Electrical Installation Condition Report) is a formal
            assessment of all fixed electrical wiring, consumer units and
            installations within a property. A qualified NICEIC approved or
            NAPIT certified electrician tests every circuit from the fuse board,
            checks all sockets, light fittings, bonding and earthing
            arrangements, and assigns a condition code to anything that falls
            below the current British Standard BS 7671 — the IET Wiring Regulations.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            The result is a written report that tells you exactly what state the
            electrical installation is in, what — if anything — needs attention,
            and whether the property is safe for continued occupation. An EICR
            is not the same as a test of your appliances: it covers only the
            fixed installation. Portable appliances supplied with a furnished
            tenancy are tested separately by{" "}
            <Link
              href="/pat-testing"
              className="text-compliance-blue hover:underline font-medium"
            >
              PAT Testing
            </Link>
            .
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            For landlords in the private rented sector, an EICR is the single
            most important electrical safety document you need to hold. Without
            a valid certificate on file you are in breach of the Electrical
            Safety Standards in the Private Rented Sector (England) Regulations
            2020 — and your local authority can issue a remedial notice and a
            civil penalty of up to £30,000.
          </p>
          <div className="rounded-xl bg-amber-50 border border-brand-amber/30 p-5 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Legal requirement: </strong>
            The Electrical Safety Standards in the Private Rented Sector
            (England) Regulations 2020 require every landlord to have a valid
            EICR, provide a copy to tenants before they move in, and supply a
            copy to their local authority within 7 days of a written request.
            Failure to comply can result in a civil penalty of up to{" "}
            <strong>£30,000 per property</strong>.
          </div>
        </section>

        {/* ── 4. Legal requirement detail ────────────────────────────────── */}
        <section aria-labelledby="legal-heading">
          <Heading level={2} id="legal-heading" className="mb-4">
            EICR legal requirements for landlords
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Since April 2021, every landlord of a privately rented property in
            England has been legally required to hold a valid Electrical
            Installation Condition Report. The requirement was introduced by the
            Electrical Safety Standards in the Private Rented Sector (England)
            Regulations 2020, which apply to all tenancy types — assured
            shorthold tenancies, periodic tenancies, HMO licences and student
            lets alike.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            Your EICR must be carried out by a qualified electrician — one who
            is competent to test and assess electrical installations. In
            practice this means a registered electrician, and NICEIC approval
            or NAPIT certification are both widely recognised as the benchmark
            accreditations by councils, letting agents and mortgage lenders
            across England.
          </p>

          <div className="rounded-xl bg-warm-white border border-border p-5 mb-5">
            <p className="font-semibold text-brand-charcoal mb-3">
              As a landlord you must:
            </p>
            <ul className="space-y-2 text-sm text-brand-charcoal/80">
              {[
                "Commission an EICR at least every 5 years (or at each change of tenancy if sooner)",
                "Use a qualified and competent electrician — ideally NICEIC approved or NAPIT certified",
                "Provide a copy of the EICR to every tenant before or at the start of their tenancy",
                "Provide a copy to your local housing authority within 7 days of a written request",
                "Arrange and evidence completion of remedial works within 28 days of a C1 or C2 finding",
                "Retain the EICR and any remedial completion evidence for at least the next inspection cycle",
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
            The regulations apply to residential rental properties in England
            only. If your rental property is in Wales, Scotland or Northern
            Ireland, separate electrical safety legislation applies — check with
            your local authority for the current requirements.
          </p>
        </section>

        {/* ── 5. Pricing ──────────────────────────────────────────────────── */}
        <section id="pricing" aria-labelledby="pricing-heading">
          <Heading level={2} id="pricing-heading" className="mb-2">
            EICR pricing
          </Heading>
          <p className="text-brand-grey mb-6">
            Fixed pricing by property size. The price shown is the price you
            pay — no call-out charges, no hidden fees. Our EICR covers studio
            apartments from £{lowestPrice} up to 8-bedroom HMO properties at
            £{highestPrice}. For a detailed breakdown of what affects the cost,
            see our{" "}
            <Link
              href="/eicr-cost"
              className="text-compliance-blue hover:underline font-medium"
            >
              EICR cost guide
            </Link>
            .
          </p>

          <PriceTable
            title="Domestic EICR — price by property size"
            rows={DOMESTIC_EICR_TABLE}
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
            Want a detailed breakdown of what drives EICR costs?{" "}
            <Link
              href="/eicr-cost"
              className="text-compliance-blue hover:underline font-medium"
            >
              See our full EICR pricing guide →
            </Link>
          </p>

          <p className="mt-3 text-sm text-brand-grey">
            Need an EICR for a commercial property?{" "}
            <Link
              href="/commercial-eicr"
              className="text-compliance-blue hover:underline font-medium"
            >
              See commercial EICR pricing →
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
            Booking an EICR alongside a{" "}
            <Link
              href="/gas-safety-certificate"
              className="text-compliance-blue hover:underline font-medium"
            >
              Gas Safety Certificate (CP12)
            </Link>{" "}
            or{" "}
            <Link
              href="/epc"
              className="text-compliance-blue hover:underline font-medium"
            >
              EPC
            </Link>
            ? Save by combining them in our{" "}
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
            Every EICR we carry out covers the complete fixed electrical
            installation from consumer unit to final circuit, at no extra cost
            beyond the price shown.
          </p>
          <ul className="space-y-3" role="list">
            {[
              "Full inspection of all fixed wiring, sockets, switches and light fittings",
              "Consumer unit (fuse board) check — type, condition, labelling and protection devices",
              "Test of every circuit for continuity, insulation resistance and polarity",
              "Earth bonding and earthing arrangement check",
              "Condition code (C1, C2, C3 or FI) assigned to every identified defect",
              "Written EICR report with prioritised recommendations",
              "Signed landlord EICR certificate emailed on the same day",
              "PDF suitable for providing to your tenant and local authority",
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

        {/* ── 7. Condition codes ──────────────────────────────────────────── */}
        <section aria-labelledby="codes-heading">
          <Heading level={2} id="codes-heading" className="mb-4">
            EICR condition codes explained
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Every circuit and fitting inspected during an EICR receives one of
            four condition codes. The codes determine whether your EICR result
            is "satisfactory" or "unsatisfactory" and what action — if any — you
            must take.
          </p>

          <div className="space-y-4">
            {[
              {
                code: "C1",
                label: "Danger present",
                colour: "bg-red-50 border-red-200",
                badge: "bg-red-100 text-red-700",
                body: "An immediate risk to the occupants of the property. A C1 code means the engineer must make the hazard safe before leaving. The EICR result will be 'unsatisfactory.' Remedial works are required immediately — the property must not be occupied until the C1 is resolved and evidenced.",
              },
              {
                code: "C2",
                label: "Potentially dangerous",
                colour: "bg-orange-50 border-orange-200",
                badge: "bg-orange-100 text-orange-700",
                body: "A fault that is not immediately dangerous but could become so. A C2 code results in an 'unsatisfactory' EICR. Remedial works must be completed within 28 days and evidenced in writing to your local authority. You should not allow a new tenancy to begin until C2 codes are resolved.",
              },
              {
                code: "C3",
                label: "Improvement recommended",
                colour: "bg-yellow-50 border-yellow-200",
                badge: "bg-yellow-100 text-yellow-700",
                body: "An item that doesn't fully meet the current standard but is not dangerous. A C3 code does not cause the EICR to fail — your property can still receive a 'satisfactory' result. Addressing C3 codes is strongly recommended but not legally required within a set timeframe.",
              },
              {
                code: "FI",
                label: "Further investigation required",
                colour: "bg-blue-50 border-blue-200",
                badge: "bg-blue-100 text-blue-700",
                body: "An area that could not be fully assessed during the inspection — typically due to restricted access or concealed wiring. A property with FI codes cannot receive a satisfactory result until the investigation is completed and findings confirmed.",
              },
            ].map(({ code, label, colour, badge, body }) => (
              <div
                key={code}
                className={cn(
                  "rounded-xl border p-5 flex gap-4",
                  colour,
                )}
              >
                <span
                  className={cn(
                    "inline-flex items-center justify-center rounded-lg px-3 py-1 text-sm font-bold shrink-0 h-fit",
                    badge,
                  )}
                >
                  {code}
                </span>
                <div>
                  <p className="font-semibold text-brand-charcoal mb-1">
                    {label}
                  </p>
                  <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm text-brand-grey">
            If your EICR comes back unsatisfactory, we can arrange remedial
            works through our network of NICEIC approved and NAPIT certified electricians. Contact
            us on{" "}
            <a
              href="tel:03301330066"
              className="text-compliance-blue hover:underline font-medium"
            >
              0330 133 0066
            </a>{" "}
            or see our{" "}
            <Link
              href="/faq"
              className="text-compliance-blue hover:underline font-medium"
            >
              frequently asked questions
            </Link>
            .
          </p>
        </section>

        {/* ── 8. How it works ─────────────────────────────────────────────── */}
        <section aria-labelledby="how-it-works-heading">
          <Heading level={2} id="how-it-works-heading" className="mb-4">
            How to book your landlord EICR
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-8">
            Booking an EICR takes under 3 minutes. Next-day appointments are
            available across all 32 London boroughs and the wider South East.
          </p>

          <ol className="grid md:grid-cols-3 gap-8" role="list">
            {[
              {
                step: "01",
                title: "Book online",
                body: "Select your property size, choose a date and pay securely online. Next-day slots available across London and the South East — no phone calls required. You'll receive a booking confirmation immediately.",
              },
              {
                step: "02",
                title: "Accredited electrician visits",
                body: "A NICEIC approved or NAPIT certified electrician arrives at your agreed time and carries out the full EICR inspection. You don't need to be present — a tenant, keyholder or letting agent can provide access. The inspection typically takes 2–4 hours.",
              },
              {
                step: "03",
                title: "Certificate emailed same day",
                body: "Your signed EICR certificate and report are emailed to you on the day of the inspection, usually within a few hours of the engineer completing. Forward it to your tenant, upload it to your letting agent portal — it arrives fast.",
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
                  <p className="text-sm text-brand-grey leading-relaxed">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-8 text-sm text-brand-grey">
            Coverage across London and the South East.{" "}
            <Link
              href="/coverage-areas"
              className="text-compliance-blue hover:underline font-medium"
            >
              Check if we cover your area →
            </Link>
          </p>
        </section>

        {/* ── 9. NICEIC & why choose us ───────────────────────────────────── */}
        <section aria-labelledby="niceic-heading">
          <Heading level={2} id="niceic-heading" className="mb-4">
            NICEIC approved and NAPIT certified electricians
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Every EICR we carry out is performed by an electrician holding
            either NICEIC approval or NAPIT certification — both
            government-recognised competent person schemes, assessed annually
            against BS 7671 (the IET Wiring Regulations) by independent
            technical auditors. NICEIC is the UK&apos;s largest electrical
            certification body; NAPIT (National Association of Professional
            Inspectors and Testers) is its established counterpart, covering
            the same scope under the same regulatory framework.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            An EICR from a NICEIC approved or NAPIT certified electrician is
            accepted without question by local housing authorities,{" "}
            <Link
              href="/eicr-london"
              className="text-compliance-blue hover:underline font-medium"
            >
              London borough councils
            </Link>
            , letting agents, property management companies and mortgage
            lenders. Both schemes are listed on the government&apos;s competent
            person register, and local authorities recognise either as
            satisfying the requirement for a qualified inspector under the
            Electrical Safety Standards in the Private Rented Sector (England)
            Regulations 2020.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            A non-registered electrician can technically perform an EICR, but
            the certificate may be challenged by a local authority or letting
            agent. Choosing an accredited engineer eliminates that risk. You
            can verify your engineer&apos;s registration on the{" "}
            <a
              href="https://www.niceic.com/find-a-contractor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-compliance-blue hover:underline font-medium"
            >
              NICEIC contractor search
            </a>{" "}
            or the{" "}
            <a
              href="https://www.napit.org.uk/find-a-contractor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-compliance-blue hover:underline font-medium"
            >
              NAPIT member finder
            </a>
            .
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                stat: "4.8★",
                label: "Trustpilot rating",
                sub: "from 312 EICR reviews",
              },
              {
                stat: "Same day",
                label: "Certificate delivery",
                sub: "emailed after inspection",
              },
              {
                stat: "5 years",
                label: "EICR validity",
                sub: "from date of inspection",
              },
            ].map(({ stat, label, sub }) => (
              <div
                key={label}
                className="rounded-xl bg-warm-white border border-border p-5 text-center"
              >
                <p className="text-2xl font-bold text-compliance-blue mb-1">
                  {stat}
                </p>
                <p className="font-semibold text-brand-charcoal text-sm">
                  {label}
                </p>
                <p className="text-xs text-brand-grey mt-0.5">{sub}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-brand-grey">
            See what landlords say about our EICR service on our{" "}
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
            EICR frequently asked questions
          </Heading>
          <FAQAccordion items={faqItems} includeSchema={false} />

          <p className="mt-6 text-sm text-brand-grey text-center">
            More questions about EICR certificates?{" "}
            <Link
              href="/faq"
              className="text-compliance-blue hover:underline font-medium"
            >
              See our full FAQ →
            </Link>
          </p>
        </section>

        {/* ── 11. CTA block ────────────────────────────────────────────────── */}
        <section
          aria-labelledby="cta-heading"
          className="rounded-2xl bg-compliance-blue px-8 py-10 text-center text-white"
        >
          <Heading level={2} id="cta-heading" inverted className="mb-2">
            Ready to book your EICR?
          </Heading>
          <p className="text-blue-200 mb-2 max-w-md mx-auto">
            Book online in under 3 minutes. A NICEIC approved or NAPIT certified
            electrician will confirm your appointment. Certificate emailed the same day.
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
            href="/book?service=eicr"
            className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
          >
            Book my EICR — from £{lowestPrice}
          </Link>
          <p className="mt-4 text-xs text-blue-300">
            No hidden charges. NICEIC approved &amp; NAPIT certified. Certificate emailed same day.
          </p>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=eicr"
        label="Book EICR"
        price={lowestPrice}
        serviceName="EICR from"
      />
    </>
  );
}

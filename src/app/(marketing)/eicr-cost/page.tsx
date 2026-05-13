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
import { cn } from "@/lib/utils";
import {
  ADDITIONAL_CHARGES,
  COMMERCIAL_EICR_EXTRA_CIRCUIT_CHARGE,
  COMMERCIAL_EICR_TABLE,
  DOMESTIC_EICR_TABLE,
  getPriceForEICR,
} from "@/lib/pricing";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "How Much Does an EICR Cost? Full 2025 Price Guide | My Landlord Certificate",
  description:
    "EICR costs from £67.99 for a studio to £199.99 for an 8-bedroom property. Full domestic and commercial EICR price breakdown. Find out what affects the cost and how to get a fixed price.",
  alternates: { canonical: "https://mylandlordcertificate.co.uk/eicr-cost" },
  openGraph: {
    title: "How Much Does an EICR Cost? Full 2025 Price Guide",
    description:
      "EICR prices start from £67.99. See the full domestic and commercial EICR price breakdown, what affects the cost, and how to book at a fixed price.",
    url: "https://mylandlordcertificate.co.uk/eicr-cost",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Does an EICR Cost? Full 2025 Price Guide",
  description:
    "A complete guide to EICR costs for landlords — domestic and commercial pricing, what affects the cost, and how to get a fixed price.",
  url: "https://mylandlordcertificate.co.uk/eicr-cost",
  publisher: {
    "@type": "Organization",
    name: "My Landlord Certificate",
    url: "https://mylandlordcertificate.co.uk",
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
      name: "EICR Certificate",
      item: "https://mylandlordcertificate.co.uk/eicr",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "EICR Cost",
      item: "https://mylandlordcertificate.co.uk/eicr-cost",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does an EICR cost in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A domestic EICR costs from £67.99 for a studio apartment to £199.99 for an 8-bedroom property. Commercial EICRs start from £149.99 for a single consumer unit. Prices vary by property size and number of electrical circuits.",
      },
    },
    {
      "@type": "Question",
      name: "Why does an EICR cost more for larger properties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Larger properties have more electrical circuits, more sockets, more light fittings, and often larger or more complex consumer units. Each circuit must be individually tested, so more circuits means more time — and a higher price.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a commercial EICR cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A commercial EICR starts from £149.99 for a property with a single consumer unit of up to 10 circuits. Each additional consumer unit adds to the price — up to £1,155.99 for 8 consumer units. Extra circuits above 10 per unit are charged at £25 each.",
      },
    },
    {
      "@type": "Question",
      name: "Are there any additional charges on top of the EICR price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We charge £5 for parking if no free parking is available on site, and £18 for properties within the London Congestion Charge Zone. There are no other hidden fees — the price listed is the price you pay.",
      },
    },
  ],
};

// ── FAQ items ─────────────────────────────────────────────────────────────────

const faqItems = [
  {
    question: "How much does an EICR cost in the UK?",
    answer:
      "A domestic EICR costs from £67.99 for a studio to £199.99 for an 8-bedroom property. Commercial EICRs start from £149.99 for a single consumer unit. The price depends primarily on property size and number of circuits.",
  },
  {
    question: "Why does an EICR cost more for larger properties?",
    answer:
      "Every electrical circuit must be individually tested. Larger properties have more circuits, more sockets, more light fittings and often more complex consumer units — all of which take more time. A studio might have 6 circuits; an 8-bedroom HMO might have 20 or more.",
  },
  {
    question: "Does the age of the wiring affect the EICR cost?",
    answer:
      "Not directly for our fixed-price tiers — the price is based on property size, not age. However, older wiring (pre-1970s) can sometimes slow the inspection because it requires more careful testing, and faults are more likely to be found. If remedial works are needed, these are quoted separately.",
  },
  {
    question: "How much does a commercial EICR cost?",
    answer:
      "A commercial EICR starts from £149.99 for a single consumer unit (up to 10 circuits). Additional consumer units add to the price, up to £1,155.99 for 8 consumer units. Extra circuits beyond 10 per unit are charged at £25 each.",
  },
  {
    question: "Are there any additional charges?",
    answer:
      "We charge £5 for parking where no free on-site parking is available, and £18 for properties in the London Congestion Charge Zone. There are no other additional fees — the price in our table is the price you pay.",
  },
  {
    question: "Can I save money by bundling my EICR with other certificates?",
    answer:
      "Yes — booking your EICR alongside your Gas Safety Certificate and/or EPC in one visit saves money. Our Essential Bundle (EICR + Gas Safety) costs £130 versus £144.99 separately. See our bundle page for all options.",
  },
];

const lowestDomesticPrice = getPriceForEICR("studio");

// ── Page ──────────────────────────────────────────────────────────────────────

export default function EicrCostPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
      <section
        aria-labelledby="eicr-cost-heading"
        className="bg-compliance-blue text-white"
      >
        <Container className="py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-blue-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li>
                <Link href="/eicr" className="hover:text-white transition-colors">EICR Certificate</Link>
              </li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li className="text-white font-medium">EICR Cost</li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            Transparent Pricing · No Hidden Fees · 2025 Guide
          </p>

          <Heading level={1} id="eicr-cost-heading" inverted className="mb-4 max-w-3xl">
            How much does an EICR cost?
          </Heading>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-6">
            A domestic EICR starts from{" "}
            <strong className="text-white">£{lowestDomesticPrice}</strong> for a
            studio apartment and rises to{" "}
            <strong className="text-white">£199.99</strong> for an 8-bedroom
            property. Commercial EICRs start from{" "}
            <strong className="text-white">£149.99</strong>. Full price
            breakdown below.
          </p>

          <PriceDisplay price={lowestDomesticPrice} from size="lg" className="mb-8 [&>span:last-child]:text-white" />

          <div className="flex flex-wrap gap-4">
            <Link
              href="/book?service=eicr"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book my EICR — from £{lowestDomesticPrice}
            </Link>
            <Link
              href="/eicr"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white/10 border border-white/30 text-white hover:bg-white/20",
              )}
            >
              EICR service page
            </Link>
          </div>
        </Container>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── Domestic EICR pricing ── */}
        <section id="domestic-pricing" aria-labelledby="domestic-heading">
          <Heading level={2} id="domestic-heading" className="mb-2">
            Domestic EICR costs
          </Heading>
          <p className="text-brand-grey mb-6">
            Prices are fixed by property size. Studio and smaller properties are
            quicker to inspect — fewer circuits, fewer sockets, smaller consumer
            units. Larger properties take longer and cost proportionally more.
          </p>

          <PriceTable
            title="Domestic EICR — full price breakdown"
            rows={DOMESTIC_EICR_TABLE}
            highlightCheapest
          />

          {/* Additional charges */}
          <div className="mt-4 rounded-xl border border-border bg-warm-white p-4 text-sm text-brand-charcoal/70">
            <p className="font-medium text-brand-charcoal mb-1">Additional charges (where applicable)</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Parking charge if no free parking on site: <strong>£{ADDITIONAL_CHARGES.parking}</strong></li>
              <li>Congestion Charge Zone: <strong>£{ADDITIONAL_CHARGES.congestionZone}</strong></li>
            </ul>
          </div>
        </section>

        {/* ── What affects the cost ── */}
        <section aria-labelledby="cost-factors-heading">
          <Heading level={2} id="cost-factors-heading" className="mb-6">
            What affects the cost of an EICR?
          </Heading>

          <dl className="space-y-6">
            {[
              {
                title: "Property size",
                body: "The primary driver of EICR cost. More bedrooms means more rooms, more circuits and more sockets — all of which must be individually tested. A studio might have 6–8 circuits; a large HMO can have 20 or more. Our pricing reflects this directly.",
              },
              {
                title: "Number of circuits and consumer units",
                body: "Each circuit from the consumer unit (fuse box) must be tested for continuity, polarity and insulation resistance. More circuits = more test time. Commercial properties often have multiple consumer units — our commercial pricing is structured around this.",
              },
              {
                title: "Age and type of wiring",
                body: "Older wiring — particularly rubber-insulated wiring common in pre-1970s properties — can require more careful testing and is more likely to produce C1 or C2 findings. This doesn't change our quoted price, but remedial works (if needed) are quoted separately.",
              },
              {
                title: "Property complexity",
                body: "Properties with outbuildings, garages, large gardens with external lighting, or non-standard consumer unit configurations take longer to inspect. Our standard domestic prices cover typical residential properties — unusual configurations may require a custom quote.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="flex gap-5 p-5 bg-white rounded-xl border border-border">
                <div className="w-2 rounded-full bg-compliance-blue shrink-0 self-stretch" />
                <div>
                  <dt className="font-semibold text-brand-charcoal mb-1">{title}</dt>
                  <dd className="text-sm text-brand-grey leading-relaxed">{body}</dd>
                </div>
              </div>
            ))}
          </dl>
        </section>

        {/* ── Commercial EICR pricing ── */}
        <section id="commercial-pricing" aria-labelledby="commercial-heading">
          <Heading level={2} id="commercial-heading" className="mb-2">
            Commercial EICR costs
          </Heading>
          <p className="text-brand-grey mb-6">
            Commercial EICRs are priced by number of consumer units. Each unit
            covers up to 10 circuits — additional circuits above 10 are charged
            at{" "}
            <strong className="text-brand-charcoal">
              £{COMMERCIAL_EICR_EXTRA_CIRCUIT_CHARGE} per circuit
            </strong>
            .
          </p>

          <PriceTable
            title="Commercial EICR — price by consumer units"
            rows={COMMERCIAL_EICR_TABLE}
            highlightCheapest
          />

          <p className="mt-5 text-sm text-brand-grey">
            Need a commercial EICR?{" "}
            <Link href="/commercial-eicr" className="text-compliance-blue hover:underline font-medium">
              View the commercial EICR service page →
            </Link>
          </p>
        </section>

        {/* ── How to keep costs down ── */}
        <section aria-labelledby="tips-heading">
          <Heading level={2} id="tips-heading" className="mb-6">
            How to keep your EICR cost as low as possible
          </Heading>
          <ul className="space-y-3" role="list">
            {[
              "Book by property size — make sure you select the right size tier to avoid overpaying.",
              "Bundle with Gas Safety and EPC — our Essential Bundle saves £14.99 versus booking your EICR and CP12 separately.",
              "Ensure easy access — a slow start or restricted access to the consumer unit adds time. Have all areas accessible before the engineer arrives.",
              "Fix known faults first — if you know a socket is broken or a circuit trips repeatedly, getting it fixed before the EICR avoids a C1/C2 code and potential re-inspection costs.",
              "Choose fixed pricing — avoid electricians who quote on the day. Fixed-price EICR providers (like us) give you certainty up front.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-action-green/15 flex items-center justify-center">
                  <svg className="w-3 h-3 text-action-green" fill="none" viewBox="0 0 12 12" aria-hidden="true">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-brand-charcoal/80 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── FAQs ── */}
        <section aria-labelledby="faq-heading">
          <Heading level={2} id="faq-heading" className="mb-6">
            EICR cost — frequently asked questions
          </Heading>
          <FAQAccordion items={faqItems} includeSchema={false} />
        </section>

        {/* ── CTA ── */}
        <section
          aria-labelledby="cta-heading"
          className="rounded-2xl bg-compliance-blue px-8 py-10 text-center text-white"
        >
          <Heading level={2} id="cta-heading" inverted className="mb-2">
            Get your EICR at a fixed price
          </Heading>
          <p className="text-blue-200 mb-6 max-w-md mx-auto">
            No call-out charges. No surprises. The price on your quote is the
            price you pay — guaranteed.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/book?service=eicr"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book my EICR — from £{lowestDomesticPrice}
            </Link>
            <Link
              href="/eicr"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white/10 border border-white/30 text-white hover:bg-white/20",
              )}
            >
              EICR service overview
            </Link>
          </div>
          <p className="mt-4 text-xs text-blue-300">
            Fixed pricing. NICEIC approved. Certificate emailed same day.
          </p>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=eicr"
        label="Book EICR"
        price={lowestDomesticPrice}
        serviceName="EICR from"
      />
    </>
  );
}

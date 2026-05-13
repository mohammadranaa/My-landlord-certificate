import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Heading } from "@/components/ui/heading";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { Section } from "@/components/ui/section";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
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
    "Book an EICR (Electrical Installation Condition Report) from £67.99. Mandatory for all landlords in England since 2020. NICEIC approved electricians, same-day certificate.",
  alternates: { canonical: "https://mylandlordcertificate.co.uk/eicr" },
  openGraph: {
    title: "EICR Certificate from £67.99 | My Landlord Certificate",
    description:
      "Electrical Installation Condition Report from £67.99. Fixed price, NICEIC approved engineers, same-day certificate emailed. Book online in under 3 minutes.",
    url: "https://mylandlordcertificate.co.uk/eicr",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "EICR — Electrical Installation Condition Report",
  url: "https://mylandlordcertificate.co.uk/eicr",
  description:
    "An EICR is a formal document produced following an assessment of the electrical installation within a property. Mandatory for all privately rented properties in England since 2020.",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://mylandlordcertificate.co.uk",
  },
  areaServed: ["London", "South East England"],
  offers: {
    "@type": "Offer",
    price: "67.99",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://mylandlordcertificate.co.uk/eicr",
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
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How often do I need an EICR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every 5 years, or at each change of tenancy — whichever comes first. This is a legal requirement under the Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020.",
      },
    },
    {
      "@type": "Question",
      name: "How much does an EICR cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An EICR starts from £67.99 for a studio apartment. A 1–3 bedroom property costs £94.99. Prices vary by property size — see our full pricing table on this page.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my property fails an EICR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You will receive a C1 or C2 code. Remedial works must be completed within 28 days and evidenced to your local authority. We can arrange remedial works where needed.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an EICR inspection take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically 2–4 hours depending on property size and age of wiring. The engineer will confirm exact timing when booking is confirmed.",
      },
    },
  ],
};

// ── FAQ items ─────────────────────────────────────────────────────────────────

const faqItems = [
  {
    question: "How often do I need an EICR?",
    answer:
      "Every 5 years, or at each change of tenancy — whichever comes first. This is a legal requirement under the Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020.",
  },
  {
    question: "How much does an EICR cost?",
    answer:
      "An EICR starts from £67.99 for a studio apartment. A 1–3 bedroom property costs £94.99. Prices scale by property size — see the full pricing table above.",
  },
  {
    question: "What happens if my property fails an EICR?",
    answer:
      "You will receive a C1 (immediate danger) or C2 (potentially dangerous) code. Remedial works must be completed within 28 days and evidenced in writing to your local council. We can arrange remedial works where needed.",
  },
  {
    question: "How long does an EICR inspection take?",
    answer:
      "Typically 2–4 hours depending on property size and age of wiring. Our engineer will call ahead to confirm timing. You don't need to be present — a tenant or keyholder can provide access.",
  },
  {
    question: "Do I need a new EICR for each new tenancy?",
    answer:
      "Not necessarily — your EICR is valid for 5 years from the date of issue. You only need a new one if your current certificate has expired, or if the engineer's report recommends a shorter re-inspection interval.",
  },
  {
    question: "What is the difference between a C1, C2 and C3 code?",
    answer:
      "C1 means immediate danger — the hazard must be made safe before the engineer leaves. C2 means potentially dangerous — remedial work required within 28 days. C3 is an improvement recommendation only — it doesn't affect the certificate pass.",
  },
];

const lowestPrice = getPriceForEICR("studio");

// ── Page ──────────────────────────────────────────────────────────────────────

export default function EicrPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
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
            NICEIC Approved · Electrical Safety Certificate
          </p>

          <Heading level={1} id="eicr-heading" inverted className="mb-4 max-w-2xl">
            EICR Certificate from £67.99
          </Heading>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-6">
            Electrical Installation Condition Report — mandatory for all privately
            rented properties in England since 2020. NICEIC approved electricians,
            fixed pricing by property size, certificate emailed the same day.
          </p>

          <PriceDisplay price={lowestPrice} from size="lg" className="mb-8 [&>span:last-child]:text-white" />

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

          <TrustBadges variant="dark" />
        </Container>
      </section>

      {/* ── Quick stats bar ── */}
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
              <dt>Certificate</dt>
              <dd className="text-white font-semibold">emailed same day</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Accreditation</dt>
              <dd className="text-white font-semibold">NICEIC approved</dd>
            </div>
          </dl>
        </Container>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── What is an EICR ── */}
        <section id="what-is-it" aria-labelledby="what-is-it-heading">
          <Heading level={2} id="what-is-it-heading" className="mb-4">
            What is an EICR?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            An EICR (Electrical Installation Condition Report) is a formal
            assessment of all fixed electrical wiring, fittings and installations
            in a property. A qualified electrician tests every circuit, checks the
            consumer unit, inspects all sockets and light fittings, and assigns a
            condition code to anything that falls below the current standard.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            The result is a written report that tells you exactly what — if
            anything — needs attention, and whether the installation is safe to
            continue using.
          </p>
          <div className="rounded-xl bg-amber-50 border border-brand-amber/30 p-5 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Legal requirement: </strong>
            The Electrical Safety Standards in the Private Rented Sector (England)
            Regulations 2020 require landlords to have a valid EICR at all times
            and to provide a copy to tenants before they move in. Failure to
            comply can result in a fine of up to £30,000.
          </div>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" aria-labelledby="pricing-heading">
          <Heading level={2} id="pricing-heading" className="mb-2">
            EICR pricing
          </Heading>
          <p className="text-brand-grey mb-6">
            Fixed pricing by property size. The price you see is the price you pay
            — no call-out charges, no hidden fees.
          </p>

          <PriceTable
            title="Domestic EICR — price by property size"
            rows={DOMESTIC_EICR_TABLE}
            highlightCheapest
          />

          {/* Additional charges */}
          <div className="mt-4 rounded-xl border border-border bg-warm-white p-4 text-sm text-brand-charcoal/70 space-y-1">
            <p className="font-medium text-brand-charcoal">Additional charges (where applicable)</p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li>Parking charge if no free parking is available on site: <strong>£{ADDITIONAL_CHARGES.parking}</strong></li>
              <li>Congestion Charge Zone: <strong>£{ADDITIONAL_CHARGES.congestionZone}</strong></li>
            </ul>
          </div>

          {/* Commercial note */}
          <p className="mt-5 text-sm text-brand-grey">
            Need an EICR for a commercial property?{" "}
            <Link
              href="/commercial-eicr"
              className="text-compliance-blue hover:underline font-medium"
            >
              See commercial EICR pricing →
            </Link>
          </p>
        </section>

        {/* ── What's included ── */}
        <section aria-labelledby="included-heading">
          <Heading level={2} id="included-heading" className="mb-4">
            What&apos;s included for £{lowestPrice}
          </Heading>
          <ul className="space-y-3" role="list">
            {[
              "Full inspection of all fixed wiring, sockets, switches and light fittings",
              "Test of every circuit from the consumer unit",
              "Condition rating (C1, C2, C3) for any issues identified",
              "Written EICR report with prioritised recommendations",
              "Signed certificate emailed on the same day",
              "Copy suitable for sharing with tenants and your local authority",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-action-green/15 flex items-center justify-center">
                  <svg className="w-3 h-3 text-action-green" fill="none" viewBox="0 0 12 12" aria-hidden="true">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-brand-charcoal/80">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── FAQs ── */}
        <section aria-labelledby="faq-heading">
          <Heading level={2} id="faq-heading" className="mb-6">
            EICR frequently asked questions
          </Heading>
          <FAQAccordion items={faqItems} includeSchema={false} />
        </section>

        {/* ── CTA ── */}
        <section
          aria-labelledby="cta-heading"
          className="rounded-2xl bg-compliance-blue px-8 py-10 text-center text-white"
        >
          <Heading level={2} id="cta-heading" inverted className="mb-2">
            Ready to book your EICR?
          </Heading>
          <p className="text-blue-200 mb-6 max-w-md mx-auto">
            Book online in under 3 minutes. A NICEIC approved electrician will
            contact you to confirm your slot.
          </p>
          <Link
            href="/book?service=eicr"
            className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
          >
            Book my EICR — from £{lowestPrice}
          </Link>
          <p className="mt-4 text-xs text-blue-300">
            Fixed pricing. Certificate emailed same day. No hidden fees.
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

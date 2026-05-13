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
  GAS_SAFETY_CP12_TABLE,
  getPriceForGasSafety,
} from "@/lib/pricing";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Gas Safety Certificate (CP12) from £50 | My Landlord Certificate",
  description:
    "Book a Gas Safety Certificate (CP12) from £50. Annual legal requirement for all landlords with gas appliances. Gas Safe Registered engineers, same-day certificate.",
  alternates: {
    canonical: "https://mylandlordcertificate.co.uk/gas-safety-certificate",
  },
  openGraph: {
    title: "Gas Safety Certificate (CP12) from £50 | My Landlord Certificate",
    description:
      "Annual CP12 gas safety certificate from £50. Gas Safe Registered engineers, fixed pricing, certificate emailed same day. Book online in under 3 minutes.",
    url: "https://mylandlordcertificate.co.uk/gas-safety-certificate",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gas Safety Certificate (CP12)",
  url: "https://mylandlordcertificate.co.uk/gas-safety-certificate",
  description:
    "Annual gas safety certificate (CP12) confirming all gas appliances, flues and pipework in a rental property are safe. Required by law under the Gas Safety (Installation and Use) Regulations 1998.",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://mylandlordcertificate.co.uk",
  },
  areaServed: ["London", "South East England"],
  offers: {
    "@type": "Offer",
    price: "50",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://mylandlordcertificate.co.uk/gas-safety-certificate",
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
      name: "Gas Safety Certificate",
      item: "https://mylandlordcertificate.co.uk/gas-safety-certificate",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a Gas Safety Certificate cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Gas Safety Certificate (CP12) starts from £50 for 1 gas appliance. 2 appliances costs £60, and 3 appliances costs £70. A combined gas safety check and boiler service costs £84.99.",
      },
    },
    {
      "@type": "Question",
      name: "How often do I need a Gas Safety Certificate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every 12 months without exception. This is a legal requirement under the Gas Safety (Installation and Use) Regulations 1998.",
      },
    },
    {
      "@type": "Question",
      name: "What appliances are covered by a CP12?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All gas appliances supplied with the tenancy — boiler, gas hob, gas fire, and any other gas-powered appliance. The engineer checks each appliance, the flue, ventilation, and gas pressure.",
      },
    },
  ],
};

// ── FAQ items ─────────────────────────────────────────────────────────────────

const faqItems = [
  {
    question: "How often do I need a Gas Safety Certificate?",
    answer:
      "Every 12 months without exception. The Gas Safety (Installation and Use) Regulations 1998 require landlords to arrange an annual gas safety check by a Gas Safe Registered engineer. There is no grace period.",
  },
  {
    question: "How much does a Gas Safety Certificate cost?",
    answer:
      "A CP12 starts from £50 for 1 gas appliance. 2 appliances costs £60, 3 appliances costs £70. A combined gas safety check with boiler service is £84.99. See the full pricing table above.",
  },
  {
    question: "What appliances are covered by a CP12 inspection?",
    answer:
      "All gas appliances supplied with the tenancy — typically the boiler, gas hob and any gas fire. The engineer also checks flues, ventilation and gas pressure for each appliance.",
  },
  {
    question: "Do I need to give my tenant a copy of the certificate?",
    answer:
      "Yes. You must provide a copy of the CP12 to existing tenants within 28 days of the inspection, and to new tenants before they move in. We email the certificate on the day so you can forward it straight away.",
  },
  {
    question: "What if a tenant refuses access for the gas safety check?",
    answer:
      "You must document every attempt to gain access — send written notices and keep copies. We can advise on the correct process. Ultimately the obligation is on the landlord, so record-keeping is essential.",
  },
  {
    question: "Is a CP12 the same as a boiler service?",
    answer:
      "No — a CP12 is a safety inspection only, not a service. We can combine both in a single visit for £84.99, which is cheaper than booking separately.",
  },
];

const lowestPrice = getPriceForGasSafety(1);

const cp12TableWithBadge = GAS_SAFETY_CP12_TABLE.map((row, i) =>
  i === 2 ? { ...row, badge: "most-popular" as const } : row
);

// ── Page ──────────────────────────────────────────────────────────────────────

export default function GasSafetyPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
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
            Gas Safe Registered · Annual Legal Requirement
          </p>

          <Heading level={1} id="gas-heading" inverted className="mb-4 max-w-2xl">
            Gas Safety Certificate (CP12) from £50
          </Heading>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-6">
            Annual CP12 inspection of all gas appliances, flues and pipework by a
            Gas Safe Registered engineer. Fixed pricing per appliance, certificate
            emailed the same day.
          </p>

          <PriceDisplay price={lowestPrice} from size="lg" className="mb-8 [&>span:last-child]:text-white" />

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
              <dt>Required</dt>
              <dd className="text-white font-semibold">every 12 months</dd>
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

        {/* ── What is a CP12 ── */}
        <section id="what-is-it" aria-labelledby="what-is-it-heading">
          <Heading level={2} id="what-is-it-heading" className="mb-4">
            What is a Gas Safety Certificate (CP12)?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            A Gas Safety Certificate — formally known as a CP12 — confirms that
            all gas appliances, flues and pipework in your rental property are
            safe and working correctly. It is carried out by a Gas Safe Registered
            engineer who inspects each appliance, checks gas pressure and flow,
            and verifies that all ventilation is adequate.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            At the end of the inspection you receive a signed certificate listing
            every appliance checked and the result. This document must be provided
            to your tenant and kept on file for at least two years.
          </p>
          <div className="rounded-xl bg-amber-50 border border-brand-amber/30 p-5 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Legal requirement: </strong>
            The Gas Safety (Installation and Use) Regulations 1998 require
            landlords to arrange an annual gas safety check by a Gas Safe
            Registered engineer. Failure to comply can result in a fine or
            imprisonment.
          </div>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" aria-labelledby="pricing-heading">
          <Heading level={2} id="pricing-heading" className="mb-2">
            Gas Safety Certificate pricing
          </Heading>
          <p className="text-brand-grey mb-6">
            Fixed pricing per number of gas appliances. The price shown is the
            price you pay — no call-out charges, no hidden fees.
          </p>

          <PriceTable
            title="Gas Safety Certificate (CP12) — domestic"
            rows={cp12TableWithBadge}
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
            Need a commercial gas safety certificate?{" "}
            <Link
              href="/commercial-gas-safety-certificate"
              className="text-compliance-blue hover:underline font-medium"
            >
              See commercial CP42 pricing →
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
              "Inspection of all gas appliances included in the tenancy (boiler, hob, fire)",
              "Check of all flues and ventilation",
              "Gas pressure and flow tests",
              "Safety checks at each appliance",
              "Signed CP12 certificate emailed on the same day",
              "Copy suitable for providing to tenants within 28 days",
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
            Gas Safety Certificate — frequently asked questions
          </Heading>
          <FAQAccordion items={faqItems} includeSchema={false} />
        </section>

        {/* ── CTA ── */}
        <section
          aria-labelledby="cta-heading"
          className="rounded-2xl bg-compliance-blue px-8 py-10 text-center text-white"
        >
          <Heading level={2} id="cta-heading" inverted className="mb-2">
            Ready to book your Gas Safety Certificate?
          </Heading>
          <p className="text-blue-200 mb-6 max-w-md mx-auto">
            Book online in under 3 minutes. A Gas Safe Registered engineer will
            contact you to confirm your slot.
          </p>
          <Link
            href="/book?service=gas-safety-certificate"
            className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
          >
            Book my CP12 — from £{lowestPrice}
          </Link>
          <p className="mt-4 text-xs text-blue-300">
            Fixed pricing. Certificate emailed same day. No hidden fees.
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

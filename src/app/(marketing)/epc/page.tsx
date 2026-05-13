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
    "Book an Energy Performance Certificate (EPC) from £89.99. Required before letting any property. Accredited DEA assessors, same-day certificate, lodged on the national register.",
  alternates: { canonical: "https://mylandlordcertificate.co.uk/epc" },
  openGraph: {
    title: "EPC Certificate from £89.99 | My Landlord Certificate",
    description:
      "Energy Performance Certificate from £89.99. Accredited assessors, A–G rating, same-day certificate emailed and lodged on the national register.",
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
    "An EPC rates your property's energy efficiency from A to G. Required before marketing or letting any property under the Energy Performance of Buildings Regulations 2012.",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://mylandlordcertificate.co.uk",
  },
  areaServed: ["London", "South East England"],
  offers: {
    "@type": "Offer",
    price: "89.99",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://mylandlordcertificate.co.uk/epc",
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
        text: "An EPC starts from £89.99 for a studio apartment. A 1–3 bedroom property costs £109.99, a 4 bedroom property costs £129.99, and a 5 bedroom property costs £149.99.",
      },
    },
    {
      "@type": "Question",
      name: "How long is an EPC valid for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An EPC is valid for 10 years unless significant works are carried out that would materially change the energy rating.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum EPC rating required to let a property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under the Minimum Energy Efficiency Standards (MEES), rental properties in England and Wales must have a minimum EPC rating of E. Properties rated F or G cannot legally be let without a registered exemption.",
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
      "10 years, unless significant works are carried out that would materially change the energy efficiency of the property — for example, installing insulation, a new boiler or solar panels. In those cases a new EPC is recommended.",
  },
  {
    question: "Do I need a new EPC for each new tenancy?",
    answer:
      "No — as long as your current EPC is within its 10-year validity period, you can use the same certificate for successive tenancies. You only need a new one when it expires.",
  },
  {
    question: "What is the minimum EPC rating to legally let a property?",
    answer:
      "Under the Minimum Energy Efficiency Standards (MEES), properties must have a minimum rating of E. Properties rated F or G cannot be legally let without a registered exemption. We can advise on cost-effective improvements to bring a property up to the required standard.",
  },
  {
    question: "What happens during an EPC assessment?",
    answer:
      "An accredited Domestic Energy Assessor (DEA) visits the property and collects data on construction, insulation, heating systems, hot water and lighting. The assessment typically takes 30–60 minutes and does not require any testing or disruption to the property.",
  },
  {
    question: "Is the EPC lodged on the national register?",
    answer:
      "Yes — all EPCs we produce are lodged on the government's Energy Performance of Buildings Register on the day of assessment. You can access your certificate online at any time using your property's postcode.",
  },
];

const lowestPrice = getPriceForEPC("studio");

// ── Page ──────────────────────────────────────────────────────────────────────

export default function EpcPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
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
            Accredited DEA Assessors · National Register Lodgement
          </p>

          <Heading level={1} id="epc-heading" inverted className="mb-4 max-w-2xl">
            EPC Certificate from £89.99
          </Heading>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-6">
            Energy Performance Certificate — required before marketing or letting
            any property. A–G rating by an accredited Domestic Energy Assessor,
            lodged on the national register and emailed the same day.
          </p>

          <PriceDisplay price={lowestPrice} from size="lg" className="mb-8 [&>span:last-child]:text-white" />

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
              <dd className="text-white font-semibold">10 years</dd>
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

        {/* ── What is an EPC ── */}
        <section id="what-is-it" aria-labelledby="what-is-it-heading">
          <Heading level={2} id="what-is-it-heading" className="mb-4">
            What is an EPC?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            An Energy Performance Certificate (EPC) rates your property's energy
            efficiency on a scale from A (most efficient) to G (least efficient).
            An accredited Domestic Energy Assessor (DEA) visits the property,
            collects data on insulation, heating systems, windows and lighting,
            and produces a certificate with an overall rating and a list of
            recommended improvements.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            The certificate is valid for 10 years and must be made available to
            prospective tenants before the property is marketed. A copy is also
            lodged on the government's national Energy Performance of Buildings
            Register.
          </p>
          <div className="rounded-xl bg-amber-50 border border-brand-amber/30 p-5 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Legal requirement: </strong>
            The Energy Performance of Buildings (England and Wales) Regulations
            2012 require a valid EPC whenever a property is marketed for let.
            Under the Minimum Energy Efficiency Standards (MEES), properties must
            achieve a minimum rating of E — F and G rated properties cannot be
            legally let without a registered exemption.
          </div>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" aria-labelledby="pricing-heading">
          <Heading level={2} id="pricing-heading" className="mb-2">
            EPC pricing
          </Heading>
          <p className="text-brand-grey mb-6">
            Fixed pricing by property size. The price you see is the price you
            pay — no call-out charges, no hidden fees.
          </p>

          <PriceTable
            title="Domestic EPC — price by property size"
            rows={DOMESTIC_EPC_TABLE}
            highlightCheapest
          />

          {/* Additional charges */}
          <div className="mt-4 rounded-xl border border-border bg-warm-white p-4 text-sm text-brand-charcoal/70">
            <p className="font-medium text-brand-charcoal mb-1">Additional charges (where applicable)</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Parking charge if no free parking is available on site: <strong>£{ADDITIONAL_CHARGES.parking}</strong></li>
              <li>Congestion Charge Zone: <strong>£{ADDITIONAL_CHARGES.congestionZone}</strong></li>
            </ul>
          </div>

          {/* Commercial note */}
          <p className="mt-5 text-sm text-brand-grey">
            Need an EPC for a commercial property?{" "}
            <Link
              href="/commercial-epc"
              className="text-compliance-blue hover:underline font-medium"
            >
              See commercial EPC pricing →
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
              "Full domestic energy assessment by an accredited DEA assessor",
              "A–G energy efficiency rating certificate",
              "Tailored recommendations to improve your rating",
              "Lodgement on the national Energy Performance of Buildings Register",
              "PDF certificate emailed on the same day",
              "10-year validity from date of assessment",
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
            EPC frequently asked questions
          </Heading>
          <FAQAccordion items={faqItems} includeSchema={false} />
        </section>

        {/* ── CTA ── */}
        <section
          aria-labelledby="cta-heading"
          className="rounded-2xl bg-compliance-blue px-8 py-10 text-center text-white"
        >
          <Heading level={2} id="cta-heading" inverted className="mb-2">
            Ready to book your EPC?
          </Heading>
          <p className="text-blue-200 mb-6 max-w-md mx-auto">
            Book online in under 3 minutes. An accredited energy assessor will
            contact you to confirm your appointment.
          </p>
          <Link
            href="/book?service=epc"
            className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
          >
            Book my EPC — from £{lowestPrice}
          </Link>
          <p className="mt-4 text-xs text-blue-300">
            Fixed pricing. Certificate emailed same day. Lodged on national register.
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

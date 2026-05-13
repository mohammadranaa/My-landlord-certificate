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
import { ADDITIONAL_CHARGES, PAT_TABLE, getPriceForPAT } from "@/lib/pricing";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "PAT Testing from £59.99 | My Landlord Certificate",
  description:
    "Book PAT Testing from £59.99 for up to 10 appliances. Portable Appliance Testing for furnished rental properties. Pass/fail labels, full asset register, certificate emailed same day.",
  alternates: { canonical: "https://mylandlordcertificate.co.uk/pat-testing" },
  openGraph: {
    title: "PAT Testing from £59.99 | My Landlord Certificate",
    description:
      "PAT Testing from £59.99. Pass/fail label on every appliance, full asset register, certificate emailed same day. Book online in under 3 minutes.",
    url: "https://mylandlordcertificate.co.uk/pat-testing",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "PAT Testing — Portable Appliance Testing",
  url: "https://mylandlordcertificate.co.uk/pat-testing",
  description:
    "Portable Appliance Testing (PAT) checks that all plug-in electrical appliances supplied with a furnished tenancy are safe. Pass/fail label applied to every appliance, full asset register and certificate emailed same day.",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://mylandlordcertificate.co.uk",
  },
  areaServed: ["London", "South East England"],
  offers: {
    "@type": "Offer",
    price: "59.99",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://mylandlordcertificate.co.uk/pat-testing",
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
      name: "PAT Testing",
      item: "https://mylandlordcertificate.co.uk/pat-testing",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does PAT Testing cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PAT Testing starts from £59.99 for up to 10 appliances. 10–15 appliances costs £69.99, 15–20 appliances costs £79.99, and prices scale up to £259.99 for 45–50 appliances.",
      },
    },
    {
      "@type": "Question",
      name: "Which appliances need PAT Testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any plug-in electrical appliance you supply with the tenancy — white goods (washing machine, fridge, dishwasher), TVs, lamps, toasters, microwaves, vacuum cleaners, and any other portable electrical equipment.",
      },
    },
    {
      "@type": "Question",
      name: "Is PAT Testing a legal requirement for landlords?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PAT Testing is not a specific legal requirement, but landlords must ensure all electrical appliances supplied are safe under the Landlord and Tenant Act 1985 and the Electrical Equipment (Safety) Regulations 2016. PAT Testing is the recognised way to demonstrate compliance and is required by most landlord insurance policies.",
      },
    },
  ],
};

// ── FAQ items ─────────────────────────────────────────────────────────────────

const faqItems = [
  {
    question: "Is PAT Testing a legal requirement for landlords?",
    answer:
      "PAT Testing is not a named legal requirement, but the Landlord and Tenant Act 1985 and the Electrical Equipment (Safety) Regulations 2016 require landlords to ensure all supplied electrical appliances are safe. PAT Testing is the recognised way to demonstrate this — and most landlord insurance policies require it for furnished lets.",
  },
  {
    question: "How much does PAT Testing cost?",
    answer:
      "PAT Testing starts from £59.99 for up to 10 appliances. Prices scale by appliance count — 10–15 appliances costs £69.99, up to £259.99 for 45–50 appliances. See the full pricing table above.",
  },
  {
    question: "Which appliances need to be tested?",
    answer:
      "Any plug-in appliance you supply with the tenancy — white goods (fridge, washing machine, dishwasher), TVs, lamps, toasters, microwaves, vacuum cleaners, and any other portable electrical equipment. Fixed appliances like wired-in cookers are covered by the EICR, not PAT Testing.",
  },
  {
    question: "How often should PAT Testing be carried out?",
    answer:
      "There is no fixed legal interval, but annually is widely recommended — particularly at the start of each new tenancy. Higher-risk environments (HMOs, properties with heavy appliance use) may benefit from more frequent testing.",
  },
  {
    question: "What happens if an appliance fails?",
    answer:
      "A failed appliance receives a red 'FAILED' label and must be removed from use immediately. Our engineer will advise whether it can be repaired or needs replacing. You should not allow tenants to use a failed appliance.",
  },
  {
    question: "Do I need to be present during the PAT test?",
    answer:
      "No — a tenant or keyholder can provide access. The engineer will test each appliance in situ and apply pass/fail labels. The full asset register and certificate are emailed to you on the same day.",
  },
];

const lowestPrice = getPriceForPAT(1);

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PatTestingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
      <section
        aria-labelledby="pat-heading"
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
              <li className="text-white font-medium">PAT Testing</li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            Portable Appliance Testing · Furnished Rentals
          </p>

          <Heading level={1} id="pat-heading" inverted className="mb-4 max-w-2xl">
            PAT Testing from £59.99
          </Heading>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-6">
            Portable Appliance Testing for furnished rental properties. Pass/fail
            label applied to every appliance, full asset register and test
            certificate emailed the same day.
          </p>

          <PriceDisplay price={lowestPrice} from size="lg" className="mb-8 [&>span:last-child]:text-white" />

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/book?service=pat-testing"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book PAT Testing — from £{lowestPrice}
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
              <dt>Covers</dt>
              <dd className="text-white font-semibold">up to 10 appliances</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Certificate</dt>
              <dd className="text-white font-semibold">emailed same day</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Includes</dt>
              <dd className="text-white font-semibold">full asset register</dd>
            </div>
          </dl>
        </Container>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── What is PAT Testing ── */}
        <section id="what-is-it" aria-labelledby="what-is-it-heading">
          <Heading level={2} id="what-is-it-heading" className="mb-4">
            What is PAT Testing?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Portable Appliance Testing (PAT) is a series of visual inspections
            and electrical tests carried out on plug-in electrical appliances to
            verify they are safe to use. Every appliance is checked for visible
            damage, then tested for earth continuity and insulation resistance.
            A pass or fail label is applied to each appliance and a full asset
            register is produced.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            For landlords of furnished properties, PAT Testing is the recognised
            way to demonstrate that all supplied electrical appliances meet the
            safety standard required by law. Most landlord insurance policies
            specifically require it.
          </p>
          <div className="rounded-xl bg-amber-50 border border-brand-amber/30 p-5 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Legal basis: </strong>
            The Landlord and Tenant Act 1985 and the Electrical Equipment (Safety)
            Regulations 2016 require landlords to ensure all electrical appliances
            they supply are safe. PAT Testing is the recognised method of
            demonstrating compliance.
          </div>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" aria-labelledby="pricing-heading">
          <Heading level={2} id="pricing-heading" className="mb-2">
            PAT Testing pricing
          </Heading>
          <p className="text-brand-grey mb-6">
            Fixed pricing by number of appliances. The price you see is the price
            you pay — no call-out charges, no per-item surcharges within a band.
          </p>

          <PriceTable
            title="PAT Testing — price by appliance count"
            rows={PAT_TABLE}
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
        </section>

        {/* ── What's included ── */}
        <section aria-labelledby="included-heading">
          <Heading level={2} id="included-heading" className="mb-4">
            What&apos;s included for £{lowestPrice}
          </Heading>
          <ul className="space-y-3" role="list">
            {[
              "Visual inspection of every portable appliance and its lead",
              "Earth continuity test on all Class I appliances",
              "Insulation resistance test on all appliances",
              "Pass (green) or Fail (red) label applied to each appliance",
              "Full asset register listing every appliance tested",
              "PAT test certificate emailed on the same day",
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
            PAT Testing — frequently asked questions
          </Heading>
          <FAQAccordion items={faqItems} includeSchema={false} />
        </section>

        {/* ── CTA ── */}
        <section
          aria-labelledby="cta-heading"
          className="rounded-2xl bg-compliance-blue px-8 py-10 text-center text-white"
        >
          <Heading level={2} id="cta-heading" inverted className="mb-2">
            Ready to book PAT Testing?
          </Heading>
          <p className="text-blue-200 mb-6 max-w-md mx-auto">
            Book online in under 3 minutes. An engineer will contact you to
            confirm your appointment slot.
          </p>
          <Link
            href="/book?service=pat-testing"
            className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
          >
            Book PAT Testing — from £{lowestPrice}
          </Link>
          <p className="mt-4 text-xs text-blue-300">
            Fixed pricing. Certificate and asset register emailed same day.
          </p>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=pat-testing"
        label="Book PAT Test"
        price={lowestPrice}
        serviceName="PAT Testing from"
      />
    </>
  );
}

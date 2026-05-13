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
  FRA_RESIDENTIAL_TABLE,
  getPriceForFRA,
} from "@/lib/pricing";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Fire Risk Assessment from £74 | My Landlord Certificate",
  description:
    "Book a Fire Risk Assessment from £74. Compulsory for HMOs, recommended for all rentals. Qualified assessors, written report with prioritised action plan, same-day delivery.",
  alternates: {
    canonical: "https://mylandlordcertificate.co.uk/fire-risk-assessment",
  },
  openGraph: {
    title: "Fire Risk Assessment from £74 | My Landlord Certificate",
    description:
      "Fire Risk Assessment from £74. Qualified assessors, written report with action plan, same-day delivery. Compulsory for HMOs under the Regulatory Reform (Fire Safety) Order 2005.",
    url: "https://mylandlordcertificate.co.uk/fire-risk-assessment",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fire Risk Assessment",
  url: "https://mylandlordcertificate.co.uk/fire-risk-assessment",
  description:
    "A Fire Risk Assessment identifies fire hazards, evaluates who is at risk, and records what actions are needed to remove or reduce that risk. Compulsory for HMOs under the Regulatory Reform (Fire Safety) Order 2005.",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://mylandlordcertificate.co.uk",
  },
  areaServed: ["London", "South East England"],
  offers: {
    "@type": "Offer",
    price: "74",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://mylandlordcertificate.co.uk/fire-risk-assessment",
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
      name: "Fire Risk Assessment",
      item: "https://mylandlordcertificate.co.uk/fire-risk-assessment",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a Fire Risk Assessment cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Fire Risk Assessment starts from £74 for a studio apartment. A 1–3 bedroom property costs £139.99, up to 4 bedrooms costs £179.99, and prices scale up to £349.99 for up to 8 bedrooms.",
      },
    },
    {
      "@type": "Question",
      name: "Is a Fire Risk Assessment legally required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A written Fire Risk Assessment is compulsory for all HMOs under the Regulatory Reform (Fire Safety) Order 2005. For single lets it is strongly recommended and may become a legal requirement under the Renters' Rights Bill 2025.",
      },
    },
    {
      "@type": "Question",
      name: "How often should a Fire Risk Assessment be reviewed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Annually, or whenever there is a significant change to the property, its use, or the number of occupants. A change of tenancy is a good trigger point for a review.",
      },
    },
  ],
};

// ── FAQ items ─────────────────────────────────────────────────────────────────

const faqItems = [
  {
    question: "Is a Fire Risk Assessment legally required?",
    answer:
      "A written Fire Risk Assessment is compulsory for all HMOs under the Regulatory Reform (Fire Safety) Order 2005. For single lets it is strongly recommended and may become a legal requirement under the Renters' Rights Bill 2025. We recommend all landlords have one regardless of property type.",
  },
  {
    question: "How much does a Fire Risk Assessment cost?",
    answer:
      "Prices start from £74 for a studio apartment. A 1–3 bedroom property is £139.99, up to 4 bedrooms is £179.99, and prices scale to £349.99 for up to 8 bedrooms. Communal area assessments start from £129.99. See the full pricing table above.",
  },
  {
    question: "How often should a Fire Risk Assessment be reviewed?",
    answer:
      "Annually, or whenever there is a significant change to the property, its use, or the number of occupants. A change of tenancy is also a sensible trigger point for a review.",
  },
  {
    question: "What does a Fire Risk Assessment cover?",
    answer:
      "Our assessors inspect all escape routes, fire doors, detection equipment (smoke and heat alarms), ignition sources, combustible materials and general fire safety management. You receive a written report with a prioritised action plan and a recommended reassessment date.",
  },
  {
    question: "What is the difference between an FRA for a single let and an HMO?",
    answer:
      "For single lets, the assessment focuses on the main living areas and escape routes. For HMOs, the assessment is more detailed — covering communal areas, individual rooms, fire compartmentation, and the higher risk posed by multiple unrelated occupants sharing a property.",
  },
  {
    question: "Do I need a separate assessment for communal areas?",
    answer:
      "Yes — if your property has shared communal areas (hallways, staircases, landings), these require a separate FRA from the individual dwelling. We offer communal area assessments from £129.99 for buildings up to 3 floors.",
  },
];

const lowestPrice = getPriceForFRA("studio");

const fraTableWithBadge = FRA_RESIDENTIAL_TABLE.map((row, i) =>
  i === 3 ? { ...row, badge: "most-popular" as const } : row
);

// ── Page ──────────────────────────────────────────────────────────────────────

export default function FireRiskAssessmentPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
      <section
        aria-labelledby="fra-heading"
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
              <li className="text-white font-medium">Fire Risk Assessment</li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            Qualified Assessors · Compulsory for HMOs
          </p>

          <Heading level={1} id="fra-heading" inverted className="mb-4 max-w-2xl">
            Fire Risk Assessment from £74
          </Heading>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-6">
            Compulsory for all HMOs under the Regulatory Reform (Fire Safety)
            Order 2005 and strongly recommended for all rental properties.
            Written report with prioritised action plan delivered the same day.
          </p>

          <PriceDisplay price={lowestPrice} from size="lg" className="mb-8 [&>span:last-child]:text-white" />

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/book?service=fire-risk-assessment"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book my FRA — from £{lowestPrice}
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
              <dt>Review</dt>
              <dd className="text-white font-semibold">annually</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Report</dt>
              <dd className="text-white font-semibold">delivered same day</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Required</dt>
              <dd className="text-white font-semibold">all HMOs</dd>
            </div>
          </dl>
        </Container>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── What is an FRA ── */}
        <section id="what-is-it" aria-labelledby="what-is-it-heading">
          <Heading level={2} id="what-is-it-heading" className="mb-4">
            What is a Fire Risk Assessment?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            A Fire Risk Assessment (FRA) is a structured inspection of a property
            to identify fire hazards, evaluate who is at risk, and record what
            actions are required to remove or reduce that risk to an acceptable
            level. A qualified assessor inspects escape routes, fire doors, smoke
            and heat detection equipment, ignition sources and combustible
            materials throughout the property.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            At the end of the inspection you receive a written report detailing
            every finding, a prioritised action plan (immediate, short-term and
            ongoing actions), and a recommended date for reassessment.
          </p>
          <div className="rounded-xl bg-amber-50 border border-brand-amber/30 p-5 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Legal requirement: </strong>
            The Regulatory Reform (Fire Safety) Order 2005 requires a written
            Fire Risk Assessment for all HMOs. The Renters&apos; Rights Bill 2025
            is expected to extend this obligation further to all rented properties.
            Even where not yet legally required, having a current FRA is strongly
            recommended and may be required by your landlord insurance policy.
          </div>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" aria-labelledby="pricing-heading">
          <Heading level={2} id="pricing-heading" className="mb-2">
            Fire Risk Assessment pricing
          </Heading>
          <p className="text-brand-grey mb-6">
            Fixed pricing by property type and size. The price you see is the
            price you pay — no call-out charges, no hidden fees.
          </p>

          <PriceTable
            title="Residential Fire Risk Assessment"
            rows={fraTableWithBadge}
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
            Need a Fire Risk Assessment for a commercial property?{" "}
            <Link
              href="/commercial-fire-risk-assessment"
              className="text-compliance-blue hover:underline font-medium"
            >
              See commercial FRA pricing →
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
              "Inspection of all escape routes, corridors and stairways",
              "Assessment of all fire doors and self-closing mechanisms",
              "Check of smoke and heat detection equipment",
              "Identification of ignition sources and combustible materials",
              "Evaluation of fire-fighting equipment (extinguishers, blankets)",
              "Written report with findings graded by priority",
              "Prioritised action plan (immediate, short-term, ongoing)",
              "Recommended reassessment date",
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
            Fire Risk Assessment — frequently asked questions
          </Heading>
          <FAQAccordion items={faqItems} includeSchema={false} />
        </section>

        {/* ── CTA ── */}
        <section
          aria-labelledby="cta-heading"
          className="rounded-2xl bg-compliance-blue px-8 py-10 text-center text-white"
        >
          <Heading level={2} id="cta-heading" inverted className="mb-2">
            Ready to book your Fire Risk Assessment?
          </Heading>
          <p className="text-blue-200 mb-6 max-w-md mx-auto">
            Book online in under 3 minutes. A qualified fire risk assessor will
            contact you to confirm your appointment.
          </p>
          <Link
            href="/book?service=fire-risk-assessment"
            className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
          >
            Book my FRA — from £{lowestPrice}
          </Link>
          <p className="mt-4 text-xs text-blue-300">
            Fixed pricing. Written report delivered same day. No hidden fees.
          </p>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=fire-risk-assessment"
        label="Book FRA"
        price={lowestPrice}
        serviceName="FRA from"
      />
    </>
  );
}

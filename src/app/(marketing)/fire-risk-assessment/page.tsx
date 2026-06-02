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
  FRA_RESIDENTIAL_TABLE,
  getPriceForFRA,
} from "@/lib/pricing";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Fire Risk Assessment from £74 | NEBOSH Qualified | My Landlord Certificate",
  description:
    "Book a Fire Risk Assessment from £74. Compulsory for HMOs under the Regulatory Reform (Fire Safety) Order 2005. NEBOSH qualified assessors. Written report with prioritised action plan, same-day delivery.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/fire-risk-assessment",
  },
  openGraph: {
    title: "Fire Risk Assessment from £74 | NEBOSH Qualified Assessors",
    description:
      "Fire Risk Assessment from £74. Compulsory for HMOs. NEBOSH qualified assessors, written report with prioritised action plan, same-day delivery. Book online in under 3 minutes.",
    url: "https://www.mylandlordcertificate.co.uk/fire-risk-assessment",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fire Risk Assessment",
  url: "https://www.mylandlordcertificate.co.uk/fire-risk-assessment",
  description:
    "A Fire Risk Assessment (FRA) identifies fire hazards, evaluates who is at risk, and records what actions are needed to reduce that risk. Compulsory for HMOs under the Regulatory Reform (Fire Safety) Order 2005. Carried out by NEBOSH qualified assessors.",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://www.mylandlordcertificate.co.uk",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "147",
      reviewCount: "147",
    },
  },
  areaServed: ["London", "the M25 area"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fire Risk Assessment pricing",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Studio apartment FRA",
        price: "74",
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "1–3 bedroom FRA",
        price: "139.99",
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Up to 4 bedroom FRA",
        price: "179.99",
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
      },
    ],
  },
  offers: {
    "@type": "Offer",
    price: "74",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://www.mylandlordcertificate.co.uk/fire-risk-assessment",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Fire Risk Assessment",
  description:
    "Residential and HMO Fire Risk Assessment by NEBOSH qualified assessors. Written report with prioritised action plan delivered same day.",
  brand: {
    "@type": "Brand",
    name: "My Landlord Certificate",
  },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "74",
    highPrice: "349.99",
    priceCurrency: "GBP",
    offerCount: "9",
    availability: "https://schema.org/InStock",
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
      name: "Fire Risk Assessment",
      item: "https://www.mylandlordcertificate.co.uk/fire-risk-assessment",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is a Fire Risk Assessment legally required for landlords?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A written Fire Risk Assessment is compulsory for all HMOs under the Regulatory Reform (Fire Safety) Order 2005. For single lets it is strongly recommended and may be required by your landlord insurance policy. The Building Safety Act 2022 introduced additional obligations for buildings over 18 metres.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a Fire Risk Assessment cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Fire Risk Assessment starts from £74 for a studio apartment. A 1–3 bedroom property costs £139.99, up to 4 bedrooms is £179.99, and prices scale to £349.99 for up to 8 bedrooms. Communal area assessments start from £129.99.",
      },
    },
    {
      "@type": "Question",
      name: "How often should a Fire Risk Assessment be reviewed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Annually, or whenever there is a significant change to the property, its use, or the number of occupants. A change of tenancy is also a sensible trigger point for a review.",
      },
    },
    {
      "@type": "Question",
      name: "What qualifications should a fire risk assessor hold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The government recommends using a competent, trained fire risk assessor. NEBOSH (National Examination Board in Occupational Safety and Health) qualifications — particularly the NEBOSH National Certificate in Fire Safety and Risk Management — are the industry-recognised standard for residential fire risk assessors.",
      },
    },
    {
      "@type": "Question",
      name: "What does the Building Safety Act 2022 mean for landlords?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Building Safety Act 2022 introduced new duties for higher-risk buildings (18 metres or 7+ storeys with two or more residential units). If your property falls within scope, you will have Accountable Person duties and must ensure an up-to-date Fire Risk Assessment is in place. The Building Safety Regulator can inspect and enforce compliance.",
      },
    },
  ],
};

// ── FAQ items ─────────────────────────────────────────────────────────────────

const faqItems = [
  {
    question: "Is a Fire Risk Assessment legally required for landlords?",
    answer:
      "A written Fire Risk Assessment is compulsory for all HMOs (Houses in Multiple Occupation) under the Regulatory Reform (Fire Safety) Order 2005. For single lets it is strongly recommended — and most landlord insurance policies require it. The Building Safety Act 2022 introduced further duties for buildings over 18 metres or 7+ storeys. We recommend all landlords have an FRA regardless of property type.",
  },
  {
    question: "How much does a Fire Risk Assessment cost?",
    answer:
      "Prices start from £74 for a studio apartment. A 1–3 bedroom property is £139.99, up to 4 bedrooms is £179.99, and prices scale to £349.99 for up to 8 bedrooms. Communal area assessments start from £129.99. See the full pricing table above.",
  },
  {
    question: "What qualifications should my fire risk assessor hold?",
    answer:
      "The government recommends using a competent, trained assessor. NEBOSH (National Examination Board in Occupational Safety and Health) qualifications — specifically the NEBOSH National Certificate in Fire Safety and Risk Management — are the industry-recognised standard. All our assessors hold NEBOSH certification and carry professional indemnity insurance.",
  },
  {
    question: "What does the Building Safety Act 2022 mean for me?",
    answer:
      "The Building Safety Act 2022 introduced new 'Accountable Person' duties for higher-risk buildings (18 metres or more, or 7+ storeys, with two or more residential units). If your building falls within scope, you must keep an up-to-date Fire Risk Assessment and engage with the Building Safety Regulator. Our assessors are trained on the Act's requirements and will flag if your property falls within its scope.",
  },
  {
    question: "How often should a Fire Risk Assessment be reviewed?",
    answer:
      "Annually, or whenever there is a significant change to the property — structural alterations, change of use, change in number of occupants, or a new tenancy. For HMOs, your local authority may inspect and require evidence of a current assessment.",
  },
  {
    question: "What does the assessment actually cover?",
    answer:
      "Our assessors inspect all escape routes, fire doors and self-closing mechanisms, smoke and heat detection equipment, ignition sources, combustible and flammable materials, fire-fighting equipment (extinguishers and blankets), means of giving warning, and general fire safety management. You receive a written report with findings graded by priority and a recommended reassessment date.",
  },
  {
    question: "What is the difference between an FRA for a single let and an HMO?",
    answer:
      "For single lets, the assessment focuses on the main living areas and escape routes. For HMOs, the assessment is more detailed — covering communal areas, individual rooms, fire compartmentation, and the significantly higher risk posed by multiple unrelated occupants sharing a property. HMO assessments typically also cover the requirements imposed by the HMO licence conditions.",
  },
  {
    question: "Do I need a separate assessment for communal areas?",
    answer:
      "Yes — if your property has shared communal areas (hallways, staircases, landings), these require a separate FRA from the individual dwelling. We offer communal area assessments from £129.99 for buildings up to 3 floors, scaling to £149.99 for 3–6 floors.",
  },
  {
    question: "What happens if the assessment identifies problems?",
    answer:
      "Every issue is graded by priority in the written report — immediate action, short-term action, and ongoing maintenance. Immediate risks (such as a faulty smoke alarm or a blocked escape route) must be addressed before tenants can occupy the property. Our assessors will walk you through the findings and advise on next steps.",
  },
  {
    question: "Can I do my own Fire Risk Assessment?",
    answer:
      "Legally yes, but only if you are competent to do so. For HMOs and larger buildings, local authorities and insurers will want evidence of a professionally conducted assessment by a qualified assessor. A NEBOSH qualified assessor provides a report that stands up to scrutiny if your compliance is ever challenged.",
  },
];

const lowestPrice = getPriceForFRA("studio");
const popularPrice = getPriceForFRA("1-3bed");

const fraTableWithBadge = FRA_RESIDENTIAL_TABLE.map((row, i) =>
  i === 3 ? { ...row, badge: "most-popular" as const } : row,
);

// ── Page ──────────────────────────────────────────────────────────────────────

export default function FireRiskAssessmentPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={productSchema} />
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
            NEBOSH Qualified · London &amp; M25 · Same-Day Report
          </p>

          <Heading level={1} id="fra-heading" inverted className="mb-4 max-w-2xl">
            Fire Risk Assessment from £{lowestPrice}
          </Heading>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-6">
            Compulsory for all HMOs under the Regulatory Reform (Fire Safety)
            Order 2005 and strongly recommended for all rental properties.
            NEBOSH qualified assessors. Written report with prioritised action
            plan delivered the same day.
          </p>

          <PriceDisplay
            price={lowestPrice}
            from
            size="lg"
            className="mb-8 [&>span:last-child]:text-white"
          />

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/book?service=fra-residential"
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

          <TrustBadges serviceKey="fire-risk-assessment" variant="dark" />
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
              <dt>Assessors</dt>
              <dd className="text-white font-semibold">NEBOSH qualified</dd>
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
            and heat detection equipment, ignition sources, and combustible
            materials throughout the property.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            At the end of the inspection you receive a written report detailing
            every finding, a prioritised action plan — graded into immediate,
            short-term, and ongoing actions — and a recommended date for
            reassessment. The report is emailed to you on the same day as the
            visit.
          </p>
          <div className="rounded-xl bg-amber-50 border border-brand-amber/30 p-5 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Legal requirement: </strong>
            The Regulatory Reform (Fire Safety) Order 2005 requires a written
            Fire Risk Assessment for all HMOs and any premises with communal
            areas shared by multiple occupants. The Renters&apos; Rights Bill
            2025 is expected to extend written FRA obligations further. Even
            where not yet a named legal requirement, your landlord insurance
            policy is likely to require it — and an FRA is the only recognised
            way to demonstrate you have met your duty of care.
          </div>
        </section>

        {/* ── Legal requirements ── */}
        <section aria-labelledby="legal-heading">
          <Heading level={2} id="legal-heading" className="mb-4">
            Legal framework for landlords
          </Heading>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-xl border border-border bg-warm-white p-5">
              <p className="font-semibold text-brand-charcoal mb-2">
                Regulatory Reform (Fire Safety) Order 2005
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Requires the &quot;Responsible Person&quot; (the landlord or their agent)
                to carry out a suitable and sufficient Fire Risk Assessment for
                all HMOs and properties with communal areas. Failure to comply
                can result in an unlimited fine or up to two years&apos; imprisonment.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-warm-white p-5">
              <p className="font-semibold text-brand-charcoal mb-2">
                Building Safety Act 2022
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Introduced for higher-risk buildings (18 metres or 7+ storeys
                with two or more residential units). Creates new
                &quot;Accountable Person&quot; duties, a Building Safety Case, and
                oversight by the Building Safety Regulator. An up-to-date FRA
                is a core requirement under the Act.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-warm-white p-5">
              <p className="font-semibold text-brand-charcoal mb-2">
                HMO Licence Conditions
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Most local authorities include a current Fire Risk Assessment as
                an explicit condition of the HMO licence. Your licence can be
                revoked if you cannot produce an up-to-date FRA on inspection.
                Unlicensed HMO operation carries a fine of up to £30,000.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-warm-white p-5">
              <p className="font-semibold text-brand-charcoal mb-2">
                Smoke and CO Alarm Regulations 2022
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Require at least one smoke alarm on every floor and a carbon
                monoxide alarm in any room with a fixed combustion appliance.
                Our FRA checks compliance and flags any missing or faulty
                alarms in the written report.
              </p>
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" aria-labelledby="pricing-heading">
          <Heading level={2} id="pricing-heading" className="mb-2">
            Fire Risk Assessment pricing
          </Heading>
          <p className="text-brand-grey mb-6">
            Fixed pricing by property type and size. No call-out charges, no
            hidden fees — the price you see is the price you pay.
          </p>

          <PriceTable
            title="Residential Fire Risk Assessment"
            rows={fraTableWithBadge}
          />

          <div className="mt-4 rounded-xl border border-border bg-warm-white p-4 text-sm text-brand-charcoal/70">
            <p className="font-medium text-brand-charcoal mb-1">
              Additional charges (where applicable)
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Parking charge if no free parking is available on site:{" "}
                <strong>£{ADDITIONAL_CHARGES.parking}</strong>
              </li>
              <li>
                Congestion Charge Zone:{" "}
                <strong>£{ADDITIONAL_CHARGES.congestionZone}</strong>
              </li>
            </ul>
          </div>

          <p className="mt-5 text-sm text-brand-grey">
            Need an FRA for a commercial property, office, or retail unit?{" "}
            <Link
              href="/commercial-fire-risk-assessment"
              className="text-compliance-blue hover:underline font-medium"
            >
              See commercial FRA pricing →
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
              "Check of smoke and heat detection equipment and carbon monoxide alarms",
              "Identification of ignition sources and combustible or flammable materials",
              "Evaluation of fire-fighting equipment (extinguishers, fire blankets)",
              "Assessment of emergency lighting where fitted",
              "Written report with findings graded by risk priority",
              "Prioritised action plan — immediate, short-term, and ongoing actions",
              "Recommended reassessment date included in the report",
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

        {/* ── Who needs an FRA ── */}
        <section aria-labelledby="who-needs-heading">
          <Heading level={2} id="who-needs-heading" className="mb-4">
            Who needs a Fire Risk Assessment?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            While HMOs face the strictest legal obligations, any landlord who
            supplies a rental property has a duty of care to ensure it is
            fire-safe. Here is how the requirement applies across different
            property types.
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-border p-5">
              <p className="font-semibold text-brand-charcoal mb-1">
                HMOs (Houses in Multiple Occupation)
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                A written FRA is legally compulsory under the Regulatory Reform
                (Fire Safety) Order 2005. It is also a condition of the HMO
                licence in every London borough. Assessments for HMOs cover
                communal areas, individual rooms, fire compartmentation between
                units, and the higher risk posed by multiple unrelated occupants.
                An{" "}
                <Link
                  href="/eicr"
                  className="text-compliance-blue hover:underline"
                >
                  EICR
                </Link>{" "}
                is also required for all HMOs.
              </p>
            </div>
            <div className="rounded-xl border border-border p-5">
              <p className="font-semibold text-brand-charcoal mb-1">
                Larger flats and converted buildings
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Any building with communal areas — shared hallways, staircases,
                or landings — falls under the Fire Safety Order. This includes
                converted Victorian terraces split into flats and any building
                where two or more tenants share common parts. A separate
                communal area assessment is required in addition to any
                individual flat assessment.
              </p>
            </div>
            <div className="rounded-xl border border-border p-5">
              <p className="font-semibold text-brand-charcoal mb-1">
                Higher-risk buildings (Building Safety Act 2022)
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Buildings 18 metres or taller, or with 7 or more storeys and
                two or more residential units, are now regulated by the Building
                Safety Regulator. Accountable Persons must maintain a Building
                Safety Case including an up-to-date FRA, and must engage with
                residents on building safety matters.
              </p>
            </div>
            <div className="rounded-xl border border-border p-5">
              <p className="font-semibold text-brand-charcoal mb-1">
                Standard single lets
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                A written FRA is not yet a named legal requirement for single
                occupancy properties, but it is strongly recommended — and
                increasingly required by landlord insurance policies. The
                Renters&apos; Rights Bill 2025 is expected to bring single lets
                within the scope of mandatory FRA requirements.
              </p>
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section aria-labelledby="how-it-works-heading">
          <Heading level={2} id="how-it-works-heading" className="mb-6">
            How it works
          </Heading>
          <ol className="space-y-6" role="list">
            {[
              {
                step: "1",
                title: "Book online",
                body: "Choose your property type, select a date, and pay securely online. The whole process takes under 3 minutes. You will receive a confirmation email immediately.",
              },
              {
                step: "2",
                title: "Assessor visits the property",
                body: "A NEBOSH qualified fire risk assessor carries out the inspection. You or your tenant can provide access — you do not need to be present. The assessor inspects every relevant area methodically and notes all findings.",
              },
              {
                step: "3",
                title: "Report emailed the same day",
                body: "You receive a written Fire Risk Assessment report by email on the day of the visit. The report details every finding, grades each issue by priority, sets out a recommended action plan, and gives a reassessment date.",
              },
            ].map(({ step, title, body }) => (
              <li key={step} className="flex gap-5">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-compliance-blue text-white flex items-center justify-center font-bold text-sm">
                  {step}
                </span>
                <div>
                  <p className="font-semibold text-brand-charcoal mb-1">{title}</p>
                  <p className="text-brand-charcoal/80 text-sm leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── NEBOSH accreditation ── */}
        <section aria-labelledby="nebosh-heading">
          <Heading level={2} id="nebosh-heading" className="mb-4">
            NEBOSH qualified fire risk assessors
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            The government does not approve individual fire risk assessors in the
            same way it approves electricians or gas engineers, but it strongly
            recommends using a &quot;competent&quot; assessor with appropriate training
            and experience. NEBOSH — the National Examination Board in
            Occupational Safety and Health — provides the industry-recognised
            qualification for fire risk assessors: the NEBOSH National
            Certificate in Fire Safety and Risk Management.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="rounded-xl border border-border bg-warm-white p-4 text-center">
              <p className="text-2xl font-bold text-compliance-blue mb-1">NEBOSH</p>
              <p className="text-xs text-brand-grey">National Certificate in Fire Safety &amp; Risk Management</p>
            </div>
            <div className="rounded-xl border border-border bg-warm-white p-4 text-center">
              <p className="text-2xl font-bold text-compliance-blue mb-1">PI Insured</p>
              <p className="text-xs text-brand-grey">Professional indemnity cover on every assessment</p>
            </div>
            <div className="rounded-xl border border-border bg-warm-white p-4 text-center">
              <p className="text-2xl font-bold text-compliance-blue mb-1">4.9 ★</p>
              <p className="text-xs text-brand-grey">Average rating from 147 verified reviews</p>
            </div>
          </div>
          <p className="text-sm text-brand-charcoal/80 leading-relaxed mb-3">
            NEBOSH qualifications are recognised by the Health and Safety
            Executive (HSE), local authorities, letting agents, and landlord
            insurers as evidence of competence. A NEBOSH qualified assessor
            produces a report that stands up to scrutiny if your fire safety
            compliance is ever challenged.
          </p>
          <p className="text-sm text-brand-charcoal/80">
            You can verify NEBOSH qualifications via{" "}
            <a
              href="https://www.nebosh.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-compliance-blue hover:underline"
            >
              nebosh.org.uk
            </a>
            . Read what our landlords say about our assessors on our{" "}
            <Link href="/reviews" className="text-compliance-blue hover:underline">
              reviews page
            </Link>
            .
          </p>
        </section>

        {/* ── 5-step process ── */}
        <section aria-labelledby="five-steps-heading">
          <Heading level={2} id="five-steps-heading" className="mb-4">
            How a fire risk assessment works — the 5 steps
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-8">
            A Fire Risk Assessment is not a form — it is a structured process defined in
            UK government guidance. Here are the five official steps and what each
            involves in a residential setting.
          </p>
          <ol className="space-y-6" role="list">
            {[
              {
                step: "1",
                title: "Identify fire hazards",
                body: "The assessor inspects every area of the property for: sources of ignition (electrical equipment, gas appliances, portable heaters, smoking areas); sources of fuel (furniture, bedding, curtains, paper, cooking materials, rubbish accumulations); and sources of oxygen (normal air, any oxidising chemicals stored on site).",
              },
              {
                step: "2",
                title: "Identify people at risk",
                body: "The assessment considers all occupants — particularly those most vulnerable: sleeping occupants (slower to respond to alarms), people with disabilities or mobility impairments, HMO tenants who may not know each other or the building layout, and any children in the property.",
              },
              {
                step: "3",
                title: "Evaluate, remove or reduce risk",
                body: "Based on the hazards and people identified, the assessor evaluates how likely a fire is and how serious the consequences would be. They then recommend: removing the hazard where possible; reducing the risk with fire doors, detection systems or emergency lighting; or documenting the residual risk where it cannot be eliminated.",
              },
              {
                step: "4",
                title: "Record, plan and communicate",
                body: "Findings are written up in a formal report covering: all identified hazards, existing fire safety measures, a prioritised action plan (immediate, short-term, ongoing), a recommended evacuation procedure, and any Personal Emergency Evacuation Plans (PEEPs) required for disabled occupants.",
              },
              {
                step: "5",
                title: "Review and update",
                body: "The assessment must be reviewed after any fire or near-miss, significant building changes, a change in number of occupants, new activities that introduce new risks — and as a minimum annually. An out-of-date FRA provides no legal protection.",
              },
            ].map(({ step, title, body }) => (
              <li key={step} className="flex gap-5">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-compliance-blue text-white flex items-center justify-center font-bold text-sm">
                  {step}
                </span>
                <div>
                  <p className="font-semibold text-brand-charcoal mb-1">{title}</p>
                  <p className="text-brand-charcoal/80 text-sm leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── What the assessor inspects ── */}
        <section aria-labelledby="inspection-detail-heading">
          <Heading level={2} id="inspection-detail-heading" className="mb-4">
            What the assessor looks at in your property
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            During the site visit, the assessor systematically examines eight areas.
            Each finding is recorded in the written report with a risk rating and a
            recommended action.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              {
                label: "Escape routes",
                detail: "Are all corridors, stairwells and final exits unobstructed, unlocked and clearly signed? A blocked corridor is an immediate risk.",
              },
              {
                label: "Fire doors",
                detail: "Are fire doors self-closing, undamaged, and fitted with intact intumescent seals and cold smoke seals? Propped fire doors are a common and serious finding.",
              },
              {
                label: "Smoke and heat detection",
                detail: "Are alarms fitted in appropriate locations? Are they interlinked? Have they been tested? Are they within their service life?",
              },
              {
                label: "Emergency lighting",
                detail: "Do escape routes have working emergency lights? Has the required 3-hour annual discharge test been carried out and recorded?",
              },
              {
                label: "Fire extinguishers",
                detail: "Are the correct types present — water for general areas, CO₂ near electrical equipment, wet chemical in kitchens? Are they within their annual service date?",
              },
              {
                label: "Ignition sources",
                detail: "Are electrical appliances maintained? Is there evidence of overloaded sockets, damaged cables, or unsafe DIY electrical work?",
              },
              {
                label: "Combustible materials",
                detail: "Is there excessive rubbish accumulation, furniture stored in corridors, or flammable materials stored near heat sources or electrical equipment?",
              },
              {
                label: "Building fabric",
                detail: "Are fire-separating walls and floors intact? Are there unsealed holes around pipes or cables that could allow fire or smoke to spread between floors or units?",
              },
            ].map((item) => (
              <li
                key={item.label}
                className="flex items-start gap-3 rounded-xl border border-border bg-warm-white p-4"
              >
                <span className="mt-0.5 w-5 h-5 rounded-full bg-compliance-blue/10 text-compliance-blue flex items-center justify-center shrink-0 text-xs font-bold">
                  ✓
                </span>
                <div>
                  <p className="font-semibold text-brand-charcoal text-sm mb-0.5">{item.label}</p>
                  <p className="text-xs text-brand-grey leading-relaxed">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Fire extinguisher types ── */}
        <section aria-labelledby="extinguisher-heading">
          <Heading level={2} id="extinguisher-heading" className="mb-4">
            Fire extinguisher types for landlords
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Using the wrong extinguisher can make a fire significantly worse. Every FRA
            checks whether the correct types are present. Here is a plain-English guide.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                colour: "Red label",
                label: "Water",
                borderClass: "border-red-200",
                badgeClass: "bg-red-100 text-red-700",
                forFires: "Wood, paper, textiles (Class A fires)",
                locations: "General areas, corridors, communal spaces",
                caution: null,
                neverUse: "Electrical equipment, cooking oil, gas fires",
              },
              {
                colour: "Black label",
                label: "CO₂",
                borderClass: "border-gray-400",
                badgeClass: "bg-gray-200 text-gray-800",
                forFires: "Electrical equipment and flammable liquids (Class B)",
                locations: "Near electrical panels, meter cupboards, IT equipment",
                caution: "Very cold discharge — do not hold the horn directly",
                neverUse: null,
              },
              {
                colour: "Yellow label",
                label: "Wet Chemical",
                borderClass: "border-yellow-300",
                badgeClass: "bg-yellow-100 text-yellow-800",
                forFires: "Cooking oils and fats (Class F — chip pans, fryers)",
                locations: "Any kitchen with a deep fat fryer or range",
                caution: null,
                neverUse: "Never substitute water on cooking oil — it causes a steam explosion",
              },
              {
                colour: "Cream label",
                label: "Foam",
                borderClass: "border-amber-200",
                badgeClass: "bg-amber-50 text-amber-800",
                forFires: "Flammable liquids (Class B) and general Class A fires",
                locations: "Garages, storage areas, plant rooms",
                caution: null,
                neverUse: "Electrical equipment (unless rated for electrical use)",
              },
            ].map((e) => (
              <div
                key={e.label}
                className={`rounded-xl border ${e.borderClass} bg-warm-white p-4`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${e.badgeClass}`}>
                    {e.colour}
                  </span>
                  <span className="font-bold text-brand-charcoal text-sm">{e.label}</span>
                </div>
                <dl className="space-y-2 text-xs">
                  <div>
                    <dt className="text-brand-grey font-medium uppercase tracking-wide mb-0.5">For</dt>
                    <dd className="text-brand-charcoal/80">{e.forFires}</dd>
                  </div>
                  <div>
                    <dt className="text-brand-grey font-medium uppercase tracking-wide mb-0.5">Common locations</dt>
                    <dd className="text-brand-charcoal/80">{e.locations}</dd>
                  </div>
                  {e.caution && (
                    <div>
                      <dt className="text-brand-amber font-semibold uppercase tracking-wide mb-0.5">Caution</dt>
                      <dd className="text-brand-charcoal/80">{e.caution}</dd>
                    </div>
                  )}
                  {e.neverUse && (
                    <div>
                      <dt className="text-red-600 font-semibold uppercase tracking-wide mb-0.5">Never use on</dt>
                      <dd className="text-brand-charcoal/80">{e.neverUse}</dd>
                    </div>
                  )}
                </dl>
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-compliance-blue/5 border border-compliance-blue/20 p-4 text-sm text-brand-charcoal/80">
            <strong className="text-brand-charcoal">HMOs and blocks of flats: </strong>
            Most require at least one water extinguisher per floor and a CO₂ extinguisher
            near any electrical distribution boards. Any kitchen with cooking equipment
            requires a wet chemical extinguisher as a minimum.{" "}
            <Link
              href="/fire-extinguisher-testing"
              className="text-compliance-blue hover:underline font-medium"
            >
              Book fire extinguisher servicing →
            </Link>
          </div>
        </section>

        {/* ── Cross-sell ── */}
        <section aria-labelledby="related-heading">
          <Heading level={2} id="related-heading" className="mb-4">
            Other compliance certificates you may need
          </Heading>
          <p className="text-brand-charcoal/80 mb-5 text-sm leading-relaxed">
            Most landlords who need a Fire Risk Assessment also need an{" "}
            <Link href="/eicr" className="text-compliance-blue hover:underline font-medium">
              EICR
            </Link>{" "}
            and a{" "}
            <Link
              href="/gas-safety-certificate"
              className="text-compliance-blue hover:underline font-medium"
            >
              Gas Safety Certificate (CP12)
            </Link>
            . Book all three together and save with our{" "}
            <Link
              href="/landlord-certificates-bundle"
              className="text-compliance-blue hover:underline font-medium"
            >
              HMO Complete bundle
            </Link>
            .
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "EICR Certificate", href: "/eicr", price: "from £67.99" },
              { label: "Gas Safety (CP12)", href: "/gas-safety-certificate", price: "from £50" },
              { label: "EPC Certificate", href: "/epc", price: "from £89.99" },
              { label: "PAT Testing", href: "/pat-testing", price: "from £59.99" },
              { label: "Certificate Bundle", href: "/landlord-certificates-bundle", price: "from £130" },
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
            Book online in under 3 minutes. A NEBOSH qualified assessor will
            contact you to confirm your appointment. Written report emailed the
            same day — from £{popularPrice} for a 1–3 bedroom property.
          </p>
          <Link
            href="/book?service=fra-residential"
            className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
          >
            Book my FRA — from £{lowestPrice}
          </Link>
          <p className="mt-4 text-xs text-blue-300">
            No hidden charges. NEBOSH qualified assessors. Report emailed same day.
          </p>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=fra-residential"
        label="Book FRA"
        price={lowestPrice}
        serviceName="Fire Risk Assessment from"
      />
    </>
  );
}

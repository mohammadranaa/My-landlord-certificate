import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { TrustBadges } from "@/components/ui/trust-badges";
import { TrustpilotWidget } from "@/components/ui/trustpilot-widget";
import {
  ADDITIONAL_CHARGES,
  FRA_RESIDENTIAL_TABLE,
  getPriceForFRA,
} from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Fire Risk Assessment London from £74.99 — HMO & Residential | My Landlord Certificate",
  description:
    "Written Fire Risk Assessment from £74.99. IFSM-qualified assessors covering all 32 London boroughs. Required for HMOs and blocks of flats under the RRO 2005. Same-day written report.",
  alternates: {
    canonical: "https://mylandlordcertificate.co.uk/fire-safety/fire-risk-assessment",
  },
};

const entryPrice = getPriceForFRA("studio");

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fire Risk Assessment — Residential",
  url: "https://mylandlordcertificate.co.uk/fire-safety/fire-risk-assessment",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://mylandlordcertificate.co.uk",
  },
  areaServed: { "@type": "City", name: "London" },
  offers: {
    "@type": "Offer",
    price: `${entryPrice}`,
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Fire Safety", item: "https://mylandlordcertificate.co.uk/fire-safety" },
    { "@type": "ListItem", position: 3, name: "Fire Risk Assessment", item: "https://mylandlordcertificate.co.uk/fire-safety/fire-risk-assessment" },
  ],
};

const faqs = [
  {
    question: "Who is required to have a Fire Risk Assessment?",
    answer:
      "The Regulatory Reform (Fire Safety) Order 2005 requires a written Fire Risk Assessment for all non-domestic premises and all premises where common areas exist — this includes HMOs, blocks of flats with communal areas, and commercial properties. Private landlords of single-occupancy properties are not covered by the Order but should carry out an informal assessment.",
  },
  {
    question: "How often does a Fire Risk Assessment need to be reviewed?",
    answer:
      "There is no fixed legal interval, but the assessment must be reviewed whenever there has been a significant change to the premises (such as a refurbishment, change of use, or new occupancy) and annually as best practice. Most London HMO licence conditions require annual review.",
  },
  {
    question: "Who can carry out a Fire Risk Assessment?",
    answer:
      "The responsible person (landlord or managing agent) can carry out a basic assessment for simple premises. However, for HMOs, blocks of flats, and any premises with complex fire safety features, a qualified and experienced fire risk assessor is strongly recommended. Our assessors hold recognised qualifications under the Institute of Fire Safety Managers (IFSM) framework.",
  },
  {
    question: "What does the Fire Risk Assessment report include?",
    answer:
      "Our written report covers: identification of fire hazards, assessment of people at risk, evaluation of existing fire safety measures (escape routes, fire detection, suppression, signage), recommended actions with priority grading, and a record of findings. The report is suitable for submission to your local authority or HMO licensing body.",
  },
  {
    question: "Do you offer commercial Fire Risk Assessments?",
    answer:
      "Yes. We carry out fire risk assessments for commercial buildings, offices, retail premises, and large residential blocks. Commercial assessments are priced on the size and complexity of the premises — contact us on 0330 133 0066 for a tailored quote.",
  },
  {
    question: "What is the difference between a residential and commercial FRA?",
    answer:
      "A residential FRA focuses on communal areas — corridors, staircases, lobbies, and plant rooms — and the fire safety of individual dwellings. A commercial FRA covers the entire premises including workspaces, storage areas, and all escape routes. Our residential pricing covers HMOs and blocks of flats; commercial premises are quoted separately.",
  },
  {
    question: "How long does the assessment take?",
    answer:
      "A studio or 1-bedroom HMO typically takes 45–60 minutes. Larger HMOs (4–6 beds) take 1.5–2.5 hours. Blocks of flats with multiple communal areas can take a full day. We write the report the same day and email it within a few hours of completing the assessment.",
  },
  {
    question: "What qualifications do your assessors hold?",
    answer:
      "Our fire risk assessors hold qualifications recognised under the Institute of Fire Safety Managers (IFSM) Third Party Certification framework. They have experience with HMOs, purpose-built blocks, converted properties, and commercial premises across all 32 London boroughs.",
  },
  {
    question: "Which areas of London do you cover?",
    answer:
      "We cover all 32 London boroughs including Hackney, Islington, Tower Hamlets, Southwark, Lambeth, Wandsworth, Brent, Ealing, Hammersmith & Fulham, Camden, Westminster, Barnet, Haringey, and all other boroughs. A congestion zone supplement of £18 applies for properties within the TfL congestion zone.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FireRiskAssessmentPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
      <section className="bg-white border-b border-border py-10 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-brand-grey flex-wrap">
              <li><Link href="/" className="hover:text-compliance-blue transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/fire-safety" className="hover:text-compliance-blue transition-colors">Fire Safety</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-brand-charcoal font-medium">Fire Risk Assessment</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-3 leading-tight">
            Fire Risk Assessment London from £{entryPrice}
          </h1>
          <PriceDisplay price={entryPrice} from size="lg" className="mb-4" />
          <p className="text-brand-grey mb-4">
            IFSM-qualified assessors · Written report same day · Suitable for HMO licensing
          </p>
          <TrustBadges serviceKey="fire-risk-assessment" variant="light" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=fra-residential"
              className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Book Now — from £{entryPrice}
            </Link>
            <a
              href="#pricing"
              className="inline-flex items-center border border-border hover:border-compliance-blue text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              View All Prices
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="bg-brand-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-white/10">
            <div className="pl-0">
              <p className="text-xs text-white/50 mb-0.5">Entry price</p>
              <p className="font-bold text-white">from £{entryPrice}</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Review</p>
              <p className="font-bold text-white">Annually</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Report</p>
              <p className="font-bold text-white">Same day</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Legal basis</p>
              <p className="font-bold text-white">RR(FS)O 2005</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content well ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 md:pb-10">

        {/* What is it */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            What is a Fire Risk Assessment?
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            A Fire Risk Assessment is a systematic evaluation of your property to identify
            fire hazards, assess the risk to occupants, and determine what fire safety
            measures are needed to keep people safe. It must be a written record for all
            properties where the Regulatory Reform (Fire Safety) Order 2005 applies —
            including every HMO and block of flats with communal areas across London.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            For HMOs and blocks of flats, the assessment focuses on communal areas —
            corridors, staircases, lobbies, and plant rooms — and checks escape routes,
            fire detection, suppression, emergency signage, and fire doors. It identifies
            any actions required and prioritises them by risk level.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Our assessors hold recognised qualifications under the Institute of Fire Safety
            Managers (IFSM) framework and have experience with HMOs, purpose-built blocks,
            converted properties, and mixed-use buildings across all 32 London boroughs.
            The written report is suitable for submission to your local authority or HMO
            licensing body.
          </p>

          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Legal requirement:</span>{" "}
              The Regulatory Reform (Fire Safety) Order 2005 requires a written Fire Risk
              Assessment for all premises with communal areas — including HMOs, blocks of
              flats, and commercial buildings. The responsible person (landlord or managing
              agent) can be prosecuted and fined for failing to have a suitable and
              sufficient assessment in place.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8">How it works</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Book your assessment",
                body: "Select your property type and size. We confirm the price, agree a date, and send a qualified fire risk assessor — no preparation needed from you beyond providing access.",
              },
              {
                step: "2",
                title: "On-site assessment (45 min–3 hrs)",
                body: "Our assessor walks every communal area, checking escape routes, fire detection, suppression, signage, and fire doors. Hazards and deficiencies are recorded as they are found.",
              },
              {
                step: "3",
                title: "Written report same day",
                body: "You receive a full written report with a risk rating, priority action list, and record of findings. Suitable for HMO licence submission and local authority inspection.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex flex-col gap-3">
                <span className="w-9 h-9 rounded-full bg-compliance-blue text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {step}
                </span>
                <h3 className="font-semibold text-brand-charcoal">{title}</h3>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">
            Fire Risk Assessment Pricing
          </h2>
          <p className="text-brand-grey mb-6">
            Priced by property type and size. Includes on-site assessment and full written report.
          </p>
          <PriceTable
            title="Residential Fire Risk Assessment"
            rows={FRA_RESIDENTIAL_TABLE}
            highlightCheapest
          />
          <p className="text-sm text-brand-grey mt-4">
            Additional charges may apply:{" "}
            <span className="text-brand-charcoal font-medium">
              Congestion Zone +£{ADDITIONAL_CHARGES.congestionZone}
            </span>{" "}
            ·{" "}
            <span className="text-brand-charcoal font-medium">
              Parking restrictions +£{ADDITIONAL_CHARGES.parking}
            </span>
          </p>
          <p className="text-sm text-brand-grey mt-2">
            For commercial buildings, contact us at{" "}
            <a href="tel:03301330066" className="text-compliance-blue hover:underline">
              0330 133 0066
            </a>{" "}
            for a tailored quote.
          </p>
        </section>

        {/* What's included */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            What&apos;s included for £{entryPrice}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "On-site assessment by qualified assessor",
              "Identification of fire hazards",
              "Evaluation of escape routes",
              "Fire detection and alarm check",
              "Emergency signage and lighting check",
              "Risk rating and priority action list",
              "Full written report same day",
              "Suitable for HMO licensing submission",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-action-green/20 text-brand-charcoal flex items-center justify-center shrink-0 text-xs font-bold">
                  ✓
                </span>
                <span className="text-sm text-brand-charcoal/80">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQs */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Frequently Asked Questions</h2>
          <FAQAccordion items={faqs} />
        </section>

        {/* Related services */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Related services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                name: "Fire Safety Certificate",
                href: "/fire-safety/fire-safety-certificate",
                desc: "Smoke and CO alarm testing from £54.99. Required for all London rental properties.",
              },
              {
                name: "Fire Door Certificate",
                href: "/fire-safety/fire-door-certificate",
                desc: "Fire door inspection from £119.99/door. BS 9999 compliant. Annual HMO requirement.",
              },
              {
                name: "Fire Alarm Installation",
                href: "/fire-safety/fire-alarm-installation",
                desc: "Mains-wired interlinked alarms from £209.99/alarm. Required for new HMO licences.",
              },
            ].map(({ name, href, desc }) => (
              <Link
                key={href}
                href={href}
                className="border border-border rounded-xl p-4 hover:border-compliance-blue transition-colors group"
              >
                <p className="font-semibold text-brand-charcoal group-hover:text-compliance-blue transition-colors mb-1">
                  {name}
                </p>
                <p className="text-sm text-brand-grey">{desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Trustpilot micro strip */}
        <section aria-label="Trustpilot rating" className="py-6 border-b border-border flex justify-center">
          <TrustpilotWidget
            businessUnitId={process.env.NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID}
            variant="micro"
          />
        </section>

        {/* CTA block */}
        <section className="py-10">
          <div className="bg-compliance-blue rounded-2xl px-6 py-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Book your Fire Risk Assessment
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Fixed price from £{entryPrice}. IFSM-qualified assessors, written report same day.
              Suitable for HMO licensing across all 32 London boroughs.
            </p>
            <Link
              href="/book?service=fra-residential"
              className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Book Now — from £{entryPrice}
            </Link>
          </div>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=fra-residential"
        label="Book Now"
        price={entryPrice}
        serviceName="Fire Risk Assessment"
      />
    </>
  );
}

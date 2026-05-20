import type { Metadata } from "next";
import { LazyFAQAccordion as FAQAccordion, LazyStickyMobileCTA as StickyMobileCTA } from "@/components/lazy";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { TrustBadges } from "@/components/ui/trust-badges";
import { ADDITIONAL_CHARGES, FRA_COMMERCIAL_TABLE } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Commercial Fire Risk Assessment from £149.99 | My Landlord Certificate",
  description:
    "Commercial fire risk assessment from £149.99 for communal areas up to 3 floors. Required under the Regulatory Reform (Fire Safety) Order 2005. IFSM-qualified assessors. London-wide.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/fire-safety/commercial-fire-risk-assessment",
  },
};

const entryPrice = FRA_COMMERCIAL_TABLE[0].price;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Fire Risk Assessment",
  url: "https://www.mylandlordcertificate.co.uk/fire-safety/commercial-fire-risk-assessment",
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Fire Safety", item: "https://www.mylandlordcertificate.co.uk/fire-safety" },
    { "@type": "ListItem", position: 3, name: "Commercial Fire Risk Assessment", item: "https://www.mylandlordcertificate.co.uk/fire-safety/commercial-fire-risk-assessment" },
  ],
};

const faqs = [
  {
    question: "Who is required to have a commercial fire risk assessment?",
    answer:
      "The Regulatory Reform (Fire Safety) Order 2005 (RRO) requires a written fire risk assessment for all non-domestic premises and all premises where common areas exist. This includes commercial buildings, offices, retail premises, restaurants, hotels, communal areas in blocks of flats, and large HMOs. The responsible person — the owner, employer, or managing agent — is legally obligated to commission and maintain a suitable assessment.",
  },
  {
    question: "How does a commercial fire risk assessment differ from a residential one?",
    answer:
      "Commercial assessments are more complex than residential ones. They must account for a wider range of occupants (including members of the public, employees, and contractors), greater fire loads from stock and equipment, more complex means of escape, and potentially more sophisticated fire suppression and detection systems. Our assessors are experienced with all commercial building types.",
  },
  {
    question: "How often does a commercial fire risk assessment need to be reviewed?",
    answer:
      "There is no fixed legal interval, but the assessment must be reviewed when there has been a significant change to the premises — a refurbishment, change of use, new occupancy, or alteration to the fire safety systems. As best practice, annual review is recommended. If a fire occurs or if the local fire authority requests an updated assessment, it must be reviewed immediately.",
  },
  {
    question: "Can I be prosecuted for not having a fire risk assessment?",
    answer:
      "Yes. Under Article 32 of the Regulatory Reform (Fire Safety) Order 2005, failure to have a suitable and sufficient fire risk assessment is a criminal offence. Penalties include unlimited fines and up to two years in prison. The local Fire and Rescue Authority enforces the Order and carries out inspection visits.",
  },
  {
    question: "Do you cover large commercial buildings and portfolios?",
    answer:
      "Yes. We carry out fire risk assessments for single commercial premises and large portfolios of properties. For buildings above 10 floors or with complex fire safety systems, contact us to discuss the scope and arrange a preliminary call with your assigned assessor.",
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

export default function CommercialFireRiskAssessmentPage() {
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
              <li className="text-brand-charcoal font-medium">Commercial Fire Risk Assessment</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-3 leading-tight">
            Commercial Fire Risk Assessment from £{entryPrice}
          </h1>
          <PriceDisplay price={entryPrice} from size="lg" className="mb-4" />
          <p className="text-brand-grey mb-4">
            IFSM-qualified assessors · Written report same day · All building types
          </p>
          <TrustBadges serviceKey="fire-risk-assessment" variant="light" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=fra-commercial"
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
            Commercial fire risk assessment — what it covers
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            A commercial fire risk assessment is a systematic evaluation of your building
            to identify fire hazards, assess the risk to all occupants (including employees,
            customers, and contractors), and determine what fire safety measures are needed.
            It must be a written record under the Regulatory Reform (Fire Safety) Order 2005.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Our IFSM-qualified assessors cover all aspects of fire safety in commercial
            buildings: means of escape, fire detection and alarm systems, emergency lighting,
            fire suppression, fire doors, signage, firefighting equipment, and management
            procedures. The report identifies all hazards and recommends priority actions.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            We cover communal areas in blocks of flats and HMOs, commercial offices and
            retail premises, restaurants and hospitality venues, and large mixed-use
            buildings. For residential-only fire risk assessments, see our{" "}
            <Link href="/fire-risk-assessment" className="text-compliance-blue hover:underline">
              residential fire risk assessment
            </Link>{" "}
            page.
          </p>

          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Criminal offence:</span>{" "}
              Failure to carry out a suitable and sufficient fire risk assessment under
              the Regulatory Reform (Fire Safety) Order 2005 is a criminal offence
              carrying unlimited fines and up to two years imprisonment. The Fire and
              Rescue Authority enforces the Order and may inspect your premises at any time.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">
            Commercial Fire Risk Assessment Pricing
          </h2>
          <p className="text-brand-grey mb-6">
            Priced by building type and number of floors. Includes on-site assessment and full written report.
          </p>
          <PriceTable
            title="Commercial Fire Risk Assessment"
            rows={FRA_COMMERCIAL_TABLE}
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
            For residential properties, see{" "}
            <Link href="/fire-risk-assessment" className="text-compliance-blue hover:underline">
              residential fire risk assessment pricing →
            </Link>
          </p>
        </section>

        {/* What's included */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            What&apos;s included from £{entryPrice}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "On-site assessment by IFSM-qualified assessor",
              "Identification of all fire hazards",
              "Evaluation of all means of escape",
              "Fire detection and alarm system check",
              "Emergency lighting and signage inspection",
              "Fire door and suppression equipment check",
              "Risk rating and priority action list",
              "Full written report suitable for regulatory submission",
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
        <section className="below-fold py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Frequently Asked Questions</h2>
          <FAQAccordion items={faqs} />
        </section>

        {/* CTA block */}
        <section className="py-10">
          <div className="bg-compliance-blue rounded-2xl px-6 py-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Book your commercial fire risk assessment
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Fixed price from £{entryPrice}. IFSM-qualified assessors, written
              report same day. Suitable for regulatory submission.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/book?service=fra-commercial"
                className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                Book Online
              </Link>
              <a
                href="tel:03301330066"
                className="inline-flex items-center border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                0330 133 0066
              </a>
            </div>
          </div>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=fra-commercial"
        label="Book Now"
        price={entryPrice}
        serviceName="Commercial Fire Risk Assessment"
      />
    </>
  );
}

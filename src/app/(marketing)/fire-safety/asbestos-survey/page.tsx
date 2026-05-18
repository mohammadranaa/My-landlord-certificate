import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { TrustBadges } from "@/components/ui/trust-badges";
import { ADDITIONAL_CHARGES, ASBESTOS_SURVEY_TABLE } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Asbestos Survey from £239.99 | My Landlord Certificate",
  description:
    "Asbestos management survey from £239.99 including 1 sample. Required before renovation or demolition work in pre-2000 properties. UKAS-accredited laboratory analysis. London-wide.",
  alternates: {
    canonical: "https://mylandlordcertificate.co.uk/fire-safety/asbestos-survey",
  },
};

const entryPrice = ASBESTOS_SURVEY_TABLE[0].price;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asbestos Management Survey",
  url: "https://mylandlordcertificate.co.uk/fire-safety/asbestos-survey",
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
    { "@type": "ListItem", position: 3, name: "Asbestos Survey", item: "https://mylandlordcertificate.co.uk/fire-safety/asbestos-survey" },
  ],
};

const faqs = [
  {
    question: "When is an asbestos survey required?",
    answer:
      "An asbestos management survey is required in all non-domestic premises built before 2000 under the Control of Asbestos Regulations 2012 (CAR 2012). For residential rental properties, a management survey is strongly recommended before any renovation, refurbishment, or maintenance work that could disturb asbestos-containing materials (ACMs). A refurbishment and demolition survey is legally required before any significant structural work.",
  },
  {
    question: "What is the difference between a management survey and a refurbishment survey?",
    answer:
      "A management survey (Type 2) is used to manage asbestos in a building during normal occupation — it locates ACMs in accessible areas and assesses their condition without causing major damage. A refurbishment and demolition survey (Type 3) is more intrusive and required before major renovation or demolition work — it may involve opening up cavities and removing finishes. We carry out management surveys; for Type 3 surveys, call us to discuss your project.",
  },
  {
    question: "How long does an asbestos survey take?",
    answer:
      "A management survey for a typical flat or house takes 1–2 hours on-site. Samples are sent to a UKAS-accredited laboratory, and the written report is issued within 5–7 working days. Faster turnaround is available on request.",
  },
  {
    question: "Is asbestos always dangerous?",
    answer:
      "Asbestos is only dangerous when fibres become airborne and are inhaled. Undisturbed, well-bonded asbestos (e.g. in floor tiles or roofing sheets) poses little immediate risk. Friable or damaged asbestos — such as pipe lagging, sprayed coatings, or loose insulation — is more hazardous. The survey will assess the condition and risk of each ACM found.",
  },
  {
    question: "What happens if asbestos is found?",
    answer:
      "If asbestos is identified in a sample, the report will categorise it by type, condition, and risk rating, and recommend a management action — either monitor in place, repair, encapsulate, or remove. Asbestos removal must be carried out by a licensed contractor; we can recommend accredited removal specialists.",
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

export default function AsbestosSurveyPage() {
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
              <li className="text-brand-charcoal font-medium">Asbestos Survey</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-3 leading-tight">
            Asbestos Survey from £{entryPrice}
          </h1>
          <PriceDisplay price={entryPrice} from size="lg" className="mb-4" />
          <p className="text-brand-grey mb-4">
            UKAS-accredited laboratory · Management &amp; refurbishment surveys · Written report
          </p>
          <TrustBadges variant="light" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=asbestos-survey"
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
              <p className="text-xs text-white/50 mb-0.5">Report</p>
              <p className="font-bold text-white">5–7 working days</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Laboratory</p>
              <p className="font-bold text-white">UKAS accredited</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Regulation</p>
              <p className="font-bold text-white">CAR 2012</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content well ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 md:pb-10">

        {/* What is it */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Asbestos management survey for landlords and property owners
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Any property built before 2000 may contain asbestos-containing materials (ACMs).
            Common locations include artex ceilings, floor tiles, pipe lagging, roof materials,
            and boiler cupboard insulation. Before any renovation, refurbishment, or maintenance
            work, you need to know what ACMs are present and whether they could be disturbed.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Our surveyors carry out a visual inspection and take material samples for analysis
            at a UKAS-accredited laboratory. The written report identifies all suspected ACMs
            found, their location and condition, and recommends a management action —
            whether to monitor, repair, encapsulate, or remove.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Pricing is per sample submitted for laboratory analysis. Most properties require
            1–3 samples; larger or more complex properties may need more. Our surveyor will
            advise on the number of samples required during the visit.
          </p>

          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Legal requirement:</span>{" "}
              The Control of Asbestos Regulations 2012 (CAR 2012) requires duty holders of
              non-domestic premises to manage asbestos and maintain an asbestos register.
              For residential landlords, a management survey is required before any
              renovation or maintenance work in pre-2000 properties — and is strongly
              recommended before any new tenancy in older stock.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">Pricing</h2>
          <p className="text-brand-grey mb-6">
            Priced by number of samples submitted for laboratory analysis. Includes on-site survey and written report.
          </p>
          <PriceTable
            title="Asbestos Management Survey"
            rows={ASBESTOS_SURVEY_TABLE}
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
            Refurbishment and demolition surveys (Type 3) — call{" "}
            <a href="tel:03301330066" className="text-compliance-blue hover:underline">
              0330 133 0066
            </a>{" "}
            for a tailored quote based on the scope of works.
          </p>
        </section>

        {/* What's included */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            What&apos;s included from £{entryPrice}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Full visual inspection of accessible areas",
              "Sample collection and secure packaging",
              "UKAS-accredited laboratory analysis",
              "Identification of asbestos type and fibre",
              "Condition and risk assessment per ACM",
              "Management action recommendation",
              "Written report with photographs",
              "Asbestos register suitable for planning submission",
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

        {/* CTA block */}
        <section className="py-10">
          <div className="bg-compliance-blue rounded-2xl px-6 py-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Book your asbestos survey
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Fixed price from £{entryPrice}. UKAS-accredited laboratory analysis.
              Written report within 5–7 working days.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/book?service=asbestos-survey"
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
        href="/book?service=asbestos-survey"
        label="Book Now"
        price={entryPrice}
        serviceName="Asbestos Survey"
      />
    </>
  );
}

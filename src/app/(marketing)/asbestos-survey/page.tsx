import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import dynamic from "next/dynamic";
const FAQAccordion = dynamic(
  () => import("@/components/ui/faq-accordion").then(m => m.FAQAccordion),
  {
    ssr: true,
    loading: () => (
      <div className="space-y-3 mt-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-14 rounded-xl bg-border/30 animate-pulse" />
        ))}
      </div>
    ),
  }
)
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
const StickyMobileCTA = dynamic(
  () => import("@/components/ui/sticky-mobile-cta").then(m => m.StickyMobileCTA),
  { ssr: true }
)
import { TrustBadges } from "@/components/ui/trust-badges";
import { ADDITIONAL_CHARGES, ASBESTOS_SURVEY_TABLE } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Asbestos Survey London from £239.99 | My Landlord Certificate",
  description:
    "Asbestos management survey from £239.99 including 1 sample. Required before renovation or demolition in pre-2000 properties. UKAS-accredited laboratory analysis. London-wide service.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/asbestos-survey",
  },
};

const entryPrice = ASBESTOS_SURVEY_TABLE[0].price;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asbestos Management Survey",
  url: "https://www.mylandlordcertificate.co.uk/asbestos-survey",
  description:
    "Asbestos management survey for residential and commercial properties built before 2000. UKAS-accredited laboratory analysis and written report.",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://www.mylandlordcertificate.co.uk",
  },
  areaServed: ["London", "South East England"],
  offers: {
    "@type": "Offer",
    price: `${entryPrice}`,
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://www.mylandlordcertificate.co.uk/asbestos-survey",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Asbestos Survey", item: "https://www.mylandlordcertificate.co.uk/asbestos-survey" },
  ],
};

const faqs = [
  {
    question: "Does my property need an asbestos survey?",
    answer:
      "If your property was built before 2000, it may contain asbestos-containing materials (ACMs). Common locations include artex ceilings, floor tiles, pipe lagging, roof sheeting, boiler cupboard insulation, and cement panels. An asbestos survey is strongly recommended before any renovation, refurbishment, or maintenance work that could disturb these materials — and is legally required before demolition or major structural works.",
  },
  {
    question: "What types of asbestos survey are there?",
    answer:
      "There are two main types. A Management Survey (Type 2) is used to manage asbestos in a building during normal occupation — it locates ACMs in accessible areas and assesses their condition. A Refurbishment and Demolition Survey (Type 3) is more intrusive and legally required before any major renovation or demolition — it may involve opening up cavities, removing finishes, and accessing all areas of the building. We carry out management surveys; call us for Type 3 surveys.",
  },
  {
    question: "What is the legal duty to manage asbestos?",
    answer:
      "The Control of Asbestos Regulations 2012 (CAR 2012) require the duty holder of any non-domestic premises to manage any asbestos in the building. This means knowing where asbestos is, assessing its condition, and either managing it in place or arranging for its safe removal. For residential landlords, there is no explicit duty-to-manage obligation — but a management survey is strongly recommended before any renovation work.",
  },
  {
    question: "How long does an asbestos survey take?",
    answer:
      "The on-site visit for a typical flat or house takes 1–2 hours. Larger or more complex properties may take longer. Samples are sent to a UKAS-accredited laboratory after the visit, and the written report is issued within 5–7 working days. Faster turnaround (2–3 working days) is available on request.",
  },
  {
    question: "What happens if asbestos is found?",
    answer:
      "If asbestos is confirmed in a sample, the report categorises it by type (chrysotile, amosite, crocidolite), location, condition, and risk. It then recommends a management action — monitor in place, repair, encapsulate, or remove. Low-risk, undisturbed asbestos can often be safely managed in place. High-risk or damaged asbestos must be removed by a licensed contractor. We can recommend accredited removal specialists if needed.",
  },
  {
    question: "Is asbestos always dangerous?",
    answer:
      "Asbestos fibres are only dangerous when they become airborne and are inhaled. Undisturbed, well-bonded asbestos (such as floor tiles or cement sheets) poses little immediate risk. Friable or damaged asbestos — such as pipe lagging, sprayed coatings, or loose insulation — releases fibres more easily and is more hazardous. The survey will assess the risk level of each material found.",
  },
  {
    question: "How is the price calculated?",
    answer:
      "Pricing is per sample submitted for laboratory analysis. Most properties require 1–3 samples; larger or more complex properties with more suspect materials may need more. Our surveyor will advise on the appropriate number of samples to take during the visit. The price includes the on-site survey, sample collection, laboratory analysis, and written report.",
  },
  {
    question: "Can I do the survey myself?",
    answer:
      "You should not attempt to collect asbestos samples yourself — disturbing suspect materials without proper protective equipment and training can release dangerous fibres. Asbestos surveys must be carried out by competent persons who have received appropriate training. Our surveyors have RSPH (Royal Society for Public Health) or equivalent asbestos surveying qualifications.",
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

const steps = [
  {
    step: "1",
    title: "Book online or call us",
    description:
      "Tell us the property address, approximate age, and whether you have any specific concerns about suspect materials. We'll confirm the survey date and likely number of samples.",
  },
  {
    step: "2",
    title: "Surveyor visits and takes samples",
    description:
      "Our trained surveyor visits the property, carries out a full visual inspection, and collects samples from any suspect materials using appropriate protective equipment. The process causes minimal disturbance.",
  },
  {
    step: "3",
    title: "Laboratory analysis and written report",
    description:
      "Samples are dispatched to a UKAS-accredited laboratory. Your written report — including photographs, condition assessment, and management recommendations — is emailed within 5–7 working days.",
  },
];

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
              <li className="text-brand-charcoal font-medium">Asbestos Survey</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-3 leading-tight">
            Asbestos Survey London from £{entryPrice}
          </h1>
          <PriceDisplay price={entryPrice} from size="lg" className="mb-4" />
          <p className="text-brand-grey mb-4">
            UKAS-accredited laboratory · Management &amp; refurbishment surveys · Report in 5–7 days
          </p>
          <TrustBadges serviceKey="asbestos-survey" variant="light" className="mb-6" />
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
            Do you need an asbestos survey?
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Asbestos was used extensively in UK building materials until it was banned in
            1999. Any property built or refurbished before 2000 may contain
            asbestos-containing materials (ACMs) — and in London, where much of the housing
            stock dates from the Victorian era through to the 1980s, this is a significant
            proportion of the rental market.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Common locations for ACMs include: artex textured coatings on ceilings and
            walls, floor tiles and the adhesive beneath them, pipe lagging on older central
            heating systems, asbestos insulating board (AIB) panels in airing cupboards and
            around heating equipment, roof sheets and soffits on older extensions, and
            loose-fill insulation in loft spaces.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Undisturbed, well-bonded asbestos poses little immediate risk — but any
            renovation, maintenance work, or refurbishment that could disturb ACMs requires
            you to know what you&apos;re dealing with first. Our management survey identifies
            and characterises all suspect materials, so you can plan works safely.
          </p>

          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Legal requirement:</span>{" "}
              The Control of Asbestos Regulations 2012 (CAR 2012) require the duty holder
              of any non-domestic premises to actively manage any asbestos in the building.
              For residential landlords, a management survey is strongly recommended before
              any renovation or maintenance work in properties built before 2000. Regulation
              4 of CAR 2012 makes failure to manage asbestos a criminal offence.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">Pricing</h2>
          <p className="text-brand-grey mb-6">
            Priced by number of samples submitted for UKAS-accredited laboratory analysis. Includes on-site survey and written report.
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
            Refurbishment and demolition surveys (Type 3) and large commercial properties —
            call{" "}
            <a href="tel:03301330066" className="text-compliance-blue hover:underline">
              0330 133 0066
            </a>{" "}
            for a tailored quote.
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
              "Sample collection with appropriate PPE",
              "UKAS-accredited laboratory analysis",
              "Asbestos type and fibre identification",
              "Condition and risk assessment per ACM",
              "Management action recommendation",
              "Written report with photographs",
              "Asbestos register for planning or licensing use",
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

        {/* How it works */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">How it works</h2>
          <div className="flex flex-col gap-6">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-compliance-blue text-white flex items-center justify-center shrink-0 font-bold text-sm">
                  {s.step}
                </div>
                <div>
                  <p className="font-semibold text-brand-charcoal mb-1">{s.title}</p>
                  <p className="text-sm text-brand-grey leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cross-sell */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Related services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: "/eicr", label: "Domestic EICR", desc: "Required before or after renovation work." },
              { href: "/fire-risk-assessment", label: "Fire Risk Assessment", desc: "Often required alongside asbestos surveys for HMOs." },
              { href: "/fire-safety-certificate", label: "Fire Safety Certificate", desc: "Annual smoke alarm testing for rental properties." },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-warm-white border border-border rounded-xl p-4 hover:border-compliance-blue transition-colors"
              >
                <p className="font-semibold text-brand-charcoal group-hover:text-compliance-blue transition-colors text-sm mb-1">
                  {s.label}
                </p>
                <p className="text-xs text-brand-grey">{s.desc}</p>
              </Link>
            ))}
          </div>
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
              Book your asbestos survey
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Fixed price from £{entryPrice}. UKAS-accredited laboratory analysis.
              Written report within 5–7 working days. Same-week appointments across London.
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

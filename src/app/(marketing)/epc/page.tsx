import type { Metadata } from "next";
import { LazyFAQAccordion as FAQAccordion, LazyStickyMobileCTA as StickyMobileCTA } from "@/components/lazy";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { TrustBadges } from "@/components/ui/trust-badges";
import {
  ADDITIONAL_CHARGES,
  DOMESTIC_EPC_TABLE,
  getPriceForEPC,
} from "@/lib/pricing";

export const metadata: Metadata = {
  title: "EPC Certificate from £89.99 | My Landlord Certificate",
  description:
    "Domestic Energy Performance Certificate from £89.99. Required by law before renting or selling. Accredited DEA assessors, certificate on national register within 24 hours. London-wide.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/epc",
  },
};

const entryPrice = getPriceForEPC("studio");

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Domestic Energy Performance Certificate (EPC)",
  url: "https://www.mylandlordcertificate.co.uk/epc",
  description:
    "Legally required for all residential properties before renting or selling. Accredited DEA assessors provide an A–G energy efficiency rating valid for 10 years.",
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
    url: "https://www.mylandlordcertificate.co.uk/epc",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "EPC", item: "https://www.mylandlordcertificate.co.uk/epc" },
  ],
};

const faqs = [
  {
    question: "Is an EPC required by law?",
    answer:
      "Yes. The Energy Performance of Buildings (England and Wales) Regulations 2012 require a valid EPC before a residential property is marketed for sale or rent. The EPC must be made available to prospective tenants or buyers free of charge. Landlords who fail to provide a valid EPC can be fined up to £5,000.",
  },
  {
    question: "How long is a domestic EPC valid for?",
    answer:
      "A domestic EPC is valid for 10 years from the date of assessment. If you have a valid EPC from a previous tenancy or sale, you do not need a new one until it expires — as long as no major energy-related improvements (new heating system, significant insulation) have been made to the property.",
  },
  {
    question: "What is the minimum EPC rating required to let a property?",
    answer:
      "Under the Minimum Energy Efficiency Standards (MEES), all privately rented properties in England must have a minimum EPC rating of E. Letting a property rated F or G on a new tenancy is unlawful and can result in a fine of up to £5,000. The government has proposed raising the minimum to C for new tenancies by 2028.",
  },
  {
    question: "What does the EPC assessment involve?",
    answer:
      "Our accredited DEA assessor visits the property and records information about the construction type, wall and loft insulation, windows, heating system, hot water cylinder, and any renewable energy systems. The data is entered into government-approved software (RdSAP) to calculate the energy efficiency rating. The assessment takes 30–60 minutes for a typical flat or house.",
  },
  {
    question: "How can I improve my EPC rating?",
    answer:
      "The EPC certificate includes a Recommendations Report listing the most cost-effective improvements for your property. Common improvements include loft insulation (typically raises rating by 5–10 points), cavity wall insulation, upgrading to an A-rated condensing boiler, installing a room thermostat, and switching to LED lighting. Our assessors can advise on the impact of specific improvements.",
  },
  {
    question: "Do furnished or unfurnished properties need an EPC?",
    answer:
      "Yes. The EPC requirement applies regardless of whether the property is furnished or unfurnished. It relates to the building itself — its fabric, construction, and fixed building services — not the contents.",
  },
  {
    question: "Can I use an existing EPC from a previous tenant?",
    answer:
      "Yes, if the existing EPC is still valid (less than 10 years old) and no significant structural or energy-related changes have been made to the property, it can be used for a new tenancy. The EPC can be retrieved from the national register using the property address.",
  },
  {
    question: "How quickly will I receive the certificate?",
    answer:
      "We register the EPC on the national EPC register within 24 hours of the assessment. You will receive your certificate number and a link to the register entry by email. You can provide this to letting agents and prospective tenants immediately.",
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
      "Select your property size, pick a date that suits you, and confirm. We cover all 32 London boroughs with same-week appointments.",
  },
  {
    step: "2",
    title: "Assessor visits your property",
    description:
      "Our accredited DEA assessor carries out a 30–60 minute survey of the property's construction, heating, insulation, and energy systems.",
  },
  {
    step: "3",
    title: "Certificate registered within 24 hours",
    description:
      "Your EPC is lodged on the government's national register. You receive the certificate number and a full recommendations report by email.",
  },
];

export default function EPCPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
      <section className="bg-compliance-blue text-white py-10 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-blue-200 flex-wrap">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li className="text-white font-medium">EPC Certificate</li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            Accredited DEA Assessors · National EPC Register · Valid 10 Years
          </p>

          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
            EPC Certificate from £{entryPrice}
          </h1>
          <PriceDisplay price={entryPrice} from size="lg" className="mb-4 [&>span:last-child]:text-white" />
          <p className="text-blue-100 text-lg leading-relaxed mb-6">
            Energy Performance Certificate — required by law before renting or selling any
            residential property. Accredited DEA assessors across London, certificate registered
            on the national EPC register within 24 hours.
          </p>
          <TrustBadges serviceKey="epc" variant="dark" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=epc"
              className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Book Now — from £{entryPrice}
            </Link>
            <a
              href="#pricing"
              className="inline-flex items-center bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
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
              <p className="text-xs text-white/50 mb-0.5">Valid for</p>
              <p className="font-bold text-white">10 years</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Minimum rating</p>
              <p className="font-bold text-white">E (MEES)</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Accreditation</p>
              <p className="font-bold text-white">DEA accredited</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content well ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 md:pb-10">

        {/* What is it */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            What is a domestic EPC?
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            An Energy Performance Certificate (EPC) rates the energy efficiency of a
            residential property on a scale from A (most efficient, lowest bills) to G
            (least efficient, highest bills). It also shows the property&apos;s current energy
            costs and what they could be after recommended improvements.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            EPCs are produced by accredited Domestic Energy Assessors (DEAs) using
            government-approved RdSAP (Reduced Data Standard Assessment Procedure) software.
            The assessment considers the property&apos;s construction type, insulation levels,
            heating system, hot water cylinder, and any renewable energy systems.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Every EPC comes with a Recommendations Report — a list of cost-effective
            improvements that would improve the rating, along with estimated costs and
            potential savings. This is useful for landlords planning to improve their
            properties ahead of the proposed 2028 MEES changes.
          </p>

          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4 mb-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Legal requirement:</span>{" "}
              The Energy Performance of Buildings (England and Wales) Regulations 2012
              require a valid EPC to be provided before any residential property is rented
              or sold. Under MEES regulations, properties must achieve a minimum E rating —
              failure to comply can result in a fine of up to £5,000.
            </p>
          </div>

          <div className="bg-compliance-blue/5 border border-compliance-blue/20 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-compliance-blue">Coming 2028:</span>{" "}
              The government has proposed raising the minimum EPC rating for new tenancies
              to C by 2028. If your property is currently rated D or E, now is the time
              to commission an EPC assessment and plan any necessary improvements.
            </p>
          </div>
        </section>

        {/* EPC ratings explained */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            EPC ratings A–G explained
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            The EPC rating is based on the estimated annual energy cost per square metre
            of floor area. The lower the cost, the higher the rating.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { rating: "A", range: "92–100", colour: "bg-green-600", text: "text-white" },
              { rating: "B", range: "81–91", colour: "bg-green-500", text: "text-white" },
              { rating: "C", range: "69–80", colour: "bg-lime-500", text: "text-white" },
              { rating: "D", range: "55–68", colour: "bg-yellow-400", text: "text-brand-charcoal" },
              { rating: "E", range: "39–54", colour: "bg-orange-400", text: "text-white" },
              { rating: "F", range: "21–38", colour: "bg-orange-600", text: "text-white" },
              { rating: "G", range: "1–20", colour: "bg-red-600", text: "text-white" },
              { rating: "Min", range: "E required", colour: "bg-compliance-blue", text: "text-white" },
            ].map((r) => (
              <div
                key={r.rating}
                className={`${r.colour} ${r.text} rounded-xl p-3 text-center`}
              >
                <p className="text-2xl font-bold">{r.rating}</p>
                <p className="text-xs mt-1 opacity-80">{r.range}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-4">
            Properties rated F or G cannot legally be let on a new tenancy. The legal
            minimum is E. The proposed minimum from 2028 is C.
          </p>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">Pricing</h2>
          <p className="text-brand-grey mb-6">
            Fixed price by property size. Includes on-site assessment and lodgement on the national EPC register.
          </p>
          <PriceTable
            title="Domestic EPC"
            rows={DOMESTIC_EPC_TABLE}
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
            For commercial properties, see{" "}
            <Link href="/commercial-epc" className="text-compliance-blue hover:underline">
              commercial EPC pricing →
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
              "30–60 min on-site assessment",
              "Construction type and insulation survey",
              "Heating system and hot water assessment",
              "A–G energy efficiency rating",
              "Estimated annual energy cost",
              "Recommendations Report with improvement costs",
              "Lodgement on national EPC register within 24 hours",
              "Certificate emailed to you directly",
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
              { href: "/eicr", label: "Domestic EICR", desc: "Legally required every 5 years." },
              { href: "/gas-safety-certificate", label: "Gas Safety (CP12)", desc: "Required annually for gas properties." },
              { href: "/commercial-epc", label: "Commercial EPC", desc: "For offices, retail, and commercial lets." },
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
              Book your EPC assessment
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Fixed price from £{entryPrice}. Accredited DEA assessors, certificate
              registered on the national EPC register within 24 hours.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/book?service=epc"
                className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                Book Online — from £{entryPrice}
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
        href="/book?service=epc"
        label="Book Now"
        price={entryPrice}
        serviceName="Domestic EPC"
      />
    </>
  );
}

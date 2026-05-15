import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { TrustBadges } from "@/components/ui/trust-badges";
import {
  ADDITIONAL_CHARGES,
  COMMERCIAL_EICR_EXTRA_CIRCUIT_CHARGE,
  COMMERCIAL_EICR_TABLE,
} from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Commercial EICR from £149.99 | My Landlord Certificate",
  description:
    "Commercial EICR from £149.99 (1 consumer unit). Priced per consumer unit with no hidden charges. NICEIC approved electricians across London. Certificate same day.",
  alternates: {
    canonical: "https://mylandlordcertificate.co.uk/electrical-safety/commercial-eicr",
  },
};

const entryPrice = 149.99;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial EICR — Electrical Installation Condition Report",
  url: "https://mylandlordcertificate.co.uk/electrical-safety/commercial-eicr",
  offers: {
    "@type": "Offer",
    price: "149.99",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Electrical Safety", item: "https://mylandlordcertificate.co.uk/electrical-safety" },
    { "@type": "ListItem", position: 3, name: "Commercial EICR", item: "https://mylandlordcertificate.co.uk/electrical-safety/commercial-eicr" },
  ],
};

const faqs = [
  {
    question: "Is a commercial EICR a legal requirement?",
    answer:
      "Commercial EICRs are required under the Electricity at Work Regulations 1989 and the Health and Safety at Work Act 1974. Commercial landlords and employers have a duty to ensure electrical installations are safe. The recommended frequency is every 5 years or on change of occupancy.",
  },
  {
    question: "What is a consumer unit and how is pricing determined?",
    answer:
      "A consumer unit (also called a fuse box or distribution board) is the main electrical panel that controls the circuits in a building. Commercial EICR pricing is based on the number of consumer units — each unit typically controls up to 10 circuits. Additional circuits beyond 10 per unit are charged at £25 each.",
  },
  {
    question: "How long does a commercial EICR take?",
    answer:
      "Commercial EICRs typically take 4–8 hours depending on the number of consumer units and circuits. For larger premises, we may require two visits. We will confirm the estimated duration when booking.",
  },
  {
    question: "Do you cover HMOs and blocks of flats?",
    answer:
      "Yes. We regularly inspect HMOs, purpose-built flats, mixed-use buildings, and commercial premises. For HMOs with multiple consumer units, each unit is priced separately.",
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

export default function CommercialEICRPage() {
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
              <li><Link href="/electrical-safety" className="hover:text-compliance-blue transition-colors">Electrical Safety</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-brand-charcoal font-medium">Commercial EICR</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-3 leading-tight">
            Commercial EICR from £{entryPrice}
          </h1>
          <PriceDisplay price={entryPrice} from size="lg" className="mb-4" />
          <p className="text-brand-grey mb-4">
            NICEIC approved · Priced per consumer unit · Certificate emailed same day
          </p>
          <TrustBadges variant="light" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=commercial-eicr"
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
              <p className="text-xs text-white/50 mb-0.5">Recommended every</p>
              <p className="font-bold text-white">5 years</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Certificate</p>
              <p className="font-bold text-white">Same day</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Accreditation</p>
              <p className="font-bold text-white">NICEIC</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content well ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 md:pb-10">

        {/* What is a commercial EICR */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            What is a commercial EICR?
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            A commercial EICR (Electrical Installation Condition Report) is a thorough inspection
            of all fixed electrical wiring and installations in commercial premises, offices,
            retail units, HMOs, and mixed-use properties. Our NICEIC approved electricians test
            each consumer unit, circuit, and earthing arrangement against BS 7671 standards.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Commercial properties typically have more consumer units and circuits than domestic
            properties, so pricing is based on the number of consumer units. Each unit covers
            up to 10 circuits — additional circuits are charged at £{COMMERCIAL_EICR_EXTRA_CIRCUIT_CHARGE}
            {" "}each.
          </p>

          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Legal requirement:</span>{" "}
              The Electricity at Work Regulations 1989 require all employers and commercial
              property owners to maintain electrical systems in a safe condition. A commercial
              EICR every 5 years (or on change of occupancy) is the accepted method of
              demonstrating compliance.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">Commercial EICR Pricing</h2>
          <p className="text-brand-grey mb-6">
            Priced by number of consumer units. Each unit covers up to 10 circuits.
            Additional circuits: +£{COMMERCIAL_EICR_EXTRA_CIRCUIT_CHARGE} per circuit.
          </p>
          <PriceTable
            title="Commercial EICR"
            rows={COMMERCIAL_EICR_TABLE}
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
            For work over £500, call us on{" "}
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
              "Inspection of all consumer units and distribution boards",
              "Testing of all circuits and earthing connections",
              "Full circuit-by-circuit testing and reporting",
              "Coded fault classification (C1, C2, C3, FI)",
              "NICEIC approved electrician",
              "Full written EICR report same day",
              "Additional circuit testing at £25/circuit",
              "Compliant with BS 7671 18th Edition",
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
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </section>

        {/* CTA block */}
        <section className="py-10">
          <div className="bg-compliance-blue rounded-2xl px-6 py-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Book your commercial EICR
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Fixed price from £{entryPrice}. Same-week appointments across London.
              NICEIC approved engineers, full report same day.
            </p>
            <Link
              href="/book?service=commercial-eicr"
              className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Book Now — from £{entryPrice}
            </Link>
          </div>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=commercial-eicr"
        label="Book Now"
        price={entryPrice}
        serviceName="Commercial EICR"
      />
    </>
  );
}

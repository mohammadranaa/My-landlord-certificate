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
  GAS_SAFETY_CP12_TABLE,
  getPriceForGasSafety,
} from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Gas Safety Certificate (CP12) from £49.99 | My Landlord Certificate",
  description:
    "Gas Safety Certificate (CP12) from £49.99 for 1 appliance. Annual legal requirement for all landlords with gas appliances. Gas Safe Registered engineers, certificate emailed same day.",
  alternates: {
    canonical: "https://mylandlordcertificate.co.uk/gas-safety/cp12",
  },
};

const entryPrice = getPriceForGasSafety(1);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gas Safety Certificate (CP12) — Domestic",
  url: "https://mylandlordcertificate.co.uk/gas-safety/cp12",
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
    { "@type": "ListItem", position: 2, name: "Gas Safety", item: "https://mylandlordcertificate.co.uk/gas-safety" },
    { "@type": "ListItem", position: 3, name: "Gas Safety Certificate (CP12)", item: "https://mylandlordcertificate.co.uk/gas-safety/cp12" },
  ],
};

const faqs = [
  {
    question: "Is a Gas Safety Certificate a legal requirement?",
    answer:
      "Yes. The Gas Safety (Installation and Use) Regulations 1998 require landlords to have a valid Gas Safety Certificate (Landlord's Gas Safety Record) for every rental property with gas appliances. It must be renewed every 12 months. Failing to comply can result in a fine of up to £6,000 or 6 months imprisonment.",
  },
  {
    question: "What is checked during a gas safety inspection?",
    answer:
      "The engineer inspects and tests all gas appliances (boilers, fires, cookers), checks gas pipework for leaks, tests flues and ventilation, and verifies emergency controls are accessible. Each appliance receives a pass or advisory result, and the overall installation is assessed for safety.",
  },
  {
    question: "How long does a Gas Safety inspection take?",
    answer:
      "A typical inspection with 1–2 appliances takes 45–90 minutes. If issues are found or appliances are difficult to access, it may take longer. The certificate is emailed the same day.",
  },
  {
    question: "Can I give the tenant their copy digitally?",
    answer:
      "Yes. You must provide your tenant with a copy of the Gas Safety Certificate within 28 days of the inspection (or before they move in for new tenancies). We email you a digital copy which you can forward to your tenant or print and hand over.",
  },
  {
    question: "What is the difference between CP12 and a boiler service?",
    answer:
      "A CP12 (Gas Safety Certificate) inspects all gas appliances for safety compliance — it is a legal requirement. A boiler service cleans, adjusts, and optimises the boiler for efficiency and longevity — it is not a legal requirement but is recommended annually. We offer a combined Gas Safety + Boiler Service option at £84.99.",
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

export default function CP12Page() {
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
              <li><Link href="/gas-safety" className="hover:text-compliance-blue transition-colors">Gas Safety</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-brand-charcoal font-medium">Gas Safety Certificate (CP12)</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-3 leading-tight">
            Gas Safety Certificate (CP12) from £{entryPrice}
          </h1>
          <PriceDisplay price={entryPrice} from size="lg" className="mb-4" />
          <p className="text-brand-grey mb-4">
            Gas Safe Registered · Annual legal requirement · Certificate emailed same day
          </p>
          <TrustBadges variant="light" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=gas-safety-cp12"
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
              <p className="text-xs text-white/50 mb-0.5">Valid for</p>
              <p className="font-bold text-white">12 months</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Certificate</p>
              <p className="font-bold text-white">Same day</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Accreditation</p>
              <p className="font-bold text-white">Gas Safe</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content well ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 md:pb-10">

        {/* What is a CP12 */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            What is a Gas Safety Certificate (CP12)?
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            A Gas Safety Certificate — formally known as a Landlord&apos;s Gas Safety Record or
            CP12 — is an annual inspection of all gas appliances and installations in your rental
            property. It confirms that your boiler, gas fire, cooker, and any other gas appliances
            are safe to use.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Only Gas Safe Registered engineers can legally carry out gas work or issue a Gas Safety
            Certificate in the UK. Our engineers are on the Gas Safe Register and carry their ID
            card to every visit — you can verify their registration at GasSafeRegister.co.uk.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            The certificate must be renewed every 12 months without exception. You must give your
            tenant a copy before they move in, and within 28 days of each annual renewal.
          </p>

          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Legal requirement:</span>{" "}
              The Gas Safety (Installation and Use) Regulations 1998 require all landlords to
              carry out a gas safety check annually and provide tenants with the result. Failure
              to comply is a criminal offence.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">Gas Safety Pricing</h2>
          <p className="text-brand-grey mb-6">
            Priced by number of gas appliances. Includes inspection of all appliances and written certificate.
          </p>
          <PriceTable
            title="Gas Safety Certificate (CP12)"
            rows={GAS_SAFETY_CP12_TABLE}
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
            For commercial premises with CP42?{" "}
            <Link href="/gas-safety/cp42" className="text-compliance-blue hover:underline">
              View commercial gas safety pricing →
            </Link>
          </p>
        </section>

        {/* What's included */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            What&apos;s included for £{entryPrice}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Inspection of all gas appliances",
              "Testing of gas pipework and connections",
              "Flue and ventilation check",
              "Emergency control valve verification",
              "Gas tightness test",
              "Landlord's Gas Safety Record (CP12)",
              "Certificate emailed same day",
              "Gas Safe Registered engineer",
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
              Book your Gas Safety Certificate
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Fixed price from £{entryPrice}. Gas Safe Registered engineers. Certificate emailed
              the same day. Same-week appointments across London.
            </p>
            <Link
              href="/book?service=gas-safety-cp12"
              className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Book Now — from £{entryPrice}
            </Link>
          </div>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=gas-safety-cp12"
        label="Book Now"
        price={entryPrice}
        serviceName="Gas Safety Certificate (CP12)"
      />
    </>
  );
}

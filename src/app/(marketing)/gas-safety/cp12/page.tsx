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
  GAS_SAFETY_CP12_TABLE,
  getPriceForGasSafety,
} from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Gas Safety Certificate (CP12) London from £49.99 | My Landlord Certificate",
  description:
    "Annual landlord gas safety certificate (CP12) from £49.99. Legally required every 12 months for rental properties with gas appliances. Gas Safe Registered engineers across all 32 London boroughs. Certificate emailed same day.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/gas-safety/cp12",
  },
};

const entryPrice = getPriceForGasSafety(1);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gas Safety Certificate (CP12) — Domestic Landlord",
  url: "https://www.mylandlordcertificate.co.uk/gas-safety/cp12",
  description:
    "Annual legal requirement for all rental properties with gas appliances. Gas Safe Registered engineers inspect boilers, fires, and cookers. Certificate emailed same day.",
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
    url: "https://www.mylandlordcertificate.co.uk/gas-safety/cp12",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Gas Safety", item: "https://www.mylandlordcertificate.co.uk/gas-safety" },
    { "@type": "ListItem", position: 3, name: "Gas Safety Certificate (CP12)", item: "https://www.mylandlordcertificate.co.uk/gas-safety/cp12" },
  ],
};

const faqs = [
  {
    question: "Is a Gas Safety Certificate a legal requirement for landlords?",
    answer:
      "Yes. The Gas Safety (Installation and Use) Regulations 1998 require every landlord who rents a property with gas appliances to have a valid Gas Safety Certificate (Landlord's Gas Safety Record). It must be renewed every 12 months without exception. Failure to comply is a criminal offence carrying fines of up to £6,000 or 6 months imprisonment.",
  },
  {
    question: "What is checked during a gas safety inspection?",
    answer:
      "The Gas Safe Registered engineer inspects and tests every gas appliance in the property — boiler, gas fires, gas cooker, and any gas hobs or ovens. Each appliance is checked for safe operation, correct combustion, flue integrity, and adequate ventilation. The engineer also tests the gas pipework for leaks and verifies that emergency control valves are accessible.",
  },
  {
    question: "How often do I need a Gas Safety Certificate?",
    answer:
      "Every 12 months. The certificate must be in place before a new tenancy begins, and you must renew it annually throughout the tenancy. You must give your tenant a copy before they move in (for new tenancies) and within 28 days of each annual renewal.",
  },
  {
    question: "What is the difference between a CP12 and a boiler service?",
    answer:
      "A CP12 (Gas Safety Certificate) is a safety inspection — a legal requirement that checks all gas appliances are safe. A boiler service is a maintenance procedure that cleans and tunes the boiler for efficiency — it is not a legal requirement but is strongly recommended. We offer a combined Gas Safety + Boiler Service at a reduced rate. Ask when booking.",
  },
  {
    question: "What happens if an appliance fails the gas safety check?",
    answer:
      "If an appliance is found to be immediately dangerous (ID), the engineer must take it out of use and warn you not to use it until it has been repaired or replaced. If it is at risk (AR), the engineer records the issue and advises remedial action. A certificate can still be issued for the other appliances that pass. Any failed appliance must be repaired or replaced before the next tenancy.",
  },
  {
    question: "How long does a gas safety inspection take?",
    answer:
      "A typical inspection for a property with 1 boiler and 1 gas hob takes 45–60 minutes. Properties with multiple appliances or a boiler that requires investigation may take up to 90 minutes. The certificate is emailed the same day.",
  },
  {
    question: "Can tenants arrange the gas safety inspection themselves?",
    answer:
      "No. The legal obligation falls on the landlord (or their managing agent), not the tenant. As a landlord, you must ensure the inspection takes place and provide the certificate. You may coordinate access with your tenant, but the responsibility is yours.",
  },
  {
    question: "Do you carry Gas Safe ID?",
    answer:
      "Yes. All our engineers are on the Gas Safe Register and carry their ID card to every visit. You — or your tenant — can verify their registration at any time at GasSafeRegister.co.uk. Only Gas Safe Registered engineers can legally carry out gas work or issue a CP12 in the UK.",
  },
  {
    question: "Which London boroughs do you cover?",
    answer:
      "We cover all 32 London boroughs, including Central London, East London, North London, South London, and West London. Same-week appointments are available throughout Greater London. Call 0330 133 0066 or book online.",
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
    title: "Book online — takes 60 seconds",
    description:
      "Select the number of gas appliances in your property, choose a date, and confirm. Same-week appointments across all 32 London boroughs.",
  },
  {
    step: "2",
    title: "Gas Safe engineer visits and inspects",
    description:
      "Our Gas Safe Registered engineer inspects all gas appliances, pipework, flues, and ventilation. The visit typically takes 45–90 minutes depending on the number of appliances.",
  },
  {
    step: "3",
    title: "Certificate emailed same day",
    description:
      "Your Landlord's Gas Safety Record (CP12) is emailed to you the same day. Forward it directly to your tenant or send via your letting agent — your legal obligation is met.",
  },
];

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
            Gas Safe Registered · Annual legal requirement · Certificate emailed same day · All 32 London boroughs
          </p>
          <TrustBadges serviceKey="gas-safety" variant="light" className="mb-6" />
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
            What is a Gas Safety Certificate (CP12) and who needs one?
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            A Gas Safety Certificate — formally called a Landlord&apos;s Gas Safety Record and often
            referred to as a CP12 — is an annual inspection of all gas appliances and installations
            in your rental property. It confirms that your boiler, gas fires, gas cooker, and any
            other gas appliances are safe for your tenants to use.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Only Gas Safe Registered engineers can legally carry out gas work or issue a Gas Safety
            Certificate in the UK. Our engineers are registered with the Gas Safe Register and
            carry their ID card to every visit. You can verify any engineer&apos;s registration at
            GasSafeRegister.co.uk using their licence number.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            The gas safety record must be kept for at least 2 years and a copy provided to your
            tenant before they move in — or within 28 days of each annual inspection. If your
            tenant asks to see proof of a valid certificate, you must provide it within 28 days.
          </p>

          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Criminal offence:</span>{" "}
              The Gas Safety (Installation and Use) Regulations 1998 make it a criminal offence
              to rent a property with gas appliances without a valid, annual Gas Safety Certificate.
              Penalties include fines of up to <strong>£6,000</strong> and up to 6 months
              imprisonment.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">Gas Safety Certificate Cost</h2>
          <p className="text-brand-grey mb-6">
            Fixed price by number of gas appliances. Includes inspection of all appliances and the written Landlord&apos;s Gas Safety Record.
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
            For commercial premises?{" "}
            <Link href="/commercial-gas-safety-certificate" className="text-compliance-blue hover:underline">
              View commercial gas safety (CP42) pricing →
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
              "Inspection and test of all gas appliances",
              "Gas pipework integrity and leak test",
              "Flue flow and condition check",
              "Ventilation adequacy assessment",
              "Emergency control valve verification",
              "Appliance-by-appliance pass/advisory record",
              "Landlord's Gas Safety Record (CP12) issued",
              "Certificate emailed same day",
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

        {/* Related services */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">Related services</h2>
          <p className="text-brand-grey mb-5 text-sm">Most landlords book these at the same time to consolidate visits.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: "/eicr", label: "EICR Certificate", desc: "Electrical safety — required every 5 years. From £67.99." },
              { href: "/boiler-installation", label: "Boiler Installation", desc: "Replace an old or unsafe boiler. From £2,499." },
              { href: "/commercial-gas-safety-certificate", label: "Commercial Gas (CP42)", desc: "Gas safety for commercial premises. From £159.99." },
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
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
            Frequently Asked Questions about Gas Safety Certificates
          </h2>
          <FAQAccordion items={faqs} />
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
              Book your Gas Safety Certificate today
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Fixed price from £{entryPrice}. Gas Safe Registered engineers. Certificate
              emailed the same day. Same-week appointments across all 32 London boroughs.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/book?service=gas-safety-cp12"
                className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                Book Now — from £{entryPrice}
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
        href="/book?service=gas-safety-cp12"
        label="Book Now"
        price={entryPrice}
        serviceName="Gas Safety Certificate (CP12)"
      />
    </>
  );
}

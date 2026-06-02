import type { Metadata } from "next";
import { LazyFAQAccordion as FAQAccordion, LazyStickyMobileCTA as StickyMobileCTA } from "@/components/lazy";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { TrustBadges } from "@/components/ui/trust-badges";
import { ADDITIONAL_CHARGES, GAS_SAFETY_CP42_TABLE } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Commercial Gas Safety Certificate (CP42) London from £159.99 | My Landlord Certificate",
  description:
    "Annual CP42 commercial gas safety inspection from £159.99. Gas Safe Registered with COMCAT and COCN1 competencies. Restaurants, offices, HMOs. All 33 London boroughs. Same-day certificate.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/commercial-gas-safety-certificate",
  },
};

const entryPrice = GAS_SAFETY_CP42_TABLE[0].price;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Gas Safety Certificate (CP42)",
  url: "https://www.mylandlordcertificate.co.uk/gas-safety/cp42",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://www.mylandlordcertificate.co.uk",
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Gas Safety", item: "https://www.mylandlordcertificate.co.uk/gas-safety" },
    { "@type": "ListItem", position: 3, name: "Commercial Gas Safety (CP42)", item: "https://www.mylandlordcertificate.co.uk/gas-safety/cp42" },
  ],
};

const faqs = [
  {
    question: "What is a CP42 and who needs one?",
    answer:
      "A CP42 is the commercial equivalent of a domestic CP12 gas safety certificate. It is required for commercial properties including offices, restaurants, hotels, and any commercial premises where gas appliances are used. It is also required for communal boiler rooms in blocks of flats and HMOs classed as commercial buildings.",
  },
  {
    question: "What is the difference between CP12 and CP42?",
    answer:
      "CP12 is for domestic gas appliances (boilers, fires, cookers in residential properties). CP42 is for commercial gas appliances, including commercial catering equipment, commercial boilers, and industrial gas installations. CP42 engineers hold additional commercial gas competency certifications including COMCAT, COCN1, and CORT1.",
  },
  {
    question: "How often is a CP42 required?",
    answer:
      "CP42 inspections are required annually under the Gas Safety (Installation and Use) Regulations 1998 and the Health and Safety at Work Act 1974. Commercial landlords and employers must maintain a current gas safety record and make it available to their local authority or Health and Safety Executive on request.",
  },
  {
    question: "Do you cover restaurants and catering kitchens?",
    answer:
      "Yes. Our engineers hold commercial catering gas competencies (COMCAT) and can inspect and certify commercial catering equipment including ranges, grills, fryers, and hot cupboards. Call us to discuss your specific appliance inventory before booking.",
  },
  {
    question: "How long does a CP42 inspection take?",
    answer:
      "A typical CP42 inspection with 1–3 appliances takes 1.5–2.5 hours. Large commercial kitchens with many appliances can take a full day. We will confirm the expected duration based on your appliance inventory when you book.",
  },
  {
    question: "Does the CP42 cover gas pipework as well as appliances?",
    answer:
      "Yes. Our inspection includes a gas tightness test on the supply pipework to each appliance and an inspection of the emergency control valve and isolation points. Any issues with pipework are recorded on the certificate with the appropriate advisory or unsafe-situation notice.",
  },
  {
    question: "Can you do a CP12 and CP42 at the same visit?",
    answer:
      "Yes. If your property has both domestic and commercial gas appliances — for example a mixed-use building with residential flats above commercial premises — we can inspect all appliances on the same visit and issue the appropriate certificates for each section.",
  },
  {
    question: "Which areas of London do you cover?",
    answer:
      "We cover all 33 London boroughs including the City of London, Westminster, Camden, Islington, Tower Hamlets, Southwark, Lambeth, Hackney, and all other boroughs. A congestion zone supplement of £18 applies for properties within the TfL congestion zone.",
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

export default function CP42Page() {
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
              <li className="text-brand-charcoal font-medium">Commercial Gas Safety (CP42)</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-3 leading-tight">
            Commercial Gas Safety (CP42) London from £{entryPrice}
          </h1>
          <PriceDisplay price={entryPrice} from size="lg" className="mb-4" />
          <p className="text-brand-grey mb-4">
            Gas Safe Registered · COMCAT &amp; COCN1 competencies · Certificate same day
          </p>
          <TrustBadges serviceKey="gas-safety-cp42" variant="light" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=gas-safety-cp42&type=commercial"
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

        {/* What is it */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Commercial gas safety inspection explained
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            A CP42 inspection covers all gas appliances in commercial premises across London —
            commercial boilers, catering equipment, gas fires in common areas, and industrial
            gas installations. It is the commercial equivalent of the domestic CP12 and is
            required annually under the Gas Safety (Installation and Use) Regulations 1998
            and the Health and Safety at Work Act 1974.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Our engineers hold commercial gas competencies including COMCAT (commercial catering),
            COCN1 (commercial natural gas), and CORT1 (commercial natural gas tightness testing).
            They are fully qualified to inspect all types of commercial gas equipment and issue
            the written certificate the same day. The certificate identifies each appliance
            inspected and records any advisory notices or unsafe situations.
          </p>

          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Legal requirement:</span>{" "}
              Commercial landlords and employers have a duty of care under the Gas Safety
              (Installation and Use) Regulations 1998 and the Health and Safety at Work Act
              1974 to maintain all gas appliances in a safe condition. Annual CP42 inspection
              is the accepted method of demonstrating compliance.
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
                title: "Book and confirm your appliance list",
                body: "Tell us the number and type of gas appliances (boilers, catering equipment, gas fires). We confirm the price and book a Gas Safe engineer with the right commercial competencies.",
              },
              {
                step: "2",
                title: "On-site inspection",
                body: "Our engineer inspects each appliance, carries out gas tightness testing on all pipework, checks ventilation and flues, and verifies emergency control valves. Any issues are recorded immediately.",
              },
              {
                step: "3",
                title: "CP42 certificate emailed same day",
                body: "You receive the written CP42 certificate listing every appliance with its inspection result. Keep it on-site and make it available to your local authority or HSE inspector on request.",
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
            CP42 Pricing
          </h2>
          <p className="text-brand-grey mb-6">
            Priced by number of gas appliances. Includes inspection, testing, and written certificate.
          </p>
          <PriceTable
            title="Commercial Gas Safety (CP42)"
            rows={GAS_SAFETY_CP42_TABLE}
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
            For domestic gas safety (CP12)?{" "}
            <Link href="/gas-safety-certificate" className="text-compliance-blue hover:underline">
              View domestic gas safety pricing →
            </Link>
          </p>
        </section>

        {/* What's included */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">What&apos;s included</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Inspection of all commercial gas appliances",
              "Gas tightness test on all pipework",
              "Flue and ventilation checks",
              "Emergency control valve verification",
              "Written CP42 certificate",
              "Advisory notices for remediation",
              "Gas Safe Registered engineer",
              "COMCAT / COCN1 commercial competency",
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
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </section>

        {/* Related services */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Related services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                name: "Gas Safety Certificate (CP12)",
                href: "/gas-safety-certificate",
                desc: "Domestic gas safety inspection from £49.99. Required annually for residential landlords.",
              },
              {
                name: "Commercial EICR",
                href: "/commercial-eicr",
                desc: "Electrical condition report for commercial premises from £149.99.",
              },
              {
                name: "Boiler Installation",
                href: "/boiler-installation",
                desc: "Gas Safe boiler replacement from £2,499. CP12 and 10-year warranty included.",
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

        {/* CTA block */}
        <section className="py-10">
          <div className="bg-compliance-blue rounded-2xl px-6 py-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Book your commercial gas safety inspection
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Fixed price from £{entryPrice}. Gas Safe Registered engineers with commercial
              competencies. Certificate emailed same day across all London boroughs.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/book?service=gas-safety-cp42&type=commercial"
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
        href="/book?service=gas-safety-cp42&type=commercial"
        label="Book Now"
        price={entryPrice}
        serviceName="Commercial Gas Safety (CP42)"
      />
    </>
  );
}

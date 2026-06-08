import type { Metadata } from "next";
import { LazyFAQAccordion as FAQAccordion, LazyStickyMobileCTA as StickyMobileCTA } from "@/components/lazy";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { PriceDisplay } from "@/components/ui/price-display";
import { TrustBadges } from "@/components/ui/trust-badges";
import { ADDITIONAL_CHARGES, FIRE_DOOR_CERT_PRICE } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Fire Door Certificate London — £119.99/door, BS 9999 Inspections | My Landlord Certificate",
  description:
    "Fire door inspection and certification from £119.99 per door. Gap tolerance, intumescent strips, self-closing checks to BS 9999. All 33 London boroughs. Certificate within 24 hours. HMO requirement.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/fire-door-certificate",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fire Door Inspection & Certificate",
  url: "https://www.mylandlordcertificate.co.uk/fire-door-certificate",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://www.mylandlordcertificate.co.uk",
  },
  areaServed: { "@type": "City", name: "London" },
  offers: {
    "@type": "Offer",
    price: `${FIRE_DOOR_CERT_PRICE}`,
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
    { "@type": "ListItem", position: 3, name: "Fire Door Certificate", item: "https://www.mylandlordcertificate.co.uk/fire-door-certificate" },
  ],
};

const faqs = [
  {
    question: "What is a fire door certificate?",
    answer:
      "A fire door certificate is a written record confirming that each fire door has been inspected against the requirements of BS 9999 and BS EN 1634-1. It records the door's fire rating, condition of the intumescent strips and smoke seals, gap tolerance, self-closing device, and any faults found. The certificate is suitable for submission to your local authority or HMO licensing body.",
  },
  {
    question: "Which properties need fire door inspections?",
    answer:
      "Fire doors are required in all HMOs, blocks of flats with communal areas, and commercial buildings. Under the Regulatory Reform (Fire Safety) Order 2005, the responsible person must ensure fire doors are maintained in efficient working order. Most London HMO licence conditions require annual fire door inspections.",
  },
  {
    question: "What gap tolerance is required for fire doors?",
    answer:
      "The maximum permissible gap around the perimeter of a fire door is 3mm on the sides and top, and 8mm at the bottom (or up to 10mm in older buildings). Gaps beyond these limits allow smoke and fire to pass through and effectively invalidate the fire rating of the door. Our engineers measure all gaps and record them on the certificate.",
  },
  {
    question: "What happens if a fire door fails the inspection?",
    answer:
      "Failed doors are recorded on the certificate with a description of the defect and a priority rating. Common failures include worn intumescent strips, damaged smoke seals, excessive gaps, or faulty self-closing mechanisms. Many minor defects can be remediated on the same visit — ask us when booking.",
  },
  {
    question: "How often should fire doors be inspected?",
    answer:
      "The Fire Safety (England) Regulations 2022 require responsible persons in multi-occupied residential buildings above 11 metres to carry out quarterly checks of fire doors in communal areas and an annual check of flat entrance doors. For HMOs and smaller blocks, annual inspection is the standard recommendation and the typical HMO licence requirement.",
  },
  {
    question: "What is the difference between FD30 and FD60 fire doors?",
    answer:
      "FD30 fire doors are rated to resist fire for 30 minutes; FD60 for 60 minutes. Most HMOs and purpose-built residential blocks require FD30 doors on escape routes. FD60 doors are typically required in higher-risk or taller buildings. Our inspector will confirm the required rating during the inspection and note any non-compliance.",
  },
  {
    question: "Can you repair fire doors as well as inspect them?",
    answer:
      "Yes. We can carry out minor repairs during the inspection visit — replacing worn intumescent strips and smoke seals, adjusting self-closing mechanisms, and reattaching door furniture. Major remediation (rehinging, replacing core, or replacing the entire door) is quoted separately.",
  },
  {
    question: "How many fire doors does my HMO need?",
    answer:
      "HMO fire door requirements depend on the size and layout of the property and the conditions set by your local authority. Typically, all bedroom doors and kitchen doors on escape routes must be fire doors. Common area doors (corridor to stairway, flat entrance doors) must also meet the standard. Our inspector can advise on the specific requirements for your property.",
  },
  {
    question: "Which areas of London do you cover?",
    answer:
      "We cover all 33 London boroughs including Hackney, Islington, Tower Hamlets, Southwark, Lambeth, Wandsworth, Brent, Ealing, Hammersmith & Fulham, Camden, Westminster, and all other boroughs. A congestion zone supplement of £18 applies for properties within the TfL congestion zone.",
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

export default function FireDoorCertificatePage() {
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
              <li className="text-brand-charcoal font-medium">Fire Door Certificate</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-3 leading-tight">
            Fire Door Certificate London from £{FIRE_DOOR_CERT_PRICE}/door
          </h1>
          <PriceDisplay price={FIRE_DOOR_CERT_PRICE} from size="lg" className="mb-4" />
          <p className="text-brand-grey mb-4">
            Qualified inspectors · BS 9999 compliant · Certificate issued within 24 hours
          </p>
          <TrustBadges serviceKey="fire-door-certificate" variant="light" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=fire-door-cert"
              className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Book Now — £{FIRE_DOOR_CERT_PRICE}/door
            </Link>
            <a
              href="tel:03301330066"
              className="inline-flex items-center border border-border hover:border-compliance-blue text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Call 0330 133 0066
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="bg-brand-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-white/10">
            <div className="pl-0">
              <p className="text-xs text-white/50 mb-0.5">Per door</p>
              <p className="font-bold text-white">£{FIRE_DOOR_CERT_PRICE}</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Frequency</p>
              <p className="font-bold text-white">Annually</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Certificate</p>
              <p className="font-bold text-white">Within 24 hours</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Standard</p>
              <p className="font-bold text-white">BS 9999</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content well ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 md:pb-10">

        {/* What is it */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Fire door inspection for London HMOs and blocks of flats
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Fire doors are one of the most critical passive fire protection measures in any
            building. A correctly installed and maintained fire door can hold back flames and
            smoke for 30 or 60 minutes — giving occupants time to evacuate and emergency
            services time to respond. In London HMOs and blocks of flats, fire doors on
            escape routes are a mandatory requirement under the Regulatory Reform (Fire Safety)
            Order 2005.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Our qualified inspectors check each door against the requirements of BS 9999,
            measuring gap tolerances, testing self-closing devices, inspecting intumescent
            strips and smoke seals, verifying fire-resistance ratings, and checking door
            furniture and signage. The written certificate records the condition of each
            door and any defects found, with a priority rating for remediation.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Pricing is per door. Multi-door discounts are available for large HMOs and
            blocks of flats — call us to discuss.
          </p>

          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Legal requirement:</span>{" "}
              The Fire Safety (England) Regulations 2022 require responsible persons in
              multi-occupied residential buildings above 11 metres to inspect fire doors
              quarterly in communal areas and annually for flat entrance doors. London HMO
              licences typically require annual fire door inspections for all properties.
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
                title: "Book with your door count",
                body: "Tell us how many fire doors need inspecting. We confirm the price and book a qualified inspector. Multi-door discounts available for large HMOs and blocks — call us to discuss.",
              },
              {
                step: "2",
                title: "On-site inspection per door",
                body: "Our inspector measures gap tolerances, checks intumescent strips and smoke seals, tests the self-closing mechanism, verifies the fire rating, and inspects door furniture and signage. Results are recorded for each door.",
              },
              {
                step: "3",
                title: "Certificate emailed within 24 hours",
                body: "You receive a written certificate listing each door with its inspection result, any defects found, and a priority rating. Suitable for HMO licensing and local authority inspection.",
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
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Pricing</h2>
          <div className="bg-warm-white border border-border rounded-xl p-6">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold text-compliance-blue">
                £{FIRE_DOOR_CERT_PRICE}
              </span>
              <span className="text-brand-grey">per door (inspection &amp; certificate)</span>
            </div>
            <p className="text-sm text-brand-grey mt-2 mb-4">
              Price is per door inspected. For properties with multiple fire doors, call us
              for a bundled quote. The certificate covers all doors inspected on the visit.
            </p>
            <ul className="text-sm text-brand-grey flex flex-col gap-1">
              <li>· Full inspection and written certificate per door</li>
              <li>· Gap tolerance measurement and record</li>
              <li>· Intumescent strip and smoke seal check</li>
              <li>· Self-closing mechanism test</li>
              <li>
                · Additional charges: Congestion Zone +£{ADDITIONAL_CHARGES.congestionZone} · Parking +£{ADDITIONAL_CHARGES.parking}
              </li>
            </ul>
          </div>
          <p className="text-sm text-brand-grey mt-4">
            Multi-door discounts for HMOs and large blocks — call{" "}
            <a href="tel:03301330066" className="text-compliance-blue hover:underline">
              0330 133 0066
            </a>{" "}
            for a tailored quote.
          </p>
        </section>

        {/* What's included */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">What&apos;s included per door</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Gap tolerance measurement (sides, top, bottom)",
              "Intumescent strip condition check",
              "Smoke seal inspection",
              "Self-closing device test",
              "Fire resistance rating verification",
              "Door furniture and signage check",
              "Pass/fail record per door",
              "Written certificate within 24 hours",
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

        {/* Related services */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Related services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                name: "Fire Risk Assessment",
                href: "/fire-risk-assessment",
                desc: "Written fire risk assessment from £74.99. Identifies fire door deficiencies as part of a full site assessment.",
              },
              {
                name: "Fire Alarm Installation",
                href: "/fire-alarm-installation",
                desc: "Mains-wired interlinked alarms from £209.99/alarm. Required for all new HMO licences.",
              },
              {
                name: "Fire Extinguisher Testing",
                href: "/fire-extinguisher-testing",
                desc: "Annual extinguisher service from £79.99. BS 5306-3 compliant.",
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
              Book your fire door inspection
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              £{FIRE_DOOR_CERT_PRICE} per door. Qualified inspectors, certificate within 24 hours.
              Multi-door discounts for HMOs and blocks across all 33 London boroughs.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/book?service=fire-door-cert"
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
        href="/book?service=fire-door-cert"
        label="Book Now"
        price={FIRE_DOOR_CERT_PRICE}
        serviceName="Fire Door Certificate"
      />
    </>
  );
}

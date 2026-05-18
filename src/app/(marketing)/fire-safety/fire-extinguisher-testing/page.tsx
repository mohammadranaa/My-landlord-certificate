import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { TrustBadges } from "@/components/ui/trust-badges";
import { ADDITIONAL_CHARGES, FIRE_EXTINGUISHER_TABLE } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Fire Extinguisher Testing London from £79.99 — BS 5306-3 Service | My Landlord Certificate",
  description:
    "Annual fire extinguisher inspection and servicing from £79.99 (1–3 extinguishers). All types: CO₂, powder, foam, water mist. BS 5306-3 compliant. Service label same day. All London boroughs.",
  alternates: {
    canonical: "https://mylandlordcertificate.co.uk/fire-safety/fire-extinguisher-testing",
  },
};

const entryPrice = FIRE_EXTINGUISHER_TABLE[0].price;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fire Extinguisher Testing & Annual Service",
  url: "https://mylandlordcertificate.co.uk/fire-safety/fire-extinguisher-testing",
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
    { "@type": "ListItem", position: 3, name: "Fire Extinguisher Testing", item: "https://mylandlordcertificate.co.uk/fire-safety/fire-extinguisher-testing" },
  ],
};

const faqs = [
  {
    question: "How often do fire extinguishers need to be serviced?",
    answer:
      "BS 5306-3 requires fire extinguishers to be inspected at least annually by a competent person. In addition, the responsible person should carry out a monthly visual check to ensure extinguishers are in their designated position, have not been discharged, and show no obvious damage.",
  },
  {
    question: "What types of extinguisher do you service?",
    answer:
      "We service all common types of portable fire extinguisher: water, water mist, foam, CO₂, dry powder, and wet chemical. Our engineers carry replacement parts for all main types, so minor servicing can usually be completed on the same visit.",
  },
  {
    question: "Do fire extinguishers need to be replaced?",
    answer:
      "Disposable extinguishers (typically powder and CO₂) must be replaced every 5 years or after discharge. Rechargeable extinguishers can be refilled and extended-tested every 5 years. Our engineer will advise on the appropriate action for each extinguisher based on its age, type, and condition.",
  },
  {
    question: "Is fire extinguisher servicing a legal requirement?",
    answer:
      "The Regulatory Reform (Fire Safety) Order 2005 requires the responsible person to ensure fire-fighting equipment is maintained in efficient working order. Annual servicing to BS 5306-3 is the accepted method of meeting this obligation. HMO licence conditions in all London boroughs typically require an up-to-date service record.",
  },
  {
    question: "What is the service label?",
    answer:
      "After each annual service, a dated label is attached to the extinguisher recording the service date, engineer's name and company, and next service due date. The label is the primary evidence that the extinguisher has been serviced and is suitable for inspection by the fire authority or HMO licensing officer.",
  },
  {
    question: "How many fire extinguishers does my property need?",
    answer:
      "The minimum requirement for an HMO is one water or foam extinguisher per 200m² of floor area, and one CO₂ extinguisher in areas with electrical equipment. A typical 4–6 bedroom HMO will have 2–4 extinguishers. Our engineer can advise on whether your current provision is adequate for your property size and risk.",
  },
  {
    question: "Can you supply new extinguishers as well as service existing ones?",
    answer:
      "Yes. If any extinguishers fail inspection or are beyond their service life, we can supply and fit replacements during the same visit. New extinguishers are quoted separately — ask when booking and we will include a supply price alongside the service quote.",
  },
  {
    question: "Which areas of London do you cover?",
    answer:
      "We cover all 32 London boroughs including Hackney, Islington, Tower Hamlets, Southwark, Lambeth, Wandsworth, Brent, Ealing, Hammersmith & Fulham, Camden, Westminster, and all other boroughs. A congestion zone supplement of £18 applies for properties within the TfL congestion zone.",
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

export default function FireExtinguisherTestingPage() {
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
              <li className="text-brand-charcoal font-medium">Fire Extinguisher Testing</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-3 leading-tight">
            Fire Extinguisher Testing London from £{entryPrice}
          </h1>
          <PriceDisplay price={entryPrice} from size="lg" className="mb-4" />
          <p className="text-brand-grey mb-4">
            All extinguisher types · BS 5306-3 compliant · Service label issued same day
          </p>
          <TrustBadges serviceKey="fire-extinguisher-testing" variant="light" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=fire-extinguisher-testing"
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
              <p className="text-xs text-white/50 mb-0.5">Frequency</p>
              <p className="font-bold text-white">Annually</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Service label</p>
              <p className="font-bold text-white">Same day</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Standard</p>
              <p className="font-bold text-white">BS 5306-3</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content well ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 md:pb-10">

        {/* What is it */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Annual fire extinguisher servicing for London landlords and businesses
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Fire extinguishers are only effective in an emergency if they are properly
            maintained. BS 5306-3 requires annual inspection by a competent person to
            check the extinguisher&apos;s pressure, condition, and operating mechanism —
            and to confirm it is suitable for the fire risk in its location. All London HMO
            licence conditions require fire extinguishers to be serviced annually.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Our trained engineers service all types of portable fire extinguisher: water,
            water mist, foam, CO₂, dry powder, and wet chemical. Extinguishers are inspected
            in-situ — no need to bring them to us. A dated service label is applied to each
            extinguisher after passing inspection, and a written service record is issued the
            same day.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Where an extinguisher fails inspection or is beyond its service life, we can
            supply replacement units and quote for extended testing (refill) for rechargeable
            types. Ask when booking.
          </p>

          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Legal requirement:</span>{" "}
              The Regulatory Reform (Fire Safety) Order 2005 requires the responsible person
              to ensure fire-fighting equipment is maintained in efficient working order.
              Annual servicing to BS 5306-3 is the accepted method of meeting this obligation.
              HMO licence conditions typically require an up-to-date service record.
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
                title: "Book with your extinguisher count",
                body: "Tell us the number and types of extinguishers. We confirm the price and book an engineer. Most visits take under an hour — minimal disruption to your tenants.",
              },
              {
                step: "2",
                title: "On-site inspection",
                body: "Our engineer inspects each extinguisher in-situ: pressure gauge, operating pin, hose, and weight check. A dated service label is applied to each extinguisher that passes. Failed units are recorded with a recommended action.",
              },
              {
                step: "3",
                title: "Service record issued same day",
                body: "You receive a written service record listing each extinguisher with its inspection result and next service date. Keep it with your HMO licence documents and compliance file.",
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
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">Pricing</h2>
          <p className="text-brand-grey mb-6">
            Fixed price by number of extinguishers. Includes inspection, service label, and written record.
          </p>
          <PriceTable
            title="Fire Extinguisher Testing"
            rows={FIRE_EXTINGUISHER_TABLE}
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
            Replacement extinguisher supply quoted separately — ask us when booking.
          </p>
        </section>

        {/* What's included */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            What&apos;s included from £{entryPrice}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Visual condition inspection",
              "Pressure gauge check",
              "Operating pin and safety clip check",
              "Hose and nozzle inspection",
              "Weight check (CO₂ and powder)",
              "Correct extinguisher type for risk check",
              "Dated service label applied",
              "Written service record issued",
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
                name: "Fire Risk Assessment",
                href: "/fire-safety/fire-risk-assessment",
                desc: "Written fire risk assessment from £74.99. Identifies whether your extinguisher provision is adequate.",
              },
              {
                name: "Fire Door Certificate",
                href: "/fire-safety/fire-door-certificate",
                desc: "Fire door inspection from £119.99/door. Annual HMO requirement under BS 9999.",
              },
              {
                name: "Fire Safety Certificate",
                href: "/fire-safety/fire-safety-certificate",
                desc: "Smoke and CO alarm testing from £54.99. Required for all London rental properties.",
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
              Book your fire extinguisher service
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Fixed price from £{entryPrice}. All extinguisher types. Service label
              issued same day. Same-week appointments across all 32 London boroughs.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/book?service=fire-extinguisher-testing"
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
        href="/book?service=fire-extinguisher-testing"
        label="Book Now"
        price={entryPrice}
        serviceName="Fire Extinguisher Testing"
      />
    </>
  );
}

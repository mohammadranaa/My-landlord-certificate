import type { Metadata } from "next";
import { LazyFAQAccordion as FAQAccordion, LazyStickyMobileCTA as StickyMobileCTA } from "@/components/lazy";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { TrustBadges } from "@/components/ui/trust-badges";
import {
  ADDITIONAL_CHARGES,
  COMMERCIAL_EICR_EXTRA_CIRCUIT_CHARGE,
  COMMERCIAL_EICR_TABLE,
} from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Commercial EICR London from £149.99 — NICEIC Approved | My Landlord Certificate",
  description:
    "Commercial EICR (Electrical Installation Condition Report) from £149.99 per consumer unit. Required under the Electricity at Work Regulations 1989. NICEIC approved electricians for offices, HMOs, retail, and mixed-use premises across London.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/electrical-safety/commercial-eicr",
  },
};

const entryPrice = COMMERCIAL_EICR_TABLE[0].price;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial EICR — Electrical Installation Condition Report",
  url: "https://www.mylandlordcertificate.co.uk/electrical-safety/commercial-eicr",
  description:
    "Commercial electrical installation inspection for offices, HMOs, retail, and mixed-use premises. NICEIC approved, priced per consumer unit.",
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
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Electrical Safety", item: "https://www.mylandlordcertificate.co.uk/electrical-safety" },
    { "@type": "ListItem", position: 3, name: "Commercial EICR", item: "https://www.mylandlordcertificate.co.uk/electrical-safety/commercial-eicr" },
  ],
};

const faqs = [
  {
    question: "Is a commercial EICR a legal requirement?",
    answer:
      "Yes. The Electricity at Work Regulations 1989 require all employers and building owners to maintain electrical installations in a safe condition. The Health and Safety at Work Act 1974 reinforces this obligation. A commercial EICR every 5 years (or on change of occupancy) is the accepted method of demonstrating compliance. For HMOs, local authority licensing conditions often require more frequent inspection.",
  },
  {
    question: "What is the difference between a domestic and commercial EICR?",
    answer:
      "A domestic EICR covers a single residential installation typically served by one consumer unit. A commercial EICR covers larger, more complex installations with multiple consumer units (distribution boards), three-phase supplies, emergency lighting circuits, and a wider range of circuit types. Pricing is per consumer unit rather than per property size.",
  },
  {
    question: "What is a consumer unit and how does pricing work?",
    answer:
      "A consumer unit (also called a distribution board or fuse board) is the main electrical panel that controls the circuits in a building. Our commercial EICR is priced per consumer unit, with each unit covering up to 10 circuits. Additional circuits beyond 10 per unit are charged at £25 each. We confirm the number of units and circuits before booking so there are no surprises.",
  },
  {
    question: "How long does a commercial EICR take?",
    answer:
      "A single-consumer-unit inspection typically takes 4–6 hours. Larger premises with multiple boards may require a full day or two visits. We will discuss the estimated duration and any requirement for out-of-hours access when booking. The certificate is emailed on the same day the inspection is completed.",
  },
  {
    question: "Do you cover HMOs and blocks of flats?",
    answer:
      "Yes. We regularly carry out commercial EICRs for HMOs, purpose-built blocks of flats, mixed-use buildings, offices, and retail premises. For HMOs with both a communal distribution board and individual flat boards, each unit is priced separately.",
  },
  {
    question: "How often should a commercial property be re-inspected?",
    answer:
      "The recommended inspection frequency depends on the type of premises. For most commercial properties and HMOs, every 5 years or on change of occupancy. For high-risk premises (such as industrial or catering environments), more frequent inspection may be recommended. Our report will state the recommended next inspection date.",
  },
  {
    question: "Can you carry out remedial electrical work after the EICR?",
    answer:
      "Yes. Our electricians can quote for and complete any C1 or C2 remedial work identified during the inspection. Common commercial remedial works include adding RCD protection, replacing distribution boards, improving earthing, and remediating overloaded circuits.",
  },
  {
    question: "Which areas of London do you cover?",
    answer:
      "We cover all 32 London boroughs for commercial EICR inspections. Same-week appointments are available throughout Greater London. For large premises or portfolio work, call us on 0330 133 0066 to discuss scheduling.",
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
    title: "Book or call for a quote",
    description:
      "Tell us the property type, number of consumer units, and approximate circuit count. We'll confirm the fixed price before you commit. Same-week slots across London.",
  },
  {
    step: "2",
    title: "NICEIC approved electrician inspects",
    description:
      "Our qualified electrician tests every consumer unit, circuit, and earthing arrangement against BS 7671. For large premises, we coordinate around your operations to minimise disruption.",
  },
  {
    step: "3",
    title: "Full written report same day",
    description:
      "Your commercial EICR is emailed the same day the inspection is completed, with a coded fault schedule and recommended next inspection date. Suitable for council, insurer, or tenant requests.",
  },
];

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
            Commercial EICR from £{entryPrice} — NICEIC Approved
          </h1>
          <PriceDisplay price={entryPrice} from size="lg" className="mb-4" />
          <p className="text-brand-grey mb-4">
            NICEIC approved · Priced per consumer unit · No hidden circuit charges · Certificate same day
          </p>
          <TrustBadges serviceKey="commercial-eicr" variant="light" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=commercial-eicr&type=commercial"
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
            What is a commercial EICR and who needs one?
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            A commercial EICR (Electrical Installation Condition Report) is a comprehensive
            inspection of the fixed electrical installation in commercial premises — offices,
            retail units, HMOs, restaurants, and mixed-use buildings. Unlike a domestic EICR,
            which typically covers one consumer unit, commercial premises may have multiple
            distribution boards, three-phase supplies, and complex circuit arrangements.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Our NICEIC approved electricians test every consumer unit and distribution board,
            check all circuit protection, verify earthing and bonding, and identify any defects
            classified under the C1 (danger present), C2 (potentially dangerous), or C3
            (improvement recommended) coding system. The report is suitable for submission to
            your local authority, insurer, or commercial tenant.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Pricing is per consumer unit, with each unit covering up to 10 circuits. Additional
            circuits are charged at £{COMMERCIAL_EICR_EXTRA_CIRCUIT_CHARGE} per circuit. We
            always confirm the exact number of units and circuits before you book — no surprises.
          </p>

          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Legal requirement:</span>{" "}
              The Electricity at Work Regulations 1989 require all employers and commercial
              property owners to maintain electrical installations in a safe condition. A
              commercial EICR every 5 years — or on change of occupancy — is the accepted
              method of meeting this obligation. Failure to maintain a safe electrical
              installation is a criminal offence.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">Commercial EICR Pricing</h2>
          <p className="text-brand-grey mb-6">
            Priced per consumer unit. Each unit covers up to 10 circuits.
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
            For domestic residential EICRs?{" "}
            <Link href="/eicr" className="text-compliance-blue hover:underline">
              View domestic EICR pricing →
            </Link>
          </p>
        </section>

        {/* What's included */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">What&apos;s included per consumer unit</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Inspection of consumer unit and all circuit protection",
              "Full circuit-by-circuit testing and documentation",
              "Earthing and bonding continuity tests",
              "Insulation resistance testing",
              "RCD trip-time verification",
              "Coded fault classification (C1, C2, C3, FI)",
              "Full written EICR report compliant with BS 7671",
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
          <p className="text-brand-grey mb-5 text-sm">Often required alongside a commercial EICR.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: "/commercial-gas-safety-certificate", label: "Commercial Gas (CP42)", desc: "Annual gas safety inspection for commercial premises. From £159.99." },
              { href: "/commercial-epc", label: "Commercial EPC", desc: "Required before selling or letting commercial property. From £249.99." },
              { href: "/fire-risk-assessment", label: "Fire Risk Assessment", desc: "Legally required for HMOs and commercial buildings. From £74.99." },
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
              Book your commercial EICR
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Fixed price from £{entryPrice} per consumer unit. NICEIC approved. Full
              written report same day. Same-week appointments across London.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/book?service=commercial-eicr&type=commercial"
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
        href="/book?service=commercial-eicr&type=commercial"
        label="Book Now"
        price={entryPrice}
        serviceName="Commercial EICR"
      />
    </>
  );
}

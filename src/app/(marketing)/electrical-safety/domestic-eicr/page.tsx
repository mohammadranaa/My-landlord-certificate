import type { Metadata } from "next";
import { LazyFAQAccordion as FAQAccordion, LazyStickyMobileCTA as StickyMobileCTA } from "@/components/lazy";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { TrustBadges } from "@/components/ui/trust-badges";
import {
  ADDITIONAL_CHARGES,
  DOMESTIC_EICR_TABLE,
  getPriceForEICR,
} from "@/lib/pricing";

export const metadata: Metadata = {
  title: "EICR Certificate London from £67.99 — NICEIC Approved",
  description:
    "Book a landlord EICR (Electrical Installation Condition Report) from £67.99. Legally required for all rental properties in England. NICEIC approved electricians, same-week appointments across all 33 London boroughs. Certificate emailed within 24 hours.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/eicr",
  },
};

const entryPrice = getPriceForEICR("studio");

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Domestic EICR — Electrical Installation Condition Report",
  url: "https://www.mylandlordcertificate.co.uk/electrical-safety/domestic-eicr",
  description:
    "Legally required for all private rental properties in England. NICEIC approved electricians inspect all fixed wiring, consumer units, sockets, and light fittings. Certificate emailed within 24 hours.",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://www.mylandlordcertificate.co.uk",
  },
  areaServed: ["London", "the M25 area"],
  offers: {
    "@type": "Offer",
    price: `${entryPrice}`,
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://www.mylandlordcertificate.co.uk/electrical-safety/domestic-eicr",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Electrical Safety", item: "https://www.mylandlordcertificate.co.uk/electrical-safety" },
    { "@type": "ListItem", position: 3, name: "Domestic EICR", item: "https://www.mylandlordcertificate.co.uk/electrical-safety/domestic-eicr" },
  ],
};

const faqs = [
  {
    question: "Is an EICR a legal requirement for landlords?",
    answer:
      "Yes. Since 1 July 2020, all new private tenancies in England must have a valid EICR. From 1 April 2021, this applies to all existing tenancies too. Landlords who fail to provide an EICR can face fines of up to £30,000 per property. You must provide a copy to your tenant within 28 days of the inspection.",
  },
  {
    question: "How often does a landlord EICR need to be renewed?",
    answer:
      "An EICR is valid for 5 years or for the duration of the tenancy, whichever is shorter. You must have a new EICR carried out at least every 5 years. If your current tenancy is coming to an end and the certificate is older than 5 years, you must renew before re-letting.",
  },
  {
    question: "What happens if my property fails an EICR?",
    answer:
      "If the EICR finds C1 (danger present) or C2 (potentially dangerous) faults, you must carry out remedial work within 28 days of the inspection. Once the work is complete, your electrician issues a Minor Works Certificate or Electrical Installation Certificate as evidence of the repairs. The council may request to see this.",
  },
  {
    question: "What does an EICR inspection involve?",
    answer:
      "The electrician inspects and tests all fixed wiring, the consumer unit (fuse box), earthing and bonding, all sockets and switches, ceiling roses and light fittings, and the main incoming supply. They also test the insulation resistance of wiring and verify that all RCD (residual current device) protection is functioning correctly.",
  },
  {
    question: "How long does an EICR take?",
    answer:
      "A studio or one-bedroom flat typically takes 2–3 hours. Larger properties take longer — a 4–5 bedroom house may take 4–6 hours. Older wiring (pre-1960s rubber insulation) or complex installations may require additional time. We will confirm the estimated duration at booking.",
  },
  {
    question: "Do tenants need to be present during the EICR?",
    answer:
      "Access to the property is required but tenants do not need to remain present throughout the inspection. Many landlords arrange access with their tenant or managing agent for a mutually convenient time. Power will need to be off for part of the inspection.",
  },
  {
    question: "What is a C1, C2, C3, or FI code on an EICR?",
    answer:
      "C1 means 'danger present — immediate action required'. C2 means 'potentially dangerous — remedial action required'. C3 means 'improvement recommended but not required for compliance'. FI means 'further investigation required' — for example, where wiring concealed in walls cannot be fully tested. Only C1 and C2 codes make the installation unsatisfactory; C3 and FI codes do not require the property to be taken off the rental market.",
  },
  {
    question: "Can you carry out remedial work after the EICR?",
    answer:
      "Yes. Our electricians can quote for and complete any C1 or C2 remedial work identified during the EICR. Common remedial works include adding RCD protection, replacing old consumer units, repairing damaged sockets, and improving earthing and bonding. We provide a completion certificate once all work is done.",
  },
  {
    question: "Is there a difference between an EICR and a PAT test?",
    answer:
      "Yes. An EICR covers fixed electrical installations — the wiring inside the walls, the consumer unit, sockets, switches, and light fittings. A PAT test covers portable electrical appliances — anything with a plug. Both are recommended for furnished rental properties. See our PAT testing page for more information.",
  },
  {
    question: "Which areas of London do you cover?",
    answer:
      "We cover all 33 London boroughs, including Central London, East London, South London, North London, and West London. Same-week appointments are available across the whole of Greater London. Email us or book online.",
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
    title: "Book online in 60 seconds",
    description:
      "Select your property size, pick a date that works for you, and confirm. We cover all 33 London boroughs with same-week slots available.",
  },
  {
    step: "2",
    title: "NICEIC approved electrician visits",
    description:
      "Our qualified electrician carries out a full inspection and test of all fixed wiring, the consumer unit, sockets, switches, and earthing. The visit takes 2–6 hours depending on property size.",
  },
  {
    step: "3",
    title: "Certificate emailed within 24 hours",
    description:
      "Your EICR is emailed to you within 24 hours. You can forward it directly to your tenant or local authority. If remedial work is needed, we'll quote immediately.",
  },
];

export default function DomesticEICRPage() {
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
              <li>
                <Link href="/" className="hover:text-compliance-blue transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/electrical-safety" className="hover:text-compliance-blue transition-colors">Electrical Safety</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-brand-charcoal font-medium">Domestic EICR</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-3 leading-tight">
            EICR Certificate from £{entryPrice} — NICEIC Approved
          </h1>
          <PriceDisplay price={entryPrice} from size="lg" className="mb-4" />
          <p className="text-brand-grey mb-4">
            NICEIC approved · Same-week appointments · Certificate emailed within 24 hours · All 33 London boroughs
          </p>
          <TrustBadges serviceKey="eicr" variant="light" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=eicr"
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
      <div className="bg-spec-bar text-white border-t-2 border-action-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:divide-x md:divide-white/10">
            <div className="pl-0">
              <p className="text-[11px] font-medium uppercase tracking-wider text-white/50 mb-0.5">Entry price</p>
              <p className="font-bold text-white">from £{entryPrice}</p>
            </div>
            <div className="pl-4">
              <p className="text-[11px] font-medium uppercase tracking-wider text-white/50 mb-0.5">Valid for</p>
              <p className="font-bold text-white">5 years</p>
            </div>
            <div className="pl-4">
              <p className="text-[11px] font-medium uppercase tracking-wider text-white/50 mb-0.5">Certificate</p>
              <p className="font-bold text-white">Within 24 hours</p>
            </div>
            <div className="pl-4">
              <p className="text-[11px] font-medium uppercase tracking-wider text-white/50 mb-0.5">Accreditation</p>
              <p className="font-bold text-white">NICEIC</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content well ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 md:pb-10">

        {/* What is an EICR */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">What is an EICR and why does every landlord need one?</h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            An EICR — Electrical Installation Condition Report — is a formal written inspection of all
            the fixed electrical wiring and installations in your rental property. A NICEIC approved
            electrician tests the consumer unit (fuse box), all wiring circuits, sockets, switches,
            light fittings, earthing, and bonding to check whether everything meets current safety
            standards set by BS 7671 (the 18th Edition Wiring Regulations).
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Any faults or deficiencies are classified by code. A <strong>C1</strong> (danger present)
            or <strong>C2</strong> (potentially dangerous) code means the installation is unsatisfactory
            and remedial work must be completed within 28 days. A <strong>C3</strong> code is an
            improvement recommendation — the installation is satisfactory, but the work would be
            advisable. A <strong>FI</strong> code means further investigation is needed. Most EICR
            inspections result in a few C3 codes and an overall satisfactory outcome.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Our NICEIC approved electricians carry out EICRs to the latest 18th Edition Wiring
            Regulations (BS 7671:2018+A2:2022). We cover all property types — Victorian terraces
            with original wiring, purpose-built flats, HMOs, and new builds. The EICR certificate
            is emailed to you within 24 hours as the inspection.
          </p>

          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Legal requirement:</span>{" "}
              The Electrical Safety Standards in the Private Rented Sector (England) Regulations
              2020 require all landlords to have a valid EICR carried out before any new tenancy
              begins, and to renew it every 5 years. Fines for non-compliance can reach{" "}
              <strong>£30,000 per property</strong>.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">EICR Cost — Fixed Prices, No Surprises</h2>
          <p className="text-brand-grey mb-6">
            Fixed prices by property size. No call-out fees, no hidden extras. The price you see is the price you pay.
          </p>
          <PriceTable
            title="Domestic EICR"
            rows={DOMESTIC_EICR_TABLE}
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
            Need a commercial EICR for offices, retail, or HMOs with multiple consumer units?{" "}
            <Link href="/commercial-eicr" className="text-compliance-blue hover:underline">
              View commercial EICR pricing →
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
              "Full inspection of consumer unit and all circuits",
              "Testing of all fixed wiring and earth connections",
              "Inspection of every socket, switch, and light fitting",
              "RCD protection verification and trip-time testing",
              "Earthing and bonding checks",
              "Coded fault classification (C1, C2, C3, FI)",
              "Written EICR compliant with BS 7671 18th Edition",
              "Certificate emailed within 24 hours — ready for your tenant",
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
          <p className="text-brand-grey mb-5 text-sm">Most landlords book these alongside their EICR.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: "/gas-safety-certificate", label: "Gas Safety (CP12)", desc: "Annual legal requirement for gas properties. From £49.99." },
              { href: "/fuse-box-installation", label: "Fuse Box Installation", desc: "Replace old fuse wire boards with modern RCD protection. From £599.99." },
              { href: "/pat-testing", label: "PAT Testing", desc: "Test portable appliances in furnished lets. From £59.99." },
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
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
            Frequently Asked Questions about EICR certificates
          </h2>
          <FAQAccordion items={faqs} />
        </section>


        {/* CTA block */}
        <section className="py-10">
          <div className="bg-compliance-blue rounded-2xl px-6 py-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Book your landlord EICR today
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Fixed price from £{entryPrice}. No call-out fees. NICEIC approved electricians.
              Certificate emailed within 24 hours. Same-week appointments across all 33 London boroughs.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/book?service=eicr"
                className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                Book Now — from £{entryPrice}
              </Link>
              <a
                href="mailto:info@mylandlordcertificate.co.uk"
                className="inline-flex items-center border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                
              </a>
            </div>
          </div>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=eicr"
        label="Book Now"
        price={entryPrice}
        serviceName="EICR Certificate"
      />
    </>
  );
}

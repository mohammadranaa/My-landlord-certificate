import type { Metadata } from "next";
import { LazyFAQAccordion as FAQAccordion, LazyStickyMobileCTA as StickyMobileCTA } from "@/components/lazy";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { TrustBadges } from "@/components/ui/trust-badges";
import { ADDITIONAL_CHARGES, FIRE_DOOR_PRICES, FIRE_DOOR_TABLE } from "@/lib/pricing";
import { TEL, PHONE_DISPLAY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Fire Door Certificate London from £129.99 | FD30 & FD60 Inspections | My Landlord Certificate",
  description:
    "Fire door inspections and certificates in London from £129.99 for 1-3 doors. BS 9999 and Fire Safety (England) Regulations 2022 compliant. HMOs, blocks of flats, commercial premises. Certificate within 24 hours. BAFE certified inspectors across all 33 London boroughs.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/fire-door-certificate",
  },
};

const entryPrice = FIRE_DOOR_PRICES["1-3 doors"];

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
    { "@type": "ListItem", position: 2, name: "Fire Safety", item: "https://www.mylandlordcertificate.co.uk/fire-safety" },
    { "@type": "ListItem", position: 3, name: "Fire Door Certificate", item: "https://www.mylandlordcertificate.co.uk/fire-door-certificate" },
  ],
};

const faqs = [
  {
    question: "How much does a fire door certificate cost in London?",
    answer:
      "A fire door certificate from My Landlord Certificate costs £129.99 for 1-3 doors, £169.99 for 4 doors, £209.99 for 5 doors, and £239.99 for 6 doors. For 7 or more doors, call us for a bespoke quote. All prices are fixed with no hidden charges. A congestion charge surcharge of £18 applies for properties in the London Congestion Charge Zone.",
  },
  {
    question: "How often do fire doors need to be inspected?",
    answer:
      "For buildings above 11 metres, the Fire Safety (England) Regulations 2022 require quarterly inspections of communal area fire doors and annual inspections of flat entrance doors. For buildings under 11 metres — including most London HMOs and Victorian conversions — annual inspection is the accepted standard. Your HMO licence conditions will specify the minimum frequency required.",
  },
  {
    question: "What is the difference between FD30 and FD60?",
    answer:
      "FD30 doors provide 30 minutes of fire resistance and are standard for most residential escape routes. FD60 doors provide 60 minutes and are required in higher-risk locations or taller buildings. Our inspectors will confirm the rating of your existing doors and whether they are appropriate for their location.",
  },
  {
    question: "What happens if a fire door fails the inspection?",
    answer:
      "If a door fails inspection, the certificate will record the specific defects found and assign a priority rating. Minor defects (such as missing signage) are lower priority. Critical defects (such as a failed self-closer or missing intumescent strip) require urgent attention. We can provide a quote for remedial work or door replacement.",
  },
  {
    question: "Do I need fire doors in an HMO?",
    answer:
      "Yes. Fire doors are a mandatory requirement in all licensable HMOs. They must be fitted on all habitable rooms that open onto escape routes (corridors and stairwells), on kitchen doors, and on any doors between different parts of the building. Your local council's HMO licence conditions will specify the exact requirements for your property.",
  },
  {
    question: "Can you replace fire doors as well as inspect them?",
    answer: `Yes. If your inspection identifies doors that need replacing, our engineers can supply and fit FD30 or FD60 rated door sets that comply with current standards. Call us on ${PHONE_DISPLAY} for a supply and installation quote.`,
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

          <p className="text-xs font-semibold tracking-widest text-compliance-blue uppercase mb-3">
            BAFE Certified · BS 9999 Compliant · London &amp; M25
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-4 leading-tight">
            Fire Door Certificate London — from £{entryPrice}
          </h1>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6 max-w-2xl">
            Fire door inspections for HMOs, blocks of flats, and commercial premises across London.
            Our qualified inspectors check every door against BS 9999 — measuring gaps, testing
            self-closers, checking intumescent strips and smoke seals. Tiered fixed pricing.
            Certificate within 24 hours.
          </p>
          <TrustBadges serviceKey="fire-door-certificate" variant="light" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=fire-door"
              className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Book fire door inspection →
            </Link>
            <a
              href={TEL}
              className="inline-flex items-center border border-border hover:border-compliance-blue text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="bg-brand-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-white/10">
            <div className="pl-0">
              <p className="text-xs text-white/50 mb-0.5">From</p>
              <p className="font-bold text-white">£{entryPrice}</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Standard</p>
              <p className="font-bold text-white">BS 9999</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Certificate</p>
              <p className="font-bold text-white">Within 24 hours</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Frequency</p>
              <p className="font-bold text-white">Annually</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content well ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 md:pb-10">

        {/* Pricing */}
        <section id="pricing" className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Fire door certificate pricing</h2>

          <div className="rounded-xl border border-border overflow-hidden mb-4">
            <div className="bg-compliance-blue px-5 py-4">
              <p className="text-sm font-semibold text-white">Fire Door Certificate — Fixed Prices</p>
            </div>
            {FIRE_DOOR_TABLE.map((row, i) => (
              <div
                key={row.label}
                className={`px-5 py-4 flex items-center justify-between ${i % 2 === 0 ? "bg-warm-white" : "bg-white"}`}
              >
                <span className="text-sm text-brand-charcoal">{row.label}</span>
                <span className="text-sm font-bold text-brand-charcoal tabular-nums">£{row.price.toFixed(2)}</span>
              </div>
            ))}
            <div className="px-5 py-4 flex items-center justify-between bg-warm-white border-t border-border">
              <span className="text-sm text-brand-charcoal">7+ fire doors</span>
              <span className="text-sm font-bold text-compliance-blue">
                <a href={TEL} className="hover:underline">Call for quote</a>
              </span>
            </div>
          </div>

          <p className="text-sm text-brand-charcoal/80 leading-relaxed mb-3">
            All prices are fixed and include the written inspection certificate. No hidden charges.
            For large HMOs or blocks of flats with 7 or more fire doors, call us on{" "}
            <a href={TEL} className="text-compliance-blue hover:underline">{PHONE_DISPLAY}</a>{" "}
            for a bespoke quote.
          </p>
          <p className="text-sm text-brand-grey">
            Additional charges where applicable: London Congestion Charge Zone +£{ADDITIONAL_CHARGES.congestionZone} · No free on-site parking +£{ADDITIONAL_CHARGES.parking}
          </p>
        </section>

        {/* What gets inspected */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            What our inspectors check on every fire door
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            A fire door is not just a door — it is a complete assembly that must work as a system.
            Every component must be present, undamaged, and correctly installed for the door to
            provide its rated fire resistance. Our inspectors check all of the following:
          </p>
          <div className="space-y-5">
            {[
              {
                title: "Gap tolerances",
                body: "The gaps around the door edges must not exceed 3–4mm. Gaps that are too large allow smoke and flame to pass through before the intumescent seal activates. Gaps that are too small prevent the door from closing properly.",
              },
              {
                title: "Intumescent seals",
                body: "Intumescent strips are fitted around the door edge and expand rapidly when exposed to heat, sealing the gap and preventing fire spread. Inspectors check they are present on all four sides, undamaged, and correctly fitted into the rebate.",
              },
              {
                title: "Cold smoke seals",
                body: "Brush or compression seals that prevent cold smoke from passing around the door at normal temperatures — before the fire is hot enough to activate the intumescent seal. Required for FD30S and FD60S rated doors.",
              },
              {
                title: "Self-closing device",
                body: "All fire doors must self-close and latch every time — without being held open manually. The closer is tested for correct tension, speed, and full closure from 90 degrees and from a partially open position. A door that does not latch provides no fire protection.",
              },
              {
                title: "Fire resistance rating",
                body: "The inspector checks the door leaf and frame for rating markings (FD30 or FD60) and assesses whether the rating matches the requirement for that location. FD30 = 30 minutes fire resistance. FD60 = 60 minutes fire resistance.",
              },
              {
                title: "Door furniture and hinges",
                body: "Hinges must be fire-rated (typically 3 × 76mm ball-bearing hinges), handles must not obstruct closing, and any letterboxes or cat flaps that have been retrofitted must be fire-rated.",
              },
              {
                title: "Glazing panels",
                body: "Any glass panels in the door must be fire-rated glazing — not standard glass. Standard glass shatters in seconds under fire conditions. Fire-rated glazing maintains integrity for the rated period.",
              },
              {
                title: "Signage and condition",
                body: '"Fire Door — Keep Shut" signage must be present on both sides of all fire doors on escape routes. The door leaf, frame, and surrounding wall must show no signs of damage, modification, or deterioration that could compromise performance.',
              },
            ].map(({ title, body }, i) => (
              <div key={title} className="flex gap-4">
                <span className="w-7 h-7 rounded-full bg-compliance-blue text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-brand-charcoal mb-1">{title}</p>
                  <p className="text-sm text-brand-charcoal/70 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FD30 vs FD60 */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
            FD30 vs FD60 — which does your property need?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div className="rounded-xl border border-border p-5">
              <p className="text-sm font-bold text-compliance-blue uppercase tracking-wider mb-2">FD30 — 30 minutes</p>
              <p className="font-semibold text-brand-charcoal mb-3">The standard for most residential buildings</p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed mb-3">
                Required on: escape route corridors in HMOs and blocks of flats, doors between flats
                and communal corridors, doors to plant rooms and storage areas in residential
                buildings.
              </p>
              <p className="text-sm text-brand-grey">
                Identifiable by "FD30" markings on the door edge or by a plug in the door edge
                (often a coloured timber or plastic plug).
              </p>
            </div>
            <div className="rounded-xl border border-border p-5">
              <p className="text-sm font-bold text-compliance-blue uppercase tracking-wider mb-2">FD60 — 60 minutes</p>
              <p className="font-semibold text-brand-charcoal mb-3">Required in higher-risk or larger buildings</p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed mb-3">
                Required on: doors in buildings over 18 metres (high-rise), doors to high-risk areas
                such as commercial kitchens or electrical intake rooms, and as specified in a fire
                risk assessment for complex buildings.
              </p>
              <p className="text-sm text-brand-grey">
                Usually identifiable by "FD60" markings and thicker door construction.
              </p>
            </div>
          </div>
          <div className="bg-compliance-blue/5 border border-compliance-blue/20 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold">Not sure which rating your doors are?</span>{" "}
              Our inspectors identify the rating during the inspection and confirm whether your
              doors are appropriate for their location. If you need upgraded doors, we can
              provide a quote for supply and installation.
            </p>
          </div>
        </section>

        {/* Legal requirements */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
            Fire door legal requirements for London landlords
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            The legal framework for fire doors in residential buildings has been significantly
            strengthened following the Grenfell Tower disaster. Two pieces of legislation are
            most relevant to London landlords:
          </p>
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-brand-charcoal mb-2">Regulatory Reform (Fire Safety) Order 2005</p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                The primary fire safety law for all non-domestic premises and the communal areas of
                residential buildings. It requires the Responsible Person (the freeholder, management
                company, or their managing agent) to ensure that fire doors on escape routes are
                maintained in good working order. This includes self-closing devices, intumescent
                seals, and correct installation.
              </p>
            </div>
            <div>
              <p className="font-semibold text-brand-charcoal mb-2">Fire Safety (England) Regulations 2022</p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed mb-3">
                Introduced following recommendations from the Grenfell Tower Inquiry. For
                multi-occupied residential buildings above 11 metres in height, the Regulations
                require:
              </p>
              <ul className="text-sm text-brand-charcoal/80 space-y-1 ml-4">
                <li>· Quarterly checks of all fire doors in communal areas (corridors, stairwells, lobbies)</li>
                <li>· Annual checks of all flat entrance fire doors</li>
              </ul>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed mt-3">
                For buildings under 11 metres (the majority of London HMOs and Victorian
                conversions), annual inspection as part of the fire risk assessment is the
                accepted standard.
              </p>
            </div>
            <div>
              <p className="font-semibold text-brand-charcoal mb-2">Housing Act 2004 — HMO Licensing</p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                London HMO licences issued by local councils almost universally include a condition
                requiring fire doors to be fitted, maintained, and regularly inspected. Failure to
                comply can result in licence revocation and fines of up to £30,000 per property.
              </p>
            </div>
          </div>
          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4 mt-6">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Not sure if your building is above 11 metres?</span>{" "}
              A building of approximately 4 or more storeys (depending on ceiling heights) is likely
              to exceed 11 metres and trigger the quarterly inspection requirement. If in doubt,
              our inspectors can advise during the visit.
            </p>
          </div>
        </section>

        {/* Common defects */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            The most common fire door defects found in London properties
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Based on our inspections across London HMOs and blocks of flats, these are the defects
            we find most frequently — and why each one matters:
          </p>
          <div className="space-y-5">
            {[
              {
                title: "Missing or damaged intumescent strips (most common)",
                body: "Found in roughly 60% of older properties. Strips deteriorate over time, are sometimes removed during repainting, or were never fitted to the correct standard. A missing intumescent strip means the door provides no effective fire resistance regardless of its rated construction.",
              },
              {
                title: "Self-closer not working correctly",
                body: "Self-closers seize up, lose tension, or are deliberately disabled by occupants who find them inconvenient. A fire door propped open or failing to latch is legally equivalent to having no fire door at all.",
              },
              {
                title: "Excessive gaps around the door",
                body: "Common in older properties where frames have moved or settled over time. Gaps exceeding 4mm allow smoke and hot gases through before the intumescent seal can activate.",
              },
              {
                title: "Non-fire-rated glazing",
                body: "Many older fire doors have had standard glass panels installed as replacements. Standard glass shatters within seconds of fire exposure — providing no protection and creating a significant hazard from flying glass.",
              },
              {
                title: "Missing cold smoke seals",
                body: "Required on all FD30S and FD60S doors. Often absent on older doors or removed during maintenance. Without cold smoke seals, occupants can be overcome by smoke before the fire reaches the door.",
              },
              {
                title: "Door wedged or propped open",
                body: "The single most dangerous and most common finding. Occupants wedge fire doors open for convenience, completely negating their purpose. This is a legal breach and in the event of a fire creates a direct channel for smoke and flame to travel through the escape route.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="flex gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-amber shrink-0" />
                <div>
                  <p className="font-semibold text-brand-charcoal mb-1">{title}</p>
                  <p className="text-sm text-brand-charcoal/70 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
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
              From £{entryPrice} for 1–3 doors. Qualified inspectors, certificate within 24 hours.
              Fixed prices across all 33 London boroughs.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/book?service=fire-door"
                className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                Book Online
              </Link>
              <a
                href={TEL}
                className="inline-flex items-center border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=fire-door"
        label="Book Now"
        price={entryPrice}
        serviceName="Fire Door Certificate"
      />
    </>
  );
}

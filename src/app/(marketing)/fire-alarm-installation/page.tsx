import type { Metadata } from "next";
import { LazyFAQAccordion as FAQAccordion, LazyStickyMobileCTA as StickyMobileCTA } from "@/components/lazy";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { PriceDisplay } from "@/components/ui/price-display";
import { TrustBadges } from "@/components/ui/trust-badges";
import { ADDITIONAL_CHARGES, FIRE_ALARM_INSTALLATION_PER_ALARM } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Fire Alarm Installation London — £209.99/alarm, Mains-Wired | My Landlord Certificate",
  description:
    "Mains-wired interlinked smoke and heat alarm installation from £209.99 per alarm. Grade D LD2, BS 5839-6 compliant. Free survey. All 33 London boroughs. Commissioning certificate included.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/fire-alarm-installation",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fire Alarm Installation — Mains-Wired Interlinked Alarms",
  url: "https://www.mylandlordcertificate.co.uk/fire-alarm-installation",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://www.mylandlordcertificate.co.uk",
  },
  areaServed: { "@type": "City", name: "London" },
  offers: {
    "@type": "Offer",
    price: `${FIRE_ALARM_INSTALLATION_PER_ALARM}`,
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
    { "@type": "ListItem", position: 3, name: "Fire Alarm Installation", item: "https://www.mylandlordcertificate.co.uk/fire-alarm-installation" },
  ],
};

const faqs = [
  {
    question: "What type of fire alarm system do you install?",
    answer:
      "We install Grade D, LD2 mains-wired interlinked smoke and heat detectors — the standard required for most HMOs and rental properties across London. All alarms are interconnected so that activating one triggers all others in the property. We use market-leading brands including Aico and FireAngel, compliant with BS 5839-6.",
  },
  {
    question: "Are battery alarms acceptable for rental properties?",
    answer:
      "Long-life sealed battery alarms (10-year battery life) are acceptable in some circumstances for existing properties, but mains-wired interlinked alarms are required for all new HMO licences and any new build or major renovation. Most London boroughs now require mains-wired systems for HMO licence renewals. We can advise on the most appropriate solution for your property.",
  },
  {
    question: "How many alarms do I need?",
    answer:
      "BS 5839-6 LD2 typically requires smoke alarms in all principal habitable rooms (living rooms, bedrooms), heat alarms in kitchens, and smoke alarms in corridors and stairways on escape routes. An average 3-bedroom HMO typically requires 5–7 alarms. Our engineer will survey your property and specify the exact number and positions required.",
  },
  {
    question: "Does installation include a certificate?",
    answer:
      "Yes. Every installation includes a commissioning certificate confirming the system meets BS 5839-6. This can be provided to your local authority or HMO licensing body as evidence of compliance.",
  },
  {
    question: "Can you retrofit alarms without major rewiring?",
    answer:
      "In many properties we can install mains-wired alarms by running concealed cables through ceiling voids and wall cavities, minimising the need for major decorative repairs. The feasibility depends on the property's construction — our engineer will assess this during the free pre-installation survey.",
  },
  {
    question: "Which brands do you use?",
    answer:
      "We primarily install Aico and FireAngel mains-wired interlinked alarms — market-leading brands with 10-year sensor life and sealed backup batteries. Both brands offer wireless interlink modules for situations where cable runs are not feasible. We use the same brand throughout each property to ensure full interlink compatibility.",
  },
  {
    question: "How long does installation take?",
    answer:
      "A typical 3-bedroom HMO with 5–6 alarms takes a full day. Larger HMOs and blocks with communal areas may take 2 days. We will confirm the expected duration after the free survey.",
  },
  {
    question: "Which areas of London do you cover?",
    answer:
      "We cover all 33 London boroughs including Hackney, Islington, Tower Hamlets, Southwark, Lambeth, Wandsworth, Brent, Ealing, Hammersmith & Fulham, Camden, Westminster, Barnet, Haringey, and all other boroughs. A congestion zone supplement of £18 applies for properties within the TfL congestion zone.",
  },
  {
    question: "How much does fire alarm installation cost in London?",
    answer:
      "We charge £209.99 per alarm, which includes supply, installation, interconnection wiring, and commissioning. A typical 3-bedroom HMO requiring 5–6 alarms would cost £1,049.95–£1,259.94 in total. The BS 5839-6 commissioning certificate is included at no extra charge. We provide a free pre-installation survey and a fixed-price quotation before any work begins. Additional charges apply for properties in the London Congestion Charge Zone (£18) or where parking restrictions require a permit (£5).",
  },
  {
    question: "What type of fire alarm does my HMO need?",
    answer:
      "Most HMOs in London require a Grade D, LD2 mains-wired interlinked system as a minimum. This means smoke detectors in all circulation areas (hallways, landings, stairwells) and in all principal habitable rooms (bedrooms, living rooms), plus heat detectors in the kitchen. Some boroughs — including Hackney, Tower Hamlets, and Islington — require LD1 full-coverage systems, which add detection in every room including bathrooms and utility areas. Your local authority's HMO licensing conditions set out the exact requirement, and our engineer will confirm the correct specification during the free survey.",
  },
  {
    question: "How often do fire alarms need testing?",
    answer:
      "BS 5839-6 requires that mains-wired interlinked alarms are tested monthly by the occupant (pressing the test button) and inspected and tested annually by a competent person. For HMOs, the annual test must be documented and the certificate retained as part of the HMO licence compliance records. Our annual fire safety certificate service covers this requirement from £54.99 — see our Fire Safety Certificate page for details.",
  },
  {
    question: "Can you upgrade my existing fire alarm system?",
    answer:
      "Yes. We regularly upgrade properties from battery-only systems or older hard-wired systems to current Grade D LD2 mains-wired interlinked standards. Where existing mains wiring is present and in good condition, we may be able to use it for the new system, reducing installation costs. Where full rewiring is required, we price by alarm as standard. Our engineer will assess the existing installation during the free survey and advise on the most cost-effective upgrade path.",
  },
  {
    question: "Do you install fire alarms in commercial premises?",
    answer:
      "Yes. For commercial premises, offices, retail units, and larger residential buildings, we design and install Grade A addressable fire alarm systems to BS 5839-1 — a higher standard than the domestic Grade D systems used in residential HMOs. Grade A systems feature a central control panel, zone mapping, automatic detection throughout, and manual call points at all exits. Pricing for commercial installations depends on the size and complexity of the premises — call us on 020 3996 1070 for a survey and quotation.",
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

export default function FireAlarmInstallationPage() {
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
              <li aria-hidden="true">/</li>
              <li><Link href="/fire-safety" className="hover:text-white transition-colors">Fire Safety</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium">Fire Alarm Installation</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
            Fire Alarm Installation London from £{FIRE_ALARM_INSTALLATION_PER_ALARM}/alarm
          </h1>
          <PriceDisplay price={FIRE_ALARM_INSTALLATION_PER_ALARM} from size="lg" className="mb-4 [&>span:last-child]:text-white" />
          <p className="text-blue-100 mb-4">
            Mains-wired interlinked · BS 5839-6 compliant · Free survey · Commissioning certificate included
          </p>
          <TrustBadges serviceKey="fire-alarm-installation" variant="dark" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=fire-alarm-installation"
              className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Book Now — £{FIRE_ALARM_INSTALLATION_PER_ALARM}/alarm
            </Link>
            <a
              href="mailto:info@mylandlordcertificate.co.uk"
              className="inline-flex items-center border border-white/30 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Email us
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="bg-brand-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-white/10">
            <div className="pl-0">
              <p className="text-xs text-white/50 mb-0.5">Per alarm</p>
              <p className="font-bold text-white">£{FIRE_ALARM_INSTALLATION_PER_ALARM}</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">System type</p>
              <p className="font-bold text-white">Grade D LD2</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Certificate</p>
              <p className="font-bold text-white">Included</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Standard</p>
              <p className="font-bold text-white">BS 5839-6</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content well ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 md:pb-10">

        {/* What is it */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Mains-wired fire alarm installation for London HMOs
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            New HMO licences across all London boroughs require mains-wired interlinked smoke
            and heat alarms throughout the property. When any one alarm is triggered, all
            alarms sound simultaneously — giving occupants maximum warning time regardless
            of where the fire starts. Battery-only alarms are no longer acceptable for new
            HMO licence applications in most London councils.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            We install Grade D, LD2 mains-wired systems using Aico and FireAngel — market-leading
            brands with 10-year sensor life and sealed backup batteries. Each alarm draws power
            from the mains and has a sealed backup battery, ensuring it continues to function
            even during a power cut.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed">
            Pricing is per alarm including supply, installation, interconnection wiring, and
            commissioning. We provide a free pre-installation survey to determine the exact
            number and specification of alarms required for your property.
          </p>
        </section>

        {/* How it works */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8">How it works</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Free survey",
                body: "Our engineer visits your property, identifies the number and positions of alarms required under BS 5839-6, and assesses cable routes. You receive a fixed-price quote for the full installation.",
              },
              {
                step: "2",
                title: "Installation (1–2 days)",
                body: "We install and wire all mains-wired alarms, interconnect them, and test each alarm including the full interlink — any alarm activated should trigger every other alarm in the system.",
              },
              {
                step: "3",
                title: "Commissioning certificate",
                body: "You receive a BS 5839-6 commissioning certificate confirming the system is installed and fully functional. Suitable for HMO licence applications and local authority inspection.",
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
                £{FIRE_ALARM_INSTALLATION_PER_ALARM}
              </span>
              <span className="text-brand-grey">per alarm (supply &amp; install)</span>
            </div>
            <p className="text-sm text-brand-grey mt-2 mb-4">
              Most 1–3 bedroom properties require 4–6 alarms. A free survey confirms the exact
              number needed for your property type and layout. Final price is agreed before
              installation begins.
            </p>
            <ul className="text-sm text-brand-grey flex flex-col gap-1">
              <li>· Supply and installation per mains-wired alarm</li>
              <li>· All alarms interconnected (hard-wired or RF)</li>
              <li>· BS 5839-6 commissioning certificate included</li>
              <li>
                · Additional charges: Congestion Zone +£{ADDITIONAL_CHARGES.congestionZone} · Parking +£{ADDITIONAL_CHARGES.parking}
              </li>
            </ul>
          </div>
        </section>

        {/* What's included */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">What&apos;s included per alarm</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Mains-wired Grade D alarm (Aico or FireAngel)",
              "Sealed backup battery",
              "Interlinked with all other alarms on circuit",
              "Correct positioning per BS 5839-6",
              "Full commissioning and interlink test",
              "BS 5839-6 commissioning certificate",
              "Suitable for HMO licence submission",
              "Free pre-installation survey",
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

        {/* Types of fire alarm systems */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Types of fire alarm systems we install
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Fire alarm systems for residential and commercial properties are classified by two
            separate grading systems: Grade (the type of power supply and interconnection) and
            Category (the extent of coverage). Understanding both is essential for meeting your
            HMO licence conditions and the requirements of BS 5839-6.
          </p>

          <div className="space-y-5">
            <div className="rounded-xl border border-border bg-warm-white p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-compliance-blue text-white">Grade A</span>
                <p className="font-semibold text-brand-charcoal">Fully addressable commercial systems (BS 5839-1)</p>
              </div>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Grade A systems are the commercial standard — a fully addressable panel with zone
                mapping, automatic detection throughout the building, and manual call points at all
                exits. When a detector activates, the panel pinpoints its exact location. Grade A
                systems are required for large commercial premises, care homes, hotels, and
                high-rise residential buildings. They are designed, installed, and commissioned
                to BS 5839-1 and must be maintained under a service contract. If your property
                is a block of flats or converted building with communal areas, a Grade A system
                may be required for the communal parts even if individual flats have Grade D
                systems.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-warm-white p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-action-green text-brand-charcoal">Grade D</span>
                <p className="font-semibold text-brand-charcoal">Mains-powered interlinked alarms (BS 5839-6)</p>
              </div>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Grade D is the standard for most HMOs and residential lettings in London. Grade D
                alarms draw power from the mains supply and have a sealed backup battery — so they
                continue to function during a power cut. When one alarm activates, all others
                sound simultaneously. Grade D1 means hard-wired interconnection via cable; Grade D2
                uses radio frequency (RF) wireless interconnection between alarms. Hard-wired (D1)
                is preferred where cable runs are practical, but RF (D2) is acceptable and often
                used in retrofit installations where running cables would cause significant
                disruption. New HMO licences in all 33 London boroughs now require Grade D as a
                minimum — battery-only alarms are no longer accepted for new or renewed licences
                in most areas.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-warm-white p-5">
              <p className="font-semibold text-brand-charcoal mb-3">Coverage categories — LD1, LD2, LD3</p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-brand-charcoal mb-1">LD1 — Full property coverage</p>
                  <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                    Detectors installed in all rooms and areas of the property, including bedrooms,
                    living rooms, kitchens, bathrooms, utility rooms, and all circulation areas.
                    The most comprehensive residential protection level. Required by some London
                    boroughs for larger HMOs (5 or more occupants) and for high-risk properties
                    such as those with complex layouts or multiple floors. Some boroughs —
                    including Hackney and Tower Hamlets — require LD1 for all licensable HMOs.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-charcoal mb-1">LD2 — Escape routes plus high-risk rooms</p>
                  <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                    Coverage in all escape routes (hallways, landings, stairwells) plus principal
                    habitable rooms — bedrooms and living rooms — and heat detectors in kitchens.
                    LD2 is the most common HMO requirement across London boroughs, including
                    Southwark, Lambeth, Wandsworth, Brent, Ealing, Camden, and most other boroughs.
                    It provides detection where a fire is most likely to start and along the routes
                    occupants must use to escape.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-charcoal mb-1">LD3 — Escape routes only</p>
                  <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                    Detectors only in circulation areas — hallways, landings, and stairwells. LD3
                    is the minimum standard under the Smoke and Carbon Monoxide Alarm (Amendment)
                    Regulations 2022, which require at least one smoke alarm on every floor of a
                    rented property. However, LD3 alone is insufficient for HMO licensing in most
                    London boroughs — the typical minimum for an HMO licence is LD2.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-compliance-blue/5 border border-compliance-blue/20 p-4 text-sm text-brand-charcoal/80">
              <strong className="text-compliance-blue">Borough-specific requirements: </strong>
              London borough HMO licensing conditions vary. As a guide, most boroughs require
              Grade D LD2 as the minimum for a standard licensable HMO, with Grade D LD1 required
              for larger HMOs or those with specific risk factors. Always check your borough&apos;s
              current HMO licensing conditions — our engineer will confirm the exact specification
              required during the free pre-installation survey.
            </div>
          </div>
        </section>

        {/* Legal requirements */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Fire alarm legal requirements for London landlords
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            The legal obligation to install and maintain adequate fire detection in rented
            properties arises from several overlapping pieces of legislation. Understanding
            which applies to your property is essential for compliance.
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-warm-white p-5">
              <p className="font-semibold text-brand-charcoal mb-2">
                Smoke and Carbon Monoxide Alarm (Amendment) Regulations 2022
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                These regulations — in force since October 2022 — require all private landlords in
                England to install at least one smoke alarm on every storey of their rental
                property where there is a room used as living accommodation, and a carbon monoxide
                alarm in any room with a fixed combustion appliance (excluding gas cookers). Alarms
                must be tested at the start of each new tenancy. Failure to comply can result in a
                local authority remedial action notice and a fine of up to £5,000. These regulations
                apply to all rented properties — not just HMOs.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-warm-white p-5">
              <p className="font-semibold text-brand-charcoal mb-2">
                Housing Act 2004 — HMO Management Regulations
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                The Management of Houses in Multiple Occupation (England) Regulations 2006 require
                the manager of an HMO to ensure that all means of escape from fire are maintained
                in good order and repair, and that all fire detection and fire-fighting equipment
                is maintained in proper working order. The HMO licensing regime under the Housing
                Act 2004 adds a further layer: local authorities set specific conditions as part
                of the HMO licence, which almost always include detailed fire alarm specifications
                (Grade, category, and number of alarms) that go beyond the minimum set by the
                2022 Regulations.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-warm-white p-5">
              <p className="font-semibold text-brand-charcoal mb-2">
                Regulatory Reform (Fire Safety) Order 2005
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                The Fire Safety Order imposes duties on the &quot;Responsible Person&quot; — typically the
                landlord or their managing agent — to carry out a fire risk assessment and
                implement appropriate fire safety measures, including adequate means of detection
                and warning. For HMOs and buildings with communal areas, the Order requires a
                written fire risk assessment and a documented fire detection system that is
                appropriate to the risk. This is a separate obligation from the 2022 Regulations
                and the HMO licence conditions — all three must be met simultaneously.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-warm-white p-5">
              <p className="font-semibold text-brand-charcoal mb-2">
                London borough HMO licensing conditions
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Every London borough sets its own HMO licence conditions, and these typically
                specify the fire alarm grade and category in detail. Most boroughs now require
                Grade D LD2 as the minimum for a standard licensable HMO. Some boroughs require
                LD1 for larger properties. The conditions also specify alarm positions, testing
                frequencies, and documentation requirements. Non-compliance with licence conditions
                can lead to revocation of the HMO licence — making the property unlawful to let
                — and fines of up to £30,000. Always confirm your specific borough&apos;s requirements
                before installing.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-warm-white p-5">
              <p className="font-semibold text-brand-charcoal mb-2">
                The Responsible Person&apos;s testing obligations
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Once installed, the fire alarm system must be maintained. BS 5839-6 requires that
                the Responsible Person (landlord or their agent) tests each alarm monthly by
                pressing the test button, and arranges for an annual inspection and test by a
                competent person. The annual test must be documented. For HMOs, this documentation
                must be retained and produced on request during a local authority inspection.
                Our annual fire safety certificate service provides the required annual inspection
                and certificate from £54.99.
              </p>
            </div>
          </div>
        </section>

        {/* BS 5839-6 */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            BS 5839-6 compliance explained
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            BS 5839-6 is the British Standard that governs the design, installation,
            commissioning, and maintenance of fire detection and alarm systems in domestic
            premises. It is the primary technical reference for all residential fire alarm
            work in the UK — including HMOs, houses, flats, and residential care homes. A
            separate standard, BS 5839-1, applies to commercial premises and larger
            non-domestic buildings.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            The standard specifies everything from the minimum number and positioning of
            detectors in each room type, to cable specifications, interconnection requirements,
            alarm sound levels, and commissioning procedures. A system installed &quot;to BS 5839-6&quot;
            means that every aspect of the design and installation has been carried out in
            accordance with the Standard&apos;s requirements — not simply that a smoke alarm has
            been put on the ceiling.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Upon completion, we issue a BS 5839-6 commissioning certificate. This document
            confirms: the system has been designed to the correct Grade and Category for the
            property; all alarms have been installed in the correct positions; the interlink
            has been tested and verified (every alarm activates all others); and the system
            has been handed over to the Responsible Person with instructions for testing and
            maintenance. The commissioning certificate is accepted by all London local
            authorities as evidence of compliance for HMO licence applications and renewals.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed">
            There is no fixed expiry date on a BS 5839-6 commissioning certificate — it
            confirms the state of the system at the time of installation. However, the annual
            maintenance inspection is a separate requirement under the Standard, and local
            authorities may require an annual fire safety certificate (confirming the system
            has been tested and is still functional) as part of ongoing HMO licence compliance.
            We provide this annual certificate from £54.99 — see our{" "}
            <Link href="/fire-safety-certificate" className="text-compliance-blue hover:underline font-medium">
              fire safety certificate service
            </Link>
            {" "}for details.
          </p>
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
                name: "Fire Safety Certificate",
                href: "/fire-safety-certificate",
                desc: "Annual smoke alarm testing and certification from £54.99. Required for HMO licences.",
              },
              {
                name: "Fire Risk Assessment",
                href: "/fire-risk-assessment",
                desc: "Written fire risk assessment from £74.99. Compulsory for all HMOs.",
              },
              {
                name: "Emergency Lights Certificate",
                href: "/emergency-lights-certificate",
                desc: "Annual emergency lighting test from £54.99. BS 5266-1 compliant.",
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
              Book your fire alarm installation
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              £{FIRE_ALARM_INSTALLATION_PER_ALARM} per alarm installed. Free survey to confirm
              how many alarms you need. Certificate included. All 33 London boroughs covered.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/book?service=fire-alarm-installation"
                className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                Book Online
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
        href="/book?service=fire-alarm-installation"
        label="Book Now"
        price={FIRE_ALARM_INSTALLATION_PER_ALARM}
        serviceName="Fire Alarm Installation"
      />
    </>
  );
}

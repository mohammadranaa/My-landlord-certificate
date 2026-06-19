import type { Metadata } from "next";
import { LazyFAQAccordion as FAQAccordion, LazyStickyMobileCTA as StickyMobileCTA } from "@/components/lazy";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { TrustBadges } from "@/components/ui/trust-badges";
import { ADDITIONAL_CHARGES, FIRE_EXTINGUISHER_TABLE } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Fire Extinguisher Testing London from £79.99 — BS 5306-3 Service | My Landlord Certificate",
  description:
    "Annual fire extinguisher inspection and servicing from £79.99 (1–3 extinguishers). All types: CO₂, powder, foam, water mist. BS 5306-3 compliant. Service label within 24 hours. All London boroughs.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/fire-extinguisher-testing",
  },
};

const entryPrice = FIRE_EXTINGUISHER_TABLE[0].price;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fire Extinguisher Testing & Annual Service",
  url: "https://www.mylandlordcertificate.co.uk/fire-extinguisher-testing",
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
    { "@type": "ListItem", position: 3, name: "Fire Extinguisher Testing", item: "https://www.mylandlordcertificate.co.uk/fire-extinguisher-testing" },
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
      "We cover all 33 London boroughs including Hackney, Islington, Tower Hamlets, Southwark, Lambeth, Wandsworth, Brent, Ealing, Hammersmith & Fulham, Camden, Westminster, and all other boroughs. A congestion zone supplement of £18 applies for properties within the TfL congestion zone.",
  },
  {
    question: "What type of fire extinguisher does my commercial kitchen need?",
    answer:
      "Any kitchen with a deep fat fryer, range, or cooking equipment that produces hot oils and fats requires a wet chemical (yellow label) extinguisher rated for Class F fires. Water and foam extinguishers must never be used on burning cooking oil — the water flashes to steam instantly and causes a violent explosion. A wet chemical extinguisher is mandatory in commercial kitchens under the Regulatory Reform (Fire Safety) Order 2005 and is strongly recommended in any residential HMO with a communal kitchen.",
  },
  {
    question: "What is the 5-year extended service and when is it due?",
    answer:
      "In addition to the annual inspection, BS 5306-3 requires a more thorough extended service every 5 years. For rechargeable extinguishers (most water, foam, and wet chemical types), the extended service involves a full discharge, internal inspection, and refill. For CO₂ extinguishers, the cylinder is hydraulically pressure-tested. Dry powder extinguishers are typically replaced at 5 years rather than extended-tested. The 5-year service date is calculated from the extinguisher's manufacture date, which is stamped on the body. Our engineer will flag any units due for extended service during the annual inspection.",
  },
  {
    question: "Can I use a dry powder extinguisher indoors?",
    answer:
      "Dry powder (blue label) extinguishers are technically effective on Class A, B, and C fires and some electrical fires, which makes them appear to be a versatile choice. However, the powder discharge creates a dense, choking cloud that severely impairs visibility, contaminates food, corrodes electrical equipment, and leaves a difficult-to-clean residue. For these reasons, dry powder is not recommended for use in enclosed spaces, offices, residential buildings, or commercial kitchens. Most fire safety professionals advise against dry powder in HMOs and prefer CO₂ for electrical risks and water or foam for Class A risks in residential settings.",
  },
  {
    question: "How do I know if my extinguisher needs replacing before the annual service?",
    answer:
      "You should carry out a monthly visual check of each extinguisher. Look for: the safety pin being missing or the tamper seal broken (indicating possible discharge); the pressure gauge reading in the red zone (under or over pressure); visible dents, corrosion, or damage to the body; a cracked, split, or blocked hose or nozzle; and the service label being more than 12 months old. Any of these findings means the extinguisher should be taken out of service immediately and replaced or inspected by a competent person before it is returned to use.",
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
      <section className="bg-compliance-blue text-white py-10 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-blue-200 flex-wrap">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/fire-safety" className="hover:text-white transition-colors">Fire Safety</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium">Fire Extinguisher Testing</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
            Fire Extinguisher Testing London from £{entryPrice}
          </h1>
          <PriceDisplay price={entryPrice} from size="lg" className="mb-4 [&>span:last-child]:text-white" />
          <p className="text-blue-100 mb-4">
            All extinguisher types · BS 5306-3 compliant · Service label issued within 24 hours
          </p>
          <TrustBadges serviceKey="fire-extinguisher-testing" variant="dark" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=fire-extinguisher"
              className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Book Now — from £{entryPrice}
            </Link>
            <a
              href="#pricing"
              className="inline-flex items-center border border-white/30 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
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
              <p className="font-bold text-white">Within 24 hours</p>
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
            within 24 hours.
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
                title: "Service record issued within 24 hours",
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

        {/* Types of fire extinguishers */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Types of fire extinguishers we service
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Fire extinguishers are classified by the type of extinguishing agent they contain
            and the classes of fire they are designed to tackle. Using the wrong type on the
            wrong fire can make the situation significantly worse — particularly water on
            electrical fires or cooking oil. Our engineers service all portable extinguisher
            types and will confirm whether the right types are present for the risks in your
            premises.
          </p>

          <div className="space-y-4">
            {[
              {
                label: "Water",
                badge: "Red label",
                badgeClass: "bg-red-600 text-white",
                classes: "Class A fires — wood, paper, textiles, cardboard",
                detail:
                  "Water extinguishers are the most common type in residential and commercial premises. They work by cooling the burning material below its ignition temperature. Water is effective on solid combustible materials (Class A fires) but must never be used on electrical equipment, burning liquids, or cooking oils. In HMOs and residential buildings, water extinguishers are typically positioned in hallways and common areas. Water mist extinguishers — a more modern variant — use ultra-fine droplets that are also safe near electrical equipment and are increasingly specified in residential HMO licences.",
                premises: "HMOs, residential buildings, offices, schools — general areas and escape routes",
              },
              {
                label: "Foam",
                badge: "Cream label",
                badgeClass: "bg-amber-100 text-amber-900 border border-amber-300",
                classes: "Class A and Class B fires — solids and flammable liquids",
                detail:
                  "Foam extinguishers work by smothering the fire and preventing reignition. They are effective on both Class A solid fires and Class B flammable liquid fires (petrol, diesel, paint, solvents). AFFF (aqueous film-forming foam) is the most common type and creates a film over the burning liquid surface that seals it from oxygen. Foam is not recommended for electrical fires, burning metals, or cooking oil fires. It is widely used in garages, storage areas, and commercial premises where flammable liquids are stored or used.",
                premises: "Garages, warehouses, storage areas, commercial premises with flammable liquids",
              },
              {
                label: "CO₂",
                badge: "Black label",
                badgeClass: "bg-gray-800 text-white",
                classes: "Class B fires and electrical equipment",
                detail:
                  "Carbon dioxide extinguishers work by displacing the oxygen around the fire, suffocating it without leaving any residue — making them ideal for use near sensitive electrical equipment, server rooms, and areas where contamination would cause additional damage. CO₂ is not effective on Class A solid fires and provides no cooling, so reignition is possible once the gas disperses. The discharge horn becomes extremely cold during use — never touch it directly as it can cause freeze burns. CO₂ extinguishers are required wherever there is significant electrical equipment: meter cupboards, plant rooms, commercial kitchens with electric fryers, and server rooms.",
                premises: "Offices, server rooms, electrical panels, meter cupboards — anywhere with significant electrical equipment",
              },
              {
                label: "Dry powder",
                badge: "Blue label",
                badgeClass: "bg-blue-600 text-white",
                classes: "Class A, B, and C fires — multi-purpose but with limitations",
                detail:
                  "Dry powder extinguishers are chemically effective on a wide range of fire types including Class A, B, and C (gas fires) and some electrical fires. However, the powder creates a dense cloud that severely reduces visibility, contaminates food and equipment, and is extremely difficult to clean up. For these reasons, dry powder is generally not recommended for use in enclosed spaces, residential buildings, offices, or anywhere food is prepared. It is more commonly found in outdoor or industrial settings, petrol stations, and on vehicles. Many fire safety professionals advise replacing dry powder with CO₂ or water mist in HMOs and commercial premises where occupants are present.",
                premises: "Outdoor use, petrol forecourts, industrial plant, vehicles — not recommended for enclosed residential or commercial spaces",
              },
              {
                label: "Wet chemical",
                badge: "Yellow label",
                badgeClass: "bg-yellow-400 text-yellow-900",
                classes: "Class F fires — cooking oils and fats",
                detail:
                  "Wet chemical extinguishers are specifically designed for Class F fires involving cooking oils and fats in commercial and domestic kitchens. The wet chemical agent reacts with hot oil to form a soapy foam layer (saponification) that seals the surface, prevents reignition, and cools the oil below its auto-ignition temperature. This is the only type of extinguisher that can safely and effectively tackle a burning deep fat fryer or oil pan. Using water on burning oil causes a violent steam explosion, potentially projecting burning oil over a wide area. Wet chemical extinguishers are mandatory in commercial kitchens under the Fire Safety Order 2005 and are strongly recommended for any HMO with a communal kitchen.",
                premises: "Commercial kitchens, restaurant and café kitchens, HMO communal kitchens with cooking equipment",
              },
            ].map((ext) => (
              <div key={ext.label} className="rounded-xl border border-border bg-warm-white p-5">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${ext.badgeClass}`}>
                    {ext.badge}
                  </span>
                  <p className="font-semibold text-brand-charcoal">{ext.label} extinguisher</p>
                  <span className="text-xs text-brand-grey">{ext.classes}</span>
                </div>
                <p className="text-sm text-brand-charcoal/80 leading-relaxed mb-2">{ext.detail}</p>
                <p className="text-xs text-brand-grey">
                  <span className="font-medium text-brand-charcoal">Typical premises: </span>
                  {ext.premises}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Service process */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            What happens during a fire extinguisher service
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            An annual fire extinguisher service to BS 5306-3 is a structured technical
            inspection that goes well beyond a visual check. Here is exactly what our
            engineer carries out on every extinguisher during a standard annual service.
          </p>

          <div className="space-y-3 mb-6">
            {[
              {
                step: "1",
                title: "Visual inspection of body and label",
                detail:
                  "The engineer inspects the extinguisher cylinder for dents, corrosion, paint damage, and any signs of impact. The manufacturer's label is checked to confirm the extinguisher type, rating, and manufacture date. Labels that are missing, illegible, or damaged are flagged for replacement. The installation position and mounting bracket are also checked.",
              },
              {
                step: "2",
                title: "Pressure gauge check",
                detail:
                  "For stored-pressure extinguishers (water, foam, dry powder, and wet chemical), the pressure gauge is checked to confirm the needle sits in the green zone. A reading in the red zone — either too low or too high — indicates loss of propellant or over-pressurisation and means the extinguisher is unserviceable until repressurised by a specialist.",
              },
              {
                step: "3",
                title: "Weight check against specification",
                detail:
                  "CO₂ extinguishers do not have a pressure gauge, so weight is the primary check. The engineer weighs the cylinder and compares it against the manufacturer's specified full weight. A loss of more than 10% of the charge weight means the extinguisher has been leaking and must be returned to the manufacturer for refilling. Dry powder cylinders are also weighed as a secondary check.",
              },
              {
                step: "4",
                title: "Hose and nozzle condition",
                detail:
                  "The discharge hose is checked for cracks, splits, blockages, and perishing. Hose connections are checked for security. The nozzle or horn is inspected for obstructions, damage, or corrosion. A blocked or damaged hose can prevent discharge entirely in an emergency — this is one of the most common failures found during servicing.",
              },
              {
                step: "5",
                title: "Safety pin and tamper seal",
                detail:
                  "The safety pin prevents accidental discharge and must be present, undamaged, and correctly seated. The tamper-evident seal (a plastic tie or tag through the pin) is checked to confirm it is intact. A broken or missing seal indicates the extinguisher has been tampered with or partially operated and must be checked thoroughly before it can be returned to service.",
              },
              {
                step: "6",
                title: "Discharge test (extended service only)",
                detail:
                  "At the 5-year extended service, rechargeable extinguishers are fully discharged to allow internal inspection of the cylinder, valve, and dip tube. The internal surfaces are inspected for corrosion, scaling, or contamination. The extinguisher is then refilled, repressurised, and tested. CO₂ cylinders undergo hydraulic pressure testing. This extended service is more thorough than the annual inspection and requires the extinguisher to be taken offsite.",
              },
              {
                step: "7",
                title: "Certification label applied",
                detail:
                  "Every extinguisher that passes the annual service receives a dated service label showing the service date, the engineer's name and company, the next annual service due date, and the next extended service due date. The label is the primary evidence of compliance for HMO licensing inspections and fire authority visits. A written service record covering all extinguishers is issued within 24 hours.",
              },
            ].map(({ step, title, detail }) => (
              <div key={step} className="flex gap-4 rounded-xl border border-border p-4">
                <span className="w-8 h-8 rounded-full bg-compliance-blue text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                  {step}
                </span>
                <div>
                  <p className="font-semibold text-brand-charcoal text-sm mb-1">{title}</p>
                  <p className="text-sm text-brand-charcoal/80 leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Legal requirements */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Fire extinguisher legal requirements
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            The legal obligation to maintain fire extinguishers in working order arises
            primarily from the Regulatory Reform (Fire Safety) Order 2005, supplemented
            by HMO licensing conditions for residential landlords. Here is what the law
            requires and who is responsible.
          </p>

          <div className="space-y-4 mb-6">
            <div className="rounded-xl border border-border bg-warm-white p-5">
              <p className="font-semibold text-brand-charcoal mb-2">
                Regulatory Reform (Fire Safety) Order 2005
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Article 13 of the Fire Safety Order requires the Responsible Person to ensure
                that fire-fighting equipment is present in appropriate quantities, positioned
                correctly, and maintained in efficient working order and in good repair. The
                Order does not prescribe the specific service interval — but the HSE and fire
                authorities accept annual servicing to BS 5306-3 as the standard method of
                meeting this obligation. An extinguisher that has not been serviced within
                the past 12 months is considered unserviceable and cannot be relied upon as
                evidence of compliance.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-warm-white p-5">
              <p className="font-semibold text-brand-charcoal mb-2">
                Annual servicing requirement (BS 5306-3)
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                BS 5306-3 requires a full inspection and service by a competent person at
                intervals not exceeding 12 months. Between annual services, the Responsible
                Person should carry out a monthly visual check: confirming the extinguisher
                is in its designated position, the gauge is in the green zone, the safety
                pin and seal are intact, and there is no visible damage. These monthly checks
                should be recorded in a log and retained with the annual service certificate.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-warm-white p-5">
              <p className="font-semibold text-brand-charcoal mb-2">
                5-year extended service
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                In addition to the annual service, BS 5306-3 requires a more thorough
                extended service at 5-year intervals from the date of manufacture. For
                rechargeable extinguishers, this involves full discharge, internal inspection,
                and refill. For CO₂ cylinders, a hydraulic pressure test is required. For
                most dry powder extinguishers, replacement at 5 years is more economical
                than an extended service. The 5-year extended service date is stamped on
                the extinguisher body and must be tracked — our engineer will flag any
                units due for extended service during the annual inspection.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-warm-white p-5">
              <p className="font-semibold text-brand-charcoal mb-2">
                Who is responsible — the Responsible Person
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Under the Fire Safety Order, the Responsible Person is the employer where
                the premises are a workplace, or the owner or manager where the premises
                are not a workplace — which means the landlord or their managing agent for
                HMOs and rental properties. The Responsible Person cannot delegate this
                duty to tenants. They must ensure extinguishers are serviced annually,
                maintain service records, and ensure that appropriate extinguishers are
                present for the fire risks in each area of the property.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-warm-white p-5">
              <p className="font-semibold text-brand-charcoal mb-2">
                Consequences of out-of-date extinguishers
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                An extinguisher with an expired service label is not merely a paperwork
                problem — it is an unserviceable piece of fire-fighting equipment. During
                a fire, it may fail to discharge, discharge incompletely, or discharge
                with dangerous pressure. From a compliance perspective, a fire authority
                inspection or HMO licence inspection that finds out-of-date extinguishers
                can result in an informal or formal enforcement notice, and in serious
                cases prosecution under the Fire Safety Order with an unlimited fine.
                HMO licensing inspections that identify non-compliance can lead to revocation
                of the HMO licence, making the property unlawful to let.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-brand-amber/10 border border-brand-amber/30 p-4 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Record keeping: </strong>
            Retain all fire extinguisher service records as part of your fire safety
            compliance file. HMO licensing officers and fire authority inspectors can
            request these records during inspection. Records should be kept for a minimum
            of 3 years. Our service record, issued within 24 hours of each visit, is
            formatted specifically for compliance files and HMO licence submissions.
          </div>
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
                desc: "Written fire risk assessment from £74.99. Identifies whether your extinguisher provision is adequate.",
              },
              {
                name: "Fire Door Certificate",
                href: "/fire-door-certificate",
                desc: "Fire door inspection from £119.99/door. Annual HMO requirement under BS 9999.",
              },
              {
                name: "Fire Safety Certificate",
                href: "/fire-safety-certificate",
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
              issued within 24 hours. Same-week appointments across all 33 London boroughs.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/book?service=fire-extinguisher"
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
        href="/book?service=fire-extinguisher"
        label="Book Now"
        price={entryPrice}
        serviceName="Fire Extinguisher Testing"
      />
    </>
  );
}

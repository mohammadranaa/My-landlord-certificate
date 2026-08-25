import type { Metadata } from "next";
import Link from "next/link";
import { LazyFAQAccordion as FAQAccordion, LazyStickyMobileCTA as StickyMobileCTA } from "@/components/lazy";
import { JsonLd } from "@/components/shared/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { HeroRating } from "@/components/ui/hero-rating";
import { ReviewsBlock } from "@/components/marketing/reviews-block";
import { cn } from "@/lib/utils";
import { PHONE_DISPLAY, TEL } from "@/lib/constants";
import {
  getPriceForEICR,
  getPriceForGasSafety,
  getPriceForFRA,
  getPriceForFireSafetyCert,
  getPriceForEPC,
  getPriceForPAT,
  ELC_TABLE,
  FIRE_DOOR_CERT_PRICE,
  LEGIONELLA_PRICES,
  ADDITIONAL_CHARGES,
} from "@/lib/pricing";

// ── Prices ────────────────────────────────────────────────────────────────────

const PRICES = {
  eicr: getPriceForEICR("studio"),
  gas: getPriceForGasSafety(1),
  fra: getPriceForFRA("studio"),
  fireSafety: getPriceForFireSafetyCert(3),
  elc: ELC_TABLE[0].price,
  epc: getPriceForEPC("studio"),
  pat: getPriceForPAT(1),
  fireDoor: FIRE_DOOR_CERT_PRICE,
  legionella: LEGIONELLA_PRICES.standard,
} as const;

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "HMO Compliance Certificates London | All Inspections from One Provider",
  description:
    "Every certificate your HMO licence requires — EICR, Gas Safety, Fire Risk Assessment, EPC, Emergency Lights, PAT Testing and more. London-wide coverage. Fixed prices. Book online or call 020 3996 1070.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/hmo-compliance",
  },
  openGraph: {
    title:
      "HMO Compliance Certificates London | All Inspections from One Provider",
    description:
      "Every certificate your HMO licence requires — EICR, Gas Safety, Fire Risk Assessment, EPC, Emergency Lights, PAT Testing and more. London-wide coverage. Fixed prices. Book online or call 020 3996 1070.",
    url: "https://www.mylandlordcertificate.co.uk/hmo-compliance",
    type: "website",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.mylandlordcertificate.co.uk",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "HMO Compliance",
      item: "https://www.mylandlordcertificate.co.uk/hmo-compliance",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "HMO Compliance Certificates London",
  description:
    "Complete HMO compliance certification service covering all certificates required for London HMO licence applications.",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://www.mylandlordcertificate.co.uk",
  },
  areaServed: "London",
  serviceType: "Property Compliance",
  offers: {
    "@type": "Offer",
    price: "67.99",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://www.mylandlordcertificate.co.uk/hmo-compliance",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What certificates do I need for an HMO licence in London?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most London boroughs require nine certificates for an HMO licence application: an EICR (Electrical Installation Condition Report), a Gas Safety Certificate (CP12), a Fire Risk Assessment, a Fire Safety Certificate covering your smoke and heat alarm system, an Emergency Lights Certificate, an EPC (Energy Performance Certificate), PAT Testing for any electrical appliances you supply, a Fire Door Certificate, and a Legionella Risk Assessment. Exact requirements vary by borough — some boroughs have additional conditions — so always verify with your specific council. Missing a single certificate is the most common reason HMO licence applications are delayed or refused.",
      },
    },
    {
      "@type": "Question",
      name: "How much does HMO compliance cost in London?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Base HMO compliance for a studio or small HMO costs approximately £883 when you add up the entry-level prices for all nine required certificates: EICR £67.99, Gas Safety £49.99, Fire Risk Assessment £74.99, Fire Safety Certificate £54.99, Emergency Lights £54.99, EPC £89.99, PAT Testing £59.99, Fire Door Certificate £129.99, and Legionella Risk Assessment £299.99. Larger HMOs — typically 4+ bedrooms — will cost more as prices for EICR, FRA, and EPC scale with property size. This is a first-year figure; ongoing annual renewal costs are lower because EPC (10 years), EICR (5 years), and Legionella (2 years) do not need renewing annually.",
      },
    },
    {
      "@type": "Question",
      name: "How often do I need a Fire Risk Assessment for an HMO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The minimum legal requirement under the Regulatory Reform (Fire Safety) Order 2005 is annual review for HMOs. The Fire Safety (England) Regulations 2022 further strengthened this obligation, requiring that the responsible person reviews the FRA at least once every 12 months and whenever there is a significant change to the property, its use, or the number of occupants. A new tenancy, structural alterations, changes to the fire alarm system, and any fire or near-miss all trigger a mandatory review. London councils increasingly inspect for a current FRA as part of HMO licence renewal — an out-of-date assessment can result in licence refusal or revocation.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need an EICR for every room in an HMO or just one for the whole property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One EICR covers the entire electrical installation of the property — not individual rooms or circuits. The inspection tests the distribution board, all fixed wiring, sockets, light fittings, and any hard-wired appliances throughout the entire property in a single visit. The price is based on the number of bedrooms because larger properties have more circuits to test, not because separate inspections are needed for each room. Under the Electrical Safety Standards in the Private Rented Sector Regulations 2020, landlords must have a valid EICR for the whole property and provide a copy to each tenant within 28 days of the inspection.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my HMO fails a council inspection for compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If a council inspection reveals missing or out-of-date compliance certificates, the council can issue an Improvement Notice requiring you to obtain the relevant certificates within a set timeframe, typically 21 days. They can also issue a Prohibition Order preventing any occupation of the property, or revoke the HMO licence entirely. Operating an unlicensed HMO is a criminal offence under section 72 of the Housing Act 2004 and carries an unlimited fine. In addition, any tenant can apply to the First-tier Tribunal for a Rent Repayment Order covering up to 12 months of rent. Getting everything in order before an inspection is far less costly than dealing with enforcement action after it.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need PAT testing for an HMO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PAT testing is not a standalone statutory legal requirement in the same way that an EICR or Gas Safety Certificate is. However, it is required by most HMO licence conditions for any furnished property where the landlord supplies electrical appliances. This includes white goods in shared kitchens — fridges, washing machines, ovens — as well as kettles, microwaves, televisions, and vacuum cleaners. The HMO Management Regulations 2006 and the Electricity at Work Regulations 1989 place a duty on landlords to ensure all electrical equipment is safe. Annual PAT testing is the recognised way to demonstrate compliance, and most London councils will ask to see a current PAT certificate as part of the licence application.",
      },
    },
    {
      "@type": "Question",
      name: "What fire alarm grade does my London HMO need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most two-storey London HMOs with up to four occupants require a Grade D LD2 system: mains-powered interlinked smoke alarms with battery backup in all bedrooms, communal corridors, hallways, and landings, plus a heat alarm in the kitchen. Three-storey HMOs or those with more than six occupants typically require a Grade A LD2 system: a centrally monitored fire alarm panel with mains-powered detectors wired to the panel. Many London boroughs require Grade A LD2 for all licensable HMOs regardless of the number of storeys. Always check your specific borough's HMO licence conditions — requirements vary significantly across London's 33 boroughs.",
      },
    },
    {
      "@type": "Question",
      name: "Can you provide all HMO compliance certificates from one booking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. My Landlord Certificate provides every certificate an HMO licence requires — EICR, Gas Safety CP12, Fire Risk Assessment, Fire Safety Certificate, Emergency Lights Certificate, EPC, PAT Testing, Fire Door Certificate, and Legionella Risk Assessment — from a single provider. Where possible we coordinate multiple inspections to minimise disruption, and in some cases can arrange same-day visits for two or more services. All certificates come from one team with one point of contact, which simplifies the licence application process significantly. To discuss coordinating your full HMO compliance package, call us on 020 3996 1070 and we will arrange inspections in as few visits as possible.",
      },
    },
  ],
};

// ── Certificate checklist data ────────────────────────────────────────────────

const certificates = [
  {
    name: "EICR",
    fullName: "Electrical Installation Condition Report",
    frequency: "Every 5 years (or change of tenancy)",
    legalBasis: "Electrical Safety Standards in the Private Rented Sector Regulations 2020",
    price: PRICES.eicr,
    link: "/electrical-safety/domestic-eicr",
    note: "Essential for HMO licence application",
    badge: "LEGALLY REQUIRED",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    name: "Gas Safety Certificate (CP12)",
    fullName: "Gas Safety Certificate (CP12)",
    frequency: "Annually",
    legalBasis: "Gas Safety (Installation & Use) Regulations 1998",
    price: PRICES.gas,
    link: "/gas-safety/cp12",
    note: null,
    badge: "LEGALLY REQUIRED",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    name: "Fire Risk Assessment",
    fullName: "Fire Risk Assessment",
    frequency: "Annually (review) — new assessment on any significant change",
    legalBasis: "Regulatory Reform (Fire Safety) Order 2005",
    price: PRICES.fra,
    link: "/fire-risk-assessment",
    note: "Mandatory for all HMO licence applications. Must be conducted by a competent person — our assessors are IFSM certified.",
    badge: "LEGALLY REQUIRED",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    name: "Fire Safety Certificate",
    fullName: "Fire Safety Certificate (Smoke & Heat Alarm System)",
    frequency: "Annual check",
    legalBasis: "Housing Act 2004, HMO licence conditions",
    price: PRICES.fireSafety,
    link: "/fire-safety-certificate",
    note: "Grade D LD2 minimum for most HMOs. Grade A panel for 3+ storey HMOs.",
    badge: "LEGALLY REQUIRED",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    name: "Emergency Lights Certificate",
    fullName: "Emergency Lights Certificate",
    frequency: "Annual",
    legalBasis: "BS 5266-1, HMO licence conditions",
    price: PRICES.elc,
    link: "/emergency-lights-certificate",
    note: "Required in HMOs with internal escape routes or shared corridors. Monthly flick tests and annual 3-hour test documented.",
    badge: "REQUIRED FOR MOST HMOs",
    badgeColor: "bg-amber-100 text-amber-700",
  },
  {
    name: "EPC",
    fullName: "Energy Performance Certificate",
    frequency: "Every 10 years (minimum E rating required)",
    legalBasis: "Energy Performance of Buildings Regulations 2012 / MEES Regulations 2018",
    price: PRICES.epc,
    link: "/epc/domestic-epc",
    note: "An EPC below E means the property cannot legally be let. New proposals may raise the minimum to C by 2028.",
    badge: "LEGALLY REQUIRED",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    name: "PAT Testing",
    fullName: "PAT Testing",
    frequency: "Recommended annually (required by most HMO licence conditions for furnished properties)",
    legalBasis: "HMO Management Regulations 2006 / Electricity at Work Regulations 1989",
    price: PRICES.pat,
    link: "/pat-testing",
    note: "Required if you supply any electrical appliances — white goods in shared kitchens, kettles, microwaves, TVs.",
    badge: "REQUIRED FOR FURNISHED HMOs",
    badgeColor: "bg-amber-100 text-amber-700",
  },
  {
    name: "Fire Door Certificate",
    fullName: "Fire Door Certificate",
    frequency: "Annual inspection (quarterly for buildings over 11m)",
    legalBasis: "Fire Safety (England) Regulations 2022",
    price: PRICES.fireDoor,
    link: "/fire-door-certificate",
    note: "Required for all fire doors on escape routes. Quarterly checks for buildings above 11 metres.",
    badge: "LEGALLY REQUIRED",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    name: "Legionella Risk Assessment",
    fullName: "Legionella Risk Assessment",
    frequency: "Every 2 years (or when water system changes)",
    legalBasis: "ACoP L8, Health and Safety at Work Act 1974",
    price: PRICES.legionella,
    link: "/legionella-risk-assessment",
    note: "HMOs are higher risk due to multiple shower systems and periods of vacancy. HSE considers landlords duty holders.",
    badge: "LEGALLY REQUIRED",
    badgeColor: "bg-red-100 text-red-700",
  },
] as const;

// ── Renewal schedule ──────────────────────────────────────────────────────────

const renewalSchedule = [
  { cert: "Gas Safety CP12", frequency: "Every 12 months", cost: `from £${PRICES.gas}` },
  { cert: "Fire Risk Assessment", frequency: "Annually", cost: `from £${PRICES.fra}` },
  { cert: "Fire Safety Certificate", frequency: "Annually", cost: `from £${PRICES.fireSafety}` },
  { cert: "Emergency Lights Certificate", frequency: "Annually", cost: `from £${PRICES.elc}` },
  { cert: "PAT Testing", frequency: "Annually", cost: `from £${PRICES.pat}` },
  { cert: "Fire Door Certificate", frequency: "Annually", cost: `from £${PRICES.fireDoor}` },
  { cert: "EICR", frequency: "Every 5 years", cost: `from £${PRICES.eicr}` },
  { cert: "EPC", frequency: "Every 10 years", cost: `from £${PRICES.epc}` },
  { cert: "Legionella Risk Assessment", frequency: "Every 2 years", cost: `£${PRICES.legionella}` },
] as const;

// ── Why choose us ─────────────────────────────────────────────────────────────

const benefits = [
  {
    title: "One provider for everything",
    body: "You need 9 different certificates. Most landlords deal with 4–5 different contractors to get them all. We provide every certificate an HMO licence requires — booked through one platform, coordinated by one team.",
  },
  {
    title: "IFSM certified fire assessors",
    body: "Our Fire Risk Assessors are certified by the Institute of Fire Safety Managers (IFSM) — the standard recognised by London councils. An IFSM-certified FRA is far less likely to be challenged during the licence application.",
  },
  {
    title: "Fixed prices, no surprises",
    body: `Every price on our site is the price you pay. No call-out charges, no hidden extras beyond the Congestion Zone (£${ADDITIONAL_CHARGES.congestionZone}) and no free parking surcharge (£${ADDITIONAL_CHARGES.parking}).`,
  },
  {
    title: "Same-week appointments",
    body: `Most certificates can be arranged within 48 hours. For urgent HMO licence deadlines, call ${PHONE_DISPLAY} and we will do our best to prioritise your booking.`,
  },
] as const;

// ── FAQ items ─────────────────────────────────────────────────────────────────

const faqItems = [
  {
    question: "What certificates do I need for an HMO licence in London?",
    answer:
      "Most London boroughs require nine certificates for an HMO licence application: an EICR, a Gas Safety Certificate (CP12), a Fire Risk Assessment, a Fire Safety Certificate covering your smoke and heat alarm system, an Emergency Lights Certificate, an EPC, PAT Testing for any electrical appliances you supply, a Fire Door Certificate, and a Legionella Risk Assessment. Exact requirements vary by borough — some have additional conditions — so always verify with your specific council. Missing a single certificate is the most common reason HMO licence applications are delayed or refused.",
  },
  {
    question: "How much does HMO compliance cost in London?",
    answer: `Base HMO compliance for a studio or small HMO costs approximately £883 when you add up the entry-level prices for all nine required certificates: EICR £${PRICES.eicr}, Gas Safety £${PRICES.gas}, Fire Risk Assessment £${PRICES.fra}, Fire Safety Certificate £${PRICES.fireSafety}, Emergency Lights £${PRICES.elc}, EPC £${PRICES.epc}, PAT Testing £${PRICES.pat}, Fire Door Certificate £${PRICES.fireDoor}, and Legionella Risk Assessment £${PRICES.legionella}. Larger HMOs will cost more as prices for EICR, FRA, and EPC scale with property size. This is a first-year figure — ongoing renewal costs are lower because EPC (10 years), EICR (5 years), and Legionella (2 years) do not renew annually.`,
  },
  {
    question: "How often do I need a Fire Risk Assessment for an HMO?",
    answer:
      "The minimum legal requirement under the Regulatory Reform (Fire Safety) Order 2005 is annual review for HMOs. The Fire Safety (England) Regulations 2022 further strengthened this obligation, requiring that the responsible person reviews the FRA at least once every 12 months and whenever there is a significant change to the property, its use, or the number of occupants. A new tenancy, structural alterations, changes to the fire alarm system, and any fire or near-miss all trigger a mandatory review. London councils increasingly inspect for a current FRA as part of HMO licence renewal — an out-of-date assessment can result in licence refusal or revocation.",
  },
  {
    question: "Do I need an EICR for every room in an HMO or just one for the whole property?",
    answer:
      "One EICR covers the entire electrical installation of the property — not individual rooms. The inspection tests the distribution board, all fixed wiring, sockets, light fittings, and any hard-wired appliances throughout the property in a single visit. The price is based on the number of bedrooms because larger properties have more circuits to test, not because separate inspections are needed per room. Under the Electrical Safety Standards in the Private Rented Sector Regulations 2020, landlords must have a valid EICR for the whole property and provide a copy to each tenant within 28 days of the inspection.",
  },
  {
    question: "What happens if my HMO fails a council inspection for compliance?",
    answer:
      "If a council inspection reveals missing or out-of-date certificates, the council can issue an Improvement Notice requiring you to obtain the relevant certificates within a set timeframe, typically 21 days. They can also issue a Prohibition Order preventing any occupation of the property, or revoke the HMO licence entirely. Operating an unlicensed HMO is a criminal offence under section 72 of the Housing Act 2004 and carries an unlimited fine. In addition, tenants can apply to the First-tier Tribunal for a Rent Repayment Order covering up to 12 months of rent. Getting everything in order before an inspection is far less costly than dealing with enforcement action after it.",
  },
  {
    question: "Do I need PAT testing for an HMO?",
    answer:
      "PAT testing is not a standalone statutory requirement in the same way that an EICR or Gas Safety Certificate is. However, it is required by most HMO licence conditions for any furnished property where the landlord supplies electrical appliances — including white goods in shared kitchens, fridges, washing machines, kettles, microwaves, and televisions. The HMO Management Regulations 2006 and the Electricity at Work Regulations 1989 place a duty on landlords to ensure all electrical equipment is safe. Annual PAT testing is the recognised way to demonstrate compliance, and most London councils will ask to see a current PAT certificate as part of the licence application.",
  },
  {
    question: "What fire alarm grade does my London HMO need?",
    answer:
      "Most two-storey London HMOs with up to four occupants require a Grade D LD2 system: mains-powered interlinked smoke alarms with battery backup in all bedrooms, communal corridors, hallways, and landings, plus a heat alarm in the kitchen. Three-storey HMOs or those with more than six occupants typically require a Grade A LD2 system: a centrally monitored fire alarm panel with mains-powered detectors wired to the panel. Many London boroughs require Grade A LD2 for all licensable HMOs regardless of storeys. Always check your specific borough's HMO licence conditions, as requirements vary significantly across London.",
  },
  {
    question: "Can you provide all HMO compliance certificates from one booking?",
    answer:
      "Yes. My Landlord Certificate provides every certificate an HMO licence requires — EICR, Gas Safety CP12, Fire Risk Assessment, Fire Safety Certificate, Emergency Lights Certificate, EPC, PAT Testing, Fire Door Certificate, and Legionella Risk Assessment — from a single provider. Where possible we coordinate multiple inspections to minimise disruption, and in some cases can arrange same-day visits for two or more services. All certificates come from one team with one point of contact, simplifying the licence application significantly. To discuss coordinating your full HMO compliance package, call us on 020 3996 1070.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HMOCompliancePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
      <section aria-labelledby="hmo-heading" className="bg-hero-blue text-white">
        <Container className="py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-blue-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li className="text-white font-medium">HMO Compliance</li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            NICEIC · Gas Safe · IFSM · London &amp; M25
          </p>

          <Heading level={1} id="hmo-heading" inverted className="mb-4 max-w-2xl">
            HMO Compliance Certificates London
          </Heading>
          <HeroRating theme="dark" className="mb-5" />

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-8">
            Every certificate your HMO licence requires — from a single provider. EICR, Gas Safety CP12, Fire Risk Assessment, EPC, Emergency Lights, PAT Testing, Fire Door Certificate, and Legionella Risk Assessment. Fixed prices, next-day appointments across all 33 London boroughs. Certificate emailed within 24 hours.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/book"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book HMO inspection →
            </Link>
            <a
              href={TEL}
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white/10 border border-white/30 text-white hover:bg-white/20",
              )}
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </Container>
      </section>

      {/* ── Stats bar ── */}
      <div className="bg-spec-bar text-sm py-5 border-t-2 border-action-green">
        <Container>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-5 text-center [&>*:last-child:nth-child(odd)]:col-span-2 md:flex md:flex-wrap md:items-center md:justify-center md:gap-y-3 md:text-left text-white/70">
            <div className="flex flex-col gap-1 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">Services</dt>
              <dd className="text-sm font-bold text-white">9 in one place</dd>
            </div>
            <div className="flex flex-col gap-1 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">Coverage</dt>
              <dd className="text-sm font-bold text-white">All 33 boroughs</dd>
            </div>
            <div className="flex flex-col gap-1 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">Delivery</dt>
              <dd className="text-sm font-bold text-white">Within 24 hours</dd>
            </div>
            <div className="flex flex-col gap-1 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">Booking</dt>
              <dd className="text-sm font-bold text-white">Online, instant</dd>
            </div>
          </dl>
        </Container>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── Section 1 — What certificates ── */}
        <section aria-labelledby="what-certs-heading">
          <Heading level={2} id="what-certs-heading" className="mb-4">
            What certificates does an HMO licence require in London?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Every London HMO licence application requires a specific set of safety
            certificates before the council will grant or renew a licence. While exact
            requirements vary by borough, the core compliance checklist is consistent
            across all 33 London councils. Missing a single certificate is the most
            common reason HMO licence applications are delayed or refused.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            The certificates required fall into three broad categories: electrical safety,
            fire safety, and general property compliance. London councils have significantly
            strengthened their enforcement since 2022 following the Fire Safety (England)
            Regulations 2022 and the Building Safety Act 2023, and HMO inspections now
            routinely check that all certificates are current, correctly issued, and
            produced by a suitably qualified person.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Operating an unlicensed HMO is a criminal offence under section 72 of the
            Housing Act 2004. Penalties include an unlimited fine, a Rent Repayment Order
            of up to 12 months&apos; rent, and potential disqualification as a landlord.
            Councils can also issue civil penalty notices of up to £30,000 per offence as
            an alternative to prosecution.
          </p>
          <div className="rounded-xl bg-amber-50 border border-brand-amber/30 p-5 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Important: </strong>
            Requirements differ between mandatory HMO licensing (5 or more persons from 2
            or more households) and additional licensing schemes operated by individual
            boroughs. Always confirm the full list of required certificates directly with
            your borough council before submitting a licence application.
          </div>
        </section>

        {/* ── Section 2 — Compliance checklist ── */}
        <section aria-labelledby="checklist-heading">
          <Heading level={2} id="checklist-heading" className="mb-2">
            The complete HMO compliance certificate checklist
          </Heading>
          <p className="text-brand-grey mb-8">
            Nine certificates. Fixed prices. All from one provider.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {certificates.map((cert) => (
              <div
                key={cert.name}
                className="rounded-2xl border border-border bg-white p-5 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="font-semibold text-brand-charcoal text-sm leading-snug">
                    {cert.fullName}
                  </p>
                  <span
                    className={cn(
                      "shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full",
                      cert.badgeColor,
                    )}
                  >
                    {cert.badge}
                  </span>
                </div>

                <dl className="space-y-1.5 text-xs flex-1">
                  <div className="flex gap-2">
                    <dt className="text-brand-grey font-medium shrink-0 w-16">Required</dt>
                    <dd className="text-brand-charcoal/80">{cert.frequency}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-brand-grey font-medium shrink-0 w-16">Law</dt>
                    <dd className="text-brand-charcoal/80">{cert.legalBasis}</dd>
                  </div>
                </dl>

                {cert.note && (
                  <p className="text-xs text-brand-grey leading-relaxed bg-warm-white rounded-lg px-3 py-2">
                    {cert.note}
                  </p>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="font-bold text-compliance-blue">
                    from £{cert.price}
                  </span>
                  <Link
                    href={cert.link}
                    className="text-xs font-medium text-compliance-blue hover:underline"
                  >
                    View service →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 3 — Renewal schedule ── */}
        <section aria-labelledby="schedule-heading">
          <Heading level={2} id="schedule-heading" className="mb-4">
            HMO certificate renewal schedule at a glance
          </Heading>

          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-compliance-blue text-white">
                  <th scope="col" className="text-left px-4 py-3 font-semibold rounded-tl-xl">
                    Certificate
                  </th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold">
                    Frequency
                  </th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold rounded-tr-xl">
                    Typical cost
                  </th>
                </tr>
              </thead>
              <tbody>
                {renewalSchedule.map((row, i) => (
                  <tr
                    key={row.cert}
                    className={i % 2 === 0 ? "bg-white" : "bg-warm-white"}
                  >
                    <td className="px-4 py-3 font-medium text-brand-charcoal">
                      {row.cert}
                    </td>
                    <td className="px-4 py-3 text-brand-charcoal/80">
                      {row.frequency}
                    </td>
                    <td className="px-4 py-3 font-semibold text-compliance-blue">
                      {row.cost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-brand-grey">
            Renewal frequencies shown are the legal minimum. London borough HMO licence
            conditions may require more frequent checks — always verify with your
            specific council.
          </p>
        </section>

        {/* ── Section 4 — Why choose us ── */}
        <section aria-labelledby="why-us-heading">
          <Heading level={2} id="why-us-heading" className="mb-6">
            Why London HMO landlords choose My Landlord Certificate
          </Heading>
          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-border bg-warm-white p-6">
                <div className="w-9 h-9 rounded-xl bg-compliance-blue/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-compliance-blue" fill="none" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <p className="font-semibold text-brand-charcoal mb-2">{benefit.title}</p>
                <p className="text-sm text-brand-charcoal/80 leading-relaxed">{benefit.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 5 — Fire alarm grades ── */}
        <section aria-labelledby="fire-alarm-heading">
          <Heading level={2} id="fire-alarm-heading" className="mb-4">
            Which fire alarm grade does your HMO need?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Fire alarm grading is one of the most confusing areas of HMO compliance.
            The grade required depends on the number of storeys and occupants — and
            London boroughs interpret the rules differently. Here is a plain-English
            guide to the two grades most HMO landlords will encounter.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="rounded-xl border border-compliance-blue/30 bg-compliance-blue/5 p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-compliance-blue text-white">
                  Grade D LD2
                </span>
                <span className="text-xs text-brand-grey">Most common for 2-storey HMOs</span>
              </div>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed mb-3">
                Mains-powered interlinked smoke and heat alarms with battery backup.
                Required in all bedrooms, communal corridors, hallways, and landings,
                with a heat alarm (not smoke) in the kitchen.
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                This is the minimum standard for most London HMOs with up to four
                floors and up to six occupants. The alarms must be interlinked so
                that activation of any alarm triggers all alarms in the property.
              </p>
            </div>

            <div className="rounded-xl border border-red-200 bg-red-50 p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-red-600 text-white">
                  Grade A LD2
                </span>
                <span className="text-xs text-brand-grey">3+ storey HMOs / 6+ occupants</span>
              </div>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed mb-3">
                A centrally monitored fire alarm panel with mains-powered detectors
                wired directly to the panel. Required in HMOs of three or more
                storeys, or where the local authority specifies it.
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Many London boroughs — including Tower Hamlets, Newham, and Hackney —
                require Grade A LD2 for all licensable HMOs regardless of the
                number of storeys. A panel system requires commissioning by a
                qualified engineer and an annual service certificate.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            <div className="rounded-xl border border-border bg-warm-white p-5">
              <p className="font-semibold text-brand-charcoal text-sm mb-2">
                Heat alarm in the kitchen — not smoke
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                A smoke alarm in the kitchen will constantly false-alarm from cooking
                fumes, causing tenants to disable it. The correct detector for kitchens
                is a heat alarm, which triggers only when the temperature rises above
                a fixed threshold. Using the wrong type is a common finding in HMO
                fire risk assessments.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-warm-white p-5">
              <p className="font-semibold text-brand-charcoal text-sm mb-2">
                Interlinked means all alarms sound together
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                For both Grade D and Grade A systems, interlinked means that if one
                detector is triggered, every alarm in the property sounds simultaneously.
                In an HMO with six separate bedrooms, a fire starting in a ground floor
                kitchen must wake up a tenant sleeping on the top floor. Non-interlinked
                alarms do not meet this requirement.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-compliance-blue/5 border border-compliance-blue/20 p-5 text-sm text-brand-charcoal/80">
            <strong className="text-compliance-blue">Not sure which grade applies to your HMO? </strong>
            Our fire safety team will advise you during the booking process — call{" "}
            <a href={TEL} className="text-compliance-blue hover:underline font-medium">
              {PHONE_DISPLAY}
            </a>.
          </div>
        </section>

        {/* ── Section 6 — Borough licensing ── */}
        <section aria-labelledby="borough-heading">
          <Heading level={2} id="borough-heading" className="mb-4">
            HMO licensing in London — what you need to know about your borough
          </Heading>

          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Mandatory HMO licensing applies across all 33 London boroughs for properties
            occupied by 5 or more people from 2 or more households sharing facilities.
            Since October 2018 the previous three-storey minimum was removed — a
            ground-floor flat let to five unrelated tenants now requires a mandatory
            licence regardless of the number of floors.
          </p>

          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Beyond mandatory licensing, many London boroughs operate additional licensing
            schemes covering smaller HMOs of 3 or 4 occupants, and selective licensing
            schemes covering all privately rented properties in designated areas. If
            your property falls within an additional or selective scheme, all the same
            compliance certificate requirements apply.
          </p>

          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            The following boroughs operate additional or selective licensing schemes
            that are known to be active in 2026. This list is illustrative — always
            verify current scheme status directly with your borough:
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {[
              { borough: "Newham", note: "Borough-wide scheme, 3+ persons" },
              { borough: "Brent", note: "Additional scheme active" },
              { borough: "Tower Hamlets", note: "Mandatory + additional scheme" },
              { borough: "Southwark", note: "Selective licensing in parts" },
              { borough: "Lambeth", note: "Selective in designated wards" },
              { borough: "Croydon", note: "Selective in designated areas" },
              { borough: "Haringey", note: "Additional and selective schemes" },
              { borough: "Barnet", note: "Selective licensing in parts" },
            ].map(({ borough, note }) => (
              <div
                key={borough}
                className="flex items-start gap-3 rounded-xl border border-border bg-warm-white p-4"
              >
                <span className="mt-0.5 w-5 h-5 rounded-full bg-compliance-blue/10 text-compliance-blue flex items-center justify-center shrink-0 text-xs font-bold">
                  ✓
                </span>
                <div>
                  <p className="font-semibold text-brand-charcoal text-sm">{borough}</p>
                  <p className="text-xs text-brand-grey">{note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-amber-50 border border-brand-amber/30 p-5 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Check your borough: </strong>
            The GLA Property Licence Checker at{" "}
            <a
              href="https://www.london.gov.uk/programmes-strategies/housing-and-land/improving-private-rented-sector/rental-homes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-compliance-blue hover:underline"
            >
              london.gov.uk
            </a>{" "}
            allows landlords to check whether a specific London property is required to
            be licensed. Always verify with your specific borough council before applying.
          </div>
        </section>

        {/* ── Section 7 — FAQ ── */}
        <section aria-labelledby="faq-heading" className="below-fold">
          <Heading level={2} id="faq-heading" className="mb-6">
            HMO compliance — frequently asked questions
          </Heading>
          <FAQAccordion items={faqItems} includeSchema={false} />
        </section>

        {/* ── Section 8 — CTA ── */}
        <section
          aria-labelledby="cta-heading"
          className="rounded-2xl bg-compliance-blue px-8 py-10 text-center text-white"
        >
          <Heading level={2} id="cta-heading" inverted className="mb-3">
            Get your HMO fully compliant — book all certificates today
          </Heading>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Call us on {PHONE_DISPLAY} to discuss your HMO compliance requirements
            and we will arrange all inspections in as few visits as possible. Or book
            individual services online right now.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/book"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book online →
            </Link>
            <a
              href={TEL}
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white/10 border border-white/30 text-white hover:bg-white/20",
              )}
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
          <p className="mt-5 text-xs text-blue-100">
            Fixed prices · All 33 London boroughs · Certificate emailed within 24 hours
          </p>
        </section>
      </div>

      <ReviewsBlock />

      <StickyMobileCTA
        href="/book"
        label="Book HMO inspection"
        price={PRICES.eicr}
        serviceName="HMO compliance from"
      />
    </>
  );
}

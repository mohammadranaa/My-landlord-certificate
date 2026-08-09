import type { Metadata } from "next";
import { LazyFAQAccordion as FAQAccordion, LazyStickyMobileCTA as StickyMobileCTA } from "@/components/lazy";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { TrustBadges } from "@/components/ui/trust-badges";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { GoogleReviews } from "@/components/marketing/google-reviews";
import Image from "next/image";
import { TEL, PHONE_DISPLAY, GOOGLE_BUSINESS_URL } from "@/lib/constants";
import {
  ADDITIONAL_CHARGES,
  DOMESTIC_EPC_TABLE,
  getPriceForEPC,
} from "@/lib/pricing";

export const metadata: Metadata = {
  title: "EPC London from £89.99 | Energy Performance Certificate for Landlords",
  description:
    "Energy Performance Certificate from £89.99. Required by law before renting or selling. Accredited DEA assessors across all 33 London boroughs. Certificate on national register within 24 hours.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/epc",
  },
};

const entryPrice = getPriceForEPC("studio");

const epcReviews = [
  {
    content:
      "The EPC assessor was thorough and efficient, in and out in 45 minutes for a 3-bed mid-terrace. We were hovering at a D rating and he flagged two low-cost improvements that would push us to a C before the deadline. Genuinely useful.",
    author: "Rachel B.",
    location: "Lewisham",
  },
  {
    content:
      "Assessor arrived on time, was polite with my tenant and completed the EPC quickly. The certificate was on the national register within hours. Straightforward from start to finish.",
    author: "Tom H.",
    location: "Southwark",
  },
  {
    content:
      "Needed the EPC for a remortgage. The assessor knew exactly what the lender would need and made sure everything was in order. Certificate arrived within 24 hours of the visit.",
    author: "Anna C.",
    location: "Merton",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Domestic Energy Performance Certificate (EPC)",
  url: "https://www.mylandlordcertificate.co.uk/epc",
  description:
    "Legally required for all residential properties before renting or selling. Accredited DEA assessors provide an A–G energy efficiency rating valid for 10 years.",
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
    url: "https://www.mylandlordcertificate.co.uk/epc",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "EPC Certificate", item: "https://www.mylandlordcertificate.co.uk/epc" },
  ],
};

const faqs = [
  {
    question: "Is an EPC legally required to rent out a property in London?",
    answer:
      "Yes. The Energy Performance of Buildings (England and Wales) Regulations 2012 require landlords to provide a valid EPC to prospective tenants before marketing a property to let. The EPC must be provided free of charge. Failure to comply can result in a local authority penalty charge of up to £5,000. The EPC must also be attached to any written tenancy agreement. There are no exemptions for furnished lettings, short lets, or HMOs. All residential tenancies require a valid EPC.",
  },
  {
    question: "What is the minimum EPC rating required to let a property?",
    answer:
      "Under the Minimum Energy Efficiency Standards (MEES) introduced by the Energy Efficiency (Private Rented Property) (England and Wales) Regulations 2015, landlords must not let a property on a new tenancy if it has an EPC rating below E. Letting a property rated F or G on a new or renewed tenancy is unlawful and can result in a fine of up to £5,000. The government has proposed raising the minimum to C for all new tenancies by 2028. If your property is currently rated D or E, planning improvements now is strongly recommended.",
  },
  {
    question: "What does the EPC assessment involve?",
    answer:
      "Our accredited DEA assessor visits the property and inspects the construction type (cavity, solid, or timber frame walls), loft and floor insulation, windows (single, double, or triple glazed), heating system (boiler type and controls), hot water system, and any renewable energy installations such as solar panels. The data is entered into government-approved RdSAP software to calculate the A–G rating. The assessment typically takes 30–60 minutes for a flat or small house and up to 90 minutes for a larger property.",
  },
  {
    question: "How long is an EPC valid for?",
    answer:
      "A domestic EPC is valid for 10 years from the date of assessment. If you already have a valid EPC from a previous tenancy or sale, you do not need a new one until it expires, provided no significant energy-related improvements (new boiler, major insulation works) have been made. You can check whether a valid EPC exists for your property on the government's national EPC register at find-energy-certificate.service.gov.uk using the property address.",
  },
  {
    question: "What improvements will raise my EPC rating the most?",
    answer:
      "The most impactful improvements are typically: (1) loft insulation (if absent, can add 10+ points), (2) cavity wall insulation (8–12 points), (3) upgrading to an A-rated condensing boiler with programmer and room thermostat (up to 15 points for old boilers), (4) installing a smart or programmable thermostat (2–5 points), and (5) switching to LED lighting throughout (1–2 points). Your EPC Recommendations Report shows the projected improvement for each measure specific to your property.",
  },
  {
    question: "How quickly will I receive my EPC after the assessment?",
    answer:
      "We lodge your EPC on the government's national EPC register within 24 hours of the assessment. You will receive the certificate reference number and a link to the register entry by email. The certificate can be downloaded directly from the national register and provided to letting agents and prospective tenants immediately. There is no need to wait for a physical document.",
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
    title: "Book online or call us",
    description:
      "Select your property size, pick a date, and confirm your booking. We cover all 33 London boroughs with same-week appointments available.",
  },
  {
    step: "2",
    title: "Assessor visits your property",
    description:
      "Our accredited DEA assessor carries out a 30–60 minute survey of the property's construction, heating, insulation, windows, and energy systems.",
  },
  {
    step: "3",
    title: "Certificate registered within 24 hours",
    description:
      "Your EPC is lodged on the government's national register. You receive the certificate reference number and a full Recommendations Report by email.",
  },
];

const ratingBands = [
  { rating: "A", range: "92–100 SAP", colour: "bg-green-600", text: "text-white", desc: "Exceptional, very low bills" },
  { rating: "B", range: "81–91 SAP", colour: "bg-green-500", text: "text-white", desc: "Very good, low running costs" },
  { rating: "C", range: "69–80 SAP", colour: "bg-lime-500", text: "text-white", desc: "Good, 2028 proposed minimum" },
  { rating: "D", range: "55–68 SAP", colour: "bg-yellow-400", text: "text-brand-charcoal", desc: "Average, most UK homes" },
  { rating: "E", range: "39–54 SAP", colour: "bg-orange-400", text: "text-white", desc: "Below average, legal minimum" },
  { rating: "F", range: "21–38 SAP", colour: "bg-orange-600", text: "text-white", desc: "Poor, cannot legally let" },
  { rating: "G", range: "1–20 SAP", colour: "bg-red-600", text: "text-white", desc: "Very poor, cannot legally let" },
];

const improvements = [
  { rank: "1", measure: "Loft insulation (if absent)", impact: "+10–15 points", cost: "~£300–£600" },
  { rank: "2", measure: "Cavity wall insulation", impact: "+8–12 points", cost: "~£500–£1,000" },
  { rank: "3", measure: "A-rated condensing boiler replacement", impact: "+8–15 points", cost: "~£2,000–£3,500" },
  { rank: "4", measure: "Room thermostat + programmer", impact: "+3–6 points", cost: "~£150–£400" },
  { rank: "5", measure: "Double glazing (if single-glazed)", impact: "+5–10 points", cost: "~£4,000–£8,000" },
  { rank: "6", measure: "Solid wall insulation (external)", impact: "+15–20 points", cost: "~£8,000–£15,000" },
  { rank: "7", measure: "Solar photovoltaic (PV) panels", impact: "+10–20 points", cost: "~£5,000–£10,000" },
  { rank: "8", measure: "Hot water cylinder insulation jacket", impact: "+1–3 points", cost: "~£15–£30" },
  { rank: "9", measure: "LED lighting throughout", impact: "+1–2 points", cost: "~£50–£200" },
];

export default function EPCPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
      <section className="bg-compliance-blue text-white py-10 lg:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-blue-200 flex-wrap">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li className="text-white font-medium">EPC Certificate</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left, copy + CTAs */}
            <div>
              <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
                Elmhurst Accredited · All 33 London Boroughs · 10-Year Certificate
              </p>

              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                EPC Certificate from £{entryPrice}
              </h1>

              <PriceDisplay price={entryPrice} from size="lg" className="mb-4 [&>span:last-child]:text-white" />
              <p className="text-blue-100 text-lg leading-relaxed mb-5">
                Energy Performance Certificate, required by law before renting or selling any
                residential property in London. Accredited DEA assessors, certificate registered
                on the national EPC register within 24 hours.
              </p>
              <div className="flex flex-wrap gap-3 mb-3">
                <Link
                  href="/book?service=epc"
                  className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Book Now, from £{entryPrice}
                </Link>
                <a
                  href={TEL}
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  Call {PHONE_DISPLAY}
                </a>
              </div>
              <p className="text-blue-300 text-sm mb-6">
                Fixed price · No hidden fees · On the national register within 24 hours
              </p>
              <TrustBadges serviceKey="epc" variant="dark" />
            </div>

            {/* Right, hero image */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                <Image
                  src="/epc/epc-energy-assessor-measuring-room.png"
                  alt="Accredited domestic energy assessor carrying out an EPC assessment in a London flat"
                  width={1600}
                  height={1000}
                  priority
                  sizes="(max-width: 1024px) 100%, 50vw"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-action-green/20 text-brand-charcoal font-bold text-sm">24h</span>
                <span className="text-sm font-semibold text-brand-charcoal leading-tight">
                  On the national
                  <br />
                  register in 24h
                </span>
              </div>
            </div>
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
              <p className="font-bold text-white">10 years</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Legal minimum</p>
              <p className="font-bold text-white">E rating (MEES)</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Certificate</p>
              <p className="font-bold text-white">Within 24 hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content well ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 md:pb-10">

        {/* What is it */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            What is a domestic EPC?
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            An Energy Performance Certificate (EPC) is an official government document that
            rates the energy efficiency of a residential property on a scale from A (most
            efficient, lowest energy bills) to G (least efficient, highest energy bills). Every
            EPC also shows the property&apos;s estimated current annual energy cost and what
            those costs could be after recommended improvements are made.
          </p>
          <Image
            src="/epc/epc-assessor-checking-boiler.png"
            alt="Accredited domestic energy assessor inspecting a boiler and heating controls during an EPC assessment"
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100%, 768px"
            className="rounded-2xl border border-border shadow-sm w-full h-56 md:h-64 object-cover mb-6"
          />
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            EPCs are produced by accredited Domestic Energy Assessors (DEAs) using
            government-approved RdSAP (Reduced Data Standard Assessment Procedure) software.
            The assessment considers a range of factors: the property&apos;s construction type
            (cavity, solid, or timber frame walls), loft and floor insulation levels,
            window glazing type, the heating system and boiler efficiency, hot water cylinder
            and controls, and any renewable energy systems such as solar panels. The assessor
            inputs this data into the RdSAP model, which calculates the SAP (Standard
            Assessment Procedure) score and corresponding A–G band.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Every EPC also includes a Recommendations Report, a prioritised list of
            cost-effective improvements specific to your property, with estimated installation
            costs and projected energy savings. This is a valuable planning tool for landlords
            who need to improve their rating ahead of tightening MEES regulations. The
            Recommendations Report is free and included in every assessment we carry out.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Once lodged, your EPC is recorded permanently on the government&apos;s national EPC
            register, accessible to landlords, tenants, letting agents, and mortgage lenders.
            Prospective tenants, buyers, and letting agents can view the certificate at any time
            using the property address. The certificate is valid for 10 years from the date of
            assessment, regardless of changes in ownership or tenancy, unless significant
            energy-related works have been carried out that would materially affect the rating.
          </p>

          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4 mb-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Legal requirement:</span>{" "}
              The Energy Performance of Buildings (England and Wales) Regulations 2012
              require a valid EPC to be provided to all prospective tenants before any
              residential property is marketed to let. Under MEES, properties rated F or G
              cannot legally be let on a new tenancy. Failure to comply can result in a
              local authority penalty of up to £5,000.
            </p>
          </div>

          <div className="bg-compliance-blue/5 border border-compliance-blue/20 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-compliance-blue">Coming 2028:</span>{" "}
              The government has proposed raising the minimum EPC rating for all new private
              rented tenancies to C by 2028. If your property is currently rated D or E,
              commissioning an EPC assessment and Recommendations Report now gives you time
              to plan and budget for the required improvements.
            </p>
          </div>
        </section>

        {/* EPC ratings explained */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            EPC ratings A–G explained
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            The EPC rating is derived from the SAP (Standard Assessment Procedure) score,
            which estimates the annual energy cost per square metre of floor area. The lower
            the energy cost, the higher the rating. Most UK homes fall in bands D and E, only
            around 4% of privately rented homes currently achieve a C or above.
          </p>
          <div className="grid md:grid-cols-2 gap-6 items-center mb-6">
            <Image
              src="/epc/epc-rating-chart-a-to-g.png"
              alt="EPC energy efficiency rating chart from A (most efficient) to G (least efficient), with C marked as the minimum rental standard"
              width={1080}
              height={1080}
              sizes="(max-width: 768px) 100%, 460px"
              className="rounded-xl border border-border shadow-sm w-full"
            />
            <div className="space-y-2">
            {ratingBands.map((r) => (
              <div key={r.rating} className="flex items-center gap-4">
                <div
                  className={`${r.colour} ${r.text} w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg shrink-0`}
                >
                  {r.rating}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-semibold text-brand-charcoal text-sm">{r.range}</span>
                    <span className="text-xs text-brand-grey">{r.desc}</span>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
          <p className="text-sm text-brand-grey">
            Properties rated F or G cannot legally be let on a new tenancy in England.
            The current legal minimum is E. The proposed minimum from 2028 for new tenancies is C.
          </p>
        </section>

        {/* Legal requirements */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            EPC legal requirements for London landlords
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            London landlords face a particularly complex compliance landscape around energy
            efficiency, with obligations imposed by three overlapping pieces of legislation.
            Understanding all three is essential before marketing a property to let.
          </p>

          <div className="space-y-6">
            <div className="bg-warm-white border border-border rounded-xl p-5">
              <h3 className="font-bold text-brand-charcoal mb-2">
                1. Energy Performance of Buildings Regulations 2012
              </h3>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed mb-2">
                Every residential property must have a valid EPC before it is marketed for sale
                or rent. The EPC must be provided free of charge to prospective tenants and must
                be attached to any written tenancy agreement. Landlords who fail to provide a
                valid EPC face a penalty charge of up to £5,000 issued by the local authority.
                The EPC must be produced by an accredited DEA assessor and lodged on the
                national register, self-certified or unregistered assessments are not valid.
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                There are no exemptions for short lets, furnished properties, or properties
                rented to family members. HMOs where individual rooms are let (rather than the
                whole property) may be exempt, but this depends on the specific tenancy
                structure. If in doubt, commissioning an EPC is the safest course of action.
              </p>
            </div>

            <div className="bg-warm-white border border-border rounded-xl p-5">
              <h3 className="font-bold text-brand-charcoal mb-2">
                2. Minimum Energy Efficiency Standards (MEES)
              </h3>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed mb-2">
                The Energy Efficiency (Private Rented Property) (England and Wales) Regulations
                2015 introduced MEES, making it unlawful to let a property rated F or G on a
                new tenancy from April 2018, and on any continuing tenancy from April 2020.
                Fines for non-compliance are up to £5,000 per property. Properties with an EPC
                rating of E are currently permitted, but landlords should plan for the proposed
                increase to C by 2028.
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Limited exemptions exist, for example, where all cost-effective improvements
                have been made and the property still cannot reach E, or where a tenant refuses
                consent for works. Exemptions must be registered on the PRS Exemptions Register
                and are valid for 5 years. London councils are actively enforcing MEES through
                proactive inspections and complaint-triggered investigations.
              </p>
            </div>

            <div className="bg-warm-white border border-border rounded-xl p-5">
              <h3 className="font-bold text-brand-charcoal mb-2">
                3. Section 21 &amp; retaliatory eviction protection
              </h3>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Under the Deregulation Act 2015, a landlord cannot serve a valid Section 21
                notice (no-fault eviction) if they have not provided the tenant with a copy of
                the EPC at the start of the tenancy. This link between EPC compliance and
                eviction rights means that many landlords who discover a missing EPC are
                unable to regain possession of their property until the EPC is obtained and
                properly served. It is therefore essential to commission an EPC before a
                tenancy begins, not as an afterthought.
              </p>
            </div>
          </div>
        </section>

        {/* How to improve EPC rating */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            How to improve your EPC rating
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Your EPC Recommendations Report lists the improvements most likely to raise your
            rating, ranked by cost-effectiveness. Below are the nine most impactful measures
            for London residential properties, together with typical costs and the rating
            improvement you can expect. All improvements are cumulative, combining several
            measures will have a larger effect than any single one.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            For London landlords targeting the proposed 2028 minimum of C, the most practical
            path for typical Victorian terraces and purpose-built flats is usually a combination
            of boiler replacement, loft insulation, and thermostat controls, which can move a
            D-rated property into band C without the expense of solid wall insulation or
            renewables.
          </p>

          <Image
            src="/epc/epc-loft-insulation-check.png"
            alt="Energy assessor measuring loft insulation depth as part of an EPC assessment"
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100%, 768px"
            className="rounded-2xl border border-border shadow-sm w-full h-56 md:h-64 object-cover mb-6"
          />

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-compliance-blue text-white">
                  <th scope="col" className="text-left px-4 py-3 font-semibold">#</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold">Improvement</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold">Typical impact</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold">Estimated cost</th>
                </tr>
              </thead>
              <tbody>
                {improvements.map((imp, i) => (
                  <tr key={imp.rank} className={i % 2 === 0 ? "bg-white" : "bg-warm-white"}>
                    <td className="px-4 py-3 text-brand-grey font-medium">{imp.rank}</td>
                    <td className="px-4 py-3 text-brand-charcoal font-medium">{imp.measure}</td>
                    <td className="px-4 py-3 text-action-green font-semibold">{imp.impact}</td>
                    <td className="px-4 py-3 text-brand-charcoal/80">{imp.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-brand-grey mt-3">
            Costs and impact estimates are indicative, actual results depend on the specific
            property. Your EPC Recommendations Report provides property-specific projections.
          </p>
        </section>

        {/* Property types */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            EPC for different London property types
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            London&apos;s housing stock is unusually diverse, and EPC ratings vary considerably
            depending on the construction era, property type, and tenure. Here is what landlords
            should expect for the most common London property types.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                type: "Victorian terraces (pre-1919)",
                rating: "Typically D–F",
                detail:
                  "Solid brick walls with no cavity mean wall insulation is the single biggest challenge. Many Victorian terraces rate E or F before improvements. Loft insulation, boiler replacement, and draught-proofing are the most cost-effective starting points.",
              },
              {
                type: "Purpose-built flats (1960s–80s)",
                rating: "Typically D–E",
                detail:
                  "Concrete construction retains heat reasonably well but older heating systems and single-glazed windows drag ratings down. Boiler upgrades and double glazing can move most 1960s flats from E to C.",
              },
              {
                type: "New build properties (post-2010)",
                rating: "Typically B–C",
                detail:
                  "New builds are required to meet Part L of the Building Regulations and almost always achieve B or C. EPCs are still legally required before marketing, new build developers lodge the initial EPC as part of the completion process.",
              },
              {
                type: "HMOs (Houses in Multiple Occupation)",
                rating: "Varies, D–G common",
                detail:
                  "HMOs with shared facilities often have lower ratings due to electric storage heaters, individual meters, and poor insulation. Communal heating controls and insulation upgrades have a significant impact. HMOs rented as a whole require a single EPC; individual room lettings may not.",
              },
              {
                type: "Converted flats (Victorian/Edwardian)",
                rating: "Typically E–F",
                detail:
                  "Flats carved from period houses often lack roof and wall insulation, and may share a heating system or have electric-only heating. These typically rate E or F and often require the most improvement work ahead of 2028 changes.",
              },
              {
                type: "Maisonettes",
                rating: "Typically D–E",
                detail:
                  "Maisonettes assessed as a single dwelling are treated similarly to terraced houses. Those with additional ground-floor heat loss or older heating systems typically sit in the D–E band.",
              },
            ].map((p) => (
              <div key={p.type} className="bg-warm-white border border-border rounded-xl p-4">
                <p className="font-semibold text-brand-charcoal mb-1 text-sm">{p.type}</p>
                <p className="text-xs text-compliance-blue font-medium mb-2">{p.rating}</p>
                <p className="text-xs text-brand-charcoal/80 leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">Pricing</h2>
          <p className="text-brand-grey mb-6">
            Fixed price by property size. Includes on-site assessment and lodgement on the national EPC register.
          </p>
          <PriceTable
            title="Domestic EPC"
            rows={DOMESTIC_EPC_TABLE}
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
            For commercial properties, see{" "}
            <Link href="/commercial-epc" className="text-compliance-blue hover:underline">
              commercial EPC pricing →
            </Link>
          </p>
        </section>

        {/* What's included */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            What&apos;s included from £{entryPrice}
          </h2>
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "30–60 min on-site assessment by accredited DEA",
              "Construction type and insulation survey",
              "Heating system and boiler efficiency assessment",
              "Hot water system and controls review",
              "A–G energy efficiency rating (SAP score)",
              "Estimated annual energy cost breakdown",
              "Recommendations Report with improvement costs",
              "Lodgement on national EPC register within 24 hours",
              "Certificate emailed directly to you",
              "Certificate valid for 10 years",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-action-green/20 text-brand-charcoal flex items-center justify-center shrink-0 text-xs font-bold">
                  ✓
                </span>
                <span className="text-sm text-brand-charcoal/80">{item}</span>
              </li>
            ))}
          </ul>
            <Image
              src="/epc/epc-sample-certificate.png"
              alt="Example of a domestic Energy Performance Certificate showing the A–G energy efficiency rating"
              width={1200}
              height={1500}
              sizes="(max-width: 768px) 100%, 280px"
              className="rounded-xl border border-border shadow-sm w-full md:w-[280px] mx-auto"
            />
          </div>
        </section>

        {/* How it works */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">How it works</h2>
          <Image
            src="/epc/epc-assessor-at-door.png"
            alt="Accredited energy assessor arriving at a London property for an EPC appointment"
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100%, 768px"
            className="rounded-2xl border border-border shadow-sm w-full h-56 md:h-72 object-cover object-[center_30%] mb-8"
          />
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

        {/* Cross-sell */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Related services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: "/eicr", label: "Domestic EICR", desc: "Legally required every 5 years for rented properties." },
              { href: "/gas-safety-certificate", label: "Gas Safety (CP12)", desc: "Annual legal requirement for gas properties." },
              { href: "/commercial-epc", label: "Commercial EPC", desc: "For offices, retail, and commercial lets." },
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

        {/* Testimonials */}
        <section className="py-10 border-b border-border">
          <div className="grid md:grid-cols-[auto_1fr] gap-6 items-center mb-8">
            <Image
              src="/epc/epc-landlord-reviewing-certificate.png"
              alt="London landlord reviewing their emailed EPC certificate at home"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100%, 300px"
              className="rounded-2xl border border-border shadow-sm w-full md:w-[300px] h-auto"
            />
            <div>
              <h2 className="text-2xl font-bold text-brand-charcoal mb-2">
                What London landlords say
              </h2>
              <a
                href={GOOGLE_BUSINESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-compliance-blue hover:underline"
              >
                <svg className="w-5 h-5" viewBox="0 0 48 48" aria-hidden="true">
                  <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
                  <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
                  <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z" />
                  <path fill="#EA4335" d="M24 9.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 3.18 29.93 1 24 1 15.4 1 7.96 5.93 4.34 13.12l7.35 5.7C13.42 13.62 18.27 9.75 24 9.75z" />
                </svg>
                Read our reviews on Google
              </a>
            </div>
          </div>
          <GoogleReviews
            fallback={
              <div className="grid md:grid-cols-3 gap-5">
                {epcReviews.map((review) => (
                  <TestimonialCard
                    key={review.author}
                    content={review.content}
                    author={review.author}
                    location={review.location}
                    service="EPC"
                    showTrustpilot
                  />
                ))}
              </div>
            }
          />
          <p className="mt-6 text-sm text-brand-grey text-center">
            Read more verified reviews from London landlords on our{" "}
            <Link href="/reviews" className="text-compliance-blue hover:underline font-medium">
              reviews page →
            </Link>
          </p>
        </section>

        {/* FAQs */}
        <section className="below-fold py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Frequently Asked Questions</h2>
          <FAQAccordion items={faqs} />
        </section>

        {/* Find us / location */}
        <section aria-labelledby="epc-map-heading" className="py-10 border-b border-border">
          <h2 id="epc-map-heading" className="text-2xl font-bold text-brand-charcoal mb-2">
            Find us
          </h2>
          <p className="text-brand-grey mb-6">
            My Landlord Certificate, 134 Merton High St, London SW19 1BA. Accredited DEA
            assessors covering all 33 London boroughs and the surrounding M25 area.
          </p>
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <iframe
              title="My Landlord Certificate, 134 Merton High St, London SW19 1BA"
              src="https://maps.google.com/maps?q=My%20Landlord%20Certificate%2C%20134%20Merton%20High%20St%2C%20London%20SW19%201BA&z=15&output=embed"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google map showing My Landlord Certificate at 134 Merton High St, London SW19 1BA"
            />
          </div>
        </section>

        {/* CTA block */}
        <section className="py-10">
          <div className="bg-compliance-blue rounded-2xl px-6 py-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Book your EPC assessment today
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Fixed price from £{entryPrice}. Accredited DEA assessors across all 33 London
              boroughs, certificate registered on the national EPC register within 24 hours.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/book?service=epc"
                className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                Book Online, from £{entryPrice}
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
        href="/book?service=epc"
        label="Book Now"
        price={entryPrice}
        serviceName="Domestic EPC"
      />
    </>
  );
}

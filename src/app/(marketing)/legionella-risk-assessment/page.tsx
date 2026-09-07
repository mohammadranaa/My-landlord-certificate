import type { Metadata } from "next";
import { LazyFAQAccordion as FAQAccordion, LazyStickyMobileCTA as StickyMobileCTA } from "@/components/lazy";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { TrustBadges } from "@/components/ui/trust-badges";
import { cn } from "@/lib/utils";
import { ADDITIONAL_CHARGES, LEGIONELLA_PRICES } from "@/lib/pricing";
import { TEL, PHONE_DISPLAY } from "@/lib/constants";
import { HeroRating } from "@/components/ui/hero-rating";
import { ReviewsBlock } from "@/components/marketing/reviews-block";

export const metadata: Metadata = {
  title: "Legionella Risk Assessment London — £299.99 | ACoP L8 Compliant",
  description:
    "Legionella risk assessments in London from £299.99. ACoP L8 and HSG274 compliant. On-site water system inspection, temperature checks, stagnation analysis, and detailed report with action plan. All 33 London boroughs and M25.",
  alternates: {
    canonical:
      "https://www.mylandlordcertificate.co.uk/legionella-risk-assessment",
  },
};

const price = LEGIONELLA_PRICES.standard;

// ── Schema ────────────────────────────────────────────────────────────────────

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Legionella Risk Assessment",
  url: "https://www.mylandlordcertificate.co.uk/legionella-risk-assessment",
  description:
    "ACoP L8 and HSG274 compliant Legionella risk assessment for landlords and commercial premises. On-site water system inspection, temperature testing, stagnation analysis, and detailed written report with action plan.",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://www.mylandlordcertificate.co.uk",
  },
  areaServed: ["London", "the M25 area"],
  offers: {
    "@type": "Offer",
    price: `${price}`,
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://www.mylandlordcertificate.co.uk/legionella-risk-assessment",
  },
};

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
      name: "Legionella Risk Assessment",
      item: "https://www.mylandlordcertificate.co.uk/legionella-risk-assessment",
    },
  ],
};

const faqItems = [
  {
    question: "How much does a legionella risk assessment cost in London?",
    answer:
      "Our legionella risk assessment is £299.99 for a standard residential or light commercial water system. This is a fixed price with no hidden charges — it covers the on-site inspection, water temperature testing at all outlets, system schematic drawing, written risk assessment report, and a prioritised action plan emailed within 48 hours. For complex systems with a large number of outlets, additional charges may apply — call us on 020 3996 1070 for a quote.",
  },
  {
    question: "Do landlords need a legionella risk assessment?",
    answer:
      "Yes. The Health and Safety Executive (HSE) considers all landlords of residential property to be 'duty holders' under the Health and Safety at Work etc. Act 1974. HSE guidance document HSG274 Part 2 and Approved Code of Practice ACoP L8 require landlords to assess the risk from Legionella bacteria in their water systems and take appropriate control measures. While a formal written assessment is not explicitly required by statute for every residential let, the HSE strongly advises one, and it is standard practice for letting agents, managing agents, and HMO licence conditions. A risk assessment is essential evidence of compliance if you are ever investigated following a Legionnaires' disease incident.",
  },
  {
    question: "How often should a legionella risk assessment be done?",
    answer:
      "ACoP L8 requires that a Legionella risk assessment is reviewed at least every two years, or sooner if there is a reason to believe the assessment may no longer be valid — for example, if the water system has been significantly altered, if the property has been vacant for an extended period (increasing stagnation risk), if there has been a case of Legionnaires' disease associated with the property, or if there has been a change in use of the building. In practice, many managing agents and HMO licence conditions require annual reassessment.",
  },
  {
    question: "What is ACoP L8?",
    answer:
      "ACoP L8 stands for Approved Code of Practice L8: 'Legionnaires' disease — The control of legionella bacteria in water systems.' It is published by the Health and Safety Executive and provides practical guidance on controlling Legionella in water systems in compliance with the Health and Safety at Work etc. Act 1974 and associated regulations. Although an Approved Code of Practice is not technically a regulation, following it provides a presumption of compliance — conversely, failing to follow it can be used as evidence of non-compliance in enforcement proceedings. ACoP L8 is the primary reference document for all UK landlords and premises managers with responsibility for water systems.",
  },
  {
    question: "What happens if legionella is found in my water system?",
    answer:
      "If our assessment identifies conditions that could support Legionella growth — or if water sampling confirms bacterial contamination — the situation is not unusual and is entirely manageable. Our report will set out a prioritised action plan covering the steps required to bring the system into compliance: these typically include a thermal disinfection regime (superheating the hot water system to kill bacteria), removing dead legs or infrequently used outlets, adjusting temperature settings, installing thermostatic mixing valves, and establishing a regular flushing and monitoring programme. We can carry out all of these remedial works — call us to discuss what is needed for your specific system.",
  },
  {
    question: "Can you carry out remedial work after the assessment?",
    answer:
      "Yes. Our team can carry out all of the remedial works identified in the risk assessment report: dead leg removal, thermostatic mixing valve (TMV) installation and servicing, hot water cylinder temperature adjustments, storage tank replacement or cleaning, flushing regime setup, and ongoing water temperature monitoring programmes. We will provide a separate quotation for any remedial works. Having the same contractor carry out both the assessment and the remedial works ensures continuity — we already have a complete schematic of your system and know exactly what needs to be done.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function LegionellaRiskAssessmentPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
      <section
        aria-labelledby="legionella-heading"
        className="bg-hero-blue text-white"
      >
        <Container className="py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-blue-200 flex-wrap">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li className="text-white font-medium">Legionella Risk Assessment</li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            ACoP L8 Compliant · HSG274 · London &amp; M25
          </p>

          <Heading level={1} id="legionella-heading" inverted className="mb-4 max-w-2xl">
            Legionella Risk Assessment London — £{price}
          </Heading>
          <HeroRating theme="dark" className="mb-5" />

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-8">
            Comprehensive water system inspection and risk assessment compliant with ACoP L8
            and HSG274. Our qualified assessors inspect cold and hot water systems, identify
            conditions that could allow Legionella bacteria to grow, and provide a detailed
            report with a prioritised action plan. Covering all 33 London boroughs and the
            M25 area.
          </p>

          <TrustBadges serviceKey="legionella-risk-assessment" variant="dark" className="mb-8" />

          <div className="flex flex-wrap gap-4">
            <Link
              href="/book"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book legionella assessment — £{price}
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
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">Fixed price</dt>
              <dd className="text-sm font-bold text-white">£{price}</dd>
            </div>
            <div className="flex flex-col gap-1 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">Standard</dt>
              <dd className="text-sm font-bold text-white">ACoP L8</dd>
            </div>
            <div className="flex flex-col gap-1 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">Report</dt>
              <dd className="text-sm font-bold text-white">Within 48 hours</dd>
            </div>
            <div className="flex flex-col gap-1 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">Frequency</dt>
              <dd className="text-sm font-bold text-white">Every 2 years</dd>
            </div>
          </dl>
        </Container>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── Pricing ── */}
        <section id="pricing" aria-labelledby="pricing-heading">
          <Heading level={2} id="pricing-heading" className="mb-2">
            Legionella risk assessment pricing
          </Heading>
          <p className="text-brand-grey mb-6">
            Fixed price. No hidden charges — the price you see is the price you pay.
          </p>

          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-compliance-blue text-white">
                  <th scope="col" className="text-left px-5 py-3 font-semibold">Service</th>
                  <th scope="col" className="text-right px-5 py-3 font-semibold">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-border">
                  <td className="px-5 py-4 text-brand-charcoal font-medium">Legionella Risk Assessment (standard system)</td>
                  <td className="px-5 py-4 text-right text-compliance-blue font-bold">£{price}</td>
                </tr>
                <tr className="bg-warm-white">
                  <td className="px-5 py-4 text-brand-charcoal/80">Additional outlets — complex systems</td>
                  <td className="px-5 py-4 text-right text-brand-grey font-medium">Call for quote</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-xl border border-border bg-warm-white p-4 text-sm text-brand-charcoal/70">
            <p className="font-medium text-brand-charcoal mb-1">Additional charges (where applicable)</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Parking charge if no free parking available:{" "}
                <strong>£{ADDITIONAL_CHARGES.parking}</strong>
              </li>
              <li>
                Congestion Charge Zone:{" "}
                <strong>£{ADDITIONAL_CHARGES.congestionZone}</strong>
              </li>
            </ul>
          </div>
        </section>

        {/* ── What is a legionella risk assessment ── */}
        <section aria-labelledby="what-is-it-heading">
          <Heading level={2} id="what-is-it-heading" className="mb-4">
            What is a legionella risk assessment?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Legionella pneumophila is a bacterium found naturally in water systems. When water
            conditions are right — particularly when water temperature sits between 20°C and
            45°C, nutrients are present, and water stagnates in dead legs, tanks, or
            infrequently used outlets — the bacteria can multiply to dangerous levels.
            Legionella is the cause of Legionnaires&apos; disease, a potentially fatal form of
            pneumonia. The bacteria are not contracted by drinking contaminated water — they
            are inhaled when contaminated water is dispersed as a fine aerosol or mist, most
            commonly by showers, taps, and cooling towers.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            A Legionella risk assessment is a systematic inspection of a building&apos;s hot and
            cold water systems to identify any conditions that could allow Legionella bacteria
            to proliferate. Our qualified assessor visits the property and carries out a
            methodical survey covering every element of the water distribution system: storage
            tanks and cylinders, hot and cold water distribution pipework, all outlets
            (including infrequently used taps and showers), dead legs and blind ends,
            thermostatic mixing valves (TMVs), and any water treatment equipment.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            During the inspection, the assessor takes temperature readings at all significant
            outlets to confirm whether the system is operating within safe parameters — cold
            water below 20°C and hot water above 50°C at the outlet within one minute of
            running. Any readings that fall outside these ranges are flagged as an immediate
            control failure. The assessor also inspects tank and cylinder conditions, checks
            for scale or biofilm that could support bacterial growth, and reviews any existing
            management procedures and maintenance records.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            The final report — emailed within 48 hours of the assessment — contains a risk
            rating for each part of the system (low, medium, or high), a schematic drawing of
            the water distribution network, a full record of temperature readings, a summary
            of all identified risk factors, and a prioritised action plan setting out exactly
            what needs to be done to achieve compliance with ACoP L8 and HSG274. Where
            remedial works are required, we can carry these out directly.
          </p>

          <div className="rounded-xl bg-amber-50 border border-brand-amber/30 p-5 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">HSE duty holder requirement: </strong>
            Under the Health and Safety at Work etc. Act 1974, landlords are duty holders
            with a legal obligation to manage the risk from Legionella bacteria in the water
            systems of properties they control. The HSE&apos;s Approved Code of Practice ACoP L8
            sets out the required approach. A written risk assessment is the starting point
            for all Legionella control — without one, a duty holder cannot demonstrate that
            they have identified and managed the risk.
          </div>
        </section>

        {/* ── Which water systems we inspect ── */}
        <section aria-labelledby="systems-heading">
          <Heading level={2} id="systems-heading" className="mb-4">
            Which water systems we inspect
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Our assessors inspect every element of the building&apos;s water system that could
            present a Legionella risk. The scope of inspection covers both the distribution
            network and the individual outlets, with particular attention given to areas most
            likely to support bacterial growth.
          </p>

          <ul className="grid sm:grid-cols-2 gap-3 mb-6">
            {[
              {
                label: "Hot and cold water distribution systems",
                detail:
                  "The entire distribution network from the incoming main or storage tank to all outlets, including all pipework, valves, and fittings that could harbour stagnant water or biofilm.",
              },
              {
                label: "Water storage tanks and cylinders",
                detail:
                  "Cold water storage tanks and hot water cylinders are inspected for condition, insulation, temperature stratification, debris, and biofilm. Tank lids, overflows, and inlets are all checked.",
              },
              {
                label: "Showers — the highest-risk outlet",
                detail:
                  "Showers generate fine aerosols and are the most common route of Legionella transmission in residential and commercial settings. Shower heads, hoses, and flow regulators are inspected for scale, biofilm, and debris.",
              },
              {
                label: "Taps and infrequently used outlets",
                detail:
                  "Infrequently used taps — in guest bathrooms, utility rooms, or vacant units — allow water to stagnate at dangerous temperatures. All outlets are tested, not just the main ones.",
              },
              {
                label: "Dead legs and blind ends",
                detail:
                  "Redundant or capped-off pipework creates dead legs where water sits permanently stagnant. These are among the highest-risk features in any system and are flagged for removal.",
              },
              {
                label: "Thermostatic mixing valves (TMVs)",
                detail:
                  "TMVs blend hot and cold water to a safe outlet temperature but operate within the danger zone for Legionella. They require regular inspection, servicing, and temperature checking.",
              },
              {
                label: "Cooling towers and evaporative condensers",
                detail:
                  "Typically commercial. These systems create large volumes of aerosol and carry the highest risk for large-scale Legionella outbreaks. Assessment follows HSG274 Part 1.",
              },
              {
                label: "Water softeners and filters",
                detail:
                  "Water treatment equipment can harbour bacteria if not maintained correctly. Softeners and filters are checked for condition, backwash frequency, and bypass arrangements.",
              },
            ].map((item) => (
              <li
                key={item.label}
                className="flex items-start gap-3 rounded-xl border border-border bg-warm-white p-4"
              >
                <span className="mt-0.5 w-5 h-5 rounded-full bg-compliance-blue/10 text-compliance-blue flex items-center justify-center shrink-0 text-xs font-bold">
                  ✓
                </span>
                <div>
                  <p className="font-semibold text-brand-charcoal text-sm mb-0.5">{item.label}</p>
                  <p className="text-xs text-brand-grey leading-relaxed">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Who needs a legionella risk assessment ── */}
        <section aria-labelledby="who-needs-heading">
          <Heading level={2} id="who-needs-heading" className="mb-4">
            Who needs a legionella risk assessment?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            The HSE is clear: anyone who has control over premises — or the water systems
            within them — is a duty holder under the Health and Safety at Work etc. Act 1974
            and has a legal obligation to assess and control Legionella risks. This applies
            broadly and includes almost every type of landlord and building operator.
          </p>

          <div className="space-y-4 mb-6">
            <div className="rounded-xl border border-border p-5">
              <p className="font-semibold text-brand-charcoal mb-1">Residential landlords — all rented properties</p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                The HSE&apos;s guidance HSG274 Part 2 makes clear that residential landlords are
                duty holders and must assess the Legionella risk in properties they let.
                This applies to all rented residential property — single lets, shared houses,
                and flats — regardless of size. The duty cannot be delegated to the tenant.
                While a full written assessment may not be required for every simple domestic
                property with a straightforward system, landlords must still carry out and
                record a risk assessment, and any property with a complex system, storage
                tanks, or multiple shower points requires a formal assessment.
              </p>
            </div>

            <div className="rounded-xl border border-border p-5">
              <p className="font-semibold text-brand-charcoal mb-1">HMO landlords — particularly high risk</p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Houses in Multiple Occupation present a significantly elevated Legionella risk.
                Multiple shower systems, shared bathrooms, shared kitchens, and higher occupancy
                density all increase exposure potential. HMOs frequently have more complex water
                systems with multiple distribution branches, and the transient nature of HMO
                tenancies means that infrequent use of some outlets — particularly between
                tenancies — creates stagnation risks. Most London local authorities now require
                evidence of a current Legionella risk assessment as a condition of HMO licence
                renewal.
              </p>
            </div>

            <div className="rounded-xl border border-border p-5">
              <p className="font-semibold text-brand-charcoal mb-1">Commercial premises</p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Offices, retail units, warehouses, and workshops with water systems including
                showers, kitchens, or cooling towers all require a formal Legionella risk
                assessment. The duty under ACoP L8 applies to the employer or person in control
                of the premises. Regular risk assessments are also required as a condition of
                most commercial property insurance policies and are frequently requested as part
                of lease due diligence.
              </p>
            </div>

            <div className="rounded-xl border border-border p-5">
              <p className="font-semibold text-brand-charcoal mb-1">Hotels, B&Bs, and serviced accommodation</p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                Hotels and short-let serviced apartments have complex water systems that are
                used intermittently by different people. Showers are a particular risk, and the
                high volume of guests sharing water systems makes regular assessment and
                monitoring essential. Local authority environmental health officers routinely
                inspect hotels for Legionella control plans.
              </p>
            </div>

            <div className="rounded-xl border border-border p-5">
              <p className="font-semibold text-brand-charcoal mb-1">Schools, care homes, and healthcare facilities</p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                These facilities have the most vulnerable occupants — elderly residents, children,
                and immunocompromised patients — who face the greatest risk of severe illness
                from Legionnaires&apos; disease. Ofsted and CQC inspections can include checks on
                Legionella control procedures. Formal written assessments and ongoing water
                temperature monitoring programmes are essential for all such premises.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-compliance-blue/5 border border-compliance-blue/20 p-4 text-sm text-brand-charcoal/80">
            <strong className="text-compliance-blue">Duty holder status: </strong>
            The HSE considers landlords to be duty holders under the Health and Safety at
            Work etc. Act 1974 and the Control of Substances Hazardous to Health (COSHH)
            Regulations 2002. ACoP L8 confirms this duty explicitly. Failure to carry out
            a Legionella risk assessment — particularly where a tenant or guest contracts
            Legionnaires&apos; disease — can result in unlimited fines and criminal prosecution.
          </div>
        </section>

        {/* ── Legal requirements ── */}
        <section aria-labelledby="legal-heading">
          <Heading level={2} id="legal-heading" className="mb-4">
            Legionella legal requirements
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            The legal framework for Legionella control in the UK draws on several overlapping
            pieces of legislation and guidance. Understanding each is essential for landlords
            and building operators who need to demonstrate compliance.
          </p>

          <div className="space-y-4 mb-6">
            <div className="rounded-xl border border-border bg-warm-white p-5">
              <p className="font-semibold text-brand-charcoal mb-2">
                Health and Safety at Work etc. Act 1974
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                The primary piece of legislation. Section 3 creates a duty for those who
                control non-domestic premises (including landlords of residential property)
                to ensure that persons not in their employment — i.e., tenants and visitors
                — are not exposed to health risks. The HSE has confirmed that Legionella
                bacteria in water systems is a health risk that falls squarely within this
                duty. Failure to assess and control this risk is a breach of the Act and
                can result in prosecution, unlimited fines, and up to two years&apos; imprisonment
                for serious breaches involving loss of life.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-warm-white p-5">
              <p className="font-semibold text-brand-charcoal mb-2">
                ACoP L8: Legionnaires&apos; disease — The control of legionella bacteria in water
                systems
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                ACoP L8 is the Approved Code of Practice published by the HSE under the
                Health and Safety at Work Act. It sets out the specific requirements for
                identifying and controlling Legionella risks in all water systems. Although
                technically guidance rather than law, following ACoP L8 provides a presumption
                of legal compliance — and failure to follow it can be used as evidence of
                non-compliance in enforcement proceedings. ACoP L8 requires: a written risk
                assessment by a competent person; implementation of a documented control
                scheme; appointment of a responsible person; and records of all monitoring
                and maintenance activities.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-warm-white p-5">
              <p className="font-semibold text-brand-charcoal mb-2">
                HSG274 Part 2: The control of legionella bacteria in hot and cold water
                systems
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                HSG274 is the HSE&apos;s technical guidance document that supplements ACoP L8.
                Part 2 covers hot and cold water systems specifically and is the primary
                reference for domestic and commercial water systems in rented properties.
                It sets specific temperature parameters — cold water below 20°C, hot water
                above 60°C in the storage cylinder and above 50°C at the outlet within one
                minute — and provides detailed guidance on risk assessment methodology,
                control measures, and monitoring regimes.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-warm-white p-5">
              <p className="font-semibold text-brand-charcoal mb-2">
                COSHH Regulations 2002
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                The Control of Substances Hazardous to Health (COSHH) Regulations 2002
                require employers and duty holders to prevent or adequately control exposure
                to substances hazardous to health. The HSE has confirmed that Legionella
                bacteria are a substance hazardous to health within the meaning of COSHH.
                This means that the risk assessment required under COSHH overlaps with the
                Legionella risk assessment required under ACoP L8 — and a properly conducted
                Legionella risk assessment discharges both duties.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-warm-white p-5">
              <p className="font-semibold text-brand-charcoal mb-2">
                Housing Act 2004 — Housing Health and Safety Rating System (HHSRS)
              </p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                The Housing Health and Safety Rating System (HHSRS) introduced by the Housing
                Act 2004 lists 29 categories of housing hazard, of which Legionella is one.
                Local authorities can inspect rented properties and take enforcement action
                where they identify a Legionella hazard — including serving an improvement
                notice, a prohibition order, or carrying out works in default at the
                landlord&apos;s expense. An up-to-date Legionella risk assessment with a documented
                control scheme is the primary evidence a landlord can produce to demonstrate
                that the risk has been managed.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-amber-50 border border-brand-amber/30 p-4 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Penalties: </strong>
            Serious Legionella compliance breaches — particularly where illness or death
            results — can attract unlimited fines and up to two years&apos; imprisonment under
            the Health and Safety at Work etc. Act 1974. The HSE actively investigates
            all confirmed cases of Legionnaires&apos; disease and will examine the duty holder&apos;s
            risk assessment and control records as the first step of any investigation.
          </div>
        </section>

        {/* ── What happens after the assessment ── */}
        <section aria-labelledby="after-heading">
          <Heading level={2} id="after-heading" className="mb-4">
            What happens after the assessment
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            The assessment is just the first step in an ongoing Legionella control programme.
            Here is what you receive and what happens next.
          </p>

          <ol className="space-y-6 mb-6" role="list">
            {[
              {
                step: "1",
                title: "Report emailed within 48 hours",
                body: "Your full Legionella risk assessment report is emailed to you within 48 hours of the site visit. The report is written to comply with ACoP L8 and HSG274 and will be accepted by local authority officers, HMO licensing teams, and insurers as evidence of compliance.",
              },
              {
                step: "2",
                title: "System schematic included",
                body: "The report includes a schematic drawing of your water system showing all significant components — storage tanks, cylinders, distribution branches, outlets, TMVs, and any dead legs or blind ends identified. This is an essential reference document for ongoing management and future assessments.",
              },
              {
                step: "3",
                title: "Temperature monitoring results",
                body: "All temperature readings taken during the assessment are recorded in the report against the ACoP L8 parameters. Any readings that fall outside acceptable ranges are highlighted as control failures requiring immediate remedial action.",
              },
              {
                step: "4",
                title: "Risk rating for each system component",
                body: "Every part of the system is given a risk rating — low, medium, or high — based on the likelihood of Legionella growth and the potential for occupant exposure. This prioritises where action is needed first.",
              },
              {
                step: "5",
                title: "Prioritised action plan",
                body: "The action plan sets out every corrective measure required, prioritised by urgency: immediate actions (control failures requiring immediate attention), short-term actions (to be completed within a defined timeframe), and ongoing maintenance requirements (flushing schedules, temperature monitoring, and reassessment dates).",
              },
            ].map(({ step, title, body }) => (
              <li key={step} className="flex gap-5">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-compliance-blue text-white flex items-center justify-center font-bold text-sm">
                  {step}
                </span>
                <div>
                  <p className="font-semibold text-brand-charcoal mb-1">{title}</p>
                  <p className="text-brand-charcoal/80 text-sm leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="rounded-xl border border-border bg-warm-white p-5">
            <p className="font-semibold text-brand-charcoal mb-2">We can carry out remedial work</p>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed mb-3">
              Where the assessment identifies remedial works, we can carry these out directly.
              Our team covers: dead leg removal and redundant pipework isolation; thermostatic
              mixing valve (TMV) installation and annual servicing; hot water cylinder
              temperature adjustment and thermostat replacement; cold water storage tank
              replacement, cleaning, and insulation; thermal disinfection (superheating)
              to kill existing bacteria; and flushing regime setup with a documented
              monitoring log.
            </p>
            <a
              href={TEL}
              className="inline-flex items-center text-sm font-semibold text-compliance-blue hover:underline"
            >
              Call {PHONE_DISPLAY} to discuss remedial works →
            </a>
          </div>
        </section>

        {/* ── Cross-sell ── */}
        <section aria-labelledby="related-heading">
          <Heading level={2} id="related-heading" className="mb-4">
            Other compliance certificates you may need
          </Heading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "EICR Certificate", href: "/eicr", price: "from £67.99" },
              { label: "Gas Safety (CP12)", href: "/gas-safety-certificate", price: "from £49.99" },
              { label: "Fire Risk Assessment", href: "/fire-risk-assessment", price: "from £74" },
              { label: "Asbestos Survey", href: "/asbestos-survey", price: "from £239.99" },
              { label: "EPC Certificate", href: "/epc", price: "from £89.99" },
              { label: "PAT Testing", href: "/pat-testing", price: "from £59.99" },
            ].map(({ label, href, price: p }) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-border bg-warm-white p-4 hover:border-compliance-blue transition-colors block"
              >
                <p className="font-semibold text-brand-charcoal text-sm mb-1">{label}</p>
                <p className="text-compliance-blue text-sm font-medium">{p}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── FAQs ── */}
        <section aria-labelledby="faq-heading" className="below-fold">
          <Heading level={2} id="faq-heading" className="mb-6">
            Legionella risk assessment — frequently asked questions
          </Heading>
          <FAQAccordion items={faqItems} includeSchema={false} />
        </section>

        {/* ── CTA ── */}
        <section
          aria-labelledby="cta-heading"
          className="rounded-2xl bg-compliance-blue px-8 py-10 text-center text-white"
        >
          <Heading level={2} id="cta-heading" inverted className="mb-2">
            Book your legionella risk assessment
          </Heading>
          <p className="text-blue-200 mb-6 max-w-md mx-auto">
            Fixed price £{price}. ACoP L8 compliant report emailed within 48 hours.
            All 33 London boroughs and the M25 area covered.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/book"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book now — £{price}
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
          <p className="mt-4 text-xs text-blue-100">
            No hidden charges. ACoP L8 compliant. Report within 48 hours.
          </p>
        </section>
      </div>

      <ReviewsBlock />

      <StickyMobileCTA
        href="/book"
        label="Book Assessment"
        price={price}
        serviceName="Legionella Risk Assessment"
      />
    </>
  );
}

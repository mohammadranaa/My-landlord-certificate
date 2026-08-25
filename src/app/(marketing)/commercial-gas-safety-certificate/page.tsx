import type { Metadata } from "next";
import { LazyFAQAccordion as FAQAccordion, LazyStickyMobileCTA as StickyMobileCTA } from "@/components/lazy";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { TrustBadges } from "@/components/ui/trust-badges";
import { HeroRating } from "@/components/ui/hero-rating";
import { ReviewsBlock } from "@/components/marketing/reviews-block";
import { cn } from "@/lib/utils";
import {
  ADDITIONAL_CHARGES,
  GAS_SAFETY_CP42_TABLE,
} from "@/lib/pricing";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Commercial Gas Safety Certificate CP42 from £159.99",
  description:
    "Commercial Gas Safety Certificate (CP42) from £159.99. Gas Safe registered engineers. Annual certification for commercial premises across London.",
  alternates: {
    canonical:
      "https://www.mylandlordcertificate.co.uk/commercial-gas-safety-certificate",
  },
  openGraph: {
    title:
      "Commercial Gas Safety Certificate CP42 from £159.99 | My Landlord Certificate",
    description:
      "Commercial Gas Safety Certificate (CP42) from £159.99. Gas Safe registered engineers covering all London boroughs. Annual certification for commercial premises.",
    url: "https://www.mylandlordcertificate.co.uk/commercial-gas-safety-certificate",
  },
};

// ── Data ──────────────────────────────────────────────────────────────────────

const entryPrice = GAS_SAFETY_CP42_TABLE[0].price;

// ── Schema ────────────────────────────────────────────────────────────────────

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Gas Safety Certificate (CP42)",
  url: "https://www.mylandlordcertificate.co.uk/commercial-gas-safety-certificate",
  description:
    "Commercial Gas Safety Certificate (CP42) for non-domestic premises including commercial landlords, offices, restaurants, and care homes. Gas Safe registered engineers. Annual inspection and certificate issued within 24 hours.",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://www.mylandlordcertificate.co.uk",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "76",
      reviewCount: "76",
    },
  },
  areaServed: ["London", "the M25 area"],
  offers: {
    "@type": "Offer",
    price: `${entryPrice}`,
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://www.mylandlordcertificate.co.uk/commercial-gas-safety-certificate",
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
      name: "Gas Safety Certificate",
      item: "https://www.mylandlordcertificate.co.uk/gas-safety-certificate",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Commercial Gas Safety (CP42)",
      item: "https://www.mylandlordcertificate.co.uk/commercial-gas-safety-certificate",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a CP42 Commercial Gas Safety Certificate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A CP42 is the commercial equivalent of the domestic CP12 Gas Safety Certificate. It is a formal safety check of gas appliances and pipework in non-domestic premises — such as offices, restaurants, care homes, and commercial landlord properties — carried out by a Gas Safe registered engineer with the relevant commercial gas competencies. The engineer issues a written certificate confirming that each appliance is safe to use.",
      },
    },
    {
      "@type": "Question",
      name: "Who needs a CP42 rather than a CP12?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A CP42 is required for any non-domestic premises where gas appliances are present. This includes commercial landlords letting retail units, offices, or warehouses; restaurants and catering businesses; care homes; mixed-use buildings where the ground floor is commercial; and HMO blocks where common-area gas appliances are non-domestic. The CP12 certificate applies only to domestic dwellings. Using a CP12 engineer for commercial appliances is non-compliant.",
      },
    },
    {
      "@type": "Question",
      name: "How often is a commercial gas safety check required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Gas Safety (Installation and Use) Regulations 1998 require commercial landlords to arrange an annual gas safety check on all gas appliances and flues in their premises. The check must be carried out by a Gas Safe registered engineer with the appropriate commercial gas competencies, and a CP42 certificate must be issued for each appliance inspected.",
      },
    },
    {
      "@type": "Question",
      name: "What does a CP42 cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A CP42 covers: visual inspection and safety check of each commercial gas appliance; verification of adequate ventilation and air supply; flue integrity checks and spillage testing; gas rate and pressure verification; examination of burners, ignition systems, and safety controls; and a check for gas soundness in the pipework serving each appliance. Each appliance is individually assessed and recorded on the CP42 certificate.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if a commercial gas appliance fails the safety check?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If an appliance is found to be immediately dangerous (ID), the engineer will advise it must be taken out of service immediately and must not be used until it has been repaired or replaced. If an appliance is at risk (AR), the engineer will advise that it should be repaired promptly. The CP42 certificate will record the status of each appliance. Appliances that are not immediately dangerous but need attention are noted, and a follow-up inspection certificate can be issued once repairs are complete.",
      },
    },
  ],
};

// ── FAQ items ─────────────────────────────────────────────────────────────────

const faqItems = [
  {
    question: "What is a CP42 Commercial Gas Safety Certificate?",
    answer:
      "A CP42 is the commercial equivalent of the domestic CP12 Gas Safety Certificate. It is a formal safety inspection of gas appliances and associated pipework and flues in non-domestic premises, carried out by a Gas Safe registered engineer holding the relevant commercial gas competency. Each appliance is individually assessed and, where it passes, a CP42 certificate is issued confirming it is safe to operate. Where an appliance is found to be immediately dangerous, the engineer will advise that it must be taken out of service.",
  },
  {
    question: "Who needs a CP42 rather than a CP12?",
    answer:
      "A CP42 is required for any non-domestic premises where gas appliances are present. This includes commercial landlords letting offices, retail units, warehouses, and business premises; restaurant and catering businesses using commercial gas cooking equipment; care homes with gas heating or cooking appliances; and mixed-use or HMO buildings where communal gas appliances are classified as non-domestic. The CP12 certificate is strictly for domestic dwellings. A Gas Safe engineer registered only for domestic gas work is not qualified to inspect commercial gas appliances — doing so would be non-compliant with the Gas Safety Regulations.",
  },
  {
    question: "How often is a commercial gas safety check required?",
    answer:
      "The Gas Safety (Installation and Use) Regulations 1998 require commercial landlords to arrange a gas safety check on all gas appliances and flues annually. Each check must be carried out by a Gas Safe registered engineer holding the relevant commercial gas competencies, and a CP42 certificate must be produced and retained for each appliance inspected. Copies should be provided to the occupying tenant within 28 days of the inspection, or before a new tenancy begins. Failure to hold a valid CP42 certificate is a criminal offence.",
  },
  {
    question: "What does a commercial gas safety check cover?",
    answer:
      "A CP42 inspection covers a thorough check of every gas appliance on the premises: visual inspection of the appliance body, burners, controls, and ignition system; verification of adequate ventilation and air supply to the appliance; flue integrity checks and combustion spillage testing; gas rate and pressure measurements against manufacturer specifications; examination of thermostats, flame failure devices, and safety interlocks; and a tightness test of the gas pipework serving each appliance. Every appliance is individually recorded on the CP42 certificate with its result.",
  },
  {
    question: "What happens if an appliance fails the safety check?",
    answer:
      "Appliances are classified as safe to use, at risk (AR — use with caution, repair required), or immediately dangerous (ID — must be taken out of service without delay). Where an appliance is immediately dangerous, the engineer will advise the responsible person that it must not be operated until it has been repaired or replaced and retested. The CP42 certificate records the status of every appliance inspected. Our engineers can advise on repair options at the time of the inspection, and a re-inspection certificate can be issued once remedial work is complete.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CommercialGasSafetyCertificatePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
      <section
        aria-labelledby="cp42-heading"
        className="bg-hero-blue text-white"
      >
        <Container className="py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-blue-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li>
                <Link
                  href="/gas-safety-certificate"
                  className="hover:text-white transition-colors"
                >
                  Gas Safety Certificate
                </Link>
              </li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li className="text-white font-medium">Commercial Gas Safety (CP42)</li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            Commercial Gas Safety Certificate · CP42 · Gas Safe Registered · Annual Certification
          </p>

          <Heading level={1} id="cp42-heading" inverted className="mb-4 max-w-2xl">
            Commercial Gas Safety Certificate (CP42) — from £{entryPrice}
          </Heading>
          <HeroRating theme="dark" className="mb-5" />

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-6">
            Annual commercial gas safety check and CP42 certificate for non-domestic
            premises. From £{entryPrice} for a single gas appliance. Gas Safe registered
            engineers with commercial gas competencies. Certificate issued within 24 hours.
          </p>

          <PriceDisplay
            price={entryPrice}
            from
            size="lg"
            className="mb-8 [&>span:first-child]:text-blue-100 [&>span:last-child]:text-white"
          />

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/book?service=gas-safety-cp42&type=commercial"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book CP42 Certificate — from £{entryPrice}
            </Link>
            <a
              href="#pricing"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white/10 border border-white/30 text-white hover:bg-white/20",
              )}
            >
              See full pricing
            </a>
          </div>

          <TrustBadges serviceKey="gas-safety-cp42" variant="dark" />
        </Container>
      </section>

      {/* ── Quick stats bar ── */}
      <div className="bg-spec-bar text-sm py-5 border-t-2 border-action-green">
        <Container>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-5 text-center [&>*:last-child:nth-child(odd)]:col-span-2 md:flex md:flex-wrap md:items-center md:justify-center md:gap-y-3 md:text-left text-white/70">
            <div className="flex flex-col gap-1 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">From</dt>
              <dd className="text-sm font-bold text-white">£{entryPrice}</dd>
            </div>
            <div className="flex flex-col gap-1 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">Required</dt>
              <dd className="text-sm font-bold text-white">annually</dd>
            </div>
            <div className="flex flex-col gap-1 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">Certificate</dt>
              <dd className="text-sm font-bold text-white">issued within 24 hours</dd>
            </div>
            <div className="flex flex-col gap-1 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">Accreditation</dt>
              <dd className="text-sm font-bold text-white">Gas Safe Registered</dd>
            </div>
          </dl>
        </Container>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── What is CP42 ── */}
        <section id="what-is-it" aria-labelledby="what-is-it-heading">
          <Heading level={2} id="what-is-it-heading" className="mb-4">
            What is a CP42 Commercial Gas Safety Certificate?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            A CP42 is the commercial equivalent of the domestic CP12 Gas Safety Certificate.
            It is a formal safety inspection of every gas appliance, flue, and associated
            pipework in a non-domestic premises, carried out by a Gas Safe registered engineer
            holding the relevant commercial gas competencies. The engineer checks each appliance
            against current gas safety standards and manufacturer specifications, then issues a
            written CP42 certificate for each appliance that passes the safety check.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            The CP42 standard applies to a wide range of commercial gas appliances — commercial
            boilers and heating systems, gas-fired catering equipment (ranges, griddles, fryers,
            steamers, ovens), warm air heaters, gas fires in communal areas, and any other
            non-domestic gas appliance. Each appliance type requires a Gas Safe engineer with
            the relevant appliance-specific competency, which is why commercial gas safety
            checks cannot be carried out by engineers registered only for domestic gas work.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Our engineers hold Gas Safe registration with commercial gas and catering appliance
            competencies and operate across all 33 London boroughs, including the City of London.
            Every CP42 certificate is produced digitally and emailed to you within 24 hours as
            the inspection.
          </p>
          <div className="rounded-xl bg-amber-50 border border-brand-amber/30 p-5 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Legal requirement: </strong>
            The Gas Safety (Installation and Use) Regulations 1998 require commercial landlords
            to ensure all gas appliances, flues, and pipework under their control are maintained
            in a safe condition and inspected annually by a Gas Safe registered engineer.
            Failure to hold a valid CP42 certificate is a criminal offence carrying an unlimited
            fine and up to two years imprisonment.
          </div>
        </section>

        {/* ── CP42 vs CP12 ── */}
        <section aria-labelledby="cp42-vs-cp12-heading">
          <Heading level={2} id="cp42-vs-cp12-heading" className="mb-4">
            CP42 vs CP12 — what is the difference?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            Both the CP12 and the CP42 are Gas Safety Certificates issued under the Gas Safety
            (Installation and Use) Regulations 1998, but they apply to fundamentally different
            types of premises and appliances.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-xl overflow-hidden border border-border text-sm">
              <thead>
                <tr className="bg-hero-blue text-white">
                  <th scope="col" className="px-5 py-3 text-left font-semibold">Feature</th>
                  <th scope="col" className="px-5 py-3 text-left font-semibold">CP12 (Domestic)</th>
                  <th scope="col" className="px-5 py-3 text-left font-semibold">CP42 (Commercial)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Premises type",
                    cp12: "Domestic dwellings — houses, flats, HMOs",
                    cp42: "Non-domestic — offices, restaurants, commercial landlord properties",
                  },
                  {
                    feature: "Appliances covered",
                    cp12: "Domestic boilers, gas fires, cookers, hobs",
                    cp42: "Commercial boilers, catering equipment, warm air heaters, gas fires in communal areas",
                  },
                  {
                    feature: "Engineer requirement",
                    cp12: "Gas Safe registered — domestic gas competencies",
                    cp42: "Gas Safe registered — commercial gas and relevant appliance competencies",
                  },
                  {
                    feature: "Frequency",
                    cp12: "Annual",
                    cp42: "Annual",
                  },
                  {
                    feature: "Legal basis",
                    cp12: "Gas Safety Regulations 1998 (domestic)",
                    cp42: "Gas Safety Regulations 1998 (non-domestic)",
                  },
                ].map(({ feature, cp12, cp42 }, i) => (
                  <tr
                    key={feature}
                    className={i % 2 === 0 ? "bg-warm-white" : "bg-white"}
                  >
                    <td className="px-5 py-3 font-medium text-brand-charcoal border-b border-border">{feature}</td>
                    <td className="px-5 py-3 text-brand-charcoal/70 border-b border-border">{cp12}</td>
                    <td className="px-5 py-3 text-brand-charcoal/70 border-b border-border">{cp42}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-brand-charcoal/70">
            If your property is a residential dwelling — a house, flat, or HMO — you need
            a{" "}
            <Link href="/gas-safety-certificate" className="text-compliance-blue hover:underline font-medium">
              CP12 Gas Safety Certificate
            </Link>
            {" "}rather than a CP42.
          </p>
        </section>

        {/* ── What is inspected ── */}
        <section aria-labelledby="inspected-heading">
          <Heading level={2} id="inspected-heading" className="mb-4">
            What does a commercial gas safety check cover?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            Our Gas Safe engineers carry out a thorough, appliance-by-appliance inspection and
            safety check. For each gas appliance on the premises, the engineer checks:
          </p>
          <ul className="space-y-3 mb-5" role="list">
            {[
              "Visual inspection of the appliance body, casing, burners, and controls for signs of damage, deterioration, or unsafe modification",
              "Verification that ventilation and air supply meet current requirements for the appliance type and installation environment",
              "Flue integrity check — inspection of the flue, terminal, and any joints or connections for soundness and correct installation",
              "Combustion spillage test — checking that combustion products are safely evacuated and not spilling into the occupied space",
              "Gas rate measurement — verifying that the gas consumption matches the manufacturer's design specification",
              "Gas pressure check at the appliance inlet to confirm adequate supply pressure",
              "Examination of the ignition system, flame failure device, and all safety interlocks",
              "Tightness test of the gas pipework serving each appliance",
              "Classification of each appliance as safe to use, at risk (AR), or immediately dangerous (ID)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-action-green/15 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-action-green"
                    fill="none"
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-brand-charcoal/80 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" aria-labelledby="pricing-heading">
          <Heading level={2} id="pricing-heading" className="mb-2">
            CP42 pricing
          </Heading>
          <p className="text-brand-grey mb-6">
            Fixed pricing by number of gas appliances. No call-out charges. A single
            commercial kitchen may have multiple appliances — select the count that
            matches your premises.
          </p>

          <PriceTable
            title="Commercial Gas Safety Certificate (CP42) — price by appliance count"
            rows={GAS_SAFETY_CP42_TABLE}
            highlightCheapest
          />

          <div className="mt-4 rounded-xl border border-border bg-warm-white p-4 text-sm text-brand-charcoal/70">
            <p className="font-medium text-brand-charcoal mb-1">
              Additional charges (where applicable)
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Parking charge if no free parking on site:{" "}
                <strong>£{ADDITIONAL_CHARGES.parking}</strong>
              </li>
              <li>
                Congestion Charge Zone:{" "}
                <strong>£{ADDITIONAL_CHARGES.congestionZone}</strong>
              </li>
            </ul>
          </div>

          <p className="mt-4 text-sm text-brand-grey">
            Need a domestic Gas Safety Certificate (CP12) instead?{" "}
            <Link
              href="/gas-safety-certificate"
              className="text-compliance-blue hover:underline font-medium"
            >
              View CP12 pricing →
            </Link>
          </p>
          <p className="mt-2 text-sm text-brand-grey">
            Comparing all certificate prices?{" "}
            <Link href="/pricing" className="text-compliance-blue hover:underline font-medium">
              View our complete pricing page →
            </Link>
          </p>
        </section>

        {/* ── What's included ── */}
        <section aria-labelledby="included-heading">
          <Heading level={2} id="included-heading" className="mb-4">
            {"What's included for £"}{entryPrice}
          </Heading>
          <ul className="space-y-3" role="list">
            {[
              "Full safety inspection of 1 commercial gas appliance",
              "Ventilation and air supply verification",
              "Flue integrity and combustion spillage test",
              "Gas rate and pressure measurement",
              "Ignition, flame failure, and safety interlock checks",
              "Gas pipework tightness test",
              "Appliance classification (safe / at risk / immediately dangerous)",
              "Written CP42 certificate emailed within 24 hours",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-action-green/15 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-action-green"
                    fill="none"
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-brand-charcoal/80">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── How it works ── */}
        <section aria-labelledby="how-it-works-heading">
          <Heading level={2} id="how-it-works-heading" className="mb-6">
            How it works
          </Heading>
          <ol className="space-y-6" role="list">
            {[
              {
                step: "1",
                title: "Book online",
                body: "Select your appliance count, choose a date that suits your business, and pay securely. Booking takes under 3 minutes. You receive a confirmation email immediately.",
              },
              {
                step: "2",
                title: "Gas Safe engineer visits",
                body: "A Gas Safe registered engineer with commercial gas competencies arrives at the agreed time. They carry out a full safety inspection and test of every gas appliance on site. You or a nominated keyholder can provide access.",
              },
              {
                step: "3",
                title: "CP42 certificate issued within 24 hours",
                body: "Your CP42 Commercial Gas Safety Certificate is completed and emailed to you in PDF format on within 24 hours of the inspection. Keep a copy on site and provide one to your tenant within 28 days where required by the Regulations.",
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
        </section>

        {/* ── FAQs ── */}
        <section aria-labelledby="faq-heading" className="below-fold">
          <Heading level={2} id="faq-heading" className="mb-6">
            CP42 — frequently asked questions
          </Heading>
          <FAQAccordion items={faqItems} includeSchema={false} />
        </section>

        {/* ── Related services ── */}
        <section aria-labelledby="related-heading">
          <Heading level={2} id="related-heading" className="mb-4">
            Related compliance services
          </Heading>
          <p className="text-brand-charcoal/80 mb-5 text-sm leading-relaxed">
            Commercial premises often require a{" "}
            <Link href="/commercial-eicr" className="text-compliance-blue hover:underline font-medium">
              Commercial EICR
            </Link>{" "}
            alongside a CP42, and may also need a{" "}
            <Link href="/fire-risk-assessment" className="text-compliance-blue hover:underline font-medium">
              Fire Risk Assessment
            </Link>
            . For residential lets, the domestic{" "}
            <Link href="/gas-safety-certificate" className="text-compliance-blue hover:underline font-medium">
              Gas Safety Certificate (CP12)
            </Link>{" "}
            applies.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                label: "Gas Safety Certificate (CP12)",
                href: "/gas-safety-certificate",
                price: "from £49.99",
              },
              {
                label: "Commercial EICR",
                href: "/commercial-eicr",
                price: "from £149.99",
              },
              {
                label: "Fire Risk Assessment",
                href: "/fire-risk-assessment",
                price: "from £74.99",
              },
              {
                label: "Domestic EICR",
                href: "/eicr",
                price: "from £67.99",
              },
              {
                label: "Book now",
                href: "/book",
                price: "All services",
              },
            ].map(({ label, href, price }) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-border bg-warm-white p-4 hover:border-compliance-blue transition-colors block"
              >
                <p className="font-semibold text-brand-charcoal text-sm mb-1">{label}</p>
                <p className="text-compliance-blue text-sm font-medium">{price}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          aria-labelledby="cta-heading"
          className="rounded-2xl bg-compliance-blue px-8 py-10 text-center text-white"
        >
          <Heading level={2} id="cta-heading" inverted className="mb-2">
            Ready to book a CP42 certificate?
          </Heading>
          <p className="text-blue-200 mb-6 max-w-md mx-auto">
            Book online in under 3 minutes. A Gas Safe registered commercial engineer
            will be in touch to confirm your appointment slot. From £{entryPrice} for
            one appliance — certificate emailed within 24 hours.
          </p>
          <Link
            href="/book?service=gas-safety-cp42&type=commercial"
            className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
          >
            Book CP42 Certificate — from £{entryPrice}
          </Link>
          <p className="mt-4 text-xs text-blue-100">
            Fixed pricing. No hidden charges. Certificate within 24 hours.
          </p>
        </section>
      </div>

      <ReviewsBlock />

      <StickyMobileCTA
        href="/book?service=gas-safety-cp42&type=commercial"
        label="Book Now"
        price={entryPrice}
        serviceName="Commercial Gas Safety (CP42) from"
      />
    </>
  );
}

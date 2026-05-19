import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Heading } from "@/components/ui/heading";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { TrustBadges } from "@/components/ui/trust-badges";
import { cn } from "@/lib/utils";
import {
  ADDITIONAL_CHARGES,
  COMMERCIAL_EICR_TABLE,
  COMMERCIAL_EICR_EXTRA_CIRCUIT_CHARGE,
} from "@/lib/pricing";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Commercial EICR from £149.99 | London | My Landlord Certificate",
  description:
    "Commercial EICR from £149.99. NICEIC approved electricians covering all London boroughs. Required every 3–5 years. Written report same day.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/commercial-eicr",
  },
  openGraph: {
    title: "Commercial EICR from £149.99 | London | My Landlord Certificate",
    description:
      "Commercial Electrical Installation Condition Report from £149.99. NICEIC approved electricians. Written report issued same day. All London boroughs covered.",
    url: "https://www.mylandlordcertificate.co.uk/commercial-eicr",
  },
};

// ── Data ──────────────────────────────────────────────────────────────────────

const entryPrice = COMMERCIAL_EICR_TABLE[0].price;

// ── Schema ────────────────────────────────────────────────────────────────────

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial EICR — Electrical Installation Condition Report",
  url: "https://www.mylandlordcertificate.co.uk/commercial-eicr",
  description:
    "Commercial Electrical Installation Condition Report (EICR) for commercial premises, HMO blocks, mixed-use buildings and landlords of non-domestic property. NICEIC approved engineers covering all London boroughs. Written report issued the same day.",
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
    url: "https://www.mylandlordcertificate.co.uk/commercial-eicr",
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
      name: "EICR",
      item: "https://www.mylandlordcertificate.co.uk/eicr",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Commercial EICR",
      item: "https://www.mylandlordcertificate.co.uk/commercial-eicr",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a commercial EICR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A commercial EICR (Electrical Installation Condition Report) is a formal assessment of the fixed electrical installation in a non-domestic or commercial property. A NICEIC approved electrician inspects consumer units, wiring, earthing, bonding, RCDs and all fixed electrical circuits, then produces a written report classifying any defects. The report states whether the installation is satisfactory or unsatisfactory and lists any remedial work required.",
      },
    },
    {
      "@type": "Question",
      name: "How often is a commercial EICR required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The IET Wiring Regulations (BS 7671) recommend a commercial EICR every 3–5 years, or whenever ownership changes. Some insurance policies and commercial leases specify a shorter interval. High-risk premises such as swimming pools and petrol stations require annual inspection. Always follow the interval recommended in the previous EICR report.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in a commercial EICR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A commercial EICR covers: visual inspection of all consumer units and distribution boards, continuity and polarity testing on every circuit, earth loop impedance testing, RCD functionality tests, insulation resistance measurements, and verification of protective devices. Every defect is classified as C1 (danger present), C2 (potentially dangerous), C3 (improvement recommended) or FI (further investigation required). A full written report is issued the same day.",
      },
    },
    {
      "@type": "Question",
      name: "How does a commercial EICR differ from a domestic EICR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A commercial EICR is carried out to the same BS 7671 standard as a domestic EICR but covers larger, more complex installations with multiple consumer units, three-phase supplies, higher circuit counts, and commercial-grade equipment. Pricing is based on the number of consumer units rather than bedroom count. Commercial inspections typically take longer and require an engineer qualified and insured for non-domestic work.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if remedial work is needed after a commercial EICR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any C1 (danger present) defects must be rectified immediately — the premises should not be occupied until the fault is made safe. C2 defects must be remedied as a matter of urgency before the next inspection cycle. C3 recommendations should be addressed at the earliest practicable opportunity. A follow-up verification certificate is issued once remedial work is completed. We can quote for remedial electrical work at the time of inspection.",
      },
    },
    {
      "@type": "Question",
      name: "Which businesses and premises need a commercial EICR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any non-domestic premises with a fixed electrical installation requires periodic inspection — including retail units, offices, warehouses, restaurants, care homes, HMO blocks with commercial common parts, mixed-use buildings, schools, leisure facilities, and places of worship. Landlords of commercial property are required by the Electricity at Work Regulations 1989 to ensure electrical systems are maintained in a safe condition.",
      },
    },
  ],
};

// ── FAQ items ─────────────────────────────────────────────────────────────────

const faqItems = [
  {
    question: "What is a commercial EICR?",
    answer:
      "A commercial EICR (Electrical Installation Condition Report) is a formal assessment of the fixed electrical installation in a non-domestic property. A NICEIC approved electrician inspects every consumer unit, circuit, earthing arrangement, bonding, protective device, and RCD, then produces a written report classifying any defects as C1 (danger present), C2 (potentially dangerous), C3 (improvement recommended), or FI (further investigation required). The report states whether the installation is satisfactory or unsatisfactory and lists every item requiring attention.",
  },
  {
    question: "How often is a commercial EICR required?",
    answer:
      "The IET Wiring Regulations (BS 7671) recommend a commercial EICR every 3–5 years, or whenever there is a change of occupancy or significant change of use. Some commercial leases and insurance policies specify a shorter cycle. The maximum interval for most commercial premises is 5 years. High-risk environments — swimming pools, petrol stations, and premises with a high moisture content — require annual inspection. Always follow the interval stated in the previous EICR report.",
  },
  {
    question: "What is included in a commercial EICR?",
    answer:
      "A commercial EICR covers a comprehensive programme of visual inspection and electrical testing: examination of all consumer units and distribution boards; continuity and polarity testing on every circuit; earth loop impedance measurements; insulation resistance tests; RCD trip-time tests; and verification of all protective devices. Every defect is coded and listed in the written report. The full report is emailed to you on the same day as the inspection.",
  },
  {
    question: "How does a commercial EICR differ from a domestic EICR?",
    answer:
      "Both follow the same BS 7671 Wiring Regulations standard, but a commercial EICR covers larger, more complex installations. Commercial premises often have multiple consumer units or distribution boards, three-phase supplies, higher individual circuit counts, and specialised commercial equipment. Pricing is calculated per consumer unit rather than by bedroom count. The inspection takes longer and must be carried out by an engineer qualified and insured for non-domestic work — all our commercial EICR engineers hold the relevant NICEIC commercial approval.",
  },
  {
    question: "What happens if remedial work is needed after a commercial EICR?",
    answer:
      "Any C1 (danger present) defect must be made safe immediately — the affected part of the installation should be isolated until the fault is rectified. C2 defects must be addressed urgently before the next scheduled inspection. C3 recommendations should be implemented at the earliest practicable opportunity. Once remedial work is complete, a verification certificate is issued. Our engineers can quote for remedial electrical work at the time of the inspection, saving you a separate call-out.",
  },
  {
    question: "Which businesses and premises need a commercial EICR?",
    answer:
      "Any non-domestic property with a fixed electrical installation requires periodic condition reporting under the Electricity at Work Regulations 1989. This includes retail units, offices, warehouses, restaurants and cafes, care homes, HMO blocks where the common parts are non-domestic, mixed-use buildings with commercial ground floors, schools, leisure centres, and places of worship. Landlords of commercial property are legally required to ensure electrical systems are safe and properly maintained.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CommercialEicrPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
      <section
        aria-labelledby="commercial-eicr-heading"
        className="bg-compliance-blue text-white"
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
                <Link href="/eicr" className="hover:text-white transition-colors">
                  EICR
                </Link>
              </li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li className="text-white font-medium">Commercial EICR</li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            Commercial Electrical Installation Condition Report · NICEIC Approved · All London Boroughs
          </p>

          <Heading level={1} id="commercial-eicr-heading" inverted className="mb-4 max-w-2xl">
            Commercial EICR — from £{entryPrice}
          </Heading>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-6">
            A full electrical installation condition report for commercial premises,
            HMO blocks, and mixed-use buildings. Priced by consumer unit — from £{entryPrice}
            for a single consumer unit with up to 10 circuits. Written report issued the same day.
          </p>

          <PriceDisplay
            price={entryPrice}
            from
            size="lg"
            className="mb-8 [&>span:last-child]:text-white"
          />

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/book?service=commercial-eicr"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book Commercial EICR — from £{entryPrice}
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

          <TrustBadges serviceKey="commercial-eicr" variant="dark" />
        </Container>
      </section>

      {/* ── Quick stats bar ── */}
      <div className="bg-brand-charcoal text-sm py-3">
        <Container>
          <dl className="flex flex-wrap gap-x-8 gap-y-1 text-brand-grey">
            <div className="flex gap-1.5">
              <dt>Entry price</dt>
              <dd className="text-white font-semibold">£{entryPrice}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Required</dt>
              <dd className="text-white font-semibold">every 3–5 years</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Report</dt>
              <dd className="text-white font-semibold">issued same day</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Accreditation</dt>
              <dd className="text-white font-semibold">NICEIC Approved</dd>
            </div>
          </dl>
        </Container>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── What is a Commercial EICR ── */}
        <section id="what-is-it" aria-labelledby="what-is-it-heading">
          <Heading level={2} id="what-is-it-heading" className="mb-4">
            What is a commercial EICR?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            A commercial EICR — Electrical Installation Condition Report — is a
            comprehensive assessment of the fixed electrical installation inside a
            non-domestic or commercial property. Carried out by a NICEIC approved
            electrician, the inspection covers every consumer unit, distribution board,
            circuit, earthing arrangement, main and supplementary bonding, residual current
            device (RCD), and protective device in the building.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            The inspector tests each circuit for continuity, polarity, insulation resistance,
            and earth loop impedance, and verifies that every protective device operates
            correctly within its design parameters. Any defect found is classified using the
            standard coding system: C1 (danger present — requires immediate action), C2
            (potentially dangerous — requires urgent remediation), C3 (improvement
            recommended), or FI (further investigation required before a verdict can be
            reached). The completed written report states whether the installation is
            satisfactory or unsatisfactory overall.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Unlike a domestic EICR — which is priced by property size and typically covers
            a single consumer unit — a commercial EICR is priced by the number of consumer
            units or distribution boards, reflecting the greater complexity of commercial
            installations. Our NICEIC approved engineers are qualified and insured for
            non-domestic electrical work across all 32 London boroughs.
          </p>
          <div className="rounded-xl bg-amber-50 border border-brand-amber/30 p-5 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Legal requirement: </strong>
            The Electricity at Work Regulations 1989 place a duty on employers and
            self-employed persons to ensure electrical systems are maintained so as to
            prevent danger. The IET Wiring Regulations (BS 7671:2018+A2:2022) recommend
            that commercial installations are inspected and tested at intervals not
            exceeding 5 years, with many commercial leases and insurance policies requiring
            a shorter cycle.
          </div>
        </section>

        {/* ── Who needs a commercial EICR ── */}
        <section aria-labelledby="who-needs-it-heading">
          <Heading level={2} id="who-needs-it-heading" className="mb-4">
            Who needs a commercial EICR?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            Any landlord, employer, or occupier responsible for a non-domestic electrical
            installation has a duty to ensure it is maintained safely. In practice, this
            means a periodic commercial EICR is required for a wide range of premises and
            building types.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            {[
              {
                category: "Commercial landlords",
                detail:
                  "Landlords of retail units, offices, warehouses, and mixed-use buildings must demonstrate that the electrical installation in their premises is safe at the point of letting and throughout the tenancy.",
              },
              {
                category: "HMO and block landlords",
                detail:
                  "Where an HMO has commercial common parts — entrance lobbies, stairwells, or shared facilities that are not covered by domestic EICR rules — a commercial EICR is required for those areas.",
              },
              {
                category: "Mixed-use buildings",
                detail:
                  "Buildings that combine residential upper floors with ground-floor commercial units require separate EICRs for each distinct installation — a domestic EICR for the flats, a commercial EICR for the commercial supply.",
              },
              {
                category: "Business occupiers",
                detail:
                  "Employers are responsible for the electrical installation in premises they occupy. Where the lease places maintenance responsibility on the occupier, periodic EICR testing is required alongside the landlord's obligations.",
              },
              {
                category: "Care homes and schools",
                detail:
                  "Care homes, schools, and other regulated premises face additional inspection requirements and shorter recommended test intervals under sector-specific guidance. A commercial EICR forms the foundation of ongoing electrical safety management.",
              },
              {
                category: "Leisure and hospitality",
                detail:
                  "Restaurants, cafes, gyms, and leisure facilities use high-load electrical equipment intensively. A regular commercial EICR is essential for fire risk management and public liability insurance purposes.",
              },
            ].map(({ category, detail }) => (
              <div
                key={category}
                className="rounded-xl border border-border bg-warm-white p-4"
              >
                <p className="font-semibold text-brand-charcoal text-sm mb-1">{category}</p>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── What is inspected ── */}
        <section aria-labelledby="inspected-heading">
          <Heading level={2} id="inspected-heading" className="mb-4">
            What does a commercial EICR inspect?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            A commercial EICR is a methodical, circuit-by-circuit inspection and test of
            the complete fixed electrical installation. The scope is defined by BS 7671
            and covers the following elements.
          </p>
          <ul className="space-y-3 mb-5" role="list">
            {[
              "Consumer units and distribution boards — condition of enclosures, labelling, protection ratings, and accessibility",
              "Protective devices — correct rating and type of circuit breakers, fuses, and RCDs for each circuit",
              "Earthing and main protective bonding — continuity, conductor sizing, and compliance with current regulations",
              "Supplementary bonding — equipotential bonding in bathrooms, kitchens, and areas with simultaneous access to earth",
              "Wiring systems — condition of cables, containment, and segregation from other services",
              "Circuits — continuity, polarity, insulation resistance, and earth loop impedance on every circuit",
              "RCD functionality — trip-time testing to confirm operation within the required 40ms or 300ms limits",
              "Fixed equipment — visual inspection of luminaires, socket outlets, switches, and permanently connected equipment",
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
          <p className="text-brand-charcoal/80 leading-relaxed">
            Every defect and observation is recorded on the EICR schedule of inspections and
            schedule of circuit details, which are provided to you alongside the condition
            report. The report is issued in PDF format and emailed the same day.
          </p>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" aria-labelledby="pricing-heading">
          <Heading level={2} id="pricing-heading" className="mb-2">
            Commercial EICR pricing
          </Heading>
          <p className="text-brand-grey mb-6">
            Pricing is fixed by the number of consumer units or distribution boards.
            Each consumer unit price covers up to 10 circuits. Additional circuits are
            charged at £{COMMERCIAL_EICR_EXTRA_CIRCUIT_CHARGE} per circuit over 10.
          </p>

          <PriceTable
            title="Commercial EICR — price by consumer unit count"
            rows={COMMERCIAL_EICR_TABLE}
            highlightCheapest
          />

          <div className="mt-4 rounded-xl border border-border bg-warm-white p-4 text-sm text-brand-charcoal/70">
            <p className="font-medium text-brand-charcoal mb-1">
              Additional charges (where applicable)
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Extra circuits over 10 per consumer unit:{" "}
                <strong>£{COMMERCIAL_EICR_EXTRA_CIRCUIT_CHARGE} per circuit</strong>
              </li>
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
            Need a domestic EICR instead?{" "}
            <Link href="/eicr" className="text-compliance-blue hover:underline font-medium">
              View domestic EICR pricing →
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
              "Full visual inspection of the consumer unit, wiring, and fixed equipment",
              "Circuit-by-circuit continuity and polarity tests",
              "Earth loop impedance measurements on every circuit",
              "Insulation resistance testing across all circuits",
              "RCD trip-time testing at 1× and 5× rated tripping current",
              "Classification of every defect as C1, C2, C3 or FI",
              "Schedule of inspections and schedule of circuit details",
              "Full written EICR in PDF format, emailed same day",
              "Covers 1 consumer unit with up to 10 circuits",
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
                body: "Select your consumer unit count, choose a date, and pay securely. Booking takes under 3 minutes. You receive a confirmation email immediately.",
              },
              {
                step: "2",
                title: "NICEIC approved engineer visits",
                body: "A NICEIC approved commercial electrician attends the premises at the agreed time. They carry out a full inspection and test of every consumer unit, circuit, and protective device. The inspection is non-destructive — no drilling or damage to surfaces.",
              },
              {
                step: "3",
                title: "Written EICR report issued same day",
                body: "Your full commercial EICR, including the schedule of inspections and schedule of circuit details, is completed and emailed to you in PDF format on the same day as the inspection.",
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
        <section aria-labelledby="faq-heading">
          <Heading level={2} id="faq-heading" className="mb-6">
            Commercial EICR — frequently asked questions
          </Heading>
          <FAQAccordion items={faqItems} includeSchema={false} />
        </section>

        {/* ── Related services ── */}
        <section aria-labelledby="related-heading">
          <Heading level={2} id="related-heading" className="mb-4">
            Related electrical and compliance services
          </Heading>
          <p className="text-brand-charcoal/80 mb-5 text-sm leading-relaxed">
            Many commercial landlords and building managers also require a{" "}
            <Link href="/fire-risk-assessment" className="text-compliance-blue hover:underline font-medium">
              Fire Risk Assessment
            </Link>{" "}
            and, where gas appliances are present, a{" "}
            <Link href="/commercial-gas-safety-certificate" className="text-compliance-blue hover:underline font-medium">
              Commercial Gas Safety Certificate (CP42)
            </Link>
            . For residential properties, see our{" "}
            <Link href="/eicr" className="text-compliance-blue hover:underline font-medium">
              domestic EICR page
            </Link>
            .
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Domestic EICR", href: "/eicr", price: "from £67.99" },
              {
                label: "Commercial Gas Safety (CP42)",
                href: "/commercial-gas-safety-certificate",
                price: "from £159.99",
              },
              {
                label: "Fire Risk Assessment",
                href: "/fire-risk-assessment",
                price: "from £74.99",
              },
              {
                label: "Gas Safety (CP12)",
                href: "/gas-safety-certificate",
                price: "from £49.99",
              },
              { label: "Book now", href: "/book", price: "All services" },
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
            Ready to book a commercial EICR?
          </Heading>
          <p className="text-blue-200 mb-6 max-w-md mx-auto">
            Book online in under 3 minutes. A NICEIC approved commercial electrician
            will be in touch to confirm your appointment. From £{entryPrice} for a
            single consumer unit — written report issued the same day.
          </p>
          <Link
            href="/book?service=commercial-eicr"
            className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
          >
            Book Commercial EICR — from £{entryPrice}
          </Link>
          <p className="mt-4 text-xs text-blue-300">
            Fixed pricing. No hidden charges. Written report same day.
          </p>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=commercial-eicr"
        label="Book Now"
        price={entryPrice}
        serviceName="Commercial EICR from"
      />
    </>
  );
}

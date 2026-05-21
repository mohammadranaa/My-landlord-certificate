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
import { cn } from "@/lib/utils";
import { ADDITIONAL_CHARGES, COMMERCIAL_EPC_TABLE } from "@/lib/pricing";

const entryPrice = COMMERCIAL_EPC_TABLE[0].price;

export const metadata: Metadata = {
  title: "Commercial EPC from £249.99 | London | My Landlord Certificate",
  description:
    "Commercial EPC from £249.99. Accredited DEA assessors covering all London boroughs. MEES compliance advice included. Report same day.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/commercial-epc",
  },
  openGraph: {
    title: "Commercial EPC from £249.99 | London | My Landlord Certificate",
    description:
      "Commercial EPC from £249.99. Accredited DEA assessors covering all London boroughs. MEES compliance advice included. Report same day.",
    url: "https://www.mylandlordcertificate.co.uk/commercial-epc",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Energy Performance Certificate (EPC)",
  url: "https://www.mylandlordcertificate.co.uk/commercial-epc",
  description:
    "Commercial Energy Performance Certificate from £249.99. Required before selling or letting any commercial property. Accredited DEA assessors using SBEM methodology. MEES compliance advice included. All 32 London boroughs covered.",
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
    url: "https://www.mylandlordcertificate.co.uk/commercial-epc",
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
      name: "EPC",
      item: "https://www.mylandlordcertificate.co.uk/epc",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Commercial EPC",
      item: "https://www.mylandlordcertificate.co.uk/commercial-epc",
    },
  ],
};

const faqItems = [
  {
    question: "Who needs a commercial EPC?",
    answer:
      "Any owner or landlord of a commercial property must obtain a commercial EPC before the property is sold, rented out, or built. This applies to offices, retail units, restaurants, warehouses, light industrial units, and mixed-use premises. The obligation falls on the seller or landlord — the EPC must be made available free of charge to any prospective buyer or tenant before the property is marketed. Failure to comply can result in a fine of up to £5,000 per property.",
  },
  {
    question: "How long is a commercial EPC valid?",
    answer:
      "A commercial EPC is valid for 10 years from the date of assessment, unless material changes are made to the building that affect its energy performance — such as installing a new heating system, significant insulation works, or a change of use. After any such change, a new assessment is recommended to ensure the certificate accurately reflects the building's current energy characteristics.",
  },
  {
    question: "What is MEES for commercial property?",
    answer:
      "The Minimum Energy Efficiency Standards (MEES) require commercial properties to achieve a minimum EPC rating of E before they can be let. Enforcement of MEES for commercial lettings began in April 2018 for new lettings and renewals, and from April 2023 applies to all existing leases. A commercial property rated F or G cannot legally be let unless a valid exemption is registered on the PRS Exemptions Register. Landlords of non-compliant properties face fines of up to £150,000 for breaches lasting more than three months.",
  },
  {
    question: "How long does the survey take?",
    answer:
      "For smaller premises up to 500m², the on-site assessment typically takes 1–2 hours. Larger or more complex buildings take proportionally longer. Our assessors collect building fabric data, heating, cooling, ventilation, and lighting information on-site. The EPC certificate is produced using SBEM (Simplified Building Energy Model) software and lodged on the national register within 1–2 business days of the assessment.",
  },
  {
    question: "What happens if the building fails MEES?",
    answer:
      "If your property receives an EPC rating of F or G, it cannot legally be let until it is improved to at least a rating of E or a valid exemption is registered. Our assessors can model cost-effective improvement scenarios — such as upgrading lighting controls, improving heating efficiency, or adding insulation — and show the projected impact on the EPC rating before any works are committed to. This allows you to prioritise the improvements with the best return on investment.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function CommercialEPCPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="commercial-epc-heading"
        className="bg-compliance-blue text-white"
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
              <li>
                <Link href="/epc" className="hover:text-white transition-colors">
                  EPC
                </Link>
              </li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li className="text-white font-medium">Commercial EPC</li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            Accredited DEA Assessors · SBEM Methodology · MEES Compliance Advice
          </p>

          <Heading
            level={1}
            id="commercial-epc-heading"
            inverted
            className="mb-4 max-w-2xl"
          >
            Commercial EPC — from £{entryPrice}
          </Heading>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-3">
            Commercial Energy Performance Certificate — required before selling or
            letting any commercial property. Accredited DEA assessors using
            SBEM methodology, MEES compliance advice included, report lodged on
            the national register same day.
          </p>

          <p className="text-blue-200 text-base mb-6 max-w-xl">
            Same-week appointments across all 32 London boroughs. Fixed pricing
            by gross internal floor area — no hidden charges.
          </p>

          <PriceDisplay
            price={entryPrice}
            from
            size="lg"
            className="mb-8 [&>span:last-child]:text-white"
          />

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/book?service=commercial-epc&type=commercial"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book Commercial EPC — from £{entryPrice}
            </Link>
            <a
              href="#pricing"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white/10 border border-white/30 text-white hover:bg-white/20",
              )}
            >
              View all prices
            </a>
          </div>

          <TrustBadges serviceKey="commercial-epc" variant="dark" />
        </Container>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────────────────── */}
      <div className="bg-brand-charcoal text-sm py-3">
        <Container>
          <dl className="flex flex-wrap gap-x-8 gap-y-1 text-brand-grey">
            <div className="flex gap-1.5">
              <dt>From</dt>
              <dd className="text-white font-semibold">£{entryPrice}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Valid for</dt>
              <dd className="text-white font-semibold">10 years</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Report</dt>
              <dd className="text-white font-semibold">same day</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Accreditation</dt>
              <dd className="text-white font-semibold">Accredited DEAs</dd>
            </div>
          </dl>
        </Container>
      </div>

      {/* ── Content well ──────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── What is a commercial EPC ─────────────────────────────────────── */}
        <section aria-labelledby="what-is-it-heading">
          <Heading level={2} id="what-is-it-heading" className="mb-4">
            What is a commercial EPC?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            A commercial Energy Performance Certificate (EPC) rates the energy
            efficiency of a non-domestic building on a scale from A (most
            efficient) to G (least efficient). It is produced using the
            Simplified Building Energy Model (SBEM) — a government-approved
            calculation methodology that accounts for the building&apos;s fabric,
            orientation, heating, cooling, ventilation, lighting, and any
            on-site renewable energy systems. The output is a standardised
            certificate showing the current energy rating, a potential rating
            achievable through improvements, and specific improvement
            recommendations ranked by likely impact.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Commercial EPCs must be obtained before any commercial property is
            sold, rented out, or newly constructed. The obligation rests with the
            seller or landlord, and the certificate must be made available free
            of charge to any prospective buyer or tenant before the property is
            placed on the market. Unlike domestic EPCs — which are assessed using
            the RdSAP methodology — commercial assessments require an on-site
            survey by an accredited non-domestic energy assessor (DEA). Our
            assessors collect all the data needed and lodge the certificate on
            the national EPC register within 1–2 business days of their visit.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            For commercial landlords, the EPC is not just a legal formality — it
            is an increasingly important compliance document given the trajectory
            of MEES (Minimum Energy Efficiency Standards) regulations. Properties
            that currently sit at a D or E rating face stricter requirements on
            the horizon, making it worth understanding your building&apos;s current
            position and the cost-effectiveness of any improvements before a
            lease event forces the issue.
          </p>

          <div className="rounded-xl bg-amber-50 border border-brand-amber/30 p-5 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Legal requirement: </strong>
            The Energy Performance of Buildings (England and Wales) Regulations
            2012 require a valid commercial EPC before any non-domestic property
            is sold, let, or constructed. Under MEES regulations, commercial
            properties must achieve a minimum EPC rating of E — failure to
            comply can result in fines of up to{" "}
            <strong>£150,000 for breaches lasting more than three months</strong>.
          </div>
        </section>

        {/* ── Who needs a commercial EPC ───────────────────────────────────── */}
        <section aria-labelledby="who-needs-heading">
          <Heading level={2} id="who-needs-heading" className="mb-4">
            Who needs a commercial EPC?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            A commercial EPC is required by any owner or landlord who intends
            to sell, let, or construct a non-domestic building. This includes
            offices, retail units, restaurants, pubs, warehouses, light
            industrial units, medical and dental practices, and mixed-use
            buildings where the commercial element constitutes more than 50% of
            the floor area. The certificate must exist before the property is
            marketed — it cannot be obtained retrospectively to satisfy a
            solicitor or agent&apos;s request once heads of terms are agreed.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            Commercial landlords renewing existing leases are also affected by
            MEES regulations if the renewed lease constitutes a new tenancy in
            law. Properties rated F or G cannot be let — even to existing
            tenants renewing — without either improving the property or
            registering a valid exemption. Our assessors can identify the most
            cost-effective improvement route before any lease event to avoid
            compliance risk.
          </p>

          <div className="rounded-xl bg-warm-white border border-border p-5">
            <p className="font-semibold text-brand-charcoal mb-3">
              A commercial EPC is required when:
            </p>
            <ul className="space-y-2 text-sm text-brand-charcoal/80">
              {[
                "Selling a commercial property of any size",
                "Letting or re-letting a commercial unit (including lease renewals that constitute a new tenancy)",
                "Constructing a new non-domestic building",
                "Completing a change of use that brings a previously exempt building into scope",
                "Applying for an HMO or commercial property licence in some local authorities",
                "Refinancing a commercial property where the lender requires an up-to-date EPC",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-compliance-blue/10 text-compliance-blue font-bold text-xs flex items-center justify-center">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── MEES for commercial ──────────────────────────────────────────── */}
        <section aria-labelledby="mees-heading">
          <Heading level={2} id="mees-heading" className="mb-4">
            MEES regulations for commercial property
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            The Minimum Energy Efficiency Standards (MEES) set a floor below
            which the energy performance of a commercially let property cannot
            fall. Since April 2018, landlords have been prohibited from granting
            new leases on commercial properties with an EPC rating of F or G.
            Since April 2023, the restriction extended to cover all existing
            commercial leases — meaning a landlord cannot continue to let an F-
            or G-rated property even under a pre-existing tenancy without
            registering a valid exemption.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            The government has signalled an intention to raise the MEES minimum
            for commercial property to a rating of B by 2030, with a possible
            intermediate step requiring a C rating by 2027. While these dates
            remain subject to legislative confirmation, forward-thinking
            landlords are already assessing the cost of improvements needed to
            meet future standards. A commercial EPC assessment today provides the
            baseline data needed to model those improvement pathways.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                label: "Current MEES minimum",
                value: "EPC E",
                sub: "Applies to all commercial lettings",
                colour: "text-compliance-blue",
              },
              {
                label: "Fine for non-compliance",
                value: "Up to £150,000",
                sub: "For breaches over 3 months",
                colour: "text-red-600",
              },
              {
                label: "EPC validity",
                value: "10 years",
                sub: "From date of assessment",
                colour: "text-compliance-blue",
              },
            ].map(({ label, value, sub, colour }) => (
              <div
                key={label}
                className="rounded-xl bg-warm-white border border-border p-5 text-center"
              >
                <p className={`text-2xl font-bold mb-1 ${colour}`}>{value}</p>
                <p className="font-semibold text-brand-charcoal text-sm">
                  {label}
                </p>
                <p className="text-xs text-brand-grey mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── What the survey covers ───────────────────────────────────────── */}
        <section aria-labelledby="survey-heading">
          <Heading level={2} id="survey-heading" className="mb-4">
            What the commercial EPC assessment covers
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            Our accredited DEA assessors carry out a thorough on-site survey of
            the building&apos;s energy-related characteristics. For most premises up
            to 500m², the visit takes 1–2 hours. The assessor does not require
            access to internal plant rooms or roof voids in most cases — but
            access to all main occupied areas and a copy of any existing building
            drawings or services documentation is helpful.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            The data collected feeds into SBEM (Simplified Building Energy Model)
            software, which calculates the building&apos;s asset energy performance
            under standardised occupancy conditions. The result reflects the
            building&apos;s inherent energy characteristics — not how it is actually
            used — which means the rating is comparable across buildings regardless
            of occupancy patterns.
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Building fabric — walls, roof, floors, windows and glazing",
              "Orientation, shading and natural ventilation opportunities",
              "Heating system type, fuel, controls and distribution",
              "Cooling and air-conditioning systems",
              "Ventilation — mechanical or natural",
              "Lighting type, controls and daylight sensing",
              "Hot water systems and any solar thermal",
              "On-site renewable energy generation (solar PV, etc.)",
              "Building age, construction type and floor area",
              "SBEM energy calculation using government-approved software",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
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
                <span className="text-sm text-brand-charcoal/80">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Pricing ─────────────────────────────────────────────────────── */}
        <section id="pricing" aria-labelledby="pricing-heading">
          <Heading level={2} id="pricing-heading" className="mb-2">
            Commercial EPC pricing
          </Heading>
          <p className="text-brand-grey mb-6">
            Fixed pricing by gross internal floor area. All prices include the
            on-site assessment, SBEM calculation, and lodgement on the
            government&apos;s national EPC register. No hidden charges.
          </p>

          <PriceTable
            title="Commercial EPC — price by floor area"
            rows={COMMERCIAL_EPC_TABLE}
            highlightCheapest
          />

          <div className="mt-4 rounded-xl border border-border bg-warm-white p-4 text-sm text-brand-charcoal/70">
            <p className="font-medium text-brand-charcoal mb-1">
              Additional charges (where applicable)
            </p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li>
                Parking charge if no free on-site parking is available:{" "}
                <strong>£{ADDITIONAL_CHARGES.parking}</strong>
              </li>
              <li>
                Properties in the London Congestion Charge Zone:{" "}
                <strong>£{ADDITIONAL_CHARGES.congestionZone}</strong>
              </li>
            </ul>
          </div>

          <p className="mt-5 text-sm text-brand-grey">
            For premises above 850m² or buildings requiring Dynamic Simulation
            Modelling (DSM), please{" "}
            <a
              href="tel:03301330066"
              className="text-compliance-blue hover:underline font-medium"
            >
              call us on 0330 133 0066
            </a>{" "}
            for a tailored quote.
          </p>

          <p className="mt-3 text-sm text-brand-grey">
            Need a domestic EPC instead?{" "}
            <Link
              href="/epc"
              className="text-compliance-blue hover:underline font-medium"
            >
              See residential EPC pricing →
            </Link>
          </p>
        </section>

        {/* ── What's included ──────────────────────────────────────────────── */}
        <section aria-labelledby="included-heading">
          <Heading level={2} id="included-heading" className="mb-4">
            What&apos;s included from £{entryPrice}
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Every commercial EPC we carry out includes all of the following at
            the fixed price shown — there are no add-on charges for the
            certificate, the register lodgement, or the improvement report.
          </p>
          <ul className="space-y-3" role="list">
            {[
              "On-site assessment by an accredited non-domestic DEA assessor",
              "Full building fabric, services, and systems survey",
              "SBEM energy modelling using government-approved software",
              "A–G energy efficiency rating with improvement potential shown",
              "Detailed improvement recommendations ranked by impact",
              "MEES compliance assessment — confirmed pass or fail at rating E",
              "EPC lodgement on the national government register",
              "PDF certificate suitable for marketing, solicitors, and lenders",
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

        {/* ── FAQs ─────────────────────────────────────────────────────────── */}
        <section aria-labelledby="faq-heading" className="below-fold">
          <Heading level={2} id="faq-heading" className="mb-6">
            Commercial EPC — frequently asked questions
          </Heading>
          <FAQAccordion items={faqItems} includeSchema={false} />
        </section>

        {/* ── Related links ─────────────────────────────────────────────────── */}
        <section aria-labelledby="related-heading">
          <Heading level={2} id="related-heading" className="mb-6">
            Related services
          </Heading>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: "Domestic EPC",
                href: "/epc",
                desc: "Residential EPC from £89.99. Valid 10 years. Accredited DEA assessors across London.",
              },
              {
                name: "Domestic EPC — property types",
                href: "/epc",
                desc: "EPC pricing guide for houses, flats, studios and HMOs.",
              },
              {
                name: "Commercial EICR",
                href: "/commercial-eicr",
                desc: "Commercial electrical condition report from £149.99. Required for commercial premises.",
              },
              {
                name: "Book online",
                href: "/book",
                desc: "Book any certificate online in under 3 minutes. Fixed price. Same-week appointments.",
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

        {/* ── CTA block ────────────────────────────────────────────────────── */}
        <section
          aria-labelledby="cta-heading"
          className="rounded-2xl bg-compliance-blue px-8 py-10 text-center text-white"
        >
          <Heading level={2} id="cta-heading" inverted className="mb-2">
            Book your commercial EPC today
          </Heading>
          <p className="text-blue-200 mb-2 max-w-md mx-auto">
            Fixed price from £{entryPrice}. Accredited DEA assessors, MEES
            compliance advice included, certificate lodged on the national
            register. Same-week appointments across all 32 London boroughs.
          </p>
          <p className="text-blue-300 text-sm mb-6 max-w-md mx-auto">
            Book online or call{" "}
            <a
              href="tel:03301330066"
              className="text-white font-semibold hover:underline"
            >
              0330 133 0066
            </a>{" "}
            for large or complex premises.
          </p>
          <Link
            href="/book?service=commercial-epc&type=commercial"
            className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
          >
            Book Commercial EPC — from £{entryPrice}
          </Link>
          <p className="mt-4 text-xs text-blue-300">
            No hidden charges. Accredited DEA assessors. MEES compliance advice included.
          </p>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=commercial-epc&type=commercial"
        label="Book Now"
        price={entryPrice}
        serviceName="Commercial EPC"
      />
    </>
  );
}

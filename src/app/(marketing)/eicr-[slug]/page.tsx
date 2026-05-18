import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  DOMESTIC_EICR_TABLE,
  getPriceForEICR,
  getPriceForEPC,
  getPriceForGasSafety,
  getPriceForPAT,
} from "@/lib/pricing";

const entryPrice = getPriceForEICR("studio");

type BoroughData = {
  name: string;
  postcodes: string;
  context: string;
};

const BOROUGHS: Record<string, BoroughData> = {
  "barking-dagenham": {
    name: "Barking & Dagenham",
    postcodes: "RM8, RM9, RM10, IG11",
    context:
      "Mix of post-war council-built and newer private rentals, high HMO density around Barking town centre",
  },
  barnet: {
    name: "Barnet",
    postcodes: "N2, N3, N11, N12, N20, EN4, EN5",
    context:
      "Largely Victorian and Edwardian semis, significant buy-to-let stock in East Barnet and New Barnet",
  },
  bexley: {
    name: "Bexley",
    postcodes: "DA1, DA5, DA6, DA7, DA14, DA15, DA16",
    context:
      "Predominantly suburban houses, growing private rental sector in Sidcup and Welling",
  },
  brent: {
    name: "Brent",
    postcodes: "HA0, HA9, NW2, NW6, NW10",
    context:
      "High HMO density, large Victorian terrace stock in Willesden and Kilburn, significant rental market",
  },
  bromley: {
    name: "Bromley",
    postcodes: "BR1, BR2, BR3, BR4, BR5, BR6, BR7",
    context:
      "Suburban mix of Victorian and post-war stock, active rental market in Beckenham and Bromley town",
  },
  camden: {
    name: "Camden",
    postcodes: "NW1, NW3, NW5, WC1",
    context:
      "High-value Victorian and Georgian properties, dense rental market in Kentish Town and Gospel Oak, many HMOs",
  },
  "city-of-london": {
    name: "City of London",
    postcodes: "EC1, EC2, EC3, EC4",
    context:
      "Predominantly commercial and serviced apartments, high-specification electrical installations",
  },
  croydon: {
    name: "Croydon",
    postcodes: "CR0, CR2, CR7",
    context:
      "Large Victorian terrace stock, one of London's busiest HMO markets, significant rental demand",
  },
  ealing: {
    name: "Ealing",
    postcodes: "W3, W5, W7, W13, UB1, UB2",
    context:
      "Victorian and Edwardian housing stock in Acton and Southall, diverse and active rental market",
  },
  enfield: {
    name: "Enfield",
    postcodes: "EN1, EN2, EN3",
    context:
      "Mix of Victorian and post-war properties, growing HMO market in Edmonton and Ponders End",
  },
  greenwich: {
    name: "Greenwich",
    postcodes: "SE3, SE7, SE9, SE10, SE18",
    context:
      "Mix of Victorian terraces and significant new-build developments at Greenwich Peninsula",
  },
  hackney: {
    name: "Hackney",
    postcodes: "E2, E5, E8, E9, N1, N16",
    context:
      "Dense Victorian terrace stock, one of London's highest rental densities, many HMOs in Stoke Newington",
  },
  "hammersmith-fulham": {
    name: "Hammersmith & Fulham",
    postcodes: "W6, W12, W14, SW6",
    context:
      "High-value Victorian and Edwardian stock, strong rental demand in Shepherd's Bush and Fulham",
  },
  haringey: {
    name: "Haringey",
    postcodes: "N4, N8, N15, N17, N22",
    context:
      "Victorian terraces dominant, high HMO concentration in Tottenham and Wood Green",
  },
  harrow: {
    name: "Harrow",
    postcodes: "HA1, HA2, HA3",
    context:
      "Edwardian and post-war suburban stock, growing rental market particularly in South Harrow",
  },
  havering: {
    name: "Havering",
    postcodes: "RM1, RM2, RM3, RM11, RM12",
    context:
      "Predominantly suburban houses, growing private rental sector in Romford and Hornchurch",
  },
  hillingdon: {
    name: "Hillingdon",
    postcodes: "UB3, UB4, UB7, UB8, UB10",
    context:
      "Mixed housing stock, strong rental demand near Heathrow and Uxbridge, diverse property types",
  },
  hounslow: {
    name: "Hounslow",
    postcodes: "TW3, TW4, TW5, TW7, TW8, TW14",
    context:
      "Diverse rental market boosted by Heathrow proximity, Victorian and post-war mix in Chiswick and Brentford",
  },
  islington: {
    name: "Islington",
    postcodes: "N1, N5, N7, EC1V",
    context:
      "Georgian and Victorian stock, among London's highest rental demand per square mile, many purpose-converted HMOs",
  },
  "kensington-chelsea": {
    name: "Kensington & Chelsea",
    postcodes: "W8, W10, W11, SW3, SW10",
    context:
      "London's highest-value housing stock, Victorian mansion conversions, significant rental market in North Kensington",
  },
  "kingston-upon-thames": {
    name: "Kingston upon Thames",
    postcodes: "KT1, KT2",
    context:
      "Mix of Victorian and inter-war properties, active rental market around Kingston town centre and Surbiton",
  },
  lambeth: {
    name: "Lambeth",
    postcodes: "SE1, SE5, SE11, SE24, SW2, SW4, SW8, SW9",
    context:
      "High rental density, Victorian terraces in Brixton and Stockwell, many purpose-converted flats",
  },
  lewisham: {
    name: "Lewisham",
    postcodes: "SE4, SE6, SE8, SE12, SE13, SE23",
    context:
      "Victorian terraces, active HMO market in Catford and Lewisham town, significant recent development",
  },
  merton: {
    name: "Merton",
    postcodes: "SW19, SW20, CR4",
    context:
      "Suburban mix of Victorian and 1930s stock, active rental market in Wimbledon and Mitcham",
  },
  newham: {
    name: "Newham",
    postcodes: "E6, E7, E12, E13, E15, E16",
    context:
      "High HMO density, significant regeneration in Stratford, mix of Victorian stock and new builds",
  },
  redbridge: {
    name: "Redbridge",
    postcodes: "IG1, IG2, IG3, IG4, IG6",
    context:
      "Suburban with growing private rental sector, Victorian and post-war mix in Ilford and Woodford",
  },
  "richmond-upon-thames": {
    name: "Richmond upon Thames",
    postcodes: "TW1, TW9, TW10, KT4",
    context:
      "High-value riverside properties, Victorian and Georgian stock, premium rental market",
  },
  southwark: {
    name: "Southwark",
    postcodes: "SE1, SE5, SE15, SE16, SE17, SE22",
    context:
      "Mix of Victorian terraces and significant new-build stock, high rental density in Bermondsey and Peckham",
  },
  sutton: {
    name: "Sutton",
    postcodes: "SM1, SM2, SM3, SM5, SM6",
    context:
      "Predominantly suburban, mix of Victorian, inter-war and post-war properties, steady rental demand",
  },
  "tower-hamlets": {
    name: "Tower Hamlets",
    postcodes: "E1, E2, E3, E14",
    context:
      "Highest rental density in London, mix of Victorian terraces and significant new-build Canary Wharf stock",
  },
  "waltham-forest": {
    name: "Waltham Forest",
    postcodes: "E4, E10, E11, E17",
    context:
      "Victorian terraces dominant in Walthamstow, rapidly growing rental market, many first-time landlord properties",
  },
  wandsworth: {
    name: "Wandsworth",
    postcodes: "SW11, SW12, SW17, SW18",
    context:
      "Active rental market, Victorian terraces in Battersea and Tooting, high landlord density",
  },
  westminster: {
    name: "Westminster",
    postcodes: "W1, W2, SW1",
    context:
      "Central London's highest-value rental market, Georgian and Victorian mansion conversions, many short-let and long-let properties",
  },
};

export async function generateStaticParams() {
  return Object.keys(BOROUGHS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const borough = BOROUGHS[slug];
  if (!borough) return {};
  return {
    title: `EICR ${borough.name} from £${entryPrice} | My Landlord Certificate`,
    description: `EICR certificate in ${borough.name} from £${entryPrice}. NICEIC approved electricians. Same-week appointments. Certificate emailed same day. Book online.`,
    alternates: {
      canonical: `https://mylandlordcertificate.co.uk/eicr-${slug}`,
    },
    openGraph: {
      title: `EICR ${borough.name} from £${entryPrice} | My Landlord Certificate`,
      description: `EICR certificate in ${borough.name} from £${entryPrice}. NICEIC approved electricians. Same-week appointments. Certificate emailed same day. Book online.`,
      url: `https://mylandlordcertificate.co.uk/eicr-${slug}`,
    },
  };
}

export default async function EICRBoroughPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const borough = BOROUGHS[slug];
  if (!borough) notFound();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `My Landlord Certificate — ${borough.name}`,
    url: `https://mylandlordcertificate.co.uk/eicr-${slug}`,
    areaServed: { "@type": "City", name: borough.name },
    priceRange: `from £${entryPrice}`,
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `EICR ${borough.name} — Electrical Installation Condition Report`,
    url: `https://mylandlordcertificate.co.uk/eicr-${slug}`,
    description: `EICR certificate in ${borough.name} from £${entryPrice}. NICEIC approved electricians. Same-week appointments. Certificate emailed same day.`,
    provider: {
      "@type": "LocalBusiness",
      name: "My Landlord Certificate",
      url: "https://mylandlordcertificate.co.uk",
    },
    areaServed: { "@type": "City", name: borough.name },
    offers: {
      "@type": "Offer",
      price: `${entryPrice}`,
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: `https://mylandlordcertificate.co.uk/eicr-${slug}`,
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
        item: "https://mylandlordcertificate.co.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "EICR London",
        item: "https://mylandlordcertificate.co.uk/eicr-london",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `EICR ${borough.name}`,
        item: `https://mylandlordcertificate.co.uk/eicr-${slug}`,
      },
    ],
  };

  const faqItems = [
    {
      question: `Is an EICR a legal requirement for landlords in ${borough.name}?`,
      answer: `Yes. The Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020 require all landlords — including those renting properties in ${borough.name} — to hold a valid EICR. The requirement has applied to all tenancies in England since April 2021. Landlords must provide a copy to tenants before they move in and to the local authority within 7 days of a written request. Failure to comply can result in a civil penalty of up to £30,000 per property.`,
    },
    {
      question: `How much does an EICR cost in ${borough.name}?`,
      answer: `An EICR in ${borough.name} starts from £${entryPrice} for a studio apartment. A 1–3 bedroom property costs £${getPriceForEICR("1-3bed")}. Prices scale by property size up to £${getPriceForEICR("8bed")} for an 8-bedroom HMO. The only location-based surcharge is £${ADDITIONAL_CHARGES.congestionZone} for properties within the London Congestion Charge Zone, and £${ADDITIONAL_CHARGES.parking} if no free on-site parking is available.`,
    },
    {
      question: `How long does an EICR take in ${borough.name}?`,
      answer: `Most EICR inspections in ${borough.name} take 2–4 hours depending on the size and age of the property. Older Victorian and Edwardian properties — which are common across many parts of ${borough.name} — may take slightly longer due to the complexity of the installation. You do not need to be present; a tenant or keyholder can provide access and the certificate will be emailed directly to you the same day.`,
    },
    {
      question: "How often do I need an EICR?",
      answer:
        "The law requires an EICR every 5 years, or at each change of tenancy — whichever comes first. If the engineer recommends a shorter re-inspection interval in the report (for example 2 years on an older or complex installation), that interval takes precedence. Always keep the EICR certificate on file — you must be able to supply a copy to tenants and your local authority on request.",
    },
    {
      question: "What happens if my EICR fails?",
      answer:
        "An EICR is classified as 'unsatisfactory' if the engineer finds a C1 (immediate danger) or C2 (potentially dangerous) code. C1 hazards must be made safe by the engineer before leaving the property. C2 observations must be remedied within 28 days and evidenced in writing to your local authority before the property can be legally let. C3 codes (improvement recommended) do not cause the EICR to fail — the property can still receive a satisfactory result. We can arrange remedial works through our network of NICEIC approved electricians.",
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

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="eicr-borough-heading"
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
                <Link
                  href="/eicr-london"
                  className="hover:text-white transition-colors"
                >
                  EICR London
                </Link>
              </li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li className="text-white font-medium">
                EICR {borough.name}
              </li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            NICEIC Approved · Certificate Same Day · {borough.name}
          </p>

          <Heading
            level={1}
            id="eicr-borough-heading"
            inverted
            className="mb-4 max-w-2xl"
          >
            EICR {borough.name} — from £{entryPrice}
          </Heading>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-3">
            Electrical Installation Condition Report for landlords in{" "}
            {borough.name}. NICEIC approved electricians, fixed pricing, no
            hidden charges — certificate emailed the same day.
          </p>

          <p className="text-blue-200 text-base mb-6 max-w-xl">
            Postcodes covered: {borough.postcodes}. Same-week appointments
            available — book online in under 3 minutes.
          </p>

          <PriceDisplay
            price={entryPrice}
            from
            size="lg"
            className="mb-8 [&>span:last-child]:text-white"
          />

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/book?service=eicr"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book EICR in {borough.name} — from £{entryPrice}
            </Link>
            <a
              href="#pricing"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white/10 border border-white/30 text-white hover:bg-white/20",
              )}
            >
              View pricing
            </a>
          </div>

          <TrustBadges variant="dark" />
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
              <dd className="text-white font-semibold">5 years</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Certificate</dt>
              <dd className="text-white font-semibold">same day</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Accreditation</dt>
              <dd className="text-white font-semibold">NICEIC Approved</dd>
            </div>
          </dl>
        </Container>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── What is an EICR ──────────────────────────────────────────────── */}
        <section aria-labelledby="what-is-it-heading">
          <Heading level={2} id="what-is-it-heading" className="mb-4">
            What is an EICR?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            An EICR (Electrical Installation Condition Report) is a formal
            inspection and test of all fixed electrical wiring, sockets, switches,
            light fittings and the consumer unit within a rental property. A
            qualified NICEIC approved electrician tests every circuit from the
            consumer unit, checks earthing and bonding arrangements, and assigns a
            condition code to every observation that falls below the current British
            Standard BS 7671 — the IET Wiring Regulations. The result is a written
            report that tells you whether the electrical installation is
            satisfactory for continued use and — if not — what needs to be
            addressed and within what timeframe.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Since April 2021, every private landlord in England has been legally
            required to hold a valid EICR and renew it every five years. Landlords
            in {borough.name} are subject to exactly the same obligation as
            landlords elsewhere in England. Failure to comply can result in a civil
            penalty of up to £30,000 per property and a remedial notice from your
            local authority.
          </p>

          <div className="rounded-xl bg-amber-50 border border-brand-amber/30 p-5 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Legal requirement: </strong>
            The Electrical Safety Standards in the Private Rented Sector (England)
            Regulations 2020 apply to all rental properties in {borough.name}.
            Every landlord must hold a valid EICR, provide a copy to tenants
            before they move in, and supply it to their local authority within 7
            days of a written request. Failure carries a civil penalty of up to{" "}
            <strong>£30,000 per property</strong>.
          </div>
        </section>

        {/* ── Borough context ───────────────────────────────────────────────── */}
        <section aria-labelledby="borough-context-heading">
          <Heading level={2} id="borough-context-heading" className="mb-4">
            EICR in {borough.name} — local property context
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            {borough.context}. Our NICEIC approved electricians are experienced
            with the specific electrical characteristics common to properties in
            the {borough.postcodes} postcode areas and regularly carry out EICR
            inspections across {borough.name} for private landlords, letting
            agents and HMO operators.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Properties in {borough.name} span a wide range of ages and construction
            types. Older properties — particularly Victorian and Edwardian terraces
            common in many parts of the borough — may require more careful
            assessment of earthing arrangements, consumer unit condition, and
            wiring insulation. Our engineers are trained to assess all installation
            types accurately and to explain any observations clearly, so you
            understand exactly what any C-codes mean and what action — if any —
            is required.
          </p>

          <div className="rounded-xl bg-warm-white border border-border p-5">
            <p className="font-semibold text-brand-charcoal mb-1">
              Postcodes covered in {borough.name}
            </p>
            <p className="text-sm text-brand-grey">
              {borough.postcodes} and surrounding areas. Enter your full postcode
              during booking to confirm coverage and availability.
            </p>
          </div>
        </section>

        {/* ── Pricing ──────────────────────────────────────────────────────── */}
        <section id="pricing" aria-labelledby="pricing-heading">
          <Heading level={2} id="pricing-heading" className="mb-2">
            EICR pricing in {borough.name}
          </Heading>
          <p className="text-brand-grey mb-6">
            Fixed pricing by property size. The same prices apply in{" "}
            {borough.name} as across all other London boroughs — no London
            surcharge. The only location-based fee is the £
            {ADDITIONAL_CHARGES.congestionZone} Congestion Charge Zone addition
            for central London properties.
          </p>

          <PriceTable
            title={`Domestic EICR — ${borough.name} pricing`}
            rows={DOMESTIC_EICR_TABLE}
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
            Want a detailed cost breakdown?{" "}
            <Link
              href="/eicr-cost"
              className="text-compliance-blue hover:underline font-medium"
            >
              See our full EICR cost guide →
            </Link>
          </p>
        </section>

        {/* ── What's included ──────────────────────────────────────────────── */}
        <section aria-labelledby="included-heading">
          <Heading level={2} id="included-heading" className="mb-4">
            What&apos;s included from £{entryPrice}
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Every EICR we carry out in {borough.name} covers the complete fixed
            electrical installation at no extra cost beyond the price shown.
          </p>
          <ul className="space-y-3" role="list">
            {[
              "Visual inspection of all accessible wiring, sockets, switches and light fittings",
              "Testing of all circuits for continuity, insulation resistance and polarity",
              "RCD (residual current device) testing for all protective devices",
              "Consumer unit check — type, condition, labelling and protective devices",
              "Earthing and bonding arrangement check against BS 7671",
              "NICEIC approved engineer — fully qualified and independently assessed",
              "Signed EICR certificate emailed same day",
              "Prioritised remedial recommendations with C1/C2/C3 classification",
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
        <section aria-labelledby="faq-heading">
          <Heading level={2} id="faq-heading" className="mb-6">
            EICR {borough.name} — frequently asked questions
          </Heading>
          <FAQAccordion items={faqItems} includeSchema={false} />
        </section>

        {/* ── Cross-sell ───────────────────────────────────────────────────── */}
        <section aria-labelledby="related-heading">
          <Heading level={2} id="related-heading" className="mb-6">
            Other landlord certificates in {borough.name}
          </Heading>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                name: "Gas Safety Certificate (CP12)",
                href: "/gas-safety-certificate",
                desc: `Annual Gas Safe inspection from £${getPriceForGasSafety(1)}. Required for all gas appliances in your ${borough.name} rental.`,
              },
              {
                name: "EPC Certificate",
                href: "/epc",
                desc: `Energy Performance Certificate from £${getPriceForEPC("studio")}. Required before any new tenancy or sale. Valid 10 years.`,
              },
              {
                name: "PAT Testing",
                href: "/pat-testing",
                desc: `Portable Appliance Testing from £${getPriceForPAT(1)}. Recommended annually for furnished lets.`,
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
            Book your EICR in {borough.name}
          </Heading>
          <p className="text-blue-200 mb-2 max-w-md mx-auto">
            Book online in under 3 minutes. A NICEIC approved electrician
            confirms your appointment. Certificate emailed the same day.
          </p>
          <p className="text-blue-300 text-sm mb-6 max-w-md mx-auto">
            Same-week appointments across {borough.name} and all 32 London
            boroughs — or call{" "}
            <a
              href="tel:03301330066"
              className="text-white font-semibold hover:underline"
            >
              0330 133 0066
            </a>
            .
          </p>
          <Link
            href="/book?service=eicr"
            className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
          >
            Book EICR in {borough.name} — from £{entryPrice}
          </Link>
          <p className="mt-4 text-xs text-blue-300">
            Fixed pricing. No hidden charges. NICEIC approved. Certificate emailed same day.
          </p>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=eicr"
        label="Book EICR"
        price={entryPrice}
        serviceName={`EICR ${borough.name}`}
      />
    </>
  );
}

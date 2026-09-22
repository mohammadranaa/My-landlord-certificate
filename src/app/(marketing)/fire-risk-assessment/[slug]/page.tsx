import type { Metadata } from "next";
import { LazyFAQAccordion as FAQAccordion, LazyStickyMobileCTA as StickyMobileCTA } from "@/components/lazy";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/shared/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { TrustBadges } from "@/components/ui/trust-badges";
import { cn } from "@/lib/utils";
import {
  ADDITIONAL_CHARGES,
  FRA_RESIDENTIAL_TABLE,
  getPriceForEICR,
  getPriceForEPC,
  getPriceForFRA,
  getPriceForGasSafety,
} from "@/lib/pricing";
import { ALL_BOROUGHS, BOROUGH_SERVICES, getBoroughData } from "@/lib/borough-data";
import { SITE_URL } from "@/lib/constants";

const entryPrice = getPriceForFRA("studio");

export async function generateStaticParams() {
  return ALL_BOROUGHS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const borough = getBoroughData(slug);
  if (!borough) return {};
  return {
    title: `Fire Risk Assessment ${borough.name} from £${entryPrice}`,
    description: `NEBOSH qualified fire risk assessors in ${borough.name}. Fire Risk Assessment from £${entryPrice}. Report emailed within 48 hours. Book online.`,
    alternates: {
      canonical: `${SITE_URL}/fire-risk-assessment/${slug}`,
    },
    openGraph: {
      title: `Fire Risk Assessment ${borough.name} from £${entryPrice} | My Landlord Certificate`,
      description: `NEBOSH qualified fire risk assessors in ${borough.name}. Fire Risk Assessment from £${entryPrice}. Report emailed within 48 hours. Book online.`,
      url: `${SITE_URL}/fire-risk-assessment/${slug}`,
    },
  };
}

export default async function FireRiskAssessmentBoroughPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const borough = getBoroughData(slug);
  if (!borough) notFound();

  const postcodeStr = borough.postcodes.join(", ");

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `My Landlord Certificate — ${borough.name}`,
    url: `${SITE_URL}/fire-risk-assessment/${slug}`,
    areaServed: { "@type": "City", name: borough.name },
    priceRange: `from £${entryPrice}`,
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Fire Risk Assessment ${borough.name}`,
    url: `${SITE_URL}/fire-risk-assessment/${slug}`,
    description: `NEBOSH qualified fire risk assessors in ${borough.name}. Fire Risk Assessment from £${entryPrice}. Report emailed within 48 hours.`,
    provider: {
      "@type": "LocalBusiness",
      name: "My Landlord Certificate",
      url: SITE_URL,
    },
    areaServed: { "@type": "City", name: borough.name },
    offers: {
      "@type": "Offer",
      price: `${entryPrice}`,
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/fire-risk-assessment/${slug}`,
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
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Fire Risk Assessment",
        item: `${SITE_URL}/fire-risk-assessment`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Fire Risk Assessment ${borough.name}`,
        item: `${SITE_URL}/fire-risk-assessment/${slug}`,
      },
    ],
  };

  const faqItems = [
    {
      question: `Is a Fire Risk Assessment a legal requirement for landlords in ${borough.name}?`,
      answer: `A written Fire Risk Assessment is compulsory for every HMO in ${borough.name} under the Regulatory Reform (Fire Safety) Order 2005. For single-let properties it is strongly recommended and is often required by landlord insurance policies. The Building Safety Act 2022 introduced further duties for buildings over 18 metres or 7+ storeys. We recommend all landlords in ${borough.name} have a current assessment on file regardless of property type.`,
    },
    {
      question: `How much does a Fire Risk Assessment cost in ${borough.name}?`,
      answer: `A Fire Risk Assessment in ${borough.name} starts from £${entryPrice} for a studio flat. A 1–3 bedroom property costs £${getPriceForFRA("1-3bed")}, and communal areas in blocks of flats start from £${getPriceForFRA("communal-1-3floors")}. Prices scale with property size and complexity. The only location-based surcharge is £${ADDITIONAL_CHARGES.congestionZone} for properties within the London Congestion Charge Zone, and £${ADDITIONAL_CHARGES.parking} if no free on-site parking is available.`,
    },
    {
      question: `What does a Fire Risk Assessment cover in ${borough.name}?`,
      answer: `Our NEBOSH qualified assessor identifies fire hazards, evaluates who is at risk, and checks means of escape, fire doors, fire alarms, emergency lighting and escape route signage. Every finding is recorded with a priority rating, and you receive a written report with a clear, prioritised action plan emailed within 48 hours of the visit.`,
    },
    {
      question: `How often does a Fire Risk Assessment need to be reviewed in ${borough.name}?`,
      answer: `We recommend reviewing a Fire Risk Assessment annually, or sooner if the building undergoes significant change — a layout alteration, a new tenancy in an HMO, or after any fire safety incident. There is no fixed statutory interval, but your local authority and insurer will expect a current, in-date assessment on file.`,
    },
    {
      question: "Who is qualified to carry out a Fire Risk Assessment?",
      answer:
        "The government recommends using a competent, trained fire risk assessor. NEBOSH (National Examination Board in Occupational Safety and Health) qualifications — specifically the NEBOSH National Certificate in Fire Safety and Risk Management — are the industry-recognised standard for residential assessors. All our assessors hold NEBOSH certification and carry professional indemnity insurance.",
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
        aria-labelledby="fra-borough-heading"
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
              <li>
                <Link
                  href="/fire-risk-assessment"
                  className="hover:text-white transition-colors"
                >
                  Fire Risk Assessment
                </Link>
              </li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li className="text-white font-medium">
                Fire Risk Assessment {borough.name}
              </li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            NEBOSH Qualified · Report Within 48 Hours · {borough.name}
          </p>

          <Heading
            level={1}
            id="fra-borough-heading"
            inverted
            className="mb-4 max-w-2xl"
          >
            Fire Risk Assessment {borough.name} — from £{entryPrice}
          </Heading>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-3">
            Fire Risk Assessments for landlords and HMO operators in{" "}
            {borough.name}. NEBOSH qualified assessors, fixed pricing, no
            hidden charges — written report emailed within 48 hours.
          </p>

          <p className="text-blue-200 text-base mb-6 max-w-xl">
            Postcodes covered: {postcodeStr}. Same-week appointments
            available — book online in under 3 minutes.
          </p>

          <PriceDisplay
            price={entryPrice}
            from
            size="lg"
            className="mb-8 [&>span:first-child]:text-blue-100 [&>span:last-child]:text-white"
          />

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/book?service=fra-residential"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book Fire Risk Assessment in {borough.name} — from £{entryPrice}
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
      <div className="bg-spec-bar text-sm py-5 border-t-2 border-action-green">
        <Container>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-5 text-center [&>*:last-child:nth-child(odd)]:col-span-2 md:flex md:flex-wrap md:items-center md:justify-center md:gap-y-3 md:text-left text-white/70">
            <div className="flex flex-col gap-1 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">From</dt>
              <dd className="text-sm font-bold text-white">£{entryPrice}</dd>
            </div>
            <div className="flex flex-col gap-1 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">Review</dt>
              <dd className="text-sm font-bold text-white">Annually</dd>
            </div>
            <div className="flex flex-col gap-1 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">Report</dt>
              <dd className="text-sm font-bold text-white">within 48 hours</dd>
            </div>
            <div className="flex flex-col gap-1 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">Accreditation</dt>
              <dd className="text-sm font-bold text-white">NEBOSH Qualified</dd>
            </div>
          </dl>
        </Container>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── What is a Fire Risk Assessment ──────────────────────────────────── */}
        <section aria-labelledby="what-is-it-heading">
          <Heading level={2} id="what-is-it-heading" className="mb-4">
            What is a Fire Risk Assessment?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            A Fire Risk Assessment (FRA) is a systematic review of a property
            that identifies fire hazards, evaluates who is at risk from them,
            and records what action is needed to reduce that risk to an
            acceptable level. A NEBOSH qualified assessor examines means of
            escape, fire doors, fire alarms, emergency lighting and escape
            route signage, and produces a written report with a prioritised
            action plan.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            A written Fire Risk Assessment is compulsory for every HMO under
            the Regulatory Reform (Fire Safety) Order 2005. Landlords in{" "}
            {borough.name} operating an HMO are subject to exactly the same
            obligation as landlords elsewhere in England, and single-let
            landlords are strongly advised to hold one too.
          </p>

          <div className="rounded-xl bg-amber-50 border border-brand-amber/30 p-5 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Legal requirement: </strong>
            The Regulatory Reform (Fire Safety) Order 2005 requires a written
            Fire Risk Assessment for every HMO in {borough.name}. The
            Building Safety Act 2022 introduced further duties for buildings
            over 18 metres or 7+ storeys. Enforcement is carried out by the
            local fire and rescue authority, and non-compliance can result in
            a prohibition notice or prosecution.
          </div>
        </section>

        {/* ── Borough context ───────────────────────────────────────────────── */}
        <section aria-labelledby="borough-context-heading">
          <Heading level={2} id="borough-context-heading" className="mb-4">
            Fire Risk Assessment in {borough.name} — local property context
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            {borough.propertyContext}
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            {borough.landlordContext} Our NEBOSH qualified assessors are
            experienced with the escape routes, fire doors and communal areas
            typical of properties across the {postcodeStr} postcode areas,
            and regularly carry out Fire Risk Assessments across{" "}
            {borough.name} for private landlords, letting agents and HMO
            operators.
          </p>

          <div className="rounded-xl bg-warm-white border border-border p-5">
            <p className="font-semibold text-brand-charcoal mb-1">
              Postcodes covered in {borough.name}
            </p>
            <p className="text-sm text-brand-grey">
              {postcodeStr} and surrounding areas. Enter your full postcode
              during booking to confirm coverage and availability.
            </p>
          </div>
        </section>

        {/* ── Pricing ──────────────────────────────────────────────────────── */}
        <section id="pricing" aria-labelledby="pricing-heading">
          <Heading level={2} id="pricing-heading" className="mb-2">
            Fire Risk Assessment pricing in {borough.name}
          </Heading>
          <p className="text-brand-grey mb-6">
            Fixed pricing by property size and type. The same prices apply in{" "}
            {borough.name} as across all other London boroughs — no London
            surcharge. The only location-based fee is the £
            {ADDITIONAL_CHARGES.congestionZone} Congestion Charge Zone addition
            for central London properties.
          </p>

          <PriceTable
            title={`Fire Risk Assessment — ${borough.name} pricing`}
            rows={FRA_RESIDENTIAL_TABLE}
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
            Want the full service page?{" "}
            <Link
              href="/fire-risk-assessment"
              className="text-compliance-blue hover:underline font-medium"
            >
              See our full Fire Risk Assessment page →
            </Link>
          </p>
        </section>

        {/* ── What's included ──────────────────────────────────────────────── */}
        <section aria-labelledby="included-heading">
          <Heading level={2} id="included-heading" className="mb-4">
            What&apos;s included from £{entryPrice}
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Every Fire Risk Assessment we carry out in {borough.name} covers
            the complete review at no extra cost beyond the price shown.
          </p>
          <ul className="space-y-3" role="list">
            {[
              "Identification of fire hazards and sources of ignition throughout the property",
              "Assessment of means of escape and travel distances",
              "Inspection of fire doors, self-closers and door seals",
              "Check of fire alarm and detection system coverage",
              "Emergency lighting and escape route signage check",
              "NEBOSH qualified assessor — fully qualified and insured",
              "Written report with prioritised action plan emailed within 48 hours",
              "Clear timescales for any remedial action identified",
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
            Fire Risk Assessment {borough.name} — frequently asked questions
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
                name: "EICR Certificate",
                href: "/eicr",
                desc: `Electrical Installation Condition Report from £${getPriceForEICR("studio")}. Legally required every 5 years.`,
              },
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
          <p className="mt-6 text-sm text-brand-grey">
            Managing an HMO in {borough.name}?{" "}
            <Link
              href="/hmo-compliance"
              className="text-compliance-blue hover:underline font-medium"
            >
              See all HMO compliance certificates →
            </Link>
          </p>
        </section>

        {/* ── Other services in this borough ────────────────────────────────── */}
        <section aria-labelledby="other-services-heading">
          <Heading level={2} id="other-services-heading" className="mb-4">
            Other services in {borough.name}
          </Heading>
          <p className="text-brand-grey mb-6">
            We also cover these landlord certificates in {borough.name}:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {BOROUGH_SERVICES.filter((s) => s.slug !== "fire-risk-assessment").map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}/${slug}`}
                className="border border-border rounded-xl p-4 hover:border-compliance-blue transition-colors group"
              >
                <p className="font-semibold text-brand-charcoal group-hover:text-compliance-blue transition-colors text-sm">
                  {service.label}
                </p>
                <p className="text-xs text-brand-grey mt-1">in {borough.name}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Nearby borough pages ─────────────────────────────────────────── */}
        {borough.nearbyBoroughs.length > 0 && (
          <section aria-labelledby="nearby-boroughs-heading">
            <Heading level={2} id="nearby-boroughs-heading" className="mb-4">
              Fire Risk Assessment in nearby boroughs
            </Heading>
            <p className="text-brand-grey mb-6">
              We cover all 33 London boroughs. See Fire Risk Assessment
              pricing and booking for areas near {borough.name}:
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {borough.nearbyBoroughs.map((nearbySlug) => {
                const nearby = getBoroughData(nearbySlug);
                if (!nearby) return null;
                return (
                  <Link
                    key={nearbySlug}
                    href={`/fire-risk-assessment/${nearbySlug}`}
                    className="border border-border rounded-xl p-4 hover:border-compliance-blue transition-colors group"
                  >
                    <p className="font-semibold text-brand-charcoal group-hover:text-compliance-blue transition-colors">
                      Fire Risk Assessment {nearby.name}
                    </p>
                    <p className="text-sm text-brand-grey mt-1">
                      from £{entryPrice} · {nearby.postcodes.slice(0, 3).join(", ")}
                      {nearby.postcodes.length > 3 ? " …" : ""}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* ── CTA block ────────────────────────────────────────────────────── */}
        <section
          aria-labelledby="cta-heading"
          className="rounded-2xl bg-compliance-blue px-8 py-10 text-center text-white"
        >
          <Heading level={2} id="cta-heading" inverted className="mb-2">
            Book your Fire Risk Assessment in {borough.name}
          </Heading>
          <p className="text-blue-200 mb-2 max-w-md mx-auto">
            Book online in under 3 minutes. A NEBOSH qualified assessor
            confirms your appointment. Written report emailed within 48
            hours.
          </p>
          <p className="text-blue-100 text-sm mb-6 max-w-md mx-auto">
            Same-week appointments across {borough.name} and all 33 London
            boroughs.
          </p>
          <Link
            href="/book?service=fra-residential"
            className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
          >
            Book Fire Risk Assessment in {borough.name} — from £{entryPrice}
          </Link>
          <p className="mt-4 text-xs text-blue-100">
            Fixed pricing. No hidden charges. NEBOSH qualified. Report emailed within 48 hours.
          </p>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=fra-residential"
        label="Book Fire Risk Assessment"
        price={entryPrice}
        serviceName={`Fire Risk Assessment ${borough.name}`}
      />
    </>
  );
}

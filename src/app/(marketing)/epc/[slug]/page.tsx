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
  DOMESTIC_EPC_TABLE,
  getPriceForEICR,
  getPriceForEPC,
  getPriceForGasSafety,
  getPriceForPAT,
} from "@/lib/pricing";
import { ALL_BOROUGHS, getBoroughData } from "@/lib/borough-data";
import { SITE_URL } from "@/lib/constants";

const entryPrice = getPriceForEPC("studio");

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
    title: `EPC Certificate ${borough.name} from £${entryPrice}`,
    description: `Accredited DEA assessors in ${borough.name}. EPC certificate from £${entryPrice}, valid 10 years. Certificate emailed within 24 hours. Book online.`,
    alternates: {
      canonical: `${SITE_URL}/epc/${slug}`,
    },
    openGraph: {
      title: `EPC Certificate ${borough.name} from £${entryPrice} | My Landlord Certificate`,
      description: `Accredited DEA assessors in ${borough.name}. EPC certificate from £${entryPrice}, valid 10 years. Certificate emailed within 24 hours. Book online.`,
      url: `${SITE_URL}/epc/${slug}`,
    },
  };
}

export default async function EPCBoroughPage({
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
    url: `${SITE_URL}/epc/${slug}`,
    areaServed: { "@type": "City", name: borough.name },
    priceRange: `from £${entryPrice}`,
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `EPC Certificate ${borough.name}`,
    url: `${SITE_URL}/epc/${slug}`,
    description: `Energy Performance Certificate in ${borough.name} from £${entryPrice}. Accredited DEA assessors. Valid 10 years. Certificate emailed within 24 hours.`,
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
      url: `${SITE_URL}/epc/${slug}`,
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
        name: "EPC Certificate",
        item: `${SITE_URL}/epc`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `EPC Certificate ${borough.name}`,
        item: `${SITE_URL}/epc/${slug}`,
      },
    ],
  };

  const faqItems = [
    {
      question: `Is an EPC a legal requirement for landlords in ${borough.name}?`,
      answer: `Yes. The Energy Performance of Buildings (England and Wales) Regulations 2012 require every landlord — including those letting property in ${borough.name} — to provide a valid EPC to prospective tenants before marketing a property to let. Failure to comply can result in a local authority penalty charge of up to £5,000.`,
    },
    {
      question: `What is the minimum EPC rating required to let a property in ${borough.name}?`,
      answer: `Under the Minimum Energy Efficiency Standards (MEES), landlords in ${borough.name} must not let a property on a new tenancy if it has an EPC rating below E. Letting a property rated F or G on a new or renewed tenancy is unlawful and can result in a fine of up to £5,000.`,
    },
    {
      question: `How much does an EPC cost in ${borough.name}?`,
      answer: `An EPC in ${borough.name} starts from £${entryPrice} for a studio apartment. A 1–3 bedroom property costs £${getPriceForEPC("1-3bed")}, and a 5-bedroom property costs £${getPriceForEPC("5bed")}. The only location-based surcharge is £${ADDITIONAL_CHARGES.congestionZone} for properties within the London Congestion Charge Zone, and £${ADDITIONAL_CHARGES.parking} if no free on-site parking is available.`,
    },
    {
      question: "What does the EPC assessment check?",
      answer:
        "Our accredited Domestic Energy Assessor (DEA) inspects the property's insulation, heating system, hot water system, windows, lighting and any renewable energy installations. Each element is scored to produce an overall energy efficiency rating from A (most efficient) to G (least efficient), along with a report of recommended improvements and their estimated cost and impact.",
    },
    {
      question: "How long is an EPC valid?",
      answer:
        "An EPC is valid for 10 years from the date of assessment, or until a newer EPC is registered for the same property, whichever comes first. You do not need a new EPC for every tenancy as long as your existing certificate has not expired.",
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
        aria-labelledby="epc-borough-heading"
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
                  href="/epc"
                  className="hover:text-white transition-colors"
                >
                  EPC Certificate
                </Link>
              </li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li className="text-white font-medium">
                EPC Certificate {borough.name}
              </li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            Accredited DEA Assessors · Valid 10 Years · {borough.name}
          </p>

          <Heading
            level={1}
            id="epc-borough-heading"
            inverted
            className="mb-4 max-w-2xl"
          >
            EPC Certificate {borough.name} — from £{entryPrice}
          </Heading>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-3">
            Energy Performance Certificate for landlords in {borough.name}.
            Accredited DEA assessors, fixed pricing, no hidden charges —
            certificate emailed within 24 hours.
          </p>

          <p className="text-blue-200 text-base mb-6 max-w-xl">
            Postcodes covered: {postcodeStr}. Next-day appointments
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
              href="/book?service=epc"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book EPC in {borough.name} — from £{entryPrice}
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
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">Valid for</dt>
              <dd className="text-sm font-bold text-white">10 years</dd>
            </div>
            <div className="flex flex-col gap-1 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">Certificate</dt>
              <dd className="text-sm font-bold text-white">within 24 hours</dd>
            </div>
            <div className="flex flex-col gap-1 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">Standard</dt>
              <dd className="text-sm font-bold text-white">MEES compliant</dd>
            </div>
          </dl>
        </Container>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── What is an EPC ──────────────────────────────────────────────── */}
        <section aria-labelledby="what-is-it-heading">
          <Heading level={2} id="what-is-it-heading" className="mb-4">
            What is an EPC?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            An Energy Performance Certificate (EPC) rates the energy
            efficiency of a property on a scale from A (most efficient) to G
            (least efficient). An accredited Domestic Energy Assessor (DEA)
            inspects the property's insulation, heating system, hot water
            system, windows and lighting to produce the rating, along with a
            report of recommended improvements and their estimated cost and
            impact.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Every landlord in England must provide a valid EPC before
            marketing a property to let, and the property must meet the
            Minimum Energy Efficiency Standard (MEES) of an E rating or
            above. Landlords in {borough.name} are subject to exactly the
            same obligation as landlords elsewhere in England.
          </p>

          <div className="rounded-xl bg-amber-50 border border-brand-amber/30 p-5 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Legal requirement: </strong>
            The Energy Performance of Buildings (England and Wales)
            Regulations 2012 require a valid EPC before any residential
            property in {borough.name} is marketed to let. Under MEES,
            properties rated F or G cannot lawfully be let, and failure to
            provide a valid EPC can result in a local authority penalty of
            up to <strong>£5,000</strong>.
          </div>
        </section>

        {/* ── Borough context ───────────────────────────────────────────────── */}
        <section aria-labelledby="borough-context-heading">
          <Heading level={2} id="borough-context-heading" className="mb-4">
            EPC assessments in {borough.name} — local property context
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            {borough.propertyContext}
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            {borough.landlordContext} Our accredited DEA assessors are
            experienced with the insulation and heating systems typically
            found in properties across the {postcodeStr} postcode areas, and
            regularly carry out EPC assessments across {borough.name} for
            private landlords, letting agents and HMO operators.
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
            EPC pricing in {borough.name}
          </Heading>
          <p className="text-brand-grey mb-6">
            Fixed pricing by property size. The same prices apply in{" "}
            {borough.name} as across all other London boroughs — no London
            surcharge. The only location-based fee is the £
            {ADDITIONAL_CHARGES.congestionZone} Congestion Charge Zone addition
            for central London properties.
          </p>

          <PriceTable
            title={`EPC Certificate — ${borough.name} pricing`}
            rows={DOMESTIC_EPC_TABLE}
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
              href="/epc"
              className="text-compliance-blue hover:underline font-medium"
            >
              See our full EPC Certificate page →
            </Link>
          </p>
        </section>

        {/* ── What's included ──────────────────────────────────────────────── */}
        <section aria-labelledby="included-heading">
          <Heading level={2} id="included-heading" className="mb-4">
            What&apos;s included from £{entryPrice}
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Every EPC assessment we carry out in {borough.name} covers the
            complete property survey at no extra cost beyond the price shown.
          </p>
          <ul className="space-y-3" role="list">
            {[
              "Full property survey by an accredited Domestic Energy Assessor",
              "Assessment of insulation, heating system and hot water system",
              "Window, glazing and lighting efficiency check",
              "A–G energy efficiency rating with SAP score",
              "Report of recommended improvements with estimated cost and impact",
              "Certificate lodged on the national EPC register automatically",
              "Signed EPC emailed within 24 hours",
              "Valid for 10 years from the date of assessment",
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
            EPC Certificate {borough.name} — frequently asked questions
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

        {/* ── Nearby borough pages ─────────────────────────────────────────── */}
        {borough.nearbyBoroughs.length > 0 && (
          <section aria-labelledby="nearby-boroughs-heading">
            <Heading level={2} id="nearby-boroughs-heading" className="mb-4">
              EPC Certificate in nearby boroughs
            </Heading>
            <p className="text-brand-grey mb-6">
              We cover all 33 London boroughs. See EPC pricing and booking for
              areas near {borough.name}:
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {borough.nearbyBoroughs.map((nearbySlug) => {
                const nearby = getBoroughData(nearbySlug);
                if (!nearby) return null;
                return (
                  <Link
                    key={nearbySlug}
                    href={`/epc/${nearbySlug}`}
                    className="border border-border rounded-xl p-4 hover:border-compliance-blue transition-colors group"
                  >
                    <p className="font-semibold text-brand-charcoal group-hover:text-compliance-blue transition-colors">
                      EPC Certificate {nearby.name}
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
            Book your EPC in {borough.name}
          </Heading>
          <p className="text-blue-200 mb-2 max-w-md mx-auto">
            Book online in under 3 minutes. An accredited DEA assessor
            confirms your appointment. Certificate emailed within 24 hours.
          </p>
          <p className="text-blue-100 text-sm mb-6 max-w-md mx-auto">
            Next-day appointments across {borough.name} and all 33 London
            boroughs.
          </p>
          <Link
            href="/book?service=epc"
            className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
          >
            Book EPC in {borough.name} — from £{entryPrice}
          </Link>
          <p className="mt-4 text-xs text-blue-100">
            Fixed pricing. No hidden charges. Accredited DEA assessors. Certificate emailed within 24 hours.
          </p>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=epc"
        label="Book EPC"
        price={entryPrice}
        serviceName={`EPC ${borough.name}`}
      />
    </>
  );
}

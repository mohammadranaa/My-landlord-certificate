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
  PAT_TABLE,
  getPriceForEICR,
  getPriceForEPC,
  getPriceForGasSafety,
  getPriceForPAT,
} from "@/lib/pricing";
import { ALL_BOROUGHS, getBoroughData } from "@/lib/borough-data";
import { SITE_URL } from "@/lib/constants";

const entryPrice = getPriceForPAT(1);

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
    title: `PAT Testing ${borough.name} from £${entryPrice}`,
    description: `Accredited PAT testers in ${borough.name}. Portable Appliance Testing from £${entryPrice}. Certificate emailed within 24 hours. Book online.`,
    alternates: {
      canonical: `${SITE_URL}/pat-testing/${slug}`,
    },
    openGraph: {
      title: `PAT Testing ${borough.name} from £${entryPrice} | My Landlord Certificate`,
      description: `Accredited PAT testers in ${borough.name}. Portable Appliance Testing from £${entryPrice}. Certificate emailed within 24 hours. Book online.`,
      url: `${SITE_URL}/pat-testing/${slug}`,
    },
  };
}

export default async function PATTestingBoroughPage({
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
    url: `${SITE_URL}/pat-testing/${slug}`,
    areaServed: { "@type": "City", name: borough.name },
    priceRange: `from £${entryPrice}`,
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `PAT Testing ${borough.name}`,
    url: `${SITE_URL}/pat-testing/${slug}`,
    description: `Portable Appliance Testing in ${borough.name} from £${entryPrice}. Accredited PAT testers. Full asset register included. Certificate emailed within 24 hours.`,
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
      url: `${SITE_URL}/pat-testing/${slug}`,
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
        name: "PAT Testing",
        item: `${SITE_URL}/pat-testing`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `PAT Testing ${borough.name}`,
        item: `${SITE_URL}/pat-testing/${slug}`,
      },
    ],
  };

  const faqItems = [
    {
      question: `Is PAT Testing a legal requirement for landlords in ${borough.name}?`,
      answer: `PAT Testing is not a named legal requirement, but the Landlord and Tenant Act 1985 and the Electrical Equipment (Safety) Regulations 2016 require landlords in ${borough.name} to ensure all electrical appliances they supply are safe. PAT Testing is the recognised way to demonstrate compliance, and most landlord insurance policies specifically require it for furnished properties.`,
    },
    {
      question: `How much does PAT Testing cost in ${borough.name}?`,
      answer: `PAT Testing in ${borough.name} starts from £${entryPrice} for up to 10 appliances. 10–15 appliances cost £${getPriceForPAT(11)}, and larger portfolios are priced per appliance band up to 50 appliances. The only location-based surcharge is £${ADDITIONAL_CHARGES.congestionZone} for properties within the London Congestion Charge Zone, and £${ADDITIONAL_CHARGES.parking} if no free on-site parking is available.`,
    },
    {
      question: `How often should PAT Testing be carried out in ${borough.name}?`,
      answer: `Annually is widely recommended, and at the start of every new tenancy. For HMOs in ${borough.name}, where appliances are used more intensively and by more people, annual testing is effectively the minimum. Higher-risk properties may benefit from testing every six months.`,
    },
    {
      question: "What does a PAT test involve?",
      answer:
        "Our engineer visually inspects every portable electrical appliance for damage, then carries out electrical safety tests including earth continuity, insulation resistance and — where applicable — a functional check. Every appliance receives a pass or fail label, and you receive a full asset register listing every item tested and its result.",
    },
    {
      question: "Do I need to be at the property for PAT Testing?",
      answer:
        "No. A tenant, keyholder or letting agent can provide access. The engineer needs access to every appliance being tested. We confirm the engineer's arrival window by text in advance.",
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
        aria-labelledby="pat-borough-heading"
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
                  href="/pat-testing"
                  className="hover:text-white transition-colors"
                >
                  PAT Testing
                </Link>
              </li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li className="text-white font-medium">
                PAT Testing {borough.name}
              </li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            Accredited PAT Testers · Certificate Within 24 Hours · {borough.name}
          </p>

          <Heading
            level={1}
            id="pat-borough-heading"
            inverted
            className="mb-4 max-w-2xl"
          >
            PAT Testing {borough.name} — from £{entryPrice}
          </Heading>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-3">
            Portable Appliance Testing for landlords in {borough.name}.
            Accredited testers, fixed pricing, no hidden charges — full
            asset register and certificate emailed within 24 hours.
          </p>

          <p className="text-blue-200 text-base mb-6 max-w-xl">
            Postcodes covered: {postcodeStr}. Next-day appointments
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
              href="/book?service=pat"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book PAT testing in {borough.name} — from £{entryPrice}
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
              <dt>Appliances</dt>
              <dd className="text-white font-semibold">up to 50</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Certificate</dt>
              <dd className="text-white font-semibold">within 24 hours</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Register</dt>
              <dd className="text-white font-semibold">full asset register included</dd>
            </div>
          </dl>
        </Container>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── What is PAT Testing ─────────────────────────────────────────── */}
        <section aria-labelledby="what-is-it-heading">
          <Heading level={2} id="what-is-it-heading" className="mb-4">
            What is PAT Testing?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Portable Appliance Testing (PAT) is the inspection and testing of
            portable electrical appliances — anything with a plug, from
            kettles and toasters to washing machines and lamps — to confirm
            they are safe to use. Our engineer visually inspects each
            appliance for damage, then carries out electrical safety tests
            including earth continuity and insulation resistance.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            While not a named legal requirement, PAT Testing is the
            recognised way for landlords in {borough.name} to demonstrate
            they have met their duty of care under the Landlord and Tenant
            Act 1985 and the Electrical Equipment (Safety) Regulations 2016.
            Most landlord insurance policies specifically require it for
            furnished lets.
          </p>

          <div className="rounded-xl bg-amber-50 border border-brand-amber/30 p-5 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Insurance note: </strong>
            PAT Testing is not a named legal minimum, but landlords in{" "}
            {borough.name} should check their buildings and contents
            insurance policy — many insurers will refuse a claim arising
            from a faulty appliance if you cannot produce a{" "}
            <strong>current PAT certificate</strong>.
          </div>
        </section>

        {/* ── Borough context ───────────────────────────────────────────────── */}
        <section aria-labelledby="borough-context-heading">
          <Heading level={2} id="borough-context-heading" className="mb-4">
            PAT Testing in {borough.name} — local property context
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            {borough.propertyContext}
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            {borough.landlordContext} Our accredited PAT testers regularly
            test furnished lets and HMOs across the {postcodeStr} postcode
            areas, and carry out PAT Testing across {borough.name} for
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
            PAT Testing pricing in {borough.name}
          </Heading>
          <p className="text-brand-grey mb-6">
            Fixed pricing by number of appliances. The same prices apply in{" "}
            {borough.name} as across all other London boroughs — no London
            surcharge. The only location-based fee is the £
            {ADDITIONAL_CHARGES.congestionZone} Congestion Charge Zone addition
            for central London properties.
          </p>

          <PriceTable
            title={`PAT Testing — ${borough.name} pricing`}
            rows={PAT_TABLE}
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
              href="/pat-testing"
              className="text-compliance-blue hover:underline font-medium"
            >
              See our full PAT Testing page →
            </Link>
          </p>
        </section>

        {/* ── What's included ──────────────────────────────────────────────── */}
        <section aria-labelledby="included-heading">
          <Heading level={2} id="included-heading" className="mb-4">
            What&apos;s included from £{entryPrice}
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Every PAT Testing visit we carry out in {borough.name} covers up
            to 10 appliances at no extra cost beyond the price shown.
          </p>
          <ul className="space-y-3" role="list">
            {[
              "Visual inspection of every portable appliance for damage or wear",
              "Earth continuity and insulation resistance testing",
              "Functional check where applicable",
              "Pass/fail label applied to every appliance tested",
              "Full asset register listing every appliance and its result",
              "Accredited PAT tester — fully qualified and insured",
              "Digital certificate emailed within 24 hours",
              "Faulty appliances flagged with a clear recommendation",
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
            PAT Testing {borough.name} — frequently asked questions
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

        {/* ── Nearby borough pages ─────────────────────────────────────────── */}
        {borough.nearbyBoroughs.length > 0 && (
          <section aria-labelledby="nearby-boroughs-heading">
            <Heading level={2} id="nearby-boroughs-heading" className="mb-4">
              PAT Testing in nearby boroughs
            </Heading>
            <p className="text-brand-grey mb-6">
              We cover all 33 London boroughs. See PAT Testing pricing and
              booking for areas near {borough.name}:
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {borough.nearbyBoroughs.map((nearbySlug) => {
                const nearby = getBoroughData(nearbySlug);
                if (!nearby) return null;
                return (
                  <Link
                    key={nearbySlug}
                    href={`/pat-testing/${nearbySlug}`}
                    className="border border-border rounded-xl p-4 hover:border-compliance-blue transition-colors group"
                  >
                    <p className="font-semibold text-brand-charcoal group-hover:text-compliance-blue transition-colors">
                      PAT Testing {nearby.name}
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
            Book your PAT Testing in {borough.name}
          </Heading>
          <p className="text-blue-200 mb-2 max-w-md mx-auto">
            Book online in under 3 minutes. An accredited PAT tester
            confirms your appointment. Certificate emailed within 24 hours.
          </p>
          <p className="text-blue-300 text-sm mb-6 max-w-md mx-auto">
            Next-day appointments across {borough.name} and all 33 London
            boroughs.
          </p>
          <Link
            href="/book?service=pat"
            className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
          >
            Book PAT Testing in {borough.name} — from £{entryPrice}
          </Link>
          <p className="mt-4 text-xs text-blue-300">
            Fixed pricing. No hidden charges. Accredited testers. Certificate emailed within 24 hours.
          </p>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=pat"
        label="Book PAT Testing"
        price={entryPrice}
        serviceName={`PAT Testing ${borough.name}`}
      />
    </>
  );
}

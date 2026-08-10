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
  GAS_SAFETY_CP12_TABLE,
  getPriceForEICR,
  getPriceForEPC,
  getPriceForGasSafety,
  getPriceForPAT,
} from "@/lib/pricing";
import { ALL_BOROUGHS, getBoroughData } from "@/lib/borough-data";
import { SITE_URL } from "@/lib/constants";

const entryPrice = getPriceForGasSafety(1);

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
    title: `Gas Safety Certificate ${borough.name} from £${entryPrice}`,
    description: `Gas Safe registered engineers in ${borough.name}. CP12 gas safety certificate from £${entryPrice}. Certificate emailed within 24 hours. Book online.`,
    alternates: {
      canonical: `${SITE_URL}/gas-safety-certificate/${slug}`,
    },
    openGraph: {
      title: `Gas Safety Certificate ${borough.name} from £${entryPrice} | My Landlord Certificate`,
      description: `Gas Safe registered engineers in ${borough.name}. CP12 gas safety certificate from £${entryPrice}. Certificate emailed within 24 hours. Book online.`,
      url: `${SITE_URL}/gas-safety-certificate/${slug}`,
    },
  };
}

export default async function GasSafetyBoroughPage({
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
    url: `${SITE_URL}/gas-safety-certificate/${slug}`,
    areaServed: { "@type": "City", name: borough.name },
    priceRange: `from £${entryPrice}`,
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Gas Safety Certificate ${borough.name} (CP12)`,
    url: `${SITE_URL}/gas-safety-certificate/${slug}`,
    description: `Gas Safe registered engineers in ${borough.name}. Annual CP12 gas safety inspection from £${entryPrice}. Certificate emailed within 24 hours.`,
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
      url: `${SITE_URL}/gas-safety-certificate/${slug}`,
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
        name: "Gas Safety Certificate",
        item: `${SITE_URL}/gas-safety-certificate`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Gas Safety Certificate ${borough.name}`,
        item: `${SITE_URL}/gas-safety-certificate/${slug}`,
      },
    ],
  };

  const faqItems = [
    {
      question: `Is a Gas Safety Certificate a legal requirement for landlords in ${borough.name}?`,
      answer: `Yes. The Gas Safety (Installation and Use) Regulations 1998 require every landlord — including those letting property in ${borough.name} — to arrange an annual gas safety check by a Gas Safe Registered engineer, provide the signed CP12 to tenants, and keep records for at least 2 years. Failure to comply is a criminal offence carrying an unlimited fine and up to 2 years' imprisonment.`,
    },
    {
      question: `How much does a Gas Safety Certificate cost in ${borough.name}?`,
      answer: `A CP12 in ${borough.name} starts from £${entryPrice} for a single gas appliance. Two appliances cost £${getPriceForGasSafety(2)}, and three appliances cost £${getPriceForGasSafety(3)}. The only location-based surcharge is £${ADDITIONAL_CHARGES.congestionZone} for properties within the London Congestion Charge Zone, and £${ADDITIONAL_CHARGES.parking} if no free on-site parking is available.`,
    },
    {
      question: `What does the gas safety check cover in ${borough.name}?`,
      answer: `Our Gas Safe Registered engineer inspects every gas appliance in the property — boilers, gas fires, hobs and cookers — checking for correct operation, adequate ventilation, secure flue connections and correct gas pressure. Every appliance is listed on the certificate with its result, and the certificate is emailed to you within 24 hours of the inspection.`,
    },
    {
      question: "What happens if an appliance fails the gas safety check?",
      answer:
        "If an appliance is found to be immediately dangerous, the engineer will disconnect it on the spot and label it 'Do Not Use' for the safety of your tenants. Less urgent faults are noted on the certificate with a recommended timescale for repair. We can quote for and carry out any remedial work needed to bring the appliance back into a safe, certifiable condition.",
    },
    {
      question: "Do I need to be at the property for the gas safety check?",
      answer:
        "No. A tenant, keyholder or letting agent can provide access. The engineer needs access to every room containing a gas appliance, including the boiler cupboard and kitchen. We confirm the engineer's arrival window by text in advance.",
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
        aria-labelledby="gas-safety-borough-heading"
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
                  href="/gas-safety-certificate"
                  className="hover:text-white transition-colors"
                >
                  Gas Safety Certificate
                </Link>
              </li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li className="text-white font-medium">
                Gas Safety Certificate {borough.name}
              </li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            Gas Safe Registered · Certificate Within 24 Hours · {borough.name}
          </p>

          <Heading
            level={1}
            id="gas-safety-borough-heading"
            inverted
            className="mb-4 max-w-2xl"
          >
            Gas Safety Certificate {borough.name} — from £{entryPrice}
          </Heading>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-3">
            Annual CP12 gas safety inspection for landlords in {borough.name}.
            Gas Safe registered engineers, fixed pricing, no hidden charges —
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
            className="mb-8 [&>span:last-child]:text-white"
          />

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/book?service=gas-safety-cp12"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book gas safety certificate in {borough.name} — from £{entryPrice}
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
              <dd className="text-white font-semibold">12 months</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Certificate</dt>
              <dd className="text-white font-semibold">within 24 hours</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Accreditation</dt>
              <dd className="text-white font-semibold">Gas Safe Registered</dd>
            </div>
          </dl>
        </Container>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── What is a CP12 ──────────────────────────────────────────────── */}
        <section aria-labelledby="what-is-it-heading">
          <Heading level={2} id="what-is-it-heading" className="mb-4">
            What is a Gas Safety Certificate (CP12)?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            A Gas Safety Certificate, formally known as a CP12, is a document
            confirming that all gas appliances, flues and pipework in a rental
            property have been inspected by a Gas Safe Registered engineer and
            found to be safe. The engineer checks each appliance for correct
            operation, adequate ventilation, secure flue connections and correct
            gas pressure, and lists every appliance on the certificate along
            with its result.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Every private landlord in England has been legally required to hold
            a valid CP12 and renew it every 12 months since the Gas Safety
            (Installation and Use) Regulations 1998 came into force. Landlords
            in {borough.name} are subject to exactly the same obligation as
            landlords elsewhere in England.
          </p>

          <div className="rounded-xl bg-amber-50 border border-brand-amber/30 p-5 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Legal requirement: </strong>
            The Gas Safety (Installation and Use) Regulations 1998 require
            landlords in {borough.name} to arrange an annual gas safety check by
            a Gas Safe Registered engineer, provide the signed CP12 to tenants,
            and keep records for at least 2 years. Failure to comply is a
            criminal offence carrying an unlimited fine and up to{" "}
            <strong>2 years&apos; imprisonment</strong>.
          </div>
        </section>

        {/* ── Borough context ───────────────────────────────────────────────── */}
        <section aria-labelledby="borough-context-heading">
          <Heading level={2} id="borough-context-heading" className="mb-4">
            Gas safety in {borough.name} — local property context
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            {borough.propertyContext}
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            {borough.landlordContext} Our Gas Safe registered engineers are
            experienced with the boilers, gas fires and appliances typically
            found in properties across the {postcodeStr} postcode areas, and
            regularly carry out CP12 inspections across {borough.name} for
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
            Gas Safety Certificate pricing in {borough.name}
          </Heading>
          <p className="text-brand-grey mb-6">
            Fixed pricing by number of gas appliances. The same prices apply
            in {borough.name} as across all other London boroughs — no London
            surcharge. The only location-based fee is the £
            {ADDITIONAL_CHARGES.congestionZone} Congestion Charge Zone addition
            for central London properties.
          </p>

          <PriceTable
            title={`Gas Safety Certificate (CP12) — ${borough.name} pricing`}
            rows={GAS_SAFETY_CP12_TABLE}
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
              href="/gas-safety-certificate"
              className="text-compliance-blue hover:underline font-medium"
            >
              See our full Gas Safety Certificate page →
            </Link>
          </p>
        </section>

        {/* ── What's included ──────────────────────────────────────────────── */}
        <section aria-labelledby="included-heading">
          <Heading level={2} id="included-heading" className="mb-4">
            What&apos;s included from £{entryPrice}
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Every gas safety check we carry out in {borough.name} covers the
            complete inspection at no extra cost beyond the price shown.
          </p>
          <ul className="space-y-3" role="list">
            {[
              "Inspection of every gas appliance — boiler, hob, cooker and gas fire",
              "Flue flow and spillage testing on every appliance with a flue",
              "Gas pressure and burner pressure checks",
              "Visual check of pipework, joints and fittings for leaks or damage",
              "Ventilation adequacy check for every gas appliance",
              "Gas Safe registered engineer — fully qualified and independently assessed",
              "Signed CP12 certificate emailed within 24 hours",
              "Immediate isolation of any appliance found to be unsafe",
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
            Gas Safety Certificate {borough.name} — frequently asked questions
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
              Gas Safety Certificate in nearby boroughs
            </Heading>
            <p className="text-brand-grey mb-6">
              We cover all 33 London boroughs. See Gas Safety Certificate
              pricing and booking for areas near {borough.name}:
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {borough.nearbyBoroughs.map((nearbySlug) => {
                const nearby = getBoroughData(nearbySlug);
                if (!nearby) return null;
                return (
                  <Link
                    key={nearbySlug}
                    href={`/gas-safety-certificate/${nearbySlug}`}
                    className="border border-border rounded-xl p-4 hover:border-compliance-blue transition-colors group"
                  >
                    <p className="font-semibold text-brand-charcoal group-hover:text-compliance-blue transition-colors">
                      Gas Safety Certificate {nearby.name}
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
            Book your Gas Safety Certificate in {borough.name}
          </Heading>
          <p className="text-blue-200 mb-2 max-w-md mx-auto">
            Book online in under 3 minutes. A Gas Safe registered engineer
            confirms your appointment. Certificate emailed within 24 hours.
          </p>
          <p className="text-blue-300 text-sm mb-6 max-w-md mx-auto">
            Next-day appointments across {borough.name} and all 33 London
            boroughs.
          </p>
          <Link
            href="/book?service=gas-safety-cp12"
            className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
          >
            Book Gas Safety Certificate in {borough.name} — from £{entryPrice}
          </Link>
          <p className="mt-4 text-xs text-blue-300">
            Fixed pricing. No hidden charges. Gas Safe Registered. Certificate emailed within 24 hours.
          </p>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=gas-safety-cp12"
        label="Book Gas Safety"
        price={entryPrice}
        serviceName={`Gas Safety ${borough.name}`}
      />
    </>
  );
}

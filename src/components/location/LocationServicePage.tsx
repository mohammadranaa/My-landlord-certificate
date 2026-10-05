import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/shared/json-ld";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { TrustBadges } from "@/components/ui/trust-badges";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { ReviewsSection } from "@/components/marketing/reviews-section";
import { SERVICE_ICONS } from "@/components/ui/service-icons";
import {
  LOCATION_SERVICES,
  getLocationService,
  reviewsHeadingForService,
  type LocationService,
} from "@/lib/location-services";
import { ALL_BOROUGHS, getBoroughData, type BoroughData } from "@/lib/borough-data";
import { ADDITIONAL_CHARGES } from "@/lib/pricing";
import { reviewsForService } from "@/data/reviews";
import { SITE_URL, PHONE_DISPLAY, TEL } from "@/lib/constants";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function formatPrice(price: number): string {
  return price % 1 === 0 ? `${price}` : price.toFixed(2);
}

/**
 * Localizes a service's static FAQ list for a specific borough. Appends
 * "in {borough}" to each question, and appends one real, borough-specific
 * clause (built from registry data — postcodes, nearby boroughs, congestion
 * zone — never invented) to each vetted answer, cycling through a few
 * distinct facts so the clauses aren't all identical to each other. Also
 * adds one fully dynamic coverage FAQ. Together this keeps the FAQ block
 * from being byte-identical across all 33 borough pages for a service.
 */
function localizeFaqs(
  service: LocationService,
  borough: BoroughData,
  postcodeStr: string,
): { question: string; answer: string }[] {
  const nearbyNames = borough.nearbyBoroughs
    .map((s) => getBoroughData(s)?.name)
    .filter((n): n is string => Boolean(n));

  const localClauses = [
    `Our engineers regularly carry out ${service.name.toLowerCase()} work for landlords across ${borough.name}, including the ${postcodeStr} postcode areas.`,
    nearbyNames.length > 0
      ? `This applies equally to landlords in ${borough.name} and in neighbouring boroughs such as ${nearbyNames.join(", ")}.`
      : `This applies equally to landlords across ${borough.name}.`,
    borough.congestionZone
      ? `Properties in ${borough.name} fall within the London Congestion Charge Zone, which carries a £${ADDITIONAL_CHARGES.congestionZone} surcharge on top of the price above.`
      : `${borough.name} sits outside the London Congestion Charge Zone, so no congestion surcharge applies here.`,
    `We book ${service.shortName} appointments across every part of ${borough.name} — enter your postcode when booking to confirm availability.`,
  ];

  const localized = service.faqs.map((faq, i) => ({
    question: faq.question.endsWith("?")
      ? `${faq.question.slice(0, -1)} in ${borough.name}?`
      : faq.question,
    answer: `${faq.answer} ${localClauses[i % localClauses.length]}`,
  }));

  localized.push({
    question: `Do you cover ${service.shortName.toLowerCase()} in ${borough.name}?`,
    answer: [
      `Yes, we cover the whole of ${borough.name}, including the ${postcodeStr} postcode areas.`,
      nearbyNames.length > 0
        ? `We also cover neighbouring boroughs including ${nearbyNames.join(", ")}.`
        : null,
      borough.congestionZone
        ? `As ${borough.name} is within the London Congestion Charge Zone, a £${ADDITIONAL_CHARGES.congestionZone} surcharge applies.`
        : `${borough.name} is outside the London Congestion Charge Zone, so no congestion surcharge applies.`,
    ].filter(Boolean).join(" "),
  });

  return localized;
}

/** Shared across every /[service]/[borough] route — pass to generateStaticParams. */
export function generateLocationStaticParams() {
  return ALL_BOROUGHS.map((b) => ({ slug: b.slug }));
}

/** Shared metadata builder — call from each service's generateMetadata. */
export async function generateLocationMetadata(
  serviceKey: string,
  slug: string,
): Promise<Metadata> {
  const service = getLocationService(serviceKey);
  const borough = getBoroughData(slug);
  if (!service || !borough) return {};

  const price = formatPrice(service.priceFrom);
  const title = `${service.shortName} ${borough.name} from £${price}`;
  const postcodeStr = borough.postcodes.slice(0, 3).join(", ");
  const description = `${service.name} in ${borough.name} (${postcodeStr}) from £${price}. Certificate emailed ${service.deliveryText}. Fixed pricing, no hidden charges. Book online.`;
  const url = `${SITE_URL}${service.urlPrefix}/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${title} | My Landlord Certificate`, description, url },
  };
}

/**
 * Shared template for every /[service]/[borough] page. Each of the 13 new
 * service routes is a thin wrapper that imports this with its own
 * `serviceKey`. See location-services.ts for the registry this reads from.
 */
export function LocationServicePage({
  serviceKey,
  slug,
}: {
  serviceKey: string;
  slug: string;
}) {
  const service = getLocationService(serviceKey);
  const borough = getBoroughData(slug);
  if (!service || !borough) notFound();

  const price = formatPrice(service.priceFrom);
  const postcodeStr = borough.postcodes.join(", ");
  const url = `${SITE_URL}${service.urlPrefix}/${slug}`;
  const bookHref = `/book?service=${service.bookingParam}`;
  const Icon = SERVICE_ICONS[service.icon];
  const otherServices = LOCATION_SERVICES.filter((s) => s.key !== service.key);
  const reviews = reviewsForService(service.reviewTag, 3);
  const reviewsHeading = reviewsHeadingForService(service);
  const localizedFaqs = localizeFaqs(service, borough, postcodeStr);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} — ${borough.name}`,
    url,
    description: `${service.name} in ${borough.name} from £${price}. Certificate emailed ${service.deliveryText}.`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: { "@type": "City", name: borough.name },
    offers: {
      "@type": "Offer",
      price: `${service.priceFrom}`,
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: service.name, item: `${SITE_URL}${service.urlPrefix}` },
      { "@type": "ListItem", position: 3, name: `${service.name} ${borough.name}`, item: url },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: localizedFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── 1. Breadcrumb + 2. Hero ─────────────────────────────────────── */}
      <section aria-labelledby="location-service-heading" className="bg-hero-blue text-white">
        <Container className="py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-blue-200 flex-wrap">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li>
                <Link href={service.urlPrefix} className="hover:text-white transition-colors">
                  {service.name}
                </Link>
              </li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li className="text-white font-medium">{borough.name}</li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4 flex items-center gap-2">
            <Icon />
            Certificate Emailed {service.deliveryText} · {borough.name}
          </p>

          <Heading level={1} id="location-service-heading" inverted className="mb-4 max-w-2xl">
            {service.shortName} {borough.name} — from £{price}
          </Heading>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-3">
            {service.name} for landlords in {borough.name}. Fixed pricing, no
            hidden charges — certificate emailed {service.deliveryText}.
          </p>

          <p className="text-blue-200 text-base mb-6 max-w-xl">
            Postcodes covered: {postcodeStr}. Same-week appointments available
            — book online in under 3 minutes.
          </p>

          <PriceDisplay
            price={service.priceFrom}
            from
            size="lg"
            className="mb-8 [&>span:first-child]:text-blue-100 [&>span:last-child]:text-white"
          />

          <div className="flex flex-wrap gap-4 mb-10">
            <Link href={bookHref} className={cn(buttonVariants({ variant: "cta", size: "lg" }))}>
              Book {service.shortName} in {borough.name} — from £{price}
            </Link>
            <a
              href="#pricing"
              className={cn(buttonVariants({ size: "lg" }), "bg-white/10 border border-white/30 text-white hover:bg-white/20")}
            >
              View pricing
            </a>
          </div>

          <TrustBadges variant="dark" />
        </Container>
      </section>

      {/* ── 3. Stats bar ──────────────────────────────────────────────────── */}
      <div className="bg-spec-bar text-sm py-5 border-t-2 border-action-green">
        <Container>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-5 text-center [&>*:last-child:nth-child(odd)]:col-span-2 md:flex md:flex-wrap md:items-center md:justify-center md:gap-y-3 md:text-left text-white/70">
            <div className="flex flex-col gap-1 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">From</dt>
              <dd className="text-sm font-bold text-white">£{price}{service.priceSuffix ?? ""}</dd>
            </div>
            <div className="flex flex-col gap-1 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">Delivery</dt>
              <dd className="text-sm font-bold text-white">{service.deliveryText}</dd>
            </div>
            <div className="flex flex-col gap-1 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">Pricing</dt>
              <dd className="text-sm font-bold text-white">Fixed, no surprises</dd>
            </div>
            <div className="flex flex-col gap-1 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">Coverage</dt>
              <dd className="text-sm font-bold text-white">{borough.name}</dd>
            </div>
          </dl>
        </Container>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── 4. What it is + legal basis ──────────────────────────────── */}
        <section aria-labelledby="what-is-it-heading">
          <Heading level={2} id="what-is-it-heading" className="mb-4">
            What is {service.name}?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            {service.whoNeedsIt}
          </p>
          <div className="rounded-xl bg-amber-50 border border-brand-amber/30 p-5 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Legal basis: </strong>
            {service.legalBasis}
          </div>
        </section>

        {/* ── 5. Local context ─────────────────────────────────────────── */}
        <section aria-labelledby="borough-context-heading">
          <Heading level={2} id="borough-context-heading" className="mb-4">
            {service.shortName} in {borough.name} — local property context
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            {borough.propertyContext}
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            {borough.landlordContext} Our accredited engineers regularly carry
            out {service.name.toLowerCase()} work across {borough.name} for
            private landlords, letting agents and HMO operators, and are
            familiar with the {postcodeStr} postcode areas.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            {borough.congestionZone
              ? `${borough.name} falls within the London Congestion Charge Zone, so a £${ADDITIONAL_CHARGES.congestionZone} surcharge applies on top of the price above.`
              : `${borough.name} is outside the London Congestion Charge Zone, so no congestion surcharge applies here.`}
            {borough.nearbyBoroughs.length > 0 && (
              <>
                {" "}We also regularly book {service.shortName} appointments in
                neighbouring {borough.nearbyBoroughs.length === 1 ? "borough" : "boroughs"} such
                as {borough.nearbyBoroughs
                  .map((s) => getBoroughData(s)?.name)
                  .filter((n): n is string => Boolean(n))
                  .join(", ")}, so if your portfolio spans more than one area
                we can usually coordinate visits on the same day.
              </>
            )}
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

        {/* ── 6. Pricing ────────────────────────────────────────────────── */}
        <section id="pricing" aria-labelledby="pricing-heading">
          <Heading level={2} id="pricing-heading" className="mb-2">
            {service.shortName} pricing in {borough.name}
          </Heading>

          {borough.insideM25 ? (
            <>
              <p className="text-brand-grey mb-6">
                Fixed pricing — the same prices apply in {borough.name} as
                across all other London boroughs, no London surcharge.
              </p>

              {service.priceTable ? (
                <PriceTable
                  title={`${service.name} — ${borough.name} pricing`}
                  rows={service.priceTable}
                  highlightCheapest
                  bookHref={bookHref}
                />
              ) : (
                <div className="rounded-xl border border-border bg-warm-white p-6 text-center">
                  <p className="text-3xl font-bold text-brand-charcoal mb-1">
                    from £{price}{service.priceSuffix ?? ""}
                  </p>
                  <Link href={bookHref} className={cn(buttonVariants({ variant: "cta", size: "md" }), "mt-4")}>
                    Book now
                  </Link>
                </div>
              )}

              {service.priceNote && (
                <p className="text-sm text-brand-grey mt-4">{service.priceNote}</p>
              )}

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
                    {borough.congestionZone && (
                      <> — most of {borough.name} falls inside the zone</>
                    )}
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div className="rounded-xl border border-brand-amber/30 bg-amber-50 p-6 text-center">
              <p className="font-semibold text-brand-charcoal mb-2">
                Outside the M25 — fixed quote within 24 hours
              </p>
              <p className="text-sm text-brand-charcoal/70 mb-4">
                Call {PHONE_DISPLAY} and we will confirm a fixed price for
                your postcode before any work begins.
              </p>
              <a href={TEL} className={cn(buttonVariants({ variant: "cta", size: "md" }))}>
                Call {PHONE_DISPLAY}
              </a>
            </div>
          )}
        </section>

        {/* ── 7. What's included ───────────────────────────────────────── */}
        <section aria-labelledby="included-heading">
          <Heading level={2} id="included-heading" className="mb-4">
            What&apos;s included from £{price}
          </Heading>
          <ul className="space-y-3" role="list">
            {service.whatsIncluded.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-action-green/15 flex items-center justify-center">
                  <svg className="w-3 h-3 text-action-green" fill="none" viewBox="0 0 12 12" aria-hidden="true">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-brand-charcoal/80">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── 8. Reviews ────────────────────────────────────────────────── */}
        {reviews.length > 0 && <ReviewsSection reviews={reviews} heading={reviewsHeading} />}

        {/* ── 9. FAQs ───────────────────────────────────────────────────── */}
        <section aria-labelledby="faq-heading" className="below-fold">
          <Heading level={2} id="faq-heading" className="mb-6">
            {service.shortName} {borough.name} — frequently asked questions
          </Heading>
          <FAQAccordion
            items={localizedFaqs}
            includeSchema={false}
            defaultOpenIndex={localizedFaqs.length - 1}
          />
        </section>

        {/* ── 10. Other services in this borough ───────────────────────── */}
        <section aria-labelledby="other-services-heading">
          <Heading level={2} id="other-services-heading" className="mb-4">
            Other landlord certificates in {borough.name}
          </Heading>
          <p className="text-brand-grey mb-6">
            We also cover these landlord certificates in {borough.name}:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {otherServices.map((other) => (
              <Link
                key={other.key}
                href={`${other.urlPrefix}/${slug}`}
                className="border border-border rounded-xl p-4 hover:border-compliance-blue transition-colors group"
              >
                <p className="font-semibold text-brand-charcoal group-hover:text-compliance-blue transition-colors text-sm">
                  {other.shortName}
                </p>
                <p className="text-xs text-brand-grey mt-1">in {borough.name}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── 11. Nearby boroughs ───────────────────────────────────────── */}
        {borough.nearbyBoroughs.length > 0 && (
          <section aria-labelledby="nearby-boroughs-heading">
            <Heading level={2} id="nearby-boroughs-heading" className="mb-4">
              {service.shortName} in nearby boroughs
            </Heading>
            <p className="text-brand-grey mb-6">
              We cover all 33 London boroughs. See {service.shortName} pricing
              and booking for areas near {borough.name}:
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {borough.nearbyBoroughs.map((nearbySlug) => {
                const nearby = getBoroughData(nearbySlug);
                if (!nearby) return null;
                return (
                  <Link
                    key={nearbySlug}
                    href={`${service.urlPrefix}/${nearbySlug}`}
                    className="border border-border rounded-xl p-4 hover:border-compliance-blue transition-colors group"
                  >
                    <p className="font-semibold text-brand-charcoal group-hover:text-compliance-blue transition-colors">
                      {service.shortName} {nearby.name}
                    </p>
                    <p className="text-sm text-brand-grey mt-1">
                      from £{price} · {nearby.postcodes.slice(0, 3).join(", ")}
                      {nearby.postcodes.length > 3 ? " …" : ""}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* ── 12. Link to borough hub ───────────────────────────────────── */}
        <p className="text-center">
          <Link
            href={`/coverage-areas/${slug}`}
            className="text-compliance-blue hover:underline font-medium"
          >
            All landlord certificates in {borough.name} →
          </Link>
        </p>

        {/* ── 13. Final CTA ─────────────────────────────────────────────── */}
        <section
          aria-labelledby="cta-heading"
          className="rounded-2xl bg-compliance-blue px-8 py-10 text-center text-white"
        >
          <Heading level={2} id="cta-heading" inverted className="mb-2">
            Book your {service.shortName} in {borough.name}
          </Heading>
          <p className="text-blue-200 mb-2 max-w-md mx-auto">
            Book online in under 3 minutes. An accredited engineer confirms
            your appointment. Certificate emailed {service.deliveryText}.
          </p>
          <p className="text-blue-100 text-sm mb-6 max-w-md mx-auto">
            Same-week appointments across {borough.name} and all 33 London
            boroughs — or call{" "}
            <a href={TEL} className="text-white font-semibold hover:underline">{PHONE_DISPLAY}</a>.
          </p>
          <Link href={bookHref} className={cn(buttonVariants({ variant: "cta", size: "lg" }))}>
            Book {service.shortName} in {borough.name} — from £{price}
          </Link>
          <p className="mt-4 text-xs text-blue-100">
            Fixed pricing. No hidden charges. Certificate emailed {service.deliveryText}.
          </p>
        </section>
      </div>

      <StickyMobileCTA
        href={bookHref}
        label={`Book ${service.shortName}`}
        price={service.priceFrom}
        serviceName={`${service.shortName} ${borough.name}`}
      />
    </>
  );
}

export type { LocationService, BoroughData };

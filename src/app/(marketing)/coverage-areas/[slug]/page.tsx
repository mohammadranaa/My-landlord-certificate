import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/shared/json-ld";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { buttonVariants } from "@/components/ui/button";
import { ReviewsSection } from "@/components/marketing/reviews-section";
import { SERVICE_ICONS } from "@/components/ui/service-icons";
import { LOCATION_SERVICES, deliveryNoun } from "@/lib/location-services";
import { ALL_BOROUGHS, getBoroughData } from "@/lib/borough-data";
import { featuredReviews } from "@/data/reviews";
import { SITE_URL, PHONE_DISPLAY, TEL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { BoroughLocalOverview } from "@/components/location/borough-local-section";

function formatPrice(price: number): string {
  return price % 1 === 0 ? `${price}` : price.toFixed(2);
}

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

  const title = `Landlord Certificates in ${borough.name}`;
  const postcodeStr = borough.postcodes.slice(0, 3).join(", ");
  const description = `EICR, Gas Safety, EPC, Fire Risk Assessment and every landlord certificate in ${borough.name} (${postcodeStr}). Fixed prices, accredited engineers, certificates within 24 hours. Book online.`;
  const url = `${SITE_URL}/coverage-areas/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${title} | My Landlord Certificate`, description, url },
  };
}

export default async function BoroughHubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const borough = getBoroughData(slug);
  if (!borough) notFound();

  const postcodeStr = borough.postcodes.join(", ");
  const url = `${SITE_URL}/coverage-areas/${slug}`;
  const reviews = featuredReviews().slice(0, 3);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Coverage areas", item: `${SITE_URL}/coverage-areas` },
      { "@type": "ListItem", position: 3, name: borough.name, item: url },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: LOCATION_SERVICES.map((service, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${service.name} — ${borough.name}`,
      url: `${SITE_URL}${service.urlPrefix}/${slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={itemListSchema} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section aria-labelledby="hub-heading" className="bg-hero-blue text-white">
        <Container className="py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-blue-200 flex-wrap">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li><Link href="/coverage-areas" className="hover:text-white transition-colors">Coverage areas</Link></li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li className="text-white font-medium">{borough.name}</li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            All Landlord Certificates · One Provider · {borough.name}
          </p>

          <Heading level={1} id="hub-heading" inverted className="mb-4 max-w-2xl">
            Landlord Certificates in {borough.name}
          </Heading>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-3">
            Every landlord compliance certificate, from one accredited
            provider, covering all of {borough.name}.
          </p>

          <p className="text-blue-200 text-base mb-8 max-w-xl">
            Postcodes covered: {postcodeStr}. Same-week appointments
            available — book online in under 3 minutes.
          </p>

          <Link href="/book" className={cn(buttonVariants({ variant: "cta", size: "lg" }))}>
            Book in {borough.name}
          </Link>
        </Container>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── Local context ─────────────────────────────────────────────── */}
        <section aria-labelledby="context-heading">
          <Heading level={2} id="context-heading" className="mb-4">
            Landlord compliance in {borough.name}
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            {borough.propertyContext}
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            {borough.landlordContext}
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
          <BoroughLocalOverview slug={slug} boroughName={borough.name} />
        </section>

        {/* ── Every service as a card ───────────────────────────────────── */}
        <section aria-labelledby="services-heading">
          <Heading level={2} id="services-heading" className="mb-2">
            Every certificate we offer in {borough.name}
          </Heading>
          <p className="text-brand-grey mb-8">
            All {LOCATION_SERVICES.length} landlord certificates, available
            across {borough.name}. Fixed pricing, no hidden charges.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {LOCATION_SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.icon];
              return (
                <Link
                  key={service.key}
                  href={`${service.urlPrefix}/${slug}`}
                  className="rounded-xl border border-border bg-white p-5 hover:border-compliance-blue transition-colors group block"
                >
                  <div className="flex items-center gap-2.5 mb-2 text-compliance-blue">
                    <Icon />
                    <p className="font-semibold text-brand-charcoal group-hover:text-compliance-blue transition-colors">
                      {service.name}
                    </p>
                  </div>
                  <p className="text-compliance-blue font-medium text-sm mb-0.5">
                    from £{formatPrice(service.priceFrom)}{service.priceSuffix ?? ""}
                  </p>
                  <p className="text-xs text-brand-grey">
                    {deliveryNoun(service)} {service.deliveryText}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── Reviews ────────────────────────────────────────────────────── */}
        {reviews.length > 0 && <ReviewsSection reviews={reviews} />}

        {/* ── Nearby borough hubs ────────────────────────────────────────── */}
        {borough.nearbyBoroughs.length > 0 && (
          <section aria-labelledby="nearby-heading">
            <Heading level={2} id="nearby-heading" className="mb-4">
              Nearby boroughs
            </Heading>
            <p className="text-brand-grey mb-6">
              We cover all 33 London boroughs. See every certificate
              available in areas near {borough.name}:
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {borough.nearbyBoroughs.map((nearbySlug) => {
                const nearby = getBoroughData(nearbySlug);
                if (!nearby) return null;
                return (
                  <Link
                    key={nearbySlug}
                    href={`/coverage-areas/${nearbySlug}`}
                    className="border border-border rounded-xl p-4 hover:border-compliance-blue transition-colors group"
                  >
                    <p className="font-semibold text-brand-charcoal group-hover:text-compliance-blue transition-colors">
                      Landlord Certificates in {nearby.name}
                    </p>
                    <p className="text-sm text-brand-grey mt-1">
                      {nearby.postcodes.slice(0, 3).join(", ")}
                      {nearby.postcodes.length > 3 ? " …" : ""}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <section
          aria-labelledby="hub-cta-heading"
          className="rounded-2xl bg-compliance-blue px-8 py-10 text-center text-white"
        >
          <Heading level={2} id="hub-cta-heading" inverted className="mb-2">
            Book your certificates in {borough.name}
          </Heading>
          <p className="text-blue-200 mb-6 max-w-md mx-auto">
            Book online in under 3 minutes, or call{" "}
            <a href={TEL} className="text-white font-semibold hover:underline">{PHONE_DISPLAY}</a>.
            Same-week appointments across {borough.name}.
          </p>
          <Link href="/book" className={cn(buttonVariants({ variant: "cta", size: "lg" }))}>
            Book now
          </Link>
        </section>
      </div>
    </>
  );
}

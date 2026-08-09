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
import {
  ADDITIONAL_CHARGES,
  DOMESTIC_EICR_TABLE,
  getPriceForEICR,
} from "@/lib/pricing";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "EICR London, from £67.99, All 33 Boroughs",
  description:
    "EICR London from £67.99. NICEIC approved and NAPIT certified electricians covering all 33 London boroughs. Victorian conversions, ex-council flats, HMOs. Certificate emailed within 24 hours.",
  alternates: { canonical: "https://www.mylandlordcertificate.co.uk/eicr-london" },
  openGraph: {
    title: "EICR London, from £67.99, All 33 Boroughs Covered",
    description:
      "EICR London from £67.99. All 33 London boroughs covered. NICEIC approved and NAPIT certified engineers. Certificate within 24 hours. Book online in under 3 minutes.",
    url: "https://www.mylandlordcertificate.co.uk/eicr-london",
  },
};

// ── Data ──────────────────────────────────────────────────────────────────────

const boroughs = [
  "Barking & Dagenham", "Barnet", "Bexley", "Brent", "Bromley",
  "Camden", "City of London", "Croydon", "Ealing", "Enfield",
  "Greenwich", "Hackney", "Hammersmith & Fulham", "Haringey", "Harrow",
  "Havering", "Hillingdon", "Hounslow", "Islington", "Kensington & Chelsea",
  "Kingston upon Thames", "Lambeth", "Lewisham", "Merton", "Newham",
  "Redbridge", "Richmond upon Thames", "Southwark", "Sutton",
  "Tower Hamlets", "Waltham Forest", "Wandsworth", "Westminster",
];

// Placeholder testimonials, replace with real reviews when collected
const testimonials = [
  {
    quote:
      "Booked online Monday evening, engineer arrived Tuesday morning. Victorian conversion in Hackney, he knew exactly what to look for with the old wiring. Certificate in my inbox by 2pm.",
    author: "Sarah M.",
    location: "Hackney",
    rating: 5,
  },
  {
    quote:
      "Third year running I've used them for my Croydon HMO. Always on time, always clear about what the certificate means and what any codes actually require. No upselling.",
    author: "James T.",
    location: "Croydon",
    rating: 5,
  },
  {
    quote:
      "Ex-council flat in Tower Hamlets, I was worried about the electrics being old. The engineer was thorough and explained every C3 observation. No nasty surprises on the bill.",
    author: "Priya K.",
    location: "Tower Hamlets",
    rating: 5,
  },
];

// ── Schema ────────────────────────────────────────────────────────────────────

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "EICR London, Electrical Installation Condition Report",
  url: "https://www.mylandlordcertificate.co.uk/eicr-london",
  description:
    "EICR (Electrical Installation Condition Report) for London landlords. NICEIC approved and NAPIT certified electricians covering all 33 London boroughs. Fixed pricing from £67.99, certificate emailed within 24 hours.",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://www.mylandlordcertificate.co.uk",
    areaServed: boroughs.map((b) => ({ "@type": "City", name: b })),
  },
  areaServed: boroughs.map((b) => ({ "@type": "City", name: b })),
  offers: {
    "@type": "Offer",
    price: "67.99",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://www.mylandlordcertificate.co.uk/eicr-london",
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
      name: "EICR Certificate",
      item: "https://www.mylandlordcertificate.co.uk/eicr",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "EICR London",
      item: "https://www.mylandlordcertificate.co.uk/eicr-london",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does an EICR cost in London?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An EICR in London costs from £67.99 for a studio apartment to £199.99 for an 8-bedroom property. London prices from some providers can be higher than the national average, our fixed pricing is the same across all 33 London boroughs with no London surcharge.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover all London boroughs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we cover all 33 London boroughs. This includes inner London boroughs such as Hackney, Islington, Lambeth and Tower Hamlets, and outer boroughs such as Croydon, Havering, Hillingdon and Sutton.",
      },
    },
    {
      "@type": "Question",
      name: "How do London property types affect the EICR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "London's housing stock is older and more varied than many UK cities. Victorian and Edwardian terraces often have older wiring that may require careful testing and may produce more C2 observations. Ex-council flats often have non-standard consumer unit locations. Our engineers are experienced with all London property types.",
      },
    },
    {
      "@type": "Question",
      name: "Is a Congestion Charge added for central London properties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, properties within the London Congestion Charge Zone incur an additional charge of £20. This is the only London-specific surcharge. There is no general London premium on our EICR prices.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I get an EICR in London?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Next-day appointments are available across London, subject to engineer availability. Book online before 5pm and we will aim to schedule your appointment for the following day.",
      },
    },
  ],
};

// ── FAQ items ─────────────────────────────────────────────────────────────────

const faqItems = [
  {
    question: "How much does an EICR cost in London?",
    answer:
      "An EICR in London costs from £67.99 for a studio to £199.99 for an 8-bedroom property. Some London providers charge a premium over national rates, our fixed pricing applies equally across all 33 boroughs with no London surcharge. The only location-based addition is the £20 Congestion Charge Zone fee for central London properties.",
  },
  {
    question: "Do you cover all London boroughs?",
    answer:
      "Yes, we cover all 33 London boroughs. Inner London (Hackney, Islington, Lambeth, Southwark, Tower Hamlets, Wandsworth, Westminster and others) and outer London (Bromley, Croydon, Ealing, Havering, Hillingdon, Sutton and others) are all covered. See the full borough list on this page.",
  },
  {
    question: "How do London property types affect the EICR?",
    answer:
      "London's housing stock is older and more varied than most UK cities. Victorian terraces (pre-1900) often have original wiring dating to the 1950s–70s rewire, which can produce C2 observations around earthing and bonding. Ex-council flats may have non-standard consumer unit locations. Edwardian conversions frequently have shared incoming supplies. Our engineers are experienced with all these property types and flag what requires action versus what is simply older installation.",
  },
  {
    question: "Is there a Congestion Charge for central London properties?",
    answer:
      "Yes, properties within the TfL Congestion Charge Zone incur an additional £20. This is disclosed upfront and the only location-based surcharge we apply. There is no general London premium on our EICR prices.",
  },
  {
    question: "How quickly can I get an EICR in London?",
    answer:
      "Next-day appointments are available across all London boroughs, subject to engineer availability in your area. Book online before 5pm and we will aim to schedule your appointment for the following working day.",
  },
  {
    question: "What happens if my London property gets a C1 or C2 code?",
    answer:
      "A C1 code (immediate danger) means the engineer must make safe before leaving. A C2 code (potentially dangerous) must be remedied before the property can be legally let. Our engineers will explain every observation clearly and can quote for remedial works on the same visit. A re-inspection is required after C1 or C2 works are completed.",
  },
  {
    question: "Are your electricians Gas Safe as well?",
    answer:
      "EICR electricians are qualified under the electrical competent person schemes (NICEIC or NAPIT), this is separate from Gas Safe registration, which covers gas appliances. If you need both an EICR and a Gas Safety Certificate, book our Essential Bundle to have both completed in one visit.",
  },
];

const lowestPrice = getPriceForEICR("studio");
const popularPrice = getPriceForEICR("1-3bed");

// ── Page ──────────────────────────────────────────────────────────────────────

export default function EicrLondonPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
      <section
        aria-labelledby="eicr-london-heading"
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
                  EICR Certificate
                </Link>
              </li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li className="text-white font-medium">EICR London</li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            NICEIC Approved · NAPIT Certified · All 33 London Boroughs
          </p>

          <Heading level={1} id="eicr-london-heading" inverted className="mb-4 max-w-2xl">
            EICR London, from £{lowestPrice}, All 33 Boroughs Covered
          </Heading>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-6">
            Electrical Installation Condition Reports for London landlords.
            Fixed pricing from £{lowestPrice}, no London surcharge, no call-out
            charge. NICEIC approved and NAPIT certified engineers covering every
            London borough. Certificate emailed within 24 hours.
          </p>

          <PriceDisplay
            price={lowestPrice}
            from
            size="lg"
            className="mb-8 [&>span:last-child]:text-white"
          />

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/book?service=eicr"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book EICR in London, from £{lowestPrice}
            </Link>
            <Link
              href="/eicr"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white/10 border border-white/30 text-white hover:bg-white/20",
              )}
            >
              Full EICR service details
            </Link>
          </div>

          <TrustBadges variant="dark" />
        </Container>
      </section>

      {/* ── Stats bar ── */}
      <div className="bg-brand-charcoal text-sm py-3">
        <Container>
          <dl className="flex flex-wrap gap-x-8 gap-y-1 text-brand-grey">
            <div className="flex gap-1.5">
              <dt>From</dt>
              <dd className="text-white font-semibold">£{lowestPrice}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Boroughs</dt>
              <dd className="text-white font-semibold">all 33 covered</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Certificate</dt>
              <dd className="text-white font-semibold">emailed within 24 hours</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Appointments</dt>
              <dd className="text-white font-semibold">next-day available</dd>
            </div>
          </dl>
        </Container>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── What is an EICR ── */}
        <section aria-labelledby="what-is-eicr-heading">
          <Heading level={2} id="what-is-eicr-heading" className="mb-4">
            EICR certificates for London landlords
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            An EICR (Electrical Installation Condition Report) tests the fixed
            wiring and electrical installation in a rental property, the consumer
            unit (fuse box), circuits, sockets, light fittings, and earthing
            arrangements. Since 1 April 2021, all private landlords in England
            are legally required to have a valid EICR in place before any new
            tenancy begins, and renew it every five years.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            London landlords face the same legal obligation as landlords elsewhere
            in England, but London&apos;s older housing stock, high HMO concentration,
            and diverse property types make choosing an experienced local electrician
            more important. Our NICEIC approved and NAPIT certified engineers work
            exclusively across London and the M25 area and are familiar with
            the specific challenges London properties present.
          </p>
          <div className="rounded-xl bg-amber-50 border border-brand-amber/30 p-5 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Legal requirement: </strong>
            The Electrical Safety Standards in the Private Rented Sector
            (England) Regulations 2020 require all private landlords to have a
            valid EICR and provide a copy to new tenants before they move in and
            to existing tenants within 28 days of a request. A local authority
            can impose a fine of up to £30,000 for non-compliance.
          </div>
        </section>

        {/* ── London boroughs ── */}
        <section aria-labelledby="boroughs-heading">
          <Heading level={2} id="boroughs-heading" className="mb-3">
            All 33 London boroughs covered
          </Heading>
          <p className="text-brand-grey mb-6">
            We cover every London borough, inner and outer, at the same fixed
            price. The only location-based charge is the £{ADDITIONAL_CHARGES.congestionZone}{" "}
            Congestion Charge Zone fee for central London properties.
          </p>
          <ul
            className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2"
            role="list"
          >
            {boroughs.map((borough) => (
              <li
                key={borough}
                className="flex items-center gap-2 text-sm text-brand-charcoal/80"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-compliance-blue shrink-0"
                  aria-hidden="true"
                />
                {borough}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-brand-grey">
            Need an EICR in a specific borough?{" "}
            <Link href="/eicr" className="text-compliance-blue hover:underline font-medium">
              Book online
            </Link>{" "}
            and enter your postcode, we&apos;ll match you with the nearest available
            engineer.
          </p>
        </section>

        {/* ── London property types ── */}
        <section aria-labelledby="property-types-heading">
          <Heading level={2} id="property-types-heading" className="mb-4">
            London property types, what to expect
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            London&apos;s housing stock is more varied and older than most UK cities.
            Our engineers understand the specific electrical characteristics of
            each property type and what to look for during the inspection.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                type: "Victorian terraces and conversions",
                boroughs: "Hackney, Islington, Lambeth, Lewisham, Wandsworth",
                detail:
                  "Pre-1900 properties often have wiring dating to a 1950s–1970s full rewire, which may be approaching the end of its service life. Common observations include inadequate earthing, absence of RCD protection, and older consumer unit types. Many Victorian terraces have been converted into flats, which can create shared incoming supply issues between units.",
              },
              {
                type: "Edwardian terraces (1900–1918)",
                boroughs: "Ealing, Enfield, Haringey, Merton, Sutton",
                detail:
                  "Similar in age to Victorian stock but typically more spacious. Edwardian conversions are common in outer London boroughs. Wiring characteristics are similar to Victorian properties, original rubber-insulated wiring is occasionally still found, which always produces a C1 or C2 code.",
              },
              {
                type: "Ex-council flats",
                boroughs: "Barking, Brent, Hackney, Newham, Tower Hamlets",
                detail:
                  "Post-war council-built housing (1940s–1980s) often has non-standard consumer unit locations, minimal socket provision by modern standards, and older wiring. Many ex-council blocks are undergoing electrical upgrades, an EICR is often the trigger. Our engineers are familiar with the range of installation types across London&apos;s different housing estate eras.",
              },
              {
                type: "Modern flats and new-build conversions",
                boroughs: "Canary Wharf, Nine Elms, Old Street, Stratford",
                detail:
                  "Post-2000 and post-2010 new-build flats typically produce satisfactory EICRs with few observations. The main areas of attention are socket provision in open-plan layouts, shared risers in blocks, and EV charger circuit compatibility. These inspections are generally quicker than older properties.",
              },
              {
                type: "HMOs (Houses in Multiple Occupation)",
                boroughs: "All London boroughs, particularly high density in inner London",
                detail:
                  "HMOs are subject to stricter electrical requirements and are more likely to have been subject to ad-hoc alterations between tenancies. Our NICEIC and NAPIT certified engineers produce EICR reports specifically referencing HMO-relevant observations and are familiar with local authority HMO licence conditions across all 33 boroughs.",
              },
              {
                type: "1960s–70s purpose-built flats",
                boroughs: "Bexley, Bromley, Croydon, Havering, Hillingdon",
                detail:
                  "System-built blocks from the 1960s and 1970s often have aluminium wiring rather than copper, which is still serviceable but must be noted in the report and assessed carefully. Consumer units in these properties often require upgrade. Our engineers are trained to assess these installations correctly.",
              },
            ].map(({ type, boroughs: b, detail }) => (
              <div
                key={type}
                className="rounded-xl border border-border bg-white p-5"
              >
                <p className="font-semibold text-brand-charcoal text-sm mb-1">
                  {type}
                </p>
                <p className="text-xs text-compliance-blue mb-2">{b}</p>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" aria-labelledby="pricing-heading">
          <Heading level={2} id="pricing-heading" className="mb-2">
            EICR London, pricing
          </Heading>
          <p className="text-brand-grey mb-6">
            Fixed pricing across all London boroughs. No London surcharge.
            The only location-based fee is the £{ADDITIONAL_CHARGES.congestionZone}{" "}
            Congestion Charge Zone addition for central London properties.
          </p>

          <PriceTable
            title="Domestic EICR, London pricing"
            rows={DOMESTIC_EICR_TABLE}
            highlightCheapest
          />

          <div className="mt-4 rounded-xl border border-border bg-warm-white p-4 text-sm text-brand-charcoal/70">
            <p className="font-medium text-brand-charcoal mb-1">
              Additional charges (where applicable)
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Parking charge if no free on-site parking:{" "}
                <strong>£{ADDITIONAL_CHARGES.parking}</strong>
              </li>
              <li>
                Congestion Charge Zone:{" "}
                <strong>£{ADDITIONAL_CHARGES.congestionZone}</strong>
              </li>
            </ul>
          </div>

          <p className="mt-4 text-sm text-brand-grey">
            Need an EICR cost breakdown?{" "}
            <Link
              href="/eicr-cost"
              className="text-compliance-blue hover:underline font-medium"
            >
              See our full EICR cost guide →
            </Link>
          </p>
        </section>

        {/* ── Testimonials ── */}
        <section aria-labelledby="reviews-heading">
          <Heading level={2} id="reviews-heading" className="mb-6">
            What London landlords say
          </Heading>
          <div className="grid sm:grid-cols-3 gap-5">
            {testimonials.map(({ quote, author, location, rating }) => (
              <figure
                key={author}
                className="rounded-xl border border-border bg-white p-5 flex flex-col"
              >
                <div className="flex gap-0.5 mb-3" role="img" aria-label={`${rating} out of 5 stars`}>
                  {Array.from({ length: rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 1l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 10.8l-3.8 2 .7-4.3-3.1-3 4.3-.6z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-sm text-brand-charcoal/80 leading-relaxed flex-1">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-xs text-brand-grey">
                  <span className="font-medium text-brand-charcoal">{author}</span>
                  {" · "}
                  {location}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-5 text-sm text-center text-brand-grey">
            <Link href="/reviews" className="text-compliance-blue hover:underline font-medium">
              Read all verified reviews →
            </Link>
          </p>
        </section>

        {/* ── FAQs ── */}
        <section aria-labelledby="faq-heading" className="below-fold">
          <Heading level={2} id="faq-heading" className="mb-6">
            EICR London, frequently asked questions
          </Heading>
          <FAQAccordion items={faqItems} includeSchema={false} />
        </section>

        {/* ── CTA ── */}
        <section
          aria-labelledby="cta-heading"
          className="rounded-2xl bg-compliance-blue px-8 py-10 text-center text-white"
        >
          <Heading level={2} id="cta-heading" inverted className="mb-2">
            Book your London EICR today
          </Heading>
          <p className="text-blue-200 mb-6 max-w-md mx-auto">
            Book online in under 3 minutes. Next-day appointments available
            across all 33 London boroughs. Certificate emailed within 24 hours,
            from £{popularPrice} for a 1–3 bedroom London property.
          </p>
          <Link
            href="/book?service=eicr"
            className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
          >
            Book EICR in London, from £{lowestPrice}
          </Link>
          <p className="mt-4 text-xs text-blue-300">
            No hidden charges. NICEIC approved &amp; NAPIT certified. All 33 London boroughs.
          </p>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=eicr"
        label="Book EICR"
        price={lowestPrice}
        serviceName="EICR London from"
      />
    </>
  );
}

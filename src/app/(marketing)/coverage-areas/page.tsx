import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { TrustBadges } from "@/components/ui/trust-badges";
import { cn } from "@/lib/utils";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Coverage Areas — All 32 London Boroughs & South East | My Landlord Certificate",
  description:
    "EICR, Gas Safety, EPC and Fire Risk Assessment across all 32 London boroughs and the South East. Next-day appointments. Certificate emailed the same day.",
  alternates: { canonical: "https://mylandlordcertificate.co.uk/coverage-areas" },
  openGraph: {
    title: "Coverage Areas — All 32 London Boroughs & South East | My Landlord Certificate",
    description:
      "EICR, Gas Safety, EPC and Fire Risk Assessment across all 32 London boroughs and the South East. Next-day appointments. Certificate emailed the same day.",
    url: "https://mylandlordcertificate.co.uk/coverage-areas",
  },
  twitter: {
    title: "Coverage Areas — All 32 London Boroughs & South East",
    description:
      "All 32 London boroughs and South East counties. Next-day appointments. Same-day certificate delivery.",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "My Landlord Certificate",
  url: "https://mylandlordcertificate.co.uk",
  telephone: "+443301330066",
  areaServed: [
    // London boroughs
    "Barking and Dagenham", "Barnet", "Bexley", "Brent", "Bromley",
    "Camden", "City of London", "Croydon", "Ealing", "Enfield",
    "Greenwich", "Hackney", "Hammersmith and Fulham", "Haringey", "Harrow",
    "Havering", "Hillingdon", "Hounslow", "Islington", "Kensington and Chelsea",
    "Kingston upon Thames", "Lambeth", "Lewisham", "Merton", "Newham",
    "Redbridge", "Richmond upon Thames", "Southwark", "Sutton",
    "Tower Hamlets", "Waltham Forest", "Wandsworth", "Westminster",
    // South East counties
    "Surrey", "Kent", "Essex", "Hertfordshire",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Coverage Areas", item: "https://mylandlordcertificate.co.uk/coverage-areas" },
  ],
};

// ── Borough data ──────────────────────────────────────────────────────────────

const boroughs: { name: string; slug: string }[] = [
  { name: "Barking & Dagenham",    slug: "barking-dagenham" },
  { name: "Barnet",                slug: "barnet" },
  { name: "Bexley",                slug: "bexley" },
  { name: "Brent",                 slug: "brent" },
  { name: "Bromley",               slug: "bromley" },
  { name: "Camden",                slug: "camden" },
  { name: "City of London",        slug: "city-of-london" },
  { name: "Croydon",               slug: "croydon" },
  { name: "Ealing",                slug: "ealing" },
  { name: "Enfield",               slug: "enfield" },
  { name: "Greenwich",             slug: "greenwich" },
  { name: "Hackney",               slug: "hackney" },
  { name: "Hammersmith & Fulham",  slug: "hammersmith-fulham" },
  { name: "Haringey",              slug: "haringey" },
  { name: "Harrow",                slug: "harrow" },
  { name: "Havering",              slug: "havering" },
  { name: "Hillingdon",            slug: "hillingdon" },
  { name: "Hounslow",              slug: "hounslow" },
  { name: "Islington",             slug: "islington" },
  { name: "Kensington & Chelsea",  slug: "kensington-chelsea" },
  { name: "Kingston upon Thames",  slug: "kingston-upon-thames" },
  { name: "Lambeth",               slug: "lambeth" },
  { name: "Lewisham",              slug: "lewisham" },
  { name: "Merton",                slug: "merton" },
  { name: "Newham",                slug: "newham" },
  { name: "Redbridge",             slug: "redbridge" },
  { name: "Richmond upon Thames",  slug: "richmond-upon-thames" },
  { name: "Southwark",             slug: "southwark" },
  { name: "Sutton",                slug: "sutton" },
  { name: "Tower Hamlets",         slug: "tower-hamlets" },
  { name: "Waltham Forest",        slug: "waltham-forest" },
  { name: "Wandsworth",            slug: "wandsworth" },
  { name: "Westminster",           slug: "westminster" },
];

const southEastAreas: { county: string; towns: string[] }[] = [
  {
    county: "Surrey",
    towns: ["Guildford", "Woking", "Reigate", "Redhill", "Epsom", "Leatherhead", "Staines-upon-Thames", "Weybridge"],
  },
  {
    county: "Kent",
    towns: ["Bromley borders", "Dartford", "Sevenoaks", "Tonbridge", "Maidstone", "Swanley", "Orpington"],
  },
  {
    county: "Essex",
    towns: ["Romford", "Ilford borders", "Brentwood", "Chelmsford", "Basildon", "Grays", "Harlow"],
  },
  {
    county: "Hertfordshire",
    towns: ["Watford", "St Albans", "Hemel Hempstead", "Stevenage", "Hatfield", "Potters Bar", "Cheshunt"],
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CoverageAreasPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section
        aria-labelledby="coverage-heading"
        className="bg-compliance-blue text-white"
      >
        <Container className="py-16 md:py-20 text-center">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            All 32 London Boroughs · South East England
          </p>
          <Heading level={1} id="coverage-heading" inverted className="mb-4 max-w-3xl mx-auto">
            Landlord certificates across London and the South East
          </Heading>
          <p className="text-blue-100 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Our accredited engineers cover every London borough and the surrounding
            South East counties. Next-day appointments available. Certificate
            emailed the same day — no matter where in our coverage area your
            property sits.
          </p>
          <TrustBadges variant="dark" className="justify-center" />
        </Container>
      </section>

      {/* ── Stats bar ── */}
      <section aria-label="Coverage statistics" className="bg-brand-charcoal text-white">
        <Container>
          <dl className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { label: "London boroughs", value: "All 32" },
              { label: "South East counties", value: "4+" },
              { label: "Appointments", value: "Next day" },
              { label: "Certificate delivery", value: "Same day" },
            ].map(({ label, value }) => (
              <div key={label} className="px-6 py-5 text-center">
                <dt className="text-blue-200 text-xs font-medium uppercase tracking-wider mb-1">{label}</dt>
                <dd className="text-white font-bold text-xl">{value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ── London boroughs ── */}
      <section aria-labelledby="boroughs-heading" className="py-16 md:py-20 bg-warm-white">
        <Container>
          <Heading level={2} id="boroughs-heading" className="mb-3 text-center">
            All 32 London boroughs
          </Heading>
          <p className="text-brand-grey text-center mb-10 max-w-2xl mx-auto">
            We cover every London borough — from Zone 1 central London properties to
            outer borough commuter belt homes. Each borough link takes you to a
            dedicated EICR page for that area; Gas Safety, EPC and Fire Risk
            Assessment are available in every borough too.
          </p>

          <ul
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
            role="list"
            aria-label="London boroughs served"
          >
            {boroughs.map(({ name, slug }) => (
              <li key={slug}>
                <Link
                  href={`/eicr-${slug}`}
                  className="flex items-center justify-between gap-2 rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-brand-charcoal hover:border-compliance-blue hover:text-compliance-blue transition-colors group"
                >
                  <span>{name}</span>
                  <svg
                    className="w-3.5 h-3.5 text-brand-grey group-hover:text-compliance-blue transition-colors shrink-0"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 6h8M6 2l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-center text-sm text-brand-grey">
            Not sure which borough your property is in?{" "}
            <a
              href="tel:03301330066"
              className="text-compliance-blue font-medium hover:underline"
            >
              Call 0330 133 0066
            </a>{" "}
            and we'll confirm availability for your postcode.
          </p>
        </Container>
      </section>

      {/* ── South East ── */}
      <section aria-labelledby="southeast-heading" className="py-16 bg-white">
        <Container>
          <Heading level={2} id="southeast-heading" className="mb-3 text-center">
            South East England
          </Heading>
          <p className="text-brand-grey text-center mb-10 max-w-2xl mx-auto">
            Our engineer network extends beyond Greater London into the counties
            that border the capital. If your rental property sits in Surrey, Kent,
            Essex or Hertfordshire, we can still book a next-day appointment.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {southEastAreas.map(({ county, towns }) => (
              <div
                key={county}
                className="rounded-2xl border border-border bg-warm-white p-5"
              >
                <p className="font-semibold text-compliance-blue mb-3">{county}</p>
                <ul className="space-y-1.5">
                  {towns.map((town) => (
                    <li key={town} className="flex items-start gap-2 text-sm text-brand-charcoal/70">
                      <svg
                        className="w-3.5 h-3.5 text-action-green mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 8l3.5 3.5L13 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {town}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 px-6 py-4 max-w-2xl mx-auto text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">South East coverage note:</strong>{" "}
            Appointment availability in South East counties depends on engineer
            capacity. Book online and we'll confirm next-day availability for your
            postcode — or call{" "}
            <a href="tel:03301330066" className="text-compliance-blue font-medium hover:underline">
              0330 133 0066
            </a>{" "}
            to check before booking.
          </div>
        </Container>
      </section>

      {/* ── Services available across all areas ── */}
      <section aria-labelledby="services-heading" className="py-16 bg-warm-white">
        <Container>
          <Heading level={2} id="services-heading" className="mb-3 text-center">
            Services available across our entire coverage area
          </Heading>
          <p className="text-brand-grey text-center mb-10 max-w-2xl mx-auto">
            Every service we offer is available in every borough and county we cover.
            All engineers are accredited for their discipline — no unregistered
            subcontractors, regardless of location.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                label: "EICR Certificate",
                detail: "NICEIC approved or NAPIT certified electricians",
                price: "from £67.99",
                href: "/eicr",
                validity: "Valid 5 years",
              },
              {
                label: "Gas Safety Certificate",
                detail: "Gas Safe Registered engineers",
                price: "from £50",
                href: "/gas-safety-certificate",
                validity: "Valid 12 months",
              },
              {
                label: "EPC Certificate",
                detail: "Accredited Domestic Energy Assessors",
                price: "from £89.99",
                href: "/epc",
                validity: "Valid 10 years",
              },
              {
                label: "Fire Risk Assessment",
                detail: "NEBOSH qualified assessors",
                price: "from £74",
                href: "/fire-risk-assessment",
                validity: "Review annually",
              },
              {
                label: "PAT Testing",
                detail: "City & Guilds 2377 qualified testers",
                price: "from £59.99",
                href: "/pat-testing",
                validity: "Review annually",
              },
              {
                label: "Certificate Bundles",
                detail: "Multiple certificates, single engineer visit",
                price: "from £130",
                href: "/landlord-certificates-bundle",
                validity: "Save up to £44.97",
              },
            ].map(({ label, detail, price, href, validity }) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-border bg-white p-5 hover:border-compliance-blue transition-colors group block"
              >
                <p className="font-semibold text-brand-charcoal group-hover:text-compliance-blue transition-colors mb-0.5">
                  {label}
                </p>
                <p className="text-xs text-brand-grey mb-2">{detail}</p>
                <p className="text-compliance-blue font-medium text-sm mb-0.5">{price}</p>
                <p className="text-xs text-brand-grey">{validity}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Why local coverage matters ── */}
      <section aria-labelledby="local-heading" className="py-16 bg-white">
        <Container className="max-w-3xl">
          <Heading level={2} id="local-heading" className="mb-6 text-center">
            Why local coverage matters for landlord compliance
          </Heading>

          <div className="space-y-6 text-brand-charcoal/80 leading-relaxed">
            <p>
              London's private rented sector is one of the most regulated in the
              country. Every London borough operates its own selective and additional
              licensing schemes on top of the mandatory HMO licensing framework.
              Several boroughs — including Newham, Waltham Forest and Brent — run
              borough-wide selective licensing, meaning almost every privately rented
              property requires a licence and, with it, up-to-date certificates.
            </p>
            <p>
              An engineer who knows the local housing stock makes a practical
              difference. Victorian terrace conversions common in Hackney and
              Islington carry very different electrical risks to post-war ex-council
              blocks in Tower Hamlets or Lewisham. Our NICEIC approved and NAPIT
              certified electricians are familiar with London's varied property
              types — from Edwardian maisonettes to modern purpose-built flats —
              and know what to look for in each.
            </p>
            <p>
              South East landlords face the same compliance requirements as their
              London counterparts. The Electrical Safety Standards in the Private
              Rented Sector (England) Regulations 2020 apply to all private
              landlords in England, regardless of whether the property is in a
              London borough or a Surrey market town. Our Gas Safe Registered
              engineers and accredited energy assessors operate across county
              borders — one booking system, the same fixed prices, the same same-day
              certificate delivery.
            </p>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section
        aria-labelledby="cta-heading"
        className="py-16 bg-compliance-blue text-white text-center"
      >
        <Container className="max-w-xl">
          <Heading level={2} id="cta-heading" inverted className="mb-3">
            Ready to book in your area?
          </Heading>
          <p className="text-blue-200 mb-8 leading-relaxed">
            Book online in under 3 minutes. We'll confirm next-day availability for
            your postcode. Certificate emailed the same day.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/book"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book now
            </Link>
            <Link
              href="/pricing"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white/10 border border-white/30 text-white hover:bg-white/20",
              )}
            >
              See all prices
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

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
import { ADDITIONAL_CHARGES, PAT_TABLE, getPriceForPAT } from "@/lib/pricing";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "PAT Testing from £59.99 | Digital Certificate Same Day | My Landlord Certificate",
  description:
    "PAT Testing from £59.99 for up to 10 appliances. Portable Appliance Testing for furnished rental properties and HMOs. Pass/fail labels on every appliance, digital asset register, certificate emailed same day.",
  alternates: { canonical: "https://www.mylandlordcertificate.co.uk/pat-testing" },
  openGraph: {
    title: "PAT Testing from £59.99 | Digital Certificate Same Day",
    description:
      "PAT Testing from £59.99 for up to 10 appliances. Pass/fail label on every appliance, full digital asset register, certificate emailed same day. Book online in under 3 minutes.",
    url: "https://www.mylandlordcertificate.co.uk/pat-testing",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "PAT Testing — Portable Appliance Testing",
  url: "https://www.mylandlordcertificate.co.uk/pat-testing",
  description:
    "Portable Appliance Testing (PAT) checks that all plug-in electrical appliances supplied with a furnished tenancy are safe. Visual inspection and electrical tests on every appliance. Pass/fail label applied, full digital asset register and certificate emailed same day.",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://www.mylandlordcertificate.co.uk",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "118",
      reviewCount: "118",
    },
  },
  areaServed: ["London", "South East England"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "PAT Testing pricing by appliance count",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Up to 10 appliances",
        price: "59.99",
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "10–15 appliances",
        price: "69.99",
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "15–20 appliances",
        price: "79.99",
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
      },
    ],
  },
  offers: {
    "@type": "Offer",
    price: "59.99",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://www.mylandlordcertificate.co.uk/pat-testing",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "PAT Testing — Portable Appliance Testing",
  description:
    "Portable Appliance Testing for furnished rental properties. Digital asset register and PAT certificate emailed same day.",
  brand: {
    "@type": "Brand",
    name: "My Landlord Certificate",
  },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "59.99",
    highPrice: "259.99",
    priceCurrency: "GBP",
    offerCount: "9",
    availability: "https://schema.org/InStock",
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
      name: "PAT Testing",
      item: "https://www.mylandlordcertificate.co.uk/pat-testing",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is PAT Testing a legal requirement for landlords?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PAT Testing is not a named legal requirement, but the Landlord and Tenant Act 1985 and the Electrical Equipment (Safety) Regulations 2016 require landlords to ensure all electrical appliances they supply are safe. PAT Testing is the recognised way to demonstrate compliance — and most landlord insurance policies specifically require it for furnished properties.",
      },
    },
    {
      "@type": "Question",
      name: "How much does PAT Testing cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PAT Testing starts from £59.99 for up to 10 appliances. Prices scale by appliance count: 10–15 appliances costs £69.99, 15–20 costs £79.99, rising to £259.99 for 45–50 appliances.",
      },
    },
    {
      "@type": "Question",
      name: "Which appliances need to be PAT tested?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any plug-in electrical appliance you supply with the tenancy — white goods (fridge, washing machine, dishwasher), TVs, lamps, toasters, microwaves, vacuum cleaners, electric heaters, and any other portable electrical equipment. Fixed appliances wired directly into the mains (like an electric oven) are covered by the EICR, not PAT Testing.",
      },
    },
    {
      "@type": "Question",
      name: "How often should PAT Testing be carried out?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Annually is widely recommended, and at the start of each new tenancy. For HMOs and higher-risk environments with heavy appliance use, more frequent testing may be appropriate.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if an appliance fails the PAT test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A failed appliance receives a red FAILED label and must be removed from use immediately. It must not be used by tenants until it has been repaired and retested or replaced. Our engineer will advise on whether repair or replacement is more appropriate.",
      },
    },
  ],
};

// ── FAQ items ─────────────────────────────────────────────────────────────────

const faqItems = [
  {
    question: "Is PAT Testing a legal requirement for landlords?",
    answer:
      "PAT Testing is not a named legal requirement, but the Landlord and Tenant Act 1985 and the Electrical Equipment (Safety) Regulations 2016 require landlords to ensure all electrical appliances they supply are safe to use. PAT Testing is the recognised method of demonstrating compliance. Most landlord insurance policies specifically require it for furnished lets — and your insurer may refuse a claim arising from a faulty appliance if you cannot produce a current PAT certificate.",
  },
  {
    question: "How much does PAT Testing cost?",
    answer:
      "PAT Testing starts from £59.99 for up to 10 appliances — that works out at around £6 per appliance. Prices scale by band: 10–15 appliances is £69.99, 15–20 is £79.99, rising to £259.99 for 45–50 appliances. See the full pricing table above.",
  },
  {
    question: "Which appliances need to be PAT tested?",
    answer:
      "Any plug-in appliance you supply with the tenancy — white goods (fridge, washing machine, dishwasher, tumble dryer), TVs, lamps, toasters, microwaves, kettles, vacuum cleaners, electric heaters, and any other portable electrical equipment. Fixed appliances wired directly into the mains — such as an electric oven — are covered by the EICR, not PAT Testing.",
  },
  {
    question: "How often should PAT Testing be carried out?",
    answer:
      "Annually is widely recommended, and at the start of every new tenancy. For HMOs, where appliances are used more intensively and by more people, annual testing is effectively the minimum. Higher-risk properties may benefit from testing every six months.",
  },
  {
    question: "What happens if an appliance fails?",
    answer:
      "A failed appliance receives a red FAILED label and must be removed from use immediately. It must not be used by tenants until it has been repaired and retested or replaced entirely. Our engineer will advise whether the item is worth repairing. The failure is recorded in the digital asset register so you have a full audit trail.",
  },
  {
    question: "Do I need to be present during the PAT test?",
    answer:
      "No — a tenant or keyholder can provide access. The engineer will test each appliance in situ and apply pass/fail labels on the day. The full digital asset register and PAT certificate are emailed to you on the same day.",
  },
  {
    question: "What is a digital asset register?",
    answer:
      "The asset register is a complete record of every appliance tested — make, model, serial number (where visible), test result, and the date of testing. It is produced digitally and emailed to you with your certificate. It is your evidence of compliance if your property is inspected by a local authority or if you need to make an insurance claim.",
  },
  {
    question: "Does a furnished HMO need PAT Testing?",
    answer:
      "Yes. HMOs have a higher obligation to keep all electrical appliances safe because appliances are shared by multiple unrelated occupants and used more heavily. Most HMO licences include an explicit requirement for current PAT Testing. An EICR and Gas Safety Certificate are also required for all HMOs.",
  },
  {
    question: "What is the difference between a PAT test and an EICR?",
    answer:
      "An EICR (Electrical Installation Condition Report) tests the fixed wiring and electrical installation within the property — sockets, switches, the consumer unit, and wired-in appliances. A PAT test checks portable plug-in appliances. Both are required for a fully compliant furnished rental property.",
  },
];

const lowestPrice = getPriceForPAT(1);

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PatTestingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
      <section
        aria-labelledby="pat-heading"
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
              <li className="text-white font-medium">PAT Testing</li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            Portable Appliance Testing · Furnished Rentals &amp; HMOs · Digital Certificate Same Day
          </p>

          <Heading level={1} id="pat-heading" inverted className="mb-4 max-w-2xl">
            PAT Testing from £{lowestPrice}
          </Heading>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-6">
            Portable Appliance Testing for furnished rental properties and HMOs.
            From £{lowestPrice} for up to 10 appliances — around £6 per appliance.
            Pass/fail label on every item. Digital asset register and certificate
            emailed the same day.
          </p>

          <PriceDisplay
            price={lowestPrice}
            from
            size="lg"
            className="mb-8 [&>span:last-child]:text-white"
          />

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/book?service=pat"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book PAT Testing — from £{lowestPrice}
            </Link>
            <a
              href="#pricing"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white/10 border border-white/30 text-white hover:bg-white/20",
              )}
            >
              See full pricing
            </a>
          </div>

          <TrustBadges serviceKey="pat-testing" variant="dark" />
        </Container>
      </section>

      {/* ── Quick stats bar ── */}
      <div className="bg-brand-charcoal text-sm py-3">
        <Container>
          <dl className="flex flex-wrap gap-x-8 gap-y-1 text-brand-grey">
            <div className="flex gap-1.5">
              <dt>From</dt>
              <dd className="text-white font-semibold">£{lowestPrice}</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Covers</dt>
              <dd className="text-white font-semibold">up to 10 appliances</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Certificate</dt>
              <dd className="text-white font-semibold">emailed same day</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Includes</dt>
              <dd className="text-white font-semibold">digital asset register</dd>
            </div>
          </dl>
        </Container>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── What is PAT Testing ── */}
        <section id="what-is-it" aria-labelledby="what-is-it-heading">
          <Heading level={2} id="what-is-it-heading" className="mb-4">
            What is PAT Testing?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Portable Appliance Testing (PAT) is a series of visual inspections and
            electrical tests carried out on plug-in electrical appliances to verify
            they are safe to use. Every appliance is checked for visible damage to
            the cable, plug, casing, and connector, then tested electrically for
            earth continuity (on Class I appliances) and insulation resistance. A
            pass or fail label is applied to each appliance and a digital asset
            register is produced recording every item tested.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            For landlords of furnished properties, PAT Testing is the recognised
            way to show that all supplied electrical appliances meet the safety
            standard required by law. A furnished property without a current PAT
            certificate may leave you exposed if a tenant is injured by a faulty
            appliance — and most landlord insurers will not pay out without one.
          </p>
          <div className="rounded-xl bg-amber-50 border border-brand-amber/30 p-5 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Legal basis: </strong>
            The Landlord and Tenant Act 1985 requires landlords to keep all
            electrical appliances in safe working order. The Electrical Equipment
            (Safety) Regulations 2016 require that all electrical equipment
            supplied with a tenancy is safe. PAT Testing is the recognised method
            of demonstrating compliance with both.
          </div>
        </section>

        {/* ── Which appliances ── */}
        <section aria-labelledby="appliances-heading">
          <Heading level={2} id="appliances-heading" className="mb-4">
            Which appliances need to be tested?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            Any plug-in appliance you supply as part of the furnished tenancy. If
            you provided it and it has a plug, it needs a PAT test. If a tenant
            brings their own appliance, you are not responsible for testing it.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            {[
              {
                category: "White goods",
                items: "Washing machine, tumble dryer, dishwasher, fridge, freezer, fridge-freezer",
              },
              {
                category: "Kitchen appliances",
                items: "Microwave, toaster, kettle, electric hob, extractor fan with plug",
              },
              {
                category: "Living room",
                items: "Television, set-top box, DVD/Blu-ray player, games console, lamps",
              },
              {
                category: "Cleaning &amp; other",
                items: "Vacuum cleaner, electric heater, dehumidifier, fan, extension leads",
              },
            ].map(({ category, items }) => (
              <div
                key={category}
                className="rounded-xl border border-border bg-warm-white p-4"
              >
                <p
                  className="font-semibold text-brand-charcoal text-sm mb-1"
                  dangerouslySetInnerHTML={{ __html: category }}
                />
                <p className="text-sm text-brand-charcoal/70 leading-relaxed">{items}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-charcoal/70">
            Fixed appliances wired directly into the mains — such as an electric
            oven or hob — are covered by your{" "}
            <Link href="/eicr" className="text-compliance-blue hover:underline font-medium">
              EICR
            </Link>
            , not the PAT test.
          </p>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" aria-labelledby="pricing-heading">
          <Heading level={2} id="pricing-heading" className="mb-2">
            PAT Testing pricing
          </Heading>
          <p className="text-brand-grey mb-6">
            Fixed pricing by number of appliances — no per-item surcharges within
            a band and no call-out charges. A furnished 1–3 bedroom property
            typically has 8–12 appliances.
          </p>

          <PriceTable
            title="PAT Testing — price by appliance count"
            rows={PAT_TABLE}
            highlightCheapest
          />

          <div className="mt-4 rounded-xl border border-border bg-warm-white p-4 text-sm text-brand-charcoal/70">
            <p className="font-medium text-brand-charcoal mb-1">
              Additional charges (where applicable)
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Parking charge if no free parking available on site:{" "}
                <strong>£{ADDITIONAL_CHARGES.parking}</strong>
              </li>
              <li>
                Congestion Charge Zone:{" "}
                <strong>£{ADDITIONAL_CHARGES.congestionZone}</strong>
              </li>
            </ul>
          </div>

          <p className="mt-4 text-sm text-brand-grey">
            Comparing all landlord certificate prices?{" "}
            <Link
              href="/pricing"
              className="text-compliance-blue hover:underline font-medium"
            >
              View our complete pricing page →
            </Link>
          </p>
        </section>

        {/* ── What's included ── */}
        <section aria-labelledby="included-heading">
          <Heading level={2} id="included-heading" className="mb-4">
            What&apos;s included for £{lowestPrice}
          </Heading>
          <ul className="space-y-3" role="list">
            {[
              "Visual inspection of every portable appliance, lead, and plug",
              "Earth continuity test on all Class I (earthed) appliances",
              "Insulation resistance test on all appliances",
              "Pass (green) or Fail (red) label applied to each appliance on the day",
              "Digital asset register listing every appliance tested with make, model, and result",
              "PAT test certificate emailed to you the same day",
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

        {/* ── HMO requirement callout ── */}
        <section aria-labelledby="hmo-heading">
          <Heading level={2} id="hmo-heading" className="mb-4">
            PAT Testing for HMOs
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            HMOs (Houses in Multiple Occupation) present a higher electrical risk
            than single lets. Multiple unrelated tenants use shared appliances more
            intensively, cables and plugs deteriorate faster, and fault detection
            is less reliable when no single occupant takes responsibility for
            reporting problems. Most HMO licences issued by London boroughs include
            an explicit condition requiring current PAT Testing for all supplied
            appliances.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            An HMO with 5 bedrooms might supply 20–30 appliances across communal
            and individual rooms — washing machine, tumble dryer, fridge-freezer,
            microwave, and kettle in the kitchen, plus a TV and lamp in each
            bedroom. Our pricing scales transparently by appliance count, so a
            30-appliance HMO would be £{getPriceForPAT(30)} — no surprises.
          </p>
          <div className="rounded-xl bg-blue-50 border border-compliance-blue/20 p-5 text-sm text-brand-charcoal/80">
            <strong className="text-compliance-blue">HMO compliance bundle: </strong>
            Most HMOs also need an{" "}
            <Link href="/eicr" className="text-compliance-blue hover:underline">
              EICR
            </Link>
            {" "}and a{" "}
            <Link
              href="/gas-safety-certificate"
              className="text-compliance-blue hover:underline"
            >
              Gas Safety Certificate
            </Link>
            . Book all three together and save with our{" "}
            <Link
              href="/landlord-certificates-bundle"
              className="text-compliance-blue hover:underline font-medium"
            >
              HMO Complete bundle
            </Link>
            .
          </div>
        </section>

        {/* ── Cross-sell ── */}
        <section aria-labelledby="related-pat-heading">
          <Heading level={2} id="related-pat-heading" className="mb-4">
            Other compliance certificates you may need
          </Heading>
          <p className="text-brand-charcoal/80 mb-5 text-sm leading-relaxed">
            Most landlords who book PAT Testing also hold a current{" "}
            <Link href="/eicr" className="text-compliance-blue hover:underline font-medium">EICR</Link>
            {" "}and{" "}
            <Link href="/gas-safety-certificate" className="text-compliance-blue hover:underline font-medium">Gas Safety Certificate</Link>
            . HMO landlords also require a{" "}
            <Link href="/fire-risk-assessment" className="text-compliance-blue hover:underline font-medium">Fire Risk Assessment</Link>
            . Book all together with our{" "}
            <Link href="/landlord-certificates-bundle" className="text-compliance-blue hover:underline font-medium">HMO Complete bundle</Link>
            .
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "EICR Certificate", href: "/eicr", price: "from £67.99" },
              { label: "Gas Safety (CP12)", href: "/gas-safety-certificate", price: "from £50" },
              { label: "EPC Certificate", href: "/epc", price: "from £89.99" },
              { label: "Fire Risk Assessment", href: "/fire-risk-assessment", price: "from £74" },
              { label: "Certificate Bundle", href: "/landlord-certificates-bundle", price: "from £130" },
            ].map(({ label, href, price }) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-border bg-warm-white p-4 hover:border-compliance-blue transition-colors block"
              >
                <p className="font-semibold text-brand-charcoal text-sm mb-1">{label}</p>
                <p className="text-compliance-blue text-sm font-medium">{price}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── How it works ── */}
        <section aria-labelledby="how-it-works-heading">
          <Heading level={2} id="how-it-works-heading" className="mb-6">
            How it works
          </Heading>
          <ol className="space-y-6" role="list">
            {[
              {
                step: "1",
                title: "Book online",
                body: "Choose your appliance count, select a date, and pay securely. The booking takes under 3 minutes. You receive a confirmation email immediately.",
              },
              {
                step: "2",
                title: "Engineer visits",
                body: "A City &amp; Guilds 2377 qualified engineer arrives at the property and tests every appliance in situ. A pass or fail label is applied to each item on the day. You or a tenant can provide access — you do not need to be there.",
              },
              {
                step: "3",
                title: "Digital certificate emailed same day",
                body: "Your PAT certificate and full digital asset register are emailed to you on the same day as the visit. The register lists every appliance by make, model, serial number, and result — your complete compliance record.",
              },
            ].map(({ step, title, body }) => (
              <li key={step} className="flex gap-5">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-compliance-blue text-white flex items-center justify-center font-bold text-sm">
                  {step}
                </span>
                <div>
                  <p className="font-semibold text-brand-charcoal mb-1">{title}</p>
                  <p
                    className="text-brand-charcoal/80 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: body }}
                  />
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── FAQs ── */}
        <section aria-labelledby="faq-heading" className="below-fold">
          <Heading level={2} id="faq-heading" className="mb-6">
            PAT Testing — frequently asked questions
          </Heading>
          <FAQAccordion items={faqItems} includeSchema={false} />
        </section>

        {/* ── CTA ── */}
        <section
          aria-labelledby="cta-heading"
          className="rounded-2xl bg-compliance-blue px-8 py-10 text-center text-white"
        >
          <Heading level={2} id="cta-heading" inverted className="mb-2">
            Ready to book PAT Testing?
          </Heading>
          <p className="text-blue-200 mb-6 max-w-md mx-auto">
            Book online in under 3 minutes. An engineer will contact you to
            confirm your appointment slot. From £{lowestPrice} for up to 10 appliances —
            digital certificate and asset register emailed the same day.
          </p>
          <Link
            href="/book?service=pat"
            className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
          >
            Book PAT Testing — from £{lowestPrice}
          </Link>
          <p className="mt-4 text-xs text-blue-300">
            No hidden charges. Digital certificate emailed same day.
          </p>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=pat"
        label="Book PAT Test"
        price={lowestPrice}
        serviceName="PAT Testing from"
      />
    </>
  );
}

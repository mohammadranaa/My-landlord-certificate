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
  COMMERCIAL_EICR_EXTRA_CIRCUIT_CHARGE,
  COMMERCIAL_EICR_TABLE,
  DOMESTIC_EICR_TABLE,
  getPriceForEICR,
} from "@/lib/pricing";
import { HeroRating } from "@/components/ui/hero-rating";
import { ReviewsBlock } from "@/components/marketing/reviews-block";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "EICR Cost Guide 2025, How Much Does an EICR Cost?",
  description:
    "EICR costs from £67.99 for a studio to £199.99 for an 8-bedroom property. Full domestic and commercial EICR price breakdown, what drives the cost, and how to get a fixed price with no hidden charges.",
  alternates: { canonical: "https://www.mylandlordcertificate.co.uk/eicr-cost" },
  openGraph: {
    title: "EICR Cost Guide 2025, How Much Does an EICR Cost?",
    description:
      "EICR prices start from £67.99. Full domestic and commercial price breakdown, what affects the cost, and how to book at a fixed price with no hidden charges.",
    url: "https://www.mylandlordcertificate.co.uk/eicr-cost",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Does an EICR Cost? Full 2025 Price Guide",
  description:
    "A complete guide to EICR costs for landlords, domestic and commercial pricing, what affects the cost, how our prices compare to the national average, and how to get a fixed price.",
  url: "https://www.mylandlordcertificate.co.uk/eicr-cost",
  datePublished: "2025-01-01",
  dateModified: "2025-05-01",
  publisher: {
    "@type": "Organization",
    name: "My Landlord Certificate",
    url: "https://www.mylandlordcertificate.co.uk",
  },
  author: {
    "@type": "Organization",
    name: "My Landlord Certificate",
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
      name: "EICR Cost",
      item: "https://www.mylandlordcertificate.co.uk/eicr-cost",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does an EICR cost in the UK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A domestic EICR costs from £67.99 for a studio apartment to £199.99 for an 8-bedroom property. The national average quoted by comparison sites is £150–£300 for a typical 3-bedroom home. Commercial EICRs start from £149.99 for a single consumer unit.",
      },
    },
    {
      "@type": "Question",
      name: "Why does an EICR cost more for larger properties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every electrical circuit must be individually tested. Larger properties have more circuits, more sockets, more light fittings and more complex consumer units, all of which take more time. A studio might have 6 circuits; a large HMO can have 20 or more.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a commercial EICR cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A commercial EICR starts from £149.99 for a single consumer unit of up to 10 circuits. Additional consumer units add to the price up to £1,155.99 for 8 units. Extra circuits above 10 per unit are charged at £25 each.",
      },
    },
    {
      "@type": "Question",
      name: "Are there any extra charges on top of the EICR price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We charge £10 for parking if no free on-site parking is available, and £20 for properties in the London Congestion Charge Zone. There are no other fees, the price in the table is the price you pay.",
      },
    },
    {
      "@type": "Question",
      name: "Does the age of the wiring affect the EICR cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not for our fixed-price tiers, the price is determined by property size, not age. However, older wiring is more likely to produce C1 or C2 codes that require remedial work. Remedial works are quoted separately after the inspection.",
      },
    },
    {
      "@type": "Question",
      name: "Can I save money by bundling my EICR with other certificates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our Essential Bundle (EICR + Gas Safety Certificate) costs £130 versus £144.99 if booked separately, saving £14.99. The Full Compliance Bundle (EICR + Gas Safety + EPC) is £230, saving £24.98.",
      },
    },
  ],
};

// ── FAQ items ─────────────────────────────────────────────────────────────────

const faqItems = [
  {
    question: "How much does an EICR cost in the UK?",
    answer:
      "A domestic EICR costs from £67.99 for a studio to £199.99 for an 8-bedroom property. The national average quoted by comparison sites is £150–£300 for a typical 3-bedroom home. Our 1–3 bedroom EICR is £94.99, towards the lower end of the market for a fixed-price, certificate within 24 hours. Commercial EICRs start from £149.99 for a single consumer unit.",
  },
  {
    question: "Why does an EICR cost more for larger properties?",
    answer:
      "Every electrical circuit must be individually tested, for continuity, polarity and insulation resistance. Larger properties have more circuits, more sockets, more light fittings and more complex consumer units. A studio might have 6 circuits; a large HMO can have 20 or more. Our pricing reflects testing time, which scales directly with circuit count.",
  },
  {
    question: "Does the age of the wiring affect the EICR cost?",
    answer:
      "Not for our fixed-price tiers, the price is determined by property size, not the age of the wiring. However, older wiring (pre-1970s rubber insulation, for example) is more likely to produce C1 or C2 codes that require remedial work. If remedial works are needed, these are quoted separately after the inspection.",
  },
  {
    question: "How much does a commercial EICR cost?",
    answer:
      "A commercial EICR starts from £149.99 for a single consumer unit of up to 10 circuits. Each additional consumer unit adds to the price up to £1,155.99 for 8 units. Extra circuits above 10 per unit are charged at £25 each. See the full commercial table above.",
  },
  {
    question: "Are there any extra charges on top of the EICR price?",
    answer:
      "We charge £10 for parking where no free on-site parking is available, and £20 for properties in the London Congestion Charge Zone. There are no call-out charges, no day-rate add-ons, and no surcharge for certificates within 24 hours, the price in the table is the price you pay.",
  },
  {
    question: "Can I save money by bundling my EICR with other certificates?",
    answer:
      "Yes, our Essential Bundle (EICR + Gas Safety Certificate) costs £130 versus £144.99 if booked separately, saving £14.99. The Full Compliance Bundle (EICR + Gas Safety + EPC) is £230, saving £24.98 on three certificates in one visit.",
  },
  {
    question: "What happens if the EICR finds a problem?",
    answer:
      "Faults are graded C1 (danger present, immediate action), C2 (potentially dangerous, urgent), C3 (improvement recommended), or FI (further investigation required). C1 and C2 codes mean the EICR outcome is unsatisfactory. Remedial works can be quoted separately. You cannot legally rent a property with an unsatisfactory EICR.",
  },
  {
    question: "How do I know if an EICR provider is charging a fair price?",
    answer:
      "Fixed upfront pricing is the clearest signal. Avoid any electrician who quotes 'from £X per hour' without a ceiling, the final bill can be difficult to predict. Our prices are fixed by property size, displayed in full on this page, and don't change on the day.",
  },
];

const lowestDomesticPrice = getPriceForEICR("studio");
const popularDomesticPrice = getPriceForEICR("1-3bed");
const highestDomesticPrice = getPriceForEICR("8bed");

// ── Page ──────────────────────────────────────────────────────────────────────

export default function EicrCostPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
      <section
        aria-labelledby="eicr-cost-heading"
        className="bg-hero-blue text-white"
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
              <li className="text-white font-medium">EICR Cost</li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            Transparent Pricing · No Hidden Charges · 2025 Price Guide
          </p>

          <Heading level={1} id="eicr-cost-heading" inverted className="mb-4 max-w-3xl">
            How much does an EICR cost?
          </Heading>
          <HeroRating theme="dark" className="mb-5" />

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-6">
            A domestic EICR starts from{" "}
            <strong className="text-white">£{lowestDomesticPrice}</strong> for a
            studio apartment, <strong className="text-white">£{popularDomesticPrice}</strong>{" "}
            for a 1–3 bedroom property, and up to{" "}
            <strong className="text-white">£{highestDomesticPrice}</strong> for
            an 8-bedroom property. Commercial EICRs start from{" "}
            <strong className="text-white">£149.99</strong>. Full breakdown below
           , no quotes, no call-out charges, no day-rate surprises.
          </p>

          <PriceDisplay
            price={lowestDomesticPrice}
            from
            size="lg"
            className="mb-8 [&>span:first-child]:text-blue-100 [&>span:last-child]:text-white"
          />

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/book?service=eicr"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book my EICR, from £{lowestDomesticPrice}
            </Link>
            <Link
              href="/eicr"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white/10 border border-white/30 text-white hover:bg-white/20",
              )}
            >
              EICR service page
            </Link>
          </div>

          <TrustBadges serviceKey="eicr" variant="dark" />
        </Container>
      </section>

      {/* ── Quick stats bar ── */}
      <div className="bg-spec-bar text-sm py-5 border-t-2 border-action-green">
        <Container>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-5 text-center [&>*:last-child:nth-child(odd)]:col-span-2 md:flex md:flex-wrap md:items-center md:justify-center md:gap-y-3 md:text-left text-white/70">
            <div className="flex flex-col gap-1 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">Studio</dt>
              <dd className="text-sm font-bold text-white">£{lowestDomesticPrice}</dd>
            </div>
            <div className="flex flex-col gap-1 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">1–3 bed</dt>
              <dd className="text-sm font-bold text-white">£{popularDomesticPrice}</dd>
            </div>
            <div className="flex flex-col gap-1 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">Commercial from</dt>
              <dd className="text-sm font-bold text-white">£149.99</dd>
            </div>
            <div className="flex flex-col gap-1 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">Valid</dt>
              <dd className="text-sm font-bold text-white">5 years</dd>
            </div>
          </dl>
        </Container>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── Domestic EICR pricing ── */}
        <section id="domestic-pricing" aria-labelledby="domestic-heading">
          <Heading level={2} id="domestic-heading" className="mb-2">
            Domestic EICR costs
          </Heading>
          <p className="text-brand-grey mb-6">
            All domestic EICR prices are fixed by property size. The price you
            see is the price you pay, no call-out charge added on top, no
            day-rate calculation, no adjustment on the day.
          </p>

          <PriceTable
            title="Domestic EICR, full price breakdown"
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
        </section>

        {/* ── What the cost covers ── */}
        <section aria-labelledby="what-included-heading">
          <Heading level={2} id="what-included-heading" className="mb-4">
            What does the EICR cost cover?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            Understanding what you are paying for helps you evaluate whether a
            quote is reasonable. An EICR is not a quick visual check, it is a
            systematic, circuit-by-circuit inspection and test of the entire
            fixed electrical installation in the property.
          </p>
          <ul className="space-y-3 mb-5" role="list">
            {[
              "Visual inspection of the consumer unit (fuse box), wiring, sockets, switches and light fittings",
              "Dead testing of every circuit, continuity and polarity checks with the power off",
              "Live testing, insulation resistance and RCD (residual current device) testing with power on",
              "Identification of any C1, C2, C3 or FI coded observations",
              "Written EICR report with every circuit recorded and a pass or unsatisfactory outcome",
              "Certificate emailed on the day of the inspection",
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
                <span className="text-brand-charcoal/80 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-brand-charcoal/70">
            The inspection is carried out by a NICEIC approved or NAPIT certified
            electrician, both government-recognised competent person schemes
            assessed against BS 7671 (the wiring regulations). All our engineers
            carry public liability insurance and professional indemnity cover.
          </p>
        </section>

        {/* ── How our prices compare ── */}
        <section aria-labelledby="compare-heading">
          <Heading level={2} id="compare-heading" className="mb-4">
            How our EICR costs compare
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            The national average for a domestic EICR quoted by price comparison
            sites is typically <strong>£150–£300</strong> for a 2–3 bedroom
            property, with some London electricians quoting £200–£400+. This
            variation exists because many electricians quote an hourly rate rather
            than a fixed price, meaning the final bill depends on how long the
            job takes, which the landlord cannot predict in advance.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-hero-blue text-white">
                  <th scope="col" className="text-left px-4 py-3 font-semibold">Property</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold">Market range</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold">Our price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { property: "Studio / 1 bed", market: "£80–£200", ours: `£${lowestDomesticPrice}` },
                  { property: "1–3 bedrooms", market: "£150–£300", ours: `£${popularDomesticPrice}` },
                  { property: "4 bedrooms", market: "£200–£350", ours: "£104.99" },
                  { property: "5 bedrooms", market: "£250–£400", ours: "£139.99" },
                ].map(({ property, market, ours }, i) => (
                  <tr
                    key={property}
                    className={i % 2 === 0 ? "bg-white" : "bg-warm-white"}
                  >
                    <td className="px-4 py-3 text-brand-charcoal font-medium">{property}</td>
                    <td className="px-4 py-3 text-brand-grey">{market}</td>
                    <td className="px-4 py-3 text-compliance-blue font-semibold">{ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-brand-grey">
            Market range figures are approximate, based on published price
            comparison data for London and the M25 area (2025).
          </p>
        </section>

        {/* ── What affects the cost ── */}
        <section aria-labelledby="cost-factors-heading">
          <Heading level={2} id="cost-factors-heading" className="mb-6">
            What affects the cost of an EICR?
          </Heading>

          <dl className="space-y-4">
            {[
              {
                title: "Property size",
                body: "The primary driver. More bedrooms means more rooms, more circuits and more test points. A studio might have 6–8 circuits; a large HMO can have 20 or more. Our pricing reflects this directly.",
              },
              {
                title: "Number of circuits and consumer units",
                body: "Each circuit from the consumer unit (fuse box) must be tested for continuity, polarity and insulation resistance individually. More circuits equals more time, and commercial properties often have multiple consumer units, which is why commercial pricing is structured around consumer unit count.",
              },
              {
                title: "Age and type of wiring",
                body: "Older wiring, such as rubber-insulated wiring common in pre-1970s properties, requires more careful testing and is more likely to produce findings. This does not change our quoted price, but any remedial works identified in the report are quoted separately.",
              },
              {
                title: "Property complexity",
                body: "Outbuildings, detached garages, large garden circuits, non-standard consumer unit configurations or split-phase supplies take additional time. Our standard domestic prices cover typical residential properties, unusual configurations may need a custom quote.",
              },
              {
                title: "Whether remedial works are needed",
                body: "The EICR itself is a fixed price. If C1 or C2 codes are found, remedial works are required to make the installation safe and are priced separately. This is not included in the EICR cost.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="flex gap-5 p-5 bg-white rounded-xl border border-border"
              >
                <div className="w-1.5 rounded-full bg-compliance-blue shrink-0 self-stretch" />
                <div>
                  <dt className="font-semibold text-brand-charcoal mb-1">{title}</dt>
                  <dd className="text-sm text-brand-grey leading-relaxed">{body}</dd>
                </div>
              </div>
            ))}
          </dl>
        </section>

        {/* ── Commercial EICR pricing ── */}
        <section id="commercial-pricing" aria-labelledby="commercial-heading">
          <Heading level={2} id="commercial-heading" className="mb-2">
            Commercial EICR costs
          </Heading>
          <p className="text-brand-grey mb-6">
            Commercial EICRs are priced by number of consumer units (each covering
            up to 10 circuits). Additional circuits above 10 per unit are charged
            at{" "}
            <strong className="text-brand-charcoal">
              £{COMMERCIAL_EICR_EXTRA_CIRCUIT_CHARGE} per circuit
            </strong>
            .
          </p>

          <PriceTable
            title="Commercial EICR, price by consumer units"
            rows={COMMERCIAL_EICR_TABLE}
            highlightCheapest
          />

          <p className="mt-5 text-sm text-brand-grey">
            Need a commercial EICR?{" "}
            <Link
              href="/commercial-eicr"
              className="text-compliance-blue hover:underline font-medium"
            >
              View the commercial EICR service page →
            </Link>
          </p>
        </section>

        {/* ── How to keep costs down ── */}
        <section aria-labelledby="tips-heading">
          <Heading level={2} id="tips-heading" className="mb-6">
            How to keep your EICR cost as low as possible
          </Heading>
          <ul className="space-y-3" role="list">
            {[
              "Select the correct property size tier, check your bedroom count carefully before booking to avoid paying for a larger band.",
              "Bundle with Gas Safety and EPC, our Essential Bundle (EICR + CP12) saves £14.99; the Full Compliance Bundle saves £24.98 on three certificates.",
              "Ensure full access before the engineer arrives, consumer unit accessibility, loft hatches and outbuilding keys all need to be ready. Delays add risk to the schedule.",
              "Fix known faults beforehand, a broken socket or a circuit that trips repeatedly will produce a C2 code and may require a re-inspection visit, which adds cost.",
              "Choose a fixed-price provider, avoid quotes on an hourly basis, which are unpredictable. Our prices are listed in full and do not change on the day.",
              "Book early in the renewal cycle, leaving the EICR until your certificate expires creates urgency that some providers charge a premium for.",
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
                <span className="text-brand-charcoal/80 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Bundle cross-sell ── */}
        <section aria-labelledby="bundle-heading">
          <Heading level={2} id="bundle-heading" className="mb-4">
            Save more, bundle your EICR
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-5">
            Most landlords who need an EICR also need a Gas Safety Certificate
            and/or an EPC around the same time. Booking them together in a single
            visit saves money and eliminates the need for multiple access
            appointments with your tenants.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: "Essential Bundle",
                description: "EICR (1–3 bed) + Gas Safety Certificate",
                individually: "£144.99",
                bundle: "£130",
                saving: "£14.99",
                href: "/book?bundle=essential",
              },
              {
                name: "Full Compliance Bundle",
                description: "EICR + Gas Safety Certificate + EPC",
                individually: "£254.98",
                bundle: "£230",
                saving: "£24.98",
                href: "/book?bundle=full-compliance",
              },
            ].map(({ name, description, individually, bundle, saving, href }) => (
              <div
                key={name}
                className="rounded-xl border border-border bg-warm-white p-5"
              >
                <p className="font-semibold text-brand-charcoal mb-1">{name}</p>
                <p className="text-sm text-brand-grey mb-3">{description}</p>
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-2xl font-bold text-brand-charcoal">{bundle}</span>
                  <span className="text-sm text-brand-grey line-through mb-0.5">{individually}</span>
                  <span className="text-sm font-semibold text-action-green mb-0.5">
                    save {saving}
                  </span>
                </div>
                <Link
                  href={href}
                  className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "w-full")}
                >
                  Book {name}
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-center text-brand-grey">
            <Link
              href="/landlord-certificates-bundle"
              className="text-compliance-blue hover:underline font-medium"
            >
              See all bundle options including HMO Complete →
            </Link>
          </p>
        </section>

        {/* ── Other cost guides ── */}
        <section aria-labelledby="other-cost-guides-heading">
          <Heading level={2} id="other-cost-guides-heading" className="mb-4">
            Compare other landlord certificate costs
          </Heading>
          <p className="text-brand-charcoal/80 mb-5 text-sm leading-relaxed">
            Most landlords who need an EICR also need a Gas Safety Certificate and
            an EPC. See what each costs and compare all services on our pricing page.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Gas Safety Certificate Cost", href: "/gas-safety-certificate-cost", price: "from £50" },
              { label: "EPC Certificate Cost", href: "/epc-cost", price: "from £89.99" },
              { label: "All Services & Prices", href: "/pricing", price: "Full price list" },
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

        {/* ── FAQs ── */}
        <section aria-labelledby="faq-heading" className="below-fold">
          <Heading level={2} id="faq-heading" className="mb-6">
            EICR cost, frequently asked questions
          </Heading>
          <FAQAccordion items={faqItems} includeSchema={false} />
        </section>

        {/* ── CTA ── */}
        <section
          aria-labelledby="cta-heading"
          className="rounded-2xl bg-compliance-blue px-8 py-10 text-center text-white"
        >
          <Heading level={2} id="cta-heading" inverted className="mb-2">
            Get your EICR at a fixed price
          </Heading>
          <p className="text-blue-200 mb-6 max-w-md mx-auto">
            The price on this page is the price you pay, no call-out charges,
            no day-rate surprises, no re-quote on the day.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/book?service=eicr"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book my EICR, from £{lowestDomesticPrice}
            </Link>
            <Link
              href="/eicr"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white/10 border border-white/30 text-white hover:bg-white/20",
              )}
            >
              EICR service overview
            </Link>
          </div>
          <p className="mt-4 text-xs text-blue-100">
            No hidden charges. NICEIC approved &amp; NAPIT certified. Certificate emailed within 24 hours.
          </p>
        </section>
      </div>

      <ReviewsBlock />

      <StickyMobileCTA
        href="/book?service=eicr"
        label="Book EICR"
        price={lowestDomesticPrice}
        serviceName="EICR from"
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { TrustBadges } from "@/components/ui/trust-badges";
import {
  ADDITIONAL_CHARGES,
  DOMESTIC_EICR_TABLE,
  getPriceForEICR,
} from "@/lib/pricing";

export const metadata: Metadata = {
  title: "EICR Certificate from £67.99 | My Landlord Certificate",
  description:
    "Book an EICR (Electrical Installation Condition Report) from £67.99. Legally required for all landlords in England since 2020. NICEIC approved electricians, same-week appointments across London, certificate emailed same day.",
  alternates: {
    canonical: "https://mylandlordcertificate.co.uk/electrical-safety/domestic-eicr",
  },
};

const entryPrice = getPriceForEICR("studio");

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Domestic EICR — Electrical Installation Condition Report",
  url: "https://mylandlordcertificate.co.uk/electrical-safety/domestic-eicr",
  description:
    "Legally required for all private rental properties in England. NICEIC approved electricians inspect all fixed wiring, consumer units, sockets, and light fittings. Certificate emailed same day.",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://mylandlordcertificate.co.uk",
  },
  areaServed: ["London", "South East England"],
  offers: {
    "@type": "Offer",
    price: "67.99",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://mylandlordcertificate.co.uk/electrical-safety/domestic-eicr",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Electrical Safety", item: "https://mylandlordcertificate.co.uk/electrical-safety" },
    { "@type": "ListItem", position: 3, name: "Domestic EICR", item: "https://mylandlordcertificate.co.uk/electrical-safety/domestic-eicr" },
  ],
};

const faqs = [
  {
    question: "Is an EICR a legal requirement for landlords?",
    answer:
      "Yes. Since 1 July 2020, all new private tenancies in England must have a valid EICR. From 1 April 2021, this applies to all existing tenancies too. Landlords who fail to comply can face fines of up to £30,000.",
  },
  {
    question: "How often does a landlord EICR need to be renewed?",
    answer:
      "An EICR is valid for 5 years. You must renew it every 5 years or at the start of a new tenancy, whichever comes first. You must provide a copy to your tenant within 28 days of the inspection.",
  },
  {
    question: "What happens if my property fails an EICR?",
    answer:
      "If your EICR identifies code C1 or C2 faults (dangerous or potentially dangerous), you must carry out remedial work within 28 days. Once the work is complete, we provide a completion certificate confirming the installation is safe.",
  },
  {
    question: "How long does an EICR inspection take?",
    answer:
      "Most domestic EICRs take 2–4 hours depending on property size and the age of the wiring. Our engineers will confirm the expected duration when booking.",
  },
  {
    question: "Do tenants need to be present during the EICR?",
    answer:
      "Access to the property is required, but tenants don't need to stay. You can arrange access with your tenant or managing agent beforehand.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function DomesticEICRPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
      <section className="bg-white border-b border-border py-10 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-brand-grey flex-wrap">
              <li>
                <Link href="/" className="hover:text-compliance-blue transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/electrical-safety" className="hover:text-compliance-blue transition-colors">
                  Electrical Safety
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-brand-charcoal font-medium">Domestic EICR</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-3 leading-tight">
            EICR Certificate from £{entryPrice}
          </h1>
          <PriceDisplay price={entryPrice} from size="lg" className="mb-4" />
          <p className="text-brand-grey mb-4">
            NICEIC approved · Same-week appointments · Certificate emailed same day
          </p>
          <TrustBadges variant="light" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=eicr"
              className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Book Now — from £{entryPrice}
            </Link>
            <a
              href="#pricing"
              className="inline-flex items-center border border-border hover:border-compliance-blue text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              View All Prices
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="bg-brand-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-white/10">
            <div className="pl-0">
              <p className="text-xs text-white/50 mb-0.5">Entry price</p>
              <p className="font-bold text-white">from £{entryPrice}</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Valid for</p>
              <p className="font-bold text-white">5 years</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Certificate</p>
              <p className="font-bold text-white">Same day</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Accreditation</p>
              <p className="font-bold text-white">NICEIC</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content well ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 md:pb-10">

        {/* What is an EICR */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">What is an EICR?</h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            An EICR (Electrical Installation Condition Report) is a formal written assessment of all
            fixed electrical wiring and installations in a property. A qualified electrician inspects
            the consumer unit, wiring, sockets, light fittings, and earthing to check for defects,
            deterioration, or anything that doesn&apos;t meet current safety standards.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Any issues found are classified by code: C1 (danger present — immediate action required),
            C2 (potentially dangerous), C3 (improvement recommended), or FI (further investigation
            required). The report must be acted upon within 28 days for C1 and C2 codes.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Our NICEIC approved electricians carry out EICRs to the latest 18th Edition Wiring
            Regulations (BS 7671:2018+A2:2022). The certificate is emailed to you on the same day
            as the inspection.
          </p>

          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Legal requirement:</span>{" "}
              Under the Electrical Safety Standards in the Private Rented Sector (England)
              Regulations 2020, all landlords must have a valid EICR carried out by a qualified
              person before any new tenancy begins, and renew it every 5 years.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">EICR Pricing</h2>
          <p className="text-brand-grey mb-6">
            Fixed prices by property size. No call-out fees, no hidden extras.
          </p>
          <PriceTable
            title="Domestic EICR"
            rows={DOMESTIC_EICR_TABLE}
            highlightCheapest
          />
          <p className="text-sm text-brand-grey mt-4">
            Additional charges may apply:{" "}
            <span className="text-brand-charcoal font-medium">
              Congestion Zone +£{ADDITIONAL_CHARGES.congestionZone}
            </span>{" "}
            ·{" "}
            <span className="text-brand-charcoal font-medium">
              Parking restrictions +£{ADDITIONAL_CHARGES.parking}
            </span>
          </p>
          <p className="text-sm text-brand-grey mt-2">
            Need a commercial EICR?{" "}
            <Link href="/electrical-safety/commercial-eicr" className="text-compliance-blue hover:underline">
              View commercial EICR pricing →
            </Link>
          </p>
        </section>

        {/* What's included */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            What&apos;s included for £{entryPrice}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Full inspection of consumer unit and circuits",
              "Testing of all fixed wiring and earth connections",
              "Inspection of all sockets, switches, and fittings",
              "Written EICR with coded fault classification",
              "NICEIC approved electrician",
              "Certificate emailed same day",
              "Copy for tenant and copy for your records",
              "Compliant with 18th Edition Wiring Regulations",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-action-green/20 text-brand-charcoal flex items-center justify-center shrink-0 text-xs font-bold">
                  ✓
                </span>
                <span className="text-sm text-brand-charcoal/80">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQs */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </section>

        {/* CTA block */}
        <section className="py-10">
          <div className="bg-compliance-blue rounded-2xl px-6 py-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready to book your EICR?
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Fixed price from £{entryPrice}. No call-out fees. Certificate emailed same day.
              Same-week appointments across all 32 London boroughs.
            </p>
            <Link
              href="/book?service=eicr"
              className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Book Now — from £{entryPrice}
            </Link>
          </div>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=eicr"
        label="Book Now"
        price={entryPrice}
        serviceName="EICR Certificate"
      />
    </>
  );
}

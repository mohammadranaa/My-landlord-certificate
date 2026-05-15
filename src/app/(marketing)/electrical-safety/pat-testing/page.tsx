import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { TrustBadges } from "@/components/ui/trust-badges";
import { ADDITIONAL_CHARGES, PAT_TABLE, getPriceForPAT } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "PAT Testing from £59.99 | My Landlord Certificate",
  description:
    "Portable Appliance Testing from £59.99 (up to 10 appliances). Fast on-site testing, pass/fail labels, and written report. For furnished rental properties and HMOs across London.",
  alternates: {
    canonical: "https://mylandlordcertificate.co.uk/electrical-safety/pat-testing",
  },
};

const entryPrice = getPriceForPAT(1);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "PAT Testing — Portable Appliance Testing",
  url: "https://mylandlordcertificate.co.uk/electrical-safety/pat-testing",
  offers: {
    "@type": "Offer",
    price: `${entryPrice}`,
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Electrical Safety", item: "https://mylandlordcertificate.co.uk/electrical-safety" },
    { "@type": "ListItem", position: 3, name: "PAT Testing", item: "https://mylandlordcertificate.co.uk/electrical-safety/pat-testing" },
  ],
};

const faqs = [
  {
    question: "Is PAT testing a legal requirement for landlords?",
    answer:
      "There is no law that specifically requires annual PAT testing for residential landlords, but the Landlord and Tenant Act 1985 and the Housing Act 2004 (HHSRS) require landlords to ensure all electrical appliances are safe. PAT testing is the accepted method of demonstrating this. HMO licences often explicitly require it.",
  },
  {
    question: "Which appliances need PAT testing?",
    answer:
      "Any portable electrical appliance with a plug should be tested: washing machines, fridges, dishwashers, televisions, kettles, toasters, lamps, extension leads, and any other appliance you provide with the tenancy. Fixed appliances wired directly into the consumer unit are covered by the EICR rather than PAT testing.",
  },
  {
    question: "How often should PAT testing be carried out?",
    answer:
      "For rental properties, annual PAT testing is recommended and often required by HMO licences. For low-risk appliances in stable environments, the recommended interval may be longer — our engineers can advise based on your specific circumstances.",
  },
  {
    question: "What happens to appliances that fail?",
    answer:
      "Failed appliances are labelled with a red FAIL sticker and recorded in the written report. They must not be used and should be repaired or replaced. We will not remove appliances — this is the landlord's responsibility.",
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

export default function PATTestingPage() {
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
              <li><Link href="/" className="hover:text-compliance-blue transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/electrical-safety" className="hover:text-compliance-blue transition-colors">Electrical Safety</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-brand-charcoal font-medium">PAT Testing</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-3 leading-tight">
            PAT Testing from £{entryPrice}
          </h1>
          <PriceDisplay price={entryPrice} from size="lg" className="mb-4" />
          <p className="text-brand-grey mb-4">
            Fast on-site testing · Pass/fail labels on every appliance · Written report same day
          </p>
          <TrustBadges variant="light" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=pat"
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
              <p className="text-xs text-white/50 mb-0.5">Recommended</p>
              <p className="font-bold text-white">Annually</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Report</p>
              <p className="font-bold text-white">Same day</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Appliances</p>
              <p className="font-bold text-white">Up to 50</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content well ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 md:pb-10">

        {/* What is it */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            PAT testing for furnished rental properties
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            PAT (Portable Appliance Testing) checks the safety of any electrical appliance with
            a plug. For landlords who let furnished properties, this covers white goods, televisions,
            lamps, kettles, toasters, and any other appliances provided with the tenancy.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Our engineers test each appliance using calibrated PAT testers, attach colour-coded
            pass/fail labels, and issue a full written report with each appliance listed individually.
            The report can be provided to tenants and kept as part of your compliance records.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed">
            Pricing is based on the total number of appliances. We can test up to 50 appliances
            per visit — contact us for larger volumes.
          </p>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">PAT Testing Pricing</h2>
          <p className="text-brand-grey mb-6">
            Fixed price by total number of appliances. No extra charge per appliance within each bracket.
          </p>
          <PriceTable
            title="PAT Testing"
            rows={PAT_TABLE}
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
        </section>

        {/* What's included */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            What&apos;s included for £{entryPrice}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Visual inspection of each appliance and lead",
              "Earth continuity and insulation resistance test",
              "Pass/fail label applied to every appliance",
              "Full written report listing each appliance",
              "Appliance description and asset reference",
              "Failed appliances clearly identified",
              "Report emailed same day",
              "Up to 10 appliances included",
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
              Book your PAT testing today
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Fixed price from £{entryPrice} (up to 10 appliances). Same-week appointments.
              Written report emailed same day.
            </p>
            <Link
              href="/book?service=pat"
              className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Book Now — from £{entryPrice}
            </Link>
          </div>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=pat"
        label="Book Now"
        price={entryPrice}
        serviceName="PAT Testing"
      />
    </>
  );
}

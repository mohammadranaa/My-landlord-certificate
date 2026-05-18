import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { TrustBadges } from "@/components/ui/trust-badges";
import { ADDITIONAL_CHARGES, FUSE_BOX_TABLE } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Fuse Box Installation London from £599.99 — NICEIC Approved | My Landlord Certificate",
  description:
    "Consumer unit replacement from £599.99. NICEIC approved electricians across all 32 London boroughs. Dual-RCD or RCBO protection, Part P self-certified, EICR included on completion.",
  alternates: {
    canonical: "https://mylandlordcertificate.co.uk/electrical-safety/fuse-box-installation",
  },
};

const entryPrice = FUSE_BOX_TABLE[0].price;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fuse Box Installation — Consumer Unit Replacement",
  url: "https://mylandlordcertificate.co.uk/electrical-safety/fuse-box-installation",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://mylandlordcertificate.co.uk",
  },
  areaServed: { "@type": "City", name: "London" },
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
    { "@type": "ListItem", position: 3, name: "Fuse Box Installation", item: "https://mylandlordcertificate.co.uk/electrical-safety/fuse-box-installation" },
  ],
};

const faqs = [
  {
    question: "Why might I need a new consumer unit?",
    answer:
      "Older fuse boxes (particularly rewirable fuse boards) lack RCD protection, which is now required under the 18th Edition Wiring Regulations (BS 7671:2018+A2:2022). An EICR that returns a C2 code for the consumer unit means it must be replaced within 28 days. A new consumer unit adds RCD and RCBO protection, significantly reducing the risk of electric shock and fire.",
  },
  {
    question: "How long does a fuse box installation take?",
    answer:
      "A standard consumer unit replacement typically takes 4–6 hours. During the installation, power will be off to all circuits in the property — we advise tenants of this in advance. We carry out a full test of all circuits after installation and issue the completion EICR before leaving.",
  },
  {
    question: "Will I get an EICR after installation?",
    answer:
      "Yes. Every consumer unit installation includes a full electrical test and EICR on completion. The certificate confirms the installation is safe and compliant with BS 7671 — useful for insurance and future tenancy purposes.",
  },
  {
    question: "What type of consumer unit do you install?",
    answer:
      "We install high-quality metal consumer units with dual RCD protection (split-load) or individual RCBOs per circuit for maximum protection. We use Hager, Legrand, and Crabtree boards as standard. The exact specification is agreed with you at the time of booking based on your property's circuits.",
  },
  {
    question: "Will you notify Building Control (Part P)?",
    answer:
      "Yes. As NICEIC approved contractors, we are registered to self-certify our electrical installation work under Part P of the Building Regulations. We notify NICEIC on your behalf — you will receive a Building Regulations compliance certificate within a few weeks of installation, at no extra charge.",
  },
  {
    question: "Does my tenant need to be present during the installation?",
    answer:
      "Someone needs to provide access to the property, but your tenant does not need to be present throughout. We recommend advising tenants in advance that power will be off for approximately 4–6 hours. We can arrange an early-morning start to minimise disruption.",
  },
  {
    question: "Can you move the fuse box to a different location?",
    answer:
      "Yes. We can relocate a consumer unit to a more accessible or more suitable position. This typically adds 2–4 hours to the installation time and requires additional cable runs. We will quote for this separately after surveying the property.",
  },
  {
    question: "How many ways (circuit positions) will I need?",
    answer:
      "Most 1–3 bedroom properties require a 10 or 12-way consumer unit. Larger properties and HMOs often need 16 or more ways. Our pricing is based on the size of the consumer unit — our engineer will confirm the exact specification at the time of booking.",
  },
  {
    question: "Which areas of London do you cover?",
    answer:
      "We cover all 32 London boroughs, including Westminster, Islington, Hackney, Tower Hamlets, Southwark, Lambeth, Wandsworth, Hammersmith & Fulham, Ealing, Brent, Camden, and all other boroughs. A congestion zone supplement of £18 applies for properties within the TfL congestion zone.",
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

export default function FuseBoxInstallationPage() {
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
              <li className="text-brand-charcoal font-medium">Fuse Box Installation</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-3 leading-tight">
            Fuse Box Installation London from £{entryPrice}
          </h1>
          <PriceDisplay price={entryPrice} from size="lg" className="mb-4" />
          <p className="text-brand-grey mb-4">
            NICEIC approved · Supply &amp; install · Part P self-certified · EICR included
          </p>
          <TrustBadges variant="light" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=fuse-box"
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
              <p className="text-xs text-white/50 mb-0.5">Duration</p>
              <p className="font-bold text-white">4–6 hours</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Includes</p>
              <p className="font-bold text-white">EICR + Part P</p>
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

        {/* What is it */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Consumer unit replacement for London landlords
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Many older rental properties across London still have rewirable fuse boards that
            lack the RCD (Residual Current Device) protection required by the 18th Edition
            Wiring Regulations (BS 7671:2018+A2:2022). A failed EICR that codes the consumer
            unit as C2 (potentially dangerous) triggers a 28-day remediation deadline —
            replacing the consumer unit is typically the fastest resolution.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            We supply and install high-quality metal consumer units from Hager, Legrand, and
            Crabtree — brands trusted by electricians for their reliability and longevity.
            Every installation includes a full circuit test and completion EICR to confirm
            the work is safe and compliant.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed">
            As NICEIC approved contractors, we self-certify all installations under Part P of
            the Building Regulations. You receive a Building Regulations compliance certificate
            automatically, with no need to separately notify your local authority.
          </p>
        </section>

        {/* How it works */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8">How it works</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Book and confirm specification",
                body: "Book online or call us. We confirm the number of circuits in your property and agree the consumer unit specification (split-load dual RCD or individual RCBOs).",
              },
              {
                step: "2",
                title: "Installation day (4–6 hours)",
                body: "Our NICEIC approved electrician arrives, isolates the supply, removes the old board, installs and connects the new consumer unit, then tests every circuit before restoring power.",
              },
              {
                step: "3",
                title: "EICR and Part P certificate",
                body: "We issue the completion EICR on the day. Your Part P Building Regulations certificate follows within a few weeks, notified to NICEIC on your behalf at no extra cost.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex flex-col gap-3">
                <span className="w-9 h-9 rounded-full bg-compliance-blue text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {step}
                </span>
                <h3 className="font-semibold text-brand-charcoal">{title}</h3>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">
            Fuse Box Installation Pricing
          </h2>
          <p className="text-brand-grey mb-6">
            Fixed price by consumer unit type. Includes supply, installation, Part P notification, and completion EICR.
          </p>
          <PriceTable
            title="Fuse Box Installation"
            rows={FUSE_BOX_TABLE}
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
            What&apos;s included
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Supply and installation of new metal consumer unit",
              "Dual RCD (split-load) or individual RCBO protection",
              "Full circuit isolation and reconnection",
              "Testing of all circuits after installation",
              "Completion EICR certificate included",
              "Part P Building Regulations self-certification",
              "NICEIC approved electrician",
              "Installed in one day (4–6 hours)",
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

        {/* Related services */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Related services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                name: "Domestic EICR",
                href: "/electrical-safety/domestic-eicr",
                desc: "Electrical installation condition report from £67.99. Required every 5 years.",
              },
              {
                name: "Electrical Diagnostic",
                href: "/electrical-safety/electrical-diagnostic",
                desc: "Fault finding from £89.99/hr. Identify the root cause of recurring faults.",
              },
              {
                name: "PAT Testing",
                href: "/electrical-safety/pat-testing",
                desc: "Portable appliance testing from £59.99. For furnished rental properties.",
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
        </section>

        {/* CTA block */}
        <section className="py-10">
          <div className="bg-compliance-blue rounded-2xl px-6 py-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Book your fuse box installation
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Fixed price from £{entryPrice}, EICR and Part P included. Same-week appointments
              across all 32 London boroughs.
            </p>
            <Link
              href="/book?service=fuse-box"
              className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Book Now — from £{entryPrice}
            </Link>
          </div>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=fuse-box"
        label="Book Now"
        price={entryPrice}
        serviceName="Fuse Box Installation"
      />
    </>
  );
}

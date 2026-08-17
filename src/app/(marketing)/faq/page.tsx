import type { Metadata } from "next";
import { LazyFAQAccordion as FAQAccordion } from "@/components/lazy";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { PHONE_DISPLAY, TEL } from "@/lib/constants";
import { cn } from "@/lib/utils";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "FAQ — Landlord Certificates Explained",
  description:
    "Answers to the most common questions about EICR, Gas Safety Certificates, EPC, Fire Risk Assessment and PAT Testing for UK landlords. Legal requirements, pricing, booking and certificates explained.",
  alternates: { canonical: "https://www.mylandlordcertificate.co.uk/faq" },
  openGraph: {
    title: "FAQ — Landlord Certificates Explained | My Landlord Certificate",
    description:
      "Answers to the most common questions about EICR, Gas Safety Certificates, EPC, Fire Risk Assessment and PAT Testing for UK landlords. Legal requirements, pricing, booking and certificates explained.",
    url: "https://www.mylandlordcertificate.co.uk/faq",
  },
  twitter: {
    title: "FAQ — Landlord Certificates Explained",
    description:
      "37 questions covering EICR, Gas Safety, EPC, Fire Risk Assessment, PAT Testing, booking and pricing.",
  },
};

// ── FAQ data ──────────────────────────────────────────────────────────────────

const categories = [
  {
    id: "booking",
    label: "Booking & general",
    items: [
      {
        question: "How do I book a landlord certificate?",
        answer:
          "Book online at mylandlordcertificate.co.uk. Choose your service, enter your property address and size, select an appointment slot and pay securely. The booking takes under three minutes and you receive a confirmation email immediately with your engineer's contact details. You can also email us if you prefer.",
      },
      {
        question: "How quickly can I get an appointment?",
        answer:
          "Next-day appointments are available across London and the M25 area, subject to engineer availability in your area. Book before 5pm on a working day and we will aim to schedule your visit for the following working day. For urgent priority bookings, email us and we will do our best to accommodate you.",
      },
      {
        question: "Do I need to be present during the inspection?",
        answer:
          "No. Your tenant or any keyholder can provide access to the property. The engineer will carry out the inspection, complete all paperwork and explain any findings without you needing to be there. Your certificate is emailed directly to you on the day of the inspection. This is particularly convenient for landlords who live or work away from their rental property.",
      },
      {
        question: "Can I book multiple certificates in one visit?",
        answer:
          "Yes. Our bundle options combine two or more certificates in a single engineer visit, saving you money and eliminating multiple access appointments. The Essential Bundle (EICR + Gas Safety) starts from £130, saving £14.99. The Full Compliance Bundle adds an EPC for £230. The HMO Complete Bundle includes EICR, Gas Safety, EPC and Fire Risk Assessment for £450, saving up to £44.97. See the bundle page for full details.",
      },
      {
        question: "How do I pay?",
        answer:
          "Payment is taken securely online when you book. We accept all major credit and debit cards. You pay the fixed price displayed before you confirm — there are no additional charges added after the visit unless you have explicitly agreed to remedial work on the day. A VAT invoice is emailed to you with your booking confirmation.",
      },
      {
        question: "What areas do you cover?",
        answer:
          "We cover all 33 London boroughs plus the surrounding M25 corridor counties — Surrey, Kent, Essex and Hertfordshire. If you are unsure whether your property falls within our coverage area, enter your postcode during the booking process or email us and we will confirm availability.",
      },
      {
        question: "What happens if I need to rearrange my appointment?",
        answer:
          "Contact us by phone or email at least 24 hours before your appointment and we will rearrange at no charge. Cancellations or rearrangements with less than 24 hours' notice may incur a rebooking fee. Full details are in our terms and conditions.",
      },
      {
        question: "What is your cancellation and refund policy?",
        answer:
          "You can rearrange or cancel free of charge up to 24 hours before your appointment — just contact us by phone or email. Changes or cancellations with less than 24 hours' notice, or a missed visit where no access was available, may incur a rebooking fee to cover the engineer's allocated time. If we are unable to complete the inspection through no fault of your own, you will not be charged. Full terms are in our terms and conditions.",
      },
      {
        question: "What happens if my tenant won't allow access for the inspection?",
        answer:
          "The legal responsibility for arranging the inspection stays with you as the landlord, so it is important to document every access attempt. Give your tenant as much notice as possible and confirm the appointment in writing. Your engineer can coordinate directly with the tenant or a keyholder — you do not need to be present yourself. If a tenant repeatedly refuses access, keep copies of all notices and correspondence as evidence that you took all reasonable steps, and we will rearrange the visit if access is not possible on the day.",
      },
    ],
  },
  {
    id: "eicr",
    label: "EICR",
    items: [
      {
        question: "What is an EICR?",
        answer:
          "An EICR (Electrical Installation Condition Report) is a formal document that records the condition of the fixed electrical installation in a property — wiring, consumer unit (fuse board), sockets, light fittings and earthing. A qualified electrician inspects and tests the installation against the current British Standard BS 7671 (the 18th Edition IET Wiring Regulations) and assigns an overall outcome of Satisfactory or Unsatisfactory.",
      },
      {
        question: "Is an EICR a legal requirement for landlords?",
        answer:
          "Yes. The Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020 require all private landlords in England to have a valid EICR carried out by a qualified person at least every five years, and to provide a copy to each existing tenant within 28 days of the inspection and to any new tenant before they move in. Local authorities can impose fines of up to £30,000 for non-compliance.",
      },
      {
        question: "How often does a landlord need an EICR?",
        answer:
          "At least every five years. However, if the previous EICR specified a shorter interval — for example, due to the age or condition of the wiring — you must follow that shorter interval. HMO licences may also impose their own EICR frequency requirements. Always check your licence conditions.",
      },
      {
        question: "What is the difference between a C1, C2 and C3 code?",
        answer:
          "Observations on an EICR are graded C1, C2, C3 or FI. A C1 (Danger present) means there is an immediate risk of injury — the engineer must make the installation safe before leaving. A C2 (Potentially dangerous) means there is a risk that could become dangerous — remedial work is required before the property can be let. A C3 (Improvement recommended) means the installation does not meet current standards but is not immediately dangerous — no remedial work is legally required, though it is advisable. FI (Further investigation) means something could not be fully tested and requires investigation.",
      },
      {
        question: "What happens if the EICR comes back as Unsatisfactory?",
        answer:
          "An Unsatisfactory outcome means one or more C1 or C2 observations were found. You must arrange remedial works within 28 days (or sooner if specified in the report) and obtain written confirmation from a qualified electrician that the work has been completed. A follow-up EICR or minor works certificate may be required depending on the extent of the work. Our engineers can quote for remedial works on the day of the inspection.",
      },
      {
        question: "How long does an EICR take?",
        answer:
          "For a typical 1–3 bedroom property with a modern consumer unit, an EICR usually takes 2–4 hours. Larger properties, older wiring, or properties with multiple consumer units will take longer. Properties with original pre-1960s wiring or extensive circuits may require 4–6 hours or more. Your engineer will let you know if they expect the inspection to take longer than the standard slot.",
      },
      {
        question: "Is an EICR the same as a PAT test?",
        answer:
          "No. An EICR covers the fixed electrical installation — the wiring, consumer unit, sockets, switches and light fittings that are permanently part of the building. PAT testing covers portable appliances — items that can be unplugged, such as kettles, washing machines, televisions and lamps. Both are recommended for furnished rental properties but they are separate inspections carried out by different engineers.",
      },
    ],
  },
  {
    id: "gas-safety",
    label: "Gas Safety",
    items: [
      {
        question: "What is a Gas Safety Certificate (CP12)?",
        answer:
          "A Gas Safety Certificate — formally known as a Landlord Gas Safety Record, and often called a CP12 after the original CORGI Proforma 12 document — is a record confirming that all gas appliances, fittings and flues in a rented property have been inspected by a Gas Safe Registered engineer and are safe to use. It must be issued annually by every private landlord in Great Britain who lets a property with gas appliances.",
      },
      {
        question: "Is a Gas Safety Certificate a legal requirement?",
        answer:
          "Yes. Under the Gas Safety (Installation and Use) Regulations 1998, all private landlords must have a Gas Safety check carried out by a Gas Safe Registered engineer every 12 months and provide a copy of the certificate to each tenant within 28 days of the check (or before they move in for new tenants). Failure to comply is a criminal offence and can result in prosecution, an unlimited fine, or imprisonment.",
      },
      {
        question: "Who can carry out a gas safety inspection?",
        answer:
          "Only a Gas Safe Registered engineer. It is illegal for anyone not on the Gas Safe Register to carry out gas work or to issue a Gas Safety Certificate in Great Britain. You can verify any engineer's Gas Safe registration at gassaferegister.co.uk by checking their licence card number. All our gas engineers are Gas Safe Registered and you can request their registration details before the visit.",
      },
      {
        question: "What appliances are checked in a Gas Safety inspection?",
        answer:
          "The engineer checks all gas appliances in the property that are provided by the landlord — typically the boiler, gas hob, gas cooker, gas fires and any gas tumble dryers. The inspection covers the appliance itself, the flue or chimney, ventilation and the supply pipework. Tenant-owned appliances should also be checked as the landlord remains responsible for the gas supply and pipework.",
      },
      {
        question: "What happens if a gas appliance is found to be unsafe?",
        answer:
          "If an appliance is immediately dangerous, the engineer will disconnect it from the gas supply before leaving and issue an unsafe situation notice. If the appliance is at risk of becoming dangerous, it will be issued with a warning notice. In either case, the appliance must not be used until the fault is repaired and the repair verified by a Gas Safe Registered engineer. The property cannot be let with a known unsafe gas appliance.",
      },
      {
        question: "Do I need to give my tenant a copy of the Gas Safety Certificate?",
        answer:
          "Yes. You must provide a copy of the current Gas Safety Certificate to all existing tenants within 28 days of the annual inspection and to new tenants before their tenancy begins. You must also retain records of the two most recent Gas Safety Certificates and make them available to the Local Authority on request. We email the certificate directly to you on the day of the inspection so you can forward it immediately.",
      },
    ],
  },
  {
    id: "epc",
    label: "EPC",
    items: [
      {
        question: "What is an EPC?",
        answer:
          "An EPC (Energy Performance Certificate) is a document that rates a property's energy efficiency on a scale from A (most efficient) to G (least efficient) using a Standard Assessment Procedure (SAP) score. It also provides an environmental impact rating and includes recommendations for improving the property's energy performance. EPCs are produced by accredited Domestic Energy Assessors (DEAs) using a government-approved methodology.",
      },
      {
        question: "Is an EPC required for a rental property?",
        answer:
          "Yes. Landlords must have a valid EPC before marketing a property to let and must provide a copy to prospective tenants free of charge. An EPC is valid for ten years. Crucially, since April 2020, privately rented properties in England and Wales must achieve a minimum energy efficiency rating of E or above under the Minimum Energy Efficiency Standards (MEES) Regulations. Properties rated F or G cannot legally be let.",
      },
      {
        question: "What is the MEES minimum EPC rating for rentals?",
        answer:
          "The current minimum is E. Landlords cannot let a property with an EPC rating of F or G to new tenants, and since April 2020 this applies to all existing tenancies too (not just new ones). The government has proposed raising the minimum to C for new tenancies from 2025, though this timeline has been subject to change — always check the current regulations at gov.uk.",
      },
      {
        question: "What happens if my EPC rating is below E?",
        answer:
          "You cannot legally let the property until you improve the energy efficiency to at least an E rating. You must make all cost-effective improvements up to a £3,500 cap (including VAT). If the cost of improvements exceeds £3,500 and the property still does not reach E, you may register a 'high cost' exemption on the PRS Exemptions Register. Enforcement is by local authorities and penalties can reach £5,000 per property.",
      },
      {
        question: "How long is an EPC valid?",
        answer:
          "An EPC is valid for ten years from the date of issue. You do not need a new EPC unless the existing one has expired or you have made significant changes to the property (such as insulation, new windows, or a new heating system) that would materially affect the energy rating. EPC certificates are automatically lodged on the national EPC register at epcregister.com.",
      },
      {
        question: "Do I need a new EPC after renovation or improvement works?",
        answer:
          "Not necessarily. An EPC is valid for ten years regardless of minor changes. However, if you have made significant energy efficiency improvements — such as cavity wall insulation, loft insulation, new double glazing, or a heat pump — getting a new EPC after the works is sensible, as the improved rating may unlock higher rents, increase the property's value and demonstrate MEES compliance. Our DEA assessors can advise on likely rating improvements before you commit to works.",
      },
    ],
  },
  {
    id: "fire-risk-assessment",
    label: "Fire Risk Assessment",
    items: [
      {
        question: "Who needs a Fire Risk Assessment?",
        answer:
          "A formal Fire Risk Assessment is a legal requirement for all HMOs (Houses in Multiple Occupation), blocks of flats, and any property where communal areas exist. For single-occupancy houses and flats without communal areas, a formal written FRA is not legally required under the Regulatory Reform (Fire Safety) Order 2005 — though basic fire safety precautions (smoke alarms, CO detectors) are still required. The Building Safety Act 2022 extended requirements to higher-risk residential buildings of 18m or above.",
      },
      {
        question: "How often should a Fire Risk Assessment be reviewed?",
        answer:
          "There is no fixed statutory interval, but the Regulatory Reform (Fire Safety) Order 2005 requires the assessment to be reviewed whenever there is reason to believe it is no longer valid — for example after a fire, after structural changes, or after a change of use. In practice, most fire safety guidance recommends reviewing the FRA annually for residential properties and HMOs, and this is typically required by HMO licensing conditions.",
      },
      {
        question: "What does a Fire Risk Assessment cover?",
        answer:
          "A comprehensive FRA covers: identification of fire hazards (ignition sources, fuel and oxygen); identification of people at risk; evaluation of fire risks; fire detection and warning systems (smoke alarms, heat detectors, alarm panels); means of escape (staircases, escape routes, signage); fire-fighting equipment (extinguishers, blankets); emergency lighting; fire doors and compartmentation; and management arrangements (maintenance records, emergency plan). The assessor will produce a written report with a prioritised action plan.",
      },
      {
        question: "What is the Regulatory Reform (Fire Safety) Order 2005?",
        answer:
          "The RRO 2005 is the primary fire safety legislation in England and Wales for non-domestic premises and certain residential buildings, including HMOs, blocks of flats and houses converted to flats. It places a legal duty on the 'responsible person' (typically the landlord or managing agent) to carry out a suitable and sufficient Fire Risk Assessment and implement appropriate fire safety measures. Failure to comply can result in prohibition notices, prosecution, unlimited fines and imprisonment.",
      },
      {
        question: "What happens if I do not have a Fire Risk Assessment for an HMO?",
        answer:
          "Failure to carry out a Fire Risk Assessment for an HMO is a criminal offence under the Regulatory Reform (Fire Safety) Order 2005. Enforcement officers from the local Fire and Rescue Service can issue enforcement notices requiring you to take specific action, prohibition notices that prevent the property from being used, and can prosecute you in a Magistrates' or Crown Court. HMO licences also typically require a current FRA as a licence condition, so failure to produce one can result in licence revocation.",
      },
    ],
  },
  {
    id: "pat-testing",
    label: "PAT Testing",
    items: [
      {
        question: "What is PAT testing?",
        answer:
          "PAT testing (Portable Appliance Testing) is the inspection and electrical testing of portable electrical appliances to check they are safe to use. It covers both a visual inspection (checking for damage, frayed leads, missing covers) and an electrical test using a PAT tester (checking earth continuity, insulation resistance and sometimes leakage current). Each appliance receives a pass or fail result and is labelled accordingly.",
      },
      {
        question: "Is PAT testing a legal requirement for landlords?",
        answer:
          "There is no specific law that requires landlords to carry out PAT testing. However, landlords have a general duty of care to ensure that all electrical appliances supplied with a furnished property are safe under the Electrical Equipment (Safety) Regulations 2016 and the Consumer Protection Act 1987. PAT testing is the most recognised way to demonstrate compliance. Many HMO licences and letting agent management agreements explicitly require annual or periodic PAT testing.",
      },
      {
        question: "How often should PAT testing be done?",
        answer:
          "There is no legally mandated interval. The HSE recommends a risk-based approach: furnished rental properties are considered a higher-risk environment and annual testing is widely recommended and required by many HMO licence conditions. Second-hand or older appliances, or appliances in high-use environments (HMOs with multiple tenants), should be tested more frequently.",
      },
      {
        question: "Which appliances need PAT testing?",
        answer:
          "Any portable electrical appliance that is provided by the landlord and can be plugged into the mains. This typically includes: washing machines and tumble dryers, dishwashers, fridges and freezers, cookers and microwaves, kettles and toasters, televisions and lamps, vacuum cleaners and irons, and power tools. Fixed appliances (hardwired equipment) are covered by the EICR, not PAT testing.",
      },
    ],
  },
  {
    id: "certificates",
    label: "Certificates & pricing",
    items: [
      {
        question: "Are your prices fixed, or can they change on the day?",
        answer:
          "Prices are fixed. The price displayed before you pay is the price on your invoice. The only additional charges that can apply are for parking (£10 where paid parking is required) and the London Congestion Zone charge (£20 for properties inside the Congestion Zone). Both are shown during the booking process. No other charges are added after the visit.",
      },
      {
        question: "Are there any additional charges I should know about?",
        answer:
          "Two potential additional charges: a parking charge of £10 if the engineer needs to pay for parking at your property, and a Congestion Zone surcharge of £20 for properties inside the London Congestion Zone. If your property requires remedial electrical work following an EICR, the engineer will provide a separate quote on the day — there is no obligation to accept.",
      },
      {
        question: "How is my certificate delivered?",
        answer:
          "Every certificate is emailed to you as a PDF on within 24 hours of the inspection — not posted, not delayed by admin, not sent the following week. You receive it directly to the email address you provided during booking. EPC certificates are additionally lodged on the national EPC register at epcregister.com automatically. Gas Safety Certificates and EICRs are provided in a format accepted by all local authorities, letting agents and mortgage lenders.",
      },
      {
        question: "How do I share the certificate with my tenant?",
        answer:
          "Forward the PDF directly from your email. For Gas Safety Certificates, you are required by law to provide a copy to each tenant within 28 days of the annual inspection (and before they move in for new tenancies). For EICRs, you must provide a copy to existing tenants within 28 days of the inspection and to new tenants before their tenancy begins. EPC certificates are publicly available on the national register, but it is good practice to email a copy to your tenant as well.",
      },
      {
        question: "Can I get a receipt for my records?",
        answer:
          "Yes. A VAT invoice is emailed to you with your booking confirmation. If you need a separate receipt or a copy of your invoice, contact us at any time and we will resend it. All booking records are retained in your account if you register, or available on request if you booked as a guest.",
      },
      {
        question: "How much does a landlord certificate cost?",
        answer:
          "Prices are fixed and depend on the service and property size. An EICR starts from £67.99, a Gas Safety Certificate (CP12) from £50, an EPC from £89.99, a Fire Risk Assessment from £74 and PAT Testing from £59.99. Booking two or more certificates in a single visit saves money — the Essential Bundle (EICR + Gas Safety) starts from £130. Every price is shown in full before you pay, with no charges added afterwards. See our pricing page for the complete list.",
      },
      {
        question: "If remedial work is found, am I obliged to use you for it?",
        answer:
          "No. If an inspection identifies remedial work — for example C1 or C2 observations on an EICR — you are under no obligation to have us carry out the repairs. Our engineer will provide a clear, itemised quote on the day, but you are free to obtain other quotes or use your own contractor. You are, however, legally required to complete the necessary remedial work (typically within 28 days for an EICR) and obtain written confirmation that the installation has been made safe before the property can be let.",
      },
    ],
  },
];

// ── Consolidated FAQPage schema (all categories) ──────────────────────────────

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: categories.flatMap(({ items }) =>
    items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    }))
  ),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.mylandlordcertificate.co.uk/faq" },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function FAQPage() {
  const totalQuestions = categories.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section
        aria-labelledby="faq-heading"
        className="bg-compliance-blue text-white"
      >
        <Container className="py-16 md:py-20 text-center">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            Frequently Asked Questions
          </p>
          <Heading level={1} id="faq-heading" inverted className="mb-4 max-w-2xl mx-auto">
            Landlord certificates — your questions answered
          </Heading>
          <p className="text-blue-100 text-lg leading-relaxed max-w-xl mx-auto">
            {totalQuestions} questions covering EICR, Gas Safety, EPC, Fire Risk
            Assessment, PAT Testing, booking and pricing. If you can&apos;t find what you
            need, call{" "}
            <a
              href={TEL}
              className="underline underline-offset-2 hover:text-white"
            >
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        </Container>
      </section>

      {/* ── Category nav ── */}
      <nav
        aria-label="FAQ categories"
        className="bg-white border-b border-border sticky top-16 z-40"
      >
        <Container>
          <ul className="flex gap-1 overflow-x-auto py-3 scrollbar-none" role="list">
            {categories.map(({ id, label }) => (
              <li key={id} className="shrink-0">
                <a
                  href={`#${id}`}
                  className="inline-block px-3 py-1.5 rounded-lg text-sm font-medium text-brand-charcoal hover:text-compliance-blue hover:bg-compliance-blue/5 transition-colors whitespace-nowrap"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {/* ── FAQ sections ── */}
      <div className="py-12 bg-warm-white">
        <Container className="max-w-3xl">
          <div className="space-y-14">
            {categories.map(({ id, label, items }) => (
              <section key={id} id={id} aria-labelledby={`${id}-heading`}>
                <Heading
                  level={2}
                  id={`${id}-heading`}
                  className="mb-6 scroll-mt-32"
                >
                  {label}
                </Heading>
                <FAQAccordion items={items} multiple includeSchema={false} />
              </section>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Services overview ── */}
      <section aria-labelledby="faq-services-heading" className="py-14 bg-warm-white">
        <Container>
          <Heading level={2} id="faq-services-heading" className="mb-3 text-center">
            Book your certificate
          </Heading>
          <p className="text-brand-grey text-center mb-8 max-w-xl mx-auto">
            Fixed prices on all landlord compliance certificates — see details and
            book online for any service below.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "EICR Certificate", href: "/eicr", price: "from £67.99" },
              { label: "Gas Safety Certificate", href: "/gas-safety-certificate", price: "from £50" },
              { label: "EPC Certificate", href: "/epc", price: "from £89.99" },
              { label: "Fire Risk Assessment", href: "/fire-risk-assessment", price: "from £74" },
              { label: "PAT Testing", href: "/pat-testing", price: "from £59.99" },
              { label: "Bundle & Save", href: "/landlord-certificates-bundle", price: "from £130" },
            ].map(({ label, href, price }) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-border bg-white p-4 hover:border-compliance-blue transition-colors block"
              >
                <p className="font-semibold text-brand-charcoal text-sm mb-1">{label}</p>
                <p className="text-compliance-blue text-sm font-medium">{price}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Still have questions ── */}
      <section aria-labelledby="contact-heading" className="py-12 bg-white">
        <Container className="max-w-2xl text-center">
          <Heading level={2} id="contact-heading" className="mb-3">
            Still have a question?
          </Heading>
          <p className="text-brand-grey leading-relaxed mb-6">
            Our team is available by phone Monday to Saturday. We aim to answer all
            calls within three rings.
          </p>
          <a
            href={TEL}
            className="inline-flex items-center gap-2 text-compliance-blue font-semibold text-lg hover:underline"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M2 3a1 1 0 011-1h2.5a1 1 0 011 1v1.586a1 1 0 01-.293.707l-1 1a8.001 8.001 0 004.5 4.5l1-1a1 1 0 01.707-.293H14a1 1 0 011 1V13a1 1 0 01-1 1h-1C6.268 14 2 9.732 2 4.5V3z"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {PHONE_DISPLAY}
          </a>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section
        aria-labelledby="faq-cta-heading"
        className="py-16 bg-compliance-blue text-white text-center"
      >
        <Container className="max-w-xl">
          <Heading level={2} id="faq-cta-heading" inverted className="mb-3">
            Ready to book?
          </Heading>
          <p className="text-blue-200 mb-8 leading-relaxed">
            Fixed prices. Next-day appointments across London. Certificate emailed
            within 24 hours.
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

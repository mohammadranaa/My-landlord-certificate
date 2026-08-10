import type { Metadata } from "next";
import { LazyFAQAccordion as FAQAccordion, LazyStickyMobileCTA as StickyMobileCTA } from "@/components/lazy";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { TrustBadges } from "@/components/ui/trust-badges";
import { ADDITIONAL_CHARGES, ASBESTOS_SURVEY_TABLE } from "@/lib/pricing";
import { TEL, PHONE_DISPLAY } from "@/lib/constants";
import { HeroRating } from "@/components/ui/hero-rating";
import { ReviewsBlock } from "@/components/marketing/reviews-block";

export const metadata: Metadata = {
  title: "Asbestos Survey London from £239.99 | My Landlord Certificate",
  description:
    "Asbestos management survey from £239.99 including 1 sample. Required before renovation or demolition in pre-2000 properties. UKAS-accredited laboratory analysis. London-wide service.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/asbestos-survey",
  },
};

const entryPrice = ASBESTOS_SURVEY_TABLE[0].price;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Asbestos Management Survey",
  url: "https://www.mylandlordcertificate.co.uk/asbestos-survey",
  description:
    "Asbestos management survey for residential and commercial properties built before 2000. UKAS-accredited laboratory analysis and written report.",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://www.mylandlordcertificate.co.uk",
  },
  areaServed: ["London", "the M25 area"],
  offers: {
    "@type": "Offer",
    price: `${entryPrice}`,
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://www.mylandlordcertificate.co.uk/asbestos-survey",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Asbestos Survey", item: "https://www.mylandlordcertificate.co.uk/asbestos-survey" },
  ],
};

const faqs = [
  {
    question: "Does my property need an asbestos survey?",
    answer:
      "If your property was built before 2000, it may contain asbestos-containing materials (ACMs). Common locations include artex ceilings, floor tiles, pipe lagging, roof sheeting, boiler cupboard insulation, and cement panels. An asbestos survey is strongly recommended before any renovation, refurbishment, or maintenance work that could disturb these materials — and is legally required before demolition or major structural works.",
  },
  {
    question: "What types of asbestos survey are there?",
    answer:
      "There are two main types. A Management Survey (Type 2) is used to manage asbestos in a building during normal occupation — it locates ACMs in accessible areas and assesses their condition. A Refurbishment and Demolition Survey (Type 3) is more intrusive and legally required before any major renovation or demolition — it may involve opening up cavities, removing finishes, and accessing all areas of the building. We carry out management surveys; call us for Type 3 surveys.",
  },
  {
    question: "What is the legal duty to manage asbestos?",
    answer:
      "The Control of Asbestos Regulations 2012 (CAR 2012) require the duty holder of any non-domestic premises to manage any asbestos in the building. This means knowing where asbestos is, assessing its condition, and either managing it in place or arranging for its safe removal. For residential landlords, there is no explicit duty-to-manage obligation — but a management survey is strongly recommended before any renovation work.",
  },
  {
    question: "How long does an asbestos survey take?",
    answer:
      "The on-site visit for a typical flat or house takes 1–2 hours. Larger or more complex properties may take longer. Samples are sent to a UKAS-accredited laboratory after the visit, and the written report is issued within 5–7 working days. Faster turnaround (2–3 working days) is available on request.",
  },
  {
    question: "What happens if asbestos is found?",
    answer:
      "If asbestos is confirmed in a sample, the report categorises it by type (chrysotile, amosite, crocidolite), location, condition, and risk. It then recommends a management action — monitor in place, repair, encapsulate, or remove. Low-risk, undisturbed asbestos can often be safely managed in place. High-risk or damaged asbestos must be removed by a licensed contractor. We can recommend accredited removal specialists if needed.",
  },
  {
    question: "Is asbestos always dangerous?",
    answer:
      "Asbestos fibres are only dangerous when they become airborne and are inhaled. Undisturbed, well-bonded asbestos (such as floor tiles or cement sheets) poses little immediate risk. Friable or damaged asbestos — such as pipe lagging, sprayed coatings, or loose insulation — releases fibres more easily and is more hazardous. The survey will assess the risk level of each material found.",
  },
  {
    question: "How is the price calculated?",
    answer:
      "Pricing is per sample submitted for laboratory analysis. Most properties require 1–3 samples; larger or more complex properties with more suspect materials may need more. Our surveyor will advise on the appropriate number of samples to take during the visit. The price includes the on-site survey, sample collection, laboratory analysis, and written report.",
  },
  {
    question: "Can I do the survey myself?",
    answer:
      "You should not attempt to collect asbestos samples yourself — disturbing suspect materials without proper protective equipment and training can release dangerous fibres. Asbestos surveys must be carried out by competent persons who have received appropriate training. Our surveyors have RSPH (Royal Society for Public Health) or equivalent asbestos surveying qualifications.",
  },
  {
    question: "What is an asbestos reinspection survey?",
    answer:
      "A reinspection survey is a periodic review of asbestos-containing materials (ACMs) that were identified in a previous management survey and left in place to be managed. Over time, ACMs can deteriorate due to ageing, accidental damage, or nearby maintenance works. A reinspection re-examines all previously recorded materials, updates the condition rating, and revises the management recommendation where necessary. For non-domestic duty holders under CAR 2012, reinspection is a statutory obligation — the asbestos management plan must be kept current. For residential landlords, annual reinspection is strongly recommended for any in-situ ACMs rated condition 2 or above.",
  },
  {
    question: "Does asbestos always have to be removed?",
    answer:
      "No. Undisturbed, well-bonded asbestos in good condition can often be safely managed in place rather than removed. Removal itself disturbs the material and can create a greater short-term risk than leaving it alone. Our survey report categorises each ACM and recommends the most appropriate action: monitor in place, repair, encapsulate (seal the surface), or remove. Only materials rated as high-risk — friable, damaged, or in locations where disturbance is unavoidable — typically require licensed removal.",
  },
  {
    question: "How often should the asbestos management plan be reviewed?",
    answer:
      "CAR 2012 requires that the asbestos management plan for a non-domestic building is kept up to date and reviewed regularly — typically annually, or after any building works, change of use, or incident involving ACMs. For residential landlords, there is no mandatory review interval, but best practice is to commission a reinspection survey every 12 months for any in-situ ACMs with a condition rating of 2 or above, and every 1–3 years for stable, low-risk materials.",
  },
  {
    question: "What qualifications do your asbestos surveyors hold?",
    answer:
      "Our surveyors hold the RSPH Level 3 Award in Asbestos Surveying or equivalent P402 qualification (formerly awarded by BOHS — the British Occupational Hygiene Society). All samples are submitted to a UKAS-accredited laboratory for analysis under ISO 17025, ensuring results are legally defensible and accepted by regulators, insurers, mortgage lenders, and local authorities.",
  },
  {
    question: "Do I need to tell my tenants if asbestos is found?",
    answer:
      "There is no statutory duty for residential landlords to disclose the presence of asbestos to tenants. However, if ACMs are present in a location that tenants might disturb — such as an artex ceiling they may drill into — it is strongly advisable to inform tenants in writing and advise them not to disturb the material. For HMOs and licensed properties, some London local authorities require asbestos management information as part of the licence conditions. We recommend keeping a copy of the asbestos register accessible to future surveyors, contractors, and emergency responders.",
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

const steps = [
  {
    step: "1",
    title: "Book online or call us",
    description:
      "Tell us the property address, approximate age, and whether you have any specific concerns about suspect materials. We'll confirm the survey date and likely number of samples.",
  },
  {
    step: "2",
    title: "Surveyor visits and takes samples",
    description:
      "Our trained surveyor visits the property, carries out a full visual inspection, and collects samples from any suspect materials using appropriate protective equipment. The process causes minimal disturbance.",
  },
  {
    step: "3",
    title: "Laboratory analysis and written report",
    description:
      "Samples are dispatched to a UKAS-accredited laboratory. Your written report — including photographs, condition assessment, and management recommendations — is emailed within 5–7 working days.",
  },
];

export default function AsbestosSurveyPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
      <section className="bg-compliance-blue text-white py-10 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-blue-200 flex-wrap">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium">Asbestos Survey</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
            Asbestos Survey London from £{entryPrice}
          </h1>
          <HeroRating theme="dark" className="mb-5" />
          <PriceDisplay price={entryPrice} from size="lg" className="mb-4 [&>span:last-child]:text-white" />
          <p className="text-blue-100 mb-4">
            UKAS Accredited · London &amp; M25 · Report in 5–7 Days
          </p>
          <TrustBadges serviceKey="asbestos-survey" variant="dark" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=asbestos-survey"
              className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Book Now — from £{entryPrice}
            </Link>
            <a
              href="#pricing"
              className="inline-flex items-center border border-white/30 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
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
              <p className="text-xs text-white/50 mb-0.5">Report</p>
              <p className="font-bold text-white">5–7 working days</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Laboratory</p>
              <p className="font-bold text-white">UKAS accredited</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Regulation</p>
              <p className="font-bold text-white">CAR 2012</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content well ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 md:pb-10">

        {/* What is it */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Do you need an asbestos survey?
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Asbestos was used extensively in UK building materials until it was banned in
            1999. Any property built or refurbished before 2000 may contain
            asbestos-containing materials (ACMs) — and in London, where much of the housing
            stock dates from the Victorian era through to the 1980s, this is a significant
            proportion of the rental market.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Common locations for ACMs include: artex textured coatings on ceilings and
            walls, floor tiles and the adhesive beneath them, pipe lagging on older central
            heating systems, asbestos insulating board (AIB) panels in airing cupboards and
            around heating equipment, roof sheets and soffits on older extensions, and
            loose-fill insulation in loft spaces.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Undisturbed, well-bonded asbestos poses little immediate risk — but any
            renovation, maintenance work, or refurbishment that could disturb ACMs requires
            you to know what you&apos;re dealing with first. Our management survey identifies
            and characterises all suspect materials, so you can plan works safely.
          </p>

          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Legal requirement:</span>{" "}
              The Control of Asbestos Regulations 2012 (CAR 2012) require the duty holder
              of any non-domestic premises to actively manage any asbestos in the building.
              For residential landlords, a management survey is strongly recommended before
              any renovation or maintenance work in properties built before 2000. Regulation
              4 of CAR 2012 makes failure to manage asbestos a criminal offence.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">Pricing</h2>
          <p className="text-brand-grey mb-6">
            Priced by number of samples submitted for UKAS-accredited laboratory analysis. Includes on-site survey and written report.
          </p>
          <PriceTable
            title="Asbestos Management Survey"
            rows={ASBESTOS_SURVEY_TABLE}
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
            Refurbishment and demolition surveys (Type 3) and large commercial properties — call us on{" "}
            <a href={`tel:${TEL}`} className="text-compliance-blue hover:underline">
              {PHONE_DISPLAY}
            </a>{" "}
            for a tailored quote.
          </p>
        </section>

        {/* What's included */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            What&apos;s included from £{entryPrice}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Full visual inspection of accessible areas",
              "Sample collection with appropriate PPE",
              "UKAS-accredited laboratory analysis",
              "Asbestos type and fibre identification",
              "Condition and risk assessment per ACM",
              "Management action recommendation",
              "Written report with photographs",
              "Asbestos register for planning or licensing use",
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

        {/* How it works */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">How it works</h2>
          <div className="flex flex-col gap-6">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-compliance-blue text-white flex items-center justify-center shrink-0 font-bold text-sm">
                  {s.step}
                </div>
                <div>
                  <p className="font-semibold text-brand-charcoal mb-1">{s.title}</p>
                  <p className="text-sm text-brand-grey leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Types of asbestos */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            The three types of asbestos in UK buildings
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Not all asbestos is the same. UK buildings built before 2000 may contain one or
            more of three regulated asbestos types, each with different fibre structures,
            risk levels, and typical locations. Your survey report will identify exactly which
            type was found.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              {
                colour: "White",
                name: "Chrysotile",
                banned: "1999",
                fibre: "Curly, serpentine fibres",
                risk: "Lower relative risk",
                locations: "Roof sheets, floor tiles, cement products, pipe insulation",
                borderClass: "border-gray-300",
                badgeClass: "bg-gray-100 text-gray-700",
              },
              {
                colour: "Brown",
                name: "Amosite",
                banned: "1986",
                fibre: "Straight, brittle fibres",
                risk: "High risk",
                locations: "Asbestos insulating board (AIB), ceiling tiles, pipe lagging",
                borderClass: "border-amber-300",
                badgeClass: "bg-amber-100 text-amber-800",
              },
              {
                colour: "Blue",
                name: "Crocidolite",
                banned: "1985",
                fibre: "Fine, needle-like fibres",
                risk: "Highest risk",
                locations: "Pipe lagging, spray coatings, boiler insulation",
                borderClass: "border-blue-300",
                badgeClass: "bg-blue-100 text-blue-800",
              },
            ].map((a) => (
              <div key={a.name} className={`rounded-xl border ${a.borderClass} bg-warm-white p-4`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${a.badgeClass}`}>
                    {a.colour} Asbestos
                  </span>
                </div>
                <p className="font-bold text-brand-charcoal mb-1">{a.name}</p>
                <p className="text-xs text-brand-grey mb-2">Banned: {a.banned}</p>
                <p className="text-xs text-brand-charcoal/70 mb-1">{a.fibre}</p>
                <p className="text-xs font-medium text-brand-charcoal mb-2">{a.risk}</p>
                <p className="text-xs text-brand-grey leading-relaxed">{a.locations}</p>
              </div>
            ))}
          </div>
          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Important:</span>{" "}
              You cannot identify asbestos type by looking at it — brown, blue, and white
              asbestos are not reliably distinguished by colour in building materials. Only
              UKAS-accredited laboratory analysis of a collected sample confirms the type.
              Never disturb suspect materials before surveying.
            </p>
          </div>
        </section>

        {/* Where asbestos hides */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Where asbestos hides in London properties
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            London&apos;s housing stock is disproportionately old — around 38% of homes were
            built before 1944, and a further 30% between 1945 and 1980. This means the vast
            majority of the city&apos;s private rented sector falls within the pre-2000
            risk window. These are the locations our surveyors check first:
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              {
                location: "Artex and textured coatings",
                detail: "Applied to ceilings and walls until the 1990s. Chrysotile was commonly added to improve adhesion. Sanding, scraping, or drilling through artex releases fibres.",
              },
              {
                location: "Floor tiles and adhesive",
                detail: "Vinyl floor tiles from the 1960s–80s often contain chrysotile. The black bitumen adhesive beneath them frequently contains amosite. Both must be tested before removal.",
              },
              {
                location: "Pipe lagging",
                detail: "Older central heating systems used amosite or crocidolite insulation around pipes. Damaged lagging is among the highest-risk ACMs in residential properties.",
              },
              {
                location: "Asbestos insulating board (AIB)",
                detail: "Used as panels in airing cupboards, around boilers, and as fire protection around structural steelwork. Typically amosite — high risk if disturbed.",
              },
              {
                location: "Roof sheets and soffits",
                detail: "Older extensions and garages often used corrugated asbestos cement sheets. Chrysotile content is lower risk when intact, but degrades with weathering.",
              },
              {
                location: "Loose-fill loft insulation",
                detail: "A small number of 1960s–70s properties had loose amosite or crocidolite fibre blown into loft spaces. Rare but extremely hazardous — do not enter the loft if suspected.",
              },
              {
                location: "Behind electrical panels",
                detail: "Asbestos millboard was used as heat insulation behind fuse boxes and electrical panels in older properties. Electrical upgrades can disturb this without warning.",
              },
            ].map((item) => (
              <li key={item.location} className="flex items-start gap-3 rounded-xl border border-border bg-warm-white p-4">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-compliance-blue/10 text-compliance-blue flex items-center justify-center shrink-0 text-xs font-bold">
                  ✓
                </span>
                <div>
                  <p className="font-semibold text-brand-charcoal text-sm mb-1">{item.location}</p>
                  <p className="text-xs text-brand-grey leading-relaxed">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Survey types comparison */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Which type of asbestos survey do you need?
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            CAR 2012 defines two main survey types with different legal triggers and scope.
            Commissioning the wrong type is not just an administrative error — it can lead to
            prosecution and invalidate your insurance.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                type: "Management Survey",
                subtitle: "Type 2 — for occupied buildings",
                purpose: "To locate and assess the condition of ACMs likely to be disturbed during normal occupation and low-risk maintenance.",
                when: "Recommended before any planned maintenance or renovation in a pre-2000 building. Required for non-domestic duty holders under CAR 2012 Regulation 4.",
                involves: "Full visual inspection of accessible areas. Minor disturbance of finishes where safe. Sample collection from suspect materials.",
                limitations: "Does not access concealed or hidden areas. Cannot be used to clear a building before major refurbishment or demolition.",
                recommended: true,
              },
              {
                type: "Refurbishment & Demolition Survey",
                subtitle: "Type 3 — before structural works",
                purpose: "To locate ALL ACMs — including those in concealed, hidden, or inaccessible areas — before a building or part of it is refurbished or demolished.",
                when: "Legally required under CAR 2012 before major refurbishment or demolition. Must be completed before principal contractor is appointed.",
                involves: "Fully intrusive inspection. Opening up cavities, removing finishes, accessing roof voids and structural elements. Higher PPE and containment requirements.",
                limitations: "The building or affected area must be unoccupied during the survey. Causes significant disturbance.",
                recommended: false,
              },
            ].map((s) => (
              <div
                key={s.type}
                className={`rounded-xl border p-5 ${s.recommended ? "border-compliance-blue bg-compliance-blue/5" : "border-border bg-warm-white"}`}
              >
                {s.recommended && (
                  <span className="inline-block text-xs font-semibold text-white bg-compliance-blue px-2 py-0.5 rounded-full mb-3">
                    We carry out this survey
                  </span>
                )}
                <p className="font-bold text-brand-charcoal mb-0.5">{s.type}</p>
                <p className="text-xs text-brand-grey mb-4">{s.subtitle}</p>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="font-semibold text-brand-charcoal text-xs uppercase tracking-wide mb-0.5">Purpose</dt>
                    <dd className="text-brand-charcoal/80 text-xs leading-relaxed">{s.purpose}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-brand-charcoal text-xs uppercase tracking-wide mb-0.5">When needed</dt>
                    <dd className="text-brand-charcoal/80 text-xs leading-relaxed">{s.when}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-brand-charcoal text-xs uppercase tracking-wide mb-0.5">What it involves</dt>
                    <dd className="text-brand-charcoal/80 text-xs leading-relaxed">{s.involves}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-brand-charcoal text-xs uppercase tracking-wide mb-0.5">Limitations</dt>
                    <dd className="text-brand-charcoal/80 text-xs leading-relaxed">{s.limitations}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Critical rule:</span>{" "}
              Starting refurbishment or demolition on a pre-2000 building without a
              Refurbishment &amp; Demolition Survey in place is a criminal offence under CAR
              2012 Regulation 5. The Health &amp; Safety Executive actively prosecutes
              principal contractors and building owners. A management survey does not satisfy
              this requirement.
            </p>
          </div>
        </section>

        {/* Reading the report */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            How to read your asbestos survey report
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Your written report includes an Asbestos Register — a structured table of every
            suspect material identified during the survey. Here is what each column means:
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand-charcoal text-white">
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-xs">Column</th>
                  <th scope="col" className="text-left px-4 py-3 font-semibold text-xs">What it means</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  {
                    col: "Reference number",
                    meaning: "A unique ID (e.g. S01, S02) linking the table row to the corresponding photograph and location diagram in the report.",
                  },
                  {
                    col: "Location",
                    meaning: "The room, floor, and specific position where the material was found or sampled (e.g. 'Ground floor kitchen — ceiling above boiler').",
                  },
                  {
                    col: "Material description",
                    meaning: "What the material is — e.g. 'Textured coating (artex)', 'Vinyl floor tile', 'Pipe lagging', 'Insulating board panel'.",
                  },
                  {
                    col: "Asbestos type",
                    meaning: "The fibre type confirmed by laboratory analysis: Chrysotile (white), Amosite (brown), Crocidolite (blue), or 'No asbestos detected (NAD)'.",
                  },
                  {
                    col: "Condition rating (1–4)",
                    meaning: "1 = Good / undamaged. 2 = Low damage, small area affected. 3 = Medium damage, significant deterioration. 4 = High damage, material friable or releasing fibres.",
                  },
                  {
                    col: "Risk score (1–4)",
                    meaning: "Combines condition, accessibility, and likelihood of disturbance. 1 = Very low risk. 2 = Low risk. 3 = Medium risk. 4 = High risk — immediate action recommended.",
                  },
                  {
                    col: "Recommended action",
                    meaning: "One of: Monitor in place (re-inspect in 12 months) · Repair / re-encapsulate · Encapsulate (seal surface) · Remove by licensed contractor.",
                  },
                ].map((row, i) => (
                  <tr key={row.col} className={i % 2 === 0 ? "bg-white" : "bg-warm-white"}>
                    <td className="px-4 py-3 font-semibold text-brand-charcoal align-top whitespace-nowrap">{row.col}</td>
                    <td className="px-4 py-3 text-brand-charcoal/80 leading-relaxed">{row.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-brand-grey mt-4">
            Any material with a risk score of 3 or 4 requires prompt action before further
            works. Our surveyors are available to discuss report findings and recommend
            accredited removal contractors where removal is required.
          </p>
        </section>

        {/* Cross-sell */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Related services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: "/eicr", label: "Domestic EICR", desc: "Required before or after renovation work." },
              { href: "/fire-risk-assessment", label: "Fire Risk Assessment", desc: "Often required alongside asbestos surveys for HMOs." },
              { href: "/fire-safety-certificate", label: "Fire Safety Certificate", desc: "Annual smoke alarm testing for rental properties." },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-warm-white border border-border rounded-xl p-4 hover:border-compliance-blue transition-colors"
              >
                <p className="font-semibold text-brand-charcoal group-hover:text-compliance-blue transition-colors text-sm mb-1">
                  {s.label}
                </p>
                <p className="text-xs text-brand-grey">{s.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Types of asbestos survey — expanded */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Types of asbestos survey
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            CAR 2012 and the HSE guidance document HSG264 define three distinct survey types, each with a different purpose, scope, and legal trigger. Commissioning the right survey from the outset is essential — a management survey cannot substitute for a refurbishment and demolition survey, and using the wrong type can expose landlords, duty holders, and contractors to serious legal liability.
          </p>
          <div className="space-y-5 mb-6">
            <div className="rounded-xl border border-compliance-blue/30 bg-compliance-blue/5 p-5">
              <span className="inline-block text-xs font-semibold text-white bg-compliance-blue px-2 py-0.5 rounded-full mb-3">
                We carry out this survey
              </span>
              <h3 className="font-bold text-brand-charcoal mb-1">Management survey (formerly Type 2)</h3>
              <p className="text-xs text-brand-grey mb-3">For occupied buildings — the standard survey for most residential landlords</p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                A management survey is the standard inspection for properties that are occupied or in normal use. Its purpose is to locate all ACMs in accessible areas, assess their condition, and determine the risk they pose to occupants and maintenance workers during normal building use. The surveyor carries out a full visual inspection, makes minor surface intrusions where safe to do so, and collects samples from any suspect materials. Properties are returned to normal use on the day of the survey. For residential landlords, a management survey is the appropriate first step before any planned maintenance, refurbishment, or if you have recently acquired a pre-2000 property and want to understand its asbestos status.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-warm-white p-5">
              <h3 className="font-bold text-brand-charcoal mb-1">Refurbishment and demolition survey (formerly Type 3)</h3>
              <p className="text-xs text-brand-grey mb-3">Required by law before major works — fully intrusive</p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                A refurbishment and demolition (R&amp;D) survey is legally required under CAR 2012 Regulation 5 before any major refurbishment, structural alteration, or demolition of a pre-2000 building or part thereof. Unlike a management survey, an R&amp;D survey is fully intrusive — the affected area must be unoccupied, and the surveyor will open up cavities, remove finishes, access roof voids, and inspect all structural elements to locate every ACM regardless of accessibility. The survey must be completed and its findings acted upon before a principal contractor is appointed. Failure to commission an R&amp;D survey before major works begin is a criminal offence under CAR 2012. We do not carry out R&amp;D surveys directly but can refer you to specialist partners — call us for a referral.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-warm-white p-5">
              <h3 className="font-bold text-brand-charcoal mb-1">Reinspection survey (periodic review)</h3>
              <p className="text-xs text-brand-grey mb-3">For properties where ACMs have already been identified and left in place</p>
              <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                A reinspection survey is carried out on properties where a previous management survey identified asbestos-containing materials assessed as safe to leave in place and manage. Over time, ACMs can deteriorate — through ageing, accidental damage during minor maintenance, water ingress, or vibration from nearby works. A reinspection re-examines all previously recorded ACMs, updates the condition rating, and revises the management action recommendation where necessary. For non-domestic duty holders under CAR 2012, reinspection is a statutory obligation: the asbestos management plan must be reviewed and kept current. For residential landlords, reinspection is not legally required, but is strongly recommended every 12 months for any in-situ ACMs rated condition 2 or above, and every 1–3 years for stable, low-risk materials.
              </p>
            </div>
          </div>
          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Key rule:</span>{" "}
              A management survey is the appropriate starting point for most landlords. If you are planning significant building works — removing walls, replacing a kitchen or bathroom, converting a loft, or any project involving cavity access — you will need an R&amp;D survey instead. Call us on{" "}
              <a href={`tel:${TEL}`} className="text-compliance-blue hover:underline font-medium">{PHONE_DISPLAY}</a>{" "}
              if you are unsure which survey applies to your situation.
            </p>
          </div>
        </section>

        {/* Where asbestos is commonly found — London specific, expanded */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Where asbestos is commonly found in London properties
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            London&apos;s private rented sector is one of the oldest in Europe. Large swathes of Victorian and Edwardian terraces across Hackney, Lewisham, Newham, and Southwark were built between 1880 and 1914, while the interwar and post-war expansion into Outer London boroughs such as Barnet, Bromley, and Croydon added millions of properties built through the 1940s, 1950s, and 1960s — the decades when asbestos use in UK construction peaked. Asbestos was added to building materials for its fire resistance, insulating properties, and low cost, which means it appears in a wider range of locations than most landlords expect.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            If your rental property was built before 1985 — when crocidolite (blue asbestos) and amosite (brown asbestos) were banned — the risk of encountering high-hazard materials is significantly elevated. Properties built between 1985 and 1999 may still contain chrysotile (white asbestos), which was the last regulated type to be banned. These are the eight locations our surveyors investigate most frequently in London properties:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                location: "Textured coatings (Artex ceilings and walls)",
                detail: "Artex and similar textured decorative coatings were applied to ceilings and walls across the UK from the 1950s until the late 1990s. Chrysotile fibres were routinely added to the mix to improve adhesion and reduce cracking. Sanding, drilling, or scraping an artex ceiling without prior testing can release respirable fibres. This is one of the most common ACMs found in London rental flats and terraced houses.",
              },
              {
                location: "Floor tiles and adhesive beneath them",
                detail: "Vinyl floor tiles manufactured between the 1950s and 1980s frequently contain chrysotile. The black bitumen-based adhesive used to fix them to the subfloor often contains amosite. Both materials must be tested before any floor removal or renovation. The tiles themselves present lower risk when intact and undamaged, but the adhesive beneath them is typically friable.",
              },
              {
                location: "Pipe lagging and boiler insulation",
                detail: "Older central heating systems — particularly gravity-fed systems with large pipes in airing cupboards — used amosite or crocidolite insulation wrapped around hot water pipes. Damaged or fraying lagging around boilers, cylinders, and radiator pipes is among the highest-risk ACMs found in residential properties. Any work involving pipe removal, boiler replacement, or heating upgrades in a pre-1986 property should be preceded by testing.",
              },
              {
                location: "Roof soffits, fascias, and flat roof sections",
                detail: "Asbestos cement was widely used for soffits, fascias, rainwater guttering, and flat roof insulation boards on extensions added before 2000. The material looks similar to modern cement board but degrades significantly with weathering, releasing fibres. Any external maintenance on older extensions or outbuildings should be assessed before work begins.",
              },
              {
                location: "Garage and outbuilding roofing",
                detail: "Corrugated asbestos cement sheeting was the standard material for garage and shed roofs across the UK from the 1950s through to the 1990s. Chrysotile content is typically 10–15%. Intact sheets are relatively lower risk, but drilling, sawing, or pressure washing releases fibres. Garage conversions into habitable space require an R&D survey before any structural works.",
              },
              {
                location: "Behind fuse boxes and electrical heater cupboards",
                detail: "Asbestos millboard was used as heat-resistant backing behind consumer units (fuse boxes) and inside storage heater cupboards as fire insulation. Electrical upgrades — including consumer unit replacements required by EICR remedials — can disturb millboard without the installer being aware. This is an increasingly common issue as ageing electrical systems across London&apos;s older housing stock are updated.",
              },
              {
                location: "Toilet cisterns, flue pipes, and soil stacks",
                detail: "Older sanitary ware — particularly high-level WC cisterns — was manufactured using asbestos cement. Soil stacks and flue pipes on properties built before 1980 may also contain asbestos cement. These components carry lower risk when undisturbed, but bathroom and kitchen refurbishments frequently involve removing or cutting these elements.",
              },
              {
                location: "Window putty and glazing compounds in older frames",
                detail: "Some glazing putties used in steel-framed windows from the 1950s to 1980s contained chrysotile as a filler and binder. This is less commonly encountered than other ACMs but has been found in original Crittall steel windows and similar frames common in interwar and post-war London housing. Window replacement or reglazing in properties with original steel-framed windows should include asbestos assessment.",
              },
            ].map((item) => (
              <div key={item.location} className="rounded-xl border border-border bg-warm-white p-4">
                <p className="font-semibold text-brand-charcoal text-sm mb-2">{item.location}</p>
                <p className="text-xs text-brand-grey leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Pre-2000 risk window:</span>{" "}
              If your property was built or last substantially refurbished before January 2000, treat any suspect building material as potentially containing asbestos until tested. The locations listed above are the most common, but asbestos was used in dozens of building products — including rope seals, gaskets, insulating blocks, and decorative textiles. Our management survey covers all accessible areas of the property.
            </p>
          </div>
        </section>

        {/* Legal requirements */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Asbestos survey legal requirements
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Asbestos management in the UK is governed by the Control of Asbestos Regulations 2012 (CAR 2012), which came into force in April 2012 and implement EU Directive 2009/148/EC. The regulations impose specific duties depending on the nature of the premises and the type of work being carried out. Understanding these duties is essential for any landlord managing pre-2000 property in London.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                title: "CAR 2012 — the core duty",
                body: "Regulation 4 of CAR 2012 imposes a duty to manage asbestos on the person in control of non-domestic premises. This includes the common parts of residential buildings — corridors, stairwells, plant rooms, and external areas. The duty holder must find out whether ACMs are present, assess their condition, prepare an asbestos management plan, and ensure it is implemented and reviewed regularly.",
              },
              {
                title: "Who is the duty holder?",
                body: "For a residential rental property, the duty holder for the common parts is the landlord or property management company responsible for those areas. For a single-let property with no communal areas, there is no formal regulatory duty under CAR 2012 Regulation 4 — but a management survey is strongly recommended before any works and may be required by your mortgage lender or buildings insurer.",
              },
              {
                title: "Regulation 5 — refurbishment and demolition",
                body: "Before any refurbishment or demolition of a pre-2000 building, Regulation 5 requires the duty holder to ensure that a refurbishment and demolition survey has been carried out of the area affected. Instructing a contractor to begin major works without this survey in place is a criminal offence, regardless of whether asbestos is actually found.",
              },
              {
                title: "Penalties and HSE enforcement",
                body: "Failure to comply with CAR 2012 is a criminal offence under the Health and Safety at Work etc. Act 1974. The Health and Safety Executive (HSE) actively enforces asbestos regulations and can issue improvement notices, prohibition notices, and prosecute duty holders. Conviction on indictment carries an unlimited fine and up to two years&apos; imprisonment for the most serious breaches.",
              },
              {
                title: "Licensing and notifiable work",
                body: "Certain notifiable non-licensed work (NNLW) — such as short-duration work on lower-risk ACMs — can be carried out without a licence but must be notified to the HSE and supported by a written risk assessment. Licensable asbestos removal (including pipe lagging and AIB panel removal) must only be carried out by a contractor holding a current HSE asbestos removal licence.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-warm-white p-4">
                <p className="font-semibold text-brand-charcoal text-sm mb-2">{item.title}</p>
                <p className="text-xs text-brand-grey leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">HMO note:</span>{" "}
              Many London local authorities require evidence of asbestos management as part of HMO licence conditions — particularly for properties built before 1985. Check your licence conditions or contact your local authority&apos;s private housing team. An asbestos management survey from My Landlord Certificate provides the documentation you need.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="below-fold py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Frequently Asked Questions</h2>
          <FAQAccordion items={faqs} />
        </section>

        {/* CTA block */}
        <section className="py-10">
          <div className="bg-compliance-blue rounded-2xl px-6 py-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Book your asbestos survey
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Fixed price from £{entryPrice}. UKAS-accredited laboratory analysis.
              Written report within 5–7 working days. Same-week appointments across London.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/book?service=asbestos-survey"
                className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                Book Online
              </Link>
              <a
                href={`tel:${TEL}`}
                className="inline-flex items-center border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </div>

      <ReviewsBlock />

      <StickyMobileCTA
        href="/book?service=asbestos-survey"
        label="Book Now"
        price={entryPrice}
        serviceName="Asbestos Survey"
      />
    </>
  );
}

import type { Metadata } from "next";
import { LazyFAQAccordion as FAQAccordion, LazyStickyMobileCTA as StickyMobileCTA } from "@/components/lazy";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { TrustBadges } from "@/components/ui/trust-badges";
import { ADDITIONAL_CHARGES, ASBESTOS_SURVEY_TABLE } from "@/lib/pricing";

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
  areaServed: ["London", "South East England"],
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
      <section className="bg-white border-b border-border py-10 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-brand-grey flex-wrap">
              <li><Link href="/" className="hover:text-compliance-blue transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-brand-charcoal font-medium">Asbestos Survey</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-3 leading-tight">
            Asbestos Survey London from £{entryPrice}
          </h1>
          <PriceDisplay price={entryPrice} from size="lg" className="mb-4" />
          <p className="text-brand-grey mb-4">
            UKAS-accredited laboratory · Management &amp; refurbishment surveys · Report in 5–7 days
          </p>
          <TrustBadges serviceKey="asbestos-survey" variant="light" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=asbestos-survey"
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
            Refurbishment and demolition surveys (Type 3) and large commercial properties —
            call{" "}
            <a href="tel:03301330066" className="text-compliance-blue hover:underline">
              0330 133 0066
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
                href="tel:03301330066"
                className="inline-flex items-center border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                0330 133 0066
              </a>
            </div>
          </div>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=asbestos-survey"
        label="Book Now"
        price={entryPrice}
        serviceName="Asbestos Survey"
      />
    </>
  );
}

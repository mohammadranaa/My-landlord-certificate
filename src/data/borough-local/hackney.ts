import type { BoroughLocal } from "./types";

export const hackney: BoroughLocal = {
  slug: "hackney",
  checkedOn: "2026-10-16",
  council: {
    name: "Hackney Council",
    housingUrl: "https://www.hackney.gov.uk/housing/private-tenants-and-landlords/private-landlords",
    licensingUrl:
      "https://www.hackney.gov.uk/housing/private-tenants-and-landlords/private-landlords/check-which-property-licence-you-need",
  },
  licensing: [
    {
      name: "London Borough of Hackney Designation of an Area for Additional Licensing 2025",
      type: "Additional HMO",
      area: "Whole borough",
      appliesTo:
        "HMOs of 3 or more people from 2 or more households, including houses, flats in converted houses and flats in blocks. Excludes section 257 converted blocks",
      period: "1 May 2026 to 30 April 2031",
      status: "In force",
    },
    {
      name: "London Borough of Hackney Designation of an Area for Selective Licensing 2025",
      type: "Selective",
      area:
        "17 of 21 wards: all except Haggerston, Hoxton East and Shoreditch, Hoxton West and Woodberry Down",
      appliesTo:
        "Privately rented homes not licensable as an HMO, such as a home let to a single household, a single tenant or two sharers",
      period: "1 May 2026 to 30 April 2031",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo:
        "Shared homes of 5 or more people from 2 or more households who share facilities such as a kitchen or bathroom",
      period: "Run by Hackney since 2004 (council evidence pack)",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Households renting privately", value: "32.2% (London 30.0%)", source: "Census 2021" },
    { label: "Households renting socially", value: "40.5% (London 23.1%)", source: "Census 2021" },
    {
      label: "Households in other converted buildings, such as former warehouses, schools or churches",
      value: "3.4% (London 1.2%)",
      source: "Census 2021",
    },
    { label: "Homes built in 2000 or later", value: "23.3% (London 17.9%)", source: "VOA 2025" },
  ],
  overview: [
    "Few Hackney households own their home. At the 2021 Census, 24.6% did, against 45.2% across London, and 20.7% rented from the council alone, well above the London figure of 12.1%.",
    "Private renting has grown fast alongside that large social sector. Council stock modelling estimates 39,493 privately rented homes in 2024, up from 30,707 in 2011.",
    "As of October 2026, Hackney's discretionary licensing is brand new. The schemes that ran from 2018 to 2023 have ended, and their replacements started on 1 May 2026 after a consultation from June to September 2025.",
    "The council says the new selective scheme covers 76% of the private rented sector. Its 2018 to 2023 selective pilot licensed 2,692 homes in just three wards: Brownswood, Stoke Newington and Cazenove.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Hackney: hazards in older wards and a report every application needs",
      body: [
        "Hackney's own evidence points the EICR at older homes. The council's 2025 evidence pack estimates that 6,707 private rented homes, 17% of the sector, have at least one serious hazard. It also finds more electrical, fire and damp hazards in the wards with older housing.",
        "Hackney's two licensing documents word the EICR differently. The application page lists it among the reports that help avoid delays, while the licensing FAQ says every application will require one. Treat it as required, not optional.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety in Hackney: date-check the certificate before paying Part A",
      body: [
        "Part A of a Hackney licence fee is paid when you apply and is not refunded if the application is refused or withdrawn. The gas safety certificate, from a Gas Safe registered engineer, is one of the details the application page says you must give, so check its date before you submit. After licensing, the council receives a new certificate each year, and a tenant in a selectively licensed home gets a copy within 28 days of each check.",
      ],
    },
    epc: {
      heading: "EPCs in Hackney: few F and G lets, but the rating still counts at licensing",
      body: [
        "Few Hackney lets fall below the legal minimum. The council's evidence pack estimates that about 255 private rented homes outside known HMOs are rated F or G, 0.73% of them. For most landlords, the rating matters more at licensing, because an EPC of C or better earns a discount on Part B of the licence fee (as of October 2026).",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Hackney: 6,038 estimated HMOs and student blocks now in scope",
      body: [
        "Hackney's 2025 evidence pack estimates 6,038 HMOs, known and predicted, spread across all 21 wards.",
        "Since 1 February 2026, purpose-built student accommodation in Hackney that is not run directly by an educational establishment is no longer exempt from property licensing. Operators of those blocks should check the council's \"Check which property licence you need\" guide. Where an HMO licence applies, the holder must be able to give the council the fire risk assessment when asked.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Hackney",
      body: [],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Hackney",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical fault-finding in Hackney",
      body: [],
    },
    "fuse-box-installation": {
      heading: "Consumer unit replacement in Hackney",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Hackney: when the application asks for a certificate",
      body: [
        "Hackney's application page lists an emergency lighting certificate as one of the papers that help avoid delays for a mandatory HMO. The council's evidence pack puts that group at around 450 licensed properties. The licensing FAQ adds that, for any HMO, the certificate is needed only where emergency lighting is already fitted.",
        "A three- or four-person share under the additional scheme that has no emergency lighting can therefore apply without the certificate.",
      ],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Hackney",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler replacement in Hackney: Article 4 and renewable heating",
      body: [
        "If replacing a boiler leads you to consider a heat pump or solar panels, check the address first. Hackney's Article 4 directions remove some householder permitted development rights, including for installing renewable energy systems, in three conservation areas. They apply in Brownswood and Well Street from 9 May 2025, and in Beck Road from 28 May 2025.",
        "In those areas, equipment that could go ahead without an application elsewhere may need planning permission.",
      ],
    },
    "fire-safety-certificate": {
      heading: "Fire safety in Hackney HMOs: e-bikes out of the communal areas",
      body: [
        "Hackney's HMO licence conditions ban charging or storing e-bikes, e-scooters and similar battery devices in communal areas. In a shared house that means the hallways, landings and stairs, not only a bike store.",
        "The same conditions require the licence holder to inspect the property at least every six months and keep records. That visit is the practical moment to check the battery rule is being followed and that escape routes are clear.",
      ],
    },
    "fire-alarm-installation": {
      heading: "Fire alarms in Hackney: briefing tenants on a block's call points",
      body: [
      ],
    },
    "fire-door-certificate": {
      heading: "Fire door certificates in Hackney",
      body: [],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguisher testing in Hackney",
      body: [],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Hackney",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Hackney",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Hackney",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "Why are Hoxton and Woodberry Down outside Hackney's selective scheme?",
        answer:
          "Because the council's evidence did not find the high levels of housing hazards seen in other wards. Its evidence pack says the four wards left out, Haggerston, Hoxton East and Shoreditch, Hoxton West and Woodberry Down, will be kept under review. For now, a single-household let there needs no selective licence, but a share of three or more still needs an HMO licence, and with it an EICR.",
      },
    ],
    epc: [
      {
        question: "Can I replace windows to improve the EPC of a listed Hackney building without consent?",
        answer:
          "Not always: replacing external windows or doors is the council's own example of work that can need listed building consent. Hackney Council says consent is needed for works that remove historic material or change a building's character, and around 1,300 buildings in the borough are listed.",
      },
    ],
  },
  sources: [
    {
      label: "Hackney Council: Private landlords",
      url: "https://www.hackney.gov.uk/housing/private-tenants-and-landlords/private-landlords",
    },
    {
      label: "Hackney Council: Check which property licence you need",
      url: "https://www.hackney.gov.uk/housing/private-tenants-and-landlords/private-landlords/check-which-property-licence-you-need",
    },
    {
      label: "Hackney Council: Apply for a property licence",
      url: "https://www.hackney.gov.uk/housing/private-tenants-and-landlords/private-landlords/apply-property-licence",
    },
    {
      label: "Hackney Council: Guidance for landlords",
      url: "https://www.hackney.gov.uk/housing/private-tenants-and-landlords/private-landlords/guidance-landlords",
    },
    {
      label: "Hackney Council: Additional licensing designation 2025 (notice)",
      url: "https://drive.google.com/file/d/1qtHjlAn9hxk0jzkNVrw5Mx2M2e3hWDk9/view",
    },
    {
      label: "Hackney Council: Selective licensing designation 2025 (notice)",
      url: "https://drive.google.com/file/d/1ffv6tcJGtCGXVEBuoJ86FBcnGwlUGJxR/view",
    },
    {
      label: "Hackney Council: Additional HMO and selective licensing consultation evidence pack (2025)",
      url: "https://consultation.hackney.gov.uk/housing-strategy-and-policy/landlord-licensing-consultation/user_uploads/final-version-lb-hackney-additional-hmo-and-selective-licensing-consultation-evidence-pack.-final.pdf",
    },
    {
      label: "Hackney Council: Property licensing FAQ",
      url: "https://docs.google.com/document/d/1NwToOk9rq4Uv701YmlkSH-XQGxkFz3QGY8DfNs7jBR0",
    },
    {
      label: "Hackney Council: Property licensing policy",
      url: "https://docs.google.com/document/d/1Mvo8PYMHV4vd3qevvwl45bDj-CWvGWAdxoVsRLwqqqo",
    },
    {
      label: "Hackney Council: Schedule of licence fees",
      url: "https://docs.google.com/document/d/19oHG1tANN8kqc26I9cjJie5GVwsNEC6K_TEnhVUbp9w",
    },
    {
      label: "Hackney Council: HMO licence conditions",
      url: "https://docs.google.com/document/d/17sNQ8GN0GyOfKxQ5Hb0pwACeepFL5wFPbLEGfQX7Y4k",
    },
    {
      label: "Hackney Council: Selective licence conditions",
      url: "https://docs.google.com/document/d/1cUiXJCp6BsKd4r93ENK8976fhEMGoj32_rOwTHvRDME",
    },
    {
      label: "Hackney Council: Accommodation standards",
      url: "https://docs.google.com/document/d/1EPNQurGZfnFVqIcZgZH6rwR2zc111VEOCTbU7shabTI",
    },
    {
      label: "Hackney Council: Conservation areas map",
      url: "https://www.hackney.gov.uk/planning-and-building/conservation-heritage-and-design/conservation-areas/conservation-areas-map",
    },
    {
      label: "Hackney Council: Article 4 directions",
      url: "https://www.hackney.gov.uk/planning-and-building/planning-policies-and-local-plan/article-4-directions",
    },
    {
      label: "Hackney Council: Listed buildings",
      url: "https://www.hackney.gov.uk/planning-and-building/conservation-heritage-and-design/listed-buildings",
    },
    {
      label: "Hackney Council: Smoke and emissions from burning",
      url: "https://www.hackney.gov.uk/community-safety-and-environment/pollution-noise-and-environmental-problems/air-quality/smoke-and-emissions-burning",
    },
    {
      label: "Hackney Council: Air quality in Hackney",
      url: "https://www.hackney.gov.uk/community-safety-and-environment/pollution-noise-and-environmental-problems/air-quality/air-quality-hackney",
    },
    { label: "ONS Census 2021: TS054 Tenure (Nomis)", url: "https://www.nomisweb.co.uk/datasets/c2021ts054" },
    { label: "ONS Census 2021: TS044 Accommodation type (Nomis)", url: "https://www.nomisweb.co.uk/datasets/c2021ts044" },
    { label: "ONS Census 2021: TS046 Central heating (Nomis)", url: "https://www.nomisweb.co.uk/datasets/c2021ts046" },
    {
      label: "VOA: Council Tax Stock of Properties 2025",
      url: "https://www.gov.uk/government/statistics/council-tax-stock-of-properties-2025",
    },
  ],
  contextOverride: {
    propertyContext:
      "Most Hackney households live in flats: 60.4% in purpose-built blocks, against 40.3% across London, and 15.5% in flats or bedsits in converted or shared houses (Census 2021). Terraced houses hold only 13.9%. Much of the stock is old, with 34.9% of council tax properties built before 1919 (VOA 2025), while the interwar years account for 7.8%, about a third of the London share.",
    landlordContext:
      "Hackney's licensing restarted on 1 May 2026: shares of three or more need a licence anywhere in the borough, and other private lets need one in 17 of 21 wards.",
  },
};

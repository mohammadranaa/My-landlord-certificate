import type { BoroughLocal } from "./types";

export const hounslow: BoroughLocal = {
  slug: "hounslow",
  checkedOn: "2026-10-16",
  council: {
    name: "Hounslow Council",
    housingUrl: "https://www.hounslow.gov.uk/private-landlords",
    licensingUrl: "https://www.hounslow.gov.uk/houses-multiple-occupation/hmo-licensing",
  },
  licensing: [
    {
      name: "London Borough of Hounslow Additional Licensing of Houses in Multiple Occupation Scheme (4) 2025",
      type: "Additional HMO",
      area: "Whole borough (all wards)",
      appliesTo:
        "HMOs of 3 or more people in 2 or more households, and section 257 converted buildings where the building and all its flats are in the same ownership or considered by the council to be effectively in the same control",
      period: "11 December 2025 to 10 December 2030",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo: "HMOs of 5 or more people in 2 or more households sharing a kitchen, bathroom or toilet",
      period: "National scheme, no end date",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Households in semi-detached houses", value: "28.6% (London 18.6%)", source: "Census 2021" },
    { label: "Homes built 1919 to 1939", value: "28.5% (London 22.2%)", source: "VOA 2025" },
    { label: "Homes built before 1919", value: "16.4% (London 29.1%)", source: "VOA 2025" },
  ],
  overview: [
    "Hounslow has licensed smaller HMOs, beyond the national mandatory scheme, since August 2020. The renewed additional scheme, in effect since 11 December 2025, still covers every ward. It also takes in shares the 2020 scheme left out, such as flats in multiple occupation in large purpose-built blocks.",
    "A licence application, new or renewal, asks for a current periodic electrical report and a gas safety record. It also asks for BS 5839 fire alarm and BS 5266 emergency lighting test reports, certification of fire protection measures and building regulation completion certificates. The council warns that missing documents will delay an application and could lead to refusal.",
    "From August 2020 to March 2025, the council says it issued 937 warnings of formal enforcement action, 135 notices to remedy defects or prohibit hazardous accommodation and 51 civil penalty fines. Since 4 September 2023, turning a family house into a small HMO has also needed planning permission across most of the borough. Licensing queries go to housing.enforcement@hounslow.gov.uk or 020 8583 2000.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Hounslow: mostly one installation, one home",
      body: [
        "With the housing mix shown above, an EICR in Hounslow usually covers one installation serving one home rather than a flat inside a converted house.",
        "If the house is let as an HMO, the report is one of the documents to upload with the licence application, and evidence of any remedial work goes to housing.enforcement@hounslow.gov.uk.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety in Hounslow: 652 notices for gas and electrical certificates",
      body: [
        "Since additional HMO licensing began in August 2020, Hounslow Council says it has issued 652 notices requesting gas and electrical safety certificates to be provided (figures to March 2025).",
        "In a licensed HMO, condition 3 requires the certificate to reach the council each year. Under condition 11.9, a copy has to be on display in the common parts or with each tenant. Book the next check before the current certificate runs out, so a valid one is in place for the whole licence, as condition 3 also requires.",
      ],
    },
    epc: {
      heading: "EPCs in Hounslow",
      body: [],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Hounslow: homes above a business",
      body: [
        "For an HMO above a shop, office or takeaway, the assessment needs to look beyond the home's own hall and stairs. It should look at the floors, walls and doors between the home and the business, and record what that construction is (Hounslow's HMO standards set 60 minutes' separation there). If the commercial unit has its own fire risk assessment, ask for a copy so both documents describe the same separating construction.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Hounslow",
      body: [],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Hounslow",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical fault finding in Hounslow",
      body: [],
    },
    "fuse-box-installation": {
      heading: "Consumer unit upgrades in Hounslow",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Hounslow",
      body: [],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Hounslow",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler installation in Hounslow",
      body: [],
    },
    "fire-safety-certificate": {
      heading: "Fire safety in Hounslow: certificates for the work, not only the tests",
      body: [
        "Hounslow's HMO licence application asks for certification of fire protection measures as an item of its own, separate from the fire alarm and emergency lighting test reports. Where fire protection work such as new fire doors or a protected staircase has been carried out, the installer's certificate is that evidence.",
        "The same list asks for building regulation completion certificates. If your building is a section 257 conversion covered by the scheme (see the licensing card above), gather the completion certificate for the conversion with the fire certificates before you apply.",
      ],
    },
    "fire-alarm-installation": {
      heading: "Fire alarms in Hounslow",
      body: [],
    },
    "fire-door-certificate": {
      heading: "Fire doors in Hounslow HMOs: one part of a 30-minute route",
      body: [
        "Hounslow's HMO standards describe the protected escape route as a whole: every room leading onto it should be protected with 30-minute fire-resistant doors, partitions and ceilings. A certified door set in a wall or under a ceiling that would not hold back fire for that long does not give the route its 30 minutes.",
        "Ask the surveyor to note the walls and ceilings around each door on the route, as well as the door, frame and closer, so any repair list covers the whole enclosure.",
      ],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguisher testing in Hounslow",
      body: [],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Hounslow",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Hounslow",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Hounslow",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "What can a Hounslow officer require before granting an HMO licence?",
        answer:
          "When deciding an application, the council may inspect, require works such as extra bathrooms or kitchens, and set the maximum number of people who may live in the property. Applications, new or renewal, are made online and paid by card. Hounslow says tacit authorisation does not apply, so a licence is not treated as granted just because no decision has arrived.",
      },
      {
        question: "Does a family let in Hounslow need a property licence?",
        answer:
          "Not under a local scheme as of October 2026, because Hounslow has no selective licensing. Its Housing Strategy 2025 to 2030 says the council will investigate a selective scheme covering all of the borough's private rented homes. We found no consultation or designation on the council's website as of October 2026, so check its licensing page before each new tenancy.",
      },
    ],
    "gas-safety-certificate": [
      {
        question: "Why would Hounslow issue a one-year HMO licence?",
        answer:
          "Hounslow licences normally last five years. Where the council has concerns about the management or condition of a property, or a landlord has deliberately avoided licensing, it normally issues a one-year licence instead. That means applying again, with fresh documents, much sooner.",
      },
    ],
    "fire-risk-assessment": [
      {
        question: "Do I need planning permission to turn a Hounslow shop or office into flats?",
        answer:
          "In Hounslow's town centres, neighbourhood centres, industrial locations and key office locations defined in the Local Plan, yes. An Article 4 direction confirmed on 4 March 2025 came into force on 22 April 2025. It removed the permitted development right (Class MA) to convert Class E commercial premises to homes there, so a planning application is needed first.",
      },
    ],
    "fire-safety-certificate": [
      {
        question: "Which parts of Hounslow are outside the HMO Article 4 direction?",
        answer:
          "Only open land, industrial areas, Chiswick Business Park, Bedfont Lakes Business Park and Mogden Sewage Works. Everywhere else, turning a family house into a small HMO has needed planning permission since 4 September 2023, when the direction confirmed on 8 August 2023 came into force. An HMO licence is a separate matter and does not grant that permission.",
      },
    ],
    "fire-alarm-installation": [
      {
        question: "Can Hounslow cap the number of tenants in an HMO without planning permission?",
        answer:
          "Yes, under Hounslow's HMO licensing policy. Where an HMO lacks the planning permission it needs, the council may limit occupancy to what planning allows, or grant a shorter licence while the landlord regularises the use. For a large HMO of seven or more people without permission, it may cap occupancy at six.",
      },
    ],
  },
  sources: [
    { label: "Hounslow Council: Private landlords", url: "https://www.hounslow.gov.uk/private-landlords" },
    {
      label: "Hounslow Council: HMO licensing",
      url: "https://www.hounslow.gov.uk/houses-multiple-occupation/hmo-licensing",
    },
    {
      label: "Hounslow Council: How to apply for an HMO licence",
      url: "https://www.hounslow.gov.uk/houses-multiple-occupation/hmo-licensing/3",
    },
    {
      label: "Hounslow Council: Public notice, additional licensing of HMOs (2025)",
      url: "https://www.hounslow.gov.uk/downloads/file/11545/public-notice-additional-licensing-of-hmos",
    },
    {
      label: "Hounslow Council: Additional licensing designation 2025 to 2030",
      url: "https://www.hounslow.gov.uk/downloads/file/11546/designated-document-additional-licensing-scheme-2025-2030",
    },
    {
      label: "Hounslow Council: HMO licensing conditions 2025",
      url: "https://www.hounslow.gov.uk/downloads/file/11548/hmo-licensing-conditions-2025",
    },
    {
      label: "Hounslow Council: HMO licensing policy 2025",
      url: "https://www.hounslow.gov.uk/downloads/file/11547/hmo-licensing-policy-2025",
    },
    { label: "Hounslow Council: HMO standards", url: "https://www.hounslow.gov.uk/downloads/file/10651/hmo-standards" },
    {
      label: "Hounslow Council: HMO licensing renewal consultation news (7 March 2025)",
      url: "https://forms2.hounslow.gov.uk/news/article/3269/hounslow_council_explores_tighter_controls_on_hmos",
    },
    {
      label: "Hounslow Council: Civil penalty policy (May 2026)",
      url: "https://www.hounslow.gov.uk/downloads/file/14139/civil-penalty-policy-may-2026",
    },
    {
      label: "Hounslow Council: Electrical safety standards in privately rented properties",
      url: "https://www.hounslow.gov.uk/private-tenants-homeowners/electrical-safety-standards-privately-rented-properties",
    },
    { label: "Hounslow Council: Article 4 directions", url: "https://www.hounslow.gov.uk/planning-policy/article-4-directions" },
    {
      label: "Hounslow Council: Design and conservation",
      url: "https://www.hounslow.gov.uk/planning-building/design-conservation",
    },
    {
      label: "Hounslow Council: Conservation areas",
      url: "https://www.hounslow.gov.uk/planning-building/design-conservation/4",
    },
    {
      label: "Hounslow Council: Housing Strategy 2025 to 2030",
      url: "https://www.hounslow.gov.uk/strategies-plans-performance/housing-strategy-2025-2030",
    },
    {
      label: "Hounslow Council: Housing Strategy 2025 to 2030, private rented sector",
      url: "https://www.hounslow.gov.uk/strategies-plans-performance/housing-strategy-2025-2030/2",
    },
    {
      label: "Hounslow Council: Housing Strategy 2025 to 2030, priorities",
      url: "https://www.hounslow.gov.uk/strategies-plans-performance/housing-strategy-2025-2030/3",
    },
    { label: "ONS Census 2021: TS054 Tenure (Nomis)", url: "https://www.nomisweb.co.uk/datasets/c2021ts054" },
    { label: "ONS Census 2021: TS044 Accommodation type (Nomis)", url: "https://www.nomisweb.co.uk/datasets/c2021ts044" },
    {
      label: "VOA: Council Tax Stock of Properties 2025",
      url: "https://www.gov.uk/government/statistics/council-tax-stock-of-properties-2025",
    },
  ],
  contextOverride: {
    propertyContext:
      "Hounslow has a higher inter-war share of homes than London and fewer flats in converted buildings. Purpose-built flats house 37.4% of households, terraced houses 20.5% and detached houses 4.9%, while only 6.4% live in flats in converted or shared houses, against 11.1% across London (Census 2021). After purpose-built flats, semi-detached houses are the most common type of home.",
    landlordContext:
      "The council's Housing Strategy says average private rents rose 46% between 2018 and 2024. At the 2021 Census, 30.9% of Hounslow households rented privately, close to London's 30.0%.",
  },
};

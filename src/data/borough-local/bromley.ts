import type { BoroughLocal } from "./types";

export const bromley: BoroughLocal = {
  slug: "bromley",
  checkedOn: "2026-10-16",
  council: {
    name: "London Borough of Bromley",
    housingUrl: "https://www.bromley.gov.uk/houses-multiple-occupancy",
    licensingUrl: "https://www.bromley.gov.uk/housing-advice-options/apply-hmo-licence",
  },
  licensing: [
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo: "HMOs with 5 or more people forming 2 or more households who share a kitchen, bathroom or toilet",
      period: "National scheme, no end date; licences last 5 years (the only scheme in Bromley as of October 2026)",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Households in detached houses", value: "18.1% (London 6.1%)", source: "Census 2021" },
    { label: "Households in purpose-built flats", value: "23.5% (London 40.3%)", source: "Census 2021" },
    { label: "Homes built before 1919", value: "17.0% (London 29.1%)", source: "VOA 2025" },
    { label: "Households heated by mains gas only", value: "82.2%, the highest in London (London 70.5%)", source: "Census 2021" },
    { label: "Households living in houses", value: "68.6% (London 46.0%)", source: "Census 2021" },
    { label: "Households who own their home", value: "68.5% (London 45.2%)", source: "Census 2021" },
    { label: "Homes built in 2000 or later", value: "10.5% (London 17.9%)", source: "VOA 2025" },
    { label: "Conservation areas", value: "47", source: "Bromley Council" },
  ],
  overview: [
    "Bromley Council says it \"only operates the Mandatory HMO Licensing Scheme\" (October 2026). There is no additional or selective scheme, so only HMOs of 5 or more people need a property licence.",
    "Smaller shares are still regulated. The council treats a home of 3 or more people from 2 or more households as an HMO, and every HMO, licensed or not, must meet its adopted HMO standards. Its Housing Strategy 2019-2029 listed an action to \"introduce mandatory licensing for HMOs of all sizes\", but as of October 2026 the council still runs only the mandatory scheme for 5 or more people.",
    "Planning is a separate control. Under two Article 4 directions, turning a family house into a small HMO has needed planning permission anywhere in the borough since 1 September 2022.",
    "New licences and renewals are applied for through the council's online customer portal. Bromley has sent details of all its licensed HMOs to the Valuation Office for review. Since December 2023, HMOs have been valued as one property for council tax, with the landlord liable.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Bromley's converted shared houses",
      body: [
        "Bromley's Housing Strategy 2019-2029 describes HMO conversions as \"often done cheaply and without due attention to safety\". It also says the overall quality of the borough's housing \"is not fully known\".",
        "If you take on a house that someone else converted to shared use, an EICR before the first let shows what that work has left behind in the wiring.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety certificates in Bromley",
      body: [],
    },
    epc: {
      heading: "EPCs in Bromley",
      body: [],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Bromley",
      body: [],
    },
    "pat-testing": {
      heading: "PAT testing in Bromley",
      body: [],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Bromley",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical fault finding in Bromley",
      body: [],
    },
    "fuse-box-installation": {
      heading: "Consumer units in Bromley HMO conversions: check the supply first",
      body: [
        "Bromley's HMO standards say an HMO must have enough electrical power for its expected loading. They add that converting a building into a large HMO \"will require an increased electrical supply, over and above a standard domestic supply\".",
        "If a house is being converted, ask the electrician to check the incoming supply as well as the consumer unit. A new board does not raise the capacity of the supply that feeds it.",
      ],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Bromley HMOs: wired from the landlord's supply",
      body: [
        "Bromley's HMO standards say the electrical supply to emergency lighting, and to the fire alarm, should come from a separate landlord's supply.",
        "When emergency lighting is fitted, moved or tested in a shared house, check which circuit it runs from and ask for that to be noted on the paperwork.",
      ],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Bromley",
      body: [],
    },
    "boiler-installation": {
      heading: "Solid-fuel boilers in Bromley: where smoke control stops",
      body: [
        "Some streets in Darwin ward and in Chelsfield and Pratts Bottom ward sit outside Bromley's smoke control area, on a council list dated 6 February 2018. The rest of the borough is inside it.",
        "Before fitting or replacing a solid-fuel boiler or stove in a let, check the street against that list and the council's smoke control map. The council says to read the two together, because more recent developments may not be on the list.",
      ],
    },
    "fire-safety-certificate": {
      heading: "Fire safety certificates in Bromley",
      body: [],
    },
    "fire-alarm-installation": {
      heading: "Fire alarms in Bromley's three- and four-person shares",
      body: [
        "Bromley's adopted HMO standards say a mains-operated or automatic fire detection and alarm system shall be provided in every HMO. The rule therefore reaches three- and four-person shares as well as licensed houses.",
      ],
    },
    "fire-door-certificate": {
      heading: "Fire doors in Bromley HMOs next to a shop or business",
      body: [
        "Where a fire door sits between an HMO's escape route and commercial premises, Bromley's HMO standards raise its rating from 30 to at least 60 minutes.",
        "For a shared flat above a shop or office, check that door separately when the doors are surveyed. A 30-minute door there falls short of the council's standard.",
      ],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguisher testing in Bromley",
      body: [],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Bromley",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Bromley",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Bromley",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "Can a Bromley block converted into flats count as an HMO?",
        answer:
          "It can, if it was converted before 1991, or after 1991 without Building Regulations approval. Under Bromley's HMO definition, 3 or more people must also live in 2 or more of the flats, and less than two thirds of the flats must be owner-occupied. Conversions where facilities sit across a communal landing are also covered, and any building that qualifies has to meet the council's adopted HMO standards.",
      },
    ],
    "fuse-box-installation": [
      {
        question: "Did Biggin Hill and Darwin come under HMO planning control before the rest of Bromley?",
        answer:
          "Yes. Biggin Hill and Darwin wards had their own immediate Article 4 direction, made on 1 September 2021 and confirmed in February 2022. The direction for every other ward came into effect on 1 September 2022.",
      },
    ],
  },
  sources: [
    {
      label: "Bromley Council: Houses in multiple occupation",
      url: "https://www.bromley.gov.uk/houses-multiple-occupancy",
    },
    {
      label: "Bromley Council: What is a house in multiple occupation (HMO)",
      url: "https://www.bromley.gov.uk/houses-multiple-occupancy/house-multiple-occupation-hmo",
    },
    {
      label: "Bromley Council: Apply for an HMO licence",
      url: "https://www.bromley.gov.uk/housing-advice-options/apply-hmo-licence",
    },
    {
      label: "Bromley Council: HMO advice for landlords",
      url: "https://www.bromley.gov.uk/housing-advice-options/houses-multiple-occupation-hmo-advice-landlords",
    },
    {
      label: "Bromley Council: Houses in multiple occupation adopted standards",
      url: "https://www.bromley.gov.uk/downloads/file/945/houses-in-multiple-occupation-adopted-standards",
    },
    {
      label: "Bromley Council: Article 4 directions on HMO permitted development rights",
      url: "https://www.bromley.gov.uk/planning/article-4-directions-immediate-non-immediate-remove-houses-multiple-occupation-hmo-pd-rights",
    },
    {
      label: "Bromley Council: Smoke control areas",
      url: "https://www.bromley.gov.uk/pollution-control-air-quality/smoke-control-areas",
    },
    {
      label: "Bromley Council: Housing Strategy 2019-2029",
      url: "https://www.bromley.gov.uk/downloads/file/1286/bromley-council-housing-strategy-2019-2029",
    },
    {
      label: "Bromley Council: Tenancy Strategy",
      url: "https://www.bromley.gov.uk/downloads/file/2313/tenancy-strategy-2024-to-2029",
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
      "Bromley is London's largest borough by area, at 59 square miles, and over half of it is open countryside, much of it Metropolitan Green Belt. Semi-detached houses are its most common home type, at 29.9% of households (Census 2021). Of 143,430 council tax properties, 25.7% were built in the 1930s and 34.6% between 1945 and 1982 (VOA 2025).",
    landlordContext:
      "Census 2021 counted 23,661 Bromley households renting privately, 17.4% of the total and the third lowest share of the 33 London boroughs.",
  },
};

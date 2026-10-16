import type { BoroughLocal } from "./types";

export const bexley: BoroughLocal = {
  slug: "bexley",
  checkedOn: "2026-10-16",
  council: {
    name: "London Borough of Bexley",
    housingUrl: "https://www.bexley.gov.uk/services/housing",
    licensingUrl: "https://www.bexley.gov.uk/services/housing/property-licensing/property-licensing-schemes",
  },
  licensing: [
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo: "HMOs with 5 or more people in 2 or more households, whatever the number of storeys",
      period: "National scheme, no end date; licences last up to 5 years",
      status: "In force",
    },
    {
      name: "The London Borough of Bexley Selective Licensing Scheme 2024",
      type: "Selective",
      area: "Belvedere ward only",
      appliesTo: "Privately rented homes in the ward, unless exempt (HMOs that need a mandatory licence are exempt)",
      period: "13 January 2025 to 12 January 2030 (designation made 3 October 2024)",
      status: "In force",
    },
    {
      name: "Previous selective licensing designation (2018)",
      type: "Selective",
      area: "Thamesmead North, Abbey Wood/Lower Belvedere, Erith and Manor Road",
      appliesTo: "Privately rented homes in those four areas; not renewed there",
      period: "1 October 2018 to 31 August 2023",
      status: "Expired",
    },
  ],
  stockFacts: [
    { label: "Households in flats in converted or shared houses", value: "1.8% (London 11.1%)", source: "Census 2021" },
    { label: "Households in purpose-built flats", value: "21.3% (London 40.3%)", source: "Census 2021" },
    {
      label: "Households renting from the council",
      value: "2.6% (London 12.1%); the council owns no housing stock",
      source: "Census 2021; Bexley Council",
    },
    { label: "Homes built 1945 to 1982", value: "29.3% (London 22.5%)", source: "VOA 2025" },
  ],
  overview: [
    "As of October 2026, Bexley runs two property licensing schemes. Mandatory HMO licensing covers the whole borough. Selective licensing covers privately rented homes in Belvedere ward only, from 13 January 2025 to 12 January 2030.",
    "There is no additional HMO licensing. The council consulted on a borough-wide scheme in 2017-18, then decided not to go ahead because it found no evidence that shares of 3 or 4 people were poorly managed. The first selective scheme, in four northern areas, ended on 31 August 2023.",
    "Separately, a borough-wide Article 4 direction has required planning permission to turn a family house into a small HMO since 24 September 2017.",
    "The council's Rent it Right team runs licensing online, with an address checker for the Belvedere area. An application can include an EICR, gas safety certificate, fire alarm inspection and servicing report, emergency lighting certificate and EPC, though not all are needed before it is processed. Licence holders or their agents must become accredited within 12 months of the licence being issued.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Bexley's converted family houses",
      body: [
        "Bexley Council's 2024 HMO report says that in 2015 and 2016 investors converted small family houses into HMOs of 5 or 6 bedrooms, mainly in Erith and Belvedere. If you own or are buying one of those houses, the EICR shows the state of the wiring after that conversion.",
        "Bexley's licence conditions set no EICR date of their own. Condition 1.11 requires every electrical installation to be kept safe, with a declaration when the council asks.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas certificates and Bexley licence applications",
      body: [
        "A missing gas certificate does not stop Bexley Council processing a licence application. Instead, the council may add a licence condition with a short deadline to supply one, or grant the licence for a shorter period.",
      ],
    },
    epc: {
      heading: "EPCs for Bexley's Let2Bex scheme",
      body: [
        "Let2Bex is Bexley Council's own incentive scheme for landlords. Joining it means giving the council a copy of the property's EPC together with the gas safety certificate, and rents under the scheme are set at Local Housing Allowance rates.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Bexley's licensed HMOs",
      body: [
        "Bexley's 2024 licence conditions name fire alarm and emergency lighting checks but do not ask for a fire risk assessment.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Bexley",
      body: [],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Bexley",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical fault finding in Bexley",
      body: [],
    },
    "fuse-box-installation": {
      heading: "Consumer units in Bexley",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Bexley HMOs: keep the log book",
      body: [
        "Bexley's Rent it Right standards require a log book of emergency lighting tests, kept with the record of fire alarm tests.",
      ],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Bexley",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler installation in Bexley",
      body: [],
    },
    "fire-safety-certificate": {
      heading: "Fire safety checks in Bexley HMOs: condition 1.9",
      body: [
        "Bexley's licence condition 1.9 requires any mains-wired fire alarm system and the emergency lighting in a licensed HMO to be checked every year by a competent person, with an inspection certificate obtained.",
      ],
    },
    "fire-alarm-installation": {
      heading: "Fire alarms for a Bexley house becoming a shared home",
      body: [
        "Turning a Bexley family house into a shared home for 3 to 6 people needs planning permission anywhere in the borough. This is under an Article 4 direction in force since 24 September 2017. The council advises speaking to its planning team before conversion work starts.",
        "The council received 37 HMO planning applications in 2023, up from 17 in 2021. If you are planning a conversion, get the planning answer before an alarm system is designed around the layout.",
      ],
    },
    "fire-door-certificate": {
      heading: "Fire doors in Bexley",
      body: [],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguisher testing in Bexley",
      body: [],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Bexley",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Bexley",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Bexley",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "My Erith let had a licence under Bexley's 2018 selective scheme. Does it need one now?",
        answer:
          "Not a selective licence. That scheme ended on 31 August 2023, and in 2024 the council said there was no evidence to support a new scheme based on the old areas. A let with 5 or more people from 2 or more households still needs a mandatory HMO licence. A July 2024 council report promised a review of other areas; no consultation had been published by 16 October 2026.",
      },
    ],
    "gas-safety-certificate": [
      {
        question: "If I get a Belvedere selective licence now, how long will it last?",
        answer:
          "Until 12 January 2030 at the latest. Every licence under the Belvedere scheme ends on the date the scheme ends, whenever it was granted, so a licence issued in late 2026 runs for just over three years.",
      },
    ],
  },
  sources: [
    {
      label: "Bexley Council: Property licensing schemes",
      url: "https://www.bexley.gov.uk/services/housing/property-licensing/property-licensing-schemes",
    },
    {
      label: "Bexley Council: Designation notice, selective licensing",
      url: "https://www.bexley.gov.uk/services/housing/property-licensing/property-licensing-schemes/designation-notice-selective-licensing",
    },
    {
      label: "Bexley Council: Guide to property licensing",
      url: "https://www.bexley.gov.uk/services/housing/property-licensing/property-licensing-schemes/guide-to-property-licensing",
    },
    {
      label: "Bexley Council: Property licensing conditions 2024",
      url: "https://www.bexley.gov.uk/sites/default/files/2024-11/property-licensing-conditions-2024.pdf",
    },
    {
      label: "Bexley Council: Rent it Right property licensing standards",
      url: "https://www.bexley.gov.uk/sites/default/files/2020-08/Property-Licensing-Standards.pdf",
    },
    {
      label: "Bexley Council: Belvedere selective licensing consultation",
      url: "https://www.bexley.gov.uk/consultations/designation-selective-licensing-scheme-covering-belvedere-ward",
    },
    {
      label: "Bexley Council: 2018 selective licensing designation notice",
      url: "https://www.bexley.gov.uk/sites/default/files/2020-09/Legal-and-Public-Notice-Designation-of-an-area-for-selective-licensing.pdf",
    },
    {
      label: "Bexley Council: HMO report, Places Overview and Scrutiny Committee, July 2024",
      url: "https://democracy.bexley.gov.uk/documents/s114436/HMO%20report.pdf",
    },
    {
      label: "Bexley Council: Article 4 directions",
      url: "https://www.bexley.gov.uk/services/planning-and-building-control/planning-policy-and-guidance/article-4-directions",
    },
    {
      label: "Bexley Council: Landlord incentive schemes (Let2Bex)",
      url: "https://www.bexley.gov.uk/services/housing/renting-your-property/landlord-incentive-schemes",
    },
    {
      label: "Bexley Council: Rent it Right discretionary licensing consultation, 2017-18",
      url: "https://www.bexley.gov.uk/sites/default/files/2021-01/Rent-it-Right-Proposal-to-Introduce-Discretionary-Licensing-Schemes-Consultation.pdf",
    },
    { label: "Bexley Council: Housing", url: "https://www.bexley.gov.uk/services/housing" },
    { label: "ONS Census 2021: TS054 Tenure (Nomis)", url: "https://www.nomisweb.co.uk/datasets/c2021ts054" },
    { label: "ONS Census 2021: TS044 Accommodation type (Nomis)", url: "https://www.nomisweb.co.uk/datasets/c2021ts044" },
    {
      label: "VOA: Council Tax Stock of Properties 2025",
      url: "https://www.gov.uk/government/statistics/council-tax-stock-of-properties-2025",
    },
  ],
  contextOverride: {
    propertyContext:
      "In Bexley, 44.2% of households live in a semi-detached house, the highest share of any London borough (Census 2021). Of the borough's council tax properties, 37.0% were built in the 1930s (VOA 2025).",
    landlordContext:
      "Private renting in Bexley more than doubled between 2001 and 2011, a 103% rise, yet Census 2021 put it at 15.3% of households, the smallest share of any London borough.",
  },
};

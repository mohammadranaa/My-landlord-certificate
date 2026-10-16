import type { BoroughLocal } from "./types";

export const enfield: BoroughLocal = {
  slug: "enfield",
  checkedOn: "2026-10-16",
  council: {
    name: "London Borough of Enfield",
    housingUrl: "https://www.enfield.gov.uk/services/housing/information-for-landlords",
    licensingUrl: "https://www.enfield.gov.uk/services/housing/private-rented-property-licensing",
  },
  licensing: [
    {
      name: "The London Borough of Enfield Designation of Areas for Selective Licensing 2026",
      type: "Selective",
      area:
        "17 of 25 wards in two designations. Designation One: Bowes, Brimsdown, Bullsmoor, Carterhatch, Edmonton Green, Enfield Lock, Haselbury, Jubilee, Lower Edmonton, Ponders End, Southbury, Upper Edmonton and Whitewebbs. Designation Two: New Southgate, Palmers Green, Southgate and Town",
      appliesTo:
        "Privately rented homes let to one or two people or to a single family household, unless the property needs an HMO licence or is exempt",
      period: "1 September 2026 to 31 August 2031",
      status: "In force",
    },
    {
      name: "Selective licensing scheme 2021 (replaced by the 2026 scheme)",
      type: "Selective",
      area: "14 of the borough's previous 21 wards",
      appliesTo:
        "Single-household lets. Licences granted under it stay valid until the expiry date shown on the licence",
      period: "1 September 2021 to 31 August 2026",
      status: "Expired",
    },
    {
      name: "The London Borough of Enfield Designation of an Area for Additional Licensing of Houses in Multiple Occupation 2025",
      type: "Additional HMO",
      area: "Whole borough",
      appliesTo:
        "HMOs of 3 or 4 people in 2 or more households sharing amenities that are not mandatory HMOs. Section 257 converted blocks of flats are excluded",
      period: "1 September 2025 to 31 August 2030",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo:
        "5 or more people forming more than one household and sharing amenities, including some purpose-built flats occupied this way",
      period: "National scheme, no end date",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Households renting privately", value: "29.3% (London 30.0%)", source: "Census 2021" },
    { label: "Homes built 1919 to 1939", value: "35.2% (London 22.2%)", source: "VOA 2025" },
    {
      label: "Private lets predicted to have a serious hazard",
      value: "17% (national average 10%)",
      source: "Enfield Council, Metastreet modelling 2025",
    },
    {
      label: "Selective licences granted under the 2021 scheme",
      value: "More than 22,000",
      source: "Enfield Council Cabinet report, April 2026",
    },
  ],
  overview: [
    "Private lets outside all three Enfield schemes fall into two groups. The first is lets to one or two people or a single family in the 8 wards the selective scheme does not cover. The second is lets that are exempt.",
    "The selective scheme that started on 1 September 2026 replaced one that ended on 31 August 2026 and was drawn on the borough's previous 21 wards. Because the two areas are mapped on different ward boundaries, an old ward name is not a safe guide. Check the address on the council's selective licensing map, or ask the Private Rented Housing team at prsh@enfield.gov.uk to confirm whether a licence is needed.",
    "Applications go through the council's online property licensing portal, run on Metastreet. The council's April 2026 Cabinet report says its Private Rented Housing team has served over 1,275 statutory notices and brought 37 prosecutions for licensing and housing offences.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Enfield: the council's view on wiring over 25 years old",
      body: [
        "Enfield's guidance on fire safety in HMOs sets a tighter expectation for older installations than the five-year minimum. It says wiring more than 25 years old \"will most likely need to be inspected every year\". That is council guidance rather than law, but it shows what an officer reviewing a licensed HMO may look for in the report's recommended interval.",
        "A large share of Enfield's housing is the 1930s stock described above. Take a house of that age whose installation has not been renewed in the last 25 years. Once it is let as a licensed HMO, the council's guidance says yearly inspection will most likely be needed.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety in Enfield",
      body: [],
    },
    epc: {
      heading: "EPCs in Enfield",
      body: [],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Enfield: fire tops the council's inspection findings",
      body: [
        "Fire was the most common hazard type Enfield officers found in more than 7,600 compliance inspections, at 37% of the 3,906 hazards recorded, ahead of damp and mould at 20%. The council used the figures in its April 2026 case for selective licensing.",
        "Shared houses are inspected, jointly with the London Fire Brigade where necessary, against the council's own HMO fire guidance, which follows LACORS.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Enfield: the appliances the HMO Standards name",
      body: [
        "Enfield's HMO Standards name the appliances they mean: kettles, microwaves, toasters and other landlord-provided items in common areas need PAT testing.",
      ],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Enfield",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical fault finding in Enfield",
      body: [],
    },
    "fuse-box-installation": {
      heading: "Consumer unit upgrades in Enfield",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Enfield",
      body: [],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Enfield",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler replacement in Enfield: excess cold on the inspection record",
      body: [
        "Excess cold made up 9% of the hazards Enfield officers recorded in their compliance inspections, so a heating system that cannot warm the home can become an inspection finding. In shared houses, the council's HMO Standards also prohibit portable paraffin, oil-fired and bottled-gas heaters as a stopgap.",
      ],
    },
    "fire-safety-certificate": {
      heading: "Fire safety certificates in Enfield",
      body: [],
    },
    "fire-alarm-installation": {
      heading: "Fire alarms in Enfield: when a single let has become a shared house",
      body: [
        "Between January 2023 and April 2025, Enfield officers investigated more than 3,000 addresses suspected of being unlicensed or of being run as an HMO under a selective licence.",
        "Once a house is let as a shared house, the council's HMO fire guidance expects mains-powered linked detection with a heat alarm in the kitchen. Battery-only alarms fitted for a family let will not meet it.",
        "The change of use also needs planning permission under the borough-wide Article 4 direction in force since 2013. Where the HMO use is unauthorised, the council normally grants a reduced-term licence, usually two years, while the landlord gets consent or returns the house to single-family use.",
      ],
    },
    "fire-door-certificate": {
      heading: "Fire door inspections in Enfield",
      body: [],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguisher testing in Enfield",
      body: [],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Enfield",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Enfield",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Enfield",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "Does a selective licence from Enfield's 2021 scheme still count?",
        answer:
          "Yes, until the expiry date shown on it. The 2021 scheme ended on 31 August 2026, but licences granted under it stay valid to their own expiry. If the address needs a licence under the 2026 scheme, the council asks you to renew about two months before that date and upload a current EICR.",
      },
    ],
  },
  sources: [
    {
      label: "Enfield Council: Private rented property licensing",
      url: "https://www.enfield.gov.uk/services/housing/private-rented-property-licensing",
    },
    {
      label: "Enfield Council: Selective licensing scheme",
      url: "https://www.enfield.gov.uk/services/housing/selective-licensing-scheme",
    },
    {
      label: "Enfield Council: Houses in multiple occupation",
      url: "https://www.enfield.gov.uk/services/housing/houses-in-multiple-occupation",
    },
    {
      label: "Enfield Council: Information for landlords",
      url: "https://www.enfield.gov.uk/services/housing/information-for-landlords",
    },
    {
      label: "Enfield Council: Selective licensing designation 2026 (notice)",
      url: "https://www.enfield.gov.uk/__data/assets/pdf_file/0030/129972/Selective-licensing-scheme-designation-Housing.pdf",
    },
    {
      label: "Enfield Council: Additional HMO licensing designation 2025 (public notice)",
      url: "https://www.enfield.gov.uk/__data/assets/pdf_file/0017/91313/Public-notice-additional-licensing-Housing.pdf",
    },
    {
      label: "Enfield Council Cabinet: Selective Licensing Scheme report (April 2026)",
      url: "https://governance.enfield.gov.uk/documents/s113155/Selective%20Licensing%20Scheme%20-%20Private%20Rented%20Housing%20Report.pdf",
    },
    {
      label: "Enfield Council Cabinet: Appendix 4, housing evidence (Metastreet, 2025)",
      url: "https://governance.enfield.gov.uk/documents/s113159/Appendix%204.pdf",
    },
    {
      label: "Enfield Council Cabinet: Appendix 7, selective licence conditions (March 2026)",
      url: "https://governance.enfield.gov.uk/documents/s113162/Appendix%207.pdf",
    },
    {
      label: "Enfield Council: HMO Standards (revised March 2021)",
      url: "https://www.enfield.gov.uk/__data/assets/pdf_file/0025/3589/hmo-minimum-standards-housing.pdf",
    },
    {
      label: "Enfield Council: Fire safety in houses in multiple occupation",
      url: "https://www.enfield.gov.uk/__data/assets/pdf_file/0021/63831/Fire-safety-in-HMOs-guidance-Housing.pdf",
    },
    {
      label: "Enfield Council: Article 4 directions",
      url: "https://www.enfield.gov.uk/services/planning/article-4-directions",
    },
    {
      label: "Enfield Council: Conservation areas",
      url: "https://www.enfield.gov.uk/services/planning/conservation-areas",
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
      "Enfield's housing leans inter-war rather than Victorian: 28.3% of council tax properties date from the 1930s alone, against 16.0% across London, and only 10.7% predate 1900 (VOA 2025). Most households live in houses, with 28.9% of households in terraces and 24.8% in semi-detached homes, while purpose-built flats house 30.4%, against 40.3% London-wide (Census 2021).",
    landlordContext:
      "Private renting grew from 24% of Enfield's homes in 2011 to 30% in 2021, and is highest in eastern wards such as Haselbury, Jubilee and Enfield Lock.",
  },
};

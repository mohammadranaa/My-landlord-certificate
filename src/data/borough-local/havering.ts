import type { BoroughLocal } from "./types";

export const havering: BoroughLocal = {
  slug: "havering",
  checkedOn: "2026-10-16",
  council: {
    name: "London Borough of Havering",
    housingUrl: "https://www.havering.gov.uk/information-landlords",
    licensingUrl: "https://www.havering.gov.uk/propertylicensing",
  },
  licensing: [
    {
      name: "London Borough of Havering Designation for Additional Licensing of Houses in Multiple Occupation No.2 2026",
      type: "Additional HMO",
      area: "Whole borough (all 20 wards)",
      appliesTo:
        "HMOs occupied by 3 or 4 people forming 2 or more households, including HMO flats in purpose-built blocks (HMOs of 5 or more come under mandatory licensing)",
      period: "18 March 2026 to 17 March 2031",
      status: "In force",
    },
    {
      name: "Designation of an Area for Selective Licensing No.2 2026",
      type: "Selective",
      area:
        "7 wards: Beam Park, Harold Wood, Rainham & Wennington, Rush Green & Crowlands, Squirrels Heath, St Albans and St Edwards",
      appliesTo:
        "Privately rented houses and flats let to a single household or to 1 or 2 unrelated occupants (licensable HMOs, social landlord lets and other exempt tenancies excluded)",
      period: "18 March 2026 to 17 March 2031",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo: "Properties let to 5 or more people from 2 or more households sharing a kitchen, bathroom or toilet",
      period: "National scheme, no end date",
      status: "In force",
    },
    {
      name: "Selective licensing scheme designated October 2020",
      type: "Selective",
      area: "Former Brooklands and Romford Town wards",
      appliesTo: "Privately rented homes in those wards, other than licensable HMOs",
      period: "25 January 2021 to 24 January 2026",
      status: "Expired",
    },
  ],
  stockFacts: [
    {
      label: "Households renting privately",
      value: "15.8%, second-lowest of the 33 London authorities (London 30.0%)",
      source: "Census 2021",
    },
    { label: "Households in semi-detached houses", value: "41.2% (London 18.6%)", source: "Census 2021" },
    { label: "Homes built 1930 to 1939", value: "31.9% (London 16.0%)", source: "VOA 2025" },
    {
      label: "Private rented share of dwellings by ward",
      value: "From 44.6% in St Albans to 9.1% in Cranham",
      source: "Havering Council 2024 stock model",
    },
  ],
  overview: [
    "Both of Havering's discretionary licensing schemes started on 18 March 2026, after Cabinet approved them on 10 December 2025. Every HMO of three or more people now needs a licence wherever it is in the borough. Single-household lets need one only in 7 of the 20 wards; Upminster, Cranham, Emerson Park, Elm Park and the other 9 wards have no selective licensing.",
    "Licences are applied for on the council's own system at housingpropertylicence.havering.gov.uk, which needs an account separate from My Havering; one login covers all your rented properties. An HMO application needs a gas safety certificate, an EPC and floor plans from the start. The council also publishes a public register of licences and temporary exemption notices.",
    "The council's 2024 stock model estimates 864 HMOs across all 20 wards.",
    "Planning is separate: since 13 July 2016, two Article 4 directions have required permission to turn a flat, terraced or semi-detached house into a small HMO.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Havering: four wards new to selective licensing",
      body: [
        "Havering's 2021 selective scheme covered only the old Brooklands and Romford Town wards, which are now part of Rush Green & Crowlands, St Albans and St Edwards. Lets in Beam Park, Harold Wood, Rainham & Wennington and Squirrels Heath were outside it. A family let there may therefore be licensed for the first time under the 2026 scheme.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety in Havering: part of the HMO application from the start",
      body: [
        "Havering asks for a valid gas safety certificate when an HMO licence application is made, together with the EPC and floor plans. The electrical certificate, tenancy papers and fire evacuation plan come later, when the council asks for them.",
      ],
    },
    epc: {
      heading: "EPCs in Havering: part of the new-tenancy pack on selective lets",
      body: [
        "At the start of every new tenancy on a selectively licensed Havering let, condition 12.1 requires the tenant to be given an EPC rated at or above the legal minimum and a valid gas safety certificate. The tenant must also be given a copy of the licence, or the licence must be displayed in a communal area.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Havering: a condition for three- and four-person shares",
      body: [
        "Havering's 2018 accommodation standards expected an up-to-date fire risk assessment in larger HMOs, but condition 12 of the additional licence goes further. Every HMO licensed under that scheme needs a fire risk assessment under the Regulatory Reform (Fire Safety) Order 2005, with action taken on its findings. The scheme covers shares of three or four people in all 20 wards.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Havering",
      body: [],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Havering",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical fault finding in Havering",
      body: [],
    },
    "fuse-box-installation": {
      heading: "Consumer units in Havering",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Havering",
      body: [],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Havering",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler installation in Havering",
      body: [],
    },
    "fire-safety-certificate": {
      heading: "Fire safety certificates in Havering HMOs: a written timescale for defects",
      body: [
        "Under condition 12.4 of Havering's additional HMO licence, any defect noted on a fire safety certificate must be put right promptly, to a timescale the council agrees in writing. The certificates in question cover the fire alarm, emergency lighting and fire-fighting equipment, and go to the council with the fire risk assessment when it asks.",
        "When a test certificate records a fault, agree the repair date with the council in writing rather than leaving it to the next service.",
      ],
    },
    "fire-alarm-installation": {
      heading: "Fire alarms in Havering",
      body: [],
    },
    "fire-door-certificate": {
      heading: "Fire doors in Havering HMOs: the kitchen door",
      body: [
        "Havering's private rented accommodation standards (January 2018) say the internal kitchen door in an HMO should be fire rated, so include it in any fire door survey of a shared house.",
      ],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguishers in Havering",
      body: [],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Havering",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Havering",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Havering",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "Does a Havering licence mean the council has checked the wiring?",
        answer:
          "No. Havering says it does not provide free surveys or advice to landlords and may not inspect a property before issuing a licence. A pre-application visit with advice can be requested, but an extra charge may be made. A granted licence is therefore no evidence that the electrics have been tested; the EICR is that record.",
      },
    ],
    epc: [
      {
        question: "Is Gidea Park a conservation area?",
        answer:
          "Yes. Gidea Park was designated in 1970 and extended in 1989. It is an early 20th-century garden suburb with a smaller inter-war modern-style development, so external changes an EPC recommends may need consent there.",
      },
    ],
  },
  sources: [
    { label: "Havering Council: Information for landlords", url: "https://www.havering.gov.uk/information-landlords" },
    { label: "Havering Council: Private rented property licensing", url: "https://www.havering.gov.uk/propertylicensing" },
    {
      label: "Havering Council: Licence application documents",
      url: "https://www.havering.gov.uk/information-landlords/private-rented-property-licensing/2",
    },
    {
      label: "Havering Council: Public register and reporting an unlicensed property",
      url: "https://www.havering.gov.uk/information-landlords/private-rented-property-licensing/3",
    },
    {
      label: "Havering Council: Additional HMO licensing designation No.2 2026",
      url: "https://www.havering.gov.uk/downloads/file/7263/landlord-licensing-scheme-3-selective-designation",
    },
    {
      label: "Havering Council: Selective licensing designation No.2 2026",
      url: "https://www.havering.gov.uk/downloads/file/7262/landlord-licensing-scheme-2-selective-designation",
    },
    {
      label: "Havering Council: Selective licensing designation notice (October 2020)",
      url: "https://www.havering.gov.uk/downloads/file/4220/public-notice---hmo---designation-of-an-area-for-selective-licensing---october-2020",
    },
    {
      label: "Havering Council: Additional HMO licence conditions, October 2025 (Internet Archive copy)",
      url: "https://web.archive.org/web/20260613213327/https://democracy.havering.gov.uk/documents/s81609/08.9%20Appendix%209%20Additional%20HMO%20Licence%20Conditions.pdf",
    },
    {
      label: "Havering Council: Selective licence conditions, October 2025 (Internet Archive copy)",
      url: "https://web.archive.org/web/20260613222106/https://democracy.havering.gov.uk/documents/s81610/08.10%20Appendix%2010%20Selective%20Licence%20Conditions.pdf",
    },
    {
      label: "Havering Council: Private rented property accommodation standards (2018)",
      url: "https://www.havering.gov.uk/downloads/file/1842/havering-private-rented-property-accommodation-standards",
    },
    {
      label: "Havering Council: Licensing consultation and evidence pack (2025)",
      url: "https://consultation.havering.gov.uk/premises-licences/lbh-selective-and-additional-licensing/",
    },
    { label: "Havering Council: Article 4 directions", url: "https://www.havering.gov.uk/planning-3/article-4-directions/2" },
    { label: "Havering Council: Conservation areas", url: "https://www.havering.gov.uk/planning-3/heritage/2" },
    { label: "ONS Census 2021: TS054 Tenure (Nomis)", url: "https://www.nomisweb.co.uk/datasets/c2021ts054" },
    { label: "ONS Census 2021: TS044 Accommodation type (Nomis)", url: "https://www.nomisweb.co.uk/datasets/c2021ts044" },
    {
      label: "VOA: Council Tax Stock of Properties 2025",
      url: "https://www.gov.uk/government/statistics/council-tax-stock-of-properties-2025",
    },
  ],
  contextOverride: {
    propertyContext:
      "Havering is mostly suburban houses built either side of the Second World War. About three in four households (76.7%) live in a house, while 19.8% live in purpose-built flats and only 1.7% in flats or bedsits in converted or shared houses (Census 2021). Of 108,670 council tax properties, 28.0% were built between 1945 and 1964 (VOA 2025).",
    landlordContext:
      "Private renting in Havering grew from 10,337 households at the 2011 Census to 16,019 in 2021, and the council's 2024 model estimates 21,082 private rented dwellings.",
  },
};

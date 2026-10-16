import type { BoroughLocal } from "./types";

export const greenwich: BoroughLocal = {
  slug: "greenwich",
  checkedOn: "2026-10-16",
  council: {
    name: "Royal Borough of Greenwich",
    housingUrl: "https://www.royalgreenwich.gov.uk/housing/letting-out-your-property",
    licensingUrl:
      "https://www.royalgreenwich.gov.uk/housing/letting-out-your-property/check-if-you-need-private-rented-property-licence",
  },
  licensing: [
    {
      name: "Royal Borough of Greenwich Designation of an Area for Selective Licensing 2022",
      type: "Selective",
      area:
        "Parts of the pre-2022 Plumstead, Glyndon, Shooters Hill, Woolwich Common and Woolwich Riverside wards (now parts of Plumstead and Glyndon, Plumstead Common, Shooters Hill, Woolwich Common, Woolwich Arsenal and Woolwich Dockyard)",
      appliesTo:
        "Houses and flats let to a single household that do not need an HMO licence (registered social landlord lets and statutory exemptions excluded)",
      period: "1 October 2022 to 1 October 2027",
      status: "In force",
    },
    {
      name: "Royal Borough of Greenwich Designation for an Area for Additional Licensing of Houses in Multiple Occupation 2023",
      type: "Additional HMO",
      area: "Whole borough",
      appliesTo:
        "HMOs of 3 or more people from 2 or more households that are not mandatory HMOs, including section 257 converted blocks below the 1991 Building Regulations standard where more than a third of the flats are let short-term",
      period: "1 January 2024 to 31 December 2028",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo: "HMOs of 5 or more people from 2 or more households sharing a toilet, bathroom or kitchen",
      period: "National scheme, no end date",
      status: "In force",
    },
    {
      name: "Proposed expanded selective licensing scheme (2026 consultation)",
      type: "Selective",
      area: "18 wards, one of them in part (southern Woolwich Arsenal); six areas left out",
      appliesTo:
        "Single-household private lets: about 22,500 homes, around 70% of the borough's private rented sector; would replace the 2022 scheme",
      period:
        "Proposal only as of October 2026: consulted 21 July to 12 October 2026, Cabinet decision due towards the end of 2026, could start from spring 2027",
      status: "Consultation",
    },
  ],
  stockFacts: [
    {
      label: "Licences on the council's public register (July 2026)",
      value: "4,890: 3,354 selective, 829 mandatory HMO, 707 additional HMO",
      source: "Royal Borough of Greenwich",
    },
    {
      label: "Selective-area properties that hold the licence they need",
      value: "About 60%",
      source: "Royal Borough of Greenwich, 2026",
    },
    {
      label: "Private rented homes outside known HMOs with at least one serious hazard",
      value: "About 17.5% (national benchmark 9% to 10%)",
      source: "Royal Borough of Greenwich estimate, 2025/26",
    },
  ],
  overview: [
    "Selective licensing in Greenwich covers single-household lets in parts of Woolwich, Plumstead and Shooters Hill until 1 October 2027, and the council has a postcode checker for the exact streets. Shared homes of three or more people from two or more households need an additional HMO licence anywhere in the borough until 31 December 2028.",
    "As of October 2026, a larger selective scheme is only a proposal. The council consulted from 21 July to 12 October 2026 on 18 wards, one of them in part, and Cabinet is due to decide towards the end of 2026. The council says a new scheme could start from spring 2027 if approved.",
    "Turning a house into a shared home of three or four people needs two approvals: an additional HMO licence, and planning permission under the borough-wide Article 4 direction made in September 2017 and in force since 27 September 2018. Applications go through the council's Metastreet portal, and the Private Rented Property Licensing team answers on 020 8921 8152.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Greenwich: what council inspectors record",
      body: [
        "From January 2024 to December 2025, Greenwich officers inspected 4,130 privately rented homes outside known HMOs and recorded 4,762 hazards, 1,226 of them severe. Electrical hazards made up 7.0% of the total.",
        "Where a report calls for remedial work in a licensed Greenwich HMO, licence condition 7 says the work must be done by an electrician on the Competent Person Register working to BS 7671. Notifiable work also needs a Building Regulations certificate, so keep it with the EICR.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety in Greenwich HMOs: check the meter as well",
      body: [
        "Greenwich's HMO licence condition 6.2 reaches past the gas installation to how the fuel is paid for: neither gas nor electricity may be supplied through any form of prepayment meter. It sits in the same January 2026 conditions as the gas servicing duty, but a gas safety check looks at appliances, pipework and flues, not at the meter's payment type. A passed check therefore says nothing about condition 6.2, which is judged separately.",
      ],
    },
    epc: {
      heading: "EPCs in Greenwich",
      body: [],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Greenwich: small shares back under licensing",
      body: [
        "Greenwich's first borough-wide additional HMO scheme ended on 30 September 2022, and the current one did not start until 1 January 2024, about 15 months later. An independent review in October 2022 estimated, from BRE data, that about 3,500 HMOs, or 84%, had not been licensed under the first scheme.",
        "Among that unlicensed 84%, any three- or four-person share needs a licence now, and with it the HMO fire condition, judged against the LACORS guide. If your share went unlicensed through that gap, its fire precautions may never have been measured against that condition, which is where an assessment starts.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Greenwich: recall checks on single lets",
      body: [
        "Greenwich's January 2026 selective licence conditions ask landlords to check the appliances they supply for manufacturer recalls and to register new appliances with the manufacturer. A PAT visit leaves you with an itemised list of those appliances, which is the list to check against recall notices.",
      ],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Greenwich",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical fault finding in Greenwich",
      body: [],
    },
    "fuse-box-installation": {
      heading: "Consumer unit replacement in Greenwich",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Greenwich HMOs: test it with the EICR",
      body: [
        "Greenwich's HMO fire and safety guidance says the EICR can also cover the fire detection and emergency lighting systems, not only the wiring, sockets and consumer unit. Where an HMO has emergency lighting, ask for it to be tested at the same visit as the EICR, since the HMO licence application needs its British Standard test report as well.",
      ],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Greenwich",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler installation in Greenwich",
      body: [],
    },
    "fire-safety-certificate": {
      heading: "Fire safety in Greenwich HMOs: a fire must be reported within 72 hours",
      body: [
        "Greenwich's HMO licence conditions require the licence holder to report any fire at the property to the council within 72 hours.",
      ],
    },
    "fire-alarm-installation": {
      heading: "Fire alarm installation in Greenwich",
      body: [],
    },
    "fire-door-certificate": {
      heading: "Fire doors in Greenwich",
      body: [],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguisher servicing in Greenwich",
      body: [],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Greenwich",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Greenwich",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Greenwich",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "Does a Greenwich let outside the selective area send its EICR to the council?",
        answer:
          "Only if it is an HMO, because the EICR goes in with the HMO licence application. Shares of three or more people from two or more households need that licence borough-wide; a single-household let outside the selective area needs no selective licence as of October 2026. The proposed 18-ward scheme would bring most single lets into licensing if Cabinet approves it.",
      },
    ],
  },
  sources: [
    {
      label: "Royal Borough of Greenwich: Letting out your property",
      url: "https://www.royalgreenwich.gov.uk/housing/letting-out-your-property",
    },
    {
      label: "Royal Borough of Greenwich: Check if you need a private rented property licence",
      url: "https://www.royalgreenwich.gov.uk/housing/letting-out-your-property/check-if-you-need-private-rented-property-licence",
    },
    {
      label: "Royal Borough of Greenwich: Apply for a private rented property licence",
      url: "https://www.royalgreenwich.gov.uk/housing/letting-out-your-property/apply-private-rented-property-licence/apply-private-rented",
    },
    {
      label: "Royal Borough of Greenwich: Selective licensing designation 2022 (public notice)",
      url: "https://www.royalgreenwich.gov.uk/sites/default/files/2025-09/selective-licensing-designation-of-area-public%20notice.pdf",
    },
    {
      label: "Royal Borough of Greenwich: Additional HMO licensing designation 2023 (public notice)",
      url: "https://www.royalgreenwich.gov.uk/sites/default/files/2025-09/additional-licensing-designation-of-area-public-notice.pdf",
    },
    {
      label: "Royal Borough of Greenwich: Additional licensing independent review (October 2022)",
      url: "https://www.royalgreenwich.gov.uk/sites/default/files/2025-09/additional-licensing-independent-review-report-Oct-2022.pdf",
    },
    {
      label: "Royal Borough of Greenwich: Selective licensing 2026 consultation",
      url: "https://communityconversations.royalgreenwich.gov.uk/community-safety-licensing/selective-licensing-2026-consultation",
    },
    {
      label: "Royal Borough of Greenwich: Selective licensing consultation evidence report (2026)",
      url: "https://hdp-eu-prod-app-rbg-community-files.s3.eu-west-1.amazonaws.com/2917/8464/8656/RBG_Selective_Licensing_Consultation__Evidence_Report_2026.pdf",
    },
    {
      label: "Royal Borough of Greenwich: HMO licence conditions (January 2026)",
      url: "https://www.royalgreenwich.gov.uk/sites/default/files/2026-01/HMO-licence-conditions-january-2026.pdf",
    },
    {
      label: "Royal Borough of Greenwich: Selective licence conditions (January 2026)",
      url: "https://www.royalgreenwich.gov.uk/sites/default/files/2026-01/selective-licence-conditions-january-2026.pdf",
    },
    {
      label: "Royal Borough of Greenwich: HMO fire and safety guidance",
      url: "https://www.royalgreenwich.gov.uk/info/200290/multiple_occupancy_homes/938/hmo_fire_and_safety_guidance",
    },
    {
      label: "Royal Borough of Greenwich: Landlord licence public register",
      url: "https://www.royalgreenwich.gov.uk/housing/letting-out-your-property/search-landlord-licence-public-register",
    },
    {
      label: "Royal Borough of Greenwich: Current and proposed Article 4 directions",
      url: "https://www.royalgreenwich.gov.uk/planning-and-building-control/planning-policy-and-strategy/areas-extra-planning-restrictions/current-proposed-article4-directions",
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
      "Almost one in five Greenwich households rents from the council (18.6%, London 12.1%, Census 2021). Over a quarter of homes date from 2000 or later: council tax records place 26.3% of properties in the 2000 to 2025 build period (VOA 2025). Purpose-built flats are the most common type of home, housing 43.1% of households at the 2021 Census.",
    landlordContext:
      "The council estimates about 32,242 privately rented homes in Greenwich in 2025, roughly 26% of the stock, up from about 21% in 2011.",
  },
};

import type { BoroughLocal } from "./types";

export const brent: BoroughLocal = {
  slug: "brent",
  checkedOn: "2026-10-16",
  council: {
    name: "Brent Council",
    housingUrl: "https://www.brent.gov.uk/housing/landlords/property-licensing",
    licensingUrl: "https://www.brent.gov.uk/housing/landlords/property-licensing",
  },
  licensing: [
    {
      name: "Designation of an Area for Additional Licensing of HMOs 2026 (Notice 3/2025)",
      type: "Additional HMO",
      area: "Whole borough, all 22 wards including Wembley Park",
      appliesTo:
        "HMOs of 3 or 4 people forming 2 or more households; section 257 converted blocks below Building Regulations standards and less than two-thirds owner-occupied; HMOs in purpose-built blocks of 3 or more flats",
      period: "2 February 2026 to 2 February 2031",
      status: "In force",
    },
    {
      name: "Designation for an Area for Selective Licensing No. 1/2023",
      type: "Selective",
      area: "Dollis Hill, Harlesden & Kensal Green, Willesden Green",
      appliesTo:
        "Privately let homes that do not need an HMO licence, such as a home let to one household or to one or two people",
      period: "1 August 2023 to 31 July 2028",
      status: "In force",
    },
    {
      name: "Designation of an Area for Selective Licensing 2023 (No. 2/2023)",
      type: "Selective",
      area:
        "18 wards: Alperton, Barnhill, Brondesbury Park, Cricklewood & Mapesbury, Kenton, Kilburn, Kingsbury, Northwick Park, Preston, Queens Park, Queensbury, Roundwood, Stonebridge, Sudbury, Tokyngton, Welsh Harp, Wembley Central, Wembley Hill",
      appliesTo:
        "Privately let homes that do not need an HMO licence, such as a home let to one household or to one or two people",
      period: "From 1 April 2024, running to 2029",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo: "HMOs of 5 or more people forming 2 or more households and sharing facilities",
      period: "National scheme, operated in Brent since 2006",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Households renting privately", value: "36.0% (London 30.0%)", source: "Census 2021" },
    {
      label: "Households in flats in converted or shared houses",
      value: "16.5% (London 11.1%)",
      source: "Census 2021",
    },
    { label: "Homes built before 1945", value: "60.0% (London 51.4%)", source: "VOA 2025" },
    { label: "Homes built in 2000 or later", value: "23.0% (London 17.9%)", source: "VOA 2025" },
  ],
  overview: [
    "Brent licenses private lets in three layers at once. Mandatory licensing covers HMOs of five or more people, and a borough-wide additional scheme covers HMOs of three or four. Selective licensing covers other private lets in 21 of the 22 wards, from a family house to a flat let to a couple.",
    "The ward left out of selective licensing is Wembley Park. When Brent set its 2023 designations, it found the ward did not meet the criteria and estimated that 98% of its homes were privately rented, mostly in build-to-rent blocks.",
    "Smaller shared homes have come back into licensing after a break. The earlier additional scheme ended on 31 January 2025, and the current one started on 2 February 2026. A three- or four-person HMO that went unlicensed during 2025 therefore needs a licence now.",
    "A single online form handles all three licence types, and only the landlord or the managing agent can apply.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Brent: whole-installation reports, HMOs and single lets",
      body: [
        "Under condition 30 of the HMO conditions Brent's Cabinet approved in October 2025, the council can demand a periodic report on the whole of the electrical installation at 28 days' notice. That 28-day demand is a licence condition, separate from the national 7-day request rule. The report must be dated within the last five years, and every Code 1 and Code 2 item must then be carried out within 28 days of it.",
        "In a converted house let as an HMO, make sure the inspection covers any landlord's supply to the hall and stairs as well as each letting. That way the report matches the condition's \"whole of the electrical installations\" wording.",
        "Single-household lets carry the duty too. The conditions for Brent's second 2023 selective designation were amended to include the mandatory electrical installation conditions. As a result, a house let to one family in Kingsbury, Kilburn or Wembley Central has an EICR requirement in its licence, not only in tenancy law.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety in Brent: the certificate comes before a selective licence",
      body: [
      ],
    },
    epc: {
      heading: "EPCs in Brent: new conservation boundaries and the HMO display rule",
      body: [
        "Brent's May 2024 conservation review moved the planning lines for some upgrades. It designated Kensal Rise as a conservation area and extended the boundaries of Brondesbury, Harlesden, Mapesbury, Queen's Park and Willesden Green. Queen's Park, Kensal Rise, Mapesbury and Willesden Green also have Article 4 directions on householder alterations.",
        "A house that sat outside a boundary when its last EPC was lodged may now need consent for some external changes the report recommended, such as replacement windows.",
        "For single lets licensed under Brent's second 2023 selective designation, in wards such as Kilburn or Preston, the licence conditions include information on minimum energy efficiency standards. Check that the rating is E or above before you apply.",
        "In HMOs, condition 36 asks for the EPC for new tenancies to be displayed in a common area, preferably near the entrance. A renewed EPC therefore means replacing the copy on display.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Brent: overcrowding and the LACoRS benchmark",
      body: [
        "Overcrowding is a Brent factor that a fire risk assessment needs to reflect. The council's evidence pack, using Census 2021, says 24.7% of privately rented households in Brent are overcrowded, against 15% across London. A crowded home puts more people on the same stairs and exits than its layout was planned for, so give the assessor the real number of occupants.",
        "Where an HMO falls under the Fire Safety Order, condition 22 requires the assessment to be carried out by a competent person. Condition 29 makes the LACoRS fire safety guidance the reference point for deciding whether precautions are adequate. Ask for findings set against LACoRS, so the action plan uses the same benchmark as the licence.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Brent: a declaration before the HMO licence",
      body: [
        "Brent asks about appliances before it grants an HMO licence. Under condition 11, the licence holder must declare the condition of supplied electrical appliances at the point of application.",
        "The licence holder must then provide appliance test reports and a PAT report within 14 days of a demand. A PAT report dated before you apply gives that declaration a record to rest on.",
      ],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Brent",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical fault finding in Brent",
      body: [],
    },
    "fuse-box-installation": {
      heading: "Consumer unit upgrades in Brent",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Brent HMOs: after the council reports a fault",
      body: [
        "Condition 22 names emergency lighting systems among the fire precautions a Brent HMO licence holder must maintain at all times. Separately, under condition 23, the council can demand a new test or servicing report on the fire systems and means of escape. The report is due within 14 days of the council notifying the landlord of damage or disrepair.",
        "Where emergency lighting lights the escape route, treat a fault the council reports as needing both a repair and a fresh test record.",
      ],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Brent",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler installation in Brent",
      body: [],
    },
    "fire-safety-certificate": {
      heading: "Fire safety certificates in Brent: servicing the means of escape",
      body: [
        "An annual fire safety service in a Brent HMO covers more than the alarm panel. Under condition 23, fire detection systems, means of escape and fire-fighting equipment must all be serviced every year by a registered, qualified person.",
        "Ask for one dated record that names all three, so you can show that each part of the condition was met.",
        "The council inspects often. Citing an NRLA report covering 2021 to 2023, its 2025 evidence pack ranks Brent fourth nationally for inspections, with 3,093.",
      ],
    },
    "fire-alarm-installation": {
      heading: "Fire alarm systems in Brent HMOs: a panel fault is a licence issue",
      body: [
        "In a Brent HMO with an automatic fire alarm, a fault light on the panel is a licence matter, not just a repair job. Condition 22 lists automatic fire alarm systems among the fire precautions that must be kept in full working order at all times.",
        "For smoke alarms, condition 21 says hard-wired mains alarms with battery back-up should be provided, so a shared house relying on battery-only alarms is below the council's stated expectation.",
      ],
    },
    "fire-door-certificate": {
      heading: "Fire door surveys in Brent HMOs: from the application to the locks",
      body: [
        "Fire doors are one of the safety provisions a Brent HMO application asks you to list, so a survey before applying tells you which doors on the escape route are fire doors and which are not.",
        "Locks are covered by condition 25: the main entrance and exit doors, and every unit door onto a common area, must open from the inside without a key. A keyed deadlock on a bedroom door in a shared house breaches it, however good the door.",
      ],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguishers in Brent",
      body: [],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Brent",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Brent",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Brent",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "My rental is in Wembley Park. Does a Brent licence condition still cover its EICR?",
        answer:
          "Only if the home is let as an HMO. A home shared by three or more people from two or more households needs an additional or mandatory HMO licence, and condition 30 then lets Brent demand the report. A flat let to one household has no licence condition on electrics there, only the tenancy-law duty, because Wembley Park is outside both selective designations.",
      },
    ],
    "gas-safety-certificate": [
      {
        question: "When should I renew my gas certificate ahead of a Brent licence renewal?",
        answer:
          "Brent recommends applying to renew at least 60 days before the licence expires, and a late renewal is charged as a new application. If the gas certificate falls due within that 60-day window, book the check early, so the certificate you send with your supporting documents is current.",
      },
    ],
    epc: [
      {
        question: "Is Sudbury Cottages still a conservation area?",
        answer:
          "The national planning dataset still lists it among Brent's conservation areas, more than 20 in all, although the council's 2024 review proposed removing its designation. Confirm its current status with Brent's planning team before relying on the dataset either way.",
      },
    ],
    "fire-risk-assessment": [
      {
        question: "Does a Brent HMO licence count as planning permission?",
        answer:
          "No. Brent says an additional HMO licence does not replace planning permission. Since November 2022, a borough-wide Article 4 direction has required planning permission for a new change of use from a family house (use class C3) to a small HMO (C4). If a house was converted since then, check its planning position before you apply.",
      },
    ],
    "fire-safety-certificate": [
      {
        question: "Does Brent's licensing register show management orders and exemptions?",
        answer:
          "Yes. Alongside licensed properties and licence holders, Brent's Property Licensing Register lists temporary exemption notices and management orders, and a search checks a single address. A buyer or new managing agent can use it to confirm a property's status before taking it on, and tenants and others can report a suspected unlicensed property through an online form.",
      },
    ],
    "fire-alarm-installation": [
      {
        question: "My three-person shared house was unlicensed in 2025. Does it need a licence now?",
        answer:
          "Yes, if it is still let to three or four people from two or more households. Brent's previous additional scheme ended on 31 January 2025, and the current borough-wide scheme began on 2 February 2026. It applies in every ward, Wembley Park included, so the alarm conditions apply to the house once it is licensed.",
      },
    ],
  },
  sources: [
    {
      label: "Brent Council: Property licensing (read via Internet Archive copy, 20 August 2026)",
      url: "https://www.brent.gov.uk/housing/landlords/property-licensing",
    },
    {
      label: "Brent Council: Notice of designation for additional HMO licensing 3/2025",
      url: "https://www.brent.gov.uk/housing/landlords/property-licensing/notice-of-designation-of-an-area-for-additional-licensing-3-2025",
    },
    {
      label: "Brent Council: Notice of designation for selective licensing 1/2023",
      url: "https://www.brent.gov.uk/housing/landlords/property-licensing/notice-of-designation-of-an-area-for-selective-licensing",
    },
    {
      label: "Brent Council: Notice of designation for selective licensing 2/2023",
      url: "https://www.brent.gov.uk/housing/landlords/property-licensing/notice-of-designation-of-an-area-for-selective-licensing-2-2023",
    },
    {
      label: "Brent Cabinet report: Additional HMO Licensing Scheme 2026 (13 October 2025)",
      url: "https://democracy.brent.gov.uk/documents/s153081/10.%20Additional%20HMO%20Licensing%20Scheme%202026.pdf",
    },
    {
      label: "Brent Cabinet: Appendix 7, HMO licence conditions (October 2025)",
      url: "https://democracy.brent.gov.uk/documents/s153070/10g.%20Appendix%207%20-%20Additional%20HMO%20Licence%20Conditions.pdf",
    },
    {
      label: "Brent Cabinet: Appendix 3, Evidence for consultation 2025",
      url: "https://democracy.brent.gov.uk/documents/s153066/10c.%20Appendix%203%20-%20Evidence%20for%20consultation%202025.pdf",
    },
    {
      label: "Brent Cabinet report: Selective licensing designation 2023 (17 July 2023)",
      url: "https://democracy.brent.gov.uk/documents/s134057/12.%20Selective%20licensing%20Designation%202023-2.pdf",
    },
    {
      label: "Brent Cabinet report: Conservation Area Review (28 May 2024)",
      url: "https://democracy.brent.gov.uk/documents/s141987/09.%20Cabinet%20report%20Conservation%20Area%20Review.pdf",
    },
    {
      label: "Planning Data: Brent conservation areas",
      url: "https://www.planning.data.gov.uk/entity.json?dataset=conservation-area&organisation_entity=42",
    },
    {
      label: "Planning Data: Brent Article 4 directions",
      url: "https://www.planning.data.gov.uk/entity.json?dataset=article-4-direction&organisation_entity=42",
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
      "The largest age band in Brent's housing is interwar, not Victorian. VOA 2025 figures put 31.9% of homes in the 1919-39 band, against 22.2% across London, while the pre-1900 share, 20.4%, is close to London's 20.9%. Semi-detached houses hold 22.3% of households and terraces 14.9% (London 18.6% and 21.3%, Census 2021). The council says Wembley Park's private lets are dominated by build-to-rent blocks.",
    landlordContext:
      "The council's 2024 modelling estimates 7,131 HMOs in Brent: 4,922 licensed and about 2,209 more predicted to be operating without a licence.",
  },
};

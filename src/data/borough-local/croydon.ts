import type { BoroughLocal } from "./types";

export const croydon: BoroughLocal = {
  slug: "croydon",
  checkedOn: "2026-10-16",
  council: {
    name: "Croydon Council",
    housingUrl: "https://www.croydon.gov.uk/housing/landlords",
    licensingUrl: "https://www.croydon.gov.uk/housing/landlords-and-managing-agents/property-licensing-schemes",
  },
  licensing: [
    {
      name: "The London Borough of Croydon Designation of an Area for Additional Licensing of Houses in Multiple Occupation 2026",
      type: "Additional HMO",
      area: "Whole borough",
      appliesTo:
        "HMOs of 3 or 4 people from 2 or more households that are not mandatory HMOs. Some section 257 converted blocks may also need a licence: check with the council",
      period: "25 September 2026 to 1 September 2031 (end date as published, October 2026)",
      status: "In force",
    },
    {
      name: "London Borough of Croydon Designation for Areas for Selective Licensing 2026",
      type: "Selective",
      area:
        "14 of 28 wards: Addiscombe East, Addiscombe West, Bensham Manor, Broad Green, Fairfield, Norbury and Pollards Hill, Norbury Park, Selhurst, South Croydon, South Norwood, Thornton Heath, Waddon, West Thornton and Woodside",
      appliesTo:
        "Privately rented homes let to a single household, a single tenant or two sharers, unless licensed as an HMO or otherwise exempt",
      period: "25 September 2026 to 1 September 2031 (end date as published, October 2026)",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo:
        "HMOs of 5 or more people from 2 or more households who share a toilet, bathroom or kitchen",
      period: "National scheme, no end date",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Licences granted under the 2010 to 2020 schemes", value: "About 40,000", source: "Croydon Council" },
    {
      label: "Private rented homes in the 14 selective wards",
      value: "60% of the borough's total",
      source: "Croydon Council",
    },
    { label: "Households owning their home", value: "54.7% (London 45.2%)", source: "Census 2021" },
    { label: "Households renting from a social landlord", value: "17.9% (London 23.1%)", source: "Census 2021" },
  ],
  overview: [
    "Borough-wide additional HMO licensing ran from 2010 to 2015 and borough-wide selective licensing from 2015 to 2020. After a renewal was refused, only mandatory HMO licensing applied until two new schemes came into force on 25 September 2026.",
    "Shared homes of three or more people from two or more households now need an HMO licence anywhere in the borough. Selective licensing is back in 14 of the 28 wards, not borough-wide as before.",
    "A selective application needs a current EICR, an EPC and, where there is gas, a gas safety certificate. HMO applications also ask for a fire safety risk assessment and a fire alarm test certificate, plus an emergency lighting test certificate (on additional applications, if applicable).",
    "The council has appointed The Oyster Partnership to run the new schemes, but the council still decides each licence and carries out enforcement. The council's public register is split for now between a new HMO register and the legacy mandatory HMO register, which will eventually be merged.",
    "A borough-wide Article 4 direction has applied since 28 January 2020, so turning a family home into an HMO for three to six people needs planning permission.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Croydon: wards chosen for poor housing conditions",
      body: [
        "Croydon chose its 14 selective wards as those \"experiencing high levels of poor housing conditions\". Once a home there is licensed, Croydon's conditions require the EICR to be kept and passed to the next inspector, so the history of the installation stays with the property.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas certificates in Croydon's selective wards: 14 days from issue",
      body: [
        "In Croydon's selective wards, each new gas safety certificate must be sent to the council within 14 days of the date it is issued, without the council having to ask. The clock starts on the issue date, not when the certificate reaches you, so forward it as soon as it arrives.",
      ],
    },
    epc: {
      heading: "EPCs in Croydon's 14 selective wards: part of the application",
      body: [
        "Since selective licensing returned to 14 of Croydon's wards, a current EPC is one of the documents a selective application must upload.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Croydon: an additional HMO licence condition",
      body: [
        "Croydon's additional HMO licence conditions require a fire risk assessment under the Regulatory Reform (Fire Safety) Order 2005. Those conditions now reach three- and four-person shares, which needed no licence in Croydon from 2020 until the additional scheme began on 25 September 2026.",
        "Croydon's mandatory and additional HMO applications both ask for a fire safety risk assessment as an upload. A mandatory application also lists a current EICR, a gas safety certificate where there is gas and the current fire alarm test certificate.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Croydon",
      body: [],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Croydon",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical fault finding in Croydon",
      body: [],
    },
    "fuse-box-installation": {
      heading: "Consumer unit replacement in Croydon",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Croydon HMO applications",
      body: [
        "Croydon's mandatory HMO application asks for the current emergency lighting test certificate as a document in its own right, separate from the fire alarm certificate. The additional HMO application for three- and four-person shares asks for it \"if applicable\".",
      ],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Croydon",
      body: [],
    },
    "boiler-installation": {
      heading: "Replacing solid-fuel heating in Croydon: check the address first",
      body: [
        "Croydon Council asks residents to check with its Pollution Team whether a particular address is in a smoke control area, so do that before replacing an open fire, stove or solid-fuel boiler in a let. The council has declared most of the borough a smoke control area, but not all of it.",
      ],
    },
    "fire-safety-certificate": {
      heading: "Smoke and CO alarms in Croydon",
      body: [],
    },
    "fire-alarm-installation": {
      heading: "Fire alarm installation in Croydon",
      body: [],
    },
    "fire-door-certificate": {
      heading: "Fire doors in Croydon",
      body: [],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguisher servicing in Croydon",
      body: [],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Croydon",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Croydon",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Croydon",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "Why did Croydon go without selective licensing after 2020?",
        answer:
          "The Secretary of State refused the council's proposed renewal, finding it had not shown how the scheme fitted its housing strategy or given enough evidence on housing conditions. The 2026 selective designation was made under the General Approval, so it did not need the Secretary of State's confirmation.",
      },
      {
        question: "When did a let in one of Croydon's 14 selective wards start needing a licence?",
        answer:
          "On 25 September 2026. The March 2026 designations gave 1 September 2026, but in July 2026 the council moved the start because officers needed more time for \"full system testing and validation\". The new date of 25 September was the latest lawful one, six months after Cabinet approved the schemes on 25 March. As of October 2026, the designations still say they cease on 1 September 2031.",
      },
    ],
    "gas-safety-certificate": [
      {
        question: "What does a Croydon selective licence application ask me to upload?",
        answer:
          "A current gas safety certificate if the home has gas, an EICR, an EPC, a floor plan, management details and proof of the licence holder's address. Evidence of accreditation is needed only if you claim the accredited-landlord discount. Applications go through the council's property licensing portal, which also handles mandatory and additional HMO licences.",
      },
    ],
    epc: [
      {
        question: "Who will deal with my Croydon licence application?",
        answer:
          "The Oyster Partnership manages and administers the selective and additional HMO schemes for the council. Croydon Council still makes the final licence decisions and carries out enforcement. Contact details for the new schemes are on the council's \"Applying for a licence\" page for each scheme.",
      },
    ],
    "fire-risk-assessment": [
      {
        question: "Does planning permission affect a Croydon HMO licence?",
        answer:
          "It can. Since 28 January 2020, a borough-wide Article 4 direction has meant that a new HMO for three to six people in Croydon needs planning permission. The council takes planning status into account when it decides an HMO licence, and it may refuse the licence or grant a shorter one, commonly for one year.",
      },
    ],
    "emergency-lights-certificate": [
      {
        question: "Which plans and approvals go with a Croydon mandatory HMO application?",
        answer:
          "A floor plan showing room sizes, planning approval, and a building control completion certificate where one applies.",
      },
    ],
  },
  sources: [
    {
      label: "Croydon Council: Property licensing schemes",
      url: "https://www.croydon.gov.uk/housing/landlords-and-managing-agents/property-licensing-schemes",
    },
    {
      label: "Croydon Council: About our new housing licensing schemes",
      url: "https://www.croydon.gov.uk/housing/landlords-and-managing-agents/property-licensing-schemes/about-our-new-housing-licensing-schemes",
    },
    {
      label: "Croydon Council: Selective Licensing Scheme 2026, applying for a licence",
      url: "https://www.croydon.gov.uk/housing/landlords-and-managing-agents/property-licensing-schemes/selective-licensing-scheme-2026/applying-licence",
    },
    {
      label: "Croydon Council: Additional HMO licensing designation 2026",
      url: "https://www.croydon.gov.uk/sites/default/files/2026-03/Ap6%20-%20Additional%20HMO%20Licencing%20Designation%201.pdf",
    },
    {
      label: "Croydon Council: Selective licensing designation 2026",
      url: "https://www.croydon.gov.uk/sites/default/files/2026-03/Ap7%20-%20Selective%20Licensing%20Designation%201.pdf",
    },
    {
      label: "Croydon Council: Notice of amendment of commencement date",
      url: "https://www.croydon.gov.uk/housing/landlords/selective-and-additional-hmo-licensing-schemes-2026/notice-amendment-commencement-date-additional-and-selective-licensing-schemes",
    },
    {
      label: "Croydon Council: Commencement decision, July 2026",
      url: "https://democracy.croydon.gov.uk/documents/d2747/Printed%20decision%20Commencement%20of%20Additional%20and%20Selective%20Licensing%20Schemes.pdf?T=5",
    },
    {
      label: "Croydon Council: Cabinet report, private sector property licensing scheme (March 2026)",
      url: "https://democracy.croydon.gov.uk/documents/s70258/Private%20Sector%20Property%20Licensing%20Scheme.pdf",
    },
    {
      label: "Croydon Council: Selective licence conditions 2026",
      url: "https://www.croydon.gov.uk/sites/default/files/2026-09/selective-licence-conditions-2026.pdf",
    },
    {
      label: "Croydon Council: Additional HMO licensing scheme 2026, applying for a licence",
      url: "https://www.croydon.gov.uk/housing/landlords-and-managing-agents/property-licensing-schemes/additional-hmo-licensing-scheme-2026/applying-licence",
    },
    {
      label: "Croydon Council: Additional HMO licence conditions",
      url: "https://www.croydon.gov.uk/sites/default/files/2026-09/additional-hmo-licence-conditions-2026.pdf",
    },
    {
      label: "Croydon Council: Apply for a mandatory HMO licence",
      url: "https://www.croydon.gov.uk/housing/landlords-and-managing-agents/houses-multiple-occupation-hmo/apply-mandatory-hmo-licence",
    },
    {
      label: "Croydon Council: Check whether an HMO is licensed",
      url: "https://www.croydon.gov.uk/housing/landlords-and-managing-agents/houses-multiple-occupation-hmo/check-whether-hmo-licensed",
    },
    {
      label: "Croydon Council: Article 4 direction, small HMO conversions",
      url: "https://www.croydon.gov.uk/planning-and-regeneration/planning-policy/article-4-directions/small-house-multiple-occupation-hmo-conversions",
    },
    {
      label: "Croydon Council: Wood burning and smoke control",
      url: "https://www.croydon.gov.uk/environment/pollution/air-pollution-and-and-air-quality/air-quality-croydon/wood-burning",
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
      "Houses outnumber flats in Croydon. At the 2021 Census, 24.7% of households lived in semi-detached houses, 23.3% in terraces and 12.2% in detached houses, against 29.0% in purpose-built flats and 8.5% in flats in converted or shared houses. By build date, 23.5% of council tax properties are from 1919 to 1939 and 25.7% from 1945 to 1982 (VOA 2025).",
    landlordContext:
      "The council estimates that 31.2% of Croydon's housing stock is privately rented. The 2021 Census counted households instead and found 25.8% renting privately, below London's 30.0%.",
  },
};

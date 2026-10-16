import type { BoroughLocal } from "./types";

export const barkingDagenham: BoroughLocal = {
  slug: "barking-dagenham",
  checkedOn: "2026-10-16",
  council: {
    name: "Barking and Dagenham Council",
    housingUrl: "https://www.lbbd.gov.uk/private-sector-housing",
    licensingUrl: "https://www.lbbd.gov.uk/private-sector-housing/property-licensing",
  },
  licensing: [
    {
      name: "The London Borough of Barking and Dagenham Designation of Areas for Selective Licensing 2025",
      type: "Selective",
      area: "Three areas covering all 19 wards",
      appliesTo:
        "Privately rented homes let to a single household, including flats in purpose-built blocks and in section 257 converted blocks (licensable HMOs, social housing and statutory exemptions excluded)",
      period: "6 April 2025 to 5 April 2030",
      status: "In force",
    },
    {
      name: "The London Borough of Barking and Dagenham Designation of an Area for Additional Licensing of Houses in Multiple Occupation 2025",
      type: "Additional HMO",
      area: "Whole borough",
      appliesTo:
        "HMOs of 3 or 4 people from 2 or more households, including HMO flats in purpose-built blocks of 3 or more flats (section 257 converted blocks excluded)",
      period: "9 January 2025 to January 2030",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo: "Properties with 5 or more people from 2 or more households",
      period: "National scheme with no end date",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Households renting privately", value: "24.2% (London 30.0%)", source: "Census 2021" },
    { label: "Households renting from the council", value: "24.5% (London 12.1%)", source: "Census 2021" },
    { label: "Households in terraced houses", value: "41.6% (London 21.3%)", source: "Census 2021" },
    { label: "Homes built 1919 to 1929", value: "35.0% (London 6.2%)", source: "VOA 2025" },
  ],
  overview: [
    "As of October 2026, the council says most privately rented homes in the borough need a property licence. Selective licensing covers single-household lets in all 19 wards, additional licensing covers shared homes of three or four people, and mandatory licensing applies from five.",
    "Applications go through the council's online licensing portal only, and paper applications are not accepted. The Private Rented Property Licensing team is on PRPL@lbbd.gov.uk and 020 8724 8898.",
    "The council checks the documents and inspects every property before it grants a licence. If an application is incomplete, the landlord has two months to supply what is missing before it is rejected.",
    "Selective licensing is not new here: the previous scheme ran from September 2019 to August 2024. Under its earlier schemes the council carried out over 8,000 property inspections.",
    "A borough-wide Article 4 Direction, in force since May 2012, means turning a family home into a small HMO needs planning permission, and the council says an HMO licence does not grant it.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Barking and Dagenham: what the licence inspection counts as a defect",
      body: [
        "Every licence application here (selective, additional or mandatory) must include an EICR, and selective licensing reaches single-household lets in all 19 wards. So most private lets need a current report before they can be licensed.",
        "For single-household lets, officers inspect against the council's Property Condition Guidance for Single Household Properties. Four or more minor defects, or any one moderate or severe defect, make the property non-compliant. Where you qualify for the selective licence Part B discount, it is then lost.",
        "A broken electrical socket is the council's own example of a minor defect. So the small faults an EICR notes count at this inspection too, not only the items the report says must be fixed: repair damaged sockets and accessories before the visit.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas certificates for a Barking and Dagenham licence: in date when checked",
      body: [
        "Where the home has gas, the gas safety certificate is one of the documents the council checks before the inspection that every licensed property gets. Its guidance says out-of-date documents rule out the selective licence discount, so make sure the certificate is still in date when you upload it.",
      ],
    },
    epc: {
      heading: "EPCs on the Becontree Estate: planning limits due from November 2026",
      body: [
        "The council counts about 19,579 of the Becontree Estate's homes as privately owned. In November 2025 it made two Article 4 Directions for the estate, due to come into force on 19 November 2026 if the council confirms them. One covers side extensions and roof alterations on corner plots, the other porches anywhere on the estate.",
        "If an EPC for a corner house on the estate recommends external work on its side or roof, or work to a porch, check the council's Article 4 page before you book a contractor. If the directions are confirmed, that work will need planning permission from 19 November 2026.",
        "The licensing schemes also carry a council target to improve the energy performance of licensed homes, giving measurable improvement in ratings of D or below as its example. It applies to HMOs and selective areas 1 and 2, which leaves out area 3, Eastbrook & Rush Green.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Barking and Dagenham: the landlord's job",
      body: [
        "Arranging the fire risk assessment falls to the landlord or licence holder. The council's HMO licence checklist says plainly: \"The Council can NOT do your fire risk assessment, neither can the Fire Brigade.\" An assessment must go in with every HMO application, including three- and four-person shares under the borough-wide additional scheme.",
        "Single-household lets have their own rule in the council's 2026 guidance: the escape route must not pass through a kitchen. If a house has been opened up so the stairs come down into the kitchen, raise it with the assessor, because that layout conflicts with the guidance.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Barking and Dagenham",
      body: [],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Barking and Dagenham",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical fault finding in Barking and Dagenham",
      body: [],
    },
    "fuse-box-installation": {
      heading: "Consumer unit upgrades in Barking and Dagenham",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Barking and Dagenham",
      body: [],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Barking and Dagenham",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler installation in Barking and Dagenham",
      body: [],
    },
    "fire-safety-certificate": {
      heading: "Smoke alarms where e-bikes are charged: Barking and Dagenham guidance",
      body: [
        "Charging points for e-bikes and e-scooters are where the council's 2026 guidance for single-household lets suggests an extra smoke alarm: it advises fitting one wherever batteries are likely to be charged. The guidance presents this as advice, but if a tenant charges a bike in a hallway or spare room, an alarm there is a simple addition to your checks.",
      ],
    },
    "fire-alarm-installation": {
      heading: "Fire alarms in Barking and Dagenham family lets: set by the building's assessment",
      body: [
        "In a single-household let, the alarm standard the council inspects against depends on the building. Its Property Condition Guidance says alarms should be mains wired and interlinked, but battery alarms are acceptable in most cases, subject to the building's fire risk assessment.",
        "For a flat in a block, ask the managing agent or freeholder for the building's fire risk assessment before choosing an installation.",
      ],
    },
    "fire-door-certificate": {
      heading: "Fire door inspections in Barking and Dagenham",
      body: [],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguisher testing in Barking and Dagenham",
      body: [],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Barking and Dagenham",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos in Barking and Dagenham lets: the council expects a risk assessment",
      body: [
        "Asbestos is on the council's list for family lets as well as HMOs: its guidance for single-household lets says landlords \"should risk assess the property for asbestos\".",
        "For HMOs, the licence checklist goes further: seal any asbestos-containing materials or make them inaccessible, label them, and keep a record of where they are and their condition.",
      ],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Barking and Dagenham",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "Does each flat in a converted block need its own licence?",
        answer:
          "In Barking and Dagenham, usually yes. Section 257 converted blocks, and flats in purpose-built blocks of three or more flats, are exempt from mandatory HMO licensing. However, the council says those rented flats need a selective licence. A flat shared by three or four people from two or more households needs an additional HMO licence instead. Each licensed flat is inspected and needs its own EICR.",
      },
      {
        question: "Can I let a flat where the council is the freeholder?",
        answer:
          "Only with permission from the council's Leasehold Services, which you need before letting it. The council also says properties it owns are generally not granted permission to operate as houses in multiple occupation, so a council-freehold flat is unlikely to be approved as a shared let.",
      },
    ],
    "gas-safety-certificate": [
      {
        question: "How long does the Barking and Dagenham licence inspection take?",
        answer:
          "Usually 20 minutes to an hour. The council's scheme objectives include inspecting properties within six months of application. A draft licence then goes out for 21 days of consultation, and appeals go to the First-tier Tribunal (Property Chamber) within 28 days.",
      },
      {
        question: "Can an out-of-date or non-compliant certificate shorten a Barking and Dagenham licence?",
        answer:
          "It can: licences are typically issued for five years, but the council says non-compliant documentation may lead to a reduced-term licence. Timing matters too. A property left unlicensed for more than three months before the application gets a one-year licence, and so does a renewal made more than one month after the old licence expired.",
      },
    ],
    epc: [
      {
        question: "Which wards do the Becontree Article 4 Directions affect?",
        answer:
          "The council's November 2025 Cabinet report lists 11: Alibon, Beam, Becontree, Eastbury, Goresbrook, Heath, Mayesbrook, Parsloes, Valence, Village and Whalebone. The directions apply to the estate itself, so check whether a property is on the Becontree Estate before planning external work.",
      },
    ],
    "fire-risk-assessment": [
      {
        question: "Does a new HMO in Barking and Dagenham need planning permission as well as a licence?",
        answer:
          "Yes. Under the borough-wide Article 4 Direction, a family home cannot become a small HMO without planning permission. The Local Plan allows HMOs only where conversions to flats or HMOs stay at or below 10% of houses in the road and no two adjacent properties are converted. Check both tests before commissioning a fire risk assessment for the conversion.",
      },
    ],
  },
  sources: [
    { label: "Barking and Dagenham Council: Private sector housing", url: "https://www.lbbd.gov.uk/private-sector-housing" },
    {
      label: "Barking and Dagenham Council: Property licensing",
      url: "https://www.lbbd.gov.uk/private-sector-housing/property-licensing",
    },
    {
      label: "Barking and Dagenham Council: Do I need a licence?",
      url: "https://www.lbbd.gov.uk/private-sector-housing/property-licensing/do-i-need-licence",
    },
    {
      label: "Barking and Dagenham Council: Application process",
      url: "https://www.lbbd.gov.uk/private-sector-housing/property-licensing/application-process",
    },
    {
      label: "Barking and Dagenham Council: Fees, discounts and exemptions",
      url: "https://www.lbbd.gov.uk/private-sector-housing/property-licensing/fees-discounts-exemptions",
    },
    {
      label: "Barking and Dagenham Council: Selective licensing designation 2025, public notice",
      url: "https://www.lbbd.gov.uk/sites/default/files/2025-01/Public%20Notice%20-%20Selective%20Licensing%20Designation.pdf",
    },
    {
      label: "Barking and Dagenham Council: Additional HMO licensing designation 2025",
      url: "https://www.lbbd.gov.uk/sites/default/files/2025-01/Additional%20Licensing%20of%20Houses%20-%20FINAL.pdf",
    },
    {
      label: "Barking and Dagenham Council: New selective licensing scheme (January 2025)",
      url: "https://www.lbbd.gov.uk/news/2025/barking-and-dagenham-council-introduce-new-selective-licensing-scheme-improve-private",
    },
    {
      label: "Barking and Dagenham Council: Property Condition Guidance for Single Household Properties 2026",
      url: "https://www.lbbd.gov.uk/sites/default/files/2026-09/Property%20Condition%20Guidance%20for%20Single%20Household%20Properties%202026.pdf",
    },
    {
      label: "Barking and Dagenham Council: HMO Standards (January 2023)",
      url: "https://www.lbbd.gov.uk/sites/default/files/2025-01/HMO%20standards%20LBBD%20Jan%202023%20%281%29.pdf",
    },
    {
      label: "Barking and Dagenham Council: HMO Property Condition Checklist",
      url: "https://www.lbbd.gov.uk/sites/default/files/2025-01/Property%20Condition%20Checklist%20for%20Houses%20in%20Multiple%20Occupation%20%28HMO%29%20v5.pdf",
    },
    {
      label: "Barking and Dagenham Council: Article 4 directions",
      url: "https://www.lbbd.gov.uk/planning-building-control-and-local-land-charges/planning-guidance-and-policies/article-4",
    },
    {
      label: "Barking and Dagenham Council: Draft Becontree Estate SPD and Design Code (November 2025)",
      url: "https://www.lbbd.gov.uk/sites/default/files/2025-11/Draft%20Becontree%20Estate%20Supplementary%20Planning%20Document%20and%20Design%20Code%20Public%20Consultation.pdf",
    },
    {
      label: "Barking and Dagenham Council: Becontree Article 4 Direction (porches), made November 2025",
      url: "https://www.lbbd.gov.uk/sites/default/files/2025-11/Direction%20%28Porches%29.pdf",
    },
    {
      label: "Barking and Dagenham Council: Becontree Article 4 Direction (side and roof extensions), made November 2025",
      url: "https://www.lbbd.gov.uk/sites/default/files/2025-11/Direction%20%28Side%20and%20Roof%20Exts%29.pdf",
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
      "The Becontree Estate, which the council puts at about 29,000 homes across 11 wards, is mainly two- and three-storey terraces and cottages in red brick or render, with tall brick chimneys. Across the borough, 68.8% of households live in a house, while purpose-built flats house 27.7%, against 40.3% across London (Census 2021).",
    landlordContext:
      "The council said in January 2025 that private renting, its fastest-growing tenure, covers \"nearly a third of all homes\", above the 24.2% counted at Census 2021.",
  },
};

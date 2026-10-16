import type { BoroughLocal } from "./types";

export const southwark: BoroughLocal = {
  slug: "southwark",
  checkedOn: "2026-10-16",
  council: {
    name: "Southwark Council",
    housingUrl: "https://www.southwark.gov.uk/housing/private-tenants-and-landlords/private-rented-property-licensing",
    licensingUrl:
      "https://www.southwark.gov.uk/housing/private-tenants-and-landlords/private-rented-property-licensing/property-licensing",
  },
  licensing: [
    {
      name: "The London Borough of Southwark Designation of an Area for Additional Licensing of Houses in Multiple Occupation 2022",
      type: "Additional HMO",
      area: "Whole borough",
      appliesTo:
        "HMOs of 3 or more people from 2 or more households that are not mandatory HMOs, including flats in multiple occupation in purpose-built blocks of 3 or more flats",
      period: "1 March 2022 to 1 March 2027",
      status: "In force",
    },
    {
      name: "London Borough of Southwark Designations for Areas for Selective Licensing 2022 (designations 1 and 2)",
      type: "Selective",
      area: "Champion Hill, Newington, Faraday, Goose Green and St Giles wards",
      appliesTo:
        "Privately rented homes that do not need a mandatory or additional HMO licence. Social landlord lettings and statutory exemptions are excluded",
      period: "1 March 2022 to 1 March 2027",
      status: "In force",
    },
    {
      name: "Selective licensing designations 3 and 4 (confirmed by the Secretary of State, June 2023)",
      type: "Selective",
      area:
        "14 wards: Camberwell Green, Chaucer, Dulwich Hill, Dulwich Wood, London Bridge & West Bermondsey, North Walworth, Nunhead & Queens Road, Old Kent Road, Peckham, Peckham Rye, Rotherhithe, Rye Lane, South Bermondsey and Surrey Docks",
      appliesTo:
        "Privately rented homes that do not need a mandatory or additional HMO licence. Social landlord lettings and statutory exemptions are excluded",
      period: "1 November 2023 to 31 October 2028",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo: "HMOs of 5 or more tenants from more than one household who share a toilet, bathroom or kitchen",
      period: "Ongoing, no end date",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Households renting from the council", value: "27.1% (London 12.1%)", source: "Census 2021" },
    { label: "Households in purpose-built flats", value: "64.4% (London 40.3%)", source: "Census 2021" },
    {
      label: "Households heated only by a district or communal heat network",
      value: "10.6% (London 3.4%)",
      source: "Census 2021",
    },
    { label: "Homes built 1955 to 1982", value: "22.1% (London 17.5%)", source: "VOA 2025" },
  ],
  overview: [
    "As of October 2026, Southwark runs mandatory, additional and selective licensing. The additional HMO scheme covers the whole borough and brings in shared homes of three or more people from two or more households. It ends on 1 March 2027.",
    "Selective licensing covers other private lets in 19 of the borough's 23 wards. The council called it one of the largest landlord licensing schemes in the country when it was extended in 2023.",
    "The designation for five of the 19 wards ends on 1 March 2027, and the one for the other 14 runs to 31 October 2028. Check the council's licensing pages for what applies after 1 March 2027.",
    "Applications and renewals go through the council's online property portal. The council asks for floor plans, an electrical safety certificate, a gas safety certificate where needed, a fire alarm certificate and, for an HMO, a fire risk assessment.",
    "Where there is evidence of poor management or other housing problems, Southwark issues one- or three-year licences instead of the usual five. The licensing team's email is resi@southwark.gov.uk.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Southwark: the report within a week, then a completion notice",
      body: [
        "Southwark's licence conditions make the council a recipient of every electrical report, not only a reader on request. For licensed HMOs and selectively licensed homes alike, the licence holder must send the council a copy of each inspection report within seven days of the inspection.",
        "The same condition allows only approved electrical contractors to inspect the installation or carry out remedial works, and the council must be told when those works are finished. Treat the EICR and any C1 or C2 repairs as one job with two notices: the report within a week, then confirmation once the work is done.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety in Southwark: CO alarms beside gas cookers too",
      body: [
        "Most of Southwark's selective licence conditions go further than the national alarm rules on one point. The conditions for designations 2, 3 and 4, which together cover 17 of the 19 selective wards, require a carbon monoxide alarm in any room with a gas appliance. A kitchen with only a gas hob or cooker is therefore included.",
        "The designation 1 conditions, for Champion Hill and Newington, have no such room rule.",
        "For shared houses, the council's own HMO standards from 2015 ask for audible, mains-fed CO detectors in every room with a gas appliance. Check that the alarms fitted are mains-fed.",
        "When you book the gas safety check, list the rooms with gas appliances so you can confirm each one has an alarm of the right type.",
      ],
    },
    epc: {
      heading: "EPCs in Southwark: a licence starts a 12-month clock below E",
      body: [
        "Southwark writes the minimum energy rating into its licences. Under HMO licence condition 2.8 and a matching condition in each selective designation, a licensed property with an EPC below E must have the works recommended on the EPC carried out within 12 months of the licence being issued. Alternatively, a valid exemption must be registered within three months.",
        "The condition sits on top of the national minimum standard and does not delay it.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Southwark: telling flat-share tenants the block's plan",
      body: [
        "Southwark's HMO licence conditions reach beyond the front door of a shared flat. Condition 13.1 says tenants of a licensed flat in multiple occupation must be told in writing how fire safety works in the block.",
        "The notice must cover whether the block runs a stay-put or all-out policy, the safest route out, the assembly point, and any fire drills, waking watch or fire warden arrangements. It also covers the nearest manual call point.",
        "Those details come from the block's fire strategy and fire risk assessment, not from the flat itself. Purpose-built flats are the main home type here, so have them in writing before a shared flat in a block is let.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Southwark",
      body: [],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Southwark",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical fault finding in Southwark",
      body: [],
    },
    "fuse-box-installation": {
      heading: "Consumer unit replacement in Southwark",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Southwark",
      body: [],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Southwark",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler installation in Southwark",
      body: [],
    },
    "fire-safety-certificate": {
      heading: "Fire safety certificates in Southwark",
      body: [],
    },
    "fire-alarm-installation": {
      heading: "Fire alarm installation in Southwark",
      body: [],
    },
    "fire-door-certificate": {
      heading: "Fire doors in Southwark",
      body: [],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguisher testing in Southwark",
      body: [],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Southwark",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Southwark",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Southwark",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "Is a Southwark licence fee paid in one go?",
        answer:
          "No. As of October 2026, the fee is split in two: Part A is paid when you apply and Part B when the licence is approved. Landlords in Southwark's Gold Standard Charter get 50% off Part B, and pay no Part B if they also join the council's finders' fee scheme. Paper applications cost extra.",
      },
    ],
    "gas-safety-certificate": [
      {
        question: "Can a Southwark HMO run on key meters?",
        answer:
          "Not under the council's own standards. Southwark's HMO Standards for bedsit type accommodation and shared houses, adopted in July 2015 and referenced by its licence conditions, say key meters are not acceptable. If a shared house you are taking on has prepayment key meters, plan to change them before you apply for a licence.",
      },
    ],
    "fire-risk-assessment": [
      {
        question: "Which Southwark streets need planning permission for a small HMO?",
        answer:
          "Two. The council's Article 4 page lists HMO directions for Henshaw Street, SE17, and Bywater Place in Surrey Docks, SE16. There, turning a family home into a small HMO needs planning permission, and the council says a licence does not replace it. Where a direction applies, the licence application asks for evidence of the planning consent.",
      },
    ],
  },
  sources: [
    {
      label: "Southwark Council: Private rented property licensing",
      url: "https://www.southwark.gov.uk/housing/private-tenants-and-landlords/private-rented-property-licensing",
    },
    {
      label: "Southwark Council: Property licensing",
      url: "https://www.southwark.gov.uk/housing/private-tenants-and-landlords/private-rented-property-licensing/property-licensing",
    },
    {
      label: "Southwark Council: Mandatory HMO licensing",
      url: "https://www.southwark.gov.uk/housing/private-tenants-and-landlords/private-rented-property-licensing/property-licensing-1",
    },
    {
      label: "Southwark Council: Additional HMO licensing",
      url: "https://www.southwark.gov.uk/housing/private-tenants-and-landlords/private-rented-property-licensing/property-licensing-2",
    },
    {
      label: "Southwark Council: Selective licensing",
      url: "https://www.southwark.gov.uk/housing/private-tenants-and-landlords/private-rented-property-licensing/property-licensing-3",
    },
    {
      label: "Southwark Council: Apply for a licence",
      url: "https://www.southwark.gov.uk/housing/private-tenants-and-landlords/private-rented-property-licensing/apply-private-rented",
    },
    {
      label: "Southwark Council: Licence fees",
      url: "https://www.southwark.gov.uk/housing/private-tenants-and-landlords/private-rented-property-licensing/apply-private-rented-1",
    },
    {
      label: "Southwark Council: Licence conditions",
      url: "https://www.southwark.gov.uk/housing/private-tenants-and-landlords/private-rented-property-licensing/licence-conditions",
    },
    {
      label: "Southwark Council: HMO licence conditions (October 2021)",
      url: "https://www.southwark.gov.uk/sites/default/files/2024-09/HMO%20licensing%20conditions_1.pdf",
    },
    {
      label: "Southwark Council: Selective licence conditions, designation 1",
      url: "https://www.southwark.gov.uk/sites/default/files/2024-09/Properties%20licensed%20under%20the%20selective%20licensing%20scheme%20in%20designation%201.pdf",
    },
    {
      label: "Southwark Council: Selective licence conditions, designation 2",
      url: "https://www.southwark.gov.uk/sites/default/files/2024-09/Properties%20licensed%20under%20the%20selective%20licensing%20scheme%20in%20designation%202.pdf",
    },
    {
      label: "Southwark Council: Selective licence conditions, designation 3",
      url: "https://www.southwark.gov.uk/sites/default/files/2024-09/Properties%20licensed%20under%20the%20selective%20licensing%20scheme%20in%20designation%203.pdf",
    },
    {
      label: "Southwark Council: Selective licence conditions, designation 4",
      url: "https://www.southwark.gov.uk/sites/default/files/2024-09/Properties%20licensed%20under%20the%20selective%20licensing%20scheme%20in%20designation%204.pdf",
    },
    {
      label: "Southwark Council: HMO standards (July 2015)",
      url: "https://www.southwark.gov.uk/sites/default/files/2024-09/HMO%20standards%20%28July%202015%29.pdf",
    },
    {
      label: "Southwark Council: Additional licensing designation (2021)",
      url: "https://www.southwark.gov.uk/sites/default/files/2024-11/Additional%20Licensing%20Final%20Designation%20Declaration%2028%2010%2021.pdf",
    },
    {
      label: "Southwark Council: Selective licensing designations 1 and 2 (2021)",
      url: "https://www.southwark.gov.uk/sites/default/files/2024-11/Selective%20Licensing%20Final%20Designation%20Declaration%2028%2010%2021.pdf",
    },
    {
      label: "Southwark Council: Selective licensing designations 3 and 4 (2023)",
      url: "https://www.southwark.gov.uk/sites/default/files/2024-11/Selective%20Licensing%20Final%20Designation%20Declaration%2014%20June%202023.pdf",
    },
    {
      label: "Southwark Council: Secretary of State approves selective licensing extension (July 2023, archived)",
      url: "https://web.archive.org/web/20251101184714/https://services.southwark.gov.uk/news/2023/jul/secretary-of-state-approves-one-of-the-largest-landlord-licensing-schemes-nationally",
    },
    {
      label: "Southwark Council: Article 4 directions for houses",
      url: "https://www.southwark.gov.uk/planning-environment-and-building-control/planning/planning-policy-and-guidance/article-4/houses",
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
      "Southwark's homes are mainly flats in purpose-built blocks, and much of the housing is recent: 26.7% of council tax properties were built from 2000 onwards (VOA 2025). Terraced houses hold 14.3% of households (Census 2021). For many lets, the block and whoever manages it shape the safety duties as much as the flat does.",
    landlordContext:
      "Council tenants in Southwark are almost as numerous as private renters, who make up 28.7% of households, and the council licenses private lets in most of its wards.",
  },
};

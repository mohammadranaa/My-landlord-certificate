import type { BoroughLocal } from "./types";

export const lewisham: BoroughLocal = {
  slug: "lewisham",
  checkedOn: "2026-10-16",
  council: {
    name: "Lewisham Council",
    housingUrl: "https://lewisham.gov.uk/myservices/housing/private-tenants-and-landlords/landlords/hmo",
    licensingUrl: "https://lewisham.gov.uk/myservices/housing/private-tenants-and-landlords/landlords/selective-licensing",
  },
  licensing: [
    {
      name: "London Borough of Lewisham Designations for Areas for Selective Licensing 2023",
      type: "Selective",
      area: "Whole borough except Telegraph Hill and part of Blackheath (three designations)",
      appliesTo:
        "Homes let under a tenancy or licence that are not licensable HMOs (registered social landlord lets and statutory exemptions excluded)",
      period: "1 July 2024 to 1 July 2029",
      status: "In force",
    },
    {
      name: "London Borough of Lewisham Designation for an Area for Additional Licensing of Houses in Multiple Occupation 2022",
      type: "Additional HMO",
      area: "Whole borough",
      appliesTo:
        "HMOs of 3 or 4 people from more than one household who share a kitchen, bathroom or toilet (section 257 converted blocks are not covered)",
      period: "5 April 2022 to 4 April 2027 (end date as of October 2026)",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo: "HMOs of 5 or more people from more than one household sharing amenities such as a bathroom, toilet or kitchen",
      period: "National scheme, no end date",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Selective licences issued (1 December 2025)", value: "14,083", source: "Lewisham Council" },
    { label: "HMO licences issued (1 December 2025)", value: "1,645 (764 mandatory, 881 additional)", source: "Lewisham Council" },
    { label: "Selective licence inspections done (1 December 2025)", value: "736, of about 11,000 committed", source: "Lewisham Council" },
  ],
  overview: [
    "Lewisham licenses private lets under three schemes. Selective licensing covers the whole borough except Telegraph Hill and part of Blackheath, from 1 July 2024 to 1 July 2029, for lets that are not licensable HMOs. Shared homes come under HMO licensing instead: the additional scheme covers the entire borough from three sharers, and as of October 2026 it ends on 4 April 2027.",
    "Planning rules for shared homes are borough-wide too. Two Article 4 directions mean turning a family house into a small HMO of three to six people needs planning permission. One has covered the southern wards since 7 March 2020, and the other has covered the rest of the borough since 19 January 2024.",
    "Applications are made online through the council's Metastreet portal, which also hosts a public register of licensed properties. A selective application asks for an EPC, an EICR, and a gas safety certificate or a declaration that there is no gas supply. The Private Sector Housing Licensing and Enforcement team can be contacted at pshe@lewisham.gov.uk.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Lewisham: converted blocks mean one licence per flat",
      body: [
        "Lewisham's additional HMO scheme leaves out section 257 converted blocks of flats, so the single-household flats in them fall to selective licensing instead. That scheme covers the whole borough except Telegraph Hill and part of Blackheath. Each of those flats needs its own selective licence, and each application needs its own EICR.",
        "A house split into flats can therefore mean several applications, each needing a report on that flat's installation. If you own more than one flat in the same building, book the inspections together so every application has its report ready.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety certificates in Lewisham",
      body: [],
    },
    epc: {
      heading: "EPCs in Lewisham: an F rating brings an inspection before the licence",
      body: [
        "Lewisham does not inspect every selectively licensed home before granting the licence. It inspects first only the properties it treats as serious concerns. An EPC rated F is one of the triggers, alongside suspected HMOs, outstanding enforcement notices and landlords with a history of illegal eviction.",
        "An F-rated home cannot lawfully be let unless an exemption is registered, so improvement works or a registered exemption are needed now. In Lewisham the rating also puts the home among those the council visits before licensing, so check the current certificate before you apply.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Lewisham: lodgers and flat shares count",
      body: [
        "Lewisham's additional scheme reaches homes many owners would not call HMOs. The council includes lodger arrangements where more than two tenants share with the landlord's household, and flats in purpose-built blocks shared by three or more people.",
        "Lewisham's standards for licensable HMOs say a fire risk assessment is required under the Regulatory Reform (Fire Safety) Order 2005, and ask the licence holder to provide the council with a copy. Have the assessment done before you apply, so a copy is ready to send.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Lewisham",
      body: [],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Lewisham",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical fault finding in Lewisham",
      body: [],
    },
    "fuse-box-installation": {
      heading: "Consumer unit replacement in Lewisham",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Lewisham",
      body: [],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Lewisham",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler replacement in Lewisham HMOs: no prepayment meter on shared heating",
      body: [
        "Lewisham's HMO standards say that where gas or electric central heating is shared, the fuel must be supplied through a quarterly credit meter, not a key or card meter. The exceptions are a system that serves only one letting and an HMO let on a single tenancy agreement.",
      ],
    },
    "fire-safety-certificate": {
      heading: "Fire safety checks in Lewisham",
      body: [],
    },
    "fire-alarm-installation": {
      heading: "Fire alarm installation in Lewisham",
      body: [],
    },
    "fire-door-certificate": {
      heading: "Fire doors in Lewisham",
      body: [],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguisher servicing in Lewisham",
      body: [],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Lewisham",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Lewisham",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Lewisham",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "Which Lewisham wards have the most selectively licensed homes?",
        answer:
          "On the council's figures for 1 December 2025, by current ward, Lewisham Central had the most selective licences (1,461). It was followed by Brockley (1,258), Rushey Green (1,228), Deptford (1,149), Evelyn (1,080) and Hither Green (1,055). Bellingham had 285 and Blackheath 5. Telegraph Hill ward is not in the designation. Each of those licence applications needed an EICR.",
      },
    ],
    "boiler-installation": [
      {
        question: "Does a smoke control order apply in Lewisham?",
        answer:
          "For solid-fuel appliances only: the council says it cannot demonstrate that a valid borough-wide Smoke Control Order is in force. It relies on orders made from 1959 to 1966 whose documents are lost. On 9 September 2026 Mayor and Cabinet approved starting the statutory process to declare a new borough-wide Smoke Control Area. As of October 2026 the new order is not yet in force, so check its progress before fitting a solid-fuel appliance.",
      },
    ],
  },
  sources: [
    {
      label: "Lewisham Council: Selective licensing",
      url: "https://lewisham.gov.uk/myservices/housing/private-tenants-and-landlords/landlords/selective-licensing",
    },
    {
      label: "Lewisham Council: Selective licensing designations 2023 (notice)",
      url: "https://lewisham.gov.uk/-/media/services/housing/lbl-selective-licensing-designation.pdf",
    },
    {
      label: "Lewisham Council: Designation for additional licensing 2022",
      url: "https://lewisham.gov.uk/myservices/housing/private-tenants-and-landlords/landlords/designation-for-additional-licensing-2022",
    },
    {
      label: "Lewisham Council: Which HMOs need a licence",
      url: "https://lewisham.gov.uk/myservices/housing/private-tenants-and-landlords/landlords/hmo/which-houses-in-multiple-occupation--hmos--need-a-licence",
    },
    {
      label: "Lewisham Council: Standards for licensable HMOs",
      url: "https://lewisham.gov.uk/myservices/housing/private-tenants-and-landlords/landlords/hmo/residential-property-licensing-for-houses-in-multiple-occupation--hmos/standards-for-licensable-hmos",
    },
    {
      label: "Lewisham Council: Article 4 direction on small HMOs",
      url: "https://lewisham.gov.uk/myservices/housing/private-tenants-and-landlords/landlords/hmo/article-4-direction-on-small-hmos",
    },
    {
      label: "Lewisham Council: Register of licensed HMOs",
      url: "https://lewisham.gov.uk/myservices/housing/private-tenants-and-landlords/landlords/hmo/register-of-licensed-houses-in-multiple-occupation--hmos",
    },
    { label: "Lewisham landlord licence public register (Metastreet)", url: "https://lewisham.metastreet.co.uk/public-register" },
    {
      label: "Lewisham Council: Private Sector Licensing Update, Housing Select Committee (14 January 2026)",
      url: "https://councilmeetings.lewisham.gov.uk/mgConvert2PDF.aspx?ID=123307",
    },
    {
      label: "Lewisham Council: Smoke Control Area, whole borough designation report (September 2026)",
      url: "https://councilmeetings.lewisham.gov.uk/documents/s152573/Smoke%20Control%20Area%20-%20Whole%20Borough%20Designation%20-%20Report.pdf",
    },
    {
      label: "Lewisham Council: Smoke Control Area decision (9 September 2026)",
      url: "https://councilmeetings.lewisham.gov.uk/ieDecisionDetails.aspx?ID=11198",
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
      "Older terraced housing makes up a large part of Lewisham's stock, alongside flats in converted houses. Council tax records date 27.7% of properties to before 1900 (VOA 2025). At the 2021 Census, 26.2% of households lived in a terraced house and 16.3% in a flat in a converted or shared house.",
    landlordContext:
      "At the 2021 Census, 33,289 Lewisham households rented privately. As of October 2026, selective licensing covers the borough except Telegraph Hill and part of Blackheath, and HMO licensing covers all of it.",
  },
};

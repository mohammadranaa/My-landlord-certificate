import type { BoroughLocal } from "./types";

export const wandsworth: BoroughLocal = {
  slug: "wandsworth",
  checkedOn: "2026-10-16",
  council: {
    name: "Wandsworth Borough Council",
    housingUrl: "https://www.wandsworth.gov.uk/housing/private-housing/",
    licensingUrl: "https://www.wandsworth.gov.uk/housing/private-housing/private-rented-property-licences/",
  },
  licensing: [
    {
      name: "The London Borough of Wandsworth Designation of an Area for Additional Licensing of Houses in Multiple Occupation 2025",
      type: "Additional HMO",
      area: "Whole borough",
      appliesTo:
        "HMOs of 3 or more people from 2 or more households not covered by mandatory licensing, including flats in multiple occupation in purpose-built blocks of 3 or more flats. Certain section 257 converted blocks are not included",
      period: "1 July 2025 to 30 June 2030",
      status: "In force",
    },
    {
      name: "Designation 1 for Areas for Selective Licensing 2025",
      type: "Selective",
      area: "Furzedown, Tooting Bec, Tooting Broadway and South Balham wards",
      appliesTo:
        "Privately rented homes that do not need an HMO licence. Statutory exemptions apply, such as registered social landlord tenancies",
      period: "1 July 2025 to 30 June 2030",
      status: "In force",
    },
    {
      name: "Designation 2 for Areas for Selective Licensing 2026",
      type: "Selective",
      area: "East Putney, West Putney and Northcote wards",
      appliesTo:
        "Privately rented homes that do not need an HMO licence. Statutory exemptions apply, such as registered social landlord tenancies",
      period: "1 April 2026 to 31 March 2031",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo:
        "HMOs with 5 or more tenants from 2 or more households who share a toilet, bathroom or kitchen",
      period: "Ongoing, no end date",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Households renting privately", value: "36.3% (London 30.0%)", source: "Census 2021" },
    {
      label: "Households in flats in converted or shared houses",
      value: "17.7% (London 11.1%)",
      source: "Census 2021",
    },
    { label: "Properties built before 1919", value: "43.4% (London 29.1%)", source: "VOA 2025" },
    { label: "Conservation areas", value: "46", source: "Wandsworth Borough Council" },
  ],
  overview: [
    "Wandsworth only began discretionary licensing on 1 July 2025. Until then, mandatory licensing of large HMOs was the only scheme, and the council's HMO register held over 600 licensed properties.",
    "As of October 2026, three discretionary designations are in force. Additional HMO licensing covers the whole borough until 30 June 2030.",
    "Selective licensing of single-household lets covers seven wards. Furzedown, Tooting Bec, Tooting Broadway and South Balham are covered until 30 June 2030. East Putney, West Putney and Northcote are covered from 1 April 2026 to 31 March 2031.",
    "The council picked those seven wards because private renting there was above the national average and predicted property conditions were below it. Every licence is applied for on the council's online Regulatory Services Hub. The document list includes an electrical safety certificate, an EPC, a fire alarm certificate and, where needed, a gas safety certificate, so have those in hand first.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Wandsworth, where little was built between the wars",
      body: [
        "The borough largely missed the interwar building boom. Only 7.2% of its properties date from 1919 to 1939, against 22.2% across London (VOA 2025), and most of the rest is either older than 1919 or built since 2000.",
        "When you book, say roughly when the building dates from and whether the flat is a conversion, so the inspection is planned for the right kind of installation. The same report goes in with any Wandsworth licence application.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety and Wandsworth's converted blocks",
      body: [
        "Converted houses are a much bigger part of the borough's housing than across London. In all, 65.8% of households live in a flat of some kind, against 51.4% London-wide (Census 2021).",
        "Certain converted blocks of self-contained flats, known as section 257 HMOs, fall outside Wandsworth's additional HMO scheme. In a selective ward, though, each flat in one may need its own selective licence.",
        "Where gas is supplied, each such licence carries its own gas conditions: a certificate produced to the council every year and a tenant copy within 28 days of each check. Under a selective licence, the council can also ask for the written record that tenants received that copy, due within 7 days. Under an HMO licence, it can ask for the certificates themselves on the same 7-day deadline.",
      ],
    },
    epc: {
      heading: "EPCs in Wandsworth: conservation areas that include a modern estate",
      body: [
        "Conservation status in Wandsworth is not only a matter of period streets. The council's list runs from a single road such as Deodar Road to a large area such as West Putney, and takes in village remains such as Battersea Square.",
        "The list also includes the Alton Estate, a large area of 20th-century social housing, so check the address before planning external upgrades, whatever the building's age.",
        "The EPC also goes in with every licence application. Under all of the council's schemes, mandatory HMO licensing included, the part of the fee paid on grant is discounted for a rating of C, or of B and above.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments for Wandsworth HMO flats in blocks",
      body: [
        "Wandsworth's application checklist asks for a fire risk assessment with any HMO application. The additional scheme also reaches flats in multiple occupation in purpose-built blocks of three or more flats, not only shared houses.",
        "For those flats, the assessment and the tenant information have to fit the block. The HMO licence conditions require tenants to be told the block's fire arrangements, and they reference the LACoRS fire safety guidance. Ask the managing agent for those arrangements before you apply.",
      ],
    },
    "pat-testing": {
      heading: "Annual appliance testing on every Wandsworth licence",
      body: [
        "Wandsworth's licence conditions set a fixed interval: landlord-supplied electrical appliances must be tested by a qualified contractor every year, under every licence type.",
        "The council lists a PAT certificate, where applicable, among the documents to send with a licence application. A test before you apply gives you that certificate and starts the yearly cycle.",
      ],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Wandsworth",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical fault finding in Wandsworth",
      body: [],
    },
    "fuse-box-installation": {
      heading: "Fuse box replacement in Wandsworth",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in licensed Wandsworth HMOs",
      body: [],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Wandsworth",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler installation in Wandsworth",
      body: [],
    },
    "fire-safety-certificate": {
      heading: "The fire alarm certificate Wandsworth asks for with an application",
      body: [
        "Wandsworth's application checklist includes a fire alarm certificate. Unlike the fire risk assessment, which the checklist asks for only from HMOs, the alarm certificate is not limited to any licence type.",
        "If you are applying for a selective licence on a single-household flat with a simple smoke alarm set-up, confirm with the council what it will accept for this item before you submit.",
      ],
    },
    "fire-alarm-installation": {
      heading: "Alarm systems for Wandsworth HMOs new to licensing",
      body: [
        "Until July 2025, only large HMOs in Wandsworth needed a licence, and the register held over 600 properties. The council's Cabinet paper then estimated that the new borough-wide additional scheme would bring in 2,805 smaller HMOs, with three or more people from two or more households.",
        "For those landlords, the alarm standard is new. Mandatory and additional licence conditions require fire alarms to be serviced and tested to BS 5839-6:2019+A1:2020. A small shared house let for years without a licence may need its system checked against that standard.",
      ],
    },
    "fire-door-certificate": {
      heading: "Fire doors under Wandsworth HMO conditions",
      body: [
        "Wandsworth's mandatory and additional HMO conditions make the licence holder tell tenants to keep fire doors closed. That instruction assumes the doors close and seal properly, so check closers and seals in the shared areas before you apply.",
      ],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguisher testing in Wandsworth",
      body: [],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Wandsworth",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Wandsworth",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Wandsworth",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "My Wandsworth let is close to a ward boundary. How do I tell whether selective licensing applies?",
        answer:
          "Use the council's interactive licensing map with the full address, because Wandsworth's ward and postcode boundaries do not line up and a shared postcode settles nothing. If the address falls outside the selective wards, a single-household let needs no licence as of October 2026. Most HMOs need one anywhere in the borough, although certain section 257 converted blocks are excluded from the additional scheme.",
      },
    ],
    "gas-safety-certificate": [
      {
        question: "Can I keep letting while my Wandsworth licence application is processed?",
        answer:
          "Yes: once a valid application has gone in through the council's Regulatory Services Hub, you can legally let the property before the licence arrives. The council aims to decide applications within three months. Have the current gas safety certificate ready when you submit, as it is one of the documents the application asks for where gas is supplied.",
      },
    ],
    "fire-risk-assessment": [
      {
        question: "How quickly must I send Wandsworth my fire risk assessment?",
        answer:
          "Within 14 days of a written request, under both the mandatory and additional HMO licence conditions. The same request can cover your test certificates for fire alarms, emergency lighting and fire-fighting equipment, so keep the assessment and those certificates together and up to date.",
      },
    ],
    "pat-testing": [
      {
        question: "How long must I keep PAT records for a Wandsworth licence?",
        answer:
          "At least five years, under all three sets of licence conditions. The council can ask to see them, and they must reach it within 7 days of the request. The condition covers the electrical appliances you supply with the let, so list those on each test record.",
      },
    ],
    "fire-alarm-installation": [
      {
        question: "How long does a Wandsworth HMO licence last?",
        answer:
          "Usually five years, but the council is likely to grant a shorter term, typically one year, where planning permission is needed for HMO use or has been refused. Letting as an HMO to seven or more people needs planning permission, and a licence does not grant it. Temporary exemption notices last three months, and at most two can be issued.",
      },
    ],
    "fire-door-certificate": [
      {
        question: "What happens after I submit a Wandsworth licence application?",
        answer:
          "The council may inspect, then issues a draft licence or a notice of refusal. You have 14 days to make representations on the draft. If you disagree with the final decision, you can appeal to the First-tier Tribunal (Property Chamber) within 28 days.",
      },
    ],
  },
  sources: [
    {
      label: "Wandsworth Borough Council: Private housing",
      url: "https://www.wandsworth.gov.uk/housing/private-housing/",
    },
    {
      label: "Wandsworth Borough Council: Private rented property licences",
      url: "https://www.wandsworth.gov.uk/housing/private-housing/private-rented-property-licences/",
    },
    {
      label: "Wandsworth Borough Council: Check if you need a licence",
      url: "https://www.wandsworth.gov.uk/housing/private-housing/private-rented-property-licences/property-licence-check/",
    },
    {
      label: "Wandsworth Borough Council: Apply for a property licence",
      url: "https://www.wandsworth.gov.uk/housing/private-housing/private-rented-property-licences/apply-property-licence/",
    },
    {
      label: "Wandsworth Borough Council: Property licence fees and discounts",
      url: "https://www.wandsworth.gov.uk/housing/private-housing/private-rented-property-licences/property-licence-fees-discounts/",
    },
    {
      label: "Wandsworth Borough Council: Property licences FAQ",
      url: "https://www.wandsworth.gov.uk/housing/private-housing/private-rented-property-licences/property-licences-faq/",
    },
    {
      label: "Wandsworth Borough Council: Houses in multiple occupation (HMOs)",
      url: "https://www.wandsworth.gov.uk/housing/private-housing/private-rented-property-licences/houses-in-multiple-occupation-hmos/",
    },
    {
      label: "Wandsworth Borough Council: Additional licensing designation notice (2025)",
      url: "https://www.wandsworth.gov.uk/media/klpjttfb/public_notice_on_additional_licencing_across_wandsworth.pdf",
    },
    {
      label: "Wandsworth Borough Council: Selective licensing Designation 1 notice (2025)",
      url: "https://www.wandsworth.gov.uk/media/nqip4qnq/public_notice_on_selective_licencing_designation_1.pdf",
    },
    {
      label: "Wandsworth Borough Council: Selective licensing Designation 2 notice (2026)",
      url: "https://www.wandsworth.gov.uk/media/jisc02og/public_notice_on_selective_licencing_delegation_2.pdf",
    },
    {
      label: "Wandsworth Borough Council: Additional licensing conditions",
      url: "https://www.wandsworth.gov.uk/media/iirefigo/additional_licensing_conditions.pdf",
    },
    {
      label: "Wandsworth Borough Council: Selective licensing conditions",
      url: "https://www.wandsworth.gov.uk/media/nrjp3c0m/selective_licensing_conditions.pdf",
    },
    {
      label: "Wandsworth Borough Council: Mandatory licensing conditions",
      url: "https://www.wandsworth.gov.uk/media/cvgkcecx/mandatory_licensing_conditions.pdf",
    },
    {
      label: "Wandsworth Borough Council: Electrical safety standards in the private rented sector",
      url: "https://www.wandsworth.gov.uk/housing/private-housing/private-housing-landlords/electrical-safety-standards-in-the-private-rented-sector/",
    },
    {
      label: "Wandsworth Borough Council: Conservation areas",
      url: "https://www.wandsworth.gov.uk/planning/conservation-and-urban-design/conservation-areas/",
    },
    {
      label: "Wandsworth Borough Council: Paper 25-10, PRS discretionary licensing (Cabinet, February 2025)",
      url: "https://democracy.wandsworth.gov.uk/documents/s117263/Paper%2025-10%20-%20PRS%20Discretionary%20Licensing.pdf",
    },
    {
      label: "Wandsworth Borough Council: Paper 25-10, Appendix A supplementary information",
      url: "https://democracy.wandsworth.gov.uk/documents/s117246/Appendix%20A%20-%20Supplementary%20Information.pdf",
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
      "Purpose-built flats are Wandsworth's largest housing type, home to 48.1% of households in 2021, while 22.2% lived in terraced houses and 17.7% in flats within converted or shared houses. The stock's age is uneven: VOA counts 43.4% of properties as pre-1919 and 20.6% as built since 2000 (London 17.9%), with comparatively little from the interwar years.",
    landlordContext:
      "More than a third of households rent privately, a share the council describes as one of the highest in London. Since 2025, many lets have needed a council licence.",
  },
};

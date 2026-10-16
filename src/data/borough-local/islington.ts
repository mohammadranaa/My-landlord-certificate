import type { BoroughLocal } from "./types";

export const islington: BoroughLocal = {
  slug: "islington",
  checkedOn: "2026-10-16",
  council: {
    name: "Islington Council",
    housingUrl: "https://www.islington.gov.uk/housing/private-sector-housing/landlords",
    licensingUrl: "https://www.islington.gov.uk/housing/private-sector-housing/landlords/property-licensing",
  },
  licensing: [
    {
      name: "London Borough of Islington Designation of an Area for Additional Licensing of Houses in Multiple Occupation 2025",
      type: "Additional HMO",
      area: "Whole borough",
      appliesTo:
        "HMOs of 3 or 4 people from 2 or more households who share facilities, including such flats in purpose-built blocks; and section 257 converted blocks below the 1991 Building Regulations standard where every flat is rented and the building is in one ownership",
      period: "1 February 2026 to 31 January 2031",
      status: "In force",
    },
    {
      name: "London Borough of Islington Designation of an Area for Selective Licensing 2024",
      type: "Selective",
      area: "Finsbury Park, Tollington and Hillrise wards",
      appliesTo:
        "Privately rented homes let to one person, two sharers or a single household (not HMOs, owner-occupied homes or social housing)",
      period: "20 May 2024 to 19 May 2029",
      status: "In force",
    },
    {
      name: "London Borough of Islington Designation of an Area for Selective Licensing 2026",
      type: "Selective",
      area: "Barnsbury, Caledonian, Tufnell Park, Mildmay, Highbury, Junction and Laycock wards",
      appliesTo:
        "Privately rented homes let to one person, two sharers or a single household (not HMOs, owner-occupied homes or social housing)",
      period: "23 November 2026 to 22 November 2031 (applications open since 7 September 2026)",
      status: "Not yet in force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo:
        "Homes of 5 or more people from 2 or more households sharing a kitchen, bathroom or toilet, including buildings of bedsits or flats that are not fully self-contained",
      period: "National scheme, no end date",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Households renting privately", value: "31.2% (London 30.0%)", source: "Census 2021" },
    { label: "Households renting socially, the largest tenure", value: "40.2% (London 23.1%)", source: "Census 2021" },
    {
      label: "Private renting by ward",
      value: "25% to 41% of homes, highest in Caledonian",
      source: "Islington Council estimate, 2025",
    },
    { label: "Conservation areas", value: "42", source: "Islington Council" },
  ],
  overview: [
    "Islington's private rented sector has grown by around 40% since 2011. The council estimates 37,206 privately rented homes in its 2025 report, up from 26,443 at the 2011 Census, and puts 82% of them in flats.",
    "From 23 November 2026, selective licensing will reach 10 of Islington's 17 wards. Canonbury and Clerkenwell were consulted on in 2025 but held back for further work and have not been designated. Bunhill, Holloway, Arsenal, St Mary's & St James' and St Peter's & Canalside also sit outside both selective schemes on the designation map.",
    "Property condition was a central part of the council's case for the expansion. It estimates that 3,100 privately rented homes are likely to have at least one Category 1 or high-scoring Category 2 hazard. It said its proposals would lift licensing from 27% to 60% of the private rented sector.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Islington: why a fifth of selective applications fell short on certificates",
      body: [
        "When Islington reviewed its selective scheme in 2025, it found that over a fifth of applications had missing or expired certificates that landlords were already legally required to hold. The council can reject an incomplete application, and the landlord then pays again to reapply. Check the date on your EICR before you start the form.",
        "Some Islington homes are in buildings that were never built as homes: 3.1% of Islington households live in converted former non-residential buildings such as schools or warehouses (London 1.2%, Census 2021). In a converted building, ask for the report to state which circuits and distribution boards it covered.",
        "Under the 2024 selective conditions, the council can ask for the electrical installation report, and the licence holder has 28 days from the request to provide it.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety in Islington's 2026 selective wards: read the new licence",
      body: [
        "Islington has published selective licence conditions only for its 2024 scheme; no separate conditions document for the 2026 scheme was listed as of October 2026. If your let is in one of the seven wards joining on 23 November 2026, read the conditions issued with your licence before fixing the gas check date. The 2024 wording sends the certificate to the council, not only to the tenant.",
      ],
    },
    epc: {
      heading: "EPCs in Islington: conservation-area roofs",
      body: [
        "Islington's conservation areas include Canonbury, Barnsbury, Highbury Fields, Tufnell Park, Charterhouse Square, Newington Green, Clerkenwell Green and New River.",
        "Inside them, the council says some alterations need planning permission that would not be needed elsewhere, such as roof alterations and dormer windows. If an EPC recommends work that changes the outside of the roof, check whether permission is needed before you price it.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Islington: a top-third borough for home fires",
      body: [
        "Islington's 2025 licensing evidence placed the borough in the top third of London boroughs for residential fire incidents, using London Fire Brigade data. The council's HMO standards, updated in August 2026, say a fire risk assessment should be carried out and should identify the works needed, pointing landlords to the LACORS guidance. Book the assessment before planning fire works, so the works list comes from it.",
        "Where an HMO's rooms or flats open onto a shared escape route, the same standards require each front door to be a 30-minute fire door with intumescent strips, smoke seals and an overhead closer. They also say it should open from inside without a key. An assessment of that kind of HMO should check every one of those doors.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Islington: a certificate the tenant sees",
      body: [
        "On selectively licensed lets, Islington's May 2024 conditions put the PAT certificate in the tenant's hands: they must receive, or see displayed, a certificate covering the appliances you supply.",
      ],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Islington",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical fault finding in Islington",
      body: [],
    },
    "fuse-box-installation": {
      heading: "Consumer unit upgrades in Islington",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Islington",
      body: [],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Islington",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler installation in Islington",
      body: [],
    },
    "fire-safety-certificate": {
      heading: "Fire safety certificates in Islington: wireless alarm systems",
      body: [
        "Islington's HMO standards allow wireless linked smoke and heat alarms in shared homes, but only where the system meets BS 5839. A wireless system is therefore not in itself a reason to replace it. The fire safety certificate should still confirm it meets that standard, since that is the council's condition for accepting it.",
      ],
    },
    "fire-alarm-installation": {
      heading: "Fire alarm installation in Islington: the HMO minimum",
      body: [
        "Islington's HMO standards set the minimum alarm system for shared homes: interlinked, mains-wired smoke alarms with battery back-up on every staircase landing and in the circulation space of each flat or house. Each kitchen also needs a heat detector linked to the system. Standalone battery alarms do not meet that minimum.",
      ],
    },
    "fire-door-certificate": {
      heading: "Fire doors in Islington HMOs: e-bike charging",
      body: [
        "Islington's HMO standards tie e-bike charging to fire doors. An e-bike should only be charged in a room or cupboard with a 30-minute fire door, fitted with smoke seals and intumescent strips, and a smoke detector. If tenants charge bikes in a bedroom or a cupboard, that door belongs in the survey.",
      ],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguisher testing in Islington",
      body: [],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Islington",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Islington",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Islington",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "How does Islington decide which licensed properties to inspect first?",
        answer:
          "By risk, highest first. The council books inspections by email and rates each one \"Unsatisfactory\", \"Satisfied with conditions\" or \"Satisfied with no concerns\". It may also make an unannounced visit to a property it suspects is let without a licence. Keep your EICR with the other licence certificates so they can be shown on the day.",
      },
    ],
    "fire-risk-assessment": [
      {
        question: "My Islington HMO has a mains-wired alarm. Do I still need a fire risk assessment?",
        answer:
          "For the licence application, Islington asks for a fire risk assessment only from HMOs without a mains-wired fire alarm; where one is fitted, it asks for the fire safety certificate instead. The council's HMO standards still say a fire risk assessment should be carried out, so the alarm certificate does not replace it for running the property.",
      },
    ],
  },
  sources: [
    {
      label: "Islington Council: Landlords",
      url: "https://www.islington.gov.uk/housing/private-sector-housing/landlords",
    },
    {
      label: "Islington Council: Property licensing",
      url: "https://www.islington.gov.uk/housing/private-sector-housing/landlords/property-licensing",
    },
    {
      label: "Islington Council: How to apply for a property licence",
      url: "https://www.islington.gov.uk/housing/private-sector-housing/landlords/property-licensing/how-to-apply-for-a-property-licence-in-islington",
    },
    {
      label: "Islington Council: Inspecting your property",
      url: "https://www.islington.gov.uk/housing/private-sector-housing/landlords/property-licensing/inspecting-your-property",
    },
    {
      label: "The Gazette: Islington additional HMO licensing designation 2025",
      url: "https://www.thegazette.co.uk/notice/5012606",
    },
    {
      label: "Islington Council: Selective licensing 2024, public notice",
      url: "https://www.islington.gov.uk/~/media/sharepoint-lists/public-records/environmentalprotection/information/adviceandinformation/20232024/2024-public-notice-selective-licensing.pdf",
    },
    {
      label: "Islington Council: Selective licensing designation 2026",
      url: "https://www.islington.gov.uk/~/media/sharepoint-lists/public-records/environmentalprotection/information/guidance/20262027/islington-designation-of-an-area-for-selective-licensing-2026.pdf",
    },
    {
      label: "Islington Council: Selective licence conditions (May 2024)",
      url: "https://www.islington.gov.uk/~/media/sharepoint-lists/public-records/environmentalprotection/information/guidance/20232024/selective-licence-condition-may-2024.pdf",
    },
    {
      label: "Islington Council: Standards for houses in multiple occupation (August 2026)",
      url: "https://www.islington.gov.uk/~/media/sharepoint-lists/public-records/environmentalprotection/information/adviceandinformation/20262027/standards-for-houses-in-multiple-occupation.pdf",
    },
    {
      label: "Islington Council: Executive report on the private rented sector consultation (October 2025)",
      url: "https://democracy.islington.gov.uk/documents/s43086/REPORT%20Executive%20-%20Outcome%20PRS%20Consultation%20V1.9.pdf",
    },
    {
      label: "Islington Council: Conservation areas",
      url: "https://www.islington.gov.uk/planning/designandconservation/conservationareas",
    },
    {
      label: "Islington Council: Property near a designated or protected area",
      url: "https://www.islington.gov.uk/planning/applications/permission-check/requirements/property-near-designated-or-protected-area",
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
      "Islington fits 225,000 residents into 15 square kilometres, the second densest borough in England and Wales on the council's figures, and most of its homes are flats. At the 2021 Census, 57.4% of households lived in purpose-built flats and 21.3% in flats or bedsits in converted or shared houses, while 12.7% lived in terraced houses. The stock is old: 35.9% of council tax properties predate 1900 (VOA 2025).",
    landlordContext:
      "Islington expects landlords to join the London Rental Standard and be accredited, and requires a licence for shared homes of three or more people from two households or more.",
  },
};

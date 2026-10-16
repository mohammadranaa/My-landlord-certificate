import type { BoroughLocal } from "./types";

export const merton: BoroughLocal = {
  slug: "merton",
  checkedOn: "2026-10-16",
  council: {
    name: "Merton Council",
    housingUrl: "https://www.merton.gov.uk/council-tax-benefits-and-housing/housing-advice/hmo",
    licensingUrl: "https://www.merton.gov.uk/council-tax-benefits-and-housing/private-housing/licensing",
  },
  licensing: [
    {
      name: "London Borough of Merton Designation of an Area for Additional Licencing 2023",
      type: "Additional HMO",
      area: "Seven wards: Colliers Wood, Cricket Green, Figge's Marsh, Graveney, Lavender Fields, Longthornton and Pollards Hill",
      appliesTo:
        "HMOs of 3 or more people forming 2 or more households (in practice shares of 3 or 4, as 5 or more need a mandatory licence); small converted buildings of two flats in under three storeys are exempt",
      period: "24 September 2023 to 23 September 2028",
      status: "In force",
    },
    {
      name: "London Borough of Merton Designation of an Area for Selective Licencing 2023",
      type: "Selective",
      area: "Four wards: Figge's Marsh, Graveney, Longthornton and Pollards Hill",
      appliesTo: "Privately rented homes let to a single household (not HMOs, not housing association lets)",
      period: "24 September 2023 to 23 September 2028",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo:
        "HMOs of 5 or more people forming more than one household (flats in purpose-built blocks of 3 or more self-contained flats exempt)",
      period: "National scheme, no end date",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Homes built 1919 to 1939", value: "36.8% (London 22.2%)", source: "VOA 2025" },
    { label: "Households in terraced houses", value: "35.7% (London 21.3%)", source: "Census 2021" },
    { label: "Households in purpose-built flats", value: "28.4% (London 40.3%)", source: "Census 2021" },
  ],
  overview: [
    "Merton had no discretionary licensing until 24 September 2023. Since then, selective licensing has covered single-household lets in four wards, and additional HMO licensing has covered shares of three or four people in seven, as set out below. Both designations run to 23 September 2028.",
    "When officers updated the HMO research for 2022 to 2025, the same seven wards were still the most affected by HMO issues.",
    "In February 2026 the council's Cabinet set aside £300,000 to gather evidence on extending both schemes borough-wide. If the evidence supports it, a statutory consultation is planned for January to March 2027. The report warns the evidence may support only the existing seven wards.",
    "HMO planning control already reaches every ward, and the council publishes its own fire safety standard for all privately rented homes, licensed or not. Applications are made one property at a time on Merton's online Regulatory Services Hub.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Merton: the report is read before anyone visits",
      body: [
        "Merton grants a licence after a desktop check of the application, then decides when to inspect by risk, aiming to visit every licensed property within the scheme's five years. Until an officer calls, the electrical report uploaded with the application, which must be dated within the last five years, is what the council has to judge the installation on.",
        "That puts houses in the frame as well as flats. In the four selective wards, a house let to one family needs a licence. Terraced houses also make up a much larger share of Merton's homes than of London's, as the figures below show.",
        "The licence then adds a record-keeping duty: every electrical report obtained during the licence must be kept for its full term, not only the latest one.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety in Merton HMOs: one cooker for every five sharers",
      body: [
        "Merton's HMO amenity standards count cookers by occupants: one full set, with oven, grill and four rings, for every five people. A shared kitchen may serve no more than five people. It must be no more than one floor from the rooms it serves, unless there is a dining area or lounge on the kitchen's own floor.",
        "A sixth sharer can therefore mean a second cooker set, in a larger kitchen or a second one. If it runs on gas, have the Gas Safe engineer who fits it record the work, and make sure it is on the gas safety record.",
        "The standards also say the cooker must not compromise the means of escape. If a gas cooker sits on or beside the escape route, raise it before the engineer's visit, because moving it is gas work as well as a layout change.",
      ],
    },
    epc: {
      heading: "EPCs in Merton: about 671 private lets below the E line in 2022",
      body: [
        "About 671 of Merton's private rented homes were likely to fall below the minimum E rating, according to a 2022 study for the council. Of the private rented EPCs it examined, 15.3% were rated E, F or G and 2.3% F or G.",
        "The same study found that flats make up 56% of Merton's private rented stock on EPC records, even though most Merton households live in houses.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Merton: the guide's line at five occupants",
      body: [
        "Merton's fire safety guide for private rented homes draws its main line at five occupants. A shared house of three or four needs no 30-minute protected escape route, while one of five or more does. The guide adds that more may be needed after an inspection or a risk assessment.",
        "An assessment of a Merton shared house should therefore record the number of occupants it assumed, and be repeated before an extra tenancy takes the house past that line.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Merton",
      body: [],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Merton",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical fault finding in Merton",
      body: [],
    },
    "fuse-box-installation": {
      heading: "Consumer unit upgrades in Merton",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Merton: not expected in a family let",
      body: [
        "Merton's fire guide sets no emergency lighting requirement for a single-household let, even a three-storey house. In HMOs, one of the triggers it lists for emergency lighting to BS 5266-1:2016 is an internal stair serving several occupiers. A converted house where one internal stair serves several lettings is therefore the case to check first, because that trigger does not depend on the number of floors.",
      ],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Merton",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler replacement in Merton: a council loan for the greener option",
      body: [
        "As of October 2026, Merton's grants and finance page lists the Home Energy Efficiency Loan, a low-interest council loan arranged through Lendology for energy efficiency or renewable works. Residential landlords as well as homeowners may be eligible. If a failed boiler has you weighing a renewable system against a like-for-like replacement, check eligibility with the council before committing to either.",
      ],
    },
    "fire-safety-certificate": {
      heading: "Fire safety certificates in Merton",
      body: [],
    },
    "fire-alarm-installation": {
      heading: "Fire alarms in Merton family lets: the three-storey house",
      body: [
        "For a single-household let, Merton's fire guide sets two levels. A flat on one floor or a two-storey house needs Grade F1 smoke alarms in the circulation spaces plus a heat alarm in the kitchen.",
        "A house on three storeys needs Grade D1 mains-wired smoke alarms on each floor, interlinked with a heat alarm in the kitchen. Standalone alarms that meet the national smoke alarm rule fall short of that. A three-storey family let is therefore where wiring and interlinking are most likely to be needed before the next tenancy.",
      ],
    },
    "fire-door-certificate": {
      heading: "Fire doors in Merton: the hinge, closer and lock the guide names",
      body: [
        "Merton's fire guide specifies fire doors to BS 8214. It calls for steel butt hinges of at least 100mm by 75mm, a self-closer to BS EN 1154 and thumb-turn locks rather than keyed ones. The guide also says fire doors should be inspected periodically, so check an existing door's hinges, closer and lock against those standards, not only its fire rating.",
      ],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguishers in Merton HMOs: a 3kg CO2 unit in large shared kitchens",
      body: [
        "Merton's fire guide names the extinguisher: a large HMO of five or more people needs a 3kg CO2 extinguisher in the shared kitchen, alongside a fire blanket. A small HMO of three or four needs the fire blanket only.",
      ],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Merton",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Merton",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Merton",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "Are serious hazards in Merton rentals limited to the licensing wards?",
        answer:
          "No. A 2022 study for the council estimated 6,068 privately rented homes in Merton with at least one Category 1 hazard. Graveney had the most, 468, but Raynes Park (451) and Hillside (435) came close. Neither is a licensing ward, so a family let in either carries no licence condition on its electrical report. The study also put Hillside's private rented share at 46.9%, the highest of any ward.",
      },
    ],
    "fire-safety-certificate": [
      {
        question: "Are Merton's shared houses only in the licensing wards?",
        answer:
          "No. A 2022 study for the council estimated 1,774 shared-amenity HMOs spread across all 20 wards, with Graveney highest at 235, and predicted that 1,349 of them had at least one serious hazard. The council's fire safety guide applies to all privately rented homes. Outside the seven additional licensing wards, a share of three or four needs no licence, but the guide is still the standard it is measured against.",
      },
    ],
  },
  sources: [
    {
      label: "Merton Council: Property licensing for landlords and letting agents",
      url: "https://www.merton.gov.uk/council-tax-benefits-and-housing/private-housing/licensing",
    },
    {
      label: "Merton Council: Apply for a licence",
      url: "https://www.merton.gov.uk/council-tax-benefits-and-housing/private-housing/licensing/apply-licence",
    },
    {
      label: "Merton Council: Mandatory HMO licence",
      url: "https://www.merton.gov.uk/council-tax-benefits-and-housing/private-housing/licensing/mandatory-hmo",
    },
    {
      label: "Merton Council: Additional HMO licence",
      url: "https://www.merton.gov.uk/council-tax-benefits-and-housing/private-housing/licensing/additional-hmo-licence",
    },
    {
      label: "Merton Council: Selective licence",
      url: "https://www.merton.gov.uk/council-tax-benefits-and-housing/private-housing/licensing/selective-licence",
    },
    {
      label: "Merton Council: Additional licensing public notice (June 2023)",
      url: "https://www.merton.gov.uk/system/files/2023.06.19_additional_licensing_public_notice_final-web.pdf",
    },
    {
      label: "Merton Council: Selective licensing public notice (June 2023)",
      url: "https://www.merton.gov.uk/system/files/2023.06.19_selective_licensing_public_notice_final-web.pdf",
    },
    {
      label: "Merton Council: Private rented sector consultation",
      url: "https://www.merton.gov.uk/council-tax-benefits-and-housing/private-housing/prsconsultation",
    },
    {
      label: "Merton Council: Cabinet, 16 February 2026",
      url: "https://democracy.merton.gov.uk/ieListDocuments.aspx?CId=146&MId=4744&Ver=4",
    },
    {
      label: "Merton Council: Cabinet report on borough-wide HMO Article 4 and licensing (February 2026)",
      url: "https://democracy.merton.gov.uk/documents/s58114/2026-02-16%20Extension%20of%20HMO%20Article%204%20and%20landlord%20licensing%20borough%20wide%20v9%20whole%20borough%20002.pdf",
    },
    {
      label: "Merton Council: Full Council, 16 September 2026 (Article 4 direction for small HMOs confirmed)",
      url: "https://democracy.merton.gov.uk/ieListDocuments.aspx?CId=142&MId=4825",
    },
    {
      label: "Merton Council: Houses in multiple occupation",
      url: "https://www.merton.gov.uk/council-tax-benefits-and-housing/housing-advice/hmo",
    },
    {
      label: "Merton Council: Guidance on fire safety in privately rented properties",
      url: "https://www.merton.gov.uk/sites/default/files/2026-06/Guide%20to%20Firesafety%20in%20Private%20Rented%20Properties%20%284%29.pdf",
    },
    {
      label: "Merton Council: HMO amenity standards",
      url: "https://www.merton.gov.uk/sites/default/files/2026-06/HMO%20Amenity%20Standards.pdf",
    },
    {
      label: "Merton Council: Article 4 directions",
      url: "https://www.merton.gov.uk/planning-and-buildings/permitted-development-and-prior-approval/article-4",
    },
    {
      label: "Merton Council: Private rented sector stock report (Metastreet, September 2022)",
      url: "https://www.merton.gov.uk/system/files/Metastreet%20LBM%20PRS%20report.pdf",
    },
    {
      label: "Merton Council: Grants and finance",
      url: "https://www.merton.gov.uk/council-tax-benefits-and-housing/warm-green-homes/grants-and-finance",
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
      "Most Merton homes predate 1939, and the inter-war years, not the Victorian era, are the largest single build period. Only 26.5% of council tax properties were built before 1919, below London's 29.1%, and about 88% predate 2000 (VOA 2025). Flats in converted or shared houses hold 9.2% of households, against 11.1% London-wide (Census 2021).",
    landlordContext:
      "At the 2021 Census, 29.1% of Merton households rented privately, close to London's 30.0%. Owner-occupation was 55.6% (London 45.2%) and social renting 14.2% (London 23.1%).",
  },
};

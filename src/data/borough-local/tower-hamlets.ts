import type { BoroughLocal } from "./types";

export const towerHamlets: BoroughLocal = {
  slug: "tower-hamlets",
  checkedOn: "2026-10-16",
  council: {
    name: "Tower Hamlets Council",
    housingUrl:
      "https://www.towerhamlets.gov.uk/lgnl/housing/Private-tenants-landlords-and-homeowners/Property-licensing/Licence-terms-and-conditions/Landlord-responsibilities.aspx",
    licensingUrl:
      "https://www.towerhamlets.gov.uk/lgnl/housing/Private-tenants-landlords-and-homeowners/Property-licensing/Property-licensing.aspx",
  },
  licensing: [
    {
      name: "Additional Licensing Scheme 2023 Designation",
      type: "Additional HMO",
      area: "Whole borough",
      appliesTo:
        "Homes, including flats, shared by 3 or more people from 2 or more households who share a kitchen or bathroom; resident landlords with more than 2 lodgers; and flats of 5 or more sharers in purpose-built blocks of 3 or more flats",
      period: "1 April 2024 to 31 March 2029",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo:
        "HMOs of 5 or more people from 2 or more households, whatever the number of storeys, and flats of 5 or more sharers in buildings of up to two flats, including flats above or below shops. Each qualifying flat needs its own licence",
      period: "Ongoing (national scheme)",
      status: "In force",
    },
    {
      name: "Selective licensing (Weavers, Whitechapel, Spitalfields and Banglatown)",
      type: "Selective",
      area: "Weavers, Whitechapel, and Spitalfields and Banglatown wards",
      appliesTo:
        "Homes let to one household or to 2 sharers. No new applications after 30 September 2026; licences already issued stay valid, with their conditions, until they expire",
      period: "1 October 2021 to 30 September 2026",
      status: "Expired",
    },
  ],
  stockFacts: [
    { label: "Households renting privately", value: "38.2% (London 30.0%)", source: "Census 2021" },
    { label: "Households in purpose-built blocks of flats", value: "80.7% (London 40.3%)", source: "Census 2021" },
    {
      label: "Homes built in 2000 or later",
      value: "44.8%, the highest share in London (London 17.9%)",
      source: "VOA 2025",
    },
    { label: "Conservation areas", value: "58", source: "Tower Hamlets Council" },
  ],
  overview: [
    "Private renting is the largest tenure in Tower Hamlets. At the 2021 Census, 38.2% of households rented privately, against 30.0% across London, and only 23.1% owned their home.",
    "The stock is newer than anywhere else in the capital. VOA figures for 2025 date 44.8% of council tax properties to 2000 or later, the highest share of any London borough. At the 2021 Census, 80.7% of households lived in purpose-built blocks of flats.",
    "As of October 2026, additional HMO licensing covers the whole borough until 31 March 2029, from three sharers in two or more households. The selective scheme in Weavers, Whitechapel, and Spitalfields and Banglatown ended on 30 September 2026, and there is no selective scheme now. Licences it issued run until they expire.",
    "Applications go through the council's online portal and need a gas safety check or commissioning certificate, an electrical one for flats and HMOs, and floor plans with room sizes. You must also know where the fire detection and sounders are sited. The council says applications are currently taking up to 12 months to complete.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Tower Hamlets: from build certificate to first periodic report",
      body: [
        "Tower Hamlets' licence application list accepts either an electrical safety check or a commissioning certificate as the electrical evidence for flats and HMOs. With so much of the borough built since 2000, the document in a landlord's file may be the installation certificate issued when the block was finished, not a periodic report.",
        "Check its date before relying on it. A periodic EICR is due within five years of the last inspection, and the council says applications are currently taking up to 12 months to complete. A certificate approaching five years old can therefore lapse while you wait for a decision.",
        "Converted buildings are the exception to the new-build picture. For a flat in a former warehouse, school or church, book a full inspection rather than assuming the installation was renewed at conversion.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety in Tower Hamlets: fewer gas-heated homes than most of London",
      body: [
        "Gas heating is far less common in Tower Hamlets than across London. At the 2021 Census, 48.4% of households had mains gas as their only central heating, against 70.5% in London. Another 28.1% had electric heating only (London 12.6%) and 8.3% relied only on a district or communal heat network (London 3.4%).",
        "So check what is in the flat before booking. The annual gas safety record covers the gas appliances in the let home. A flat with no gas appliances has nothing to renew, while one heated by a heat network may still have a gas hob that needs checking.",
        "Where there is gas, the record also serves the licence. An application must include a gas safety check or commissioning certificate, and every Tower Hamlets licence makes annual renewal of the gas safety certificate a condition.",
      ],
    },
    epc: {
      heading: "EPCs in Tower Hamlets: 2010s blocks reaching their first renewal",
      body: [
        "More than a quarter of Tower Hamlets' council tax properties, 28.1%, were built in 2010 or later (VOA 2025). An EPC lodged when a block was completed lasts ten years, so a flat in a block finished in 2016 sees that first certificate expire in 2026. A valid one is needed before the flat is next marketed or let, so check the register date before re-letting.",
        "Older streets need a different check. Among the borough's 58 conservation areas are Tredegar Square, Wapping Wall, and Brick Lane and Fournier Street. Read the area's management guidelines before acting on recommendations that change the outside of a building.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Tower Hamlets: the flat, the block and the licence",
      body: [
        "Tower Hamlets Council says it cannot carry out individual fire risk assessments on site. For larger HMOs, its landlord guidance suggests engaging a competent fire risk assessor and points to the LACORS fire safety guidance.",
        "In this borough the split between flat and block matters more than usual: 80.7% of households live in purpose-built blocks of flats, about double the London share (Census 2021). Additional licensing reaches shares of three or more people inside flats, so a licensed flat share in a block carries the licence's fire safety conditions inside the flat. The block's own assessment, under the Fire Safety Order, covers only the common parts.",
        "Before booking, find out who holds the block assessment and what it says about your floor. Then commission one for the flat share's own shared areas, which the Order also covers because the flat is an HMO.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing as proof for a Tower Hamlets licence condition",
      body: [
        "Every Tower Hamlets property licence includes a condition requiring proof that the electrical appliances and furniture supplied are kept safe. For the appliances, a dated PAT record listing each landlord-supplied item is the clearest proof you can hold.",
        "Keep the furniture evidence in the same file as the PAT record, so one folder answers the whole condition when the licensing team asks. Retest after replacing a kettle, heater or washing machine.",
      ],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Tower Hamlets",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Tracing faults before a Tower Hamlets HMO inspection",
      body: [
        "Tower Hamlets runs a proactive inspection programme for HMOs, so a visit does not wait for a complaint, and test certificates can be requested at short notice. If an EICR has left a fault marked for further investigation, book a diagnostic visit to find the cause, so you can show the fault has been dealt with.",
      ],
    },
    "fuse-box-installation": {
      heading: "Consumer unit replacements in Tower Hamlets",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Escape-route lighting in Tower Hamlets HMOs and who may test it",
      body: [
        "Tower Hamlets' Property Licensing Guidance for landlords and agents describes emergency lighting as lighting on the escape route. It says emergency lighting and fire alarm work needs the same competence as other electrical work, with registration on an approved scheme, or a fire safety engineering qualification.",
        "Ask for the tester's registration before the visit and keep the certificate with your fire safety records.",
      ],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Tower Hamlets",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler installation in Tower Hamlets",
      body: [],
    },
    "fire-safety-certificate": {
      heading: "Fire detection evidence for a Tower Hamlets licence",
      body: [
        "Tower Hamlets asks about fire detection at two stages. To apply, you must know where the fire detection and sounders are sited. Once licensed, a condition requires proof that the fire detection and smoke alarm system is installed and working.",
        "A fire safety certificate that lists each detector, sounder and control panel answers both. Mark the device locations on a plan of the property, so the same record serves the application and any later request from the licensing team.",
      ],
    },
    "fire-alarm-installation": {
      heading: "Sizing a fire alarm system for a Tower Hamlets let",
      body: [
        "Tower Hamlets' additional licensing starts at three sharers from two households, so re-letting a family flat as a share can change the detection it needs. The council's landlord guidance says a smaller home let to one family may only need a smoke detector on each floor. A larger HMO may need a full interlinked system.",
        "Size the system for how the property is let, not how it was built. Design it to BS 5839 Part 6, the standard the council's licensing guidance refers to for alarm systems in homes.",
      ],
    },
    "fire-door-certificate": {
      heading: "Fire doors inside Tower Hamlets flat shares",
      body: [
        "In a Tower Hamlets flat share licensed under the additional scheme, the doors that matter are inside the flat as well as at its entrance. Check bedroom and kitchen doors on the escape route against the LACORS fire safety guide, which the council links to from its Fire safety in HMOs page.",
        "That page also flags extra duties under the Fire Safety (England) Regulations 2022 for HMOs in multi-storey or multi-occupied buildings.",
      ],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguisher testing in Tower Hamlets",
      body: [],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Tower Hamlets",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Tower Hamlets: check the build date first",
      body: [
        "Only about 54% of Tower Hamlets' council tax properties were built before 2000, against about 81% across London (VOA 2025). Nearly all of the rest postdate the 1999 asbestos ban, so the first question for a survey here is when the building went up.",
        "For an older flat in a block, also ask whoever manages the common parts for the block's asbestos register before works that could disturb shared areas.",
      ],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Tower Hamlets",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "Who counts as a competent electrical inspector for a Tower Hamlets licence?",
        answer:
          "The council's Property Licensing Guidance for landlords and agents asks for an inspector qualified to at least AQA VRQ domestic standard. The inspector must also be registered with an approved scheme, such as NICEIC, NAPIT, ELECSA, BSI or BRE. Check the inspector's scheme membership before the visit so the report supports your application.",
      },
      {
        question: "What else does a Tower Hamlets licence application need?",
        answer:
          "Alongside the electrical certificate, the council asks for a gas safety check or commissioning certificate and floor plans showing room sizes. You must also know where the fire detection and sounders are sited. Drafts on the council's online portal are deleted automatically 90 days after they are started, so gather these documents first.",
      },
    ],
    "gas-safety-certificate": [
      {
        question: "What does Tower Hamlets' guidance say about choosing a gas engineer?",
        answer:
          "The council's Property Licensing Guidance reminds landlords that Gas Safe registration is not sufficient on its own: the engineer must be qualified for the specific appliances installed. Compare the appliance categories on the engineer's registration with the boiler, hob or fire in the flat before the visit.",
      },
    ],
    epc: [
      {
        question: "Whose planning guidance applies to a let in Fish Island or Three Mills?",
        answer:
          "Tower Hamlets decides all planning applications there, but the London Legacy Development Corporation (LLDC) Local Plan and its guidance still apply until a new Tower Hamlets Local Plan replaces them. The Fish Island and White Post Lane conservation area and the Three Mills conservation area both lie in the area once covered by the LLDC. Check the council's guidance and the LLDC's before planning external energy works.",
      },
    ],
    "fire-risk-assessment": [
      {
        question: "Can I turn a family home into a small HMO in Tower Hamlets without planning permission?",
        answer:
          "Not inside the council's Article 4 implementation area. A direction in force since 1 January 2021 removes the permitted development right to change a house or flat into a small HMO (C3 to C4). Planning permission is therefore needed. Check the council's map of the area before planning a conversion and the fire safety works that come with it.",
      },
      {
        question: "What happens if I let an unlicensed HMO in Tower Hamlets?",
        answer:
          "The council says it can lead to a criminal conviction and an unlimited fine, or a financial penalty of up to £40,000. Rent repayment orders of up to 24 months' rent are also possible. The council adds that landlords of unlicensed properties cannot use the no-fault possession grounds under the Renters' Rights Act 2025.",
      },
    ],
    "pat-testing": [
      {
        question: "Does a two-person flat share need a Tower Hamlets licence?",
        answer:
          "No. The council says two people forming two households do not need a licence. While the selective scheme ran, that exemption did not apply in Weavers, Whitechapel, and Spitalfields and Banglatown, but the scheme ended on 30 September 2026. A third sharer from another household brings the flat into additional licensing anywhere in the borough.",
      },
    ],
    "fire-safety-certificate": [
      {
        question: "What room sizes does a licensed HMO in Tower Hamlets need?",
        answer:
          "A sleeping room must be at least 8.5 m² for one person and 13 m² for two, under the standards Tower Hamlets adopted in October 2018. These rise to 13 m² and 18 m² where the kitchen is in the room. No room under 6.5 m² is accepted for sleeping.",
      },
    ],
    "fire-alarm-installation": [
      {
        question: "How do I apply for a licence in Tower Hamlets?",
        answer:
          "Mandatory and additional licence applications, and temporary exemption requests, go through the council's online landlord licensing portal. Payment needs a UK-registered bank card. An overseas landlord must name a UK-based responsible person with the authority and funds to arrange urgent repairs.",
      },
    ],
    "emergency-lights-certificate": [
      {
        question: "Is Tower Hamlets planning a new licensing scheme?",
        answer:
          "The council says it is considering options and has commissioned a private-rented stock modelling report, due in October 2026. No consultation had been published as of 16 October 2026. Its Housing Strategy 2026-2036 aims to improve standards through licensing covering more than 12,600 homes.",
      },
    ],
    "electrical-diagnostic": [
      {
        question: "Where can Tower Hamlets landlords hear about licensing changes?",
        answer:
          "The council runs a Landlords and Agents Forum that meets three times a year. It supports the London Landlord Accreditation Scheme and publishes a Tower Hamlets Private Renters' Charter setting out the standards it expects from landlords, along with public registers of its licences.",
      },
    ],
  },
  sources: [
    {
      label: "Tower Hamlets Council: Property licensing",
      url: "https://www.towerhamlets.gov.uk/lgnl/housing/Private-tenants-landlords-and-homeowners/Property-licensing/Property-licensing.aspx",
    },
    {
      label: "Tower Hamlets Council: Property licensing scheme",
      url: "https://www.towerhamlets.gov.uk/lgnl/housing/Private-tenants-landlords-and-homeowners/Property-licensing/Licences/Property-Licensing-Scheme.aspx",
    },
    {
      label: "Tower Hamlets Council: Additional licensing",
      url: "https://www.towerhamlets.gov.uk/lgnl/housing/Private-tenants-landlords-and-homeowners/Property-licensing/Licences/Additional-licensing.aspx",
    },
    {
      label: "Tower Hamlets Council: Mandatory HMO licensing",
      url: "https://www.towerhamlets.gov.uk/lgnl/housing/Private-tenants-landlords-and-homeowners/Property-licensing/Licences/Mandatory-House-in-Multiple-Occupation-HMO-licensing.aspx",
    },
    {
      label: "Tower Hamlets Council: Selective licensing",
      url: "https://www.towerhamlets.gov.uk/lgnl/housing/Private-tenants-landlords-and-homeowners/Property-licensing/Licences/Selective-licensing.aspx",
    },
    {
      label: "Tower Hamlets Council: What you need to make an application",
      url: "https://www.towerhamlets.gov.uk/lgnl/housing/Private-tenants-landlords-and-homeowners/Property-licensing/Licences/What-do-I-need-to-make-an-application.aspx",
    },
    {
      label: "Tower Hamlets Council: Licence exemptions",
      url: "https://www.towerhamlets.gov.uk/lgnl/housing/Private-tenants-landlords-and-homeowners/Property-licensing/Licences/Licence-exemptions.aspx",
    },
    {
      label: "Tower Hamlets Council: Licence conditions",
      url: "https://www.towerhamlets.gov.uk/lgnl/housing/Private-tenants-landlords-and-homeowners/Property-licensing/Licence-terms-and-conditions/Licence-conditions.aspx",
    },
    {
      label: "Tower Hamlets Council: Penalties for unlicensed properties",
      url: "https://www.towerhamlets.gov.uk/lgnl/housing/Private-tenants-landlords-and-homeowners/Property-licensing/Licences/Penalties-for-unlicensed-properties.aspx",
    },
    {
      label: "Tower Hamlets Council: Landlord responsibilities",
      url: "https://www.towerhamlets.gov.uk/lgnl/housing/Private-tenants-landlords-and-homeowners/Property-licensing/Licence-terms-and-conditions/Landlord-responsibilities.aspx",
    },
    {
      label: "Tower Hamlets Council: Inspections of houses in multiple occupation",
      url: "https://www.towerhamlets.gov.uk/lgnl/housing/Private-tenants-landlords-and-homeowners/Property-licensing/Property-licensing-guidance/Inspections-of-Houses-in-Multiple-Occupation-HMO.aspx",
    },
    {
      label: "Tower Hamlets Council: Fire safety in HMOs",
      url: "https://www.towerhamlets.gov.uk/lgnl/housing/Private-tenants-landlords-and-homeowners/Property-licensing/Fire-safety-in-HMOs.aspx",
    },
    {
      label: "Tower Hamlets Council: Property Licensing Guidance for landlords and agents",
      url: "https://www.towerhamlets.gov.uk/Documents/Housing/Housing-provision/Additional_licensing_scheme/TH-Landlord-Guidance-Final.pdf",
    },
    {
      label: "Tower Hamlets Council: Housing Strategy 2026-2036",
      url: "https://www.towerhamlets.gov.uk/lgnl/housing/housing_statements_and_strateg/Housing-Strategy-2026-2036.aspx",
    },
    {
      label: "Tower Hamlets Council: Article 4 directions",
      url: "https://www.towerhamlets.gov.uk/lgnl/planning_and_building_control/planning_policy_guidance/Article_4_directions.aspx",
    },
    {
      label: "Tower Hamlets Council: Conservation areas",
      url: "https://www.towerhamlets.gov.uk/lgnl/planning_and_building_control/conservation_and_urban_design/conservation_areas.aspx",
    },
    {
      label: "Tower Hamlets Council: London Legacy Development Corporation (LLDC) planning",
      url: "https://www.towerhamlets.gov.uk/lgnl/planning_and_building_control/planning_policy_guidance/London-Legacy-Development-Corporation-LLDC.aspx",
    },
    { label: "ONS Census 2021: TS046 Central heating (Nomis)", url: "https://www.nomisweb.co.uk/datasets/c2021ts046" },
    { label: "ONS Census 2021: TS054 Tenure (Nomis)", url: "https://www.nomisweb.co.uk/datasets/c2021ts054" },
    { label: "ONS Census 2021: TS044 Accommodation type (Nomis)", url: "https://www.nomisweb.co.uk/datasets/c2021ts044" },
    {
      label: "VOA: Council Tax Stock of Properties 2025",
      url: "https://www.gov.uk/government/statistics/council-tax-stock-of-properties-2025",
    },
  ],
  contextOverride: {
    propertyContext:
      "Tower Hamlets has the highest share of post-2000 housing in London: 44.8% of its homes, against 17.9% across the capital. Just 8.8% of households live in terraced houses, and pre-1900 buildings make up 10.7% of the stock, about half the London level. Four in five households live in purpose-built flats, and 3.5% in flats carved out of former warehouses, schools or churches.",
    landlordContext:
      "Private renting is the borough's largest tenure, at 38.2% of households in 2021 against 30.0% for London, with additional HMO licensing borough-wide until March 2029.",
  },
};

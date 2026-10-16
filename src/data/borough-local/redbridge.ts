import type { BoroughLocal } from "./types";

export const redbridge: BoroughLocal = {
  slug: "redbridge",
  checkedOn: "2026-10-16",
  council: {
    name: "Redbridge Council",
    housingUrl: "https://www.redbridge.gov.uk/housing/landlords/",
    licensingUrl: "https://www.redbridge.gov.uk/housing/landlords/selective-licensing/",
  },
  licensing: [
    {
      name: "The London Borough of Redbridge Additional HMO Licensing Scheme 2023",
      type: "Additional HMO",
      area: "Whole borough",
      appliesTo:
        "HMOs of 3 or more people in 2 or more households who share or lack a toilet, washing or cooking facilities, and section 257 converted blocks where all the flats are privately rented and in the same ownership or control (not buildings of two flats or fewer)",
      period: "18 September 2023 to 17 September 2028",
      status: "In force",
    },
    {
      name: "The London Borough of Redbridge Selective Licensing Scheme (Ilford Town and Valentines Wards) 2023 (Scheme 3)",
      type: "Selective",
      area: "Ilford Town and Valentines wards",
      appliesTo:
        "Most privately rented homes let to one person, two people or a single household (HMOs, social lets and other statutory exemptions excluded)",
      period: "1 November 2023 to 31 October 2028",
      status: "In force",
    },
    {
      name: "The London Borough of Redbridge Selective Licensing (Scheme 4) 2024",
      type: "Selective",
      area:
        "15 wards: Aldborough, Barkingside, Chadwell, Churchfields, Clementswood, Cranbrook, Fairlop, Goodmayes, Hainault, Loxford, Mayfield, Newbury, Seven Kings, South Woodford and Wanstead Village",
      appliesTo:
        "Most privately rented homes let to one person, two people or a single household (HMOs, social lets and other statutory exemptions excluded)",
      period: "8 April 2024 to 7 April 2029",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo: "HMOs of 5 or more people in 2 or more households",
      period: "National scheme, no end date",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Households in terraced houses", value: "32.3% (London 21.3%)", source: "Census 2021" },
    { label: "Homes built 1900 to 1918", value: "18.5% (London 8.2%)", source: "VOA 2025" },
    {
      label: "Households in flats in converted or shared houses",
      value: "6.5% (London 11.1%)",
      source: "Census 2021",
    },
  ],
  overview: [
    "Redbridge has licensed private lets beyond the national HMO scheme since 2017. When it consulted on renewing selective licensing in 2022-23, 57% of respondents supported it, including 70% of tenants but only 22% of landlords and agents. Wanstead Park was consulted on but left out, because its private rented share was below the national average.",
    "The council's case rested on poor property conditions and anti-social behaviour. Its June 2023 Cabinet report predicted a Category 1 hazard rate of 21 per 100 private rented homes, against 13% nationally. Its licence conditions go into detail on fire safety, down to fire doors and where meters may sit.",
    "Planning runs alongside licensing. Since 6 December 2019, turning a family house into a small HMO has needed planning permission anywhere in the borough. Licence applications are made online, and the licensing team answers queries at prslicensing@redbridge.gov.uk.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Redbridge: a licence condition across 17 wards",
      body: [
        "Selective licensing covers 17 Redbridge wards across Schemes 3 and 4. The council's 2023 Cabinet report estimated about 6,121 properties in the Scheme 3 wards (15.5% of the private rented sector) and about 30,294 in the Scheme 4 wards.",
        "On those selectively licensed lets, the licence conditions require a copy of the EICR to go to tenants at the start of each tenancy, so keep the current report ready for every new let.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety in Redbridge: the pipework the annual check leaves out",
      body: [
        "Redbridge's landlord guidance warns that installation pipework is not covered by the annual gas safety check. It passes on Gas Safe Register and HSE advice: ask the Gas Safe engineer to tightness-test the whole system and visually inspect the pipework, and keep a record of both.",
        "Ask for the tightness test and pipework inspection when you book the yearly check, so both are done on the same visit.",
      ],
    },
    epc: {
      heading: "EPCs in Redbridge: draughts, damp and an E rating for the licence",
      body: [
        "Private renters were the group most likely to call their home poor quality in Redbridge's 2022-23 housing strategy consultation (61%, against 40% of council tenants). Draughts, damp and mould were among the problems, and 90% of those responding chose energy efficiency measures such as insulation as their top priority.",
        "Draughts and poor insulation also pull a rating down, and in the selective wards the rating decides the licence: Redbridge approves selective licences only for homes rated A to E. In the Aldersbrook and Lake House and Bungalow Estate conservation areas, Article 4 directions bring replacement windows and doors under planning control, so start with insulation and draught-proofing there.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Redbridge: the walls beside the stairs",
      body: [
        "Redbridge's mandatory HMO conditions look at the building fabric along the escape route, not only alarms and doors. Lath-and-plaster walls next to the staircase must be upgraded to 30 minutes' fire resistance, and so must the underside of the stairs and any loft hatch. Polystyrene tiles are not allowed on escape route surfaces.",
        "An assessment of a shared house here should therefore record how those walls, soffits and hatches are built, so the action plan covers them rather than stopping at the doors and detectors.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Redbridge: on the selective application too",
      body: [
        "No national rule sets PAT testing for a single let, but Redbridge asks for a PAT certificate with a selective licence application as well as an HMO one. A flat or house let to a single household in a selective ward therefore needs its landlord-supplied appliances tested.",
        "In a mandatory-licensed HMO, the council's appliance condition is titled \"Portable Appliance Testing (PAT) and furniture safety\", so check the supplied furniture at the same visit as the appliances.",
      ],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Redbridge",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical fault finding in Redbridge",
      body: [],
    },
    "fuse-box-installation": {
      heading: "Consumer units in Redbridge HMOs: where the board sits",
      body: [
        "In a mandatory-licensed Redbridge HMO, the position of the consumer unit is a licence matter. Any gas or electric meter or consumer unit on the escape route must be enclosed in 30-minute fire-resisting construction within two months of the licence. A non-habitable basement housing meters also needs 30-minute separation from the ground floor.",
        "The enclosure duty is tied to a board on the escape route. So if an EICR leads to a new consumer unit, consider siting it off the route altogether; if it has to stay on the route, plan the 30-minute enclosure as part of the same job.",
      ],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Redbridge HMOs: positions agreed with an officer",
      body: [
        "Where a Redbridge HMO needs emergency lighting, a council officer agrees where the luminaires go. The mandatory conditions fix the type: self-contained, non-maintained fittings with a three-hour duration (NM/3) to BS 5266, installed within two months of the licence. Agree the layout with the officer before the electrician starts, so fittings do not have to be moved afterwards.",
      ],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Redbridge",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler installation in Redbridge",
      body: [],
    },
    "fire-safety-certificate": {
      heading: "Fire safety certificates in Redbridge: who carries out the annual service",
      body: [
        "Redbridge is specific about who services an HMO's fire alarm and emergency lighting. Its additional and mandatory HMO conditions require both to be inspected and serviced every year by a person accredited through a UKAS-accredited certification body. The alarm must also be tested monthly, with each test logged.",
        "Before booking, ask the contractor which certification body accredits them, because a service record from someone without that accreditation does not meet the condition.",
      ],
    },
    "fire-alarm-installation": {
      heading: "Fire alarm installation in Redbridge",
      body: [],
    },
    "fire-door-certificate": {
      heading: "Fire doors in Redbridge HMOs: the cupboard under the stairs",
      body: [
        "Redbridge's fire door list for mandatory-licensed HMOs reaches a cupboard. If the space under the stairs holds the meters or the consumer unit, its door must be an FD30S set with a self-closer and combined intumescent strips and smoke seals. Doors to bedrooms, shared kitchens and communal living rooms need the same set.",
        "Include that cupboard in the survey, and check that bedroom locks open from the room side without a key.",
      ],
    },
    "fire-extinguisher-testing": {
      heading: "Fire blankets in Redbridge HMOs: count the bedsits",
      body: [
        "Redbridge's mandatory HMO conditions ask for a BS 6575 light-duty fire blanket in each shared kitchen and in every bedsit with its own cooking. Count the bedsits as well as the kitchens when you check the equipment.",
      ],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Redbridge",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Redbridge",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Redbridge",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "My let is in Wanstead Park. Is its EICR a licence condition?",
        answer:
          "Not for a single-household let. Wanstead Park was consulted on but left out of selective licensing, because its private rented share did not reach the national average of 19%. A family let there needs no selective licence, so the EICR is a legal duty but not a licence condition. A shared house there is different: the additional HMO scheme covers the whole borough.",
      },
      {
        question: "Redbridge's register shows my address wrongly after its system change. What should I do?",
        answer:
          "Redbridge says it is moving to a new licensing system and that some addresses on its public register, which is searchable by postcode, were shown wrongly. Check your entry and email prslicensing@redbridge.gov.uk if it is wrong. New applications are made online through the council's property licensing portal.",
      },
    ],
    "fire-risk-assessment": [
      {
        question: "What licence do I get if my Redbridge HMO lacks planning consent?",
        answer:
          "Normally a one-year licence, and the additional conditions ask for a planning application within three months. Since 6 December 2019, a borough-wide Article 4 Direction has required planning permission for new small HMOs of three to six unrelated people. Small HMOs already in that use before then do not need retrospective consent, and HMOs of seven or more always need permission.",
      },
    ],
    "pat-testing": [
      {
        question: "Do I need landlord training to hold a Redbridge licence?",
        answer:
          "Both HMO and selective applications ask for proof that the licence holder has completed a landlord accreditation course within 18 months of the full licence. Redbridge accepts accreditation through LLAS and other listed bodies, and accredited landlords pay less for each licence. The council also runs a free landlord forum every three months, held online.",
      },
    ],
    "fire-safety-certificate": [
      {
        question: "How often should I inspect a licensed Redbridge property myself?",
        answer:
          "Redbridge's conditions set the intervals. Homes under the additional HMO scheme must be inspected at least every four months and selectively licensed homes at least every six months, with a written log. Under the mandatory HMO conditions, the common parts are checked monthly and the lettings every six months. The monthly fire alarm test entries can sit in the same log.",
      },
    ],
    "fire-alarm-installation": [
      {
        question: "Can a wireless alarm meet Redbridge's HMO conditions?",
        answer:
          "Yes. Redbridge's mandatory HMO conditions accept BS 5839-compliant wireless systems, which can save lifting floors in an occupied house. Redbridge counts basements when it sets the grade, so a house with a basement and two floors above is treated as three storeys and needs a panel-based Grade A system, in place within two months of the licence.",
      },
    ],
  },
  sources: [
    { label: "Redbridge Council: Landlords", url: "https://www.redbridge.gov.uk/housing/landlords/" },
    {
      label: "Redbridge Council: Houses in multiple occupation (HMO) licensing",
      url: "https://www.redbridge.gov.uk/housing/landlords/houses-in-multiple-occupation-licensing/",
    },
    {
      label: "Redbridge Council: Selective licensing",
      url: "https://www.redbridge.gov.uk/housing/landlords/selective-licensing/",
    },
    {
      label: "Redbridge Council: Additional HMO licence conditions",
      url: "https://www.redbridge.gov.uk/housing/landlords/houses-in-multiple-occupation-licensing/additional-hmo-licence-conditions/",
    },
    {
      label: "Redbridge Council: Mandatory HMO licence conditions",
      url: "https://www.redbridge.gov.uk/housing/landlords/houses-in-multiple-occupation-licensing/mandatory-hmo-licence-conditions/",
    },
    {
      label: "Redbridge Council: Selective licence conditions",
      url: "https://www.redbridge.gov.uk/housing/landlords/selective-licensing/selective-licence-conditions/",
    },
    {
      label: "Redbridge Council: Notice of designation, additional HMO licensing scheme",
      url: "https://www.redbridge.gov.uk/media/rxtl3gqa/notice-of-designation-for-additional-hmo-licensing-scheme.pdf",
    },
    {
      label: "Redbridge Council: Notice of designation, selective licensing Scheme 3",
      url: "https://www.redbridge.gov.uk/media/ec0a1m2j/notice-of-designation-for-selective-licensing-scheme-3.pdf",
    },
    {
      label: "Redbridge Council: Notice of designation, selective licensing Scheme 4",
      url: "https://www.redbridge.gov.uk/media/rihjjbnf/notice-of-designation-for-selective-licensing-scheme-4.pdf",
    },
    {
      label: "Redbridge Council: Cabinet report, renewal of selective licensing (June 2023)",
      url: "https://moderngov.redbridge.gov.uk/documents/s162110/8.%20Renewal%20of%20Selective%20Licensing%20-%20Report.pdf",
    },
    {
      label: "Redbridge Council: Property licensing register",
      url: "https://www.redbridge.gov.uk/housing/landlords/property-licensing-register/",
    },
    {
      label: "Redbridge Council: Landlord responsibilities",
      url: "https://www.redbridge.gov.uk/housing/landlords/landlord-responsibilities/",
    },
    {
      label: "Redbridge Council: Landlord accreditation",
      url: "https://www.redbridge.gov.uk/housing/landlords/landlord-accreditation/",
    },
    {
      label: "Redbridge Council: Landlord forum",
      url: "https://www.redbridge.gov.uk/housing/landlords/landlord-forum/",
    },
    {
      label: "Redbridge Council: Article 4 direction on C4 HMOs",
      url: "https://www.redbridge.gov.uk/planning-and-building/planning/article-4-direction-on-c4-hmos/",
    },
    {
      label: "Redbridge Council: HMO research paper (November 2018)",
      url: "https://www.redbridge.gov.uk/media/k3wgyzhl/hmo-research-paper-nov-2018.pdf",
    },
    {
      label: "Redbridge Council: Protected buildings and conservation areas",
      url: "https://www.redbridge.gov.uk/planning-and-building/protected-buildings-and-conservation-areas/",
    },
    {
      label: "Redbridge Council: Housing Strategy 2023 to 2028",
      url: "https://www.redbridge.gov.uk/media/cbvbjzkj/housing-strategy-2023-to-2028.pdf",
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
      "Redbridge is mostly a borough of houses rather than flats. Almost a quarter of council tax properties, 24.3%, were built in the 1930s, against 16.0% across London, and 61.2% pre-date 1945 (VOA 2025). Only 25.4% of households live in purpose-built flats, against 40.3% London-wide, while 27.0% live in semi-detached houses (Census 2021).",
    landlordContext:
      "At the 2021 Census, 30.4% of Redbridge households rented privately, close to London's 30.0%, while social renting was only 11.3%, against 23.1% across London.",
  },
};

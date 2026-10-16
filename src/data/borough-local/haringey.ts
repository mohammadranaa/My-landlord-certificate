import type { BoroughLocal } from "./types";

export const haringey: BoroughLocal = {
  slug: "haringey",
  checkedOn: "2026-10-16",
  council: {
    name: "Haringey Council",
    housingUrl: "https://haringey.gov.uk/housing/private-sector-renting",
    licensingUrl: "https://haringey.gov.uk/housing/private-sector-renting/property-licensing",
  },
  licensing: [
    {
      name: "Designation of an Area for Additional Licensing of Houses in Multiple Occupation No 4, 2024",
      type: "Additional HMO",
      area: "Whole borough",
      appliesTo:
        "Every HMO not covered by mandatory licensing, including section 257 converted buildings, so in practice every HMO in Haringey",
      period: "17 June 2024 to 16 June 2029",
      status: "In force",
    },
    {
      name: "Designation of an Area for Selective Licensing 2022",
      type: "Selective",
      area:
        "14 wards: Bounds Green, Bruce Castle, Harringay, Hermitage and Gardens, Noel Park, Northumberland Park, Seven Sisters, South Tottenham, St Ann's, Tottenham Central, Tottenham Hale, West Green, White Hart Lane and Woodside",
      appliesTo: "Privately rented homes let to a single household or to two people (not HMOs)",
      period: "17 November 2022 to 17 November 2027",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo:
        "HMOs occupied by five or more people, counting babies and children, except section 257 converted blocks and flats in purpose-built blocks of 3 or more flats",
      period: "National scheme, no end date",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Households renting privately", value: "35.6% (London 30.0%)", source: "Census 2021" },
    {
      label: "Households in flats in converted or shared houses",
      value: "22.8% (London 11.1%)",
      source: "Census 2021",
    },
    { label: "Homes built before 1919", value: "54.0% (London 29.1%)", source: "VOA 2025" },
    { label: "Licensed HMOs", value: "4,830", source: "Haringey Council consultation, 2024" },
  ],
  overview: [
    "At Census 2021, social renting accounted for 25.2% of Haringey's 105,091 households and owner-occupation for 37.2%, well under the London figure of 45.2%.",
    "Each licence application has to arrive with the right certificates. An HMO application without the gas safety certificate, the electrical safety certificate, a floor plan and the EPC is refused and withdrawn, and the fee is not refunded. A selective applicant must upload the EPC, the EICR and, where there is gas, a gas safety certificate, and say where the smoke and carbon monoxide detectors are.",
    "Planning is a separate step. The council's HMO Article 4 Direction, in force since 30 November 2013, now covers the same 14 wards as the selective scheme, so turning a house into a small HMO there needs planning permission. Where an HMO lacks planning permission, the council usually grants a one-year licence while the use is regularised or ended.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Haringey: converted buildings and a refused application",
      body: [
        "In the council's HMO inspections from 2019 to 2023, section 257 converted buildings, made up of self-contained flats, had the highest rate of serious hazards of any HMO type. The rate was 164.7 per 100 inspected. Haringey's additional scheme brings these buildings into licensing.",
        "An HMO application without an electrical safety certificate is refused and withdrawn with no refund. After the licence is granted, the HMO licence conditions let the council ask for the EICR at any time, and it must arrive within 28 days.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety in Haringey: a copy on the wall and in every tenant's hands",
      body: [
        "Haringey's 2024 to 2029 HMO licence conditions require a copy of the current gas safety certificate to be displayed in the common parts. Every occupier must also be handed a copy when their tenancy starts.",
        "In the 14 selective wards, the tenant of a single-household let gets a copy at the start of the tenancy and again every year.",
        "The HMO conditions count halls, landings and bathrooms as rooms when deciding where a carbon monoxide alarm goes, so a boiler on a landing needs an alarm on that landing.",
      ],
    },
    epc: {
      heading: "EPCs in Haringey: the rating can shorten a selective licence",
      body: [
        "Haringey normally grants selective licences for up to five years, but an application without a valid EPC gets a one-year licence. The council's fee table also lists a failed EPC as grounds to cut up to four years. A rating of C or above earns a discount on the second part of the fee (as of October 2026).",
        "For HMOs, a licence condition requires the EPC to stay valid for the whole licence term, except where rooms are let individually with shared facilities.",
        "Haringey's guidance for buildings in its conservation areas favours reversible loft, floor and internal wall insulation, and secondary glazing over replacement windows. External wall insulation needs planning consent. Check an EPC's recommendations against that guidance before pricing the works.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Haringey: a Tottenham penalty and converted buildings",
      body: [
        "In January 2026, a Tottenham HMO owner and managing agent were given £12,500 in civil penalties for an unlicensed HMO. The case began with a damp and mould complaint and uncovered inadequate fire protection and dangerous stairs. The agent's tribunal appeal failed.",
        "Council HMO inspections from 2019 to 2023 found serious hazards in 27% of the properties visited.",
        "Haringey's licensing takes in section 257 converted buildings, so an assessment for one of them has to cover the common parts the flats share. Book it before you apply, so it is in place when the licence and its fire precautions condition start.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Haringey: a 21-day window on selective lets",
      body: [
        "Haringey's selective licence conditions name portable appliances. The holder must keep every electrical and portable appliance they supply safe and give the council a declaration on request. Documents must be produced within 21 days, against 28 days under the HMO conditions.",
        "That shorter window applies to single-household lets in the selective wards.",
      ],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Haringey",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical work in Haringey HMOs: kitchen socket numbers",
      body: [
        "Haringey's HMO Standards set a minimum number of kitchen sockets: one double socket for every 1,000mm of worktop in a shared kitchen, on top of the sockets serving fixed appliances. The council says all HMOs should meet these Standards alongside their licence conditions, so a shortfall is a gap against its own yardstick.",
        "Before adding sockets to reach the count, check the existing kitchen circuit can take the extra load.",
      ],
    },
    "fuse-box-installation": {
      heading: "Consumer unit replacement in Haringey",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Haringey HMOs: the staircase and the test certificate",
      body: [
        "Haringey's HMO Standards, which the council says all HMOs should meet, expect emergency lighting to the staircase \"in most cases\".",
        "The 2024 to 2029 HMO licence conditions give the holder 28 days to hand over the emergency lighting test certificate or periodic inspection report when the council asks.",
      ],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Haringey",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler installation in Haringey",
      body: [],
    },
    "fire-safety-certificate": {
      heading: "Fire safety in Haringey lets: furniture and the wards with most HMO hazards",
      body: [
        "Both Haringey licence types cover upholstered furniture. HMO conditions require it to meet fire safety legislation, with a declaration on demand. Selective conditions name the 1988 furniture fire safety regulations for single-household lets in the 14 selective wards.",
        "Council HMO inspections from 2019 to 2023 recorded the most serious hazards in Harringay and Northumberland Park wards. The council's modelling predicts the most hazardous additional HMOs in Tottenham Central. All three are selective wards, so a landlord there may hold either type of licence.",
      ],
    },
    "fire-alarm-installation": {
      heading: "Fire alarms in Haringey HMOs: the council decides the system",
      body: [
        "Haringey's HMO Standards leave the alarm specification to the council. It decides the automatic fire detection and alarm system needed for each building after consulting the Fire Authority, having regard to LACORS guidance.",
        "The licence conditions also count half-landings: where a half-landing has living accommodation, it needs a smoke alarm, positioned in line with LACORS.",
      ],
    },
    "fire-door-certificate": {
      heading: "Fire doors in Haringey: shared kitchens and a tribunal case",
      body: [
        "Haringey's HMO Standards set the kitchen door specification: a 30-minute fire door to each shared kitchen, fitted with intumescent strips, cold smoke seals and a self-closer.",
        "In a case the council reported in August 2026, a Muswell Hill tenant won a rent repayment order of £7,884.84 at tribunal over an unlicensed three-person HMO. She had also reported a lack of fire doors and smoke alarms.",
        "Three sharers are enough to need a licence here, because the additional scheme covers HMOs below the five-person mandatory threshold across the whole borough.",
      ],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguishers in Haringey HMOs: one for each staircase level",
      body: [
        "Haringey's HMO Standards ask for a multi-purpose fire extinguisher at each level of the staircase and a fire blanket in every kitchen. Count the staircase levels, not the tenants, when working out how many units a building needs. The 2024 to 2029 licence conditions then require that equipment to be maintained.",
      ],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Haringey",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Haringey",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Haringey",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "Is Haringey's selective licensing zone the same area as its HMO Article 4 zone?",
        answer:
          "Today, yes. The council lists the same 14 wards for the 2022 selective designation and for the Article 4 Direction on small HMOs. That direction has been in force since 30 November 2013 and is now mapped onto the current wards. In those wards a single-household let needs a selective licence, and turning a house into an HMO for three to six people needs planning permission. The selective street list is mostly N17 and N15 streets.",
      },
    ],
    "gas-safety-certificate": [
      {
        question: "How do Haringey licence applications work if I live outside the UK?",
        answer:
          "The council only accepts an application from a landlord living outside the UK if a UK-based managing agent signs up to the licence conditions. New and renewal applications go through the council's online property licensing portal, where you create an account first; a paper selective form costs extra. Where there is a gas supply, the gas safety certificate must be uploaded with the application.",
      },
    ],
    epc: [
      {
        question: "Does Haringey cut the selective licence fee for accredited landlords or several flats in one building?",
        answer:
          "As of October 2026, yes. Accredited landlords get money off the second part of the fee, with LLAS, NRLA, UKALA, ARLA, RICS or Safeagent membership accepted. Where one person owns or manages three or more rented flats in the same building, the first part is reduced for the second and later flats. The council aims to process applications within 90 days.",
      },
      {
        question: "Which Haringey conservation areas have Article 4 Directions?",
        answer:
          "Four: Noel Park, Peabody Cottages, Rookfield Estate and Tower Gardens. Their directions remove permitted development rights such as altering windows and doors, so changes that might otherwise go ahead without an application need consent there. That can affect window and door upgrades suggested in an EPC.",
      },
    ],
    "fire-risk-assessment": [
      {
        question: "Has Haringey licensed converted buildings before?",
        answer:
          "Yes. The council's 2024 consultation refers to a small additional scheme from 2011 to 2016 aimed at section 257 converted properties, concentrated in Harringay ward. Harringay was still the ward with the most licensed HMOs in the 2024 count, at 785, against 63 in Alexandra Park, the fewest.",
      },
    ],
    "commercial-eicr": [
      {
        question: "Can I see Haringey's full HMO register?",
        answer:
          "Not online. The council's public register covers all its licensing schemes but is not the full register, and applications still being processed do not appear. The complete HMO register can be viewed at the council offices by appointment through the Private Sector Housing Team, on 020 8489 5521 or propertylicensing@haringey.gov.uk, Monday to Friday.",
      },
    ],
    "fire-safety-certificate": [
      {
        question: "Are Haringey's HMO Standards the same as its licence conditions?",
        answer:
          "No. The HMO Standards date from December 2017 and set out what the council says every HMO should meet, from fire doors and alarms to kitchen sockets. The 2024 to 2029 licence conditions are separate terms attached to each HMO licence, covering the gas, electrical, fire and furniture paperwork the council can ask to see. A licensed HMO is measured against both.",
      },
    ],
    "fire-alarm-installation": [
      {
        question: "Can a Haringey HMO fire alarm run off an occupier's electricity supply?",
        answer:
          "Not under Haringey's HMO Standards, which say the fire alarm and the emergency lighting should run from a landlord's supply. The council treats those Standards as the level every HMO should meet, alongside the conditions attached to the licence.",
      },
    ],
    "boiler-installation": [
      {
        question: "What changes for a selective licence if I replace a solid fuel appliance with a gas boiler?",
        answer:
          "In Haringey's 14 selective wards, the selective application must include a gas safety certificate wherever there is a gas supply. Fitting a gas boiler therefore adds a gas safety certificate to the paperwork the council can ask for. The tenant must also get a copy at the start of the tenancy and each year.",
      },
    ],
    "asbestos-survey": [
      {
        question: "Does Haringey have a lot of post-war housing?",
        answer:
          "Proportionally less than London as a whole. VOA figures for March 2025 put about 15% of Haringey's council tax properties in the 1955 to 1982 build period, against 17.5% across London.",
      },
    ],
    "legionella-risk-assessment": [
      {
        question: "Does Haringey Council run a landlord forum?",
        answer:
          "Yes. Its landlord forum pages include slides from February 2024 covering damp and mould and minimum energy efficiency standards. In August 2026 the council also announced a quarterly Private Renters' Forum for tenants, with the first meeting set for 2 September 2026.",
      },
    ],
  },
  sources: [
    { label: "Haringey Council: Private sector renting", url: "https://haringey.gov.uk/housing/private-sector-renting" },
    {
      label: "Haringey Council: Property licensing",
      url: "https://haringey.gov.uk/housing/private-sector-renting/property-licensing",
    },
    {
      label: "Haringey Council: HMO licensing",
      url: "https://haringey.gov.uk/housing/private-sector-renting/property-licensing/house-multiple-occupation-hmo-licensing",
    },
    {
      label: "Haringey Council: Do I need an HMO licence?",
      url: "https://haringey.gov.uk/housing/private-sector-renting/property-licensing/house-multiple-occupation-hmo-licensing/do-i-need-an-hmo-licence",
    },
    {
      label: "Haringey Council: Applying for an HMO licence",
      url: "https://haringey.gov.uk/housing/private-sector-renting/property-licensing/house-multiple-occupation-hmo-licensing/applying-an-hmo-licence",
    },
    {
      label: "Haringey Council: HMOs and planning permission",
      url: "https://haringey.gov.uk/housing/private-sector-renting/property-licensing/house-multiple-occupation-hmo-licensing/hmos-planning-permission",
    },
    {
      label: "Haringey Council: Additional HMO licensing designation No 4, 2024 (public notice)",
      url: "https://haringey.gov.uk/sites/default/files/2024-03/public_notice_additional_hmo_licensing.pdf",
    },
    {
      label: "Haringey Council: HMO licence conditions 2024-2029",
      url: "https://haringey.gov.uk/sites/default/files/2024-07/hmo_licensing_conditions_2024-2029.pdf",
    },
    {
      label: "Haringey Council: HMO Standards (December 2017)",
      url: "https://haringey.gov.uk/sites/default/files/2023-11/hmo_standards.pdf",
    },
    {
      label: "Haringey Council: Additional HMO licensing consultation document (2024)",
      url: "https://www.haringey.gov.uk/sites/default/files/2024-02/additional_hmo_licensing_consultation_document.pdf",
    },
    {
      label: "Haringey Council: Do I need a selective licence?",
      url: "https://haringey.gov.uk/housing/private-sector-renting/property-licensing/selective-property-licensing/do-i-need-a-selective-licence",
    },
    {
      label: "Haringey Council: Applying for a selective property licence",
      url: "https://haringey.gov.uk/housing/private-sector-renting/property-licensing/selective-property-licensing/applying-a-selective-property-licence",
    },
    {
      label: "Haringey Council: Selective licensing fees and discounts",
      url: "https://haringey.gov.uk/housing/private-sector-renting/property-licensing/selective-property-licensing/selective-property-licensing-fees-discounts",
    },
    {
      label: "Haringey Council: Selective licensing designation notice (2022)",
      url: "https://haringey.gov.uk/sites/default/files/2023-11/notice_of_selective_licensing_designation_final.pdf",
    },
    {
      label: "Haringey Council: Selective licensing street list",
      url: "https://haringey.gov.uk/sites/default/files/2023-11/selective_licensing_designation_-_street_list.pdf",
    },
    {
      label: "Haringey Council: Selective licence conditions",
      url: "https://haringey.gov.uk/sites/default/files/2024-12/selective-licence-conditions-final.pdf",
    },
    {
      label: "Haringey Council: Public register of licensed premises",
      url: "https://haringey.gov.uk/housing/private-sector-renting/property-licensing/search-public-register-licensed-premises",
    },
    {
      label: "Haringey Council: Article 4 Direction, houses in multiple occupation",
      url: "https://haringey.gov.uk/planning-building-control/planning/planning-policy/article-4-directions/article-4-direction-houses-multiple-occupation",
    },
    {
      label: "Haringey Council: Article 4 Directions in Haringey",
      url: "https://haringey.gov.uk/planning-building-control/planning/planning-policy/article-4-directions/article-4-directions-haringey",
    },
    {
      label: "Haringey Council: List of conservation areas",
      url: "https://haringey.gov.uk/planning-building-control/planning/planning-policy/design-conservation/conservation-areas/conservation-areas-haringey/list-conservation-areas-haringey",
    },
    {
      label: "Haringey Council: Listed buildings",
      url: "https://haringey.gov.uk/planning-building-control/planning/planning-policy/design-conservation/listed-buildings/haringeys-listed-buildings",
    },
    {
      label: "Haringey Council: Energy efficiency in conservation areas",
      url: "https://haringey.gov.uk/planning-building-control/planning/planning-policy/design-conservation/conservation-areas/conservation-areas/development-conservation-areas/energy-efficiency-conservation-areas",
    },
    { label: "Haringey Council: Smoke control", url: "https://haringey.gov.uk/environment/pollution/smoke-control" },
    {
      label: "Haringey Council: Landlord forum",
      url: "https://haringey.gov.uk/housing/private-sector-renting/landlords/landlord-forum",
    },
    {
      label: "Haringey Council news: Private Renters' Forum (August 2026)",
      url: "https://haringey.gov.uk/news/20260804/renters-forum-announced-to-take-rogue-landlords",
    },
    {
      label: "Haringey Council news: Unlicensed HMO penalty (January 2026)",
      url: "https://haringey.gov.uk/news/20260120/unlicensed-hmo-hit-with-ps12500-penalty-haringey",
    },
    {
      label: "Haringey Council news: Rent repayment order, unlicensed HMO (August 2026)",
      url: "https://haringey.gov.uk/news/20260826/tenant-awarded-nearly-ps8000-repeat-offender-landlord-after-taking-unlicensed-hmo-case-to-tribunal",
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
      "Haringey's homes are older than London's as a whole: 36.5% of council tax properties were built before 1900, against 20.9% London-wide (VOA 2025). Terraced houses hold 25.6% of households and purpose-built flats 35.4% (Census 2021). Of the licensed HMOs the council counted in 2024, 3,927 shared basic amenities and 903 were converted buildings under section 257.",
    landlordContext:
      "Over a third of Haringey households rent privately (Census 2021). Every HMO in the borough needs a licence, and single-household lets need one in 14 eastern wards.",
  },
};

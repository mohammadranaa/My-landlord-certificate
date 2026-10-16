import type { BoroughLocal } from "./types";

export const ealing: BoroughLocal = {
  slug: "ealing",
  checkedOn: "2026-10-16",
  council: {
    name: "Ealing Council",
    housingUrl: "https://www.ealing.gov.uk/info/201086/housing/3306/private_rented_properties",
    licensingUrl: "https://www.ealing.gov.uk/info/201086/housing/3306/private_rented_properties/8",
  },
  licensing: [
    {
      name: "London Borough of Ealing Designation of an Area for Additional Licensing of Houses in Multiple Occupation 2022",
      type: "Additional HMO",
      area: "Whole borough",
      appliesTo:
        "HMOs of 3 or more people in 2 or more households sharing facilities, and section 257 converted buildings where every flat is privately rented and in the same ownership (buildings of no more than two flats are excluded)",
      period: "1 April 2022 to 31 March 2027",
      status: "In force",
    },
    {
      name: "Selective licensing designation 1",
      type: "Selective",
      area: "East Acton, Southall Broadway and Southall Green (wards as drawn before May 2022)",
      appliesTo: "Privately rented homes let to a single household that do not need an HMO licence",
      period: "1 April 2022 to 31 March 2027",
      status: "In force",
    },
    {
      name: "Selective licensing designation 2",
      type: "Selective",
      area:
        "Wards as drawn before May 2022: Acton Central, Dormers Wells, Greenford Broadway, Greenford Green, Hanger Hill, Hobbayne, Lady Margaret, North Greenford, Northolt Mandeville, Northolt West End, Perivale and South Acton",
      appliesTo: "Privately rented homes let to a single household that do not need an HMO licence",
      period: "From 3 January 2023",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo: "HMOs of 5 or more people in 2 or more households sharing a kitchen, bathroom or toilet",
      period: "National scheme, no end date",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Households renting privately", value: "34.0% (London 30.0%)", source: "Census 2021" },
    { label: "Homes built 1900 to 1939", value: "45.7% (London 30.4%)", source: "VOA 2025" },
    { label: "Licensed HMOs", value: "4,101", source: "Ealing Council consultation, 2026" },
  ],
  overview: [
    "At the 2021 Census, 45,490 Ealing households rented privately. Social renting was less common than across London, at 17.5% of households against 23.1%.",
    "Ealing has licensed smaller HMOs, beyond the national mandatory scheme, since 2017. A consultation on renewing its additional scheme closed on 24 September 2026. No decision had been published as of October 2026, so the current scheme's end date is the one to watch.",
    "The council refuses licences it is not satisfied with. In the 18 months before its July 2026 consultation, it refused 81 HMO licences, saw 277 applications withdrawn and revoked 37 licences. Applications for every licence type go through its online Metastreet portal, and licence queries go to prslicensing@ealing.gov.uk or 020 8825 9512.",
    "Turning a house into a small HMO has needed planning permission in Perivale since 30 October 2024, and across the rest of the borough, outside the Old Oak and Park Royal Development Corporation area, since 14 November 2025.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Ealing: subdivided houses and a report the application must pass",
      body: [
        "Ealing Council reports a marked increase in houses being subdivided into HMOs with more bedrooms than they were built for. One pattern it describes is a house split into two HMO flats, each with four to six en-suite rooms.",
        "If a property has been reconfigured like this since its last inspection, the old report no longer describes the installation as it stands. Ealing's licence application sets three tests for the electrical report: dated within the last five years, stating that the installation is \"Satisfactory\", and supplied with every page. An application with missing or invalid documents is rejected after 14 days, and the fee is not refunded.",
        "The conditions consulted on in 2026 for additional HMO licences would also require a valid EICR for every installation throughout the licence.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety in Ealing: no open danger codes on the certificate",
      body: [
        "As part of a licence application, Ealing will not accept a gas safety certificate with an \"At Risk\" or \"Immediately Dangerous\" code against any appliance. The exception is where a Gas Safe registered contractor's invoice shows the work has been done.",
        "The certificate must list every gas appliance in the property. If the check before you apply finds a fault, send the repair invoice with the certificate.",
        "Ealing's HMO Standards also ban portable LPG bottled-gas, paraffin and electric fan heaters in HMOs. Check rooms for portable heaters when the gas engineer visits, so the licence paperwork and the house match.",
      ],
    },
    epc: {
      heading: "EPCs in Ealing: one certificate for the whole HMO",
      body: [
        "With a licence application, Ealing wants one EPC covering the whole of an HMO, not separate EPCs for individual rooms. Under its HMO Standards, an assessor who produces an EPC for a single room in an HMO will be referred to their accreditation body.",
        "The application also accepts only ratings from A to E. In the council's 2026 evidence, 484 of the 3,509 known HMOs with an EPC, or 13.8%, were rated E, F or G, with the most in Ealing town, at 135. Where a rating needs lifting, the guide recommends cavity wall and loft insulation to current standards where possible.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Ealing: reviewed at every change of tenancy",
      body: [
        "Ealing's HMO Standards ask for the fire risk assessment to be reviewed every year or at each change of tenancy, whichever comes first. Licensed HMOs here house about six tenants each on average, so one new tenant moving in brings the review forward.",
        "After a house is subdivided into HMO flats, as the council's licensing evidence describes, the assessment needs to reflect the new layout. The council's management checklist also asks whether the common parts have been assessed and the remedial works completed.",
        "Of seven HMO fires in the borough from February 2025 to May 2026, the council suspects five were started deliberately by occupants. The review at each change of tenancy is the point to recheck how shared kitchens and escape routes are actually being used.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Ealing HMOs: vacuum cleaners and receipts",
      body: [
        "Ealing's HMO Standards ask for a PAT certificate every year and add two practical points: include vacuum cleaners in the test, and keep the receipts for any appliance under a year old. The receipt is the evidence of an appliance's age if it has not yet been through a test.",
      ],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Ealing",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical faults in Ealing conversions: windowless kitchens and bathrooms",
      body: [
        "Ealing's 2026 licensing evidence describes HMO conversions with windowless kitchens and bathrooms and poor ventilation. In a room with no window, extraction depends on an electric fan, so a fan that has stopped working is worth tracing and fixing before the council inspects.",
      ],
    },
    "fuse-box-installation": {
      heading: "Consumer unit upgrades in Ealing",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Ealing HMOs: a three-part testing routine",
      body: [
        "Ealing's HMO Standards recommend a three-part routine for emergency lighting, with each check recorded in a logbook. The routine is a visual check at every visit, a short test at least three times a year and a full three-hour test every year by a competent person.",
        "The number and position of the lights on the protected escape route are set by the fire risk assessment. Once the installation is finished, the council expects the landlord to submit a compliance certificate.",
      ],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Ealing",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler replacement in Ealing HMOs: controls tenants can reach",
      body: [
        "Ealing's HMO Standards set expectations for the heating system as well as the boiler. Controls should be in a communal area all tenants can reach. Thermostatic radiator valves are preferred, with a room thermostat plus a control valve on each radiator as the minimum.",
        "The heating must also reach set temperatures, such as 21°C in living rooms and 18°C in bedrooms, when it is -1°C outside, so size a replacement against those figures.",
      ],
    },
    "fire-safety-certificate": {
      heading: "Fire safety in Ealing: smaller shared houses fail inspection more often",
      body: [
        "In Ealing's 2026 licensing evidence, 72.2% of additional HMOs inspected failed, against 64.7% of mandatory HMOs, so three- and four-person shares fared worse than the large ones.",
        "Ealing's HMO Standards ask for an annual fire alarm test certificate, and an annual emergency lighting test certificate where emergency lighting is fitted. A three- or four-person share should have them on file before an inspection.",
      ],
    },
    "fire-alarm-installation": {
      heading: "Fire alarms in Ealing HMOs: the grade depends on the storeys",
      body: [
        "Ealing's HMO Standards say every HMO must have an automatic fire alarm system, and that it must not be powered through a prepayment or coin meter.",
        "One- and two-storey HMOs need mains-wired, interlinked smoke detectors with battery back-up to BS 5839-6 Grade D1, LD2. They go in every bedroom, along the escape route and in communal living rooms, plus a heat detector in the kitchen. From three storeys, the same coverage must run from a control panel with battery back-up, to Grade A, LD2.",
        "Either way, ask for the installer's certificate when the work is finished.",
      ],
    },
    "fire-door-certificate": {
      heading: "Fire doors in Ealing HMOs: down to the hinges",
      body: [
        "Ealing's HMO Standards specify fire doors in detail. In an HMO of two or more storeys, bedrooms, kitchens and living rooms need self-closing FD30S doors. Each needs gaps of no more than 3mm, combined cold smoke seals and intumescent strips, and at least three certified, CE-marked fire-rated hinges.",
        "A single-storey flat in multiple occupation is treated differently: it needs no fire doors inside, but its entrance door should be FD30. Glazing on the escape route should give at least 30 minutes' fire resistance, and no bedroom may be reached through a kitchen.",
      ],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguishers in Ealing HMOs: optional, but serviced if fitted",
      body: [
        "Extinguishers are not an essential requirement in Ealing HMOs under the council's HMO Standards, but a fire blanket in the kitchen is. If you do provide extinguishers, the guide says they must be serviced every year with records kept, and tenants must be shown how to use them.",
      ],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Ealing",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos in Ealing HMOs: a check every six months",
      body: [
        "Where asbestos-containing materials are known in an Ealing HMO, the council's HMO Standards advise recording their location and type. They also advise checking them for damage every six months, dating and signing each check, and telling contractors before work starts. A survey gives you the record that routine starts from.",
      ],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Ealing",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "Will selective licensing in East Acton and the Southall wards be renewed?",
        answer:
          "No selective scheme was part of Ealing's 2026 consultation, which covered additional HMO licensing only. Check the council's licensing page before relying on a selective licence in East Acton, Southall Broadway or Southall Green beyond the designation's current end date.",
      },
    ],
    "gas-safety-certificate": [
      {
        question: "Does a late renewal shorten an Ealing licence?",
        answer:
          "It can. Ealing generally grants licences for five years where there has been no previous enforcement, but a renewal not made within one month of expiry may get a one-year licence. Licences cannot be transferred, so a new owner of a licensed property needs a licence in their own name.",
      },
    ],
    epc: [
      {
        question: "Which discounts can lower an Ealing licence fee?",
        answer:
          "As of October 2026, an EPC rated A to C earns a discount off Part B of the fee, and so does membership of LLAS, the NRLA, Safeagent or ARLA Propertymark. Applying at the same time for two or more selective flats in the same building and ownership earns 10% off Part B. The 2026 consultation proposes new fees from 2027.",
      },
    ],
    "fire-risk-assessment": [
      {
        question: "Can an Ealing HMO without planning permission still be licensed?",
        answer:
          "It can, but for a shorter term. Ealing's HMO Standards say an HMO without planning permission may get a 12-month licence while the planning position is regularised, rather than the usual five years. Planning permission for a change from a house to a small HMO has been needed in Perivale since 30 October 2024 and across most of the rest of the borough since 14 November 2025.",
      },
    ],
    "commercial-eicr": [
      {
        question: "Does a building of flats over a shop need an Ealing licence?",
        answer:
          "It can. Ealing's additional scheme can cover converted buildings above non-residential premises, such as a shop, as section 257 HMOs. That applies where every flat is privately rented and in the same ownership; buildings of no more than two flats are excluded. The council's rule of thumb is that a freeholder of a building converted into three or more self-contained rented flats without a Building Regulations completion certificate needs a licence for the building, as well as licences for the flats.",
      },
    ],
    "fire-safety-certificate": [
      {
        question: "How many unlicensed HMOs does Ealing think there are?",
        answer:
          "The council's consultant predicts about 340 hidden HMOs in the borough. Ealing set up an unlicensed property team in 2024. Since April 2025 it has issued 28 civil penalty notices for unlicensed HMOs, and 56 HMOs became licensed after the team stepped in.",
      },
    ],
    "fire-alarm-installation": [
      {
        question: "Can I draw my own floor plans for an Ealing licence application?",
        answer:
          "Yes. Ealing accepts hand-drawn floor plans with a licence application. The council recommends marking the position of smoke and carbon monoxide detectors, so if alarm work is planned, draw the plan once it is finished so it shows the detectors actually fitted.",
      },
    ],
  },
  sources: [
    {
      label: "Ealing Council: Private rented properties",
      url: "https://www.ealing.gov.uk/info/201086/housing/3306/private_rented_properties",
    },
    {
      label: "Ealing Council: Licensing schemes in Ealing",
      url: "https://www.ealing.gov.uk/info/201086/housing/3306/private_rented_properties/8",
    },
    {
      label: "Ealing Council: Documents needed for a licence application",
      url: "https://www.ealing.gov.uk/info/201086/housing/3306/private_rented_properties/2",
    },
    {
      label: "Ealing Council: Licence terms and renewals",
      url: "https://www.ealing.gov.uk/info/201086/housing/3306/private_rented_properties/7",
    },
    {
      label: "Ealing Council: HMO Standards (April 2025)",
      url: "https://www.ealing.gov.uk/download/downloads/id/20124/hmo_standards_guide.pdf",
    },
    {
      label: "Ealing Council: Additional HMO licensing designation 2022",
      url: "https://www.ealing.gov.uk/download/downloads/id/17337/designation_of_an_area_for_additional_licensing_of_houses_in_multiple_occupation_hmos.pdf",
    },
    {
      label: "Ealing Council: Additional HMO licensing consultation 2026 (with appendices)",
      url: "https://haveyoursay.ealing.gov.uk/en-GB/projects/hmo-licensing",
    },
    {
      label: "Ealing Council: Schedule of licensing fees and charges",
      url: "https://www.ealing.gov.uk/download/downloads/id/20113/schedule_of_fees_and_charges.pdf",
    },
    {
      label: "Ealing Council: Licensing consultation 2021",
      url: "https://www.ealing.gov.uk/info/201271/past_consultations_2021/2792/consultation_on_licensing_privately_rented_properties_in_ealing",
    },
    {
      label: "Ealing Council: Private rented property licensing map",
      url: "https://www.ealing.gov.uk/downloads/download/7824/private_rented_property_licensing",
    },
    {
      label: "Ealing Council: Article 4 directions for HMOs",
      url: "https://www.ealing.gov.uk/info/201155/planning_and_building_control/3423/article_4_directions_immediate_and_non-immediate_to_remove_hmo_permitted_development_rights/1",
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
      "Ealing's housing peaks in the early 20th century. In VOA 2025 figures, 22.9% of council tax properties date from the 1930s and 15.6% from 1900 to 1918, against 16.0% and 8.2% across London (VOA 2025). Purpose-built flats hold 34.5% of households, terraced houses 23.4% and semi-detached houses 21.9% (Census 2021). The council says HMOs are spread across its seven towns, with most in Acton and Ealing town.",
    landlordContext:
      "As of the council's July 2026 figures, Ealing's licensed HMOs house 24,705 tenants, and its teams carry out about 400 selective licensing inspections of single-household homes a month.",
  },
};

import type { BoroughLocal } from "./types";

export const sutton: BoroughLocal = {
  slug: "sutton",
  checkedOn: "2026-10-16",
  council: {
    name: "London Borough of Sutton",
    housingUrl: "https://www.sutton.gov.uk/businesses-and-licensing/licensing/houses-multiple-occupation",
    licensingUrl:
      "https://www.sutton.gov.uk/businesses-and-licensing/licensing/houses-multiple-occupation/houses-multiple-occupation-hmo",
  },
  licensing: [
    {
      name: "Additional HMO licensing",
      type: "Additional HMO",
      area: "Whole borough",
      appliesTo: "HMOs of 3 or 4 people forming more than one household, below the mandatory threshold",
      period: "In force since 22 March 2026",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo: "HMOs with 5 or more unrelated occupiers forming more than one household and sharing amenities",
      period: "National scheme, no end date",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Households renting privately", value: "20.3% (London 30.0%)", source: "Census 2021" },
    { label: "Households who own their home", value: "64.4% (London 45.2%)", source: "Census 2021" },
    { label: "Private rented homes that are flats", value: "56%", source: "Sutton Council stock study, 2025" },
    { label: "Housing built before 1954", value: "58%", source: "Sutton Council stock study, 2025" },
  ],
  overview: [
    "As of October 2026, Sutton runs two property licensing schemes, both covering the whole borough. Mandatory licensing covers HMOs of 5 or more occupiers. An additional scheme, in force since 22 March 2026, covers shares of 3 or 4 people from more than one household. There is no selective licensing, so a home let to one household needs no property licence.",
    "Since 22 February 2025, a borough-wide Article 4 direction has required planning permission to turn a family house into a small HMO.",
    "Sutton has no online licence portal. Landlords download a PDF form and post or email it to the Residential Enforcement Team, and the public register of licensed HMOs is updated quarterly.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs for Sutton HMO licences: a report from the last 5 years goes in with the form",
      body: [
        "A Sutton HMO licence application must include an electrical Periodic Inspection Report issued within the last 5 years. Check the date on your current report before you send the form.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety certificates for Sutton HMO licences: issued within the last year",
      body: [
        "A Sutton HMO licence application must include a gas safety certificate issued within the last year. Where the property has no gas, the form asks for a declaration that there is no gas instead.",
      ],
    },
    epc: {
      heading: "EPCs in Sutton shared houses: lower ratings than other lets",
      body: [
        "Sutton's 2025 stock study found that 28% of the borough's HMOs had an EPC rated E, F or G. Across private rented homes with an EPC record, the share was 16%. A shared house is therefore the let most likely to sit close to or below the minimum E rating.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Sutton: mostly whole shared houses",
      body: [
        "Houses make up 86% of the HMOs in the council's 2025 estimate. Most Sutton assessments are therefore of a whole house shared by its occupiers, not a flat in a block. Sutton's licence conditions say the council \"may request and audit\" the assessment.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Sutton: a certificate goes in with the HMO licence form",
      body: [
        "Sutton's HMO licence form is not complete without a portable appliance test certificate covering every electrical appliance the landlord supplies.",
        "The same list of supporting documents includes a fire detection test report from the last year. Test the appliances before you send the form, so the dates line up.",
      ],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Sutton",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical fault finding in Sutton",
      body: [],
    },
    "fuse-box-installation": {
      heading: "Consumer unit upgrades in Sutton",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Sutton HMOs: not needed in most low-risk houses",
      body: [
        "Sutton's HMO licence form says \"most low risk HMOs do not require emergency lighting\". Let the fire risk assessment decide whether a shared house needs it, rather than fitting lights by default.",
      ],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Sutton",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler installation in Sutton",
      body: [],
    },
    "fire-safety-certificate": {
      heading: "Fire safety certificates in Sutton",
      body: [],
    },
    "fire-alarm-installation": {
      heading: "Fire alarms in Sutton HMOs: a service every 6 months",
      body: [
        "Sutton's HMO licence form says a mains-powered Grade A to D fire alarm system in an HMO must be inspected and serviced by a competent person every 6 months.",
        "Installation is the start of that cycle, not the end. Agree who will carry out the 6-monthly service when the system goes in.",
      ],
    },
    "fire-door-certificate": {
      heading: "Fire doors in Sutton",
      body: [],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguisher testing in Sutton",
      body: [],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Sutton",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Sutton",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Sutton",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "My EICR is 4 years old. Will Sutton accept it with an HMO licence application?",
        answer:
          "Yes. Sutton's HMO licence form asks for an electrical report issued within the last 5 years, so a 4-year-old report meets its date requirement.",
      },
    ],
    epc: [
      {
        question: "Do Sutton Garden Suburb houses need permission for alterations an EPC recommends?",
        answer:
          "They may. An Article 4 direction confirmed in 2007 covers alterations to houses in Meadow Close, Woodend, Hawthorne Close, Horse Shoe Green, Oaks Close and Greenhill. If your house is in one of those streets, ask the council's planning service whether a recommended improvement needs permission before you book the work.",
      },
    ],
    "fire-risk-assessment": [
      {
        question: "My share of 3 or 4 people was let before March 2026. Does it need a fire risk assessment for the licence?",
        answer:
          "Yes. Sutton's additional scheme applies to existing HMOs as well as new ones, and every application must include a fire risk assessment. The November 2025 committee report counted about 210 HMOs with mandatory licences and about 690 more in scope for additional licensing. Most of the shares the council expects to license are therefore smaller ones.",
      },
    ],
    "pat-testing": [
      {
        question: "Can I apply for a Sutton HMO licence online?",
        answer:
          "No. Download the council's HMO application form (updated May 2026). Return it with the documents by post to the Civic Offices, St Nicholas Way, Sutton SM1 1EA, or by email to environmentalhealth@sutton.gov.uk. Each HMO needs its own form. Changes to an existing licence can be made online or on a form.",
      },
    ],
  },
  sources: [
    {
      label: "Sutton Council: Houses in Multiple Occupation",
      url: "https://www.sutton.gov.uk/businesses-and-licensing/licensing/houses-multiple-occupation",
    },
    {
      label: "Sutton Council: Houses in multiple occupation (HMO) licensing schemes",
      url: "https://www.sutton.gov.uk/businesses-and-licensing/licensing/houses-multiple-occupation/houses-multiple-occupation-hmo",
    },
    {
      label: "Sutton Council: Apply, vary or renew your HMO licence",
      url: "https://www.sutton.gov.uk/businesses-and-licensing/licensing/houses-multiple-occupation/apply-vary-or-renew-your-hmo-licence",
    },
    {
      label: "Sutton Council: HMO licence application form (May 2026)",
      url: "https://www.sutton.gov.uk/sites/default/files/2026-05/LBS%20HMO%20Licence%20Application%20May%202026.pdf",
    },
    {
      label: "Sutton Council: HMO licensing register",
      url: "https://www.sutton.gov.uk/businesses-and-licensing/licensing/houses-multiple-occupation/hmo-licensing-register-who-has-licence",
    },
    {
      label: "Sutton Council: Article 4 directions",
      url: "https://www.sutton.gov.uk/planning-and-building/planning/planning-policy/article-4-directions",
    },
    {
      label: "Sutton Council: Approval of additional HMO licensing (committee report, November 2025)",
      url: "https://moderngov.sutton.gov.uk/documents/s93651/7.%20Approval%20of%20Additional%20House%20in%20Multiple%20Occupation%20Licensing%20R%20_%20Housing%20Economy%20and%20Business.pdf",
    },
    {
      label: "Sutton Council: Housing, Economy and Business Committee minutes, 25 November 2025",
      url: "https://moderngov.sutton.gov.uk/documents/s93983/Minutes%2025112025%20Housing%20Economy%20and%20Business%20Committee.pdf",
    },
    {
      label: "Sutton Council: HMO licence conditions (committee appendix 7e)",
      url: "https://moderngov.sutton.gov.uk/documents/s93654/7e.%20HMO%20Conditions%20A%20_%20Housing%20Economy%20and%20Business%20Committee%2020251125.pdf",
    },
    {
      label: "Sutton Council: Housing stock condition and stressors report (2025)",
      url: "https://moderngov.sutton.gov.uk/documents/s93656/7a.%20Condition%20and%20Stressors%20Report%20A%20_%20Housing%20Economy%20and%20Business%20Committee%2020251125.pdf",
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
      "Sutton's largest building era is the inter-war period: 40.6% of its 86,290 council tax properties date from 1919 to 1939, and 30.6% from the 1930s alone (VOA 2025). Semi-detached houses are home to 27.9% of households, and only 3.9% live in flats in converted or shared houses (Census 2021). The council's stock study adds that only about 5% of the borough's housing predates 1900.",
    landlordContext:
      "The council's 2025 study estimated 942 HMOs in Sutton. Since 22 March 2026, HMOs of 3 or more people from more than one household need a licence.",
  },
};

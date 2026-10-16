import type { BoroughLocal } from "./types";

export const richmondUponThames: BoroughLocal = {
  slug: "richmond-upon-thames",
  checkedOn: "2026-10-16",
  council: {
    name: "Richmond Council",
    housingUrl: "https://www.richmond.gov.uk/services/housing/private_housing",
    licensingUrl: "https://www.richmond.gov.uk/hmo",
  },
  licensing: [
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo:
        "Houses and flats with 5 or more people from 2 or more households sharing a bathroom, toilet or kitchen, whatever the number of storeys (flats in purpose-built blocks of 3 or more self-contained flats excluded)",
      period: "National scheme with no end date; each Richmond licence runs for a fixed 5 years",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Households living in houses", value: "59.8% (London 45.9%)", source: "Census 2021" },
    { label: "Homes built before 1919", value: "37.8% (London 29.1%)", source: "VOA 2025" },
    { label: "Households heated by mains gas only", value: "80.5% (London 70.5%)", source: "Census 2021" },
    { label: "Conservation areas", value: "85", source: "Richmond Council" },
  ],
  overview: [
    "In its 2014 HMO licensing policy, Richmond Council said it did not intend to adopt additional licensing, because no area had anti-social behaviour linked to HMOs, and judged selective licensing not necessary, as no area had low housing demand.",
    "As of October 2026 neither scheme is in force, so the national mandatory HMO licence is the only one that applies, and there is no Article 4 direction on HMOs.",
    "Licences and their conditions are Richmond Council's, but Merton's private sector housing team does the casework under the Regulatory Services Partnership, from the Civic Centre in Morden. Applications go through the Regulatory Services Hub portal. If you have heard nothing within 4 weeks of applying, the council asks you to email privatehousing@merton.gov.uk.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Richmond's converted family houses: six shower rooms, not one",
      body: [
        "In 2017, Richmond's Cabinet was told of a new type of HMO in parts of the borough. Developers were extending modest family houses, typically of three bedrooms, at the ground floor and into the roof. The result was six bedsits around a shared kitchen, each with its own en-suite shower and WC.",
        "An EICR on a house converted this way has six shower rooms to inspect where the family house may have had one, plus the circuits added for the extensions. Ask the owner or the converting builder for the electrical certificates from that work, so the inspector can tell the original installation from the additions.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety certificates in Richmond upon Thames",
      body: [],
    },
    epc: {
      heading: "EPCs in Richmond conservation areas: timber or Crittall, not uPVC",
      body: [
        "Richmond's conservation area guidance says plastic-looking uPVC is not likely to be acceptable in place of timber or Crittall windows. Where an EPC for a home in a conservation area recommends new glazing, price the options the council encourages instead: secondary glazing, or double or triple glazing in timber frames.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Richmond: works done before the officer calls",
      body: [
        "Richmond deals with an HMO licence application in a set order. Officers first check the application and the fee, then arrange an inspection. That visit is where the officer can require changes, add conditions and fix how many people may live there.",
        "Because any changes are set at the inspection, have the fire risk assessment carried out, and the works it recommends finished, before the visit is arranged. The officer then inspects the house the assessment describes.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Richmond upon Thames",
      body: [],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Richmond upon Thames",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical fault finding in Richmond upon Thames",
      body: [],
    },
    "fuse-box-installation": {
      heading: "Consumer unit upgrades in Richmond upon Thames",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Richmond upon Thames",
      body: [],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Richmond upon Thames",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler installation in Richmond upon Thames",
      body: [],
    },
    "fire-safety-certificate": {
      heading: "Fire safety certificates in Richmond upon Thames",
      body: [],
    },
    "fire-alarm-installation": {
      heading: "Fire alarms in Richmond upon Thames",
      body: [],
    },
    "fire-door-certificate": {
      heading: "Fire doors in Richmond upon Thames",
      body: [],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguisher testing in Richmond upon Thames",
      body: [],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Richmond upon Thames",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Richmond upon Thames",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Richmond upon Thames",
      body: [],
    },
  },
  serviceFaqs: {
    epc: [
      {
        question: "Is there council advice on energy upgrades to a listed building in Richmond?",
        answer:
          "Yes. As of October 2026, Richmond offers owners of listed buildings free pre-application advice on energy efficiency improvements, including retrofitting. A landlord of a listed home can use it to get the council's view on the upgrades an EPC report suggests before any work is specified.",
      },
    ],
    "fire-risk-assessment": [
      {
        question: "How many HMOs are licensed in Richmond?",
        answer:
          "The council's last published count dates from June 2017, when a Cabinet report said there were 50 licensed HMOs in the borough. For current entries, check the public register on the Regulatory Services Hub, which lists each licence number and address with the licence's start and end dates.",
      },
    ],
  },
  sources: [
    {
      label: "Richmond Council: Private housing",
      url: "https://www.richmond.gov.uk/services/housing/private_housing",
    },
    { label: "Richmond Council: Houses in multiple occupation", url: "https://www.richmond.gov.uk/hmo" },
    {
      label: "Richmond Council: Apply for an HMO licence",
      url: "https://www.richmond.gov.uk/services/housing/private_housing/privately_rented_properties/hmo/apply_for_a_hmo_licence",
    },
    {
      label: "Richmond Council: HMO register",
      url: "https://www.richmond.gov.uk/services/housing/private_housing/privately_rented_properties/hmo/hmo_register",
    },
    {
      label: "Richmond Council: Minimum amenity standards for HMOs (2020)",
      url: "https://www.richmond.gov.uk/media/16367/hmo_minimum_standards.pdf",
    },
    {
      label: "Richmond Council: HMO licensing policy (2014)",
      url: "https://www.richmond.gov.uk/media/11335/hmo_policy_0414.pdf",
    },
    {
      label: "Richmond Council: Cabinet reports pack, 22 June 2017",
      url: "https://cabnet.richmond.gov.uk/documents/g4047/Public%20reports%20pack%20Thursday%2022-Jun-2017%2019.00%20Cabinet.pdf?T=10",
    },
    {
      label: "Merton Council: Regulatory Services Partnership",
      url: "https://www.merton.gov.uk/business-and-consumers/rsp",
    },
    {
      label: "Richmond Council: Article 4 directions",
      url: "https://www.richmond.gov.uk/services/planning/article_4_directions",
    },
    {
      label: "Richmond Council: About conservation areas",
      url: "https://www.richmond.gov.uk/services/planning/conservation_and_urban_design/conservation_areas/about_conservation_areas",
    },
    {
      label: "Richmond Council: Conservation areas FAQ",
      url: "https://www.richmond.gov.uk/services/planning/conservation_and_urban_design/conservation_areas/conservation_areas_faq",
    },
    {
      label: "Richmond Council: Listed buildings",
      url: "https://www.richmond.gov.uk/services/planning/conservation_and_urban_design/listed_buildings",
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
      "Terraced and semi-detached houses each hold about a quarter of Richmond's households, and purpose-built flats 28.2% (Census 2021). On VOA figures for 2025, 17.5% of the borough's council tax properties date from 1900 to 1918, and only 8.4% were built in 2000 or later.",
    landlordContext:
      "Census 2021 counted 19,970 of Richmond's 80,704 households renting privately: 24.7%, or about one in four households.",
  },
};

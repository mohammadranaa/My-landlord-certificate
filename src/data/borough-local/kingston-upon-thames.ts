import type { BoroughLocal } from "./types";

export const kingstonUponThames: BoroughLocal = {
  slug: "kingston-upon-thames",
  checkedOn: "2026-10-16",
  council: {
    name: "Royal Borough of Kingston upon Thames",
    housingUrl: "https://www.kingston.gov.uk/housing/landlords-and-private-sector",
    licensingUrl: "https://www.kingston.gov.uk/housing/landlords-and-private-sector/houses-multiple-occupation-hmo",
  },
  licensing: [
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo: "HMOs with 5 or more people forming 2 or more households who share facilities",
      period: "National scheme, no end date (the only scheme in Kingston as of October 2026)",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Households who own their home", value: "60.9% (London 45.2%)", source: "Census 2021" },
    { label: "Households in purpose-built flats", value: "29.8% (London 40.3%)", source: "Census 2021" },
    { label: "Homes built in 2000 or later", value: "12.0% (London 17.9%)", source: "VOA 2025" },
    { label: "Households heated by mains gas only", value: "78.1% (London 70.5%)", source: "Census 2021" },
  ],
  overview: [
    "As of October 2026, Kingston licenses shared homes through the national mandatory HMO scheme only: 5 or more people from 2 or more households sharing facilities, anywhere in the borough. There is no selective licensing, so a home let to a single household needs no property licence.",
    "Kingston ran a borough-wide additional HMO scheme from December 2012 and renewed it in 2017. The council's HMO page now lists mandatory licensing only.",
    "The council's public register of licensed HMOs is updated quarterly. Applications and renewals go through Kingston's online form at self.kingston.gov.uk, and the Residential Enforcement Team answers HMO questions at privatesectorhousing@kingston.gov.uk.",
    "Shared houses of 3 or 4 people from 2 or more households need no licence, but the council's minimum standards page for them lists an annual gas safety certificate, an EICR every 5 years and a legionella risk assessment with control measures.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Kingston HMOs: a visual check at every change of tenancy",
      body: [
        "Kingston's HMO standards (December 2023) cap the gap between electrical installation tests at 5 years and add a step in between: a visual check of the installation at each change of tenancy.",
        "In a shared house where rooms are let on separate agreements, a new occupier in one room is a change of tenancy. The check then falls whenever a room is re-let, not only when the whole house turns over, so keep a dated note of each check with the report.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety in Kingston HMOs: servicing as well as the annual check",
      body: [
        "Kingston's HMO standards (December 2023) ask for more than the yearly safety check: \"All gas appliances should be serviced and maintained in line with manufacturers' recommendations.\" A gas safety check confirms an appliance is safe to use but is not a service, so keep each appliance's service record with the gas safety certificate.",
      ],
    },
    epc: {
      heading: "EPCs in Kingston's historic buildings: the council's offer on exemption evidence",
      body: [
        "Kingston's energy efficiency page names double glazing, new doors and windows, and external wall insulation as works that might unacceptably alter some buildings: those that are listed, historic or in a conservation area. Areas on the council's list include Kingston Old Town, Surbiton Hill Park, Coombe Hill, Fairfield/Knight's Park and Old Malden.",
        "Where the measures on an EPC look like those, the council says it may be able to provide evidence for an exemption based on planning approval. It does this by looking at how likely planning permission or listed building consent would be. It asks owners of historic or listed buildings to get in touch for that advice, so ask before ruling a measure in or out.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Kingston: lofts and basements count as storeys",
      body: [
        "When it reviews an HMO licence application, Kingston counts a habitable basement, loft or converted commercial space as an extra storey. Every new or renewal application must include a current copy of the fire risk assessment.",
        "An assessment of a two-storey house with a loft bedroom should therefore treat it as three storeys, as the council will.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Kingston HMOs: a yearly test in the council's standards",
      body: [
        "Where the landlord supplies electrical appliances in an HMO, Kingston's HMO standards say \"All portable appliances should be tested annually\".",
      ],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Kingston upon Thames",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical fault finding in Kingston upon Thames",
      body: [],
    },
    "fuse-box-installation": {
      heading: "Consumer unit upgrades in Kingston upon Thames",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Kingston upon Thames",
      body: [],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Kingston upon Thames",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler installation in Kingston upon Thames",
      body: [],
    },
    "fire-safety-certificate": {
      heading: "Fire safety certificates in Kingston upon Thames",
      body: [],
    },
    "fire-alarm-installation": {
      heading: "Fire alarms in Kingston HMOs: the council's fire plan and the installer's design",
      body: [
        "Kingston's assisted HMO licence application service includes a fire plan annotated by the council. It shows the grade and category of fire alarm system required under the LACORS guidance, which Kingston has adopted for HMOs.",
        "The plan is diagrammatic only. The council says the appointed designer and installer must make sure coverage meets the relevant British Standard, so give the installer the plan as a starting point, not as a finished detector layout.",
      ],
    },
    "fire-door-certificate": {
      heading: "Fire doors in Kingston upon Thames",
      body: [],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguisher testing in Kingston upon Thames",
      body: [],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Kingston upon Thames",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Kingston upon Thames",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella in Kingston's smaller shared houses",
      body: [
        "Shared houses of 3 or 4 people from 2 or more households need no licence in Kingston. The council's minimum standards page for these houses lists a legionella risk assessment with control measures among the certificates it expects, next to the gas safety certificate and the EICR.",
      ],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "Will Kingston visit my licensed HMO during the licence?",
        answer:
          "Yes. Kingston says it must inspect every licensed HMO during the licence period, so have the electrical report and your tenancy-change check notes to hand for that visit.",
      },
    ],
    "fire-risk-assessment": [
      {
        question: "Is there an Article 4 direction on HMOs in Kingston?",
        answer:
          "No, as of October 2026. Kingston's three Article 4 directions cover the Seething Wells Filter Beds, North Lodge and South Lodge, and changes from commercial, business and service use to homes in 39 areas. None of them covers turning a house into an HMO.",
      },
    ],
    "fire-alarm-installation": [
      {
        question: "Can I get Kingston's fire plan for a shared house too small to license?",
        answer:
          "Yes. The council's assisted HMO fire standards service is open to landlords of HMOs that need no licence as well as licensed ones, so a smaller shared house can get an annotated plan too.",
      },
    ],
  },
  sources: [
    {
      label: "Kingston Council: Article 4 directions",
      url: "https://www.kingston.gov.uk/planning-and-building-control/planning-policy/article-4-directions",
    },
    {
      label: "Kingston Council: Landlords and private sector",
      url: "https://www.kingston.gov.uk/housing/landlords-and-private-sector",
    },
    {
      label: "Kingston Council: Houses in multiple occupation (HMO)",
      url: "https://www.kingston.gov.uk/housing/landlords-and-private-sector/houses-multiple-occupation-hmo",
    },
    {
      label: "Kingston Council: Apply, vary or renew an HMO licence",
      url: "https://www.kingston.gov.uk/housing/landlords-and-private-sector/houses-multiple-occupation-hmo/apply-vary-or-renew-a-licence",
    },
    {
      label: "Kingston Council: HMO licensing register",
      url: "https://www.kingston.gov.uk/housing/landlords-and-private-sector/houses-multiple-occupation-hmo/hmo-licensing-register",
    },
    {
      label: "Kingston Council: Minimum standards for non-licensable HMOs",
      url: "https://www.kingston.gov.uk/housing/landlords-and-private-sector/houses-multiple-occupation-hmo/minimum-standards-non-licensable-hmos",
    },
    {
      label: "Kingston Council: HMO inspections",
      url: "https://www.kingston.gov.uk/housing/landlords-and-private-sector/houses-multiple-occupation-hmo/hmo-inspections",
    },
    {
      label: "Kingston Council: Support services for HMO landlords",
      url: "https://www.kingston.gov.uk/housing/landlords-and-private-sector/houses-multiple-occupation-hmo/hmo-landlord-supported-services",
    },
    {
      label: "Kingston Council: HMO standards (December 2023)",
      url: "https://www.kingston.gov.uk/sites/default/files/2025-07/HMO_Standards__RBK__December_2023.pdf",
    },
    {
      label: "Kingston Council: Energy efficiency standards",
      url: "https://www.kingston.gov.uk/housing/landlords-and-private-sector/landlords-rights-and-responsibilities/energy-efficiency-standards",
    },
    {
      label: "Kingston Council: Conservation areas",
      url: "https://www.kingston.gov.uk/planning-and-building-control/heritage-and-conservation/conservation-areas",
    },
    {
      label: "Kingston Council: List of conservation areas",
      url: "https://www.kingston.gov.uk/planning-and-building-control/heritage-and-conservation/conservation-areas/list",
    },
    {
      label: "Kingston Council: Additional HMO licensing decision (2012)",
      url: "https://kingston.moderngov.co.uk/ieDecisionDetails.aspx?ID=1996",
    },
    {
      label: "Kingston Council: Additional HMO licensing re-designation decision (2017)",
      url: "https://kingston.moderngov.co.uk/ieDecisionDetails.aspx?ID=3530",
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
      "In 2012 the council said most of its housing was two storeys high, so many shared houses fell outside the mandatory scheme of the time. That scheme covered only homes of three or more storeys. The 1930s are the largest single building era, at 28.0% of the borough's 70,420 council tax properties (VOA 2025), and semi-detached houses are the most common home type (Census 2021).",
    landlordContext:
      "Census 2021 counted 17,911 Kingston households renting privately, and the council's register listed 447 licensed HMOs on 10 October 2026.",
  },
};

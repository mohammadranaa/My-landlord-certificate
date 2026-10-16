import type { BoroughLocal } from "./types";

export const harrow: BoroughLocal = {
  slug: "harrow",
  checkedOn: "2026-10-16",
  council: {
    name: "Harrow Council",
    housingUrl: "https://www.harrow.gov.uk/housing-property",
    licensingUrl: "https://www.harrow.gov.uk/licences",
  },
  licensing: [
    {
      name: "London Borough of Harrow Designation of an area for Selective Licensing 2026 (Edgware and Roxeth)",
      type: "Selective",
      area: "Edgware and Roxeth wards",
      appliesTo: "Privately rented homes that are not licensable HMOs or other exempt lettings",
      period: "2 May 2026 to 1 May 2031",
      status: "In force",
    },
    {
      name: "London Borough of Harrow Designation of an area for Selective Licensing 2026 (Greenhill and Marlborough)",
      type: "Selective",
      area: "Greenhill and Marlborough wards",
      appliesTo: "Privately rented homes that are not licensable HMOs or other exempt lettings",
      period: "6 July 2026 to 5 July 2031",
      status: "In force",
    },
    {
      name: "London Borough of Harrow Designation of an area for Selective Licensing 2026 (Wealdstone North and Wealdstone South)",
      type: "Selective",
      area: "Wealdstone North and Wealdstone South wards",
      appliesTo: "Privately rented homes that are not licensable HMOs or other exempt lettings",
      period: "1 September 2026 to 31 August 2031",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo:
        "HMOs of 5 or more people forming 2 or more households who share facilities such as a kitchen, bathroom or toilet",
      period: "National scheme, no end date",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Homes built 1919 to 1939", value: "51.8% (London 22.2%)", source: "VOA 2025" },
    { label: "Households in semi-detached houses", value: "37.1% (London 18.6%)", source: "Census 2021" },
    { label: "Households renting privately", value: "29.6% (London 30.0%)", source: "Census 2021" },
  ],
  overview: [
    "Harrow licenses single-household lets ward by ward. Selective licensing began in Edgware in 2015 and in Wealdstone in 2016.",
    "After a consultation in 2025, six ward designations were made on 2 February 2026 and started in three stages between May and September 2026. A property licensed as an HMO does not need a selective licence as well.",
    "Harrow's borough-wide additional HMO designation ran from 6 August 2021 to 5 August 2026, and a renewal was consulted on; check the council's website for the current position.",
    "Planning now sits alongside HMO licensing: a borough-wide Article 4 direction was made on 12 June 2026 and confirmed on 24 September 2026. Turning a family house into a small HMO for three to six people needs planning permission, and the council asks for that permission on new HMO licence applications.",
    "Applications for both licence types go through a MyHarrow account, and the council's public licensing registers can be searched by address.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Harrow HMOs: converted family houses and the whole installation",
      body: [
        "Harrow's HMO licence conditions, updated in 2026, ask for a periodic inspection report on the whole installation, with a copy for the council. The inspection should be carried out by a competent electrician, preferably one registered with NICEIC, ECA or NAPIT.",
        "That matters in a family house converted into an HMO. The electrician's certificate for circuits added during the conversion covers only that new work, so it does not meet the condition on its own. Book the periodic inspection once the conversion is finished, so the report describes the house as it is let.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety in Harrow HMOs: the common parts and the meter",
      body: [
        "In a licensed Harrow HMO, the gas certificate has to reach beyond the tenants' rooms. Condition 2 of the council's 2026 HMO conditions asks for a certificate under 12 months old covering the common parts and every rented part, with a copy for the council. Where a boiler or meter sits in a shared hall or cupboard, make sure the engineer's record includes it.",
        "Condition 2.1 adds a duty of its own: the licence holder must inspect gas meters regularly for obvious tampering. Mains gas is the only central heating in 78.3% of Harrow households, against 70.5% across London (Census 2021), so in most Harrow homes there is a meter to check. Note the date of each inspection between the engineer's annual visits.",
      ],
    },
    epc: {
      heading: "EPCs in Harrow",
      body: [],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Harrow: family houses turned into shared homes",
      body: [
        "Harrow's December 2025 HMO review notes a significant increase in two-storey houses originally designed for families, and in flats, being converted into HMOs.",
        "Condition 19 of Harrow's 2026 HMO conditions sets the alarm minimum an assessment of one of those houses should check against, and it adds extra detectors wherever a corridor runs over 5m. Give the assessor the length of any long hall or landing.",
        "Condition 27 then makes the assessment itself a licence term, with hazards documented and minimised where possible.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Harrow",
      body: [],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Harrow",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical fault finding in Harrow",
      body: [],
    },
    "fuse-box-installation": {
      heading: "Consumer units in Harrow HMOs: a yearly look at the board",
      body: [
        "A Harrow HMO licence holder must inspect the fuse board for damage regularly, and at least once a year, under Condition 22 of the council's 2026 HMO conditions. That puts a check on the board into each year between electrical reports. Note the date and what you found each time, and if the board is damaged, have an electrician assess whether it needs repair or replacement.",
      ],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Harrow HMOs: an account that must stay paid",
      body: [
        "In a Harrow HMO, emergency lighting can fail through a billing problem as well as a fault. Condition 22 of the council's 2026 HMO conditions says the electricity supply to emergency lighting and fire detection must not be disconnected for non-payment.",
        "Treat the account behind those circuits as part of the fire safety set-up. Pay it in a way that cannot lapse, such as by direct debit, and check it whenever the managing agent or bill payer changes.",
      ],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Harrow",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler installation in Harrow",
      body: [],
    },
    "fire-safety-certificate": {
      heading: "Fire alarm records in Harrow HMOs: certificate or test confirmation",
      body: [
        "What Harrow asks to see depends on the alarm system. For a Grade A system, the licence holder needs the annual test certificates; for a Grade D system, annual confirmation that it has been tested.",
        "Either goes to the council with a declaration on the alarms within 10 working days of a demand, under Harrow's 2026 HMO conditions. Ask whoever tests the system for a dated record in the form that matches its grade.",
      ],
    },
    "fire-alarm-installation": {
      heading: "Fire alarms in Harrow HMOs above shops: a panel and call points",
      body: [
        "A shared home above a shop or other business in Harrow is generally expected to have a Grade A LD2 fire alarm under the council's HMO standards. The system should include a control panel to BS EN 54-2 and break-glass call points.",
        "If you plan an HMO above a commercial unit, ask the installer to design to that grade from the start. The plans should mark the panel position and call points.",
      ],
    },
    "fire-door-certificate": {
      heading: "Fire doors in Harrow HMOs: Perko closers not recommended",
      body: [
        "Harrow's HMO standards call for overhead self-closers on fire doors. Perko chain closers are accepted, but the council does not recommend them, so ask the surveyor to note any still fitted.",
        "The standards also say intumescent strips and smoke seals must not be painted over, so check them after any redecoration. Both points apply to the FD30S doors Harrow expects to the kitchen, lounge, dining room and every bedroom.",
      ],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguisher testing in Harrow",
      body: [],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Harrow",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Harrow",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Harrow",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "Does Harrow's 28-day repair rule apply only to the EICR?",
        answer:
          "No. Condition 26.3 of Harrow's 2026 HMO conditions covers urgent attention and improvements noted on any official electrical inspection report, not only the periodic report sent to the council. If another official inspection report on a licensed HMO marks urgent work, it must be carried out within 28 days of that report.",
      },
    ],
    "fire-risk-assessment": [
      {
        question: "Does the Article 4 direction affect renewing a Harrow HMO licence?",
        answer:
          "Often not. Harrow exempts renewals for HMOs of up to six people from the planning requirement, and renewals for larger HMOs that have been licensed continuously for more than 10 years. New HMO licence applications made on or after 12 June 2026 need planning permission.",
      },
    ],
    "pat-testing": [
      {
        question: "Which appliances does a Harrow selective licence test report cover?",
        answer:
          "The electrical appliances the landlord supplies. Harrow's selective licence conditions require a test report on those within 7 days of a request, so a tenant's own kettle or television falls outside it. With only a week to answer, test the supplied items when the licence starts.",
      },
    ],
    "emergency-lights-certificate": [
      {
        question: "Is emergency lighting recorded in the same logbook as the fire alarm in a Harrow HMO?",
        answer:
          "Yes, where both are installed. Condition 20.2 of Harrow's 2026 HMO conditions refers to a fire alarm and emergency lighting logbook, kept to BS 5839. The licence holder must provide it and allow the council to inspect it, so enter emergency lighting tests alongside the alarm tests.",
      },
    ],
    "fire-safety-certificate": [
      {
        question: "What happens if Harrow finds a problem with my HMO's alarm certificate?",
        answer:
          "Once the council notifies a deficiency, Harrow's 2026 HMO conditions give the licence holder 14 days to supply a new certificate. Book the repair and the retest as soon as the notice arrives, so the new certificate reflects the system after the fix.",
      },
    ],
    "fire-alarm-installation": [
      {
        question: "Does a family flat above a shop in a Harrow selective ward need alarms linked to the shop?",
        answer:
          "It can, under Harrow's selective licensing fire guidance, which is based on LACORS. Where the home has no separate entrance, or the commercial part is high risk, detection should extend into the commercial premises and be interlinked with them. Ask the business for access early, because part of the work is in its unit.",
      },
    ],
    "fire-door-certificate": [
      {
        question: "Does glazing above a Harrow HMO fire door need to be fire-rated?",
        answer:
          "Yes. Harrow's HMO standards say any glazing above a fire door, such as a fanlight, must be fire-resistant, and cupboards in halls and landings need 30-minute fire resistance too. A survey that checks only the door leaf can miss both, so ask for them to be included.",
      },
    ],
  },
  sources: [
    { label: "Harrow Council: Licences", url: "https://www.harrow.gov.uk/licences" },
    { label: "Harrow Council: Housing and property", url: "https://www.harrow.gov.uk/housing-property" },
    {
      label: "Harrow Council: Houses in multiple occupation (HMO) licence",
      url: "https://www.harrow.gov.uk/licences/licences-houses-multiple-occupation-hmos",
    },
    {
      label: "Harrow Council: HMO licence applications",
      url: "https://www.harrow.gov.uk/licences/licences-houses-multiple-occupation-hmos/3",
    },
    { label: "Harrow Council: Selective licence", url: "https://www.harrow.gov.uk/licences/selective-licensing" },
    {
      label: "Harrow Council: Selective licensing areas",
      url: "https://www.harrow.gov.uk/licences/selective-licensing/6",
    },
    {
      label: "Harrow Council: Licensing public register",
      url: "https://www.harrow.gov.uk/licences/licensing-public-register",
    },
    {
      label: "Harrow Council: Additional HMO licensing public notice (2021)",
      url: "https://www.harrow.gov.uk/downloads/file/28942/hmo-public-notice",
    },
    {
      label: "Harrow Council: Additional HMO licensing renewal consultation",
      url: "https://talk.harrow.gov.uk/additionalhmo-licensing",
    },
    {
      label: "Harrow Council: HMO and selective licensing engagement",
      url: "https://talk.harrow.gov.uk/hmo-selectivelicensing",
    },
    {
      label: "Harrow Council: Cabinet decision on selective licensing (18 December 2025)",
      url: "https://moderngov.harrow.gov.uk/ieDecisionDetails.aspx?ID=63346",
    },
    {
      label: "Harrow Council: Additional HMO review (December 2025)",
      url: "https://moderngov.harrow.gov.uk/documents/s196801/Appendix%201%20Additional%20HMO%20review.pdf",
    },
    {
      label: "Harrow Council: HMO licence conditions (2026)",
      url: "https://moderngov.harrow.gov.uk/documents/s196874/Appendix%202%20HMO%20Conditions%202025.pdf",
    },
    {
      label: "Harrow Council: Selective licence conditions",
      url: "https://moderngov.harrow.gov.uk/documents/s196875/Appendix%203%20Selective%20Licence%20Conditions.pdf",
    },
    {
      label: "Harrow Council: Selective licensing fire safety guidance",
      url: "https://www.harrow.gov.uk/downloads/file/23804/selective-licensing-fire-safety-guidance.pdf",
    },
    {
      label: "Harrow Council: Cabinet decision on the HMO Article 4 direction (24 September 2026)",
      url: "https://moderngov.harrow.gov.uk/ieDecisionDetails.aspx?ID=63471",
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
      "Harrow's housing is mostly inter-war: 41.6% of council tax properties date from the 1930s alone, against 16.0% across London, and only 10.3% were built before 1919 (VOA 2025). Houses outnumber flats. In Census 2021, 11.3% of households lived in detached houses and 26.2% in purpose-built flats, against 6.1% and 40.3% London-wide.",
    landlordContext:
      "In Census 2021, 10.4% of Harrow households rented from a social landlord, under half the London share of 23.1%, while 58.8% owned their home (London 45.2%).",
  },
};

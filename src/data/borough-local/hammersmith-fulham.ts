import type { BoroughLocal } from "./types";

export const hammersmithFulham: BoroughLocal = {
  slug: "hammersmith-fulham",
  checkedOn: "2026-10-16",
  council: {
    name: "London Borough of Hammersmith & Fulham",
    housingUrl: "https://www.lbhf.gov.uk/housing/private-housing/landlords-and-licensing",
    licensingUrl: "https://www.lbhf.gov.uk/housing/private-housing/landlords-and-licensing/property-licensing",
  },
  licensing: [
    {
      name: "Designation for an Area for Additional Licensing of Houses in Multiple Occupation 2022",
      type: "Additional HMO",
      area: "Whole borough",
      appliesTo:
        "HMOs let to 3 or more people from 2 or more households who share amenities, including shared converted and purpose-built flats. Some section 257 converted blocks are included",
      period: "5 June 2022 to 4 June 2027",
      status: "In force",
    },
    {
      name: "Designation for an Area for Selective Licensing 2022",
      type: "Selective",
      area: "24 named streets, including Fulham Road, Goldhawk Road, King Street, North End Road and Uxbridge Road",
      appliesTo:
        "Any privately let house or flat on those streets that is not a licensable HMO. Housing association tenancies and other statutory exemptions are excluded",
      period: "5 June 2022 to 4 June 2027",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo:
        "HMOs let to 5 or more people from 2 or more households who share facilities, other than a purpose-built flat in a block of 3 or more purpose-built flats",
      period: "Ongoing, no end date",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Households renting privately", value: "36.4% (London 30.0%)", source: "Census 2021" },
    {
      label: "Households in flats or bedsits in converted or shared houses",
      value: "24.5% (London 11.1%)",
      source: "Census 2021",
    },
    { label: "Homes built before 1900", value: "48.1% (London 20.9%)", source: "VOA 2025" },
    { label: "Conservation areas", value: "44, covering about half the borough", source: "Hammersmith & Fulham Council" },
  ],
  overview: [
    "In Census 2021, 29,558 of Hammersmith and Fulham's 81,244 households rented privately: 36.4%, against 30.0% across London. The council's private rented sector policy says the borough has one of the highest densities of private rented homes in the country.",
    "Three licensing schemes apply. Since 5 June 2022, any HMO of three or more people from two or more households needs a licence anywhere in the borough.",
    "Single-household lets need a selective licence only on 24 named streets, nine of them in W12 and six in SW6. Both designations end on 4 June 2027.",
    "Every application goes through the council's online portal and needs a gas safety certificate where there is gas. HMO applications also need floor plans, and the council accepts hand-drawn ones if they are legible. Once an HMO licence is granted, its conditions let the council call in the gas certificate, the EICR and any fire alarm certificate within 14 days of a written request.",
  ],
  serviceAngles: {
    eicr: {
      heading: "Hammersmith and Fulham EICRs: due after the HMO licence, not before",
      body: [
        "H&F's FAQs list the gas safety certificate and floor plans for an HMO application, but not an EICR. The electrical report comes through the licence instead. Condition 21 says that if none is held, one must be obtained within three months of the licence being granted, and repeated at intervals of no more than five years.",
        "The same condition sets how deep the test goes. Every fixed wiring circuit must be tested, every accessible socket visually inspected and at least 20% of accessories tested, by an electrician registered with a UKAS-accredited trade body. Book against that scope so the report meets the condition first time.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety certificates and H&F licence applications",
      body: [
        "Hammersmith and Fulham's licensing FAQs tell landlords not to start an HMO application without a valid gas safety certificate where there is a gas supply. A selective application on one of the 24 streets needs a current certificate too wherever a gas appliance is fitted. The council accepts a certificate that is in date when you apply, then writes renewal into the licence.",
        "HMO condition 19 requires a Gas Safe inspection of installations, appliances and flues every 12 months. A certificate from the last 12 months must be sent to the council within 14 days of a written request. The selective conditions contain the same requirement.",
      ],
    },
    epc: {
      heading: "EPCs in Hammersmith and Fulham: how the council enforces the E minimum",
      body: [
        "Hammersmith and Fulham enforces the minimum energy efficiency standard (MEES) itself. A landlord in breach gets a compliance notice first, then a financial penalty, and the details can be added to the GLA's rogue landlord register. MEES questions go to a dedicated council mailbox.",
        "On the 24 selective licensing streets, the council's April 2025 standards for licence holders repeat the E minimum, unless an exemption has been registered.",
        "Where the property is in a conservation area, some permitted development rights are restricted, so check with the council's planning team before relying on external work to reach E.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments for H&F buildings with shared halls and stairs",
      body: [
        "Hammersmith and Fulham's landlord safety page goes further than HMOs. It says any residential building with common areas, such as shared halls, stairs, lifts, entrances or tank rooms, needs a fire risk assessment. HMO landlords, it adds, also need an emergency plan.",
        "The council inspects high-risk HMOs for escape routes and fire safety measures, and works under a protocol with the London Fire Brigade. An assessment that already deals with the escape route and the emergency plan is the document to have ready for that visit.",
        "The council publishes its own FRA templates and a fire precaution record for landlords.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Hammersmith and Fulham",
      body: [],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Hammersmith and Fulham",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Tracing electrical faults in converted H&F houses",
      body: [
        "One case in the council's 2021 Cabinet report was a house converted into six flats with no fire detection and a dangerous electrical supply. Prohibition Orders were served.",
        "On the 24 selective streets, the April 2025 standards also set a kitchen minimum: four 13 amp sockets in the food preparation area, at least two above worktop level. If extension leads are standing in for missing sockets, a fault-finding visit shows whether the circuit can take more.",
      ],
    },
    "fuse-box-installation": {
      heading: "Consumer unit work after an EICR in H&F",
      body: [
        "For homes on the 24 selective licensing streets, the council's April 2025 standards set the pace for repairs. C1 items on an EICR must be put right immediately and C2 items as quickly as possible.",
        "If a new consumer unit is part of the remedial work, finishing it starts a 28-day clock. H&F asks for written confirmation that the remedial or further investigation work is complete, sent to phs@lbhf.gov.uk with the original report within 28 days.",
      ],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting on H&F's selective streets as well as in HMOs",
      body: [
        "Emergency lighting certificates are not only an HMO matter in Hammersmith and Fulham. Selective licence condition 25, which covers single-household lets on the 24 named streets, requires a valid annual test certificate wherever emergency lighting is fitted. HMO condition 26 says the same.",
        "So a flat let to one household on a street such as Uxbridge Road or Fulham Road needs the yearly certificate too, if emergency lighting is fitted.",
      ],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Hammersmith and Fulham",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler installation in Hammersmith and Fulham",
      body: [],
    },
    "fire-safety-certificate": {
      heading: "Smoke alarms, CO alarms and furniture under H&F's HMO conditions",
      body: [
        "Condition 24 of a Hammersmith and Fulham HMO licence requires a smoke alarm on every storey with living accommodation. Each must be mains-wired or run on a lithium battery lasting at least 10 years. The council notes that LACORS fire safety guidance may call for more than that minimum.",
        "Carbon monoxide alarms fall under condition 20: one in each room with a fixed combustion appliance, gas cookers aside. Upholstered furniture supplied with the let must meet the Furniture and Furnishings (Fire) (Safety) Regulations 1988.",
        "The licence holder must give the council declarations on alarms and furniture when asked. Record alarm positions and furniture labels at each check-in so the declarations are quick to sign.",
      ],
    },
    "fire-alarm-installation": {
      heading: "Fire detection in H&F's small HMOs",
      body: [
        "Small shared homes make up most of Hammersmith and Fulham's licensed HMOs. A February 2026 Cabinet report put the total at about 4,600, of which roughly 4,000 house three to six people.",
        "Those smaller HMOs are where the council's 2021 report on private renting listed inadequate fire detection among the faults it found.",
        "Once a grade A, B or C system is installed, HMO condition 25 requires an annual test certificate, due within three months of the licence if none is held. Selective condition 24 has the same rule.",
      ],
    },
    "fire-door-certificate": {
      heading: "Fire doors in H&F shared homes and ex-council flats",
      body: [
        "A lack of fire doors was one of the faults Hammersmith and Fulham's 2021 Cabinet report found in smaller HMOs. The same report flagged ex-council leasehold flats that had been altered inside, some of them unsuitable for sharing.",
        "The council publishes pictorial guidance on fire doors next to its FRA templates. A fire door inspection measured against it shows which doors on the escape route need repair or replacement.",
      ],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguisher testing in Hammersmith and Fulham",
      body: [],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Hammersmith and Fulham",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Hammersmith and Fulham",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Hammersmith and Fulham",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "Does a let on an H&F selective street need a new EICR for every tenancy?",
        answer:
          "No, but one must be valid when each tenancy starts. The council's April 2025 standards for the 24 selective streets ask for an EICR no more than five years old, showing a satisfactory result, at the start of each tenancy and throughout the licence. Check the report's date against the licence period when a new tenancy is due.",
      },
      {
        question: "How much can Hammersmith and Fulham fine landlords for electrical safety failures?",
        answer:
          "Up to £40,000 for a breach of the Electrical Safety Standards Regulations 2020, according to Appendix 3 of the council's Private Sector Housing Enforcement Policy 2026. The same maximum applies to failing to license an HMO or selective property. The council also says that from 1 May 2026 it has a stronger duty to enforce private renting standards under the Renters' Rights Act.",
      },
    ],
    "gas-safety-certificate": [
      {
        question: "How do I apply for a property licence in Hammersmith and Fulham?",
        answer:
          "Online, through the council's property licensing portal, which works out from your answers whether you need a mandatory, additional or selective licence. As of October 2026 the council asks applicants to type the address in by hand because the postcode lookup has a technical problem. The fee is paid online when you apply; cheques and cash are not accepted.",
      },
    ],
    epc: [
      {
        question: "Does H&F Council handle planning for every conservation area in the borough?",
        answer:
          "Not all of them. Besides the council's 44, two conservation areas in the north of the borough, Grand Union Canal and Cumberland Park Factory on Scrubs Lane, fall within the OPDC planning area. For a let near either, check which planning authority covers the address before planning external works to improve the EPC.",
      },
    ],
    "fire-risk-assessment": [
      {
        question: "What safety failures has H&F found in rented homes?",
        answer:
          "The council's 2021 Cabinet report on private renting gave examples: a former laundry used as overnight accommodation with no safe means of escape, and a shop basement converted into dangerous living space.",
      },
    ],
    "pat-testing": [
      {
        question: "Who do I contact at Hammersmith and Fulham about property licensing?",
        answer:
          "Private Housing in Environmental Health, at phs@lbhf.gov.uk or 020 8753 1703. To report a suspected unlicensed HMO, the council's licensing FAQs give 020 8753 1081. The council's property licensing page also links to the online portal where applications are made.",
      },
    ],
    "commercial-eicr": [
      {
        question: "Is a converted block of flats in H&F licensable as a whole?",
        answer:
          "Only if it meets three conditions under the 2022 additional scheme. None of the flats is owner-occupied, the building is not owned or managed by two or more of the flat leaseholders, and it is not on a selective licensing street. This applies to section 257 blocks: conversions that do not meet the appropriate building standards.",
      },
    ],
    "emergency-lights-certificate": [
      {
        question: "Does an H&F licence pass to the buyer when I sell?",
        answer:
          "No. The council's FAQs say licences cannot be transferred, so a buyer of a licensed HMO must apply for a new one. Licences can run for up to five years, and the council may grant a shorter term, such as two years, if it explains why in writing.",
      },
    ],
    "boiler-installation": [
      {
        question: "Does the H&F smoke control order apply to boats?",
        answer:
          "Yes. The London Borough of Hammersmith & Fulham Smoke Control Order 2024 covers all buildings and vessels in the borough. There are no local exemptions; only exemptions granted by the Secretary of State apply. If you let a houseboat moored in the borough, a solid-fuel stove on board has to meet the same rules.",
      },
    ],
    "fire-safety-certificate": [
      {
        question: "My let was on a selective street under the 2017 scheme. Does it still need a licence?",
        answer:
          "Only if the street is one of the 24 in the 2022 designation. The earlier scheme covered 128 streets; 16 carried over and 8 were added: Baron's Court Road, Blythe Road, Coningham Road, Crookham Road, Greyhound Road, Richmond Way, Sinclair Road and Wandsworth Bridge Road. A shared home elsewhere may still need an HMO licence.",
      },
    ],
    "fire-alarm-installation": [
      {
        question: "Do small HMOs in H&F need planning permission?",
        answer:
          "Not as of October 2026, when no Article 4 Direction for small HMOs had been made or confirmed. On 9 February 2026 the council's Cabinet approved making a non-immediate direction that would remove permitted development rights for turning a home (C3) into a small HMO (C4). Such a direction takes effect 12 months after it is made and must be confirmed after consultation.",
      },
    ],
    "commercial-epc": [
      {
        question: "Why were these 24 streets chosen for selective licensing?",
        answer:
          "H&F says the streets have higher levels of anti-social behaviour (ASB), rubbish and waste problems and noise complaints. Streets were scored on their number and share of private rented homes and on ASB. The council says the chosen streets, 1.95% of the borough's streets, account for 19.2% of its ASB reports.",
      },
    ],
    "legionella-risk-assessment": [
      {
        question: "How can I check whether an H&F property is licensed?",
        answer:
          "The council publishes register extracts as spreadsheets, listing each licensed address with its licence start and end dates. The latest HMO and selective extracts are dated 5 October 2026. The full register can be viewed free by booking a Teams appointment with the council, or bought as a PDF.",
      },
    ],
  },
  sources: [
    {
      label: "Hammersmith & Fulham Council: Landlords and licensing",
      url: "https://www.lbhf.gov.uk/housing/private-housing/landlords-and-licensing",
    },
    {
      label: "Hammersmith & Fulham Council: Property licensing",
      url: "https://www.lbhf.gov.uk/housing/private-housing/landlords-and-licensing/property-licensing",
    },
    {
      label: "Hammersmith & Fulham Council: HMO mandatory, additional and selective licensing FAQs",
      url: "https://www.lbhf.gov.uk/housing/private-housing/landlords-and-licensing/property-licensing/hmo-mandatory-additional-and-selective-licensing-faqs",
    },
    {
      label: "Hammersmith & Fulham Council: Additional licensing designation notice (2022)",
      url: "https://www.lbhf.gov.uk/sites/default/files/section_attachments/appendix_public_notice_additional_licensing.pdf",
    },
    {
      label: "Hammersmith & Fulham Council: Selective licensing designation notice (2022)",
      url: "https://www.lbhf.gov.uk/sites/default/files/section_attachments/appendix_public_notice_selective_licensing.pdf",
    },
    {
      label: "Hammersmith & Fulham Council: New discretionary licensing schemes approved",
      url: "https://www.lbhf.gov.uk/housing/private-housing/new-discretionary-licensing-schemes-approved",
    },
    {
      label: "Hammersmith & Fulham Council: Standards for selective licensing streets (April 2025)",
      url: "https://www.lbhf.gov.uk/sites/default/files/2025-05/h-f-standards-and-guidance-for-houses-and-flats-in-selective-licensing-streets-april-2025.pdf",
    },
    {
      label: "Hammersmith & Fulham Council: HMO licence conditions (May 2023)",
      url: "https://www.lbhf.gov.uk/sites/default/files/section_attachments/hf_property_licensing_conditions_hmos_amended_may_2023.pdf",
    },
    {
      label: "Hammersmith & Fulham Council: Selective licence conditions (May 2023)",
      url: "https://www.lbhf.gov.uk/sites/default/files/2024-08/HF-Property-Licence-Conditions-Selective-Licensing-May-2023.pdf",
    },
    {
      label: "Hammersmith & Fulham Council: Register of licences",
      url: "https://www.lbhf.gov.uk/housing/private-housing/landlords-and-licensing/property-licensing/register-licences",
    },
    {
      label: "Hammersmith & Fulham Council: Fire, electrical and gas safety for landlords",
      url: "https://www.lbhf.gov.uk/housing/private-housing/landlords-and-licensing/fire-electrical-and-gas-safety-landlords",
    },
    {
      label: "Hammersmith & Fulham Council: Private sector housing enforcement policy",
      url: "https://www.lbhf.gov.uk/housing/private-housing/private-sector-housing-enforcement-policy",
    },
    {
      label: "Hammersmith & Fulham Council: Determination of financial penalties (Appendix 3, 2026)",
      url: "https://www.lbhf.gov.uk/sites/default/files/2026-09/appendix-3-determination-of-financial-penalties-renters-rights-act-and-other-housing-legislation.pdf",
    },
    {
      label: "Hammersmith & Fulham Council: Renters' Rights Act",
      url: "https://www.lbhf.gov.uk/housing/private-housing/renters-rights-act",
    },
    {
      label: "Hammersmith & Fulham Council: Energy efficiency (MEES)",
      url: "https://www.lbhf.gov.uk/housing/private-housing/energy-efficiency",
    },
    {
      label: "Hammersmith & Fulham Council: Conservation areas",
      url: "https://www.lbhf.gov.uk/planning/urban-design-and-conservation/conservation-areas",
    },
    {
      label: "Hammersmith & Fulham Council: Smoke Control Order 2024",
      url: "https://www.lbhf.gov.uk/environment/air-quality/smoke-control-order-2024",
    },
    {
      label: "Hammersmith & Fulham Council: Improving the private rented sector (Cabinet report, 2021)",
      url: "http://democracy.lbhf.gov.uk/documents/s118702/Improving%20the%20private%20rented%20sector.pdf",
    },
    {
      label: "Hammersmith & Fulham Council: Article 4 Direction for small HMOs (Cabinet report, February 2026)",
      url: "https://democracy.lbhf.gov.uk/documents/s133735/Article%204%20Direction%20Small%20Houses%20In%20Multiple%20Occupation.pdf",
    },
    {
      label: "Hammersmith & Fulham Council: Article 4 Direction decision (9 February 2026)",
      url: "https://democracy.lbhf.gov.uk/ieDecisionDetails.aspx?AIId=73031",
    },
    {
      label: "Hammersmith & Fulham Council: Private Rented Sector Policy",
      url: "https://democracy.lbhf.gov.uk/documents/s130044/Appendix+1+-+HF+Private+Rented+Sector+Policy.pdf",
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
      "Most Hammersmith and Fulham households live in flats: in Census 2021, 48.1% were in purpose-built flats and 24.5% in flats or bedsits in converted or shared houses. That second share is more than double London's, and 18.8% lived in terraced houses. The stock is old too: VOA figures date 55.7% of properties before 1919, against 29.1% London-wide.",
    landlordContext:
      "Private renting is the borough's largest tenure. Council data from August 2024 put the borough's median two-bedroom rent fourth highest in London.",
  },
};

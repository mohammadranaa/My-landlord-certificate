import type { BoroughLocal } from "./types";

export const camden: BoroughLocal = {
  slug: "camden",
  checkedOn: "2026-10-15",
  council: {
    name: "Camden Council",
    housingUrl: "https://www.camden.gov.uk/private-sector-housing",
    licensingUrl: "https://www.camden.gov.uk/houses-multiple-occupation",
  },
  licensing: [
    {
      name: "Additional HMO Licensing Designation 2025",
      type: "Additional HMO",
      area: "Whole borough",
      appliesTo:
        "HMOs with 3 or more people from 2 or more households, including HMO flats in purpose-built blocks; and section 257 converted blocks of flats where less than half the flats are owner-occupied",
      period: "8 December 2025 to 8 December 2030",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo: "Most properties with 5 or more people from 2 or more households, whatever the number of storeys",
      period: "Current definition since 1 October 2018",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Households renting privately", value: "35.6% (London 30.0%)", source: "Census 2021" },
    {
      label: "Households in flats in converted or shared houses",
      value: "26.2% (London 11.1%)",
      source: "Census 2021",
    },
    { label: "Homes built before 1900", value: "44.7% (London 20.9%)", source: "VOA 2025" },
    { label: "Conservation areas", value: "40, covering about half the borough", source: "Camden Council" },
  ],
  overview: [
    "Private renting is the largest tenure in Camden: 35.6% of households rented privately at the 2021 Census, against 30.0% across London. More than a quarter of households (26.2%) live in flats or bedsits in converted or shared houses, over double the London share. In addition, 44.7% of Camden's homes were built before 1900.",
    "Camden's licensing applies to HMOs. Its third borough-wide additional HMO scheme runs from 8 December 2025 to 8 December 2030. It covers shared homes of three or more people from two or more households, including HMO flats in purpose-built blocks that are exempt from mandatory licensing nationally.",
    "Each licence condition points to a check. Condition 14 requires the gas safety certificate to be sent to the council every year. Condition 15 requires an EICR copy within 7 days of a request, and condition 16 a PAT report every 12 months for landlord-supplied appliances.",
    "Condition 19 requires fire alarm and emergency lighting test reports within 21 days of a request. Condition 20 requires carbon monoxide alarms where there is a fixed combustion appliance other than a gas cooker or a gas flue. Condition 21 requires a written fire risk assessment within 21 days.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Camden: older homes, converted flats and the HMO licence",
      body: [
        "Camden's housing is older and more subdivided than London as a whole. Of its council tax properties, 44.7% were built before 1900, against 20.9% across London (VOA 2025). Of its households, 26.2% live in flats or bedsits in converted or shared houses, against 11.1% (Census 2021).",
        "If the property is an HMO, the EICR is part of the licence application. Camden says a complete application, new or renewal, needs a valid EICR issued within the last five years by a person registered for inspection and testing.",
        "An incomplete application can be rejected or given a licence shorter than five years. Renewals open only 30 days before the licence expires, so have the report in hand before that window.",
        "Once licensed, condition 15 of the 2025-30 designation requires you to hold a current certificate and send Camden a copy within 7 days of a written request.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety in Camden: the yearly certificate the council expects",
      body: [
        "For licensed HMOs, Camden asks for more than a certificate on file. Condition 14 of its 2025-30 licence conditions applies where there is a gas supply. The licence holder must send Camden the current gas safety certificate every year and give copies to occupants.",
        "That makes your CP12 renewal date a licensing deadline as well as a tenancy one. A gas certificate also belongs in a complete new or renewal licence application, so an application without a current certificate can be treated as incomplete.",
      ],
    },
    epc: {
      heading: "EPCs in Camden: MEES, conservation areas and listed buildings",
      body: [
        "Camden says it enforces the minimum E rating for private lets. It also warns that consent may be needed for improvement works if the property is listed or in a conservation area. That applies to a large part of the borough: Camden has 40 conservation areas covering about half its area, and more than 5,600 listed buildings.",
        "In a listed building every part is protected, including the interior, and works without listed building consent are a criminal offence. In a conservation area, alterations usually need planning permission and a heritage statement, so check the EPC recommendations against those limits before booking contractors.",
        "As of October 2026, Camden's MEES Support Grant match-funds landlord works on homes rated D to G to reach at least band C, up to £10,000 per building. HMOs that do not need an EPC can qualify through a PAS 2035 retrofit plan instead.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Camden: what the licence requires",
      body: [
        "Condition 21 of Camden's 2025-30 HMO licence conditions requires the licence holder to give the council a written fire risk assessment within 21 days of a written request. The condition refers to an assessment carried out under the Regulatory Reform (Fire Safety) Order 2005.",
        "Fire safety is the most common type of work Camden's HMO licences require. The council's October 2024 review found that 94% of sampled additional licences needed works to meet HMO standards. An assessment done before you apply or renew lets you plan those works rather than meet them at licensing.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Camden: a yearly HMO licence condition",
      body: [
        "In a Camden licensed HMO, PAT testing is a licence condition rather than good practice. Condition 16 requires a PAT test report every 12 months for all landlord-supplied electrical appliances, supplied to Camden within 21 days of a written request.",
        "Camden publishes a register of licensed HMOs on its open data portal, so you can check whether a property you manage is listed and the condition applies. If it is, keep each year's report ready to send.",
      ],
    },
    "commercial-eicr": {
      heading: "Converted blocks in Camden: electrical checks beyond the flat",
      body: [
        "Camden's additional scheme also licenses section 257 HMOs, and BRE modelling from 2020, quoted by the council, puts about 2,000 of these converted blocks in the borough.",
        "A licence application for one needs a valid EICR issued within the last five years. Where you are responsible for the common parts, include the landlord's supply to those parts in the inspection.",
      ],
    },
    "electrical-diagnostic": {
      heading: "Electrical faults in Camden HMOs",
      body: [
        "Camden's review of its 2020-25 licensing scheme lists extra sockets in kitchens and bedrooms among the works HMO licences required. Tripping or overloaded circuits in a shared kitchen are therefore worth tracing before you apply for or renew a licence.",
      ],
    },
    "fuse-box-installation": {
      heading: "Consumer unit upgrades in Camden",
      body: [
        "A C2 code on the consumer unit must be put right within 28 days, which often means replacing it. Camden asks landlords to email written confirmation of completed EICR remedial work to its HMO licensing team mailbox, so keep the installation certificate for the new board ready to send.",
        "Camden has more than 5,600 listed buildings, and listing protects interiors too, so check whether consent is needed before moving a board in one.",
      ],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Camden HMOs",
      body: [
        "Camden's licence condition 19 covers emergency lighting as well as alarms. Any emergency lighting must be kept in working order, and the licence holder must give Camden a BS 5266 emergency lighting test report within 21 days of a request.",
        "Camden links to the LACORS fire safety guidance for HMOs from its HMO page. Use it with your fire risk assessment to judge whether a property needs emergency lighting at all.",
      ],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Camden",
      body: [
        "Mixed use is part of Camden's housing picture: 2.4% of households live in a commercial building, such as a flat over a shop (Census 2021). Where the shop, café or office below a let flat has gas appliances, those need a separate CP42 commercial record, not the flat's CP12.",
      ],
    },
    "boiler-installation": {
      heading: "Boiler replacements in Camden: smoke control and flue consent",
      body: [
        "Since 2 November 2025, the whole of Camden has been a smoke control area under the London Borough of Camden Smoke Control Order 2025. The order has no exempt buildings, appliances, fireplaces or boilers. If you are replacing a solid-fuel boiler or stove in a let property, the order applies wherever it is in the borough.",
        "In a listed building or one of Camden's conservation areas, check whether consent is needed before agreeing a new flue route.",
      ],
    },
    "fire-safety-certificate": {
      heading: "Smoke and CO alarms in Camden: what the licence adds",
      body: [
        "Camden's licence condition 19 requires smoke and heat alarms in a licensed HMO to be kept in working order. The council can also ask for a BS 5839 fire alarm test report within 21 days. Keep the latest test results with your licence papers.",
        "Condition 20 adds a carbon monoxide alarm in any room used as living accommodation that has a fixed combustion appliance other than a gas cooker. It also applies to any such room with a flue from a gas appliance running through it. The second part covers rooms with no appliance in them, so check where flues run before the alarm test.",
      ],
    },
    "fire-alarm-installation": {
      heading: "Fire alarm systems in Camden HMOs",
      body: [
        "Camden's October 2024 review of its 2020-25 additional licensing scheme lists mains-wired smoke and heat detection among the fire safety works HMO licences required. If your HMO relies on standalone battery alarms, check the system against Camden's published HMO standards before you apply or renew.",
        "Plan the installation to BS 5839, the standard Camden names for the alarm test report it can request under condition 19.",
      ],
    },
    "fire-door-certificate": {
      heading: "Fire doors in Camden: the works HMO licences ask for",
      body: [
        "Camden's review of its 2020-25 scheme lists fire doors for a protected escape route, and removing key-operated locks, among the common fire safety works HMO licences required.",
        "A fire door inspection records the condition of each door and gives you a record of any doors that need repair or replacement. It also supports the written fire risk assessment Camden can ask for within 21 days under licence condition 21.",
      ],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguishers in Camden HMOs",
      body: [
        "Camden links HMO landlords to the LACORS fire safety guidance from its HMO page and publishes its own HMO standards documents. Its review of the 2020-25 licensing scheme names fire blankets among common fire safety works.",
        "Whether extinguishers are needed, and where, is decided by the fire risk assessment, which Camden can ask to see within 21 days under licence condition 21.",
      ],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Camden",
      body: [
        "The national planning data register lists Article 4 directions for Camden, in force since July 2022, covering changes of use from commercial (Class E) to residential. Where one applies, a shop or office needs planning permission to become flats. While it stays commercial, it still needs a valid EPC rated E or above before it is let.",
      ],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Camden: stock age and common parts",
      body: [
        "About 86% of Camden's council tax properties were built before 2000, and about 20% date from 1955 to 1982 (VOA 2025), all before asbestos was banned in 1999.",
        "In Camden, 56.2% of households live in purpose-built flats, against 40.3% across London (Census 2021), and the duty to manage asbestos covers the common parts of those blocks.",
        "Listed status reaches post-war buildings here too: Camden names the 1970s Alexandra Road Estate among its listed buildings. On a listed block, plan for listed building consent as well as the survey before any works.",
      ],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Camden",
      body: [
        "Camden's additional HMO licensing covers shared homes of three or more people from two or more households across the whole borough. That means a small flat share here can carry licence duties alongside the legionella assessment.",
      ],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "Where do I send proof of EICR remedial work in Camden?",
        answer:
          "Camden asks landlords to email written confirmation of completed EICR remedial work to its HMO licensing team mailbox. The address is on the council's requirements for agents and landlords page. The same page restates that remedial work must be carried out within 28 days.",
      },
      {
        question: "What penalty can Camden issue for an EICR breach?",
        answer:
          "Up to £40,000 for breaches of the Electrical Safety Standards Regulations 2020. That is the statutory maximum civil penalty in Camden's civil penalty notice policy, updated on 30 September 2026 for the Renters' Rights Act 2025. The same policy lists £40,000 as the maximum for failing to license an HMO or breaching its licence conditions.",
      },
    ],
    "gas-safety-certificate": [
      {
        question: "What if my Camden HMO has no gas supply?",
        answer:
          "Condition 14 applies only where there is a gas supply, so an all-electric HMO has no yearly gas certificate to send to the council. A licence application also needs gas certificates only where they apply. The other conditions still apply, including a current EICR and a PAT report every 12 months for landlord-supplied appliances.",
      },
    ],
    epc: [
      {
        question: "What does Camden's MEES grant ask of the landlord?",
        answer:
          "As of October 2026, Camden's scheme page says works must follow a valid EPC, ideally no more than 24 months old. The landlord must be a member of the London Landlord Accreditation Scheme when the works are completed, and must also commit to renting the property for five years.",
      },
    ],
    "fire-risk-assessment": [
      {
        question: "Does an HMO flat in a purpose-built block need a Camden licence?",
        answer:
          "Yes. Nationally, flats in purpose-built blocks of three or more flats are exempt from mandatory HMO licensing, but Camden says such flats must still be licensed under its additional scheme. The scheme covers the whole borough and applies from three occupiers forming two or more households.",
      },
    ],
    "pat-testing": [
      {
        question: "Does a three-person flat share in Camden need a licence?",
        answer:
          "It can. Camden's additional scheme, running from 8 December 2025 to 8 December 2030, covers homes shared by three or more people forming two or more households across the whole borough. So a flat let to three unrelated sharers is within scope, not just large shared houses.",
      },
    ],
    "emergency-lights-certificate": [
      {
        question: "Does every Camden HMO need emergency lighting?",
        answer:
          "Not automatically. Condition 19 is written around any emergency lighting that is fitted: it must be kept working and a BS 5266 report supplied on request. Whether a property needs emergency lighting is a matter for its fire risk assessment, which Camden can ask to see within 21 days under condition 21.",
      },
    ],
    "fire-alarm-installation": [
      {
        question: "Does Camden publish its own HMO standards?",
        answer:
          "Yes. Camden's HMO page links to its HMO standards documents, which cover shared facilities, self-contained flats and studios in HMOs, and hostels, alongside the LACORS fire safety guidance for HMOs. Read the document that matches your property type before choosing an alarm system.",
      },
    ],
    "fire-door-certificate": [
      {
        question: "Can I replace a fire door in a listed building in Camden?",
        answer:
          "Only with care. Camden says every part of a listed building, including the interior, is protected, and works need listed building consent; carrying them out without it is a criminal offence. Camden has more than 5,600 listed buildings, so check the status before ordering replacement doors.",
      },
    ],
    "boiler-installation": [
      {
        question: "Does Camden's MEES grant set rules for a new boiler?",
        answer:
          "Yes. As of October 2026, Camden's MEES Support Grant page says grant-funded gas boilers must have at least 90% seasonal efficiency and NOx emissions of 40mg/kWh or less. The grant is for homes rated D to G and helps fund works to reach at least band C.",
      },
    ],
    "fire-safety-certificate": [
      {
        question: "Do Camden HMO licences cover furniture fire safety?",
        answer:
          "Yes. Condition 18 of Camden's 2025-30 licence conditions says upholstered furniture in a licensed HMO should comply with the Furniture and Furnishings (Fire) (Safety) Regulations 1988. Check the fire safety labels on sofas, armchairs and mattresses before a new tenancy or a licence renewal.",
      },
    ],
    "commercial-eicr": [
      {
        question: "Which converted blocks fall under Camden's section 257 licensing?",
        answer:
          "Blocks converted into self-contained flats where less than half the flats are owner-occupied and the conversion does not meet the Building Regulations 1991 standard. Camden's additional scheme covers these buildings across the whole borough; if half or more of the flats are owner-occupied, the block falls outside this part of the scheme.",
      },
    ],
  },
  sources: [
    { label: "Camden Council: Houses in multiple occupation (HMO)", url: "https://www.camden.gov.uk/houses-multiple-occupation" },
    {
      label: "Camden Council: Additional HMO licensing designation 2025, public notice",
      url: "https://www.camden.gov.uk/hmo-consultation-public-notice",
    },
    {
      label: "Camden Council: HMO licence conditions, 2025-30 designation",
      url: "https://www.camden.gov.uk/documents/d/guest/updated-licence-conditions-for-25-30-designation",
    },
    {
      label: "Camden Council: Review of the additional HMO licensing scheme (October 2024)",
      url: "https://www.camden.gov.uk/documents/d/guest/review-of-the-current-additional-hmo-licensing-scheme",
    },
    {
      label: "Camden Council: HMO licensing application fees 2026-27",
      url: "https://www.camden.gov.uk/documents/d/guest/hmo-licensing-application-fees-2026-2027",
    },
    { label: "Camden Council: Requirements for agents and landlords", url: "https://www.camden.gov.uk/requirements-agents-landlords" },
    {
      label: "Camden Council: Civil penalty notice policy (September 2026)",
      url: "https://www.camden.gov.uk/documents/d/guest/camden-civil-penalty-notice-policy-sep-26",
    },
    {
      label: "Camden Council: Minimum Energy Efficiency Standards Support Grant",
      url: "https://www.camden.gov.uk/minimum-energy-efficiency-standards-support-grant",
    },
    { label: "Camden Council: Conservation areas", url: "https://www.camden.gov.uk/conservation-areas" },
    { label: "Camden Council: Listed buildings", url: "https://www.camden.gov.uk/listed-buildings" },
    { label: "Camden Council: Smoke Control Order 2025", url: "https://www.camden.gov.uk/camden-smoke-control-order-2025" },
    { label: "ONS Census 2021: TS054 Tenure (Nomis)", url: "https://www.nomisweb.co.uk/datasets/c2021ts054" },
    { label: "ONS Census 2021: TS044 Accommodation type (Nomis)", url: "https://www.nomisweb.co.uk/datasets/c2021ts044" },
    {
      label: "VOA: Council Tax Stock of Properties 2025",
      url: "https://www.gov.uk/government/statistics/council-tax-stock-of-properties-2025",
    },
    {
      label: "Planning Data: Article 4 directions, Camden",
      url: "https://www.planning.data.gov.uk/entity.json?dataset=article-4-direction&organisation_entity=90",
    },
  ],
};

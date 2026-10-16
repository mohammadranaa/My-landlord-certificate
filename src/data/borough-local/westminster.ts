import type { BoroughLocal } from "./types";

export const westminster: BoroughLocal = {
  slug: "westminster",
  checkedOn: "2026-10-16",
  council: {
    name: "Westminster City Council",
    housingUrl: "https://www.westminster.gov.uk/housing/private-sector-housing/landlords",
    licensingUrl: "https://www.westminster.gov.uk/housing/private-sector-housing/selective-property-licensing",
  },
  licensing: [
    {
      name: "Additional HMO Licensing Designation 2026",
      type: "Additional HMO",
      area: "Whole City of Westminster",
      appliesTo:
        "HMOs of 3 or more people from 2 or more households sharing a basic amenity, including shared flats in purpose-built blocks and converted buildings, and bedsits. Excludes mandatory HMOs and section 257 converted blocks",
      period: "31 August 2026 to 30 August 2031",
      status: "In force",
    },
    {
      name: "Selective Licensing Designations 2025 (No. 1 and No. 2)",
      type: "Selective",
      area: "15 of 18 wards: all except Pimlico South, St James's and Vincent Square",
      appliesTo:
        "Privately rented homes that are not HMOs, such as homes let to a family, a single tenant or two sharers",
      period: "24 November 2025 to 23 November 2030",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole City of Westminster",
      appliesTo:
        "HMOs of 5 or more people from 2 or more households. Shared flats in purpose-built blocks apply under the additional scheme instead",
      period: "In place since 2006 (council notes)",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Households renting privately", value: "43.3% (London 30.0%)", source: "Census 2021" },
    { label: "Households in purpose-built flats or tenements", value: "70.2% (London 40.3%)", source: "Census 2021" },
    { label: "Homes built before 1900", value: "44.1% (London 20.9%)", source: "VOA 2025" },
    { label: "Conservation areas", value: "56, covering over 76% of the City", source: "Westminster City Council" },
  ],
  overview: [
    "At the 2021 Census, 41,065 of Westminster's 94,816 households (43.3%) rented from a private landlord, against 30.0% for London. The council's 2024 stock modelling puts the private rented share between 28.3% in Queen's Park and 54.1% in Hyde Park. The West End holds the most private rented homes, at 5,153.",
    "Two licensing schemes now apply to private lets. Since 31 August 2026, a home shared by three or more people from two or more households needs an additional HMO licence anywhere in the City. A home let to one household, such as a family or two sharers, needs a selective licence in 15 of the 18 wards, all except Pimlico South, St James's and Vincent Square.",
    "Applications for both go through the council's online licensing portal, with no paper forms. Each needs an EICR, plus a gas safety certificate where there is gas. Once a valid application is in, the council says the property can stay let while it is processed.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Westminster: needed for single-household lets too",
      body: [
        "In 15 of Westminster's 18 wards, a flat let to one household, such as a family or two sharers, needs a selective licence, and the application must include an EICR. Every HMO licence application across the City must also include an EICR issued within the last five years.",
        "After a selective licence is granted, condition 9 lets the council ask for a declaration that the fixed installation is safe, due within 21 days of the request. Sending the EICR with it is not mandatory, but the current EICR is the simplest evidence to send.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety in Westminster: one yearly certificate per licensed flat",
      body: [
        "Westminster's yearly gas duty sits in selective licence condition 6. For every licensed flat with a gas supply, the licence holder must produce a gas safety certificate dated within the last 12 months each year. A copy is due within 21 days of any demand, and a landlord with several licensed flats in one block owes one for each.",
        "Shared homes meet the gas check at the licence application instead. An HMO licence application needs a gas certificate from the last 12 months wherever there is a gas supply. Time the CP12 renewal so it is still in date when you apply or renew.",
      ],
    },
    epc: {
      heading: "EPCs in Westminster: shared-home ratings and the MEES record",
      body: [
        "Most of Westminster's known licensable HMOs were rated C or D in the council's 2025 evidence, with 9.2% at E, 6.4% at B and none at A. The council says improvements are harder because about half the City's housing was built before 1900.",
        "The minimum E rating has been enforced on ordinary lets here. All four MEES penalties in the council's 2021 to 2025 penalty table were issued on homes that were not HMOs.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Westminster: the block's Responsible Person",
      body: [
        "Selective licence condition 11 ties a licensed Westminster flat to the fire safety of the building around it. The licence holder must co-operate with any superior landlord acting as the Responsible Person under the Regulatory Reform (Fire Safety) Order 2005.",
        "In particular, the licence holder must grant reasonable access for fire safety inspections and for installing fire safety equipment. Failing to give that access would breach the condition, so build it into how you arrange visits with tenants.",
      ],
    },
    "pat-testing": {
      heading: "Appliance testing in Westminster: the 30-month selective condition",
      body: [
        "Westminster's selective licence sets its own timetable for appliance checks. Condition 7 requires an electrical appliance test report on every landlord-supplied appliance every 30 months, with a copy to the council within 21 days of a demand.",
        "Put the test date in the same diary as the CP12 renewal. Both reports can be called in at 21 days' notice for a licensed let in any of the 15 selective wards.",
      ],
    },
    "commercial-eicr": {
      heading: "Common parts in Westminster's converted houses",
      body: [
        "Westminster chose not to license section 257 buildings, houses converted into flats that fall short of building regulation standards. Since 2021 a dedicated council team has inspected them instead, working with landlords on fire safety and building security in the communal areas.",
        "Those communal areas are where the freeholder's own electrics sit, such as stair lighting and the entry system. Have them inspected and keep the report with your building records.",
      ],
    },
    "electrical-diagnostic": {
      heading: "Electrical faults in Westminster homes",
      body: [],
    },
    "fuse-box-installation": {
      heading: "Consumer unit upgrades in Westminster",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Westminster HMOs",
      body: [
        "Westminster's 2025 evidence pack sets out what an HMO licence application must include. Where a communal fire alarm and emergency lighting system is installed, its test certificate must date from the last 12 months, the same window as the gas certificate.",
      ],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Westminster",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler installation in Westminster",
      body: [],
    },
    "fire-safety-certificate": {
      heading: "Linked smoke alarms under Westminster's selective licence",
      body: [
        "Westminster's selective licence condition 10 asks for more than a working alarm on each storey. Where more than one smoke alarm is fitted, they must be linked, so an alarm on one floor sounds on the others.",
        "Carbon monoxide alarms sit under a separate condition, number 12, so check against both conditions when you test alarms at a change of tenant.",
      ],
    },
    "fire-alarm-installation": {
      heading: "Fire detection in Westminster: what licensing found",
      body: [
        "When Westminster asked HMO licence applicants about their fire precautions, 770 of them (31%) reported no fire detection system at all. The council says these answers helped it decide which properties to inspect and which conditions to set.",
        "For single-household lets in the selective wards, battery alarms to BS 5839-6 are the minimum. The council recommends hard-wired mains alarms and says it is likely to ask for them after an inspection where battery alarms are fitted. Mains-wired detection fitted now means that request is already met.",
      ],
    },
    "fire-door-certificate": {
      heading: "Fire doors in Westminster: converted houses and inner rooms",
      body: [
        "Almost half of Westminster's HMO licence applicants, 1,151 or 49%, said their property had no fire doors. The council links part of the problem to its stock: many Victorian and Edwardian houses built for one family were turned into flats or HMOs without redesigning the layout.",
        "That leaves inner rooms, bedrooms reached only through a kitchen or living room. By 2025, 131 properties had bespoke licence conditions requiring fire suppression and a protected escape route.",
      ],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguisher testing in Westminster",
      body: [],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Westminster",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Westminster",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Westminster",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "Has Westminster fined landlords over electrical safety?",
        answer:
          "Yes: 10 of the 95 civil penalties in the council's table covering 2021 to August 2025 were under electrical safety rules. Westminster's Civil Financial Penalty Policy of May 2026 sets the statutory maximum for a breach of the Electrical Safety Standards Regulations 2020 at £40,000. That is the same maximum as for failing to license a property.",
      },
      {
        question: "My HMO licence dates from the 2021 Westminster scheme. Do I reapply now?",
        answer:
          "Not straight away. The council says licences granted under the 2021 scheme stay valid until their own expiry dates, and renewals can go in up to three months before that date. The 2021 scheme itself was replaced by the 2026 designation from 31 August 2026.",
      },
    ],
    "gas-safety-certificate": [
      {
        question: "Which Westminster wards are in the selective scheme?",
        answer:
          "Designation 1 covers Abbey Road, Church Street, Harrow Road, Knightsbridge and Belgravia, Little Venice, Maida Vale, Queen's Park and Westbourne. Designation 2 covers Bayswater, Hyde Park, Lancaster Gate, Marylebone, Pimlico North, Regent's Park and West End. The council links to an online ward finder if you are unsure which ward a property is in.",
      },
    ],
    epc: [
      {
        question: "Does the EPC rating change Westminster's licence fee?",
        answer:
          "Yes, as of October 2026. Both the HMO and selective schemes take 10% off Part B of the fee for a property rated EPC C, and 20% off for B or above. Accredited landlords get a separate 10% discount, and the council's fee pages give the current amounts to check before you apply.",
      },
    ],
    "fire-risk-assessment": [
      {
        question: "Which licence does a shared flat in a Westminster mansion block need?",
        answer:
          "An additional HMO licence, if three or more people from two or more households share it. Westminster tells applicants that a flat in a purpose-built block should apply under the additional scheme rather than the mandatory one, even with five or more occupiers. The council's evidence pack says additional licensing takes in many HMOs in mansion blocks, other purpose-built developments and council-owned buildings.",
      },
    ],
    "pat-testing": [
      {
        question: "Can an overseas landlord hold a Westminster selective licence?",
        answer:
          "Only with a UK-based managing agent: the council says an overseas landlord who wants to be the licence holder must nominate one, who signs a declaration. Agree who will answer the council's 21-day requests, such as for the appliance report, before you apply. About 30% of Westminster's licensed HMO owners live outside the UK.",
      },
    ],
    "commercial-eicr": [
      {
        question: "Do the flats in a Westminster converted house need licences?",
        answer:
          "They can, even though the building itself is not licensed under the 2026 HMO scheme. Each rented flat in one of the 15 selective wards needs a selective licence if it is let to a single household. A flat shared by three or more people from separate households needs an HMO licence instead.",
      },
    ],
    "emergency-lights-certificate": [
      {
        question: "How long does a Westminster HMO licence take?",
        answer:
          "The HMO team aims to decide within three months of a valid application. Questions go to the HMO Licensing Team on 020 7641 6161, Monday to Friday from 9am to 5pm, or HMO@westminster.gov.uk. The council says you can keep letting the property while a valid application is being processed.",
      },
    ],
    "boiler-installation": [
      {
        question: "Do Westminster's Article 4 areas affect outside alterations?",
        answer:
          "Yes, in eight conservation areas, where Article 4 directions remove permitted development rights for minor alterations. They include Abbey Gardens NW8, Bristol Gardens W9, Queen's Park Estate W10 and Sussex Gardens W2. Check with the council's planning team before agreeing a new external flue or vent on a property in one of them.",
      },
    ],
    "fire-safety-certificate": [
      {
        question: "Does Westminster's selective licence cover furniture?",
        answer:
          "Yes. Condition 8 requires upholstered furniture supplied with the let to meet fire safety legislation, and the licence holder must give the council a declaration on demand. Check the labels on sofas, armchairs and mattresses at each change of tenant so the declaration can be signed with confidence.",
      },
    ],
    "fire-alarm-installation": [
      {
        question: "Will a small Westminster HMO need a fire alarm certificate to apply?",
        answer:
          "Often not. The council says many small HMOs will not need a fire alarm certificate, because one is only asked for where a system is already provided. Whether detection should be added is a separate question: the council judges shared homes against its published HMO standards, and a licence can carry works conditions to meet them.",
      },
    ],
    "fire-door-certificate": [
      {
        question: "Can Westminster fine me for unfinished licence works?",
        answer:
          "Yes. Between 2021 and August 2025, 17 licence holders were fined for not completing works conditions, and 50 landlords and agents for running unlicensed HMOs. Under the council's May 2026 penalty policy, the maximum for breaching licence conditions is £40,000.",
      },
    ],
    "legionella-risk-assessment": [
      {
        question: "How can I check whether a Westminster HMO is licensed?",
        answer:
          "Use the council's online planning and licensing search and choose the category Houses in Multiple Occupation, which lists both applications and granted licences. An empty result does not prove that no application has been made. Both selective designations also say the council keeps a register of licensed houses.",
      },
    ],
  },
  sources: [
    {
      label: "Westminster City Council: Private sector housing, landlords",
      url: "https://www.westminster.gov.uk/housing/private-sector-housing/landlords",
    },
    {
      label: "Westminster City Council: Houses in multiple occupation (HMOs)",
      url: "https://www.westminster.gov.uk/housing/private-sector-housing/landlords/houses-multiple-occupation-hmos",
    },
    {
      label: "Westminster City Council: Additional HMO licensing designation 2026",
      url: "https://www.westminster.gov.uk/sites/default/files/media/documents/additional-hmo-licensing-designation-2026.pdf",
    },
    {
      label: "Westminster City Council: Additional licensing scheme renewal",
      url: "https://www.westminster.gov.uk/housing/private-sector-housing/houses-multiple-occupation-hmo/additional-licensing-scheme-renewal",
    },
    {
      label: "Westminster City Council: HMO licensing FAQs",
      url: "https://www.westminster.gov.uk/housing/private-sector-housing/houses-multiple-occupation-hmo/hmo-licensing-faqs",
    },
    {
      label: "Westminster City Council: HMO consultation evidence pack (August 2025)",
      url: "https://www.westminster.gov.uk/sites/default/files/media/documents/hmo-consultation-evidence-pack.pdf",
    },
    {
      label: "Westminster City Council: HMO standards and further information",
      url: "https://www.westminster.gov.uk/houses-multiple-occupation/hmo-standards-and-further-information",
    },
    {
      label: "Westminster City Council: Selective licensing, do I need a licence?",
      url: "https://www.westminster.gov.uk/housing/private-sector-housing/selective-property-licensing/do-i-need-licence",
    },
    {
      label: "Westminster City Council: Selective licence conditions",
      url: "https://www.westminster.gov.uk/sites/default/files/media/documents/Selective%20Licensing%20Conditions%20.pdf",
    },
    {
      label: "Westminster City Council: Selective licensing FAQs",
      url: "https://www.westminster.gov.uk/housing/private-sector-housing/selective-property-licensing/selective-licensing-faqs",
    },
    {
      label: "Westminster City Council: HMO licence fees and guidance",
      url: "https://www.westminster.gov.uk/housing/private-sector-housing/houses-multiple-occupation-hmo/licence-fees-and-guidance",
    },
    {
      label: "Westminster City Council: Selective licence fees and discounts",
      url: "https://www.westminster.gov.uk/housing/private-sector-housing/selective-property-licensing/licence-fees-and-discounts",
    },
    {
      label: "Westminster City Council: Civil financial penalty policy (May 2026)",
      url: "https://www.westminster.gov.uk/sites/default/files/media/documents/civil-financial-penalty-policy-may-2026.pdf",
    },
    {
      label: "Westminster City Council: Private sector housing enforcement policy",
      url: "https://www.westminster.gov.uk/housing/private-sector-housing/landlords/private-sector-housing-enforcement-policy",
    },
    { label: "Westminster City Council: Conservation areas", url: "https://www.westminster.gov.uk/conservation-areas" },
    {
      label: "Westminster City Council: Listed buildings",
      url: "https://www.westminster.gov.uk/planning-building-control-and-environmental-regulations/design-and-heritage/listed-buildings",
    },
    {
      label: "Westminster City Council: Article 4 directions",
      url: "https://www.westminster.gov.uk/planning-building-control-and-environmental-regulations/planning-applications/make-application/find-out-if-you-need-planning-permission/article-4-directions-westminster",
    },
    {
      label: "Westminster City Council: Smoke control area",
      url: "https://www.westminster.gov.uk/air-quality/clean-air-act/westminsters-smoke-control-area",
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
      "Flats dominate Westminster's housing: at the 2021 Census only about one household in ten lived in a house (7.2% terraced, 1.8% semi-detached, 1.1% detached). A further 16.1% lived in flats or bedsits in converted or shared houses. The council's licensing evidence names mansion blocks among the buildings where it finds HMOs.",
    landlordContext:
      "Private renting was Westminster's largest tenure at the 2021 Census. Council evidence puts rent at 75.4% of median earnings in 2022-23, against 46% across London.",
  },
};

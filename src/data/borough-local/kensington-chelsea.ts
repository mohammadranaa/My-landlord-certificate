import type { BoroughLocal } from "./types";

export const kensingtonChelsea: BoroughLocal = {
  slug: "kensington-chelsea",
  checkedOn: "2026-10-16",
  council: {
    name: "Royal Borough of Kensington and Chelsea",
    housingUrl: "https://www.rbkc.gov.uk/housing/living-healthy-homes/houses-multiple-occupation",
    licensingUrl:
      "https://www.rbkc.gov.uk/housing/information-homeowners-private-rented-tenants-and-landlords/houses-multiple-occupation-hmo/additional-hmo-licensing-scheme",
  },
  licensing: [
    {
      name: "Additional HMO Licensing Designation (No.1) 2023",
      type: "Additional HMO",
      area: "Whole borough",
      appliesTo:
        "Shared houses and flats with 3 or more people from 2 or more households that fall outside mandatory licensing, including HMO flats in purpose-built blocks. Section 257 converted blocks of flats are not covered",
      period: "1 June 2023 to 31 May 2028",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo: "HMOs with 5 or more people from 2 or more households who share facilities",
      period: "Run by RBKC since June 2006",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Households renting privately", value: "39.6% (London 30.0%)", source: "Census 2021" },
    { label: "Households in purpose-built flats", value: "56.7% (London 40.3%)", source: "Census 2021" },
    { label: "Homes built before 1900", value: "62.6%, the highest in London (London 20.9%)", source: "VOA 2025" },
    { label: "Conservation areas", value: "38, covering nearly three quarters of the borough", source: "RBKC" },
  ],
  overview: [
    "RBKC licenses HMOs only; it has no selective scheme. Mandatory licensing covers five or more people from two or more households who share facilities.",
    "The additional scheme, in force across the whole borough from 1 June 2023 to 31 May 2028, covers three or more people from two or more households outside mandatory licensing. That includes shares of any size in flats within purpose-built blocks of three or more flats.",
    "The council's October 2026 public register lists around 880 licensed HMOs. Applications are made online through RBKC's licensing portal, and a property can be let once a valid application has been submitted.",
    "Several licence conditions set out what to book. Condition 4 asks for a gas safety certificate under 12 months old, and condition 7 for an EICR with 100% live testing of circuits and accessories. Condition 11 requires a fire risk assessment where there are common parts, and condition 12 yearly fire alarm and emergency lighting test certificates emailed to the council.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Kensington and Chelsea: full live testing for licensed HMOs",
      body: [
        "For a licensed HMO, RBKC specifies how the inspection is done, not only that one exists. Condition 7 of its licence conditions says the EICR must cover 100% live testing of all circuits and accessories, including sockets and light fittings, to BS 7671. The electrician must be registered with a UKAS-accredited body such as NAPIT, NICEIC or ECA.",
        "The report must be under five years old, and RBKC can ask for an emailed copy within 14 days. Its April 2026 licensing policy lists the EICR among the documents without which an application may be treated as not duly made.",
        "That full test applies in many subdivided buildings: 23.5% of households here live in flats within converted houses (Census 2021). Book the EICR before starting the online licence application, because RBKC asks for the certificate to be ready at that point.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety in Kensington and Chelsea: converted houses and licence condition 4",
      body: [
        "In a licensed HMO here, the gas safety certificate has three readers. Condition 4 requires one obtained within the last 12 months. A copy must go to each occupier when they move in, and an emailed copy to RBKC within 14 days of a request.",
        "Flats in converted or shared houses are home to 23.5% of the borough's households, more than twice the London share of 11.1% (Census 2021). Where one converted house holds several let flats, check that each flat's certificate lists the appliances serving that flat.",
      ],
    },
    epc: {
      heading: "EPCs in Kensington and Chelsea: older homes, heritage limits and MEES checks",
      body: [
        "RBKC says most homes in the borough date from the 18th and 19th centuries and are more likely to lose heat. When it checks MEES compliance, the council can serve a notice asking for the EPC, the tenancy agreement and records of improvement works, so keep all three together.",
        "Upgrades often need permission, and stricter planning controls apply across the borough's conservation areas. RBKC also has over 3,800 listed buildings, where the whole building is protected and even secondary glazing needs listed building consent. For Grade II buildings, a council consent order already covers secondary glazing.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Kensington and Chelsea: common parts and block flat shares",
      body: [
        "RBKC's licence condition 11 requires the licence holder to take general fire precautions. Where an HMO has common parts, it also requires a fire risk assessment under the Regulatory Reform (Fire Safety) Order 2005.",
        "Purpose-built blocks bring many shares into scope. Of the borough's households, 56.7% live in purpose-built flats (Census 2021). A share of three or more people from two or more households in one of those blocks, whatever its size, is licensed under RBKC's additional scheme rather than mandatory licensing.",
        "How the council checks depends on the scheme. Every mandatory HMO is inspected before its licence is granted, while additional-scheme applications are risk-assessed and the higher-risk ones inspected first. All high-risk HMOs then get at least one compliance check during the licence, fire safety included.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Kensington and Chelsea: evidence for the appliance declaration",
      body: [
        "RBKC does not name PAT testing in its HMO licence conditions. Condition 6 instead makes the licence holder keep landlord-supplied electrical appliances safe and email the council a declaration of their safety within 14 days of a request.",
        "A dated PAT record for each appliance gives that declaration something to stand on. In a furnished flat share, list every item you supplied so the declaration matches what is in the property.",
      ],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Kensington and Chelsea",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical fault-finding in Kensington and Chelsea HMOs",
      body: [
        "RBKC's licence condition 7 asks for an EICR that live tests every circuit and accessory in a licensed HMO, not a sample. About 73% of the borough's properties were built before 1945, against 51% across London (VOA 2025). Tracing a known trip or fault before the inspection lets you fix it before it is coded on the report.",
      ],
    },
    "fuse-box-installation": {
      heading: "Consumer units in Kensington and Chelsea HMOs: the landlord's supply",
      body: [
        "RBKC's licence condition 12 requires the electricity supply to fire detection and emergency lighting in an HMO to be in the landlord's name. When a consumer unit is replaced, keep those circuits on the landlord's supply rather than a tenant's meter.",
      ],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Kensington and Chelsea: a yearly certificate to the council",
      body: [
        "Condition 12 of RBKC's HMO licence requires an adequate emergency lighting system. Its inspection and test certificate must be emailed to the council every year, starting 12 months after the licence is granted. That makes the test date a fixed deadline, not a request-only check.",
        "At the application stage, RBKC's April 2026 policy asks for an emergency lighting BS test report only for larger HMOs with complex layouts. Smaller licensed HMOs with a system still move onto the yearly cycle once the licence is granted.",
      ],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Kensington and Chelsea",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler replacement in Kensington and Chelsea: vents and flues on listed buildings",
      body: [
        "With over 3,800 listed buildings in the borough, a boiler swap that needs a new flue or vent can become a consent question. RBKC names vents among the works that need listed building consent, and works carried out without it are a criminal offence. Fix the flue route before booking the installer.",
        "Any replacement for a solid-fuel boiler or stove must also suit the borough-wide smoke control order of 2004/05, under which only authorised fuels, or exempt appliances, may be used.",
      ],
    },
    "fire-safety-certificate": {
      heading: "Smoke alarms and fire notices in Kensington and Chelsea HMOs",
      body: [
        "Licence condition 12 sets the floor for every licensed HMO in the borough: at least one smoke alarm on each storey with living accommodation, and fire procedure notices on display.",
        "Beyond the conditions, RBKC has adopted its own HMO standards under section 65 of the Housing Act 2004. A licence can be refused or given extra conditions if a property falls short of them.",
      ],
    },
    "fire-alarm-installation": {
      heading: "Fire alarm systems in Kensington and Chelsea: from application to annual test",
      body: [
        "RBKC treats the alarm test report as a core licensing paper. Its April 2026 policy lists the BS test report for any integrated fire alarm system among the documents without which an HMO application may be treated as not duly made.",
        "After grant, the automatic system joins the yearly certificate cycle under condition 12.",
        "Alarm boxes are one of the works RBKC lists as needing listed building consent. On a listed building, settle where any external box or sounder goes as part of the system design.",
      ],
    },
    "fire-door-certificate": {
      heading: "Fire doors in Kensington and Chelsea HMOs: what the council's modelling predicted",
      body: [
        "When RBKC made its case for borough-wide additional licensing, council modelling from 2020 estimated 8,244 HMOs in the borough and predicted that many had inadequate fire safety precautions.",
        "A fire door inspection gives a dated record of each door's condition to set beside the fire risk assessment that licence condition 11 requires where an HMO has common parts.",
      ],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguishers and blankets in Kensington and Chelsea HMOs",
      body: [
        "RBKC writes fire-fighting equipment into licence condition 12. The licence holder must provide suitable equipment, including fire extinguishers and fire blankets, and keep it maintained.",
        "Have the equipment serviced and keep the record with the fire alarm and emergency lighting certificates that RBKC expects each year. That way all the condition 12 paperwork sits in one place.",
      ],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Kensington and Chelsea: launderettes and Class E premises",
      body: [
        "RBKC's Article 4 directions single out seven named launderettes. Two directions cover the same seven. One, in force since 24 July 2017, removes permitted development rights to turn them into homes; the other, in force since 7 September 2020, does the same for offices.",
        "A separate direction removes those rights for Class E premises becoming homes in parts of the borough. For all these premises, a change of use needs planning permission first, so commission the commercial EPC for the current use rather than a planned conversion.",
      ],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Kensington and Chelsea",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Kensington and Chelsea",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "Can I let an HMO in Kensington and Chelsea while the licence is being decided?",
        answer:
          "Yes, once a valid application has been submitted through RBKC's online licensing portal. The council aims to decide a valid application within about three months. Licences are usually issued for five years, but RBKC can issue a shorter one where conditions or management need correcting.",
      },
    ],
    "gas-safety-certificate": [
      {
        question: "Do I need a carbon monoxide alarm by a bathroom boiler in an RBKC HMO?",
        answer:
          "Yes: licence condition 8 requires a carbon monoxide alarm in any room used as living accommodation that contains a fixed combustion appliance, other than a gas cooker. RBKC counts bathrooms and WCs as living accommodation, and it can ask for a declaration of each alarm's condition and position within 14 days.",
      },
    ],
    epc: [
      {
        question: "Can I fit double glazing in a Kensington and Chelsea conservation area without applying?",
        answer:
          "Yes for replacement slimline double glazing: RBKC's Local Development Order grants planning permission for it across the borough, provided the new windows match the existing in material, style and pattern. Listed buildings are excluded; for them, Local Listed Building Consent Orders allow some works, including window upgrades and solar PV, without an individual application, subject to their conditions. Other works that affect a listed building's character need listed building consent.",
      },
    ],
    "fire-risk-assessment": [
      {
        question: "What does RBKC ask for before I start an HMO licence application?",
        answer:
          "A floor plan with all room sizes, amenity details, details of the structure and safety equipment, the interested parties and the licence holder's date of birth. It also wants current certificates: the EICR, the gas safety certificate, the fire alarm system test certificate and the emergency lighting test certificate.",
      },
    ],
    "pat-testing": [
      {
        question: "Does a joint tenancy take a flat share out of RBKC licensing?",
        answer:
          "No. RBKC counts unrelated sharers as separate households whatever the tenancy arrangement, so a single joint tenancy does not exempt the property. Three or more sharers from two or more households sharing facilities such as a kitchen or bathroom fall under the borough-wide additional scheme, running until 31 May 2028.",
      },
    ],
    "emergency-lights-certificate": [
      {
        question: "Where do I send certificates to RBKC?",
        answer:
          "RBKC's licence conditions give HMOLicensing@rbkc.gov.uk as the address for certificates sent on request. For questions about a licence, the council's HMO licensing team is on 020 7361 3001 or 020 7361 3002. Its office is at Kensington Town Hall, Hornton Street, W8 7NX.",
      },
    ],
    "fire-alarm-installation": [
      {
        question: "How can I check whether a Kensington and Chelsea property is already licensed?",
        answer:
          "RBKC publishes a public HMO register, both as a searchable database and as a PDF. Applications still being processed are not shown, so a missing address may simply be awaiting a decision. Search the database before buying or taking on management of a shared property.",
      },
    ],
    "fire-safety-certificate": [
      {
        question: "Which of RBKC's local HMO standards applies to my property?",
        answer:
          "RBKC publishes three: one for bedsits and studios, one for flats in multiple occupation and shared houses, and one for hostels, vocational, student and staff accommodation. Read the one that matches your property type. Bedrooms must also meet the statutory minimums of 6.51 square metres for a single and 10.21 for a double.",
      },
    ],
    "fire-door-certificate": [
      {
        question: "How long does an RBKC HMO licence last?",
        answer:
          "Usually five years. Where conditions or management need putting right, RBKC can issue a shorter licence, and its policy gives one year as an example. A shorter licence costs the same fee, so fixing fire safety issues before applying can avoid an early renewal.",
      },
    ],
  },
  sources: [
    {
      label: "RBKC: Houses in multiple occupation (HMO)",
      url: "https://www.rbkc.gov.uk/housing/living-healthy-homes/houses-multiple-occupation",
    },
    {
      label: "RBKC: Additional HMO licensing scheme",
      url: "https://www.rbkc.gov.uk/housing/information-homeowners-private-rented-tenants-and-landlords/houses-multiple-occupation-hmo/additional-hmo-licensing-scheme",
    },
    {
      label: "RBKC: Designation of an area for additional licensing of HMOs",
      url: "https://www.rbkc.gov.uk/media/document/designation-of-an-area-for-additional-licensing-of-hmos",
    },
    {
      label: "RBKC: Apply for an HMO licence",
      url: "https://www.rbkc.gov.uk/housing/information-homeowners-private-rented-tenants-and-landlords/houses-multiple-occupation-hmo/apply-hmo-licence",
    },
    {
      label: "RBKC: HMO licensing FAQs",
      url: "https://www.rbkc.gov.uk/housing/information-homeowners-private-rented-tenants-and-landlords/houses-multiple-occupation-hmo/hmo-licensing-faqs",
    },
    {
      label: "RBKC: HMO Licensing Policy (April 2026)",
      url: "https://www.rbkc.gov.uk/sites/default/files/media/documents/HMO%20Licensing%20Policy%20April%202026.pdf",
    },
    {
      label: "RBKC: HMO standards",
      url: "https://www.rbkc.gov.uk/housing/information-homeowners-private-rented-tenants-and-landlords/houses-multiple-occupation-hmo/hmo-standards",
    },
    {
      label: "RBKC: Public HMO register",
      url: "https://www.rbkc.gov.uk/housing/information-homeowners-private-rented-tenants-and-landlords/houses-multiple-occupation-hmo/public-hmo-register",
    },
    {
      label: "RBKC: Minimum energy efficiency standards and energy performance",
      url: "https://www.rbkc.gov.uk/housing/private-rented-housing/minimum-energy-efficiency-standards-and-energy-performance",
    },
    {
      label: "RBKC: Conservation areas",
      url: "https://www.rbkc.gov.uk/planning-and-building-control/heritage-and-conservation/conservation-areas",
    },
    {
      label: "RBKC: Listed buildings explained",
      url: "https://www.rbkc.gov.uk/planning-and-building-control/heritage-and-conservation/listed-buildings-explained",
    },
    {
      label: "RBKC: Sustainable retrofitting",
      url: "https://www.rbkc.gov.uk/planning-and-building-control/heritage-and-conservation/sustainable-retrofitting",
    },
    {
      label: "RBKC: Article 4 directions",
      url: "https://www.rbkc.gov.uk/planning-and-building-control/heritage-and-conservation/article-4-directions",
    },
    { label: "The London Gazette: RBKC Smoke Control Order notice (2005)", url: "https://thegazette.co.uk/notice/L-57550-123" },
    { label: "ONS Census 2021: TS054 Tenure (Nomis)", url: "https://www.nomisweb.co.uk/datasets/c2021ts054" },
    { label: "ONS Census 2021: TS044 Accommodation type (Nomis)", url: "https://www.nomisweb.co.uk/datasets/c2021ts044" },
    {
      label: "VOA: Council Tax Stock of Properties 2025",
      url: "https://www.gov.uk/government/statistics/council-tax-stock-of-properties-2025",
    },
  ],
  contextOverride: {
    propertyContext:
      "Kensington and Chelsea has the highest share of pre-1900 property in London: 62.6% of homes, against 20.9% across the capital (VOA 2025). Flats dominate: about 80% of households live in purpose-built or converted flats, while terraced houses account for 12.8% (Census 2021). Nearly three quarters of the borough sits within 38 conservation areas.",
    landlordContext:
      "Private renting is the borough's largest tenure: 39.6% of households rent privately, more than the 31.7% who own, against a London private-rented share of 30.0% (Census 2021).",
  },
};

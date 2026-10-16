import type { BoroughLocal } from "./types";

export const lambeth: BoroughLocal = {
  slug: "lambeth",
  checkedOn: "2026-10-16",
  council: {
    name: "Lambeth Council",
    housingUrl: "https://www.lambeth.gov.uk/housing/landlords-licensing",
    licensingUrl: "https://www.lambeth.gov.uk/housing/landlords-licensing/selective-licensing-scheme",
  },
  licensing: [
    {
      name: "London Borough of Lambeth Designation of an Area for Additional Licensing",
      type: "Additional HMO",
      area: "Whole borough",
      appliesTo:
        "Privately rented HMOs of 3 or more people from 2 or more households that are not mandatory HMOs, including HMO flats in purpose-built blocks of more than two flats and some section 257 converted buildings",
      period: "9 December 2021 to 8 December 2026",
      status: "In force",
    },
    {
      name: "London Borough of Lambeth Designations 1 of an Area for Selective Licensing 2024",
      type: "Selective",
      area: "Knights Hill, Streatham Common & Vale, Streatham Hill East and Streatham St Leonard's wards",
      appliesTo:
        "Privately rented homes let to a single household or to no more than two unrelated sharers. HMOs are licensed under the HMO schemes instead",
      period: "2 September 2024 to 1 September 2029",
      status: "In force",
    },
    {
      name: "London Borough of Lambeth Phase 2 Designations for Areas for Selective Licensing 2025",
      type: "Selective",
      area:
        "19 wards: Brixton Acre Lane, Brixton North, Brixton Rush Common, Brixton Windrush, Clapham Common and Abbeville, Clapham East, Clapham Park, Clapham Town, Gipsy Hill, Herne Hill and Loughborough Junction, Kennington, Myatt's Field, Oval, St Martin's, Stockwell East, Stockwell West and Larkhall, Streatham Hill West and Thornton, Streatham Wells and West Dulwich",
      appliesTo:
        "Privately rented homes let to a single household or to no more than two unrelated sharers. HMOs are licensed under the HMO schemes instead",
      period: "From 1 September 2025",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo: "HMOs of 5 or more people from 2 or more households who share facilities",
      period: "Ongoing, no end date",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Households renting privately", value: "31.4% (London 30.0%)", source: "Census 2021" },
    {
      label: "Households renting from the council or a housing association",
      value: "33.6% (London 23.1%)",
      source: "Census 2021",
    },
    {
      label: "Households in flats in converted or shared houses",
      value: "20.6% (London 11.1%)",
      source: "Census 2021",
    },
    { label: "Conservation areas", value: "62, covering about 30% of the borough", source: "Lambeth Council" },
  ],
  overview: [
    "As of October 2026, Lambeth licenses private lets in two layers. Selective licensing covers homes let to one household or to no more than two sharers in 23 of the borough's 25 wards, everywhere except Vauxhall and Waterloo & South Bank. Shared homes need an HMO licence across the whole borough.",
    "The additional HMO designation, which brings in shared homes of three or more people that fall outside mandatory licensing, runs until 8 December 2026. Check the council's website for what applies after that date.",
    "Every application goes through the council's online licensing portal with an EICR and a gas safety certificate (the HMO list adds 'if the property has gas'). In Streatham Common & Vale and Streatham St Leonard's wards, turning a family home into a small HMO has needed planning permission since 11 August 2025.",
    "Council-commissioned modelling from 2020 estimated about 5,000 HMOs in the borough, roughly a tenth of its private rented homes.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Lambeth: selective lets need proof the repairs are done",
      body: [
        "A Lambeth selective licence application needs proof of repairs as well as the EICR. Where the report records any C1 or C2 item, the council asks for the remedial work to be done and for a certificate showing it, both with the application. That reaches single-household and two-sharer lets in 23 of the borough's 25 wards.",
        "HMO applications are worded differently. The council's HMO list asks for the latest EICR but does not mention a remedial certificate, and an application sent without the report may be rejected with the fee kept.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety in Lambeth: how the two application lists word it",
      body: [
        "When Lambeth made its case for borough-wide HMO licensing in 2021, gas leaks were among the cases its private sector enforcement team said it had dealt with.",
        "The council's two application lists treat the gas document differently. The HMO list asks for the latest gas safety certificate if the property has gas, while the selective list names a gas safety certificate with no such qualifier. For an all-electric flat in a selective ward, ask the licensing team what it will accept in place of one before you submit.",
      ],
    },
    epc: {
      heading: "EPCs in Lambeth: on the selective form only for the fee discount",
      body: [
        "Lambeth's selective licence form lists an EPC only for landlords claiming the energy-efficiency discount on the fee. Where you claim it, you must be able to show the rating during the application or when the council asks.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Lambeth: works approved after London Fire Brigade consultation",
      body: [
        "Lambeth's HMO standards say HMOs are subject to a fire safety risk assessment and must be inspected, with the council approving the works after it consults the London Fire Brigade. The council also consults the Fire and Rescue Authority on each proposed HMO licence before issuing it, so any fire safety works the licence requires follow that consultation.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Lambeth",
      body: [],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Lambeth",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical fault finding in Lambeth",
      body: [],
    },
    "fuse-box-installation": {
      heading: "Consumer unit replacement in Lambeth",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Lambeth",
      body: [],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Lambeth",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler installation in Lambeth",
      body: [],
    },
    "fire-safety-certificate": {
      heading: "Fire safety certificates in Lambeth",
      body: [],
    },
    "fire-alarm-installation": {
      heading: "Fire alarm installation in Lambeth",
      body: [],
    },
    "fire-door-certificate": {
      heading: "Fire doors on a Lambeth HMO floor plan",
      body: [
        "Lambeth asks for floor plans with every HMO application, and they must show where the fire precautions are, fire doors included, along with fire detectors, emergency lighting and fire blankets. The plans must be to scale or have room dimensions marked.",
        "On the plan, mark only genuine fire doors as fire doors, and repair or replace any that fall short before you submit.",
      ],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguisher testing in Lambeth",
      body: [],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Lambeth",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Lambeth",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Lambeth",
      body: [],
    },
  },
  serviceFaqs: {
    "fire-risk-assessment": [
      {
        question: "Can Lambeth check a property before I let it as an HMO?",
        answer:
          "Yes, for a fee. The council offers advisory visits for properties planned for HMO use. Each covers an initial inspection, consultation with the London Fire Brigade, and two further site visits to check that the works comply with the Housing Act and the council's standards.",
      },
    ],
  },
  sources: [
    {
      label: "Lambeth Council: Landlords and licensing",
      url: "https://www.lambeth.gov.uk/housing/landlords-licensing",
    },
    {
      label: "Lambeth Council: Selective Licensing Scheme",
      url: "https://www.lambeth.gov.uk/housing/landlords-licensing/selective-licensing-scheme",
    },
    {
      label: "Lambeth Council: Additional HMO licensing",
      url: "https://www.lambeth.gov.uk/housing/landlords-licensing/houses-multiple-occupation-hmos/additional-hmo-licensing",
    },
    {
      label: "Lambeth Council: HMOs that require a licence",
      url: "https://www.lambeth.gov.uk/housing/landlords-licensing/houses-multiple-occupation-hmos/hmos-require-licence",
    },
    {
      label: "Lambeth Council: Renew or apply for an HMO licence",
      url: "https://www.lambeth.gov.uk/housing/landlords-licensing/houses-multiple-occupation-hmos/renew-or-apply-hmo",
    },
    {
      label: "Lambeth Council: Licence and other service fees",
      url: "https://www.lambeth.gov.uk/housing/landlords-licensing/houses-multiple-occupation-hmos/licence-other-service-fees",
    },
    {
      label: "Lambeth Council: HMO standards",
      url: "https://www.lambeth.gov.uk/housing/landlords-licensing/hmo-standards",
    },
    {
      label: "Lambeth Council: Property standards, enforcement action and costs",
      url: "https://www.lambeth.gov.uk/housing/landlords-and-licensing/property-standards-enforcement-action-and-costs",
    },
    {
      label: "Lambeth Council: HMO licensing and planning permission",
      url: "https://www.lambeth.gov.uk/housing/landlords-licensing/houses-multiple-occupation-hmos/hmo-licensing-planning-permission",
    },
    {
      label: "Lambeth Council: Additional licensing designation notice (2021)",
      url: "https://www.lambeth.gov.uk/sites/default/files/2021-09/public-notice-additional-hmo-licensing.pdf",
    },
    {
      label: "Lambeth Council: Selective licensing designation notice, 4 wards (2024)",
      url: "https://www.lambeth.gov.uk/sites/default/files/2024-09/Designation%20of%204%20Wards%20Public%20Notice%20Final.pdf",
    },
    {
      label: "Lambeth Council: Licensing consultation document (2021)",
      url: "https://www.lambeth.gov.uk/sites/default/files/2021-01/LBL%20Licensing%20Consultation%20Document.pdf",
    },
    {
      label: "Lambeth Council: Article 4 Direction on small HMOs in two Streatham wards",
      url: "https://www.lambeth.gov.uk/planning-building-control/planning-policy-guidance/article-4-direction-withdrawing-class-lb-permitted-development-right-change-use-dwellinghouses-use",
    },
    {
      label: "Lambeth Council: Article 4 directions",
      url: "https://www.lambeth.gov.uk/planning-building-control/planning-policy-guidance/article-4-directions",
    },
    {
      label: "Lambeth Council: Conservation area profiles",
      url: "https://www.lambeth.gov.uk/planning-and-building-control/conservation-and-listed-buildings/conservation-area-profiles",
    },
    {
      label: "Lambeth Council: Statutory listed buildings",
      url: "https://www.lambeth.gov.uk/planning-and-building-control/conservation-and-listed-buildings/statutory-listed-buildings",
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
      "Lambeth is largely a borough of flats: at the 2021 Census, 51.6% of households lived in purpose-built flats, against 40.3% across London. Houses are a minority, with 15.0% of households in terraced houses (London 21.3%), 7.8% in semi-detached and 2.0% in detached homes. A further 1.1% lived in commercial buildings such as flats over shops.",
    landlordContext:
      "More Lambeth households rent from the council or a housing association than from a private landlord, and most private lets in the borough now need a council licence.",
  },
};

import type { BoroughLocal } from "./types";

export const walthamForest: BoroughLocal = {
  slug: "waltham-forest",
  checkedOn: "2026-10-16",
  council: {
    name: "Waltham Forest Council",
    housingUrl:
      "https://www.walthamforest.gov.uk/housing/private-rented-property-licensing-prpl/meet-your-legal-responsibilities-landlord/check-property-standards-you-must-meet",
    licensingUrl: "https://www.walthamforest.gov.uk/housing/private-rented-property-licensing-prpl",
  },
  licensing: [
    {
      name: "London Borough of Waltham Forest Designation for an Area for Selective Licensing 2025",
      type: "Selective",
      area: "20 of the 22 wards (all except Hatch Lane & Highams Park North, and Endlebury)",
      appliesTo:
        "Privately rented homes let to one person, a single family or two unrelated sharers (HMOs, housing association lets and other statutory exemptions excluded)",
      period: "1 May 2025 to 30 April 2030",
      status: "In force",
    },
    {
      name: "London Borough of Waltham Forest Designation for an Area for Additional Licensing",
      type: "Additional HMO",
      area: "Whole borough",
      appliesTo:
        "HMOs of 3 or more people in 2 or more households who share one or more basic amenities, including shared flats in purpose-built blocks of more than two flats (section 257 converted blocks are not covered)",
      period: "1 April 2025 to 31 March 2030",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo: "HMOs of 5 or more people in 2 or more households sharing amenities such as a kitchen or bathroom",
      period: "National scheme, no end date",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Homes built 1945 to 1982", value: "About 14% (London 22.5%)", source: "VOA 2025" },
    { label: "Homes built before 1919", value: "45.0% (London 29.1%)", source: "VOA 2025" },
    { label: "Households in purpose-built flats", value: "30.7% (London 40.3%)", source: "Census 2021" },
  ],
  overview: [
    "Waltham Forest has licensed private rentals since 2015, and its current schemes started in April 2025 (additional HMO) and May 2025 (selective). Within the selective area, every privately rented home needs a licence of some type unless it is exempt: a selective licence for a single household or two sharers, or an HMO licence for a share. Only two wards sit outside selective licensing (Hatch Lane & Highams Park North, and Endlebury), and HMOs there still need a licence.",
    "Since September 2014, a borough-wide Article 4 direction has meant that turning a family house into a small HMO needs planning permission anywhere in Waltham Forest.",
    "Applications, fees and the public register sit under the council's Private rented property licensing (PRPL) pages. The Private Sector Housing and Licensing Team answers at propertylicensing@walthamforest.gov.uk.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Waltham Forest: what each licence asks for",
      body: [
        "Waltham Forest's two licence types ask for different electrical evidence. HMO licence condition 17 names an EICR confirming that the installation is \"satisfactory\". Selective condition 9 instead asks a single let to keep its installation in proper working order, backed by a declaration of its safety.",
        "In Hatch Lane & Highams Park North and Endlebury, outside the selective scheme, a family let carries neither licence condition, though the national EICR duty still applies. A licensed share there still carries condition 17.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety in Waltham Forest: a condition on single-family lets too",
      body: [
        "Waltham Forest's gas condition reaches single-family lets, not only shared houses. Selective condition 6, matched by HMO condition 7, covers every licensed home with gas. The holder must produce a current gas safety certificate on each anniversary of the licence, without a demand.",
        "The condition therefore applies across 20 of the 22 wards. In Hatch Lane & Highams Park North and Endlebury, only licensed shares carry it.",
      ],
    },
    epc: {
      heading: "EPCs in Waltham Forest",
      body: [],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Waltham Forest HMOs: acting on the findings",
      body: [
        "Under Waltham Forest's HMO licence condition 18, the holder must have a fire risk assessment carried out under the Regulatory Reform (Fire Safety) Order 2005 and act on what it finds. The holder must also keep the fire alarms and fire-fighting equipment in working order.",
        "The council's HMO standards are aimed mainly at homes where three or more people in two or more households share an amenity. Because the additional scheme licenses shares of that size across the whole borough, small shared houses are judged against the same standards as larger HMOs.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Waltham Forest: one 30-month rule for both licence types",
      body: [
        "In Waltham Forest, the 30-month appliance test report is a condition of both licence types. Selective condition 7 covers single lets in 20 of the 22 wards, and HMO condition 8 covers licensed shares across the whole borough. The report covers every appliance the landlord provides, so the rule reaches most private lets in the borough, not only shared houses.",
        "A 30-month interval does not line up with an annual gas check or a five-year licence term, so each licence spans at least two test reports.",
      ],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Waltham Forest",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical checks in Waltham Forest shared kitchens",
      body: [
        "Waltham Forest's HMO standards set a socket count for each shared kitchen: four above the worktop for up to five sharers, plus one for each dedicated appliance. A fault-finding visit to a shared kitchen is a chance to count the sockets against that standard as well.",
      ],
    },
    "fuse-box-installation": {
      heading: "Consumer unit replacement in Waltham Forest",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Waltham Forest",
      body: [],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Waltham Forest",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler replacement in Waltham Forest HMOs: no bar heaters in bathrooms",
      body: [
        "Waltham Forest's HMO standards rule out electric bar heaters in bathrooms and require every letting to have a fixed heating system, with thermostatic valves on the radiators. When a shared house gets a new boiler, plan the bathroom radiator and the valves in each letting as part of the same job.",
      ],
    },
    "fire-safety-certificate": {
      heading: "Fire safety certificates in Waltham Forest",
      body: [],
    },
    "fire-alarm-installation": {
      heading: "Smoke alarms in Waltham Forest: battery or mains depends on the building",
      body: [
        "Waltham Forest's selective conditions set the smoke alarm type by building: battery alarms may be used in houses and in purpose-built flats not above commercial premises. Other homes, such as flats in converted buildings, should have hard-wired mains alarms with battery back-up. Either way, there must be one on every storey with living accommodation, and bathrooms and WCs count.",
        "In an HMO, the matching condition requires mains-wired alarms with battery back-up in every case. If a converted-building flat still relies on battery alarms, plan the wiring now rather than waiting for a council visit.",
      ],
    },
    "fire-door-certificate": {
      heading: "Fire doors in Waltham Forest",
      body: [],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguisher servicing in Waltham Forest",
      body: [],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Waltham Forest",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Waltham Forest",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Waltham Forest",
      body: [],
    },
  },
  serviceFaqs: {
    "gas-safety-certificate": [
      {
        question: "I let several flats in one Waltham Forest building. Can they share one licence?",
        answer:
          "Possibly. Waltham Forest has a multi-dwelling licence for owners of several dwellings in one building, under a council policy dated May 2026. You register interest by emailing the licensing team at propertylicensing@walthamforest.gov.uk with the addresses of the flats. The council's multi-dwelling licence page sets out who may apply.",
      },
    ],
  },
  sources: [
    {
      label: "Waltham Forest Council: Private rented property licensing (PRPL)",
      url: "https://www.walthamforest.gov.uk/housing/private-rented-property-licensing-prpl",
    },
    {
      label: "Waltham Forest Council: Check if you need a selective licence",
      url: "https://www.walthamforest.gov.uk/housing/private-rented-property-licensing-prpl/choose-type-property-licence-you-need/check-if-you-need-selective-licence-your-property",
    },
    {
      label: "Waltham Forest Council: Check if you need an additional HMO licence",
      url: "https://www.walthamforest.gov.uk/housing/private-rented-property-licensing-prpl/choose-type-property-licence-you-need/check-if-you-need-additional-hmo-licence",
    },
    {
      label: "Waltham Forest Council: Check if you need a mandatory HMO licence",
      url: "https://www.walthamforest.gov.uk/housing/private-rented-property-licensing-prpl/choose-type-property-licence-you-need/check-if-you-need-mandatory-hmo-licence",
    },
    {
      label: "Waltham Forest Council: Check if your building needs a multi-dwelling licence",
      url: "https://www.walthamforest.gov.uk/housing/private-rented-property-licensing-prpl/choose-type-property-licence-you-need/check-if-your-building-needs-multi-dwelling-licence",
    },
    {
      label: "Waltham Forest Council: Selective licensing public notice 2025 designation",
      url: "https://www.walthamforest.gov.uk/sites/default/files/2025-05/Selective%20Licensing%20Public%20Notice%202025%20Designation%20v2.pdf",
    },
    {
      label: "Waltham Forest Council: Additional licensing scheme designation",
      url: "https://walthamforest.gov.uk/sites/default/files/2024-11/Additional%20Licensing%20Scheme%20Designation.pdf",
    },
    {
      label: "Waltham Forest Council: Selective licence conditions (December 2023)",
      url: "https://www.walthamforest.gov.uk/sites/default/files/2025-05/Selective%20Licensing%20-%20%20Licence%20Conditions%20-%20%20December%202023%20final.pdf",
    },
    {
      label: "Waltham Forest Council: HMO licence conditions (December 2023)",
      url: "https://www.walthamforest.gov.uk/sites/default/files/2023-12/Appendix%203%20HMO%20Licence%20Scheme%20Conditions%20December%202023.pdf",
    },
    {
      label: "Waltham Forest Council: Standards for Houses in Multiple Occupation",
      url: "https://www.walthamforest.gov.uk/sites/default/files/2021-10/Waltham%20Forest%20HMO%20information.pdf",
    },
    {
      label: "Waltham Forest Council: Licensing consultation report (May 2024)",
      url: "https://www.walthamforest.gov.uk/sites/default/files/2024-07/Licensing%20Consultation%20Report%20-%20Final%20030524.pdf",
    },
    {
      label: "Waltham Forest Council: Local Article 4 directions",
      url: "https://www.walthamforest.gov.uk/planning-and-building-control/about-planning-permission/local-article-4-directions",
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
      "Terraced houses are Waltham Forest's largest housing type, home to 34.7% of households against 21.3% across London. A further 16.4% live in semi-detached and 4.1% in detached houses, so houses hold about 55% of households in all (Census 2021). Council tax records date 64.0% of properties to before 1945, and 24.2% to before 1900 (VOA 2025).",
    landlordContext:
      "At the 2021 Census, 27.8% of Waltham Forest households rented privately, below London's 30.0%, while 48.9% owned their home and 21.5% rented from a social landlord.",
  },
};

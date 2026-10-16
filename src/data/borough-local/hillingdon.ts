import type { BoroughLocal } from "./types";

export const hillingdon: BoroughLocal = {
  slug: "hillingdon",
  checkedOn: "2026-10-16",
  council: {
    name: "Hillingdon Council",
    housingUrl: "https://pre.hillingdon.gov.uk/landlords",
    licensingUrl: "https://www.hillingdon.gov.uk/hmo",
  },
  licensing: [
    {
      name: "London Borough of Hillingdon Designation of an Area for Additional Licensing of Houses in Multiple Occupation 2026",
      type: "Additional HMO",
      area: "Whole borough",
      appliesTo:
        "HMOs of 3 or more people forming 2 or more households that do not need a mandatory licence; section 257 converted blocks of flats are excluded",
      period: "24 August 2026 to 23 August 2031",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo: "HMOs of 5 or more unrelated people forming 2 or more households",
      period: "National scheme, no end date",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Homes built before 1919", value: "4.4% (London 29.1%)", source: "VOA 2025" },
    { label: "Homes built 1945 to 1972", value: "25.3% (London 16.9%)", source: "VOA 2025" },
    { label: "Households in purpose-built flats", value: "26.2% (London 40.3%)", source: "Census 2021" },
  ],
  overview: [
    "Since 24 August 2026, most shared houses in Hillingdon let to three or more people from two or more households have needed a licence. The additional HMO scheme covers the whole borough until 23 August 2031, alongside mandatory licensing for five or more people. As of October 2026, the council's licensing pages describe these two HMO schemes only, with no selective licensing of single-household lets.",
    "Before the scheme, the council's 2025 stock model put the borough's HMOs at 2,537, of which only 666 were licensed, and found them in all 21 wards. Private renting is concentrated in the south and centre: Uxbridge ward has the most privately rented homes (2,231), then Heathrow Villages (2,197), with Harefield Village the fewest (283).",
    "Planning control on small HMOs has widened from two wards to the whole borough. Hillingdon's 2013 Article 4 direction covered only the former Brunel and Uxbridge South wards, around Brunel University. The borough-wide direction that replaced it in December 2025 means turning a family home into a small HMO now needs planning permission anywhere in Hillingdon.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Hillingdon: additional licensing now reaches Northwood as well as Uxbridge",
      body: [
        "Before Hillingdon's additional scheme began, licensed HMOs were unevenly spread: Uxbridge ward had the most, 98, and Northwood had none.",
        "After the council processes an application, which it aims to do within 12 weeks, a housing officer arranges an inspection.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety in Hillingdon HMOs: a fresh certificate after a council warning",
      body: [
        "Hillingdon's additional licence conditions set a deadline the annual gas check does not. If the council notifies the licence holder of a gas safety risk, a new Gas Safe certificate must reach the council within 14 days. The certificate already on file does not answer that notice.",
      ],
    },
    epc: {
      heading: "EPCs in Hillingdon: what licensing inspections will pick up",
      body: [
        "Hillingdon Council says its licensing inspections will also identify tenants on low incomes living in homes rated E, F or G, so it can refer them to support and advise their landlords. Its licensing evidence counts 2,667 privately rented homes with EPC records in those bands, 217 of them rated F or G, though it notes some may be exempt.",
        "Where a home falls below the legal minimum and the landlord ignores the council's advice and support, the council says its Private Sector Housing team will work to bring it into compliance. An F or G rating without a valid exemption is therefore the one it can act on.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Hillingdon",
      body: [],
    },
    "pat-testing": {
      heading: "PAT testing in Hillingdon",
      body: [],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Hillingdon",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical fault finding in Hillingdon",
      body: [],
    },
    "fuse-box-installation": {
      heading: "Consumer unit upgrades in Hillingdon",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Hillingdon HMOs: the three-storey test",
      body: [
        "Hillingdon's HMO licence application asks for an emergency lighting report only where the property has three storeys. A loft conversion that adds a third storey to a two-storey house therefore brings the report into the next application or renewal.",
      ],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Hillingdon",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler replacement in Hillingdon HMOs: heat to 21C in every habitable room",
      body: [
        "Condition 11 of Hillingdon's additional HMO licence asks for a fixed heating system with adjustable controls, able to keep habitable rooms at 21C or more.",
        "On 2023 government figures in the council's licensing evidence, Hillingdon's overall fuel poverty rate is 9.1%. Five wards are above the national rate of 11.4%: Hayes Town (13.6%), Belmore (13.2%), Pinkwell (12.7%), Wood End (12.2%) and Yiewsley (12.1%).",
      ],
    },
    "fire-safety-certificate": {
      heading: "Fire safety certificates in Hillingdon",
      body: [],
    },
    "fire-alarm-installation": {
      heading: "Fire alarm installation in Hillingdon",
      body: [],
    },
    "fire-door-certificate": {
      heading: "Fire door inspections in Hillingdon",
      body: [],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguisher testing in Hillingdon",
      body: [],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Hillingdon",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Hillingdon",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Hillingdon",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "Hillingdon's HMO obligations page says only HMOs of five or more need a licence. Is that still right?",
        answer:
          "No, that page is out of date. Since 24 August 2026, the additional scheme has covered HMOs of three or more people from two or more households across the borough, so a three- or four-person share needs a licence too. The same page limits small-HMO planning permission to Uxbridge South and Brunel wards, but the Article 4 direction has applied borough-wide since December 2025.",
      },
      {
        question: "How has Hillingdon decided small-HMO planning applications since the Article 4 direction?",
        answer:
          "Between December 2025 and April 2026, the council received 22 applications to turn a family home into a small HMO and decided 17: 12 were refused, 4 approved and 1 withdrawn.",
      },
    ],
    "fire-risk-assessment": [
      {
        question: "Does Hillingdon's additional scheme license a house converted into self-contained flats?",
        answer:
          "Not as a whole building. The 2026 designation excludes section 257 HMOs, the converted blocks of self-contained flats. A flat inside such a building that is itself shared by three or more people from two or more households can still fall within the scheme.",
      },
    ],
    "pat-testing": [
      {
        question: "My four-person house share was not licensed by 23 August 2026. What now?",
        answer:
          "Apply online now, one application per property, because the deadline has passed. Hillingdon opened applications on 20 May 2026 and set 23 August 2026 as the deadline for applications and full compliance. From 24 August, the council says HMOs that have not applied or do not comply may be subject to enforcement action.",
      },
    ],
  },
  sources: [
    {
      label: "Hillingdon Council: Apply for an HMO licence",
      url: "https://pre.hillingdon.gov.uk/hmo/apply-hmo-licence/4",
    },
    { label: "Hillingdon Council: Houses in Multiple Occupation (HMO)", url: "https://pre.hillingdon.gov.uk/hmo" },
    { label: "Hillingdon Council: Apply for an HMO licence", url: "https://pre.hillingdon.gov.uk/hmo/apply-hmo-licence" },
    {
      label: "Hillingdon Council: Additional HMO licensing scheme",
      url: "https://pre.hillingdon.gov.uk/hmo/apply-hmo-licence/2",
    },
    {
      label: "Hillingdon Council: HMO landlords' obligations",
      url: "https://pre.hillingdon.gov.uk/hmo/houses-multiple-occupation-hmo/3",
    },
    {
      label: "Hillingdon Council: Additional licensing designation 2026",
      url: "https://pre.hillingdon.gov.uk/downloads/file/2426/designation-document-additional-licensing-scheme",
    },
    {
      label: "Hillingdon Council: Cabinet decision on HMO licensing, 19 February 2026",
      url: "https://modgov.hillingdon.gov.uk/ieDecisionDetails.aspx?ID=3472",
    },
    {
      label: "Hillingdon Council: Cabinet report on HMO licensing (February 2026)",
      url: "https://modgov.hillingdon.gov.uk/documents/s65705/08%20-%20REPORT%20Cabinet%20Report%20-%20Houses%20of%20Multiple%20Occupancy%20FEBRUARY%202026.pdf",
    },
    {
      label: "Hillingdon Council: Additional licensing proposal and evidence (Appendix 1)",
      url: "https://modgov.hillingdon.gov.uk/documents/s64782/Appendix%201%20Additional%20Licensing%20Proposal%20Document.pdf",
    },
    {
      label: "Hillingdon Council: Additional HMO licence conditions (Appendix 2)",
      url: "https://modgov.hillingdon.gov.uk/documents/s65707/Appendix%202%20-%20Proposed%20Additional%20Licensing%20Conditions.pdf",
    },
    {
      label: "Hillingdon Council: Article 4 directions",
      url: "https://pre.hillingdon.gov.uk/planning-policy/article-4-directions/2",
    },
    {
      label: "Hillingdon Council: HMO Select Committee report (April 2026)",
      url: "https://modgov.hillingdon.gov.uk/documents/s66301/House%20of%20Multiple%20Occupancy%20Select%20Committee%20Report%20April%202026.pdf",
    },
    {
      label: "Hillingdon Council: Facts and statistics about the borough",
      url: "https://pre.hillingdon.gov.uk/strategies-policies-projects/facts-statistics-borough-hillingdon",
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
      "Hillingdon is London's second-largest borough, covering 42 square miles, and the council says more than half of it is countryside. Heathrow Airport and RAF Northolt are both within its boundary. The council's 2025 housing tenure survey counts 113,124 residential properties across the borough, of which 29,099 are privately rented.",
    landlordContext:
      "Private renting rose from 19.1% of households in 2011 to 25.9% in 2021, London's joint second-largest rise, the council says. In April 2025, 1,968 local landlords held LLAS accreditation.",
  },
};

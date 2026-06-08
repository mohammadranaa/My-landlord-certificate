export interface ServiceData {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  legalNote: string;
  priceFrom: number;
  turnaroundDays: number;
  validityYears: number | null;
  included: string[];
  faqs: { q: string; a: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "eicr",
    name: "Electrical Installation Condition Report (EICR)",
    shortName: "EICR",
    tagline: "Mandatory for all rental properties since 2020.",
    description:
      "An EICR is a formal document produced following an assessment of the electrical installation within a property. Required by law for all privately rented properties in England.",
    legalNote:
      "The Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020 require landlords to have a valid EICR at all times.",
    priceFrom: 99,
    turnaroundDays: 2,
    validityYears: 5,
    included: [
      "Full inspection of wiring, sockets and consumer unit",
      "Test of all circuits",
      "Condition rating (C1–C3) for any issues found",
      "Signed certificate emailed within 24 hours",
    ],
    faqs: [
      {
        q: "How often do I need an EICR?",
        a: "Every 5 years, or at each change of tenancy — whichever comes first.",
      },
      {
        q: "What happens if my property fails?",
        a: "You will receive a C1 or C2 code. Remedial works must be completed within 28 days and evidenced to your local authority.",
      },
      {
        q: "How long does the inspection take?",
        a: "Typically 2–4 hours depending on property size and age of wiring.",
      },
    ],
  },
  {
    slug: "gas-safety-certificate",
    name: "Gas Safety Certificate (CP12)",
    shortName: "Gas Safety",
    tagline: "Annual legal requirement for any property with gas appliances.",
    description:
      "A Gas Safety Certificate — formally known as a CP12 — confirms that all gas appliances, flues and pipework in your rental property are safe and working correctly.",
    legalNote:
      "The Gas Safety (Installation and Use) Regulations 1998 require landlords to arrange an annual gas safety check by a Gas Safe Registered engineer.",
    priceFrom: 59,
    turnaroundDays: 1,
    validityYears: 1,
    included: [
      "Inspection of all gas appliances (boiler, hob, fire)",
      "Check of flues and ventilation",
      "Gas pressure and flow tests",
      "CP12 certificate emailed within 24 hours",
      "Copy provided to tenants within 28 days",
    ],
    faqs: [
      {
        q: "How often is a gas safety check required?",
        a: "Every 12 months without exception.",
      },
      {
        q: "What if a tenant refuses access?",
        a: "You must document every attempt to gain access. We can advise on the correct process.",
      },
      {
        q: "Does it cover the boiler service?",
        a: "The CP12 is an inspection only. A boiler service is a separate service we can also arrange.",
      },
    ],
  },
  {
    slug: "epc",
    name: "Energy Performance Certificate (EPC)",
    shortName: "EPC",
    tagline: "Required before marketing or letting any property.",
    description:
      "An EPC rates your property's energy efficiency from A (most efficient) to G (least efficient). Rental properties must have a minimum rating of E under the Minimum Energy Efficiency Standards (MEES).",
    legalNote:
      "Energy Performance of Buildings (England and Wales) Regulations 2012 require a valid EPC whenever a property is marketed for let.",
    priceFrom: 69,
    turnaroundDays: 2,
    validityYears: 10,
    included: [
      "Full domestic energy assessment by accredited assessor",
      "A–G rating certificate",
      "Recommendations to improve rating",
      "Registration on the national EPC register",
      "PDF certificate emailed within 24 hours",
    ],
    faqs: [
      {
        q: "How long is an EPC valid for?",
        a: "10 years, unless significant works are carried out that would change the rating.",
      },
      {
        q: "My property is rated F or G — what happens?",
        a: "You cannot legally let it without an exemption. We can advise on cost-effective improvements to reach a minimum E rating.",
      },
      {
        q: "Do I need a new EPC for each tenancy?",
        a: "No — as long as the current certificate is within its 10-year validity period.",
      },
    ],
  },
  {
    slug: "fire-risk-assessment",
    name: "Fire Risk Assessment",
    shortName: "Fire Risk Assessment",
    tagline: "Compulsory for HMOs and recommended for all rentals.",
    description:
      "A Fire Risk Assessment identifies fire hazards, evaluates who is at risk and records what actions are needed to remove or reduce that risk.",
    legalNote:
      "The Regulatory Reform (Fire Safety) Order 2005 requires a written fire risk assessment for all HMOs. The Renters' Rights Bill 2025 extends obligations further.",
    priceFrom: 89,
    turnaroundDays: 2,
    validityYears: null,
    included: [
      "Inspection of escape routes, fire doors and detection equipment",
      "Identification of ignition sources and combustible materials",
      "Written report with prioritised action plan",
      "Reassessment recommendation date",
    ],
    faqs: [
      {
        q: "Is a fire risk assessment legally required for single lets?",
        a: "It is mandatory for HMOs. For single lets it is strongly recommended and may become a legal requirement under incoming legislation.",
      },
      {
        q: "How often should it be reviewed?",
        a: "Annually, or whenever there is a significant change to the property or its use.",
      },
    ],
  },
  {
    slug: "pat-testing",
    name: "PAT Testing",
    shortName: "PAT Testing",
    tagline: "Portable Appliance Testing for furnished rental properties.",
    description:
      "PAT Testing checks that portable electrical appliances supplied as part of a furnished tenancy are safe for use. While not a strict legal requirement, it is considered best practice and strongly recommended by most landlord insurance policies.",
    legalNote:
      "The Landlord and Tenant Act 1985 and the Electrical Equipment (Safety) Regulations 2016 require that all supplied electrical appliances are safe.",
    priceFrom: 79,
    turnaroundDays: 1,
    validityYears: 1,
    included: [
      "Visual inspection of all portable appliances",
      "Earth continuity and insulation resistance tests",
      "Pass/fail label applied to each appliance",
      "Full asset register and test report emailed within 24 hours",
    ],
    faqs: [
      {
        q: "Which appliances need to be tested?",
        a: "Any plug-in appliance you supply with the tenancy — white goods, TVs, lamps, toasters, vacuum cleaners, etc.",
      },
      {
        q: "How many appliances are included in the base price?",
        a: "Up to 10 appliances. Additional appliances are charged at a per-item rate.",
      },
    ],
  },
  {
    slug: "landlord-certificates-bundle",
    name: "Landlord Certificate Bundle",
    shortName: "Bundle",
    tagline: "All the certificates you need, in one visit, at one price.",
    description:
      "Our bundle packages the most common landlord compliance certificates into a single engineer visit, saving you time and money versus booking separately.",
    legalNote:
      "Combining your gas safety, EICR and EPC in one visit ensures you stay compliant with the Gas Safety Regulations 1998, Electrical Safety Standards 2020 and Energy Performance Regulations 2012.",
    priceFrom: 199,
    turnaroundDays: 2,
    validityYears: null,
    included: [
      "Gas Safety Certificate (CP12)",
      "EICR",
      "EPC",
      "All certificates emailed within 24 hours",
      "Reminder service for upcoming renewals",
    ],
    faqs: [
      {
        q: "Can I customise the bundle?",
        a: "Yes — you can add PAT Testing or a Fire Risk Assessment to any bundle.",
      },
      {
        q: "How much do I save versus booking separately?",
        a: "Typically £40–£60 depending on the combination chosen.",
      },
    ],
  },
];

export function getService(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

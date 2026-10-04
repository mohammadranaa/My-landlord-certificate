/**
 * LOCATION SERVICE REGISTRY — single source of truth for every
 * /[service]/[borough] page and the /coverage-areas/[borough] hubs.
 *
 * To add a new service to every borough page, nearby-borough grid, hub page,
 * sitemap, homepage map tooltip and the "in every borough" grids: add ONE
 * entry here. To add a new town, add ONE entry to BOROUGH_DATA in
 * borough-data.ts. Nothing else needs to change.
 *
 * `urlPrefix` must be the service's CANONICAL url (never a redirect source —
 * see next.config.ts redirects()). `bookingParam` must be a value the
 * booking form actually accepts — see SERVICES in
 * src/components/booking/step-3-services.tsx.
 */
import type { ServiceIconKey } from "@/components/ui/service-icons";
import type { ServiceTag } from "@/data/reviews";
import type { PriceRow } from "@/lib/pricing";
import {
  ADDITIONAL_CHARGES,
  ASBESTOS_SURVEY_TABLE,
  BOILER_INSTALLATION_FROM,
  COMMERCIAL_EICR_EXTRA_CIRCUIT_CHARGE,
  COMMERCIAL_EICR_TABLE,
  COMMERCIAL_EPC_TABLE,
  DOMESTIC_EICR_TABLE,
  DOMESTIC_EPC_TABLE,
  EICR_ADDITIONAL_CU_PRICE,
  ELC_TABLE,
  ELECTRICAL_DIAGNOSTIC_HOURLY_RATE,
  FIRE_ALARM_INSTALLATION_PER_ALARM,
  FIRE_DOOR_TABLE,
  FIRE_EXTINGUISHER_TABLE,
  FIRE_SAFETY_CERT_TABLE,
  FRA_RESIDENTIAL_TABLE,
  FUSE_BOX_TABLE,
  GAS_SAFETY_CP12_TABLE,
  GAS_SAFETY_CP42_TABLE,
  LEGIONELLA_PRICES,
  PAT_TABLE,
  getPriceForAsbestosSurvey,
  getPriceForEICR,
  getPriceForEPC,
  getPriceForFRA,
  getPriceForGasSafety,
  getPriceForPAT,
} from "@/lib/pricing";

export type LocationFaq = { question: string; answer: string };

export interface LocationService {
  key: string;
  name: string;
  shortName: string;
  icon: ServiceIconKey;
  /** Canonical top-level URL, e.g. "/eicr". Never a redirect source. */
  urlPrefix: string;
  /** Value the booking form accepts via /book?service= — see step-3-services.tsx SERVICES. */
  bookingParam: string;
  priceFrom: number;
  /** Full price table for the pricing section. Omitted for hourly/quote-only services. */
  priceTable?: readonly PriceRow[];
  priceSuffix?: string;
  priceNote?: string;
  deliveryText: "within 24 hours" | "within 48 hours";
  legalBasis: string;
  whoNeedsIt: string;
  whatsIncluded: string[];
  faqs: [LocationFaq, LocationFaq, LocationFaq, LocationFaq];
  /** ServiceTag in src/data/reviews.ts, or "general" when no dedicated tag exists.
   *  "general" reviews must use a company-level heading, never a service-specific one
   *  — see reviewsHeadingForService() below. */
  reviewTag: ServiceTag;
  indexable: true;
}

export const LOCATION_SERVICES: LocationService[] = [
  // ── Existing 5 (kept for registry-driven cross-links on their own bespoke pages) ──
  {
    key: "eicr",
    name: "EICR Certificate",
    shortName: "EICR",
    icon: "eicr",
    urlPrefix: "/eicr",
    bookingParam: "eicr",
    priceFrom: getPriceForEICR("studio"),
    priceTable: DOMESTIC_EICR_TABLE,
    priceNote:
      "Price covers 1 consumer unit, up to 12 circuits. Extra consumer unit £" +
      EICR_ADDITIONAL_CU_PRICE.toFixed(2) +
      ", circuits above 12 £" +
      COMMERCIAL_EICR_EXTRA_CIRCUIT_CHARGE +
      " each.",
    deliveryText: "within 24 hours",
    legalBasis:
      "Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020. A civil penalty of up to £40,000 per breach applies (raised from £30,000 by SI 2025/1043, effective 1 November 2025).",
    whoNeedsIt:
      "Every private landlord in England, for every rental property, renewed at least every 5 years or at each change of tenancy if sooner.",
    whatsIncluded: [
      "Visual inspection of all accessible wiring, sockets, switches and light fittings",
      "Testing of all circuits for continuity, insulation resistance and polarity",
      "RCD testing for all protective devices",
      "Consumer unit check — type, condition, labelling and protective devices",
      "Signed EICR certificate with C1/C2/C3 classification of any observations",
    ],
    faqs: [
      { question: "Is an EICR a legal requirement?", answer: "Yes. The Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020 require every landlord in England to hold a valid EICR and renew it at least every 5 years. A civil penalty of up to £40,000 per breach can be imposed for non-compliance." },
      { question: "How long does an EICR take?", answer: "Most inspections take 2–4 hours depending on property size and age. Older properties with more complex wiring can take longer. You do not need to be present — a tenant or keyholder can provide access." },
      { question: "What happens if the EICR is unsatisfactory?", answer: "A C1 (immediate danger) must be made safe before the engineer leaves. A C2 (potentially dangerous) must be remedied within 28 days and evidenced in writing. C3 (improvement recommended) does not fail the report." },
      { question: "Do I need a new EICR for every new tenant?", answer: "No — an EICR remains valid for 5 years regardless of tenancy changes, unless the previous report specified a shorter re-inspection interval." },
    ],
    reviewTag: "eicr",
    indexable: true,
  },
  {
    key: "gas-safety-certificate",
    name: "Gas Safety Certificate (CP12)",
    shortName: "Gas Safety",
    icon: "flame",
    urlPrefix: "/gas-safety-certificate",
    bookingParam: "gas-safety-cp12",
    priceFrom: getPriceForGasSafety(1),
    priceTable: GAS_SAFETY_CP12_TABLE,
    priceNote: "A boiler is not counted as a standard appliance — select Boiler Check + Service if the property has one.",
    deliveryText: "within 24 hours",
    legalBasis:
      "Gas Safety (Installation and Use) Regulations 1998. Failing to maintain a current CP12 is a criminal offence.",
    whoNeedsIt:
      "Every landlord renting a property with gas appliances or a gas supply, renewed annually.",
    whatsIncluded: [
      "Inspection of all gas appliances, flues and pipework",
      "Tightness test of the gas installation",
      "Safety check of ventilation and flue operation",
      "Signed CP12 certificate confirming each appliance is safe to use",
      "Record of any defects found, with remedial work quoted on request",
    ],
    faqs: [
      { question: "Is a Gas Safety Certificate (CP12) a legal requirement?", answer: "Yes. The Gas Safety (Installation and Use) Regulations 1998 require landlords to have every gas appliance checked annually by a Gas Safe registered engineer and to give tenants a copy of the certificate." },
      { question: "What happens if a gas appliance fails the check?", answer: "A dangerous appliance is isolated or capped on the spot for your tenant's safety. We explain the fault and quote for the remedial work; the certificate records what was found." },
      { question: "Do I need to test the boiler separately?", answer: "A boiler is serviced and checked as part of the Boiler Check + Service tier. If you only need the standard appliance check (cooker, hob, gas fire), the standard CP12 tiers apply." },
      { question: "How soon must I give the certificate to my tenant?", answer: "Within 28 days of the check for existing tenants, and before a new tenant moves in. You must also keep records of the two most recent certificates." },
    ],
    reviewTag: "gas-safety",
    indexable: true,
  },
  {
    key: "epc",
    name: "EPC Certificate",
    shortName: "EPC",
    icon: "leaf",
    urlPrefix: "/epc",
    bookingParam: "epc",
    priceFrom: getPriceForEPC("studio"),
    priceTable: DOMESTIC_EPC_TABLE,
    deliveryText: "within 24 hours",
    legalBasis:
      "Energy Performance of Buildings Regulations 2012 and the Minimum Energy Efficiency Standards (MEES) Regulations — a valid EPC rated E or above is required before marketing a property to let.",
    whoNeedsIt: "Every landlord, before marketing a property for a new tenancy, renewed every 10 years.",
    whatsIncluded: [
      "Full on-site assessment by an accredited Domestic Energy Assessor",
      "A–G energy efficiency rating with the methodology behind it",
      "Recommendations report showing the cheapest ways to improve the rating",
      "Lodgement on the national EPC register within 24 hours",
      "A 10-year valid certificate accepted by all local authorities and lenders",
    ],
    faqs: [
      { question: "Is an EPC a legal requirement?", answer: "Yes. You cannot legally market a rental property without a valid EPC, and the Minimum Energy Efficiency Standards require a rating of E or above to let it at all." },
      { question: "How long does an EPC assessment take?", answer: "Typically 45–60 minutes for a standard residential property, depending on size and how many rooms and features need measuring." },
      { question: "What if my property is rated F or G?", answer: "You cannot legally let it until the rating is improved to E or above, unless a valid exemption is registered on the PRS Exemptions Register. Our assessor's recommendations report shows the cheapest route to compliance." },
      { question: "How long is an EPC valid?", answer: "10 years from the date of assessment, unless significant works (new heating, insulation, extension) change the property's energy performance sooner." },
    ],
    reviewTag: "epc",
    indexable: true,
  },
  {
    key: "fire-risk-assessment",
    name: "Fire Risk Assessment",
    shortName: "FRA",
    icon: "shield",
    urlPrefix: "/fire-risk-assessment",
    bookingParam: "fire-risk-assessment",
    priceFrom: getPriceForFRA("studio"),
    priceTable: FRA_RESIDENTIAL_TABLE,
    deliveryText: "within 24 hours",
    legalBasis:
      "Regulatory Reform (Fire Safety) Order 2005 — a suitable and sufficient fire risk assessment is compulsory for HMOs and the common parts of blocks of flats.",
    whoNeedsIt: "Landlords of HMOs and the common parts of blocks of flats, reviewed at least annually.",
    whatsIncluded: [
      "Full walk-through assessment of fire hazards and means of escape",
      "Review of fire doors, alarms, signage and emergency lighting",
      "Written report with a prioritised action plan",
      "Risk rating for each hazard identified",
      "Assessment by an IFSM / NEBOSH qualified fire risk assessor",
    ],
    faqs: [
      { question: "Is a Fire Risk Assessment a legal requirement?", answer: "Yes, for HMOs and the common parts of blocks of flats, under the Regulatory Reform (Fire Safety) Order 2005. A single self-contained let occupied by one household does not normally need one." },
      { question: "How often does it need reviewing?", answer: "At least annually, and sooner after any significant change — a new tenant mix, building works, or an incident." },
      { question: "Who is a competent person to carry it out?", answer: "An assessor with sufficient training and experience to identify fire hazards and evaluate risk — typically accredited by IFSM or IFE. Self-assessment is only suitable for the simplest premises." },
      { question: "What happens if hazards are found?", answer: "The report prioritises each finding by risk level and timescale for action, so you know what to fix first and can evidence compliance to your council." },
    ],
    reviewTag: "fire-risk-assessment",
    indexable: true,
  },
  {
    key: "pat-testing",
    name: "PAT Testing",
    shortName: "PAT Testing",
    icon: "plug",
    urlPrefix: "/pat-testing",
    bookingParam: "pat",
    priceFrom: getPriceForPAT(1),
    priceTable: PAT_TABLE,
    deliveryText: "within 24 hours",
    legalBasis:
      "The Electrical Equipment (Safety) Regulations 2016 and a landlord's general duty of care require portable appliances supplied with a furnished tenancy to be safe. PAT testing is the recognised way to evidence this.",
    whoNeedsIt: "Landlords providing furnished or part-furnished rental properties with portable electrical appliances.",
    whatsIncluded: [
      "Visual inspection and electrical test of every portable appliance",
      "Pass/fail label applied to each item tested",
      "Full digital asset register of everything tested",
      "City & Guilds 2377 qualified tester",
      "Certificate and register emailed within 24 hours",
    ],
    faqs: [
      { question: "Is PAT testing a legal requirement?", answer: "There is no single law naming 'PAT testing', but landlords have a duty under general health and safety law to keep portable appliances supplied with a tenancy safe. PAT testing is the standard way to evidence this." },
      { question: "How often should appliances be PAT tested?", answer: "Annual testing is recommended for rental properties, though the correct interval depends on the appliance type and how it's used." },
      { question: "What counts as a portable appliance?", answer: "Anything with a plug that's supplied with the tenancy — kettles, toasters, lamps, vacuum cleaners, washing machines and similar. Hardwired items like the consumer unit are covered by the EICR instead." },
      { question: "What happens if an appliance fails?", answer: "It's labelled as failed and you're told why. Faulty items should be repaired or removed from the property before the tenancy starts." },
    ],
    reviewTag: "general",
    indexable: true,
  },

  // ── New 13 ────────────────────────────────────────────────────────────────
  {
    key: "commercial-eicr",
    name: "Commercial EICR",
    shortName: "Commercial EICR",
    icon: "eicr",
    urlPrefix: "/commercial-eicr",
    bookingParam: "commercial-eicr",
    priceFrom: COMMERCIAL_EICR_TABLE[0].price,
    priceTable: COMMERCIAL_EICR_TABLE,
    priceNote: `Each consumer unit covers up to 12 circuits. Additional circuits above 12 are charged at £${COMMERCIAL_EICR_EXTRA_CIRCUIT_CHARGE} each.`,
    deliveryText: "within 24 hours",
    legalBasis:
      "Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020 apply to mixed-use and HMO blocks; commercial-only premises are additionally expected to meet BS 7671 under general workplace health and safety law.",
    whoNeedsIt: "Landlords and operators of commercial premises, mixed-use buildings and HMO blocks with multiple consumer units.",
    whatsIncluded: [
      "Full inspection and test of every consumer unit and circuit",
      "Earthing and bonding check against BS 7671",
      "NICEIC approved engineer",
      "Written report issued within 24 hours",
      "Prioritised remedial recommendations with C1/C2/C3 classification",
    ],
    faqs: [
      { question: "How is a commercial EICR priced?", answer: "By the number of consumer units on site, each covering up to 12 circuits. Additional circuits above 12 per unit are charged per circuit — your engineer confirms the exact count on arrival." },
      { question: "How is this different from a domestic EICR?", answer: "The inspection method and standard (BS 7671) are the same, but commercial and mixed-use buildings often have multiple consumer units, three-phase supplies or more complex distribution, which affects pricing and inspection time." },
      { question: "How long does a commercial EICR take?", answer: "It depends on the number of consumer units and circuits — a single-unit office might take 2–3 hours, while a larger mixed-use block can take considerably longer." },
      { question: "What if the inspection finds a problem?", answer: "Each observation is coded C1, C2 or C3. C1 and C2 items need remedial work; our NICEIC approved electricians can quote for and complete this alongside the inspection." },
    ],
    reviewTag: "general",
    indexable: true,
  },
  {
    key: "electrical-diagnostic",
    name: "Electrical Diagnostic",
    shortName: "Electrical Diagnostic",
    icon: "wrench",
    urlPrefix: "/electrical-diagnostic",
    bookingParam: "electrical-diagnostic",
    priceFrom: ELECTRICAL_DIAGNOSTIC_HOURLY_RATE,
    priceSuffix: "/hr",
    priceNote: "No call-out fee. Most diagnostic visits take 1–2 hours.",
    deliveryText: "within 24 hours",
    legalBasis:
      "Not a standalone legal requirement — fault-finding that helps landlords meet their ongoing duty under the Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020 to keep the installation safe between EICRs.",
    whoNeedsIt: "Landlords with a specific electrical fault — tripping breakers, dead sockets, flickering lights — that needs tracing and fixing.",
    whatsIncluded: [
      "Systematic fault-tracing using specialist test equipment",
      "NICEIC approved electrician",
      "Minor repairs completed on the spot where possible",
      "Written fault report the same visit",
      "Fixed quote for any larger remedial work before it starts",
    ],
    faqs: [
      { question: "When do I need a diagnostic instead of an EICR?", answer: "An EICR is a scheduled periodic inspection of the whole installation. A diagnostic is for a specific fault between inspections — a breaker that trips, an RCD that won't reset, or sockets that have stopped working." },
      { question: "How is the service charged?", answer: `Per hour, with no call-out fee. Most visits take 1–2 hours; we give an estimate at booking based on what you describe.` },
      { question: "Can repairs be done during the same visit?", answer: "Minor repairs — a faulty socket, a failed MCB, resetting an RCD — are often completed during the visit at no extra charge beyond the hourly rate. Larger work gets a separate fixed quote." },
      { question: "Will I need a full EICR afterwards?", answer: "Not necessarily. If the fault is isolated and the rest of the installation is satisfactory, the repair is sufficient. If the fault suggests wider problems, we'll say so honestly." },
    ],
    reviewTag: "general",
    indexable: true,
  },
  {
    key: "fuse-box-installation",
    name: "Fuse Box Installation",
    shortName: "Fuse Box",
    icon: "box",
    urlPrefix: "/fuse-box-installation",
    bookingParam: "fuse-box",
    priceFrom: FUSE_BOX_TABLE[0].price,
    priceTable: FUSE_BOX_TABLE,
    priceNote: "Includes supply, installation, Part P self-certification and a completion EICR.",
    deliveryText: "within 24 hours",
    legalBasis:
      "Consumer unit replacement is notifiable work under Part P of the Building Regulations. A C2-coded consumer unit on an EICR must typically be replaced within 28 days.",
    whoNeedsIt: "Landlords whose EICR has flagged the consumer unit as C2, or anyone upgrading an old fuse board to modern RCD/RCBO protection.",
    whatsIncluded: [
      "Supply and installation of a new metal consumer unit",
      "Dual RCD or individual RCBO protection per circuit",
      "Full circuit isolation, reconnection and testing",
      "Completion EICR confirming the new installation is safe",
      "Part P self-certification — no separate Building Control contact needed",
    ],
    faqs: [
      { question: "Why would I need a new consumer unit?", answer: "Older fuse boards lack RCD protection required under the 18th Edition Wiring Regulations. A C2 code for the consumer unit on an EICR means it must be replaced within 28 days." },
      { question: "How long does installation take?", answer: "A standard replacement takes 4–6 hours. Power is off to the property during the work, so tenants should be advised in advance." },
      { question: "Will I get an EICR afterwards?", answer: "Yes — every consumer unit installation includes a full test and completion EICR, confirming the new installation meets BS 7671." },
      { question: "Do I need to notify Building Control myself?", answer: "No. As NICEIC approved contractors we self-certify the work under Part P and you receive a Building Regulations compliance certificate automatically." },
    ],
    reviewTag: "general",
    indexable: true,
  },
  {
    key: "emergency-lights-certificate",
    name: "Emergency Lights Certificate",
    shortName: "Emergency Lights",
    icon: "light",
    urlPrefix: "/emergency-lights-certificate",
    bookingParam: "elc",
    priceFrom: ELC_TABLE[0].price,
    priceTable: ELC_TABLE,
    deliveryText: "within 24 hours",
    legalBasis:
      "Tested to BS 5266-1. Required under the Regulatory Reform (Fire Safety) Order 2005 wherever emergency lighting is installed on an escape route — common in HMOs, bedsits and leasehold blocks.",
    whoNeedsIt: "Landlords of HMOs, bedsits and blocks of flats with emergency lighting on escape routes.",
    whatsIncluded: [
      "Function test of every emergency light fitting",
      "3-hour duration test to BS 5266-1",
      "Battery and charging circuit check",
      "Signed test certificate",
      "Record of any fittings needing replacement",
    ],
    faqs: [
      { question: "Is an Emergency Lights Certificate a legal requirement?", answer: "Where emergency lighting is installed on an escape route, it must be maintained and tested to BS 5266-1 under the Regulatory Reform (Fire Safety) Order 2005." },
      { question: "How often does emergency lighting need testing?", answer: "A monthly function (flick) test and an annual full 3-hour duration test are the standard requirement under BS 5266-1." },
      { question: "What does the 3-hour test involve?", answer: "Each fitting is run on battery power for the full rated duration to confirm it will perform during an actual power outage, then checked that it recharges correctly." },
      { question: "What if a fitting fails?", answer: "It's recorded on the certificate with a recommendation — usually a battery or unit replacement — so you can get it fixed before the next test." },
    ],
    reviewTag: "general",
    indexable: true,
  },
  {
    key: "commercial-gas-safety-certificate",
    name: "Commercial Gas Safety (CP42)",
    shortName: "Commercial Gas (CP42)",
    icon: "flame",
    urlPrefix: "/commercial-gas-safety-certificate",
    bookingParam: "gas-safety-cp42",
    priceFrom: GAS_SAFETY_CP42_TABLE[0].price,
    priceTable: GAS_SAFETY_CP42_TABLE,
    deliveryText: "within 24 hours",
    legalBasis:
      "Gas Safety (Installation and Use) Regulations 1998 — the same legislation as domestic CP12, using the CP42 certificate format for commercial and non-domestic premises.",
    whoNeedsIt: "Landlords and operators of commercial premises with gas appliances — offices, restaurants, retail units — renewed annually.",
    whatsIncluded: [
      "Inspection of all commercial gas appliances, flues and pipework",
      "Tightness test of the gas installation",
      "Gas Safe registered engineer",
      "Signed CP42 certificate",
      "Record of any defects with remedial work quoted on request",
    ],
    faqs: [
      { question: "What is a CP42 certificate?", answer: "The commercial equivalent of the domestic CP12, confirming gas appliances and pipework in a commercial premises are safe. It's issued under the same Gas Safety (Installation and Use) Regulations 1998." },
      { question: "How often does a commercial property need checking?", answer: "Annually, in the same way as domestic gas safety checks, by a Gas Safe registered engineer qualified for commercial appliances." },
      { question: "How is pricing structured?", answer: "By the number of gas appliances on the premises — a single-appliance unit costs less than a commercial kitchen with multiple appliances." },
      { question: "What happens if an appliance is unsafe?", answer: "It's isolated immediately and the defect recorded. We quote for remedial work so the appliance can be made safe and the certificate completed." },
    ],
    reviewTag: "general",
    indexable: true,
  },
  {
    key: "boiler-installation",
    name: "Boiler Installation",
    shortName: "Boiler Installation",
    icon: "boiler",
    urlPrefix: "/boiler-installation",
    bookingParam: "boiler-installation",
    priceFrom: BOILER_INSTALLATION_FROM,
    priceNote: "Final price confirmed after survey — this is the starting price.",
    deliveryText: "within 24 hours",
    legalBasis:
      "Gas boiler installation is notifiable work under Part P and the Gas Safety (Installation and Use) Regulations 1998 — it must be carried out by a Gas Safe registered engineer.",
    whoNeedsIt: "Landlords replacing a faulty, inefficient or end-of-life boiler.",
    whatsIncluded: [
      "Supply and installation of a new gas boiler",
      "Full system flush and commissioning",
      "Gas Safe registered engineer",
      "Building Regulations compliance notification",
      "Gas safety check of the new installation on completion",
    ],
    faqs: [
      { question: "How much does a boiler installation cost?", answer: `Prices start from £${BOILER_INSTALLATION_FROM.toLocaleString()} and depend on the boiler model and the complexity of the installation — the final price is confirmed after a survey.` },
      { question: "Who can install a gas boiler?", answer: "Only a Gas Safe registered engineer can legally carry out gas boiler installation work in the UK." },
      { question: "Do I need to notify Building Control?", answer: "No — as Gas Safe registered installers we self-certify the work and notify Building Control on your behalf." },
      { question: "Will I get a gas safety check included?", answer: "Yes, the new installation is checked and confirmed safe as part of the commissioning process." },
    ],
    reviewTag: "general",
    indexable: true,
  },
  {
    key: "fire-safety-certificate",
    name: "Fire Safety Certificate",
    shortName: "Fire Safety Cert",
    icon: "bell",
    urlPrefix: "/fire-safety-certificate",
    bookingParam: "fire-safety-cert",
    priceFrom: FIRE_SAFETY_CERT_TABLE[0].price,
    priceTable: FIRE_SAFETY_CERT_TABLE,
    deliveryText: "within 24 hours",
    legalBasis:
      "Smoke and Carbon Monoxide Alarm (England) Regulations 2015, amended 2022 — landlords must fit and test smoke and carbon monoxide alarms in rental properties.",
    whoNeedsIt: "Every landlord — a working smoke alarm on every storey and a CO alarm in any room with a fixed combustion appliance, tested at the start of every tenancy.",
    whatsIncluded: [
      "Test of every smoke and heat alarm in the property",
      "Test of carbon monoxide alarms where fitted",
      "Replacement of any alarm that fails or has expired (where supplied)",
      "Signed certificate confirming alarms are present and working",
      "Fire safety accredited engineer",
    ],
    faqs: [
      { question: "Is a Fire Safety Certificate a legal requirement?", answer: "Yes. The Smoke and Carbon Monoxide Alarm (England) Regulations 2015 (amended 2022) require a working smoke alarm on every storey and a CO alarm wherever there's a fixed combustion appliance." },
      { question: "How often should alarms be tested?", answer: "At the start of every new tenancy, and we recommend an annual check in between to catch any that have failed or expired." },
      { question: "What's covered in the test?", answer: "Every smoke, heat and carbon monoxide alarm in the property is function-tested, and any unit that fails or is past its expiry date is flagged for replacement." },
      { question: "Does this cover fire alarm panels in HMOs?", answer: "No — addressable or conventional fire alarm panel systems are a separate service. This certificate covers standard smoke, heat and CO alarms." },
    ],
    reviewTag: "fire-safety-certificate",
    indexable: true,
  },
  {
    key: "fire-alarm-installation",
    name: "Fire Alarm Installation",
    shortName: "Fire Alarm Install",
    icon: "bell",
    urlPrefix: "/fire-alarm-installation",
    bookingParam: "fire-alarm-installation",
    priceFrom: FIRE_ALARM_INSTALLATION_PER_ALARM,
    priceSuffix: "/alarm",
    deliveryText: "within 24 hours",
    legalBasis:
      "Installed to BS 5839 and relevant to meeting HMO licence conditions and the Regulatory Reform (Fire Safety) Order 2005 requirement for adequate fire detection.",
    whoNeedsIt: "Landlords of HMOs and larger properties needing a new or upgraded fire alarm system.",
    whatsIncluded: [
      "Supply and installation of mains-powered interlinked alarms",
      "System wired and tested to BS 5839",
      "Fire safety accredited engineer",
      "Commissioning certificate on completion",
      "Guidance on the correct alarm grade for your property type",
    ],
    faqs: [
      { question: "How is fire alarm installation priced?", answer: "Per alarm point installed for a standard mains-powered interlinked system. A full system installation is quoted separately depending on the building's size and layout." },
      { question: "What alarm grade do I need?", answer: "Most 2-storey HMOs with up to 4 occupants need a Grade D LD2 system; larger or 3-storey HMOs typically need a Grade A LD2 system with a central panel. Your HMO licence conditions confirm the exact requirement." },
      { question: "Is the system tested after installation?", answer: "Yes — every installation is fully tested and commissioned, with a certificate confirming it meets BS 5839 before we leave." },
      { question: "Can this be combined with a Fire Risk Assessment?", answer: "Yes, many landlords book both together so the assessment confirms the right alarm grade before installation goes ahead." },
    ],
    reviewTag: "general",
    indexable: true,
  },
  {
    key: "fire-door-certificate",
    name: "Fire Door Certificate",
    shortName: "Fire Door Cert",
    icon: "door",
    urlPrefix: "/fire-door-certificate",
    bookingParam: "fire-door",
    priceFrom: FIRE_DOOR_TABLE[0].price,
    priceTable: FIRE_DOOR_TABLE,
    deliveryText: "within 24 hours",
    legalBasis:
      "Fire Safety (England) Regulations 2022 require quarterly checks of communal fire doors (and best-endeavours annual checks of flat entrance doors) in buildings over 11 metres; the Regulatory Reform (Fire Safety) Order 2005 covers fire doors in HMOs more broadly.",
    whoNeedsIt: "Freeholders and managing agents of blocks of flats, and landlords of HMOs with fire doors on escape routes.",
    whatsIncluded: [
      "Inspection of door leaf, frame and gaps against BS 8214",
      "Check of intumescent strips and cold smoke seals",
      "Self-closer function test",
      "Hinge and ironmongery check",
      "Dated certificate as evidence for your HMO licence or block records",
    ],
    faqs: [
      { question: "How often do fire doors need checking?", answer: "In buildings over 11 metres, communal fire doors must be checked at least every three months under the Fire Safety (England) Regulations 2022. HMOs should follow their fire risk assessment and licence conditions." },
      { question: "What makes a fire door fail inspection?", answer: "Common failures include a disconnected self-closer, gaps wider than around 3mm, painted-over or missing seals, and non-fire-rated replacement doors fitted during redecoration." },
      { question: "Do HMOs need FD30 doors?", answer: "Most licensable HMOs need FD30 fire doors with self-closers on bedrooms and rooms opening onto the escape route — the exact requirement depends on your fire risk assessment and licence conditions." },
      { question: "Can a failed door be repaired instead of replaced?", answer: "Often yes — seals, closers and hinges can usually be fixed without replacing the whole door. We quote for remedial fixing separately from full door replacement." },
    ],
    reviewTag: "general",
    indexable: true,
  },
  {
    key: "fire-extinguisher-testing",
    name: "Fire Extinguisher Testing",
    shortName: "Extinguisher Testing",
    icon: "extinguisher",
    urlPrefix: "/fire-extinguisher-testing",
    bookingParam: "fire-extinguisher",
    priceFrom: FIRE_EXTINGUISHER_TABLE[0].price,
    priceTable: FIRE_EXTINGUISHER_TABLE,
    deliveryText: "within 24 hours",
    legalBasis:
      "Serviced and tested to BS 5306. Required for HMOs and commercial premises under the Regulatory Reform (Fire Safety) Order 2005.",
    whoNeedsIt: "Landlords of HMOs and commercial premises with portable fire extinguishers, serviced annually.",
    whatsIncluded: [
      "Visual and function check of every extinguisher to BS 5306",
      "Weight and pressure check",
      "Service tag applied with next-due date",
      "Signed certificate confirming all units are serviceable",
      "Quote for any unit needing replacement",
    ],
    faqs: [
      { question: "Is fire extinguisher testing a legal requirement?", answer: "Yes, for HMOs and commercial premises, under the Regulatory Reform (Fire Safety) Order 2005. Extinguishers must be serviced and maintained to BS 5306." },
      { question: "How often do extinguishers need servicing?", answer: "Annually, by a competent engineer, in addition to your own visual checks in between." },
      { question: "What happens if an extinguisher fails?", answer: "It's tagged as out of service and we quote for a replacement — the certificate lists exactly which units passed and which didn't." },
      { question: "Do you also supply new extinguishers?", answer: "Yes — new extinguisher installation and fire blankets are available alongside testing if your property needs additional provision." },
    ],
    reviewTag: "general",
    indexable: true,
  },
  {
    key: "commercial-epc",
    name: "Commercial EPC",
    shortName: "Commercial EPC",
    icon: "leaf",
    urlPrefix: "/commercial-epc",
    bookingParam: "commercial-epc",
    priceFrom: COMMERCIAL_EPC_TABLE[0].price,
    priceTable: COMMERCIAL_EPC_TABLE,
    priceNote: "Priced by gross internal floor area. Properties over 850m² — call for quote.",
    deliveryText: "within 24 hours",
    legalBasis:
      "Energy Performance of Buildings Regulations 2012 and the Minimum Energy Efficiency Standards (MEES) Regulations — a valid EPC rated E or above is required before letting or selling a commercial property.",
    whoNeedsIt: "Landlords and owners of commercial premises, before letting, selling or major renovation, renewed every 10 years.",
    whatsIncluded: [
      "On-site assessment using SBEM methodology",
      "A–G energy rating for the building",
      "Recommendations report for cost-effective improvements",
      "Lodgement on the national EPC register",
      "MEES compliance guidance included",
    ],
    faqs: [
      { question: "Who needs a commercial EPC?", answer: "Any owner or landlord of a commercial property, before it's sold, let or built. Offices, retail units, restaurants and industrial units are all included." },
      { question: "How is a commercial EPC priced?", answer: "By gross internal floor area — larger premises take longer to assess and cost more. Properties over 850m² are quoted individually." },
      { question: "What is MEES for commercial property?", answer: "The Minimum Energy Efficiency Standards require a minimum E rating to let a commercial property. A rating of F or G is unlawful to let without a registered exemption." },
      { question: "How long does the survey take?", answer: "1–2 hours for smaller premises up to 500m²; larger or more complex buildings take proportionally longer." },
    ],
    reviewTag: "general",
    indexable: true,
  },
  {
    key: "asbestos-survey",
    name: "Asbestos Survey",
    shortName: "Asbestos Survey",
    icon: "search",
    urlPrefix: "/asbestos-survey",
    bookingParam: "asbestos-survey",
    priceFrom: getPriceForAsbestosSurvey(1),
    priceTable: ASBESTOS_SURVEY_TABLE,
    priceNote: "Management survey prices. Refurbishment and demolition surveys are quoted individually.",
    deliveryText: "within 24 hours",
    legalBasis:
      "Control of Asbestos Regulations 2012 — regulation 4 places a duty to manage asbestos on whoever is responsible for non-domestic premises, including the common parts of blocks of flats.",
    whoNeedsIt: "Landlords responsible for common parts of blocks of flats, and anyone planning renovation work on a pre-2000 property.",
    whatsIncluded: [
      "Sampling of suspected asbestos-containing materials",
      "Accredited laboratory analysis",
      "Written management survey report",
      "Asbestos register documenting location and condition",
      "Guidance on managing or removing any materials found",
    ],
    faqs: [
      { question: "Do landlords have to get an asbestos survey?", answer: "Landlords responsible for common parts of blocks of flats have a duty to manage asbestos under the Control of Asbestos Regulations 2012, which normally requires a survey. For a single let, a survey is strongly advisable before any works." },
      { question: "What's the difference between a management and refurbishment survey?", answer: "A management survey locates asbestos that could be disturbed during normal occupation. A refurbishment and demolition survey is more intrusive and needed before building work." },
      { question: "Which properties are likely to contain asbestos?", answer: "Any building constructed or refurbished before 2000. Common locations include textured ceiling coatings, floor tiles, pipe lagging and boiler flues." },
      { question: "Is asbestos dangerous if left alone?", answer: "Asbestos in good condition that isn't disturbed is generally low risk. The danger comes from damage, drilling or removal releasing fibres — which is why surveying before any work matters." },
    ],
    reviewTag: "asbestos",
    indexable: true,
  },
  {
    key: "legionella-risk-assessment",
    name: "Legionella Risk Assessment",
    shortName: "Legionella",
    icon: "droplet",
    urlPrefix: "/legionella-risk-assessment",
    bookingParam: "legionella",
    priceFrom: LEGIONELLA_PRICES.standard,
    deliveryText: "within 48 hours",
    legalBasis:
      "Health and Safety at Work etc. Act 1974 and COSHH 2002 require a water system risk assessment, with ACoP L8 as the approved code of practice. There is no statutory requirement for an annual test certificate or a fixed review interval.",
    whoNeedsIt: "Every landlord has a duty to assess legionella risk; a professional assessment is the safer option for HMOs and larger or more complex water systems.",
    whatsIncluded: [
      "Full inspection of the property's water system",
      "Identification of legionella risk factors — stored water, dead legs, temperature",
      "Written risk assessment with an action plan",
      "Control measure recommendations",
      "Report suitable as evidence of compliance",
    ],
    faqs: [
      { question: "Is a legionella test certificate a legal requirement?", answer: "No — HSE guidance states there is no requirement for landlords to obtain a 'legionella test certificate'. What's required is a risk assessment under the Health and Safety at Work etc. Act 1974 and COSHH 2002." },
      { question: "Can I do my own legionella risk assessment?", answer: "For a simple domestic let, HSE says most landlords can assess the risk themselves without formal training. For HMOs or more complex water systems, a professional assessment is the safer, more defensible option." },
      { question: "How often does it need reviewing?", answer: "There's no statutory interval — HSE says review it periodically. In practice, review after any change to the water system, after works, or on a change of occupancy." },
      { question: "What if I ignore the risk and there's an outbreak?", answer: "That's the real exposure — if someone contracts Legionnaires' disease and you can't show you assessed and controlled the risk, you're exposed under health and safety law. A written, dated assessment is your evidence." },
    ],
    reviewTag: "general",
    indexable: true,
  },
];

export function getLocationService(key: string): LocationService | null {
  return LOCATION_SERVICES.find((s) => s.key === key) ?? null;
}

/**
 * Owner decision: a "general"-tagged reviews section must use a company-level
 * heading, never a service-specific one — only a heading naming the service
 * when every review shown is actually tagged for that service.
 */
export function reviewsHeadingForService(service: LocationService): string {
  return service.reviewTag === "general"
    ? "What London landlords say about My Landlord Certificate"
    : `What London landlords say about our ${service.shortName}`;
}

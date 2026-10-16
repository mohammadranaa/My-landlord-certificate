import type { BoroughLocal } from "./types";

export const newham: BoroughLocal = {
  slug: "newham",
  checkedOn: "2026-10-16",
  council: {
    name: "Newham Council",
    housingUrl: "https://www.newham.gov.uk/landlords-newham/maintaining-good-standards-rented-property-landlords",
    licensingUrl: "https://www.newham.gov.uk/landlords-newham/rented-property-licensing",
  },
  licensing: [
    {
      name: "Designation of an Area for Selective Licensing No.1 2023",
      type: "Selective",
      area: "22 of 24 wards: all except Royal Victoria and Stratford Olympic Park",
      appliesTo:
        "Every privately rented home that is not an HMO, whatever its size or occupation, including homes let to one household or to two unrelated sharers",
      period: "1 June 2023 to 31 May 2028",
      status: "In force",
    },
    {
      name: "Designation for Additional Licensing of HMOs No.1 2023",
      type: "Additional HMO",
      area: "22 of 24 wards: all except Royal Victoria and Stratford Olympic Park",
      appliesTo:
        "HMOs of 3 or 4 people forming 2 or more households. Does not cover section 257 converted blocks of flats",
      period: "1 January 2023 to 31 December 2027",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough, including Royal Victoria and Stratford Olympic Park",
      appliesTo: "HMOs shared by 5 or more people forming 2 or more households",
      period: "National scheme, no end date",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Households renting privately", value: "38.5% (London 30.0%)", source: "Census 2021" },
    { label: "Households in terraced houses", value: "31.3% (London 21.3%)", source: "Census 2021" },
    { label: "Homes built before 1919", value: "37.0% (London 29.1%)", source: "VOA 2025" },
    { label: "Homes built in 2000 or later", value: "28.8% (London 17.9%)", source: "VOA 2025" },
  ],
  overview: [
    "At the 2021 Census, 44,479 of Newham's 115,511 households rented from a private landlord: 38.5%, against 30.0% across London. That put private renting ahead of owner-occupation, which stood at 30.8% here and 45.2% London-wide.",
    "Licensing reaches most of those lets: in 22 of the borough's 24 wards, selective licensing covers any private rental that is not an HMO, whatever its size. Additional licensing covers HMOs of three or four people there. Only Royal Victoria and Stratford Olympic Park sit outside both designations, and mandatory HMO licensing still applies there.",
    "The council calls the current designations its third five-year term. In its own words, it was the first authority in England to license all private lets without an exemption, from January 2013. Applications go through a My Newham account and cannot proceed until a gas safety certificate, an EICR and an EPC have been uploaded.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Newham: a \"satisfactory\" report for the licence",
      body: [
        "Newham's licence condition 22 asks for more than a current report: the EICR must be \"satisfactory\", and the council can demand it within 28 days. A report that still shows an unresolved C1 or C2 code does not meet that wording, so get the remedial work certified and keep the paperwork with the report.",
        "In every ward except Royal Victoria and Stratford Olympic Park, selective licensing brings that condition to nearly every private let, family homes and two-person shares included, not only HMOs. The online application goes no further until the EICR is uploaded, though a photo or scan of it is accepted.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety in Newham: where the licence condition applies",
      body: [
        "Where there is gas, Newham's licence condition 20 asks for more than a record on file. Each occupier must get a copy at the start of their occupation, so a certificate that lapses between tenancies leaves the incoming tenant without a valid one on day one. The council can also demand a copy within 28 days.",
        "The condition stops at two ward boundaries. In Royal Victoria and Stratford Olympic Park, only mandatory HMOs need a Newham licence, so a family let there carries the national gas duty but no licence condition.",
      ],
    },
    epc: {
      heading: "EPCs in Newham: the licence fee, MEES checks and Article 4 areas",
      body: [
        "Newham's licence application asks for the EPC rating and its reference number, and the rating can change the fee. An accredited licence holder whose property has an EPC of C or better gets a further discount. C or better is also a condition of the reduced fee for homes being let privately for the first time.",
        "Newham says it is investigating potential MEES breaches, and that continuing to let an F or G home can bring a compliance notice and a penalty. Reaching E does not clear the landlord of an excess-cold hazard under the HHSRS, the council adds.",
        "Some upgrades are restricted in Forest Gate and Manor Park. Article 4 Directions in the Durham Road, Romford Road and Woodgrange conservation areas bring replacement windows, doors and roof materials, and wall cladding, under consent. An EPC recommendation of new glazing or external wall insulation there therefore needs approval before any work is priced.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Newham: an HMO licence duty, not a selective one",
      body: [
        "Newham's selective and HMO licence conditions share their numbering, but condition 35 differs: in the selective conditions it reads \"Not Used\". For HMOs, including three- and four-person shares added by additional licensing, it requires a fire risk assessment under the Regulatory Reform (Fire Safety) Order 2005 and action on its findings. The assessment, plus alarm, emergency lighting and fire-fighting equipment certificates, must be provided within 28 days of a demand.",
        "That matters for converted blocks, because Newham's additional scheme does not cover section 257 buildings. In the 22 wards, a converted block of single-household flats is licensed flat by flat under the selective scheme, so condition 35 does not reach it. The Fire Safety Order still applies to the block's common parts; the licence simply does not ask for the assessment.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Newham: a licence condition with no set interval",
      body: [
        "Newham's licence condition 21 requires a test report for every electrical appliance the landlord supplies, provided within 28 days of a demand, but it sets no test interval. The date on the report is yours to defend.",
        "Newham's enforcement policy effective from 1 May 2026 lists appliance test certificates among the licence-condition items in its penalty matrix. Breaching a licence condition can bring a civil penalty of up to £40,000.",
        "The condition appears in both licence types, so a cooker or washing machine left in a selectively licensed family home is covered as well as those in an HMO.",
      ],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Newham",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Tracing electrical faults in Newham lets",
      body: [
        "Newham publishes a visual electrical checklist and guidance for landlords, alongside its property inspection checklist. It suggests inspecting a family house about three times a year, and HMOs more often. A fault spotted on one of those visits, such as a tripping circuit or a scorched socket, is worth tracing then rather than leaving it for the next EICR.",
      ],
    },
    "fuse-box-installation": {
      heading: "Consumer unit upgrades in Newham",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Newham HMOs: on the application and on demand",
      body: [
        "Newham's HMO fire guidance ties emergency lighting to the building. In a bedsit-type HMO of three or four storeys, it will be required on an escape route with no natural or borrowed light. In smaller bedsit HMOs and in three- or four-storey shared houses, it may be.",
        "Where a property has mains-wired, interlinked fire detection, the licence application asks for a Fire Alarm/Emergency Lighting test certificate to be uploaded. After an HMO is licensed, the council can ask for emergency lighting inspection reports and test certificates within 28 days.",
        "Newham's document audits also list the fire alarm and emergency lighting test certificate among the papers it requests, so a current one serves the application, a demand and an audit.",
      ],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Newham",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler replacements in Newham: the first-year certificate",
      body: [
        "Newham's licence condition 20 accepts a new boiler's Gas Safe installation certificate in place of a gas safety certificate while the boiler is under 12 months old. Diary the first annual safety check from the installation date, because once that year is up the installation certificate no longer satisfies the condition.",
      ],
    },
    "fire-safety-certificate": {
      heading: "Smoke and CO alarms in Newham: every storey, both licence types",
      body: [
        "Newham's licence application asks how many smoke alarms are in common parts, a question put to single-family homes as well as HMOs. In a document audit, Newham asks for the fire alarm test certificate and says this includes battery smoke and CO alarms. Keep a dated record even for a simple battery setup.",
        "Conditions 30 to 34 apply to Newham's selective licences as well as its HMO licences, and require a smoke alarm on every storey with living accommodation. They also require a carbon monoxide alarm in any room used wholly or partly as living accommodation that contains a solid fuel burning appliance. Both must be kept working, with a declaration of their condition and position on demand.",
      ],
    },
    "fire-alarm-installation": {
      heading: "Fire alarm grades for Newham HMOs",
      body: [
        "Newham's online licence application asks whether fire detection is mains-wired and interlinked, and its HMO fire leaflet sets out the system by property type. A bedsit HMO of up to two storeys needs a Grade D1, Category LD1 mains-wired interlinked system. At three or four storeys it rises to Grade A, Category LD1, with a control panel and manual call points, while a shared house needs Grade D1, Category LD2.",
        "Match your layout to one of those examples before you apply, so your answer on the form describes the system fitted.",
      ],
    },
    "fire-door-certificate": {
      heading: "Fire doors in Newham HMOs: the standard by HMO type",
      body: [
        "Newham's licence application asks whether kitchens have 30-minute fire doors, and its HMO fire guidance sets the door standard by HMO type. In bedsit-type HMOs, every door onto the escape route must be a 30-minute fire door with approved self-closers, smoke seals and intumescent strips, and bedroom doors need thumb-turn locks.",
        "In a shared house of three or four storeys, doors onto the protected route must give 30 minutes' protection. Self-closers, seals and strips are required where risk rooms have smoke or heat detectors. A shared house of up to two storeys needs close-fitting solid timber or panelled doors, not hollow \"eggbox\" types, and keyless exit.",
        "A door survey records which of those standards each door meets, and what needs replacing before the council inspects.",
      ],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguishers and blankets in Newham HMOs",
      body: [
        "Newham's licence application asks whether common stairways have extinguishers to BS EN 3, serviced every year to BS 5306-3, and whether kitchens have fire blankets to BS EN 1869. For a licensed HMO, the council can also demand test certificates for fire-fighting equipment within 28 days, so keep the annual service record with your licence papers.",
      ],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Newham",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Newham: check the build date first",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Newham",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "Will Newham check who carried out my EICR?",
        answer:
          "It can. Condition 22 says that if your electrician is not registered with ECA, NICEIC, ELECSA, NAPIT or another Registered Competent Person scheme, you must also prove their qualifications. The council says it will not contact the electrician on your behalf, so keep the registration details with the report.",
      },
      {
        question: "What is the maximum penalty for EICR failures in Newham?",
        answer:
          "Up to £40,000 per breach of the Electrical Safety Standards Regulations 2020. Separately, Newham's enforcement policy, effective from 1 May 2026, sets civil penalties of up to £40,000 for breaching licence conditions, which include the EICR, or for failing to license. Some older council pages show a lower figure; the 2026 policy is the current one.",
      },
    ],
    "gas-safety-certificate": [
      {
        question: "Can I renew a Newham licence, or do I have to reapply?",
        answer:
          "Renewal is open only if the original application was made after 15 May 2023 and the licence has been issued. The same applicant must also still hold it, with access to the same My Newham account. Otherwise a new application is needed once the current licence expires.",
      },
    ],
    epc: [
      {
        question: "Who handles EPC and MEES questions at Newham Council?",
        answer:
          "The council's Energy Efficiency Team, at EPC@newham.gov.uk. Licensing questions, including how an EPC rating affects the licence fee, go to the property licensing team at propertylicensing@newham.gov.uk or 020 3373 1950. Problems with a My Newham account go to the council switchboard on 020 8430 2000 rather than the licensing team.",
      },
    ],
    "fire-risk-assessment": [
      {
        question: "Do I need planning permission to turn a Newham house into a small HMO?",
        answer:
          "Usually, yes: an Article 4 Direction in force since 31 July 2013 removes the right to change a house to a small HMO without planning permission. It applies across the borough except the area formerly controlled by the London Legacy Development Corporation. Newham warns that a licence fee is not refunded if HMO planning permission is refused.",
      },
    ],
    "pat-testing": [
      {
        question: "What does a Newham document audit ask for?",
        answer:
          "On safety, Newham asks for the gas safety certificate, the fire alarm and emergency lighting test certificate, the EICR and the electrical appliance test certificate. It also lists the written statement of terms, inspection and pest control records, deposit paperwork, management arrangements, references and occupant details. The licence holder stays responsible even when an agent manages the property, so make sure you can reach the agent's copies.",
      },
    ],
    "commercial-eicr": [
      {
        question: "Does Newham's additional scheme cover converted blocks of flats?",
        answer:
          "No: the additional HMO designation does not apply to section 257 converted blocks. Within the 22 designated wards, a flat in such a block that is let to a single household falls under selective licensing instead. Newham charges a lower fee for each further flat when one owner licenses several in the same block.",
      },
    ],
    "fuse-box-installation": [
      {
        question: "Do I need to tell Newham before electrical works in a licensed property?",
        answer:
          "Only if the works change the layout. A licence holder must tell the property licensing team in writing at least 28 days before creating or removing any room, bathroom, WC or kitchen. A consumer unit change alone is not on that list, but a refit that includes one and adds or removes such a room still needs the notice.",
      },
    ],
    "emergency-lights-certificate": [
      {
        question: "How long does Newham take to decide a licence application?",
        answer:
          "The council aims to say whether it will grant or refuse within ten weeks of a complete, valid application and fee, followed by a 21-day consultation on the draft licence. There is no tacit consent, so you do not hold a licence until it is granted. Where detection is mains-wired, uploading the test certificate with the application helps it count as complete.",
      },
    ],
    "fire-alarm-installation": [
      {
        question: "Where can I find Newham's HMO fire guidance?",
        answer:
          "On the council's pages on maintaining good standards in rented property, as the leaflet \"Fire Safety guidance in HMO properties\". It is based on LACORS guidance and BS 5839-6:2019, so an installer working to that standard can match its grades and categories to your layout.",
      },
    ],
    "fire-door-certificate": [
      {
        question: "What happens if Newham inspects my HMO?",
        answer:
          "The council inspects all parts of the property to check the application details and the licence conditions. Newham says it is carrying out extensive compliance survey work, and a licensed property can be selected for an inspection. Its audit page says a breach can cut a licence from five years to one, which brings the next application round much sooner.",
      },
    ],
    "fire-safety-certificate": [
      {
        question: "Do Newham HMO licences cover upholstered furniture?",
        answer:
          "Yes. HMO condition 36 requires upholstered furniture to meet fire safety legislation, and the licence holder must give the council a declaration within 28 days of a demand. Keep a note of the labels on each upholstered item you supply so the declaration can be completed quickly.",
      },
    ],
  },
  sources: [
    { label: "Newham Council: Rented property licensing", url: "https://www.newham.gov.uk/landlords-newham/rented-property-licensing" },
    {
      label: "Newham Council: Designated wards",
      url: "https://www.newham.gov.uk/landlords-newham/rented-property-licensing/7",
    },
    {
      label: "Newham Council: Mandatory and additional HMO licensing",
      url: "https://www.newham.gov.uk/landlords-newham/rented-property-licensing/8",
    },
    {
      label: "Newham Council: Licence fees",
      url: "https://www.newham.gov.uk/landlords-newham/rented-property-licensing/9",
    },
    {
      label: "Newham Council: Selective licensing designation",
      url: "https://www.newham.gov.uk/landlords-newham/rented-property-licensing/11",
    },
    {
      label: "Newham Council: Additional HMO licensing designation",
      url: "https://www.newham.gov.uk/landlords-newham/rented-property-licensing/12",
    },
    {
      label: "Newham Council: Document audits",
      url: "https://www.newham.gov.uk/landlords-newham/rented-property-licensing/13",
    },
    {
      label: "Newham Council: Compliance inspections",
      url: "https://www.newham.gov.uk/landlords-newham/rented-property-licensing/14",
    },
    {
      label: "Newham Council: Planning permission and licensing",
      url: "https://www.newham.gov.uk/landlords-newham/rented-property-licensing/17",
    },
    {
      label: "Newham Council: Property licensing guide for landlords (2024), licence conditions",
      url: "https://www.newham.gov.uk/downloads/file/8295/property-licensing-guide-for-landlords-vfinal-2024",
    },
    {
      label: "Newham Council: Fire safety guidance in HMO properties",
      url: "https://www.newham.gov.uk/downloads/file/6607/fire-safety-advice-for-landlords-newham-branded-",
    },
    {
      label: "Newham Council: Maintaining good standards in rented property",
      url: "https://www.newham.gov.uk/landlords-newham/maintaining-good-standards-rented-property-landlords",
    },
    {
      label: "Newham Council: Private housing enforcement policy (from 1 May 2026)",
      url: "https://www.newham.gov.uk/downloads/file/10843/post-may-26-enforcement-policy",
    },
    {
      label: "Newham Council: Property licensing consultation proposal (November 2021)",
      url: "https://www.newham.gov.uk/downloads/file/4330/rpl-consultation-proposal-novv21-091121",
    },
    {
      label: "Newham Council: Minimum Energy Efficiency Standards",
      url: "https://www.newham.gov.uk/housing-homes-homelessness/minimum-energy-efficiency-standards-mees",
    },
    {
      label: "Newham Council: Conservation areas and listed buildings",
      url: "https://www.newham.gov.uk/planning-development-conservation/conservation-areas-listed-buildings-newham",
    },
    {
      label: "Newham Council: Conservation area Article 4 Directions",
      url: "https://www.newham.gov.uk/planning-development-conservation/conservation-areas-listed-buildings-newham/2",
    },
    {
      label: "Newham Council: HMO Article 4 Direction",
      url: "https://www.newham.gov.uk/planning-development-conservation/planning-policy-local-plan/4",
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
      "Newham's housing is split between old and new: VOA figures put 37.0% of homes before 1919 and 28.8% from 2000 onwards, both well above London's 29.1% and 17.9%. Terraced houses hold 31.3% of households against 21.3% London-wide, and purpose-built flats 43.6% (Census 2021). The council said in 2021 that HMOs were distributed across all wards.",
    landlordContext:
      "Private renting is Newham's largest tenure, at 38.5% of households (Census 2021), and the council licenses nearly every private let in 22 of its 24 wards.",
  },
};

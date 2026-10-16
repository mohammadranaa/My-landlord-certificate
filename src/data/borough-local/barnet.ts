import type { BoroughLocal } from "./types";

export const barnet: BoroughLocal = {
  slug: "barnet",
  checkedOn: "2026-10-16",
  council: {
    name: "Barnet Council",
    housingUrl: "https://www.barnet.gov.uk/housing/private-housing/landlords-barnet/landlord-updates",
    licensingUrl: "https://www.barnet.gov.uk/housing/private-housing/houses-multiple-occupation",
  },
  licensing: [
    {
      name: "London Borough of Barnet Designation for an Area for Additional Licensing of Houses in Multiple Occupation 2022",
      type: "Additional HMO",
      area: "Whole borough",
      appliesTo:
        "HMOs with 3 or more people from 2 or more households; and section 257 converted blocks of 3 or more storeys with at least 3 flats, all privately rented and in the same ownership or control, not built to the 1991 Building Regulations or later",
      period: "27 October 2022 to 27 October 2027",
      status: "In force",
    },
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole borough",
      appliesTo:
        "HMOs with 5 or more people from 2 or more households sharing a kitchen, bathroom or WC, including converted buildings that mix self-contained flats and shared units",
      period: "National scheme, no end date",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Households renting privately", value: "32.7% (London 30.0%)", source: "Census 2021" },
    { label: "Homes built 1919 to 1939", value: "33.8% (London 22.2%)", source: "VOA 2025" },
    { label: "Households in semi-detached houses", value: "27.5% (London 18.6%)", source: "Census 2021" },
    { label: "Conservation areas", value: "16", source: "Barnet Council" },
  ],
  overview: [
    "Owner-occupation is higher in Barnet than across London: 52.7% of households owned their home in Census 2021, against 45.2%, while social renting was 13.5%, against 23.1%.",
    "Barnet first licensed smaller shared homes from 5 July 2016. That scheme ended in July 2021, and the current one started on 27 October 2022 after the August to November 2021 consultation. As of October 2026, no consultation on renewing it had been found.",
    "Barnet has consulted on selective licensing for some wards. The council approved schemes in 2022 and, subject to government confirmation, in December 2023, but neither started. In April 2025 the council said it had no selective scheme running; check the council's website for the current position.",
    "Planning is a separate test. A borough-wide Article 4 direction has applied since 29 May 2016, so turning a family house into a small HMO for three to six sharers needs planning permission anywhere in Barnet. The licence application asks for evidence of planning permission or existing lawful use.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in Barnet: where the pre-1918 houses are",
      body: [
        "Barnet's oldest homes cluster in a few areas. Using 2015 VOA data, the council found the most pre-1939 properties in Childs Hill, almost 6,000, mostly built before 1918. High Barnet, East Finchley, Childs Hill and the former Coppetts ward, now part of Friern Barnet, had the most homes built before 1900.",
        "If you let several properties across the borough, those are the areas where the buildings are oldest, so start a round of inspections there.",
        "For a licensed HMO, licence condition 7 lets the council ask in writing for the current report and allows 14 days to send it. The national regulations allow only 7 days from a council's written request, so keep a copy ready to send at once.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety in Barnet: under 12 months old on the day it is sent",
      body: [
        "Barnet counts a gas safety certificate's age on the day it reaches the council, not the day of the check. HMO licence condition 3 requires a copy of the current certificate to be submitted every year, no more than 12 months old at the date of submission. A copy sent late in its year can already be out of date when it arrives, so send it soon after each annual check.",
      ],
    },
    epc: {
      heading: "EPCs in Barnet: F and G lets from Childs Hill to Colindale",
      body: [
        "Barnet Council has counted 1,298 privately rented homes in the borough with an EPC rating of F or G. Childs Hill had the most, 281, followed by Brunswick Park, East Finchley, Burnt Oak, Colindale North, Cricklewood and Colindale South.",
        "In non-HMO private lets the council inspected from 2020 to 2025, excess cold, and damp and mould growth, were the largest category 1 hazards, together making up 27% of all hazards found.",
        "Before acting on an EPC's recommendations in Hampstead Garden Suburb, Mill Hill or another conservation area, check what consent is needed. The council says approvals for energy efficiency works must be in place before work starts. Ten of its conservation areas have Article 4 directions removing some permitted development rights.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in Barnet: the Edgware bedsit case",
      body: [
        "In February 2025 a landlord was ordered to pay £37,000 in fines and costs. Council inspectors had found 18 people, including children and infants, in a three-bedroom linked terraced house in Fairmead Crescent, Edgware, converted into eight unlicensed bedsits.",
        "The council reported no safe means of escape in case of fire and an inadequate fire alarm system. The landlord was convicted of nine offences, including failing to license and management and safety offences.",
        "Where a small house has been split into bedsits, the assessment should start with the escape route. How many rooms open onto the one staircase, and can each occupant get out without passing through another room?",
      ],
    },
    "pat-testing": {
      heading: "PAT testing in Barnet: two-year and four-year intervals",
      body: [
        "Barnet's HMO licence conditions set two PAT intervals instead of one. Portable equipment supplied by the landlord should be tested every 2 years, and fridges, washing machines and electric fires every 4 years.",
        "A shared house supplied with a kettle, a toaster and a washing machine therefore runs on two cycles; testing everything at the two-year mark keeps them together.",
      ],
    },
    "commercial-eicr": {
      heading: "Commercial EICRs in Barnet",
      body: [],
    },
    "electrical-diagnostic": {
      heading: "Electrical fault finding in Barnet",
      body: [],
    },
    "fuse-box-installation": {
      heading: "Consumer unit upgrades in Barnet",
      body: [],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in Barnet",
      body: [],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in Barnet",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler installation in Barnet",
      body: [],
    },
    "fire-safety-certificate": {
      heading: "Fire safety certificates in Barnet",
      body: [],
    },
    "fire-alarm-installation": {
      heading: "Fire alarms in Barnet: the council's guidance on bedsits",
      body: [
        "Barnet's landlord safety guidance says houses in multiple occupation such as bedsits need additional alarms even where no licence is required. An unlicensed bedsit house is not exempt from that advice.",
      ],
    },
    "fire-door-certificate": {
      heading: "Fire door inspections in Barnet",
      body: [],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguisher testing in Barnet",
      body: [],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in Barnet",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in Barnet",
      body: [],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in Barnet",
      body: [],
    },
  },
  serviceFaqs: {
    "gas-safety-certificate": [
      {
        question: "Can I still apply for a Barnet HMO licence on paper?",
        answer:
          "No. Paper applications stopped after 31 October 2024, so you apply online. Where relevant, the form needs a gas safety certificate dated within 12 months, an EICR, and fire alarm and emergency lighting test certificates. It also needs, where relevant, a PAT certificate, an EPC, a floorplan, evidence of planning permission or existing lawful use, and details of fire precautions. The fee is paid in two stages, the second straight after the initial inspection.",
      },
    ],
    epc: [
      {
        question: "Is Childs Hill a hotspot for rental complaints as well as F and G ratings?",
        answer:
          "Nearly: it comes second to Hendon. Between April 2020 and March 2025 the council received 8,491 complaints about privately rented homes, excluding HMO-specific ones. That was 13% more than in the previous five years, with 657 from Hendon and 603 from Childs Hill. Inspections of non-HMO lets over 2020 to 2025 found 1,581 hazards, 986 of them category 1 or high category 2.",
      },
    ],
    "fire-risk-assessment": [
      {
        question: "Did tower blocks feature in Barnet's fire hazard findings?",
        answer:
          "Yes. The council's February 2026 licensing report says its hazard figures for Barnet Vale ward were skewed by two tower blocks with category 1 fire hazards. It says the work there is finished or under way.",
      },
    ],
    "pat-testing": [
      {
        question: "Do Barnet's PAT intervals apply to mandatory HMO licences too?",
        answer:
          "Yes. The council's HMO licence conditions are one set for mandatory and additional licences, so the 2-year and 4-year schedule applies to both. The additional designation ends on 27 October 2027 unless revoked earlier, and as of October 2026 no consultation on renewing it had been found. Mandatory HMO licensing is national and does not end with it.",
      },
    ],
  },
  sources: [
    {
      label: "Barnet Council: Houses in multiple occupation and property licensing",
      url: "https://www.barnet.gov.uk/housing/private-housing/houses-multiple-occupation",
    },
    {
      label: "Barnet Council: Apply for an HMO licence",
      url: "https://www.barnet.gov.uk/housing/private-housing/property-licensing/hmo-licence-application/apply-hmo-licence",
    },
    {
      label: "Barnet Council: What are houses in multiple occupation (HMOs)",
      url: "https://www.barnet.gov.uk/housing/private-housing/property-licensing/what-are-houses-multiple-occupation-hmos",
    },
    {
      label: "Barnet Council: Changes to property licensing",
      url: "https://www.barnet.gov.uk/housing/private-housing/property-licensing/changes-property-licensing-including-houses-multiple",
    },
    {
      label: "Barnet Council: HMO register",
      url: "https://www.barnet.gov.uk/housing/private-housing/property-licensing/houses-multiple-occupation-hmo-register",
    },
    {
      label: "Barnet Council: Managing a house in multiple occupation",
      url: "https://www.barnet.gov.uk/housing/private-housing/property-licensing/managing-house-multiple-occupation-hmo",
    },
    {
      label: "Barnet Council: Planning permission for an HMO",
      url: "https://www.barnet.gov.uk/housing/private-housing/property-licensing/planning-permission-hmo",
    },
    {
      label: "Barnet Council: Small houses in multiple occupation (Article 4 direction)",
      url: "https://www.barnet.gov.uk/planning-and-building-control/planning-policies-and-local-plan/small-houses-multiple-occupation-hmo",
    },
    {
      label: "Barnet Council: Additional HMO licensing designation 2022",
      url: "https://admin.barnet.gov.uk/sites/default/files/2022-07/Designation%20for%20Additional%20Licensing%20FINAL.pdf",
    },
    {
      label: "Barnet Council: Conditions for licensed properties",
      url: "https://admin.barnet.gov.uk/sites/default/files/2022-07/Conditions%20for%20Licenced%20Properties%20-%20Final.pdf",
    },
    {
      label: "Barnet Council: Fire, gas and electrical safety for landlords",
      url: "https://www.barnet.gov.uk/housing/private-housing/landlords-barnet/fire-gas-and-electrical-safety",
    },
    {
      label: "Barnet Council: Energy efficiency for landlords",
      url: "https://www.barnet.gov.uk/housing/private-housing/landlords-barnet/energy-efficiency",
    },
    {
      label: "Barnet Council: Landlord updates and forum",
      url: "https://www.barnet.gov.uk/housing/private-housing/landlords-barnet/landlord-updates",
    },
    {
      label: "Barnet Council: Conservation areas",
      url: "https://www.barnet.gov.uk/planning-and-building-control/conservation-and-heritage/conservation-areas",
    },
    {
      label: "Barnet Council Cabinet: Private Sector Housing Licensing Scheme report (2 February 2026)",
      url: "https://barnet.moderngov.co.uk/documents/s93732/Private%20Sector%20Housing%20Licensing%20Scheme.pdf",
    },
    {
      label: "Barnet Council news: Rogue landlord fined after 18 people found living in 3-bed house (February 2025)",
      url: "https://www.barnet.gov.uk/news/rogue-landlord-fined-after-18-people-found-be-living-3-bed-house",
    },
    { label: "ONS Census 2021: TS054 Tenure (Nomis)", url: "https://www.nomisweb.co.uk/datasets/c2021ts054" },
    { label: "ONS Census 2021: TS044 Accommodation type (Nomis)", url: "https://www.nomisweb.co.uk/datasets/c2021ts044" },
    {
      label: "Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020, reg 3",
      url: "https://www.legislation.gov.uk/uksi/2020/312/regulation/3",
    },
    {
      label: "VOA: Council Tax Stock of Properties 2025",
      url: "https://www.gov.uk/government/statistics/council-tax-stock-of-properties-2025",
    },
  ],
  contextOverride: {
    propertyContext:
      "Little of Barnet's housing predates 1900: 6.5% of council tax properties, against 20.9% across London, while 21.2% were built in the 1930s alone (VOA 2025). Detached houses hold 10.1% of households, against 6.1% London-wide, purpose-built flats 36.6% and terraced houses only 14.9%. A further 1.3% live in a commercial building, such as a flat over a shop (Census 2021).",
    landlordContext:
      "In 22 of Barnet's 24 wards at least a fifth of homes are privately rented, rising to 48% in Golders Green (Census 2021).",
  },
};

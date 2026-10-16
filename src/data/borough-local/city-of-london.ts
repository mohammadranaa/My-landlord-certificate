import type { BoroughLocal } from "./types";

export const cityOfLondon: BoroughLocal = {
  slug: "city-of-london",
  checkedOn: "2026-10-16",
  council: {
    name: "City of London Corporation",
    housingUrl:
      "https://www.cityoflondon.gov.uk/services/environmental-health/housing-standards/private-rented-accommodation",
    licensingUrl:
      "https://www.cityoflondon.gov.uk/services/licensing/other-licence-and-business-permit-types/houses-in-multiple-occupation-hmo",
  },
  licensing: [
    {
      name: "Mandatory HMO licensing",
      type: "Mandatory HMO",
      area: "Whole City",
      appliesTo:
        "Homes shared by 5 or more people forming 2 or more households, including homes above or below commercial floors. A shared flat in a purpose-built block of 3 or more self-contained flats is outside this scheme",
      period: "Current definition since 1 October 2018 (SI 2018/221); in force as of October 2026",
      status: "In force",
    },
  ],
  stockFacts: [
    { label: "Households renting privately", value: "48.3% (London 30.0%)", source: "Census 2021" },
    { label: "Households in purpose-built flats", value: "87.0% (London 40.3%)", source: "Census 2021" },
    { label: "Homes built 1955 to 1982", value: "41.4% (London 17.5%)", source: "VOA 2025" },
    {
      label: "Conservation areas",
      value: "28, with more than 600 listed buildings and structures",
      source: "City of London Corporation",
    },
  ],
  overview: [
    "The City's housing authority is the City of London Corporation, not a borough council. Its Environmental Health team handles conditions in private rented homes and HMO licensing queries.",
    "Private renting is the City's largest tenure: 48.3% of households at the 2021 Census, up from 35.9% in 2011. The Corporation's 2023 housing needs assessment calls this the highest recorded increase in England.",
    "The City licenses HMOs under the national mandatory scheme, which leaves out shared flats in purpose-built blocks of three or more flats. With 87.0% of households in purpose-built flats, many City flat shares need no licence even with five or more sharers. The Corporation's HMO standards still apply to them.",
    "For a single-household flat, plan for an EICR, an EPC and a gas safety record if the flat has gas appliances. On the Barbican, also register the letting with the Estate Office and read your block's published fire risk assessment. For an HMO, the licence form adds PAT, fire alarm and emergency lighting reports.",
  ],
  serviceAngles: {
    eicr: {
      heading: "EICRs in the City of London: post-war blocks and estate electrics",
      body: [
        "City housing comes largely from one building period. VOA figures for 2025 show 32.9% of council tax properties were built between 1965 and 1972, against 5.6% across London. The Barbican's flats went up between 1963 and 1982.",
        "On the Barbican, the Corporation runs its own electrical safety programme for communal electrical systems, smoke alarms and CO detectors. As landlord, your EICR covers the installation inside the let flat.",
        "In blocks such as Gilbert House, Defoe House and Thomas More House, the Corporation's asbestos data records asbestos insulation board lining the cupboards that hold consumer units. Tell the electrician before that cupboard is opened.",
        "If the flat is an HMO, licensed or not, the Corporation's standards require the installation to be tested at least every five years, with evidence supplied if the City asks.",
      ],
    },
    "gas-safety-certificate": {
      heading: "Gas safety in City flats: what the record covers",
      body: [
        "Most Barbican homes get background heat from the estate's shared electric underfloor system, so the boiler-centred check many landlords picture may not match the flat. The gas safety record covers the gas appliances the flat actually has; list them when you book.",
        "In a City HMO, licensed or not, the Corporation's HMO standards require a yearly check of every gas appliance by a Gas Safe registered engineer. The evidence goes to the City each year.",
      ],
    },
    epc: {
      heading: "EPCs in the City of London: shared heating and listed estates",
      body: [
        "Most Barbican homes take background heat from a communal electric underfloor system, switched on from October to April. A November 2024 City Surveyor report notes \"significant variations in thermal envelope and fabric efficiency across the estate\". It found earlier insulation options unsuitable because Building Regulations-compliant materials were lacking.",
        "Before acting on an EPC recommendation in a Barbican flat, note that alterations need the City's Landlord's Approval and may also need listed building consent.",
        "The same consent question can arise across the City's 28 conservation areas and more than 600 listed buildings and structures, so confirm a building's status before pricing upgrade works.",
      ],
    },
    "fire-risk-assessment": {
      heading: "Fire risk assessments in the City: block, flat or HMO",
      body: [
        "In a block of flats, the Fire Safety Order covers the structure, the common parts and the doors between each flat and those parts. It does not cover the inside of a single-household flat. With 87.0% of City households in purpose-built flats, that split decides who arranges which assessment.",
        "On the Barbican, the common-parts assessments are prepared for the Corporation, which publishes one for every block. A 2024 assessment of Cromwell Tower names an estates supervisor in the City's Department of Community and Children's Services as the responsible person.",
        "Your own assessment is needed if the flat is an HMO. The Corporation's standards say every HMO must have one, licensed or not, with fire safety following the LACORS Housing Fire Safety Guidance.",
      ],
    },
    "pat-testing": {
      heading: "PAT testing for City HMOs",
      body: [
        "The City's HMO licence form asks whether every electrical appliance you supply meets the Electrical Equipment (Safety) Regulations. It also asks for your latest PAT report from the last 12 months, where you have one. A recent test answers both questions with one document.",
      ],
    },
    "commercial-eicr": {
      heading: "Homes over shops and offices in the City",
      body: [
        "The Corporation's HMO guidance says licensing applies even where one or more storeys of the building are in commercial use. The application asks for plans of every floor, the non-residential ones included. Such buildings are a bigger part of the City's housing than of London's: 4.1% of City households live in a commercial building, against 1.4% across London.",
      ],
    },
    "electrical-diagnostic": {
      heading: "Electrical faults in City flats: check the shared heating first",
      body: [
        "In most Barbican flats the background heating is an estate-wide system that the Corporation runs from October to April. A cold floor in summer may not be a fault in the flat's own circuits, so rule that out before booking a diagnostic visit.",
      ],
    },
    "fuse-box-installation": {
      heading: "Consumer unit replacement in Barbican flats: asbestos and approval",
      body: [
        "On the Barbican, the Corporation's asbestos data records asbestos insulation board in the internal walls of the electrical riser cupboards that house consumer units. Blocks with this entry include Breton House, Bryer Court, Bunyan Court and Seddon House. The data is marked not exhaustive, and some block entries date from 2010.",
        "Replacing a board in one of those cupboards can disturb the lining. Alterations to a Barbican flat also need the City's Landlord's Approval and may need listed building consent, so check both before the work is booked.",
      ],
    },
    "emergency-lights-certificate": {
      heading: "Emergency lighting in City HMOs and estate blocks",
      body: [
        "Where a City HMO has emergency lighting, the Corporation's standards require it to be tested and maintained to British Standards, whether or not the HMO is licensed. If you do apply for a licence, the form asks for the latest BS 5266 test report.",
        "On the Barbican, the Corporation's fire safety page says escape routes are signposted and emergency lighting is tested regularly.",
      ],
    },
    "commercial-gas-safety-certificate": {
      heading: "Commercial gas safety in the City",
      body: [],
    },
    "boiler-installation": {
      heading: "Boiler and flue works on the Golden Lane Estate",
      body: [
        "The Golden Lane Estate was listed Grade II in 1997, with Crescent House at Grade II*. The Corporation publishes management guidelines and a residents' guide setting out which works need listed building consent, so check a new flue route against them before a replacement is agreed.",
      ],
    },
    "fire-safety-certificate": {
      heading: "Smoke and CO alarms in City flats",
      body: [
        "The Corporation's Barbican electrical safety programme covers smoke alarms and CO detectors as well as communal electrics. This is separate from your block's fire risk assessment. Ask the Barbican Estate Office which alarms in your flat the programme includes, and keep your own test record for any it does not.",
        "In a City HMO, the Corporation's standards also require supplied furniture to meet the Furniture and Furnishings (Fire) (Safety) Regulations.",
      ],
    },
    "fire-alarm-installation": {
      heading: "Fire alarm systems in City HMOs: what the form checks",
      body: [
        "The Corporation's HMO licence form goes through the alarm system part by part. It asks whether there is a fire alarm control panel, heat detectors in the kitchens, smoke detectors in rooms and common parts, and sounders on all levels. It also asks whether those run on batteries only.",
        "Its HMO standards list automatic fire detection among the likely measures. The floor plans sent with the application must mark each smoke detector, heat detector, call point and control panel, so plan the layout before you apply.",
      ],
    },
    "fire-door-certificate": {
      heading: "Fire doors in the City: flat entrances and HMO rooms",
      body: [
        "Flat entrance doors are where a block's fire duties reach the flat: the Fire Safety Order covers every door between a flat and the common parts. A 2024 assessment of the Barbican's Cromwell Tower rated it moderate risk, partly because flat entrance doors lacked effective self-closers and partly because of compartmentation defects in risers and flats. It notes a programme to replace the doors with certified FD60S door sets.",
        "Inside a City HMO, the Corporation's standards add fire doors on high-risk rooms. In a listed flat, check whether an original door needs consent before replacing it.",
      ],
    },
    "fire-extinguisher-testing": {
      heading: "Fire extinguishers in City HMO kitchens",
      body: [
        "The City's HMO standards list fire extinguishers and fire blankets among the equipment a kitchen should have, alongside extractor fans. The licence form asks whether blankets are in all kitchens or only shared ones, whether extinguishers are provided. It also asks whether that equipment has been inspected or serviced in the last 12 months.",
      ],
    },
    "commercial-epc": {
      heading: "Commercial EPCs in the City",
      body: [],
    },
    "asbestos-survey": {
      heading: "Asbestos surveys in the City: what the Barbican records show",
      body: [
        "On the Barbican, the Corporation's asbestos data records asbestos insulation board or asbestos heat shields under and around hobs and ovens, since replaced in some flats. The data is marked not exhaustive and parts of it date from 2010, so treat it as a starting point rather than a survey of your flat.",
        "For works in a Barbican flat that disturb asbestos, the Corporation asks for the contractor's hazardous waste carrier licence and handling that meets HSE requirements.",
      ],
    },
    "legionella-risk-assessment": {
      heading: "Legionella risk assessments in the City",
      body: [],
    },
  },
  serviceFaqs: {
    eicr: [
      {
        question: "What do I need to do before letting a Barbican flat?",
        answer:
          "Long leaseholders who sublet must register the letting with the City through the Barbican Estate Office, sending a copy of the tenancy agreement and a registration fee. The let must be residential and for at least 90 days, and the Corporation says the lease prohibits short-term holiday lets.",
      },
    ],
    "gas-safety-certificate": [
      {
        question: "Who do I contact at the City about a rented flat?",
        answer:
          "Environmental Health at the City of London Corporation, on 020 7606 3030 or the public protection email listed on its private rented accommodation page. The Corporation tells tenants to go to their landlord or letting agent first, so expect to hear from your tenant before the City is involved.",
      },
    ],
    epc: [
      {
        question: "Is the Barbican in a conservation area?",
        answer:
          "Yes. It lies in the Barbican and Golden Lane Conservation Area, designated in 2018. The estate itself was listed Grade II in 2001, and the Corporation publishes Barbican Estate Listed Building Management Guidelines, a supplementary planning document, for owners planning changes to their flats.",
      },
    ],
    "fire-risk-assessment": [
      {
        question: "Where can I read my Barbican block's fire risk assessment?",
        answer:
          "On the Corporation's Barbican Estate fire risk assessments page, which lists an assessment for each block. These cover the common parts: the 2024 Cromwell Tower assessment, for example, is a Type 1 assessment and says the fire alarm systems inside flats are outside its scope.",
      },
    ],
    "pat-testing": [
      {
        question: "How do I apply for an HMO licence in the City?",
        answer:
          "Apply online through the City's Contact the City form, or fill in the PDF application form and return it to the Pollution Team, Markets and Consumer Protection, at Guildhall. The Corporation asks you to read its Guidance on HMO standards first, and each HMO needs its own application.",
      },
    ],
    "fire-safety-certificate": [
      {
        question: "Does my block's fire risk assessment cover the alarm inside my flat?",
        answer:
          "Usually not. GOV.UK guidance says fire safety rules for blocks do not apply within individual flats, except measures fitted for other residents' safety, such as detectors linked to a communal alarm. The 2024 Cromwell Tower assessment says the same of the alarms in its flats. On the Barbican, ask the Estate Office whether the Corporation's electrical safety programme covers your flat's alarm; if it does not, checking it is the landlord's job.",
      },
    ],
    "fire-alarm-installation": [
      {
        question: "Does a five-person share in a purpose-built City block need an HMO licence?",
        answer:
          "Not under the mandatory scheme. The national 2018 Order excludes shared flats in purpose-built blocks of three or more self-contained flats, and no City scheme bringing them back in was found as of October 2026. The share can still be an HMO, and the Corporation says its HMO standards apply to every HMO, licensable or not.",
      },
    ],
  },
  sources: [
    {
      label: "City of London Corporation: Private rented accommodation",
      url: "https://www.cityoflondon.gov.uk/services/environmental-health/housing-standards/private-rented-accommodation",
    },
    {
      label: "City of London Corporation: Houses in multiple occupation (HMO)",
      url: "https://www.cityoflondon.gov.uk/services/licensing/other-licence-and-business-permit-types/houses-in-multiple-occupation-hmo",
    },
    {
      label: "City of London Corporation: HMO licence application form",
      url: "https://www.cityoflondon.gov.uk/assets/Business/hmo-licence.pdf",
    },
    {
      label: "City of London Corporation: Guidance on HMO standards",
      url: "https://www.cityoflondon.gov.uk/assets/Business/hmo-standards.pdf",
    },
    {
      label: "Legislation.gov.uk: Licensing of HMOs (Prescribed Description) (England) Order 2018",
      url: "https://www.legislation.gov.uk/uksi/2018/221/made",
    },
    {
      label: "Legislation.gov.uk: Regulatory Reform (Fire Safety) Order 2005, article 6",
      url: "https://www.legislation.gov.uk/uksi/2005/1541/article/6",
    },
    {
      label: "GOV.UK: A guide to making your small block of flats safe from fire",
      url: "https://www.gov.uk/government/publications/making-your-small-block-of-flats-safe-from-fire/a-guide-to-making-your-small-block-of-flats-safe-from-fire-accessible",
    },
    {
      label: "GOV.UK: Check your fire safety responsibilities under the Fire Safety (England) Regulations 2022",
      url: "https://assets.publishing.service.gov.uk/media/6538ec5ed10f3500139a68e1/Check+your+fire+safety+responsibilities+under+the+Fire+Safety+_England_+Regulations+2022.pdf",
    },
    {
      label: "City of London Corporation: Strategic Housing Market Assessment 2023",
      url: "https://www.cityoflondon.gov.uk/assets/Services-Environment/SHMA-Housing-Needs-Assessment-2023.pdf",
    },
    {
      label: "City of London Corporation: Barbican Estate Listed Building Management Guidelines",
      url: "https://www.cityoflondon.gov.uk/services/planning/historic-environment/listed-buildings/barbican-estate-listed-building-management-guidelines",
    },
    {
      label: "City of London Corporation: Golden Lane Estate Listed Building Management Guidelines",
      url: "https://www.cityoflondon.gov.uk/services/planning/historic-environment/listed-buildings/golden-lane-estate-listed-building-management-guidelines",
    },
    {
      label: "City of London Corporation: Conservation areas",
      url: "https://www.cityoflondon.gov.uk/services/planning/historic-environment/conservation-areas",
    },
    {
      label: "City of London Corporation: Listed buildings",
      url: "https://www.cityoflondon.gov.uk/services/planning/historic-environment/listed-buildings",
    },
    {
      label: "City of London Corporation: Barbican Estate, register your sub-tenant",
      url: "https://www.cityoflondon.gov.uk/services/barbican-estate/barbican-estate-register-your-sub-tenant",
    },
    {
      label: "City of London Corporation: Barbican Estate home improvements",
      url: "https://www.cityoflondon.gov.uk/services/barbican-estate/barbican-estate-home-improvements",
    },
    {
      label: "City of London Corporation: Asbestos data, all blocks, Barbican Estate",
      url: "https://www.cityoflondon.gov.uk/assets/Services-Environment/asbestos-data-all-blocks.pdf",
    },
    {
      label: "City of London Corporation: Barbican Estate fire safety",
      url: "https://www.cityoflondon.gov.uk/services/barbican-estate/barbican-estate-fire-safety",
    },
    {
      label: "City of London Corporation: Barbican Estate fire risk assessments",
      url: "https://www.cityoflondon.gov.uk/services/barbican-estate/barbican-estate-fire-risk-assessments",
    },
    {
      label: "City of London Corporation: Cromwell Tower fire risk assessment (2024)",
      url: "https://www.cityoflondon.gov.uk/assets/Services-DCCS/cromwell-tower-fra.pdf",
    },
    {
      label: "City of London Corporation: Barbican Estate heating study (November 2024)",
      url: "https://democracy.cityoflondon.gov.uk/documents/s211244/2411%20RCC%20Committee%20-%20Barbican%20Estate%20Heating%20Study.pdf",
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
      "The City had 8,161 homes in March 2022, and over 40% of them are in the Barbican, Golden Lane and Smithfield areas; the Barbican Estate alone accounts for 2,140. At the 2021 Census, 5.5% of households lived in flats in converted buildings such as former warehouses or churches, and only 1.3% in converted or shared houses (London 11.1%).",
    landlordContext:
      "Most homes here are small flats: 53.4% of occupied City homes have one bedroom, against 21.2% across London, and only 3.8% have four bedrooms or more.",
  },
};

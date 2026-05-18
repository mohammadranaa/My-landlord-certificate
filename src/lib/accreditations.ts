/*
 * ACCREDITATIONS DATA LAYER
 * Single source of truth for all professional body logos and
 * service-to-accreditation mappings.
 *
 * TO REPLACE OR UPDATE A LOGO:
 * 1. Drop the new file into public/accreditations/
 * 2. Update logoPath here if the filename changes
 * 3. No other changes needed — all components auto-update
 *
 * LOGO FILE SPECS (for future additions):
 * - SVG preferred | PNG/WebP acceptable | JPG last resort
 * - Transparent background preferred (JPGs have white bg —
 *   handled via bg-white card in the slider)
 * - Minimum 240px wide at natural size
 * - Max file size: 100KB
 */

export interface Accreditation {
  id: string
  name: string
  shortName: string
  website: string
  logoPath: string
  logoWidth: number
  logoHeight: number
  description: string
}

export const ALL_ACCREDITATIONS: Record<string, Accreditation> = {
  niceic: {
    id: "niceic",
    name: "NICEIC",
    shortName: "NICEIC",
    website: "https://www.niceic.com",
    logoPath: "/accreditations/niceic.png",
    logoWidth: 160,
    logoHeight: 48,
    description: "National Inspection Council for Electrical Installation Contracting — UK's leading electrical contractor approval body",
  },
  napit: {
    id: "napit",
    name: "NAPIT",
    shortName: "NAPIT",
    website: "https://www.napit.org.uk",
    logoPath: "/accreditations/napit.webp",
    logoWidth: 160,
    logoHeight: 48,
    description: "National Association of Professional Inspectors and Testers",
  },
  elecsa: {
    id: "elecsa",
    name: "ELECSA",
    shortName: "ELECSA",
    website: "https://www.elecsa.co.uk",
    logoPath: "/accreditations/elecsa.png",
    logoWidth: 160,
    logoHeight: 48,
    description: "Electrical contractor certification and approval scheme",
  },
  elmhurst: {
    id: "elmhurst",
    name: "Elmhurst Energy",
    shortName: "Elmhurst",
    website: "https://www.elmhurstenergy.co.uk",
    logoPath: "/accreditations/elmhurst.jpg",
    logoWidth: 180,
    logoHeight: 48,
    description: "Leading accreditation scheme for EPC and energy assessors",
  },
  stroma: {
    id: "stroma",
    name: "Stroma Certification",
    shortName: "Stroma",
    website: "https://www.stroma.com",
    logoPath: "/accreditations/stroma.jpg",
    logoWidth: 160,
    logoHeight: 48,
    description: "UK certification body for energy assessors and inspectors",
  },
  cibse: {
    id: "cibse",
    name: "CIBSE",
    shortName: "CIBSE",
    website: "https://www.cibse.org",
    logoPath: "/accreditations/cibse.png",
    logoWidth: 140,
    logoHeight: 48,
    description: "Chartered Institution of Building Services Engineers",
  },
  gas_safe: {
    id: "gas_safe",
    name: "Gas Safe Register",
    shortName: "Gas Safe",
    website: "https://www.gassaferegister.co.uk",
    logoPath: "/accreditations/gas-safe.png",
    logoWidth: 120,
    logoHeight: 48,
    description: "UK's official gas registration body — legally required for all gas work",
  },
  bafe: {
    id: "bafe",
    name: "BAFE",
    shortName: "BAFE",
    website: "https://www.bafe.org.uk",
    logoPath: "/accreditations/bafe.png",
    logoWidth: 120,
    logoHeight: 48,
    description: "British Approvals for Fire Equipment — SP205, SP203-1 and SP101 schemes",
  },
  ife: {
    id: "ife",
    name: "IFE",
    shortName: "IFE",
    website: "https://www.ife.org.uk",
    logoPath: "/accreditations/ife.webp",
    logoWidth: 120,
    logoHeight: 48,
    description: "Institution of Fire Engineers — professional membership body",
  },
  ifsm: {
    id: "ifsm",
    name: "IFSM",
    shortName: "IFSM",
    website: "https://www.ifsm.org.uk",
    logoPath: "/accreditations/ifsm.webp",
    logoWidth: 120,
    logoHeight: 48,
    description: "Institute of Fire Safety Managers",
  },
  wmsoc: {
    id: "wmsoc",
    name: "WMSoc",
    shortName: "WMSoc",
    website: "https://www.wmsoc.org.uk",
    logoPath: "/accreditations/wmsoc.gif",
    logoWidth: 120,
    logoHeight: 48,
    description: "Water Management Society — water safety and Legionella guidance",
  },
  bohs: {
    id: "bohs",
    name: "BOHS",
    shortName: "BOHS",
    website: "https://www.bohs.org",
    logoPath: "/accreditations/bohs.png",
    logoWidth: 120,
    logoHeight: 48,
    description: "British Occupational Hygiene Society — asbestos and hazardous substance qualifications",
  },
  iet: {
    id: "iet",
    name: "IET",
    shortName: "IET",
    website: "https://www.theiet.org",
    logoPath: "/accreditations/iet.png",
    logoWidth: 100,
    logoHeight: 48,
    description: "Institution of Engineering and Technology — publishes the Code of Practice for PAT Testing",
  },
  arca: {
    id: "arca",
    name: "ARCA",
    shortName: "ARCA",
    website: "https://www.arca.org.uk",
    logoPath: "/accreditations/arca.jpg",
    logoWidth: 120,
    logoHeight: 48,
    description: "Asbestos Removal Contractors Association",
  },
  acad: {
    id: "acad",
    name: "ACAD",
    shortName: "ACAD",
    website: "https://www.arca.org.uk/acad",
    logoPath: "/accreditations/acad.png",
    logoWidth: 120,
    logoHeight: 48,
    description: "Asbestos Control and Abatement Division of ARCA",
  },
}

// ── Service-to-accreditation mapping ────────────────────────────────────────

export const SERVICE_ACCREDITATIONS: Record<string, Accreditation[]> = {
  eicr: [
    ALL_ACCREDITATIONS.niceic,
    ALL_ACCREDITATIONS.napit,
    ALL_ACCREDITATIONS.elecsa,
  ],
  "commercial-eicr": [
    ALL_ACCREDITATIONS.niceic,
    ALL_ACCREDITATIONS.napit,
    ALL_ACCREDITATIONS.elecsa,
  ],
  "pat-testing": [
    ALL_ACCREDITATIONS.iet,
    ALL_ACCREDITATIONS.niceic,
  ],
  "emergency-lights": [
    ALL_ACCREDITATIONS.niceic,
    ALL_ACCREDITATIONS.napit,
  ],
  "fuse-box": [
    ALL_ACCREDITATIONS.niceic,
    ALL_ACCREDITATIONS.napit,
  ],
  "electrical-diagnostic": [
    ALL_ACCREDITATIONS.niceic,
    ALL_ACCREDITATIONS.napit,
  ],
  "gas-safety": [
    ALL_ACCREDITATIONS.gas_safe,
  ],
  "gas-safety-cp42": [
    ALL_ACCREDITATIONS.gas_safe,
  ],
  "boiler-installation": [
    ALL_ACCREDITATIONS.gas_safe,
  ],
  epc: [
    ALL_ACCREDITATIONS.elmhurst,
    ALL_ACCREDITATIONS.stroma,
    ALL_ACCREDITATIONS.cibse,
  ],
  "commercial-epc": [
    ALL_ACCREDITATIONS.elmhurst,
    ALL_ACCREDITATIONS.stroma,
    ALL_ACCREDITATIONS.cibse,
  ],
  "fire-risk-assessment": [
    ALL_ACCREDITATIONS.bafe,
    ALL_ACCREDITATIONS.ife,
    ALL_ACCREDITATIONS.ifsm,
  ],
  "fire-safety-certificate": [
    ALL_ACCREDITATIONS.bafe,
    ALL_ACCREDITATIONS.ife,
  ],
  "fire-alarm-installation": [
    ALL_ACCREDITATIONS.bafe,
    ALL_ACCREDITATIONS.ife,
  ],
  "fire-extinguisher-testing": [
    ALL_ACCREDITATIONS.bafe,
    ALL_ACCREDITATIONS.ife,
  ],
  "fire-door-certificate": [
    ALL_ACCREDITATIONS.ife,
    ALL_ACCREDITATIONS.ifsm,
  ],
  "asbestos-survey": [
    ALL_ACCREDITATIONS.bohs,
    ALL_ACCREDITATIONS.arca,
    ALL_ACCREDITATIONS.acad,
  ],
  legionella: [
    ALL_ACCREDITATIONS.wmsoc,
    ALL_ACCREDITATIONS.bohs,
    ALL_ACCREDITATIONS.cibse,
  ],
}

// ── Homepage slider — all accreditations, most prominent first ───────────────
export const HOMEPAGE_ACCREDITATIONS: Accreditation[] = [
  ALL_ACCREDITATIONS.niceic,
  ALL_ACCREDITATIONS.gas_safe,
  ALL_ACCREDITATIONS.napit,
  ALL_ACCREDITATIONS.elmhurst,
  ALL_ACCREDITATIONS.bafe,
  ALL_ACCREDITATIONS.elecsa,
  ALL_ACCREDITATIONS.stroma,
  ALL_ACCREDITATIONS.iet,
  ALL_ACCREDITATIONS.ife,
  ALL_ACCREDITATIONS.bohs,
  ALL_ACCREDITATIONS.cibse,
  ALL_ACCREDITATIONS.arca,
  ALL_ACCREDITATIONS.ifsm,
  ALL_ACCREDITATIONS.wmsoc,
  ALL_ACCREDITATIONS.acad,
]

"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { ServiceCard } from "@/components/ui/service-card";
import { cn } from "@/lib/utils";
import {
  BOILER_INSTALLATION_FROM,
  COMMERCIAL_EICR_TABLE,
  COMMERCIAL_EPC_TABLE,
  ELC_TABLE,
  ELECTRICAL_DIAGNOSTIC_HOURLY_RATE,
  FIRE_ALARM_INSTALLATION_PER_ALARM,
  FIRE_ALARM_PANELS_TABLE,
  FIRE_DOOR_CERT_PRICE,
  FIRE_EXTINGUISHER_TABLE,
  FIRE_SAFETY_CERT_TABLE,
  FUSE_BOX_TABLE,
  GAS_SAFETY_CP42_TABLE,
  getPriceForAsbestosSurvey,
  getPriceForEICR,
  getPriceForEPC,
  getPriceForFRA,
  getPriceForGasSafety,
  getPriceForPAT,
} from "@/lib/pricing";

// ── Icons ─────────────────────────────────────────────────────────────────────

function EicrIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2c0 0-6 5-6 11a6 6 0 0 0 12 0c0-3-2-6-2-6s-1 3-3 4c0 0 1-6-1-9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 2c0 0-8 1-12 8s-2 12-2 12 5-3 9-7c0 0-1 4-5 6 0 0 10-1 13-10s-3-9-3-9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2l8 3v6c0 5-4 9-8 11C8 20 4 16 4 11V5l8-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlugIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 2v4M17 2v4M5 10h14M5 10a2 2 0 0 0-2 2v2a7 7 0 0 0 14 0v-2a2 2 0 0 0-2-2M12 18v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PackageIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M2 9h20" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function LightIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 6a6 6 0 0 1 0 12v0a6 6 0 0 1 0-12z" stroke="currentColor" strokeWidth="2" />
      <path d="M9 21h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AlarmPanelIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M7 8h2M15 8h2M7 16h2M15 16h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function DoorIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 21h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="15" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

function ExtinguisherIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10 6V4M14 6V4M12 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 6h6l1 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V8l1-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 10v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M11 8v6M8 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BoilerIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 15h10M7 18h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21V11h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Service data ──────────────────────────────────────────────────────────────

type ServiceDef = {
  href: string;
  icon: ReactNode;
  name: string;
  description: string;
  price: number;
  turnaroundDays?: number;
};

const RESIDENTIAL: ServiceDef[] = [
  {
    href: "/eicr",
    icon: <EicrIcon />,
    name: "EICR Certificate",
    description:
      "Electrical Installation Condition Report — legally required for all private rental properties in England since 2020. Valid 5 years. NICEIC approved engineer.",
    price: getPriceForEICR("studio"),
    turnaroundDays: 2,
  },
  {
    href: "/gas-safety-certificate",
    icon: <FlameIcon />,
    name: "Gas Safety Certificate (CP12)",
    description:
      "Annual CP12 inspection of all gas appliances, flues and pipework by a Gas Safe registered engineer. Certificate issued same day.",
    price: getPriceForGasSafety(1),
    turnaroundDays: 1,
  },
  {
    href: "/epc",
    icon: <LeafIcon />,
    name: "EPC Certificate",
    description:
      "Energy Performance Certificate — required before marketing any rental property. A–G rating by an accredited DEA assessor. Valid 10 years.",
    price: getPriceForEPC("studio"),
    turnaroundDays: 2,
  },
  {
    href: "/fire-risk-assessment",
    icon: <ShieldIcon />,
    name: "Fire Risk Assessment",
    description:
      "Compulsory for all HMOs under the Regulatory Reform (Fire Safety) Order 2005. Written report with prioritised action plan included.",
    price: getPriceForFRA("studio"),
    turnaroundDays: 2,
  },
  {
    href: "/pat-testing",
    icon: <PlugIcon />,
    name: "PAT Testing",
    description:
      "Portable Appliance Testing for furnished rental properties. Pass/fail label on every appliance, full asset register emailed same day.",
    price: getPriceForPAT(1),
    turnaroundDays: 1,
  },
  {
    href: "/electrical-diagnostic",
    icon: <WrenchIcon />,
    name: "Electrical Diagnostic",
    description:
      "NICEIC approved electrician investigates and diagnoses faults in your rental property's wiring, circuits or consumer unit. Priced per hour.",
    price: ELECTRICAL_DIAGNOSTIC_HOURLY_RATE,
  },
  {
    href: "/fuse-box-installation",
    icon: <BoxIcon />,
    name: "Fuse Box Installation",
    description:
      "Full consumer unit upgrade to a modern RCBO board — required before many EICRs can be passed. Prices depend on unit size.",
    price: FUSE_BOX_TABLE[0].price,
  },
  {
    href: "/emergency-lights-certificate",
    icon: <LightIcon />,
    name: "Emergency Lights Certificate",
    description:
      "Mandatory testing and certification of emergency lighting for HMOs, bedsits and leasehold flats. Priced by number of fittings.",
    price: ELC_TABLE[0].price,
    turnaroundDays: 1,
  },
  {
    href: "/fire-safety-certificate",
    icon: <BellIcon />,
    name: "Fire Safety Certificate",
    description:
      "Inspection and certification of smoke and heat alarm systems for rental properties. Required before many HMO licence applications.",
    price: FIRE_SAFETY_CERT_TABLE[0].price,
    turnaroundDays: 1,
  },
  {
    href: "/fire-safety/fire-alarm-panels",
    icon: <AlarmPanelIcon />,
    name: "Fire Alarm Panels",
    description:
      "Servicing, testing and certification of addressable and conventional fire alarm panel systems. Required annually for compliance.",
    price: FIRE_ALARM_PANELS_TABLE[0].price,
    turnaroundDays: 1,
  },
  {
    href: "/fire-alarm-installation",
    icon: <BellIcon />,
    name: "Fire Alarm Installation",
    description:
      "Supply and installation of fire alarm systems for rental properties and HMOs. Priced per alarm point installed.",
    price: FIRE_ALARM_INSTALLATION_PER_ALARM,
  },
  {
    href: "/fire-door-certificate",
    icon: <DoorIcon />,
    name: "Fire Door Certificate",
    description:
      "Inspection and certification of fire doors to ensure compliance with BS 8214 and BS EN 1634. Required for all HMOs.",
    price: FIRE_DOOR_CERT_PRICE,
    turnaroundDays: 2,
  },
  {
    href: "/fire-extinguisher-testing",
    icon: <ExtinguisherIcon />,
    name: "Fire Extinguisher Testing",
    description:
      "Annual servicing and testing of portable fire extinguishers to BS 5306. Required for all HMOs and commercial premises.",
    price: FIRE_EXTINGUISHER_TABLE[0].price,
    turnaroundDays: 1,
  },
  {
    href: "/asbestos-survey",
    icon: <SearchIcon />,
    name: "Asbestos Survey",
    description:
      "Management asbestos survey for properties built before 2000. Required before renovation work or re-letting older properties.",
    price: getPriceForAsbestosSurvey(1),
    turnaroundDays: 2,
  },
  {
    href: "/boiler-installation",
    icon: <BoilerIcon />,
    name: "Boiler Installation",
    description:
      "Supply and installation of a new gas boiler by a Gas Safe registered engineer. Includes full system flush and commissioning.",
    price: BOILER_INSTALLATION_FROM,
  },
];

const COMMERCIAL: ServiceDef[] = [
  {
    href: "/commercial-eicr",
    icon: <EicrIcon />,
    name: "Commercial EICR",
    description:
      "Electrical Installation Condition Report for commercial premises, mixed-use buildings and HMO blocks. NICEIC approved engineers. Written report same day.",
    price: COMMERCIAL_EICR_TABLE[0].price,
    turnaroundDays: 2,
  },
  {
    href: "/commercial-gas-safety-certificate",
    icon: <FlameIcon />,
    name: "Commercial Gas Safety (CP42)",
    description:
      "CP42 commercial gas safety inspection — different certification standard from the domestic CP12. Gas Safe registered engineers.",
    price: GAS_SAFETY_CP42_TABLE[0].price,
    turnaroundDays: 1,
  },
  {
    href: "/commercial-epc",
    icon: <LeafIcon />,
    name: "Commercial EPC",
    description:
      "Commercial Energy Performance Certificate — mandatory before letting, selling or major renovation of a non-domestic building. Priced by floor area.",
    price: COMMERCIAL_EPC_TABLE[0].price,
    turnaroundDays: 2,
  },
];

// ── Tab bar ───────────────────────────────────────────────────────────────────

type Tab = "residential" | "commercial";

const TABS: { id: Tab; label: string; sub: string }[] = [
  { id: "residential", label: "Residential", sub: "Landlord & buy-to-let" },
  { id: "commercial", label: "Commercial", sub: "Different rate applies" },
];

// ── Component ─────────────────────────────────────────────────────────────────

export function ServicesSection() {
  const [active, setActive] = useState<Tab>("residential");

  const services = active === "residential" ? RESIDENTIAL : COMMERCIAL;

  return (
    <div>
      {/* Tab bar */}
      <div className="flex justify-center mb-10">
        <div
          className="inline-flex rounded-xl border border-border bg-white p-1 gap-1"
          role="tablist"
          aria-label="Service category"
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={active === tab.id}
              onClick={() => setActive(tab.id)}
              className={cn(
                "flex flex-col items-center px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                active === tab.id
                  ? "bg-compliance-blue text-white shadow-sm"
                  : "text-brand-grey hover:text-brand-charcoal hover:bg-warm-white",
              )}
            >
              <span className="font-semibold">{tab.label}</span>
              <span
                className={cn(
                  "text-xs mt-0.5 font-normal",
                  active === tab.id ? "text-blue-200" : "text-brand-grey/70",
                )}
              >
                {tab.sub}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Service grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.href} {...service} />
        ))}
      </div>

      {/* Footer link */}
      <p className="text-center mt-10 text-brand-grey text-sm">
        {active === "residential" ? (
          <>
            Not sure which certificates your property needs?{" "}
            <Link href="/pricing" className="text-compliance-blue hover:underline font-medium">
              View full pricing →
            </Link>
          </>
        ) : (
          <>
            Large commercial project or portfolio?{" "}
            <Link href="/letting-agents" className="text-compliance-blue hover:underline font-medium">
              Speak to our team about portfolios →
            </Link>
          </>
        )}
      </p>
    </div>
  );
}

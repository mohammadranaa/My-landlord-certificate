"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { ServiceCard } from "@/components/ui/service-card";
import {
  EicrIcon,
  FlameIcon,
  LeafIcon,
  ShieldIcon,
  PlugIcon,
  WrenchIcon,
  BoxIcon,
  LightIcon,
  BellIcon,
  AlarmPanelIcon,
  DoorIcon,
  ExtinguisherIcon,
  SearchIcon,
  BoilerIcon,
  DropletIcon,
} from "@/components/ui/service-icons";
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
  LEGIONELLA_PRICES,
  getPriceForAsbestosSurvey,
  getPriceForEICR,
  getPriceForEPC,
  getPriceForFRA,
  getPriceForGasSafety,
  getPriceForPAT,
} from "@/lib/pricing";

// ── Service data ──────────────────────────────────────────────────────────────

type ServiceDef = {
  href: string;
  icon: ReactNode;
  name: string;
  description: string;
  price: number;
  turnaroundDays?: number;
  turnaroundLabel?: string;
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
      "Annual CP12 inspection of all gas appliances, flues and pipework by a Gas Safe registered engineer. Certificate issued within 24 hours.",
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
    turnaroundLabel: "Within 48 hours",
  },
  {
    href: "/pat-testing",
    icon: <PlugIcon />,
    name: "PAT Testing",
    description:
      "Portable Appliance Testing for furnished rental properties. Pass/fail label on every appliance, full asset register emailed within 24 hours.",
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
    href: "/legionella-risk-assessment",
    icon: <DropletIcon />,
    name: "Legionella Risk Assessment",
    description:
      "ACoP L8 water system risk assessment for rental properties and HMOs. Written report with action plan.",
    price: LEGIONELLA_PRICES.standard,
    turnaroundDays: 2,
    turnaroundLabel: "Within 48 hours",
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
      "Electrical Installation Condition Report for commercial premises, mixed-use buildings and HMO blocks. NICEIC approved engineers. Written report within 24 hours.",
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

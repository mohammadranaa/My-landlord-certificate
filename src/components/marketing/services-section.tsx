"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { ServiceCard } from "@/components/ui/service-card";
import { cn } from "@/lib/utils";
import {
  COMMERCIAL_EICR_TABLE,
  COMMERCIAL_EPC_TABLE,
  FRA_COMMERCIAL_TABLE,
  GAS_SAFETY_CP42_TABLE,
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
    href: "/landlord-certificates-bundle",
    icon: <PackageIcon />,
    name: "Bundle & Save",
    description:
      "Combine your EICR, Gas Safety and EPC in one engineer visit. One fixed price, all certificates emailed the same day. Save up to £44.97.",
    price: 130,
    turnaroundDays: 2,
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
      "CP42 commercial gas safety inspection of all appliances, flues and pipework. Gas Safe registered engineers. Certificate issued same day.",
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
  {
    href: "/fire-safety/fire-risk-assessment",
    icon: <BuildingIcon />,
    name: "Commercial Fire Risk Assessment",
    description:
      "Statutory fire risk assessment for commercial buildings, communal areas and multi-floor premises under the Fire Safety Order 2005.",
    price: FRA_COMMERCIAL_TABLE[0].price,
    turnaroundDays: 2,
  },
];

// ── Tab bar ───────────────────────────────────────────────────────────────────

type Tab = "residential" | "commercial";

const TABS: { id: Tab; label: string; sub: string }[] = [
  { id: "residential", label: "Residential", sub: "Landlord & buy-to-let" },
  { id: "commercial", label: "Commercial", sub: "Business & mixed-use" },
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
            Not sure which certificates your rental property needs?{" "}
            <Link
              href="/pricing"
              className="text-compliance-blue hover:underline font-medium"
            >
              View our full pricing →
            </Link>
          </>
        ) : (
          <>
            Large commercial project or portfolio?{" "}
            <a
              href="tel:+443301330066"
              className="text-compliance-blue hover:underline font-medium"
            >
              Call 0330 133 0066 for a tailored quote →
            </a>
          </>
        )}
      </p>
    </div>
  );
}

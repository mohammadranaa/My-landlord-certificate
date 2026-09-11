"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ServiceEntry } from "@/lib/booking-schema";
import {
  ASBESTOS_SURVEY_TABLE,
  BOILER_INSTALLATION_FROM,
  COMMERCIAL_EICR_TABLE,
  COMMERCIAL_EPC_TABLE,
  DOMESTIC_EICR_TABLE,
  DOMESTIC_EPC_TABLE,
  EICR_ADDITIONAL_CU_PRICE,
  ELC_INSTALLATION_PER_LIGHT,
  ELC_TABLE,
  ELECTRICAL_DIAGNOSTIC_HOURLY_RATE,
  FIRE_ALARM_INSTALLATION_FULL_SYSTEM,
  FIRE_ALARM_INSTALLATION_PER_ALARM,
  FIRE_ALARM_PANELS_TABLE,
  FIRE_DOOR_PRICES,
  FIRE_DOOR_TABLE,
  FIRE_EXTINGUISHER_SUPPLY_PRICES,
  FIRE_EXTINGUISHER_TABLE,
  FIRE_SAFETY_CERT_TABLE,
  FRA_COMMERCIAL_TABLE,
  FRA_RESIDENTIAL_TABLE,
  FUSE_BOX_TABLE,
  GAS_SAFETY_CP12_TABLE,
  GAS_SAFETY_CP42_TABLE,
  HMO_REQUIRED_SERVICES,
  LEGIONELLA_PRICES,
  PAT_TABLE,
  isHmoBundleActive,
} from "@/lib/pricing";

type ServiceOption = { label: string; price: number };

type ServiceCategory = "electrical" | "gas" | "epc" | "fire" | "health-safety";

type ServiceConfig = {
  id: string;
  label: string;
  category: ServiceCategory;
  description?: string;
  helperNote?: string;
  note?: string;
  options: ServiceOption[];
};

const CATEGORY_LABELS: Record<ServiceCategory, string> = {
  electrical: "Electrical Safety",
  gas: "Gas Safety",
  epc: "Energy Performance (EPC)",
  fire: "Fire Safety",
  "health-safety": "Health & Safety",
};

const CATEGORY_ORDER: ServiceCategory[] = ["electrical", "gas", "epc", "fire", "health-safety"];

/** Marketing-page deep links (?service=) that predate the unified service list. */
const LEGACY_SERVICE_ID_ALIASES: Record<string, string> = {
  "fra-residential": "fire-risk-assessment",
  "fra-commercial": "fire-risk-assessment",
  "pat-testing": "pat",
};

const SERVICES: ServiceConfig[] = [
  // ── Electrical Safety ──────────────────────────────────────────────────────
  {
    id: "eicr",
    label: "EICR Certificate",
    category: "electrical",
    description: "Legally required every 5 years",
    options: [...DOMESTIC_EICR_TABLE],
  },
  {
    id: "commercial-eicr",
    label: "Commercial EICR",
    category: "electrical",
    note: "Additional circuits beyond 12 per consumer unit charged at £10 each.",
    options: [...COMMERCIAL_EICR_TABLE],
  },
  {
    id: "electrical-diagnostic",
    label: "Electrical Diagnostic",
    category: "electrical",
    options: [{ label: "Per hour", price: ELECTRICAL_DIAGNOSTIC_HOURLY_RATE }],
  },
  {
    id: "fuse-box",
    label: "Fuse Box Installation",
    category: "electrical",
    options: [...FUSE_BOX_TABLE],
  },
  {
    id: "elc",
    label: "Emergency Lights Certificate",
    category: "electrical",
    options: [
      ...ELC_TABLE,
      { label: "Light Installation (per light)", price: ELC_INSTALLATION_PER_LIGHT },
    ],
  },
  {
    id: "pat",
    label: "PAT Testing",
    category: "electrical",
    options: [...PAT_TABLE],
  },

  // ── Gas Safety ──────────────────────────────────────────────────────────────
  {
    id: "gas-safety-cp12",
    label: "Gas Safety Certificate (CP12)",
    category: "gas",
    description: "Annual legal requirement for all rental properties with gas.",
    helperNote:
      "A boiler is not counted as a standard appliance. If the property has a boiler, select 'Boiler Check + Service'.",
    options: [...GAS_SAFETY_CP12_TABLE],
  },
  {
    id: "gas-safety-cp42",
    label: "Commercial Gas Safety (CP42)",
    category: "gas",
    options: [...GAS_SAFETY_CP42_TABLE],
  },
  {
    id: "boiler-installation",
    label: "Boiler Installation",
    category: "gas",
    note: `Final price confirmed after survey. £${BOILER_INSTALLATION_FROM.toLocaleString()} is the starting price.`,
    options: [
      { label: "Supply and installation (quote based on model)", price: BOILER_INSTALLATION_FROM },
    ],
  },

  // ── EPC ─────────────────────────────────────────────────────────────────────
  {
    id: "epc",
    label: "Domestic EPC",
    category: "epc",
    options: [...DOMESTIC_EPC_TABLE],
  },
  {
    id: "commercial-epc",
    label: "Commercial EPC",
    category: "epc",
    note: "Over 850m² — call for quote: 020 3996 1070",
    options: [...COMMERCIAL_EPC_TABLE],
  },

  // ── Fire Safety ─────────────────────────────────────────────────────────────
  {
    id: "fire-safety-cert",
    label: "Fire Safety Certificate",
    category: "fire",
    options: [...FIRE_SAFETY_CERT_TABLE],
  },
  {
    id: "fire-alarm-panels",
    label: "Fire Alarm Panels",
    category: "fire",
    options: [...FIRE_ALARM_PANELS_TABLE],
  },
  {
    id: "fire-alarm-installation",
    label: "Fire Alarm Installation",
    category: "fire",
    options: [
      { label: "Per alarm (mains powered)", price: FIRE_ALARM_INSTALLATION_PER_ALARM },
      { label: "Full system installation", price: FIRE_ALARM_INSTALLATION_FULL_SYSTEM },
    ],
  },
  {
    id: "fire-risk-assessment",
    label: "Fire Risk Assessment",
    category: "fire",
    options: [
      ...FRA_RESIDENTIAL_TABLE,
      ...FRA_COMMERCIAL_TABLE.filter((row) => row.label.startsWith("Commercial Building")),
    ],
  },
  {
    id: "fire-door",
    label: "Fire Door Certificate",
    category: "fire",
    options: [
      ...FIRE_DOOR_TABLE,
      { label: "FD30 New Installation", price: FIRE_DOOR_PRICES["FD30 New Installation"] },
      { label: "FD60 New Installation", price: FIRE_DOOR_PRICES["FD60 New Installation"] },
      { label: "Fire Rated Fixing (repair)", price: FIRE_DOOR_PRICES["Fire Rated Fixing"] },
    ],
  },
  {
    id: "fire-extinguisher",
    label: "Fire Extinguisher Testing",
    category: "fire",
    options: [
      ...FIRE_EXTINGUISHER_TABLE,
      {
        label: "New Extinguisher Installation",
        price: FIRE_EXTINGUISHER_SUPPLY_PRICES["New Fire Extinguisher Installation"],
      },
      { label: "Fire Blanket", price: FIRE_EXTINGUISHER_SUPPLY_PRICES["Fire Blanket"] },
    ],
  },

  // ── Health & Safety ─────────────────────────────────────────────────────────
  {
    id: "asbestos-survey",
    label: "Asbestos Survey",
    category: "health-safety",
    options: [...ASBESTOS_SURVEY_TABLE],
  },
  {
    id: "legionella",
    label: "Legionella Risk Assessment",
    category: "health-safety",
    options: [{ label: "Per Property", price: LEGIONELLA_PRICES.standard }],
  },
];

const EICR_ADDITIONAL_CU_ENTRY_TYPE = "eicr-additional-cu";

type SelectionState = { selected: boolean; optionIndex: number };

function resolvePreselectedId(id?: string): string | undefined {
  if (!id) return undefined;
  return LEGACY_SERVICE_ID_ALIASES[id] ?? id;
}

function buildInitialState(
  existing: ServiceEntry[],
  preselectedServiceId?: string,
): Record<string, SelectionState> {
  const resolvedPreselect = resolvePreselectedId(preselectedServiceId);
  const state: Record<string, SelectionState> = {};
  for (const config of SERVICES) {
    const match = existing.find((s) => s.serviceType === config.id);
    const preselected = !match && config.id === resolvedPreselect;
    state[config.id] = {
      selected: !!match || preselected,
      optionIndex: match
        ? config.options.findIndex((o) => o.label === match.optionLabel)
        : -1,
    };
  }
  return state;
}

function buildInitialAdditionalCUs(existing: ServiceEntry[]): number {
  const cuEntry = existing.find((s) => s.serviceType === EICR_ADDITIONAL_CU_ENTRY_TYPE);
  if (!cuEntry) return 0;
  return Math.max(0, Math.round(cuEntry.price / EICR_ADDITIONAL_CU_PRICE));
}

interface Step3Props {
  defaultServices: ServiceEntry[];
  preselectedServiceId?: string;
  isHmoBundle?: boolean;
  onBack: () => void;
  onComplete: (services: ServiceEntry[]) => void;
}

export function Step3Services({
  defaultServices,
  preselectedServiceId,
  isHmoBundle = false,
  onBack,
  onComplete,
}: Step3Props) {
  const [states, setStates] = useState<Record<string, SelectionState>>(() =>
    buildInitialState(defaultServices, preselectedServiceId),
  );
  const [additionalCUs, setAdditionalCUs] = useState(() =>
    buildInitialAdditionalCUs(defaultServices),
  );
  const [submitError, setSubmitError] = useState("");

  function toggle(id: string) {
    setStates((prev) => ({
      ...prev,
      [id]: { ...prev[id], selected: !prev[id].selected },
    }));
    setSubmitError("");
  }

  function setOption(id: string, idx: number) {
    setStates((prev) => ({
      ...prev,
      [id]: { ...prev[id], optionIndex: idx },
    }));
    setSubmitError("");
  }

  const selectedCount = Object.values(states).filter((s) => s.selected).length;
  const eicrSelected = states.eicr?.selected ?? false;
  const selectedServiceTypes = SERVICES.filter((c) => states[c.id].selected).map((c) => c.id);
  const hmoBundleNoticeActive = isHmoBundle && isHmoBundleActive(selectedServiceTypes);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (selectedCount === 0) {
      setSubmitError("Please select at least one service.");
      return;
    }
    const missingOption = SERVICES.some(
      (c) => states[c.id].selected && states[c.id].optionIndex === -1,
    );
    if (missingOption) {
      setSubmitError("Please select an option for each checked service.");
      return;
    }

    const result: ServiceEntry[] = SERVICES.filter((c) => states[c.id].selected).map((c) => {
      const opt = c.options[states[c.id].optionIndex];
      return {
        serviceType: c.id,
        label: `${c.label} — ${opt.label}`,
        optionLabel: opt.label,
        price: opt.price,
      };
    });

    if (eicrSelected && additionalCUs > 0) {
      result.push({
        serviceType: EICR_ADDITIONAL_CU_ENTRY_TYPE,
        label: "EICR — Additional Consumer Unit",
        optionLabel: `${additionalCUs} × additional consumer unit`,
        price: round2(additionalCUs * EICR_ADDITIONAL_CU_PRICE),
      });
    }

    onComplete(result);
  }

  const servicesTotal = SERVICES.filter(
    (c) => states[c.id].selected && states[c.id].optionIndex >= 0,
  ).reduce((sum, c) => sum + c.options[states[c.id].optionIndex].price, 0);
  const addonTotal = eicrSelected ? additionalCUs * EICR_ADDITIONAL_CU_PRICE : 0;
  const runningTotal = servicesTotal + addonTotal;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-brand-charcoal mb-1">
          Which certificates do you need?
        </h2>
        <p className="text-sm text-brand-grey mb-4">
          Select all that apply.
        </p>
      </div>

      {hmoBundleNoticeActive && (
        <div className="mb-6 p-4 rounded-xl bg-action-green/10 border border-action-green/30 flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-action-green flex items-center justify-center text-white flex-shrink-0 text-sm font-bold mt-0.5">
            ✓
          </div>
          <div>
            <p className="text-sm font-semibold text-brand-charcoal">
              HMO compliance bundle pre-selected
            </p>
            <p className="text-xs text-brand-grey mt-1">
              EICR, Gas Safety Certificate, Fire Risk Assessment and Fire Safety
              Certificate have been added to your order. Your 10% HMO discount will
              apply automatically. You can adjust the property size options below or
              add more services.
            </p>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {CATEGORY_ORDER.map((category) => (
          <div key={category} className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-brand-grey">
              {CATEGORY_LABELS[category]}
            </h3>
            {SERVICES.filter((c) => c.category === category).map((config) => {
              const state = states[config.id];
              const selectedOption =
                state.optionIndex >= 0 ? config.options[state.optionIndex] : null;

              return (
                <div
                  key={config.id}
                  className={cn(
                    "rounded-xl border-2 transition-colors",
                    state.selected
                      ? "border-compliance-blue bg-compliance-blue/[0.03]"
                      : "border-border bg-white",
                  )}
                >
                  <label className="flex items-start gap-3 p-4 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={state.selected}
                      onChange={() => toggle(config.id)}
                      className="mt-0.5 w-4 h-4 rounded accent-compliance-blue shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <p className="font-semibold text-sm text-brand-charcoal">
                          {config.label}
                        </p>
                        {selectedOption && (
                          <span className="text-sm font-semibold text-compliance-blue tabular-nums">
                            £{selectedOption.price.toFixed(2)}
                          </span>
                        )}
                      </div>
                      {config.description && (
                        <p className="text-xs text-brand-grey mt-0.5">{config.description}</p>
                      )}
                    </div>
                  </label>

                  {state.selected && (
                    <div className="px-4 pb-4 pt-0 space-y-3">
                      {config.helperNote && (
                        <p className="text-xs text-brand-grey bg-warm-white rounded-lg px-3 py-2">
                          {config.helperNote}
                        </p>
                      )}
                      {isHmoBundle &&
                        (HMO_REQUIRED_SERVICES as readonly string[]).includes(config.id) && (
                          <p className="text-xs text-compliance-blue">
                            Pre-filled for your HMO bundle — change the size below if needed
                          </p>
                        )}
                      <select
                        value={state.optionIndex}
                        onChange={(e) => setOption(config.id, parseInt(e.target.value))}
                        className={cn(
                          "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-brand-charcoal",
                          "focus:outline-none focus:ring-2 focus:ring-compliance-blue focus:border-compliance-blue",
                          state.optionIndex === -1 && "text-brand-grey",
                        )}
                      >
                        <option value="-1" disabled>
                          Select option
                        </option>
                        {config.options.map((opt, idx) => (
                          <option key={idx} value={idx}>
                            {opt.label} — £{opt.price.toFixed(2)}
                          </option>
                        ))}
                      </select>
                      {config.note && (
                        <p className="text-xs text-brand-grey">{config.note}</p>
                      )}

                      {config.id === "eicr" && (
                        <div className="p-3 bg-warm-white rounded-lg border border-border">
                          <p className="text-xs font-medium text-brand-charcoal mb-2">
                            Additional consumer units
                          </p>
                          <p className="text-xs text-brand-grey mb-3">
                            £{EICR_ADDITIONAL_CU_PRICE.toFixed(2)} each. Common in HMOs, converted
                            flats and larger properties. Engineer confirms on arrival.
                          </p>
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => setAdditionalCUs(Math.max(0, additionalCUs - 1))}
                              className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-brand-charcoal hover:bg-gray-100"
                            >
                              −
                            </button>
                            <span className="text-sm font-medium text-brand-charcoal w-4 text-center">
                              {additionalCUs}
                            </span>
                            <button
                              type="button"
                              onClick={() => setAdditionalCUs(additionalCUs + 1)}
                              className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-brand-charcoal hover:bg-gray-100"
                            >
                              +
                            </button>
                            {additionalCUs > 0 && (
                              <span className="text-xs text-compliance-blue ml-2">
                                +£{(additionalCUs * EICR_ADDITIONAL_CU_PRICE).toFixed(2)} added
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {runningTotal > 0 && (
        <div className="rounded-xl bg-warm-white border border-border px-4 py-3">
          <div className="flex justify-between text-base font-bold text-brand-charcoal">
            <span>Total ({selectedCount} service{selectedCount !== 1 ? "s" : ""})</span>
            <span className="tabular-nums">£{runningTotal.toFixed(2)}</span>
          </div>
        </div>
      )}

      {submitError && (
        <p className="text-xs text-red-600 bg-red-50 rounded-lg px-3 py-2">
          {submitError}
        </p>
      )}

      <div className="flex gap-3 pt-1">
        <button
          type="button"
          onClick={onBack}
          className={cn(
            "flex-1 rounded-xl border-2 border-border bg-white text-brand-charcoal font-semibold py-3 text-sm transition-colors",
            "hover:border-brand-grey/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue focus-visible:ring-offset-2",
          )}
        >
          ← Back
        </button>
        <button
          type="submit"
          className={cn(
            "flex-[2] rounded-xl bg-compliance-blue text-white font-semibold py-3 text-sm transition-colors",
            "hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue focus-visible:ring-offset-2",
          )}
        >
          Continue →
        </button>
      </div>
    </form>
  );
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

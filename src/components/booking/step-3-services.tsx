"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ServiceEntry } from "@/lib/booking-schema";

type ServiceOption = { label: string; price: number };

type ServiceConfig = {
  id: string;
  label: string;
  description: string;
  options: ServiceOption[];
};

const RESIDENTIAL_SERVICES: ServiceConfig[] = [
  {
    id: "eicr",
    label: "EICR Certificate",
    description: "Electrical Installation Condition Report — required every 5 years",
    options: [
      { label: "Studio Apartment", price: 67.99 },
      { label: "1–3 Bedrooms", price: 94.99 },
      { label: "4 Bedrooms", price: 104.99 },
      { label: "5 Bedrooms", price: 139.99 },
      { label: "6 Bedrooms", price: 159.99 },
      { label: "7 Bedrooms", price: 179.99 },
      { label: "8 Bedrooms", price: 199.99 },
    ],
  },
  {
    id: "gas-safety-cp12",
    label: "Gas Safety Certificate",
    description: "CP12 — required annually for gas appliances",
    options: [
      { label: "1 Gas Appliance", price: 50 },
      { label: "2 Gas Appliances", price: 60 },
      { label: "3 Gas Appliances", price: 70 },
    ],
  },
  {
    id: "epc",
    label: "EPC Certificate",
    description: "Energy Performance Certificate — required to let a property",
    options: [
      { label: "Studio Apartment", price: 89.99 },
      { label: "1–3 Bedrooms", price: 109.99 },
      { label: "4 Bedrooms", price: 129.99 },
      { label: "5 Bedrooms", price: 149.99 },
    ],
  },
  {
    id: "fra-residential",
    label: "Fire Risk Assessment",
    description: "Required annually under the Regulatory Reform (Fire Safety) Order 2005",
    options: [
      { label: "Studio Apartment", price: 74 },
      { label: "1–3 Bedrooms", price: 139.99 },
      { label: "Up to 4 Bedrooms", price: 179.99 },
      { label: "Up to 5 Bedrooms", price: 189.99 },
      { label: "Up to 6 Bedrooms", price: 249.99 },
      { label: "Up to 7 Bedrooms", price: 299.99 },
      { label: "Up to 8 Bedrooms", price: 349.99 },
      { label: "Communal Area (1–3 Floors)", price: 129.99 },
      { label: "Communal Area (3–6 Floors)", price: 149.99 },
    ],
  },
  {
    id: "pat",
    label: "PAT Testing",
    description: "Portable Appliance Testing",
    options: [
      { label: "Up to 10 Appliances", price: 59.99 },
      { label: "10–15 Appliances", price: 69.99 },
      { label: "15–20 Appliances", price: 79.99 },
      { label: "20–25 Appliances", price: 99.99 },
      { label: "25–30 Appliances", price: 129.99 },
      { label: "30–35 Appliances", price: 169.99 },
      { label: "35–40 Appliances", price: 199.99 },
      { label: "40–45 Appliances", price: 229.99 },
      { label: "45–50 Appliances", price: 259.99 },
    ],
  },
  {
    id: "fire-safety-cert",
    label: "Fire Safety Certificate",
    description: "Smoke & heat alarm testing and certification",
    options: [
      { label: "Up to 3 Alarms", price: 55 },
      { label: "3–6 Alarms", price: 90 },
      { label: "6–9 Alarms", price: 125 },
      { label: "9–12 Alarms", price: 160 },
      { label: "12–15 Alarms", price: 195 },
      { label: "15–18 Alarms", price: 230 },
      { label: "18–21 Alarms", price: 265 },
    ],
  },
  {
    id: "elc",
    label: "Emergency Lights Certificate",
    description: "Annual testing and certification of emergency lighting",
    options: [
      { label: "Up to 3 Emergency Lights", price: 55 },
      { label: "3–6 Emergency Lights", price: 90 },
      { label: "6–9 Emergency Lights", price: 125 },
      { label: "9–12 Emergency Lights", price: 160 },
      { label: "12–15 Emergency Lights", price: 195 },
      { label: "15–18 Emergency Lights", price: 230 },
      { label: "18–21 Emergency Lights", price: 265 },
    ],
  },
];

const COMMERCIAL_SERVICES: ServiceConfig[] = [
  {
    id: "commercial-eicr",
    label: "Commercial EICR",
    description: "Priced by number of consumer units",
    options: [
      { label: "1 Consumer Unit (up to 10 circuits)", price: 149.99 },
      { label: "2 Consumer Units", price: 279.99 },
      { label: "3 Consumer Units", price: 418.99 },
      { label: "4 Consumer Units", price: 548.99 },
      { label: "5 Consumer Units", price: 705.99 },
      { label: "6 Consumer Units", price: 849.99 },
      { label: "7 Consumer Units", price: 998.99 },
      { label: "8 Consumer Units", price: 1155.99 },
    ],
  },
  {
    id: "gas-safety-cp42",
    label: "Commercial Gas Safety (CP42)",
    description: "For commercial properties with gas appliances",
    options: [
      { label: "1 Gas Appliance", price: 159.99 },
      { label: "2 Gas Appliances", price: 199.99 },
      { label: "3 Gas Appliances", price: 239.99 },
      { label: "4 Gas Appliances", price: 299.99 },
      { label: "5 Gas Appliances", price: 339.99 },
      { label: "6 Gas Appliances", price: 399.99 },
      { label: "7 Gas Appliances", price: 439.99 },
      { label: "8 Gas Appliances", price: 499.99 },
    ],
  },
  {
    id: "commercial-epc",
    label: "Commercial EPC",
    description: "Energy Performance Certificate for commercial premises",
    options: [
      { label: "Up to 50m²", price: 250 },
      { label: "50m² – 100m²", price: 320 },
      { label: "100m² – 250m²", price: 399 },
      { label: "250m² – 350m²", price: 499 },
      { label: "350m² – 450m²", price: 599 },
      { label: "450m² – 550m²", price: 699 },
      { label: "550m² – 650m²", price: 799 },
      { label: "650m² – 750m²", price: 899 },
      { label: "750m² – 850m²", price: 999 },
    ],
  },
  {
    id: "fra-commercial",
    label: "Commercial Fire Risk Assessment",
    description: "Required under the Regulatory Reform (Fire Safety) Order 2005",
    options: [
      { label: "Communal Area — Up to 3 Floors", price: 149.99 },
      { label: "Communal Area — 3–5 Floors", price: 189.99 },
      { label: "Communal Area — 5–10 Floors", price: 279.99 },
      { label: "Commercial Building — 1–3 Floors", price: 249.99 },
      { label: "Commercial Building — 3–5 Floors", price: 369.99 },
      { label: "Commercial Building — 5–8 Floors", price: 459.99 },
      { label: "Commercial Building — 8–12 Floors", price: 539.99 },
    ],
  },
  {
    id: "pat",
    label: "PAT Testing",
    description: "Portable Appliance Testing",
    options: [
      { label: "Up to 10 Appliances", price: 59.99 },
      { label: "10–15 Appliances", price: 69.99 },
      { label: "15–20 Appliances", price: 79.99 },
      { label: "20–25 Appliances", price: 99.99 },
      { label: "25–30 Appliances", price: 129.99 },
      { label: "30–35 Appliances", price: 169.99 },
      { label: "35–40 Appliances", price: 199.99 },
      { label: "40–45 Appliances", price: 229.99 },
      { label: "45–50 Appliances", price: 259.99 },
    ],
  },
  {
    id: "fire-safety-cert",
    label: "Fire Safety Certificate",
    description: "Smoke & heat alarm testing and certification",
    options: [
      { label: "Up to 3 Alarms", price: 55 },
      { label: "3–6 Alarms", price: 90 },
      { label: "6–9 Alarms", price: 125 },
      { label: "9–12 Alarms", price: 160 },
      { label: "12–15 Alarms", price: 195 },
      { label: "15–18 Alarms", price: 230 },
      { label: "18–21 Alarms", price: 265 },
    ],
  },
  {
    id: "elc",
    label: "Emergency Lights Certificate",
    description: "Annual testing and certification of emergency lighting",
    options: [
      { label: "Up to 3 Emergency Lights", price: 55 },
      { label: "3–6 Emergency Lights", price: 90 },
      { label: "6–9 Emergency Lights", price: 125 },
      { label: "9–12 Emergency Lights", price: 160 },
      { label: "12–15 Emergency Lights", price: 195 },
      { label: "15–18 Emergency Lights", price: 230 },
      { label: "18–21 Emergency Lights", price: 265 },
    ],
  },
];

type SelectionState = { selected: boolean; optionIndex: number };

function buildInitialState(
  configs: ServiceConfig[],
  existing: ServiceEntry[],
): Record<string, SelectionState> {
  const state: Record<string, SelectionState> = {};
  for (const config of configs) {
    const match = existing.find((s) => s.serviceType === config.id);
    state[config.id] = {
      selected: !!match,
      optionIndex: match
        ? config.options.findIndex((o) => o.label === match.optionLabel)
        : -1,
    };
  }
  return state;
}

interface Step3Props {
  propertyCategory: "residential" | "commercial";
  defaultServices: ServiceEntry[];
  onBack: () => void;
  onComplete: (services: ServiceEntry[]) => void;
}

export function Step3Services({
  propertyCategory,
  defaultServices,
  onBack,
  onComplete,
}: Step3Props) {
  const configs =
    propertyCategory === "residential"
      ? RESIDENTIAL_SERVICES
      : COMMERCIAL_SERVICES;

  const [states, setStates] = useState<Record<string, SelectionState>>(() =>
    buildInitialState(configs, defaultServices),
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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (selectedCount === 0) {
      setSubmitError("Please select at least one service.");
      return;
    }
    const missingOption = configs.some(
      (c) => states[c.id].selected && states[c.id].optionIndex === -1,
    );
    if (missingOption) {
      setSubmitError(
        "Please select an option for each checked service.",
      );
      return;
    }

    const result: ServiceEntry[] = configs
      .filter((c) => states[c.id].selected)
      .map((c) => {
        const opt = c.options[states[c.id].optionIndex];
        return {
          serviceType: c.id,
          label: c.label,
          optionLabel: opt.label,
          price: opt.price,
        };
      });

    onComplete(result);
  }

  const runningTotal = configs
    .filter((c) => states[c.id].selected && states[c.id].optionIndex >= 0)
    .reduce(
      (sum, c) => sum + c.options[states[c.id].optionIndex].price,
      0,
    );

  const discount =
    selectedCount >= 2 ? Math.round(runningTotal * 10) / 100 : 0;
  const discountedTotal = runningTotal - discount;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-brand-charcoal mb-1">
          Which certificates do you need?
        </h2>
        <p className="text-sm text-brand-grey mb-4">
          Select all that apply. A 10% discount is applied when booking 2 or
          more services.
        </p>
      </div>

      <div className="space-y-3">
        {configs.map((config) => {
          const state = states[config.id];
          const selectedOption =
            state.optionIndex >= 0
              ? config.options[state.optionIndex]
              : null;

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
                  <p className="text-xs text-brand-grey mt-0.5">
                    {config.description}
                  </p>
                </div>
              </label>

              {state.selected && (
                <div className="px-4 pb-4 pt-0">
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
                </div>
              )}
            </div>
          );
        })}
      </div>

      {runningTotal > 0 && (
        <div className="rounded-xl bg-warm-white border border-border px-4 py-3">
          <div className="flex justify-between text-sm text-brand-grey">
            <span>Subtotal ({selectedCount} service{selectedCount !== 1 ? "s" : ""})</span>
            <span className="tabular-nums">£{runningTotal.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <>
              <div className="flex justify-between text-sm text-action-green font-medium">
                <span>Multi-service discount (10%)</span>
                <span className="tabular-nums">−£{discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-brand-charcoal border-t border-border pt-1 mt-1">
                <span>Total</span>
                <span className="tabular-nums">£{discountedTotal.toFixed(2)}</span>
              </div>
            </>
          )}
        </div>
      )}

      {selectedCount >= 2 && discount === 0 && runningTotal > 0 && (
        <p className="text-xs text-action-green bg-action-green/10 rounded-lg px-3 py-2">
          Great — you qualify for a 10% multi-service discount. It will show once you select options above.
        </p>
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

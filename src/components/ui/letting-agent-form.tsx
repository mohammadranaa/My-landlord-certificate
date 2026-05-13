"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FormFields {
  agencyName: string;
  contactName: string;
  email: string;
  phone: string;
  portfolioSize: string;
  message: string;
}

const initial: FormFields = {
  agencyName: "",
  contactName: "",
  email: "",
  phone: "",
  portfolioSize: "",
  message: "",
};

export function LettingAgentForm() {
  const [fields, setFields] = useState<FormFields>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // eslint-disable-next-line no-console
    console.log("Letting agent enquiry:", fields);
    // Simulated async — replace with Supabase insert when wiring up
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-action-green/30 bg-action-green/5 px-8 py-10 text-center">
        <svg
          className="w-10 h-10 text-action-green mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M5 13l4 4L19 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="font-semibold text-brand-charcoal text-lg mb-1">
          Enquiry received
        </p>
        <p className="text-brand-grey text-sm">
          A member of our team will be in touch within one working day to discuss
          your agency's requirements.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="agencyName"
            className="block text-sm font-medium text-brand-charcoal mb-1.5"
          >
            Agency name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="agencyName"
            name="agencyName"
            type="text"
            required
            autoComplete="organization"
            value={fields.agencyName}
            onChange={handleChange}
            placeholder="Acme Lettings Ltd"
            className={cn(
              "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-brand-charcoal placeholder:text-brand-grey/60",
              "focus:outline-none focus:ring-2 focus:ring-compliance-blue focus:border-compliance-blue",
            )}
          />
        </div>

        <div>
          <label
            htmlFor="contactName"
            className="block text-sm font-medium text-brand-charcoal mb-1.5"
          >
            Your name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="contactName"
            name="contactName"
            type="text"
            required
            autoComplete="name"
            value={fields.contactName}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={cn(
              "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-brand-charcoal placeholder:text-brand-grey/60",
              "focus:outline-none focus:ring-2 focus:ring-compliance-blue focus:border-compliance-blue",
            )}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-brand-charcoal mb-1.5"
          >
            Work email <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={fields.email}
            onChange={handleChange}
            placeholder="jane@acmelettings.co.uk"
            className={cn(
              "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-brand-charcoal placeholder:text-brand-grey/60",
              "focus:outline-none focus:ring-2 focus:ring-compliance-blue focus:border-compliance-blue",
            )}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-brand-charcoal mb-1.5"
          >
            Phone <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={fields.phone}
            onChange={handleChange}
            placeholder="020 7123 4567"
            className={cn(
              "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-brand-charcoal placeholder:text-brand-grey/60",
              "focus:outline-none focus:ring-2 focus:ring-compliance-blue focus:border-compliance-blue",
            )}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="portfolioSize"
          className="block text-sm font-medium text-brand-charcoal mb-1.5"
        >
          Properties under management <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <select
          id="portfolioSize"
          name="portfolioSize"
          required
          value={fields.portfolioSize}
          onChange={handleChange}
          className={cn(
            "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-brand-charcoal",
            "focus:outline-none focus:ring-2 focus:ring-compliance-blue focus:border-compliance-blue",
            !fields.portfolioSize && "text-brand-grey/60",
          )}
        >
          <option value="" disabled>Select range</option>
          <option value="1-20">1 – 20</option>
          <option value="21-50">21 – 50</option>
          <option value="51-200">51 – 200</option>
          <option value="201+">201 +</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-brand-charcoal mb-1.5"
        >
          Anything else you'd like us to know
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={fields.message}
          onChange={handleChange}
          placeholder="e.g. mix of services needed, specific boroughs, HMO portfolio…"
          className={cn(
            "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-brand-charcoal placeholder:text-brand-grey/60 resize-none",
            "focus:outline-none focus:ring-2 focus:ring-compliance-blue focus:border-compliance-blue",
          )}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className={cn(
          "w-full sm:w-auto inline-flex items-center justify-center gap-2",
          "bg-compliance-blue hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl text-sm transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue focus-visible:ring-offset-2",
          "disabled:opacity-60 disabled:cursor-not-allowed",
        )}
      >
        {submitting ? "Sending…" : "Request agency account"}
      </button>

      <p className="text-xs text-brand-grey">
        We'll respond within one working day. No obligation — just a conversation
        about how we can support your portfolio.
      </p>
    </form>
  );
}

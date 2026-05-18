"use client";

import { useState } from "react";
import { z } from "zod";
import { cn } from "@/lib/utils";

const PORTFOLIO_SIZES = ["10-20", "20-50", "50-100", "100+"] as const;

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Please enter a valid UK phone number"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  businessName: z.string().min(2, "Business name is required"),
  businessWebsite: z.string().optional(),
  propertiesManaged: z.enum(PORTFOLIO_SIZES, {
    message: "Please select the number of properties you manage",
  }),
});

type ValidatedData = z.infer<typeof formSchema>;
type FormErrors = Partial<Record<keyof ValidatedData, string>>;

interface RawFields {
  name: string;
  phone: string;
  email: string;
  businessName: string;
  businessWebsite: string;
  propertiesManaged: string;
}

const EMPTY: RawFields = {
  name: "",
  phone: "",
  email: "",
  businessName: "",
  businessWebsite: "",
  propertiesManaged: "",
};

const inputCls = cn(
  "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-brand-charcoal placeholder:text-brand-grey/60",
  "focus:outline-none focus:ring-2 focus:ring-compliance-blue focus:border-compliance-blue",
);

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-brand-charcoal mb-1.5">
        {label}
        {required && (
          <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>
        )}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-red-600" role="alert">{error}</p>
      )}
    </div>
  );
}

export function LettingAgentForm() {
  const [fields, setFields] = useState<RawFields>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ValidatedData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError(null);

    const result = formSchema.safeParse(fields);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ValidatedData;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/letting-agent-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (!res.ok) throw new Error(`Server error ${res.status}`);
      setSubmittedName(result.data.name.split(" ")[0]);
    } catch {
      setSubmitError(
        "Something went wrong — please try again or call us on 0330 133 0066.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submittedName !== null) {
    return (
      <div className="rounded-2xl border border-action-green/30 bg-action-green/5 px-8 py-10 text-center">
        <div className="w-12 h-12 rounded-full bg-action-green/15 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-action-green" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="font-bold text-brand-charcoal text-lg mb-2">
          Thanks {submittedName} — we&apos;ll be in touch within 1 business day.
        </p>
        <p className="text-brand-grey text-sm">
          One of our team will call you to discuss your portfolio and put together
          a compliance package tailored to your managed properties.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="name" label="Your name" required error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={cn(inputCls, errors.name && "border-red-400 focus:ring-red-400")}
          />
        </Field>

        <Field id="phone" label="Phone" required error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={handleChange}
            placeholder="020 7123 4567"
            className={cn(inputCls, errors.phone && "border-red-400 focus:ring-red-400")}
          />
        </Field>
      </div>

      <Field id="email" label="Email address" required error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={fields.email}
          onChange={handleChange}
          placeholder="jane@acmelettings.co.uk"
          className={cn(inputCls, errors.email && "border-red-400 focus:ring-red-400")}
        />
      </Field>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="businessName" label="Business name" required error={errors.businessName}>
          <input
            id="businessName"
            name="businessName"
            type="text"
            autoComplete="organization"
            value={fields.businessName}
            onChange={handleChange}
            placeholder="Acme Lettings Ltd"
            className={cn(inputCls, errors.businessName && "border-red-400 focus:ring-red-400")}
          />
        </Field>

        <Field id="businessWebsite" label="Business website" error={errors.businessWebsite}>
          <input
            id="businessWebsite"
            name="businessWebsite"
            type="url"
            autoComplete="url"
            value={fields.businessWebsite}
            onChange={handleChange}
            placeholder="www.acmelettings.co.uk"
            className={inputCls}
          />
        </Field>
      </div>

      <Field
        id="propertiesManaged"
        label="Number of properties managed"
        required
        error={errors.propertiesManaged}
      >
        <select
          id="propertiesManaged"
          name="propertiesManaged"
          value={fields.propertiesManaged}
          onChange={handleChange}
          className={cn(
            inputCls,
            !fields.propertiesManaged && "text-brand-grey/60",
            errors.propertiesManaged && "border-red-400 focus:ring-red-400",
          )}
        >
          <option value="" disabled>Select range</option>
          <option value="10-20">10 – 20</option>
          <option value="20-50">20 – 50</option>
          <option value="50-100">50 – 100</option>
          <option value="100+">100+</option>
        </select>
      </Field>

      {submitError && (
        <p className="text-sm text-red-600 text-center" role="alert">{submitError}</p>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={submitting}
          className={cn(
            "inline-flex items-center justify-center gap-2",
            "bg-action-green hover:bg-green-400 text-brand-charcoal font-bold px-8 py-3 rounded-xl text-sm transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-green focus-visible:ring-offset-2",
            "disabled:opacity-60 disabled:cursor-not-allowed",
          )}
        >
          {submitting ? (
            <>
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
              Sending…
            </>
          ) : (
            "Request a Portfolio Quote"
          )}
        </button>
        <p className="text-xs text-brand-grey">
          We respond within 1 business day. No commitment required.
        </p>
      </div>
    </form>
  );
}

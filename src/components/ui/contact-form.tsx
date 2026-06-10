"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PHONE_DISPLAY, TEL } from "@/lib/constants";

interface ContactFields {
  name: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
}

const initial: ContactFields = {
  name: "",
  email: "",
  phone: "",
  enquiryType: "",
  message: "",
};

export function ContactForm() {
  const [fields, setFields] = useState<ContactFields>(initial);
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
    console.log("Contact form submission:", fields);
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
          Message received
        </p>
        <p className="text-brand-grey text-sm">
          We aim to respond to all enquiries within one working day. For urgent
          matters, call{" "}
          <a href={TEL} className="text-compliance-blue font-medium hover:underline">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </div>
    );
  }

  const inputClass = cn(
    "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-brand-charcoal placeholder:text-brand-grey/60",
    "focus:outline-none focus:ring-2 focus:ring-compliance-blue focus:border-compliance-blue transition-colors",
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-charcoal mb-1.5">
            Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={fields.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-charcoal mb-1.5">
            Email <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={fields.email}
            onChange={handleChange}
            placeholder="jane@example.co.uk"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-charcoal mb-1.5">
            Phone <span className="text-brand-grey font-normal">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={handleChange}
            placeholder="020 XXXX XXXX"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="enquiryType" className="block text-sm font-medium text-brand-charcoal mb-1.5">
            Enquiry type <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <select
            id="enquiryType"
            name="enquiryType"
            required
            value={fields.enquiryType}
            onChange={handleChange}
            className={cn(inputClass, !fields.enquiryType && "text-brand-grey/60")}
          >
            <option value="" disabled>Select…</option>
            <option value="book">Book a certificate</option>
            <option value="quote">Get a quote</option>
            <option value="letting-agent">Letting agent enquiry</option>
            <option value="existing-booking">Existing booking</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-charcoal mb-1.5">
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={fields.message}
          onChange={handleChange}
          placeholder="Tell us about your property and what you need…"
          className={cn(inputClass, "resize-none")}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className={cn(
          "w-full inline-flex items-center justify-center gap-2",
          "bg-compliance-blue hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl text-sm transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue focus-visible:ring-offset-2",
          "disabled:opacity-60 disabled:cursor-not-allowed",
        )}
      >
        {submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

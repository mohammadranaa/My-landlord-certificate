"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/shared/json-ld";

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
  includeSchema?: boolean;
  className?: string;
}

function FaqRow({ faq, isOpen, onToggle }: { faq: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between py-4 text-left gap-4 hover:text-brand-blue transition-colors"
      >
        <span className="font-semibold text-brand-charcoal text-sm md:text-base pr-2">
          {faq.q}
        </span>
        <span
          className={cn(
            "shrink-0 w-5 h-5 rounded-full border border-current flex items-center justify-center transition-transform duration-200",
            isOpen ? "text-brand-blue rotate-45" : "text-brand-grey"
          )}
          aria-hidden="true"
        >
          <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
            <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="pb-4 pr-9">
          <p className="text-brand-charcoal/70 leading-relaxed text-sm md:text-base">
            {faq.a}
          </p>
        </div>
      )}
    </div>
  );
}

export function FaqAccordion({ faqs, includeSchema = false, className }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      {includeSchema && <JsonLd data={schema} />}
      <div className={cn("divide-y divide-border rounded-xl border border-border bg-white px-6", className)}>
        {faqs.map((faq, i) => (
          <FaqRow
            key={i}
            faq={faq}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </>
  );
}

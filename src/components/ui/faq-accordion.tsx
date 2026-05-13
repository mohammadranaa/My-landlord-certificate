"use client";

import { Accordion } from "@base-ui/react/accordion";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/shared/json-ld";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  /** Allow multiple items open at once. Defaults to false. */
  multiple?: boolean;
  /**
   * Emit FAQPage JSON-LD schema for Google rich results.
   * Set to `true` on pages where this is the primary FAQ.
   */
  includeSchema?: boolean;
  className?: string;
}

/**
 * Accessible FAQ accordion backed by @base-ui/react Accordion.
 * Keyboard-navigable, ARIA-expanded, screen-reader-friendly.
 * Pass `includeSchema` to emit FAQPage JSON-LD alongside the component.
 *
 * @example
 *   <FAQAccordion
 *     items={[{ question: "How long does an EICR take?", answer: "2–4 hours." }]}
 *     includeSchema
 *   />
 */
export function FAQAccordion({
  items,
  multiple = false,
  includeSchema = false,
  className,
}: FAQAccordionProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      {includeSchema && <JsonLd data={schema} />}

      <Accordion.Root
        multiple={multiple}
        defaultValue={[]}
        className={cn(
          "divide-y divide-border rounded-2xl border border-border bg-white overflow-hidden",
          className,
        )}
      >
        {items.map((item, i) => {
          const value = `item-${i}`;
          return (
            <Accordion.Item key={value} value={value} className="group">
              <Accordion.Header className="flex">
                <Accordion.Trigger
                  className={cn(
                    "flex flex-1 items-center justify-between px-6 py-5 text-left w-full",
                    "font-semibold text-brand-charcoal text-sm md:text-base",
                    "hover:text-compliance-blue transition-colors duration-150",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-compliance-blue",
                  )}
                >
                  <span className="pr-4">{item.question}</span>
                  {/* Chevron rotates when open via group data-open state */}
                  <svg
                    className="w-5 h-5 shrink-0 text-brand-grey transition-transform duration-200 group-data-[open]:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Panel className="overflow-hidden px-6 pb-5 text-brand-charcoal/70 leading-relaxed text-sm md:text-base">
                {item.answer}
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </>
  );
}

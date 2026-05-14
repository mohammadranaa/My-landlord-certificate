"use client";

import { useState } from "react";
import Link from "next/link";
import { Heading } from "@/components/ui/heading";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { cn } from "@/lib/utils";

type ServiceReview = {
  content: string;
  author: string;
  location: string;
  rating?: number;
};

type ServiceGroup = {
  service: string;
  href: string;
  reviews: ServiceReview[];
};

interface ReviewsByServiceFilterProps {
  groups: ServiceGroup[];
}

const TABS = [
  "All",
  "EICR Certificate",
  "Gas Safety Certificate",
  "EPC Certificate",
  "Fire Risk Assessment",
  "PAT Testing",
] as const;

export function ReviewsByServiceFilter({ groups }: ReviewsByServiceFilterProps) {
  const [selected, setSelected] = useState<string>("All");

  const visible = selected === "All" ? groups : groups.filter((g) => g.service === selected);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2 mb-10 justify-center"
        role="tablist"
        aria-label="Filter reviews by service"
      >
        {TABS.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={selected === tab}
            onClick={() => setSelected(tab)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue",
              selected === tab
                ? "bg-compliance-blue text-white"
                : "bg-warm-white border border-border text-brand-charcoal hover:bg-compliance-blue/10",
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-12">
        {visible.map(({ service, href, reviews }) => (
          <div key={service}>
            <div className="flex items-center justify-between mb-5">
              <Heading level={3} className="!mb-0">
                {service}
              </Heading>
              <Link
                href={href}
                className="text-sm text-compliance-blue font-medium hover:underline shrink-0 ml-4"
              >
                Learn more →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {reviews.map((r) => (
                <TestimonialCard
                  key={r.author}
                  content={r.content}
                  author={r.author}
                  location={r.location}
                  service={service.replace(" Certificate", "").replace(" Assessment", "")}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import type { Review } from "@/data/reviews";

function formatDate(yearMonth: string): string {
  const [year, month] = yearMonth.split("-").map(Number);
  if (!year || !month) return yearMonth;
  return new Date(year, month - 1, 1).toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}

/** Renders one review, clamped to 5 lines with a "Read more" toggle when the text overflows. */
export function ReviewCard({ review }: { review: Review }) {
  const textRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [overflowing, setOverflowing] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    setOverflowing(el.scrollHeight > el.clientHeight + 1);
  }, []);

  return (
    <article className="bg-white rounded-2xl border border-border p-6 flex flex-col gap-4">
      <div className="flex gap-1" role="img" aria-label={`${review.rating} out of 5 stars`}>
        {[1, 2, 3, 4, 5].map((i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i <= review.rating ? "text-[#00B67A]" : "text-gray-200"}`}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      <div className="flex-1">
        <div
          ref={textRef}
          className={`whitespace-pre-line text-brand-charcoal/80 leading-relaxed ${expanded ? "" : "line-clamp-5"}`}
        >
          &ldquo;{review.text}&rdquo;
        </div>
        {overflowing && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-1.5 text-xs font-semibold text-compliance-blue hover:underline"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>

      <footer className="pt-2 border-t border-border">
        <p className="font-semibold text-brand-charcoal text-sm">
          {review.name}
          {review.role ? ` · ${review.role}` : ""}
        </p>
        <p className="text-xs text-brand-grey mt-0.5">
          {formatDate(review.date)} · via {review.source}
        </p>
      </footer>
    </article>
  );
}

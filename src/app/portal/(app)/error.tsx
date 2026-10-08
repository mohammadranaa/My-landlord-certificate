"use client";

import { useEffect } from "react";
import { TEL, PHONE_DISPLAY } from "@/lib/constants";

/** Friendly error state for any portal page, with retry. */
export default function PortalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("[portal] page error", error);
  }, [error]);

  return (
    <div className="mx-auto max-w-lg border border-[#dcdfd8] bg-white p-8 text-center">
      <p className="text-[13px] font-semibold uppercase tracking-[.2em] text-[#a52222]" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
        Something went wrong
      </p>
      <h1 className="mt-2 text-[28px] font-semibold text-[#1F2937]" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
        We couldn&apos;t load this page
      </h1>
      <p className="mt-3 text-sm text-[#4B5563]">
        This is usually temporary. Try again, and if it keeps happening call us on{" "}
        <a href={TEL} className="text-[#0078b8] hover:underline">
          {PHONE_DISPLAY}
        </a>
        .
      </p>
      {error.digest && <p className="mt-2 text-xs text-[#9CA3AF]">Reference: {error.digest}</p>}
      <button
        onClick={reset}
        className="mt-6 bg-[#0093DB] px-5 py-2.5 text-sm font-semibold text-[#FAFAF7] hover:bg-[#0078b8]"
      >
        Try again
      </button>
    </div>
  );
}

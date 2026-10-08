"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Download, Share2 } from "lucide-react";

/**
 * Downloads and share links go through /api/portal/certificates/[id], which
 * checks the certificate belongs to this agency before issuing a signed URL.
 * Share links expire after 7 days.
 */
export function DocumentActionButtons({ certId, label }: { certId: string; label: string }) {
  const [sharing, setSharing] = useState(false);

  async function handleShare() {
    setSharing(true);
    try {
      const res = await fetch(`/api/portal/certificates/${certId}?share=1`);
      const body = await res.json();
      if (!res.ok || !body.url) throw new Error(body.error ?? "Failed");
      await navigator.clipboard.writeText(body.url);
      toast.success(`Share link copied for ${label} — valid for 7 days.`);
    } catch (err) {
      toast.error(err instanceof Error && err.message !== "Failed" ? err.message : "Couldn't create a share link.");
    } finally {
      setSharing(false);
    }
  }

  const btnClass =
    "flex h-[30px] w-[30px] items-center justify-center border border-[#cfd6de] bg-white text-[#4B5563] hover:border-[#0093DB] hover:text-[#0078b8] disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <div className="flex items-center gap-1.5">
      <a
        href={`/api/portal/certificates/${certId}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Open PDF"
        aria-label={`Open PDF: ${label}`}
        className={btnClass}
      >
        <Download size={15} strokeWidth={1.5} />
      </a>
      <button
        onClick={handleShare}
        disabled={sharing}
        title="Copy share link (7 days)"
        aria-label={`Copy share link: ${label}`}
        className={btnClass}
      >
        <Share2 size={15} strokeWidth={1.5} />
      </button>
    </div>
  );
}

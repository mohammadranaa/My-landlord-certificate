"use client";

import { useState, useTransition } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { toast } from "sonner";
import { RegistrationMarks } from "./registration-marks";
import { submitPortalRequest, type PortalRequestType } from "@/lib/portal/requests";

const COPY: Record<
  Exclude<PortalRequestType, "renewal">,
  { kicker: string; title: string; body: string; confirm: string; success: string }
> = {
  download_pack: {
    kicker: "Compliance pack",
    title: "Request your compliance pack",
    body: "We'll compile every current certificate for this selection into a single pack and email it to you, usually the same working day.",
    confirm: "Request pack",
    success: "Compliance pack requested — we'll email it to you shortly.",
  },
  bulk_renewal: {
    kicker: "Bulk renewal",
    title: "Renew everything that needs action",
    body: "We'll contact you to book renewals for every expired and expiring certificate across your portfolio.",
    confirm: "Send request",
    success: "Renewal request sent — our team will be in touch within 1 working day.",
  },
};

export function PortalActionButton({
  type,
  label,
  variant = "secondary",
  propertyId,
  className = "",
}: {
  type: Exclude<PortalRequestType, "renewal">;
  label: string;
  variant?: "primary" | "secondary";
  propertyId?: string | null;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [pending, startTransition] = useTransition();
  const copy = COPY[type];

  const base =
    "px-[18px] py-[11px] text-[16px] font-semibold uppercase tracking-[.06em] transition-colors disabled:opacity-60";
  const styles =
    variant === "primary"
      ? "bg-[#0093DB] text-[#FAFAF7] hover:bg-[#0078b8]"
      : "border border-[#cfd6de] bg-white text-[#4B5563] hover:border-[#0093DB] hover:text-[#0078b8]";

  function handleConfirm() {
    startTransition(async () => {
      const result = await submitPortalRequest({ type, propertyId, notes });
      if (!result.success) {
        toast.error(result.error);
        return;
      }
      setOpen(false);
      setNotes("");
      toast.success(copy.success);
    });
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        render={
          <button style={{ fontFamily: "var(--font-barlow-condensed)" }} className={`${base} ${styles} ${className}`}>
            {label}
          </button>
        }
      />
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-40 bg-[rgba(31,41,55,.55)]" />
        <Dialog.Popup
          className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-32px)] -translate-x-1/2 -translate-y-1/2 border border-[#dcdfd8] bg-white"
          style={{ maxWidth: 480, padding: 26 }}
        >
          <div className="relative">
            <RegistrationMarks />
            <p
              className="text-[13px] font-semibold uppercase text-[#0078b8]"
              style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: ".2em" }}
            >
              {copy.kicker}
            </p>
            <Dialog.Title
              className="mt-1 text-[23px] font-semibold text-[#1F2937]"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              {copy.title}
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-sm text-[#4B5563]">{copy.body}</Dialog.Description>

            <label htmlFor={`notes-${type}`} className="mb-1 mt-5 block text-[11.5px] uppercase tracking-[.12em] text-[#9CA3AF]">
              Anything we should know? (optional)
            </label>
            <textarea
              id={`notes-${type}`}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              maxLength={1000}
              className="w-full border border-[#e2e8f0] bg-[#FAFAF7] px-3 py-2.5 text-sm text-[#1F2937] focus-visible:outline-2 focus-visible:outline-[#0093DB]"
            />

            <div className="mt-6 flex justify-end gap-2">
              <Dialog.Close className="border border-[#cfd6de] bg-white px-[18px] py-[11px] text-sm font-semibold text-[#4B5563] hover:border-[#0093DB] hover:text-[#0078b8]">
                Cancel
              </Dialog.Close>
              <button
                onClick={handleConfirm}
                disabled={pending}
                className="bg-[#0093DB] px-[18px] py-[11px] text-sm font-semibold text-[#FAFAF7] hover:bg-[#0078b8] disabled:opacity-60"
              >
                {pending ? "Sending…" : copy.confirm}
              </button>
            </div>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

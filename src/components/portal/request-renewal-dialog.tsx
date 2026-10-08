"use client";

import { useState, useTransition } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { toast } from "sonner";
import { RegistrationMarks } from "./registration-marks";
import { submitPortalRequest } from "@/lib/portal/requests";

interface RequestRenewalDialogProps {
  trigger: React.ReactElement;
  title: string;
  subtitle: string;
  propertyId?: string | null;
  certificateCode?: string | null;
}

const inputClass =
  "w-full border border-[#e2e8f0] bg-[#FAFAF7] px-3 py-2.5 text-sm text-[#1F2937] placeholder:text-[#9CA3AF] focus-visible:outline-2 focus-visible:outline-[#0093DB] focus-visible:outline-offset-2";

export function RequestRenewalDialog({
  trigger,
  title,
  subtitle,
  propertyId,
  certificateCode,
}: RequestRenewalDialogProps) {
  const [notes, setNotes] = useState("");
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();

  function handleSend() {
    startTransition(async () => {
      const result = await submitPortalRequest({
        type: "renewal",
        propertyId,
        certificateCode,
        notes,
      });
      if (!result.success) {
        toast.error(result.error);
        return;
      }
      setOpen(false);
      setNotes("");
      toast.success("Renewal request sent — our team will confirm a visit within 1 working day.");
    });
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger render={trigger} />
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
              Request renewal
            </p>
            <Dialog.Title
              className="mt-1 text-[23px] font-semibold text-[#1F2937]"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              {title}
            </Dialog.Title>
            <Dialog.Description className="mt-1 text-sm text-[#4B5563]">{subtitle}</Dialog.Description>

            <div className="mt-5 space-y-4">
              <div>
                <label className="mb-1 block text-[11.5px] uppercase tracking-[.12em] text-[#9CA3AF]">
                  Contractor
                </label>
                <input
                  value="My Landlord Certificate — London team"
                  disabled
                  className={`${inputClass} cursor-not-allowed`}
                />
              </div>
              <div>
                <label
                  htmlFor="renewal-notes"
                  className="mb-1 block text-[11.5px] uppercase tracking-[.12em] text-[#9CA3AF]"
                >
                  Access notes for the engineer
                </label>
                <textarea
                  id="renewal-notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Key at branch, tenant works nights, preferred dates…"
                  rows={3}
                  maxLength={1000}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <Dialog.Close className="border border-[#cfd6de] bg-white px-[18px] py-[11px] text-sm font-semibold text-[#4B5563] hover:border-[#0093DB] hover:text-[#0078b8]">
                Cancel
              </Dialog.Close>
              <button
                onClick={handleSend}
                disabled={pending}
                className="bg-[#0093DB] px-[18px] py-[11px] text-sm font-semibold text-[#FAFAF7] hover:bg-[#0078b8] disabled:opacity-60"
              >
                {pending ? "Sending…" : "Send request"}
              </button>
            </div>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

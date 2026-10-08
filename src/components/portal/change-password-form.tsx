"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import { updatePassword } from "@/lib/portal/actions";

const inputClass =
  "w-full border border-[#dcdfd8] bg-white px-3 py-2.5 text-sm text-[#1F2937] outline-none focus:border-[#0093DB]";

/** Used on the Account page and the password-reset page. */
export function ChangePasswordForm({ onDone }: { onDone?: () => void }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (password.length < 8) return setError("Password must be at least 8 characters.");
    if (password !== confirm) return setError("Passwords don't match.");
    startTransition(async () => {
      const result = await updatePassword(password);
      if (!result.success) return setError(result.error);
      setPassword("");
      setConfirm("");
      toast.success("Password updated.");
      onDone?.();
    });
  }

  return (
    <form onSubmit={submit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="new-password" className="mb-1 block text-sm font-medium text-[#1F2937]">
          New password
        </label>
        <input id="new-password" type="password" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} className={inputClass} />
      </div>
      <div>
        <label htmlFor="confirm-password" className="mb-1 block text-sm font-medium text-[#1F2937]">
          Confirm new password
        </label>
        <input id="confirm-password" type="password" autoComplete="new-password" value={confirm} onChange={(e) => setConfirm(e.target.value)} className={inputClass} />
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
      <button disabled={pending} className="bg-[#0093DB] px-5 py-2.5 text-sm font-semibold text-[#FAFAF7] hover:bg-[#0078b8] disabled:opacity-60">
        {pending ? "Saving…" : "Update password"}
      </button>
    </form>
  );
}

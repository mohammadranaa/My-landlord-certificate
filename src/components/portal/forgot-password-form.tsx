"use client";

import { useState, useTransition } from "react";
import { requestPasswordReset } from "@/lib/portal/actions";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const result = await requestPasswordReset(email);
      if (!result.success) return setError(result.error);
      setSent(true);
    });
  }

  if (sent) {
    return (
      <p className="border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-900">
        If there&apos;s a portal account for <strong>{email}</strong>, we&apos;ve emailed a link to reset your password. It
        expires in one hour — check your spam folder if you don&apos;t see it.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="reset-email" className="mb-1 block text-sm font-medium text-brand-charcoal">
          Email
        </label>
        <input
          id="reset-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm focus:border-compliance-blue focus:outline-none focus:ring-2 focus:ring-compliance-blue"
        />
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
      <button
        disabled={pending}
        className="w-full rounded-xl bg-compliance-blue px-4 py-3 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send reset link"}
      </button>
    </form>
  );
}

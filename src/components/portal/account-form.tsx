"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { accountUpdateSchema, type AccountUpdateData } from "@/lib/portal/schemas";
import { updatePortalAccount } from "@/lib/portal/actions";

type AccountFormValues = z.input<typeof accountUpdateSchema>;

const inputClass = cn(
  "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-brand-charcoal",
  "placeholder:text-brand-grey/60",
  "focus:outline-none focus:ring-2 focus:ring-compliance-blue focus:border-compliance-blue",
);
const disabledInputClass = cn(inputClass, "cursor-not-allowed bg-muted text-brand-grey");

const labelClass = "mb-1 block text-sm font-medium text-brand-charcoal";
const errorClass = "mt-1 text-xs text-red-600";

interface AccountFormProps {
  email: string;
  defaultValues: {
    agencyName: string;
    fullName: string;
    phone: string;
    website: string;
    propertiesManaged: number;
  };
}

export function AccountForm({ email, defaultValues }: AccountFormProps) {
  const [serverError, setServerError] = useState<string | null>(null);
  const [savedAt, setSavedAt] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountFormValues, unknown, AccountUpdateData>({
    resolver: zodResolver(accountUpdateSchema),
    defaultValues,
  });

  async function onSubmit(data: AccountUpdateData) {
    setServerError(null);
    setSubmitting(true);
    const result = await updatePortalAccount(data);
    setSubmitting(false);

    if (!result.success) {
      setServerError(result.error);
      return;
    }

    setSavedAt(Date.now());
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label className={labelClass}>Email</label>
        <input value={email} disabled className={disabledInputClass} />
        <p className="mt-1 text-xs text-brand-grey">
          Contact us to change the email on your account.
        </p>
      </div>

      <div>
        <label className={labelClass}>Agency name</label>
        <input className={inputClass} {...register("agencyName")} />
        {errors.agencyName && <p className={errorClass}>{errors.agencyName.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Your full name</label>
        <input className={inputClass} {...register("fullName")} />
        {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
      </div>

      <div>
        <label className={labelClass}>Phone</label>
        <input className={inputClass} {...register("phone")} />
      </div>

      <div>
        <label className={labelClass}>Website</label>
        <input className={inputClass} {...register("website")} />
      </div>

      <div>
        <label className={labelClass}>Properties managed</label>
        <input type="number" min={0} className={inputClass} {...register("propertiesManaged")} />
      </div>

      {serverError && <p className={errorClass}>{serverError}</p>}
      {savedAt && !serverError && (
        <p className="text-xs text-action-green">Saved.</p>
      )}

      <Button type="submit" variant="primary" size="lg" disabled={submitting}>
        {submitting ? "Saving…" : "Save changes"}
      </Button>
    </form>
  );
}

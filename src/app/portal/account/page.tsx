import type { Metadata } from "next";
import { requireApprovedPortalUser } from "@/lib/portal/session";
import { AccountForm } from "@/components/portal/account-form";

export const metadata: Metadata = {
  title: "Account — Agent Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

export default async function PortalAccountPage() {
  const portalUser = await requireApprovedPortalUser();

  return (
    <div className="mx-auto max-w-md px-4 py-10">
      <h1 className="mb-6 text-2xl font-bold text-brand-charcoal">Account</h1>

      <AccountForm
        email={portalUser.email}
        defaultValues={{
          agencyName: portalUser.agency_name,
          fullName: portalUser.full_name,
          phone: portalUser.phone ?? "",
          website: portalUser.website ?? "",
          propertiesManaged: portalUser.properties_managed,
        }}
      />
    </div>
  );
}

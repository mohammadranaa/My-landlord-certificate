import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { requireApprovedPortalUser } from "@/lib/portal/session";
import { untyped } from "@/lib/portal/untyped";
import { formatDateTime } from "@/lib/portal/format";
import { AccountForm } from "@/components/portal/account-form";
import { ChangePasswordForm } from "@/components/portal/change-password-form";

export const metadata: Metadata = {
  title: "Account — Agent Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

const condensed: React.CSSProperties = { fontFamily: "var(--font-barlow-condensed)" };

interface TeamMember {
  id: string;
  full_name: string;
  email: string;
  status: string;
  last_login_at: string | null;
}

export default async function PortalAccountPage() {
  const portalUser = await requireApprovedPortalUser();

  const { data } = portalUser.client_id
    ? await untyped(await createClient())
        .from("portal_users")
        .select("id, full_name, email, status, last_login_at")
        .eq("client_id", portalUser.client_id)
        .order("full_name")
    : { data: [] };
  const team = (data ?? []) as TeamMember[];

  return (
    <div>
      <p className="text-[13px] font-semibold uppercase tracking-[.2em] text-[#0078b8]" style={condensed}>
        Account
      </p>
      <h1 className="mt-1 text-[34px] font-semibold leading-[1.08] text-[#1F2937] sm:text-[40px]" style={condensed}>
        {portalUser.agency_name}
      </h1>

      <div className="mt-6 grid gap-[18px]" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))" }}>
        <section className="border border-[#dcdfd8] bg-white p-6">
          <h2 className="mb-4 text-[23px] font-semibold text-[#1F2937]" style={condensed}>
            Your details
          </h2>
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
        </section>

        <div className="flex flex-col gap-[18px]">
          <section className="border border-[#dcdfd8] bg-white p-6">
            <h2 className="mb-4 text-[23px] font-semibold text-[#1F2937]" style={condensed}>
              Change password
            </h2>
            <ChangePasswordForm />
          </section>

          <section className="border border-[#dcdfd8] bg-white p-6">
            <h2 className="mb-1 text-[23px] font-semibold text-[#1F2937]" style={condensed}>
              Team
            </h2>
            <p className="mb-4 text-[13px] text-[#6B7280]">
              Everyone at your agency with portal access. Colleagues can request access at{" "}
              <span className="font-medium text-[#1F2937]">/portal/signup</span> using your agency name — we&apos;ll link
              them to this account.
            </p>
            <div className="divide-y divide-[#f0eee7]">
              {team.map((m) => (
                <div key={m.id} className="flex items-center justify-between gap-3 py-2.5">
                  <div className="min-w-0">
                    <p className="truncate text-[14px] font-medium text-[#1F2937]">
                      {m.full_name}
                      {m.email === portalUser.email ? <span className="ml-1.5 text-[12px] text-[#9CA3AF]">(you)</span> : null}
                    </p>
                    <p className="truncate text-[12px] text-[#9CA3AF]">{m.email}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-[12px] font-semibold capitalize text-[#4B5563]">{m.status}</p>
                    <p className="text-[11.5px] text-[#9CA3AF]">
                      {m.last_login_at ? `Last login ${formatDateTime(m.last_login_at)}` : "Never logged in"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

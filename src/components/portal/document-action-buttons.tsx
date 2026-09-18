import { CERT_TYPE_LABELS, type CertCode } from "@/lib/portal/properties";
import { RequestRenewalDialog } from "@/components/portal/request-renewal-dialog";

/** Row actions on the Documents table — same PDF/Request-renewal pair used on Overview and the property detail page. */
export function DocumentActionButtons({
  publicUrl,
  code,
  address,
}: {
  publicUrl: string | null;
  code: CertCode;
  address: string;
}) {
  return (
    <div className="flex items-center gap-2">
      {publicUrl ? (
        <a
          href={publicUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#cfd6de] bg-white px-3 py-1.5 text-[12.5px] font-semibold text-[#4B5563] hover:border-[#0093DB] hover:text-[#0078b8]"
        >
          PDF
        </a>
      ) : (
        <span className="px-3 py-1.5 text-[12.5px] text-[#9CA3AF]">No PDF</span>
      )}
      <RequestRenewalDialog
        title={CERT_TYPE_LABELS[code]}
        subtitle={address}
        trigger={
          <button className="border border-[#0093DB] bg-[rgba(0,147,219,.08)] px-3 py-1.5 text-[12.5px] font-semibold text-[#0078b8] hover:bg-[#0093DB] hover:text-[#FAFAF7]">
            Request renewal
          </button>
        }
      />
    </div>
  );
}

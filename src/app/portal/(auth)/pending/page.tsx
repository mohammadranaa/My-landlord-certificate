import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { PHONE_DISPLAY, TEL, WHATSAPP_URL } from "@/lib/constants";
import { getPortalSession } from "@/lib/portal/session";
import { LogoutButton } from "@/components/portal/logout-button";
import { condensed, kicker, pageIntro, pageTitle, textLink } from "@/components/portal/auth-ui";

export const metadata: Metadata = {
  title: "Account pending — Client Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

const contactButton =
  "flex h-12 flex-1 basis-40 items-center justify-center border border-[#CFD6DE] bg-white text-[15px] font-semibold text-[#1F2937] hover:border-[#0093DB] hover:text-[#0078b8]";

export default async function PortalPendingPage() {
  const session = await getPortalSession();

  if (session.status === "signed-out" || session.status === "no-portal-user") {
    redirect("/portal/login");
  }
  if (session.status === "approved") {
    redirect("/portal/dashboard");
  }

  const { portalUser } = session;

  if (session.status === "suspended") {
    return (
      <div className="flex flex-col gap-6">
        <div>
          <p className={kicker}>Account paused</p>
          <h1 className={pageTitle}>Your portal access is paused</h1>
          <p className={pageIntro}>
            Please call us on{" "}
            <a href={TEL} className={textLink}>
              {PHONE_DISPLAY}
            </a>{" "}
            and we&apos;ll help straight away.
          </p>
        </div>
        <div className="flex justify-end">
          <LogoutButton />
        </div>
      </div>
    );
  }

  const requestedAt = new Date(portalUser.created_at).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

  const steps = [
    {
      marker: "✓",
      markerClass: "bg-[#80D100] text-[#14310A]",
      title: "Request received",
      detail: requestedAt,
    },
    {
      marker: "2",
      markerClass: "border-2 border-[#0093DB] text-[#0078b8]",
      title: "We link your properties and certificates",
      detail: "Our team matches your account to the jobs we've done for you.",
    },
    {
      marker: "3",
      markerClass: "border border-[#CFD6DE] text-[#6B7280]",
      title: "You get an email and log in",
      detail: "Everything will be ready on your Overview.",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className={kicker}>Request received</p>
        <h1 className={pageTitle}>We&apos;re setting up your account</h1>
        <p className={pageIntro}>
          We&apos;ll email <strong className="text-[#1F2937]">{portalUser.email}</strong> as soon as your
          properties are linked, usually within one working day.
        </p>
      </div>

      <ol className="border border-[#dcdfd8] bg-white">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className={`flex items-start gap-3.5 px-[18px] py-4 ${i < steps.length - 1 ? "border-b border-[#f0eee7]" : ""}`}
          >
            <span
              aria-hidden
              className={`${condensed} grid h-7 w-7 shrink-0 place-items-center text-sm font-bold ${step.markerClass}`}
            >
              {step.marker}
            </span>
            <span>
              <span className="block text-[15px] font-semibold text-[#1F2937]">{step.title}</span>
              <span className="text-[13.5px] text-[#4B5563]">{step.detail}</span>
            </span>
          </li>
        ))}
      </ol>

      <div className="flex flex-wrap gap-2.5">
        <a href={TEL} className={contactButton}>
          Call {PHONE_DISPLAY}
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={contactButton}>
          WhatsApp us
        </a>
      </div>

      <div className="flex items-center justify-between text-sm">
        <Link href="/book" className={textLink}>
          Book a certificate meanwhile →
        </Link>
        <LogoutButton />
      </div>
    </div>
  );
}

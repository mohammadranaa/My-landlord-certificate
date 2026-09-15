import { redirect } from "next/navigation";
import { getPortalSession } from "@/lib/portal/session";

export default async function PortalIndexPage() {
  const session = await getPortalSession();

  switch (session.status) {
    case "signed-out":
    case "no-portal-user":
      redirect("/portal/login");
    case "pending":
    case "suspended":
      redirect("/portal/pending");
    case "approved":
      redirect("/portal/dashboard");
  }
}

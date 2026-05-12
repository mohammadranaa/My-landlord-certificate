import type { Metadata } from "next";
import { ServicePage } from "@/components/marketing/service-page";
import { getService } from "@/lib/services";

const service = getService("eicr")!;

export const metadata: Metadata = {
  title: "EICR — Electrical Installation Condition Report",
  description:
    "Book an EICR for your rental property. Mandatory for all landlords in England since 2020. Qualified electricians, same-day certificate from £99.",
};

export default function EicrPage() {
  return <ServicePage service={service} />;
}

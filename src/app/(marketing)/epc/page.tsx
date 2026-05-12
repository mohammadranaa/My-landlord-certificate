import type { Metadata } from "next";
import { ServicePage } from "@/components/marketing/service-page";
import { getService } from "@/lib/services";

const service = getService("epc")!;

export const metadata: Metadata = {
  title: "Energy Performance Certificate (EPC)",
  description:
    "EPC assessments for rental properties across London and the South East. Accredited assessors, national register lodgement, from £69.",
};

export default function EpcPage() {
  return <ServicePage service={service} />;
}

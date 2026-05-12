import type { Metadata } from "next";
import { ServicePage } from "@/components/marketing/service-page";
import { getService } from "@/lib/services";

const service = getService("pat-testing")!;

export const metadata: Metadata = {
  title: "PAT Testing for Landlords",
  description:
    "Portable Appliance Testing for furnished rental properties. Pass/fail labels, full asset register, certificate from £79.",
};

export default function PatTestingPage() {
  return <ServicePage service={service} />;
}

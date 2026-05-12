import type { Metadata } from "next";
import { ServicePage } from "@/components/marketing/service-page";
import { getService } from "@/lib/services";

const service = getService("landlord-certificates-bundle")!;

export const metadata: Metadata = {
  title: "Landlord Certificate Bundle — Gas, EICR & EPC in One Visit",
  description:
    "Get your Gas Safety Certificate, EICR and EPC in a single engineer visit. Save £40–£60 versus booking separately. From £199.",
};

export default function BundlePage() {
  return <ServicePage service={service} />;
}

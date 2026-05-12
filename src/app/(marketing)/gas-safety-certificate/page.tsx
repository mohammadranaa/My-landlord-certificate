import type { Metadata } from "next";
import { ServicePage } from "@/components/marketing/service-page";
import { getService } from "@/lib/services";

const service = getService("gas-safety-certificate")!;

export const metadata: Metadata = {
  title: "Gas Safety Certificate (CP12)",
  description:
    "Annual gas safety certificates for landlords. Gas Safe Registered engineers, same-day CP12 certificate from £59. Book online in minutes.",
};

export default function GasSafetyPage() {
  return <ServicePage service={service} />;
}

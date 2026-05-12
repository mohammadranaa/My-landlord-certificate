import type { Metadata } from "next";
import { ServicePage } from "@/components/marketing/service-page";
import { getService } from "@/lib/services";

const service = getService("fire-risk-assessment")!;

export const metadata: Metadata = {
  title: "Fire Risk Assessment for Landlords",
  description:
    "Fire risk assessments for HMOs and residential rental properties. Written report with action plan from £89. Qualified assessors.",
};

export default function FireRiskAssessmentPage() {
  return <ServicePage service={service} />;
}

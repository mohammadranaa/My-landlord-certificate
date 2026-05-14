import { z } from "zod";

export type ServiceEntry = {
  serviceType: string;
  label: string;
  optionLabel: string;
  price: number;
};

export const step1Schema = z.object({
  propertyCategory: z.enum(["residential", "commercial"]),
  propertySize: z.string().min(1, "Please select a property type"),
});

export const step2Schema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid UK phone number")
    .regex(/^[\d\s+\-()]{10,}$/, "Please enter a valid UK phone number"),
  tenantPhone: z.string(),
  addressLine1: z.string().min(3, "Address line 1 is required"),
  addressLine2: z.string(),
  city: z.string().min(2, "City is required"),
  postcode: z
    .string()
    .min(5, "Please enter a valid UK postcode")
    .regex(
      /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i,
      "Please enter a valid UK postcode",
    ),
});

export const step4Schema = z.object({
  congestionZone: z.boolean(),
  parkingRestriction: z.boolean(),
  preferredDate: z.string().min(1, "Please select an appointment date"),
  timePreference: z.enum(["morning", "afternoon"]),
});

export const step5Schema = z.object({
  acceptedTerms: z
    .boolean()
    .refine((v) => v === true, "You must accept the terms to continue"),
});

export type Step1Data = z.infer<typeof step1Schema>;
export type Step2Data = z.infer<typeof step2Schema>;
export type Step4Data = z.infer<typeof step4Schema>;
export type Step5Data = z.infer<typeof step5Schema>;

export type BookingFormData = Step1Data &
  Step2Data & { services: ServiceEntry[] } & Step4Data &
  Step5Data;

export type PartialBookingData = Partial<
  Omit<BookingFormData, "services"> & { services: ServiceEntry[] }
>;

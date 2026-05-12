export type ServiceType =
  | "gas-safety"
  | "epc"
  | "eicr"
  | "pat-testing"
  | "fire-alarm"
  | "legionella";

export interface Service {
  id: ServiceType;
  name: string;
  description: string;
  priceFrom: number;
  turnaroundDays: number;
}

export interface Booking {
  id: string;
  serviceType: ServiceType;
  propertyAddress: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  preferredDate: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  createdAt: string;
}

export interface Engineer {
  id: string;
  name: string;
  email: string;
  phone: string;
  services: ServiceType[];
  postcodeCoverage: string[];
  active: boolean;
}

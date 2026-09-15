export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

// ── Enum types ────────────────────────────────────────────────────────────────

export type LeadStatus = "new" | "contacted" | "qualified" | "lost";

export type BookingPaymentStatus = "pending" | "paid" | "failed" | "refunded";

// ── Table row types ───────────────────────────────────────────────────────────

export interface WebsiteUser {
  /** Matches auth.users(id) */
  id: string;
  email: string;
  name: string | null;
  phone: string | null;
  /** UUID of the linked ServiceM8 Company record */
  servicem8_company_uuid: string | null;
  created_at: string;
}

export interface LettingAgentLead {
  id: string;
  agency_name: string;
  contact_name: string;
  email: string;
  phone: string | null;
  properties_count: number | null;
  /** Comma-separated London areas/boroughs the agency operates in */
  areas: string | null;
  notes: string | null;
  status: LeadStatus;
  created_at: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribed_at: string;
  /** Set on unsubscribe; null means currently subscribed */
  unsubscribed_at: string | null;
}

export interface BookingService {
  type: string;
  label?: string;
  variant?: string;
  price: number;
}

export interface Booking {
  id: string;
  created_at: string;
  updated_at: string;
  stripe_session_id: string | null;
  payment_status: BookingPaymentStatus;
  amount_total: number | null;
  currency: string;
  paid_at: string | null;
  customer_name: string | null;
  customer_email: string | null;
  customer_phone: string | null;
  tenant_phone: string | null;
  property_address: string | null;
  property_city: string | null;
  property_postcode: string | null;
  property_type: string | null;
  property_subtype: string | null;
  services: BookingService[] | null;
  services_readable: string | null;
  appointment_date: string | null;
  appointment_slot: string | null;
  congestion_charge: boolean;
  parking_charge: boolean;
  gclid: string | null;
  gbraid: string | null;
  wbraid: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
  landing_page: string | null;
  referrer: string | null;
}

export type PortalUserStatus = "pending" | "approved" | "suspended";

export interface PortalUser {
  id: string;
  auth_user_id: string;
  client_id: string | null;
  agency_name: string;
  full_name: string;
  email: string;
  phone: string | null;
  website: string | null;
  properties_managed: number;
  status: PortalUserStatus;
  approved_at: string | null;
  approved_by: string | null;
  created_at: string;
  updated_at: string;
}

export interface PortalJobSummary {
  id: string;
  job_number: string;
  title: string;
  status: string;
  site_address: string | null;
  site_postcode: string | null;
  scheduled_date: string | null;
  scheduled_slot: string | null;
  completed_date: string | null;
  certificate_status: string | null;
  created_at: string;
}

export interface PortalJobDetail extends PortalJobSummary {
  description: string | null;
  service_types: string[] | null;
  job_type: string | null;
  tenant_name: string | null;
  tenant_phone: string | null;
  certificate_delivery_date: string | null;
  client_id: string | null;
}

export interface PortalCertificate {
  id: string;
  job_id: string | null;
  certificate_type: string | null;
  site_address: string | null;
  issue_date: string | null;
  expiry_date: string | null;
  result: string | null;
  public_url: string | null;
  notes: string | null;
  created_at: string;
}

export interface PortalDiaryEntry {
  id: string;
  job_id: string;
  entry_type: string | null;
  content: string | null;
  author_name: string | null;
  is_internal: boolean;
  created_at: string;
}

export interface PortalInvoice {
  id: string;
  job_id: string | null;
  invoice_number: string | null;
  doc_type: string | null;
  line_items: unknown; // jsonb — array of { description, quantity, price } typically
  subtotal: number | null;
  discount: number | null;
  total: number | null;
  amount_paid: number | null;
  balance_due: number | null;
  status: string | null;
  date: string | null;
  sent_at: string | null;
}

/**
 * Minimal admin-only stub — the live `clients` table has many more columns
 * (client_type, billing details, etc). Only add fields here that server-side
 * admin code actually reads/writes; do not widen to match the full schema.
 */
export interface AdminClientRef {
  id: string;
  portal_user_id: string | null;
}

// ── Supabase Database type (used to type the client) ─────────────────────────

export interface Database {
  public: {
    Tables: {
      website_users: {
        Row: WebsiteUser;
        Insert: {
          id?: string;
          email: string;
          name?: string | null;
          phone?: string | null;
          servicem8_company_uuid?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string | null;
          phone?: string | null;
          servicem8_company_uuid?: string | null;
          created_at?: string;
        };
      };
      letting_agent_leads: {
        Row: LettingAgentLead;
        Insert: {
          id?: string;
          agency_name: string;
          contact_name: string;
          email: string;
          phone?: string | null;
          properties_count?: number | null;
          areas?: string | null;
          notes?: string | null;
          status?: LeadStatus;
          created_at?: string;
        };
        Update: {
          id?: string;
          agency_name?: string;
          contact_name?: string;
          email?: string;
          phone?: string | null;
          properties_count?: number | null;
          areas?: string | null;
          notes?: string | null;
          status?: LeadStatus;
          created_at?: string;
        };
      };
      newsletter_subscribers: {
        Row: NewsletterSubscriber;
        Insert: {
          id?: string;
          email: string;
          subscribed_at?: string;
          unsubscribed_at?: string | null;
        };
        Update: {
          id?: string;
          email?: string;
          subscribed_at?: string;
          unsubscribed_at?: string | null;
        };
      };
      bookings: {
        Row: Booking;
        Insert: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          stripe_session_id?: string | null;
          payment_status?: BookingPaymentStatus;
          amount_total?: number | null;
          currency?: string;
          paid_at?: string | null;
          customer_name?: string | null;
          customer_email?: string | null;
          customer_phone?: string | null;
          tenant_phone?: string | null;
          property_address?: string | null;
          property_city?: string | null;
          property_postcode?: string | null;
          property_type?: string | null;
          property_subtype?: string | null;
          services?: BookingService[] | null;
          services_readable?: string | null;
          appointment_date?: string | null;
          appointment_slot?: string | null;
          congestion_charge?: boolean;
          parking_charge?: boolean;
          gclid?: string | null;
          gbraid?: string | null;
          wbraid?: string | null;
          utm_source?: string | null;
          utm_medium?: string | null;
          utm_campaign?: string | null;
          utm_term?: string | null;
          utm_content?: string | null;
          landing_page?: string | null;
          referrer?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          stripe_session_id?: string | null;
          payment_status?: BookingPaymentStatus;
          amount_total?: number | null;
          currency?: string;
          paid_at?: string | null;
          customer_name?: string | null;
          customer_email?: string | null;
          customer_phone?: string | null;
          tenant_phone?: string | null;
          property_address?: string | null;
          property_city?: string | null;
          property_postcode?: string | null;
          property_type?: string | null;
          property_subtype?: string | null;
          services?: BookingService[] | null;
          services_readable?: string | null;
          appointment_date?: string | null;
          appointment_slot?: string | null;
          congestion_charge?: boolean;
          parking_charge?: boolean;
          gclid?: string | null;
          gbraid?: string | null;
          wbraid?: string | null;
          utm_source?: string | null;
          utm_medium?: string | null;
          utm_campaign?: string | null;
          utm_term?: string | null;
          utm_content?: string | null;
          landing_page?: string | null;
          referrer?: string | null;
        };
      };
      portal_users: {
        Row: PortalUser;
        Insert: {
          id?: string;
          auth_user_id: string;
          client_id?: string | null;
          agency_name: string;
          full_name: string;
          email: string;
          phone?: string | null;
          website?: string | null;
          properties_managed?: number;
          status?: PortalUserStatus;
          approved_at?: string | null;
          approved_by?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          auth_user_id?: string;
          client_id?: string | null;
          agency_name?: string;
          full_name?: string;
          email?: string;
          phone?: string | null;
          website?: string | null;
          properties_managed?: number;
          status?: PortalUserStatus;
          approved_at?: string | null;
          approved_by?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      jobs: {
        Row: PortalJobDetail;
        Insert: Partial<PortalJobDetail>;
        Update: Partial<PortalJobDetail>;
      };
      certificates: {
        Row: PortalCertificate;
        Insert: Partial<PortalCertificate>;
        Update: Partial<PortalCertificate>;
      };
      job_diary: {
        Row: PortalDiaryEntry;
        Insert: Partial<PortalDiaryEntry>;
        Update: Partial<PortalDiaryEntry>;
      };
      invoices: {
        Row: PortalInvoice;
        Insert: Partial<PortalInvoice>;
        Update: Partial<PortalInvoice>;
      };
      clients: {
        Row: AdminClientRef;
        Insert: Partial<AdminClientRef>;
        Update: Partial<AdminClientRef>;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      lead_status: LeadStatus;
      booking_payment_status: BookingPaymentStatus;
    };
  };
}

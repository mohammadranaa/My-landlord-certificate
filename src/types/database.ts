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
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      lead_status: LeadStatus;
      booking_payment_status: BookingPaymentStatus;
    };
  };
}

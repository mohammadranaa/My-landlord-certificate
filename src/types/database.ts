export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

// ── Enum types ────────────────────────────────────────────────────────────────

export type LeadStatus = "new" | "contacted" | "qualified" | "lost";

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
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      lead_status: LeadStatus;
    };
  };
}

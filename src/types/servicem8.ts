// ── Entity types ──────────────────────────────────────────────────────────────

export interface ServiceM8Company {
  uuid?: string;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  postcode?: string;
  country?: string;
  /** 1 = active, 0 = archived */
  active?: 1 | 0;
}

export interface ServiceM8Job {
  uuid?: string;
  /** "Quote" | "Work Order" | "Completed" | "Unsuccessful" | "Cancelled" */
  status?: string;
  company_uuid: string;
  job_address?: string;
  job_city?: string;
  job_postcode?: string;
  job_description?: string;
  /** ISO date "YYYY-MM-DD" — preferred appointment date */
  date?: string;
  category_uuid?: string;
  contact_first?: string;
  contact_last?: string;
  contact_email?: string;
  contact_phone?: string;
  active?: 1 | 0;
}

export interface ServiceM8JobActivity {
  uuid?: string;
  job_uuid: string;
  /** Always 1 for a scheduled appointment */
  activity_was_scheduled?: 1 | 0;
  /** ISO 8601 "YYYY-MM-DD HH:MM:SS" */
  start_date?: string;
  end_date?: string;
  staff_uuid?: string;
  notes?: string;
  active?: 1 | 0;
}

export interface ServiceM8Staff {
  uuid: string;
  first?: string;
  last?: string;
  email?: string;
  mobile?: string;
  active?: 1 | 0;
}

export interface ServiceM8JobMaterial {
  uuid?: string;
  job_uuid: string;
  name: string;
  qty?: number;
  unit_cost?: number;
  active?: 1 | 0;
}

// ── Input types ───────────────────────────────────────────────────────────────

export type CreateCompanyInput = {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  postcode?: string;
};

export type CreateJobInput = {
  company_uuid: string;
  status?: string;
  job_address?: string;
  job_description?: string;
  date?: string;
  category_uuid?: string;
  contact_first?: string;
  contact_last?: string;
  contact_email?: string;
  contact_phone?: string;
};

export type CreateJobActivityInput = {
  job_uuid: string;
  activity_was_scheduled: 1;
  start_date: string;
  end_date: string;
  staff_uuid?: string;
};

export type JobMaterial = {
  name: string;
  qty: number;
  unit_cost: number;
};

export type PaymentData = {
  amount: number;
  payment_method: string;
  reference?: string;
};

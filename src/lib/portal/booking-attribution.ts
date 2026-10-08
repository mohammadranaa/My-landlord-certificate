import "server-only";
import { createClient } from "@/lib/supabase/server";
import { getPortalSession } from "./session";
import { untyped } from "./untyped";
import { isCommercialProperty } from "./booking-links";
import type { PortalUser } from "@/types/database";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export interface PortalBookingProperty {
  id: string;
  address: string;
  city: string | null;
  postcode: string | null;
  property_type: string | null;
  property_subtype: string | null;
  bedrooms: number | null;
}

export interface PortalBookingContext {
  portalUser: PortalUser;
  property: PortalBookingProperty | null;
}

/** What is sent onwards (Stripe metadata, Sheet, partial bookings). */
export interface PortalBookingAttribution {
  portal_user_id: string;
  client_id: string;
  portal_property_id: string;
}

/**
 * Resolves a portal booking from the *server-side* session, never from ids
 * the browser sends: the signed-in user must be an approved portal user, and
 * the property is only returned if it belongs to their agency (RLS plus an
 * explicit client_id check). A property id that isn't theirs is ignored.
 */
export async function resolvePortalBooking(propertyId?: string | null): Promise<PortalBookingContext | null> {
  // The booking form and checkout must never fail because of the portal, so
  // any error here just means "not a portal booking".
  try {
    return await lookUpPortalBooking(propertyId);
  } catch (err) {
    console.error("[portal booking] lookup failed", err);
    return null;
  }
}

async function lookUpPortalBooking(propertyId?: string | null): Promise<PortalBookingContext | null> {
  const session = await getPortalSession();
  if (session.status !== "approved" || !session.portalUser.client_id) return null;
  const { portalUser } = session;

  if (!propertyId || !UUID.test(propertyId)) return { portalUser, property: null };

  const { data } = await untyped(await createClient())
    .from("properties")
    .select("id, address, city, postcode, property_type, property_subtype, bedrooms")
    .eq("id", propertyId)
    .eq("client_id", portalUser.client_id)
    .maybeSingle();

  return { portalUser, property: (data as PortalBookingProperty | null) ?? null };
}

export function toAttribution(ctx: PortalBookingContext): PortalBookingAttribution {
  return {
    portal_user_id: ctx.portalUser.id,
    client_id: ctx.portalUser.client_id as string,
    portal_property_id: ctx.property?.id ?? "",
  };
}

/** Booking-form sizes (step-1-property-type.tsx) for the bedroom counts we hold. */
function residentialSize(bedrooms: number | null): string | undefined {
  if (bedrooms === null || bedrooms === undefined) return undefined;
  if (bedrooms <= 0) return "studio";
  if (bedrooms <= 3) return "1-3bed";
  if (bedrooms >= 8) return "8bed";
  return `${bedrooms}bed`;
}

export interface BookingPrefill {
  portalPropertyId: string | null;
  propertyLabel: string | null;
  propertyCategory?: "residential" | "commercial";
  propertySize?: string;
  name: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  postcode: string;
}

export function toBookingPrefill(ctx: PortalBookingContext): BookingPrefill {
  const { portalUser, property } = ctx;
  const commercial = property ? isCommercialProperty(property.property_type) : false;
  return {
    portalPropertyId: property?.id ?? null,
    propertyLabel: property ? [property.address, property.postcode].filter(Boolean).join(", ") : null,
    propertyCategory: property?.property_type ? (commercial ? "commercial" : "residential") : undefined,
    propertySize: property && !commercial ? residentialSize(property.bedrooms) : undefined,
    name: portalUser.full_name ?? "",
    email: portalUser.email ?? "",
    phone: portalUser.phone ?? "",
    addressLine1: property?.address ?? "",
    addressLine2: "",
    city: property?.city ?? "",
    postcode: property?.postcode ?? "",
  };
}

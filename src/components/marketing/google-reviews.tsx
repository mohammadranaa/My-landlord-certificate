import type { ReactNode } from "react";
import { TestimonialCard } from "@/components/ui/testimonial-card";

/**
 * Live Google reviews, pulled server-side from the Google Places API and
 * rendered as cards. Requires two env vars:
 *   GOOGLE_PLACES_API_KEY  — a Google Maps Platform key with the Places API enabled
 *   GOOGLE_PLACE_ID        — the Place ID of the Google Business Profile
 * When either is missing (or the API returns nothing), it renders `fallback`
 * (the hand-written testimonials), so the page never looks empty.
 *
 * Cached for 24h via `revalidate` to stay well within Google's usage terms.
 */

const PLACES_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;

interface PlaceReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

async function getReviews(): Promise<PlaceReview[] | null> {
  if (!PLACES_KEY || !PLACE_ID) return null;
  try {
    const url =
      `https://maps.googleapis.com/maps/api/place/details/json` +
      `?place_id=${encodeURIComponent(PLACE_ID)}` +
      `&fields=reviews,rating,user_ratings_total` +
      `&reviews_sort=newest&language=en-GB&key=${PLACES_KEY}`;
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      status?: string;
      result?: { reviews?: PlaceReview[] };
    };
    if (data.status !== "OK") return null;
    const reviews = (data.result?.reviews ?? [])
      .filter((r) => r.text && r.rating >= 4)
      .slice(0, 6);
    return reviews.length ? reviews : null;
  } catch {
    return null;
  }
}

export async function GoogleReviews({ fallback }: { fallback: ReactNode }) {
  const reviews = await getReviews();
  if (!reviews) return <>{fallback}</>;

  return (
    <div className="grid md:grid-cols-3 gap-5">
      {reviews.map((r, i) => (
        <TestimonialCard
          key={`${r.author_name}-${i}`}
          content={r.text}
          author={r.author_name}
          location={r.relative_time_description}
          rating={Math.round(r.rating)}
        />
      ))}
    </div>
  );
}

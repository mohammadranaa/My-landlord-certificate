// src/data/reviews.ts
//
// Genuine customer reviews — copied verbatim from the
// My Landlord Certificate Google Business Profile and
// Trustpilot page. Do NOT edit review text (not even
// typos). Editing a customer's words makes it a
// misleading review.
//
// Dates are month-level because Google only shows
// relative dates ("7 weeks ago"). Captured 28 Sep 2026.
//
// To add a new review: copy it verbatim, add an entry,
// and update GOOGLE_RATING below if it's from Google.

export type ReviewSource = "Google" | "Trustpilot"

export type ServiceTag =
  | "eicr"
  | "gas-safety"
  | "epc"
  | "fire-risk-assessment"
  | "fire-safety-certificate"
  | "asbestos"
  | "general"

export type Review = {
  id: string
  name: string
  role?: string
  date: string // YYYY-MM
  rating: 1 | 2 | 3 | 4 | 5
  text: string
  source: ReviewSource
  services: ServiceTag[]
  featured?: boolean // shown on the homepage
}

// Real, current figures. Update by hand when new
// reviews arrive. Never round up or estimate.
export const GOOGLE_RATING = {
  rating: 5.0,
  count: 25,
  asOf: "2026-09-28",
} as const

// <RatingBadge> only appends "· N reviews" once the real
// count reaches this floor — low counts read as thin trust,
// not helpful. Raise the count instead of lowering this.
export const SHOW_REVIEW_COUNT_FROM = 100

export const REVIEWS: Review[] = [
  // ── Featured ──────────────────────────────────────
  {
    id: "jessica-hall",
    name: "Jessica Hall",
    role: "J Property Management",
    date: "2026-08",
    rating: 5,
    source: "Google",
    services: ["eicr", "fire-risk-assessment", "asbestos"],
    featured: true,
    text:
      "I’ve now used this company four times and can honestly say they’ve been brilliant from start to finish.\n\n" +
      "I originally found them after being let down repeatedly by another company (to the point where I’m now having to take legal action), so I was understandably very nervous about using someone new. I’m so glad I chose them.\n\n" +
      "They’ve carried out EICRs, Fire Risk Assessments, a substantial package of follow-on fire safety works, and I’ve now booked them again for another Fire Risk Assessment, EICR and an Asbestos Management Survey.\n\n" +
      "Every member of the team has been incredibly responsive, professional and helpful. They’re always happy to answer questions, no matter how many you have, and they never make you feel like you’re a burden. Communication has been excellent throughout, which is something I really value.\n\n" +
      "On the larger follow-on works, they initially quoted two days to complete the job but actually finished it in just over one day, which was a fantastic surprise. Although I wasn’t present during the Fire Risk Assessment at one of the blocks, one of the directors there commented on how friendly and helpful their surveyor was. One of my own team members, who met him on site, said exactly the same.\n\n" +
      "Overall, I’m genuinely impressed with the quality of their work, their professionalism and how easy they are to deal with. They’ve gone above and beyond on every project we’ve given them, and they’ll continue to be my first choice for compliance work. I wouldn’t hesitate to recommend them.",
  },
  {
    id: "nandini-bhat",
    name: "Nandini Bhat",
    role: "Private Landlord",
    date: "2026-07",
    rating: 5,
    source: "Google",
    services: ["eicr", "epc"],
    featured: true,
    text:
      "My Landlord Certificate gave me a excellent service. They were very prompt in answering & dealing with all of my 4 properties. Also they are much competitive than other similar firms. Sorted everything with EICR & EPC promptly with 4 of my properties. Will definitely use them in the future and recommend anyone to use their services. You will not be disappointed. Awaiting for my 3 EICR & EPC certificates which will receive today as my Internet was down.\n" +
      "Thank you Asad & Moiz.\n" +
      "Best wishes always.",
  },
  {
    id: "kejun-yan",
    name: "Kejun Yan",
    role: "Private Landlord",
    date: "2026-09",
    rating: 5,
    source: "Google",
    services: ["eicr"],
    featured: true,
    text:
      "Excellent and reliable service. The team genuinely went above and beyond to resolve the electrical issues as quickly as possible. They communicated clearly, arranged urgent remedial work at very short notice, and made every effort to help me meet my responsibilities as a landlord. Professional, responsive and extremely supportive throughout. I would highly recommend them.",
  },
  {
    id: "taimour-a",
    name: "Taimour A.",
    date: "2026-09",
    rating: 5,
    source: "Google",
    services: ["general"],
    featured: true,
    text:
      "Really happy with the service from My Landlord Certificate. The booking process was quick and straightforward, and the engineer arrived on time and was very professional. Everything was explained clearly, and the certificate was sorted without any hassle. Would definitely recommend them",
  },
  {
    id: "vulincwala-n",
    name: "Vulincwala N.",
    date: "2026-08",
    rating: 5,
    source: "Google",
    services: ["eicr"],
    featured: true,
    text:
      "Spot on service from John from start to finish. Booked an EICR online and the engineer turned up right on time. Certificate sent over the next morning.",
  },
  {
    id: "ahmed-a",
    name: "Ahmed A.",
    date: "2026-08",
    rating: 5,
    source: "Google",
    services: ["gas-safety"],
    featured: true,
    text:
      "Appreciated how polite Moiz was with my elderly tenant while carrying out the gas inspection. Very respectful.",
  },

  // ── Service-specific ──────────────────────────────
  {
    id: "wolfgang-j",
    name: "Wolfgang J.",
    date: "2026-08",
    rating: 5,
    source: "Google",
    services: ["eicr"],
    text:
      "Used My Landlord for Electrical Certificate.\nEasy to book, quickly available, good communication!\nThank you!",
  },
  {
    id: "shaheer-a",
    name: "Shaheer A.",
    date: "2026-06",
    rating: 5,
    source: "Google",
    services: ["eicr"],
    text:
      "Everyone was highly cooperative and handled the whole process very well. They conducted an EICR at my property. The process was smooth and the certificate was delivered on time.",
  },
  {
    id: "naufal-s",
    name: "Naufal S.",
    date: "2026-07",
    rating: 5,
    source: "Google",
    services: ["fire-risk-assessment"],
    text:
      "Excellent service! I got my Fire Risk Assessment certificate right on time, and the team was incredibly helpful in guiding me through rectifying the issues. The staff was super cooperative from start to finish. Highly recommended",
  },
  {
    id: "awaiz-a",
    name: "Awaiz A.",
    date: "2026-06",
    rating: 5,
    source: "Google",
    services: ["fire-safety-certificate"],
    text:
      "Smoke and heat alarms inspected and certified professionally. Engineer was punctual and knew exactly what he was doing. Certificate received promptly afterwards.",
  },
  {
    id: "maha-r",
    name: "Maha R.",
    date: "2026-06",
    rating: 5,
    source: "Google",
    services: ["epc"],
    text:
      "Had our Energy Performance Certificate done with My Landlord Certificate. Easy to book, prompt service and the certificate was issued and lodged on the national register without any hassle.",
  },
  {
    id: "wajahat-a",
    name: "Wajahat A.",
    date: "2026-06",
    rating: 5,
    source: "Google",
    services: ["gas-safety"],
    text:
      "Quick and efficient Gas Safety inspection. The engineer arrived on time, checked everything properly and we had our certificate the same day. Great service.",
  },

  // ── General ───────────────────────────────────────
  {
    id: "amitoj-c",
    name: "Amitoj C.",
    date: "2026-09",
    rating: 5,
    source: "Google",
    services: ["general"],
    text:
      "Great service, very efficient, booked the job in the next day had the certificate within 48 hours.",
  },
  {
    id: "leigh-d",
    name: "Leigh D.",
    date: "2026-09",
    rating: 5,
    source: "Google",
    services: ["general"],
    text: "Really good service and communication was excellent.",
  },
  {
    id: "aariz-a",
    name: "Aariz A.",
    date: "2026-08",
    rating: 5,
    source: "Google",
    services: ["general"],
    text:
      "Reliable team, fair pricing, and fast turnaround. Will definitely be sticking with Moiz and the team for all future compliance checks.",
  },
  {
    id: "aayan-a",
    name: "Aayan A.",
    date: "2026-08",
    rating: 5,
    source: "Google",
    services: ["general"],
    text:
      "Great experience overall. Booking was seamless and the team went above and beyond to get everything completed on schedule.",
  },
  {
    id: "ruan-a",
    name: "Ruan A.",
    date: "2026-08",
    rating: 5,
    source: "Google",
    services: ["general"],
    text:
      "I’m very satisfied with the service. They were quickly to respond, the communication was great, very professional. I highly recommend this company. Thank you",
  },
  {
    id: "shahzaib-h",
    name: "Shahzaib H.",
    date: "2026-08",
    rating: 5,
    source: "Google",
    services: ["general"],
    text:
      "Super quick turnaround! Had the certificates emailed to me the same evening the inspection was done.",
  },
  {
    id: "sasha-j",
    name: "Sasha J.",
    date: "2026-07",
    rating: 5,
    source: "Google",
    services: ["general"],
    text:
      "Fantastic company! I couldn't recommend them highly enough. The service was outstanding from start to finish.",
  },
  {
    id: "mohammed",
    name: "Mohammed",
    date: "2026-08",
    rating: 5,
    source: "Google",
    services: ["general"],
    text: "Excellent service in my case in short time and good response...",
  },
  {
    id: "olga-g",
    name: "Olga G.",
    date: "2026-08",
    rating: 5,
    source: "Google",
    services: ["general"],
    text: "Really good service!",
  },
  {
    id: "akhtar-t",
    name: "Akhtar T.",
    date: "2026-09",
    rating: 5,
    source: "Google",
    services: ["general"],
    text: "Great service",
  },
  {
    id: "george-l",
    name: "George L.",
    date: "2026-08",
    rating: 5,
    source: "Google",
    services: ["general"],
    text: "Good customer service",
  },
  {
    id: "nasima-t",
    name: "Nasima T.",
    date: "2026-09",
    rating: 5,
    source: "Trustpilot",
    services: ["general"],
    text: "Very satisfied Good prompt service Very courteous helpful agent",
  },
]

// Helpers
export const featuredReviews = () =>
  REVIEWS.filter((r) => r.featured)

export const reviewsForService = (tag: ServiceTag, limit = 3) =>
  REVIEWS.filter((r) => r.services.includes(tag))
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit)

export const allReviewsNewestFirst = () =>
  [...REVIEWS].sort((a, b) => b.date.localeCompare(a.date))

export type Review = {
  name: string; // first name + initial
  date: string; // ISO date
  rating: 5 | 4 | 3 | 2 | 1;
  text: string; // verbatim, unedited
  source: "Google" | "Trustpilot";
};

export const REVIEWS: Review[] = [
  // PASTE REAL REVIEWS HERE — verbatim
  // { name: "Leigh D.", date: "2026-09-19",
  //   rating: 5, source: "Trustpilot",
  //   text: "..." },
];

import type { BoroughLocal, LocalFaq, LocalServiceKey } from "./types";
import { barkingDagenham } from "./barking-dagenham";
import { barnet } from "./barnet";
import { bexley } from "./bexley";
import { brent } from "./brent";
import { bromley } from "./bromley";
import { camden } from "./camden";
import { cityOfLondon } from "./city-of-london";
import { croydon } from "./croydon";
import { ealing } from "./ealing";
import { enfield } from "./enfield";
import { greenwich } from "./greenwich";
import { hackney } from "./hackney";
import { hammersmithFulham } from "./hammersmith-fulham";
import { hillingdon } from "./hillingdon";
import { hounslow } from "./hounslow";
import { islington } from "./islington";
import { haringey } from "./haringey";
import { harrow } from "./harrow";
import { havering } from "./havering";
import { kensingtonChelsea } from "./kensington-chelsea";
import { kingstonUponThames } from "./kingston-upon-thames";
import { lambeth } from "./lambeth";
import { lewisham } from "./lewisham";
import { merton } from "./merton";
import { newham } from "./newham";
import { redbridge } from "./redbridge";
import { richmondUponThames } from "./richmond-upon-thames";
import { southwark } from "./southwark";
import { sutton } from "./sutton";
import { towerHamlets } from "./tower-hamlets";
import { walthamForest } from "./waltham-forest";
import { wandsworth } from "./wandsworth";
import { westminster } from "./westminster";

const BOROUGH_LOCAL: Record<string, BoroughLocal> = {
  "barking-dagenham": barkingDagenham,
  barnet,
  bexley,
  brent,
  bromley,
  camden,
  "city-of-london": cityOfLondon,
  croydon,
  ealing,
  enfield,
  greenwich,
  hackney,
  "hammersmith-fulham": hammersmithFulham,
  hillingdon,
  hounslow,
  islington,
  haringey,
  harrow,
  havering,
  "kensington-chelsea": kensingtonChelsea,
  "kingston-upon-thames": kingstonUponThames,
  lambeth,
  lewisham,
  merton,
  newham,
  redbridge,
  "richmond-upon-thames": richmondUponThames,
  southwark,
  sutton,
  "tower-hamlets": towerHamlets,
  "waltham-forest": walthamForest,
  wandsworth,
  westminster,
};

export function getBoroughLocal(slug: string): BoroughLocal | undefined {
  return BOROUGH_LOCAL[slug];
}

export function localFaqsFor(slug: string, serviceKey: string): readonly LocalFaq[] {
  return getBoroughLocal(slug)?.serviceFaqs[serviceKey as LocalServiceKey] ?? [];
}

export type { BoroughLocal, LocalServiceKey } from "./types";

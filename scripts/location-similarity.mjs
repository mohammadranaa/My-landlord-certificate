// Measures audit finding C2: shared 8-word phrases between borough pages of the same service,
// after stripping borough names and postcodes. Reads prerendered HTML from `.next` (run `next build` first).
// Primary metric (rule U4): words per page that appear in no other borough page of the same service.
// Usage: node scripts/location-similarity.mjs [service ...] [--boroughs=camden,hackney] [--min-unique=350] [--max=60]
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP = path.join(ROOT, ".next", "server", "app");
const args = process.argv.slice(2);
const flag = (n) => args.find((a) => a.startsWith(`--${n}=`))?.split("=")[1];
const max = Number(flag("max") ?? 60);
const minUnique = Number(flag("min-unique") ?? 350);
const onlyBoroughs = flag("boroughs")?.split(",");

const boroughSrc = fs.readFileSync(path.join(ROOT, "src", "lib", "borough-data.ts"), "utf8");
const boroughs = [...boroughSrc.matchAll(/^\s{2}"([a-z-]+)":\s*\{[\s\S]*?name:\s*"([^"]+)",[\s\S]*?displayName:\s*"([^"]+)",[\s\S]*?postcodes:\s*\[([^\]]*)\]/gm)].map(
  (m) => ({ slug: m[1], names: [m[2], m[3]], postcodes: [...m[4].matchAll(/"([^"]+)"/g)].map((p) => p[1]) }),
);

const sets = args.filter((a) => !a.startsWith("--"));
const services = sets.length
  ? sets
  : fs.readdirSync(APP).filter((d) => fs.existsSync(path.join(APP, d, `${boroughs[0].slug}.html`)));

function text(html) {
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? html;
  return main
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ");
}

function shingles(raw, b) {
  let t = raw;
  for (const n of [...b.names].sort((x, y) => y.length - x.length)) t = t.split(n).join(" ");
  for (const p of b.postcodes) t = t.replace(new RegExp(`\\b${p}\\b`, "g"), " ");
  const words = t.toLowerCase().replace(/[^a-z0-9£' ]+/g, " ").split(/\s+/).filter(Boolean);
  const list = [];
  for (let i = 0; i + 8 <= words.length; i++) list.push(words.slice(i, i + 8).join(" "));
  return { set: new Set(list), list, words: words.length };
}

let failed = false;
console.log(`service`.padEnd(36), "pages", "avg%", "worst%", "uniqueWords(min/avg)", "lowest page");
for (const svc of services) {
  const pages = boroughs
    .filter((b) => fs.existsSync(path.join(APP, svc, `${b.slug}.html`)))
    .map((b) => ({ b, ...shingles(text(fs.readFileSync(path.join(APP, svc, `${b.slug}.html`), "utf8")), b) }));
  if (pages.length < 2) continue;
  const focus = onlyBoroughs ? pages.filter((p) => onlyBoroughs.includes(p.b.slug)) : pages;
  // Rule U4: overlap is a set-level average across all borough pages of the service; unique words are checked per focus page.
  let sum = 0, n = 0, worst = { v: 0, pair: "" };
  for (const a of pages) {
    for (const c of pages) {
      if (a === c) continue;
      let shared = 0;
      for (const s of a.set) if (c.set.has(s)) shared++;
      const v = (shared / Math.max(1, a.set.size)) * 100;
      sum += v; n++;
      if (v > worst.v) worst = { v, pair: `${a.b.slug} vs ${c.b.slug}` };
    }
  }
  const avg = sum / Math.max(1, n);
  const counts = new Map();
  for (const p of pages) for (const s of p.set) counts.set(s, (counts.get(s) ?? 0) + 1);
  const uniq = focus.map((p) => {
    const covered = new Set();
    p.list.forEach((s, i) => { if (counts.get(s) === 1) for (let k = i; k < i + 8; k++) covered.add(k); });
    return { slug: p.b.slug, u: covered.size };
  });
  const minU = uniq.reduce((m, x) => (x.u < m.u ? x : m), uniq[0]);
  const avgU = uniq.reduce((t, x) => t + x.u, 0) / uniq.length;
  if (minU.u < minUnique || (!onlyBoroughs && avg > max)) failed = true;
  console.log(svc.padEnd(36), String(pages.length).padEnd(5), avg.toFixed(0).padEnd(4), worst.v.toFixed(0).padEnd(6), `${minU.u}/${avgU.toFixed(0)}`.padEnd(20), minU.slug);
}
console.log(`\nPass (rule U4): every page ${minUnique}+ unique words AND set overlap ${max}% or less.`);
process.exit(failed ? 1 : 0);

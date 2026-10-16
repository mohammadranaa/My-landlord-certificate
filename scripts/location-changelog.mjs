// Before/after change log for the 627 location pages. Logs live in content-research/locations/change-log/ (git-ignored).
//   node scripts/location-changelog.mjs before            snapshot the LIVE site text of every location page (run once, before rollout)
//   node scripts/location-changelog.mjs record <slug>     after a borough passes: snapshot local build text, write per-page logs
//   node scripts/location-changelog.mjs status            totals: pages to do, done, pending
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = process.cwd();
const LIVE = "https://www.mylandlordcertificate.co.uk";
const APP = path.join(ROOT, ".next", "server", "app");
const LOG = path.join(ROOT, "content-research", "locations", "change-log");
const [cmd, arg] = process.argv.slice(2);

const boroughSrc = fs.readFileSync(path.join(ROOT, "src", "lib", "borough-data.ts"), "utf8");
const BOROUGHS = [...boroughSrc.matchAll(/^\s{2}"([a-z-]+)":\s*\{[\s\S]*?name:\s*"([^"]+)"/gm)].map((m) => ({ slug: m[1], name: m[2] }));
const SERVICES = fs
  .readdirSync(APP)
  .filter((d) => fs.existsSync(path.join(APP, d, `${BOROUGHS[0].slug}.html`)))
  .sort();
const TOTAL = SERVICES.length * BOROUGHS.length;

function pageText(html) {
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? html;
  return main
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<\/(p|h[1-6]|li|tr|dt|dd|summary|div|section|table)>/g, "\n")
    .replace(/<br\s*\/?>/g, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&").replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, " ").replace(/&[a-z#0-9]+;/gi, " ")
    .split("\n")
    .map((l) => l.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join("\n");
}

const words = (t) => t.split(/\s+/).filter(Boolean).length;
const sentences = (t) =>
  t.split("\n").flatMap((l) => l.split(/(?<=[.?!])\s+(?=[A-Z£0-9])/)).map((s) => s.trim()).filter((s) => s.split(" ").length >= 3);
const file = (kind, svc, slug) => path.join(LOG, kind, svc, `${slug}.txt`);
const write = (p, s) => (fs.mkdirSync(path.dirname(p), { recursive: true }), fs.writeFileSync(p, s));

function fetchLive(url) {
  return execFileSync("curl", ["-s", "-L", "--max-time", "30", "-A", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0", url], {
    maxBuffer: 20 * 1024 * 1024,
  }).toString();
}

function loadIndex() {
  const p = path.join(LOG, "index.json");
  return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, "utf8")) : {};
}

function saveIndex(idx) {
  fs.writeFileSync(path.join(LOG, "index.json"), JSON.stringify(idx, null, 2));
  const rows = SERVICES.flatMap((svc) =>
    BOROUGHS.map((b) => {
      const r = idx[`${svc}/${b.slug}`];
      return `| /${svc}/${b.slug} | ${r?.status ?? "pending"} | ${r?.changedOn ?? ""} | ${r?.beforeWords ?? ""} | ${r?.afterWords ?? ""} | ${r ? r.added : ""} | ${r ? r.removed : ""} | ${r ? `[log](pages/${svc}--${b.slug}.md)` : ""} |`;
    }),
  );
  const done = Object.values(idx).filter((r) => r.status === "updated").length;
  fs.writeFileSync(
    path.join(LOG, "index.md"),
    `# Location page change log\n\nTotal pages: ${TOTAL} (${SERVICES.length} page types x ${BOROUGHS.length} boroughs). Updated: ${done}. Pending: ${TOTAL - done}.\n\nBefore = live site text captured before the rewrite. After = local build text when the borough passed all gates.\n\n| Page | Status | Changed on | Words before | Words after | Sentences added | Sentences removed | Log |\n|---|---|---|---|---|---|---|---|\n${rows.join("\n")}\n`,
  );
}

if (cmd === "before") {
  let n = 0, failed = [];
  for (const svc of SERVICES) {
    for (const b of BOROUGHS) {
      const p = file("before", svc, b.slug);
      if (fs.existsSync(p)) { n++; continue; }
      try {
        const html = fetchLive(`${LIVE}/${svc}/${b.slug}`);
        if (!html.includes("<main")) throw new Error("no <main>");
        write(p, pageText(html));
        n++;
      } catch (e) {
        failed.push(`${svc}/${b.slug}: ${e.message}`);
      }
    }
    console.log(`${svc}: done`);
  }
  write(path.join(LOG, "before", "_captured.txt"), `Captured from ${LIVE} on ${new Date().toISOString()}\n${n}/${TOTAL} pages\n${failed.join("\n")}\n`);
  console.log(`Captured ${n}/${TOTAL}. Failed: ${failed.length}`);
  process.exit(failed.length ? 1 : 0);
}

if (cmd === "record") {
  const b = BOROUGHS.find((x) => x.slug === arg);
  if (!b) throw new Error(`Unknown borough slug: ${arg}`);
  const idx = loadIndex();
  const today = new Date().toISOString().slice(0, 10);
  for (const svc of SERVICES) {
    const beforeP = file("before", svc, b.slug);
    if (!fs.existsSync(beforeP)) throw new Error(`Missing before snapshot for ${svc}/${b.slug}. Run "before" first.`);
    const before = fs.readFileSync(beforeP, "utf8");
    const after = pageText(fs.readFileSync(path.join(APP, svc, `${b.slug}.html`), "utf8"));
    write(file("after", svc, b.slug), after);
    const bs = new Set(sentences(before));
    const as = new Set(sentences(after));
    const added = [...as].filter((s) => !bs.has(s));
    const removed = [...bs].filter((s) => !as.has(s));
    const md = `# /${svc}/${b.slug}\n\nChanged on: ${today}\nLive URL: ${LIVE}/${svc}/${b.slug}\nWords before: ${words(before)}  |  Words after: ${words(after)}\nSentences added: ${added.length}  |  Sentences removed: ${removed.length}\n\nFull text: \`before/${svc}/${b.slug}.txt\` and \`after/${svc}/${b.slug}.txt\`\nReasons and sources: \`content-research/locations/${b.slug}/\` (facts.md, verify-report.md, critique.md, revision-log.md)\n\n## Removed\n${removed.map((s) => `- ${s}`).join("\n") || "- (none)"}\n\n## Added\n${added.map((s) => `- ${s}`).join("\n") || "- (none)"}\n\n## Review (fill in later)\n- Good / bad change:\n- Notes:\n`;
    write(path.join(LOG, "pages", `${svc}--${b.slug}.md`), md);
    idx[`${svc}/${b.slug}`] = { status: "updated", changedOn: today, beforeWords: words(before), afterWords: words(after), added: added.length, removed: removed.length };
  }
  saveIndex(idx);
  console.log(`Recorded ${SERVICES.length} pages for ${b.slug}.`);
}

if (cmd === "status" || !cmd) {
  const idx = loadIndex();
  const done = Object.values(idx).filter((r) => r.status === "updated").length;
  const captured = SERVICES.reduce((t, s) => t + BOROUGHS.filter((b) => fs.existsSync(file("before", s, b.slug))).length, 0);
  console.log(`Total location pages: ${TOTAL} (${SERVICES.length} page types x ${BOROUGHS.length} boroughs)`);
  console.log(`Before snapshots captured: ${captured}/${TOTAL}`);
  console.log(`Updated and logged: ${done}`);
  console.log(`Pending: ${TOTAL - done}`);
}

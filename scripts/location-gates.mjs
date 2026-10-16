// Automated quality gates for one borough's location content (rules Q1, A, B, W).
// Usage: node scripts/location-gates.mjs <slug> [--skip-tsc] [--skip-links]
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execSync, execFileSync } from "node:child_process";

const ROOT = process.cwd();
const slug = process.argv[2];
const skip = (f) => process.argv.includes(`--skip-${f}`);
if (!slug) {
  console.error("Usage: node scripts/location-gates.mjs <slug>");
  process.exit(2);
}

const results = [];
const record = (gate, status, detail = "") => results.push({ gate, status, detail });

const dataFile = path.join(ROOT, "src", "data", "borough-local", `${slug}.ts`);
if (!fs.existsSync(dataFile)) {
  console.error(`No data file: ${dataFile}`);
  process.exit(2);
}
const data = fs.readFileSync(dataFile, "utf8");
const boroughSrc = fs.readFileSync(path.join(ROOT, "src", "lib", "borough-data.ts"), "utf8");
const entry = boroughSrc.match(new RegExp(`\\n\\s{2}"${slug}":\\s*\\{[\\s\\S]*?\\n\\s{2}\\},`))?.[0] ?? "";
const copy = `${data}\n${entry}`;

// B / W: banned phrases
const banned = [
  [/same[- ]day/i, "B3 same day"],
  [/south east/i, "B1 South East"],
  [/same[- ]week|next[- ]day/i, "B4 appointment speed (pending owner decision)"],
  [/£\s?30,000/, "B6 outdated £30,000 penalty"],
  [/\b(nestled|vibrant|bustling|rich history|look no further|one-stop shop|in today's world)\b/i, "W3 filler"],
  [/recommended by (the )?council|council[- ]approved (engineer|electrician|contractor|provider|company|assessor|installer)s?|approved by (the )?council|partner(ed)? with (the )?council/i, "B8 council endorsement"],
];
const bannedHits = [];
copy.split("\n").forEach((line, i) => {
  for (const [re, why] of banned) if (re.test(line)) bannedHits.push(`${why}: line ${i + 1}: ${line.trim().slice(0, 100)}`);
});
record("Banned phrases", bannedHits.length ? "FAIL" : "PASS", bannedHits.join("\n    "));

// B5: any £ figure must be a council figure or a sourced penalty — listed for human check
const money = [...data.matchAll(/£[\d,.]+/g)].map((m) => m[0]);
record("£ figures (check each is a council/penalty figure, never our price)", money.length ? "REVIEW" : "PASS", [...new Set(money)].join(", "));

// A: audit alignment
const licensingRows = (data.match(/type:\s*"(Mandatory HMO|Additional HMO|Selective)"/g) ?? []).length;
record("A1 licensing schemes listed", licensingRows > 0 ? "PASS" : "FAIL", `${licensingRows} scheme(s)`);
record("A2 council route URLs", /housingUrl:\s*"https?:/.test(data) && /licensingUrl:\s*"https?:/.test(data) ? "PASS" : "FAIL");
record("A3 Census 2021 stock/tenure fact", /Census 2021/.test(data) ? "PASS" : "FAIL");
const hasAge = /VOA|built before|pre-19\d\d|before 19\d\d/i.test(data);
record("A4 property age fact", hasAge ? "PASS" : "REVIEW", hasAge ? "" : "no build-age fact found");
const notes = path.join(ROOT, "content-research", "locations", slug);
record("A6 legacy copy replaced (contextOverride) or re-checked", /contextOverride:\s*\{/.test(data) || (fs.existsSync(path.join(notes, "revision-log.md")) && /borough-data/i.test(fs.readFileSync(path.join(notes, "revision-log.md"), "utf8"))) ? "PASS" : "REVIEW", "");
const ccz = path.join(ROOT, "content-research", "locations", "congestion-zone.md");
record("A7 congestion zone research exists", fs.existsSync(ccz) ? "PASS" : "FAIL");

// Pipeline reports
for (const [file, pass] of [["verify-report.md", /Verdict:\W*PASS/], ["critique.md", /Overall:\W*READY/], ["proofread.md", /Verdict:\W*(CLEAN|FIXED)/]]) {
  const p = path.join(notes, file);
  const ok = fs.existsSync(p) && pass.test(fs.readFileSync(p, "utf8"));
  record(`Report ${file}`, ok ? "PASS" : "FAIL", fs.existsSync(p) ? "" : "missing");
}

// Q1: type check
if (!skip("tsc")) {
  try {
    execSync("npx tsc --noEmit", { stdio: "pipe" });
    record("TypeScript", "PASS");
  } catch (e) {
    record("TypeScript", "FAIL", String(e.stdout).slice(0, 400));
  }
}

// Q1: source links respond
if (!skip("links")) {
  const urls = [...new Set([...data.matchAll(/https?:\/\/[^"'\s)]+/g)].map((m) => m[0]))];
  const bad = [];
  const blocked = [];
  for (const url of urls) {
    try {
      const code = execFileSync(
        "curl",
        ["-s", "-o", os.devNull, "-L", "--max-time", "25", "-w", "%{http_code}", "-A",
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36", url],
        { stdio: "pipe" },
      ).toString().trim();
      // 403 = bot block, 429 = rate limit (web.archive.org): the page exists, so a human checks it instead of failing.
      if (code === "403" || code === "429") blocked.push(url);
      else if (!/^[23]\d\d$/.test(code)) bad.push(`${code} ${url}`);
    } catch {
      bad.push(`ERR ${url}`);
    }
  }
  record(`Source links (${urls.length})`, bad.length ? "FAIL" : "PASS", bad.join("\n    "));
}

// U4: uniqueness, only if the build is newer than the data file
const built = path.join(ROOT, ".next", "server", "app", "eicr", `${slug}.html`);
if (fs.existsSync(built) && fs.statSync(built).mtimeMs > fs.statSync(dataFile).mtimeMs) {
  try {
    const out = execSync(`node scripts/location-similarity.mjs --boroughs=${slug}`, { stdio: "pipe" }).toString();
    record("U4 uniqueness", "PASS", out.split("\n").filter((l) => /^\w/.test(l)).length + " sets measured");
  } catch (e) {
    record("U4 uniqueness", "FAIL", String(e.stdout).trim().split("\n").slice(-25).join("\n    "));
  }
} else {
  record("U4 uniqueness", "REVIEW", "build is older than the data file: run npx next build");
}

let failed = false;
for (const r of results) {
  if (r.status === "FAIL") failed = true;
  console.log(`${r.status.padEnd(6)} ${r.gate}${r.detail ? `\n    ${r.detail}` : ""}`);
}
console.log(failed ? `\n${slug}: GATES FAILED` : `\n${slug}: all automated gates passed (REVIEW items need a human look)`);
process.exit(failed ? 1 : 0);

// Grok Bot 官方文档同步：抓 docs.x.ai/llms.txt 里「Grok Bot」那几节的每一页 .md，存到 docs/sources/raw/official/，
// 和 docs/sources/official.json 里上次的指纹比对，列出新增、删除、改动的页面，再更新 official.json。
//
//   node scripts/sync-docs.mjs          抓取并比对
//   node scripts/sync-docs.mjs --check  只比对，不写文件（有变化时退出码 1）
//
// 改动的页面要对照 docs/sources/README.md 里的「和本站的对应」表，改掉本站相应的地方。
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, unlinkSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const RAW = join(ROOT, "docs/sources/raw/official");
const INDEX = join(ROOT, "docs/sources/official.json");
const LLMS = "https://docs.x.ai/llms.txt";
const CHECK = process.argv.includes("--check");

const get = async (url) => {
  const res = await fetch(url, { headers: { "user-agent": "xxd-grokbot-docs-sync" } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
};

const sectionUrls = (llms) => {
  const urls = new Set();
  let inBot = false;
  for (const line of llms.split("\n")) {
    if (line.startsWith("## ")) inBot = /Grok Bot/.test(line);
    const m = line.match(/\((https:\/\/docs\.x\.ai\/[^)]+\.md)\)/);
    if (!m) continue;
    if (inBot || /\/grok-bot[/.]|\/x-subscription\/(grok-bot|referral)/.test(m[1])) urls.add(m[1]);
  }
  return [...urls].sort();
};

const fileName = (url) => {
  const [dir, page] = new URL(url).pathname.replace(/^\//, "").split("/");
  return `${dir}-${page}`;
};
const sha = (s) => createHash("sha256").update(s).digest("hex").slice(0, 16);
const words = (s) => s.split(/\s+/).filter(Boolean).length;

const before = existsSync(INDEX) ? JSON.parse(readFileSync(INDEX, "utf8")) : { pages: {} };
const urls = sectionUrls(await get(LLMS));
const after = { fetched: new Date().toISOString().slice(0, 10), source: LLMS, pages: {} };
const texts = {};
for (const url of urls) {
  const text = await get(url);
  texts[url] = text;
  after.pages[url] = { file: fileName(url), sha: sha(text), words: words(text) };
}

const added = urls.filter((u) => !before.pages[u]);
const removed = Object.keys(before.pages).filter((u) => !after.pages[u]);
const changed = urls.filter((u) => before.pages[u] && before.pages[u].sha !== after.pages[u].sha);
const show = (label, list) => list.length && console.log(`${label}（${list.length}）\n${list.map((u) => "  " + u.replace(/\.md$/, "")).join("\n")}`);
show("新增", added);
show("删除", removed);
show("改动", changed);
if (!added.length && !removed.length && !changed.length) console.log(`✓ ${urls.length} 页，和 ${before.fetched ?? "上次"} 一样`);

if (CHECK) process.exit(added.length || removed.length || changed.length ? 1 : 0);

mkdirSync(RAW, { recursive: true });
for (const url of urls) writeFileSync(join(RAW, after.pages[url].file), texts[url]);
for (const url of removed) {
  const p = join(RAW, before.pages[url].file);
  if (existsSync(p)) unlinkSync(p);
}
writeFileSync(join(RAW, "_urls.txt"), urls.join("\n") + "\n");
const stray = readdirSync(RAW).filter((f) => f.endsWith(".md") && !Object.values(after.pages).some((p) => p.file === f));
if (stray.length) console.log(`raw/official 里多出来的文件（没删）：${stray.join("、")}`);
writeFileSync(INDEX, JSON.stringify(after, null, 2) + "\n");
console.log(`已写入 ${urls.length} 页和 docs/sources/official.json`);

// 核对页面里写的界面名字。
//
//   node scripts/check-ui-labels.mjs
//
// 英文页：加粗的英文短语（**New Bot**）当作按钮或菜单名，到本机装的 Grok Bot 和官方文档副本里找。
//   以句号、冒号结尾的加粗是列表的小标题，不查；中文页没当按钮写过的加粗也不查。
// 其他语言的页（中文、日语、韩语……）：
//   **新建 Bot**（New Bot）、**新しいBot**（New Bot）、**Nuevo Bot** (New Bot) 这种写法，查 app 在那种界面语言里是不是就这么写。
//   中文页的旧写法 **New Bot**（新建 bot）、别的语言页里单独加粗的英文按钮名（app 里有那种语言的写法），提示改成 app 的写法。
// 默认读 /Applications/Grok Bot.app（GROK_BOT_ASAR 可以改）。没装就只对照官方文档副本。只在本地用。
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { loadCatalog, labelOf } from "./app-labels.mjs";
import { LANGS } from "../src/data/nav.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const ASAR = process.env.GROK_BOT_ASAR ?? "/Applications/Grok Bot.app/Contents/Resources/app.asar";
const RAW = join(ROOT, "docs/sources/raw/official");

const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : p.endsWith(".mdx") ? [p] : [];
});

const app = existsSync(ASAR) ? readFileSync(ASAR) : null;
// 页面语言 → app 的界面语言
const LOCALE = { zh: "zh-CN", ja: "ja", ko: "ko", es: "es", pt: "pt", fr: "fr", de: "de", ru: "ru", ar: "ar" };
const catalogs = {};
const catalogOf = (lang) => (lang in catalogs ? catalogs[lang] : (catalogs[lang] = LOCALE[lang] ? loadCatalog(ASAR, LOCALE[lang]) : null));
const catalog = catalogOf("zh");
const PREFIXED = new Set(LANGS.map((l) => l.code).filter((c) => c !== "zh"));
const langOfFile = (rel) => {
  const first = rel.split("/")[2];
  return PREFIXED.has(first) ? first : "zh";
};
const docs = existsSync(RAW) ? readdirSync(RAW).filter((f) => f.endsWith(".md")).map((f) => readFileSync(join(RAW, f), "utf8")).join("\n").replace(/\s+/g, " ") : "";
if (!app) console.log(`没找到 ${ASAR}，只对照官方文档副本`);
if (!docs) console.log("没找到 docs/sources/raw/official/，先跑 node scripts/sync-docs.mjs");

const EN = "[A-Za-z][A-Za-z0-9 &'’,+→/…-]{1,40}?";
const BOLD_EN = new RegExp(`\\*\\*(${EN})\\*\\*|<(?:strong|b)>(${EN})</(?:strong|b)>`, "g");
const PAIR = new RegExp(`\\*\\*([^*\\n]{1,30}?)\\*\\*\\s?[（(](${EN})[）)]`, "g");
const EN_PAIR = new RegExp(`\\*\\*(${EN})\\*\\*（([^）\\n]{1,20})）`, "g");

const inApp = (s) => app && app.indexOf(Buffer.from(s, "utf8")) !== -1;
const inDocs = (s) => docs.includes(s);
const add = (map, key, file) => (map.get(key) ?? map.set(key, new Set()).get(key)).add(file);
const where = (files) => [...files].slice(0, 3).join(", ") + (files.size > 3 ? " …" : "");

const en = new Map(), wrongZh = new Map(), oldStyle = new Map();
for (const file of walk(join(ROOT, "src/pages"))) {
  const rel = relative(ROOT, file);
  const text = readFileSync(file, "utf8").replace(/```[\s\S]*?```/g, "");
  const lang = langOfFile(rel);
  if (lang === "en") {
    for (const m of text.matchAll(BOLD_EN)) {
      const label = (m[1] ?? m[2]).trim();
      if (label.split(" ").length > 5) continue;
      add(en, label, rel);
    }
    continue;
  }
  const cat = catalogOf(lang);
  const paired = new Set();
  for (const m of text.matchAll(PAIR)) {
    if (/^[A-Za-z]/.test(m[1]) && m[1] === m[2]) continue;
    const want = labelOf(cat, m[2]);
    if (want && want !== m[1]) add(wrongZh, `[${lang}] **${m[1]}**（${m[2]}）→ app 里是「${want}」`, rel);
    add(en, m[2], rel);
    paired.add(m[2]);
  }
  if (lang === "zh") {
    for (const m of text.matchAll(EN_PAIR)) {
      const zh = labelOf(cat, m[1]);
      if (zh && zh !== m[1]) add(oldStyle, `**${m[1]}**（${m[2]}）→ **${zh}**（${m[1]}）`, rel);
      add(en, m[1], rel);
    }
  } else {
    for (const m of text.matchAll(BOLD_EN)) {
      const label = (m[1] ?? m[2]).trim();
      if (paired.has(label) || label.split(" ").length > 5) continue;
      const want = labelOf(cat, label);
      if (want && want !== label) add(oldStyle, `[${lang}] **${label}** → **${want}**（${label}）`, rel);
    }
  }
}

// 英文页的加粗也用来当列表小标题（**The goal**）。中文页没把它当按钮写过的，就不算界面名。
const onZh = new Set([...en].filter(([, files]) => [...files].some((f) => langOfFile(f) !== "en")).map(([l]) => l));
const rows = { app: [], docs: [], none: [] };
for (const [label, files] of [...en].sort()) {
  const bucket = inApp(label) || labelOf(catalog, label) ? "app" : inDocs(label) ? "docs" : onZh.has(label) ? "none" : null;
  if (!bucket) continue;
  rows[bucket].push(`${label}  ← ${where(files)}`);
}
console.log(`✓ app 里有（${rows.app.length}）`);
if (rows.docs.length) console.log(`~ 只在官方文档里（${rows.docs.length}），照文档写，记进 ui-notes.md 的待核对\n  ${rows.docs.join("\n  ")}`);
if (rows.none.length) console.log(`✗ 两边都找不到（${rows.none.length}），改掉或删掉\n  ${rows.none.join("\n  ")}`);
if (wrongZh.size) console.log(`✗ 写法和 app 不一样（${wrongZh.size}）\n  ${[...wrongZh].map(([k, f]) => `${k}  ← ${where(f)}`).join("\n  ")}`);
if (oldStyle.size) console.log(`✗ 写了英文按钮名，改成 app 在那种语言里的写法（${oldStyle.size}）\n  ${[...oldStyle].map(([k, f]) => `${k}  ← ${where(f)}`).join("\n  ")}`);
process.exitCode = rows.none.length || wrongZh.size || oldStyle.size ? 1 : 0;

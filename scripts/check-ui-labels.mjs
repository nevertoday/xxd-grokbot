// 核对页面里写的界面名字。
//
//   node scripts/check-ui-labels.mjs
//
// 英文页：加粗的英文短语（**New Bot**）当作按钮或菜单名，到本机装的 Grok Bot 和官方文档副本里找。
//   以句号、冒号结尾的加粗是列表的小标题，不查。
// 中文页：
//   **新建 Bot**（New Bot）这种写法，查 app 的简体中文是不是就是「新建 Bot」。
//   **New Bot**（新建 bot）这种旧写法，app 里有中文的，提示改成 app 的中文。
// 默认读 /Applications/Grok Bot.app（GROK_BOT_ASAR 可以改）。没装就只对照官方文档副本。只在本地用。
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { loadCatalog, zhOf } from "./app-labels.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const ASAR = process.env.GROK_BOT_ASAR ?? "/Applications/Grok Bot.app/Contents/Resources/app.asar";
const RAW = join(ROOT, "docs/sources/raw/official");

const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : p.endsWith(".mdx") ? [p] : [];
});

const app = existsSync(ASAR) ? readFileSync(ASAR) : null;
const catalog = loadCatalog(ASAR);
const docs = existsSync(RAW) ? readdirSync(RAW).filter((f) => f.endsWith(".md")).map((f) => readFileSync(join(RAW, f), "utf8")).join("\n").replace(/\s+/g, " ") : "";
if (!app) console.log(`没找到 ${ASAR}，只对照官方文档副本`);
if (!docs) console.log("没找到 docs/sources/raw/official/，先跑 node scripts/sync-docs.mjs");

const EN = "[A-Za-z][A-Za-z0-9 &'’,+→/…-]{1,40}?";
const BOLD_EN = new RegExp(`\\*\\*(${EN})\\*\\*|<(?:strong|b)>(${EN})</(?:strong|b)>`, "g");
const ZH_PAIR = new RegExp(`\\*\\*([^*\\n]{1,20}?)\\*\\*（(${EN})）`, "g");
const EN_PAIR = new RegExp(`\\*\\*(${EN})\\*\\*（([^）\\n]{1,20})）`, "g");

const inApp = (s) => app && app.indexOf(Buffer.from(s, "utf8")) !== -1;
const inDocs = (s) => docs.includes(s);
const add = (map, key, file) => (map.get(key) ?? map.set(key, new Set()).get(key)).add(file);
const where = (files) => [...files].slice(0, 3).join(", ") + (files.size > 3 ? " …" : "");

const en = new Map(), wrongZh = new Map(), oldStyle = new Map();
for (const file of walk(join(ROOT, "src/pages"))) {
  const rel = relative(ROOT, file);
  const text = readFileSync(file, "utf8").replace(/```[\s\S]*?```/g, "");
  const zhPage = !rel.startsWith("src/pages/en/");
  if (zhPage) {
    for (const m of text.matchAll(ZH_PAIR)) {
      if (!/[一-鿿]/.test(m[1])) continue;
      const zh = zhOf(catalog, m[2]);
      if (zh && zh !== m[1]) add(wrongZh, `**${m[1]}**（${m[2]}）→ app 里是「${zh}」`, rel);
      add(en, m[2], rel);
    }
    for (const m of text.matchAll(EN_PAIR)) {
      const zh = zhOf(catalog, m[1]);
      if (zh && zh !== m[1]) add(oldStyle, `**${m[1]}**（${m[2]}）→ **${zh}**（${m[1]}）`, rel);
      add(en, m[1], rel);
    }
  } else {
    for (const m of text.matchAll(BOLD_EN)) {
      const label = (m[1] ?? m[2]).trim();
      if (label.split(" ").length > 5) continue;
      add(en, label, rel);
    }
  }
}

const rows = { app: [], docs: [], none: [] };
for (const [label, files] of [...en].sort()) {
  const bucket = inApp(label) || zhOf(catalog, label) ? "app" : inDocs(label) ? "docs" : "none";
  rows[bucket].push(`${label}  ← ${where(files)}`);
}
console.log(`✓ app 里有（${rows.app.length}）`);
if (rows.docs.length) console.log(`~ 只在官方文档里（${rows.docs.length}），照文档写，记进 ui-notes.md 的待核对\n  ${rows.docs.join("\n  ")}`);
if (rows.none.length) console.log(`✗ 两边都找不到（${rows.none.length}），改掉或删掉\n  ${rows.none.join("\n  ")}`);
if (wrongZh.size) console.log(`✗ 中文和 app 不一样（${wrongZh.size}）\n  ${[...wrongZh].map(([k, f]) => `${k}  ← ${where(f)}`).join("\n  ")}`);
if (oldStyle.size) console.log(`✗ 中文页写了英文按钮名，改成 app 的中文（${oldStyle.size}）\n  ${[...oldStyle].map(([k, f]) => `${k}  ← ${where(f)}`).join("\n  ")}`);
process.exitCode = rows.none.length || wrongZh.size || oldStyle.size ? 1 : 0;

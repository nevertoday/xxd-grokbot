// 核对页面里写的界面名字：正文里加粗的英文（**New Bot**、<strong>Sign in</strong>）当作按钮或菜单名，
// 到本机装的 Grok Bot 和官方文档副本里找。找不到的列出来：要么写错了，要么得在 ui-notes.md 里记一笔。
//
//   node scripts/check-ui-labels.mjs [Grok Bot.app 的 app.asar 路径]
//
// 默认找 /Applications/Grok Bot.app。没装就只对照官方文档副本（docs/sources/raw/official/）。只在本地用。
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const ASAR = process.argv[2] ?? "/Applications/Grok Bot.app/Contents/Resources/app.asar";
const RAW = join(ROOT, "docs/sources/raw/official");

const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : p.endsWith(".mdx") ? [p] : [];
});

const app = existsSync(ASAR) ? readFileSync(ASAR) : null;
const docs = existsSync(RAW) ? readdirSync(RAW).filter((f) => f.endsWith(".md")).map((f) => readFileSync(join(RAW, f), "utf8")).join("\n") : "";
if (!app) console.log(`没找到 ${ASAR}，只对照官方文档副本`);
if (!docs) console.log("没找到 docs/sources/raw/official/，先跑 node scripts/sync-docs.mjs");

const LABEL = /\*\*([A-Za-z][A-Za-z0-9 &'’.,:+→/-]{1,40}?)\*\*|<(?:strong|b)>([A-Za-z][A-Za-z0-9 &'’.,:+→/-]{1,40}?)<\/(?:strong|b)>/g;
const seen = new Map();
for (const file of walk(join(ROOT, "src/pages"))) {
  const text = readFileSync(file, "utf8").replace(/```[\s\S]*?```/g, "");
  for (const m of text.matchAll(LABEL)) {
    const label = (m[1] ?? m[2]).trim().replace(/[.,:]$/, "");
    if (label.split(" ").length > 5) continue;
    if (!seen.has(label)) seen.set(label, new Set());
    seen.get(label).add(relative(ROOT, file));
  }
}

const inApp = (s) => app && app.indexOf(Buffer.from(s, "utf8")) !== -1;
const inDocs = (s) => docs.includes(`**${s}**`) || docs.includes(s);
const rows = { app: [], docs: [], none: [] };
for (const [label, files] of [...seen].sort()) {
  const where = inApp(label) ? "app" : inDocs(label) ? "docs" : "none";
  rows[where].push(`${label}  ← ${[...files].slice(0, 3).join(", ")}${files.size > 3 ? " …" : ""}`);
}
console.log(`✓ app 里有（${rows.app.length}）`);
if (rows.docs.length) console.log(`~ 只在官方文档里（${rows.docs.length}），照文档写，记进 ui-notes.md 的待核对\n  ${rows.docs.join("\n  ")}`);
if (rows.none.length) console.log(`✗ 两边都找不到（${rows.none.length}），改掉或删掉\n  ${rows.none.join("\n  ")}`);
process.exitCode = rows.none.length ? 1 : 0;

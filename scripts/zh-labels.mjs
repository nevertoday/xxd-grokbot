// 把中文页里加粗的英文按钮名换成 app 的简体中文：第一次出现写成 **新建 Bot**（New Bot），之后只写 **新建 Bot**。
// 中文的数据文件（wiki.js、faq.js）也改：每个 Wiki 条目、每条问答各算一页，各自从「第一次出现」算起。
// <strong>Test</strong> 这种 HTML 加粗（在 Q、Checkpoint 里）一样处理。
// 菜单路径 **Settings → General** 逐段翻：**设置 → 通用**（Settings → General）。
// 旧写法 **New Bot**（新建 bot）括号里的自译会被换掉。app 里查不到中文的标签不动。重复跑结果一样。
//
//   node scripts/zh-labels.mjs          改文件
//   node scripts/zh-labels.mjs --dry    只列出会改什么
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { loadCatalog, zhOf } from "./app-labels.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DRY = process.argv.includes("--dry");
const catalog = loadCatalog();
if (!catalog) {
  console.log("没找到本机的 Grok Bot，没法查中文");
  process.exit(1);
}

import { LANGS } from "../src/data/nav.js";
// 只改中文页：跳过 /en/ 和其他语言的目录（它们的按钮名照各自语言的界面写）
const OTHER = new Set(LANGS.map((l) => l.code).filter((c) => c !== "zh"));
const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  if (statSync(p).isDirectory()) return dir.endsWith("src/pages") && OTHER.has(f) ? [] : walk(p);
  return p.endsWith(".mdx") ? [p] : [];
});

const EN = "[A-Za-z][A-Za-z0-9 &'’,+/…→-]{0,60}?";
const zhLabel = (label) => {
  const parts = label.split(/\s*→\s*/);
  const zh = parts.map((p) => zhOf(catalog, p));
  return zh.every(Boolean) ? zh.join(" → ") : null;
};
const BOLD = new RegExp(`\\*\\*(${EN})\\*\\*(（[^）\\n]{1,24}）)?`, "g");
const STRONG = new RegExp(`<strong>(${EN})</strong>(（[^）\\n]{1,24}）)?`, "g");

const fixUnit = (unit, changes) => {
  const seen = new Set();
  for (const m of unit.matchAll(new RegExp(`\\*\\*([^*\\n]{1,40}?)\\*\\*（(${EN})）`, "g"))) if (zhLabel(m[2]) === m[1]) seen.add(m[2]);
  const swap = (open, close) => (all, label) => {
    const zh = zhLabel(label);
    if (!zh || zh === label) return all;
    const first = !seen.has(label);
    seen.add(label);
    const next = first ? `${open}${zh}${close}（${label}）` : `${open}${zh}${close}`;
    if (next !== all) changes.push(`${all} → ${next}`);
    return next;
  };
  return unit.split(/(```[\s\S]*?```)/).map((part, i) => i % 2 ? part : part.replace(BOLD, swap("**", "**")).replace(STRONG, swap("<strong>", "</strong>"))).join("");
};

const DATA = { "src/data/wiki.js": /(?=\n  \{\n)/, "src/data/faq.js": /(?=\n)/ };
const targets = [...walk(join(ROOT, "src/pages")).map((p) => [p, null]), ...Object.entries(DATA).map(([p, re]) => [join(ROOT, p), re])];
let total = 0;
for (const [file, unitRe] of targets) {
  const src = readFileSync(file, "utf8");
  const changes = [];
  const out = unitRe ? src.split(unitRe).map((u) => fixUnit(u, changes)).join("") : fixUnit(src, changes);
  if (!changes.length) continue;
  total += changes.length;
  console.log(`${relative(ROOT, file)}（${changes.length}）\n  ${changes.join("\n  ")}`);
  if (!DRY) writeFileSync(file, out);
}
console.log(total ? `${DRY ? "会改" : "改了"} ${total} 处` : "✓ 没有要改的");

// 把中文页里加粗的英文按钮名换成 app 的简体中文：第一次出现写成 **新建 Bot**（New Bot），之后只写 **新建 Bot**。
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

const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  if (statSync(p).isDirectory()) return f === "en" ? [] : walk(p);
  return p.endsWith(".mdx") ? [p] : [];
});

const EN = "[A-Za-z][A-Za-z0-9 &'’,+/…-]{0,40}?";
const BOLD = new RegExp(`\\*\\*(${EN})\\*\\*(（[^）\\n]{1,24}）)?`, "g");

let total = 0;
for (const file of walk(join(ROOT, "src/pages"))) {
  const src = readFileSync(file, "utf8");
  const parts = src.split(/(```[\s\S]*?```)/);
  const seen = new Set();
  for (const m of src.matchAll(new RegExp(`\\*\\*([^*\\n]{1,24}?)\\*\\*（(${EN})）`, "g"))) if (zhOf(catalog, m[2]) === m[1]) seen.add(m[2]);
  const changes = [];
  const out = parts.map((part, i) => i % 2 ? part : part.replace(BOLD, (all, label, paren) => {
    const zh = zhOf(catalog, label);
    if (!zh || zh === label) return all;
    const first = !seen.has(label);
    seen.add(label);
    const next = first ? `**${zh}**（${label}）` : `**${zh}**`;
    if (next !== all) changes.push(`${all} → ${next}`);
    return next;
  })).join("");
  if (!changes.length) continue;
  total += changes.length;
  console.log(`${relative(ROOT, file)}（${changes.length}）\n  ${changes.join("\n  ")}`);
  if (!DRY) writeFileSync(file, out);
}
console.log(total ? `${DRY ? "会改" : "改了"} ${total} 处` : "✓ 没有要改的");

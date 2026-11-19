// 查 Grok Bot 界面上一个英文标签的简体中文写法（就是系统语言是中文时屏幕上显示的字）。
//
//   node scripts/app-labels.mjs "Always allow" "New Bot" "When to run"
//
// 原理：桌面版用 Lingui 做多语言，消息 id 是英文原文的 sha256（base64 前 6 位）。
// 从本机装的 app.asar 里找出简体中文的消息表，按 id 查。只在本地用，不提交 app 里的内容。
import { readFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";

const ASAR = process.env.GROK_BOT_ASAR ?? "/Applications/Grok Bot.app/Contents/Resources/app.asar";
const id = (msg, ctx = "") => createHash("sha256").update(msg + "\u001F" + ctx).digest("base64").slice(0, 6);

// 模板字符串里的转义（\\、\`、\u4E2D……）按 JS 的规则还原成文字，不执行 app 里的任何代码
const templateText = (src) =>
  src.replace(/\\(u\{[0-9a-fA-F]+\}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{2}|[\s\S])/g, (_, c) =>
    c[0] === "u" && c.length > 1 ? String.fromCodePoint(parseInt(c.replace(/[u{}]/g, ""), 16))
    : c[0] === "x" && c.length === 3 ? String.fromCharCode(parseInt(c.slice(1), 16))
    : ({ n: "\n", t: "\t", r: "\r", b: "\b", f: "\f", v: "\v", 0: "\0" })[c] ?? c);

export function loadCatalog(asarPath = ASAR) {
  if (!existsSync(asarPath)) return null;
  const buf = readFileSync(asarPath);
  const headerSize = buf.readUInt32LE(12);
  const header = JSON.parse(buf.subarray(16, 16 + headerSize).toString());
  const base = 8 + buf.readUInt32LE(4);
  const files = [];
  (function walk(node, path) {
    for (const [name, entry] of Object.entries(node.files ?? {})) {
      if (entry.files) walk(entry, `${path}/${name}`);
      else if (entry.offset !== undefined) files.push({ path: `${path}/${name}`, offset: +entry.offset, size: entry.size });
    }
  })(header, "");

  const catalog = {};
  for (const f of files) {
    if (!/\/renderer\/assets\/chunk-[^/]+\.js$/.test(f.path)) continue;
    const text = buf.subarray(base + f.offset, base + f.offset + f.size).toString();
    const m = text.match(/JSON\.parse\(`(\{"[\s\S]*?\})`\)/);
    if (!m) continue;
    const simplified = (text.match(/[这设们个时]/g) ?? []).length;
    const traditional = (text.match(/[這設們個時]/g) ?? []).length;
    if (simplified < 20 || traditional > simplified / 4 || /[぀-ヿ]/.test(text)) continue;
    try {
      Object.assign(catalog, JSON.parse(templateText(m[1])));
    } catch (e) {
      console.error(`读不了 ${f.path}：${e.message}`);
    }
  }
  return catalog;
}

const flat = (v) => (typeof v === "string" ? v : Array.isArray(v) ? v.map((x) => (typeof x === "string" ? x : Array.isArray(x) && typeof x[0] === "string" && x.length === 1 ? `{${x[0]}}` : flat(x))).join("") : "");
const variants = (label) => {
  const title = label.replace(/\b([a-z])/g, (c) => c.toUpperCase());
  const sentence = label.charAt(0).toUpperCase() + label.slice(1).toLowerCase();
  return [...new Set([label, title, sentence, label + "…", label + "..."])];
};
export const zhOf = (catalog, label) => {
  for (const v of variants(label)) if (catalog?.[id(v)]) return flat(catalog[id(v)]);
  return null;
};

if (import.meta.url === `file://${process.argv[1]}`) {
  const catalog = loadCatalog();
  if (!catalog) {
    console.log(`没找到 ${ASAR}`);
    process.exit(1);
  }
  console.log(`简体中文消息 ${Object.keys(catalog).length} 条`);
  for (const label of process.argv.slice(2)) console.log(`${label}  →  ${zhOf(catalog, label) ?? "（没找到：可能不是界面上的原文，或者带了上下文）"}`);
}

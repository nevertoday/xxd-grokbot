// 查 Grok Bot 界面上一个英文标签在某种界面语言里的写法（系统是那种语言时屏幕上显示的字）。
//
//   node scripts/app-labels.mjs "Always allow" "New Bot"            简体中文（默认）
//   node scripts/app-labels.mjs --lang ja "Always allow" "New Bot"  日语；可用的语言见 --list
//   node scripts/app-labels.mjs --list                              列出 app 带的界面语言
//
// 原理：桌面版用 Lingui 做多语言，消息 id 是英文原文的 sha256（base64 前 6 位）。
// app 的主脚本里有一张表，写着每种语言要加载哪几个消息文件（core、agents、chat、settings、shared）；
// 照这张表从本机装的 app.asar 里读出那种语言的消息，按 id 查。不执行 app 里的任何代码，只在本地用，不提交 app 里的内容。
import { readFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";

const ASAR = process.env.GROK_BOT_ASAR ?? "/Applications/Grok Bot.app/Contents/Resources/app.asar";
const id = (msg, ctx = "") => createHash("sha256").update(msg + "\u001F" + ctx).digest("base64").slice(0, 6);

// 模板字符串里的转义（\\、\`、中……）按 JS 的规则还原成文字
const templateText = (src) =>
  src.replace(/\\(u\{[0-9a-fA-F]+\}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{2}|[\s\S])/g, (_, c) =>
    c[0] === "u" && c.length > 1 ? String.fromCodePoint(parseInt(c.replace(/[u{}]/g, ""), 16))
    : c[0] === "x" && c.length === 3 ? String.fromCharCode(parseInt(c.slice(1), 16))
    : ({ n: "\n", t: "\t", r: "\r", b: "\b", f: "\f", v: "\v", 0: "\0" })[c] ?? c);

let cached;
/** 打开 app.asar：按路径读文件，并找出「界面语言 → 消息文件」的表 */
function app(asarPath = ASAR) {
  if (cached) return cached;
  if (!existsSync(asarPath)) return null;
  const buf = readFileSync(asarPath);
  const headerSize = buf.readUInt32LE(12);
  const header = JSON.parse(buf.subarray(16, 16 + headerSize).toString());
  const base = 8 + buf.readUInt32LE(4);
  const files = new Map();
  (function walk(node, path) {
    for (const [name, entry] of Object.entries(node.files ?? {})) {
      if (entry.files) walk(entry, `${path}/${name}`);
      else if (entry.offset !== undefined) files.set(`${path}/${name}`, [base + +entry.offset, entry.size]);
    }
  })(header, "");
  const read = (path) => {
    const at = files.get(path);
    return at ? buf.subarray(at[0], at[0] + at[1]).toString() : null;
  };
  // 主脚本里形如 "zh-CN":()=>Ko([$a(()=>import(`./chunk-core-….js`)…), …]) 的表
  const table = {};
  for (const path of files.keys()) {
    if (!/\/renderer\/assets\/[^/]+\.js$/.test(path)) continue;
    const text = read(path);
    if (!text.includes("()=>import(`./chunk-core-")) continue;
    // 每一项从「语言:()=>函数([」开始，到下一项开始为止；里面的 chunk 文件名就是这种语言的消息
    const starts = [...text.matchAll(/(?:"([\w-]+)"|\b([a-z]{2,3})):\(\)=>\w+\(\[\$?\w*\(\(\)=>import\(`\.\/chunk-core-/g)];
    starts.forEach((m, i) => {
      const end = i + 1 < starts.length ? starts[i + 1].index : m.index + 2000;
      const chunks = [...text.slice(m.index, end).matchAll(/chunk-[\w-]+\.js/g)].map((c) => c[0]);
      table[m[1] ?? m[2]] = [...new Set(chunks)];
    });
    if (Object.keys(table).length) break;
  }
  return (cached = { read, table });
}

export const locales = (asarPath = ASAR) => Object.keys(app(asarPath)?.table ?? {});

/** 某种界面语言的全部消息（id → 译文）；app 没装或没有这种语言时返回 null */
export function loadCatalog(asarPath = ASAR, locale = "zh-CN") {
  const a = app(asarPath);
  if (!a || !a.table[locale]) return null;
  const catalog = {};
  for (const chunk of a.table[locale]) {
    const m = a.read(`/dist/renderer/assets/${chunk}`)?.match(/JSON\.parse\(`(\{"[\s\S]*?\})`\)/);
    if (!m) continue;
    try {
      Object.assign(catalog, JSON.parse(templateText(m[1])));
    } catch (e) {
      console.error(`读不了 ${chunk}：${e.message}`);
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
/** 英文标签在这份消息表里的写法；查不到返回 null */
export const labelOf = (catalog, label) => {
  for (const v of variants(label)) if (catalog?.[id(v)]) return flat(catalog[id(v)]);
  return null;
};
export const zhOf = labelOf;

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  if (!app()) {
    console.log(`没找到 ${ASAR}`);
    process.exit(1);
  }
  if (args.includes("--list")) {
    console.log(locales().join(" "));
    process.exit(0);
  }
  const li = args.indexOf("--lang");
  const want = li >= 0 ? args.splice(li, 2)[1] : "zh-CN";
  const locale = locales().find((l) => l === want) ?? locales().find((l) => l.split("-")[0] === want);
  const catalog = locale && loadCatalog(ASAR, locale);
  if (!catalog) {
    console.log(`app 里没有 ${want} 的界面。可用的：${locales().join(" ")}`);
    process.exit(1);
  }
  console.log(`${locale}：${Object.keys(catalog).length} 条消息`);
  for (const label of args) console.log(`${label}  →  ${labelOf(catalog, label) ?? "（没找到：可能不是界面上的原文，或者带了上下文）"}`);
}

// 查站里所有指向官方文档（docs.x.ai、x.ai、cursor.com 帮助页）的链接：页面打得开，#锚点在线上页面里真的有。
// 锚点要对着线上网页查，不能从本地 .md 的标题猜：官方页面有的锚点（比如 use-cases#chief-of-staff）不是标题生成的。
//
//   node scripts/check-doc-links.mjs        要联网；每个网址只抓一次
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : /\.(mdx|js|astro)$/.test(f) ? [p] : [];
});
const files = [...walk(join(ROOT, "src/pages")), ...walk(join(ROOT, "src/data")), ...walk(join(ROOT, "src/views")), join(ROOT, "README.md"), join(ROOT, "README.en.md")];

const links = new Map();
for (const file of files) {
  const text = readFileSync(file, "utf8");
  for (const m of text.matchAll(/https:\/\/(?:docs\.x\.ai|x\.ai\/bot|cursor\.com\/help)[^\s)"'`<>\]]*/g)) {
    const url = m[0].replace(/[.,;:，。]+$/, "");
    if (!links.has(url)) links.set(url, new Set());
    links.get(url).add(relative(ROOT, file));
  }
}

const pages = new Map();
const fetchPage = async (url) => {
  if (!pages.has(url)) pages.set(url, fetch(url, { headers: { "user-agent": "xxd-grokbot-link-check" }, redirect: "follow" })
    .then(async (r) => ({ ok: r.ok, status: r.status, html: r.ok ? await r.text() : "" }))
    .catch((e) => ({ ok: false, status: e.message, html: "" })));
  return pages.get(url);
};

const bad = [];
for (const [url, where] of links) {
  const [page, hash] = url.split("#");
  const res = await fetchPage(page);
  const from = [...where].slice(0, 2).join(", ");
  if (!res.ok) bad.push(`${url}：打不开（${res.status}） ← ${from}`);
  else if (hash && !res.html.includes(`id="${decodeURIComponent(hash)}"`)) bad.push(`${url}：线上页面没有 #${hash} ← ${from}`);
}
console.log(bad.length ? `✗ ${bad.length} 个问题\n  ${bad.join("\n  ")}` : `✓ ${links.size} 个官方链接都打得开，锚点都在`);
process.exitCode = bad.length ? 1 : 0;

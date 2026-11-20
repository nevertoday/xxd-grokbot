// 查源码里的旧例子和旧句式（docs/EXAMPLES.md「不要用」）：苹果派、换爆胎、修车店、Yelp，各种语言的写法；
// 中文提示词套的「我想……，好让……」，英文的 "I want …, so that …"。网站正文、数据、README 和生成插图的脚本都查。
//
//   node scripts/check-examples.mjs
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const BANNED = [
  ["苹果派", /苹果派|苹果馅饼|apple[ -]?pie|アップルパイ|애플\s?파이|사과\s?파이|tarta de manzana|pastel de manzana|torta de maçã|tarte aux pommes|apfelkuchen|яблочн\S* пирог|فطيرة (ال)?تفاح/i],
  ["换爆胎", /爆胎|换胎|备胎|flat tire|flat tyre|spare tire|パンク|펑크|pinchazo|pinchad[ao]|pneu furado|crevaison|pneu crevé|reifenpanne|platte[nr]? reifen|reifen wechseln|проколот|спущенн\S* колес|إطار مثقوب/i],
  ["修车店", /修车|auto shop|repair shop|car shop|整備工場|정비소|taller mecánico|oficina mecânica|garagiste|autowerkstatt|автосервис|ورشة سيارات/i],
  ["Yelp", /yelp/i],
  ["「我想……，好让……」", /(?<!最)好让/],
  ['"I want …, so that …"', /\bI want\b[^.\n]{0,160}, so that\b/i],
];

const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : /\.(mdx|astro|js|md|py)$/.test(f) ? [p] : [];
});
const files = [
  ...walk(join(ROOT, "src")),
  ...walk(join(ROOT, "tools")),
  ...readdirSync(ROOT).filter((f) => /^README(\.[a-z]{2})?\.md$/.test(f)).map((f) => join(ROOT, f)),
];

const problems = [];
for (const file of files) {
  readFileSync(file, "utf8").split("\n").forEach((line, i) => {
    for (const [name, re] of BANNED) {
      const m = line.match(re);
      if (m) problems.push(`${relative(ROOT, file)}:${i + 1}  ${name}：「${m[0]}」`);
    }
  });
}

if (problems.length) {
  console.log(`旧例子或旧句式 ${problems.length} 处（换成 docs/EXAMPLES.md 场景库里的例子和说话的口气）：\n${problems.join("\n")}`);
  process.exit(1);
}
console.log(`例子检查通过：${files.length} 个文件里没有旧例子和旧句式`);

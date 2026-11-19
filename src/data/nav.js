import { EXTRA } from "../i18n/index.js";
// 站点结构的唯一来源：左侧导航、首页路线图、上一步 / 下一步、How-to 目录、搜索都从这里读。
// ready: false 的页面还没写，导航里显示「编写中」，不给链接。
// 中文在根路径，英文在 /en/ 下（同样的 slug）。英文文字放在各条目的 en: {} 里，用 t(x, key, lang) 取。

const BASE = (import.meta.env?.BASE_URL || "/").replace(/\/$/, "");
/** 网站的语言。full: true 是全站；以后加的语言可以只有首页和新手入门三课，别的页面链到英文版（不写 full）。 */
export const LANGS = [
  { code: "en", name: "English", html: "en", full: true },
  { code: "zh", name: "中文", html: "zh-CN", full: true },
];
export const langInfo = (lang) => LANGS.find((l) => l.code === lang) ?? LANGS[0];
const PREFIXED = LANGS.filter((l) => l.code !== "zh").map((l) => l.code);
const PREFIX_RE = new RegExp(`^/(${PREFIXED.join("|")})(?=/|$)`);
/** 当前页面的语言：看路径前缀（/en/……），没有前缀是中文 */
export const langOf = (pathname = "") => pathname.slice(BASE.length).match(PREFIX_RE)?.[1] ?? "zh";
/** 这种语言有没有全站 */
export const isFull = (lang) => langInfo(lang).full === true;
/** 只在全站语言里存在的页面（完整教程、How-to、Wiki、常见问题）：非全站语言链到英文版 */
export const fullLang = (lang) => (isFull(lang) ? lang : "en");
/** 站内链接：部署在子路径时自动加前缀；非中文加 /<语言> */
export const link = (path, lang = "zh") => `${BASE}${lang === "zh" ? "" : "/" + lang}${path}`;
/** 同一页在另一种语言里的地址：那种语言没有这一页，就去它的首页 */
export const langHref = (pathname, target) => {
  const rel = (pathname.slice(BASE.length) || "/").replace(PREFIX_RE, "") || "/";
  if (/\/404\/?$/.test(rel)) return link("/", target);
  if (isFull(target) || rel === "/" || rel.startsWith("/start/")) return link(rel, target);
  return link("/", target);
};
/** 取某个对象在当前语言下的字段：先找 x[lang][key]，再找 x.en[key]（非中文的兜底），最后是中文 */
export const t = (x, key, lang) => {
  if (lang === "zh") return x[key];
  return x[lang]?.[key] ?? x.en?.[key] ?? x[key];
};

/** 这个教程站自己的仓库（反馈、源码）。还没建仓库前先放这里，建好后只改这一行。 */
export const REPO = "https://github.com/nevertoday/xxd-grokbot";
/** Grok Bot 官方文档：功能和用法以这里为准 */
export const DOCS = "https://docs.x.ai/grok-bot";
/** poteto 的文章「Automate Anything with Grok Bot」：本站主线跟着它走 */
export const ARTICLE = "https://x.com/poteto/status/2123159537016533493";

// 新手入门：给第一次用 Grok Bot 的人。三课，一条路走到底；做完这三课就够用了。
export const LESSONS = [
  { n: 1, slug: "1-goal", title: "先想清楚你要的结果", minutes: "10 分钟", sum: "挑一件常做的事，用一句话写下你要的结果，和它是为了什么", en: { title: "Know the result you want", minutes: "10 minutes", sum: "Pick a job you do often and write one sentence: the result you want, and what it's for" } },
  { n: 2, slug: "2-first-bot", title: "建好你的第一个 bot", minutes: "15 分钟", sum: "装好 Grok Bot，建一个 bot，把你写的那句话交给它", en: { title: "Make your first bot", minutes: "15 minutes", sum: "Install Grok Bot, make a bot, and hand it the sentence you wrote" } },
  { n: 3, slug: "3-hand-over", title: "把一件事交给它", minutes: "30 分钟", sum: "讲讲你平时怎么做，看它做一遍，再让它按时自己做", en: { title: "Hand it one job", minutes: "30 minutes", sum: "Tell it how you do the job, watch it do it once, then let it run on a schedule" } },
];
// 以后加的语言：新手入门标题、时间、简介在 src/i18n/<语言>.js 的 lessons 里，按顺序叠到这里
for (const [code, d] of Object.entries(EXTRA)) (d.lessons || []).forEach((l, i) => { if (LESSONS[i]) LESSONS[i][code] = l; });
export const lessonHref = (s, lang = "zh") => link(`/start/${s.slug}/`, lang);

export const STEPS = [
  { n: 0, slug: "0-what", title: "Grok Bot 能替你做什么", minutes: "读 8 分钟", ready: true, sum: "一个自带电脑的 AI 帮手：能做什么，会记住什么，你要准备什么", en: { title: "What Grok Bot can do for you", minutes: "8-minute read", sum: "An AI helper with its own computer: what it does, what it remembers, what you need" } },
  { n: 1, slug: "1-goal", title: "先说清你要的结果", minutes: "10 分钟", ready: true, sum: "先想清楚这件事最后是为了什么，再谈怎么做", en: { title: "Start with the result you want", minutes: "10 minutes", sum: "Work out what the job is for before you get into the steps" } },
  { n: 2, slug: "2-process", title: "把你的做法讲给它听", minutes: "15 分钟", ready: true, sum: "把平时怎么做一口气说给它，等它复述对了再开工", en: { title: "Walk it through how you do it", minutes: "15 minutes", sum: "Talk through how you do it now, and let it start once it repeats it back right" } },
  { n: 3, slug: "3-how-you-think", title: "教它你怎么拿主意", minutes: "15 分钟", ready: true, sum: "那些你凭经验拿的主意，也讲给它听", en: { title: "Teach it how you decide", minutes: "15 minutes", sum: "Tell it the calls you make from experience" } },
  { n: 4, slug: "4-apps", title: "连上应用，认识它的电脑", minutes: "15 分钟", ready: true, sum: "连上它要用的应用，看看它的云端电脑，弄清它什么时候会先问你", en: { title: "Connect apps and meet its computer", minutes: "15 minutes", sum: "Connect the apps it needs, see its cloud computer, and learn when it asks you first" } },
  { n: 5, slug: "5-improve", title: "让它自己越做越好", minutes: "10 分钟", ready: true, sum: "让它自己拿到反馈和数据，找出哪里能改，再提给你", en: { title: "Let it get better on its own", minutes: "10 minutes", sum: "Let it see feedback and data for itself, spot what to improve, and suggest it to you" } },
  { n: 6, slug: "6-routines", title: "让它到点自己开工", minutes: "15 分钟", ready: true, sum: "做顺的事存成技能，再设个 routine，到点或有事时它自己开工", en: { title: "Let it start on its own", minutes: "15 minutes", sum: "Save what works as a skill, then add a routine so it starts on time or when something happens" } },
  { n: 7, slug: "7-team", title: "让几个 bot 分工合作", minutes: "10 分钟", ready: true, sum: "大目标拆给几个 bot，各管一份；不会拆，就找 Dr Eggbot", en: { title: "Split the work across bots", minutes: "10 minutes", sum: "Give each bot one part of a big goal; Dr Eggbot can set up the team for you" } },
];
export const stepHref = (s, lang = "zh") => link(`/guide/${s.slug}/`, lang);

export const HOWTO = [
  { group: "日常生活", en: { group: "Everyday life" }, items: [
    { slug: "morning-briefing", title: "每天早上收到一份简报", en: { title: "Get a briefing every morning" } },
    { slug: "inbox", title: "让它帮你理邮箱", en: { title: "Get your inbox under control" } },
    { slug: "travel", title: "帮你安排一趟出行", en: { title: "Plan a trip" } },
    { slug: "family-admin", title: "家里的琐事交给它", en: { title: "Hand off the family admin" } },
  ]},
  { group: "开小店", en: { group: "Running a small business" }, items: [
    { slug: "bookings", title: "让它帮你排预约", en: { title: "Let it handle bookings" } },
    { slug: "reviews-feedback", title: "回评价，从抱怨里找改进", en: { title: "Answer reviews and learn from complaints" } },
    { slug: "hiring", title: "帮你筛简历、排面试", en: { title: "Screen applicants and set up interviews" } },
  ]},
  { group: "上班", en: { group: "At work" }, items: [
    { slug: "meeting-recap", title: "开完会就有纪要和待办", en: { title: "Notes and to-dos after every meeting" } },
    { slug: "weekly-slides", title: "每周的汇报幻灯片，它来做", en: { title: "Weekly report slides, made for you" } },
    { slug: "sales-leads", title: "筛新线索，跟进客户", en: { title: "Sort new leads and follow up" } },
    { slug: "bug-repro", title: "把用户报的 bug 重现一遍", en: { title: "Reproduce a bug a user reported" } },
  ]},
  { group: "安全和花钱", en: { group: "Safety and spending" }, items: [
    { slug: "approvals-privacy", title: "哪些事要它先问你", en: { title: "What it should ask you first" } },
    { slug: "vault-logins", title: "登录和付款交给 Vault，别发密码", en: { title: "Logins and cards go in Vault, not in chat" } },
    { slug: "plans-usage", title: "套餐和用量怎么算", en: { title: "Plans and how usage works" } },
  ]},
  { group: "提示词", en: { group: "Prompts" }, items: [
    { slug: "prompts", title: "照抄就能用的提示词", en: { title: "Prompts you can copy" } },
  ]},
];
export const howtoHref = (slug, lang = "zh") => link(`/howto/${slug}/`, lang);
export const HOWTO_FLAT = HOWTO.flatMap((g) => g.items.map((i) => ({ ...i, group: g.group, groupEn: g.en.group })));

export const wikiHref = (slug, lang = "zh") => link(`/wiki/${slug}/`, lang);

// 正文里虚线标出的术语：悬停看一句话解释（Term 组件）。wiki: 对应的 Wiki 条目（src/data/wiki.js 的 slug）。
// 依据 poteto 的文章和官方文档（docs.x.ai/grok-bot）。加了 Wiki 条目，在这里加一个对应的术语。
export const GLOSSARY = {
  bot: { tip: "替你干活的 AI 帮手，每个 bot 都有自己的一份记忆。", wiki: "bot", en: { label: "bot", tip: "An AI helper that does work for you. Each one has its own memory." } },
  "主 bot": { tip: "你最常找的那个 bot。它会主动来找你，也会把活转给你别的 bot。", wiki: "primary-bot", en: { label: "primary bot", tip: "The bot you go to first. It checks in with you on its own and passes work to your other bots." } },
  目标和过程: { tip: "目标是你最后想要的结果，过程是你怎么一步步拿到它。", wiki: "goal-and-process", en: { label: "goal and process", tip: "The goal is the result you want at the end; the process is how you get there." } },
  记忆: { tip: "bot 记着的你的习惯、规矩，和它替你做过的事。每个 bot 各记各的。", wiki: "memory", en: { label: "memory", tip: "What a bot keeps about your habits, your rules and its past work. Each bot keeps its own." } },
  routine: { tip: "中文界面上叫「例行任务」。它告诉 bot 什么时候自己开工：到了某个时间，或者某件事发生了。", wiki: "routine", en: { label: "routine", tip: "Tells a bot when to start a job by itself: at a set time, or when something happens." } },
  触发条件: { tip: "让 routine 开工的那件事，比如 bot 的邮箱收到一封信。", wiki: "trigger", en: { label: "trigger", tip: "The event that starts a routine, like an email arriving for your bot." } },
  webhook: { tip: "一个专用的网址。别的程序往这里发一条消息，routine 就会开工。", wiki: "trigger", en: { label: "webhook", tip: "A special web address. When another program sends a message to it, the routine starts." } },
  主动做事: { tip: "主 bot 自己留意能替你做的事，先问你要不要它做。", wiki: "initiative", en: { label: "initiative", tip: "Your primary bot notices work it can take on, and asks you before doing it." } },
  技能: { tip: "一份写给 bot 的做法说明：怎么做、交回什么、哪一步要先问你。", wiki: "skill", en: { label: "skill", tip: "A how-to for one job: the steps, what to hand back, and what needs your OK first." } },
  云端电脑: { tip: "放在云上、你的 bot 共用的一台电脑，所以你合上笔记本，它们照样干活。", wiki: "cloud-computer", en: { label: "cloud computer", tip: "A computer in the cloud that your bots share, so they keep working after you close your laptop." } },
  连接的应用: { tip: "你连给 bot 的 Gmail 这类应用。它直接在应用里干活，不用一页页去点网页。", wiki: "connected-apps", en: { label: "connected app", tip: "An app like Gmail that you connect, so your bot works in it directly instead of clicking through the website." } },
  "统一的 ID": { tip: "认出同一样东西的号码或文字，比如订单号。每个应用都用同一个，数据才串得起来。", wiki: "ids", en: { label: "consistent IDs", tip: "A number or unique text, like an order number, that every app uses for the same thing, so the data joins up." } },
  审批: { tip: "要你点头的事。bot 会发一张卡片，停下来等你。", wiki: "approval", en: { label: "approval", tip: "When an action needs your OK, the bot shows you a card and waits." } },
  "Auto Review": { tip: "bot 动手前，它先把每个动作过一遍：大多数直接放行，要紧的停下来问你。", wiki: "approval", en: { label: "Auto Review", tip: "Checks each action before the bot takes it. Most go ahead on their own, and the ones that matter stop to ask you." } },
  Vault: { tip: "存登录、银行卡和联系信息的地方。bot 靠它登录、结账，却看不到你的密码。", wiki: "vault", en: { label: "Vault", tip: "Where you save logins, cards and contact info. Bots use it to sign in and check out without seeing your passwords." } },
  "team bot": { tip: "分享给整个团队一起用的 bot，要 Team 或 Enterprise 套餐。", wiki: "team-bot", en: { label: "Team Bot", tip: "A bot your whole team shares. It needs a Team or Enterprise plan." } },
  交接: { tip: "一个 bot 给另一个 bot 发消息，把活交过去。", wiki: "handoff", en: { label: "handoff", tip: "One bot messages another to pass along work." } },
  "Dr Eggbot": { tip: "一个现成的 bot。它先问你几个问题，再帮你建好一组 bot，每个只管一份活。", wiki: "dr-eggbot", en: { label: "Dr Eggbot", tip: "A ready-made bot that asks you a few questions, then sets up bots for you, one job each." } },
  "现成的 bot": { tip: "别人已经为一份活设好的 bot，加一份副本就能用。", wiki: "marketplace", en: { label: "prebuilt bot", tip: "A bot someone already set up for a job. Add a copy and it's ready to use." } },
};

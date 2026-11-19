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
  { n: 1, slug: "1-goal", title: "先想清楚你要它做成什么", minutes: "10 分钟", sum: "挑一件你常做的事，说出最后要的结果", en: { title: "Decide what you want done", minutes: "10 minutes", sum: "Pick something you do often and name the result you want" } },
  { n: 2, slug: "2-first-bot", title: "建你的第一个 bot", minutes: "15 分钟", sum: "新建一个 bot，给它起个名字", en: { title: "Make your first bot", minutes: "15 minutes", sum: "Make a new bot and give it a name" } },
  { n: 3, slug: "3-hand-over", title: "把一件事交给它", minutes: "30 分钟", sum: "把这件事讲给它，看它做一遍", en: { title: "Hand it one job", minutes: "30 minutes", sum: "Explain the job and watch it do it once" } },
];
// 以后加的语言：新手入门标题、时间、简介在 src/i18n/<语言>.js 的 lessons 里，按顺序叠到这里
for (const [code, d] of Object.entries(EXTRA)) (d.lessons || []).forEach((l, i) => { if (LESSONS[i]) LESSONS[i][code] = l; });
export const lessonHref = (s, lang = "zh") => link(`/start/${s.slug}/`, lang);

export const STEPS = [
  { n: 0, slug: "0-what", title: "Grok Bot 是什么", minutes: "读 8 分钟", ready: true, sum: "一个带电脑的 AI 帮手：它能做什么，要准备什么", en: { title: "What Grok Bot is", minutes: "8-minute read", sum: "An AI teammate with its own computer: what it can do, what you need" } },
  { n: 1, slug: "1-goal", title: "先定目标，别把步骤当目标", minutes: "10 分钟", ready: true, sum: "先想清楚这件事最后是为了什么，再列步骤", en: { title: "Start with the goal", minutes: "10 minutes", sum: "Know what the work is for before you list the steps" } },
  { n: 2, slug: "2-process", title: "把你的做法讲给它", minutes: "15 分钟", ready: true, sum: "说说你平时怎么做，和它一起理出步骤", en: { title: "Tell it your process", minutes: "15 minutes", sum: "Walk it through how you do it now and work out the steps together" } },
  { n: 3, slug: "3-how-you-think", title: "教它你怎么判断", minutes: "15 分钟", ready: true, sum: "把你拿主意的标准告诉它", en: { title: "Teach it how you think", minutes: "15 minutes", sum: "Tell it the rules you use to decide" } },
  { n: 4, slug: "4-apps", title: "连上你的应用和电脑", minutes: "15 分钟", ready: true, sum: "连上常用的应用，认识它的云端电脑", en: { title: "Connect your apps and computer", minutes: "15 minutes", sum: "Connect the apps you use and meet its cloud computer" } },
  { n: 5, slug: "5-improve", title: "让它自己变好", minutes: "10 分钟", ready: true, sum: "让它自己拿到反馈，找出哪里能改", en: { title: "Let it improve itself", minutes: "10 minutes", sum: "Let it get its own feedback and find what to improve" } },
  { n: 6, slug: "6-routines", title: "让它自己按时开工", minutes: "15 分钟", ready: true, sum: "用 routine 按时间或者等某件事发生再开工", en: { title: "Make it run on its own", minutes: "15 minutes", sum: "Use routines to start work on a schedule or when something happens" } },
  { n: 7, slug: "7-team", title: "一队 bot 和 Dr Eggbot", minutes: "10 分钟", ready: true, sum: "一个 bot 管一份活，让 Dr Eggbot 帮你搭一队", en: { title: "A team of bots, and Dr Eggbot", minutes: "10 minutes", sum: "One job per bot; let Dr Eggbot set up the team" } },
];
export const stepHref = (s, lang = "zh") => link(`/guide/${s.slug}/`, lang);

export const HOWTO = [
  { group: "个人生活", en: { group: "Personal life" }, items: [
    { slug: "morning-briefing", title: "每天早上一份简报", en: { title: "A briefing every morning" } },
    { slug: "inbox", title: "帮你理邮箱", en: { title: "Keep your inbox under control" } },
    { slug: "travel", title: "安排和预订出行", en: { title: "Plan and book trips" } },
    { slug: "family-admin", title: "家里的琐事交给它", en: { title: "Hand off family admin" } },
  ]},
  { group: "小生意", en: { group: "Small business" }, items: [
    { slug: "bookings", title: "接预约、改预约", en: { title: "Take and change bookings" } },
    { slug: "reviews-feedback", title: "回评价、整理顾客反馈", en: { title: "Answer reviews and sort customer feedback" } },
    { slug: "hiring", title: "招人：筛简历、约面试", en: { title: "Hiring: screen applicants, schedule interviews" } },
  ]},
  { group: "工作", en: { group: "Work" }, items: [
    { slug: "meeting-recap", title: "开完会出纪要和待办", en: { title: "Meeting recaps and follow-ups" } },
    { slug: "weekly-slides", title: "每周的汇报幻灯片", en: { title: "Weekly report slides" } },
    { slug: "sales-leads", title: "筛选新线索、跟进客户", en: { title: "Screen new leads and follow up" } },
    { slug: "bug-repro", title: "复现用户报的 bug", en: { title: "Reproduce bugs users report" } },
  ]},
  { group: "安全和花费", en: { group: "Safety and cost" }, items: [
    { slug: "approvals-privacy", title: "哪些事要先问你：审批和隐私", en: { title: "What it asks you first: approvals and privacy" } },
    { slug: "vault-logins", title: "登录和付款交给 Vault，别贴密码", en: { title: "Logins and cards go in Vault, never in chat" } },
    { slug: "plans-usage", title: "套餐和用量", en: { title: "Plans and usage" } },
  ]},
  { group: "提示词", en: { group: "Prompts" }, items: [
    { slug: "prompts", title: "照抄就能用的提示词", en: { title: "Copy-paste prompts" } },
  ]},
];
export const howtoHref = (slug, lang = "zh") => link(`/howto/${slug}/`, lang);
export const HOWTO_FLAT = HOWTO.flatMap((g) => g.items.map((i) => ({ ...i, group: g.group, groupEn: g.en.group })));

export const wikiHref = (slug, lang = "zh") => link(`/wiki/${slug}/`, lang);

// 正文里虚线标出的术语：悬停看一句话解释（Term 组件）。wiki: 对应的 Wiki 条目（src/data/wiki.js 的 slug）。
// 依据 poteto 的文章和官方文档（docs.x.ai/grok-bot）。加了 Wiki 条目，在这里加一个对应的术语。
export const GLOSSARY = {
  bot: { tip: "替你干活的 AI 帮手，每个 bot 有自己的记忆。", wiki: "bot", en: { label: "bot", tip: "An AI helper that works for you and keeps its own memory." } },
  "主 bot": { tip: "你主要找的那个 bot：它会主动来问你，也会把活分给别的 bot。", wiki: "primary-bot", en: { label: "primary bot", tip: "Your main bot: it checks in with you on its own and hands work to your other bots." } },
  目标和过程: { tip: "目标是最后要得到什么，过程是怎么得到它。", wiki: "goal-and-process", en: { label: "goal and process", tip: "The goal is what you want at the end; the process is how you get there." } },
  记忆: { tip: "bot 记住的你的习惯、规矩和它做过的事，每个 bot 各记各的。", wiki: "memory", en: { label: "memory", tip: "What a bot keeps about your habits, your rules and its past work. Each bot has its own." } },
  routine: { tip: "告诉一个 bot 什么时候自动开工：按时间，或者等某件事发生。", wiki: "routine", en: { label: "routine", tip: "Tells a bot when to start a job by itself: on a schedule, or when something happens." } },
  触发条件: { tip: "让 routine 开工的那件事，比如 bot 收到一封邮件。", wiki: "trigger", en: { label: "trigger", tip: "The event that starts a routine, like an email arriving for your bot." } },
  webhook: { tip: "一个专用网址，别的程序往这里发一条消息，routine 就开工。", wiki: "trigger", en: { label: "webhook", tip: "A special web address; when another program sends a message to it, the routine starts." } },
  主动做事: { tip: "主 bot 自己找能替你做的事，先问你要不要做。", wiki: "initiative", en: { label: "initiative", tip: "Your primary bot spots work it can take on, and asks before doing it." } },
  技能: { tip: "一份写给 bot 的做法说明：怎么做、交回什么、哪一步要先问你。", wiki: "skill", en: { label: "skill", tip: "Instructions for one task: the steps, what to hand back, and what needs your OK first." } },
  云端电脑: { tip: "放在云上、你的 bot 共用的一台电脑，你合上笔记本它们也照样干活。", wiki: "cloud-computer", en: { label: "cloud computer", tip: "A computer in the cloud that your bots share, so they keep working after you close your laptop." } },
  连接的应用: { tip: "你连给 bot 的 Gmail 这类应用，它直接在应用里干活，不用去点网页。", wiki: "connected-apps", en: { label: "connected app", tip: "An app like Gmail that you connect, so your bot works in it directly instead of clicking through the website." } },
  "统一的 ID": { tip: "认出同一样东西的号码或文字，比如订单号。各个应用都用它，数据才对得上。", wiki: "ids", en: { label: "consistent IDs", tip: "A number or unique text, like an order number, that every app uses for the same thing." } },
  审批: { tip: "要你点头的事，bot 会发一张卡片，停下来等你。", wiki: "approval", en: { label: "approval", tip: "When an action needs your OK, the bot shows you a card and waits." } },
  "Auto Review": { tip: "bot 动手前先检查每个动作：多数直接放行，要紧的停下来问你。", wiki: "approval", en: { label: "Auto Review", tip: "Checks each action before the bot takes it: most run on their own, and some stop to ask you." } },
  Vault: { tip: "存登录、银行卡和联系信息的地方。bot 用它登录、结账，看不到你的密码。", wiki: "vault", en: { label: "Vault", tip: "Where you save logins, cards and contact info. Bots use it to sign in and check out without seeing your passwords." } },
  "team bot": { tip: "分享给整个团队用的 bot，要 Team 或 Enterprise 套餐。", wiki: "team-bot", en: { label: "Team Bot", tip: "A bot shared with your whole team; it needs a Team or Enterprise plan." } },
  交接: { tip: "一个 bot 给另一个 bot 发消息，把活交过去。", wiki: "handoff", en: { label: "handoff", tip: "One bot messages another to pass along work." } },
  "Dr Eggbot": { tip: "一个现成的 bot：问你几个问题，再帮你建好一组各管一份活的 bot。", wiki: "dr-eggbot", en: { label: "Dr Eggbot", tip: "A ready-made bot that asks you a few questions, then sets up bots for you, one job each." } },
  "现成的 bot": { tip: "别人已经为一份活设好的 bot，加一份副本就能用。", wiki: "marketplace", en: { label: "prebuilt bot", tip: "A bot someone already set up for a job; add a copy and use it." } },
};

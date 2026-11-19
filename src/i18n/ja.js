// ja（日本語）：结构照 base.js（英文底稿）。缺的键会显示英文。待翻译：现在还是英文原样。
// 英文底稿：以后加的非全站语言，全部文字都照这个结构写（src/i18n/<语言>.js），缺的键显示这里的英文。
// {名字} 是占位，由 fmt() 换成值，翻译时原样保留。
// 这些语言只有首页和新手入门三课；完整教程、How-to、Wiki、常见问题链到英文版，所以导航里写明「英文」。
// 首页文字和 views/Home.astro 的 EN 一样（完整教程按钮多写了「English」）。
export default {
  ui: {
    brand: "Grok Bot for beginners",
    desc: "An unofficial guide to Grok Bot: from your first bot to bots that run on their own, in plain words.",
    skip: "Skip to content",
    menu: "Open menu",
    search: "Search the guide",
    searchPh: "Search lessons, steps, how-tos, terms…",
    searchEmpty: "Nothing found. Try another word",
    look: "Appearance",
    lang: "Language",
    repo: "This guide on GitHub",
    repoMore: "More: the official docs, poteto's article",
    repoDefault: "Default",
    // 三个链接：[名字, 一句说明]，顺序固定（本教程、官方文档、poteto 的原文）
    repos: [
      ["This guide", "Source for this guide; file issues here"],
      ["Grok Bot docs", "The source of truth for features and behavior"],
      ["poteto's article", "Automate Anything with Grok Bot"],
    ],
    navLabel: "Site navigation",
    start: "Start",
    home: "Home",
    lessons: "Beginner track: start here",
    more: "More (in English)",
    main: "Full guide: 8 steps",
    howto: "How-to: how exactly",
    wiki: "Wiki: what is it",
    faq: "FAQ",
    toc: "On this page",
    tocLabel: "On this page",
    hintMain: "Full guide (English)",
    hintLesson: "Beginner track",
    hintFaq: "FAQ (English)",
    hintOther: "English",
    section: "Section",
    // {docs}、{article} 和 {github} 会换成链接
    foot: "An unofficial guide to Grok Bot, not affiliated with xAI or Cursor. For features and behavior, the {docs} are the source of truth. The main path follows poteto's article {article}. Source and feedback for this guide are on {github}.",
    // 顶栏「外观」面板（UI Kit 的外观设置组）
    appearance: {
      group: "Appearance", theme: "Theme", light: "Light", dark: "Dark", system: "System",
      corners: "Rounded corners", cornersDesc: "Off keeps every corner square",
      accent: "Accent", accentDesc: "Used for buttons, selection and focus",
    },
  },

  home: {
    h1: "Getting the most out of Grok Bot starts with how you think",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["Automation is really a way of thinking, and anyone can learn it, says poteto, who builds Grok Bot at SpaceX. Get clear on the result you want, tell the bot how you do the job now, and once it gets it right, let it start on its own, on time. You don't need to code. ", "This is an unofficial guide", " that follows the author's article “Automate Anything with Grok Bot” step by step. For features, the official docs are the source of truth."],
    cta: ["Start here if you're new", "Used it already? The full guide (English)"],
    ctaNote: "The beginner track is three lessons: get clear on the goal, make a bot, then hand it one job.",
    painH: "Has this happened to you?",
    PAIN: [
      "Every week you lose an afternoon doing the same few steps again.",
      "You'd hand it to an AI, but a chat AI only answers. You still do the clicking, copying and sending.",
      "You heard about automation, saw it meant writing code, and gave up.",
    ],
    diffH: "What changes when a bot does it",
    diffW: "When", diffA: "Doing it yourself", diffB: "With a bot",
    DIFF: [
      ["Starting", "When you remember", "On time, by itself"],
      ["Doing the work", "You click, copy, paste", "It uses a computer in the cloud"],
      ["Laptop closed", "The work stops", "It keeps going in the cloud"],
    ],
    lessonsH: "Beginners need just three lessons",
    lessonsP: "Just read them in order. After these three you can put it to work, and everything else on the site is there to look up when you need it.",
    lessonsLabel: "Beginner track: 3 lessons",
    fitH: "Is it for you?", yesH: "Yes, if", noH: "Not yet, if",
    YES: ["You have a job you repeat on a computer and want to hand off", "You have Premium, Super or Ultra on The X Subscription", "You can explain in plain words how you do the job"],
    NO: ["You're on Plus, which doesn't include Grok Bot", "You don't have a computer, since you install the desktop app on one first", "You only want to ask a question, and a regular AI chat is enough for that"],
    devH: "Once you're comfortable",
    devP: "The full guide goes deeper, following poteto's article. Here are four of its ideas, one line each:",
    // 完整教程目前只有英文和中文
    devNote: "The full guide is in English (and Chinese) for now.",
    // FLOW：每个是 [标题, 说明]，图标和顺序固定
    FLOW: [
      ["Start with the goal", "Know the result you want. Filling in a form or sending an email is only one step on the way."],
      ["Explain your process", "Say how you do it now, all in one go. It restates it first, and you correct it a few times before it starts."],
      ["Teach it how you decide", "Walk it through real examples of the calls you make without thinking."],
      ["Let it start on its own", "A routine sets when it works: on a schedule, or when an email arrives."],
    ],
    CONN: ["tell it", "try examples", "once it's right"],
    stepsLabel: "Full guide: {n} steps",
  },

  // 新手入门三课在导航、首页路线图里的标题、时间、简介（顺序：1 先想清楚、2 建第一个 bot、3 交给它一件事）
  lessons: [
    { title: "Decide what you want done", minutes: "10 minutes", sum: "Pick something you do often and name the result you want" },
    { title: "Make your first bot", minutes: "15 minutes", sum: "Make a new bot and give it a name" },
    { title: "Hand it one job", minutes: "30 minutes", sum: "Explain the job and watch it do it once" },
  ],

  // 一课的页面框架
  lesson: {
    eyebrow: "Beginner track · lesson {n} of {total}",
    prog: "Progress: lesson {n} of {total}",
    nav: "Previous and next lesson",
    prev: "Previous",
    next: "Next",
    title: "Lesson {n}: {title}",
    tldr: "In one line",
  },

  // 正文里用到的组件
  comp: {
    callout: { ok: "You should see", warn: "Heads up", no: "Don't do this", tip: "Tip" },
    copyTitle: "Copy this",
    copy: "Copy",
    cmdDone: "Command copied",
    cmdLabel: "Copy command: {c}",
    reply: "Illustration: roughly what its reply looks like",
    // 每页末尾一行：{lead} {gh 链接}{faq[0]}{faq[1] 链接}{faq[2]}
    feedback: {
      lead: "Something on this page unclear, or didn't work as written?",
      gh: "Bring it up on GitHub",
      faq: [". Or check the ", "FAQ", " first."],
    },
    // 首页、常见问题末尾的「提问和讨论」卡片
    contact: {
      h: "Questions and discussion",
      p: "Stuck on a step, found something unclear, or built a bot you'd like to show? Bring it to GitHub. The questions that come up most get worked into the guide. Writing in your own language is fine.",
      faq: ["Before asking, check the ", "FAQ", ": many answers are already there."],
      btn: "Ask or discuss on GitHub",
      x: "The author is on X",
      privacy: "Before sending screenshots, blur out passwords, API keys, account details and personal information.",
    },
  },

  // 图示的界面文字（新手三课现在没有图，这里只有「图示」「再看一遍」两个词）
  figs: { ui: { label: "Diagram", replay: "Replay" } },
};

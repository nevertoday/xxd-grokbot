// 英文底稿：以后加的非全站语言，全部文字都照这个结构写（src/i18n/<语言>.js），缺的键显示这里的英文。
// {名字} 是占位，由 fmt() 换成值，翻译时原样保留。
// 这些语言只有首页和新手入门三课；完整教程、How-to、Wiki、常见问题链到英文版，所以导航里写明「英文」。
// 首页文字和 views/Home.astro 的 EN 一样，现在是占位（TBD）。
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
    h1: "Grok Bot for beginners",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["How to use Grok Bot, in plain words. The main path follows poteto's article “Automate Anything with Grok Bot”. ", "This is an unofficial guide", ", and it's still being written."],
    cta: ["Start here if you're new", "Used it already? The full guide (English)"],
    ctaNote: "The beginner track is three lessons.",
    painH: "Has this happened to you?",
    PAIN: ["TBD: a problem readers often hit (1).", "TBD: a problem readers often hit (2).", "TBD: a problem readers often hit (3)."],
    diffH: "What changes when a bot does it",
    diffW: "When", diffA: "Doing it yourself", diffB: "With a bot",
    DIFF: [
      ["TBD", "TBD", "TBD"],
      ["TBD", "TBD", "TBD"],
      ["TBD", "TBD", "TBD"],
    ],
    lessonsH: "Beginners need just three lessons",
    lessonsP: "Read them in order. After these three you can use it. Everything else on the site is for looking up later.",
    lessonsLabel: "Beginner track: 3 lessons",
    fitH: "Is it for you?", yesH: "Yes, if", noH: "Not yet, if",
    YES: ["TBD", "TBD", "TBD"],
    NO: ["TBD", "TBD", "TBD"],
    devH: "Once you're comfortable",
    devP: "The full guide follows poteto's article: start with the goal, explain your process, then let your bots start work on their own.",
    // 完整教程目前只有英文和中文
    devNote: "The full guide is in English (and Chinese) for now.",
    // FLOW：每个是 [标题, 说明]，图标和顺序固定
    FLOW: [
      ["Set the goal", "TBD"],
      ["Explain the process", "TBD"],
      ["Save it as a skill", "TBD"],
      ["Run it on a schedule", "TBD"],
    ],
    CONN: ["TBD", "TBD", "TBD"],
    stepsLabel: "Full guide: {n} steps",
  },

  // 新手入门三课在导航、首页路线图里的标题、时间、简介（顺序：1 先想清楚、2 建第一个 bot、3 交给它一件事）
  lessons: [
    { title: "Decide what you want done", minutes: "TBD", sum: "Pick something you do often and name the result you want" },
    { title: "Make your first bot", minutes: "TBD", sum: "Make a new bot and give it a name" },
    { title: "Hand it one job", minutes: "TBD", sum: "Explain the job and watch it do it once" },
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
};

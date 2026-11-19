// Wiki 条目：每条同样的结构 —— 一句话（one）、比喻（like）、在 Grok Bot 里（here，最多两段）、可选的清单表（list）、常见误区（myths）、相关（see）。
// 文字里可以用 **粗体**、==荧光笔==（每条最多一处）、`代码`、[外链](https://…) 和 [站内链接](/路径/)（lib/md.js 里简单转换）。
// 写法照 docs/MAINTAINING.md 的「说人话」：短句、一句一个意思、新词当场解释。内容依据见「资料来源」。
// step: 对应的主线步骤；howto: 对应的 How-to。
// 现在只有两条占位，「待写」的地方等写 Wiki 时补。

export const WIKI_GROUPS = ["基本概念", "让它自己干活"];

export const WIKI = [
  {
    slug: "bot", title: "bot 是什么", group: "基本概念",
    one: "bot 是在 Grok Bot 里替你干活的 AI 帮手，每个 bot 有自己的记忆。",
    like: "待写。",
    here: ["待写。"],
    myths: ["待写。"],
    see: ["routine"],
    step: 0,
  },
  {
    slug: "routine", title: "routine", group: "让它自己干活",
    one: "routine 告诉一个 bot 什么时候自动开工：按时间，或者等某件事发生。",
    like: "待写。",
    here: ["待写。"],
    myths: ["待写。"],
    see: ["bot"],
    step: 6,
  },
];

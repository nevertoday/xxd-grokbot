// 常见问题：第一次用 Grok Bot 时最常冒出来的问题。[问题, 答案]，答案里可以用 **粗体**、`代码`、[外链](https://…) 和 [站内链接](/路径/)。
// 常见问题页和搜索都读这里。依据见 docs/MAINTAINING.md 的「资料来源」：官方文档的 faq、troubleshooting、x-subscription/grok-bot、approvals-security-and-privacy、security-faq 几页，和 docs/sources/ui-notes.md（2026-11 核对）。
// 写法：问题照读者心里的原话问；答案像朋友回答，第一句先给结论（会 / 不用 / 不是），再用连着的几句话讲清楚。全页最多一处 ==荧光笔==。每条问答占一行（zh-labels 按行处理）。
export const FAQ = [
  { id: "site", title: "关于本站", items: [
    ["这个网站是 Grok Bot 官方的吗？", "不是。这是一个非官方的学习站，和 xAI、Cursor 都没有关系，功能和用法都以[官方文档](https://docs.x.ai/grok-bot)为准。"],
    ["你们写的这些，是从哪来的？", "主线跟着 poteto 的文章 [Automate Anything with Grok Bot](https://x.com/poteto/status/2123159537016533493) 走，细节以官方文档为准。所有内容我们都用自己的话重新写过，每处都附了原文链接。"],
  ]},
  { id: "before", title: "上手之前", items: [
    ["我的套餐能用 Grok Bot 吗？", "The X Subscription 的 **Premium**、**Super**、**Ultra** 都包含它，**Plus** 和免费版不包含。以前的 Cursor 付费个人套餐、自助开通的 Cursor Teams 也能用，旧的 Cursor 账号还能绑定 SuperGrok、SuperGrok Plus、SuperGrok Heavy 或 X Premium+。不用另外再买 Grok Bot 的订阅，详细的看[套餐和用量怎么算](/howto/plans-usage/)。"],
    ["不装 app，在浏览器里能用吗？", "能聊天。在 x.com 的 X Chat 里，你可以跟自己的 bot 聊，还是同一批 bot；不过这个功能还在逐步开放，从 X Chat 连账号也只支持个人账号。官方文档里建 bot、连应用、设例行任务这些步骤，都是在 Grok Bot 的桌面 app（macOS、Windows、Linux，从 [x.ai/bot](https://x.ai/bot) 下载）或手机 app 里做的。详细的看官方的 [Chat in X Chat](https://docs.x.ai/grok-bot/chat-and-collaboration#chat-in-x-chat)。"],
    ["界面有中文吗？", "有。桌面版和手机版各有 38 种界面语言，默认跟着电脑或手机的系统语言走，所以系统是简体中文，界面就是中文。想自己换，到 **设置 → 通用**（Settings → General）里找 **外观**（Appearance），再改 **语言**（Language）。新建的 bot 默认用界面语言跟你说话，你换一种语言跟它说，它就用那种语言回你。本站写按钮名，先写中文界面上的字，括号里附上英文原文。"],
    ["它跟手机上那个 Grok 是一回事吗？", "不是，这是两个不同的 app。Grok 是用来聊天的；Grok Bot 用 Cursor 账号登录，给你一组能自己干活的 bot。所以你在 Grok app 里碰到的付费墙或 **Weekly SuperGrok Limit**，和 Grok Bot 没关系。"],
  ]},
  { id: "using", title: "用起来", items: [
    ["我合上笔记本，它还会接着干吗？", "会。bot 的活是在云端电脑上跑的，所以你关掉 app、合上笔记本，或者把手机收起来，正在做的活和 routine 都不会停。想在它做完时收到提醒，就打开这个 bot 的 **通知**（Notifications）。手机上在它的资料页里开，桌面上直接让它自己打开。"],
    ["它会记住我哪些事？", "你的习惯、你让它守的规矩，还有关于你的几件事，比如名字和时区；它还会给自己的工作记一份带日期的记录。每个 bot 的记忆是分开的，只有名字、时区这类事所有 bot 共用。想知道它记了什么，直接问一句「你记得我哪些事？」就行，见[它记得什么](/wiki/memory/)。"],
    ["用量是怎么算的？", "按周算。每周有一份额度，到时重置；在 The X Subscription 上，这份额度是 Grok Bot 和 Cursor、Grok app 一起用的。用得快还是慢，要看你交给它什么活、每件活要费多大劲，而 routine 每跑一次、bot 之间每发一条消息，都算用量。见[套餐和用量怎么算](/howto/plans-usage/)。"],
    ["额度用完了，会不会一直扣我的钱？", "要看你有没有开额外用量。没开的话，额度一用完 bot 就停下，等每周重置以后再接着干。开了 **自动充值**（Auto top-up）或按需用量，它就会接着花钱，所以记得设一个每月上限。不过上限挡不住已经在跑的活，可能会稍微超出一点。"],
  ]},
  { id: "trust", title: "放心吗", items: [
    ["它会不会没经我同意，就花钱、发消息？", "这取决于 Auto Review 和你定的规则。它动手之前，Auto Review 会先检查一遍，要你点头的，就发一张审批卡片等你。撤不回的事，给它加一条 **先询问**（Ask first）规则，凡是对得上的动作，它一定先来问你。另外，存在 Vault 里的卡结账时会直接填上，所以==想每一笔都自己批，就别存卡==。见[哪些事要它先问你](/howto/approvals-privacy/)。"],
    ["我的数据会存到哪里？", "存在云上，按你 Cursor 账号的数据设置来管。因为 Grok Bot 需要云端存储，所以它不支持旧版隐私模式（Legacy Privacy Mode）；数据会不会被拿去训练，也跟着 Cursor 账号的隐私设置走。云端电脑在美国，每个用户单独一台，你自己的 bot 共用这一台。细节见 [Cursor 隐私政策](https://cursor.com/privacy)。"],
    ["它会动我自己这台电脑吗？", "只有你允许，它才会。bot 平时都在云端电脑上干活，要在你面前这台电脑上跑命令，归 **在这台电脑上执行**（Execution on this computer）这一项管。它在 **设置 → 电脑 → 你的电脑**（Settings → Computer → Your computer）里，默认是 **每次询问**（Ask every time）；要是用不着，官方建议直接选 **从不允许**（Never allow）。"],
  ]},
  { id: "stuck", title: "卡住了", items: [
    ["登录老是卡着不动，怎么办？", "先让 app 开着，在浏览器里把登录走完，再自己切回 app。要是没反应，就再点一次 **登录**（Sign in），顺便确认你的账号有 Grok Bot。还不行的话，更新一下 app，清掉 cursor.com 和 x.ai 的缓存和 Cookie，再用无痕窗口登一次。要是错误刚刚才冒出来，等 30 到 60 分钟再试；重装 app 一般没用。"],
    ["bot 好像卡住了，怎么办？", "先看看它是不是在等你。打开它的电脑，看它是不是停在某个网页上，再翻翻对话里有没有问题、审批卡片、登录或者验证码在等你处理。方向不对，就发一句话纠正它；想让它停，直接发「现在停下」。要是怀疑整个服务出了问题，去 [status.cursor.com](https://status.cursor.com) 看 **Grok Bot** 那一行。"],
  ]},
];

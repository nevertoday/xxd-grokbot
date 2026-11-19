// 常见问题：第一次用 Grok Bot 时最常冒出来的问题。[问题, 答案]，答案里可以用 **粗体**、`代码`、[外链](https://…) 和 [站内链接](/路径/)。
// 常见问题页和搜索都读这里。依据见 docs/MAINTAINING.md 的「资料来源」：官方文档的 faq、troubleshooting、x-subscription/grok-bot、approvals-security-and-privacy、security-faq 几页，和 docs/sources/ui-notes.md（2026-11 核对）。
// 写法：第一句直接回答（能 / 不用 / 不是，但……），后面最多两三句短句。全页最多一处 ==荧光笔==。
export const FAQ = [
  { id: "site", title: "关于本站", items: [
    ["这是 Grok Bot 的官方网站吗？", "不是。本站是非官方学习站，和 xAI、Cursor 都没有关系。功能和用法以 [官方文档](https://docs.x.ai/grok-bot) 为准。"],
    ["本站的内容从哪里来？", "主线跟着 poteto 的文章 [Automate Anything with Grok Bot](https://x.com/poteto/status/2123159537016533493) 走，细节以官方文档为准。都用我们自己的话重新写过，每处都附原文链接。"],
  ]},
  { id: "before", title: "上手之前", items: [
    ["哪些套餐能用 Grok Bot？", "The X Subscription 的 **Premium**、**Super**、**Ultra** 都包含它，**Plus** 和免费版不包含。旧的 Cursor 付费个人套餐和自助开通的 Cursor Teams 也能用。旧的 Cursor 账号还能绑定 SuperGrok、SuperGrok Plus、SuperGrok Heavy 或 X Premium+。不用另买 Grok Bot 订阅，见 [套餐和用量](/howto/plans-usage/)。"],
    ["能在浏览器里用吗？", "能聊天。在 x.com 的 X Chat 里能跟你的 bot 聊，还是同一批 bot。这个功能还在逐步开放，从 X Chat 连账号只支持个人账号。官方文档里建 bot、连应用、设例行任务的步骤，都是在 Grok Bot 的桌面 app（macOS、Windows、Linux，从 [x.ai/bot](https://x.ai/bot) 下载）或手机 app 里做。见官方的 [Chat in X Chat](https://docs.x.ai/grok-bot/chat-and-collaboration#chat-in-x-chat)。"],
    ["界面是中文的吗？", "是。桌面版和手机版各有 38 种界面语言，默认跟着电脑或手机的系统语言走，系统是简体中文就显示中文。想单独换：**设置 → 通用**（Settings → General）里的 **外观**（Appearance）→ **语言**（Language）。新建的 bot 默认用界面语言跟你说话；你换一种语言跟它说，它就用那种语言。本站写按钮名，先写中文界面上的字，括号里给英文原文。"],
    ["它和 Grok 那个 app 是一回事吗？", "不是，这是两个不同的 app。Grok 是聊天 app；Grok Bot 用 Cursor 账号登录，给你一组能自己干活的 bot。Grok app 里的付费墙或 **Weekly SuperGrok Limit**，和 Grok Bot 无关。"],
  ]},
  { id: "using", title: "用起来", items: [
    ["合上笔记本，它还在干活吗？", "在。bot 的活在云端电脑上跑。关掉 app、合上笔记本或手机，正在做的活和 routine 都不会停。想在它做完时收到提醒，就打开这个 bot 的 **通知**（Notifications）。手机上在它的资料页里打开，桌面上直接让它打开。"],
    ["一个 bot 会记住什么？", "你的习惯、你让它守的规矩，和关于你的几件事，比如名字和时区。它还会记一份带日期的工作记录。每个 bot 的记忆各自分开，只有名字、时区这类事所有 bot 共用。想知道它记得什么，直接问「你记得我哪些事？」。见 [它记得什么](/wiki/memory/)。"],
    ["用量是怎么算的？", "按每周的额度算，每周重置。在 The X Subscription 上，Grok Bot 和 Cursor、Grok app 共用这一份。用得快慢，看你交给它的活是什么、每件要费多大劲。routine 每跑一次、bot 之间每条消息都算用量，见 [套餐和用量](/howto/plans-usage/)。"],
    ["额度用完了，会一直扣钱吗？", "看你开没开额外用量。没开的话，额度用完 bot 就停下，每周重置后接着干。开了 **自动充值**（Auto top-up）或按需用量，就会接着花钱，记得设每月上限。上限挡不住正在跑的活，可能会稍微超出一点。"],
  ]},
  { id: "trust", title: "放心吗", items: [
    ["它会不经我同意花钱、发消息吗？", "会不会先问你，取决于 Auto Review 和你定的规则。动手前 Auto Review 会先检查，要你点头的会发一张审批卡片等你。给撤不回的事加一条 **先询问**（Ask first）规则，匹配的动作它一定先问。存在 Vault 里的卡结账时会直接填，==想每笔都自己批，就别存卡==。见 [哪些事要先问你](/howto/approvals-privacy/)。"],
    ["我的数据会去哪？", "放在云上，按你 Cursor 账号的数据设置来管。Grok Bot 需要云端存储，所以不支持旧版隐私模式（Legacy Privacy Mode）。要不要用来训练，也跟着 Cursor 账号的隐私设置走。云端电脑在美国，每个用户单独一台，你自己的 bot 共用它。细节见 [Cursor 隐私政策](https://cursor.com/privacy)。"],
    ["它会用我自己的电脑吗？", "只有你允许时才会。bot 平时在云端电脑上干活。在你面前这台电脑上跑命令，由 **在这台电脑上执行**（Execution on this computer） 这一项管。它在 **设置 → 电脑 → 你的电脑**（Settings → Computer → Your computer） 里，默认是 **每次询问**（Ask every time）。用不着的话，官方建议选 **从不允许**（Never allow）。"],
  ]},
  { id: "stuck", title: "卡住了", items: [
    ["登录一直完成不了，怎么办？", "先让 app 开着，在浏览器里把登录走完，再自己切回 app。没反应就再点一次 **登录**（Sign in），并确认你的账号有 Grok Bot。还不行，就更新 app，清掉 cursor.com 和 x.ai 的缓存和 Cookie，用无痕窗口再登。刚出现的错误，等 30 到 60 分钟再试；重装 app 一般没用。"],
    ["bot 好像卡住了，怎么办？", "先看它是不是在等你。打开它的电脑，看是不是停在某个网页上。再找找对话里有没有问题、审批卡片、登录或验证码在等你。方向不对，就发一句话纠正它；要它停，就直接发「现在停下」。怀疑整个服务出了问题，去 [status.cursor.com](https://status.cursor.com) 看 **Grok Bot** 那一行。"],
  ]},
];

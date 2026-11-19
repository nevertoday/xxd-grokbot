# 界面实况（2026-11-19 核对）

对照的是本机 `/Applications/Grok Bot.app`，版本 1.0.3，和当天抓的官方文档。

- **只有桌面版。** macOS（Apple 芯片和 Intel）、Windows（x64、Arm64）、Linux（x64、Arm64）。从 https://x.ai/bot 下载。手机上另有 iPhone 和 Android 版（官方 mobile 页）。
- **浏览器里。** 没有能管理 bot 的网页版：浏览器里登录后打开 https://cursor.com/bot/onboarding，页面只写「You're all set」，给一个「Download Grok Bot for macOS」按钮。但能在 x.com 的 X Chat 里跟同一批 bot 聊天，逐步开放中，从 X Chat 连账号只支持个人账号（官方 chat-and-collaboration 的 Chat in X Chat）。所以别写「没有网页版」，写「浏览器里能在 X Chat 聊天」。
- **登录用 Cursor 账号。** 欢迎页点 **Sign in**，在浏览器里完成。
- **哪些套餐能用。** The X Subscription 的 Premium、Super、Ultra；Plus 不行。旧的 Cursor 付费个人套餐和自助 Teams 也能用。SuperGrok 系列和 X Premium+ 可以绑定（get-started、x-subscription-grok-bot）。
- **界面语言。** 桌面版和手机版各有 38 种界面语言，默认「跟随系统」（Follow System），在 **设置**（Settings）→ **通用**（General）→ **外观**（Appearance）里的 **语言**（Language）改（官方 faq）。app 里带着简体中文的消息表，约 6100 条，按钮、菜单、设置页都有中文。
  - 中文写法用 `node scripts/app-labels.mjs "<英文标签>"` 查：它算出英文原文对应的消息 id，在 app 的简体中文表里找。
  - 举例（app 1.0.3）：New Bot → 新建 Bot，Create → 创建，Routines → 例行任务，When to run → 何时运行，Vault → 保险库，Always allow → 始终允许，Allow once → 允许一次，Ask first → 先询问，Approve → 批准，Deny → 拒绝，Sign in → 登录，Settings → 设置，Test → 测试，Paused → 已暂停，Teach a task → 教它做一项任务，Start voice input → 开始语音输入，Secure Form → 安全表单，Import Bot → 导入 Bot，Usage & Billing → 用量与账单。
  - 查不到的（比如 Run history、Add to Grok Bot）：可能是文档的写法和 app 不完全一样。照官方文档写英文，括号里给中文意思，在下面的待核对里记一笔。
- **更正（2026-11-19）。** 这份笔记最早写的是「窗口里主要是英文」。那是因为当时只搜了 app 里的 ASCII 字符串，漏掉了 UTF-8 的中文。已改正。
- **第一个 bot。** 登录后有一小段介绍，app 自动建好第一个 bot，名字叫 **Grok Bot**，并打开和它的对话。
- **改名。** 点对话顶部的 bot 名字打开详情，再点一次名字就能改。

## 待核对

官方文档里写了、但 app 1.0.3 的消息表里按原文查不到的标签（`node scripts/check-ui-labels.mjs` 的「只在官方文档里」那一档）。页面上照文档写英文，中文页括号里给中文意思；以后 app 更新再查：

Accepting legal terms、Add to Grok Bot、Bot's accounts、Deleting or overwriting data、Import from CSV…、Publishing content、Run history、Save securely、Sending messages or invitations、Settings → Computer → Your computer、Settings → Computer、Settings → Usage & Billing、Settings → Vault、Start dictation、Training opt-out、Weekly SuperGrok Limit、secure secret card

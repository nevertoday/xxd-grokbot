# 维护说明

把 Grok Bot（带一台云端电脑的 AI 帮手）讲给第一次用的人，也给用熟了想用得更深的人：说人话，从建第一个 bot 到让它自己按时开工。主线跟着 poteto 的文章「Automate Anything with Grok Bot」。
五块内容：新手入门（三课）、完整教程（按顺序 0–7 步）、How-to（具体怎么做）、Wiki（这是什么）、常见问题。

**本站是非官方学习站**，和 xAI、Cursor 都没有关系。页脚、常见问题和 README 都要写明这一点，并链到官方文档。不用官方的标志和配色，不写成官方的口吻。

- 站点骨架沿用 xxd-pstack（pstack 新手教程站，`../xxd-pstack`）：同样的外壳、组件、搜索和写作规矩。那边的技能速查、「我用的工具」命令改写、8 种语言这里都没有。
- 界面用 xxd-ui-kit（`public/xxd/` 里自带一份，不走 CDN）。
- 中英双语：中文在根路径，英文在 `/en/` 下，slug 相同，顶栏按钮切到对应页。改了一篇中文，**同一次提交里把英文版也改了**：
  - 正文：`src/pages/en/start/`、`src/pages/en/guide/`、`src/pages/en/howto/`（MDX，路径多一层 `../`；站内链接加 `/en`；`<Term k="中文键" />` 照原样，英文名在 `nav.js` 的 `GLOSSARY[k].en`）。
  - 数据：`nav.js` 各条目的 `en: {}`；`wiki.en.js`、`faq.en.js`（按 slug 叠加，结构和条数要和中文一致）；界面文字在各组件和 `views/` 里的 zh / en 两份。
  - 强调：每页最多一处 `<mark>`（这页最要紧的一句），`<u>` 只给照做会失败的坑；英文页放在对应的那句上。
- v1 只有中英文；以后加语言照 xxd-pstack 的做法（`nav.js` 的 `LANGS`、`src/i18n/<语言>.js`、`src/pages/<语言>/start/`，改完跑 `node scripts/check-i18n.mjs`）。

```bash
npm install
npm run dev        # http://localhost:4430
npm run build      # 输出到 dist/
node scripts/check-i18n.mjs
```

## 现在的状态

骨架已经搭好，内容还没写。所有页面都是一行占位（「这一页还在写。」/「This page is still being written.」），首页、Wiki 和 `nav.js` 里还没定的字写成「待写」/「TBD」/「待定」，搜这几个词就能找到。完整教程每一步在 `nav.js` 里是 `ready: false`，导航显示「编写中」；写完一步改成 `ready: true`。

## 怎么改

- **站点结构**只在 `src/data/nav.js` 改：新手入门三课（`LESSONS`）、主线 8 步（`STEPS`）、How-to 清单（`HOWTO`）、术语解释（`GLOSSARY`）、本站仓库（`REPO`）、官方文档（`DOCS`）、poteto 的原文（`ARTICLE`）。
- **新手入门**每一课是 `src/pages/start/<n>-<slug>.mdx`，开头写 `layout: ../../layouts/Lesson.astro` 和 `lesson: n`。
- **主线教程**每一步是 `src/pages/guide/<n>-<slug>.mdx`，开头写 `layout: ../../layouts/Guide.astro` 和 `step: n`。
- **How-to** 是 `src/pages/howto/<slug>.mdx`（`layout: ../../layouts/HowTo.astro`，`slug` 要和 `HOWTO` 里一致，`step` 是相关的主线步骤）。
- **Wiki** 和 **常见问题** 只改数据：`src/data/wiki.js`、`src/data/faq.js`。Wiki 条目可以带一张 `list` 表。`GLOSSARY` 的每个术语用 `wiki:` 指向一条 Wiki 条目；加了新条目，记得把对应术语指过去。
- **教程组件**（在 MDX 里 import）：`Callout`（`ok` / `warn` / `no` / `tip`）、`Term`（术语，`k` 对应 `GLOSSARY`）、`Checkpoint`（可打勾的检查点）、`Q`（「卡住了？」里的一条）、`Tabs`（按设备或路线切换）、`Copy`（带复制按钮的提示词）、`Cmd`（正文里一点就复制的命令）、`Reply`（示意 bot 的回复）、`Shot`（配图）、`Fig`（图示）。
- **搜索**（⌘K）自动收录新手入门每一课、主线每一步、每篇 How-to、每个 Wiki 条目和每条常见问题，正文按小节做全文搜索。
- **UI Kit 升级**：在 xxd-ui-kit 里 `pnpm xxd sync <本目录>`，不要手改 `public/xxd/`。改完界面跑 `pnpm xxd doctor <本目录>`。

## 资料来源

本站写的每一条事实，都要能在下面两处找到出处：

1. poteto 的文章 [Automate Anything with Grok Bot](https://x.com/poteto/status/2123159537016533493)：主线的思路和例子。
2. 官方文档 [docs.x.ai/grok-bot](https://docs.x.ai/grok-bot)：功能、按钮、限制、套餐。两处说法不一样时，以官方文档为准。

- 原文副本在 `docs/sources/raw/`（文章在 `poteto-automate-anything.md`，官方文档每页一个文件在 `official/`，网址清单在 `official/_urls.txt`）。只留在本地，不提交（`.gitignore` 里排除了）。仓库是公开的，别人的文章不整篇转载。
- 读资料的笔记记在 `docs/sources/README.md`：要点、本站哪页用到、还没用上的地方。
- 写进网站的内容一律用自己的话讲，引用原话一次不超过一句，并附原文或官方文档那一页的链接。
- 资料里没写的行为、按钮名、数字，不写。拿不准就不写，或者写「以官方文档为准」并给链接。
- 会变的东西（套餐、用量、按钮位置、支持哪些应用）以官方文档为准，变了就改 `data/` 或页面里对应的那一处。

## 同步

官方文档会变。每隔一阵、或者 Grok Bot 出新版以后：

```bash
node scripts/sync-docs.mjs          # 重新抓官方文档，列出新增、删除、改动的页，更新 docs/sources/official.json
node scripts/check-ui-labels.mjs    # 页面里加粗的界面名，到本机装的 Grok Bot 和官方文档里找
node scripts/app-labels.mjs "New Bot"  # 查一个英文标签在 app 里的简体中文写法
```

- `sync-docs` 列出的改动页，对照 `docs/sources/README.md` 的「和本站的对应」表，改掉本站用到的地方，再提交 `official.json`。只想看有没有变：加 `--check`（有变化时退出码 1）。
- `check-ui-labels` 分三档：app 里有；只在官方文档里（照文档写，在 `docs/sources/ui-notes.md` 记一笔待核对）；两边都没有（改掉或删掉）。它默认读 `/Applications/Grok Bot.app`，没装就只对照文档。
- 当前核对到：官方文档 2026-11-19，Grok Bot 桌面版 1.0.3。

## 写作规矩

- 站在第一次用的人的角度：先说这一步做什么、为什么，再说怎么做，最后说应该看到什么。
- 说人话：短句、具体、不堆术语；第一次出现的术语用 `Term` 包起来。
- **界面上的按钮和菜单名，照 app 屏幕上的字写。** Grok Bot 桌面版有 38 种界面语言，默认跟着系统走，所以中文系统的读者看到的是中文界面。
  - 中文页：加粗写 app 的简体中文，第一次出现时括号里给英文原文，比如 **新建 Bot**（New Bot）。中文写法用 `node scripts/app-labels.mjs "New Bot"` 查，不要自己翻。查不到的，照官方文档写英文，括号里给中文意思。
  - 英文页：照官方文档和 app 的英文写，加粗。
- 作者 poteto 一律称「作者」或「poteto」，不用他 / 她。
- MDX 正文里不能出现裸的 `<`、`{`、`}`：占位符写在代码里，比如 `` `<你的 bot 名>` ``。

## 说人话：全站的改写规则

读者反馈「读着脑袋烧、get 不到」，原因几乎都是下面这几条。写新内容、改旧内容都照这个来。

**每页**
- frontmatter 里写 `tldr:`，显示在标题下面的「一句话」：看完这页你能做成什么。不超过 40 个字，说结果，不说「本页介绍……」。
- 小节标题写读者的动作或问题：「先说清楚要什么结果」「它说做不了」。不用名词当标题（「约束」「原理」）。
- 正文比初稿短三分之一以上。删掉读者用不上的：作者履历、版本差异、少见的边缘情况、内部流程的细节。真有人需要的，收进页尾的 `Q` 折叠项。

**每段、每句**
- 一段只讲一件事；一句只讲一个意思。中文一句超过 30 个字就拆开，英文超过 20 个词就拆开。
- 先给例子，再讲道理：先放能照抄的提示词或操作，再用一两句说为什么。
- 正面说要做什么。不用「不是……而是……」「最好别……」「……不是客气话」这类要读者拐弯的句式。
- 只讲读者要做的事和会看到的东西。bot 内部怎么运作，能不讲就不讲。
- 一句话里最多出现一个新词。
- **卖点只说一次。** 概括 Grok Bot 好处的话，首页标题说一次、第 1 课说一次，就够了。别的页面的「一句话」、简介、导航摘要、术语悬停提示里不再重复，写这一页具体做什么。必须提到时，写具体的东西（它做了哪几步、交回了什么），不要再喊口号。

**词**
- 新词第一次出现，当场用大白话说清楚（括号或紧跟一句），或者直接换成日常说法：

| 别写 | 写成 |
| --- | --- |
| 产物 | 能拿来检查的东西（截图、文件、记录） |
| 约束 | 要求、不能碰的地方 |
| 根因 | 真正的原因 |
| 复现 | 让问题再出现一次（第一次出现时这样解释，之后可以用「复现」） |
| 下游 / 上游 | 出问题之后的地方 / 出问题的源头 |
| 上下文 | 前面聊过的内容 |
| 意图 | 你想要什么 |
| 只读 | 只看不改 |
| 钉死、钉在 | 固定 |
| 证明力 | 说服力 |
| 一个字节都不能变 | 正文里写「一点都不能变」；给 bot 的提示词里写「要和原来逐字一样」（提示词要精确） |
| 收敛、坍缩、落地、闭环、抓手 | 删掉，换成具体发生了什么 |

- bot、routine、技能、Vault 这些站内术语，用 `Term` 包起来，悬停有一句解释。

**表格和列表**
- 表格最多 3 列、5 行，每格不超过 15 个字。放不下就改成列表。
- 列表每项先写结论（加粗几个字），后面最多一句解释。

**不能动的**
- 提示词、按钮名、数字保持准确；不写资料来源里没写的行为。
- 强调：每页最多一处 `<mark>`；`<u>` 只给会让人做错的坑。
- 中文页和 `/en/` 下的英文页一起改，结构保持一致。

## 新手入门（/start/）的写法

新手入门是给第一次用 Grok Bot、只和 AI 聊过天的人看的。站点有两条路：新手入门三课（`src/pages/start/`，数据在 `nav.js` 的 `LESSONS`），和给想用得更深的人的完整教程（`guide/`）。新手页的规矩比上面更严：

- **先做，后讲。** 每一课一开始就让人动手；道理只讲到「为什么要这样做」的一句话。（Carroll 的极简教学、Diátaxis 的 tutorial 原则）
- **只给一条路。** 不列「也可以这样」。别的做法放到页尾的「不对怎么办」里，一句话带过。
- **每一步写「你应该看到」。** 用 `<Callout type="ok">`，写屏幕上真的会出现的字。
- **每一课都有「不对怎么办」。** 按读者会看到的现象写问题（「它说做不了」），不按原因写。
- **不出现没解释过的词。** webhook、触发条件、API、MCP 这类词都不进新手页；非要用就换成日常说法。
- **说清楚哪些是可选的。** 三课之外的一切都标成「遇到了再查」；不要让读者觉得每一页都必须看。
- **反复用同一个句式。** 同一种说法（比如「我想要什么 · 做好是什么样子 · 做完给我看什么」）在每个例子里重复，换场景不换句式。
- **示意要标明是示意。** bot 回复的样子用 `Reply` 组件，标题写「示意」，不冒充真实记录。

## 正文里的图示（`<Fig id="…" />`）

一张图讲清一个关系，放在最需要的那一节：两条路的对比、几步的顺序、哪一层、由强到弱。不是每节都配；同一页最多两张。

- **数据和文字**在 `src/data/figs.js`：每张图一个 id，`type` 选画法（compare、term、folder、anatomy、stack、flow、night、ladder、fan、tree），`base` 放和语言无关的部分（图标、命令、哪一步要你开口），`zh` / `en` 放文字。现在一张都还没有；每种画法要哪些字段，看 `Fig.astro` 里对应的那段，或者 xxd-pstack 的 `src/data/figs.js`。
- **画法**在 `src/components/Fig.astro`，样式在 `public/site.css` 的「图示」一节。全部是 HTML + CSS：颜色、圆角用令牌，跟着亮暗、直角圆角、主色走；字能换行，正文栏窄了自动竖排（容器查询）；从右到左的语言里横向箭头会翻过来，竖排的箭头不翻。
- **动画**：进入视野后一步步亮起来，放两遍停在完整的样子，图下面出「再看一遍」。只动 opacity / transform；系统设了减少动效、或者没有脚本时直接显示完整的图。终端图的命令一个字一个字打出来，窗口标题写在 `base.app`。
- **图里的字**：一格一件事，短；`/命令` 会自动排成等宽、不在连字符处断开。不抄正文整句，也不喊卖点。界面上的按钮名照真实界面写（中文图用 app 的中文，英文图用英文），说明文字才翻译。
- **新加一张**：先在 `figs.js` 写数据，再在中文页、`/en/` 页同一位置放 `<Fig id="…" />` 并 `import Fig`；`npm run build` 后亮色、暗色、手机宽度各看一眼。

## 反馈入口

每页末尾一行（`Feedback.astro`）：没看懂、照做不成，就到 GitHub 提（带好页面信息的 issue 模板），或者先翻常见问题。首页和常见问题页末尾是「提问和讨论」卡片（`Contact.astro`）：GitHub 提问、讨论、分享做出来的 bot，作者的 X 只是一个安静的文字链接。不放个人二维码，不催读者「整理好一起发」。

## 部署

线上：<https://grokbot.xiaoxiaodong.ai>（还没部署）　仓库：<https://github.com/nevertoday/xxd-grokbot>（还没建）。
Cloudflare Workers 静态资源，配置在 `wrangler.jsonc`。更新：`npm run release`（构建后 `wrangler deploy`，需要先 `npx wrangler login`）。

## README 插画和分享大图

分享大图：`python3 tools/build_og.py` 生成 `assets/social.svg`、`assets/en/social.svg`，再用 Chrome 转成 `public/og.png`（中文页用）和 `public/og-en.png`（英文页用），1280×640。改了文字重跑一次，看一眼两张图有没有字顶到边。GitHub 仓库的 Social preview 用英文那张，要在仓库 Settings → General 手动上传。

本站标志（`Site.astro` 里的 `site-mark` 和 `public/favicon.svg`）是一张极简的 bot 脸：两只方眼睛、一道嘴。故意不像 Grok Bot 官方的图标，本站是非官方的。

配色要干净通透：画布接近白（`#FAFAF8`，一圈 `#E9E7E4` 淡边），卡片纯白，线和次要文字用 UI Kit 的 `--line`、`--muted`，浅色块用去掉灰调的浅色。不要灰米色底和偏棕的阴影。不用 xAI、Grok 或 Cursor 的标志。

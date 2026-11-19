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
node scripts/zh-labels.mjs          # 中文页里漏写成英文的按钮名，换成 app 的中文（--dry 先看）
npm run check                       # 构建以后：多语言检查 + 整站检查（<mark>、站内链接和锚点、示意标题、占位字）
node scripts/app-labels.mjs "New Bot"  # 查一个英文标签在 app 里的简体中文写法
```

- `sync-docs` 列出的改动页，对照 `docs/sources/README.md` 的「和本站的对应」表，改掉本站用到的地方，再提交 `official.json`。只想看有没有变：加 `--check`（有变化时退出码 1）。
- `check-ui-labels` 分三档：app 里有；只在官方文档里（照文档写，在 `docs/sources/ui-notes.md` 记一笔待核对）；两边都没有（改掉或删掉）。它默认读 `/Applications/Grok Bot.app`，没装就只对照文档。
- 当前核对到：官方文档 2026-11-19，Grok Bot 桌面版 1.0.3。

## 写作规矩（硬规矩）

- **界面上的按钮和菜单名，照 app 屏幕上的字写。** Grok Bot 桌面版有 38 种界面语言，默认跟着系统走，所以中文系统的读者看到的是中文界面。
  - 中文页：加粗写 app 的简体中文，第一次出现时括号里给英文原文，比如 **新建 Bot**（New Bot）。中文写法用 `node scripts/app-labels.mjs "New Bot"` 查，不要自己翻。查不到的，照官方文档写英文，括号里给中文意思。
  - 英文页：照官方文档和 app 的英文写，加粗。
- 事实只写资料里有的（见上面「资料来源」）；作者 poteto 一律称「作者」或「poteto」，不用他 / 她。
- 强调：每页最多一处 `<mark>`，放这页的核心那一句；`<u>` 只给照做会出错的坑。
- bot 回复的样子用 `Reply` 组件，标题写「示意」，不冒充真实记录。
- 中文页和 `/en/` 下的英文页一起改，讲的事实和结构保持一致。
- 第一次出现的站内术语用 `Term` 包起来，悬停有一句解释。
- MDX 正文里不能出现裸的 `<`、`{`、`}`：占位符写在代码里，比如 `` `<你的 bot 名>` ``。

## 怎么写：像一个懂行的朋友，坐在旁边讲给你听

2026-11-19 的读者反馈：教程学起来累，很多话要「过一遍脑子」才懂，读着拗口。原因出在我们自己定的规矩上：一句不超过 30 个字、一句只讲一个意思、每一步都放一个「你应该看到」的框。句子被切成了电报，「因为」「所以」「其实」这些把意思连起来的词都被删了，读者只好自己去补。现在改成下面这套写法，参照凯文·凯利（Kevin Kelly）那种「抓住一个核心，用一个画面讲透」的写法，也合教育心理学里几条站得住的发现：对话的口吻比说明书的口吻更好学（Mayer 的个性化原则），故事比条目好记，意思连贯的长句比切碎的短句更省力。

1. **一页一个核心。** 开头几句就把它说出来，最好落在读者自己的处境上（「你是不是也……」）。这一句用 `<mark>` 标出来，全页只这一处。
2. **先讲画面，再讲方法。** 用文章里的例子讲成小故事：苹果派、换爆胎、给小店排预约、修车店记时间、Yelp 上的差评。道理放在故事后面，一两句就够。
3. **让句子连起来。** 该用「因为」「所以」「可是」「其实」「比如」「于是」就用。长句短句交替，不机械地拆句。写完念出声，哪里卡住就改哪里。
4. **像说话，不像说明书。** 用「你」，用平常的口语。避开公文腔和翻译腔：进行、基于、用于、对……进行、以……的方式、相关、该（当「这个」用）。也别喊口号、别装熟：正文里不写「超简单」「爽翻」「赋能」，具体说它做了什么、替你省了什么。
5. **段与段之间有过渡。** 读者应该一直知道「为什么现在讲这个」。
6. **格式克制。** 列表只放真正并列的几样东西；加粗只给关键的几个字；Callout 一页一两个，只放真有用的提醒。「你应该看到」只用在界面会变化、读者需要确认自己没走错的地方，比如装 app、建 bot、设例行任务那几步。
7. **新词顺手解释。** 像朋友那样一句带过（「例行任务，就是让它按时自己开工的那种任务」），不要一段里堆好几个新词。
8. **收个尾。** 页末一两句：刚才学会了什么，下一步去哪。
9. **提示词像平时说话。** 写成完整、自然的话，不用填空模板腔。交代目标统一用「我想……，好让……」，比如「我想每周一开会前，大家手里都有一份讲清进展的幻灯片，好让会上多花时间做决定」。
10. **英文页同理。** Conversational, warm and plain. Contractions are fine. Vary sentence length. No corporate words (leverage, utilize, seamless, empower).

每类页面的样子：

- **新手入门三课**（`src/pages/start/`，数据在 `nav.js` 的 `LESSONS`）：给第一次用 Grok Bot、只和 AI 聊过天的人。开头一个小场景，然后马上动手；只给一条路，别的做法放进页尾「不对怎么办」，按读者看到的现象写（「它说做不了」）；不出现没解释过的词（webhook、API、MCP 这类不进新手页）；说清楚三课之外的都是「遇到了再查」。
- **完整教程**（`guide/`）：一个核心想法，配文章里的例子，再给一两段能照抄的提示词，最后「卡住了？」。
- **How-to**：一件具体的活。开头一句说做完你会得到什么，然后按「目标、做法、怎么判断、让它自己开工」讲下去，写成连贯的话，不是四个填空。
- **Wiki**：保留「一句话 → 打个比方 → 在 Grok Bot 里 → 常见误区」的结构，每一块都用说话的口吻写。

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

线上：<https://grokbot.xiaoxiaodong.ai>　仓库：<https://github.com/nevertoday/xxd-grokbot>（2026-11-19 首次部署）。
Cloudflare Workers 静态资源，配置在 `wrangler.jsonc`。更新：`npm run release`（构建、跑 `npm run check`，都过了才 `wrangler deploy`；需要先 `npx wrangler login`）。

## README 插画和分享大图

README 头图是一段 SVG 动画：`python3 tools/build_hero.py` 写出 `assets/hero.svg` 和 `assets/en/hero.svg`。左边标题和四步，右边是和 Potato 的一段对话，四步跟着对话亮起，播完淡出重来；系统设了减少动效就直接显示最后的样子。改字改 `TEXT`，改节奏改 `T_*` 常量。看效果：把 SVG 内嵌进一个 HTML，用 `document.getAnimations()` 暂停在某一秒再截图（放在 `<img>` 里的动画，无头 Chrome 不会往前走）。

分享大图：样子和文字都在 `tools/og.html`（一张 HTML 海报，`?lang=zh` / `?lang=en`）：深色底、一句大标题、一行出处、一个 bot。只放这三样，缩略图大小也要一眼看清；标题从文章里来，不喊空口号。`python3 tools/build_og.py` 用 Chrome 截图，2 倍清晰度（2560×1280），写出 `public/og.png`（中文页分享用）、`public/og-en.png`（英文页分享用）。改完两张都看一眼：贴纸、气泡、标题有没有互相压住，字有没有顶到边。GitHub 仓库的 Social preview 用英文那张，要在仓库 Settings → General 手动上传。

本站标志（`Site.astro` 里的 `site-mark` 和 `public/favicon.svg`）是一张极简的 bot 脸：两只方眼睛、一道嘴。故意不像 Grok Bot 官方的图标，本站是非官方的。

配色要干净通透：画布接近白（`#FAFAF8`，一圈 `#E9E7E4` 淡边），卡片纯白，线和次要文字用 UI Kit 的 `--line`、`--muted`，浅色块用去掉灰调的浅色。不要灰米色底和偏棕的阴影。不用 xAI、Grok 或 Cursor 的标志。

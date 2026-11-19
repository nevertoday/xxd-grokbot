# Rewrite brief: the new voice (2026-11-19)

## The user's goal
Readers say the Grok Bot tutorial site (zh at the root, en under /en/) is tiring: sentences feel stiff and twisty, and many lines need decoding before they make sense. The owner wants it to read like Kevin Kelly: grab the core idea, explain it through a picture, and let the reader learn without noticing the effort. Every fact must stay exactly as sourced.

## Read first
1. `docs/MAINTAINING.md`, sections 「写作规矩（硬规矩）」 and 「怎么写：像一个懂行的朋友，坐在旁边讲给你听」. These replace the old short-sentence rules. Follow them.
2. The model page, already rewritten in the new voice: `src/pages/start/1-goal.mdx`. Compare it with the old version (`git show 8b286ef:src/pages/start/1-goal.mdx`) to see what changed and why.
3. Sources for any fact you touch: `docs/sources/README.md`, `docs/sources/ui-notes.md`, and the originals in `docs/sources/raw/`.

## What to do with each of your pages
- Find the page's one core idea, say it in the opening lines (ideally in the reader's own situation), and mark that one sentence with `<mark>`.
- Tell the article's examples as small stories, then give the method. Join sentences with 因为 / 所以 / 其实 / 比如 where the meaning connects. Read it aloud; fix anything that snags.
- Keep every fact, number, link, docs anchor and UI label exactly as true as it is now (UI labels: `**app 中文**（English）` on first use in zh, per the hard rules). Do not add facts the sources don't have. If a rewrite needs a new fact, leave it out.
- Prompts the reader copies: natural, complete sentences. Goal prompts use 「我想……，好让……」 / "I want …, so that …". Keep each `Copy` id the same.
- Cut boxes and bullets that only restate the obvious. Keep 「你应该看到」 only where the screen changes and the reader needs to confirm (install, sign in, create a bot, a routine).
- Keep the `Q` items in 「卡住了？」/「不对怎么办」, rewritten in the same voice. Keep any element id other pages link to (for example `id="interview"` in lesson 2); `npm run check` will catch a broken anchor.
- The en twin gets the same rewrite in natural English, same facts and structure.
- Length is not a goal either way; clearer is the goal. Most pages will get somewhat shorter because restating boxes go.

## Rules
- Work only in your worktree and only on your files. Don't edit files another writer owns; list needed changes in your report.
- Before you report: `npm run build`, `npm run check`, `node scripts/check-ui-labels.mjs` (no ✗ for your files), and `node scripts/zh-labels.mjs --dry` (nothing to change in your files). Then `git add -A && git commit -m "<short message>"` on your branch. Don't push.
- Don't start a dev server. If you must look at a page, serve `dist/` with `python3 -m http.server <port> --bind 127.0.0.1`, then kill it and confirm the port is free.

## Report
Files changed; for each page its one core idea (zh and en, one line); any fact you removed because you couldn't keep it accurate; anything you need from another writer; your commit hash.

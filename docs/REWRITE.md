# Rewrite brief: everyday examples, spoken dialogs (2026-11-20)

The previous brief (the 2026-11-19 voice rewrite) is in git history. This one replaces it.

## The user's goal
Readers of the Grok Bot tutorial site say the examples fit only a few people: change your job or your country and they stop making sense. Apple pie, a flat tire, a car repair shop and Yelp reviews come from the article author's own American small-business life. The dialogs read like documents, so readers can't see their own pain in them and don't feel drawn in. The owner wants down-to-earth, varied examples that work for students, office workers, parents, people looking after their parents, freelancers, small shop owners and job seekers, in any country, and dialogs that sound like a real person texting a capable helper.

## Read first
1. `docs/EXAMPLES.md`: the scenario library, the two metaphors that replace apple pie and the flat tire (dinner, the electricity bill), how to write dialogs, the before/after table, what not to use. It is the contract. Don't edit it; if it's missing something you need, say so in your report.
2. `docs/MAINTAINING.md`: 「写作规矩（硬规矩）」 and 「怎么写」. Rules 2 and 9 there now point at EXAMPLES.md.
3. For any fact you touch: `docs/sources/README.md`, `docs/sources/ui-notes.md`, and the originals in `docs/sources/raw/` (the official Use Cases page is `raw/official/grok-bot-use-cases.md`).

## What to do with each of your pages
- Find every example, story, scenario, list of examples, prompt (`Copy`), bot reply (`Reply`) and quoted line.
- Replace narrow or foreign ones with scenarios from the library, and vary who the people are within a page. Keep a work example where the page is about work, but write it so any office worker recognizes it.
- Where a page teaches something the article taught through its examples (for example: when the email and the booking system disagree, which one to trust; a review saying the wait was too long; logging timestamps at a repair shop), keep the lesson and retell it with a library scenario (a hair salon or a tutor's bookings, reviews online, a phone-repair counter's timestamps). You may say the idea comes from poteto's article; never attribute our new examples to the author.
- Rewrite dialogs so they sound spoken: situation and pain first, then what you want, the reason carried by 「这样……」「省得……」. No 「我想……，好让……」, no "I want …, so that …". Bot replies are short and concrete. Test each one: would a real person type this to a helper?
- Keep every fact, number, link, docs anchor, UI label (`**app 中文**（English）` on first use in zh), `Copy` id and any element id other pages link to. Add no capability the sources don't support; anything that sends, pays or books is drafted for the reader to approve.
- The en twin gets the same examples and the same rewrite in natural English (contractions, no corporate words). Same facts and structure.
- Keep the voice rules: one core idea per page with one `<mark>`, stories before method, connected sentences, a short close.

## Rules
- Work only in your worktree, only on your files. Don't edit files another writer owns or `docs/EXAMPLES.md`; list needed changes in your report.
- Use your own scratchpad subfolder for temporary files.
- Before you report: `npm run build`, `npm run check` (`check-examples` must list nothing in your files; other writers' files may still be listed), `node scripts/check-ui-labels.mjs` (no ✗ in your files), `node scripts/zh-labels.mjs --dry` (nothing to change in your files). Then `git add -A && git commit -m "<short message>"` on your branch. Don't push.
- Don't start a dev server. If you must look at a page, serve `dist/` with `python3 -m http.server <port> --bind 127.0.0.1`, kill it when done and confirm the port is free with `lsof -i :<port>`. Before reporting, `pgrep -fl 'wrangler|workerd|esbuild|vite|http.server|astro'` must show nothing of yours.

## Report
Files changed; for each page its old examples → new examples (and whose life each comes from); how many prompts and replies you rewrote; any fact you removed because you couldn't keep it accurate; cross-page references other writers need to match; your commit hash.

# Shared brief for content writers (xxd-grokbot)

## The user's goal
An independent, open-source, unofficial learning site at grokbot.xiaoxiaodong.ai that teaches Grok Bot to both beginners (people who have never automated anything and don't code) and experienced users. It is built around poteto's article "Automate Anything with Grok Bot" and checked against the official docs. v1 is Chinese (root path) and English (/en/). The sister site https://pstack.xiaoxiaodong.ai (source: /Volumes/T7-usb/js/xxd-pstack, read-only for you) is the model for tone and page shapes.

## Read before writing
1. `docs/MAINTAINING.md` in your worktree: every writing rule (说人话 rules, 新手入门 rules, emphasis, the /en/ twin, MDX pitfalls). Follow it exactly.
2. `docs/sources/README.md` and `docs/sources/ui-notes.md`: our notes on the article and the docs, and the UI facts checked against the installed app.
3. The originals you need, in `/Volumes/T7-usb/js/xxd-grokbot/docs/sources/raw/` (article: `poteto-automate-anything.md`; official docs: `official/grok-bot-<page>.md`). Read the ones your pages draw on in full.
4. For page shape, read 2 or 3 matching xxd-pstack pages (e.g. `src/pages/start/*.mdx`, `src/pages/guide/3-first-task.mdx`, `src/pages/howto/fix-bug.mdx`, `src/data/wiki.js`) and the components they import.

## Facts and sources
- Every factual statement comes from the article or the official docs. Write it in your own words. Never copy doc paragraphs. At most one short quote per page.
- Link the official page a section relies on (`https://docs.x.ai/grok-bot/<page>`, no `.md`). Link the article as `https://x.com/poteto/status/2123159537016533493`.
- Don't invent features, buttons, prices, limits or behavior. If the docs don't say it, leave it out.
- UI labels: English label in bold, Chinese meaning in parentheses on zh pages (ui-notes.md explains why). Only use labels the docs or ui-notes name.
- Prompts the reader copies: on zh pages write them in Chinese (Grok Bot understands Chinese). Keep the article's structure (goal, process, restate first, don't start yet). On en pages, use English.
- poteto is 「作者」 or 「poteto」 / "the author" or "poteto". Never he/she. Refer to the reader as 你 / you.
- Bots: use "bot" in prose (official docs capitalize "Bot"; either is fine, be consistent per page). Name example bots "Potato" like the article.
- The site is unofficial. Don't speak for xAI or Cursor.

## Files
- Write only the files your brief lists, zh and /en/ twin together, same structure. Do not edit `src/data/nav.js`, `src/data/figs.js`, or files another writer owns. If you need a glossary term, a nav title change, or a figure, list it in your report instead.
- Set nothing to `ready: true` yourself. Report which pages are done.

## Checks before you report
- `npm run build` passes in your worktree (run it only in your own worktree).
- `node scripts/check-i18n.mjs` passes.
- No bare `<`, `{`, `}` in MDX prose.
- Commit your work on your branch in your worktree (`git add -A && git commit -m "<short message>"`). Do not push.
- Don't start a dev server. If you must look at a page, use `npm run dev -- --port <your port>`, then kill its whole process group and confirm `lsof -i :<port>` is empty before you report.

## Report
List each file written, the official pages and article sections each relies on, any statement you could not source (and left out), requested glossary terms or figures, and your commit hash.

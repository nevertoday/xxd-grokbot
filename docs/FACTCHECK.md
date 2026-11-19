# Fact-check brief (xxd-grokbot)

The site at /Volumes/T7-usb/js/xxd-grokbot is an unofficial Grok Bot learning site (zh at the root, English under /en/). Its rule: every factual statement must come from poteto's article or the official Grok Bot docs. You are checking that, independently of the writers.

## Sources (local copies, read the ones your pages cite in full)
- Article: `docs/sources/raw/poteto-automate-anything.md`
- Official docs: `docs/sources/raw/official/grok-bot-<page>.md` and `x-subscription-*.md` (fetched 2026-11-19). A link `https://docs.x.ai/grok-bot/<page>` on the site maps to `grok-bot-<page>.md`.
- UI facts checked against the installed app: `docs/sources/ui-notes.md`. For a Chinese button name, run `node scripts/app-labels.mjs "<English label>"`.

## What to check, sentence by sentence, in your files
1. **Supported.** Each factual claim (what Grok Bot does, buttons, limits, plans, what needs approval, what can't be undone, what the article says) is stated or clearly implied by a source. Advice and plain-language explanation are fine; invented features, numbers, button names or behavior are not.
2. **Not distorted.** Safety-relevant claims (approvals, payments, sending mail, data, deletion, what runs without asking) say exactly what the docs say, no stronger and no weaker.
3. **Links.** Each docs link points to a page (and anchor, if any) that exists in the local copy and supports the sentence next to it. Anchors are the heading text lowercased with spaces as hyphens and punctuation dropped.
4. **zh and en agree.** The zh page and its /en/ twin state the same facts.
5. **Attribution.** Things credited to the article ("作者说", "the author") are actually in the article. poteto is never he/she.
6. **No copying.** No paragraph copied from the docs; at most one short quote per page.

## What to do
- Fix problems directly in your files only, with the smallest edit: correct the claim, soften it to what the source says, or delete it. Keep the writing style and the rules in `docs/MAINTAINING.md` (short sentences, zh UI labels as **app 中文**（English）). Edit zh and en together.
- Do not run `npm run build` or start any server (another check runs it). Do not commit. Do not touch files outside your list.
- Report: for each change, file:line, the old claim, what the source actually says (file + a few words), and the new text. Then list claims you checked and kept that you think are borderline. End with a count: claims checked, changed, deleted.

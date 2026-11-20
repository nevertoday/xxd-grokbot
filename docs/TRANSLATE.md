# Translation brief: 8 more languages (2026-11-19)

## The user's goal
The unofficial Grok Bot beginners site (Chinese at the root, English under /en/) now gets Japanese, Korean, Spanish, Portuguese (Brazil), French, German, Russian and Arabic, the same way the sister site pstack.xiaoxiaodong.ai does: each language has the home page, the three beginner lessons and its own README; deeper pages (guide, how-to, wiki, FAQ) link to the English version. The owner just had the whole site rewritten so it reads like a friend explaining (Kevin Kelly style: one core idea, a picture first, connected sentences). The translations must read that way in each language, not like a word-for-word translation.

## Read first
- `docs/MAINTAINING.md`: 「写作规矩（硬规矩）」 and 「怎么写」 (the voice; it applies to every language).
- The English and Chinese originals: `src/pages/en/start/{1-goal,2-first-bot,3-hand-over}.mdx`, `src/pages/start/…` (zh), `src/i18n/base.js` (English UI strings and home page), `src/views/Home.astro`, `README.en.md`.
- How pstack did the same languages, for tone and layout only (its content is about a different product): `/Volumes/T7-usb/js/xxd-pstack/src/i18n/<lang>.js`, `/Volumes/T7-usb/js/xxd-pstack/src/pages/<lang>/start/`, `/Volumes/T7-usb/js/xxd-pstack/README.<lang>.md`.

## Your files, per language `<lang>`
1. `src/i18n/<lang>.js`: today an English copy of `base.js` plus a `figs.ui` block. Translate every string value. Keep every key, array length and `{placeholder}` exactly. Update the first comment line (drop 「待翻译」). Labels that name the full guide, how-to, wiki and FAQ should say they are in English where base.js does (those pages are English for your language).
2. `src/pages/<lang>/index.astro`: already correct, don't touch.
3. `src/pages/<lang>/start/1-goal.mdx`, `2-first-bot.mdx`, `3-hand-over.mdx`: today English copies. Translate from the English, checking the Chinese for intent. Keep frontmatter keys (`layout`, `lesson`, `tldr`, `description` if present), every component, every `Copy` id, `id="interview"` and other element ids, the single `<mark>`. Links: lessons link to `/<lang>/start/…`; every other site page links to `/en/…`; external links unchanged.
4. `README.<lang>.md`: new file. Translate `README.en.md` in the same voice. Use the English images (`assets/en/hero.svg`, `assets/en/readme/*.svg`) exactly as README.en.md does. The language bar is in `/private/tmp/claude-501/-Volumes-T7-usb-js-xxd-pstack/74f56022-2e30-4d17-a0ad-1685dca961f1/scratchpad/langbar.txt` (use your language's line). Site links point to `https://grokbot.xiaoxiaodong.ai/<lang>/` for the home and lessons, `/en/` for everything else.

## Rules
- **Button names as the app shows them in your language.** Grok Bot has 38 UI languages and follows the system language. Look each label up: `node scripts/app-labels.mjs --lang <lang> "New Bot" "Create" "Sign in"` (use `pt` for Portuguese). Write the app's text in bold, and the English label in parentheses on first use, like the Chinese pages do. If a label isn't found, keep the English in bold.
- **Prompts** the reader copies are written in your language (Grok Bot replies in the language you write to it). They follow docs/EXAMPLES.md: situation and pain first, then what you want, the reason said the way people say it in your language, like texting a capable friend. Keep the same people and situations as the English.
- Facts stay exactly as in the English. Don't add or drop facts. The author is "poteto" or "the author", never he/she (in gendered languages, rephrase to avoid gendered pronouns or adjectives for the author).
- Arabic is right-to-left: the layout handles direction; keep code, commands and English labels as they are.
- MDX: no bare `<`, `{`, `}` in prose.

## Checks before you report
`npm run build`, `node scripts/check-i18n.mjs <lang>` for each of your languages (must print no ✗), `npm run check`. Don't start a dev server; if you must look, serve `dist/` with `python3 -m http.server <port> --bind 127.0.0.1` and kill it after. Commit on your branch in your worktree: `git add -A && git commit -m "<lang>: …"`. Don't push.

## Report
Per language: files changed, any label you couldn't find in the app, anything you were unsure how to say, the commit hash.

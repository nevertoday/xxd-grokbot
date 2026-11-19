// English Wiki entries: same slugs and structure as wiki.js. Only the text fields; slug/see/step/howto come from wiki.js.
// Same plain-words rules as the Chinese (docs/MAINTAINING.md): short sentences, one idea each, at most one ==highlight== per entry.
// Site links point at /en/….
export const WIKI_GROUPS_EN = {
  "基本概念": "Basics",
  "它用什么干活": "What it works with",
  "让它自己干活": "Running on its own",
  "安全": "Safety",
  "一队 bot": "A team of bots",
};

export const WIKI_EN = {
  // ---------- Basics ----------
  "goal-and-process": {
    title: "Goal and process",
    one: "Automation has two parts. The goal is what you want at the end. The process is how you get there.",
    like: "Like baking an apple pie. The pie is the goal. Getting ingredients, assembling, baking and cooling are the process.",
    here: [
      "The author always starts with the goal, then the process. A common mistake is treating one step as the goal. Filling in a form or sending an email is only a step. Ask what the work is for: more revenue, or lower costs?",
      "Once the goal is clear, walk the bot through how you do it now. Your current process is only a means to an end, and the bot may find a shorter path. If you want it to follow your steps exactly, say so.",
    ],
    myths: [
      "\"The goal is the steps I do every day\": those steps are the process. ==The goal is the result those steps produce.==",
      "\"I need the whole process worked out before I start\": the first pass doesn't have to be right. Read its summary, correct it, and repeat a few times.",
      "\"Automation means writing code\": describe what you want in plain words. When code is needed, the bot writes it.",
    ],
  },
  "bot": {
    title: "What a bot is",
    one: "A bot is an AI helper that works for you. It has a name, a job, and its own chat and memory.",
    like: "Like a new teammate who owns one area. You explain it once, it remembers, and it keeps going.",
    here: [
      "After you sign in, the app makes your first bot, named **Grok Bot**. To add another, choose **+** (**New Bot**) at the top of the sidebar, or press `Cmd/Ctrl+N`. Type a name and choose **Create**. Any name works. The author suggests Potato if you're stuck, and letting it rename itself later.",
      "A bot has its own computer. It can use apps, browse the web and work with files to finish the job. When you step away, it keeps working in the cloud. ==A bot works best with one job.==",
    ],
    myths: [
      "\"One bot should handle everything\": new work can start with your [primary bot](/en/wiki/primary-bot/). When the same kind of request keeps coming back with its own sources and rules, give it its own bot.",
      "\"Deleting a bot cleans up everything it touched\": deleting erases its chats, memory and routines, and can't be undone. Files and sign-ins on the cloud computer stay, so clean those up separately. If you might need it later, choose **Hide from sidebar**.",
      "\"To change a bot's job I need a settings page\": just tell it in chat. For rules that should last, ask it to remember them.",
    ],
  },
  "primary-bot": {
    title: "Primary bot",
    one: "Your primary bot is the one you talk to most. It checks in with you on its own and hands work to your other bots.",
    like: "Like an office manager. You bring everything to them, and they know who should handle it.",
    here: [
      "It's the bot with a star in the sidebar. If you don't have one, the app shows **Introducing your primary Bot**. You can create one or pick one of your bots. To switch later, right-click it in the sidebar and choose **Replace with different Bot**.",
      "Start new work with it. When a request keeps coming back with its own sources, rules or schedule, give it its own bot. You can ask your primary bot to set that up.",
    ],
    myths: [
      "\"A Team Bot can be my primary bot\": no. Your primary bot has to be one of your own bots.",
      "\"If it checks in on its own, it acts on its own\": it offers first and acts only when you say yes. It still asks before risky actions.",
    ],
  },
  "memory": {
    title: "What it remembers",
    one: "Each bot remembers how you like to work, the rules you give it, and what it has done for you.",
    like: "Like a teammate who takes notes. A rule you give once doesn't need repeating.",
    here: [
      "It decides on its own what to keep, without asking. To be sure it keeps something, say so: \"Remember that I'm out every Friday.\" Facts like your name and time zone are shared by all your bots. Everything else stays with each bot.",
      "There's no memory screen. Ask in chat: \"What do you remember about me?\" If something is wrong, tell it the right version. To drop something, say \"Forget that…\".",
    ],
    list: [
      ["Reset this chat", "Memory is kept"],
      ["Delete this bot", "Its memory is deleted"],
      ["Delete your account", "All bots' memory is deleted"],
    ],
    listTitle: "What clears memory", listHead: ["What you do", "What happens to memory"],
    myths: [
      "\"If it remembers it, it's true\": memory goes stale. For numbers that change, like prices or budgets, ask it to look again. ==For important decisions, have it open the current source first.==",
      "\"It can remember my passwords and cards too\": those go in [Vault](/en/wiki/vault/). Memory is for habits, rules and a log of its work.",
      "\"Once it remembers a boundary, it won't cross it\": the docs advise backing safety boundaries with an [approval](/en/wiki/approval/) rule too.",
    ],
  },

  // ---------- What it works with ----------
  "cloud-computer": {
    title: "Cloud computer",
    one: "The cloud computer is a computer in the cloud. All your bots work on it, and it keeps going when you close your laptop.",
    like: "Like one office computer everyone shares. If someone signed in to a site, it's signed in for everyone.",
    here: [
      "It has a browser, a command line and folders, and files and sign-ins stay between tasks. Each bot gets its own screen, so several can work at once. Click the computer preview on the right of a chat to watch it click and type.",
      "For steps it can't do, like single sign-on, a passkey or a CAPTCHA, it hands you the computer. Choose **Take over**, do only that step, choose **I'm done**, and tell it to continue.",
    ],
    myths: [
      "\"It uses my computer\": it uses the one in the cloud. To run commands on the computer in front of you, it needs your OK. By default it asks every time.",
      "\"Separate bots keep things separate\": ==all your bots share one computer, so every file and sign-in is open to all of them.== Only put things there that every bot may use.",
      "\"If the computer acts up, press Reset first\": **Reset** comes last. Wait for it to reconnect and choose **Retry**, then fully quit and reopen the app.",
    ],
  },
  "connected-apps": {
    title: "Connected apps",
    one: "A connected app is an app like Gmail or Slack that you connect. Your bot works in it directly instead of clicking through the website.",
    like: "Like giving a new teammate access to the company system. No clicking through web pages; they work in the system itself.",
    here: [
      "Open **Connect apps** in the sidebar, find the app and add it. When you see **Authorize** or **Authenticate**, sign in to that app in your browser. You can also tell a bot \"Add the Linear app,\" and it finds and installs it.",
      "Every bot you run can use a connected app. It can only do what your account in that service can already do. The app's sign-in stays on Cursor's servers, and bots use the app without receiving it.",
    ],
    myths: [
      "\"**Added** means it's connected\": **Added** only means installed. You still have to sign in, until the status reads **Connected**.",
      "\"No app means my bot can't use the service\": it can use the website in its browser. If the service has an MCP server, your bot can add that too. MCP is a standard way AI tools connect to services.",
    ],
  },
  "skill": {
    title: "Skill",
    one: "A skill is a how-to for your bot: the steps, what to hand back, and what needs your OK first.",
    like: "Like a checklist on the wall of a shop. Whoever does the job follows the same order and the same standard.",
    here: [
      "Once something works, ask it to save the method: \"Save what we just did as a skill called 'Weekly reconciliation'.\" After that, ask for it by name. All your bots share one skill library.",
      "A good skill says when to use it, what inputs and access it needs, and the order of work. It also says how to check the result, what to return, and what needs approval.",
    ],
    myths: [
      "\"A skill and a routine are the same thing\": a skill says how to do the work. A [routine](/en/wiki/routine/) says which bot does it, and when.",
      "\"Put it on a schedule right away\": ==try it on one real task first, and make it a routine once it's reliable.==",
      "\"I have to type out every step\": if **Teach a task** is available, show it a browser workflow once, for up to ten minutes. It turns that into a draft skill, and you add the decision rules. The feature is rolling out gradually.",
    ],
  },
  "ids": {
    title: "Consistent IDs",
    one: "An ID is a number or unique text that identifies one thing, like a customer's email or an order number.",
    like: "Like a tracking number. Ordering, shipping and delivery sit in three systems, and one number ties them together.",
    here: [
      "The author's examples: a customer ID or email, an order number, a part number, a barcode, an employee ID. The more apps you use, the more it helps to share one set of IDs. Then the bot can join records from different places into one story.",
      "More data gives the bot more to improve on. The author's example is a car repair shop. Log when a customer arrives, talks to a service rep and hands over the keys. Log when work starts and finishes, and you can see how long they waited. If you don't have records like that, ask the bot to build you a small app to log them.",
    ],
    myths: [
      "\"If the data is there, the bot will match it up\": data in different apps joins up through a shared ID. ==Use the same unique IDs in every tool.==",
      "\"Collecting data takes programming\": no. The author points out that Grok Bot can build the tools that collect it.",
    ],
  },

  // ---------- Running on its own ----------
  "routine": {
    title: "Routine",
    one: "A routine tells a bot when to start a job by itself: on a schedule, or when something happens.",
    like: "Like an alarm with a note attached. When the alarm goes off, the bot does what the note says.",
    here: [
      "Without a routine, a bot only works when you ask. With one, you no longer have to start it each time. Setting one up is easy. Tell the bot that owns the job \"Every weekday at 8:00 AM, …\" and it sets it up.",
      "To see it, click the bot's name at the top of the chat and open the **Details** tab. Open a routine and **When to run** shows the schedule in plain words. If it's not what you meant, choose **Edit** and tell the bot what to fix.",
    ],
    myths: [
      "\"It runs once as soon as I create it\": a new routine waits for its next time. Set \"every day at 8:00 AM\" at 8:05, and the first run is tomorrow. To try it now, use **Test**. ++Test does real work, so use safe inputs.++",
      "\"Running it often doesn't matter\": ==every run uses your usage.== An hourly routine can use a week's worth in a day.",
    ],
  },
  "trigger": {
    title: "Trigger",
    one: "A trigger is the event that starts a routine, like an email arriving for your bot.",
    like: "Like a shop doorbell. It rings only when someone walks in, and then you go see who it is.",
    here: [
      "Tell the bot what to wait for, and it sets it up. **When to run** shows it as a sentence, such as \"When a Linear issue is created.\"",
      "Only new activity counts. Messages and events from before the trigger existed don't start a run.",
    ],
    list: [
      ["Slack message", "A mention, a phrase, or your reaction"],
      ["Email", "Mail to your bot's own address"],
      ["GitHub, Linear and more", "A new event there"],
      ["Webhook", "Another program posts to a special URL"],
    ],
    listTitle: "What it can wait for", listHead: ["Event", "In plain words"],
    myths: [
      "\"A broad trigger means I won't miss anything\": \"every new message\" is noisy, uses up usage, and may act on things that don't matter. ==Keep it narrow: which channel, which words, which sender.==",
      "\"Once my bot has an email address, it handles new mail\": new mail doesn't wake a bot by itself. Set up a routine that watches the inbox.",
    ],
  },
  "initiative": {
    title: "Initiative",
    one: "Bots don't only wait for instructions. Your primary bot looks for work it can take on, and asks before doing it.",
    like: "Like a good assistant. Seeing a pile of unanswered letters on your desk, they ask \"Want me to draft replies?\"",
    here: [
      "The one that reaches out is your [primary bot](/en/wiki/primary-bot/), with the star in the sidebar. It offers to take on tasks. When an app like Gmail signs you out, it tells you and offers to reconnect.",
      "The author also suggests letting a bot get feedback itself, such as customer reviews and that day's records. Then it can see what went wrong and propose improvements on its own.",
    ],
    myths: [
      "\"Taking initiative means acting without asking\": it offers first. It acts only when you say yes, and still asks before risky actions.",
      "\"Turning off notifications stops the check-ins\": notifications only control alerts. To turn off the check-ins, the docs say to contact support.",
    ],
  },

  // ---------- Safety ----------
  "approval": {
    title: "Approval",
    one: "An approval is a step that needs your OK. The bot shows a card saying what it wants to do, and waits.",
    like: "Like an expense form. Small costs go through; big ones need a manager's signature.",
    here: [
      "Before a bot acts, Auto Review checks the action. Most actions run on their own. When one needs you, an approval card shows the action and its details. Choose **Allow once**, **Always allow**, or **Deny**.",
      "To make sure a kind of action always asks you, add a rule. In **Settings → General**, under **Bot**, open **Custom Rules**. Describe the action in plain words and choose **Ask first**.",
    ],
    myths: [
      "\"If a web page or email tells it to, that counts as my OK\": only your own messages count. Text in an email or on a page is not your request.",
      "\"A card waits forever\": in a chat you started, it waits for you. Cards from background work like a routine expire after about 30 minutes, and the action doesn't run.",
      "\"An approval can undo a mistake\": an approval only decides whether one action runs. ==Finished work can't be undone, so put Ask first on anything you can't undo.==",
    ],
  },
  "vault": {
    title: "Vault",
    one: "Vault is where you save logins, cards and contact info. Bots use it to sign in and check out without seeing your passwords.",
    like: "Like a key card. The bot taps it to get in, but never sees the code stored inside.",
    here: [
      "In **Settings → Vault**, choose **New item**, pick **Login**, **Card** or **Contact info**, fill it in and save. Everything you save is available to all your bots. You can't limit an item to one bot.",
      "To sign in, a bot looks in Vault first, then a password manager you connected, such as 1Password. If neither has it, it asks you with a **Secure Form**. What you type goes straight into the page, and the bot never sees it.",
    ],
    myths: [
      "\"With a saved card, it asks me before each payment\": a saved card fills in at checkout without asking each time. ++To approve every payment yourself, don't save the card.++",
      "\"The bot can't see my card at all\": it never sees passwords. Cards are different. In chats in the Grok Bot app, it can see the number and security code to type them at checkout.",
      "\"Pasting my password in chat is quicker\": ==never send a password, one-time code or API key in chat.== For an API key, use the secure secret card the bot sends.",
    ],
  },

  // ---------- A team of bots ----------
  "team-bot": {
    title: "Team Bot",
    one: "A Team Bot is a bot shared with your whole team. It needs a Team or Enterprise plan.",
    like: "Like an internal tool. One person builds it, and the whole team uses it.",
    here: [
      "Anyone on the team can make one. Choose **+** in the sidebar, then **Create a Bot**, and tell it what it does for the team. Follow its setup for apps, secrets, skills and files, then choose **Publish**. Teammates find it under **Browse Team Bots**, and it works in Slack and Microsoft Teams too.",
      "Everyone uses the same bot, with one set of apps and secrets. Each person's chat with it is private. What a regular teammate teaches it needs the owner's or a Manager's approval before it applies to everyone.",
    ],
    myths: [
      "\"A Team Bot is a shared template\": a template gives each person their own copy. With a Team Bot, the whole team talks to the same bot.",
      "\"What I add stays mine\": the apps, secrets and files you add work for every teammate who can chat with it. ==Add only what everyone may use.==",
      "\"A Team Bot can use my Vault\": no. It uses its own logins and **Secrets**.",
    ],
  },
  "handoff": {
    title: "Handoffs between bots",
    one: "One bot can message another to hand off work. The other picks it up and replies when it's done.",
    like: "Like a relay race. Each runner covers one leg and says what comes next when passing the baton.",
    here: [
      "For example, one bot pulls the week's numbers and another drafts from them. A third checks the draft, then it comes to you. You can see each handoff in the conversation. To get several bots working together, choose **New chat** and start a group of two to six bots. Use `@` to say who owns which step.",
      "The docs advise: ==one bot owns each step.== Parallel handoffs create duplicate work and noisy updates.",
    ],
    myths: [
      "\"There's a switch to stop bots messaging each other\": there isn't. Tell them \"Don't message other bots. Ask me first,\" and ask each one to remember it.",
      "\"Bot-to-bot messages are free\": every message between bots counts toward your usage. Fewer bots in a group means fewer replies.",
    ],
  },
  "dr-eggbot": {
    title: "Dr Eggbot",
    one: "Dr Eggbot is a ready-made bot that designs bots. It asks you a few questions, then sets up bots for you, one job each.",
    like: "Like hiring a consultant. They hear how your business works, then split the work among a few people.",
    here: [
      "The author taught it everything they know about automating work. It asks you a few questions, then builds the bots for you, one job per bot.",
      "Open [Dr Eggbot's page](https://x.ai/bot/marketplace/bots/dr-eggbot-v2), add it to your Grok Bot, and tell it what you want to automate. Some goals take several jobs, like a launch or a month-end close. The docs also suggest starting there for those.",
    ],
    myths: [
      "\"With Dr Eggbot I don't need to think about the goal\": it designs your bots by asking you questions. ==What result you want is still yours to answer.==",
      "\"One bot doing everything is simpler\": the docs advise one job per bot. Dr Eggbot builds that kind of team too.",
    ],
  },
  "marketplace": {
    title: "Prebuilt bots",
    one: "A prebuilt bot is one someone already set up for a job. Add a copy, and it's ready to use.",
    like: "Like a recipe card someone else wrote. Follow it as is, or adjust it to your taste.",
    here: [
      "Open **Connect apps** in the sidebar and choose **Bot templates**, which opens the list on x.ai in your browser. You can also browse [x.ai/bot/marketplace](https://x.ai/bot/marketplace). Open one and choose **Import Bot** to add your own copy.",
      "Other users make these templates, and adding one accepts the third-party bot terms. You get the setup only. You never get their computer, logins or chat history.",
    ],
    list: [
      ["Overheard", "Watches the web for mentions of you"],
      ["Tradbot", "Keeps bills and forms from slipping"],
      ["Meeting Recap Deck", "Turns meeting notes into slides"],
      ["Pitch Deck Coach", "Helps improve a pitch deck"],
    ],
    listTitle: "Examples from the docs", listHead: ["Name", "What it does"],
    myths: [
      "\"Adding someone's bot gives me their accounts\": it doesn't. The copy only holds the setup: identity, description, skills and routines.",
      "\"Sharing my bot is safe because it's only a copy\": ==a public link opens for anyone and shows the bot's setup.== Remove API keys, internal URLs and customer data before you share.",
    ],
  },
};

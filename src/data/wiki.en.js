// English Wiki entries: same slugs and structure as wiki.js. Only the text fields; slug/see/step/howto come from wiki.js.
// Same voice as the Chinese (docs/MAINTAINING.md): a friend who knows the app, explaining it plainly. `like` is a picture the reader recognizes,
// `here` is connected sentences, and each myth quotes what the reader might think, then answers it. At most one ==highlight== per entry.
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
    one: "Automation has two parts. The goal is the result you want at the end, and the process is how you get there.",
    like: "Think about dinner. What you want is dinner on the table, and that's the goal. Shopping, washing, chopping and cooking are the process, and on a tired night, ordering in gets you to the same goal. Paying the electricity bill works the same way. You want the lights to stay on and no late fee, and remembering the date, logging in, finding the bill and paying are the process.",
    here: [
      "The author always starts with the goal, and only then the process. The most common mistake is treating one step as the goal, like filling in a form or sending an email, when those are only steps along the way. So ask what the work is for in the end. At work, the author's question is whether it brings in more revenue or cuts costs. In the rest of your life, it's what the work gets you in the end, like homework handed in on time, or expense claims that don't drag on every month.",
      "Once the goal is clear, walk the bot through how you do it today. Don't hold on to your current process too tightly, though. It's only a means to an end. Ordering in still gets dinner on the table, and the bot may find a shorter path too. If you do want it to follow your steps exactly, just say so.",
    ],
    myths: [
      "\"The goal is the steps I do every day.\" Those steps are the process. ==The goal is the result those steps produce.==",
      "\"I need the whole process worked out before I start.\" You don't. The first pass can be rough. Read how the bot sums it up, fill in what's missing, fix what's off, and after a few rounds you'll be happy with it.",
      "\"Automation means writing code.\" It doesn't. Say what you want in plain words, and when code is needed, the bot writes it.",
    ],
  },
  "bot": {
    title: "What a bot is",
    one: "A bot is an AI helper that does work for you. It has a name, a job, and its own chat and memory.",
    like: "It's like a new helper who looks after one thing. You explain the job properly once, they remember it, and from then on they carry on without you starting over each time.",
    here: [
      "When you sign in, the app makes your first bot for you, named **Grok Bot**. To add another, choose **+** (**New Bot**) at the top of the sidebar or press `Cmd/Ctrl+N`, type a name and choose **Create**. Any name works. If you're stuck, the author suggests calling it Potato and letting it rename itself later.",
      "A bot works on a computer in the cloud, where it uses apps, browses the web and handles files until the job's done. That's why it keeps going after you step away. ==Most bots work best with one job.==",
    ],
    myths: [
      "\"One bot should handle everything.\" New work can start with your [primary bot](/en/wiki/primary-bot/). But when the same kind of request keeps coming back with its own sources and rules, it deserves its own bot.",
      "\"Deleting a bot cleans up everything it touched.\" It doesn't. Deleting erases its chats, memory and routines, and you can't undo it, but files and sign-ins on the cloud computer stay, so clean those up separately. If you might want the bot later, choose **Hide from sidebar** instead.",
      "\"To change a bot's job, I need a settings page.\" You don't. Just tell it in chat, and for rules that should last, ask it to remember them.",
    ],
  },
  "primary-bot": {
    title: "Primary bot",
    one: "Your primary bot is the one you go to first. It checks in with you on its own and hands work to your other bots.",
    like: "Like a hotel front desk. You take everything there without working out which department handles it, because the desk knows who to pass it to.",
    here: [
      "It's the bot with a star in the sidebar. If you don't have one yet, the app shows **Introducing your primary Bot**, and you can create one or pick one of your existing bots. To switch later, right-click it in the sidebar and choose **Replace with different Bot**.",
      "Start new work there. Once a request keeps coming back with its own sources, rules or schedule, give it its own bot, and you can ask your primary bot to set that up for you.",
    ],
    myths: [
      "\"A Team Bot can be my primary bot.\" No. Your primary bot has to be one of your own bots.",
      "\"If it checks in on its own, it'll act on its own too.\" It won't. It offers first and acts only when you say yes, and it still asks before anything risky.",
    ],
  },
  "memory": {
    title: "What it remembers",
    one: "Each bot remembers how you like to work, the rules you give it, and what it has done for you.",
    like: "Like the barber you always go to. Say once that you don't want the sides too short, and next time they remember as soon as you sit down, without being told.",
    here: [
      "It decides on its own what to keep, without asking you first. So if you want it to remember something, say so: \"Remember that I'm out every Friday.\" Facts like your name and time zone are shared by all your bots, and everything else stays with each bot.",
      "There's no screen for browsing memory. Just ask in chat, \"What do you remember about me?\" If something's wrong, tell it the right version, and to drop something, say \"Forget that…\".",
    ],
    list: [
      ["Reset this chat", "Memory is kept"],
      ["Delete this bot", "Its memory is deleted with it"],
      ["Delete your account", "All bots' memory is deleted"],
    ],
    listTitle: "What clears memory", listHead: ["What you do", "What happens to memory"],
    myths: [
      "\"If it remembers it, it must be true.\" Not always. Memory goes stale, so for numbers that change, like prices or budgets, ask it to look again. ==For important decisions, have it open the current source first.==",
      "\"It can remember my passwords and cards too.\" Those go in [Vault](/en/wiki/vault/). Memory is for habits, rules and a log of its work.",
      "\"Once it remembers a boundary, it won't cross it.\" Don't rely on memory alone. The docs advise backing safety boundaries with an [approval](/en/wiki/approval/) rule as well.",
    ],
  },

  // ---------- What it works with ----------
  "cloud-computer": {
    title: "Cloud computer",
    one: "The cloud computer is a computer in the cloud that all your bots work on, so they keep going when you close your laptop.",
    like: "Like the family computer at home. Your kid signs in to the school website in the morning, and when you sit down in the evening, it's still signed in. Files anyone saved on the desktop are open to everyone too.",
    here: [
      "It has a browser, a command line and folders, and files and sign-ins stay put between tasks. Each bot gets its own screen on it, so several bots can work at once. To watch one, click the computer preview on the right of a chat, and you'll see where it clicks and what it types.",
      "Some steps it can't do itself, like single sign-on, a passkey or a CAPTCHA, and for those it hands the computer to you. Choose **Take over**, do only that step, choose **I'm done**, and tell it to carry on.",
    ],
    myths: [
      "\"It uses my computer.\" It uses the one in the cloud. To run commands on the computer in front of you, it needs your OK, and by default it asks every time.",
      "\"Separate bots keep things separate.\" They don't. ==All your bots share one computer, so every file and sign-in on it is open to all of them.== Only put things there that every bot may use.",
      "\"If the computer acts up, press Reset first.\" **Reset** comes last. Wait for it to reconnect and choose **Retry**, and if that doesn't help, fully quit and reopen the app.",
    ],
  },
  "connected-apps": {
    title: "Connected apps",
    one: "A connected app is an app like Gmail or Slack that you connect for your bot. The bot then works in the app directly instead of clicking through the website.",
    like: "Like using the phone app instead of the website for something you check a lot. Tracking a parcel or checking a bill takes two taps in the app, instead of signing in on the website and clicking through page after page.",
    here: [
      "Open **Connect apps** in the sidebar, find the app and add it. When you see **Authorize** or **Authenticate**, sign in to that app in your browser. Or skip the clicking and tell a bot \"Add the Linear app,\" and it finds and installs it itself.",
      "Once an app is connected, all your bots can use it. They can't do more than your own account in that service can, though, and the app's sign-in stays on Cursor's servers, so bots use the app without ever receiving it.",
    ],
    myths: [
      "\"**Added** means it's connected.\" Not yet. **Added** only means it's installed, and you still have to sign in. If the app shows **Needs auth** or **Disconnected**, open it and choose **Authenticate**.",
      "\"If there's no app, my bot can't use the service.\" It can still use the website in its browser. And if the service has an MCP server, a standard way AI tools connect to services, your bot can add that too.",
    ],
  },
  "skill": {
    title: "Skill",
    one: "A skill is a how-to written for your bot. It says how to do the job, what to hand back, and what needs your OK first.",
    like: "Like the note stuck by the washing machine: which clothes go in cold, which can't go in the dryer, how much detergent to use. Whoever does the laundry today follows it, and it all comes out the same.",
    here: [
      "Once something works, ask the bot to save the method, for example \"Save what we just did as a skill called 'Monthly expenses'.\" After that, mention it by name and the bot knows what to do. All your bots share one skill library.",
      "A good skill covers six things: when to use it, what inputs and access it needs, the order of work, how to check the result, what to return, and what needs approval.",
    ],
    myths: [
      "\"A skill and a routine are the same thing.\" They're not. A skill says how to do the work, and a [routine](/en/wiki/routine/) says which bot does it, and when.",
      "\"Once it's saved, put it on a schedule.\" Not so fast. ==Try it on one real task first, and make it a routine once it's reliable.==",
      "\"I have to type out every step.\" Not necessarily. If **Teach a task** is available, show it a browser workflow once, for up to ten minutes. It turns that into a draft skill, and you add your decision rules. The feature is rolling out gradually.",
    ],
  },
  "ids": {
    title: "Consistent IDs",
    one: "An ID is the number or unique text that every place uses to recognize the same thing, like a customer's email or an order number.",
    like: "Like a tracking number. You order in one system, the warehouse ships from another, and the courier marks it delivered in a third. All three record the same number, so one lookup follows the package from start to finish.",
    here: [
      "The author's examples are a customer ID or email, an order number, a part number, a barcode and an employee ID. The more apps you use, the more it matters that they share one set of IDs, because that's how the bot joins records from different places into one story.",
      "The author makes this point in the article: log the time of each step a customer goes through, and you can work out how long they really waited. Take a phone-repair counter. Note when a customer walks in, when someone serves them, when they hand over the phone, and when the repair starts and finishes, and you can see where the time goes. The more data the bot has, the more it can find to improve. If you don't keep records like that yet, ask the bot to build you a small app to log them.",
    ],
    myths: [
      "\"If the data's there, the bot will match it up.\" Not without a shared ID, because that's what joins data across apps. ==Use the same unique IDs in every tool.==",
      "\"Collecting data takes programming.\" It doesn't. The author points out that Grok Bot can build the tools that collect it.",
    ],
  },

  // ---------- Running on its own ----------
  "routine": {
    title: "Routine",
    one: "A routine tells a bot when to start a job by itself: at a set time, or when something happens.",
    like: "Like an alarm clock with a note stuck to it. When the alarm goes off, the bot reads the note and does what it says, and nobody has to wake it.",
    here: [
      "Without a routine, a bot only works when you ask, so you're the one starting it every time. With a routine, it starts on its own. Setting one up takes a single message. Tell the bot that owns the job \"Every weekday at 8:00 AM, …\" and it sets it up.",
      "To see it, click the bot's name at the top of the chat and open the **Details** tab. Open a routine, and **When to run** shows its schedule in plain words. If that's not what you meant, choose **Edit** and tell the bot what to change.",
    ],
    myths: [
      "\"It runs once as soon as I create it.\" It doesn't. A new routine waits for its next time, so if you set \"every day at 8:00 AM\" at 8:05, the first run is tomorrow. To try it now, use **Test**, ++but Test does real work, so use safe inputs.++",
      "\"Running it often doesn't matter.\" It does. ==Every run uses some of your usage.== An hourly routine can use a week's worth in a day.",
    ],
  },
  "trigger": {
    title: "Trigger",
    one: "A trigger is the event that starts a routine, like an email arriving for your bot.",
    like: "Like the doorbell at home. You get on with things inside, and only when it rings do you go and open the door.",
    here: [
      "Tell the bot what to wait for, and it sets it up. **When to run** then shows it as a sentence, such as \"When a Linear issue is created.\"",
      "Only new activity counts, though. Messages and events from before the trigger existed won't start a run.",
    ],
    list: [
      ["Slack message", "Someone mentions the bot, a phrase shows up, or you react"],
      ["Email", "Mail to your bot's own address"],
      ["GitHub, Linear and more", "A new event there"],
      ["Webhook", "Another program posts to a special URL"],
    ],
    listTitle: "What it can wait for", listHead: ["Event", "In plain words"],
    myths: [
      "\"A broad trigger means I won't miss anything.\" Mostly it means noise. \"Every new message\" fires constantly, uses up usage, and may act on things that don't matter. ==Keep it narrow: which channel, which words, which sender.==",
      "\"Once my bot has an email address, it handles new mail.\" Not by itself. New mail doesn't wake a bot, so set up a routine that watches the inbox.",
    ],
  },
  "initiative": {
    title: "Initiative",
    one: "Bots don't only wait for instructions. Your primary bot looks for work it can take on, and asks you before doing it.",
    like: "Like a thoughtful housemate who notices a pile of your unopened mail by the door. Instead of opening it and answering for you, they ask, \"Want me to sort through that for you?\"",
    here: [
      "The one that reaches out is your [primary bot](/en/wiki/primary-bot/), the one with the star in the sidebar. It offers to take on tasks, and when an app like Gmail signs you out, it tells you and offers to reconnect.",
      "The author also suggests letting a bot get feedback for itself. Say you run a hair salon. If it can read your online reviews and that day's bookings, then when someone writes that they waited too long, it can check the records for that day, see what went wrong on its own, and propose improvements.",
    ],
    myths: [
      "\"Taking initiative means acting without asking.\" It doesn't. It offers first, acts only when you say yes, and still asks before risky actions.",
      "\"Turning off notifications stops the check-ins.\" It doesn't. Notifications only control alerts, and to turn off the check-ins themselves, the docs say to contact support.",
    ],
  },

  // ---------- Safety ----------
  "approval": {
    title: "Approval",
    one: "An approval is a step that needs your OK. The bot shows a card saying what it wants to do, then waits.",
    like: "Like having someone look after your place while you're away. Watering the plants and taking in parcels they just do, but changing the locks or moving the furniture waits until they've called you.",
    here: [
      "Before a bot acts, Auto Review checks the action, and most actions go ahead on their own. When one needs you, an approval card shows the action and its details, and you choose **Allow once**, **Always allow** or **Deny**.",
      "If you want a kind of action to ask you every time, add a rule. In **Settings → General**, under **Bot**, open **Custom Rules**, describe the action in plain words and choose **Ask first**.",
    ],
    myths: [
      "\"If a web page or email tells it to, that counts as my OK.\" It doesn't. Only your own messages count, and text in an email or on a page is never your request.",
      "\"A card waits for me forever.\" Only in a chat you started. Cards from background work like a routine expire after about 30 minutes, and the action doesn't run.",
      "\"An approval can undo a mistake.\" It can't. An approval only decides whether one action runs. ==Finished work can't be undone, so put Ask first on anything you can't undo.==",
    ],
  },
  "vault": {
    title: "Vault",
    one: "Vault is where you save logins, cards and contact info. Bots use it to sign in and check out without ever seeing your passwords.",
    like: "Like a building key card. The bot taps it on the reader and the door opens, but it never sees the code stored inside.",
    here: [
      "In **Settings → Vault**, choose **New item**, pick **Login**, **Card** or **Contact info**, then fill it in and save. Everything you save there is available to all your bots, and you can't limit an item to just one.",
      "When a bot needs to sign in, it looks in Vault first, then in a password manager you connected, such as 1Password. If neither has the login, it asks you with a **Secure Form**, and what you type goes straight into the page without the bot seeing it.",
    ],
    myths: [
      "\"With a saved card, it'll ask me before each payment.\" It won't. A saved card fills in at checkout without asking. ++To approve every payment yourself, don't save the card.++",
      "\"The bot can't see my card at all.\" It never sees passwords, but cards are different. In chats in the Grok Bot app, it can see the number and security code so it can type them at checkout.",
      "\"Pasting my password in chat is quicker.\" Please don't. ==Never send a password, one-time code or API key in chat.== For an API key, use the secure secret card the bot sends you.",
    ],
  },

  // ---------- A team of bots ----------
  "team-bot": {
    title: "Team Bot",
    one: "A Team Bot is a bot your whole team shares. It needs a Team or Enterprise plan.",
    like: "Like the washing machine in a shared house. One person buys it, sets it up and picks the settings, and then everyone in the house uses that same machine.",
    here: [
      "Anyone on the team can make one by default, though an admin can limit this. Choose **+** in the sidebar, then **Create a Bot**, and tell it what it does for the team. Follow its setup for apps, secrets, skills and files, then choose **Publish**. Teammates find it under **Browse Team Bots**, and once it's connected, it works in Slack and Microsoft Teams too.",
      "The whole team uses the same bot, with one set of apps and secrets, but each person's chat with it stays private. What a regular teammate teaches it needs the owner's or a Manager's approval before it applies to everyone.",
    ],
    myths: [
      "\"A Team Bot is a shared template.\" It isn't. A template gives each person their own copy, while with a Team Bot the whole team talks to the same bot.",
      "\"What I add stays mine.\" It doesn't. The apps, secrets and files you add work for every teammate who can chat with it, ==so add only what everyone may use.==",
      "\"A Team Bot can use my Vault.\" No. It uses its own logins and **Secrets**.",
    ],
  },
  "handoff": {
    title: "Handoffs between bots",
    one: "One bot can message another to hand off work. The other bot picks it up and can reply later.",
    like: "Like a relay race. Each runner covers one leg, and when they pass the baton, they say what the next leg needs.",
    here: [
      "For example, one bot pulls the week's numbers, another drafts from them, and a third checks the draft before it comes to you. Every handoff shows up in the conversation, so you can follow along. To put several bots in one room, choose **New chat** and start a group of two to six bots, then use `@` to say who owns which step.",
      "==Give each step to one bot.== That's the docs' advice, because when several bots take the same work at once, they duplicate it and flood you with updates.",
    ],
    myths: [
      "\"There's a switch to stop bots messaging each other.\" There isn't. Tell them \"Don't message other bots. Ask me first,\" and ask each one to remember it.",
      "\"Bot-to-bot messages are free.\" They're not. Every message between bots counts toward your usage, so fewer bots in a group means fewer replies.",
    ],
  },
  "dr-eggbot": {
    title: "Dr Eggbot",
    one: "Dr Eggbot is a ready-made bot that designs bots. It asks you a few questions, then sets up bots for you, one job each.",
    like: "Like the designer you bring in before renovating your home. They sit down and hear how your family lives, then work out how many rooms you need and what each one is for.",
    here: [
      "The author taught it everything they know about automating work. It asks you a few questions, then builds the bots for you, with one job per bot.",
      "Open [Dr Eggbot's page](https://x.ai/bot/marketplace/bots/dr-eggbot-v2), add it to your Grok Bot, and tell it what you want to automate. When a goal takes several jobs at once, like a launch or a month-end close, the docs also suggest starting there.",
    ],
    myths: [
      "\"With Dr Eggbot, I don't need to think about the goal.\" You still do. It designs your bots by asking you questions, and ==what result you want is still yours to answer.==",
      "\"One bot doing everything is simpler.\" The docs advise the opposite, one job per bot, and Dr Eggbot builds that kind of team too.",
    ],
  },
  "marketplace": {
    title: "Prebuilt bots",
    one: "A prebuilt bot is one someone already set up for a job. Add a copy to your account, and it's ready to use.",
    like: "Like a recipe card a friend copied out for you. Follow it as it is, or use less sugar if you like. You get the card, though, not your friend's kitchen.",
    here: [
      "Open **Connect apps** in the sidebar and choose **Bot templates**, which opens the list on x.ai in your browser, or browse [x.ai/bot/marketplace](https://x.ai/bot/marketplace) directly. Open one you like and choose **Import Bot**, and a copy is added to your account.",
      "Other users make these templates, so adding one means accepting the third-party bot terms. You get the setup only, never their computer, logins or chat history.",
    ],
    list: [
      ["Overheard", "Watches the web for mentions of you"],
      ["Tradbot", "Keeps bills and forms from slipping"],
      ["Meeting Recap Deck", "Turns meeting notes into slides"],
      ["Pitch Deck Coach", "Helps improve a pitch deck"],
    ],
    listTitle: "Examples from the docs", listHead: ["Name", "What it does"],
    myths: [
      "\"Adding someone's bot gives me their accounts.\" It doesn't. The copy only holds the setup: identity, description, skills and routines.",
      "\"Sharing my bot is safe because it's only a copy.\" Be careful. ==A public link opens for anyone and shows the bot's setup==, so remove API keys, internal URLs and customer data before you share.",
    ],
  },
};

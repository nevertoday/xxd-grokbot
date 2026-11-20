// de（Deutsch）：结构照 base.js（英文底稿）。缺的键会显示英文。
// 英文底稿：以后加的非全站语言，全部文字都照这个结构写（src/i18n/<语言>.js），缺的键显示这里的英文。
// {名字} 是占位，由 fmt() 换成值，翻译时原样保留。
// 这些语言只有首页和新手入门三课；完整教程、How-to、Wiki、常见问题链到英文版，所以导航里写明「英文」。
// 首页文字和 views/Home.astro 的 EN 一样（完整教程按钮多写了「English」）。
export default {
  ui: {
    brand: "Grok Bot für Einsteiger",
    desc: "Eine inoffizielle Anleitung zu Grok Bot in einfachen Worten: vom ersten Bot bis zu Bots, die von selbst loslegen.",
    skip: "Zum Inhalt springen",
    menu: "Menü öffnen",
    search: "Anleitung durchsuchen",
    searchPh: "Lektionen, Schritte, How-tos, Begriffe…",
    searchEmpty: "Nichts gefunden. Probier ein anderes Wort",
    look: "Darstellung",
    lang: "Sprache",
    repo: "Diese Anleitung auf GitHub",
    repoMore: "Mehr: die offizielle Doku, der Artikel von poteto",
    repoDefault: "Standard",
    // 三个链接：[名字, 一句说明]，顺序固定（本教程、官方文档、poteto 的原文）
    repos: [
      ["Diese Anleitung", "Quellcode dieser Anleitung; Probleme hier melden"],
      ["Doku zu Grok Bot", "Maßgeblich für Funktionen und Verhalten"],
      ["Artikel von poteto", "Automate Anything with Grok Bot"],
    ],
    navLabel: "Seitennavigation",
    start: "Start",
    home: "Startseite",
    lessons: "Einsteigerkurs: hier anfangen",
    more: "Mehr (auf Englisch)",
    main: "Vollständige Anleitung: 8 Schritte",
    howto: "How-to: wie genau",
    wiki: "Wiki: was ist das?",
    faq: "Häufige Fragen",
    toc: "Auf dieser Seite",
    tocLabel: "Auf dieser Seite",
    hintMain: "Vollständige Anleitung (Englisch)",
    hintLesson: "Einsteigerkurs",
    hintFaq: "Häufige Fragen (Englisch)",
    hintOther: "Englisch",
    section: "Abschnitt",
    // {docs}、{article} 和 {github} 会换成链接
    docsLink: "Docs",
    foot: "Eine inoffizielle Anleitung zu Grok Bot, ohne Verbindung zu xAI oder Cursor. Für Funktionen und Verhalten sind die offiziellen {docs} maßgeblich. Der Hauptweg folgt dem Artikel {article} von poteto. Quellcode und Feedback zu dieser Anleitung findest du auf {github}.",
    // 顶栏「外观」面板（UI Kit 的外观设置组）
    appearance: {
      group: "Darstellung", theme: "Farbschema", light: "Hell", dark: "Dunkel", system: "System",
      corners: "Abgerundete Ecken", cornersDesc: "Aus: Alle Ecken bleiben eckig",
      accent: "Akzentfarbe", accentDesc: "Für Buttons, Auswahl und Fokus",
    },
  },

  home: {
    h1: "Wie viel du aus Grok Bot herausholst, hängt davon ab, wie du denkst",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["Bei SpaceX entwickelt poteto Grok Bot und sagt: Automatisieren ist eigentlich eine Denkweise, und die können alle lernen. Werde dir klar, welches Ergebnis du willst, erzähl dem Bot, wie du die Arbeit heute machst, und sobald er es richtig macht, lass ihn pünktlich von selbst loslegen. Programmieren musst du dafür nicht. ", "Das ist eine inoffizielle Anleitung", ", die Schritt für Schritt dem Artikel „Automate Anything with Grok Bot“ von poteto folgt. Bei Funktionen ist die offizielle Doku maßgeblich."],
    cta: ["Neu hier? Fang hier an", "Schon benutzt? Die vollständige Anleitung (Englisch)"],
    ctaNote: "Der Einsteigerkurs hat drei Lektionen: das Ziel klären, einen Bot erstellen und ihm dann eine Aufgabe übergeben.",
    painH: "Kennst du das?",
    PAIN: [
      "Es ist Freitagnachmittag, und du wühlst dich schon wieder durch den Chat für den Wochenbericht, dieselben Schritte wie jede Woche.",
      "Die Schule schickt so viele Nachrichten, dass immer etwas durchrutscht: ein Elternabend, eine Zahlung, etwas, das dein Kind mitbringen sollte.",
      "Du würdest es gern einer KI geben, aber eine Chat-KI antwortet nur. Klicken, kopieren und abschicken musst du immer noch selbst.",
      "Du hast von Automatisierung gehört, gesehen, dass man dafür programmieren muss, und es wieder gelassen.",
    ],
    diffH: "Was sich ändert, wenn ein Bot es übernimmt",
    diffW: "Wann", diffA: "Selbst gemacht", diffB: "Mit einem Bot",
    DIFF: [
      ["Beim Loslegen", "Wenn es dir einfällt", "Pünktlich, von selbst"],
      ["Bei der Arbeit", "Du klickst, kopierst, fügst ein", "Er nutzt einen Computer in der Cloud"],
      ["Laptop zugeklappt", "Die Arbeit steht still", "Er macht in der Cloud weiter"],
    ],
    lessonsH: "Für den Einstieg reichen drei Lektionen",
    lessonsP: "Lies sie einfach der Reihe nach. Danach kannst du ihn arbeiten lassen, und alles andere auf der Seite ist zum Nachschlagen da, wenn du es brauchst.",
    lessonsLabel: "Einsteigerkurs: 3 Lektionen",
    fitH: "Passt das zu dir?", yesH: "Ja, wenn", noH: "Noch nicht, wenn",
    YES: ["du eine Aufgabe am Computer immer wieder machst und sie abgeben willst", "du Premium, Super oder Ultra bei The X Subscription hast", "du in einfachen Worten erklären kannst, wie du die Arbeit machst"],
    NO: ["du Plus hast, denn darin ist Grok Bot nicht enthalten", "du keinen Computer hast, denn die Desktop-App kommt zuerst auf einen Computer", "du nur eine Frage stellen willst, denn dafür reicht ein normaler KI-Chat"],
    devH: "Wenn du dich auskennst",
    devP: "Die vollständige Anleitung geht tiefer und folgt dabei dem Artikel von poteto. Hier sind vier ihrer Ideen, jede in einer Zeile:",
    // 完整教程目前只有英文和中文
    devNote: "Die vollständige Anleitung gibt es vorerst auf Englisch (und Chinesisch).",
    // FLOW：每个是 [标题, 说明]，图标和顺序固定
    FLOW: [
      ["Mit dem Ziel anfangen", "Wisse, welches Ergebnis du willst. Ein Formular ausfüllen oder eine E-Mail schicken ist nur ein Schritt auf dem Weg dahin."],
      ["Deinen Ablauf erklären", "Erzähl in einem Rutsch, wie du es heute machst. Er gibt es zuerst mit eigenen Worten wieder, und du korrigierst ihn ein paar Mal, bevor er anfängt."],
      ["Zeigen, wie du entscheidest", "Geh mit ihm echte Beispiele für die Entscheidungen durch, die du triffst, ohne nachzudenken."],
      ["Ihn von selbst loslegen lassen", "Eine Routine legt fest, wann er arbeitet: nach Zeitplan oder wenn eine E-Mail ankommt."],
    ],
    CONN: ["erzähl es ihm", "Beispiele ausprobieren", "wenn es stimmt"],
    stepsLabel: "Vollständige Anleitung: {n} Schritte",
  },

  // 新手入门三课在导航、首页路线图里的标题、时间、简介（顺序：1 先想清楚、2 建第一个 bot、3 交给它一件事）
  lessons: [
    { title: "Klar werden, was du willst", minutes: "10 Minuten", sum: "Such dir etwas aus, das du oft machst, und schreib ein paar einfache Zeilen: was dich daran nervt und welches Ergebnis du willst" },
    { title: "Deinen ersten Bot erstellen", minutes: "15 Minuten", sum: "Erstell einen neuen Bot und gib ihm einen Namen" },
    { title: "Ihm eine Aufgabe übergeben", minutes: "30 Minuten", sum: "Erklär die Aufgabe und schau zu, wie er sie einmal erledigt" },
  ],

  // 一课的页面框架
  lesson: {
    eyebrow: "Einsteigerkurs · Lektion {n} von {total}",
    prog: "Fortschritt: Lektion {n} von {total}",
    nav: "Vorherige und nächste Lektion",
    prev: "Zurück",
    next: "Weiter",
    title: "Lektion {n}: {title}",
    tldr: "In einem Satz",
  },

  // 正文里用到的组件
  comp: {
    callout: { ok: "Das solltest du sehen", warn: "Achtung", no: "Lieber nicht", tip: "Tipp" },
    copyTitle: "Zum Kopieren",
    copy: "Kopieren",
    cmdDone: "Befehl kopiert",
    cmdLabel: "Befehl kopieren: {c}",
    reply: "Beispiel: So ungefähr sieht die Antwort aus",
    // 每页末尾一行：{lead} {gh 链接}{faq[0]}{faq[1] 链接}{faq[2]}
    feedback: {
      lead: "Ist auf dieser Seite etwas unklar, oder hat etwas nicht so geklappt wie beschrieben?",
      gh: "Sag es auf GitHub",
      faq: [". Oder schau zuerst bei den ", "häufigen Fragen", " nach."],
    },
    // 首页、常见问题末尾的「提问和讨论」卡片
    contact: {
      h: "Fragen und Austausch",
      p: "Hängst du bei einem Schritt fest, ist dir etwas unklar, oder hast du einen Bot gebaut, den du zeigen möchtest? Bring es auf GitHub. Fragen, die oft kommen, fließen in die Anleitung ein. Du kannst gern auf Deutsch schreiben.",
      faq: ["Bevor du fragst, schau bei den ", "häufigen Fragen", " nach. Viele Antworten stehen schon dort."],
      btn: "Auf GitHub fragen oder diskutieren",
      x: "poteto auf X",
      privacy: "Bevor du Screenshots schickst, mach Passwörter, API-Schlüssel, Kontodaten und persönliche Angaben unkenntlich.",
    },
  },

  // 图示的界面文字（新手三课现在没有图，这里只有「图示」「再看一遍」两个词）
  figs: { ui: { label: "Schaubild", replay: "Nochmal ansehen" } },
};

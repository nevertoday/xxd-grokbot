// fr（Français）：结构照 base.js（英文底稿）。缺的键会显示英文。
// 英文底稿：以后加的非全站语言，全部文字都照这个结构写（src/i18n/<语言>.js），缺的键显示这里的英文。
// {名字} 是占位，由 fmt() 换成值，翻译时原样保留。
// 这些语言只有首页和新手入门三课；完整教程、How-to、Wiki、常见问题链到英文版，所以导航里写明「英文」。
// 首页文字和 views/Home.astro 的 EN 一样（完整教程按钮多写了「English」）。
export default {
  ui: {
    brand: "Grok Bot pour débutants",
    desc: "Un guide non officiel de Grok Bot, avec des mots simples : de votre premier bot jusqu'aux bots qui travaillent tout seuls.",
    skip: "Aller au contenu",
    menu: "Ouvrir le menu",
    search: "Rechercher dans le guide",
    searchPh: "Une leçon, une étape, une fiche, un mot…",
    searchEmpty: "Aucun résultat. Essayez un autre mot",
    look: "Apparence",
    lang: "Langue",
    repo: "Ce guide sur GitHub",
    repoMore: "Et aussi : la documentation officielle, l'article de poteto",
    repoDefault: "Par défaut",
    // 三个链接：[名字, 一句说明]，顺序固定（本教程、官方文档、poteto 的原文）
    repos: [
      ["Ce guide", "Le code de ce guide ; signalez les problèmes ici"],
      ["Documentation de Grok Bot", "C'est elle qui fait foi pour les fonctions et le comportement"],
      ["L'article de poteto", "Automate Anything with Grok Bot"],
    ],
    navLabel: "Navigation du site",
    start: "Commencer",
    home: "Accueil",
    lessons: "Parcours débutant : commencez ici",
    more: "Pour aller plus loin (en anglais)",
    main: "Guide complet : 8 étapes",
    howto: "Fiches pratiques : comment faire",
    wiki: "Wiki : c'est quoi ?",
    faq: "FAQ",
    toc: "Sur cette page",
    tocLabel: "Sur cette page",
    hintMain: "Guide complet (en anglais)",
    hintLesson: "Parcours débutant",
    hintFaq: "FAQ (en anglais)",
    hintOther: "En anglais",
    section: "Section",
    // {docs}、{article} 和 {github} 会换成链接
    foot: "Un guide non officiel de Grok Bot, sans lien avec xAI ni Cursor. Pour les fonctions et le comportement, ce sont les {docs} officielles qui font foi. Le parcours principal suit l'article de poteto, {article}. Le code de ce guide et vos retours sont sur {github}.",
    // 顶栏「外观」面板（UI Kit 的外观设置组）
    appearance: {
      group: "Apparence", theme: "Thème", light: "Clair", dark: "Sombre", system: "Système",
      corners: "Coins arrondis", cornersDesc: "Désactivé, tous les coins restent carrés",
      accent: "Couleur d'accent", accentDesc: "Pour les boutons, la sélection et l'élément actif",
    },
  },

  home: {
    h1: "Pour tirer le meilleur de Grok Bot, commencez par votre façon de penser",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["L'automatisation est avant tout une façon de penser, et tout le monde peut l'apprendre. C'est ce que dit poteto, qui développe Grok Bot chez SpaceX. Mettez au clair le résultat que vous voulez, expliquez au bot comment vous faites aujourd'hui, et dès qu'il fait juste, laissez-le se lancer tout seul, à l'heure. Pas besoin de savoir coder. ", "Ceci est un guide non officiel", " qui suit pas à pas l'article de poteto, « Automate Anything with Grok Bot ». Pour les fonctions, c'est la documentation officielle qui fait foi."],
    cta: ["Vous débutez ? Commencez ici", "Vous l'utilisez déjà ? Le guide complet (en anglais)"],
    ctaNote: "Le parcours débutant tient en trois leçons : mettre l'objectif au clair, créer un bot, puis lui confier une tâche.",
    painH: "Ça vous est déjà arrivé ?",
    PAIN: [
      "Chaque semaine, un après-midi entier part à refaire les mêmes quelques étapes.",
      "Vous aimeriez confier ça à une IA, mais une IA de chat ne fait que répondre. Les clics, les copier-coller et les envois, c'est toujours vous.",
      "On vous a parlé d'automatisation, vous avez vu qu'il fallait écrire du code, et vous avez laissé tomber.",
    ],
    diffH: "Ce qui change quand un bot s'en charge",
    diffW: "Quand", diffA: "Vous le faites vous-même", diffB: "Avec un bot",
    DIFF: [
      ["Au démarrage", "Quand vous y pensez", "À l'heure, tout seul"],
      ["Pendant le travail", "Vous cliquez, copiez, collez", "Il utilise un ordinateur dans le cloud"],
      ["Portable fermé", "Le travail s'arrête", "Il continue dans le cloud"],
    ],
    lessonsH: "Pour débuter, trois leçons suffisent",
    lessonsP: "Lisez-les simplement dans l'ordre. Après ces trois-là, vous pouvez le mettre au travail, et tout le reste du site est là pour être consulté le jour où vous en aurez besoin.",
    lessonsLabel: "Parcours débutant : 3 leçons",
    fitH: "Est-ce pour vous ?", yesH: "Oui, si", noH: "Pas encore, si",
    YES: ["Vous refaites souvent une tâche sur l'ordinateur et vous aimeriez la confier", "Vous avez Premium, Super ou Ultra sur The X Subscription", "Vous savez expliquer avec des mots simples comment vous faites cette tâche"],
    NO: ["Vous êtes sur Plus, qui n'inclut pas Grok Bot", "Vous n'avez pas d'ordinateur, car il faut d'abord y installer l'application de bureau", "Vous voulez seulement poser une question, et une IA de chat ordinaire suffit pour ça"],
    devH: "Une fois à l'aise",
    devP: "Le guide complet va plus loin, en suivant l'article de poteto. En voici quatre idées, une ligne chacune :",
    // 完整教程目前只有英文和中文
    devNote: "Pour l'instant, le guide complet existe en anglais (et en chinois).",
    // FLOW：每个是 [标题, 说明]，图标和顺序固定
    FLOW: [
      ["Partir de l'objectif", "Sachez quel résultat vous voulez. Remplir un formulaire ou envoyer un e-mail n'est qu'une étape en chemin."],
      ["Expliquer votre façon de faire", "Dites comment vous faites aujourd'hui, d'un seul jet. Il commence par la reformuler, et vous le corrigez quelques fois avant qu'il se lance."],
      ["Lui apprendre comment vous décidez", "Passez avec lui de vrais exemples des choix que vous faites sans y penser."],
      ["Le laisser démarrer tout seul", "Une routine fixe quand il travaille : selon un horaire, ou quand un e-mail arrive."],
    ],
    CONN: ["dites-le-lui", "essayez des exemples", "une fois que c'est juste"],
    stepsLabel: "Guide complet : {n} étapes",
  },

  // 新手入门三课在导航、首页路线图里的标题、时间、简介（顺序：1 先想清楚、2 建第一个 bot、3 交给它一件事）
  lessons: [
    { title: "Savoir ce que vous voulez", minutes: "10 minutes", sum: "Choisissez une tâche que vous faites souvent et nommez le résultat que vous voulez" },
    { title: "Créer votre premier bot", minutes: "15 minutes", sum: "Créez un nouveau bot et donnez-lui un nom" },
    { title: "Lui confier une tâche", minutes: "30 minutes", sum: "Expliquez la tâche et regardez-le la faire une fois" },
  ],

  // 一课的页面框架
  lesson: {
    eyebrow: "Parcours débutant · leçon {n} sur {total}",
    prog: "Progression : leçon {n} sur {total}",
    nav: "Leçon précédente et suivante",
    prev: "Précédente",
    next: "Suivante",
    title: "Leçon {n} : {title}",
    tldr: "En une phrase",
  },

  // 正文里用到的组件
  comp: {
    callout: { ok: "Vous devriez voir", warn: "Attention", no: "À éviter", tip: "Astuce" },
    copyTitle: "À copier",
    copy: "Copier",
    cmdDone: "Commande copiée",
    cmdLabel: "Copier la commande : {c}",
    reply: "Illustration : à quoi ressemble à peu près sa réponse",
    // 每页末尾一行：{lead} {gh 链接}{faq[0]}{faq[1] 链接}{faq[2]}
    feedback: {
      lead: "Quelque chose n'est pas clair sur cette page, ou ne marche pas comme c'est écrit ?",
      gh: "Dites-le sur GitHub",
      faq: [". Ou jetez d'abord un œil à la ", "FAQ", "."],
    },
    // 首页、常见问题末尾的「提问和讨论」卡片
    contact: {
      h: "Questions et échanges",
      p: "Une étape vous bloque, quelque chose n'est pas clair, ou vous avez créé un bot que vous aimeriez montrer ? Venez en parler sur GitHub. Les questions qui reviennent le plus souvent finissent dans le guide. Vous pouvez écrire en français.",
      faq: ["Avant de demander, regardez la ", "FAQ", " : beaucoup de réponses y sont déjà."],
      btn: "Poser une question ou en discuter sur GitHub",
      x: "poteto est sur X",
      privacy: "Avant d'envoyer des captures d'écran, floutez les mots de passe, les clés d'API, les infos de vos comptes et vos données personnelles.",
    },
  },

  // 图示的界面文字（新手三课现在没有图，这里只有「图示」「再看一遍」两个词）
  figs: { ui: { label: "Schéma", replay: "Revoir" } },
};

// es（Español，中性西语，用 tú）：结构照 base.js（英文底稿）。缺的键会显示英文。按钮名照 app 的西语界面（node scripts/app-labels.mjs --lang es）。
// {名字} 是占位，由 fmt() 换成值，翻译时原样保留。
// 这些语言只有首页和新手入门三课；完整教程、How-to、Wiki、常见问题链到英文版，所以导航里写明「英文」。
export default {
  ui: {
    brand: "Grok Bot para principiantes",
    desc: "Una guía no oficial de Grok Bot, desde tu primer bot hasta bots que trabajan solos, con palabras sencillas.",
    skip: "Ir al contenido",
    menu: "Abrir menú",
    search: "Buscar en la guía",
    searchPh: "Busca lecciones, pasos, how-tos, términos…",
    searchEmpty: "No hay resultados. Prueba con otra palabra",
    look: "Apariencia",
    lang: "Idioma",
    repo: "Esta guía en GitHub",
    repoMore: "Más: la documentación oficial, el artículo de poteto",
    repoDefault: "Predeterminado",
    // 三个链接：[名字, 一句说明]，顺序固定（本教程、官方文档、poteto 的原文）
    repos: [
      ["Esta guía", "El código de esta guía; deja aquí tus comentarios"],
      ["Documentación de Grok Bot", "La referencia oficial sobre funciones y comportamiento"],
      ["El artículo de poteto", "Automate Anything with Grok Bot"],
    ],
    navLabel: "Navegación del sitio",
    start: "Empezar",
    home: "Inicio",
    lessons: "Para principiantes: empieza aquí",
    more: "Más (en inglés)",
    main: "Guía completa: 8 pasos",
    howto: "How-to: cómo hacerlo",
    wiki: "Wiki: qué es cada cosa",
    faq: "Preguntas frecuentes",
    toc: "En esta página",
    tocLabel: "En esta página",
    hintMain: "Guía completa (en inglés)",
    hintLesson: "Para principiantes",
    hintFaq: "Preguntas frecuentes (en inglés)",
    hintOther: "En inglés",
    section: "Sección",
    // {docs}、{article} 和 {github} 会换成链接（{docs} 的链接文字是英文的 docs）
    foot: "Una guía no oficial de Grok Bot, sin relación con xAI ni con Cursor. Para funciones y comportamiento, la referencia es la documentación oficial ({docs}). El camino principal sigue el artículo {article}, de poteto. El código de esta guía y los comentarios están en {github}.",
    // 顶栏「外观」面板（UI Kit 的外观设置组）
    appearance: {
      group: "Apariencia", theme: "Tema", light: "Claro", dark: "Oscuro", system: "Sistema",
      corners: "Esquinas redondeadas", cornersDesc: "Si lo desactivas, todas las esquinas quedan rectas",
      accent: "Color de acento", accentDesc: "Se usa en botones, selección y foco",
    },
  },

  home: {
    h1: "Aprovechar Grok Bot al máximo empieza por cómo piensas",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["La automatización es, en realidad, una forma de pensar, y cualquiera puede aprenderla. Lo dice poteto, que desarrolla Grok Bot en SpaceX. Ten claro el resultado que quieres, cuéntale al bot cómo haces hoy el trabajo y, cuando le salga bien, deja que empiece solo, a su hora. No necesitas programar. ", "Esta es una guía no oficial", " que sigue paso a paso el artículo «Automate Anything with Grok Bot». Para las funciones, la referencia es la documentación oficial."],
    cta: ["Empieza aquí si es tu primera vez", "¿Ya lo conoces? La guía completa (en inglés)"],
    ctaNote: "Para principiantes hay tres lecciones: tener claro el objetivo, crear un bot y encargarle un trabajo.",
    painH: "¿Te ha pasado algo así?",
    PAIN: [
      "Cada semana se te va una tarde repitiendo los mismos pasos de siempre.",
      "Se lo pasarías a una IA, pero una IA de chat solo responde. Hacer clic, copiar y enviar sigue siendo cosa tuya.",
      "Oíste hablar de automatizar, viste que había que programar y lo dejaste.",
    ],
    diffH: "Qué cambia cuando lo hace un bot",
    diffW: "Cuándo", diffA: "Si lo haces tú", diffB: "Con un bot",
    DIFF: [
      ["Al empezar", "Cuando te acuerdas", "A su hora, por su cuenta"],
      ["Al hacer el trabajo", "Tú haces clic, copias y pegas", "Usa una computadora en la nube"],
      ["Con la computadora cerrada", "El trabajo se detiene", "Sigue trabajando en la nube"],
    ],
    lessonsH: "Para empezar te bastan tres lecciones",
    lessonsP: "Léelas en orden. Después de estas tres ya puedes ponerlo a trabajar, y todo lo demás del sitio está para consultarlo cuando lo necesites.",
    lessonsLabel: "Para principiantes: 3 lecciones",
    fitH: "¿Es para ti?", yesH: "Sí, si", noH: "Todavía no, si",
    YES: ["Tienes un trabajo que repites en la computadora y te gustaría delegarlo", "Tienes Premium, Super o Ultra en The X Subscription", "Puedes explicar con palabras sencillas cómo haces ese trabajo"],
    NO: ["Tienes Plus, que no incluye Grok Bot", "No tienes computadora, y la app de escritorio se instala primero en una", "Solo quieres hacer una pregunta, y para eso basta un chat de IA normal"],
    devH: "Cuando ya lo domines",
    devP: "La guía completa va más a fondo, siguiendo el artículo de poteto. Estas son cuatro de sus ideas, una línea cada una:",
    // 完整教程目前只有英文和中文
    devNote: "Por ahora, la guía completa está en inglés (y en chino).",
    // FLOW：每个是 [标题, 说明]，图标和顺序固定
    FLOW: [
      ["Empieza por el objetivo", "Ten claro el resultado que quieres. Completar un formulario o enviar un correo es solo un paso del camino."],
      ["Explica tu proceso", "Cuenta de una vez cómo lo haces hoy. Primero te lo repite, y lo corriges unas cuantas veces antes de que empiece."],
      ["Enséñale cómo decides", "Repasa con él ejemplos reales de las decisiones que tomas sin pensar."],
      ["Deja que empiece solo", "Una rutina marca cuándo trabaja, con un horario o cuando llega un correo."],
    ],
    CONN: ["cuéntaselo", "prueba ejemplos", "cuando acierte"],
    stepsLabel: "Guía completa: {n} pasos",
  },

  // 新手入门三课在导航、首页路线图里的标题、时间、简介（顺序：1 先想清楚、2 建第一个 bot、3 交给它一件事）
  lessons: [
    { title: "Decide qué quieres lograr", minutes: "10 minutos", sum: "Elige algo que haces a menudo y nombra el resultado que quieres" },
    { title: "Crea tu primer bot", minutes: "15 minutos", sum: "Crea un bot nuevo y ponle nombre" },
    { title: "Encárgale un trabajo", minutes: "30 minutos", sum: "Explícale el trabajo y míralo hacerlo una vez" },
  ],

  // 一课的页面框架
  lesson: {
    eyebrow: "Para principiantes · lección {n} de {total}",
    prog: "Progreso: lección {n} de {total}",
    nav: "Lección anterior y siguiente",
    prev: "Anterior",
    next: "Siguiente",
    title: "Lección {n}: {title}",
    tldr: "En una línea",
  },

  // 正文里用到的组件
  comp: {
    callout: { ok: "Deberías ver", warn: "Ojo", no: "No hagas esto", tip: "Consejo" },
    copyTitle: "Copia esto",
    copy: "Copiar",
    cmdDone: "Comando copiado",
    cmdLabel: "Copiar comando: {c}",
    reply: "Ilustración: más o menos así se ve su respuesta",
    // 每页末尾一行：{lead} {gh 链接}{faq[0]}{faq[1] 链接}{faq[2]}
    feedback: {
      lead: "¿Algo de esta página no está claro, o no funcionó como se explica?",
      gh: "Cuéntalo en GitHub",
      faq: [". O revisa antes las ", "preguntas frecuentes", "."],
    },
    // 首页、常见问题末尾的「提问和讨论」卡片
    contact: {
      h: "Preguntas y comentarios",
      p: "¿Te atascaste en un paso, encontraste algo poco claro o hiciste un bot que te gustaría enseñar? Tráelo a GitHub. Las preguntas que más se repiten terminan dentro de la guía. Puedes escribir en tu idioma.",
      faq: ["Antes de preguntar, revisa las ", "preguntas frecuentes", ", porque muchas respuestas ya están ahí."],
      btn: "Pregunta o comenta en GitHub",
      x: "poteto está en X",
      privacy: "Antes de enviar capturas de pantalla, tapa las contraseñas, las claves de API, los datos de tu cuenta y tu información personal.",
    },
  },

  // 图示的界面文字（新手三课现在没有图，这里只有「图示」「再看一遍」两个词）
  figs: { ui: { label: "Diagrama", replay: "Ver de nuevo" } },
};

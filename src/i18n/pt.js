// pt（Português do Brasil，用 você）：结构照 base.js（英文底稿）。缺的键会显示英文。按钮名照 app 的巴西葡语界面（node scripts/app-labels.mjs --lang pt）。
// {名字} 是占位，由 fmt() 换成值，翻译时原样保留。
// 这些语言只有首页和新手入门三课；完整教程、How-to、Wiki、常见问题链到英文版，所以导航里写明「英文」。
export default {
  ui: {
    brand: "Grok Bot para iniciantes",
    desc: "Um guia não oficial do Grok Bot, do seu primeiro bot até bots que trabalham sozinhos, em palavras simples.",
    skip: "Pular para o conteúdo",
    menu: "Abrir menu",
    search: "Buscar no guia",
    searchPh: "Busque lições, passos, how-tos, termos…",
    searchEmpty: "Nada encontrado. Tente outra palavra",
    look: "Aparência",
    lang: "Idioma",
    repo: "Este guia no GitHub",
    repoMore: "Mais: a documentação oficial, o artigo de poteto",
    repoDefault: "Padrão",
    // 三个链接：[名字, 一句说明]，顺序固定（本教程、官方文档、poteto 的原文）
    repos: [
      ["Este guia", "O código deste guia; mande seus comentários aqui"],
      ["Documentação do Grok Bot", "A referência oficial sobre recursos e comportamento"],
      ["O artigo de poteto", "Automate Anything with Grok Bot"],
    ],
    navLabel: "Navegação do site",
    start: "Começar",
    home: "Início",
    lessons: "Para iniciantes: comece aqui",
    more: "Mais (em inglês)",
    main: "Guia completo: 8 passos",
    howto: "How-to: como fazer",
    wiki: "Wiki: o que é cada coisa",
    faq: "Perguntas frequentes",
    toc: "Nesta página",
    tocLabel: "Nesta página",
    hintMain: "Guia completo (em inglês)",
    hintLesson: "Para iniciantes",
    hintFaq: "Perguntas frequentes (em inglês)",
    hintOther: "Em inglês",
    section: "Seção",
    // {docs}、{article} 和 {github} 会换成链接（{docs} 的链接文字是英文的 docs）
    foot: "Um guia não oficial do Grok Bot, sem relação com xAI nem Cursor. Para recursos e comportamento, a referência é a documentação oficial ({docs}). O caminho principal segue o artigo {article}, de poteto. O código deste guia e os comentários ficam no {github}.",
    // 顶栏「外观」面板（UI Kit 的外观设置组）
    appearance: {
      group: "Aparência", theme: "Tema", light: "Claro", dark: "Escuro", system: "Sistema",
      corners: "Cantos arredondados", cornersDesc: "Desligado, todos os cantos ficam retos",
      accent: "Cor de destaque", accentDesc: "Usada em botões, seleção e foco",
    },
  },

  home: {
    h1: "Aproveitar ao máximo o Grok Bot começa pelo jeito como você pensa",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["Automação é, na verdade, um jeito de pensar, e qualquer pessoa pode aprender. Quem diz é poteto, que desenvolve o Grok Bot na SpaceX. Saiba bem qual resultado você quer, conte ao bot como você faz o trabalho hoje e, quando ele acertar, deixe que ele comece sozinho, na hora certa. Você não precisa programar. ", "Este é um guia não oficial", " que segue passo a passo o artigo “Automate Anything with Grok Bot”. Para os recursos, a referência é a documentação oficial."],
    cta: ["Comece aqui se é a sua primeira vez", "Já conhece? O guia completo (em inglês)"],
    ctaNote: "Para iniciantes são três lições: deixar o objetivo claro, criar um bot e passar um trabalho para ele.",
    painH: "Já aconteceu com você?",
    PAIN: [
      "Toda semana você perde uma tarde repetindo os mesmos passos de sempre.",
      "Você passaria isso para uma IA, mas uma IA de chat só responde. Clicar, copiar e enviar continua sendo com você.",
      "Você ouviu falar de automação, viu que precisava programar e desistiu.",
    ],
    diffH: "O que muda quando um bot faz",
    diffW: "Quando", diffA: "Se você faz", diffB: "Com um bot",
    DIFF: [
      ["Para começar", "Quando você lembra", "Na hora certa, sozinho"],
      ["Para fazer o trabalho", "Você clica, copia e cola", "Ele usa um computador na nuvem"],
      ["Com o notebook fechado", "O trabalho para", "Ele continua na nuvem"],
    ],
    lessonsH: "Para começar, bastam três lições",
    lessonsP: "É só ler na ordem. Depois dessas três você já pode colocá-lo para trabalhar, e todo o resto do site está aí para consultar quando precisar.",
    lessonsLabel: "Para iniciantes: 3 lições",
    fitH: "É para você?", yesH: "Sim, se", noH: "Ainda não, se",
    YES: ["Você tem um trabalho que repete no computador e quer passar adiante", "Você tem Premium, Super ou Ultra na The X Subscription", "Você consegue explicar em palavras simples como faz esse trabalho"],
    NO: ["Você está no Plus, que não inclui o Grok Bot", "Você não tem computador, e o app para desktop é instalado primeiro em um", "Você só quer fazer uma pergunta, e para isso um chat de IA comum já basta"],
    devH: "Quando você já estiver à vontade",
    devP: "O guia completo vai mais fundo, seguindo o artigo de poteto. Aqui estão quatro ideias do artigo, uma linha cada:",
    // 完整教程目前只有英文和中文
    devNote: "Por enquanto, o guia completo está em inglês (e em chinês).",
    // FLOW：每个是 [标题, 说明]，图标和顺序固定
    FLOW: [
      ["Comece pelo objetivo", "Saiba qual resultado você quer. Preencher um formulário ou enviar um e-mail é só um passo no caminho."],
      ["Explique o seu processo", "Conte de uma vez como você faz hoje. Primeiro ele repete, e você corrige algumas vezes antes de ele começar."],
      ["Ensine como você decide", "Mostre a ele exemplos reais das decisões que você toma sem pensar."],
      ["Deixe que ele comece sozinho", "Uma rotina define quando ele trabalha, em um horário ou quando chega um e-mail."],
    ],
    CONN: ["conte a ele", "teste exemplos", "quando acertar"],
    stepsLabel: "Guia completo: {n} passos",
  },

  // 新手入门三课在导航、首页路线图里的标题、时间、简介（顺序：1 先想清楚、2 建第一个 bot、3 交给它一件事）
  lessons: [
    { title: "Decida o que você quer alcançar", minutes: "10 minutos", sum: "Escolha algo que você faz com frequência e diga qual resultado quer" },
    { title: "Crie o seu primeiro bot", minutes: "15 minutos", sum: "Crie um bot novo e dê um nome a ele" },
    { title: "Passe um trabalho para ele", minutes: "30 minutos", sum: "Explique o trabalho e veja como ele faz uma vez" },
  ],

  // 一课的页面框架
  lesson: {
    eyebrow: "Para iniciantes · lição {n} de {total}",
    prog: "Progresso: lição {n} de {total}",
    nav: "Lição anterior e próxima",
    prev: "Anterior",
    next: "Próxima",
    title: "Lição {n}: {title}",
    tldr: "Em uma linha",
  },

  // 正文里用到的组件
  comp: {
    callout: { ok: "Você deve ver", warn: "Atenção", no: "Não faça isso", tip: "Dica" },
    copyTitle: "Copie isto",
    copy: "Copiar",
    cmdDone: "Comando copiado",
    cmdLabel: "Copiar comando: {c}",
    reply: "Ilustração: mais ou menos assim fica a resposta dele",
    // 每页末尾一行：{lead} {gh 链接}{faq[0]}{faq[1] 链接}{faq[2]}
    feedback: {
      lead: "Algo nesta página ficou confuso, ou não funcionou como está escrito?",
      gh: "Conte no GitHub",
      faq: [". Ou veja antes as ", "perguntas frequentes", "."],
    },
    // 首页、常见问题末尾的「提问和讨论」卡片
    contact: {
      h: "Perguntas e comentários",
      p: "Travou em um passo, achou algo confuso ou fez um bot que quer mostrar? Leve para o GitHub. As perguntas que mais aparecem acabam entrando no guia. Pode escrever no seu idioma.",
      faq: ["Antes de perguntar, veja as ", "perguntas frequentes", ", porque muitas respostas já estão lá."],
      btn: "Pergunte ou comente no GitHub",
      x: "poteto está no X",
      privacy: "Antes de enviar capturas de tela, esconda senhas, chaves de API, dados da conta e informações pessoais.",
    },
  },

  // 图示的界面文字（新手三课现在没有图，这里只有「图示」「再看一遍」两个词）
  figs: { ui: { label: "Diagrama", replay: "Ver de novo" } },
};

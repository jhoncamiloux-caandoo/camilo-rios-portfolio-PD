import type { Locale } from "@/lib/i18n/types";

export type ScaleDictionary = {
  ch01: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    tags: string[];
    team: string;
    chipSalesFunnel: string;
    chipAttendContacts: string;
    ctaCreateAgent: string;
    ctaBadgeNew: string;
    ctaTalkToConsultant: string;
  };
  ch02: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    beforeLabel: string;
    beforeItems: string[];
    systemLabel: string;
    systemNodes: string[];
  };
  ch03: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    nodes: string[];
  };
  ch04: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    colorsLabel: string;
    colors: { name: string; hex: string }[];
    gradientsLabel: string;
    gradients: { name: string; css: string }[];
    typographyLabel: string;
    typeScale: { label: string; size: string }[];
    systemNote: string;
    spacingLabel: string;
    gridLabel: string;
    grid: { label: string; value: string }[];
    radiusLabel: string;
    radius: { name: string; px: number }[];
    shadowsLabel: string;
    shadows: { name: string; css: string }[];
  };
  ch05: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    panels: {
      name: string;
      file: string;
      description: string;
    }[];
    ctaCreateAgent: string;
    ctaBadgeNew: string;
    ctaDownloadApp: string;
    chipSalesFunnel: string;
    chipAttendContacts: string;
    chatMessage: string;
    chatTime: string;
  };
  ch06: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    signatureTitle: string;
    signatureTag: string;
    signatureDescription: string;
    cloudTitle: string;
    cloudTag: string;
    cloudDescription: string;
    meetingTitle: string;
    meetingTag: string;
    meetingDescription: string;
    meetingPoints: string[];
  };
  ch07: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    statesLabel: string;
    states: { label: string; desc: string }[];
    gateLabel: string;
    gate: string[];
    debtLabel: string;
    debtDescription: string;
    debtTableHeaders: { file: string; hardcodedColors: string; exposedPrimitives: string };
    debtRows: { file: string; colors: number; primitives: number }[];
    experimentNote: string;
  };
  ch08: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    nodes: string[];
  };
  ch09: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    nodes: string[];
  };
  tokenLayers: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    layers: { name: string; hint: string }[];
    contrastLabel: string;
    passLabel: string;
    failLabel: string;
    contrastNote: string;
  };
  playground: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    componentsLabel: string;
    stateLabel: string;
    variantLabel: string;
    sizeLabel: string;
    anatomyLabel: string;
    codeLabel: string;
    tokensLabel: string;
    states: Record<"default" | "hover" | "focus" | "disabled" | "loading" | "error", string>;
    demo: {
      button: string;
      inputLabel: string;
      inputPlaceholder: string;
      inputHelp: string;
      inputError: string;
      selectLabel: string;
      selectOptions: string[];
      switchLabel: string;
      checkboxLabel: string;
      badges: string[];
      toastTitle: string;
      toastBody: string;
      tabs: string[];
      tooltip: string;
      modalTitle: string;
      modalBody: string;
      modalConfirm: string;
      modalCancel: string;
      emptyTitle: string;
      emptyBody: string;
    };
    ctaTitle: string;
    ctaDescription: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  ch10: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    speedCaption: string;
    speedSource: string;
    timeComparison: { label: string; value: string }[];
    aiTokensCaption: string;
    aiTokensSource: string;
  };
  nextCase: { eyebrow: string; title: string; description: string };
};

export const scale: Record<Locale, ScaleDictionary> = {
  pt: {
    ch01: {
      ariaLabel: "Apresentação do case Scale",
      eyebrow: "03 · Scale",
      title: "Criando um sistema para escalar Growth.",
      description:
        "Como transformar padrões visuais e operacionais em uma infraestrutura compartilhada para acelerar experimentos sem perder consistência.",
      tags: ["Design System", "Growth", "UX/UI", "Figma", "Storybook"],
      team: "Time: 2 product designers.",
      chipSalesFunnel: "Crie um funil de vendas",
      chipAttendContacts: "Atender contatos",
      ctaCreateAgent: "Crie seu agente",
      ctaBadgeNew: "novo",
      ctaTalkToConsultant: "Falar com um consultor",
    },
    ch02: {
      ariaLabel: "O problema da escala sem sistema",
      eyebrow: "Problema",
      title:
        "Crescimento aumenta o número de experiências. Sem sistema, também aumenta o retrabalho.",
      beforeLabel: "Antes",
      beforeItems: ["Botão A", "Botão B", "Botão C", "Card A", "Card B", "Card C"],
      systemLabel: "Sistema",
      systemNodes: ["Token", "Componente", "Padrão", "Tela", "Experimento"],
    },
    ch03: {
      ariaLabel: "Arquitetura do design system",
      eyebrow: "Arquitetura do design system",
      title: "Uma decisão no token, herdada por todo o produto.",
      description:
        "Cada camada existe para que a de cima nunca precise pensar na de baixo. O designer escolhe um token; o produto inteiro herda a decisão.",
      nodes: ["Tokens", "Componentes", "Telas", "Produto"],
    },
    ch04: {
      ariaLabel: "Tokens reais do design system",
      eyebrow: "Tokens",
      title: "A fonte única de verdade do produto.",
      description:
        "Estes são os valores reais em produção: a mesma paleta e escala tipográfica (Poppins) usadas em todas as páginas da Clint.",
      colorsLabel: "Cores",
      colors: [
        { name: "Fundo", hex: "#060309" },
        { name: "Painel escuro", hex: "#0d0d12" },
        { name: "Roxo CTA", hex: "#2d1c7f" },
        { name: "Magenta selo", hex: "#a600ff" },
        { name: "Roxo ícone", hex: "#8800ff" },
        { name: "Azul badge", hex: "#3739ad" },
        { name: "Lilás stat", hex: "#d1a6ff" },
        { name: "Lilás número", hex: "#a787ff" },
        { name: "Verde ícone", hex: "#B6FFC1" },
        { name: "Verde chip", hex: "#43d97b" },
      ],
      gradientsLabel: "Gradientes",
      gradients: [
        { name: "barra hero", css: "linear-gradient(90deg, #CF75FF 0%, #A1D8FF 50%, #E95BFF 100%)" },
        { name: "barra padrão", css: "linear-gradient(100deg, #CF75FF 0%, #FF9D5C 30%, #A1D8FF 70%, #7B9BFF 100%)" },
        { name: "moldura seção 3", css: "linear-gradient(115deg, #A85FFF 0%, #E95BFF 40%, #8FB4FF 75%, #6AA6FF 100%)" },
      ],
      typographyLabel: "Tipografia · Poppins",
      typeScale: [
        { label: "H1 Hero", size: "52px" },
        { label: "H2 Seção", size: "39px" },
        { label: "H3 Bloco", size: "24px" },
        { label: "Subtítulo", size: "17.5px" },
        { label: "Corpo", size: "13–15px" },
        { label: "Eyebrow / selo", size: "12px caps" },
      ],
      systemNote:
        "Além da identidade visual da Clint, esta é a camada que todo Design System bem estruturado adiciona: uma escala sistemática de espaçamento, raio e sombra para que qualquer página nova nasça consistente, sem decisão ad-hoc.",
      spacingLabel: "Espaçamento",
      gridLabel: "Grid e container",
      grid: [
        { label: "Container máximo", value: "1200px" },
        { label: "Gutter", value: "24px" },
        { label: "Respiro entre seções", value: "96px (72px em blocos compactos)" },
      ],
      radiusLabel: "Raios",
      radius: [
        { name: "xs", px: 8 },
        { name: "sm", px: 12 },
        { name: "md (icon-box)", px: 16 },
        { name: "lg (card)", px: 20 },
        { name: "xl (bloco escuro)", px: 24 },
        { name: "2xl (full-width)", px: 28 },
        { name: "pill (CTA)", px: 999 },
      ],
      shadowsLabel: "Sombras",
      shadows: [
        { name: "sm", css: "0 1px 3px rgba(0,0,0,.3), 0 4px 16px rgba(0,0,0,.35)" },
        { name: "md", css: "0 14px 40px -14px rgba(0,0,0,.5)" },
        { name: "lg", css: "0 34px 80px -24px rgba(0,0,0,.6)" },
        { name: "brand", css: "0 8px 28px -10px rgba(166,0,255,.5)" },
      ],
    },
    ch05: {
      ariaLabel: "Componentes do design system",
      eyebrow: "Componentes",
      title: "Um componente, todas as páginas.",
      description:
        "Edite um arquivo em componentes/ e a mudança aparece em toda página que o usa. Estas são recriações fiéis dos componentes reais em produção, mesma paleta, mesmo comportamento, e cada campanha nova herda isso sem esperar handoff.",
      panels: [
        {
          name: "BotaoCTA",
          file: "componentes/BotaoCTA.dc.html",
          description:
            "Props: rótulo, selo, variante (primário | contorno). O primário usa gradiente roxo com glow; o contorno é reservado para ações secundárias.",
        },
        {
          name: "BarraPrompt",
          file: "componentes/BarraPrompt.dc.html",
          description:
            "Barra de prompt com borda em gradiente e digitação animada: a mesma peça se repete no hero e dentro do produto.",
        },
        {
          name: "ChipAgente",
          file: "componentes/ChipAgente.dc.html",
          description:
            "Props: rótulo, variante (compacto | grande), ícone. Usado para sugestões rápidas de ação em toda a plataforma.",
        },
        {
          name: "BalaoChat",
          file: "componentes/BalaoChat.dc.html",
          description:
            "Balão de conversa com avatar circular ou quadrado: a peça visual que sustenta toda a narrativa de produto em torno do WhatsApp.",
        },
      ],
      ctaCreateAgent: "Crie um agente de Pré-vendas",
      ctaBadgeNew: "novo",
      ctaDownloadApp: "Baixar app",
      chipSalesFunnel: "Crie um funil de vendas",
      chipAttendContacts: "Atender contatos",
      chatMessage: "Quero saber como funciona",
      chatTime: "22:45",
    },
    ch06: {
      ariaLabel: "Componentes de IA do design system",
      eyebrow: "Componentes de IA",
      title: "Um vocabulário próprio para explicar IA sem virar chatbot genérico.",
      description:
        "Cada produto de IA da Clint precisa comunicar a mesma promessa de formas diferentes. Em vez de reinventar a cada página, o sistema tem três peças reutilizáveis para isso.",
      signatureTitle: "Assinatura de IA",
      signatureTag: "data-ai-intro",
      signatureDescription:
        "A frase que resume a promessa do produto antes de qualquer prova: pessoa descreve, a Clint executa.",
      cloudTitle: "Nuvem de comandos",
      cloudTag: "CSS puro · sem JS",
      cloudDescription:
        "Mostra a amplitude da IA sem empilhar cards: três trilhas de comandos reais atravessam a marca, pausando no hover.",
      meetingTitle: "Inteligência de reuniões",
      meetingTag: "texto + produto",
      meetingDescription:
        'Transforma uma promessa abstrata ("a IA analisa suas reuniões") em produto visível: transcrição, score e insight juntos, sem depender de vídeo.',
      meetingPoints: [
        "A objeção que mais aparece e derruba a venda.",
        "Os próximos passos combinados com cada lead.",
        "O padrão das calls que mais convertem.",
      ],
    },
    ch07: {
      ariaLabel: "Governança do design system",
      eyebrow: "Governança",
      title: "Um Design System não é só UI. É a regra de quem pode mudar o quê.",
      description:
        "No sistema da Clint, cada componente carrega um estado, uma fonte da verdade e uma auditoria automática. É essa disciplina, não a paleta em si, que se estende a qualquer produto novo.",
      statesLabel: "Estados de um componente",
      states: [
        { label: "experimental", desc: "Pode mudar. Não usar como dependência central sem avisar." },
        { label: "stable", desc: "Contrato público. Mudança incompatível exige versão major." },
        { label: "deprecated", desc: "Continua funcionando durante a migração e aponta o substituto." },
        { label: "removed", desc: "Não existe mais na implementação; permanece só no changelog." },
      ],
      gateLabel: "Definition of Done para qualquer mudança",
      gate: [
        "Usa tokens e componentes existentes, ou documenta por que um novo contrato é necessário.",
        "Atualiza a implementação canônica, nunca só a demonstração.",
        "Atualiza o registro ao adicionar, renomear ou remover componente.",
        "Atualiza a vitrine quando aparência, anatomia ou uso muda.",
        "Atualiza o changelog quando afeta quem consome o sistema.",
        "Passa na auditoria automática de sincronização.",
      ],
      debtLabel: "Dívida técnica só pode diminuir",
      debtDescription:
        "Cor escrita à mão em vez de token é dívida. Em vez de fingir que não existe, uma baseline congela o número atual: ele nunca pode aumentar, e cada redução vira uma linha no changelog.",
      debtTableHeaders: {
        file: "Arquivo",
        hardcodedColors: "Cores hardcoded",
        exposedPrimitives: "Primitivas expostas",
      },
      debtRows: [
        { file: "components.css", colors: 15, primitives: 23 },
        { file: "effects.css", colors: 9, primitives: 0 },
        { file: "lp.js", colors: 2, primitives: 0 },
      ],
      experimentNote:
        'Nem todo experimento sobrevive. Uma versão inicial de "integrações" foi testada na vitrine, marcada para substituição e nunca chegou a entrar no registro oficial. O sistema documentou a troca em vez de esconder a tentativa.',
    },
    ch08: {
      ariaLabel: "Design System conectado ao Growth",
      eyebrow: "Design System conectado ao Growth",
      title: "Um Design System só importa se acelera o próximo experimento.",
      description:
        "Essa é a diferença entre um case genérico de Design System e um case alinhado ao posicionamento de Growth: o sistema existe para que cada campanha nova comece na metade do caminho.",
      nodes: ["Design System", "Componentes reutilizáveis", "Landing / Campanha", "Experimento", "Aprendizado", "Iteração"],
    },
    ch09: {
      ariaLabel: "Ponte entre design e desenvolvimento",
      eyebrow: "Figma → Storybook",
      title: "A ponte entre design e desenvolvimento.",
      description:
        "Tokens e variantes nascem no Figma e se tornam a referência que o time de desenvolvimento consulta para implementar cada componente. O objetivo é colaboração, não uma integração automatizada entre as ferramentas.",
      nodes: ["Figma", "Tokens", "Componente", "Storybook", "Produto"],
    },
    tokenLayers: {
      ariaLabel: "Camadas de tokens",
      eyebrow: "Arquitetura de tokens",
      title: "Três camadas, uma decisão por vez.",
      description: "Primitivos guardam o valor bruto, semânticos dizem para que servem e os de componente amarram tudo na peça. Trocar o tema é mudar uma camada, não caçar hex no código.",
      layers: [{ name: "Primitivo", hint: "valor bruto" }, { name: "Semântico", hint: "intenção de uso" }, { name: "Componente", hint: "aplicado na peça" }],
      contrastLabel: "Contraste WCAG",
      passLabel: "Passa AA",
      failLabel: "Reprova",
      contrastNote: "Calculado ao vivo a partir dos tokens. O roxo da marca não passa como texto no escuro, por isso existe um token de texto separado.",
    },
    playground: {
      ariaLabel: "Playground de componentes",
      eyebrow: "Playground",
      title: "Componentes vivos, em todos os estados.",
      description: "Não é print: cada peça abaixo é código rodando. Troque estado, variante e tamanho, veja a anatomia e o código que o time de engenharia recebe.",
      componentsLabel: "Componentes",
      stateLabel: "Estado",
      variantLabel: "Variante",
      sizeLabel: "Tamanho",
      anatomyLabel: "Mostrar anatomia",
      codeLabel: "Código",
      tokensLabel: "Tokens usados",
      states: {"default": "Padrão", "hover": "Hover", "focus": "Foco", "disabled": "Desabilitado", "loading": "Carregando", "error": "Erro"},
      demo: {"button": "Criar agente", "inputLabel": "E-mail de trabalho", "inputPlaceholder": "voce@empresa.com", "inputHelp": "Usado para enviar o convite.", "inputError": "Informe um e-mail válido.", "selectLabel": "Etapa do funil", "selectOptions": ["Prospecção", "Qualificação", "Negociação"], "switchLabel": "Atendimento por IA", "checkboxLabel": "Notificar o vendedor", "badges": ["Ativo", "Rascunho", "Pausado", "Erro"], "toastTitle": "Agente publicado", "toastBody": "A Clara já está atendendo no WhatsApp.", "tabs": ["Resumo", "Configurar", "Testar"], "tooltip": "Duplicar agente", "modalTitle": "Pausar automação?", "modalBody": "O agente para de responder e as conversas voltam para o time.", "modalConfirm": "Pausar", "modalCancel": "Cancelar", "emptyTitle": "Nenhum agente ainda", "emptyBody": "Crie o primeiro e ele começa a atender em minutos."},
      ctaTitle: "Quer ver o sistema por dentro?",
      ctaDescription: "Mostro o arquivo do Figma, a documentação e como o time usa no dia a dia numa conversa rápida.",
      ctaPrimary: "Agendar conversa",
      ctaSecondary: "Baixar currículo",
    },
    ch10: {
      ariaLabel: "Resultado do sistema",
      eyebrow: "Resultado",
      title: "Um sistema compartilhado torna cada página nova mais rápida de nascer.",
      description:
        "Tokens e componentes prontos removem a decisão visual repetida de cada nova página, e isso também muda como agentes de IA trabalham dentro do projeto.",
      speedCaption: "mais rápido para construir a mesma página",
      speedSource:
        "Estudo controlado da Sparkbox: 8 desenvolvedores construíram o mesmo formulário duas vezes, uma do zero e outra reutilizando o Design System Carbon da IBM.",
      timeComparison: [
        { label: "Do zero", value: "4h12" },
        { label: "Com Design System", value: "2h" },
      ],
      aiTokensCaption: "menos tokens para um agente de IA gerar a mesma interface",
      aiTokensSource:
        "Estimativa própria, não um estudo publicado: escrever uma seção do zero (cores, espaçamento, estados, responsivo) custa 1.200–2.000 tokens; importar um componente já pronto custa 150–300.",
    },
    nextCase: {
      eyebrow: "Ver outro case",
      title: "01 · Acquire: projetando a jornada de aquisição da Clint.",
      description: "CRO e Product Design transformando pontos de contato em conversão.",
    },
  },
  en: {
    ch01: {
      ariaLabel: "Introduction to the Scale case study",
      eyebrow: "03 · Scale",
      title: "Building a system to scale Growth.",
      description:
        "How to turn visual and operational patterns into shared infrastructure that speeds up experiments without losing consistency.",
      tags: ["Design System", "Growth", "UX/UI", "Figma", "Storybook"],
      team: "Team: 2 product designers.",
      chipSalesFunnel: "Build a sales funnel",
      chipAttendContacts: "Reply to contacts",
      ctaCreateAgent: "Create your agent",
      ctaBadgeNew: "new",
      ctaTalkToConsultant: "Talk to a consultant",
    },
    ch02: {
      ariaLabel: "The problem with scale without a system",
      eyebrow: "Problem",
      title:
        "Growth multiplies the number of experiences. Without a system, it multiplies rework too.",
      beforeLabel: "Before",
      beforeItems: ["Button A", "Button B", "Button C", "Card A", "Card B", "Card C"],
      systemLabel: "System",
      systemNodes: ["Token", "Component", "Pattern", "Screen", "Experiment"],
    },
    ch03: {
      ariaLabel: "Design system architecture",
      eyebrow: "Design system architecture",
      title: "One decision at the token, inherited by the whole product.",
      description:
        "Every layer exists so the one above never has to think about the one below. The designer picks a token; the entire product inherits the decision.",
      nodes: ["Tokens", "Components", "Screens", "Product"],
    },
    ch04: {
      ariaLabel: "The design system's real tokens",
      eyebrow: "Tokens",
      title: "The product's single source of truth.",
      description:
        "These are the real values in production: the same palette and type scale (Poppins) used across every page at Clint.",
      colorsLabel: "Colors",
      colors: [
        { name: "Background", hex: "#060309" },
        { name: "Dark panel", hex: "#0d0d12" },
        { name: "CTA purple", hex: "#2d1c7f" },
        { name: "Magenta badge", hex: "#a600ff" },
        { name: "Icon purple", hex: "#8800ff" },
        { name: "Badge blue", hex: "#3739ad" },
        { name: "Stat lilac", hex: "#d1a6ff" },
        { name: "Number lilac", hex: "#a787ff" },
        { name: "Icon green", hex: "#B6FFC1" },
        { name: "Chip green", hex: "#43d97b" },
      ],
      gradientsLabel: "Gradients",
      gradients: [
        { name: "hero bar", css: "linear-gradient(90deg, #CF75FF 0%, #A1D8FF 50%, #E95BFF 100%)" },
        { name: "standard bar", css: "linear-gradient(100deg, #CF75FF 0%, #FF9D5C 30%, #A1D8FF 70%, #7B9BFF 100%)" },
        { name: "section 3 frame", css: "linear-gradient(115deg, #A85FFF 0%, #E95BFF 40%, #8FB4FF 75%, #6AA6FF 100%)" },
      ],
      typographyLabel: "Typography · Poppins",
      typeScale: [
        { label: "H1 Hero", size: "52px" },
        { label: "H2 Section", size: "39px" },
        { label: "H3 Block", size: "24px" },
        { label: "Subtitle", size: "17.5px" },
        { label: "Body", size: "13–15px" },
        { label: "Eyebrow / badge", size: "12px caps" },
      ],
      systemNote:
        "Beyond Clint's visual identity, this is the layer every well-built Design System adds: a systematic scale of spacing, radius, and shadow so any new page is born consistent, with no ad-hoc decisions.",
      spacingLabel: "Spacing",
      gridLabel: "Grid & container",
      grid: [
        { label: "Max container", value: "1200px" },
        { label: "Gutter", value: "24px" },
        { label: "Breathing room between sections", value: "96px (72px in compact blocks)" },
      ],
      radiusLabel: "Radius",
      radius: [
        { name: "xs", px: 8 },
        { name: "sm", px: 12 },
        { name: "md (icon-box)", px: 16 },
        { name: "lg (card)", px: 20 },
        { name: "xl (dark block)", px: 24 },
        { name: "2xl (full-width)", px: 28 },
        { name: "pill (CTA)", px: 999 },
      ],
      shadowsLabel: "Shadows",
      shadows: [
        { name: "sm", css: "0 1px 3px rgba(0,0,0,.3), 0 4px 16px rgba(0,0,0,.35)" },
        { name: "md", css: "0 14px 40px -14px rgba(0,0,0,.5)" },
        { name: "lg", css: "0 34px 80px -24px rgba(0,0,0,.6)" },
        { name: "brand", css: "0 8px 28px -10px rgba(166,0,255,.5)" },
      ],
    },
    ch05: {
      ariaLabel: "Design system components",
      eyebrow: "Components",
      title: "One component, every page.",
      description:
        "Edit a file in components/ and the change shows up on every page that uses it. These are faithful recreations of the real components in production, same palette, same behavior, and every new campaign inherits it without waiting on handoff.",
      panels: [
        {
          name: "CTAButton",
          file: "components/CTAButton.dc.html",
          description:
            "Props: label, badge, variant (primary | outline). Primary uses a purple gradient with glow; outline is reserved for secondary actions.",
        },
        {
          name: "PromptBar",
          file: "components/PromptBar.dc.html",
          description:
            "A prompt bar with a gradient border and animated typing: the same piece repeats in the hero and inside the product.",
        },
        {
          name: "AgentChip",
          file: "components/AgentChip.dc.html",
          description:
            "Props: label, variant (compact | large), icon. Used for quick action suggestions across the whole platform.",
        },
        {
          name: "ChatBubble",
          file: "components/ChatBubble.dc.html",
          description:
            "A conversation bubble with a circular or square avatar: the visual piece that carries the entire product narrative around WhatsApp.",
        },
      ],
      ctaCreateAgent: "Create a Pre-sales agent",
      ctaBadgeNew: "new",
      ctaDownloadApp: "Download app",
      chipSalesFunnel: "Build a sales funnel",
      chipAttendContacts: "Reply to contacts",
      chatMessage: "I want to know how it works",
      chatTime: "10:45 PM",
    },
    ch06: {
      ariaLabel: "Design system AI components",
      eyebrow: "AI Components",
      title: "A vocabulary of its own for explaining AI without turning into a generic chatbot.",
      description:
        "Every AI product at Clint needs to communicate the same promise in different ways. Instead of reinventing it on every page, the system has three reusable pieces for that.",
      signatureTitle: "AI Signature",
      signatureTag: "data-ai-intro",
      signatureDescription:
        "The line that sums up the product's promise before any proof: a person describes it, Clint executes it.",
      cloudTitle: "Command Cloud",
      cloudTag: "pure CSS · no JS",
      cloudDescription:
        "Shows the breadth of the AI without stacking cards: three lanes of real commands drift across the brand, pausing on hover.",
      meetingTitle: "Meeting Intelligence",
      meetingTag: "text + product",
      meetingDescription:
        'Turns an abstract promise ("AI analyzes your meetings") into a visible product: transcript, score, and insight together, with no video required.',
      meetingPoints: [
        "The objection that comes up most and kills the sale.",
        "The next steps agreed on with each lead.",
        "The pattern behind the calls that convert best.",
      ],
    },
    ch07: {
      ariaLabel: "Design system governance",
      eyebrow: "Governance",
      title: "A Design System isn't just UI. It's the rule for who can change what.",
      description:
        "In Clint's system, every component carries a state, a source of truth, and an automated audit. It's that discipline, not the palette itself, that extends to any new product.",
      statesLabel: "A component's states",
      states: [
        { label: "experimental", desc: "Can change. Don't treat it as a core dependency without a heads-up." },
        { label: "stable", desc: "A public contract. A breaking change requires a major version." },
        { label: "deprecated", desc: "Keeps working during migration and points to its replacement." },
        { label: "removed", desc: "No longer exists in the implementation; lives on only in the changelog." },
      ],
      gateLabel: "Definition of Done for any change",
      gate: [
        "Uses existing tokens and components, or documents why a new contract is needed.",
        "Updates the canonical implementation, never just the demo.",
        "Updates the registry when a component is added, renamed, or removed.",
        "Updates the showcase when appearance, anatomy, or usage changes.",
        "Updates the changelog when it affects anyone consuming the system.",
        "Passes the automated sync audit.",
      ],
      debtLabel: "Technical debt can only go down",
      debtDescription:
        "A hand-written color instead of a token is debt. Instead of pretending it doesn't exist, a baseline freezes the current number: it can never go up, and every reduction becomes a line in the changelog.",
      debtTableHeaders: {
        file: "File",
        hardcodedColors: "Hardcoded colors",
        exposedPrimitives: "Exposed primitives",
      },
      debtRows: [
        { file: "components.css", colors: 15, primitives: 23 },
        { file: "effects.css", colors: 9, primitives: 0 },
        { file: "lp.js", colors: 2, primitives: 0 },
      ],
      experimentNote:
        'Not every experiment survives. An early version of "integrations" was tested in the showcase, flagged for replacement, and never made it into the official registry. The system documented the swap instead of hiding the attempt.',
    },
    ch08: {
      ariaLabel: "Design System connected to Growth",
      eyebrow: "Design System connected to Growth",
      title: "A Design System only matters if it speeds up the next experiment.",
      description:
        "That's the difference between a generic Design System case study and one aligned with a Growth positioning: the system exists so every new campaign starts halfway there.",
      nodes: ["Design System", "Reusable components", "Landing page / Campaign", "Experiment", "Learning", "Iteration"],
    },
    ch09: {
      ariaLabel: "Bridge between design and development",
      eyebrow: "Figma → Storybook",
      title: "The bridge between design and development.",
      description:
        "Tokens and variants are born in Figma and become the reference the development team consults to implement each component. The goal is collaboration, not an automated integration between tools.",
      nodes: ["Figma", "Tokens", "Component", "Storybook", "Product"],
    },
    tokenLayers: {
      ariaLabel: "Token layers",
      eyebrow: "Token architecture",
      title: "Three layers, one decision at a time.",
      description: "Primitives hold the raw value, semantics say what they're for, and component tokens bind it all to the piece. Changing the theme means changing one layer, not hunting hex codes.",
      layers: [{ name: "Primitive", hint: "raw value" }, { name: "Semantic", hint: "usage intent" }, { name: "Component", hint: "applied to the piece" }],
      contrastLabel: "WCAG contrast",
      passLabel: "Passes AA",
      failLabel: "Fails",
      contrastNote: "Computed live from the tokens. The brand purple fails as text on dark, which is why a separate text token exists.",
    },
    playground: {
      ariaLabel: "Component playground",
      eyebrow: "Playground",
      title: "Live components, in every state.",
      description: "Not screenshots: every piece below is running code. Switch state, variant, and size, inspect the anatomy and the code engineering receives.",
      componentsLabel: "Components",
      stateLabel: "State",
      variantLabel: "Variant",
      sizeLabel: "Size",
      anatomyLabel: "Show anatomy",
      codeLabel: "Code",
      tokensLabel: "Tokens used",
      states: {"default": "Default", "hover": "Hover", "focus": "Focus", "disabled": "Disabled", "loading": "Loading", "error": "Error"},
      demo: {"button": "Create agent", "inputLabel": "Work email", "inputPlaceholder": "you@company.com", "inputHelp": "Used to send the invite.", "inputError": "Enter a valid email.", "selectLabel": "Funnel stage", "selectOptions": ["Prospecting", "Qualification", "Negotiation"], "switchLabel": "AI support", "checkboxLabel": "Notify the rep", "badges": ["Active", "Draft", "Paused", "Error"], "toastTitle": "Agent published", "toastBody": "Clara is already answering on WhatsApp.", "tabs": ["Overview", "Configure", "Test"], "tooltip": "Duplicate agent", "modalTitle": "Pause automation?", "modalBody": "The agent stops replying and conversations go back to the team.", "modalConfirm": "Pause", "modalCancel": "Cancel", "emptyTitle": "No agents yet", "emptyBody": "Create the first one and it starts answering in minutes."},
      ctaTitle: "Want to see the system from the inside?",
      ctaDescription: "I'll walk you through the Figma file, the docs, and how the team uses it day to day in a quick call.",
      ctaPrimary: "Book a call",
      ctaSecondary: "Download résumé",
    },
    ch10: {
      ariaLabel: "Result of the system",
      eyebrow: "Result",
      title: "A shared system makes every new page faster to build.",
      description:
        "Ready-made tokens and components remove the repeated visual decisions on every new page, and that also changes how AI agents work inside the project.",
      speedCaption: "faster to build the same page",
      speedSource:
        "Controlled study by Sparkbox: 8 developers built the same form twice, once from scratch and once reusing IBM's Carbon Design System.",
      timeComparison: [
        { label: "From scratch", value: "4h12m" },
        { label: "With a Design System", value: "2h" },
      ],
      aiTokensCaption: "fewer tokens for an AI agent to generate the same interface",
      aiTokensSource:
        "Our own estimate, not a published study: writing a section from scratch (colors, spacing, states, responsive) costs 1,200–2,000 tokens; importing a ready-made component costs 150–300.",
    },
    nextCase: {
      eyebrow: "See another case",
      title: "01 · Acquire: designing Clint's acquisition journey.",
      description: "CRO and Product Design turning touchpoints into conversion.",
    },
  },
  es: {
    ch01: {
      ariaLabel: "Presentación del caso Scale",
      eyebrow: "03 · Scale",
      title: "Creando un sistema para escalar Growth.",
      description:
        "Cómo transformar patrones visuales y operativos en una infraestructura compartida para acelerar experimentos sin perder consistencia.",
      tags: ["Design System", "Growth", "UX/UI", "Figma", "Storybook"],
      team: "Equipo: 2 product designers.",
      chipSalesFunnel: "Crea un embudo de ventas",
      chipAttendContacts: "Atender contactos",
      ctaCreateAgent: "Crea tu agente",
      ctaBadgeNew: "nuevo",
      ctaTalkToConsultant: "Hablar con un asesor",
    },
    ch02: {
      ariaLabel: "El problema de escalar sin sistema",
      eyebrow: "Problema",
      title:
        "El crecimiento aumenta el número de experiencias. Sin sistema, también aumenta el retrabajo.",
      beforeLabel: "Antes",
      beforeItems: ["Botón A", "Botón B", "Botón C", "Card A", "Card B", "Card C"],
      systemLabel: "Sistema",
      systemNodes: ["Token", "Componente", "Patrón", "Pantalla", "Experimento"],
    },
    ch03: {
      ariaLabel: "Arquitectura del design system",
      eyebrow: "Arquitectura del design system",
      title: "Una decisión en el token, heredada por todo el producto.",
      description:
        "Cada capa existe para que la de arriba nunca tenga que pensar en la de abajo. El diseñador elige un token; todo el producto hereda la decisión.",
      nodes: ["Tokens", "Componentes", "Pantallas", "Producto"],
    },
    ch04: {
      ariaLabel: "Tokens reales del design system",
      eyebrow: "Tokens",
      title: "La única fuente de verdad del producto.",
      description:
        "Estos son los valores reales en producción: la misma paleta y escala tipográfica (Poppins) usadas en todas las páginas de Clint.",
      colorsLabel: "Colores",
      colors: [
        { name: "Fondo", hex: "#060309" },
        { name: "Panel oscuro", hex: "#0d0d12" },
        { name: "Púrpura CTA", hex: "#2d1c7f" },
        { name: "Magenta insignia", hex: "#a600ff" },
        { name: "Púrpura ícono", hex: "#8800ff" },
        { name: "Azul badge", hex: "#3739ad" },
        { name: "Lila stat", hex: "#d1a6ff" },
        { name: "Lila número", hex: "#a787ff" },
        { name: "Verde ícono", hex: "#B6FFC1" },
        { name: "Verde chip", hex: "#43d97b" },
      ],
      gradientsLabel: "Degradados",
      gradients: [
        { name: "barra hero", css: "linear-gradient(90deg, #CF75FF 0%, #A1D8FF 50%, #E95BFF 100%)" },
        { name: "barra estándar", css: "linear-gradient(100deg, #CF75FF 0%, #FF9D5C 30%, #A1D8FF 70%, #7B9BFF 100%)" },
        { name: "marco sección 3", css: "linear-gradient(115deg, #A85FFF 0%, #E95BFF 40%, #8FB4FF 75%, #6AA6FF 100%)" },
      ],
      typographyLabel: "Tipografía · Poppins",
      typeScale: [
        { label: "H1 Hero", size: "52px" },
        { label: "H2 Sección", size: "39px" },
        { label: "H3 Bloque", size: "24px" },
        { label: "Subtítulo", size: "17.5px" },
        { label: "Cuerpo", size: "13–15px" },
        { label: "Eyebrow / insignia", size: "12px caps" },
      ],
      systemNote:
        "Más allá de la identidad visual de Clint, esta es la capa que todo Design System bien construido agrega: una escala sistemática de espaciado, radio y sombra para que cualquier página nueva nazca consistente, sin decisiones ad-hoc.",
      spacingLabel: "Espaciado",
      gridLabel: "Grid y contenedor",
      grid: [
        { label: "Contenedor máximo", value: "1200px" },
        { label: "Gutter", value: "24px" },
        { label: "Respiro entre secciones", value: "96px (72px en bloques compactos)" },
      ],
      radiusLabel: "Radios",
      radius: [
        { name: "xs", px: 8 },
        { name: "sm", px: 12 },
        { name: "md (icon-box)", px: 16 },
        { name: "lg (card)", px: 20 },
        { name: "xl (bloque oscuro)", px: 24 },
        { name: "2xl (full-width)", px: 28 },
        { name: "pill (CTA)", px: 999 },
      ],
      shadowsLabel: "Sombras",
      shadows: [
        { name: "sm", css: "0 1px 3px rgba(0,0,0,.3), 0 4px 16px rgba(0,0,0,.35)" },
        { name: "md", css: "0 14px 40px -14px rgba(0,0,0,.5)" },
        { name: "lg", css: "0 34px 80px -24px rgba(0,0,0,.6)" },
        { name: "brand", css: "0 8px 28px -10px rgba(166,0,255,.5)" },
      ],
    },
    ch05: {
      ariaLabel: "Componentes del design system",
      eyebrow: "Componentes",
      title: "Un componente, todas las páginas.",
      description:
        "Edita un archivo en componentes/ y el cambio aparece en cada página que lo usa. Estas son recreaciones fieles de los componentes reales en producción, misma paleta, mismo comportamiento, y cada campaña nueva lo hereda sin esperar handoff.",
      panels: [
        {
          name: "BotonCTA",
          file: "componentes/BotonCTA.dc.html",
          description:
            "Props: etiqueta, insignia, variante (primario | contorno). El primario usa un degradado púrpura con glow; el contorno se reserva para acciones secundarias.",
        },
        {
          name: "BarraPrompt",
          file: "componentes/BarraPrompt.dc.html",
          description:
            "Barra de prompt con borde en degradado y escritura animada: la misma pieza se repite en el hero y dentro del producto.",
        },
        {
          name: "ChipAgente",
          file: "componentes/ChipAgente.dc.html",
          description:
            "Props: etiqueta, variante (compacto | grande), ícono. Se usa para sugerencias rápidas de acción en toda la plataforma.",
        },
        {
          name: "GloboChat",
          file: "componentes/GloboChat.dc.html",
          description:
            "Globo de conversación con avatar circular o cuadrado: la pieza visual que sostiene toda la narrativa de producto en torno a WhatsApp.",
        },
      ],
      ctaCreateAgent: "Crea un agente de Preventa",
      ctaBadgeNew: "nuevo",
      ctaDownloadApp: "Descargar app",
      chipSalesFunnel: "Crea un embudo de ventas",
      chipAttendContacts: "Atender contactos",
      chatMessage: "Quiero saber cómo funciona",
      chatTime: "22:45",
    },
    ch06: {
      ariaLabel: "Componentes de IA del design system",
      eyebrow: "Componentes de IA",
      title: "Un vocabulario propio para explicar la IA sin volverse un chatbot genérico.",
      description:
        "Cada producto de IA de Clint necesita comunicar la misma promesa de formas distintas. En vez de reinventar en cada página, el sistema tiene tres piezas reutilizables para eso.",
      signatureTitle: "Firma de IA",
      signatureTag: "data-ai-intro",
      signatureDescription:
        "La frase que resume la promesa del producto antes de cualquier prueba: la persona describe, Clint ejecuta.",
      cloudTitle: "Nube de comandos",
      cloudTag: "CSS puro · sin JS",
      cloudDescription:
        "Muestra la amplitud de la IA sin apilar cards: tres carriles de comandos reales atraviesan la marca, pausando al pasar el cursor.",
      meetingTitle: "Inteligencia de reuniones",
      meetingTag: "texto + producto",
      meetingDescription:
        'Convierte una promesa abstracta ("la IA analiza tus reuniones") en producto visible: transcripción, puntaje e insight juntos, sin depender de video.',
      meetingPoints: [
        "La objeción que más aparece y frena la venta.",
        "Los próximos pasos acordados con cada lead.",
        "El patrón de las llamadas que más convierten.",
      ],
    },
    ch07: {
      ariaLabel: "Gobernanza del design system",
      eyebrow: "Gobernanza",
      title: "Un Design System no es solo UI. Es la regla de quién puede cambiar qué.",
      description:
        "En el sistema de Clint, cada componente lleva un estado, una fuente de verdad y una auditoría automática. Es esa disciplina, no la paleta en sí, la que se extiende a cualquier producto nuevo.",
      statesLabel: "Estados de un componente",
      states: [
        { label: "experimental", desc: "Puede cambiar. No usarlo como dependencia central sin avisar." },
        { label: "stable", desc: "Contrato público. Un cambio incompatible exige una versión mayor." },
        { label: "deprecated", desc: "Sigue funcionando durante la migración y señala el sustituto." },
        { label: "removed", desc: "Ya no existe en la implementación; permanece solo en el changelog." },
      ],
      gateLabel: "Definition of Done para cualquier cambio",
      gate: [
        "Usa tokens y componentes existentes, o documenta por qué se necesita un nuevo contrato.",
        "Actualiza la implementación canónica, nunca solo la demostración.",
        "Actualiza el registro al agregar, renombrar o eliminar un componente.",
        "Actualiza la vitrina cuando cambia la apariencia, la anatomía o el uso.",
        "Actualiza el changelog cuando afecta a quien consume el sistema.",
        "Pasa la auditoría automática de sincronización.",
      ],
      debtLabel: "La deuda técnica solo puede bajar",
      debtDescription:
        "Un color escrito a mano en vez de un token es deuda. En vez de fingir que no existe, una línea base congela el número actual: nunca puede subir, y cada reducción se convierte en una línea del changelog.",
      debtTableHeaders: {
        file: "Archivo",
        hardcodedColors: "Colores hardcodeados",
        exposedPrimitives: "Primitivas expuestas",
      },
      debtRows: [
        { file: "components.css", colors: 15, primitives: 23 },
        { file: "effects.css", colors: 9, primitives: 0 },
        { file: "lp.js", colors: 2, primitives: 0 },
      ],
      experimentNote:
        'No todo experimento sobrevive. Una versión inicial de "integraciones" se probó en la vitrina, se marcó para reemplazo y nunca llegó a entrar en el registro oficial. El sistema documentó el cambio en vez de esconder el intento.',
    },
    ch08: {
      ariaLabel: "Design System conectado a Growth",
      eyebrow: "Design System conectado a Growth",
      title: "Un Design System solo importa si acelera el próximo experimento.",
      description:
        "Esa es la diferencia entre un caso genérico de Design System y un caso alineado con el posicionamiento de Growth: el sistema existe para que cada campaña nueva empiece a mitad de camino.",
      nodes: ["Design System", "Componentes reutilizables", "Landing / Campaña", "Experimento", "Aprendizaje", "Iteración"],
    },
    ch09: {
      ariaLabel: "Puente entre diseño y desarrollo",
      eyebrow: "Figma → Storybook",
      title: "El puente entre diseño y desarrollo.",
      description:
        "Tokens y variantes nacen en Figma y se convierten en la referencia que el equipo de desarrollo consulta para implementar cada componente. El objetivo es colaboración, no una integración automatizada entre las herramientas.",
      nodes: ["Figma", "Tokens", "Componente", "Storybook", "Producto"],
    },
    tokenLayers: {
      ariaLabel: "Capas de tokens",
      eyebrow: "Arquitectura de tokens",
      title: "Tres capas, una decisión a la vez.",
      description: "Los primitivos guardan el valor bruto, los semánticos dicen para qué sirven y los de componente lo amarran a la pieza. Cambiar el tema es cambiar una capa, no buscar hex en el código.",
      layers: [{ name: "Primitivo", hint: "valor bruto" }, { name: "Semántico", hint: "intención de uso" }, { name: "Componente", hint: "aplicado a la pieza" }],
      contrastLabel: "Contraste WCAG",
      passLabel: "Pasa AA",
      failLabel: "Reprueba",
      contrastNote: "Calculado en vivo desde los tokens. El morado de la marca no pasa como texto sobre oscuro, por eso existe un token de texto aparte.",
    },
    playground: {
      ariaLabel: "Playground de componentes",
      eyebrow: "Playground",
      title: "Componentes vivos, en todos sus estados.",
      description: "No son capturas: cada pieza de abajo es código corriendo. Cambia estado, variante y tamaño, mira la anatomía y el código que recibe ingeniería.",
      componentsLabel: "Componentes",
      stateLabel: "Estado",
      variantLabel: "Variante",
      sizeLabel: "Tamaño",
      anatomyLabel: "Mostrar anatomía",
      codeLabel: "Código",
      tokensLabel: "Tokens usados",
      states: {"default": "Por defecto", "hover": "Hover", "focus": "Foco", "disabled": "Deshabilitado", "loading": "Cargando", "error": "Error"},
      demo: {"button": "Crear agente", "inputLabel": "Correo de trabajo", "inputPlaceholder": "tu@empresa.com", "inputHelp": "Se usa para enviar la invitación.", "inputError": "Ingresa un correo válido.", "selectLabel": "Etapa del embudo", "selectOptions": ["Prospección", "Calificación", "Negociación"], "switchLabel": "Atención por IA", "checkboxLabel": "Notificar al vendedor", "badges": ["Activo", "Borrador", "Pausado", "Error"], "toastTitle": "Agente publicado", "toastBody": "Clara ya está atendiendo en WhatsApp.", "tabs": ["Resumen", "Configurar", "Probar"], "tooltip": "Duplicar agente", "modalTitle": "¿Pausar automatización?", "modalBody": "El agente deja de responder y las conversaciones vuelven al equipo.", "modalConfirm": "Pausar", "modalCancel": "Cancelar", "emptyTitle": "Aún no hay agentes", "emptyBody": "Crea el primero y empieza a atender en minutos."},
      ctaTitle: "¿Quieres ver el sistema por dentro?",
      ctaDescription: "Te muestro el archivo de Figma, la documentación y cómo lo usa el equipo en el día a día en una llamada corta.",
      ctaPrimary: "Agendar llamada",
      ctaSecondary: "Descargar CV",
    },
    ch10: {
      ariaLabel: "Resultado del sistema",
      eyebrow: "Resultado",
      title: "Un sistema compartido hace que cada página nueva nazca más rápido.",
      description:
        "Tokens y componentes listos eliminan la decisión visual repetida en cada página nueva, y eso también cambia cómo trabajan los agentes de IA dentro del proyecto.",
      speedCaption: "más rápido para construir la misma página",
      speedSource:
        "Estudio controlado de Sparkbox: 8 desarrolladores construyeron el mismo formulario dos veces, una desde cero y otra reutilizando el Design System Carbon de IBM.",
      timeComparison: [
        { label: "Desde cero", value: "4h12" },
        { label: "Con Design System", value: "2h" },
      ],
      aiTokensCaption: "menos tokens para que un agente de IA genere la misma interfaz",
      aiTokensSource:
        "Estimación propia, no un estudio publicado: escribir una sección desde cero (colores, espaciado, estados, responsive) cuesta 1.200–2.000 tokens; importar un componente ya listo cuesta 150–300.",
    },
    nextCase: {
      eyebrow: "Ver otro caso",
      title: "01 · Acquire: diseñando el viaje de adquisición de Clint.",
      description: "CRO y Product Design transformando puntos de contacto en conversión.",
    },
  },
};

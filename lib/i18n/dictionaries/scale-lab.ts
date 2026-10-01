import type { Locale } from "@/lib/i18n/types";

/* Textos do Scale reconstruído (capítulos interativos). */
export type ScaleLabDictionary = ScaleLabB & ScaleLabC & {
  hero: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    invite: string;
    scrollHint: string;
    atoms: string[];
    token: string;
    chain: string[];
    message: string;
    team: string;
  };
  before: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    beforeLabel: string;
    afterLabel: string;
    button: string;
    cardTitle: string;
    cardBody: string;
    input: string;
    chain: string[];
    conclusion: string;
  };
  arch: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    layers: { name: string; hint: string }[];
    productLabel: string;
    chainLabel: string;
    usedIn: Record<string, string>;
    conclusion: string;
  };
  wow: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    controls: { accent: string; radius: string; space: string; type: string; motion: string; easing: string; reset: string; replay: string };
    easings: { ease: string; out: string; spring: string };
    ui: {
      nav: string[];
      pipeline: string;
      agent: string;
      cols: string[];
      leads: { name: string; co: string }[];
      chatIn: string;
      chatOut: string;
      cta: string;
      link: string;
      badge: string;
      toggle: string;
      agentName: string;
      online: string;
      running: string;
      inputPh: string;
    };
    contrastLabel: string;
    conclusion: string;
  };
};

export type ScaleLabC = {
  ai: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    promptLabel: string;
    promptPh: string;
    promptDefault: string;
    run: string;
    reset: string;
    status: { thinking: string; processing: string; complete: string };
    steps: { label: string; value: string }[];
    agentRole: string;
    agentName: string;
    action: string;
    insight: string;
    kitLabel: string;
    kit: string[];
    contextTitle: string;
    contextBody: string;
    without: string;
    with: string;
    withoutPrompt: string;
    withPrompt: string;
    withoutTags: string[];
    withTags: string[];
    conclusion: string;
  };
  growth: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    blocks: Record<"hero" | "cta" | "card" | "form" | "proof" | "badge", { label: string; options: string[] }>;
    lp: { badge: string; heroTitle: string; heroTitleB: string; heroBody: string; cta: string; ctaB: string; cards: { title: string; body: string }[]; formTitle: string; formName: string; formEmail: string; formPhone: string; formSubmit: string; proof: string; proofSource: string };
    reuseLabel: string;
    conclusion: string;
  };
};

export type ScaleLabB = {
  lab: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    tabs: { components: string; spacing: string; anatomy: string };
    categories: { actions: string; forms: string; navigation: string; feedback: string; data: string };
    aiNote: string;
    spacing: { title: string; body: string; hint: string; cardTitle: string; cardBody: string; cta: string; padding: string; conclusion: string };
    anatomy: { hint: string; parts: Record<"icon" | "label" | "padding" | "radius" | "type" | "focus", { name: string; token: string; note: string }>; button: string; conclusion: string };
  };
  a11y: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    realLabel: string;
    checkerLabel: string;
    fgLabel: string;
    bgLabel: string;
    sample: string;
    normal: string;
    large: string;
    pass: string;
    fail: string;
    message: string;
    note: string;
  };
};

export const scaleLab: Record<Locale, ScaleLabDictionary> = {
  pt: {
    ai: {
      ariaLabel: "Componentes e playground de IA",
      eyebrow: "IA no sistema",
      title: "A IA também precisa de componentes.",
      description: "Prompt, status, agente, ação e insight são peças do sistema, não telas soltas. Peça um agente e veja a interface se montar com elas.",
      promptLabel: "O que você quer construir?",
      promptPh: "Descreva o agente",
      promptDefault: "Crie um agente de IA de vendas",
      run: "Gerar",
      reset: "Recomeçar",
      status: { thinking: "Entendendo…", processing: "Configurando…", complete: "Pronto" },
      steps: [
        { label: "Tipo de agente", value: "Vendas" },
        { label: "Canal", value: "WhatsApp" },
        { label: "Objetivo", value: "Qualificação de leads" },
        { label: "Status", value: "Pronto" },
      ],
      agentRole: "Agente de vendas · WhatsApp",
      agentName: "Clara",
      action: "Publicar agente",
      insight: "Sugestão: conectar ao funil Vendas · Funil IA para mover leads qualificados.",
      kitLabel: "Componentes usados",
      kit: ["AI Prompt", "AI Status", "AI Response", "AI Agent", "AI Action", "Insight"],
      contextTitle: "IA precisa de contexto de design.",
      contextBody: "O mesmo pedido, com e sem o sistema. Sem tokens e componentes, cada geração inventa uma interface nova.",
      without: "Sem sistema",
      with: "Com sistema",
      withoutPrompt: "Crie uma landing page.",
      withPrompt: "Use os tokens e componentes do produto.",
      withoutTags: ["Cores diferentes", "Espaçamento diferente", "Componentes diferentes"],
      withTags: ["Mesmas cores", "Mesmo espaçamento", "Mesmos componentes", "Mesmo comportamento"],
      conclusion: "Com o sistema, a IA gera dentro das mesmas decisões.",
    },
    growth: {
      ariaLabel: "Growth: montador de campanha",
      eyebrow: "Growth",
      title: "Monte uma campanha.",
      description: "Escolha as peças e a landing page se monta com os componentes do sistema. Nada é desenhado do zero.",
      blocks: {
        hero: { label: "Hero", options: ["Centralizado", "Dividido"] },
        cta: { label: "CTA", options: ["Primário", "Contorno"] },
        card: { label: "Card", options: ["Benefícios", "Passos"] },
        form: { label: "Form", options: ["Compacto", "Completo"] },
        proof: { label: "Social proof", options: ["Mostrar", "Ocultar"] },
        badge: { label: "Badge", options: ["Novo", "Ao vivo"] },
      },
      lp: {
        badge: "Novo",
        heroTitle: "Seu WhatsApp vendendo com IA.",
        heroTitleB: "Atendimento que qualifica sozinho.",
        heroBody: "Agentes que respondem, qualificam e agendam, direto no CRM.",
        cta: "Quero participar",
        ctaB: "Ver como funciona",
        cards: [
          { title: "Responde na hora", body: "O agente atende 24h." },
          { title: "Qualifica", body: "Só chega lead pronto." },
          { title: "Agenda", body: "A reunião cai no CRM." },
        ],
        formTitle: "Garanta sua vaga",
        formName: "Nome",
        formEmail: "E-mail",
        formPhone: "WhatsApp",
        formSubmit: "Inscrever",
        proof: "1.680 inscrições em 4 dias",
        proofSource: "Resultado real da campanha WhatsApp Next",
      },
      reuseLabel: "Componentes reaproveitados",
      conclusion: "Componentes reutilizáveis transformam decisões de design em ativos de growth reutilizáveis.",
    },
    lab: {
      ariaLabel: "System Lab: componentes, espaçamento e anatomia",
      eyebrow: "System Lab",
      title: "Explore as peças do sistema.",
      description: "Componentes vivos em todos os estados, o espaçamento medido e a anatomia de um botão. Escolha uma aba.",
      tabs: { components: "Componentes", spacing: "Espaçamento", anatomy: "Anatomia" },
      categories: { actions: "Actions", forms: "Forms", navigation: "Navigation", feedback: "Feedback", data: "Data display" },
      aiNote: "Os componentes de IA têm um capítulo próprio, mais abaixo.",
      spacing: { title: "Uma escala, não um palpite.", body: "Cada distância vem da mesma escala de 4 em 4. Escolha um valor e veja onde ele aparece no card.", hint: "Escolha um token de espaço", cardTitle: "Agente de Pré-vendas", cardBody: "Qualifica leads no WhatsApp e agenda a reunião com o vendedor.", cta: "Criar agente", padding: "padding", conclusion: "O mesmo valor, nos mesmos lugares, em todas as telas." },
      anatomy: {
        hint: "Clique em uma parte para ver o token",
        button: "Criar agente",
        parts: {
          icon: { name: "Icon", token: "icon.size.md · 16px", note: "Tamanho fixo, alinhado ao centro da linha de texto." },
          label: { name: "Label", token: "button.primary.fg", note: "Texto sobre o accent: 6.28:1, passa AA." },
          padding: { name: "Padding", token: "space.4 · space.6", note: "16px na vertical, 24px na horizontal." },
          radius: { name: "Radius", token: "radius.full", note: "Pílula: o CTA principal sempre tem a mesma forma." },
          type: { name: "Typography", token: "font.label.md · 600", note: "Peso 600 para ação, nunca o mesmo do corpo de texto." },
          focus: { name: "Focus", token: "focus.ring · accent.text", note: "Anel visível no teclado, com espaço entre o botão e o anel." },
        },
        conclusion: "Um botão é um conjunto de decisões. O sistema guarda todas elas.",
      },
    },
    a11y: {
      ariaLabel: "Acessibilidade no sistema",
      eyebrow: "Acessibilidade",
      title: "Acessibilidade faz parte do sistema.",
      description: "O contraste é calculado a partir dos tokens, não conferido no fim. Estes são os pares reais do Scale.",
      realLabel: "Pares reais do sistema",
      checkerLabel: "Teste qualquer par",
      fgLabel: "Texto (foreground)",
      bgLabel: "Fundo (background)",
      sample: "Qualificar lead",
      normal: "Texto normal",
      large: "Texto grande",
      pass: "passa",
      fail: "reprova",
      message: "Cor da marca não é automaticamente cor de texto.",
      note: "Cálculo WCAG 2.x feito ao vivo: AA pede 4.5:1 para texto normal e 3:1 para texto grande; AAA pede 7:1.",
    },
    hero: {
      ariaLabel: "Apresentação do case Scale",
      eyebrow: "03 · Scale Design System · Clint",
      title: "SCALE",
      subtitle: "Um design system feito para escalar decisões de produto.",
      invite: "Explore o sistema. Mude. Construa com ele.",
      scrollHint: "Role para montar o sistema",
      atoms: ["COLOR", "TYPE", "SPACE", "RADIUS", "MOTION"],
      token: "TOKEN",
      chain: ["BUTTON", "CARD", "PAGE", "PRODUCT"],
      message: "Toda interface começa com uma decisão.",
      team: "Time: 2 product designers.",
    },
    before: {
      ariaLabel: "Antes e depois do sistema",
      eyebrow: "O problema",
      title: "Antes do sistema",
      description: "Cada página nova trazia o seu próprio botão, o seu card e o seu input. Pequenas diferenças de cor, raio, padding e tipografia que somadas viram retrabalho.",
      beforeLabel: "Antes",
      afterLabel: "Depois",
      button: "Criar agente",
      cardTitle: "Novo lead",
      cardBody: "Chegou pelo WhatsApp",
      input: "E-mail de trabalho",
      chain: ["TOKENS", "COMPONENTS", "PATTERNS", "PRODUCT"],
      conclusion: "Depois do sistema, as mesmas peças nascem das mesmas decisões.",
    },
    arch: {
      ariaLabel: "Arquitetura de tokens",
      eyebrow: "Arquitetura de tokens",
      title: "Decisão, regra, sistema, produto.",
      description: "Primitivos guardam o valor. Semânticos dizem para que ele serve. Os de componente aplicam na peça. Clique em um token e siga a decisão até o produto.",
      layers: [
        { name: "Primitive", hint: "valor bruto" },
        { name: "Semantic", hint: "intenção de uso" },
        { name: "Component", hint: "aplicado na peça" },
      ],
      productLabel: "Interface Clint",
      chainLabel: "Caminho da decisão",
      usedIn: {
        "button.primary.bg": "Fundo do botão Criar agente",
        "button.primary.fg": "Texto do botão Criar agente",
        "link.fg": "Link Ver conversa",
        "card.bg": "Fundo do card de lead",
        "caption.fg": "Legenda do card",
      },
      conclusion: "Trocar o tema é mudar uma camada, não caçar hex no código.",
    },
    wow: {
      ariaLabel: "Playground de tokens: o sistema é a interface",
      eyebrow: "Mude o sistema",
      title: "O sistema é a interface.",
      description: "Mude um token e veja a interface inteira responder: botões, badges, links, cards, navegação e conversa.",
      controls: { accent: "accent.solid", radius: "radius", space: "space (base)", type: "type scale", motion: "motion.duration", easing: "motion.easing", reset: "Restaurar", replay: "Ver o movimento" },
      easings: { ease: "Ease", out: "Ease out", spring: "Spring" },
      ui: {
        nav: ["Negócios", "Conversas", "Agentes", "Relatórios"],
        pipeline: "Vendas · Funil IA",
        agent: "Agente de IA",
        cols: ["Qualificação", "Follow-up", "Ganho"],
        leads: [
          { name: "Ana Beatriz", co: "Studio Lumi" },
          { name: "Carlos Mendes", co: "Nexo Digital" },
          { name: "Juliana Prado", co: "Vertical 360" },
        ],
        chatIn: "Oi, quero saber como funciona.",
        chatOut: "Claro! Posso te mostrar em 2 minutos?",
        cta: "Criar agente",
        link: "Ver conversa",
        badge: "novo",
        toggle: "Qualificação automática",
        agentName: "Clara",
        online: "online",
        running: "Rodando automaticamente",
        inputPh: "Digite uma mensagem…",
      },
      contrastLabel: "fg.default / accent.solid",
      conclusion: "Um token. Muitas decisões.",
    },
  },
  en: {
    ai: {
      ariaLabel: "AI components and playground",
      eyebrow: "AI in the system",
      title: "AI needs components too.",
      description: "Prompt, status, agent, action and insight are system pieces, not one-off screens. Ask for an agent and watch the interface assemble itself from them.",
      promptLabel: "What do you want to build?",
      promptPh: "Describe the agent",
      promptDefault: "Create a sales AI agent",
      run: "Generate",
      reset: "Start over",
      status: { thinking: "Understanding…", processing: "Setting up…", complete: "Ready" },
      steps: [
        { label: "Agent type", value: "Sales" },
        { label: "Channel", value: "WhatsApp" },
        { label: "Goal", value: "Lead qualification" },
        { label: "Status", value: "Ready" },
      ],
      agentRole: "Sales agent · WhatsApp",
      agentName: "Clara",
      action: "Publish agent",
      insight: "Suggestion: connect it to the Sales · AI funnel to move qualified leads.",
      kitLabel: "Components used",
      kit: ["AI Prompt", "AI Status", "AI Response", "AI Agent", "AI Action", "Insight"],
      contextTitle: "AI needs design context.",
      contextBody: "The same request, with and without the system. Without tokens and components, every generation invents a new interface.",
      without: "Without system",
      with: "With system",
      withoutPrompt: "Create a landing page.",
      withPrompt: "Use the product tokens and components.",
      withoutTags: ["Different colors", "Different spacing", "Different components"],
      withTags: ["Shared colors", "Shared spacing", "Shared components", "Shared behavior"],
      conclusion: "With the system, AI generates inside the same decisions.",
    },
    growth: {
      ariaLabel: "Growth: campaign builder",
      eyebrow: "Growth",
      title: "Build a campaign.",
      description: "Pick the pieces and the landing page assembles itself from system components. Nothing is drawn from scratch.",
      blocks: {
        hero: { label: "Hero", options: ["Centered", "Split"] },
        cta: { label: "CTA", options: ["Primary", "Outline"] },
        card: { label: "Card", options: ["Benefits", "Steps"] },
        form: { label: "Form", options: ["Compact", "Full"] },
        proof: { label: "Social proof", options: ["Show", "Hide"] },
        badge: { label: "Badge", options: ["New", "Live"] },
      },
      lp: {
        badge: "New",
        heroTitle: "Your WhatsApp selling with AI.",
        heroTitleB: "Support that qualifies on its own.",
        heroBody: "Agents that reply, qualify and book meetings, right inside the CRM.",
        cta: "Join now",
        ctaB: "See how it works",
        cards: [
          { title: "Replies instantly", body: "The agent works 24/7." },
          { title: "Qualifies", body: "Only ready leads get through." },
          { title: "Books", body: "The meeting lands in the CRM." },
        ],
        formTitle: "Save your spot",
        formName: "Name",
        formEmail: "Email",
        formPhone: "WhatsApp",
        formSubmit: "Sign up",
        proof: "1,680 sign-ups in 4 days",
        proofSource: "Real result from the WhatsApp Next campaign",
      },
      reuseLabel: "Reused components",
      conclusion: "Reusable components turn design decisions into reusable growth assets.",
    },
    lab: {
      ariaLabel: "System Lab: components, spacing and anatomy",
      eyebrow: "System Lab",
      title: "Explore the pieces of the system.",
      description: "Live components in every state, measured spacing and the anatomy of a button. Pick a tab.",
      tabs: { components: "Components", spacing: "Spacing", anatomy: "Anatomy" },
      categories: { actions: "Actions", forms: "Forms", navigation: "Navigation", feedback: "Feedback", data: "Data display" },
      aiNote: "AI components have their own chapter, further down.",
      spacing: { title: "A scale, not a guess.", body: "Every distance comes from the same 4-step scale. Pick a value and see where it shows up in the card.", hint: "Pick a space token", cardTitle: "Pre-sales agent", cardBody: "Qualifies leads on WhatsApp and books the meeting with the sales rep.", cta: "Create agent", padding: "padding", conclusion: "The same value, in the same places, on every screen." },
      anatomy: {
        hint: "Click a part to see its token",
        button: "Create agent",
        parts: {
          icon: { name: "Icon", token: "icon.size.md · 16px", note: "Fixed size, centered on the text line." },
          label: { name: "Label", token: "button.primary.fg", note: "Text on accent: 6.28:1, passes AA." },
          padding: { name: "Padding", token: "space.4 · space.6", note: "16px vertical, 24px horizontal." },
          radius: { name: "Radius", token: "radius.full", note: "Pill: the main CTA always has the same shape." },
          type: { name: "Typography", token: "font.label.md · 600", note: "Weight 600 for actions, never the same as body text." },
          focus: { name: "Focus", token: "focus.ring · accent.text", note: "Visible ring on keyboard, with space between button and ring." },
        },
        conclusion: "A button is a set of decisions. The system keeps all of them.",
      },
    },
    a11y: {
      ariaLabel: "Accessibility in the system",
      eyebrow: "Accessibility",
      title: "Accessibility is part of the system.",
      description: "Contrast is calculated from the tokens, not checked at the end. These are the real Scale pairs.",
      realLabel: "Real system pairs",
      checkerLabel: "Test any pair",
      fgLabel: "Text (foreground)",
      bgLabel: "Background",
      sample: "Qualify lead",
      normal: "Normal text",
      large: "Large text",
      pass: "pass",
      fail: "fail",
      message: "Brand color is not automatically text color.",
      note: "Live WCAG 2.x calculation: AA requires 4.5:1 for normal text and 3:1 for large text; AAA requires 7:1.",
    },
    hero: {
      ariaLabel: "Scale case introduction",
      eyebrow: "03 · Scale Design System · Clint",
      title: "SCALE",
      subtitle: "A design system built to make product decisions scalable.",
      invite: "Explore the system. Change it. Build with it.",
      scrollHint: "Scroll to assemble the system",
      atoms: ["COLOR", "TYPE", "SPACE", "RADIUS", "MOTION"],
      token: "TOKEN",
      chain: ["BUTTON", "CARD", "PAGE", "PRODUCT"],
      message: "Every interface starts with a decision.",
      team: "Team: 2 product designers.",
    },
    before: {
      ariaLabel: "Before and after the system",
      eyebrow: "The problem",
      title: "Before the system",
      description: "Every new page came with its own button, card and input. Small differences in color, radius, padding and typography that add up to rework.",
      beforeLabel: "Before",
      afterLabel: "After",
      button: "Create agent",
      cardTitle: "New lead",
      cardBody: "Came in via WhatsApp",
      input: "Work email",
      chain: ["TOKENS", "COMPONENTS", "PATTERNS", "PRODUCT"],
      conclusion: "After the system, the same pieces come from the same decisions.",
    },
    arch: {
      ariaLabel: "Token architecture",
      eyebrow: "Token architecture",
      title: "Decision, rule, system, product.",
      description: "Primitives hold the value. Semantics say what it is for. Component tokens apply it to the piece. Click a token and follow the decision to the product.",
      layers: [
        { name: "Primitive", hint: "raw value" },
        { name: "Semantic", hint: "intent" },
        { name: "Component", hint: "applied to the piece" },
      ],
      productLabel: "Clint interface",
      chainLabel: "Decision path",
      usedIn: {
        "button.primary.bg": "Create agent button background",
        "button.primary.fg": "Create agent button label",
        "link.fg": "View conversation link",
        "card.bg": "Lead card background",
        "caption.fg": "Card caption",
      },
      conclusion: "Changing the theme means changing one layer, not hunting hex codes.",
    },
    wow: {
      ariaLabel: "Token playground: the system is the interface",
      eyebrow: "Change the system",
      title: "The system is the interface.",
      description: "Change a token and watch the whole interface respond: buttons, badges, links, cards, navigation and conversation.",
      controls: { accent: "accent.solid", radius: "radius", space: "space (base)", type: "type scale", motion: "motion.duration", easing: "motion.easing", reset: "Reset", replay: "Play motion" },
      easings: { ease: "Ease", out: "Ease out", spring: "Spring" },
      ui: {
        nav: ["Deals", "Conversations", "Agents", "Reports"],
        pipeline: "Sales · AI funnel",
        agent: "AI agent",
        cols: ["Qualification", "Follow-up", "Won"],
        leads: [
          { name: "Ana Beatriz", co: "Studio Lumi" },
          { name: "Carlos Mendes", co: "Nexo Digital" },
          { name: "Juliana Prado", co: "Vertical 360" },
        ],
        chatIn: "Hi, I'd like to know how it works.",
        chatOut: "Sure! Can I show you in 2 minutes?",
        cta: "Create agent",
        link: "View conversation",
        badge: "new",
        toggle: "Automatic qualification",
        agentName: "Clara",
        online: "online",
        running: "Running automatically",
        inputPh: "Type a message…",
      },
      contrastLabel: "fg.default / accent.solid",
      conclusion: "One token. Many decisions.",
    },
  },
  es: {
    ai: {
      ariaLabel: "Componentes y playground de IA",
      eyebrow: "IA en el sistema",
      title: "La IA también necesita componentes.",
      description: "Prompt, estado, agente, acción e insight son piezas del sistema, no pantallas sueltas. Pide un agente y mira cómo se arma la interfaz con ellas.",
      promptLabel: "¿Qué quieres construir?",
      promptPh: "Describe el agente",
      promptDefault: "Crea un agente de IA de ventas",
      run: "Generar",
      reset: "Reiniciar",
      status: { thinking: "Entendiendo…", processing: "Configurando…", complete: "Listo" },
      steps: [
        { label: "Tipo de agente", value: "Ventas" },
        { label: "Canal", value: "WhatsApp" },
        { label: "Objetivo", value: "Calificación de leads" },
        { label: "Estado", value: "Listo" },
      ],
      agentRole: "Agente de ventas · WhatsApp",
      agentName: "Clara",
      action: "Publicar agente",
      insight: "Sugerencia: conectarlo al embudo Ventas · Embudo IA para mover leads calificados.",
      kitLabel: "Componentes usados",
      kit: ["AI Prompt", "AI Status", "AI Response", "AI Agent", "AI Action", "Insight"],
      contextTitle: "La IA necesita contexto de diseño.",
      contextBody: "El mismo pedido, con y sin el sistema. Sin tokens ni componentes, cada generación inventa una interfaz nueva.",
      without: "Sin sistema",
      with: "Con sistema",
      withoutPrompt: "Crea una landing page.",
      withPrompt: "Usa los tokens y componentes del producto.",
      withoutTags: ["Colores distintos", "Espaciado distinto", "Componentes distintos"],
      withTags: ["Mismos colores", "Mismo espaciado", "Mismos componentes", "Mismo comportamiento"],
      conclusion: "Con el sistema, la IA genera dentro de las mismas decisiones.",
    },
    growth: {
      ariaLabel: "Growth: armador de campaña",
      eyebrow: "Growth",
      title: "Arma una campaña.",
      description: "Elige las piezas y la landing page se arma con los componentes del sistema. Nada se dibuja desde cero.",
      blocks: {
        hero: { label: "Hero", options: ["Centrado", "Dividido"] },
        cta: { label: "CTA", options: ["Primario", "Contorno"] },
        card: { label: "Card", options: ["Beneficios", "Pasos"] },
        form: { label: "Form", options: ["Compacto", "Completo"] },
        proof: { label: "Social proof", options: ["Mostrar", "Ocultar"] },
        badge: { label: "Badge", options: ["Nuevo", "En vivo"] },
      },
      lp: {
        badge: "Nuevo",
        heroTitle: "Tu WhatsApp vendiendo con IA.",
        heroTitleB: "Atención que califica sola.",
        heroBody: "Agentes que responden, califican y agendan, directo en el CRM.",
        cta: "Quiero participar",
        ctaB: "Ver cómo funciona",
        cards: [
          { title: "Responde al instante", body: "El agente atiende 24h." },
          { title: "Califica", body: "Solo llega el lead listo." },
          { title: "Agenda", body: "La reunión cae en el CRM." },
        ],
        formTitle: "Asegura tu lugar",
        formName: "Nombre",
        formEmail: "Email",
        formPhone: "WhatsApp",
        formSubmit: "Inscribirme",
        proof: "1.680 inscripciones en 4 días",
        proofSource: "Resultado real de la campaña WhatsApp Next",
      },
      reuseLabel: "Componentes reutilizados",
      conclusion: "Los componentes reutilizables convierten decisiones de diseño en activos de growth reutilizables.",
    },
    lab: {
      ariaLabel: "System Lab: componentes, espaciado y anatomía",
      eyebrow: "System Lab",
      title: "Explora las piezas del sistema.",
      description: "Componentes vivos en todos los estados, el espaciado medido y la anatomía de un botón. Elige una pestaña.",
      tabs: { components: "Componentes", spacing: "Espaciado", anatomy: "Anatomía" },
      categories: { actions: "Actions", forms: "Forms", navigation: "Navigation", feedback: "Feedback", data: "Data display" },
      aiNote: "Los componentes de IA tienen su propio capítulo, más abajo.",
      spacing: { title: "Una escala, no una suposición.", body: "Cada distancia viene de la misma escala de 4 en 4. Elige un valor y mira dónde aparece en el card.", hint: "Elige un token de espacio", cardTitle: "Agente de Preventa", cardBody: "Califica leads en WhatsApp y agenda la reunión con el vendedor.", cta: "Crear agente", padding: "padding", conclusion: "El mismo valor, en los mismos lugares, en todas las pantallas." },
      anatomy: {
        hint: "Haz clic en una parte para ver el token",
        button: "Crear agente",
        parts: {
          icon: { name: "Icon", token: "icon.size.md · 16px", note: "Tamaño fijo, alineado al centro de la línea de texto." },
          label: { name: "Label", token: "button.primary.fg", note: "Texto sobre el accent: 6.28:1, pasa AA." },
          padding: { name: "Padding", token: "space.4 · space.6", note: "16px en vertical, 24px en horizontal." },
          radius: { name: "Radius", token: "radius.full", note: "Píldora: el CTA principal siempre tiene la misma forma." },
          type: { name: "Typography", token: "font.label.md · 600", note: "Peso 600 para acción, nunca el mismo del texto." },
          focus: { name: "Focus", token: "focus.ring · accent.text", note: "Anillo visible con teclado, con espacio entre el botón y el anillo." },
        },
        conclusion: "Un botón es un conjunto de decisiones. El sistema las guarda todas.",
      },
    },
    a11y: {
      ariaLabel: "Accesibilidad en el sistema",
      eyebrow: "Accesibilidad",
      title: "La accesibilidad es parte del sistema.",
      description: "El contraste se calcula a partir de los tokens, no se revisa al final. Estos son los pares reales de Scale.",
      realLabel: "Pares reales del sistema",
      checkerLabel: "Prueba cualquier par",
      fgLabel: "Texto (foreground)",
      bgLabel: "Fondo (background)",
      sample: "Calificar lead",
      normal: "Texto normal",
      large: "Texto grande",
      pass: "pasa",
      fail: "no pasa",
      message: "El color de marca no es automáticamente color de texto.",
      note: "Cálculo WCAG 2.x en vivo: AA pide 4.5:1 para texto normal y 3:1 para texto grande; AAA pide 7:1.",
    },
    hero: {
      ariaLabel: "Presentación del case Scale",
      eyebrow: "03 · Scale Design System · Clint",
      title: "SCALE",
      subtitle: "Un design system hecho para escalar decisiones de producto.",
      invite: "Explora el sistema. Cámbialo. Construye con él.",
      scrollHint: "Desplázate para armar el sistema",
      atoms: ["COLOR", "TYPE", "SPACE", "RADIUS", "MOTION"],
      token: "TOKEN",
      chain: ["BUTTON", "CARD", "PAGE", "PRODUCT"],
      message: "Toda interfaz empieza con una decisión.",
      team: "Equipo: 2 product designers.",
    },
    before: {
      ariaLabel: "Antes y después del sistema",
      eyebrow: "El problema",
      title: "Antes del sistema",
      description: "Cada página nueva traía su propio botón, su card y su input. Pequeñas diferencias de color, radio, padding y tipografía que sumadas se vuelven retrabajo.",
      beforeLabel: "Antes",
      afterLabel: "Después",
      button: "Crear agente",
      cardTitle: "Nuevo lead",
      cardBody: "Llegó por WhatsApp",
      input: "Email de trabajo",
      chain: ["TOKENS", "COMPONENTS", "PATTERNS", "PRODUCT"],
      conclusion: "Después del sistema, las mismas piezas nacen de las mismas decisiones.",
    },
    arch: {
      ariaLabel: "Arquitectura de tokens",
      eyebrow: "Arquitectura de tokens",
      title: "Decisión, regla, sistema, producto.",
      description: "Los primitivos guardan el valor. Los semánticos dicen para qué sirve. Los de componente lo aplican en la pieza. Haz clic en un token y sigue la decisión hasta el producto.",
      layers: [
        { name: "Primitive", hint: "valor bruto" },
        { name: "Semantic", hint: "intención de uso" },
        { name: "Component", hint: "aplicado en la pieza" },
      ],
      productLabel: "Interfaz Clint",
      chainLabel: "Camino de la decisión",
      usedIn: {
        "button.primary.bg": "Fondo del botón Crear agente",
        "button.primary.fg": "Texto del botón Crear agente",
        "link.fg": "Link Ver conversación",
        "card.bg": "Fondo del card de lead",
        "caption.fg": "Leyenda del card",
      },
      conclusion: "Cambiar el tema es cambiar una capa, no buscar hex en el código.",
    },
    wow: {
      ariaLabel: "Playground de tokens: el sistema es la interfaz",
      eyebrow: "Cambia el sistema",
      title: "El sistema es la interfaz.",
      description: "Cambia un token y mira cómo responde toda la interfaz: botones, badges, links, cards, navegación y conversación.",
      controls: { accent: "accent.solid", radius: "radius", space: "space (base)", type: "type scale", motion: "motion.duration", easing: "motion.easing", reset: "Restaurar", replay: "Ver el movimiento" },
      easings: { ease: "Ease", out: "Ease out", spring: "Spring" },
      ui: {
        nav: ["Negocios", "Conversaciones", "Agentes", "Reportes"],
        pipeline: "Ventas · Embudo IA",
        agent: "Agente de IA",
        cols: ["Calificación", "Seguimiento", "Ganado"],
        leads: [
          { name: "Ana Beatriz", co: "Studio Lumi" },
          { name: "Carlos Mendes", co: "Nexo Digital" },
          { name: "Juliana Prado", co: "Vertical 360" },
        ],
        chatIn: "Hola, quiero saber cómo funciona.",
        chatOut: "¡Claro! ¿Te lo muestro en 2 minutos?",
        cta: "Crear agente",
        link: "Ver conversación",
        badge: "nuevo",
        toggle: "Calificación automática",
        agentName: "Clara",
        online: "en línea",
        running: "Funcionando automáticamente",
        inputPh: "Escribe un mensaje…",
      },
      contrastLabel: "fg.default / accent.solid",
      conclusion: "Un token. Muchas decisiones.",
    },
  },
};

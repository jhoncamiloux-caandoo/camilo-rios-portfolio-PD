import type { Locale } from "@/lib/i18n/types";

/* Textos do Scale reconstruído (capítulos interativos). */
export type ScaleLabDictionary = {
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

export const scaleLab: Record<Locale, ScaleLabDictionary> = {
  pt: {
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

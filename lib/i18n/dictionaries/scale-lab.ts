import type { Locale } from "@/lib/i18n/types";

/* Textos do Scale reconstruído (capítulos interativos). */
export type ScaleLabDictionary = ScaleLabB & {
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

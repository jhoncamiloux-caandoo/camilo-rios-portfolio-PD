import type { Locale } from "@/lib/i18n/types";

export type AcquireDictionary = {
  ch01: {
    sectionAriaLabel: string;
    eyebrow: string;
    headingSegments: { text: string; highlight: boolean }[];
    headingAriaLabel: string;
    paragraph: string;
    ctaLabel: string;
    metrics: { value: number; suffix?: string; label: string }[];
    imageAlt: string;
    scrollLabel: string;
  };
  ch02: {
    sectionAriaLabel: string;
    eyebrow: string;
    title: string;
    paragraph: string;
    funnel: { value: number; prefix?: string; suffix?: string; decimals?: number; label: string }[];
    footnote: string;
    title2: string;
    paragraph2: string;
  };
  ch03: {
    sectionAriaLabel: string;
    eyebrow: string;
    title: string;
    paragraph: string;
    facts: { label: string; value: string; span?: boolean }[];
  };
  ch04: {
    sectionAriaLabel: string;
    eyebrow: string;
    title: string;
    intro: string;
    frictions: string[];
    flowNodes: string[];
  };
  ch05: {
    sectionAriaLabel: string;
    eyebrow: string;
    title: string;
    paragraph: string;
    questions: string[];
    steps: { title: string; description: string }[];
  };
  ch06: {
    sectionAriaLabel: string;
    eyebrow: string;
    title: string;
    paragraph: string;
    insights: { n: string; title: string; description: string }[];
  };
  ch07: {
    sectionAriaLabel: string;
    eyebrow: string;
    title: string;
    paragraph: string;
    flowNodes: string[];
    pillars: { title: string; description: string }[];
  };
  ownership: {
    sectionAriaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: { tag: string; title: string; body: string }[];
    videoTitle: string;
    videoCaption: string;
  };
  ch08: {
    sectionAriaLabel: string;
    eyebrow: string;
    title: string;
    paragraph: string;
    sections: { name: string; decision: string; hypothesis: string }[];
    hypothesisLabel: string;
    sketchFocusSuffix: string;
    closing: string;
  };
  ch09: {
    sectionAriaLabel: string;
    eyebrow: string;
    title: string;
    paragraph: string;
    quote: string;
    journey: { label: string; cta: boolean }[];
    journeyCaption: string;
    closing: string;
  };
  ch10: {
    sectionAriaLabel: string;
    eyebrow: string;
    title: string;
    paragraph: string;
    chatHeaderTitle: string;
    chatHeaderStatus: string;
    chat: { from: "bot" | "user"; text: string }[];
    scheduleTitle: string;
    scheduleSubtitle: string;
    scheduleCta: string;
    chatCaption: string;
    qualifiersLabel: string;
    qualifiers: { label: string; value: string }[];
    pipeline: string[];
    resultParagraph: string;
    screenshotAlt: string;
    screenshotCaption: string;
  };
  ch11: {
    sectionAriaLabel: string;
    eyebrow: string;
    title: string;
    paragraph: string;
    gaCardTitle: string;
    gaCardTag: string;
    gaCardCaption: string;
    clarityCardTitle: string;
    clarityCardTag: string;
    clarityCardCaption: string;
    insights: { tool: string; finding: string }[];
    cycle: string[];
    newHypothesisLabel: string;
    closing: string;
  };
  ch12: {
    sectionAriaLabel: string;
    eyebrow: string;
    title: string;
    bigNumberCaption: string;
    barLabelLeft: string;
    barLabelRight: string;
    paragraph: string;
    ctaLabel: string;
  };
  nextCase: { eyebrow: string; title: string; description: string };
};

export const acquire: Record<Locale, AcquireDictionary> = {
  pt: {
    ch01: {
      sectionAriaLabel: "Apresentação do case Acquire",
      eyebrow: "01 · Acquire",
      headingSegments: [
        { text: "Como um único produto digital concentrou ", highlight: false },
        { text: "79% da demanda", highlight: true },
        { text: " da operação comercial.", highlight: false },
      ],
      headingAriaLabel:
        "Como um único produto digital concentrou 79% da demanda da operação comercial.",
      paragraph:
        "Mais do que criar uma landing page, o objetivo foi desenhar uma experiência capaz de transformar tráfego pago em conversas qualificadas.",
      ctaLabel: "Ver o processo",
      metrics: [
        { value: 37, suffix: "%", label: "Conversão" },
        { value: 10722, label: "Conversas" },
        { value: 79, suffix: "%", label: "da demanda" },
      ],
      imageAlt: "Landing Page Clint: Agente de IA para Vendas no WhatsApp",
      scrollLabel: "Scroll",
    },
    ch02: {
      sectionAriaLabel: "Impacto do projeto",
      eyebrow: "Antes do processo",
      title: "O impacto vem antes do processo.",
      paragraph:
        "Estes números não são o objetivo do case, são a consequência de decisões de Product Design que estão detalhadas a seguir.",
      funnel: [
        { value: 28967, label: "cliques nas campanhas de mídia paga" },
        { value: 10722, label: "conversas iniciadas pelo WhatsApp" },
        { value: 37, suffix: "%", label: "de taxa de conversão" },
        { value: 1.27, prefix: "R$ ", decimals: 2, label: "por conversa iniciada" },
        { value: 79, suffix: "%", label: "de toda a demanda da operação" },
      ],
      footnote:
        "Medido via Google Analytics e Meta Ads em um mês de uma campanha específica de IA no WhatsApp. Números acompanhados semanalmente pelo gestor de tráfego e revisados mensalmente em reunião real com tráfego pago, dados e os designers.",
      title2: "Esses resultados não surgiram por acaso.",
      paragraph2: "A seguir, o processo que os tornou possíveis.",
    },
    ch03: {
      sectionAriaLabel: "Contexto do projeto",
      eyebrow: "Contexto",
      title: "Traduzindo tecnologia em compreensão.",
      paragraph:
        "A Clint atua na interseção entre CRM, vendas, marketing, automação e aquisição. Nesse contexto, a experiência digital precisa fazer mais do que apresentar funcionalidades: ela precisa ajudar o usuário a entender valor, reconhecer relevância e avançar para a próxima ação.",
      facts: [
        { label: "Cliente", value: "Clint" },
        { label: "Área", value: "CRM / Vendas / Growth" },
        { label: "Papel", value: "Product Designer" },
        { label: "Foco", value: "Produto · UX · CRO · Growth" },
        { label: "Time", value: "2 product designers", span: true },
      ],
    },
    ch04: {
      sectionAriaLabel: "O problema",
      eyebrow: "Problema",
      title:
        "Quando a proposta de valor não é clara, cada etapa do funil precisa trabalhar mais.",
      intro: "A leitura inicial do funil apontava quatro fricções, confirmadas depois no discovery:",
      frictions: [
        "Excesso de informação antes de qualquer benefício",
        "Baixa clareza da proposta de valor nos primeiros segundos",
        "Hierarquia visual pouco orientada à decisão",
        "CTA distante do contexto que gera confiança",
      ],
      flowNodes: ["Tráfego", "Landing", "Compreensão", "Confiança", "Ação", "Conversão"],
    },
    ch05: {
      sectionAriaLabel: "Discovery",
      eyebrow: "Discovery",
      title: "Toda decisão começou antes do Figma.",
      paragraph:
        "Antes de desenhar qualquer interface, os dois product designers do time levantaram o contexto do produto, do mercado e das pessoas. As respostas definiram toda a arquitetura da experiência.",
      questions: [
        "O que impede alguém de clicar?",
        "O que gera confiança?",
        "Quais informações realmente influenciam a decisão?",
        "Em que momento convidar o usuário para conversar?",
      ],
      steps: [
        { title: "ICP e equipe comercial", description: "Entrevistas para entender objeções reais ouvidas todos os dias na venda." },
        { title: "Benchmark de mercado", description: "Referências de concorrentes e categorias adjacentes para identificar padrões de confiança." },
        { title: "Google Analytics", description: "Dados de comportamento das campanhas existentes: origens, quedas e gargalos do funil." },
        { title: "Microsoft Clarity", description: "Sessões gravadas e heatmaps revelando como as pessoas realmente navegavam na página." },
        { title: "Hipóteses", description: "Cada insight virou uma hipótese clara, mensurável e revisável." },
      ],
    },
    ch06: {
      sectionAriaLabel: "Insights",
      eyebrow: "Insight",
      title: "Três princípios guiaram cada decisão a partir daqui.",
      paragraph:
        "As entrevistas com o time comercial, os heatmaps e os dados de campanha do discovery convergiram para três princípios.",
      insights: [
        { n: "01", title: "Clareza", description: "O usuário precisa entender rapidamente o valor antes de decidir." },
        { n: "02", title: "Hierarquia", description: "O conteúdo precisa acompanhar a ordem mental da decisão, não a ordem técnica do produto." },
        { n: "03", title: "Conversão", description: "O CTA precisa aparecer como consequência da informação, não como interrupção." },
      ],
    },
    ch07: {
      sectionAriaLabel: "Estratégia",
      eyebrow: "Estratégia",
      title: "Projetando uma jornada de conversão, não uma lista de seções.",
      paragraph:
        "Cada seção da Landing Page foi construída para responder uma objeção específica, na ordem em que ela normalmente surge na cabeça de quem decide.",
      flowNodes: ["Aquisição", "Proposta de valor", "Prova", "Qualificação", "Conversão"],
      pillars: [
        { title: "Reduzir esforço cognitivo", description: "Hierarquia visual clara e UX Writing direto: cada dobra comunica uma única ideia." },
        { title: "Aumentar confiança", description: "Prova social e demonstração visual posicionadas antes de cada pedido de ação." },
        { title: "Incentivar ação", description: "CTAs presentes ao longo de toda a jornada, sempre após um momento de convencimento." },
      ],
    },
    ownership: {
      sectionAriaLabel: "O que eu entreguei",
      eyebrow: "Entrega ponta a ponta",
      title: "Do agente de IA ao vídeo da página, o fluxo inteiro passou por mim.",
      description: "O case não foi só o layout. Eu desenhei e conectei cada peça que o lead encontra, do primeiro clique à conversa com o agente.",
      steps: [
        { tag: "01 · IA", title: "Agente de IA", body: "Desenhei o comportamento do agente que recebe o lead vindo da página: perguntas de qualificação, tom e quando passar para o time." },
        { tag: "02 · Página", title: "Landing page", body: "Estrutura, copy visual e componentes da LP, pensados para levar o visitante até a conversa com o agente." },
        { tag: "03 · Vídeo", title: "Vídeos da LP", body: "Editei os vídeos que aparecem na página, do corte ao ritmo, para explicar o produto em poucos segundos." },
        { tag: "04 · Motion", title: "Animações", body: "Criei as animações da LP, que mostram o produto funcionando em vez de só descrever." },
      ],
      videoTitle: "Vídeo da landing page, editado por mim",
      videoCaption: "Vídeo usado na landing page · edição: Jhon Camilo Rios",
    },
    ch08: {
      sectionAriaLabel: "Construção da experiência",
      eyebrow: "Construção",
      title: "Cada elemento existe por um motivo.",
      paragraph:
        "Os três pilares da estratégia se traduziram dobra a dobra. Nenhum componente foi inserido apenas por estética: cada uma responde a uma objeção específica da jornada.",
      sections: [
        {
          name: "Hero",
          decision:
            "Apresentar primeiro o benefício, não a tecnologia. A headline comunica o resultado que o vendedor quer: fechar mais vendas.",
          hypothesis:
            "Simplificar a Hero e apresentar primeiro o benefício ajudaria mais usuários a entender a proposta de valor em poucos segundos.",
        },
        {
          name: "Benefícios",
          decision:
            "Transformar funcionalidades em resultados percebidos. Nada de jargão técnico: cada benefício descreve um ganho concreto na operação.",
          hypothesis:
            "Resultados percebidos reduzem a carga cognitiva mais do que listas de recursos.",
        },
        {
          name: "Demonstração",
          decision:
            "Mostrar a IA conversando de verdade numa simulação de chat, em vez de explicar em texto como ela funciona.",
          hypothesis:
            "Uma demonstração visual reduziria a carga cognitiva mais do que uma explicação textual.",
        },
        {
          name: "Provas",
          decision:
            "Prova social específica: depoimentos com contexto de negócio, números reais e nomes reais.",
          hypothesis: "Provas sociais específicas aumentariam a percepção de credibilidade.",
        },
        {
          name: "Autoridade",
          decision:
            "Elementos de credibilidade posicionados antes do CTA final: parceiros, resultados e presença de mercado.",
          hypothesis: "Credibilidade percebida reduz o risco da decisão e destrava a ação.",
        },
      ],
      hypothesisLabel: "Hipótese de design",
      sketchFocusSuffix: "em foco",
      closing:
        "Faltava uma última decisão, a que mais pesou no resultado final: o que acontece depois que a confiança já foi construída.",
    },
    ch09: {
      sectionAriaLabel: "A decisão do CTA",
      eyebrow: "Decisão do CTA",
      title: "Reduzindo atrito para aumentar conversões.",
      paragraph:
        "A decisão que mais pesou foi substituir formulários tradicionais por conversas imediatas no WhatsApp. Os botões foram distribuídos estrategicamente ao longo da página, aparecendo sempre após momentos de maior confiança.",
      quote:
        "O usuário nunca precisa procurar um canal de contato. O próximo passo está sempre disponível.",
      journey: [
        { label: "Hero", cta: false },
        { label: "CTA WhatsApp", cta: true },
        { label: "Benefícios", cta: false },
        { label: "CTA WhatsApp", cta: true },
        { label: "Prova Social", cta: false },
        { label: "CTA WhatsApp", cta: true },
        { label: "Autoridade", cta: false },
        { label: "CTA Final", cta: true },
      ],
      journeyCaption: "Cada botão aparece exatamente após um momento de redução de objeções.",
      closing:
        "O clique no WhatsApp era só o início. O que acontecia na conversa em seguida decidia se o lead avançava ou parava por ali.",
    },
    ch10: {
      sectionAriaLabel: "Fluxo conversacional Typebot",
      eyebrow: "Depois do clique",
      title: "A experiência continuava depois do clique.",
      paragraph:
        "O clique não encerrava a jornada. Ele iniciava uma nova etapa: um agente de IA no Typebot conversava com o lead como um SDR, qualificava por perfil, faturamento e necessidade, e enviava a conversa direto para o vendedor certo dentro do CRM.",
      chatHeaderTitle: "Fluxo de qualificação",
      chatHeaderStatus: "Typebot · ativo",
      chat: [
        { from: "bot", text: "Olá! Que bom ter você aqui. Para direcionar ao vendedor certo, qual é o segmento do seu negócio?" },
        { from: "user", text: "Tenho uma clínica odontológica." },
        { from: "bot", text: "Perfeito! E qual o faturamento mensal aproximado da clínica?" },
        { from: "user", text: "Entre R$ 50 mil e R$ 100 mil." },
        { from: "bot", text: "Ótimo. Você busca uma solução para agora ou está pesquisando para o futuro?" },
        { from: "user", text: "Preciso resolver isso o quanto antes." },
        { from: "bot", text: "Entendido! Vou te conectar com o vendedor ideal. Escolha o melhor horário na agenda abaixo." },
      ],
      scheduleTitle: "Agendar reunião",
      scheduleSubtitle: "Calendly · horários do vendedor",
      scheduleCta: "Ver agenda",
      chatCaption: "Exemplo representativo do fluxo real de qualificação.",
      qualifiersLabel: "O que o fluxo identifica em tempo real",
      qualifiers: [
        { label: "Perfil", value: "Saúde · Odontologia" },
        { label: "Faturamento", value: "R$ 50k a R$ 100k / mês" },
        { label: "Necessidade", value: "Resolver o quanto antes" },
        { label: "Vendedor", value: "Definido automaticamente pelo perfil" },
      ],
      pipeline: ["Typebot (SDR de IA)", "Calendly", "Vendedor certo", "CRM"],
      resultParagraph:
        "O resultado: menos atrito para o usuário e oportunidades muito mais qualificadas chegando ao time comercial.",
      screenshotAlt: "Editor visual do Typebot com o fluxo real de qualificação e roteamento por vendedor",
      screenshotCaption:
        "O fluxo real construído no editor visual do Typebot: cada bloco é uma decisão de qualificação ou roteamento para o vendedor certo.",
    },
    ch11: {
      sectionAriaLabel: "Otimização contínua",
      eyebrow: "Otimização contínua",
      title: "O lançamento foi apenas o começo.",
      paragraph:
        "A conversa qualificava o lead; a página em si nunca ficou pronta. Evoluiu continuamente com base em comportamento real dos usuários.",
      gaCardTitle: "Google Analytics",
      gaCardTag: "Conversão",
      gaCardCaption: "Evolução da taxa de conversão ao longo das iterações",
      clarityCardTitle: "Microsoft Clarity",
      clarityCardTag: "Heatmap",
      clarityCardCaption: "Zonas de atenção e cliques mapeadas em sessões reais",
      insights: [
        { tool: "Microsoft Clarity", finding: "Sessões gravadas e heatmaps revelaram padrões de comportamento e pontos de hesitação." },
        { tool: "Google Analytics", finding: "Funis de aquisição mostraram os gargalos reais da jornada, dobra a dobra." },
        { tool: "Iterações guiadas por dados", finding: "Ajustes de copy, reposicionamento de elementos e mudanças de hierarquia visual, sempre a partir de uma hipótese." },
      ],
      cycle: ["Observação", "Hipótese", "Implementação", "Mensuração", "Aprendizado"],
      newHypothesisLabel: "Nova Hipótese",
      closing: "Nenhuma melhoria foi baseada em opinião. Todas foram guiadas por dados.",
    },
    ch12: {
      sectionAriaLabel: "Resultado e aprendizado",
      eyebrow: "Resultado",
      title: "A Landing Page tornou-se o principal ativo de aquisição da operação.",
      bigNumberCaption: "de toda a demanda da operação passou por esta experiência",
      barLabelLeft: "Esta landing page",
      barLabelRight: "Demais canais",
      paragraph:
        "Clareza converteu mais do que complexidade. Cada botão de WhatsApp, posicionado no momento certo, sustentou esse resultado, e o processo de otimização contínua manteve o número subindo depois do lançamento.",
      ctaLabel: "Ver a landing page ao vivo",
    },
    nextCase: {
      eyebrow: "Próximo case",
      title: "02 · Intelligence: projetando experiências de IA para equipes comerciais.",
      description:
        "Como transformar modelos, automações e recomendações em interações compreensíveis e controláveis.",
    },
  },
  en: {
    ch01: {
      sectionAriaLabel: "Acquire case introduction",
      eyebrow: "01 · Acquire",
      headingSegments: [
        { text: "How a single digital product concentrated ", highlight: false },
        { text: "79% of the demand", highlight: true },
        { text: " for the sales operation.", highlight: false },
      ],
      headingAriaLabel:
        "How a single digital product concentrated 79% of the demand for the sales operation.",
      paragraph:
        "More than building a landing page, the goal was to design an experience able to turn paid traffic into qualified conversations.",
      ctaLabel: "See the process",
      metrics: [
        { value: 37, suffix: "%", label: "Conversion" },
        { value: 10722, label: "Conversations" },
        { value: 79, suffix: "%", label: "of demand" },
      ],
      imageAlt: "Clint landing page: AI sales agent for WhatsApp",
      scrollLabel: "Scroll",
    },
    ch02: {
      sectionAriaLabel: "Project impact",
      eyebrow: "Before the process",
      title: "The impact comes before the process.",
      paragraph:
        "These numbers aren't the point of the case, they're the consequence of the Product Design decisions detailed below.",
      funnel: [
        { value: 28967, label: "clicks on paid media campaigns" },
        { value: 10722, label: "conversations started on WhatsApp" },
        { value: 37, suffix: "%", label: "conversion rate" },
        { value: 1.27, prefix: "$", decimals: 2, label: "per conversation started" },
        { value: 79, suffix: "%", label: "of all operation demand" },
      ],
      footnote:
        "Measured via Google Analytics and Meta Ads over one month of a specific WhatsApp AI campaign. Numbers tracked weekly by the traffic manager and reviewed monthly in a real meeting with paid traffic, data, and the designers.",
      title2: "These results didn't happen by chance.",
      paragraph2: "Below is the process that made them possible.",
    },
    ch03: {
      sectionAriaLabel: "Project context",
      eyebrow: "Context",
      title: "Translating technology into understanding.",
      paragraph:
        "Clint operates at the intersection of CRM, sales, marketing, automation, and acquisition. In this context, the digital experience needs to do more than present features: it needs to help the user understand value, recognize relevance, and move to the next action.",
      facts: [
        { label: "Client", value: "Clint" },
        { label: "Area", value: "CRM / Sales / Growth" },
        { label: "Role", value: "Product Designer" },
        { label: "Focus", value: "Product · UX · CRO · Growth" },
        { label: "Team", value: "2 product designers", span: true },
      ],
    },
    ch04: {
      sectionAriaLabel: "The problem",
      eyebrow: "Problem",
      title: "When the value proposition isn't clear, every funnel step has to work harder.",
      intro: "The initial funnel read pointed to four frictions, later confirmed in discovery:",
      frictions: [
        "Too much information before any benefit",
        "Low clarity of the value proposition in the first seconds",
        "Visual hierarchy barely oriented toward the decision",
        "CTA disconnected from the context that builds trust",
      ],
      flowNodes: ["Traffic", "Landing", "Understanding", "Trust", "Action", "Conversion"],
    },
    ch05: {
      sectionAriaLabel: "Discovery",
      eyebrow: "Discovery",
      title: "Every decision started before Figma.",
      paragraph:
        "Before designing any interface, the team's two product designers mapped the context of the product, the market, and the people. The answers defined the entire architecture of the experience.",
      questions: [
        "What stops someone from clicking?",
        "What builds trust?",
        "Which information actually influences the decision?",
        "At what moment should the user be invited to talk?",
      ],
      steps: [
        { title: "ICP and sales team", description: "Interviews to understand the real objections heard every day in sales." },
        { title: "Market benchmark", description: "References from competitors and adjacent categories to identify trust patterns." },
        { title: "Google Analytics", description: "Behavior data from existing campaigns: sources, drop-offs, and funnel bottlenecks." },
        { title: "Microsoft Clarity", description: "Recorded sessions and heatmaps revealing how people actually navigated the page." },
        { title: "Hypotheses", description: "Every insight became a clear, measurable, revisable hypothesis." },
      ],
    },
    ch06: {
      sectionAriaLabel: "Insights",
      eyebrow: "Insight",
      title: "Three principles guided every decision from here on.",
      paragraph:
        "Interviews with the sales team, heatmaps, and campaign data from discovery converged into three principles.",
      insights: [
        { n: "01", title: "Clarity", description: "The user needs to quickly grasp the value before deciding." },
        { n: "02", title: "Hierarchy", description: "Content needs to follow the mental order of the decision, not the technical order of the product." },
        { n: "03", title: "Conversion", description: "The CTA needs to appear as a consequence of information, not as an interruption." },
      ],
    },
    ch07: {
      sectionAriaLabel: "Strategy",
      eyebrow: "Strategy",
      title: "Designing a conversion journey, not a list of sections.",
      paragraph:
        "Every section of the landing page was built to answer a specific objection, in the order it usually surfaces in the decision-maker's mind.",
      flowNodes: ["Acquisition", "Value proposition", "Proof", "Qualification", "Conversion"],
      pillars: [
        { title: "Reduce cognitive effort", description: "Clear visual hierarchy and direct UX writing: each fold communicates a single idea." },
        { title: "Increase trust", description: "Social proof and visual demonstration placed before every call to action." },
        { title: "Encourage action", description: "CTAs present throughout the journey, always after a moment of persuasion." },
      ],
    },
    ownership: {
      sectionAriaLabel: "What I delivered",
      eyebrow: "End-to-end delivery",
      title: "From the AI agent to the page's video, the whole flow went through me.",
      description: "This case wasn't just the layout. I designed and connected every piece the lead encounters, from the first click to the conversation with the agent.",
      steps: [
        { tag: "01 · AI", title: "AI agent", body: "I designed the behavior of the agent that receives leads from the page: qualifying questions, tone, and when to hand off to the team." },
        { tag: "02 · Page", title: "Landing page", body: "Structure, visual copy, and components of the LP, built to take visitors to the conversation with the agent." },
        { tag: "03 · Video", title: "LP videos", body: "I edited the videos on the page, from cuts to pacing, to explain the product in a few seconds." },
        { tag: "04 · Motion", title: "Animations", body: "I created the LP animations, which show the product working instead of just describing it." },
      ],
      videoTitle: "Landing page video, edited by me",
      videoCaption: "Video used on the landing page · editing: Jhon Camilo Rios",
    },
    ch08: {
      sectionAriaLabel: "Building the experience",
      eyebrow: "Construction",
      title: "Every element exists for a reason.",
      paragraph:
        "The three strategy pillars translated fold by fold. No component was added just for aesthetics: each one answers a specific objection in the journey.",
      sections: [
        {
          name: "Hero",
          decision:
            "Lead with the benefit, not the technology. The headline communicates the result the salesperson wants: closing more deals.",
          hypothesis:
            "Simplifying the hero and leading with the benefit would help more users grasp the value proposition within seconds.",
        },
        {
          name: "Benefits",
          decision:
            "Turn features into perceived outcomes. No technical jargon: each benefit describes a concrete gain for the operation.",
          hypothesis:
            "Perceived outcomes reduce cognitive load more than feature lists.",
        },
        {
          name: "Demonstration",
          decision:
            "Show the AI actually conversing in a simulated chat, instead of explaining in text how it works.",
          hypothesis:
            "A visual demonstration would reduce cognitive load more than a text explanation.",
        },
        {
          name: "Proof",
          decision:
            "Specific social proof: testimonials with business context, real numbers, and real names.",
          hypothesis: "Specific social proof would increase perceived credibility.",
        },
        {
          name: "Authority",
          decision:
            "Credibility elements placed before the final CTA: partners, results, and market presence.",
          hypothesis: "Perceived credibility lowers decision risk and unlocks action.",
        },
      ],
      hypothesisLabel: "Design hypothesis",
      sketchFocusSuffix: "in focus",
      closing:
        "One last decision remained, the one that mattered most to the final result: what happens after trust has already been built.",
    },
    ch09: {
      sectionAriaLabel: "The CTA decision",
      eyebrow: "CTA decision",
      title: "Reducing friction to increase conversions.",
      paragraph:
        "The decision that mattered most was replacing traditional forms with immediate WhatsApp conversations. The buttons were strategically distributed across the page, always appearing after moments of higher trust.",
      quote:
        "The user never has to hunt for a contact channel. The next step is always available.",
      journey: [
        { label: "Hero", cta: false },
        { label: "WhatsApp CTA", cta: true },
        { label: "Benefits", cta: false },
        { label: "WhatsApp CTA", cta: true },
        { label: "Social Proof", cta: false },
        { label: "WhatsApp CTA", cta: true },
        { label: "Authority", cta: false },
        { label: "Final CTA", cta: true },
      ],
      journeyCaption: "Each button appears exactly after a moment that reduces objections.",
      closing:
        "The WhatsApp click was only the beginning. What happened in the conversation next decided whether the lead moved forward or stopped there.",
    },
    ch10: {
      sectionAriaLabel: "Typebot conversational flow",
      eyebrow: "After the click",
      title: "The experience continued after the click.",
      paragraph:
        "The click didn't end the journey. It started a new stage: an AI agent in Typebot talked to the lead like an SDR, qualified them by profile, revenue, and need, and sent the conversation straight to the right salesperson inside the CRM.",
      chatHeaderTitle: "Qualification flow",
      chatHeaderStatus: "Typebot · active",
      chat: [
        { from: "bot", text: "Hi! Great to have you here. To route you to the right salesperson, what's your business segment?" },
        { from: "user", text: "I run a dental clinic." },
        { from: "bot", text: "Perfect! And what's the clinic's approximate monthly revenue?" },
        { from: "user", text: "Between $10k and $20k." },
        { from: "bot", text: "Great. Are you looking for a solution now, or researching for the future?" },
        { from: "user", text: "I need to solve this as soon as possible." },
        { from: "bot", text: "Got it! I'll connect you with the right salesperson. Pick the best time on the calendar below." },
      ],
      scheduleTitle: "Schedule a meeting",
      scheduleSubtitle: "Calendly · salesperson's availability",
      scheduleCta: "See calendar",
      chatCaption: "Representative example of the real qualification flow.",
      qualifiersLabel: "What the flow identifies in real time",
      qualifiers: [
        { label: "Profile", value: "Healthcare · Dentistry" },
        { label: "Revenue", value: "$10k to $20k / month" },
        { label: "Need", value: "Solve it as soon as possible" },
        { label: "Salesperson", value: "Automatically assigned by profile" },
      ],
      pipeline: ["Typebot (AI SDR)", "Calendly", "Right salesperson", "CRM"],
      resultParagraph:
        "The result: less friction for the user and much more qualified opportunities reaching the sales team.",
      screenshotAlt: "Typebot visual editor showing the real qualification and salesperson-routing flow",
      screenshotCaption:
        "The real flow built in Typebot's visual editor: every block is a qualification or routing decision for the right salesperson.",
    },
    ch11: {
      sectionAriaLabel: "Continuous optimization",
      eyebrow: "Continuous optimization",
      title: "Launch was only the beginning.",
      paragraph:
        "The conversation qualified the lead; the page itself was never finished. It kept evolving based on real user behavior.",
      gaCardTitle: "Google Analytics",
      gaCardTag: "Conversion",
      gaCardCaption: "Conversion rate evolution across iterations",
      clarityCardTitle: "Microsoft Clarity",
      clarityCardTag: "Heatmap",
      clarityCardCaption: "Attention zones and clicks mapped from real sessions",
      insights: [
        { tool: "Microsoft Clarity", finding: "Recorded sessions and heatmaps revealed behavior patterns and hesitation points." },
        { tool: "Google Analytics", finding: "Acquisition funnels showed the real bottlenecks of the journey, fold by fold." },
        { tool: "Data-driven iterations", finding: "Copy adjustments, element repositioning, and visual hierarchy changes, always starting from a hypothesis." },
      ],
      cycle: ["Observation", "Hypothesis", "Implementation", "Measurement", "Learning"],
      newHypothesisLabel: "New Hypothesis",
      closing: "No improvement was based on opinion. All of them were guided by data.",
    },
    ch12: {
      sectionAriaLabel: "Result and learning",
      eyebrow: "Result",
      title: "The landing page became the operation's main acquisition asset.",
      bigNumberCaption: "of all operation demand passed through this experience",
      barLabelLeft: "This landing page",
      barLabelRight: "Other channels",
      paragraph:
        "Clarity converted more than complexity. Every WhatsApp button, placed at the right moment, sustained this result, and the continuous optimization process kept the number climbing after launch.",
      ctaLabel: "See the live landing page",
    },
    nextCase: {
      eyebrow: "Next case",
      title: "02 · Intelligence: designing AI experiences for sales teams.",
      description:
        "How to turn models, automations, and recommendations into understandable, controllable interactions.",
    },
  },
  es: {
    ch01: {
      sectionAriaLabel: "Presentación del caso Acquire",
      eyebrow: "01 · Acquire",
      headingSegments: [
        { text: "Cómo un único producto digital concentró el ", highlight: false },
        { text: "79% de la demanda", highlight: true },
        { text: " de la operación comercial.", highlight: false },
      ],
      headingAriaLabel:
        "Cómo un único producto digital concentró el 79% de la demanda de la operación comercial.",
      paragraph:
        "Más que crear una landing page, el objetivo fue diseñar una experiencia capaz de transformar tráfico pago en conversaciones calificadas.",
      ctaLabel: "Ver el proceso",
      metrics: [
        { value: 37, suffix: "%", label: "Conversión" },
        { value: 10722, label: "Conversaciones" },
        { value: 79, suffix: "%", label: "de la demanda" },
      ],
      imageAlt: "Landing page de Clint: agente de IA para ventas en WhatsApp",
      scrollLabel: "Scroll",
    },
    ch02: {
      sectionAriaLabel: "Impacto del proyecto",
      eyebrow: "Antes del proceso",
      title: "El impacto llega antes que el proceso.",
      paragraph:
        "Estos números no son el objetivo del caso, son la consecuencia de decisiones de Product Design detalladas a continuación.",
      funnel: [
        { value: 28967, label: "clics en las campañas de medios pagos" },
        { value: 10722, label: "conversaciones iniciadas por WhatsApp" },
        { value: 37, suffix: "%", label: "de tasa de conversión" },
        { value: 1.27, prefix: "$", decimals: 2, label: "por conversación iniciada" },
        { value: 79, suffix: "%", label: "de toda la demanda de la operación" },
      ],
      footnote:
        "Medido con Google Analytics y Meta Ads durante un mes de una campaña específica de IA en WhatsApp. Números monitoreados semanalmente por el gestor de tráfico y revisados mensualmente en una reunión real con tráfico pago, datos y los diseñadores.",
      title2: "Estos resultados no surgieron por casualidad.",
      paragraph2: "A continuación, el proceso que los hizo posibles.",
    },
    ch03: {
      sectionAriaLabel: "Contexto del proyecto",
      eyebrow: "Contexto",
      title: "Traduciendo tecnología en comprensión.",
      paragraph:
        "Clint opera en la intersección entre CRM, ventas, marketing, automatización y adquisición. En ese contexto, la experiencia digital necesita hacer más que presentar funcionalidades: debe ayudar al usuario a entender el valor, reconocer la relevancia y avanzar hacia la próxima acción.",
      facts: [
        { label: "Cliente", value: "Clint" },
        { label: "Área", value: "CRM / Ventas / Growth" },
        { label: "Rol", value: "Product Designer" },
        { label: "Enfoque", value: "Producto · UX · CRO · Growth" },
        { label: "Equipo", value: "2 product designers", span: true },
      ],
    },
    ch04: {
      sectionAriaLabel: "El problema",
      eyebrow: "Problema",
      title:
        "Cuando la propuesta de valor no es clara, cada etapa del embudo tiene que trabajar más.",
      intro: "La lectura inicial del embudo señaló cuatro fricciones, confirmadas después en el discovery:",
      frictions: [
        "Exceso de información antes de cualquier beneficio",
        "Poca claridad de la propuesta de valor en los primeros segundos",
        "Jerarquía visual poco orientada a la decisión",
        "CTA alejado del contexto que genera confianza",
      ],
      flowNodes: ["Tráfico", "Landing", "Comprensión", "Confianza", "Acción", "Conversión"],
    },
    ch05: {
      sectionAriaLabel: "Discovery",
      eyebrow: "Discovery",
      title: "Cada decisión empezó antes de abrir Figma.",
      paragraph:
        "Antes de diseñar cualquier interfaz, los dos product designers del equipo relevaron el contexto del producto, del mercado y de las personas. Las respuestas definieron toda la arquitectura de la experiencia.",
      questions: [
        "¿Qué impide que alguien haga clic?",
        "¿Qué genera confianza?",
        "¿Qué información influye realmente en la decisión?",
        "¿En qué momento invitar al usuario a conversar?",
      ],
      steps: [
        { title: "ICP y equipo comercial", description: "Entrevistas para entender las objeciones reales escuchadas todos los días en la venta." },
        { title: "Benchmark de mercado", description: "Referencias de competidores y categorías adyacentes para identificar patrones de confianza." },
        { title: "Google Analytics", description: "Datos de comportamiento de las campañas existentes: orígenes, caídas y cuellos de botella del embudo." },
        { title: "Microsoft Clarity", description: "Sesiones grabadas y heatmaps que revelan cómo navegaban realmente las personas en la página." },
        { title: "Hipótesis", description: "Cada insight se convirtió en una hipótesis clara, medible y revisable." },
      ],
    },
    ch06: {
      sectionAriaLabel: "Insights",
      eyebrow: "Insight",
      title: "Tres principios guiaron cada decisión a partir de aquí.",
      paragraph:
        "Las entrevistas con el equipo comercial, los heatmaps y los datos de campaña del discovery convergieron en tres principios.",
      insights: [
        { n: "01", title: "Claridad", description: "El usuario necesita entender rápidamente el valor antes de decidir." },
        { n: "02", title: "Jerarquía", description: "El contenido debe seguir el orden mental de la decisión, no el orden técnico del producto." },
        { n: "03", title: "Conversión", description: "El CTA debe aparecer como consecuencia de la información, no como una interrupción." },
      ],
    },
    ch07: {
      sectionAriaLabel: "Estrategia",
      eyebrow: "Estrategia",
      title: "Diseñando un recorrido de conversión, no una lista de secciones.",
      paragraph:
        "Cada sección de la landing page se construyó para responder a una objeción específica, en el orden en que normalmente surge en la mente de quien decide.",
      flowNodes: ["Adquisición", "Propuesta de valor", "Prueba", "Calificación", "Conversión"],
      pillars: [
        { title: "Reducir el esfuerzo cognitivo", description: "Jerarquía visual clara y UX writing directo: cada sección comunica una única idea." },
        { title: "Aumentar la confianza", description: "Prueba social y demostración visual ubicadas antes de cada pedido de acción." },
        { title: "Incentivar la acción", description: "CTAs presentes a lo largo de todo el recorrido, siempre después de un momento de convencimiento." },
      ],
    },
    ownership: {
      sectionAriaLabel: "Lo que entregué",
      eyebrow: "Entrega de punta a punta",
      title: "Del agente de IA al video de la página, todo el flujo pasó por mí.",
      description: "El case no fue solo el layout. Diseñé y conecté cada pieza que encuentra el lead, del primer clic a la conversación con el agente.",
      steps: [
        { tag: "01 · IA", title: "Agente de IA", body: "Diseñé el comportamiento del agente que recibe al lead desde la página: preguntas de calificación, tono y cuándo pasar al equipo." },
        { tag: "02 · Página", title: "Landing page", body: "Estructura, copy visual y componentes de la LP, pensados para llevar al visitante a la conversación con el agente." },
        { tag: "03 · Video", title: "Videos de la LP", body: "Edité los videos que aparecen en la página, del corte al ritmo, para explicar el producto en pocos segundos." },
        { tag: "04 · Motion", title: "Animaciones", body: "Creé las animaciones de la LP, que muestran el producto funcionando en lugar de solo describirlo." },
      ],
      videoTitle: "Video de la landing page, editado por mí",
      videoCaption: "Video usado en la landing page · edición: Jhon Camilo Rios",
    },
    ch08: {
      sectionAriaLabel: "Construcción de la experiencia",
      eyebrow: "Construcción",
      title: "Cada elemento existe por un motivo.",
      paragraph:
        "Los tres pilares de la estrategia se tradujeron sección a sección. Ningún componente se agregó solo por estética: cada uno responde a una objeción específica del recorrido.",
      sections: [
        {
          name: "Hero",
          decision:
            "Presentar primero el beneficio, no la tecnología. El titular comunica el resultado que el vendedor quiere: cerrar más ventas.",
          hypothesis:
            "Simplificar el Hero y presentar primero el beneficio ayudaría a más usuarios a entender la propuesta de valor en pocos segundos.",
        },
        {
          name: "Beneficios",
          decision:
            "Transformar funcionalidades en resultados percibidos. Sin jerga técnica: cada beneficio describe una ganancia concreta para la operación.",
          hypothesis:
            "Los resultados percibidos reducen la carga cognitiva más que las listas de funciones.",
        },
        {
          name: "Demostración",
          decision:
            "Mostrar a la IA conversando de verdad en una simulación de chat, en lugar de explicar en texto cómo funciona.",
          hypothesis:
            "Una demostración visual reduciría la carga cognitiva más que una explicación textual.",
        },
        {
          name: "Pruebas",
          decision:
            "Prueba social específica: testimonios con contexto de negocio, números reales y nombres reales.",
          hypothesis: "Las pruebas sociales específicas aumentarían la percepción de credibilidad.",
        },
        {
          name: "Autoridad",
          decision:
            "Elementos de credibilidad ubicados antes del CTA final: socios, resultados y presencia en el mercado.",
          hypothesis: "La credibilidad percibida reduce el riesgo de la decisión y destraba la acción.",
        },
      ],
      hypothesisLabel: "Hipótesis de diseño",
      sketchFocusSuffix: "en foco",
      closing:
        "Faltaba una última decisión, la que más pesó en el resultado final: qué pasa después de que la confianza ya se construyó.",
    },
    ch09: {
      sectionAriaLabel: "La decisión del CTA",
      eyebrow: "Decisión del CTA",
      title: "Reduciendo la fricción para aumentar las conversiones.",
      paragraph:
        "La decisión que más pesó fue reemplazar los formularios tradicionales por conversaciones inmediatas en WhatsApp. Los botones se distribuyeron estratégicamente a lo largo de la página, apareciendo siempre después de momentos de mayor confianza.",
      quote:
        "El usuario nunca necesita buscar un canal de contacto. El próximo paso siempre está disponible.",
      journey: [
        { label: "Hero", cta: false },
        { label: "CTA WhatsApp", cta: true },
        { label: "Beneficios", cta: false },
        { label: "CTA WhatsApp", cta: true },
        { label: "Prueba Social", cta: false },
        { label: "CTA WhatsApp", cta: true },
        { label: "Autoridad", cta: false },
        { label: "CTA Final", cta: true },
      ],
      journeyCaption: "Cada botón aparece exactamente después de un momento que reduce objeciones.",
      closing:
        "El clic en WhatsApp era solo el comienzo. Lo que pasaba en la conversación después decidía si el lead avanzaba o se detenía ahí.",
    },
    ch10: {
      sectionAriaLabel: "Flujo conversacional de Typebot",
      eyebrow: "Después del clic",
      title: "La experiencia continuaba después del clic.",
      paragraph:
        "El clic no terminaba el recorrido. Iniciaba una nueva etapa: un agente de IA en Typebot conversaba con el lead como un SDR, lo calificaba por perfil, facturación y necesidad, y enviaba la conversación directo al vendedor correcto dentro del CRM.",
      chatHeaderTitle: "Flujo de calificación",
      chatHeaderStatus: "Typebot · activo",
      chat: [
        { from: "bot", text: "¡Hola! Qué bueno tenerte aquí. Para dirigirte al vendedor correcto, ¿cuál es el segmento de tu negocio?" },
        { from: "user", text: "Tengo una clínica odontológica." },
        { from: "bot", text: "¡Perfecto! ¿Y cuál es la facturación mensual aproximada de la clínica?" },
        { from: "user", text: "Entre $10 mil y $20 mil." },
        { from: "bot", text: "Genial. ¿Buscas una solución para ahora o estás investigando para el futuro?" },
        { from: "user", text: "Necesito resolver esto lo antes posible." },
        { from: "bot", text: "¡Entendido! Te voy a conectar con el vendedor ideal. Elige el mejor horario en la agenda de abajo." },
      ],
      scheduleTitle: "Agendar reunión",
      scheduleSubtitle: "Calendly · horarios del vendedor",
      scheduleCta: "Ver agenda",
      chatCaption: "Ejemplo representativo del flujo real de calificación.",
      qualifiersLabel: "Qué identifica el flujo en tiempo real",
      qualifiers: [
        { label: "Perfil", value: "Salud · Odontología" },
        { label: "Facturación", value: "$10k a $20k / mes" },
        { label: "Necesidad", value: "Resolverlo lo antes posible" },
        { label: "Vendedor", value: "Definido automáticamente según el perfil" },
      ],
      pipeline: ["Typebot (SDR de IA)", "Calendly", "Vendedor correcto", "CRM"],
      resultParagraph:
        "El resultado: menos fricción para el usuario y oportunidades mucho más calificadas llegando al equipo comercial.",
      screenshotAlt: "Editor visual de Typebot con el flujo real de calificación y enrutamiento por vendedor",
      screenshotCaption:
        "El flujo real construido en el editor visual de Typebot: cada bloque es una decisión de calificación o enrutamiento hacia el vendedor correcto.",
    },
    ch11: {
      sectionAriaLabel: "Optimización continua",
      eyebrow: "Optimización continua",
      title: "El lanzamiento fue solo el comienzo.",
      paragraph:
        "La conversación calificaba al lead; la página en sí nunca estuvo terminada. Evolucionó continuamente en base al comportamiento real de los usuarios.",
      gaCardTitle: "Google Analytics",
      gaCardTag: "Conversión",
      gaCardCaption: "Evolución de la tasa de conversión a lo largo de las iteraciones",
      clarityCardTitle: "Microsoft Clarity",
      clarityCardTag: "Heatmap",
      clarityCardCaption: "Zonas de atención y clics mapeadas en sesiones reales",
      insights: [
        { tool: "Microsoft Clarity", finding: "Sesiones grabadas y heatmaps revelaron patrones de comportamiento y puntos de duda." },
        { tool: "Google Analytics", finding: "Los embudos de adquisición mostraron los cuellos de botella reales del recorrido, sección a sección." },
        { tool: "Iteraciones guiadas por datos", finding: "Ajustes de copy, reposicionamiento de elementos y cambios de jerarquía visual, siempre a partir de una hipótesis." },
      ],
      cycle: ["Observación", "Hipótesis", "Implementación", "Medición", "Aprendizaje"],
      newHypothesisLabel: "Nueva Hipótesis",
      closing: "Ninguna mejora se basó en opiniones. Todas fueron guiadas por datos.",
    },
    ch12: {
      sectionAriaLabel: "Resultado y aprendizaje",
      eyebrow: "Resultado",
      title: "La landing page se convirtió en el principal activo de adquisición de la operación.",
      bigNumberCaption: "de toda la demanda de la operación pasó por esta experiencia",
      barLabelLeft: "Esta landing page",
      barLabelRight: "Demás canales",
      paragraph:
        "La claridad convirtió más que la complejidad. Cada botón de WhatsApp, ubicado en el momento correcto, sostuvo este resultado, y el proceso de optimización continua mantuvo el número en aumento después del lanzamiento.",
      ctaLabel: "Ver la landing page en vivo",
    },
    nextCase: {
      eyebrow: "Próximo caso",
      title: "02 · Intelligence: diseñando experiencias de IA para equipos comerciales.",
      description:
        "Cómo transformar modelos, automatizaciones y recomendaciones en interacciones comprensibles y controlables.",
    },
  },
};

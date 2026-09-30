import type { Locale } from "@/lib/i18n/types";

export type HomeDictionary = {
  common: {
    backToPortfolio: string;
    backToPortfolioAria: string;
  };
  header: {
    navLinks: { impact: string; cases: string; contact: string };
    logoAria: string;
    navAriaDesktop: string;
    navAriaMobile: string;
    menuOpenAria: string;
    menuCloseAria: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaCases: string;
    ctaJourneyShort: string;
    ctaJourneyFull: string;
  };
  resultsList: {
    items: { metric: string; title: string; desc: string }[];
    detailsAriaPrefix: string;
  };
  companies: {
    eyebrow: string;
    title: string;
    items: { name: string }[];
  };
  impact: {
    eyebrow: string;
    title: string;
    description: string;
    pillars: { title: string; desc: string }[];
  };
  metrics: {
    eyebrow: string;
    title: string;
    items: { label: string; suffix?: string; context?: string }[];
  };
  cases: {
    eyebrow: string;
    title: string;
    ariaPrefix: string;
    items: {
      title: string;
      tag: string;
      body: string;
      stats: [string, string, string];
    }[];
  };
  process: {
    eyebrow: string;
    title: string;
    stepLabel: string;
    steps: { title: string; body: string }[];
  };
  expertiseStack: {
    eyebrow: string;
    title: string;
    items: { title: string }[];
  };
  journey: {
    eyebrow: string;
    title: string;
    roles: {
      company: string;
      role: string;
      period: string;
      highlight: string;
    }[];
  };
  stack: {
    eyebrow: string;
    title: string;
  };
  testimonials: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    prevAria: string;
    nextAria: string;
    dotAriaPrefix: string;
    navAriaLabel: string;
    items: {
      id: string;
      name: string;
      role: string;
      company?: string;
      photo: string;
      quote: string;
    }[];
  };
  blog: {
    eyebrow: string;
    title: string;
    descriptionPrefix: string;
    descriptionSuffix: string;
    viewAllLabel: string;
    readArticleLabel: string;
    prevAria: string;
    nextAria: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    availability: string;
    startConversation: string;
    downloadResume: string;
    modal: {
      description: string;
      scheduleCta: string;
    };
  };
  footer: {
    tagline: string;
    linkedinAria: string;
    behanceAria: string;
  };
  floatingActions: {
    scheduleLabel: string;
    resumeLabel: string;
    groupAria: string;
  };
};

export const home: Record<Locale, HomeDictionary> = {
  pt: {
    common: {
      backToPortfolio: "Portfólio",
      backToPortfolioAria: "Ir ao portfólio de Jhon Camilo Rios",
    },
    header: {
      navLinks: { impact: "Impacto", cases: "Cases", contact: "Contato" },
      logoAria: "Voltar ao início do portfólio de Jhon Camilo Rios",
      navAriaDesktop: "Navegação principal",
      navAriaMobile: "Navegação mobile",
      menuOpenAria: "Abrir menu",
      menuCloseAria: "Fechar menu",
    },
    hero: {
      eyebrow: "Senior Product Designer",
      title: "Produtos digitais construídos para gerar crescimento.",
      subtitle: "10 anos conectando produto, dados e comportamento humano.",
      ctaCases: "Ver Cases",
      ctaJourneyShort: "Trajetória",
      ctaJourneyFull: "Conhecer Minha Trajetória",
    },
    resultsList: {
      detailsAriaPrefix: "Ver detalhes",
      items: [
        {
          metric: "+140%",
          title: "Geração de leads em 2 meses",
          desc: "Resultado de uma estratégia conjunta do time de Growth Marketing. Minha parte: estruturação, testes A/B e escala contínua através de 58 landing pages de alta performance, projetadas e validadas iterativamente para otimizar canais de aquisição pagos e orgânicos.",
        },
        {
          metric: "+20%",
          title: "Aumento em vendas",
          desc: "Aplicação estrita de frameworks de CRO, mapeamento de gargalos comportamentais e otimização ponta a ponta de fluxos críticos de checkout e conversão digital.",
        },
        {
          metric: "15+",
          title: "Automações de IA",
          desc: "Sistemas inteligentes e agentes personalizados integrados ao fluxo de trabalho para aceleração de pesquisa, qualificação rápida de leads e automação de engajamento em tempo real.",
        },
        {
          metric: "Q1 Hit",
          title: "Meta em 20 de Jan",
          desc: "Validação ágil de hipóteses de growth e engenharia de produto focada em conversão que antecipou os resultados e bateu as metas do trimestre inteiro logo nos primeiros 20 dias do ano.",
        },
      ],
    },
    companies: {
      eyebrow: "Atuação",
      title: "Disciplinas do dia a dia.",
      items: [
        { name: "Produto" },
        { name: "Pesquisa" },
        { name: "Design Systems" },
        { name: "Prototipagem" },
        { name: "Automação com IA" },
        { name: "UX Writing" },
      ],
    },
    impact: {
      eyebrow: "Impacto & Negócios",
      title: "Design como motor de crescimento.",
      description:
        "O trabalho combina estratégia de produto de ponta, sistemas visuais robustos e execução técnica detalhada para transformar problemas ambiciosos em jornadas de produto extremamente limpas, mensuráveis e escaláveis.",
      pillars: [
        {
          title: "Growth",
          desc: "Arquitetura orientada por dados de conversão. Construção de loops de engajamento baseados em testes A/B estruturados e leitura analítica do funil para escalar canais de tração.",
        },
        {
          title: "AI",
          desc: "Agentes de IA integrados a fluxos de atendimento e vendas, qualificando leads e automatizando tarefas repetitivas sem perder o contexto da conversa.",
        },
        {
          title: "CRO",
          desc: "Eliminação sistemática de atritos em checkouts e funis de aquisição. Redesenho de jornadas guiado por testes e dados reais de comportamento, não por opinião.",
        },
        {
          title: "SaaS",
          desc: "Desenvolvimento de Design Systems e ecossistemas consistentes de alta fidelidade. Estruturas pensadas para sustentar escalabilidade técnica e uso diário intenso.",
        },
      ],
    },
    metrics: {
      eyebrow: "Em números",
      title: "Resultados que combinam design, dados e negócio.",
      items: [
        { label: "Construindo produtos digitais", suffix: " anos" },
        { label: "Ferramentas e diagnósticos com IA" },
        { label: "Crescimento na geração de leads", context: "Em 2 meses · estratégia do time de Growth Marketing" },
        { label: "Aumento no reconhecimento de marca" },
      ],
    },
    cases: {
      eyebrow: "Cases",
      title: "Projetos pensados para usuários, funis e times.",
      ariaPrefix: "Ver case",
      items: [
        {
          title: "Arquitetura de conversão para SaaS",
          tag: "CRO / Produto",
          body: "Reorganizar narrativa, hierarquia de valor e pontos de decisão para aumentar clareza em jornadas de aquisição.",
          stats: ["da demanda", "conversão", "conversas"],
        },
        {
          title: "Experiências com inteligência artificial",
          tag: "AI / UX",
          body: "Desenhar fluxos onde modelos, automações e feedback humano trabalham sem transformar complexidade técnica em carga cognitiva.",
          stats: ["qualificação", "pós 5º contato", "papéis de IA"],
        },
        {
          title: "Sistemas para times de crescimento",
          tag: "Growth / Design System",
          body: "Criar padrões visuais e operacionais que aceleram experimentos sem comprometer consistência ou qualidade percebida.",
          stats: ["mais rápido", "menos tokens", "componentes"],
        },
        {
          title: "Conteúdo como canal de aquisição",
          tag: "Content / UX / Growth",
          body: "Transformar mudanças técnicas do WhatsApp em identidade, blog, landing page e captação conectados na mesma jornada.",
          stats: ["custo por lead", "trilhas de conteúdo", "idiomas"],
        },
      ],
    },
    process: {
      eyebrow: "Método",
      title: "Clareza antes de superfície.",
      stepLabel: "Passo",
      steps: [
        {
          title: "Diagnóstico de negócio e comportamento",
          body: "O diagnóstico não começa com telas; começa com dados e funis. Análise das métricas de aquisição e retenção para identificar os gargalos reais de conversão, cruzando dados quantitativos e qualitativos do comportamento do usuário.",
        },
        {
          title: "Arquitetura de experiência e narrativa",
          body: "A jornada do usuário é estruturada para reduzir o custo de aquisição (CAC) e maximizar o LTV. Frameworks de CRO e IA mapeiam os fluxos de decisão, garantindo que a proposta de valor elimine qualquer atrito cognitivo.",
        },
        {
          title: "Prototipagem, teste e refinamento",
          body: "Hipóteses se transformam em protótipos de alta fidelidade. Cada interação é validada iterativamente com testes A/B e feedback real, garantindo que o design seja uma alavanca comprovada de conversão antes do desenvolvimento.",
        },
        {
          title: "Sistema visual pronto para escala",
          body: "Design Systems robustos e documentados, pensados para escala SaaS. O foco é garantir consistência visual global e um handoff impecável para a equipe de engenharia.",
        },
      ],
    },
    expertiseStack: {
      eyebrow: "Frentes de atuação",
      title: "Um designer, várias camadas de produto.",
      items: [
        { title: "Descoberta & pesquisa" },
        { title: "Arquitetura de informação" },
        { title: "UI & design visual" },
        { title: "Design systems" },
        { title: "Growth & CRO" },
        { title: "IA aplicada a produto" },
        { title: "Prototipagem" },
        { title: "Testes com usuários" },
        { title: "Dados & métricas" },
        { title: "Automação de fluxos" },
        { title: "Handoff para engenharia" },
        { title: "Comunicação com stakeholders" },
      ],
    },
    journey: {
      eyebrow: "Trajetória",
      title: "Dez anos transformando produtos em crescimento.",
      roles: [
        {
          company: "Clint · CRM & Plataforma de Vendas",
          role: "UX/UI Designer · Product & Growth",
          period: "2024 - Atual",
          highlight:
            "Criação de +15 produtos digitais e diagnósticos com IA para geração de demanda e qualificação de leads.",
        },
        {
          company: "e-Saúde Marketing",
          role: "UI Designer",
          period: "2023 - 2024",
          highlight:
            "Interfaces responsivas para sites e e-mail marketing, com +15% na taxa de conversão de leads.",
        },
        {
          company: "Binamik Tecnologia",
          role: "UX/UI Designer",
          period: "2023",
          highlight:
            "Gestão de Design Systems e UX Research, com +20% na taxa de abertura de campanhas.",
        },
        {
          company: "Bonitour Viagens e Turismo",
          role: "Web Designer",
          period: "2017 - 2023",
          highlight:
            "Rebranding completo e automação de marketing, com +40% no reconhecimento de marca.",
        },
        {
          company: "Telemark Spain",
          role: "Web Designer Gráfico",
          period: "2015 - 2016",
          highlight:
            "Sites para LATAM e Espanha com design culturalmente adaptado e colaboração internacional.",
        },
      ],
    },
    stack: {
      eyebrow: "Stack & Ferramentas",
      title: "Do discovery ao handoff, com IA acelerando cada etapa.",
    },
    testimonials: {
      eyebrow: "Recomendações · LinkedIn",
      titleLine1: "Quem já construiu",
      titleLine2: "comigo.",
      prevAria: "Anterior",
      nextAria: "Próxima",
      dotAriaPrefix: "Recomendação de",
      navAriaLabel: "Navegar entre recomendações",
      items: [
        {
          id: "juan",
          name: "Juan José H. Ramirez",
          role: "Senior Experience Designer",
          company: "Thoughtworks",
          photo: "/testimonials/juan.jpg",
          quote:
            "Profissional dedicado e criativo que demonstrou estar sempre atualizado em tendências e metodologias de design, contribuindo nos projetos com pensamento crítico.",
        },
        {
          id: "camila",
          name: "Camila Meneghetti",
          role: "Senior Product Manager",
          photo: "/testimonials/camila.jpg",
          quote:
            "Sempre interessado em compreender as motivações do usuário e como elas se conectam aos objetivos de negócio. Transita muito bem entre produto, design e tecnologia.",
        },
        {
          id: "marcos",
          name: "Marcos Gabriel Moreira",
          role: "Product Designer",
          photo: "/testimonials/marcos.jpg",
          quote:
            "Combina rigor técnico com um olhar clínico para criar peças de alto impacto, integrando IA ao workflow sem abrir mão da excelência estética. Eleva o nível de qualquer equipe.",
        },
        {
          id: "felippe",
          name: "Felippe Yann Machado",
          role: "RevOps & AI Integration",
          photo: "/testimonials/felippe.jpg",
          quote:
            "O designer mais versátil com quem já trabalhei. Usa ferramentas diversas para chegar a um produto final conciso, comunicativo e refinado.",
        },
        {
          id: "maria",
          name: "Maria Augusta Larré Lemos",
          role: "Analista de Inteligência de Mercado",
          photo: "/testimonials/maria.jpg",
          quote:
            "Eu delegava as demandas de UX/UI do briefing ao handoff, e ele sempre entregou com autonomia, técnica e senso de dono.",
        },
        {
          id: "isaque",
          name: "Isaque Fontinele",
          role: "Android Specialist",
          photo: "/testimonials/isaque.jpg",
          quote:
            "O Camilo é um profissional incrível. Faz produções audiovisuais fantásticas e pode desenhar interfaces para sistemas de fácil usabilidade pro usuário. Muito agradável de se trabalhar, traz leveza pro ambiente.",
        },
        {
          id: "luisa",
          name: "Luisa Oliveira",
          role: "Software Engineer",
          company: "TotalPass",
          photo: "/testimonials/luisa.jpg",
          quote:
            "Trabalhamos no mesmo time, eu como desenvolvedora e ele como designer. Sempre comprometido, criativo e colaborativo, entregava materiais de qualidade com rapidez e cuidado. Um parceiro confiável que trazia leveza para o dia a dia.",
        },
      ],
    },
    blog: {
      eyebrow: "Blog",
      title: "Textos sobre Product Design, IA e Growth.",
      descriptionPrefix: "",
      descriptionSuffix: "artigos publicados no Medium. Arraste ou use as setas para navegar.",
      viewAllLabel: "Ver todos no Medium",
      readArticleLabel: "Ler artigo",
      prevAria: "Artigos anteriores",
      nextAria: "Próximos artigos",
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos desenhar o próximo salto do produto.",
      availability: "Disponível para modelo híbrido ou remoto · Florianópolis, SC",
      startConversation: "Iniciar conversa",
      downloadResume: "Baixar currículo",
      modal: {
        description:
          "Escolha um horário na agenda para conversarmos sobre o seu produto, desafio ou oportunidade de crescimento.",
        scheduleCta: "Agendar conversa",
      },
    },
    footer: {
      tagline: "Produtos digitais construídos para gerar crescimento.",
      linkedinAria: "LinkedIn de Jhon Camilo Rios",
      behanceAria: "Behance de Jhon Camilo Rios",
    },
    floatingActions: {
      scheduleLabel: "Agendar reunião",
      resumeLabel: "Currículo",
      groupAria: "Ações rápidas",
    },
  },
  en: {
    common: {
      backToPortfolio: "Portfolio",
      backToPortfolioAria: "Go to Jhon Camilo Rios's portfolio",
    },
    header: {
      navLinks: { impact: "Impact", cases: "Cases", contact: "Contact" },
      logoAria: "Back to Jhon Camilo Rios's portfolio home",
      navAriaDesktop: "Main navigation",
      navAriaMobile: "Mobile navigation",
      menuOpenAria: "Open menu",
      menuCloseAria: "Close menu",
    },
    hero: {
      eyebrow: "Senior Product Designer",
      title: "Digital products built to drive growth.",
      subtitle: "10 years connecting product, data, and human behavior.",
      ctaCases: "View Cases",
      ctaJourneyShort: "Journey",
      ctaJourneyFull: "See My Journey",
    },
    resultsList: {
      detailsAriaPrefix: "View details",
      items: [
        {
          metric: "+140%",
          title: "Lead generation in 2 months",
          desc: "Result of a joint Growth Marketing team strategy. My part: structuring, A/B testing, and continuous scaling across 58 high-performance landing pages, designed and iteratively validated to optimize paid and organic acquisition channels.",
        },
        {
          metric: "+20%",
          title: "Sales increase",
          desc: "Rigorous application of CRO frameworks, mapping of behavioral bottlenecks, and end-to-end optimization of critical checkout and conversion flows.",
        },
        {
          metric: "15+",
          title: "AI automations",
          desc: "Intelligent systems and custom agents built into the workflow to accelerate research, speed up lead qualification, and automate real-time engagement.",
        },
        {
          metric: "Q1 Hit",
          title: "Target hit on Jan 20",
          desc: "Agile validation of growth hypotheses and conversion-focused product engineering that got ahead of results and hit the entire quarter's targets in the first 20 days of the year.",
        },
      ],
    },
    companies: {
      eyebrow: "Focus areas",
      title: "The disciplines behind the work.",
      items: [
        { name: "Product" },
        { name: "Research" },
        { name: "Design Systems" },
        { name: "Prototyping" },
        { name: "AI Automation" },
        { name: "UX Writing" },
      ],
    },
    impact: {
      eyebrow: "Impact & Business",
      title: "Design as a growth engine.",
      description:
        "The work combines sharp product strategy, robust visual systems, and detailed technical execution to turn ambitious problems into product journeys that are extremely clean, measurable, and scalable.",
      pillars: [
        {
          title: "Growth",
          desc: "Architecture driven by conversion data. Building engagement loops based on structured A/B testing and analytical funnel reading to scale traction channels.",
        },
        {
          title: "AI",
          desc: "AI agents integrated into support and sales flows, qualifying leads and automating repetitive tasks without losing the context of the conversation.",
        },
        {
          title: "CRO",
          desc: "Systematic elimination of friction across checkouts and acquisition funnels. Journeys redesigned based on tests and real behavioral data, not opinion.",
        },
        {
          title: "SaaS",
          desc: "Building Design Systems and consistent, high-fidelity ecosystems. Structures built to sustain technical scalability and intense daily use.",
        },
      ],
    },
    metrics: {
      eyebrow: "By the numbers",
      title: "Results that combine design, data, and business.",
      items: [
        { label: "Building digital products", suffix: " years" },
        { label: "AI-powered tools and diagnostics" },
        { label: "Growth in lead generation", context: "In 2 months · Growth Marketing team strategy" },
        { label: "Increase in brand recognition" },
      ],
    },
    cases: {
      eyebrow: "Cases",
      title: "Projects built for users, funnels, and teams.",
      ariaPrefix: "View case",
      items: [
        {
          title: "Conversion architecture for SaaS",
          tag: "CRO / Product",
          body: "Reorganizing narrative, value hierarchy, and decision points to bring more clarity to acquisition journeys.",
          stats: ["of demand", "conversion", "conversations"],
        },
        {
          title: "AI-powered experiences",
          tag: "AI / UX",
          body: "Designing flows where models, automation, and human feedback work together without turning technical complexity into cognitive load.",
          stats: ["qualification", "after 5th contact", "AI roles"],
        },
        {
          title: "Systems for growth teams",
          tag: "Growth / Design System",
          body: "Creating visual and operational standards that speed up experiments without compromising consistency or perceived quality.",
          stats: ["faster", "fewer tokens", "components"],
        },
        {
          title: "Content as an acquisition channel",
          tag: "Content / UX / Growth",
          body: "Turning WhatsApp's technical changes into identity, blog, landing page, and lead capture connected in one journey.",
          stats: ["cost per lead", "content tracks", "languages"],
        },
      ],
    },
    process: {
      eyebrow: "Method",
      title: "Clarity before surface.",
      stepLabel: "Step",
      steps: [
        {
          title: "Business and behavior diagnosis",
          body: "The diagnosis doesn't start with screens; it starts with data and funnels. Analyzing acquisition and retention metrics to identify the real conversion bottlenecks, cross-referencing quantitative and qualitative user behavior data.",
        },
        {
          title: "Experience and narrative architecture",
          body: "The user journey is structured to reduce customer acquisition cost (CAC) and maximize LTV. CRO and AI frameworks map decision flows, ensuring the value proposition eliminates any cognitive friction.",
        },
        {
          title: "Prototyping, testing, and refinement",
          body: "Hypotheses become high-fidelity prototypes. Every interaction is iteratively validated with A/B tests and real feedback, ensuring design is a proven conversion lever before development.",
        },
        {
          title: "Visual system ready to scale",
          body: "Robust, well-documented Design Systems built for SaaS scale. The focus is guaranteeing global visual consistency and a flawless handoff to the engineering team.",
        },
      ],
    },
    expertiseStack: {
      eyebrow: "Areas of practice",
      title: "One designer, many layers of product.",
      items: [
        { title: "Discovery & research" },
        { title: "Information architecture" },
        { title: "UI & visual design" },
        { title: "Design systems" },
        { title: "Growth & CRO" },
        { title: "AI applied to product" },
        { title: "Prototyping" },
        { title: "User testing" },
        { title: "Data & metrics" },
        { title: "Workflow automation" },
        { title: "Engineering handoff" },
        { title: "Stakeholder communication" },
      ],
    },
    journey: {
      eyebrow: "Journey",
      title: "Ten years turning products into growth.",
      roles: [
        {
          company: "Clint · CRM & Sales Platform",
          role: "UX/UI Designer · Product & Growth",
          period: "2024 - Present",
          highlight:
            "Built +15 digital products and AI diagnostics for demand generation and lead qualification.",
        },
        {
          company: "e-Saúde Marketing",
          role: "UI Designer",
          period: "2023 - 2024",
          highlight:
            "Responsive interfaces for websites and email marketing, driving a +15% lead conversion rate.",
        },
        {
          company: "Binamik Tecnologia",
          role: "UX/UI Designer",
          period: "2023",
          highlight:
            "Managed Design Systems and UX Research, driving a +20% campaign open rate.",
        },
        {
          company: "Bonitour Viagens e Turismo",
          role: "Web Designer",
          period: "2017 - 2023",
          highlight:
            "Full rebranding and marketing automation, driving +40% brand recognition.",
        },
        {
          company: "Telemark Spain",
          role: "Graphic Web Designer",
          period: "2015 - 2016",
          highlight:
            "Websites for LATAM and Spain with culturally adapted design and international collaboration.",
        },
      ],
    },
    stack: {
      eyebrow: "Stack & Tools",
      title: "From discovery to handoff, with AI speeding up every step.",
    },
    testimonials: {
      eyebrow: "Recommendations · LinkedIn",
      titleLine1: "People who've built",
      titleLine2: "alongside me.",
      prevAria: "Previous",
      nextAria: "Next",
      dotAriaPrefix: "Recommendation from",
      navAriaLabel: "Navigate between recommendations",
      items: [
        {
          id: "juan",
          name: "Juan José H. Ramirez",
          role: "Senior Experience Designer",
          company: "Thoughtworks",
          photo: "/testimonials/juan.jpg",
          quote:
            "A dedicated, creative professional who was always up to date on design trends and methodologies, contributing to projects with critical thinking.",
        },
        {
          id: "camila",
          name: "Camila Meneghetti",
          role: "Senior Product Manager",
          photo: "/testimonials/camila.jpg",
          quote:
            "Always interested in understanding user motivations and how they connect to business goals. Moves fluidly between product, design, and technology.",
        },
        {
          id: "marcos",
          name: "Marcos Gabriel Moreira",
          role: "Product Designer",
          photo: "/testimonials/marcos.jpg",
          quote:
            "Combines technical rigor with a sharp eye to create high-impact work, integrating AI into the workflow without giving up aesthetic excellence. Raises the bar for any team.",
        },
        {
          id: "felippe",
          name: "Felippe Yann Machado",
          role: "RevOps & AI Integration",
          photo: "/testimonials/felippe.jpg",
          quote:
            "The most versatile designer I've worked with. Uses a wide range of tools to land on a final product that's concise, communicative, and polished.",
        },
        {
          id: "maria",
          name: "Maria Augusta Larré Lemos",
          role: "Market Intelligence Analyst",
          photo: "/testimonials/maria.jpg",
          quote:
            "I'd hand off UX/UI needs from brief to handoff, and he always delivered with autonomy, skill, and ownership.",
        },
        {
          id: "isaque",
          name: "Isaque Fontinele",
          role: "Android Specialist",
          photo: "/testimonials/isaque.jpg",
          quote:
            "Camilo is an incredible professional. He produces fantastic audiovisual work and can design interfaces for systems that are easy for users to navigate. Great to work with, brings lightness to the room.",
        },
        {
          id: "luisa",
          name: "Luisa Oliveira",
          role: "Software Engineer",
          company: "TotalPass",
          photo: "/testimonials/luisa.jpg",
          quote:
            "We worked on the same team, me as a developer and him as a designer. Always committed, creative, and collaborative, he delivered quality work quickly and carefully. A reliable partner who brought lightness to the day-to-day.",
        },
      ],
    },
    blog: {
      eyebrow: "Blog",
      title: "Writing on Product Design, AI, and Growth.",
      descriptionPrefix: "",
      descriptionSuffix: "articles published on Medium. Drag or use the arrows to browse.",
      viewAllLabel: "See all on Medium",
      readArticleLabel: "Read article",
      prevAria: "Previous articles",
      nextAria: "Next articles",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's design the product's next leap forward.",
      availability: "Available for hybrid or remote work · Florianópolis, Brazil",
      startConversation: "Start a conversation",
      downloadResume: "Download resume",
      modal: {
        description:
          "Pick a time on the calendar to talk about your product, challenge, or growth opportunity.",
        scheduleCta: "Schedule a call",
      },
    },
    footer: {
      tagline: "Digital products built to drive growth.",
      linkedinAria: "Jhon Camilo Rios's LinkedIn",
      behanceAria: "Jhon Camilo Rios's Behance",
    },
    floatingActions: {
      scheduleLabel: "Schedule a call",
      resumeLabel: "Resume",
      groupAria: "Quick actions",
    },
  },
  es: {
    common: {
      backToPortfolio: "Portafolio",
      backToPortfolioAria: "Ir al portafolio de Jhon Camilo Rios",
    },
    header: {
      navLinks: { impact: "Impacto", cases: "Cases", contact: "Contacto" },
      logoAria: "Volver al inicio del portafolio de Jhon Camilo Rios",
      navAriaDesktop: "Navegación principal",
      navAriaMobile: "Navegación móvil",
      menuOpenAria: "Abrir menú",
      menuCloseAria: "Cerrar menú",
    },
    hero: {
      eyebrow: "Senior Product Designer",
      title: "Productos digitales construidos para generar crecimiento.",
      subtitle: "10 años conectando producto, datos y comportamiento humano.",
      ctaCases: "Ver Cases",
      ctaJourneyShort: "Trayectoria",
      ctaJourneyFull: "Conocer Mi Trayectoria",
    },
    resultsList: {
      detailsAriaPrefix: "Ver detalles",
      items: [
        {
          metric: "+140%",
          title: "Generación de leads en 2 meses",
          desc: "Resultado de una estrategia conjunta del equipo de Growth Marketing. Mi parte: estructuración, pruebas A/B y escalado continuo a través de 58 landing pages de alto rendimiento, diseñadas y validadas iterativamente para optimizar canales de adquisición pagos y orgánicos.",
        },
        {
          metric: "+20%",
          title: "Aumento en ventas",
          desc: "Aplicación estricta de frameworks de CRO, mapeo de cuellos de botella comportamentales y optimización de punta a punta de flujos críticos de checkout y conversión digital.",
        },
        {
          metric: "15+",
          title: "Automatizaciones de IA",
          desc: "Sistemas inteligentes y agentes personalizados integrados al flujo de trabajo para acelerar la investigación, calificar leads rápidamente y automatizar el engagement en tiempo real.",
        },
        {
          metric: "Q1 Hit",
          title: "Meta cumplida el 20 de ene.",
          desc: "Validación ágil de hipótesis de growth e ingeniería de producto enfocada en conversión que se adelantó a los resultados y cumplió las metas de todo el trimestre en los primeros 20 días del año.",
        },
      ],
    },
    companies: {
      eyebrow: "Actuación",
      title: "Disciplinas del día a día.",
      items: [
        { name: "Producto" },
        { name: "Investigación" },
        { name: "Design Systems" },
        { name: "Prototipado" },
        { name: "Automatización con IA" },
        { name: "UX Writing" },
      ],
    },
    impact: {
      eyebrow: "Impacto & Negocio",
      title: "Diseño como motor de crecimiento.",
      description:
        "El trabajo combina estrategia de producto de punta, sistemas visuales robustos y ejecución técnica detallada para transformar problemas ambiciosos en experiencias de producto extremadamente limpias, medibles y escalables.",
      pillars: [
        {
          title: "Growth",
          desc: "Arquitectura orientada por datos de conversión. Construcción de loops de engagement basados en pruebas A/B estructuradas y lectura analítica del funnel para escalar canales de tracción.",
        },
        {
          title: "AI",
          desc: "Agentes de IA integrados a flujos de atención y ventas, calificando leads y automatizando tareas repetitivas sin perder el contexto de la conversación.",
        },
        {
          title: "CRO",
          desc: "Eliminación sistemática de fricciones en checkouts y funnels de adquisición. Rediseño de experiencias guiado por pruebas y datos reales de comportamiento, no por opinión.",
        },
        {
          title: "SaaS",
          desc: "Desarrollo de Design Systems y ecosistemas consistentes de alta fidelidad. Estructuras pensadas para sostener escalabilidad técnica y uso diario intenso.",
        },
      ],
    },
    metrics: {
      eyebrow: "En números",
      title: "Resultados que combinan diseño, datos y negocio.",
      items: [
        { label: "Construyendo productos digitales", suffix: " años" },
        { label: "Herramientas y diagnósticos con IA" },
        { label: "Crecimiento en generación de leads", context: "En 2 meses · estrategia del equipo de Growth Marketing" },
        { label: "Aumento en reconocimiento de marca" },
      ],
    },
    cases: {
      eyebrow: "Cases",
      title: "Proyectos pensados para usuarios, funnels y equipos.",
      ariaPrefix: "Ver case",
      items: [
        {
          title: "Arquitectura de conversión para SaaS",
          tag: "CRO / Producto",
          body: "Reorganizar narrativa, jerarquía de valor y puntos de decisión para aumentar la claridad en las experiencias de adquisición.",
          stats: ["de la demanda", "conversión", "conversaciones"],
        },
        {
          title: "Experiencias con inteligencia artificial",
          tag: "AI / UX",
          body: "Diseñar flujos donde modelos, automatizaciones y feedback humano trabajan juntos sin convertir la complejidad técnica en carga cognitiva.",
          stats: ["calificación", "tras 5° contacto", "roles de IA"],
        },
        {
          title: "Sistemas para equipos de crecimiento",
          tag: "Growth / Design System",
          body: "Crear estándares visuales y operativos que aceleran experimentos sin comprometer la consistencia ni la calidad percibida.",
          stats: ["más rápido", "menos tokens", "componentes"],
        },
        {
          title: "Contenido como canal de adquisición",
          tag: "Content / UX / Growth",
          body: "Convertir los cambios técnicos de WhatsApp en identidad, blog, landing page y captación conectados en un mismo recorrido.",
          stats: ["costo por lead", "líneas de contenido", "idiomas"],
        },
      ],
    },
    process: {
      eyebrow: "Método",
      title: "Claridad antes que superficie.",
      stepLabel: "Paso",
      steps: [
        {
          title: "Diagnóstico de negocio y comportamiento",
          body: "El diagnóstico no comienza con pantallas; comienza con datos y funnels. Análisis de las métricas de adquisición y retención para identificar los cuellos de botella reales de conversión, cruzando datos cuantitativos y cualitativos del comportamiento del usuario.",
        },
        {
          title: "Arquitectura de experiencia y narrativa",
          body: "El recorrido del usuario se estructura para reducir el costo de adquisición (CAC) y maximizar el LTV. Frameworks de CRO e IA mapean los flujos de decisión, garantizando que la propuesta de valor elimine cualquier fricción cognitiva.",
        },
        {
          title: "Prototipado, prueba y refinamiento",
          body: "Las hipótesis se convierten en prototipos de alta fidelidad. Cada interacción se valida iterativamente con pruebas A/B y feedback real, garantizando que el diseño sea una palanca comprobada de conversión antes del desarrollo.",
        },
        {
          title: "Sistema visual listo para escalar",
          body: "Design Systems robustos y documentados, pensados para escala SaaS. El foco está en garantizar consistencia visual global y un handoff impecable para el equipo de ingeniería.",
        },
      ],
    },
    expertiseStack: {
      eyebrow: "Frentes de actuación",
      title: "Un diseñador, varias capas de producto.",
      items: [
        { title: "Descubrimiento & investigación" },
        { title: "Arquitectura de información" },
        { title: "UI & diseño visual" },
        { title: "Design systems" },
        { title: "Growth & CRO" },
        { title: "IA aplicada a producto" },
        { title: "Prototipado" },
        { title: "Pruebas con usuarios" },
        { title: "Datos & métricas" },
        { title: "Automatización de flujos" },
        { title: "Handoff para ingeniería" },
        { title: "Comunicación con stakeholders" },
      ],
    },
    journey: {
      eyebrow: "Trayectoria",
      title: "Diez años transformando productos en crecimiento.",
      roles: [
        {
          company: "Clint · CRM & Plataforma de Ventas",
          role: "UX/UI Designer · Product & Growth",
          period: "2024 - Actual",
          highlight:
            "Creación de +15 productos digitales y diagnósticos con IA para generación de demanda y calificación de leads.",
        },
        {
          company: "e-Saúde Marketing",
          role: "UI Designer",
          period: "2023 - 2024",
          highlight:
            "Interfaces responsivas para sitios web y email marketing, con +15% en la tasa de conversión de leads.",
        },
        {
          company: "Binamik Tecnologia",
          role: "UX/UI Designer",
          period: "2023",
          highlight:
            "Gestión de Design Systems y UX Research, con +20% en la tasa de apertura de campañas.",
        },
        {
          company: "Bonitour Viagens e Turismo",
          role: "Web Designer",
          period: "2017 - 2023",
          highlight:
            "Rebranding completo y automatización de marketing, con +40% en reconocimiento de marca.",
        },
        {
          company: "Telemark Spain",
          role: "Diseñador Web Gráfico",
          period: "2015 - 2016",
          highlight:
            "Sitios web para LATAM y España con diseño culturalmente adaptado y colaboración internacional.",
        },
      ],
    },
    stack: {
      eyebrow: "Stack & Herramientas",
      title: "Del discovery al handoff, con IA acelerando cada etapa.",
    },
    testimonials: {
      eyebrow: "Recomendaciones · LinkedIn",
      titleLine1: "Quienes ya construyeron",
      titleLine2: "conmigo.",
      prevAria: "Anterior",
      nextAria: "Siguiente",
      dotAriaPrefix: "Recomendación de",
      navAriaLabel: "Navegar entre recomendaciones",
      items: [
        {
          id: "juan",
          name: "Juan José H. Ramirez",
          role: "Senior Experience Designer",
          company: "Thoughtworks",
          photo: "/testimonials/juan.jpg",
          quote:
            "Profesional dedicado y creativo que demostró estar siempre actualizado en tendencias y metodologías de diseño, aportando a los proyectos con pensamiento crítico.",
        },
        {
          id: "camila",
          name: "Camila Meneghetti",
          role: "Senior Product Manager",
          photo: "/testimonials/camila.jpg",
          quote:
            "Siempre interesado en comprender las motivaciones del usuario y cómo se conectan con los objetivos de negocio. Se mueve muy bien entre producto, diseño y tecnología.",
        },
        {
          id: "marcos",
          name: "Marcos Gabriel Moreira",
          role: "Product Designer",
          photo: "/testimonials/marcos.jpg",
          quote:
            "Combina rigor técnico con una mirada clínica para crear piezas de alto impacto, integrando IA al workflow sin renunciar a la excelencia estética. Eleva el nivel de cualquier equipo.",
        },
        {
          id: "felippe",
          name: "Felippe Yann Machado",
          role: "RevOps & AI Integration",
          photo: "/testimonials/felippe.jpg",
          quote:
            "El diseñador más versátil con el que he trabajado. Usa herramientas diversas para llegar a un producto final conciso, comunicativo y refinado.",
        },
        {
          id: "maria",
          name: "Maria Augusta Larré Lemos",
          role: "Analista de Inteligencia de Mercado",
          photo: "/testimonials/maria.jpg",
          quote:
            "Yo delegaba las demandas de UX/UI desde el brief hasta el handoff, y él siempre entregó con autonomía, técnica y sentido de dueño.",
        },
        {
          id: "isaque",
          name: "Isaque Fontinele",
          role: "Android Specialist",
          photo: "/testimonials/isaque.jpg",
          quote:
            "Camilo es un profesional increíble. Hace producciones audiovisuales fantásticas y puede diseñar interfaces para sistemas de fácil usabilidad para el usuario. Muy agradable para trabajar, aporta ligereza al ambiente.",
        },
        {
          id: "luisa",
          name: "Luisa Oliveira",
          role: "Software Engineer",
          company: "TotalPass",
          photo: "/testimonials/luisa.jpg",
          quote:
            "Trabajamos en el mismo equipo, yo como desarrolladora y él como diseñador. Siempre comprometido, creativo y colaborativo, entregaba materiales de calidad con rapidez y cuidado. Un compañero confiable que aportaba ligereza al día a día.",
        },
      ],
    },
    blog: {
      eyebrow: "Blog",
      title: "Textos sobre Product Design, IA y Growth.",
      descriptionPrefix: "",
      descriptionSuffix: "artículos publicados en Medium. Arrastra o usa las flechas para navegar.",
      viewAllLabel: "Ver todos en Medium",
      readArticleLabel: "Leer artículo",
      prevAria: "Artículos anteriores",
      nextAria: "Artículos siguientes",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Diseñemos el próximo salto del producto.",
      availability: "Disponible en modalidad híbrida o remota · Florianópolis, Brasil",
      startConversation: "Iniciar conversación",
      downloadResume: "Descargar currículum",
      modal: {
        description:
          "Elige un horario en la agenda para conversar sobre tu producto, desafío u oportunidad de crecimiento.",
        scheduleCta: "Agendar conversación",
      },
    },
    footer: {
      tagline: "Productos digitales construidos para generar crecimiento.",
      linkedinAria: "LinkedIn de Jhon Camilo Rios",
      behanceAria: "Behance de Jhon Camilo Rios",
    },
    floatingActions: {
      scheduleLabel: "Agendar reunión",
      resumeLabel: "Currículum",
      groupAria: "Acciones rápidas",
    },
  },
};

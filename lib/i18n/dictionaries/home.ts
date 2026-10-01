import type { Locale } from "@/lib/i18n/types";

export type HomeDictionary = {
  common: {
    backToPortfolio: string;
    backToPortfolioAria: string;
  };
  header: {
    navLinks: { impact: string; cases: string; blog: string; contact: string };
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
    ctaContact: string;
    ctaResume: string;
  };
  resultsList: {
    items: { metric: string; title: string; desc: string }[];
    detailsAriaPrefix: string;
    hint: string;
    hintTouch: string;
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
    picker: {
      question: string;
      helper: string;
      showingFor: string;
      edit: string;
      reset: string;
      because: string;
      prev: string;
      next: string;
      options: Record<"ux" | "ui" | "growth", { label: string; desc: string }>;
    };
    labels: { role: string; challenge: string; result: string; roleValue: string };
    items: {
      project: string;
      company: string;
      specialty: string;
      body: string;
      stats: [string, string, string];
    }[];
  };
  aiProcess: {
    eyebrow: string;
    title: string;
    message: string;
    legendAi: string;
    legendMe: string;
    steps: { title: string; body: string }[];
    proofTitle: string;
    proofs: { case: string; body: string }[];
  };
  process: {
    eyebrow: string;
    title: string;
    intro: string;
    stepLabel: string;
    steps: { title: string; body: string; example?: string }[];
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
      navLinks: { impact: "Impacto", cases: "Cases", blog: "Blog", contact: "Contato" },
      logoAria: "Voltar ao início do portfólio de Jhon Camilo Rios",
      navAriaDesktop: "Navegação principal",
      navAriaMobile: "Navegação mobile",
      menuOpenAria: "Abrir menu",
      menuCloseAria: "Fechar menu",
    },
    hero: {
      eyebrow: "Product Designer · UX, Growth & AI",
      title: "Desenho produtos que as pessoas entendem e que o negócio consegue medir.",
      subtitle: "10 anos unindo pesquisa, interface, dados e IA para transformar problemas complexos em experiências simples.",
      ctaCases: "Ver projetos",
      ctaContact: "Entrar em contato",
      ctaResume: "Currículo",
      ctaJourneyShort: "Trajetória",
      ctaJourneyFull: "Conhecer Minha Trajetória",
    },
    resultsList: {
      detailsAriaPrefix: "Ver detalhes",
      hint: "Clique para ver o contexto",
      hintTouch: "Toque para ver o contexto",
      items: [
        {
          metric: "+140%",
          title: "Geração de leads em 2 meses",
          desc: "Resultado de uma estratégia conjunta do time de Growth Marketing. Minha parte: estruturação, testes A/B e escala contínua através de 58 landing pages de alta performance, projetadas e validadas iterativamente para otimizar canais de aquisição pagos e orgânicos.",
        },
        {
          metric: "1.680",
          title: "Inscrições na live em 4 dias",
          desc: "WhatsApp Next: campanha de conteúdo, landing page e ads levaram 1.680 pessoas a se inscrever na live em 4 dias. A landing page converteu 25% das visitas em inscrição.",
        },
        {
          metric: "Q1 Hit",
          title: "Meta em 20 de Jan",
          desc: "Testamos hipóteses de growth cedo e ajustamos as páginas de conversão rápido. Com isso, a meta do trimestre foi batida em 20 de janeiro, nos primeiros 20 dias do ano.",
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
      picker: {
        question: "O que você gostaria de explorar?",
        helper: "Escolha um caminho e os 3 primeiros cases se reorganizam. Todos continuam disponíveis.",
        showingFor: "Mostrando primeiro:",
        edit: "trocar",
        reset: "ver ordem padrão",
        because: "Porque você escolheu",
        prev: "Cases anteriores",
        next: "Próximos cases",
        options: {
          "ux": { label: "UX & Product", desc: "Pesquisa, arquitetura, jornadas, prototipagem e decisões de produto." },
          "ui": { label: "UI & Creative", desc: "Interfaces, sistemas visuais, motion, IA e experiências digitais." },
          "growth": { label: "Growth & Business", desc: "Aquisição, CRO, conversão, métricas e experimentação." },
        },
      },
      labels: { role: "Papel", challenge: "Desafio", result: "Resultado", roleValue: "Product Designer" },
      items: [
        {
          project: "Clint Acquire",
          company: "Clint",
          specialty: "CRO · PRODUCT · UX",
          body: "Reorganizar narrativa, hierarquia de valor e pontos de decisão para aumentar clareza em jornadas de aquisição.",
          stats: ["da demanda", "conversão", "conversas"],
        },
        {
          project: "Clint Intelligence",
          company: "Clint",
          specialty: "AI · UX · PRODUCT",
          body: "Desenhar fluxos onde modelos, automações e feedback humano trabalham sem transformar complexidade técnica em carga cognitiva.",
          stats: ["qualificação", "pós 5º contato", "papéis de IA"],
        },
        {
          project: "Clint Scale",
          company: "Clint",
          specialty: "DESIGN SYSTEM · GROWTH · AI",
          body: "Criar padrões visuais e operacionais que aceleram experimentos sem comprometer consistência ou qualidade percebida.",
          stats: ["mais rápido", "menos tokens", "componentes"],
        },
        {
          project: "WhatsApp Next",
          company: "Clint",
          specialty: "GROWTH · CONTENT · LEAD GENERATION",
          body: "Transformar mudanças técnicas do WhatsApp em identidade, blog, landing page e captação conectados na mesma jornada.",
          stats: ["custo por lead", "inscrições em 4 dias", "conversão da LP"],
        },
        {
          project: "Servientrega",
          company: "Projeto conceitual",
          specialty: "UI · AI · MOTION · CREATIVE TECHNOLOGY",
          body: "Transformar a jornada de uma encomenda em narrativa interativa, com scroll, WebGL e direção de arte apoiada por IA.",
          stats: ["etapas", "cena WebGL", "idiomas"],
        },
      ],
    },
    aiProcess: {
      eyebrow: "IA no meu processo",
      title: "A IA amplia, a decisão é minha.",
      message: "A IA amplia minha capacidade de explorar possibilidades, criar alternativas e acelerar a prototipagem. Eu dou o direcional, envio as referências e faço o refinamento. A IA não substitui o processo de design: curadoria, direção e validação continuam sendo minhas.",
      legendAi: "Eu direciono, IA acelera",
      legendMe: "Eu decido",
      steps: [
        { title: "Research", body: "Eu defino as perguntas; a IA acelera a síntese de entrevistas e a leitura de dados." },
        { title: "Exploration", body: "Eu envio as referências; a IA abre mais caminhos em menos tempo." },
        { title: "Ideation", body: "A partir do meu direcional, variações de conceito, copy e estrutura." },
        { title: "Generation", body: "Imagens e rascunhos gerados com as minhas referências, depois refinados por mim." },
        { title: "Curation", body: "Escolho o que faz sentido para o usuário e o negócio." },
        { title: "Art Direction", body: "Defino linguagem visual, tom e consistência." },
        { title: "Prototype", body: "Eu desenho o fluxo; a IA ajuda a deixar o protótipo navegável mais rápido." },
        { title: "Build", body: "Do protótipo para código real, com revisão e refinamento meus." },
        { title: "Test", body: "Testo com pessoas e dados reais." },
        { title: "Product", body: "O que vai para o ar tem critério, não só velocidade." },
      ],
      proofTitle: "Onde isso aparece nos cases",
      proofs: [
        { case: "Servientrega", body: "Direção de arte apoiada por IA em uma experiência com scroll e WebGL." },
        { case: "Clint Intelligence", body: "Desenho do comportamento de agentes de IA dentro do CRM." },
        { case: "Clint Scale", body: "Componentes de IA dentro do design system." },
      ],
    },
    process: {
      eyebrow: "Como eu trabalho",
      title: "Do contexto ao impacto medido.",
      stepLabel: "Passo",
      intro: "Um processo simples, que se adapta ao tamanho do problema. O que não muda: entender antes de desenhar e medir depois de entregar.",
      steps: [
        { title: "Understand", body: "Usuário, negócio e contexto. Antes de abrir o Figma, olho dados de funil, gravações de sessão e converso com quem usa e com quem vende. O objetivo é entender onde a experiência trava." },
        { title: "Define", body: "Problema, oportunidade e hipótese. Transformo o que aprendi em uma frase testável: o que vamos mudar, o que esperamos que aconteça e como vamos medir." },
        { title: "Explore", body: "Arquitetura, fluxos e protótipos. Desenho a jornada inteira antes das telas e uso IA para explorar mais alternativas em menos tempo.", example: "Servientrega: a jornada da encomenda organizada em 6 etapas." },
        { title: "Validate", body: "Testes, dados e feedback. Protótipos vão para teste com usuários e experimentos A/B. A decisão vem do comportamento, não da opinião mais alta na sala.", example: "Acquire: testes A/B em 58 landing pages." },
        { title: "Build", body: "UI, design system e desenvolvimento. Tokens, componentes e documentação para o time construir rápido e consistente. Quando faz sentido, eu mesmo levo para código.", example: "Scale: tokens e componentes prontos para o time de Growth." },
        { title: "Measure", body: "Métricas, comportamento e impacto. Depois de entregar, acompanho os números e o comportamento real. O que aprendo vira o ponto de partida do próximo ciclo.", example: "WhatsApp Next: 25% de conversão na landing page." },
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
      navLinks: { impact: "Impact", cases: "Cases", blog: "Blog", contact: "Contact" },
      logoAria: "Back to Jhon Camilo Rios's portfolio home",
      navAriaDesktop: "Main navigation",
      navAriaMobile: "Mobile navigation",
      menuOpenAria: "Open menu",
      menuCloseAria: "Close menu",
    },
    hero: {
      eyebrow: "Product Designer · UX, Growth & AI",
      title: "I design products people understand and businesses can measure.",
      subtitle: "10 years bringing research, interface, data and AI together to turn complex problems into simple experiences.",
      ctaCases: "View projects",
      ctaContact: "Get in touch",
      ctaResume: "Resume",
      ctaJourneyShort: "Journey",
      ctaJourneyFull: "See My Journey",
    },
    resultsList: {
      detailsAriaPrefix: "View details",
      hint: "Click to see the context",
      hintTouch: "Tap to see the context",
      items: [
        {
          metric: "+140%",
          title: "Lead generation in 2 months",
          desc: "Result of a joint Growth Marketing team strategy. My part: structuring, A/B testing, and continuous scaling across 58 high-performance landing pages, designed and iteratively validated to optimize paid and organic acquisition channels.",
        },
        {
          metric: "1,680",
          title: "Live sign-ups in 4 days",
          desc: "WhatsApp Next: a content campaign, landing page and ads brought 1,680 people to sign up for the live session in 4 days. The landing page converted 25% of visits into sign-ups.",
        },
        {
          metric: "Q1 Hit",
          title: "Target hit on Jan 20",
          desc: "We tested growth hypotheses early and adjusted the conversion pages fast. As a result, the quarterly target was hit on January 20, within the first 20 days of the year.",
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
      picker: {
        question: "What would you like to explore?",
        helper: "Pick a path and the first 3 cases reorder. All of them stay available.",
        showingFor: "Showing first:",
        edit: "change",
        reset: "default order",
        because: "Because you picked",
        prev: "Previous cases",
        next: "Next cases",
        options: {
          "ux": { label: "UX & Product", desc: "Research, architecture, journeys, prototyping and product decisions." },
          "ui": { label: "UI & Creative", desc: "Interfaces, visual systems, motion, AI and digital experiences." },
          "growth": { label: "Growth & Business", desc: "Acquisition, CRO, conversion, metrics and experimentation." },
        },
      },
      labels: { role: "Role", challenge: "Challenge", result: "Result", roleValue: "Product Designer" },
      items: [
        {
          project: "Clint Acquire",
          company: "Clint",
          specialty: "CRO · PRODUCT · UX",
          body: "Reorganizing narrative, value hierarchy, and decision points to bring more clarity to acquisition journeys.",
          stats: ["of demand", "conversion", "conversations"],
        },
        {
          project: "Clint Intelligence",
          company: "Clint",
          specialty: "AI · UX · PRODUCT",
          body: "Designing flows where models, automation, and human feedback work together without turning technical complexity into cognitive load.",
          stats: ["qualification", "after 5th contact", "AI roles"],
        },
        {
          project: "Clint Scale",
          company: "Clint",
          specialty: "DESIGN SYSTEM · GROWTH · AI",
          body: "Creating visual and operational standards that speed up experiments without compromising consistency or perceived quality.",
          stats: ["faster", "fewer tokens", "components"],
        },
        {
          project: "WhatsApp Next",
          company: "Clint",
          specialty: "GROWTH · CONTENT · LEAD GENERATION",
          body: "Turning WhatsApp's technical changes into identity, blog, landing page, and lead capture connected in one journey.",
          stats: ["cost per lead", "sign-ups in 4 days", "LP conversion"],
        },
        {
          project: "Servientrega",
          company: "Concept project",
          specialty: "UI · AI · MOTION · CREATIVE TECHNOLOGY",
          body: "Turning a parcel's journey into an interactive story with scroll, WebGL, and AI-assisted art direction.",
          stats: ["stages", "WebGL scene", "languages"],
        },
      ],
    },
    aiProcess: {
      eyebrow: "AI in my design process",
      title: "AI expands, I decide.",
      message: "AI expands my ability to explore possibilities, create alternatives and speed up prototyping. I set the direction, send the references and do the refinement. AI does not replace the design process: curation, direction and validation are still mine.",
      legendAi: "I direct, AI speeds up",
      legendMe: "I decide",
      steps: [
        { title: "Research", body: "I define the questions; AI speeds up interview synthesis and data reading." },
        { title: "Exploration", body: "I send the references; AI opens more paths in less time." },
        { title: "Ideation", body: "From my direction, variations of concept, copy and structure." },
        { title: "Generation", body: "Images and drafts generated from my references, then refined by me." },
        { title: "Curation", body: "I pick what makes sense for users and the business." },
        { title: "Art Direction", body: "I set visual language, tone and consistency." },
        { title: "Prototype", body: "I design the flow; AI helps make the prototype clickable faster." },
        { title: "Build", body: "From prototype to real code, with my review and refinement." },
        { title: "Test", body: "I test with real people and real data." },
        { title: "Product", body: "What ships has judgment behind it, not just speed." },
      ],
      proofTitle: "Where it shows up in the cases",
      proofs: [
        { case: "Servientrega", body: "AI-assisted art direction in a scroll and WebGL experience." },
        { case: "Clint Intelligence", body: "Designing how AI agents behave inside the CRM." },
        { case: "Clint Scale", body: "AI components inside the design system." },
      ],
    },
    process: {
      eyebrow: "How I work",
      title: "From context to measured impact.",
      stepLabel: "Step",
      intro: "A simple process that scales with the size of the problem. What never changes: understand before designing, measure after shipping.",
      steps: [
        { title: "Understand", body: "Users, business and context. Before opening Figma, I look at funnel data and session recordings, and I talk to the people who use and sell the product. The goal is to find where the experience gets stuck." },
        { title: "Define", body: "Problem, opportunity and hypothesis. I turn what I learned into a testable statement: what we will change, what we expect to happen and how we will measure it." },
        { title: "Explore", body: "Architecture, flows and prototypes. I design the whole journey before the screens and use AI to explore more alternatives in less time.", example: "Servientrega: the parcel journey organized in 6 stages." },
        { title: "Validate", body: "Tests, data and feedback. Prototypes go through user tests and A/B experiments. Decisions come from behavior, not from the loudest opinion in the room.", example: "Acquire: A/B tests across 58 landing pages." },
        { title: "Build", body: "UI, design system and development. Tokens, components and documentation so the team can build fast and consistently. When it makes sense, I take it to code myself.", example: "Scale: tokens and components ready for the Growth team." },
        { title: "Measure", body: "Metrics, behavior and impact. After shipping, I follow the numbers and real behavior. What I learn becomes the starting point of the next cycle.", example: "WhatsApp Next: 25% landing page conversion." },
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
      navLinks: { impact: "Impacto", cases: "Cases", blog: "Blog", contact: "Contacto" },
      logoAria: "Volver al inicio del portafolio de Jhon Camilo Rios",
      navAriaDesktop: "Navegación principal",
      navAriaMobile: "Navegación móvil",
      menuOpenAria: "Abrir menú",
      menuCloseAria: "Cerrar menú",
    },
    hero: {
      eyebrow: "Product Designer · UX, Growth & AI",
      title: "Diseño productos que las personas entienden y que el negocio puede medir.",
      subtitle: "10 años uniendo investigación, interfaz, datos e IA para convertir problemas complejos en experiencias simples.",
      ctaCases: "Ver proyectos",
      ctaContact: "Hablemos",
      ctaResume: "Currículum",
      ctaJourneyShort: "Trayectoria",
      ctaJourneyFull: "Conocer Mi Trayectoria",
    },
    resultsList: {
      detailsAriaPrefix: "Ver detalles",
      hint: "Haz clic para ver el contexto",
      hintTouch: "Toca para ver el contexto",
      items: [
        {
          metric: "+140%",
          title: "Generación de leads en 2 meses",
          desc: "Resultado de una estrategia conjunta del equipo de Growth Marketing. Mi parte: estructuración, pruebas A/B y escalado continuo a través de 58 landing pages de alto rendimiento, diseñadas y validadas iterativamente para optimizar canales de adquisición pagos y orgánicos.",
        },
        {
          metric: "1.680",
          title: "Inscripciones al live en 4 días",
          desc: "WhatsApp Next: una campaña de contenido, landing page y ads llevaron a 1.680 personas a inscribirse al live en 4 días. La landing page convirtió el 25% de las visitas en inscripción.",
        },
        {
          metric: "Q1 Hit",
          title: "Meta cumplida el 20 de ene.",
          desc: "Probamos hipótesis de growth temprano y ajustamos rápido las páginas de conversión. Así, la meta del trimestre se cumplió el 20 de enero, en los primeros 20 días del año.",
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
      picker: {
        question: "¿Qué te gustaría explorar?",
        helper: "Elige un camino y los 3 primeros cases se reorganizan. Todos siguen disponibles.",
        showingFor: "Mostrando primero:",
        edit: "cambiar",
        reset: "orden por defecto",
        because: "Porque elegiste",
        prev: "Cases anteriores",
        next: "Siguientes cases",
        options: {
          "ux": { label: "UX & Product", desc: "Investigación, arquitectura, journeys, prototipado y decisiones de producto." },
          "ui": { label: "UI & Creative", desc: "Interfaces, sistemas visuales, motion, IA y experiencias digitales." },
          "growth": { label: "Growth & Business", desc: "Adquisición, CRO, conversión, métricas y experimentación." },
        },
      },
      labels: { role: "Rol", challenge: "Desafío", result: "Resultado", roleValue: "Product Designer" },
      items: [
        {
          project: "Clint Acquire",
          company: "Clint",
          specialty: "CRO · PRODUCT · UX",
          body: "Reorganizar narrativa, jerarquía de valor y puntos de decisión para aumentar la claridad en las experiencias de adquisición.",
          stats: ["de la demanda", "conversión", "conversaciones"],
        },
        {
          project: "Clint Intelligence",
          company: "Clint",
          specialty: "AI · UX · PRODUCT",
          body: "Diseñar flujos donde modelos, automatizaciones y feedback humano trabajan juntos sin convertir la complejidad técnica en carga cognitiva.",
          stats: ["calificación", "tras 5° contacto", "roles de IA"],
        },
        {
          project: "Clint Scale",
          company: "Clint",
          specialty: "DESIGN SYSTEM · GROWTH · AI",
          body: "Crear estándares visuales y operativos que aceleran experimentos sin comprometer la consistencia ni la calidad percibida.",
          stats: ["más rápido", "menos tokens", "componentes"],
        },
        {
          project: "WhatsApp Next",
          company: "Clint",
          specialty: "GROWTH · CONTENT · LEAD GENERATION",
          body: "Convertir los cambios técnicos de WhatsApp en identidad, blog, landing page y captación conectados en un mismo recorrido.",
          stats: ["costo por lead", "inscripciones en 4 días", "conversión de la LP"],
        },
        {
          project: "Servientrega",
          company: "Proyecto conceptual",
          specialty: "UI · AI · MOTION · CREATIVE TECHNOLOGY",
          body: "Convertir el recorrido de un envío en una narrativa interactiva, con scroll, WebGL y dirección de arte apoyada por IA.",
          stats: ["etapas", "escena WebGL", "idiomas"],
        },
      ],
    },
    aiProcess: {
      eyebrow: "IA en mi proceso",
      title: "La IA amplía, la decisión es mía.",
      message: "La IA amplía mi capacidad de explorar posibilidades, crear alternativas y acelerar el prototipado. Yo doy la dirección, envío las referencias y hago el refinamiento. La IA no reemplaza el proceso de diseño: curaduría, dirección y validación siguen siendo mías.",
      legendAi: "Yo dirijo, la IA acelera",
      legendMe: "Yo decido",
      steps: [
        { title: "Research", body: "Yo defino las preguntas; la IA acelera la síntesis de entrevistas y la lectura de datos." },
        { title: "Exploration", body: "Yo envío las referencias; la IA abre más caminos en menos tiempo." },
        { title: "Ideation", body: "A partir de mi dirección, variaciones de concepto, copy y estructura." },
        { title: "Generation", body: "Imágenes y bocetos generados con mis referencias, luego refinados por mí." },
        { title: "Curation", body: "Elijo lo que tiene sentido para el usuario y el negocio." },
        { title: "Art Direction", body: "Defino lenguaje visual, tono y consistencia." },
        { title: "Prototype", body: "Yo diseño el flujo; la IA ayuda a tener el prototipo navegable más rápido." },
        { title: "Build", body: "Del prototipo a código real, con mi revisión y refinamiento." },
        { title: "Test", body: "Pruebo con personas y datos reales." },
        { title: "Product", body: "Lo que sale al aire tiene criterio, no solo velocidad." },
      ],
      proofTitle: "Dónde aparece en los cases",
      proofs: [
        { case: "Servientrega", body: "Dirección de arte apoyada por IA en una experiencia con scroll y WebGL." },
        { case: "Clint Intelligence", body: "Diseño del comportamiento de agentes de IA dentro del CRM." },
        { case: "Clint Scale", body: "Componentes de IA dentro del design system." },
      ],
    },
    process: {
      eyebrow: "Cómo trabajo",
      title: "Del contexto al impacto medido.",
      stepLabel: "Paso",
      intro: "Un proceso simple, que se adapta al tamaño del problema. Lo que no cambia: entender antes de diseñar y medir después de entregar.",
      steps: [
        { title: "Understand", body: "Usuario, negocio y contexto. Antes de abrir Figma, reviso datos del embudo, grabaciones de sesión y hablo con quien usa y con quien vende. El objetivo es entender dónde se traba la experiencia." },
        { title: "Define", body: "Problema, oportunidad e hipótesis. Convierto lo aprendido en una frase que se puede probar: qué vamos a cambiar, qué esperamos que pase y cómo lo vamos a medir." },
        { title: "Explore", body: "Arquitectura, flujos y prototipos. Diseño el journey completo antes de las pantallas y uso IA para explorar más alternativas en menos tiempo.", example: "Servientrega: el viaje del envío organizado en 6 etapas." },
        { title: "Validate", body: "Pruebas, datos y feedback. Los prototipos pasan por pruebas con usuarios y experimentos A/B. La decisión viene del comportamiento, no de la opinión más fuerte en la sala.", example: "Acquire: pruebas A/B en 58 landing pages." },
        { title: "Build", body: "UI, design system y desarrollo. Tokens, componentes y documentación para que el equipo construya rápido y con consistencia. Cuando tiene sentido, yo mismo lo llevo a código.", example: "Scale: tokens y componentes listos para el equipo de Growth." },
        { title: "Measure", body: "Métricas, comportamiento e impacto. Después de entregar, sigo los números y el comportamiento real. Lo que aprendo se vuelve el punto de partida del próximo ciclo.", example: "WhatsApp Next: 25% de conversión en la landing page." },
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

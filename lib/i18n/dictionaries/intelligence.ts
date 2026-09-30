import type { Locale } from "@/lib/i18n/types";

type FlowState = { title: string; description: string };

type ShowcaseStep = { title: string; body: string; alt: string };

type AgentCopy = { nome: string; faz: string };

type Metric = { value: number; prefix?: string; suffix?: string; label: string };

export type IntelligenceDictionary = {
  ch01: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    tags: string[];
    teamNote: string;
    heroImageAlt: string;
  };
  ch02: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    withoutUxLabel: string;
    withoutUxNodes: string[];
    designedLabel: string;
    designedNodes: string[];
  };
  ch03: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    states: FlowState[];
  };
  ch04: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    considerations: string[];
    flow: {
      aiSuggests: string;
      userDecides: string;
      approve: string;
      edit: string;
      reject: string;
      actionExecuted: string;
    };
  };
  ch05: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: ShowcaseStep[];
    ctaText: string;
    ctaButton: string;
  };
  ch06: {
    ariaLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    agents: AgentCopy[];
    agentActiveLabel: string;
    recreationCaption: string;
    agentsEyebrow: string;
    rotatingRoleSuffix: string;
    cardDescription: string;
    promptPhrases: string[];
    realAgentImageAlt: string;
    realAgentCaption: string;
    resultLabel: string;
    resultDescription: string;
    metrics: Metric[];
    metricsCaption: string;
  };
  nextCase: { eyebrow: string; title: string; description: string };
};

export const intelligence: Record<Locale, IntelligenceDictionary> = {
  pt: {
    ch01: {
      ariaLabel: "Apresentação do case Intelligence",
      eyebrow: "02 · Intelligence",
      title: "Uma inteligência. Sua operação inteira.",
      description:
        "Como transformar modelos, automações e recomendações em experiências compreensíveis, acionáveis e controláveis pelo usuário.",
      tags: ["AI UX", "Product Design", "Automation", "Growth"],
      teamNote:
        "Time: 2 product designers, definindo o comportamento dos agentes em parceria com o time de engenharia.",
      heroImageAlt: "Plataforma Clint com o copiloto de IA",
    },
    ch02: {
      ariaLabel: "O problema da IA sem UX",
      eyebrow: "Problema",
      title: "IA não deve adicionar complexidade ao produto que deveria simplificar.",
      withoutUxLabel: "Sem UX",
      withoutUxNodes: ["Usuário", "Prompt", "IA", "?", "Resultado"],
      designedLabel: "Experiência desenhada",
      designedNodes: ["Intenção", "Contexto", "IA", "Recomendação", "Validação humana", "Ação", "Feedback"],
    },
    ch03: {
      ariaLabel: "Arquitetura da experiência de IA",
      eyebrow: "AI Experience Architecture",
      title: "Cada estado do modelo precisa de uma decisão de interface.",
      description:
        "Da intenção do usuário até o feedback que refina o próximo ciclo: oito estados, oito decisões de design.",
      states: [
        { title: "Input", description: "O usuário descreve o que precisa em linguagem natural, sem formulário e sem campos técnicos." },
        { title: "Contexto", description: "O sistema reúne histórico da conversa, dados do CRM e estágio do funil antes de responder." },
        { title: "Processamento", description: "O modelo interpreta a intenção e decide qual ação, agente ou fluxo se aplica." },
        { title: "Resultado", description: "Uma recomendação é gerada, nunca uma ação irreversível tomada sozinha." },
        { title: "Confiança / explicação", description: "A interface mostra por que aquela recomendação apareceu, não só o que fazer." },
        { title: "Validação humana", description: "O vendedor aprova, edita ou rejeita antes de qualquer coisa ir para o cliente." },
        { title: "Ação", description: "Só depois da validação a mensagem é enviada, a reunião é marcada ou o negócio avança." },
        { title: "Feedback", description: "O resultado da ação retroalimenta o modelo, refinando a próxima recomendação." },
      ],
    },
    ch04: {
      ariaLabel: "Human in the loop",
      eyebrow: "Human in the loop",
      title: "A IA recomenda. O usuário decide.",
      description:
        "Nenhuma automação age sozinha em nome do vendedor. A interface foi desenhada para que a IA acelere a decisão, sem nunca substituir o julgamento humano.",
      considerations: ["Controle", "Transparência", "Confiança", "Feedback", "Erro", "Reversibilidade"],
      flow: {
        aiSuggests: "IA sugere",
        userDecides: "Usuário decide",
        approve: "Aprova",
        edit: "Edita",
        reject: "Rejeita",
        actionExecuted: "Ação executada",
      },
    },
    ch05: {
      ariaLabel: "Interface do produto de IA",
      eyebrow: "Da conversa à decisão",
      title: "Uma conversa, do primeiro oi ao dashboard.",
      description: "As telas abaixo são o mesmo fluxo, em ordem: o que o agente faz sozinho, onde o humano entra e o que o gestor enxerga no final.",
      steps: [
        { title: "O lead chega e o agente atende", body: "WhatsApp e Instagram caem na mesma caixa de entrada. O agente de IA responde na hora, e a tag “Atendimento IA” deixa claro para o time quem está conduzindo.", alt: "Caixa de entrada da Clint com conversas de WhatsApp e Instagram atendidas por IA" },
        { title: "O agente qualifica conversando", body: "A Clara faz as perguntas de qualificação no tom da empresa. Do lado, o negócio já aparece vinculado, e qualquer pessoa pode suspender a automação e assumir.", alt: "Conversa em que a agente Clara qualifica um lead com perguntas" },
        { title: "O negócio anda no funil sozinho", body: "Cada resposta move o card: Prospecção IA, Qualificação IA, Follow IA. O vendedor só entra quando o lead está pronto ou quando o agente pede ajuda.", alt: "Funil kanban com etapas conduzidas pela IA" },
        { title: "O gestor pergunta, o copiloto prioriza", body: "Em vez de filtrar planilha, o gestor pergunta em linguagem natural quem chamar primeiro. O copiloto lê a base e devolve um panorama com os nomes.", alt: "Copiloto Clint AI respondendo qual base priorizar" },
        { title: "E vira painel em uma frase", body: "“Crie um dashboard com os dados da minha operação” gera metas, projeções e agendamentos sem montar gráfico por gráfico.", alt: "Dashboard de projeções comerciais gerado pela IA da Clint" },
      ],
      ctaText:
        "O fluxo conversacional que dá vida a esses agentes roda em produção: você pode conversar com ele agora.",
      ctaButton: "Testar o agente de IA",
    },
    ch06: {
      ariaLabel: "Amplitude e resultado",
      eyebrow: "Mesma arquitetura, mais papéis",
      title: "Um mesmo sistema, dez papéis diferentes na operação.",
      description:
        "O mesmo copiloto que acompanha a conversa de vendas cobre outras nove frentes da operação, cada uma com o nível de autonomia que a situação pede: tarefas de rotina seguem direto, decisões de maior risco continuam passando por uma pessoa.",
      agents: [
        { nome: "Atendente", faz: "Faz o atendimento no WhatsApp e direciona para o que o cliente precisa." },
        { nome: "Pré-vendedor", faz: "Qualifica o lead e agenda com o vendedor certo." },
        { nome: "Vendedor", faz: "Apresenta, contorna objeção, envia o link de pagamento." },
        { nome: "Consultor", faz: "Entende a necessidade antes de recomendar a solução." },
        { nome: "Cobrança", faz: "Lembra do vencimento, envia a segunda via e negocia o atraso." },
        { nome: "Suporte", faz: "Resolve a dúvida do cliente e escala para o time quando precisa." },
        { nome: "Recepção", faz: "Agenda, confirma presença e remarca, sem precisar de alguém disponível para isso." },
        { nome: "Follow-up", faz: "Volta em quem parou de responder, na hora certa, sem esquecer." },
        { nome: "Pós-venda", faz: "Acompanha o cliente novo, colhe feedback e abre recompra." },
        { nome: "Pesquisa", faz: "Faz a pesquisa de satisfação e organiza as respostas." },
      ],
      agentActiveLabel: "agente ativo",
      recreationCaption: "Recriação fiel dos componentes reais de criação de agentes da Clint.",
      agentsEyebrow: "Agentes de IA",
      rotatingRoleSuffix: "agora é um agente de IA.",
      cardDescription:
        "Atende todo contato assim que chega, qualifica e direciona, com o mesmo controle humano em cada decisão.",
      promptPhrases: [
        "Um agente de pré-vendas",
        "Um agente de cobrança",
        "Um agente de suporte",
        "Um agente de recepção",
      ],
      realAgentImageAlt:
        "Tela real da Clint testando e configurando um agente de IA, com comandos em balões de conversa",
      realAgentCaption:
        "Tela real da plataforma: um agente sendo testado e configurado antes de ir para produção.",
      resultLabel: "Resultado na prática",
      resultDescription:
        "Os agentes ajudaram a operação a chegar nesses números. O comportamento de cada um foi desenhado pelos designers, programado pelo time de engenharia, e configurado caso a caso a partir dos dados que cada cliente trazia na implantação.",
      metrics: [
        { value: 21, suffix: "x", label: "mais chance de qualificar" },
        { value: 60, suffix: "%", label: "das vendas após o 5º contato" },
        { value: 30, prefix: "+", suffix: "%", label: "reuniões marcadas na conversa" },
        { value: 10, prefix: "+", suffix: "%", label: "receita que já estava perdida" },
      ],
      metricsCaption: "Médias comunicadas pela própria plataforma Clint a seus clientes.",
    },
    nextCase: {
      eyebrow: "Próximo case",
      title: "03 · Scale: criando um sistema para escalar Growth.",
      description: "Como padrões visuais e operacionais aceleram experimentos sem perder consistência.",
    },
  },
  en: {
    ch01: {
      ariaLabel: "Introduction to the Intelligence case",
      eyebrow: "02 · Intelligence",
      title: "One intelligence. Your entire operation.",
      description:
        "How to turn models, automations, and recommendations into experiences that are understandable, actionable, and controllable by the user.",
      tags: ["AI UX", "Product Design", "Automation", "Growth"],
      teamNote:
        "Team: 2 product designers, defining agent behavior in partnership with the engineering team.",
      heroImageAlt: "Clint platform with the AI copilot",
    },
    ch02: {
      ariaLabel: "The problem with AI without UX",
      eyebrow: "Problem",
      title: "AI shouldn't add complexity to a product that's supposed to simplify.",
      withoutUxLabel: "Without UX",
      withoutUxNodes: ["User", "Prompt", "AI", "?", "Result"],
      designedLabel: "Designed experience",
      designedNodes: ["Intent", "Context", "AI", "Recommendation", "Human validation", "Action", "Feedback"],
    },
    ch03: {
      ariaLabel: "AI experience architecture",
      eyebrow: "AI Experience Architecture",
      title: "Every state of the model needs an interface decision.",
      description:
        "From the user's intent to the feedback that refines the next cycle: eight states, eight design decisions.",
      states: [
        { title: "Input", description: "The user describes what they need in natural language, with no form and no technical fields." },
        { title: "Context", description: "The system gathers conversation history, CRM data, and funnel stage before responding." },
        { title: "Processing", description: "The model interprets the intent and decides which action, agent, or flow applies." },
        { title: "Result", description: "A recommendation is generated — never an irreversible action taken alone." },
        { title: "Confidence / explanation", description: "The interface shows why that recommendation appeared, not just what to do." },
        { title: "Human validation", description: "The salesperson approves, edits, or rejects before anything reaches the customer." },
        { title: "Action", description: "Only after validation is the message sent, the meeting booked, or the deal moved forward." },
        { title: "Feedback", description: "The outcome of the action feeds back into the model, refining the next recommendation." },
      ],
    },
    ch04: {
      ariaLabel: "Human in the loop",
      eyebrow: "Human in the loop",
      title: "AI recommends. The user decides.",
      description:
        "No automation acts alone on a salesperson's behalf. The interface was designed so AI speeds up the decision, without ever replacing human judgment.",
      considerations: ["Control", "Transparency", "Trust", "Feedback", "Error", "Reversibility"],
      flow: {
        aiSuggests: "AI suggests",
        userDecides: "User decides",
        approve: "Approve",
        edit: "Edit",
        reject: "Reject",
        actionExecuted: "Action executed",
      },
    },
    ch05: {
      ariaLabel: "AI product interface",
      eyebrow: "From conversation to decision",
      title: "One conversation, from the first hello to the dashboard.",
      description: "The screens below are one flow, in order: what the agent does on its own, where a human steps in, and what the manager sees at the end.",
      steps: [
        { title: "A lead arrives and the agent replies", body: "WhatsApp and Instagram land in the same inbox. The AI agent answers right away, and the “AI Support” tag tells the team who is handling it.", alt: "Clint inbox with WhatsApp and Instagram conversations handled by AI" },
        { title: "The agent qualifies through conversation", body: "Clara asks the qualifying questions in the company's tone. The linked deal sits alongside, and anyone can pause the automation and take over.", alt: "Conversation where the Clara agent qualifies a lead" },
        { title: "The deal moves through the funnel on its own", body: "Each answer moves the card: AI Prospecting, AI Qualification, AI Follow-up. The rep steps in only when the lead is ready or the agent asks for help.", alt: "Kanban funnel with AI-driven stages" },
        { title: "The manager asks, the copilot prioritizes", body: "Instead of filtering spreadsheets, the manager asks in plain language who to call first. The copilot reads the base and returns an overview with names.", alt: "Clint AI copilot answering which leads to prioritize" },
        { title: "And it becomes a dashboard in one sentence", body: "“Create a dashboard with my sales operation data” builds goals, projections, and meetings without assembling chart by chart.", alt: "Sales projections dashboard generated by Clint AI" },
      ],
      ctaText:
        "The conversational flow that brings these agents to life runs in production: you can chat with it right now.",
      ctaButton: "Try the AI agent",
    },
    ch06: {
      ariaLabel: "Reach and results",
      eyebrow: "Same architecture, more roles",
      title: "One system, ten different roles in the operation.",
      description:
        "The same copilot that follows the sales conversation covers nine other fronts of the operation, each with the level of autonomy the situation calls for: routine tasks go straight through, higher-risk decisions still pass through a person.",
      agents: [
        { nome: "Service agent", faz: "Handles WhatsApp support and routes the customer to what they need." },
        { nome: "Pre-sales", faz: "Qualifies the lead and books it with the right salesperson." },
        { nome: "Salesperson", faz: "Presents, handles objections, sends the payment link." },
        { nome: "Consultant", faz: "Understands the need before recommending the solution." },
        { nome: "Collections", faz: "Reminds about due dates, resends the invoice, and negotiates late payments." },
        { nome: "Support", faz: "Resolves the customer's question and escalates to the team when needed." },
        { nome: "Reception", faz: "Books, confirms attendance, and reschedules, without needing someone available for it." },
        { nome: "Follow-up", faz: "Comes back to whoever stopped responding, at the right time, without forgetting." },
        { nome: "Post-sale", faz: "Follows up with the new customer, gathers feedback, and opens up repurchase." },
        { nome: "Research", faz: "Runs the satisfaction survey and organizes the responses." },
      ],
      agentActiveLabel: "active agent",
      recreationCaption: "Faithful recreation of Clint's real agent-creation components.",
      agentsEyebrow: "AI Agents",
      rotatingRoleSuffix: "is now an AI agent.",
      cardDescription:
        "Handles every contact as soon as it arrives, qualifies and routes it, with the same human control over every decision.",
      promptPhrases: [
        "A pre-sales agent",
        "A collections agent",
        "A support agent",
        "A reception agent",
      ],
      realAgentImageAlt:
        "Real Clint screen testing and configuring an AI agent, with commands in chat bubbles",
      realAgentCaption:
        "Real platform screen: an agent being tested and configured before going into production.",
      resultLabel: "Results in practice",
      resultDescription:
        "The agents helped the operation reach these numbers. Each one's behavior was designed by the designers, built by the engineering team, and configured case by case from the data each customer brought during rollout.",
      metrics: [
        { value: 21, suffix: "x", label: "more likely to qualify" },
        { value: 60, suffix: "%", label: "of sales after the 5th contact" },
        { value: 30, prefix: "+", suffix: "%", label: "more meetings booked in-chat" },
        { value: 10, prefix: "+", suffix: "%", label: "revenue that was already being lost" },
      ],
      metricsCaption: "Averages reported by the Clint platform itself to its customers.",
    },
    nextCase: {
      eyebrow: "Next case",
      title: "03 · Scale: building a system to scale Growth.",
      description: "How visual and operational standards speed up experiments without losing consistency.",
    },
  },
  es: {
    ch01: {
      ariaLabel: "Presentación del caso Intelligence",
      eyebrow: "02 · Intelligence",
      title: "Una inteligencia. Toda tu operación.",
      description:
        "Cómo transformar modelos, automatizaciones y recomendaciones en experiencias comprensibles, accionables y controlables por el usuario.",
      tags: ["AI UX", "Product Design", "Automation", "Growth"],
      teamNote:
        "Equipo: 2 product designers, definiendo el comportamiento de los agentes junto con el equipo de ingeniería.",
      heroImageAlt: "Plataforma Clint con el copiloto de IA",
    },
    ch02: {
      ariaLabel: "El problema de la IA sin UX",
      eyebrow: "Problema",
      title: "La IA no debería sumar complejidad a un producto que debería simplificar.",
      withoutUxLabel: "Sin UX",
      withoutUxNodes: ["Usuario", "Prompt", "IA", "?", "Resultado"],
      designedLabel: "Experiencia diseñada",
      designedNodes: ["Intención", "Contexto", "IA", "Recomendación", "Validación humana", "Acción", "Feedback"],
    },
    ch03: {
      ariaLabel: "Arquitectura de la experiencia de IA",
      eyebrow: "AI Experience Architecture",
      title: "Cada estado del modelo necesita una decisión de interfaz.",
      description:
        "Desde la intención del usuario hasta el feedback que refina el próximo ciclo: ocho estados, ocho decisiones de diseño.",
      states: [
        { title: "Input", description: "El usuario describe lo que necesita en lenguaje natural, sin formularios ni campos técnicos." },
        { title: "Contexto", description: "El sistema reúne el historial de la conversación, datos del CRM y la etapa del embudo antes de responder." },
        { title: "Procesamiento", description: "El modelo interpreta la intención y decide qué acción, agente o flujo se aplica." },
        { title: "Resultado", description: "Se genera una recomendación, nunca una acción irreversible tomada por sí sola." },
        { title: "Confianza / explicación", description: "La interfaz muestra por qué apareció esa recomendación, no solo qué hacer." },
        { title: "Validación humana", description: "El vendedor aprueba, edita o rechaza antes de que algo llegue al cliente." },
        { title: "Acción", description: "Solo después de la validación se envía el mensaje, se agenda la reunión o el negocio avanza." },
        { title: "Feedback", description: "El resultado de la acción retroalimenta al modelo, refinando la próxima recomendación." },
      ],
    },
    ch04: {
      ariaLabel: "Human in the loop",
      eyebrow: "Human in the loop",
      title: "La IA recomienda. El usuario decide.",
      description:
        "Ninguna automatización actúa sola en nombre del vendedor. La interfaz fue diseñada para que la IA acelere la decisión, sin sustituir nunca el criterio humano.",
      considerations: ["Control", "Transparencia", "Confianza", "Feedback", "Error", "Reversibilidad"],
      flow: {
        aiSuggests: "La IA sugiere",
        userDecides: "El usuario decide",
        approve: "Aprueba",
        edit: "Edita",
        reject: "Rechaza",
        actionExecuted: "Acción ejecutada",
      },
    },
    ch05: {
      ariaLabel: "Interfaz del producto de IA",
      eyebrow: "De la conversación a la decisión",
      title: "Una conversación, del primer hola al dashboard.",
      description: "Las pantallas de abajo son el mismo flujo, en orden: lo que el agente hace solo, dónde entra el humano y lo que ve el gestor al final.",
      steps: [
        { title: "Llega el lead y el agente responde", body: "WhatsApp e Instagram caen en la misma bandeja. El agente de IA responde al instante, y la etiqueta “Atención IA” deja claro al equipo quién conduce.", alt: "Bandeja de Clint con conversaciones de WhatsApp e Instagram atendidas por IA" },
        { title: "El agente califica conversando", body: "Clara hace las preguntas de calificación con el tono de la empresa. Al lado aparece el negocio vinculado, y cualquiera puede pausar la automatización y tomar el control.", alt: "Conversación en la que la agente Clara califica a un lead" },
        { title: "El negocio avanza solo en el embudo", body: "Cada respuesta mueve la tarjeta: Prospección IA, Calificación IA, Seguimiento IA. El vendedor entra solo cuando el lead está listo o el agente pide ayuda.", alt: "Embudo kanban con etapas conducidas por IA" },
        { title: "El gestor pregunta, el copiloto prioriza", body: "En lugar de filtrar planillas, el gestor pregunta en lenguaje natural a quién llamar primero. El copiloto lee la base y devuelve un panorama con nombres.", alt: "Copiloto Clint AI respondiendo a quién priorizar" },
        { title: "Y se vuelve dashboard en una frase", body: "“Crea un dashboard con los datos de mi operación” genera metas, proyecciones y agendamientos sin armar gráfico por gráfico.", alt: "Dashboard de proyecciones comerciales generado por la IA de Clint" },
      ],
      ctaText:
        "El flujo conversacional que da vida a estos agentes corre en producción: puedes conversar con él ahora mismo.",
      ctaButton: "Probar el agente de IA",
    },
    ch06: {
      ariaLabel: "Alcance y resultado",
      eyebrow: "Misma arquitectura, más roles",
      title: "Un mismo sistema, diez roles distintos en la operación.",
      description:
        "El mismo copiloto que acompaña la conversación de ventas cubre otros nueve frentes de la operación, cada uno con el nivel de autonomía que la situación exige: las tareas rutinarias siguen directo, las decisiones de mayor riesgo siguen pasando por una persona.",
      agents: [
        { nome: "Atención", faz: "Atiende por WhatsApp y dirige al cliente hacia lo que necesita." },
        { nome: "Preventa", faz: "Califica al lead y lo agenda con el vendedor correcto." },
        { nome: "Vendedor", faz: "Presenta, resuelve objeciones y envía el enlace de pago." },
        { nome: "Consultor", faz: "Entiende la necesidad antes de recomendar la solución." },
        { nome: "Cobranza", faz: "Recuerda el vencimiento, reenvía el comprobante y negocia el atraso." },
        { nome: "Soporte", faz: "Resuelve la duda del cliente y escala al equipo cuando hace falta." },
        { nome: "Recepción", faz: "Agenda, confirma la asistencia y reprograma, sin necesitar a alguien disponible para eso." },
        { nome: "Seguimiento", faz: "Vuelve a contactar a quien dejó de responder, en el momento justo, sin olvidarlo." },
        { nome: "Posventa", faz: "Acompaña al cliente nuevo, recoge feedback y abre la recompra." },
        { nome: "Encuestas", faz: "Realiza la encuesta de satisfacción y organiza las respuestas." },
      ],
      agentActiveLabel: "agente activo",
      recreationCaption: "Recreación fiel de los componentes reales de creación de agentes de Clint.",
      agentsEyebrow: "Agentes de IA",
      rotatingRoleSuffix: "ahora es un agente de IA.",
      cardDescription:
        "Atiende cada contacto en cuanto llega, lo califica y lo dirige, con el mismo control humano en cada decisión.",
      promptPhrases: [
        "Un agente de preventa",
        "Un agente de cobranza",
        "Un agente de soporte",
        "Un agente de recepción",
      ],
      realAgentImageAlt:
        "Pantalla real de Clint probando y configurando un agente de IA, con comandos en globos de conversación",
      realAgentCaption:
        "Pantalla real de la plataforma: un agente siendo probado y configurado antes de pasar a producción.",
      resultLabel: "Resultado en la práctica",
      resultDescription:
        "Los agentes ayudaron a la operación a llegar a estos números. El comportamiento de cada uno fue diseñado por los designers, programado por el equipo de ingeniería y configurado caso por caso a partir de los datos que cada cliente aportaba durante la implementación.",
      metrics: [
        { value: 21, suffix: "x", label: "más probabilidad de calificar" },
        { value: 60, suffix: "%", label: "de las ventas después del 5º contacto" },
        { value: 30, prefix: "+", suffix: "%", label: "reuniones agendadas en la conversación" },
        { value: 10, prefix: "+", suffix: "%", label: "ingresos que ya se estaban perdiendo" },
      ],
      metricsCaption: "Promedios comunicados por la propia plataforma Clint a sus clientes.",
    },
    nextCase: {
      eyebrow: "Próximo caso",
      title: "03 · Scale: creando un sistema para escalar Growth.",
      description: "Cómo los estándares visuales y operativos aceleran experimentos sin perder consistencia.",
    },
  },
};

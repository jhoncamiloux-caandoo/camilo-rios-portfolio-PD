import type { Locale } from "@/lib/i18n/types";

type FlowState = { title: string; description: string };

type ShowcaseStep = { title: string; body: string };
type PdDemo = {
  cols: string[];
  tags: Record<"instagram" | "site" | "mon" | "tue" | "confirmed" | "ret15" | "ret30" | "m8" | "y1", string>;
  task: string; sched: string; clinic: string; crumb: string; patients: string; addPatient: string;
  kpis: [string, string][]; kpiUp: string;
  dash: string; dashChip: string; thisMonth: string; allPros: string;
  chart1: string; scheduled: string; done: string; today: string;
  chart2: string; referral: string; chart3: string; less: string; more: string; days: string[];
  chart4: string; gaugeSub: string; gaugeMeta: string; input: string;
  stepOf: string; capTitle: string; capDesc: string;
  convo: [string, string][];
};

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
    crm: { pipeline: string; cols: string[]; moved: string; actions: string[]; agent: string };
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
    nicheNote: string;
    steps: ShowcaseStep[];
    hint: string;
    demo: PdDemo;
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
      crm: {"pipeline": "Vendas · Funil IA", "cols": ["Prospecção IA", "Qualificação IA", "Follow-up IA", "Ganho"], "moved": "IA moveu {name} para {col}", "actions": ["{name} chegou pelo WhatsApp", "IA qualificou {name} pelo WhatsApp", "IA agendou follow-up com {name}", "IA fechou negócio com {name}"], "agent": "Agente de IA"},
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
      ariaLabel: "Demo do produto guiada pelo scroll",
      eyebrow: "Da conversa à decisão",
      title: "Um atendimento, do começo ao fim.",
      description: "Role e acompanhe uma paciente dentro da Clint: a conversa no WhatsApp vira card, tarefa, agendamento e indicador, na mesma tela.",
      nicheNote: "Exemplo: uma clínica. O mesmo agente qualifica e agenda em imobiliárias, escolas, academias e outros negócios que vendem pelo WhatsApp.",
      steps: [
        { title: "O paciente chama no WhatsApp", body: "A mensagem chega na mesma tela em que a recepção trabalha. Sem trocar de aba, sem celular na mão." },
        { title: "O card nasce no CRM", body: "Contato, canal e histórico viram um card em Novo contato, automaticamente." },
        { title: "A IA cria a próxima tarefa", body: "A Aura lê a conversa e deixa o próximo passo pronto para a recepção." },
        { title: "O paciente agenda", body: "Horário combinado na conversa, card movido para Agendados." },
        { title: "O indicador atualiza", body: "Um clique em Indicadores e a operação aparece em linguagem simples: quem agendou, quem veio, quem faltou." },
      ],
      hint: "Role para acompanhar",
      demo: {"cols": ["Novo contato", "Agendados", "Confirmados", "Retorno", "Reativação"], "tags": {"instagram": "Instagram", "site": "Site", "mon": "Seg 28/09", "tue": "Ter 29/09", "confirmed": "Confirmou", "ret15": "Retorno 15d", "ret30": "Retorno 30d", "m8": "8 meses", "y1": "1 ano"}, "task": "Enviar horários de avaliação · hoje, 14:00", "sched": "Qui, 01/10 · 10:00", "clinic": "Clínica Sorriso", "crumb": "Pacientes", "patients": "pacientes", "addPatient": "Paciente +", "kpis": [["Consultas agendadas", "Este mês"], ["Pacientes atendidos", "90% compareceram"], ["Faltas", "4 a menos que em agosto"], ["Pacientes reativados", "Voltaram após 6+ meses"]], "kpiUp": "+1 agora · Ana Beatriz", "dash": "Indicadores", "dashChip": "Operação da clínica", "thisMonth": "Este mês", "allPros": "Todos os profissionais", "chart1": "Consultas agendadas x realizadas", "scheduled": "Agendadas", "done": "Realizadas", "today": "Hoje", "chart2": "De onde vêm os pacientes", "referral": "Indicação", "chart3": "Quando os pacientes mais chamam", "less": "menos", "more": "mais", "days": ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"], "chart4": "Taxa de comparecimento", "gaugeSub": "186 de 207 pacientes vieram", "gaugeMeta": "Meta da clínica: 92%", "input": "Escreva uma mensagem…", "stepOf": "Passo {n} de 5", "capTitle": "Um atendimento, do começo ao fim", "capDesc": "Role para acompanhar a jornada de uma paciente dentro da Clint.", "convo": [["Oi, boa tarde! Vi o post de vocês no Instagram sobre clareamento e fiquei curiosa", "13:42"], ["Mas tenho um pouco de sensibilidade nos dentes, será que posso fazer?", "13:42"], ["Oi, Ana! Aqui é a Camila, da Clínica Sorriso. Que bom que você chamou", "13:44"], ["Pode sim. A avaliação serve justamente pra olhar essa sensibilidade com calma e indicar o melhor caminho pra você", "13:45"], ["Ah, que alívio. Confesso que tenho um pouco de medo de doer rs", "13:47"], ["Super entendo. A Dra. Paula é muito cuidadosa e explica tudo antes. Tenho quinta às 10h ou sexta às 16h30, qual fica melhor?", "13:48"], ["Quinta às 10h fica perfeito", "13:50"], ["Prontinho, agendado: quinta, 01/10, às 10h. Um dia antes eu te mando um lembrete por aqui", "13:51"], ["Obrigada, Camila! Até quinta", "13:51"]]},
      ctaText: "Conheça a experiência completa no site feito para clínicas.",
      ctaButton: "Ver o site de clínicas",
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
      crm: {"pipeline": "Sales · AI funnel", "cols": ["AI prospecting", "AI qualification", "AI follow-up", "Won"], "moved": "AI moved {name} to {col}", "actions": ["{name} arrived via WhatsApp", "AI qualified {name} on WhatsApp", "AI scheduled a follow-up with {name}", "AI closed the deal with {name}"], "agent": "AI agent"},
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
        { title: "Result", description: "A recommendation is generated, never an irreversible action taken alone." },
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
      ariaLabel: "Scroll-guided product demo",
      eyebrow: "From conversation to decision",
      title: "One patient, from first message to dashboard.",
      description: "Scroll and follow a patient inside Clint: the WhatsApp conversation becomes a card, a task, an appointment, and a metric, on the same screen.",
      nicheNote: "Example: a clinic. The same agent qualifies and books in real estate, schools, gyms, and any business that sells through WhatsApp.",
      steps: [
        { title: "The patient messages on WhatsApp", body: "The message lands on the same screen the front desk works on. No switching tabs, no phone in hand." },
        { title: "The card is created in the CRM", body: "Contact, channel, and history become a card in New contact, automatically." },
        { title: "AI creates the next task", body: "Aura reads the conversation and leaves the next step ready for the front desk." },
        { title: "The patient books", body: "Time agreed in the chat, card moved to Booked." },
        { title: "The dashboard updates", body: "One click on Dashboard and the operation shows up in plain language: who booked, who came, who missed." },
      ],
      hint: "Scroll to follow",
      demo: {"cols": ["New contact", "Booked", "Confirmed", "Follow-up", "Reactivation"], "tags": {"instagram": "Instagram", "site": "Website", "mon": "Mon 09/28", "tue": "Tue 09/29", "confirmed": "Confirmed", "ret15": "Follow-up 15d", "ret30": "Follow-up 30d", "m8": "8 months", "y1": "1 year"}, "task": "Send assessment times · today, 2:00 pm", "sched": "Thu, 10/01 · 10:00 am", "clinic": "Smile Clinic", "crumb": "Patients", "patients": "patients", "addPatient": "Patient +", "kpis": [["Appointments booked", "This month"], ["Patients seen", "90% showed up"], ["No-shows", "4 fewer than August"], ["Patients reactivated", "Back after 6+ months"]], "kpiUp": "+1 now · Ana Beatriz", "dash": "Dashboard", "dashChip": "Clinic operations", "thisMonth": "This month", "allPros": "All professionals", "chart1": "Appointments booked vs. completed", "scheduled": "Booked", "done": "Completed", "today": "Today", "chart2": "Where patients come from", "referral": "Referral", "chart3": "When patients message most", "less": "less", "more": "more", "days": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], "chart4": "Attendance rate", "gaugeSub": "186 of 207 patients came", "gaugeMeta": "Clinic goal: 92%", "input": "Type a message…", "stepOf": "Step {n} of 5", "capTitle": "One patient, start to finish", "capDesc": "Scroll to follow a patient's journey inside Clint.", "convo": [["Hi, good afternoon! I saw your Instagram post about whitening and got curious", "1:42 pm"], ["But my teeth are a bit sensitive, can I still do it?", "1:42 pm"], ["Hi, Ana! This is Camila from Smile Clinic. So glad you reached out", "1:44 pm"], ["Yes, you can. The assessment is exactly for looking at that sensitivity carefully and finding the best path for you", "1:45 pm"], ["Oh, what a relief. I'll admit I'm a little afraid it'll hurt haha", "1:47 pm"], ["Totally understand. Dr. Paula is very gentle and explains everything first. I have Thursday at 10 am or Friday at 4:30 pm, which works better?", "1:48 pm"], ["Thursday at 10 is perfect", "1:50 pm"], ["All set: Thursday, 10/01, at 10 am. I'll send you a reminder here the day before", "1:51 pm"], ["Thank you, Camila! See you Thursday", "1:51 pm"]]},
      ctaText: "See the full experience on the site built for clinics.",
      ctaButton: "See the clinics site",
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
      crm: {"pipeline": "Ventas · Embudo IA", "cols": ["Prospección IA", "Calificación IA", "Seguimiento IA", "Ganado"], "moved": "La IA movió a {name} a {col}", "actions": ["{name} llegó por WhatsApp", "La IA calificó a {name} por WhatsApp", "La IA agendó seguimiento con {name}", "La IA cerró el negocio con {name}"], "agent": "Agente de IA"},
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
      ariaLabel: "Demo del producto guiada por el scroll",
      eyebrow: "De la conversación a la decisión",
      title: "Una atención, de principio a fin.",
      description: "Desplázate y acompaña a una paciente dentro de Clint: la conversación de WhatsApp se vuelve card, tarea, cita e indicador, en la misma pantalla.",
      nicheNote: "Ejemplo: una clínica. El mismo agente califica y agenda en inmobiliarias, escuelas, gimnasios y cualquier negocio que vende por WhatsApp.",
      steps: [
        { title: "La paciente escribe por WhatsApp", body: "El mensaje llega a la misma pantalla donde trabaja la recepción. Sin cambiar de pestaña, sin el celular en la mano." },
        { title: "El card nace en el CRM", body: "Contacto, canal e historial se vuelven un card en Nuevo contacto, automáticamente." },
        { title: "La IA crea la siguiente tarea", body: "Aura lee la conversación y deja el próximo paso listo para la recepción." },
        { title: "La paciente agenda", body: "Horario acordado en la conversación, card movido a Agendados." },
        { title: "El indicador se actualiza", body: "Un clic en Indicadores y la operación aparece en lenguaje simple: quién agendó, quién vino, quién faltó." },
      ],
      hint: "Desplázate para seguir",
      demo: {"cols": ["Nuevo contacto", "Agendados", "Confirmados", "Control", "Reactivación"], "tags": {"instagram": "Instagram", "site": "Sitio", "mon": "Lun 28/09", "tue": "Mar 29/09", "confirmed": "Confirmó", "ret15": "Control 15d", "ret30": "Control 30d", "m8": "8 meses", "y1": "1 año"}, "task": "Enviar horarios de evaluación · hoy, 14:00", "sched": "Jue, 01/10 · 10:00", "clinic": "Clínica Sonrisa", "crumb": "Pacientes", "patients": "pacientes", "addPatient": "Paciente +", "kpis": [["Citas agendadas", "Este mes"], ["Pacientes atendidos", "90% asistió"], ["Inasistencias", "4 menos que en agosto"], ["Pacientes reactivados", "Volvieron tras 6+ meses"]], "kpiUp": "+1 ahora · Ana Beatriz", "dash": "Indicadores", "dashChip": "Operación de la clínica", "thisMonth": "Este mes", "allPros": "Todos los profesionales", "chart1": "Citas agendadas vs. realizadas", "scheduled": "Agendadas", "done": "Realizadas", "today": "Hoy", "chart2": "De dónde vienen los pacientes", "referral": "Referido", "chart3": "Cuándo escriben más los pacientes", "less": "menos", "more": "más", "days": ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"], "chart4": "Tasa de asistencia", "gaugeSub": "186 de 207 pacientes vinieron", "gaugeMeta": "Meta de la clínica: 92%", "input": "Escribe un mensaje…", "stepOf": "Paso {n} de 5", "capTitle": "Una atención, de principio a fin", "capDesc": "Desplázate para seguir el recorrido de una paciente dentro de Clint.", "convo": [["¡Hola, buenas tardes! Vi su publicación en Instagram sobre blanqueamiento y me dio curiosidad", "13:42"], ["Pero tengo un poco de sensibilidad en los dientes, ¿puedo hacerlo?", "13:42"], ["¡Hola, Ana! Soy Camila, de Clínica Sonrisa. Qué bueno que escribiste", "13:44"], ["Sí, puedes. La evaluación sirve justamente para revisar esa sensibilidad con calma e indicarte el mejor camino", "13:45"], ["Ay, qué alivio. Confieso que me da un poco de miedo que duela jaja", "13:47"], ["Te entiendo. La Dra. Paula es muy cuidadosa y explica todo antes. Tengo el jueves a las 10 o el viernes a las 16:30, ¿cuál te queda mejor?", "13:48"], ["El jueves a las 10 está perfecto", "13:50"], ["Listo, agendado: jueves 01/10 a las 10. Un día antes te mando un recordatorio por aquí", "13:51"], ["¡Gracias, Camila! Hasta el jueves", "13:51"]]},
      ctaText: "Conoce la experiencia completa en el sitio hecho para clínicas.",
      ctaButton: "Ver el sitio de clínicas",
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

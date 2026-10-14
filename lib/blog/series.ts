/* Séries e pontes entre artigos: cada artigo sabe em que ordem está e para onde o raciocínio continua.
   Séries têm ordem de leitura (não de data). Pontes ligam artigos de séries diferentes com o motivo da ligação. */
import { posts, type Post } from "./posts";

export type Series = { id: string; title: string; intro: string; slugs: string[] };

export const SERIES: Series[] = [
  {
    id: "motion-ia",
    title: "Motion com IA",
    intro: "Do código ao vídeo: como fazer a IA animar com ritmo, peso e marca, usando um carrossel real como exemplo.",
    slugs: [
      "como-a-ia-faz-video-carrossel-animado",
      "claude-md-regras-para-ia-animar-bem",
      "carrossel-vivo-do-briefing-a-batida",
      "movimento-com-peso-linear-suave-mola",
      "referencia-sem-copia-identidade-da-marca",
      "o-diretor-e-o-critico-ia-com-rodadas-de-critica",
    ],
  },
  {
    id: "prompt",
    title: "Prompt como processo de design",
    intro: "Pedir bem para a IA é uma habilidade de design: clareza, contexto e economia.",
    slugs: [
      "novo-skill-do-designer-dizer-o-que-quer",
      "pergunta-generica-interface-generica",
      "prompt-virou-parte-do-processo-de-design",
      "gastar-menos-tokens-habilidade-de-design",
    ],
  },
  {
    id: "design-era-ia",
    title: "Design na era da IA",
    intro: "O que muda no trabalho do designer quando a IA gera, acelera e começa a agir.",
    slugs: [
      "olhar-critico-vale-mais-que-ferramentas",
      "ia-acelera-mas-ate-que-ponto",
      "ia-cria-interface-quem-decide-se-e-boa",
      "pesquisa-com-usuarios-na-era-da-ia",
      "product-designer-que-conversa-com-codigo",
      "contexto-novo-material-do-design",
      "quando-a-ia-age-desenhar-controle",
    ],
  },
  {
    id: "tendencias-2026",
    title: "UX e tendências de 2026",
    intro: "Agentes, busca com IA, personalização e acessibilidade como qualidade de produto.",
    slugs: [
      "ia-agentes-ux-desenhar-limites",
      "descoberta-de-produtos-pesquisa-com-ia",
      "personalizacao-sem-contexto-piora-experiencia",
      "acessibilidade-qualidade-de-produto",
    ],
  },
  {
    id: "dados-decisao",
    title: "Dos dados à decisão",
    intro: "Ter dados é o começo. Contar a história, priorizar e provar impacto é o trabalho.",
    slugs: [
      "dados-precisam-de-historia",
      "dados-sao-valiosos-o-que-fazer-com-eles",
      "transformar-dados-em-decisao",
      "dashboard-metricas-em-prioridades",
      "dashboard-bonito-nao-basta",
      "funcionalidade-de-ia-uso-nao-e-valor",
      "provar-impacto-de-ux-sem-roi",
    ],
  },
  {
    id: "cro",
    title: "Conversão com método",
    intro: "De UX e Growth juntos até experimentos que investigam decisões, não botões.",
    slugs: [
      "ux-e-growth-nao-deveriam-trabalhar-separados",
      "landing-page-promessa-experiencia-acao",
      "landing-page-entender-por-que-nao-converte",
      "cro-transformar-duvidas-em-experimentos",
      "cro-2026-investigar-decisoes",
    ],
  },
  {
    id: "fundamentos-ux",
    title: "Fundamentos de UX",
    intro: "Processo, usabilidade, pesquisa e métricas: a base que continua valendo.",
    slugs: [
      "design-thinking-resolver-problemas",
      "double-diamond-papel-do-ux-designer",
      "design-centrado-no-usuario-novo-paradigma",
      "licoes-de-nao-me-faca-pensar",
      "atomic-ux-research",
      "lgpd-nas-pesquisas-ux",
      "12-metricas-de-ux",
      "acessibilidade-digital-melhora-a-experiencia-de-todos",
    ],
  },
  {
    id: "ia-primeiros-passos",
    title: "IA no design: primeiros passos",
    intro: "Como a IA começou a mudar pesquisa, prototipagem, interface e gestão de produto.",
    slugs: [
      "ia-vai-transformar-seu-trabalho-como-ux-designer",
      "ia-transformando-prototipagem-e-design-de-interfaces",
      "ia-na-user-interface-futuro-do-design",
      "ia-na-gestao-de-produtos",
    ],
  },
  {
    id: "carreira",
    title: "Carreira em Product Design",
    intro: "Do processo seletivo à liderança: o que faz um designer crescer.",
    slugs: [
      "habilidades-mais-procuradas-designer-ux",
      "whiteboard-challenge-ux-product-design",
      "criatividade-e-estrategia-no-design-de-produto",
      "design-alem-do-design-produto-growth-negocio",
      "do-ux-ao-ceo-designers-na-lideranca",
    ],
  },
];

/* Pontes: [de, para, por que ler "para" depois de "de", por que ler "de" depois de "para"]. */
const BRIDGES: [string, string, string, string][] = [
  ["como-a-ia-faz-video-carrossel-animado", "prompt-virou-parte-do-processo-de-design", "O vídeo começa num pedido bem escrito. Aqui está o prompt como etapa do processo.", "Veja o prompt virar vídeo: a IA escrevendo código que se anima."],
  ["claude-md-regras-para-ia-animar-bem", "novo-skill-do-designer-dizer-o-que-quer", "O CLAUDE.md é saber dizer o que quer, só que por escrito e para sempre.", "Na prática: um arquivo de regras que a IA lê antes de cada tarefa."],
  ["claude-md-regras-para-ia-animar-bem", "gastar-menos-tokens-habilidade-de-design", "Regras escritas uma vez também economizam: menos repetição em cada conversa.", "Um jeito de não repetir contexto: deixar as regras num arquivo do projeto."],
  ["o-diretor-e-o-critico-ia-com-rodadas-de-critica", "ia-cria-interface-quem-decide-se-e-boa", "A mesma pergunta, fora do motion: quem decide se o que a IA fez é bom?", "Um método para responder: separar quem cria de quem avalia, com ficha de notas."],
  ["o-diretor-e-o-critico-ia-com-rodadas-de-critica", "olhar-critico-vale-mais-que-ferramentas", "Por que o olhar crítico, e não a ferramenta, decidiu o resultado.", "O olhar crítico aplicado: rodadas de crítica num carrossel real."],
  ["movimento-com-peso-linear-suave-mola", "rive-e-phase-movimento-no-design", "Ferramentas que trazem movimento para o protótipo, com as mesmas curvas.", "Por trás dessas ferramentas: por que mola parece viva e linear parece máquina."],
  ["referencia-sem-copia-identidade-da-marca", "design-systems-como-criar-e-manter", "Extrair peças reutilizáveis de uma marca é o começo de um design system.", "O mesmo raciocínio aplicado ao motion: tokens de marca num carrossel."],
  ["referencia-sem-copia-identidade-da-marca", "design-e-credibilidade-da-empresa", "Por que a cara da marca importa: design é julgado como credibilidade.", "Um exemplo prático de levar a identidade da marca para o movimento."],
  ["carrossel-vivo-do-briefing-a-batida", "dados-precisam-de-historia", "Storyboard e personagem são a mesma ideia de contar uma história com dados.", "A mesma lógica de narrativa aplicada a um carrossel, slide por slide."],
  ["pergunta-generica-interface-generica", "contexto-novo-material-do-design", "Se a pergunta precisa de contexto, o contexto vira material de design.", "Contexto começa na pergunta: por que pedido genérico gera interface genérica."],
  ["quando-a-ia-age-desenhar-controle", "ia-agentes-ux-desenhar-limites", "O próximo passo: níveis de autonomia, confirmação e recuperação de falhas.", "A origem da ideia: quando a IA age, o designer precisa desenhar controle."],
  ["pesquisa-com-usuarios-na-era-da-ia", "atomic-ux-research", "Para organizar o que a pesquisa encontra, em pedaços reaproveitáveis.", "Pesquisa continua essencial com IA. Veja por quê."],
  ["pesquisa-com-usuarios-na-era-da-ia", "descoberta-de-produtos-pesquisa-com-ia", "Quando o próprio usuário pesquisa com IA, a descoberta muda.", "Entender o usuário continua sendo o ponto de partida."],
  ["funcionalidade-de-ia-uso-nao-e-valor", "12-metricas-de-ux", "A base das métricas de experiência, antes de medir IA.", "Aplicando métricas a funcionalidades de IA: uso não é valor."],
  ["provar-impacto-de-ux-sem-roi", "como-o-ux-traz-retorno-para-o-negocio", "O outro lado: as métricas de negócio que UX move.", "Quando o ROI não fecha a conta: outras formas de provar impacto."],
  ["dashboard-bonito-nao-basta", "transformar-dados-em-decisao", "Antes do visual, a pergunta: que decisão esse dado ajuda a tomar?", "Como desenhar o painel que leva à decisão."],
  ["ux-e-growth-nao-deveriam-trabalhar-separados", "design-alem-do-design-produto-growth-negocio", "A visão de carreira por trás de juntar design, growth e negócio.", "Na prática: UX e Growth no mesmo time."],
  ["cro-2026-investigar-decisoes", "landing-page-entender-por-que-nao-converte", "Investigar decisões começa por entender onde a landing perde gente.", "O próximo nível: experimentos que investigam decisões."],
  ["personalizacao-sem-contexto-piora-experiencia", "lgpd-nas-pesquisas-ux", "Personalizar usa dados pessoais. A LGPD diz como cuidar deles.", "Privacidade aplicada: personalização com contexto e consentimento."],
  ["acessibilidade-qualidade-de-produto", "acessibilidade-digital-melhora-a-experiencia-de-todos", "O porquê, antes do como: acessibilidade melhora a experiência de todos.", "Do porquê ao processo: acessibilidade como qualidade, não como auditoria."],
  ["licoes-de-nao-me-faca-pensar", "design-centrado-no-usuario-novo-paradigma", "Usabilidade é a base. O que mudou no design centrado no usuário?", "A base que continua valendo: as lições de Não me faça pensar."],
  ["ia-transformando-prototipagem-e-design-de-interfaces", "product-designer-que-conversa-com-codigo", "Dois anos depois: o protótipo virou conversa com código.", "Onde essa história começou: a IA chegando na prototipagem."],
  ["ia-vai-transformar-seu-trabalho-como-ux-designer", "ia-acelera-mas-ate-que-ponto", "A pergunta de 2025 revisitada: a IA acelera, mas até onde?", "O começo da conversa: como a IA ia mudar o trabalho de UX."],
  ["ia-na-gestao-de-produtos", "funcionalidade-de-ia-uso-nao-e-valor", "Depois de adotar IA, a pergunta de produto: ela gera valor?", "O contexto: como a IA entrou na gestão de produtos."],
  ["whiteboard-challenge-ux-product-design", "olhar-critico-vale-mais-que-ferramentas", "O que o recrutador procura no desafio: o olhar crítico.", "Como esse olhar aparece no processo seletivo."],
  ["design-thinking-resolver-problemas", "cro-transformar-duvidas-em-experimentos", "Da empatia ao experimento: o mesmo ciclo aplicado à conversão.", "A raiz do método: Design Thinking."],
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

export function seriesOf(slug: string) {
  const s = SERIES.find((x) => x.slugs.includes(slug));
  if (!s) return null;
  const i = s.slugs.indexOf(slug);
  const items = s.slugs.map(postBySlug).filter((p): p is Post => !!p);
  return { series: s, index: i, items, prev: i > 0 ? postBySlug(s.slugs[i - 1]) : undefined, next: postBySlug(s.slugs[i + 1]) };
}

export const coverSmall = (p: Post) => (p.cover ? p.cover.replace(/\.webp$/, "-800.webp") : undefined);

/* Traduções de séries e pontes (a ordem das pontes segue BRIDGES). */
export const SERIES_I18N: Record<string, { en: [string, string]; es: [string, string] }> = {
  "motion-ia": { en: ["Motion with AI", "From code to video: how to make AI animate with rhythm, weight and brand, using a real carousel as the example."], es: ["Motion con IA", "Del código al video: cómo hacer que la IA anime con ritmo, peso y marca, usando un carrusel real como ejemplo."] },
  prompt: { en: ["Prompting as a design process", "Asking AI well is a design skill: clarity, context and economy."], es: ["El prompt como proceso de diseño", "Pedirle bien a la IA es una habilidad de diseño: claridad, contexto y economía."] },
  "design-era-ia": { en: ["Design in the age of AI", "What changes in a designer's work when AI generates, speeds things up and starts to act."], es: ["Diseño en la era de la IA", "Qué cambia en el trabajo del diseñador cuando la IA genera, acelera y empieza a actuar."] },
  "tendencias-2026": { en: ["UX and 2026 trends", "Agents, AI search, personalization and accessibility as product quality."], es: ["UX y tendencias de 2026", "Agentes, búsqueda con IA, personalización y accesibilidad como calidad de producto."] },
  "dados-decisao": { en: ["From data to decision", "Having data is the start. Telling the story, prioritizing and proving impact is the work."], es: ["De los datos a la decisión", "Tener datos es el comienzo. Contar la historia, priorizar y demostrar impacto es el trabajo."] },
  cro: { en: ["Conversion with method", "From UX and Growth working together to experiments that investigate decisions, not buttons."], es: ["Conversión con método", "De UX y Growth trabajando juntos a experimentos que investigan decisiones, no botones."] },
  "fundamentos-ux": { en: ["UX fundamentals", "Process, usability, research and metrics: the foundation that still holds."], es: ["Fundamentos de UX", "Proceso, usabilidad, investigación y métricas: la base que sigue vigente."] },
  "ia-primeiros-passos": { en: ["AI in design: first steps", "How AI started to change research, prototyping, interfaces and product management."], es: ["IA en el diseño: primeros pasos", "Cómo la IA empezó a cambiar la investigación, el prototipado, la interfaz y la gestión de producto."] },
  carreira: { en: ["Product Design career", "From hiring process to leadership: what helps a designer grow."], es: ["Carrera en Product Design", "Del proceso de selección al liderazgo: lo que hace crecer a un diseñador."] },
};

/* [en a→b, en b→a, es a→b, es b→a], na mesma ordem de BRIDGES. */
const BRIDGES_I18N: [string, string, string, string][] = [
  ["Video starts with a well-written request. Here is the prompt as a step of the process.", "See the prompt become video: AI writing code that animates itself.", "El video empieza con un pedido bien escrito. Aquí está el prompt como etapa del proceso.", "Mira el prompt convertirse en video: la IA escribiendo código que se anima."],
  ["CLAUDE.md is knowing what you want, written down once and for good.", "In practice: a rules file the AI reads before every task.", "El CLAUDE.md es saber lo que quieres, por escrito y para siempre.", "En la práctica: un archivo de reglas que la IA lee antes de cada tarea."],
  ["Rules written once also save tokens: less repetition in every conversation.", "One way to stop repeating context: keep the rules in a project file.", "Las reglas escritas una vez también ahorran: menos repetición en cada conversación.", "Una forma de no repetir contexto: dejar las reglas en un archivo del proyecto."],
  ["The same question outside motion: who decides whether what AI made is good?", "A method to answer it: separate who creates from who evaluates, with a scorecard.", "La misma pregunta fuera del motion: ¿quién decide si lo que hizo la IA es bueno?", "Un método para responder: separar quien crea de quien evalúa, con una ficha de notas."],
  ["Why a critical eye, not the tool, decided the result.", "The critical eye applied: critique rounds on a real carousel.", "Por qué la mirada crítica, y no la herramienta, decidió el resultado.", "La mirada crítica aplicada: rondas de crítica en un carrusel real."],
  ["Tools that bring motion into the prototype, with the same curves.", "Behind these tools: why a spring feels alive and linear feels mechanical.", "Herramientas que llevan movimiento al prototipo, con las mismas curvas.", "Detrás de estas herramientas: por qué el resorte parece vivo y lo lineal parece máquina."],
  ["Pulling reusable pieces out of a brand is the start of a design system.", "The same reasoning applied to motion: brand tokens in a carousel.", "Extraer piezas reutilizables de una marca es el comienzo de un design system.", "El mismo razonamiento aplicado al motion: tokens de marca en un carrusel."],
  ["Why the brand's look matters: design is judged as credibility.", "A practical example of bringing brand identity into motion.", "Por qué importa la cara de la marca: el diseño se juzga como credibilidad.", "Un ejemplo práctico de llevar la identidad de la marca al movimiento."],
  ["Storyboard and character are the same idea as telling a story with data.", "The same narrative logic applied to a carousel, slide by slide.", "Storyboard y personaje son la misma idea que contar una historia con datos.", "La misma lógica narrativa aplicada a un carrusel, slide por slide."],
  ["If the question needs context, context becomes design material.", "Context starts in the question: why a generic request produces a generic interface.", "Si la pregunta necesita contexto, el contexto se vuelve material de diseño.", "El contexto empieza en la pregunta: por qué un pedido genérico genera una interfaz genérica."],
  ["The next step: levels of autonomy, confirmation and failure recovery.", "Where the idea started: when AI acts, the designer has to design control.", "El siguiente paso: niveles de autonomía, confirmación y recuperación de fallas.", "El origen de la idea: cuando la IA actúa, el diseñador tiene que diseñar control."],
  ["To organize what research finds, in reusable pieces.", "Research is still essential with AI. Here's why.", "Para organizar lo que encuentra la investigación, en piezas reutilizables.", "La investigación sigue siendo esencial con IA. Mira por qué."],
  ["When users themselves search with AI, discovery changes.", "Understanding the user is still the starting point.", "Cuando el propio usuario busca con IA, el descubrimiento cambia.", "Entender al usuario sigue siendo el punto de partida."],
  ["The basics of experience metrics, before measuring AI.", "Applying metrics to AI features: usage is not value.", "La base de las métricas de experiencia, antes de medir IA.", "Aplicando métricas a funcionalidades de IA: uso no es valor."],
  ["The other side: the business metrics that UX moves.", "When ROI doesn't add up: other ways to prove impact.", "El otro lado: las métricas de negocio que mueve el UX.", "Cuando el ROI no cierra la cuenta: otras formas de demostrar impacto."],
  ["Before the visuals, the question: what decision does this data help make?", "How to design the dashboard that leads to the decision.", "Antes de lo visual, la pregunta: ¿qué decisión ayuda a tomar este dato?", "Cómo diseñar el panel que lleva a la decisión."],
  ["The career view behind bringing design, growth and business together.", "In practice: UX and Growth on the same team.", "La visión de carrera detrás de unir diseño, growth y negocio.", "En la práctica: UX y Growth en el mismo equipo."],
  ["Investigating decisions starts with understanding where the landing page loses people.", "The next level: experiments that investigate decisions.", "Investigar decisiones empieza por entender dónde la landing pierde gente.", "El siguiente nivel: experimentos que investigan decisiones."],
  ["Personalization uses personal data. Privacy law says how to handle it.", "Privacy applied: personalization with context and consent.", "Personalizar usa datos personales. La ley de privacidad dice cómo cuidarlos.", "Privacidad aplicada: personalización con contexto y consentimiento."],
  ["The why before the how: accessibility improves the experience for everyone.", "From why to process: accessibility as quality, not an audit.", "El porqué antes del cómo: la accesibilidad mejora la experiencia de todos.", "Del porqué al proceso: accesibilidad como calidad, no como auditoría."],
  ["Usability is the foundation. What changed in user-centered design?", "The foundation that still holds: the lessons of Don't Make Me Think.", "La usabilidad es la base. ¿Qué cambió en el diseño centrado en el usuario?", "La base que sigue vigente: las lecciones de No me hagas pensar."],
  ["Two years later: the prototype became a conversation with code.", "Where this story began: AI arriving in prototyping.", "Dos años después: el prototipo se volvió conversación con código.", "Dónde empezó esta historia: la IA llegando al prototipado."],
  ["The 2025 question revisited: AI speeds things up, but how far?", "Where the conversation began: how AI would change UX work.", "La pregunta de 2025, revisitada: la IA acelera, pero ¿hasta dónde?", "El comienzo de la conversación: cómo la IA iba a cambiar el trabajo de UX."],
  ["After adopting AI, the product question: does it create value?", "The context: how AI entered product management.", "Después de adoptar IA, la pregunta de producto: ¿genera valor?", "El contexto: cómo la IA entró en la gestión de productos."],
  ["What recruiters look for in the challenge: a critical eye.", "How that eye shows up in the hiring process.", "Lo que el reclutador busca en el desafío: la mirada crítica.", "Cómo esa mirada aparece en el proceso de selección."],
  ["From empathy to experiment: the same cycle applied to conversion.", "The root of the method: Design Thinking.", "De la empatía al experimento: el mismo ciclo aplicado a la conversión.", "La raíz del método: Design Thinking."],
];

export type Reason = { pt: string; en: string; es: string };

export function widenI18n(slug: string, n = 3): { post: Post; reason: Reason }[] {
  const own = seriesOf(slug)?.series.slugs ?? [slug];
  const out: { post: Post; reason: Reason }[] = [];
  BRIDGES.forEach(([a, b, ab, ba], i) => {
    const other = a === slug ? b : b === slug ? a : null;
    const p = other && postBySlug(other);
    const [eab, eba, sab, sba] = BRIDGES_I18N[i];
    if (p && !out.some((o) => o.post.slug === p.slug)) out.push({ post: p, reason: a === slug ? { pt: ab, en: eab, es: sab } : { pt: ba, en: eba, es: sba } });
  });
  const me = postBySlug(slug);
  if (me && out.length < n) {
    const cand = posts
      .filter((p) => !own.includes(p.slug) && !out.some((o) => o.post.slug === p.slug))
      .map((p) => ({ p, shared: p.tags.filter((t) => me.tags.includes(t)) }))
      .filter((x) => x.shared.length)
      .sort((a, b) => b.shared.length - a.shared.length || b.p.date.localeCompare(a.p.date));
    for (const { p, shared } of cand.slice(0, n - out.length)) {
      const tg = shared.slice(0, 2);
      out.push({ post: p, reason: { pt: `Também trata de ${tg.join(" e ")}, por outro ângulo.`, en: `Also about ${tg.join(" and ")}, from another angle.`, es: `También trata de ${tg.join(" y ")}, desde otro ángulo.` } });
    }
  }
  return out.slice(0, n);
}

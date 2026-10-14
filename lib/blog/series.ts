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

export type Next = { post: Post; reason: string };

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

export function seriesOf(slug: string) {
  const s = SERIES.find((x) => x.slugs.includes(slug));
  if (!s) return null;
  const i = s.slugs.indexOf(slug);
  const items = s.slugs.map(postBySlug).filter((p): p is Post => !!p);
  return { series: s, index: i, items, prev: i > 0 ? postBySlug(s.slugs[i - 1]) : undefined, next: postBySlug(s.slugs[i + 1]) };
}

/* "Para ampliar": pontes com motivo primeiro; completa com artigos que dividem uma tag, fora da mesma série. */
export function widen(slug: string, n = 3): Next[] {
  const own = seriesOf(slug)?.series.slugs ?? [slug];
  const out: Next[] = [];
  for (const [a, b, ab, ba] of BRIDGES) {
    const other = a === slug ? b : b === slug ? a : null;
    const p = other && postBySlug(other);
    if (p && !out.some((o) => o.post.slug === p.slug)) out.push({ post: p, reason: a === slug ? ab : ba });
  }
  const me = postBySlug(slug);
  if (me && out.length < n) {
    const cand = posts
      .filter((p) => !own.includes(p.slug) && !out.some((o) => o.post.slug === p.slug))
      .map((p) => ({ p, shared: p.tags.filter((t) => me.tags.includes(t)) }))
      .filter((x) => x.shared.length)
      .sort((a, b) => b.shared.length - a.shared.length || b.p.date.localeCompare(a.p.date));
    for (const { p, shared } of cand.slice(0, n - out.length)) out.push({ post: p, reason: `Também trata de ${shared.slice(0, 2).join(" e ")}, por outro ângulo.` });
  }
  return out.slice(0, n);
}

export const coverSmall = (p: Post) => (p.cover ? p.cover.replace(/\.webp$/, "-800.webp") : undefined);

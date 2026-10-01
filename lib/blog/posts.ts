/* Blog próprio: o site é a fonte original; o Medium é canal de distribuição.
   Cada artigo é uma lista de blocos. Blocos "visual" apontam para um SVG
   animado em components/blog/visuals.tsx que explica a ideia do trecho. */

export type Category = "ux" | "ai" | "growth" | "ds" | "career";

export const CATEGORIES: Record<Category, string> = {
  ux: "Product Design & UX",
  ai: "AI + Design",
  growth: "Growth & CRO",
  ds: "Design Systems",
  career: "Carreira",
};

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string; lead?: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "visual"; id?: string; data?: import("@/components/blog/visuals-kit").VisualData; caption: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: Category;
  tags: string[];
  cover?: string;
  coverArt?: { icons: string[] };
  updateNote?: string;
  sources?: string[];
  mediumUrl?: string;
  readMinutes: number;
  related: { href: string; title: string; body: string };
  blocks: Block[];
};

import { mediumPosts } from "./posts-medium";
import { promptPosts } from "./posts-prompt";

export const posts: Post[] = [
  {
    slug: "como-o-ux-traz-retorno-para-o-negocio",
    title: "Como o UX traz retorno para o negócio e como demonstrar isso",
    description:
      "UX não é custo, é estratégia de crescimento. As métricas de negócio que o UX move (conversão, retenção e CAC), como medir cada uma e como apresentar o resultado para gestores.",
    date: "2025-02-23",
    category: "growth",
    tags: ["UX", "Métricas", "Product Design", "Growth"],
    cover: "/blog/ux-retorno-negocio.webp",
    mediumUrl:
      "https://medium.com/@jhoncamiloux/como-o-ux-traz-retorno-para-o-neg%C3%B3cio-e-como-demonstrar-isso-59d1dedd0b6c",
    readMinutes: 4,
    related: {
      href: "/cases/acquire",
      title: "Clint Acquire",
      body: "Na prática: uma landing page e um fluxo conversacional que concentraram 79% da demanda comercial.",
    },
    blocks: [
      { type: "h2", text: "UX não é apenas estética: é estratégia de crescimento" },
      {
        type: "p",
        text: "Muitos gestores ainda veem UX como um custo, um “extra” na construção do produto. Mas a verdade é que um bom UX Design impacta diretamente a retenção, conversão e receita. Quer um exemplo? A Amazon aumentou sua receita em 300 milhões de dólares apenas mudando um botão de “Registrar” para “Continuar”.",
      },
      {
        type: "p",
        text: "Se você é um UX Designer ou Product Manager e quer demonstrar o impacto real do UX para o negócio, este artigo vai te dar métricas concretas, exemplos práticos e estratégias para apresentar seus resultados de forma convincente. Vamos nessa?",
      },
      { type: "h2", text: "Como UX impacta as principais métricas de negócio" },
      {
        type: "p",
        text: "O UX não pode ser apenas sobre “melhorar a experiência”. Ele precisa estar atrelado a KPIs de negócio e ajudar a empresa a crescer. Aqui estão algumas das métricas mais impactadas pelo UX:",
      },
      { type: "visual", id: "ux-kpi-map", caption: "Uma melhoria de UX não fica na tela: ela chega em conversão, retenção e custo de aquisição, e daí na receita." },
      { type: "h2", text: "1. Conversão (taxa de conversão, CR)" },
      { type: "p", text: "Toda jornada do usuário precisa ser otimizada para conversão. Isso vale para e-commerces, apps e landing pages." },
      {
        type: "p",
        lead: "Exemplo prático:",
        text: "Um e-commerce notou que muitos usuários abandonavam o carrinho na etapa de pagamento. Uma análise de UX revelou que o formulário de checkout era longo demais. Depois de reduzir os campos de preenchimento, a taxa de conversão aumentou 17%.",
      },
      { type: "visual", id: "checkout-fields", caption: "Menos campos, menos atrito: o formulário encolhe e a conversão do exemplo sobe 17%." },
      { type: "p", lead: "Como medir:", text: "" },
      {
        type: "ul",
        items: [
          "A/B Testing de diferentes versões de formulários e botões.",
          "Análise de mapas de calor (Hotjar, Crazy Egg, Microsoft Clarity).",
          "Testes de usabilidade com gravação de sessão.",
        ],
      },
      { type: "h2", text: "2. Retenção e engajamento" },
      { type: "p", text: "Um bom UX faz com que os usuários queiram voltar. Se um produto é complicado ou frustrante, ele será abandonado." },
      {
        type: "p",
        lead: "Exemplo prático:",
        text: "O LinkedIn percebeu que muitos novos usuários criavam perfis, mas não voltavam. Para resolver isso, eles reformularam o onboarding, sugerindo conexões e preenchendo dados automaticamente. O resultado? Aumento de 20% na retenção de novos usuários.",
      },
      { type: "visual", id: "retention-curve", caption: "A curva de retenção: com um onboarding melhor, menos pessoas vão embora nas primeiras semanas." },
      { type: "p", lead: "Como medir:", text: "" },
      {
        type: "ul",
        items: [
          "Cohort Analysis para entender se os usuários estão retornando.",
          "Tempo médio de uso do produto.",
          "Bounce Rate (para ver se as pessoas saem rápido demais).",
        ],
      },
      { type: "h2", text: "3. Redução do CAC (Custo de Aquisição de Cliente)" },
      { type: "p", text: "Melhor UX significa mais indicações orgânicas e menor necessidade de investimento em marketing pago." },
      {
        type: "p",
        lead: "Exemplo prático:",
        text: "O Dropbox implementou um sistema de indicação gamificado que aumentou sua base de usuários em 3900%, reduzindo drasticamente o CAC.",
      },
      { type: "visual", id: "referral-loop", caption: "O ciclo de indicação: cada usuário satisfeito traz o próximo, e o custo por cliente cai." },
      { type: "p", lead: "Como medir:", text: "" },
      {
        type: "ul",
        items: [
          "Comparar o custo de aquisição antes e depois de melhorias no UX.",
          "Verificar a porcentagem de novos usuários vindos por indicação.",
        ],
      },
      { type: "h2", text: "Como demonstrar o valor do UX para os gestores" },
      { type: "p", text: "Agora que você sabe que UX impacta o negócio, como convencer os tomadores de decisão? Aqui estão algumas estratégias:" },
      { type: "p", lead: "Fale a língua do negócio:", text: "evite termos técnicos e foque no impacto financeiro." },
      { type: "p", lead: "Mostre dados antes e depois:", text: "apresente números concretos para comprovar melhorias." },
      { type: "p", lead: "Conecte UX aos KPIs da empresa:", text: "se o objetivo é aumentar vendas, mostre como UX melhora conversão e retenção." },
      { type: "visual", id: "before-after", caption: "O que convence gestores: o mesmo KPI, antes e depois, ligado à mudança de UX que explica a diferença." },
      { type: "h2", text: "Conclusão: UX não é custo, é investimento" },
      {
        type: "p",
        text: "Se bem feito, UX Design gera crescimento, reduz custos e melhora a satisfação dos clientes. Não se trata apenas de deixar um site bonito, mas sim de criar experiências eficientes que impactam o faturamento.",
      },
      { type: "p", text: "Agora me conta: você já conseguiu provar o valor do UX na sua empresa?" },
    ],
  },
  ...mediumPosts,
  ...promptPosts,
];

export const allPosts = posts;

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

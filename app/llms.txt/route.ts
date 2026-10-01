import { CATEGORIES, posts } from "@/lib/blog/posts";

/* llms.txt: resumo do site em texto simples para motores de IA (GEO). */
const SITE = "https://camilo-rios-portfolio.vercel.app";

const CASES = [
  ["Clint Acquire", "/cases/acquire", "Como uma landing page com IA no WhatsApp e um fluxo Typebot concentrou 79% da demanda comercial da Clint."],
  ["Clint Intelligence", "/cases/intelligence", "Experiências de IA para equipes comerciais: modelos, automações e recomendações em interações compreensíveis e controláveis."],
  ["Clint Scale", "/cases/scale", "Um sistema para escalar Growth: padrões visuais e operacionais que aceleram experimentos sem perder consistência."],
  ["WhatsApp Next", "/cases/whatsapp-next", "Mudanças no WhatsApp viraram um ecossistema de conteúdo e aquisição: identidade visual, blog, landing page, criativos e captação."],
  ["Servientrega", "/cases/servientrega", "A jornada de uma encomenda como narrativa interativa: scroll storytelling, cena WebGL, direção de arte com IA e UI multilíngue."],
];

export const dynamic = "force-static";

export function GET() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const body = [
    "# Jhon Camilo Rios",
    "",
    "> Senior Product Designer em SaaS B2B. Trabalha com Growth, CRO, Design Systems e IA aplicada a produto. Portfólio com cases medidos e um blog próprio sobre UX, dados e IA, em português.",
    "",
    "Contato e perfis: https://www.linkedin.com/in/jhon-camilo-rios/ · https://medium.com/@jhoncamiloux · https://www.behance.net/CamiloRiosQuintero",
    "",
    "## Cases",
    ...CASES.map(([t, h, d]) => `- [${t}](${SITE}${h}): ${d}`),
    "",
    "## Blog",
    ...sorted.map((p) => `- [${p.title}](${SITE}/blog/${p.slug}) (${CATEGORIES[p.category]}, ${p.date}): ${p.description}`),
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

/* Artigos publicados em medium.com/@jhoncamiloux.
   Medium bloqueia scraping automatizado após os 10 primeiros posts
   (reCAPTCHA), então apenas os 10 mais recentes foram capturados
   automaticamente. Para adicionar os demais, inclua um objeto no
   mesmo formato: título exato, slug (parte final da URL, com os
   acentos já url-encoded como o Medium gera) e o hash da capa em
   miro.medium.com/v2/resize:fit:960/<hash>. */

export interface MediumArticle {
  title: string;
  slug: string;
  coverHash: string;
  date: string;
}

export const MEDIUM_PROFILE_URL = "https://medium.com/@jhoncamiloux";

export const mediumArticles: MediumArticle[] = [
  {
    title: "Acessibilidade digital: por que ela melhora a experiência de todos",
    slug: "acessibilidade-digital-por-que-ela-melhora-a-experi%C3%AAncia-de-todos-c10b154c8268",
    coverHash: "1*DO5BHImSkpC2UM68GziOwQ.png",
    date: "2025-05-22",
  },
  {
    title:
      "Superando o whiteboard challenge: transformando pressão em criatividade no UX/Product Design",
    slug: "superando-o-whiteboard-challenge-transformando-press%C3%A3o-em-criatividade-no-ux-product-design-11d0cdc85371",
    coverHash: "1*e0IGmnP2E0OTgJ1Gft8Yhw.png",
    date: "2025-03-18",
  },
  {
    title: "Design além do design: conectando produto, growth e negócio",
    slug: "design-al%C3%A9m-do-design-conectando-produto-growth-e-neg%C3%B3cio-8b4f9b25fc2c",
    coverHash: "1*GB2lTh3KkFyIsg-jc64iKA.png",
    date: "2025-03-12",
  },
  {
    title: "Descomplicando o futuro do design: a revolução da IA na user interface",
    slug: "descomplicando-o-futuro-do-design-a-revolu%C3%A7%C3%A3o-da-ia-na-user-interface-8bd659e8c7e6",
    coverHash: "1*fP4x5edkn10Ismhz6HwNQA.png",
    date: "2025-03-12",
  },
  {
    title: 'Descomplique ou desista: as lições irrefutáveis de "Não me faça pensar"',
    slug: "descomplique-ou-desista-as-li%C3%A7%C3%B5es-irrefut%C3%A1veis-de-n%C3%A3o-me-fa%C3%A7a-pensar-9b835645dafa",
    coverHash: "1*VcAnGBhSSAr5FDF_PiFPWA.png",
    date: "2025-03-12",
  },
  {
    title: "Como o UX traz retorno para o negócio e como demonstrar isso",
    slug: "como-o-ux-traz-retorno-para-o-neg%C3%B3cio-e-como-demonstrar-isso-59d1dedd0b6c",
    coverHash: "1*_ekU6MifCOKbwSrwY5LwQg.png",
    date: "2025-02-23",
  },
  {
    title: "Design Systems: como criar e manter um sistema de design escalável",
    slug: "design-systems-como-criar-e-manter-um-sistema-de-design-escal%C3%A1vel-61d2d1c7033b",
    coverHash: "1*l_JpPqQv6GhcG6woLDNxhQ.png",
    date: "2025-02-23",
  },
  {
    title: "O futuro da gestão de produtos: como a IA está transformando o jogo",
    slug: "o-futuro-da-gest%C3%A3o-de-produtos-como-a-ia-est%C3%A1-transformando-o-jogo-905851ffbc4c",
    coverHash: "1*VbB4pNnwBDHvqc1wrcDAgQ.png",
    date: "2025-02-23",
  },
  {
    title: "Design Centrado no Usuário está ultrapassado? O novo paradigma do UX Design",
    slug: "design-centrado-no-usu%C3%A1rio-est%C3%A1-ultrapassado-o-novo-paradigma-do-ux-design-6060f0bb3e36",
    coverHash: "1*eaE4fUAf_fSbdkrt2ohMdg.png",
    date: "2025-02-20",
  },
  {
    title: "Do UX ao CEO: como Designers estão assumindo papéis de liderança nas empresas",
    slug: "do-ux-ao-ceo-como-designers-est%C3%A3o-assumindo-pap%C3%A9is-de-lideran%C3%A7a-nas-empresas-804d0ffbd5c9",
    coverHash: "1*e30ZrKlaFwkKoiqfRkQYMg.png",
    date: "2025-02-20",
  },
];

export function mediumArticleUrl(slug: string): string {
  return `${MEDIUM_PROFILE_URL}/${slug}`;
}

export function mediumCoverUrl(hash: string, width = 960): string {
  return `https://miro.medium.com/v2/resize:fit:${width}/${hash}`;
}

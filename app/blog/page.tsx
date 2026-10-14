import type { Metadata } from "next";
import Link from "next/link";
import { CaseHeader } from "@/components/case-lp/case-header";
import { CaseFooter } from "@/components/case-lp/case-footer";
import { BlogList } from "@/components/blog/blog-list";
import { posts } from "@/lib/blog/posts";
import { L } from "@/components/blog/i18n";

export const metadata: Metadata = {
  title: "Blog: Product Design, UX, Growth e IA",
  description: "Artigos sobre Product Design, UX, métricas, Growth, Design Systems e IA aplicada ao design, com exemplos visuais e ligação com projetos reais.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Blog · Jhon Camilo Rios", description: "Product Design, UX, Growth e IA, explicados com exemplos visuais.", type: "website", locale: "pt_BR" },
  twitter: { card: "summary_large_image", title: "Blog · Jhon Camilo Rios" },
};

const SITE = "https://camilo-rios-portfolio.vercel.app";

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
    ],
  };
  const blog = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE}/blog#blog`,
    name: "Blog de Jhon Camilo Rios",
    url: `${SITE}/blog`,
    inLanguage: "pt-BR",
    author: { "@id": `${SITE}/#person` },
    blogPost: sorted.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: `${SITE}/blog/${p.slug}`, datePublished: p.date, dateModified: p.updated ?? p.date })),
  };
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumb, blog]) }} />
      <CaseHeader label="Blog" />
      <main className="container pb-24 pt-28 md:pt-36">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink/60">
          <Link href="/" className="hover:text-link"><L pt="Início" en="Home" es="Inicio" /></Link> <span aria-hidden="true">/</span> <span aria-current="page">Blog</span>
        </nav>
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-link">Blog</p>
        <h1 className="mt-4 max-w-3xl font-display text-[40px] font-semibold leading-[1.05] tracking-tight md:text-[64px]">
          <L pt="Design, dados e IA, explicados com exemplos." en="Design, data and AI, explained with examples." es="Diseño, datos e IA, explicados con ejemplos." />
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
          <L pt="O que aprendo construindo produtos, em textos curtos e visuais que mostram a ideia em vez de só descrever." en="What I learn building products, in short, visual pieces that show the idea instead of just describing it." es="Lo que aprendo construyendo productos, en textos cortos y visuales que muestran la idea en lugar de solo describirla." />
        </p>
        <div className="mt-12">
          <BlogList posts={sorted} />
        </div>
      </main>
      <CaseFooter />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { CaseHeader } from "@/components/case-lp/case-header";
import { CaseFooter } from "@/components/case-lp/case-footer";
import { BlogList } from "@/components/blog/blog-list";
import { posts } from "@/lib/blog/posts";

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
  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#0A0A0A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <CaseHeader label="Blog" />
      <main className="container pb-24 pt-28 md:pt-36">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#0A0A0A]/60">
          <Link href="/" className="hover:text-[#622FFD]">Início</Link> <span aria-hidden="true">/</span> <span aria-current="page">Blog</span>
        </nav>
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#622FFD]">Blog</p>
        <h1 className="mt-4 max-w-3xl font-display text-[40px] font-semibold leading-[1.05] tracking-tight md:text-[64px]">
          Design, dados e IA, explicados com exemplos.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#0A0A0A]/70 md:text-lg">
          O que aprendo construindo produtos, em textos curtos e visuais que mostram a ideia em vez de só descrever.
        </p>
        <div className="mt-12">
          <BlogList posts={sorted} />
        </div>
      </main>
      <CaseFooter />
    </div>
  );
}

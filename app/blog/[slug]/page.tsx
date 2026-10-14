import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { CaseHeader } from "@/components/case-lp/case-header";
import { CaseFooter } from "@/components/case-lp/case-footer";
import { CoverArt } from "@/components/blog/visuals-kit";
import { SeriesBar, SeriesEnd, Widen } from "@/components/blog/series";
import { ArticleBlocks, ArticleTitle, type LinkInfo } from "@/components/blog/article-body";
import { ArticleField, ArticleI18nProvider, CategoryLabel, L, PostDate } from "@/components/blog/i18n";
import { coverSmall, postBySlug, seriesOf } from "@/lib/blog/series";
import { CATEGORIES, getPost, posts } from "@/lib/blog/posts";

const SITE = "https://camilo-rios-portfolio.vercel.app";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    keywords: p.tags,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { title: p.title, description: p.description, type: "article", publishedTime: p.date, modifiedTime: p.updated ?? p.date, authors: ["Jhon Camilo Rios"], tags: p.tags, locale: "pt_BR", ...(p.cover ? { images: [{ url: p.cover }] } : {}) },
    twitter: { card: "summary_large_image", title: p.title, description: p.description, ...(p.cover ? { images: [p.cover] } : {}) },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const url = `${SITE}/blog/${p.slug}`;
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      dateModified: p.updated ?? p.date,
      articleSection: CATEGORIES[p.category],
      wordCount: p.blocks.reduce((n, b) => n + ("text" in b ? b.text.split(/\s+/).length : "items" in b ? b.items.join(" ").split(/\s+/).length : 0), 0),
      ...(p.cover ? { image: `${SITE}${p.cover}` } : {}),
      url,
      mainEntityOfPage: url,
      inLanguage: "pt-BR",
      keywords: p.tags.join(", "),
      author: { "@type": "Person", "@id": `${SITE}/#person`, name: "Jhon Camilo Rios", url: SITE },
      publisher: { "@type": "Person", "@id": `${SITE}/#person`, name: "Jhon Camilo Rios" },
      isPartOf: { "@type": "Blog", "@id": `${SITE}/blog#blog` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
        { "@type": "ListItem", position: 3, name: p.title, item: url },
      ],
    },
  ];

  const links: Record<string, LinkInfo> = {};
  for (const b of p.blocks) if (b.type === "link") {
    const q = postBySlug(b.slug);
    const s = seriesOf(b.slug);
    if (q) links[b.slug] = { title: q.title, thumb: q.cover ? coverSmall(q) : undefined, chapter: s ? s.index + 1 : undefined };
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-surface text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <CaseHeader label="Blog" />
      <main className="pb-24 pt-28 md:pt-36">
        <ArticleI18nProvider slug={p.slug}>
        <article className="container max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap gap-1 text-sm text-ink/60">
            <Link href="/" className="hover:text-link"><L pt="Início" en="Home" es="Inicio" /></Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-link">Blog</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="line-clamp-1"><ArticleField field="title" pt={p.title} /></span>
          </nav>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-link"><CategoryLabel c={p.category} /></p>
          <ArticleTitle pt={p.title} lab={p.lab} className={p.lab ? "mt-4 font-display text-[38px] font-semibold leading-[1.04] tracking-tight md:text-[64px]" : "mt-4 font-display text-[34px] font-semibold leading-[1.1] tracking-tight md:text-[52px]"} />
          <p className="mt-5 text-lg leading-relaxed text-ink/70"><ArticleField field="description" pt={p.description} /></p>
          <p className="mt-6 text-sm text-ink/60">
            Jhon Camilo Rios · <PostDate date={p.date} /> · {p.readMinutes} <L pt="min de leitura" en="min read" es="min de lectura" />
            {p.updated && p.updated !== p.date && (
              <> · <L pt="Atualizado em" en="Updated on" es="Actualizado el" /> <PostDate date={p.updated} /></>
            )}
          </p>

          {p.coverArt ? (
            <div className="mt-10"><CoverArt icons={p.coverArt.icons} label={CATEGORIES[p.category]} size="hero" /></div>
          ) : p.cover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.cover} srcSet={`${p.cover.replace(/\.webp$/, "-800.webp")} 800w, ${p.cover} 1600w`} sizes="(min-width: 768px) 720px, 100vw" width={1600} height={800} fetchPriority="high" decoding="async" alt="" className="mt-10 aspect-[2/1] w-full rounded-3xl object-cover" />
          ) : null}

          <SeriesBar slug={p.slug} />

          {p.updateNote && (
            <p className="mt-8 rounded-2xl border border-[#622FFD]/20 bg-[#622FFD]/[0.05] px-5 py-4 text-sm leading-relaxed text-ink/80"><ArticleField field="updateNote" pt={p.updateNote} /></p>
          )}

          <ArticleBlocks blocks={p.blocks} links={links} />

          <SeriesEnd slug={p.slug} />
          <Widen slug={p.slug} />

          {p.sources && (
            <section aria-label="Fontes" className="mt-12 rounded-2xl border border-ink/[0.08] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/60"><L pt="Fontes e leituras" en="Sources and further reading" es="Fuentes y lecturas" /></p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink/75">
                {p.sources.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </section>
          )}

          <div className="mt-12 flex flex-wrap gap-2">
            {p.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-ink/10 px-3 py-1 text-xs text-ink/65">{tag}</span>
            ))}
          </div>

          <aside aria-label="Case relacionado" className="mt-14">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/60"><L pt="Case relacionado" en="Related case study" es="Caso relacionado" /></p>
            <Link href={p.related.href} className="group mt-3 flex items-start justify-between gap-6 rounded-2xl border border-ink/10 bg-canvas p-6 transition hover:border-[#622FFD]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#622FFD]">
              <span>
                <span className="block font-display text-2xl font-semibold group-hover:text-link"><ArticleField field="relatedTitle" pt={p.related.title} /></span>
                <span className="mt-2 block text-sm leading-relaxed text-ink/70"><ArticleField field="relatedBody" pt={p.related.body} /></span>
              </span>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-ink/50 group-hover:text-link" aria-hidden="true" />
            </Link>
          </aside>

          {p.mediumUrl && <p className="mt-10 text-sm text-ink/60">
            <L pt="Também publicado no" en="Also published on" es="También publicado en" />{" "}
            <a href={p.mediumUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-link">Medium</a>.
          </p>}
        </article>
        </ArticleI18nProvider>
      </main>
      <CaseFooter />
    </div>
  );
}

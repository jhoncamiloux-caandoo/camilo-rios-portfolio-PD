import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { CaseHeader } from "@/components/case-lp/case-header";
import { CaseFooter } from "@/components/case-lp/case-footer";
import { BlogVisual } from "@/components/blog/visuals";
import { CoverArt } from "@/components/blog/visuals-kit";
import { BlogScene } from "@/components/blog/motion";
import { KineticTitle } from "@/components/blog/motion/primitives";
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

  return (
    <div className="min-h-screen overflow-x-clip bg-white text-[#0A0A0A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <CaseHeader label="Blog" />
      <main className="pb-24 pt-28 md:pt-36">
        <article className="container max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap gap-1 text-sm text-[#0A0A0A]/60">
            <Link href="/" className="hover:text-[#622FFD]">Início</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-[#622FFD]">Blog</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="line-clamp-1">{p.title}</span>
          </nav>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#622FFD]">{CATEGORIES[p.category]}</p>
          {p.lab ? (
            <KineticTitle text={p.title} className="mt-4 font-display text-[38px] font-semibold leading-[1.04] tracking-tight md:text-[64px]" />
          ) : (
            <h1 className="mt-4 font-display text-[34px] font-semibold leading-[1.1] tracking-tight md:text-[52px]">{p.title}</h1>
          )}
          <p className="mt-5 text-lg leading-relaxed text-[#0A0A0A]/70">{p.description}</p>
          <p className="mt-6 text-sm text-[#0A0A0A]/60">
            Jhon Camilo Rios · <time dateTime={p.date}>{new Date(p.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}</time> · {p.readMinutes} min de leitura
            {p.updated && p.updated !== p.date && (
              <> · Atualizado em <time dateTime={p.updated}>{new Date(p.updated).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}</time></>
            )}
          </p>

          {p.coverArt ? (
            <div className="mt-10"><CoverArt icons={p.coverArt.icons} label={CATEGORIES[p.category]} size="hero" /></div>
          ) : p.cover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.cover} srcSet={`${p.cover.replace(/\.webp$/, "-800.webp")} 800w, ${p.cover} 1600w`} sizes="(min-width: 768px) 720px, 100vw" width={1600} height={800} fetchPriority="high" decoding="async" alt="" className="mt-10 aspect-[2/1] w-full rounded-3xl object-cover" />
          ) : null}

          {p.updateNote && (
            <p className="mt-8 rounded-2xl border border-[#622FFD]/20 bg-[#622FFD]/[0.05] px-5 py-4 text-sm leading-relaxed text-[#0A0A0A]/80">{p.updateNote}</p>
          )}

          <div className="mt-12">
            {p.blocks.map((b, i) => {
              if (b.type === "h2") return <h2 key={i} className="mt-14 font-display text-2xl font-semibold leading-snug md:text-[32px]">{b.text}</h2>;
              if (b.type === "ul")
                return (
                  <ul key={i} className="mt-3 list-disc space-y-2 pl-6 text-[17px] leading-relaxed text-[#0A0A0A]/80 marker:text-[#622FFD]">
                    {b.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                );
              if (b.type === "scene") return <BlogScene key={i} id={b.id} data={b.data} />;
              if (b.type === "visual") return <BlogVisual key={i} id={b.id} data={b.data} caption={b.caption} />;
              if (b.type === "quote")
                return (
                  <blockquote key={i} className="mt-6 border-l-4 border-[#622FFD] bg-[#F8F8F8] px-5 py-4 text-[17px] leading-relaxed text-[#0A0A0A]/85">
                    {b.text}
                  </blockquote>
                );
              return (
                <p key={i} className="mt-5 text-[17px] leading-[1.75] text-[#0A0A0A]/80">
                  {b.lead && <strong className="font-semibold text-[#0A0A0A]">{b.lead} </strong>}
                  {b.text}
                </p>
              );
            })}
          </div>

          {p.sources && (
            <section aria-label="Fontes" className="mt-12 rounded-2xl border border-black/[0.08] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#0A0A0A]/60">Fontes e leituras</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-[#0A0A0A]/75">
                {p.sources.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </section>
          )}

          <div className="mt-12 flex flex-wrap gap-2">
            {p.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-black/10 px-3 py-1 text-xs text-[#0A0A0A]/65">{tag}</span>
            ))}
          </div>

          <aside aria-label="Case relacionado" className="mt-14">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#0A0A0A]/60">Case relacionado</p>
            <Link href={p.related.href} className="group mt-3 flex items-start justify-between gap-6 rounded-2xl border border-black/10 bg-[#F8F8F8] p-6 transition hover:border-[#622FFD]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#622FFD]">
              <span>
                <span className="block font-display text-2xl font-semibold group-hover:text-[#622FFD]">{p.related.title}</span>
                <span className="mt-2 block text-sm leading-relaxed text-[#0A0A0A]/70">{p.related.body}</span>
              </span>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-[#0A0A0A]/50 group-hover:text-[#622FFD]" aria-hidden="true" />
            </Link>
          </aside>

          {p.mediumUrl && <p className="mt-10 text-sm text-[#0A0A0A]/60">
            Também publicado no{" "}
            <a href={p.mediumUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-[#622FFD]">Medium</a>.
          </p>}
        </article>
      </main>
      <CaseFooter />
    </div>
  );
}

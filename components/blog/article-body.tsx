"use client";

import Link from "next/link";
import { useEffect } from "react";
import type { Block } from "@/lib/blog/posts";
import { BlogVisual } from "@/components/blog/visuals";
import { BlogScene } from "@/components/blog/motion";
import { BlogVideo } from "@/components/blog/blog-video";
import { KineticTitle } from "@/components/blog/motion/primitives";
import { L, PostTitle, useArticleI18n } from "@/components/blog/i18n";
import { useLocale } from "@/lib/i18n/locale-context";

export type LinkInfo = { title: string; thumb?: string; chapter?: number };

/* Título do artigo no idioma ativo (o cinético reinicia ao trocar). */
export function ArticleTitle({ pt, lab, className }: { pt: string; lab?: boolean; className: string }) {
  const t = useArticleI18n();
  const { locale } = useLocale();
  const text = t?.title ?? pt;
  useEffect(() => {
    document.title = `${text} | Jhon Camilo Rios`;
  }, [text]);
  return lab ? <KineticTitle key={locale + text} text={text} className={className} /> : <h1 className={className}>{text}</h1>;
}

function PostLinkCard({ slug, text, info }: { slug: string; text: string; info?: LinkInfo }) {
  if (!info) return null;
  return (
    <Link href={`/blog/${slug}`} className="group my-8 grid grid-cols-[112px_1fr] items-center gap-4 rounded-2xl border border-line bg-canvas p-3 transition hover:border-link/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus sm:grid-cols-[160px_1fr]">
      {info.thumb ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={info.thumb} width={800} height={450} loading="lazy" decoding="async" alt="" className="aspect-video w-full rounded-xl object-cover" />
      ) : (
        <span aria-hidden="true" className="block aspect-video w-full rounded-xl bg-gradient-to-br from-[#622FFD] to-[#A48BFF]" />
      )}
      <span className="min-w-0 pr-2">
        <span className="block text-[13px] text-ink-secondary">{text}</span>
        <span className="mt-1 block font-display text-[17px] font-semibold leading-snug text-ink group-hover:text-link">
          {info.chapter && <span className="text-link"><L pt="Capítulo" en="Chapter" es="Capítulo" /> {info.chapter} · </span>}
          <PostTitle slug={slug} pt={info.title} />
        </span>
      </span>
    </Link>
  );
}

/* Corpo do artigo: usa os blocos traduzidos quando existem e batem em quantidade com o original. */
export function ArticleBlocks({ blocks, links }: { blocks: Block[]; links: Record<string, LinkInfo> }) {
  const t = useArticleI18n();
  const list = t && t.blocks.length === blocks.length ? t.blocks : blocks;
  return (
    <div className="mt-12">
      {list.map((b, i) => {
        if (b.type === "h2") return <h2 key={i} className="mt-14 font-display text-2xl font-semibold leading-snug md:text-[32px]">{b.text}</h2>;
        if (b.type === "ul")
          return (
            <ul key={i} className="mt-3 list-disc space-y-2 pl-6 text-[17px] leading-relaxed text-ink/80 marker:text-link">
              {b.items.map((it, j) => <li key={j}>{it}</li>)}
            </ul>
          );
        if (b.type === "scene") return <BlogScene key={i} id={b.id} data={b.data} />;
        if (b.type === "visual") return <BlogVisual key={i} id={b.id} data={b.data} caption={b.caption} />;
        if (b.type === "link") return <PostLinkCard key={i} slug={b.slug} text={b.text} info={links[b.slug]} />;
        if (b.type === "video") return <BlogVideo key={i} items={b.items} caption={b.caption} />;
        if (b.type === "code")
          return (
            <figure key={i} className="mt-6">
              {b.label && <figcaption className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">{b.label}</figcaption>}
              <pre className="overflow-x-auto rounded-2xl border border-line bg-[#0d0d12] p-5 text-[14px] leading-relaxed text-white/90"><code>{b.text}</code></pre>
            </figure>
          );
        if (b.type === "quote")
          return (
            <blockquote key={i} className="mt-6 border-l-4 border-[#622FFD] bg-canvas px-5 py-4 text-[17px] leading-relaxed text-ink/85">
              {b.text}
            </blockquote>
          );
        return (
          <p key={i} className="mt-5 text-[17px] leading-[1.75] text-ink/80">
            {b.lead && <strong className="font-semibold text-ink">{b.lead} </strong>}
            {b.text}
          </p>
        );
      })}
    </div>
  );
}

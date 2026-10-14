"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, type Category, type Post } from "@/lib/blog/posts";
import { CoverArt } from "@/components/blog/visuals-kit";
import { CATEGORY_I18N, DATE_LOCALE, useBlogIndex } from "@/components/blog/i18n";
import { useLocale } from "@/lib/i18n/locale-context";

const ALL = "all" as const;

export function BlogList({ posts }: { posts: Post[] }) {
  const [cat, setCat] = useState<Category | typeof ALL>(ALL);
  const { locale } = useLocale();
  const idx = useBlogIndex();
  const C = CATEGORY_I18N[locale];
  // Só mostra filtros de temas que têm artigo publicado
  const used = (Object.keys(CATEGORIES) as Category[]).filter((k) => posts.some((p) => p.category === k));
  const list = cat === ALL ? posts : posts.filter((p) => p.category === cat);

  return (
    <>
      <div role="group" aria-label={locale === "en" ? "Filter by topic" : locale === "es" ? "Filtrar por tema" : "Filtrar por tema"} className="flex flex-wrap gap-2">
        {[ALL, ...used].map((k) => {
          const on = cat === k;
          return (
            <button
              key={k}
              type="button"
              aria-pressed={on}
              onClick={() => setCat(k)}
              className={`h-10 rounded-full border px-4 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#622FFD] focus-visible:ring-offset-2 ${
                on ? "border-[#622FFD] bg-[#622FFD] text-white" : "border-ink/10 bg-surface text-ink hover:border-[#622FFD]/50 hover:text-link"
              }`}
            >
              {k === ALL ? (locale === "en" ? "All" : "Todos") : C[k]}
            </button>
          );
        })}
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/[0.08] bg-surface transition hover:-translate-y-1 hover:border-[#622FFD]/30 hover:shadow-[0_24px_60px_rgba(98,47,253,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#622FFD]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {p.coverArt ? <CoverArt icons={p.coverArt.icons} label={C[p.category]} /> : <img src={p.cover?.replace(/\.webp$/, "-800.webp")} alt="" loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover" />}
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-link">{C[p.category]}</p>
                <h2 className="mt-3 font-display text-xl font-semibold leading-snug text-ink group-hover:text-link">{idx?.[p.slug]?.title ?? p.title}</h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink/65">{idx?.[p.slug]?.description ?? p.description}</p>
                <div className="mt-auto flex items-center justify-between pt-5 text-xs text-ink/60">
                  <span>
                    {new Date(p.date + "T12:00:00").toLocaleDateString(DATE_LOCALE[locale], { day: "2-digit", month: "short", year: "numeric" })} · {p.readMinutes} min
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition group-hover:text-link" aria-hidden="true" />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, type Category, type Post } from "@/lib/blog/posts";

const ALL = "all" as const;

export function BlogList({ posts }: { posts: Post[] }) {
  const [cat, setCat] = useState<Category | typeof ALL>(ALL);
  // Só mostra filtros de temas que têm artigo publicado
  const used = (Object.keys(CATEGORIES) as Category[]).filter((k) => posts.some((p) => p.category === k));
  const list = cat === ALL ? posts : posts.filter((p) => p.category === cat);

  return (
    <>
      <div role="group" aria-label="Filtrar por tema" className="flex flex-wrap gap-2">
        {[ALL, ...used].map((k) => {
          const on = cat === k;
          return (
            <button
              key={k}
              type="button"
              aria-pressed={on}
              onClick={() => setCat(k)}
              className={`h-10 rounded-full border px-4 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#622FFD] focus-visible:ring-offset-2 ${
                on ? "border-[#622FFD] bg-[#622FFD] text-white" : "border-black/10 bg-white text-[#0A0A0A] hover:border-[#622FFD]/50 hover:text-[#622FFD]"
              }`}
            >
              {k === ALL ? "Todos" : CATEGORIES[k]}
            </button>
          );
        })}
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white transition hover:-translate-y-1 hover:border-[#622FFD]/30 hover:shadow-[0_24px_60px_rgba(98,47,253,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#622FFD]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.cover} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#622FFD]">{CATEGORIES[p.category]}</p>
                <h2 className="mt-3 font-display text-xl font-semibold leading-snug text-[#0A0A0A] group-hover:text-[#622FFD]">{p.title}</h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#0A0A0A]/65">{p.description}</p>
                <div className="mt-auto flex items-center justify-between pt-5 text-xs text-[#0A0A0A]/60">
                  <span>
                    {new Date(p.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })} · {p.readMinutes} min
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition group-hover:text-[#622FFD]" aria-hidden="true" />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

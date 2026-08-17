"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import CircularGallery from "@/components/ui/circular-gallery";
import {
  MEDIUM_PROFILE_URL,
  mediumArticleUrl,
  mediumArticles,
  mediumCoverUrl,
} from "@/lib/medium-articles";

const ease = [0.22, 1, 0.36, 1] as const;

export function Blog() {
  const [hovering, setHovering] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const items = useMemo(
    () =>
      mediumArticles.map((article) => ({
        image: mediumCoverUrl(article.coverHash),
        text: article.title,
      })),
    []
  );

  const handleItemClick = (index: number) => {
    const article = mediumArticles[index];
    if (!article) return;
    window.open(mediumArticleUrl(article.slug), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="blog" className="relative bg-white py-24 md:py-32">
      <div className="container">
        {/* Cabeçalho */}
        <FadeIn className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col gap-4">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Blog
            </p>
            <h2 className="max-w-xl font-display text-[32px] font-semibold leading-[1.08] tracking-tight text-[#0A0A0A] md:text-[44px]">
              Escrevo sobre Product Design, IA e Growth.
            </h2>
            <p className="max-w-md font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
              {mediumArticles.length} artigos publicados no Medium. Arraste
              para navegar ou clique em qualquer capa para ler.
            </p>
          </div>
          <a
            href={MEDIUM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-black/[0.1] px-6 text-sm font-semibold text-[#0A0A0A] transition-colors duration-250 hover:border-primary hover:text-primary"
          >
            Ver todos no Medium
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </FadeIn>

        {/* Galeria */}
        <FadeIn delay={0.15} className="mt-14 md:mt-20">
          <div
            className="relative h-[420px] w-full overflow-hidden rounded-[28px] bg-[#0A0A0A] md:h-[520px]"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(98,47,253,0.16),transparent_70%)]"
            />
            <CircularGallery items={items} bend={2.5} onItemClick={handleItemClick} />

            {/* Cursor customizado — só desktop */}
            <motion.div
              className="pointer-events-none absolute z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full bg-white px-4 py-2 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4)] md:flex"
              style={{ left: cursor.x, top: cursor.y }}
              initial={false}
              animate={{ opacity: hovering ? 1 : 0, scale: hovering ? 1 : 0.85 }}
              transition={{ duration: 0.25, ease }}
            >
              <span className="font-sans text-xs font-semibold text-[#0A0A0A]">
                Ler artigo
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

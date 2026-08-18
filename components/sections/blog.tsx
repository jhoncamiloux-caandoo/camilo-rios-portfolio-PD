"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import {
  MEDIUM_PROFILE_URL,
  mediumArticleUrl,
  mediumArticles,
  mediumCoverUrl,
} from "@/lib/medium-articles";

const DRAG_THRESHOLD = 6;

export function Blog() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [dragging, setDragging] = useState(false);

  // Estado do arrasto com o mouse — refs porque mudam a cada pixel,
  // sem precisar re-renderizar o componente.
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const dragDistance = useRef(0);

  const updateEdges = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 8);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 8);
  };

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  // Arrastar com o mouse — o touch já rola nativamente com overflow-x-auto,
  // então só tratamos pointerType "mouse" aqui.
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = trackRef.current;
    if (!el) return;
    setDragging(true);
    dragDistance.current = 0;
    dragStartX.current = e.clientX;
    dragStartScroll.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !dragging) return;
    const el = trackRef.current;
    if (!el) return;
    const delta = e.clientX - dragStartX.current;
    dragDistance.current = Math.abs(delta);
    el.scrollLeft = dragStartScroll.current - delta;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    setDragging(false);
  };

  // Se o mouse arrastou de verdade, evita que o clique solto abra o link.
  const onClickCapture = (e: React.MouseEvent) => {
    if (dragDistance.current > DRAG_THRESHOLD) {
      e.preventDefault();
      e.stopPropagation();
    }
    dragDistance.current = 0;
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
              {mediumArticles.length} artigos publicados no Medium. Arraste ou
              use as setas para navegar.
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

        {/* Carrossel */}
        <FadeIn delay={0.15} className="relative mt-14 md:mt-20">
          <div
            ref={trackRef}
            onScroll={updateEdges}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            onClickCapture={onClickCapture}
            className={`flex snap-x gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
              dragging
                ? "cursor-grabbing snap-none select-none"
                : "cursor-grab snap-mandatory scroll-smooth"
            }`}
          >
            {mediumArticles.map((article) => (
              <a
                key={article.slug}
                data-card
                href={mediumArticleUrl(article.slug)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex w-[260px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-[#0A0A0A] transition-shadow duration-300 hover:shadow-[0_16px_40px_-12px_rgba(10,10,10,0.35)] sm:w-[300px]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-black/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={mediumCoverUrl(article.coverHash)}
                    alt=""
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                  <p className="font-display text-base font-semibold leading-snug tracking-tight text-white">
                    {article.title}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-white/50 transition-colors duration-300 group-hover:text-primary">
                    Ler artigo
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Setas */}
          <div className="mt-6 flex items-center justify-end gap-2">
            <button
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              aria-label="Artigos anteriores"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.1] text-[#0A0A0A]/60 transition disabled:opacity-30 enabled:hover:border-primary enabled:hover:text-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              aria-label="Próximos artigos"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.1] text-[#0A0A0A]/60 transition disabled:opacity-30 enabled:hover:border-primary enabled:hover:text-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

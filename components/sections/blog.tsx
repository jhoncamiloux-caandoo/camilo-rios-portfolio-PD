"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { CATEGORIES, posts } from "@/lib/blog/posts";
import { CoverArt } from "@/components/blog/visuals-kit";

// Os 10 artigos mais recentes do blog próprio; "ver todos" leva a /blog.
// Home mostra só artigos com capa ilustrada.
// Destaques fixos primeiro; o restante segue por data.
const FEATURED = ["12-metricas-de-ux", "acessibilidade-digital-melhora-a-experiencia-de-todos", "design-alem-do-design-produto-growth-negocio", "ia-acelera-mas-ate-que-ponto", "design-systems-como-criar-e-manter"];
const withCover = posts.filter((p) => p.cover && !p.coverArt);
const latest = [
  ...FEATURED.map((s) => withCover.find((p) => p.slug === s)).filter((p): p is (typeof posts)[number] => !!p),
  ...withCover.filter((p) => !FEATURED.includes(p.slug)).sort((a, b) => b.date.localeCompare(a.date)),
].slice(0, 10);
import { useLocale } from "@/lib/i18n/locale-context";

const DRAG_THRESHOLD = 6;

export function Blog() {
  const { t } = useLocale();
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
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !dragging) return;
    const el = trackRef.current;
    if (!el) return;
    const delta = e.clientX - dragStartX.current;
    dragDistance.current = Math.abs(delta);
    // Só captura o ponteiro quando é arrasto de verdade; capturar no clique
    // desviava o clique do link do card e nada acontecia.
    if (dragDistance.current > DRAG_THRESHOLD && !el.hasPointerCapture(e.pointerId)) el.setPointerCapture(e.pointerId);
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
    <section id="blog" data-nav-theme="light" className="relative bg-white py-24 md:py-32">
      <div className="container">
        {/* Cabeçalho */}
        <FadeIn className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="flex flex-col gap-4">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {t.home.blog.eyebrow}
            </p>
            <h2 className="max-w-xl font-display text-[32px] font-semibold leading-[1.08] tracking-tight text-[#0A0A0A] md:text-[44px]">
              {t.home.blog.title}
            </h2>
            <p className="max-w-md font-sans text-base leading-relaxed text-[#0A0A0A]/65 md:text-lg">
              {posts.length} {t.home.blog.descriptionSuffix}
            </p>
          </div>
          <a
            href="/blog"
            className="group inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-black/[0.1] px-6 text-sm font-semibold text-[#0A0A0A] transition-colors duration-250 hover:border-primary hover:text-primary"
          >
            {t.home.blog.viewAllLabel}
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
            {latest.map((article) => {
              return (
              <a
                key={article.slug}
                data-card
                href={`/blog/${article.slug}`}
                className="group relative flex w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_60px_rgba(98,47,253,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:w-[320px]"
              >
                <div className="aspect-[16/9] w-full overflow-hidden bg-[#0d0d12]">
                  {article.coverArt ? (
                    <CoverArt icons={article.coverArt.icons} label={CATEGORIES[article.category]} />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img decoding="async"
                      src={article.cover?.replace(/\.webp$/, "-800.webp")}
                      alt=""
                      loading="lazy"
                      draggable={false}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">{CATEGORIES[article.category]}</p>
                  <p className="mt-3 font-display text-lg font-semibold leading-snug text-[#0A0A0A] group-hover:text-primary">{article.title}</p>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#0A0A0A]/65">{article.description}</p>
                  <div className="mt-auto flex items-center justify-between pt-5 text-xs text-[#0A0A0A]/60">
                    <span>
                      {new Date(article.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })} · {article.readMinutes} min
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-[#0A0A0A]/70 group-hover:text-primary">
                      {t.home.blog.readArticleLabel}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </a>
              );
            })}
          </div>

          {/* Setas */}
          <div className="mt-6 flex items-center justify-end gap-2">
            <button
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              aria-label={t.home.blog.prevAria}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.1] text-[#0A0A0A]/65 transition disabled:opacity-30 enabled:hover:border-primary enabled:hover:text-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              aria-label={t.home.blog.nextAria}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.1] text-[#0A0A0A]/65 transition disabled:opacity-30 enabled:hover:border-primary enabled:hover:text-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

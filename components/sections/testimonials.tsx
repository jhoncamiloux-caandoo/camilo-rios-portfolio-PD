"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: "juan",
    name: "Juan José H. Ramirez",
    role: "Senior Experience Designer",
    company: "Thoughtworks",
    initials: "JR",
    quote:
      "Profissional dedicado e criativo que demonstrou estar sempre atualizado em tendências e metodologias de design, contribuindo nos projetos com pensamento crítico.",
  },
  {
    id: "camila",
    name: "Camila Meneghetti",
    role: "Senior Product Manager",
    company: "IA",
    initials: "CM",
    quote:
      "Sempre interessado em compreender as motivações do usuário e como elas se conectam aos objetivos de negócio. Transita muito bem entre produto, design e tecnologia.",
  },
  {
    id: "marcos",
    name: "Marcos Gabriel Moreira",
    role: "Product Designer",
    company: "UX/UI",
    initials: "MG",
    quote:
      "Combina rigor técnico com um olhar clínico para criar peças de alto impacto, integrando IA ao workflow sem abrir mão da excelência estética. Eleva o nível de qualquer equipe.",
  },
  {
    id: "felippe",
    name: "Felippe Yann Machado",
    role: "RevOps & AI Integration",
    company: "Data Analytics",
    initials: "FY",
    quote:
      "O designer mais versátil com quem já trabalhei. Usa ferramentas diversas para chegar a um produto final conciso, comunicativo e refinado.",
  },
  {
    id: "maria",
    name: "Maria Augusta Larré Lemos",
    role: "Analista de Inteligência de Mercado",
    company: "Performance",
    initials: "MA",
    quote:
      "Eu delegava as demandas de UX/UI do briefing ao handoff — e ele sempre entregou com autonomia, técnica e senso de dono.",
  },
];

const INTERVAL_MS = 5000;

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 48 : -48,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -48 : 48,
    opacity: 0,
  }),
};

function LinkedInGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (next: number) => {
      const d = next > index ? 1 : -1;
      setDir(d);
      setIndex((next + testimonials.length) % testimonials.length);
    },
    [index],
  );

  const prev = useCallback(() => go(index - 1), [go, index]);
  const next = useCallback(() => go(index + 1), [go, index]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % testimonials.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused]);

  const t = testimonials[index];

  return (
    <section
      id="recomendacoes"
      className="relative overflow-hidden bg-[#080808] py-24 text-white md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Brilho roxo da marca */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(55%_80%_at_50%_0%,rgba(98,47,253,0.13),transparent_72%)]"
      />

      <div className="container relative flex flex-col gap-14">

        {/* Header */}
        <FadeIn>
          <div className="flex items-start justify-between">
            <div className="max-w-xl">
              <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/35">
                <LinkedInGlyph className="h-3 w-3 text-[#622FFD]" />
                Recomendações · LinkedIn
              </p>
              <h2 className="font-display text-[36px] font-semibold leading-[1.08] tracking-tight md:text-[52px]">
                Quem já construiu<br className="hidden md:block" /> comigo.
              </h2>
            </div>

            {/* Setas — desktop */}
            <div className="hidden items-center gap-2 self-end md:flex">
              <button
                onClick={prev}
                aria-label="Anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#622FFD]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Próxima"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#622FFD]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Card único — AnimatePresence garante 1 visível por vez */}
        <div className="relative min-h-[300px] w-full overflow-hidden md:min-h-[260px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.figure
              key={t.id}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex flex-col justify-between gap-8 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-8 md:p-10"
            >
              {/* Ícone LinkedIn + quote */}
              <div className="flex flex-col gap-6">
                <LinkedInGlyph className="h-5 w-5 text-[#622FFD]" />
                <blockquote className="font-display text-xl font-medium leading-snug tracking-tight text-white md:text-2xl lg:text-[28px]">
                  "{t.quote}"
                </blockquote>
              </div>

              {/* Pessoa */}
              <figcaption className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#622FFD]/20 text-sm font-semibold text-[#9b87ff] ring-1 ring-[#622FFD]/30"
                >
                  {t.initials}
                </span>
                <div className="min-w-0">
                  <span className="block font-sans text-base font-semibold text-white">
                    {t.name}
                  </span>
                  <span className="block text-sm text-white/45">
                    {t.role} · {t.company}
                  </span>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Dots de navegação + setas mobile */}
        <div className="flex items-center justify-between">
          {/* Contador */}
          <span className="font-mono text-xs tabular-nums text-white/30">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </span>

          {/* Dots */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Navegar entre recomendações">
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                role="tab"
                aria-selected={i === index}
                aria-label={`Recomendação de ${item.name}`}
                onClick={() => go(i)}
                className="group h-5 w-5 rounded-full p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#622FFD]"
              >
                <span
                  className={`block h-full w-full rounded-full transition-all duration-300 ${
                    i === index
                      ? "scale-100 bg-[#622FFD]"
                      : "scale-75 bg-white/20 group-hover:bg-white/40"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Setas mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition active:bg-white/5"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              aria-label="Próxima"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition active:bg-white/5"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

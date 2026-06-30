"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useInView } from "framer-motion";
import { NotebookMockup } from "./notebook-mockup";

/* ── Ease padrão do projeto ──────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1] as const;

/* ── Segmentos da H1 ─────────────────────────────────────────────── */
const H1_SEGMENTS = [
  { text: "Como um único produto digital concentrou ", highlight: false },
  { text: "79% da geração de demanda", highlight: true },
  { text: " da operação comercial.", highlight: false },
];

/* ── Hook: CountUp com easeOutQuart ─────────────────────────────── */
function useCountUp(target: number, duration = 1400, enabled = true) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) { setValue(target); return; }
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 4); // easeOutQuart
      setValue(Math.round(ease * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, enabled]);

  return value;
}

/* ── Componente: uma palavra do H1 com blur + fade reveal ────────── */
function BlurWord({
  word,
  highlight,
  delay,
}: {
  word: string;
  highlight: boolean;
  delay: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.span
      className={highlight ? "text-[#622FFD]" : undefined}
      style={{ display: "inline-block", marginRight: "0.25em" }}
      initial={reduce ? false : { opacity: 0, y: 28, filter: "blur(14px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {word}
    </motion.span>
  );
}

/* ── Componente: métrica animada ─────────────────────────────────── */
function KpiChip({
  value,
  label,
  prefix = "",
  suffix = "",
  delay,
}: {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(value, 1200, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease }}
      className="flex flex-col gap-0.5"
    >
      <span className="font-display text-2xl font-semibold leading-none tracking-tight text-[#0A0A0A] md:text-3xl">
        {prefix}
        {count.toLocaleString("pt-BR")}
        {suffix}
      </span>
      <span className="font-sans text-xs text-[#0A0A0A]/45">{label}</span>
    </motion.div>
  );
}

/* ── Capítulo 01: Hero ───────────────────────────────────────────── */
export function Ch01Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Parallax no notebook ao scroll pelos 120vh
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const notebookY = useTransform(scrollYProgress, [0, 1], ["0px", "-32px"]);
  const notebookScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  // Palavras do H1 com stagger de 0.03s por palavra
  const words: Array<{ word: string; highlight: boolean; delay: number }> = [];
  let wordIndex = 0;
  for (const seg of H1_SEGMENTS) {
    for (const raw of seg.text.split(/(\s+)/)) {
      const word = raw.trim();
      if (word) {
        words.push({ word, highlight: seg.highlight, delay: 0.1 + wordIndex * 0.03 });
        wordIndex++;
      }
    }
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-[120vh] bg-white"
      aria-label="Apresentação do case study"
    >
      {/* Gradiente roxo sutil no topo — eco do portfólio */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(60%_60%_at_70%_0%,rgba(98,47,253,0.07),transparent_72%)]"
      />

      {/* Sticky wrapper */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden pt-16">
        <div className="container grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-gutter">

          {/* ── Coluna esquerda: texto ──────────────────────────── */}
          <div className="flex flex-col gap-7 md:col-span-6 lg:col-span-5">

            {/* Eyebrow */}
            <motion.p
              className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[#622FFD]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              Case Study · Product Design
            </motion.p>

            {/* H1 com blur-reveal por palavra */}
            <h1
              className="font-display text-[32px] font-semibold leading-[1.08] tracking-tight text-[#0A0A0A] sm:text-[40px] md:text-[48px] lg:text-[54px]"
              aria-label="Como um único produto digital concentrou 79% da geração de demanda da operação comercial."
            >
              {words.map(({ word, highlight, delay }, i) => (
                <BlurWord key={i} word={word} highlight={highlight} delay={delay} />
              ))}
            </h1>

            {/* Subtítulo */}
            <motion.p
              className="max-w-md font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.55, ease }}
            >
              Mais do que criar uma Landing Page, o objetivo foi desenhar
              uma experiência capaz de transformar tráfego pago em
              conversas qualificadas.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease }}
            >
              <a
                href="#resultados"
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#0A0A0A] px-6 text-sm font-semibold text-white transition-all duration-250 hover:bg-[#622FFD] hover:shadow-[0_8px_28px_-6px_rgba(98,47,253,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#622FFD] focus-visible:ring-offset-2 md:h-12 md:px-7 md:text-base"
              >
                Ver o processo
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </a>
            </motion.div>

            {/* Métricas rápidas */}
            <motion.div
              className="mt-1 flex items-center gap-8 border-t border-black/[0.06] pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9, ease }}
            >
              <KpiChip value={37} suffix="%" label="Taxa de conversão" delay={1.0} />
              <div className="h-8 w-px bg-black/[0.06]" aria-hidden="true" />
              <KpiChip value={10722} label="Conversas WhatsApp" delay={1.1} />
              <div className="h-8 w-px bg-black/[0.06]" aria-hidden="true" />
              <KpiChip value={79} suffix="%" label="da Operação" delay={1.2} />
            </motion.div>
          </div>

          {/* ── Coluna direita: notebook mockup ─────────────────── */}
          <motion.div
            className="md:col-span-6 md:col-start-7 md:flex md:items-center lg:col-span-6 lg:col-start-7"
            style={reduce ? {} : { y: notebookY, scale: notebookScale }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
          >
            <NotebookMockup />
          </motion.div>

        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5, ease }}
        aria-hidden="true"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/30">
          Scroll
        </span>
        <motion.div
          className="h-8 w-px bg-gradient-to-b from-[#0A0A0A]/20 to-transparent"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

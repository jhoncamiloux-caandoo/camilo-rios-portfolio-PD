"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Eyebrow, MetricGrid, BrowserMockup } from "@/components/case-lp/case-primitives";

const ease = [0.22, 1, 0.36, 1] as const;

const H1_SEGMENTS = [
  { text: "Como um único produto digital concentrou ", highlight: false },
  { text: "79% da demanda", highlight: true },
  { text: " da operação comercial.", highlight: false },
];

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

export function Ch01Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const mockupY = useTransform(scrollYProgress, [0, 1], ["0px", "-32px"]);
  const mockupScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

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
      className="relative h-[120vh] bg-white"
      aria-label="Apresentação do case Acquire"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(60%_60%_at_70%_0%,rgba(98,47,253,0.07),transparent_72%)]"
      />

      <div className="sticky top-0 flex h-screen items-center overflow-hidden pt-16">
        <div className="container grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-gutter">
          <div className="flex flex-col gap-7 md:col-span-6 lg:col-span-5">
            <Eyebrow>01 · Acquire</Eyebrow>

            <h1
              className="font-display text-[32px] font-semibold leading-[1.08] tracking-tight text-[#0A0A0A] sm:text-[40px] md:text-[48px] lg:text-[54px]"
              aria-label="Como um único produto digital concentrou 79% da demanda da operação comercial."
            >
              {words.map(({ word, highlight, delay }, i) => (
                <BlurWord key={i} word={word} highlight={highlight} delay={delay} />
              ))}
            </h1>

            <motion.p
              className="max-w-md font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.55, ease }}
            >
              Mais do que criar uma landing page, o objetivo foi desenhar uma
              experiência capaz de transformar tráfego pago em conversas
              qualificadas.
            </motion.p>

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

            <motion.div
              className="mt-1 border-t border-black/[0.06] pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9, ease }}
            >
              <MetricGrid
                size="sm"
                align="start"
                items={[
                  { value: 37, suffix: "%", label: "Conversão" },
                  { value: 10722, label: "Conversas" },
                  { value: 79, suffix: "%", label: "da demanda" },
                ]}
              />
            </motion.div>
          </div>

          <motion.div
            className="md:col-span-6 md:col-start-7 md:flex md:items-center lg:col-span-6 lg:col-start-7"
            style={reduce ? {} : { y: mockupY, scale: mockupScale }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
          >
            <BrowserMockup
              src="/lp-hero.webp"
              alt="Landing Page Clint: Agente de IA para Vendas no WhatsApp"
              url="clintdigital.com.br/agente-ia"
            />
          </motion.div>
        </div>
      </div>

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

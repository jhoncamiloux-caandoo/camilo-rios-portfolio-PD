"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ImagePlus } from "lucide-react";
import { Reveal } from "@/components/case-lp/case-primitives";
import { useLocale } from "@/lib/i18n/locale-context";
import { MONO, SANS, SV, SV_ASSET, SvEyebrow, SvHeading } from "./sv-part-1";

/* ── AI as a creative tool: 6 nós que acendem em sequência ────────── */
export function SvAI() {
  const { t } = useLocale();
  const c = t.servientrega.ai;
  const reduce = useReducedMotion();
  const n = c.steps.length;

  return (
    <section className="bg-[#0c0e13] py-24 md:py-36" aria-label={c.ariaLabel}>
      <div className="container">
        <SvHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />

        <div className="relative mt-16">
          {/* Linha que se desenha e liga os nós (desktop) */}
          <svg viewBox="0 0 1200 20" preserveAspectRatio="none" className="absolute left-0 top-[27px] hidden h-5 w-full lg:block" aria-hidden="true">
            <line x1="50" y1="10" x2="1150" y2="10" stroke="#ffffff1f" strokeWidth="2" />
            <motion.line
              x1="50" y1="10" x2="1150" y2="10" stroke={SV.greenLight} strokeWidth="2"
              initial={reduce ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 2.4, ease: "easeInOut" }}
            />
          </svg>
          <ol className="relative grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {c.steps.map((s, i) => (
              <li key={s.title} className="flex flex-col items-start gap-3 lg:items-center lg:text-center">
                <motion.span
                  className="flex h-14 w-14 items-center justify-center rounded-full border text-sm"
                  style={{ fontFamily: MONO }}
                  initial={reduce ? false : { backgroundColor: SV.ink, borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}
                  whileInView={{ backgroundColor: i === n - 1 ? SV.green : "#0f2a1a", borderColor: SV.greenLight, color: "#ffffff" }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.4, delay: (2.4 / n) * i }}
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>
                <p className="text-lg font-bold text-white" style={{ fontFamily: SANS }}>{s.title}</p>
                <p className="text-sm leading-relaxed text-white/70">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Exploração → interface */}
        <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1.3fr] md:items-center">
          <Reveal>
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-white/60" style={{ fontFamily: MONO }}>{c.beforeLabel}</p>
            <div className="grid grid-cols-2 gap-3">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex aspect-square flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-white/20 p-2 text-center">
                  <ImagePlus className="h-5 w-5 text-white/60" aria-hidden="true" />
                  <span className="text-[10px] leading-tight text-white/60" style={{ fontFamily: MONO }}>{c.placeholder}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <span className="hidden text-3xl text-[#56C271] md:block" aria-hidden="true">→</span>
          <Reveal delay={0.1}>
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-white/60" style={{ fontFamily: MONO }}>{c.afterLabel}</p>
            <div className="overflow-hidden rounded-2xl border border-[#56C271]/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${SV_ASSET}/j04.webp`} alt={c.finalAlt} loading="lazy" className="block w-full" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Multilíngue: toggle real ES / EN / PT ────────────────────────── */
const LANGS = ["es", "en", "pt"] as const;

export function SvMulti() {
  const { t } = useLocale();
  const c = t.servientrega.multi;
  const [lang, setLang] = useState<(typeof LANGS)[number]>("es");

  return (
    <section className="relative overflow-hidden bg-[#07080b] py-24 md:py-36" aria-label={c.ariaLabel}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(50% 50% at 80% 30%, rgba(223,25,149,0.14), transparent 70%)" }} />
      <div className="container relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col gap-8">
          <SvHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />
          <div role="group" aria-label={c.toggleLabel} className="inline-flex w-fit rounded-full border border-white/15 p-1">
            {LANGS.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`h-10 rounded-full px-5 text-sm font-semibold uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#56C271] ${
                  lang === l ? "bg-white text-[#07080b]" : "text-white/70 hover:text-white"
                }`}
                style={{ fontFamily: MONO }}
              >
                {l}
              </button>
            ))}
          </div>
          <a href="https://berry-boost.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white underline-offset-4 hover:underline">
            {c.link}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <Reveal delay={0.1}>
          <figure>
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-[#DF1995]">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={lang}
                  src={`${SV_ASSET}/berry-${lang}.webp`}
                  alt={c.alt}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  initial={{ opacity: 0, filter: "blur(8px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>
            <figcaption className="mt-3 text-xs text-white/60" style={{ fontFamily: MONO }}>{c.caption}</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* ── O que demonstra + tecnologias + frase final ──────────────────── */
export function SvOutro() {
  const { t } = useLocale();
  const c = t.servientrega.outro;
  const reduce = useReducedMotion();
  const words = c.statement.split(" ");

  return (
    <section className="bg-[#07080b] py-24 md:py-36" aria-label={c.ariaLabel}>
      <div className="container">
        <SvEyebrow>{c.eyebrow}</SvEyebrow>
        <ul className="mt-8 grid grid-cols-2 border-l border-t border-white/10 md:grid-cols-4">
          {c.skills.map((s, i) => (
            <li key={s}>
              <Reveal delay={i * 0.05} className="group flex h-full min-h-[120px] flex-col justify-between border-b border-r border-white/10 p-5 transition-colors hover:bg-[#009A44]/10 md:min-h-[160px]">
                <span className="text-[11px] text-[#56C271]" style={{ fontFamily: MONO }}>{String(i + 1).padStart(2, "0")}</span>
                <span className="text-xl font-bold leading-tight text-white md:text-2xl" style={{ fontFamily: SANS }}>{s}</span>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
          <Reveal>
            <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-white/60" style={{ fontFamily: MONO }}>{c.techLabel}</p>
            <ul className="flex flex-wrap gap-2">
              {c.tech.map((x) => (
                <li key={x} className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white" style={{ fontFamily: MONO }}>{x}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-white/60" style={{ fontFamily: MONO }}>{c.metricsLabel}</p>
            <p className="rounded-xl border border-dashed border-white/20 px-4 py-3 text-xs text-white/70" style={{ fontFamily: MONO }}>{c.metricPlaceholder}</p>
          </Reveal>
        </div>

        {/* Frase final com tipografia cinética */}
        <p className="mx-auto mt-28 max-w-5xl text-center text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-7xl" style={{ fontFamily: SANS }}>
          {words.map((w, i) => (
            <motion.span
              key={i}
              className="mr-[0.25em] inline-block"
              initial={reduce ? false : { opacity: 0.15, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              {w}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  );
}

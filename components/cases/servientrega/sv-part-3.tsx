"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
          {/* Linha do centro do 1º ao centro do 6º nó, na altura do centro dos círculos (h-14 → 28px) */}
          <div aria-hidden="true" className="absolute left-[8.333%] right-[8.333%] top-[27px] hidden h-0.5 bg-white/10 lg:block">
            <motion.div
              className="h-full origin-left bg-[#56C271]"
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 2.4, ease: "easeInOut" }}
            />
          </div>
          <ol className="relative grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {c.steps.map((s, i) => (
              <li key={s.title} className="relative flex flex-col items-start gap-3 lg:items-center lg:text-center">
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

      </div>
    </section>
  );
}

/* ── Multilíngue: o próprio site da Servientrega em PT / EN / ES ─── */
const LANGS = ["pt", "en", "es"] as const;

export function SvMulti() {
  const { t } = useLocale();
  const c = t.servientrega.multi;
  const [lang, setLang] = useState<(typeof LANGS)[number]>("pt");

  return (
    <section className="relative overflow-hidden bg-[#07080b] py-24 md:py-36" aria-label={c.ariaLabel}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(50% 50% at 80% 30%, rgba(0,154,68,0.16), transparent 70%)" }} />
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
          <a href="https://servientrega-camilo.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white underline-offset-4 hover:underline">
            {c.link}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <Reveal delay={0.1}>
          <figure>
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-[#0c0e13]">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={lang}
                  src={`${SV_ASSET}/sv-${lang}.webp`}
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

/* ── Outros projetos imersivos: nichos diferentes, deixados claramente separados ── */
export function SvOthers() {
  const { t } = useLocale();
  const c = t.servientrega.others;

  return (
    <section className="border-t border-white/10 bg-[#0c0e13] py-24 md:py-36" aria-label={c.ariaLabel}>
      <div className="container">
        <SvHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />
        <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {c.items.map((p, i) => (
            <li key={p.name}>
              <Reveal delay={i * 0.08} className="h-full">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#07080b] transition-colors hover:border-[#56C271]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#56C271]"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${SV_ASSET}/${p.img}`} alt={p.alt} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]" />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <span className="w-fit rounded-full border border-white/15 px-2.5 py-1 text-[11px] uppercase tracking-wider text-white/80" style={{ fontFamily: MONO }}>
                      {p.niche}
                    </span>
                    <h3 className="text-2xl font-bold text-white" style={{ fontFamily: SANS }}>{p.name}</h3>
                    <p className="text-sm leading-relaxed text-white/70">{p.body}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-[#56C271]">
                      {c.visit}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── Faixa de CTA para o site completo (aparece no meio e no fim) ── */
export function SvCta() {
  const { t } = useLocale();
  const c = t.servientrega.cta;

  return (
    <section className="bg-[#07080b] py-16 md:py-20" aria-label={c.title}>
      <div className="container">
        <Reveal>
          <a
            href="https://servientrega-camilo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl bg-[#007A38] p-8 transition-colors hover:bg-[#006a31] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#56C271] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080b] md:flex-row md:items-center md:p-12"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${SV_ASSET}/logo-white.svg`} alt="" aria-hidden="true" className="pointer-events-none absolute -right-6 -top-6 h-48 w-auto opacity-10 md:h-64" />
            <div className="relative flex flex-col gap-2">
              <span className="text-3xl font-black tracking-[-0.03em] text-white md:text-5xl" style={{ fontFamily: SANS }}>{c.title}</span>
              <span className="max-w-lg text-base text-white/85">{c.body}</span>
            </div>
            <span className="relative inline-flex h-14 shrink-0 items-center gap-2 rounded-full bg-white px-7 text-base font-semibold text-[#07080b]">
              {c.button}
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

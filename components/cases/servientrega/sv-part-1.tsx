"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Reveal } from "@/components/case-lp/case-primitives";
import { useLocale } from "@/lib/i18n/locale-context";

/* Tokens reais do CSS publicado (base.css). */
export const SV = {
  ink: "#07080b",
  ink2: "#0c0e13",
  paper: "#efe9df",
  green: "#009A44",
  greenLight: "#56C271",
  greenDeep: "#007A38",
  blue: "#0043A6",
  blueLight: "#1e6fe0",
  magenta: "#DF1995",
} as const;
export const SV_ASSET = "/cases/servientrega";
export const MONO = "var(--font-sv-mono), ui-monospace, monospace";
export const SANS = "Satoshi, var(--font-dm-sans), sans-serif";

export function SvEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs uppercase tracking-[0.24em] text-[#56C271]" style={{ fontFamily: MONO }}>
      {children}
    </span>
  );
}

export function SvHeading({ eyebrow, title, description, center = false }: { eyebrow: string; title: string; description?: string; center?: boolean }) {
  return (
    <Reveal className={`flex max-w-3xl flex-col gap-5 ${center ? "mx-auto items-center text-center" : ""}`}>
      <SvEyebrow>{eyebrow}</SvEyebrow>
      <h2 className="text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-white md:text-6xl" style={{ fontFamily: SANS }}>
        {title}
      </h2>
      {description && <p className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg">{description}</p>}
    </Reveal>
  );
}

/* ── Hero ─────────────────────────────────────────────────────────── */
export function SvHero() {
  const { t } = useLocale();
  const c = t.servientrega.hero;
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-[#07080b]" aria-label={c.ariaLabel}>
      {/* Imagem real do site, com parallax leve */}
      <motion.div className="absolute inset-0" style={reduce ? undefined : { scale, y }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${SV_ASSET}/hero.webp`} alt={c.heroAlt} className="h-full w-full object-cover object-[70%_30%]" fetchPriority="high" />
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#07080b] via-[#07080b]/80 to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#07080b] to-transparent" />

      <motion.div className="container relative flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:pb-20" style={reduce ? undefined : { opacity: fade }}>
        <SvEyebrow>{c.eyebrow}</SvEyebrow>
        <h1 className="mt-4 overflow-hidden text-[16vw] font-black leading-[0.86] tracking-[-0.05em] text-white md:text-[9.5vw]" style={{ fontFamily: SANS }}>
          {c.title.split("").map((ch, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={reduce ? false : { y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.05 + i * 0.035, ease: [0.22, 1, 0.36, 1] }}
            >
              {ch}
            </motion.span>
          ))}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-2xl md:leading-snug" style={{ fontFamily: SANS }}>
          {c.subtitle}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {c.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] uppercase tracking-wider text-white/85 backdrop-blur" style={{ fontFamily: MONO }}>
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href="https://servientrega-camilo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-[#007A38] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#006a31] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#56C271] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080b]"
          >
            {c.cta}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70" style={{ fontFamily: MONO }}>
            <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
            {c.scrollHint}
          </span>
        </div>
      </motion.div>
    </section>
  );
}

/* ── Conceito: caixa → jornada → 6 etapas → experiência (SVG animado) ─ */
export function SvConcept() {
  const { t } = useLocale();
  const c = t.servientrega.hero;
  const reduce = useReducedMotion();
  const draw = (delay: number) =>
    reduce
      ? {}
      : { initial: { pathLength: 0 }, whileInView: { pathLength: 1 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.9, delay, ease: "easeInOut" as const } };
  const pop = (delay: number) =>
    reduce
      ? {}
      : { initial: { opacity: 0, scale: 0.6 }, whileInView: { opacity: 1, scale: 1 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <section className="bg-[#07080b] py-20 md:py-28" aria-label={c.concept.join(", ")}>
      <div className="container">
        <svg viewBox="0 0 1000 150" className="mx-auto hidden w-full max-w-5xl md:block" aria-hidden="true">
          {/* 1. caixa */}
          <motion.g {...pop(0)} style={{ transformOrigin: "80px 70px" }}>
            <path d="M50 55 L80 40 L110 55 L110 95 L80 110 L50 95 Z" fill="none" stroke={SV.greenLight} strokeWidth="2" />
            <path d="M50 55 L80 70 L110 55 M80 70 L80 110" fill="none" stroke={SV.greenLight} strokeWidth="2" />
          </motion.g>
          {/* conexão */}
          <motion.path d="M130 75 C 200 20, 260 130, 330 75" fill="none" stroke="#ffffff40" strokeWidth="2" strokeDasharray="4 6" {...draw(0.3)} />
          {/* 2. jornada: rota */}
          <motion.path d="M350 95 C 380 30, 420 120, 450 55" fill="none" stroke={SV.greenLight} strokeWidth="3" strokeLinecap="round" {...draw(0.6)} />
          <motion.circle cx="450" cy="55" r="6" fill={SV.greenLight} {...pop(1.2)} />
          <motion.path d="M470 75 L 540 75" fill="none" stroke="#ffffff40" strokeWidth="2" strokeDasharray="4 6" {...draw(1.3)} />
          {/* 3. seis etapas */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <motion.g key={i} {...pop(1.5 + i * 0.12)}>
              <circle cx={565 + i * 34} cy="75" r="13" fill={i === 5 ? SV.green : "none"} stroke={SV.greenLight} strokeWidth="2" />
              <text x={565 + i * 34} y="79" textAnchor="middle" fontSize="11" fill={i === 5 ? "#fff" : SV.greenLight} fontFamily="monospace">
                {i + 1}
              </text>
            </motion.g>
          ))}
          <motion.path d="M780 75 L 850 75" fill="none" stroke="#ffffff40" strokeWidth="2" strokeDasharray="4 6" {...draw(2.3)} />
          {/* 4. experiência: tela */}
          <motion.g {...pop(2.6)}>
            <rect x="870" y="40" width="100" height="70" rx="8" fill="none" stroke={SV.greenLight} strokeWidth="2" />
            <rect x="882" y="52" width="40" height="6" rx="3" fill={SV.greenLight} />
            <rect x="882" y="64" width="70" height="4" rx="2" fill="#ffffff55" />
            <rect x="882" y="90" width="30" height="10" rx="5" fill={SV.green} />
          </motion.g>
        </svg>
        <ol className="mx-auto mt-2 grid max-w-5xl grid-cols-2 gap-4 text-center md:grid-cols-4">
          {c.concept.map((label, i) => (
            <li key={label}>
              <Reveal delay={i * 0.25}>
                <span className="block text-[11px] text-[#56C271]" style={{ fontFamily: MONO }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 block text-xl font-bold text-white md:text-2xl" style={{ fontFamily: SANS }}>
                  {label}
                </span>
              </Reveal>
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-10 max-w-md text-center text-xs text-white/60" style={{ fontFamily: MONO }}>
          {c.note}
        </p>
      </div>
    </section>
  );
}

/* ── Direção visual + sistema de UI ───────────────────────────────── */
const SWATCHES = [
  { name: "--ink", hex: SV.ink },
  { name: "--ink-2", hex: SV.ink2 },
  { name: "--yellow", hex: SV.green },
  { name: "--green-light", hex: SV.greenLight },
  { name: "--yellow-deep", hex: SV.greenDeep },
  { name: "--blue", hex: SV.blue },
  { name: "--purple", hex: SV.magenta },
  { name: "--paper", hex: SV.paper },
];
const COMPONENT_SHOTS = ["tracking.webp", "services.webp", "faq.webp", "cta.webp"];

export function SvVisual() {
  const { t } = useLocale();
  const c = t.servientrega.visual;

  return (
    <section className="bg-[#0c0e13] py-24 md:py-36" aria-label={c.ariaLabel}>
      <div className="container">
        <SvHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="rounded-3xl border border-white/10 bg-[#07080b] p-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/60" style={{ fontFamily: MONO }}>{c.colorsLabel}</p>
            <ul className="mt-5 grid grid-cols-4 gap-3">
              {SWATCHES.map((s) => (
                <li key={s.name}>
                  <span className="block h-16 rounded-xl ring-1 ring-white/10 md:h-20" style={{ background: s.hex }} aria-hidden="true" />
                  <p className="mt-2 truncate text-[11px] text-white" style={{ fontFamily: MONO }}>{s.name}</p>
                  <p className="text-[11px] text-white/60" style={{ fontFamily: MONO }}>{s.hex}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-[#07080b] p-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/60" style={{ fontFamily: MONO }}>{c.typeLabel}</p>
            <p className="text-7xl font-black leading-none tracking-[-0.04em] text-white" style={{ fontFamily: SANS }}>Aa</p>
            <p className="text-2xl text-[#56C271]" style={{ fontFamily: MONO }}>GEO 4.7110° N</p>
            <ul className="mt-auto flex flex-col gap-1.5 text-sm text-white/70">
              {c.typeRoles.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-14 flex flex-col gap-3">
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/60" style={{ fontFamily: MONO }}>{c.uiLabel}</p>
          <p className="max-w-2xl text-base leading-relaxed text-white/70">{c.uiNote}</p>
        </Reveal>
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {c.components.map((comp, i) => (
            <li key={comp.name}>
              <Reveal delay={i * 0.06}>
                <figure className="group overflow-hidden rounded-2xl border border-white/10 bg-[#07080b]">
                  <div className="aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${SV_ASSET}/${COMPONENT_SHOTS[i]}`} alt={comp.alt} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
                  </div>
                  <figcaption className="flex items-center justify-between border-t border-white/10 px-4 py-3">
                    <span className="text-sm font-semibold text-white" style={{ fontFamily: SANS }}>{comp.name}</span>
                    <span className="text-[11px] text-[#56C271]" style={{ fontFamily: MONO }}>{String(i + 1).padStart(2, "0")}</span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

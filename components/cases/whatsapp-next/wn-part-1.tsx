"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/case-lp/case-primitives";
import { useLocale } from "@/lib/i18n/locale-context";
import { ASSET, WN, WnBrowser, WnEyebrow, WnHeading, WnPhone } from "./wn-primitives";

/* ── Hero ─────────────────────────────────────────────────────────── */
export function WnHero() {
  const { t } = useLocale();
  const c = t.whatsappNext.hero;
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#020403] pb-24 pt-32 md:pb-32 md:pt-40" aria-label={c.ariaLabel}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(60% 50% at 50% 0%, rgba(135,255,11,0.16), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(70% 60% at 50% 20%, #000, transparent)",
        }}
      />

      <div className="container relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <WnEyebrow>{c.eyebrow}</WnEyebrow>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="sr-only"
          >
            {c.title}
          </motion.h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img
            src={`${ASSET}/logo-whatsapp-next.svg`}
            alt=""
            aria-hidden="true"
            initial={reduce ? false : { opacity: 0, y: 24, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-[min(560px,86vw)]"
          />
          <p className="max-w-xl font-sans text-lg leading-relaxed text-[#c8d6cc] md:text-xl">{c.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {c.links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex h-11 items-center gap-2 rounded-full px-5 font-sans text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#87ff0b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020403] ${
                  i === 0 ? "bg-[#87ff0b] text-[#020403] hover:bg-[#a4ff4a]" : "border border-white/15 text-[#f5fff8] hover:border-[#87ff0b]/60"
                }`}
              >
                {l.label}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Ficha rápida */}
        <Reveal delay={0.2} className="mx-auto mt-14 max-w-5xl">
          <dl className="grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 md:grid-cols-[1fr_1fr_2fr_auto]">
            {c.meta.map((m) => (
              <div key={m.label} className="border-b border-white/10 p-5 md:border-b-0 md:border-r">
                <dt className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9bada1]">{m.label}</dt>
                <dd className="mt-1.5 font-sans text-sm leading-snug text-[#f5fff8]">{m.value}</dd>
              </div>
            ))}
            <div className="flex items-center gap-3 bg-[#87ff0b]/[0.08] p-5">
              <span className="font-display text-3xl font-semibold text-[#87ff0b]">{c.cplValue}</span>
              <span className="max-w-[9rem] font-sans text-xs leading-snug text-[#c8d6cc]">{c.cplLabel}</span>
            </div>
          </dl>
        </Reveal>

        {/* Mockups */}
        <Reveal delay={0.3} className="relative mx-auto mt-16 max-w-5xl">
          <WnBrowser src={`${ASSET}/blog-desktop.webp`} alt={c.blogAlt} url="whatsapp-next-seven.vercel.app" />
          <WnPhone
            src={`${ASSET}/lp-mobile.webp`}
            alt={c.lpAlt}
            className="absolute -bottom-10 -right-2 hidden w-[180px] md:block lg:-right-10 lg:w-[220px]"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ── Contexto + desafio + oportunidade ────────────────────────────── */
export function WnContext() {
  const { t } = useLocale();
  const c = t.whatsappNext.context;

  return (
    <section className="bg-white py-24 md:py-36" aria-label={c.ariaLabel}>
      <div className="container">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <Reveal className="flex flex-col gap-5">
            <WnEyebrow dark={false}>{c.eyebrow}</WnEyebrow>
            <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-5xl">{c.title}</h2>
            <p className="font-sans text-base leading-relaxed text-[#0A0A0A]/65 md:text-lg">{c.body}</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {c.chips.map((chip) => (
                <li key={chip} className="rounded-full border border-black/[0.08] bg-[#F8F8F8] px-3 py-1.5 font-sans text-xs font-medium text-[#0A0A0A]">
                  {chip}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="flex flex-col gap-4">
            <Reveal delay={0.1} className="rounded-2xl border border-black/[0.07] bg-[#F8F8F8] p-6 md:p-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#0A0A0A]/65">{c.challengeTitle}</p>
              <p className="mt-3 font-sans text-base leading-relaxed text-[#0A0A0A]">{c.challengeBody}</p>
            </Reveal>
            <Reveal delay={0.18} className="rounded-2xl bg-[#020403] p-6 md:p-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#87ff0b]">{c.opportunityTitle}</p>
              <p className="mt-3 font-sans text-base leading-relaxed text-[#c8d6cc]">{c.opportunityBody}</p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.2} className="mx-auto mt-16 max-w-3xl text-center">
          <p className="font-display text-2xl font-semibold leading-snug tracking-tight text-[#0A0A0A] md:text-3xl">{c.notBlog}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Estratégia: jornada completa + educar/converter ──────────────── */
export function WnStrategy() {
  const { t } = useLocale();
  const c = t.whatsappNext.strategy;
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#020403] py-24 md:py-36" aria-label={c.ariaLabel}>
      <div className="container">
        <WnHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />

        {/* Jornada: trilho vertical com pulso percorrendo as etapas */}
        <div className="relative mx-auto mt-16 max-w-3xl">
          <span aria-hidden="true" className="absolute bottom-6 left-6 top-6 w-px bg-white/10 md:left-1/2" />
          {!reduce && (
            <motion.span
              aria-hidden="true"
              className="absolute left-6 h-16 w-px bg-gradient-to-b from-transparent via-[#87ff0b] to-transparent md:left-1/2"
              initial={{ top: "0%" }}
              animate={{ top: ["0%", "92%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
          )}
          <div role="list" className="relative flex flex-col gap-4">
            {c.steps.map((s, i) => {
              const last = i === c.steps.length - 1;
              const right = i % 2 === 1;
              return (
                <Reveal key={s.title} delay={i * 0.05}>
                  <div role="listitem" className="relative grid grid-cols-[48px_1fr] items-center md:grid-cols-[1fr_48px_1fr]">
                    <div className={`hidden md:block ${right ? "" : "pr-6 text-right"}`}>
                      {!right && <StepCard title={s.title} body={s.body} last={last} />}
                    </div>
                    <span
                      className={`z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full font-display text-sm font-semibold md:col-start-2 ${
                        last ? "bg-[#87ff0b] text-[#020403]" : "border border-white/15 bg-[#07100a] text-[#f5fff8]"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className={`pl-4 md:pl-6 ${right ? "" : "md:hidden"}`}>
                      <StepCard title={s.title} body={s.body} last={last} />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Educar x converter */}
        <Reveal className="mx-auto mt-24 max-w-5xl">
          <h3 className="text-center font-display text-2xl font-semibold text-[#f5fff8] md:text-3xl">{c.balanceTitle}</h3>
          <div className="mt-8 flex items-center justify-between px-1 font-sans text-xs font-semibold uppercase tracking-[0.18em]">
            <span className="text-[#42e884]">← {c.educateLabel}</span>
            <span className="text-[#87ff0b]">{c.convertLabel} →</span>
          </div>
          <div
            aria-hidden="true"
            className="mt-2 h-1.5 rounded-full"
            style={{ background: `linear-gradient(90deg, ${WN.green2}33, ${WN.green})` }}
          />
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {c.balance.map((b, i) => (
              <li
                key={b.role}
                className="rounded-2xl border border-white/10 p-5"
                style={{ background: `rgba(135,255,11,${0.02 + i * 0.03})` }}
              >
                <p className="font-display text-base font-semibold text-[#f5fff8]">{b.role}</p>
                <p className="mt-1.5 font-sans text-sm leading-relaxed text-[#9bada1]">{b.job}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function StepCard({ title, body, last }: { title: string; body: string; last: boolean }) {
  return (
    <div className={`inline-block rounded-xl border px-4 py-3 text-left ${last ? "border-[#87ff0b]/50 bg-[#87ff0b]/[0.08]" : "border-white/10 bg-white/[0.03]"}`}>
      <p className="font-display text-base font-semibold text-[#f5fff8]">{title}</p>
      <p className="font-sans text-sm text-[#9bada1]">{body}</p>
    </div>
  );
}

/* ── Identidade visual ────────────────────────────────────────────── */
const SWATCHES: { name: string; hex: string; dark?: boolean }[] = [
  { name: "cb-bg", hex: WN.bg, dark: true },
  { name: "cb-bg-3", hex: WN.bg2, dark: true },
  { name: "cb-green", hex: WN.green },
  { name: "cb-green-2", hex: WN.green2 },
  { name: "cb-white", hex: WN.white },
  { name: "cb-text", hex: WN.text },
  { name: "cb-muted", hex: WN.muted },
];

export function WnIdentity() {
  const { t } = useLocale();
  const c = t.whatsappNext.identity;

  return (
    <section className="bg-[#07100a] py-24 md:py-36" aria-label={c.ariaLabel}>
      <div className="container">
        <WnHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />

        <Reveal className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
          {c.keywords.map((k) => (
            <span key={k} className="rounded-full border border-[#87ff0b]/30 px-3 py-1 font-sans text-xs font-medium text-[#c8d6cc]">
              {k}
            </span>
          ))}
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Logo */}
          <Reveal className="flex flex-col rounded-3xl border border-white/10 bg-[#020403] p-6 lg:col-span-2">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9bada1]">{c.logoLabel}</p>
            <div className="flex flex-1 items-center justify-center py-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${ASSET}/logo-whatsapp-next.svg`} alt={c.logoAlt} className="w-full max-w-[520px]" />
            </div>
          </Reveal>

          {/* Tipografia */}
          <Reveal delay={0.08} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-[#020403] p-6">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9bada1]">{c.typeLabel}</p>
            <p className="text-7xl font-semibold leading-none text-[#f5fff8]" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
              Aa
            </p>
            <div style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
              <p className="text-2xl font-semibold text-[#f5fff8]">Poppins 600</p>
              <p className="text-lg text-[#c8d6cc]">Poppins 400</p>
            </div>
            <p className="mt-auto font-sans text-sm leading-relaxed text-[#9bada1]">{c.typeNote}</p>
          </Reveal>

          {/* Cores */}
          <Reveal delay={0.12} className="rounded-3xl border border-white/10 bg-[#020403] p-6 lg:col-span-3">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9bada1]">{c.colorsLabel}</p>
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
              {SWATCHES.map((s) => (
                <li key={s.name}>
                  <span className="block h-20 rounded-xl ring-1 ring-white/10" style={{ background: s.hex }} aria-hidden="true" />
                  <p className="mt-2 font-mono text-xs text-[#f5fff8]">--{s.name}</p>
                  <p className="font-mono text-[11px] text-[#9bada1]">{s.hex}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Aplicações */}
        <Reveal delay={0.1} className="mx-auto mt-4 max-w-6xl">
          <p className="sr-only">{c.applicationsLabel}</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { src: `${ASSET}/blog-mobile.webp`, label: c.applications[0] },
              { src: `${ASSET}/lp-mobile.webp`, label: c.applications[1] },
              { src: `${ASSET}/svg-chart.webp`, label: c.applications[2] },
            ].map((a) => (
              <figure key={a.label} className="overflow-hidden rounded-3xl border border-white/10 bg-[#020403]">
                <div className="h-72 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.src} alt="" className="h-full w-full object-cover object-top" loading="lazy" />
                </div>
                <figcaption className="border-t border-white/10 px-5 py-3 font-sans text-sm font-medium text-[#f5fff8]">{a.label}</figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

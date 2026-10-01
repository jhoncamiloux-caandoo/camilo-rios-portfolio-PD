"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EyeOff, User, UserRound, Workflow } from "lucide-react";
import { Reveal } from "@/components/case-lp/case-primitives";
import { useLocale } from "@/lib/i18n/locale-context";
import { ASSET, WnBrowser, WnCtaLink, WnEyebrow, WnFlow, WnHeading } from "./wn-primitives";

/* ── Landing page da live ─────────────────────────────────────────── */
const LP_SHOTS = ["lp-problem.webp", "lp-blocks.webp", "lp-form.webp"];

export function WnLandingPage() {
  const { t } = useLocale();
  const c = t.whatsappNext.lp;

  return (
    <section className="bg-[#07100a] py-24 md:py-36" aria-label={c.ariaLabel}>
      <div className="container">
        <WnHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />

        <Reveal className="mx-auto mt-10 max-w-4xl">
          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {c.facts.map((f) => (
              <div key={f.label} className="rounded-2xl border border-white/10 p-4 text-center">
                <dt className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9bada1]">{f.label}</dt>
                <dd className="mt-1 font-sans text-sm font-medium text-[#f5fff8]">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-5xl">
          <WnBrowser src={`${ASSET}/lp-hero.webp`} alt={c.heroAlt} url="pages.clint.digital/whatsapp-next" />
        </Reveal>
        <Reveal className="mt-10 flex justify-center">
          <WnCtaLink href="https://pages.clint.digital/whatsapp-next" label={c.cta} url={c.ctaUrl} />
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-5xl text-center">
          <p className="mb-5 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9bada1]">{c.flowLabel}</p>
          <WnFlow items={c.flow} />
        </Reveal>

        <ol className="mx-auto mt-16 flex max-w-6xl flex-col gap-16">
          {c.sections.map((s, i) => (
            <li key={s.title} className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
              <Reveal className={i % 2 ? "md:order-2" : ""}>
                <span className="font-mono text-xs text-[#87ff0b]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-display text-2xl font-semibold leading-snug text-[#f5fff8] md:text-3xl">{s.title}</h3>
                <p className="mt-3 font-sans text-base leading-relaxed text-[#9bada1]">{s.body}</p>
              </Reveal>
              <Reveal delay={0.08} className={i % 2 ? "md:order-1" : ""}>
                <div className="max-h-[520px] overflow-hidden rounded-2xl border border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${ASSET}/${LP_SHOTS[i]}`} alt={s.alt} className="block w-full" loading="lazy" />
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ── Criativos e ads ──────────────────────────────────────────────── */
export function WnAds() {
  const { t } = useLocale();
  const c = t.whatsappNext.ads;

  return (
    <section className="bg-white py-24 md:py-36" aria-label={c.ariaLabel}>
      <div className="container">
        <WnHeading eyebrow={c.eyebrow} title={c.title} description={c.description} dark={false} />
        <Reveal className="mx-auto mt-10 max-w-4xl">
          <WnFlow items={c.flow} dark={false} />
        </Reveal>
        {/* Criativos reais em 3 colunas de alturas livres (stories 9:16, feed 1:1 e 4:5) */}
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 items-start gap-4 md:grid-cols-3">
          {[0, 1, 2].map((col) => (
            <div key={col} className={`flex flex-col gap-4 ${col === 2 ? "hidden md:flex" : ""}`}>
              {c.items
                .map((ad, i) => ({ ad, i }))
                .filter(({ i }) => i % 3 === col || (col < 2 && i % 3 === 2 && i % 2 === col))
                .map(({ ad, i }) => (
                  <Reveal key={ad.title} delay={col * 0.06} className={i % 3 === 2 ? (col === 2 ? "" : "md:hidden") : ""}>
                    <figure className="overflow-hidden rounded-2xl border border-black/[0.07] bg-[#020403]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`${ASSET}/ad-${i + 1}.webp`} alt={ad.alt} loading="lazy" className="block w-full" />
                      <figcaption className="flex flex-col gap-0.5 bg-white px-4 py-3">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#2f7a00]">{ad.tag}</span>
                        <span className="font-display text-sm font-semibold text-[#0A0A0A]">{ad.title}</span>
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-4 max-w-xl text-center font-sans text-sm text-[#0A0A0A]/65">{c.note}</p>
      </div>
    </section>
  );
}

/* ── Captação e comunicação ───────────────────────────────────────── */
export function WnLeads() {
  const { t } = useLocale();
  const c = t.whatsappNext.leads;

  return (
    <section className="bg-[#020403] py-24 md:py-36" aria-label={c.ariaLabel}>
      <div className="container">
        <WnHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />
        <Reveal className="mx-auto mt-10 max-w-4xl">
          <WnFlow items={c.flow} />
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
          <Reveal className="rounded-3xl border border-white/10 p-6">
            <UserRound className="h-5 w-5 text-[#87ff0b]" aria-hidden="true" />
            <p className="mt-3 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9bada1]">{c.visibleLabel}</p>
            <ul className="mt-4 flex flex-col gap-2">
              {c.visible.map((f) => (
                <li key={f} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 font-sans text-sm text-[#f5fff8]">
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.06} className="rounded-3xl border border-white/10 p-6">
            <EyeOff className="h-5 w-5 text-[#87ff0b]" aria-hidden="true" />
            <p className="mt-3 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9bada1]">{c.hiddenLabel}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {c.hidden.map((f) => (
                <li key={f} className="rounded-md border border-[#87ff0b]/25 px-2 py-1 font-mono text-xs text-[#87ff0b]">
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.12} className="rounded-3xl border border-[#87ff0b]/30 bg-[#87ff0b]/[0.06] p-6">
            <Workflow className="h-5 w-5 text-[#87ff0b]" aria-hidden="true" />
            <p className="mt-3 font-display text-lg font-semibold text-[#f5fff8]">{c.apiTitle}</p>
            <p className="mt-2 font-sans text-sm leading-relaxed text-[#c8d6cc]">{c.apiBody}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Resultado ────────────────────────────────────────────────────── */
export function WnResults() {
  const { t } = useLocale();
  const c = t.whatsappNext.results;

  return (
    <section className="relative overflow-hidden bg-[#020403] pb-24 md:pb-36" aria-label={c.ariaLabel}>
      <div className="container">
        <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-[#87ff0b]/30 p-8 md:p-14">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(60% 80% at 20% 0%, rgba(135,255,11,0.18), transparent 70%)" }} />
          <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <WnEyebrow>{c.eyebrow}</WnEyebrow>
              <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#f5fff8] md:text-5xl">{c.title}</h2>
              <p className="font-sans text-base leading-relaxed text-[#c8d6cc] md:text-lg">{c.description}</p>
            </div>
            <div className="flex flex-col items-start gap-2 md:items-end md:text-right">
              <span className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-[#9bada1]">{c.cplLabel}</span>
              <span className="font-display text-7xl font-semibold leading-none tracking-tight text-[#87ff0b] md:text-9xl">{c.cplValue}</span>
            </div>
          </div>
        </Reveal>

        {/* Métricas reais: número + contexto + visualização */}
        <ul className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
          {c.metrics.map((m, i) => (
            <li key={m.label}>
              <Reveal delay={i * 0.08} className="flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-[#07100a] p-6 md:p-8">
                <div className="flex items-end justify-between gap-4">
                  <span className="font-display text-6xl font-semibold leading-none tracking-tight text-[#f5fff8] md:text-7xl">{m.value}</span>
                  <span className="text-right font-sans text-xs text-[#9bada1]">{m.context}</span>
                </div>
                <p className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-[#87ff0b]">{m.label}</p>
                {m.kind === "bars" ? <FourDays /> : <OneInFour />}
              </Reveal>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}

/* ── Meu papel ────────────────────────────────────────────────────── */
export function WnRole() {
  const { t } = useLocale();
  const c = t.whatsappNext.role;

  return (
    <section className="bg-white py-24 md:py-36" aria-label={c.ariaLabel}>
      <div className="container">
        <WnHeading eyebrow={c.eyebrow} title={c.title} dark={false} />
        <ul className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {c.groups.map((g, i) => (
            <li key={g.name}>
              <Reveal delay={i * 0.05} className="h-full rounded-2xl border border-black/[0.07] bg-[#F8F8F8] p-5">
                <p className="font-display text-lg font-semibold text-[#0A0A0A]">{g.name}</p>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {g.items.map((it) => (
                    <li key={it} className="font-sans text-sm leading-snug text-[#0A0A0A]/65">
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── Aprendizado ──────────────────────────────────────────────────── */
export function WnLearning() {
  const { t } = useLocale();
  const c = t.whatsappNext.learning;

  return (
    <section className="bg-[#020403] py-24 md:py-40" aria-label={c.ariaLabel}>
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <WnEyebrow>{c.eyebrow}</WnEyebrow>
          <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#f5fff8] md:text-5xl">{c.title}</h2>
          <p className="font-sans text-base text-[#9bada1]">{c.verbsIntro}</p>
          <ul className="flex flex-col gap-1">
            {c.verbs.map((v, i) => (
              <li key={v}>
                <Reveal delay={i * 0.06}>
                  <span className={`font-display text-2xl font-semibold md:text-4xl ${i === c.verbs.length - 1 ? "text-[#87ff0b]" : "text-[#f5fff8]"}`}>{v}</span>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-[#c8d6cc] md:text-lg">{c.closing}</p>
          </Reveal>
          <Reveal delay={0.28} className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {c.equation.map((e, i) => (
              <span key={e} className="flex items-center gap-3 font-display text-lg font-semibold text-[#f5fff8] md:text-xl">
                {i > 0 && <span className="text-[#87ff0b]" aria-hidden="true">+</span>}
                {e}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* 4 dias de campanha: segmentos que se preenchem até o total (sem inventar números por dia). */
function FourDays() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden="true">
      <div className="grid grid-cols-4 gap-1.5">
        {[0, 1, 2, 3].map((d) => (
          <div key={d} className="h-3 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full origin-left rounded-full bg-[#87ff0b]"
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.2 + d * 0.45, ease: "easeOut" }}
            />
          </div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-4 gap-1.5 font-mono text-[11px] text-[#9bada1]">
        {["D1", "D2", "D3", "D4"].map((d) => <span key={d}>{d}</span>)}
      </div>
    </div>
  );
}

/* 25% = 1 em cada 4 visitantes. */
function OneInFour() {
  const reduce = useReducedMotion();
  return (
    <div className="flex gap-3" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <motion.span
          key={i}
          className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${i === 0 ? "border-[#87ff0b] bg-[#87ff0b] text-[#020403]" : "border-white/15 text-white/60"}`}
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: i === 0 ? 0.9 : 0.15 * i }}
        >
          <User className="h-6 w-6" strokeWidth={2} />
        </motion.span>
      ))}
    </div>
  );
}

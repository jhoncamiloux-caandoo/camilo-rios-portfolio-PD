"use client";

import { useReducedMotion } from "framer-motion";
import { Check, ListTree, Table2, MessageSquareMore, ArrowRightLeft } from "lucide-react";
import { Reveal } from "@/components/case-lp/case-primitives";
import { useLocale } from "@/lib/i18n/locale-context";
import { ASSET, WN, WnBrowser, WnCtaLink, WnHeading, WnPhone } from "./wn-primitives";

/* ── Blog ─────────────────────────────────────────────────────────── */
export function WnBlog() {
  const { t } = useLocale();
  const c = t.whatsappNext.blog;

  return (
    <section className="bg-[#020403] py-24 md:py-36" aria-label={c.ariaLabel}>
      <div className="container">
        <WnHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />
        <Reveal delay={0.1} className="mt-8 flex justify-center">
          <WnCtaLink href="https://whatsapp-next-seven.vercel.app/" label={c.cta} url={c.ctaUrl} />
        </Reveal>

        <Reveal className="mx-auto mt-14 grid max-w-6xl grid-cols-1 items-end gap-6 md:grid-cols-[1fr_240px]">
          <WnBrowser src={`${ASSET}/article-desktop.webp`} alt={c.articleAlt} url="whatsapp-next-seven.vercel.app/artigos" />
          <WnPhone src={`${ASSET}/article-mobile.webp`} alt={c.mobileAlt} className="mx-auto w-[220px] md:w-full" />
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-[1fr_2fr]">
          <Reveal className="rounded-3xl border border-white/10 p-6">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9bada1]">{c.categoriesLabel}</p>
            <ul className="mt-4 flex flex-col gap-2">
              {c.categories.map((cat, i) => (
                <li key={cat} className="flex items-center gap-3 font-sans text-base text-[#f5fff8]">
                  <span className="font-mono text-xs text-[#87ff0b]">{String(i + 1).padStart(2, "0")}</span>
                  {cat}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="rounded-3xl border border-white/10 p-6">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9bada1]">{c.articlesLabel}</p>
            <ol className="mt-4 flex flex-col divide-y divide-white/[0.08]">
              {c.articles.map((a, i) => (
                <li key={a} className="flex gap-4 py-3 first:pt-0 last:pb-0">
                  <span className="font-display text-lg font-semibold text-[#87ff0b]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-sans text-sm leading-relaxed text-[#c8d6cc] md:text-base">{a}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Content Design ───────────────────────────────────────────────── */
const TOOL_ICONS = [ListTree, Table2, MessageSquareMore, ArrowRightLeft];

export function WnContent() {
  const { t } = useLocale();
  const c = t.whatsappNext.content;

  return (
    <section className="bg-white py-24 md:py-36" aria-label={c.ariaLabel}>
      <div className="container">
        <WnHeading eyebrow={c.eyebrow} title={c.title} description={c.description} dark={false} />

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Perguntas do leitor */}
          <Reveal className="rounded-3xl border border-black/[0.07] bg-[#F8F8F8] p-6 md:p-8">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0A0A0A]/65">{c.questionsLabel}</p>
            <ol className="mt-6 flex flex-col gap-3">
              {c.questions.map((q, i) => (
                <li key={q} className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#020403] font-display text-sm font-semibold text-[#87ff0b]">
                    {i + 1}
                  </span>
                  <span className="font-display text-lg font-semibold text-[#0A0A0A] md:text-xl">{q}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* Exemplo real: sumário do artigo */}
          <Reveal delay={0.08} className="rounded-3xl bg-[#020403] p-6 md:p-8">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9bada1]">{c.exampleLabel}</p>
            <ul className="mt-6 flex flex-col gap-2">
              {c.exampleHeadings.map((h) => (
                <li key={h} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <span className="mt-0.5 font-mono text-xs text-[#87ff0b]">H2</span>
                  <span className="font-sans text-sm leading-relaxed text-[#f5fff8]">{h}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 font-sans text-sm leading-relaxed text-[#9bada1]">{c.exampleNote}</p>
          </Reveal>
        </div>

        {/* Fórmula */}
        <Reveal className="mx-auto mt-14 max-w-4xl text-center">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0A0A0A]/65">{c.formulaLabel}</p>
          <p className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-display text-2xl font-semibold text-[#0A0A0A] md:text-4xl">
            {c.formula.map((f, i) => (
              <span key={f} className="flex items-center gap-3">
                {i > 0 && <span className="text-[#2f7a00]" aria-hidden="true">+</span>}
                {f}
              </span>
            ))}
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.tools.map((tool, i) => {
            const Icon = TOOL_ICONS[i];
            return (
              <Reveal key={tool.title} delay={i * 0.06} className="rounded-2xl border border-black/[0.07] p-5">
                <Icon className="h-5 w-5 text-[#2f7a00]" strokeWidth={1.8} aria-hidden="true" />
                <p className="mt-3 font-display text-base font-semibold text-[#0A0A0A]">{tool.title}</p>
                <p className="mt-1.5 font-sans text-sm leading-relaxed text-[#0A0A0A]/65">{tool.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Acessibilidade ───────────────────────────────────────────────── */
function luminance(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const v = parseInt(hex.slice(i, i + 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function contrast(a: string, b: string) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}
const TEXT_TOKENS = [WN.white, WN.text, WN.muted, WN.dim, WN.green];

export function WnA11y() {
  const { t } = useLocale();
  const c = t.whatsappNext.a11y;

  return (
    <section className="bg-[#07100a] py-24 md:py-36" aria-label={c.ariaLabel}>
      <div className="container">
        <WnHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />

        <Reveal className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
          {c.pillars.map((p, i) => (
            <span key={p} className="flex items-center gap-2 font-display text-lg font-semibold text-[#f5fff8] md:text-2xl">
              {i > 0 && <span className="text-[#87ff0b]" aria-hidden="true">+</span>}
              {p}
            </span>
          ))}
        </Reveal>

        {/* Contraste calculado a partir dos tokens reais */}
        <Reveal className="mx-auto mt-14 max-w-6xl rounded-3xl border border-white/10 bg-[#020403] p-6 md:p-8">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9bada1]">{c.contrastLabel}</p>
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {TEXT_TOKENS.map((hex, i) => {
              const ratio = contrast(hex, WN.bg);
              return (
                <li key={hex} className="rounded-2xl border border-white/10 p-4">
                  <p className="font-display text-3xl font-semibold" style={{ color: hex }}>Aa</p>
                  <p className="mt-2 font-sans text-sm text-[#f5fff8]">{c.tokenNames[i]}</p>
                  <p className="font-mono text-[11px] text-[#9bada1]">{hex}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-mono text-sm text-[#f5fff8]">{ratio.toFixed(1)}:1</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#87ff0b]/15 px-2 py-0.5 text-[11px] font-semibold text-[#87ff0b]">
                      <Check className="h-3 w-3" aria-hidden="true" />
                      AA
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="mt-4 font-sans text-sm leading-relaxed text-[#9bada1]">{c.contrastNote}</p>
        </Reveal>

        <div className="mx-auto mt-6 max-w-6xl">
          <p className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9bada1]">{c.evidenceLabel}</p>
          <div role="list" className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {c.evidence.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.05}>
                <div role="listitem" className="h-full rounded-2xl border border-white/10 p-5">
                  <p className="font-display text-base font-semibold text-[#f5fff8]">{e.title}</p>
                  <p className="mt-1.5 font-sans text-sm leading-relaxed text-[#9bada1]">{e.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center font-sans text-xs text-[#9bada1]">{c.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}

/* ── Motion + Performance ─────────────────────────────────────────── */

// Recriação leve do princípio usado no blog: SVG + CSS, sem vídeo. Respeita prefers-reduced-motion.
function ConversationToResult() {
  const reduce = useReducedMotion();
  const bars = [38, 52, 70, 88, 112, 140];
  return (
    <svg viewBox="0 0 520 260" className="w-full" role="img" aria-hidden="true">
      <style>{`
        .wn-bubble{opacity:0;transform:translateX(-12px);animation:wnIn 6s ease-out infinite}
        .wn-bar{transform-origin:bottom;transform-box:fill-box;transform:scaleY(0);animation:wnGrow 6s cubic-bezier(.22,1,.36,1) infinite}
        .wn-line{stroke-dasharray:420;stroke-dashoffset:420;animation:wnDraw 6s ease-in-out infinite}
        .wn-coin{opacity:0;animation:wnCoin 6s ease-out infinite}
        .wn-dot{animation:wnDot 1.2s ease-in-out infinite}
        @keyframes wnIn{0%,5%{opacity:0;transform:translateX(-12px)}15%,85%{opacity:1;transform:none}100%{opacity:0}}
        @keyframes wnGrow{0%,25%{transform:scaleY(0)}50%,85%{transform:scaleY(1)}100%{transform:scaleY(0)}}
        @keyframes wnDraw{0%,40%{stroke-dashoffset:420}65%,85%{stroke-dashoffset:0}100%{stroke-dashoffset:420}}
        @keyframes wnCoin{0%,62%{opacity:0}72%,85%{opacity:1}100%{opacity:0}}
        @keyframes wnDot{0%,100%{opacity:.3}50%{opacity:1}}
        ${reduce ? ".wn-bubble,.wn-bar,.wn-line,.wn-coin,.wn-dot{animation:none!important;opacity:1!important;transform:none!important;stroke-dashoffset:0!important}" : ""}
      `}</style>
      <defs>
        <linearGradient id="wnBar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={WN.green} />
          <stop offset="1" stopColor={WN.green} stopOpacity=".15" />
        </linearGradient>
      </defs>
      {[0, 1, 2].map((i) => (
        <g key={i} className="wn-bubble" style={{ animationDelay: `${i * 0.35}s` }}>
          <rect x={20 + (i % 2) * 24} y={40 + i * 62} width="150" height="44" rx="12" fill={i === 2 ? "#87ff0b14" : "#ffffff0a"} stroke={i === 2 ? WN.green : "#ffffff26"} />
          <rect x={36 + (i % 2) * 24} y={54 + i * 62} width="96" height="6" rx="3" fill="#ffffff40" />
          <rect x={36 + (i % 2) * 24} y={66 + i * 62} width="60" height="6" rx="3" fill="#ffffff26" />
        </g>
      ))}
      {[0, 1, 2].map((i) => (
        <circle key={i} className="wn-dot" cx={196 + i * 12} cy="186" r="3" fill={WN.green} style={{ animationDelay: `${i * 0.2}s` }} />
      ))}
      <line x1="250" y1="230" x2="500" y2="230" stroke="#ffffff1f" />
      {bars.map((h, i) => (
        <rect key={i} className="wn-bar" x={262 + i * 40} y={230 - h} width="26" height={h} rx="5" fill={i < 2 ? "#ffffff14" : "url(#wnBar)"} style={{ animationDelay: `${0.2 + i * 0.08}s` }} />
      ))}
      <polyline className="wn-line" points="262,200 302,188 342,168 382,146 422,118 462,84" fill="none" stroke={WN.green} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <g className="wn-coin">
        <circle cx="478" cy="44" r="22" fill="#020403" stroke={WN.green} strokeWidth="3" />
        <text x="478" y="50" textAnchor="middle" fontSize="15" fontWeight="700" fill={WN.green} fontFamily="Poppins, sans-serif">R$</text>
      </g>
    </svg>
  );
}

export function WnMotion() {
  const { t } = useLocale();
  const c = t.whatsappNext.motion;

  return (
    <section className="bg-[#020403] py-24 md:py-36" aria-label={c.ariaLabel}>
      <div className="container">
        <WnHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-4 lg:grid-cols-2">
          <Reveal className="flex flex-col rounded-3xl border border-white/10 bg-[#07100a] p-6">
            <div className="flex flex-1 items-center">
              <ConversationToResult />
            </div>
            <p className="mt-4 font-sans text-xs text-[#9bada1]">{c.demoLabel}</p>
          </Reveal>
          <Reveal delay={0.08} className="flex flex-col rounded-3xl border border-white/10 bg-[#07100a] p-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${ASSET}/svg-chart.webp`} alt={c.realAlt} className="w-full rounded-xl" loading="lazy" />
            <p className="mt-4 font-sans text-xs text-[#9bada1]">{c.realLabel}</p>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2">
          {c.roles.map((r) => (
            <span key={r} className="rounded-full border border-[#87ff0b]/30 bg-[#87ff0b]/[0.06] px-4 py-2 font-sans text-sm text-[#f5fff8]">
              {r}
            </span>
          ))}
        </Reveal>

        <div className="mx-auto mt-16 max-w-6xl">
          <p className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9bada1]">{c.perfLabel}</p>
          <div role="list" className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {c.perf.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div role="listitem" className="h-full rounded-2xl border border-white/10 p-5">
                  <p className="font-display text-base font-semibold text-[#f5fff8]">{p.title}</p>
                  <p className="mt-1.5 font-sans text-sm leading-relaxed text-[#9bada1]">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Eyebrow, BlurTitle, Reveal } from "@/components/case-lp/case-primitives";
import { useLocale } from "@/lib/i18n/locale-context";

type Tier = { id: string; value: string; ref?: string };

const PRIMITIVES: Tier[] = [
  { id: "violet.500", value: "#622FFD" },
  { id: "violet.300", value: "#A48BFF" },
  { id: "neutral.950", value: "#0A0A0A" },
  { id: "neutral.0", value: "#FFFFFF" },
  { id: "neutral.400", value: "#9D9D9D" },
];

const SEMANTIC: Tier[] = [
  { id: "accent.solid", value: "#622FFD", ref: "violet.500" },
  { id: "accent.text", value: "#A48BFF", ref: "violet.300" },
  { id: "bg.canvas", value: "#0A0A0A", ref: "neutral.950" },
  { id: "fg.default", value: "#FFFFFF", ref: "neutral.0" },
  { id: "fg.muted", value: "#9D9D9D", ref: "neutral.400" },
];

const COMPONENT: Tier[] = [
  { id: "button.primary.bg", value: "#622FFD", ref: "accent.solid" },
  { id: "link.fg", value: "#A48BFF", ref: "accent.text" },
  { id: "card.bg", value: "#0A0A0A", ref: "bg.canvas" },
  { id: "button.primary.fg", value: "#FFFFFF", ref: "fg.default" },
  { id: "caption.fg", value: "#9D9D9D", ref: "fg.muted" },
];

// Luminância relativa WCAG 2.x
function luminance(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const v = parseInt(hex.slice(i, i + 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function contrast(a: string, b: string) {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

const PAIRS: { fg: string; bg: string; fgHex: string; bgHex: string }[] = [
  { fg: "accent.solid", bg: "bg.canvas", fgHex: "#622FFD", bgHex: "#0A0A0A" },
  { fg: "accent.text", bg: "bg.canvas", fgHex: "#A48BFF", bgHex: "#0A0A0A" },
  { fg: "fg.muted", bg: "bg.canvas", fgHex: "#9D9D9D", bgHex: "#0A0A0A" },
  { fg: "fg.default", bg: "accent.solid", fgHex: "#FFFFFF", bgHex: "#622FFD" },
];

export function Ch04bTokenLayers() {
  const { t } = useLocale();
  const c = t.scale.tokenLayers;
  const [active, setActive] = useState(1);
  const columns = [PRIMITIVES, SEMANTIC, COMPONENT];

  return (
    <section className="bg-[#0A0A0A] pb-28 md:pb-40" aria-label={c.ariaLabel}>
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow light>{c.eyebrow}</Eyebrow>
          <BlurTitle
            text={c.title}
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl"
          />
          <p className="max-w-xl font-sans text-base leading-relaxed text-white/60">{c.description}</p>
        </div>

        {/* Cadeia primitivo → semântico → componente; passar o mouse destaca a linha inteira */}
        <Reveal className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {columns.map((col, ci) => (
              <div key={c.layers[ci].name} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
                <div className="mb-4 flex items-baseline justify-between">
                  <p className="font-display text-base font-semibold text-white">{c.layers[ci].name}</p>
                  <p className="font-sans text-xs text-white/60">{c.layers[ci].hint}</p>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {col.map((tok, ri) => (
                    <li key={tok.id}>
                      <button
                        type="button"
                        onMouseEnter={() => setActive(ri)}
                        onFocus={() => setActive(ri)}
                        className={`flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-left transition-colors ${
                          active === ri ? "border-primary-light/50 bg-primary/10" : "border-transparent hover:bg-white/[0.04]"
                        }`}
                      >
                        <span className="h-5 w-5 shrink-0 rounded-md ring-1 ring-white/15" style={{ background: tok.value }} />
                        <span className="min-w-0 flex-1">
                          <span className="block truncate font-mono text-xs text-white">{tok.id}</span>
                          <span className="block truncate font-mono text-[11px] text-white/60">
                            {tok.ref ? `→ {${tok.ref}}` : tok.value}
                          </span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Contraste calculado a partir dos próprios tokens */}
        <Reveal delay={0.1} className="mx-auto mt-6 max-w-5xl">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/60">{c.contrastLabel}</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {PAIRS.map((p) => {
                const ratio = contrast(p.fgHex, p.bgHex);
                const pass = ratio >= 4.5;
                return (
                  <div key={p.fg + p.bg} className="rounded-xl p-4" style={{ background: p.bgHex, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)" }}>
                    <p className="font-display text-2xl font-semibold" style={{ color: p.fgHex }}>Aa</p>
                    <p className="mt-2 font-mono text-[11px] text-white/80">
                      {p.fg} / {p.bg}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-mono text-sm text-white">{ratio.toFixed(2)}:1</span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                          pass ? (p.bgHex === "#622FFD" ? "bg-white text-[#0A0A0A]" : "bg-emerald-400/15 text-emerald-300") : "bg-rose-400/15 text-rose-300"
                        }`}
                      >
                        {pass ? c.passLabel : c.failLabel}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 font-sans text-xs leading-relaxed text-white/60">{c.contrastNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { Eyebrow, BlurTitle, Reveal } from "@/components/case-lp/case-primitives";
import { useLocale } from "@/lib/i18n/locale-context";

const SPACING = [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96];

export function Ch04Tokens() {
  const { t } = useLocale();
  const c = t.scale.ch04;

  return (
    <section className="bg-[#0A0A0A] py-28 md:py-40" aria-label={c.ariaLabel}>
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow light>{c.eyebrow}</Eyebrow>
          <BlurTitle
            text={c.title}
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-white/60 md:text-lg">
              {c.description}
            </p>
          </Reveal>
        </div>

        {/* Cores */}
        <div className="mx-auto mt-16 max-w-4xl md:mt-20">
          <Reveal>
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              {c.colorsLabel}
            </p>
          </Reveal>
          <div className="flex flex-wrap gap-4">
            {c.colors.map((col, i) => (
              <Reveal key={col.name} delay={i * 0.04} className="w-[110px]">
                <div
                  className="h-16 rounded-xl border border-white/[0.08]"
                  style={{ background: col.hex }}
                  aria-hidden="true"
                />
                <p className="mt-2 font-sans text-xs font-semibold text-white">{col.name}</p>
                <p className="font-mono text-[11px] text-white/60">{col.hex}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Gradientes */}
        <div className="mx-auto mt-14 max-w-4xl">
          <Reveal>
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              {c.gradientsLabel}
            </p>
          </Reveal>
          <div className="flex flex-wrap gap-5">
            {c.gradients.map((g, i) => (
              <Reveal key={g.name} delay={i * 0.06} className="min-w-[220px] flex-1">
                <div className="h-10 rounded-full" style={{ background: g.css }} aria-hidden="true" />
                <p className="mt-1.5 font-mono text-[11px] text-white/60">{g.name}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Tipografia */}
        <div className="mx-auto mt-14 max-w-4xl">
          <Reveal>
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              {c.typographyLabel}
            </p>
          </Reveal>
          <div className="flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8">
            {c.typeScale.map((tItem, i) => (
              <Reveal key={tItem.label} delay={i * 0.05} className="flex items-baseline justify-between gap-4">
                <span className="font-sans text-white" style={{ fontSize: `min(${tItem.size}, 28px)` }}>
                  {tItem.label}
                </span>
                <span className="shrink-0 font-mono text-xs text-white/60">{tItem.size}</span>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Espaçamento, raio, sombra, grid — a camada sistematizada além da marca */}
        <div className="mx-auto mt-20 max-w-4xl border-t border-white/[0.08] pt-14 md:mt-24">
          <Reveal>
            <p className="max-w-xl font-sans text-sm leading-relaxed text-white/60">
              {c.systemNote}
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Espaçamento */}
            <div>
              <Reveal>
                <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  {c.spacingLabel}
                </p>
              </Reveal>
              <Reveal delay={0.1} className="flex flex-wrap items-end gap-2">
                {SPACING.map((px) => (
                  <div key={px} className="flex flex-col items-center gap-1.5">
                    <div
                      className="rounded-sm bg-[#a600ff]/60"
                      style={{ width: Math.min(px, 40), height: 6 }}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[10px] text-white/60">{px}</span>
                  </div>
                ))}
              </Reveal>
            </div>

            {/* Grid */}
            <div>
              <Reveal>
                <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  {c.gridLabel}
                </p>
              </Reveal>
              <div className="flex flex-col gap-2">
                {c.grid.map((g, i) => (
                  <Reveal
                    key={g.label}
                    delay={0.05 * i}
                    className="flex items-center justify-between gap-4 rounded-lg border border-white/[0.06] px-4 py-2.5"
                  >
                    <span className="font-sans text-xs text-white/60">{g.label}</span>
                    <span className="font-mono text-xs text-white/70">{g.value}</span>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Raios */}
            <div>
              <Reveal>
                <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  {c.radiusLabel}
                </p>
              </Reveal>
              <div className="flex flex-wrap gap-3">
                {c.radius.map((r, i) => (
                  <Reveal key={r.name} delay={0.04 * i} className="flex flex-col items-center gap-1.5">
                    <div
                      className="h-10 w-10 border border-[#a600ff]/40 bg-[#a600ff]/10"
                      style={{ borderRadius: Math.min(r.px, 20) }}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[10px] text-white/60">{r.name}</span>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Sombras */}
            <div>
              <Reveal>
                <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  {c.shadowsLabel}
                </p>
              </Reveal>
              <div className="flex flex-wrap gap-4">
                {c.shadows.map((s, i) => (
                  <Reveal key={s.name} delay={0.05 * i} className="flex flex-col items-center gap-2">
                    <div
                      className="h-10 w-16 rounded-lg bg-[#0d0d12]"
                      style={{ boxShadow: s.css }}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[10px] text-white/60">{s.name}</span>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

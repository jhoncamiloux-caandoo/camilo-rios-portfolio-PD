"use client";

import { Eyebrow, BlurTitle, Reveal } from "@/components/case-lp/case-primitives";
import { useLocale } from "@/lib/i18n/locale-context";

const STATE_COLORS: Record<string, string> = {
  experimental: "#a787ff",
  stable: "#43d97b",
  deprecated: "#d1a6ff",
  removed: "#0A0A0A",
};

export function Ch07Governance() {
  const { t } = useLocale();
  const c = t.scale.ch07;

  return (
    <section className="bg-white py-28 md:py-40" aria-label={c.ariaLabel}>
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <BlurTitle
            text={c.title}
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-5xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
              {c.description}
            </p>
          </Reveal>
        </div>

        {/* Estados de um componente */}
        <div className="mx-auto mt-16 max-w-4xl md:mt-20">
          <Reveal>
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#0A0A0A]/40">
              {c.statesLabel}
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {c.states.map((s, i) => {
              const color = STATE_COLORS[s.label] ?? "#0A0A0A";
              return (
                <Reveal key={s.label} delay={i * 0.06}>
                  <div className="flex items-start gap-3 rounded-xl border border-black/[0.07] bg-[#F8F8F8] p-4">
                    <span
                      className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ background: color, border: color === "#0A0A0A" ? "1px solid rgba(0,0,0,0.2)" : undefined }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-mono text-xs font-semibold text-[#0A0A0A]">{s.label}</p>
                      <p className="mt-1 font-sans text-xs leading-relaxed text-[#0A0A0A]/50">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Gate de mudança */}
        <div className="mx-auto mt-16 max-w-4xl">
          <Reveal>
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#0A0A0A]/40">
              {c.gateLabel}
            </p>
          </Reveal>
          <div className="flex flex-col gap-2">
            {c.gate.map((item, i) => (
              <Reveal
                key={item}
                delay={i * 0.04}
                className="flex items-start gap-3 border-b border-black/[0.06] py-3 last:border-b-0"
              >
                <span className="mt-0.5 font-mono text-[11px] text-[#622FFD]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-sans text-sm text-[#0A0A0A]/65">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Dívida técnica congelada */}
        <div className="mx-auto mt-16 max-w-4xl">
          <Reveal>
            <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#0A0A0A]/40">
              {c.debtLabel}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-5 max-w-xl font-sans text-sm leading-relaxed text-[#0A0A0A]/50">
              {c.debtDescription}
            </p>
          </Reveal>
          <Reveal delay={0.15} className="overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse text-left">
              <thead>
                <tr className="border-b border-black/[0.08]">
                  <th className="py-2 font-sans text-xs font-semibold uppercase tracking-wider text-[#0A0A0A]/40">
                    {c.debtTableHeaders.file}
                  </th>
                  <th className="py-2 font-sans text-xs font-semibold uppercase tracking-wider text-[#0A0A0A]/40">
                    {c.debtTableHeaders.hardcodedColors}
                  </th>
                  <th className="py-2 font-sans text-xs font-semibold uppercase tracking-wider text-[#0A0A0A]/40">
                    {c.debtTableHeaders.exposedPrimitives}
                  </th>
                </tr>
              </thead>
              <tbody>
                {c.debtRows.map((row) => (
                  <tr key={row.file} className="border-b border-black/[0.05]">
                    <td className="py-2.5 font-mono text-xs text-[#0A0A0A]/70">{row.file}</td>
                    <td className="py-2.5 font-mono text-xs text-[#622FFD]">{row.colors}</td>
                    <td className="py-2.5 font-mono text-xs text-[#622FFD]">{row.primitives}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>

        {/* Nota crítica: nem todo experimento vira componente */}
        <Reveal delay={0.2} className="mx-auto mt-16 max-w-2xl rounded-xl bg-[#622FFD]/[0.05] p-6 text-center">
          <p className="font-sans text-sm leading-relaxed text-[#0A0A0A]/65">
            {c.experimentNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

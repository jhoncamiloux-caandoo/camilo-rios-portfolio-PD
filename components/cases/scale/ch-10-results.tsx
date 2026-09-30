"use client";

import { motion } from "framer-motion";
import { Eyebrow, BlurTitle, Reveal, BigNumber } from "@/components/case-lp/case-primitives";
import { useLocale } from "@/lib/i18n/locale-context";

const TIME_COMPARISON_META = [
  { widthPct: 100 },
  { widthPct: 47.6, accent: true },
];

function GlassPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl bg-white/[0.03] p-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          padding: 1,
          background:
            "linear-gradient(160deg, rgba(255,255,255,0.16), rgba(98,47,253,0.4) 45%, rgba(255,255,255,0.05))",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div className="relative flex flex-col items-center gap-3 text-center">{children}</div>
    </div>
  );
}

function TimeComparisonBars({
  rows,
}: {
  rows: { label: string; value: string }[];
}) {
  return (
    <div className="mt-2 flex w-full max-w-[220px] flex-col gap-4">
      {rows.map((row, i) => {
        const meta = TIME_COMPARISON_META[i];
        return (
          <div key={row.label} className="flex flex-col gap-1.5">
            <div className="flex items-baseline justify-between gap-2">
              <span className="font-sans text-xs text-white/60">{row.label}</span>
              <span className="font-display text-sm font-semibold text-white">{row.value}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.08]">
              <motion.div
                className={`h-full rounded-full ${
                  meta.accent
                    ? "bg-gradient-to-r from-[#6670FF] to-[#3841B9]"
                    : "bg-white/20"
                }`}
                initial={{ width: "0%" }}
                whileInView={{ width: `${meta.widthPct}%` }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function Ch10Results() {
  const { t } = useLocale();
  const c = t.scale.ch10;

  return (
    <section className="relative bg-[#0A0A0A] py-28 md:py-40" aria-label={c.ariaLabel}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(50%_50%_at_50%_0%,rgba(98,47,253,0.12),transparent_70%)]"
      />
      <div className="container relative">
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

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 md:mt-20 md:grid-cols-2">
          {/* Velocidade — dado real, com fonte */}
          <Reveal>
            <GlassPanel>
              <BigNumber
                value={47}
                suffix="%"
                duration={1600}
                className="font-display text-6xl font-semibold tracking-tight text-white md:text-7xl"
              />
              <span className="font-sans text-sm text-white/60">
                {c.speedCaption}
              </span>
              <TimeComparisonBars rows={c.timeComparison} />
              <span className="mt-3 max-w-xs font-sans text-xs leading-relaxed text-white/60">
                {c.speedSource}
              </span>
            </GlassPanel>
          </Reveal>

          {/* Tokens de IA — estimativa raciocinada, não dado publicado */}
          <Reveal delay={0.15}>
            <GlassPanel>
              <span className="font-display text-6xl font-semibold tracking-tight text-white md:text-7xl">
                70&#8211;85%
              </span>
              <span className="font-sans text-sm text-white/60">
                {c.aiTokensCaption}
              </span>
              <span className="max-w-xs font-sans text-xs leading-relaxed text-white/60">
                {c.aiTokensSource}
              </span>
            </GlassPanel>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

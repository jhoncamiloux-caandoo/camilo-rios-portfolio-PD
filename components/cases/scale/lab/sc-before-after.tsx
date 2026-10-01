"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { useLocale } from "@/lib/i18n/locale-context";

/* Capítulo 2: fragmentação → sistema. O scroll (ou o toggle) faz as 9 peças
   inconsistentes convergirem para os mesmos tokens. */

const BTN = [
  { bg: "#6d3cff", r: 6, px: 14, py: 8, fs: 13, fw: 500 },
  { bg: "#5225e0", r: 999, px: 22, py: 11, fs: 15, fw: 700 },
  { bg: "#7f5cff", r: 2, px: 18, py: 6, fs: 12, fw: 600 },
];
const CARD = [
  { bg: "#1b1b22", r: 4, p: 12, b: "rgba(255,255,255,0.18)" },
  { bg: "#22182f", r: 22, p: 18, b: "rgba(166,0,255,0.4)" },
  { bg: "#121216", r: 10, p: 10, b: "rgba(255,255,255,0.05)" },
];
const INPUT = [
  { r: 4, h: 34, b: "rgba(255,255,255,0.3)" },
  { r: 14, h: 42, b: "rgba(139,107,255,0.6)" },
  { r: 0, h: 30, b: "rgba(255,255,255,0.12)" },
];
const SYS = { accent: "#622FFD", r: 12, card: "#17171d", border: "rgba(255,255,255,0.1)" };

export function ScBeforeAfter() {
  const { t } = useLocale();
  const c = t.scaleLab.before;
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [after, setAfter] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.3", "end 0.9"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!reduce) setAfter(v > 0.45);
  });
  const tr = { duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section ref={ref} aria-label={c.ariaLabel} className="bg-[#0A0A0A] py-24 text-white md:py-32">
      <div className="container grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-gutter">
        <div className="flex flex-col gap-5 lg:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A48BFF]">{c.eyebrow}</p>
          <h2 className="font-display text-[40px] font-semibold leading-[1.05] tracking-tight md:text-[52px]">{after ? c.afterLabel : c.title}</h2>
          <p className="font-sans text-base leading-relaxed text-white/70">{c.description}</p>
          <div role="group" aria-label={`${c.beforeLabel} / ${c.afterLabel}`} className="mt-2 inline-flex w-fit rounded-full border border-white/15 p-1">
            {[false, true].map((v) => (
              <button
                key={String(v)}
                type="button"
                aria-pressed={after === v}
                onClick={() => setAfter(v)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A48BFF] ${after === v ? "bg-white text-[#0A0A0A]" : "text-white/70 hover:text-white"}`}
              >
                {v ? c.afterLabel : c.beforeLabel}
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:grid-cols-3 md:p-8">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-col gap-4">
                <motion.div
                  className="border"
                  animate={after ? { backgroundColor: SYS.card, borderRadius: SYS.r, padding: 16, borderColor: SYS.border } : { backgroundColor: CARD[i].bg, borderRadius: CARD[i].r, padding: CARD[i].p, borderColor: CARD[i].b }}
                  transition={tr}
                >
                  <motion.p className="font-display font-semibold" animate={{ fontSize: after ? 15 : [14, 17, 13][i] }} transition={tr}>
                    {c.cardTitle}
                  </motion.p>
                  <p className="mt-1 text-xs text-white/60">{c.cardBody}</p>
                </motion.div>
                <motion.div
                  className="flex items-center border px-3 text-xs text-white/60"
                  animate={after ? { borderRadius: SYS.r, height: 40, borderColor: SYS.border } : { borderRadius: INPUT[i].r, height: INPUT[i].h, borderColor: INPUT[i].b }}
                  transition={tr}
                >
                  {c.input}
                </motion.div>
                <motion.span
                  className="w-fit text-white"
                  animate={after ? { backgroundColor: SYS.accent, borderRadius: 999, paddingLeft: 18, paddingRight: 18, paddingTop: 10, paddingBottom: 10, fontSize: 14, fontWeight: 600 } : { backgroundColor: BTN[i].bg, borderRadius: BTN[i].r, paddingLeft: BTN[i].px, paddingRight: BTN[i].px, paddingTop: BTN[i].py, paddingBottom: BTN[i].py, fontSize: BTN[i].fs, fontWeight: BTN[i].fw }}
                  transition={tr}
                >
                  {c.button}
                </motion.span>
              </div>
            ))}
          </div>

          <motion.ol
            aria-label={c.chain.join(" → ")}
            className="mt-6 flex flex-wrap items-center gap-2"
            animate={{ opacity: after ? 1 : 0.25 }}
            transition={tr}
          >
            {c.chain.map((n, i) => (
              <li key={n} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true" className="text-[#A48BFF]">→</span>}
                <span className={`rounded-full px-3 py-1.5 font-mono text-[11px] tracking-[0.1em] ${i === c.chain.length - 1 ? "bg-[#622FFD] text-white" : "border border-white/15 text-white/80"}`}>{n}</span>
              </li>
            ))}
          </motion.ol>
          <p className="mt-4 font-sans text-sm text-white/70">{c.conclusion}</p>
        </div>
      </div>
    </section>
  );
}

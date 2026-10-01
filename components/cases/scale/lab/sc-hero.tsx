"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useLocale } from "@/lib/i18n/locale-context";

/* Capítulo 1: o scroll monta o sistema.
   0-25% átomos soltos se ligam ao TOKEN, 25-85% o token vira peças até o produto. */

const ATOM_Y = [70, 135, 200, 265, 330];
const CHAIN_Y = [80, 160, 240, 320];

function useSeg(p: MotionValue<number>, a: number, b: number) {
  return useTransform(p, [a, b], [0, 1], { clamp: true });
}

function Atom({ p, i, label }: { p: MotionValue<number>; i: number; label: string }) {
  const y = ATOM_Y[i];
  const draw = useSeg(p, 0.05 + i * 0.03, 0.22 + i * 0.03);
  return (
    <g>
      <motion.path d={`M118 ${y} C 190 ${y}, 190 200, 262 200`} fill="none" stroke="#8b6bff" strokeWidth={2} style={{ pathLength: draw }} />
      <circle cx={100} cy={y} r={6} fill="#622FFD" />
      <text x={86} y={y + 4} textAnchor="end" fill="rgba(255,255,255,0.85)" fontSize={13} fontFamily="ui-monospace, Menlo, monospace" letterSpacing="0.08em">
        {label}
      </text>
    </g>
  );
}

function ChainNode({ p, i, label, last }: { p: MotionValue<number>; i: number; label: string; last: boolean }) {
  const a = 0.35 + i * 0.12;
  const op = useSeg(p, a, a + 0.08);
  const draw = useSeg(p, a - 0.06, a + 0.02);
  const y = CHAIN_Y[i];
  const from = i === 0 ? "M338 200 C 380 200, 380 80, 420 80" : `M480 ${CHAIN_Y[i - 1] + 20} L480 ${y - 20}`;
  return (
    <g>
      <motion.path d={from} fill="none" stroke="#8b6bff" strokeWidth={2} style={{ pathLength: draw }} />
      <motion.g style={{ opacity: op }}>
        <rect x={420} y={y - 20} width={120} height={40} rx={last ? 20 : 10} fill={last ? "#622FFD" : "rgba(98,47,253,0.14)"} stroke="rgba(139,107,255,0.55)" />
        <text x={480} y={y + 5} textAnchor="middle" fill="#fff" fontSize={12} fontFamily="ui-monospace, Menlo, monospace" letterSpacing="0.1em">
          {label}
        </text>
      </motion.g>
    </g>
  );
}

export function ScHero() {
  const { t } = useLocale();
  const c = t.scaleLab.hero;
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const still = useTransform(scrollYProgress, () => 1);
  const p = reduce ? still : scrollYProgress;
  const tokenOp = useSeg(p, 0.2, 0.3);
  const msgOp = useSeg(p, 0.82, 0.92);
  const hintOp = useTransform(p, [0, 0.08], [1, 0]);

  return (
    <section ref={ref} aria-label={c.ariaLabel} className={`relative bg-[#0A0A0A] text-white ${reduce ? "" : "h-[260vh]"}`}>
      <div className={`${reduce ? "" : "sticky top-0"} flex min-h-[100svh] items-center overflow-hidden pb-12 pt-24`}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_70%_40%,rgba(98,47,253,0.22),transparent_70%)]" />
        <div className="container relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-gutter">
          <div className="flex flex-col gap-5 lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A48BFF]">{c.eyebrow}</p>
            <h1 className="font-display text-[64px] font-semibold leading-[0.95] tracking-tight md:text-[104px]">{c.title}</h1>
            <p className="max-w-md font-sans text-lg leading-relaxed text-white/80 md:text-xl">{c.subtitle}</p>
            <p className="font-sans text-base font-semibold text-[#A48BFF]">{c.invite}</p>
            <p className="font-sans text-xs text-white/60">{c.team}</p>
          </div>

          <div className="lg:col-span-7">
            <svg viewBox="0 0 600 400" className="h-auto w-full" role="img" aria-label={`${c.atoms.join(", ")} → ${c.token} → ${c.chain.join(" → ")}`}>
              {c.atoms.map((a, i) => (
                <Atom key={a} p={p} i={i} label={a} />
              ))}
              <motion.g style={{ opacity: tokenOp }}>
                <rect x={262} y={176} width={76} height={48} rx={12} fill="#622FFD" />
                <text x={300} y={205} textAnchor="middle" fill="#fff" fontSize={13} fontWeight={600} fontFamily="ui-monospace, Menlo, monospace" letterSpacing="0.1em">
                  {c.token}
                </text>
              </motion.g>
              {c.chain.map((n, i) => (
                <ChainNode key={n} p={p} i={i} label={n} last={i === c.chain.length - 1} />
              ))}
            </svg>
            <motion.p style={{ opacity: msgOp }} className="mt-4 text-center font-display text-2xl font-semibold md:text-3xl">
              {c.message}
            </motion.p>
          </div>
        </div>
        {!reduce && (
          <motion.p style={{ opacity: hintOp }} className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
            ↓ {c.scrollHint}
          </motion.p>
        )}
      </div>
    </section>
  );
}

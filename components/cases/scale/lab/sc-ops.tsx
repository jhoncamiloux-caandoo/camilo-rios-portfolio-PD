"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";

/* Capítulo 9: Figma → Storybook → Produto, governança, Definition of Done e
   dívida técnica. Estados, critérios e números vêm do case original (ch07). */

type Variant = "Primary" | "Secondary" | "Ghost" | "Loading" | "Disabled";

function SbButton({ v, label }: { v: Variant; label: string }) {
  const base = "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold";
  if (v === "Secondary") return <span className={`${base} border border-[#A48BFF] text-[#c9b8ff]`}>{label}</span>;
  if (v === "Ghost") return <span className={`${base} text-[#c9b8ff] underline-offset-4 hover:underline`}>{label}</span>;
  if (v === "Disabled") return <span className={`${base} bg-white/10 text-white/40`}>{label}</span>;
  return (
    <span className={`${base} bg-[#622FFD] text-white`}>
      {v === "Loading" && <Loader2 className="h-4 w-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />}
      {label}
    </span>
  );
}

export function ScOps() {
  const { t } = useLocale();
  const c = t.scaleLab.ops;
  const g = t.scale.ch07;
  const label = t.scaleLab.wow.ui.cta;
  const reduce = useReducedMotion();

  // Fluxo: o scroll acende cada etapa
  const flowRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(reduce ? c.flow.length - 1 : 0);
  const { scrollYProgress } = useScroll({ target: flowRef, offset: ["start 0.85", "end 0.35"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!reduce) setStep(Math.min(c.flow.length - 1, Math.floor(v * c.flow.length)));
  });

  const [variant, setVariant] = useState<Variant>("Primary");
  const [gov, setGov] = useState(1);
  const [done, setDone] = useState<boolean[]>(g.gate.map(() => false));
  const ready = done.every(Boolean);
  const maxDebt = Math.max(...g.debtRows.map((r) => r.primitives + r.colors));

  return (
    <section aria-label={c.ariaLabel} className="bg-[#0A0A0A] py-24 text-white md:py-32">
      <div className="container">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A48BFF]">{c.eyebrow}</p>
          <h2 className="mt-4 font-display text-[40px] font-semibold leading-[1.05] tracking-tight md:text-[52px]">{c.title}</h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-white/70 md:text-lg">{c.description}</p>
        </div>

        {/* Figma → … → Product */}
        <div ref={flowRef} className="mt-12">
          <ol className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {c.flow.map((f, i) => (
              <motion.li
                key={f}
                animate={{ opacity: i <= step ? 1 : 0.3, borderColor: i === step ? "#8b6bff" : "rgba(255,255,255,0.1)" }}
                transition={{ duration: reduce ? 0 : 0.3 }}
                className="flex items-center gap-2 rounded-xl border bg-white/[0.03] px-3 py-3"
              >
                <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-[10px] ${i <= step ? "bg-[#622FFD] text-white" : "bg-white/10 text-white/60"}`}>{i + 1}</span>
                <span className="font-mono text-xs tracking-wide">{f}</span>
              </motion.li>
            ))}
          </ol>
          <p className="mt-3 text-xs text-white/60">{c.flowNote}</p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Storybook mock */}
            <motion.div animate={{ opacity: step >= 3 ? 1 : 0.35 }} className="overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
              <div className="flex items-center gap-2 border-b border-white/[0.08] px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF4785]" aria-hidden="true" />
                <span className="font-mono text-xs text-white/70">{c.storyTitle}</span>
              </div>
              <div className="grid grid-cols-[140px_1fr]">
                <nav aria-label={c.storyTitle} className="border-r border-white/[0.08] p-3 font-mono text-xs">
                  <p className="text-white/80">▾ Button</p>
                  <ul className="mt-1 flex flex-col">
                    {(c.storyTree as Variant[]).map((v, i) => (
                      <li key={v}>
                        <button type="button" aria-current={variant === v || undefined} onClick={() => setVariant(v)} className={`w-full rounded px-2 py-1 text-left transition ${variant === v ? "bg-[#622FFD]/25 text-white" : "text-white/60 hover:text-white"}`}>
                          {i === c.storyTree.length - 1 ? "└" : "├"} {v}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="flex min-h-[160px] items-center justify-center p-6" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "14px 14px" }}>
                  <SbButton v={variant} label={label} />
                </div>
              </div>
            </motion.div>
            {/* No produto */}
            <motion.div animate={{ opacity: step >= 5 ? 1 : 0.35 }} className="rounded-2xl border border-white/10 bg-[#0d0d12] p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">{c.productTitle}</p>
              <div className="mt-4 flex items-center justify-between rounded-xl border border-white/[0.07] bg-[#17171d] p-4">
                <div>
                  <p className="font-display text-base font-semibold">{t.scaleLab.wow.ui.pipeline}</p>
                  <p className="text-xs text-white/60">{t.scaleLab.wow.ui.running}</p>
                </div>
                <SbButton v={variant} label={label} />
              </div>
              <p className="mt-4 text-sm text-white/70">{c.sourceMessage}</p>
            </motion.div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Governança */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-display text-lg font-semibold">{c.govTitle}</h3>
            <ol className="mt-4 flex flex-col">
              {g.states.map((s, i) => (
                <li key={s.label} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <button type="button" aria-pressed={gov === i} onClick={() => setGov(i)} aria-label={s.label} className={`h-4 w-4 shrink-0 rounded-full border-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A48BFF] ${gov === i ? "border-[#A48BFF] bg-[#622FFD]" : "border-white/30"}`} />
                    {i < g.states.length - 1 && <span className="w-px flex-1 bg-white/15" aria-hidden="true" />}
                  </div>
                  <button type="button" onClick={() => setGov(i)} className="-mt-1 pb-4 text-left">
                    <span className={`font-mono text-sm ${gov === i ? "text-white" : "text-white/60"}`}>{s.label}</span>
                    {gov === i && (
                      <motion.span initial={reduce ? false : { opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="mt-1 block text-xs leading-relaxed text-white/70">
                        {s.desc}
                        <span className="mt-1 block text-[#A48BFF]">
                          {c.govNext}: {i < g.states.length - 1 ? g.states[i + 1].label : c.govLast}
                        </span>
                      </motion.span>
                    )}
                  </button>
                </li>
              ))}
            </ol>
          </div>

          {/* Definition of Done */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-display text-lg font-semibold">{c.dodTitle}</h3>
            <p className="text-xs text-white/60">{c.dodHint}</p>
            <ul className="mt-4 flex flex-col gap-2">
              {g.gate.map((item, i) => (
                <li key={item}>
                  <label className="flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed text-white/80">
                    <input type="checkbox" checked={done[i]} onChange={() => setDone((d) => d.map((x, k) => (k === i ? !x : x)))} className="mt-0.5 h-4 w-4 shrink-0 accent-[#8b6bff]" />
                    <span className={done[i] ? "text-white" : ""}>{item}</span>
                  </label>
                </li>
              ))}
            </ul>
            <motion.div animate={{ opacity: ready ? 1 : 0.25 }} className={`mt-4 flex items-center gap-2 rounded-xl px-3 py-2.5 font-mono text-xs font-semibold ${ready ? "bg-emerald-400/15 text-emerald-300" : "bg-white/5 text-white/60"}`} aria-live="polite">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <motion.path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" initial={false} animate={{ pathLength: ready ? 1 : 0 }} transition={{ duration: reduce ? 0 : 0.5 }} />
              </svg>
              {c.ready}
            </motion.div>
          </div>

          {/* Dívida técnica, números reais do case */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-display text-lg font-semibold">{c.debtTitle}</h3>
            <div className="mt-2 flex gap-4 text-[11px] text-white/60">
              <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-[#8b6bff]" aria-hidden="true" />{c.debtColors}</span>
              <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-white/30" aria-hidden="true" />{c.debtPrimitives}</span>
            </div>
            <ul className="mt-4 flex flex-col gap-4">
              {g.debtRows.map((r) => (
                <li key={r.file}>
                  <p className="flex justify-between font-mono text-xs"><span>{r.file}</span><span className="text-white/60">{r.colors} · {r.primitives}</span></p>
                  <div className="mt-1.5 flex h-3 overflow-hidden rounded-full bg-white/[0.05]">
                    <motion.span className="h-full bg-[#8b6bff]" initial={{ width: reduce ? `${(r.colors / maxDebt) * 100}%` : 0 }} whileInView={{ width: `${(r.colors / maxDebt) * 100}%` }} viewport={{ once: true }} transition={{ duration: reduce ? 0 : 0.8 }} />
                    <motion.span className="h-full bg-white/30" initial={{ width: reduce ? `${(r.primitives / maxDebt) * 100}%` : 0 }} whileInView={{ width: `${(r.primitives / maxDebt) * 100}%` }} viewport={{ once: true }} transition={{ duration: reduce ? 0 : 0.8, delay: reduce ? 0 : 0.3 }} />
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-white/70">{g.debtDescription}</p>
          </div>
        </div>
        <p className="mt-10 text-center font-display text-2xl font-semibold md:text-3xl">{c.debtMessage}</p>
      </div>
    </section>
  );
}

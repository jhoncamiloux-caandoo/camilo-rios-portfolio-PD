"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp, Check, Lightbulb, Loader2, RotateCcw, Sparkles } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";

/* Capítulo 7: componentes de IA em uso. Um pedido vira, passo a passo,
   um agente montado com as peças do sistema. Depois, com e sem contexto. */

type Phase = "idle" | "thinking" | "processing" | "complete";

function StatusChip({ phase }: { phase: Phase }) {
  const { t } = useLocale();
  const s = t.scaleLab.ai.status;
  if (phase === "idle") return null;
  const done = phase === "complete";
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[11px] ${done ? "bg-emerald-400/15 text-emerald-300" : "bg-[#622FFD]/20 text-[#c9b8ff]"}`}>
      {done ? <Check className="h-3 w-3" aria-hidden="true" /> : <Loader2 className="h-3 w-3 animate-spin motion-reduce:animate-none" aria-hidden="true" />}
      {done ? s.complete : phase === "thinking" ? s.thinking : s.processing}
    </span>
  );
}

function ContextCompare() {
  const { t } = useLocale();
  const c = t.scaleLab.ai;
  const reduce = useReducedMotion();
  const view = { once: true, margin: "-80px" } as const;
  // Sem sistema: cada bloco com uma decisão diferente
  const messy = [
    { bg: "#e95bff", r: 2, w: "70%" },
    { bg: "#43d97b", r: 18, w: "45%" },
    { bg: "#3739ad", r: 6, w: "85%" },
  ];
  return (
    <div className="mt-16">
      <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">{c.contextTitle}</h3>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">{c.contextBody}</p>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {[false, true].map((sys) => (
          <div key={String(sys)} className={`rounded-2xl border p-5 ${sys ? "border-[#8b6bff]/50 bg-[#622FFD]/[0.06]" : "border-white/10 bg-white/[0.02]"}`}>
            <p className={`font-mono text-[11px] uppercase tracking-[0.14em] ${sys ? "text-[#c9b8ff]" : "text-white/60"}`}>{sys ? c.with : c.without}</p>
            <p className="mt-2 rounded-lg bg-black/40 px-3 py-2 font-mono text-xs text-white/80">› {sys ? c.withPrompt : c.withoutPrompt}</p>
            <div className="mt-4 flex flex-col gap-2.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={reduce ? false : { opacity: 0, x: sys ? 0 : (i - 1) * 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={view}
                  transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : i * 0.12 }}
                  className="flex items-center gap-3 border border-white/10 bg-[#17171d] p-3"
                  style={{ borderRadius: sys ? 12 : messy[i].r }}
                >
                  <span className="h-6 w-6 shrink-0" style={{ background: sys ? "#622FFD" : messy[i].bg, borderRadius: sys ? 999 : messy[i].r }} />
                  <span className="h-2 rounded-full bg-white/25" style={{ width: sys ? "60%" : messy[i].w }} />
                  <span className="ml-auto px-3 py-1 text-[10px] font-semibold text-white" style={{ background: sys ? "#622FFD" : messy[i].bg, borderRadius: sys ? 999 : messy[(i + 1) % 3].r }}>
                    CTA
                  </span>
                </motion.div>
              ))}
            </div>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {(sys ? c.withTags : c.withoutTags).map((tag) => (
                <li key={tag} className={`rounded-full px-2.5 py-1 text-[11px] ${sys ? "bg-emerald-400/15 text-emerald-300" : "bg-rose-400/15 text-rose-300"}`}>
                  {sys ? "✓" : "✗"} {tag}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-white/70">{c.conclusion}</p>
    </div>
  );
}

export function ScAi() {
  const { t } = useLocale();
  const c = t.scaleLab.ai;
  const reduce = useReducedMotion();
  const [text, setText] = useState(c.promptDefault);
  const [phase, setPhase] = useState<Phase>("idle");
  const [shown, setShown] = useState(0);
  const timers = useRef<number[]>([]);

  useEffect(() => setText(c.promptDefault), [c.promptDefault]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const run = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setShown(0);
    if (reduce) {
      setShown(c.steps.length);
      setPhase("complete");
      return;
    }
    setPhase("thinking");
    const at = (ms: number, fn: () => void) => timers.current.push(window.setTimeout(fn, ms));
    at(900, () => setPhase("processing"));
    c.steps.forEach((_, i) => at(1100 + i * 650, () => setShown(i + 1)));
    at(1100 + c.steps.length * 650, () => setPhase("complete"));
  };
  const reset = () => {
    timers.current.forEach(clearTimeout);
    setPhase("idle");
    setShown(0);
  };

  return (
    <section aria-label={c.ariaLabel} className="bg-[#0A0A0A] py-24 text-white md:py-32">
      <div className="container">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A48BFF]">{c.eyebrow}</p>
          <h2 className="mt-4 font-display text-[40px] font-semibold leading-[1.05] tracking-tight md:text-[52px]">{c.title}</h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-white/70 md:text-lg">{c.description}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* AI Prompt */}
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 lg:col-span-5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                run();
              }}
            >
              <label htmlFor="ai-prompt" className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
                {c.promptLabel}
              </label>
              <div className="mt-2 flex items-center gap-2 rounded-2xl border border-[#8b6bff]/50 bg-[#0d0d12] p-2 pl-4 focus-within:ring-2 focus-within:ring-[#8b6bff]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" decoding="async" src="/cases/clint/ai-logo.webp" alt="" className="h-6 w-6 shrink-0 rounded-full" />
                <input id="ai-prompt" value={text} onChange={(e) => setText(e.target.value)} placeholder={c.promptPh} className="min-w-0 flex-1 bg-transparent py-2 text-sm text-white placeholder:text-white/40 focus:outline-none" />
                <button type="submit" aria-label={c.run} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#622FFD] text-white transition hover:bg-[#7447FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                  <ArrowUp className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </form>
            <div className="flex items-center justify-between">
              <StatusChip phase={phase} />
              {phase !== "idle" && (
                <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white">
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  {c.reset}
                </button>
              )}
            </div>

            {/* AI Response: atributos do agente aparecendo em ordem */}
            <ol className="flex flex-col gap-2" aria-live="polite">
              {c.steps.map((st, i) => (
                <li key={st.label}>
                  <motion.div
                    animate={{ opacity: i < shown ? 1 : 0.2 }}
                    transition={{ duration: reduce ? 0 : 0.3 }}
                    className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-[#17171d] px-4 py-3"
                  >
                    <span className="text-xs text-white/60">{st.label}</span>
                    <span className="text-sm font-semibold text-white">{i < shown ? st.value : "…"}</span>
                  </motion.div>
                </li>
              ))}
            </ol>
            <p className="font-mono text-[11px] text-white/60">
              {c.kitLabel}: {c.kit.join(" · ")}
            </p>
          </div>

          {/* Resultado: o agente montado com componentes do sistema */}
          <div className="flex min-h-[360px] items-center justify-center rounded-2xl border border-white/10 p-6 lg:col-span-7" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "16px 16px" }}>
            <AnimatePresence mode="wait">
              {phase === "complete" ? (
                <motion.div key="agent" initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }} className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0d0d12] p-5 shadow-[0_32px_80px_-24px_rgba(98,47,253,0.5)]">
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img loading="lazy" decoding="async" src="/cases/clint/ai-logo.webp" alt="" className="h-11 w-11 rounded-full" />
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-lg font-semibold">{c.agentName}</p>
                      <p className="text-xs text-white/60">{c.agentRole}</p>
                    </div>
                    <StatusChip phase="complete" />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.steps.slice(0, 3).map((st) => (
                      <span key={st.label} className="rounded-full bg-[#622FFD]/20 px-2.5 py-1 text-[11px] text-[#c9b8ff]">{st.value}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-start gap-2 rounded-xl border border-[#8b6bff]/30 bg-[#622FFD]/10 p-3">
                    <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-[#A48BFF]" aria-hidden="true" />
                    <p className="text-xs leading-relaxed text-white/80">{c.insight}</p>
                  </div>
                  <span className="mt-4 inline-flex rounded-full bg-[#622FFD] px-5 py-2.5 text-sm font-semibold">{c.action}</span>
                </motion.div>
              ) : (
                <motion.p key="wait" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 font-mono text-xs text-white/60">
                  {phase === "idle" ? (
                    <>
                      <Sparkles className="h-4 w-4 text-[#A48BFF]" aria-hidden="true" /> {c.run} →
                    </>
                  ) : (
                    <StatusChip phase={phase} />
                  )}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        <ContextCompare />
      </div>
    </section>
  );
}

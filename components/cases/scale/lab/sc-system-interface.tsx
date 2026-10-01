"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { RotateCcw, Play, Sparkles, LayoutGrid, MessageCircle, Bot, BarChart3 } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";
import { contrast } from "./tokens";

/* Capítulo 4, o momento "wow": uma interface da Clint montada só com CSS
   variables. Cada controle muda um token e a interface inteira herda. */

// Opções de accent: tokens do case (violet.500) e cores reais da paleta Clint
const ACCENTS = ["#622FFD", "#8800ff", "#a600ff", "#2d1c7f", "#3739ad", "#43d97b"];
const RATIOS = [1.125, 1.2, 1.25, 1.333];
const DURATIONS = [100, 200, 300, 400];
const DEFAULTS = { accent: ACCENTS[0], radius: 12, space: 4, ratio: 1.2, duration: 300, easing: "out" as Easing };
type Easing = "ease" | "out" | "spring";
const NAV_ICONS = [LayoutGrid, MessageCircle, Bot, BarChart3];

function easingOf(e: Easing, d: number) {
  if (e === "spring") return { type: "spring" as const, stiffness: 260, damping: 18 };
  return { duration: d / 1000, ease: e === "ease" ? ("easeInOut" as const) : ([0.22, 1, 0.36, 1] as const) };
}

export function ScSystemInterface() {
  const { t } = useLocale();
  const c = t.scaleLab.wow;
  const u = c.ui;
  const reduce = useReducedMotion();
  const [s, setS] = useState(DEFAULTS);
  const [run, setRun] = useState(0);
  const set = <K extends keyof typeof DEFAULTS>(k: K, v: (typeof DEFAULTS)[K]) => setS((x) => ({ ...x, [k]: v }));
  const ratio = contrast("#FFFFFF", s.accent);
  const fs = (step: number) => `${(14 * s.ratio ** step).toFixed(1)}px`;
  const tr = reduce ? { duration: 0 } : easingOf(s.easing, s.duration);

  const vars = {
    "--accent": s.accent,
    "--accent-soft": `color-mix(in srgb, ${s.accent} 18%, transparent)`,
    "--accent-text": `color-mix(in srgb, ${s.accent} 55%, white)`,
    "--r": `${s.radius}px`,
    "--s": `${s.space}px`,
  } as React.CSSProperties;

  const control = "flex flex-col gap-2";
  const label = "font-mono text-[11px] uppercase tracking-[0.14em] text-white/60";

  return (
    <section aria-label={c.ariaLabel} className="bg-[#0A0A0A] py-24 text-white md:py-32">
      <div className="container">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A48BFF]">{c.eyebrow}</p>
          <h2 className="mt-4 font-display text-[40px] font-semibold leading-[1.05] tracking-tight md:text-[56px]">{c.title}</h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-white/70 md:text-lg">{c.description}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Controles */}
          <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 lg:col-span-4">
            <div className={control}>
              <span className={label}>{c.controls.accent}</span>
              <div className="flex flex-wrap gap-2" role="group" aria-label={c.controls.accent}>
                {ACCENTS.map((hex) => (
                  <button
                    key={hex}
                    type="button"
                    aria-label={hex}
                    aria-pressed={s.accent === hex}
                    onClick={() => set("accent", hex)}
                    className={`h-9 w-9 rounded-full border-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${s.accent === hex ? "scale-110 border-white" : "border-transparent"}`}
                    style={{ background: hex }}
                  />
                ))}
              </div>
              <p className="font-mono text-xs text-white/70">
                {c.contrastLabel}: <strong className="text-white">{ratio.toFixed(2)}:1</strong>{" "}
                <span className={ratio >= 4.5 ? "text-emerald-300" : "text-rose-300"}>{ratio >= 4.5 ? "AA ✓" : "AA ✗"}</span>
              </p>
            </div>

            <label className={control}>
              <span className={label}>
                {c.controls.radius} · {s.radius}px
              </span>
              <input type="range" min={0} max={24} step={2} value={s.radius} onChange={(e) => set("radius", Number(e.target.value))} className="accent-[#8b6bff]" />
            </label>

            <label className={control}>
              <span className={label}>
                {c.controls.space} · space.4 = {s.space * 4}px
              </span>
              <input type="range" min={3} max={6} step={1} value={s.space} onChange={(e) => set("space", Number(e.target.value))} className="accent-[#8b6bff]" />
            </label>

            <div className={control}>
              <span className={label}>{c.controls.type}</span>
              <div className="flex flex-wrap gap-1.5" role="group" aria-label={c.controls.type}>
                {RATIOS.map((r) => (
                  <button key={r} type="button" aria-pressed={s.ratio === r} onClick={() => set("ratio", r)} className={`rounded-full px-3 py-1.5 font-mono text-xs transition ${s.ratio === r ? "bg-white text-[#0A0A0A]" : "border border-white/15 text-white/75 hover:text-white"}`}>
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div className={control}>
              <span className={label}>
                {c.controls.motion} · {s.easing === "spring" ? "spring" : `${s.duration}ms`}
              </span>
              <div className="flex flex-wrap gap-1.5" role="group" aria-label={c.controls.motion}>
                {DURATIONS.map((d) => (
                  <button key={d} type="button" disabled={s.easing === "spring"} aria-pressed={s.duration === d} onClick={() => set("duration", d)} className={`rounded-full px-3 py-1.5 font-mono text-xs transition disabled:opacity-40 ${s.duration === d ? "bg-white text-[#0A0A0A]" : "border border-white/15 text-white/75 hover:text-white"}`}>
                    {d}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5" role="group" aria-label={c.controls.easing}>
                {(["ease", "out", "spring"] as Easing[]).map((e) => (
                  <button key={e} type="button" aria-pressed={s.easing === e} onClick={() => set("easing", e)} className={`rounded-full px-3 py-1.5 font-mono text-xs transition ${s.easing === e ? "bg-white text-[#0A0A0A]" : "border border-white/15 text-white/75 hover:text-white"}`}>
                    {c.easings[e]}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 border-t border-white/10 pt-5">
              <button type="button" onClick={() => setRun((r) => r + 1)} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0A0A0A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A48BFF]">
                <Play className="h-4 w-4" aria-hidden="true" />
                {c.controls.replay}
              </button>
              <button type="button" onClick={() => { setS(DEFAULTS); setRun((r) => r + 1); }} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A48BFF]">
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                {c.controls.reset}
              </button>
            </div>
          </div>

          {/* Interface Clint construída com os tokens */}
          <div style={vars} className="overflow-hidden border border-white/10 bg-[#0d0d12] lg:col-span-8" aria-live="off">
            <div className="flex min-h-[460px]" style={{ borderRadius: "var(--r)" }}>
              <nav aria-label="Clint" className="hidden w-44 shrink-0 flex-col border-r border-white/[0.07] sm:flex" style={{ padding: "calc(var(--s) * 4)", gap: "calc(var(--s) * 1.5)" }}>
                {u.nav.map((n, i) => {
                  const Icon = NAV_ICONS[i];
                  return (
                    <span key={n} className="flex items-center gap-2 font-sans" style={{ fontSize: fs(0), padding: "calc(var(--s) * 2) calc(var(--s) * 2.5)", borderRadius: "var(--r)", background: i === 0 ? "var(--accent-soft)" : "transparent", color: i === 0 ? "var(--accent-text)" : "rgba(255,255,255,0.7)" }}>
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {n}
                    </span>
                  );
                })}
              </nav>

              <div className="flex min-w-0 flex-1 flex-col" style={{ padding: "calc(var(--s) * 4)", gap: "calc(var(--s) * 4)" }}>
                <div className="flex flex-wrap items-center justify-between" style={{ gap: "calc(var(--s) * 2)" }}>
                  <p className="font-display font-semibold" style={{ fontSize: fs(2) }}>{u.pipeline}</p>
                  <div className="flex items-center" style={{ gap: "calc(var(--s) * 2)" }}>
                    <span className="inline-flex items-center gap-1.5 font-semibold" style={{ fontSize: fs(-1), padding: "calc(var(--s)) calc(var(--s) * 2.5)", borderRadius: 999, background: "var(--accent-soft)", color: "var(--accent-text)" }}>
                      <Sparkles className="h-3 w-3" aria-hidden="true" />
                      {u.agent}
                    </span>
                    <motion.button key={`cta-${run}`} type="button" initial={{ scale: reduce ? 1 : 0.92 }} animate={{ scale: 1 }} transition={tr} className="inline-flex items-center gap-2 font-semibold text-white" style={{ fontSize: fs(0), padding: "calc(var(--s) * 2) calc(var(--s) * 4)", borderRadius: "var(--r)", background: "var(--accent)" }}>
                      {u.cta}
                      <span className="rounded-full bg-white/20 px-1.5 text-[10px] uppercase">{u.badge}</span>
                    </motion.button>
                  </div>
                </div>

                <div className="grid flex-1 grid-cols-1 md:grid-cols-5" style={{ gap: "calc(var(--s) * 4)" }}>
                  <div className="grid grid-cols-3 md:col-span-3" style={{ gap: "calc(var(--s) * 2)" }}>
                    {u.cols.map((col, ci) => (
                      <div key={col} className="bg-white/[0.03]" style={{ padding: "calc(var(--s) * 2)", borderRadius: "var(--r)" }}>
                        <p className="truncate font-semibold text-white/80" style={{ fontSize: fs(-1), marginBottom: "calc(var(--s) * 2)" }}>{col}</p>
                        {ci < u.leads.length && (
                          <motion.div
                            key={`lead-${ci}-${run}`}
                            initial={reduce ? false : { opacity: 0, y: s.space * 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...tr, delay: reduce ? 0 : ci * 0.08 }}
                            className="border bg-[#17171d]"
                            style={{ padding: "calc(var(--s) * 2)", borderRadius: "var(--r)", borderColor: ci === 0 ? "var(--accent)" : "rgba(255,255,255,0.07)" }}
                          >
                            <p className="truncate font-semibold" style={{ fontSize: fs(-1) }}>{u.leads[ci].name}</p>
                            <p className="truncate text-white/60" style={{ fontSize: fs(-2) }}>{u.leads[ci].co}</p>
                            <p className="truncate underline underline-offset-2" style={{ fontSize: fs(-2), color: "var(--accent-text)", marginTop: "calc(var(--s))" }}>{u.link}</p>
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col border border-white/[0.07] bg-white/[0.02] md:col-span-2" style={{ borderRadius: "var(--r)", padding: "calc(var(--s) * 3)", gap: "calc(var(--s) * 2.5)" }}>
                    <div className="flex items-center gap-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/cases/clint/ai-logo.png" alt="" className="h-7 w-7 rounded-full" />
                      <div>
                        <p className="font-semibold leading-tight" style={{ fontSize: fs(-1) }}>{u.agentName} · {u.online}</p>
                        <p className="text-emerald-300" style={{ fontSize: fs(-2) }}>{u.running}</p>
                      </div>
                    </div>
                    <motion.p key={`in-${run}`} initial={reduce ? false : { opacity: 0, x: -s.space * 3 }} animate={{ opacity: 1, x: 0 }} transition={tr} className="w-fit max-w-[90%] bg-white/[0.07]" style={{ fontSize: fs(-1), padding: "calc(var(--s) * 2) calc(var(--s) * 3)", borderRadius: "var(--r)" }}>
                      {u.chatIn}
                    </motion.p>
                    <motion.p key={`out-${run}`} initial={reduce ? false : { opacity: 0, x: s.space * 3 }} animate={{ opacity: 1, x: 0 }} transition={{ ...tr, delay: reduce ? 0 : 0.25 }} className="ml-auto w-fit max-w-[90%] text-white" style={{ fontSize: fs(-1), padding: "calc(var(--s) * 2) calc(var(--s) * 3)", borderRadius: "var(--r)", background: "var(--accent)" }}>
                      {u.chatOut}
                    </motion.p>
                    <div className="mt-auto flex items-center justify-between" style={{ gap: "calc(var(--s) * 2)" }}>
                      <span className="text-white/70" style={{ fontSize: fs(-2) }}>{u.toggle}</span>
                      <span className="relative inline-block h-5 w-9 rounded-full" style={{ background: "var(--accent)" }} aria-hidden="true">
                        <span className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white" />
                      </span>
                    </div>
                    <div className="border border-white/10 text-white/50" style={{ fontSize: fs(-2), padding: "calc(var(--s) * 2) calc(var(--s) * 3)", borderRadius: "var(--r)" }}>
                      {u.inputPh}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center font-display text-2xl font-semibold md:text-3xl">{c.conclusion}</p>
      </div>
    </section>
  );
}

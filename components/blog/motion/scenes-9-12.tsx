"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion, useTransform, type MotionValue } from "framer-motion";
import { Bleed, Eyebrow, M, Sticky, useRange, useStep } from "./primitives";

/* Dispara uma sequência de passos quando entra na tela (sem scroll preso). */
function useTimeline(times: number[]) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-25% 0px" });
  const reduce = useReducedMotion();
  const [k, setK] = useState(reduce ? times.length : 0);
  useEffect(() => {
    if (!inView || reduce) return;
    const ts = times.map((t, i) => setTimeout(() => setK(i + 1), t));
    return () => ts.forEach(clearTimeout);
  }, [inView, reduce]); // eslint-disable-line react-hooks/exhaustive-deps
  return { ref, k };
}

/* ─────────────── POST 9 · Pesquisa com usuários: o que a transcrição não ouve ─────────────── */

/* Onda de voz da entrevista: a transcrição é uma linha; a presença revela pausas e hesitações. */
export function ScenePresence({ intro, ai, saves, diff, notice, cues, context, a, b }: { intro: string; ai: string; saves: string; diff: string; notice: string; cues: string[]; context: string; a: string; b: string }) {
  return (
    <Bleed>
      <Sticky height={300}>{(p) => <PresenceInner p={p} {...{ intro, ai, saves, diff, notice, cues, context, a, b }} />}</Sticky>
    </Bleed>
  );
}
function PresenceInner({ p, intro, ai, saves, diff, notice, cues, context, a, b }: { p: MotionValue<number>; intro: string; ai: string; saves: string; diff: string; notice: string; cues: string[]; context: string; a: string; b: string }) {
  const c = useStep(useRange(p, 0.3, 0.85), cues.length + 1);
  const bars = 72;
  const CUE_AT = [14, 27, 40, 52, 63];
  return (
    <div className="container max-w-6xl">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-lg text-white md:text-2xl">{intro}</p>
          <p className="mt-2 text-sm text-white/65">{ai} {saves}</p>
        </div>
        <div>
          <p className="text-sm text-white/80 md:text-base">{diff}</p>
          <p className="mt-2 text-sm text-white/65">{notice}</p>
        </div>
      </div>
      <div className="relative mt-10" aria-hidden="true">
        <svg viewBox={`0 0 ${bars * 10} 120`} className="h-[110px] w-full md:h-[150px]" preserveAspectRatio="none">
          {Array.from({ length: bars }, (_, i) => {
            const pause = CUE_AT.some((x) => Math.abs(x - i) <= 1);
            const h = pause ? 4 : Math.round(18 + Math.abs(Math.sin(i * 1.7) * 60) + ((i * 13) % 20));
            return <motion.rect key={i} x={i * 10 + 2} width={6} rx={3} initial={false} animate={{ y: 60 - h / 2, height: h, fill: pause && c > 0 ? M.amb : "rgba(255,255,255,0.55)" }} />;
          })}
        </svg>
        {cues.map((cue, i) => (
          <motion.span key={cue} initial={false} animate={{ opacity: i < c ? 1 : 0, y: i < c ? 0 : 8 }}
            className={`absolute whitespace-nowrap rounded-full bg-[#fbbf24] px-2.5 py-1 text-[10px] font-semibold text-[#0d0d12] md:text-xs ${i % 2 ? "top-full mt-2" : "-top-8"}`}
            style={{ left: `${(CUE_AT[i] / bars) * 100}%`, transform: "translateX(-50%)" }}>{cue}</motion.span>
        ))}
      </div>
      <ul className="sr-only">{cues.map((x) => <li key={x}>{x}</li>)}</ul>
      <div className="mt-14 grid gap-2 md:grid-cols-[1fr_auto]">
        <p className="text-sm text-white/70">{context}</p>
        <p className="font-display text-2xl font-semibold md:text-right md:text-3xl">{a} <span className="text-[#A3E635]">{b}</span></p>
      </div>
    </div>
  );
}

/* Usuário sintético × usuário real: o contorno pontilhado não sente o que a pessoa sente. */
export function SceneSynthetic({ lead, prompt, notes, lacks, a, b }: { lead: string; prompt: string; notes: string[]; lacks: string[]; a: string; b: string }) {
  const { ref, k } = useTimeline([400, 1200, 2000, 2800, 3600]);
  return (
    <Bleed tone="light">
      <div ref={ref} className="container grid max-w-6xl grid-cols-1 items-center gap-10 py-20 md:grid-cols-[1.1fr_1fr] md:py-28">
        <div>
          <p className="text-[15px] text-[#0A0A0A]/60">{lead}</p>
          <p className="mt-2 font-display text-2xl font-semibold leading-snug md:text-3xl">{prompt}</p>
          <ul className="mt-6 flex flex-col gap-1.5">
            {notes.map((n, i) => <motion.li key={n} initial={false} animate={{ opacity: i < k ? 1 : 0.4 }} className={`text-[15px] ${i === 2 ? "font-semibold text-[#622FFD]" : "text-[#0A0A0A]/80"}`}>{n}</motion.li>)}
          </ul>
          <ul className="mt-4 flex flex-col gap-1">
            {lacks.map((n) => <li key={n} className="text-[15px] text-[#0A0A0A]/70">{n}</li>)}
          </ul>
          <p className="mt-6 text-[15px] text-[#0A0A0A]/75">{a}</p>
          <p className="font-display text-xl font-semibold text-[#0A0A0A] md:text-2xl">{b}</p>
        </div>
        <div className="grid grid-cols-2 gap-6" aria-hidden="true">
          {[0, 1].map((side) => (
            <div key={side} className="flex flex-col items-center gap-3">
              <svg viewBox="0 0 100 140" className="w-full max-w-[150px]">
                <circle cx="50" cy="38" r="24" fill={side ? M.p : "none"} stroke={side ? "none" : "#0A0A0A"} strokeWidth="2" strokeDasharray={side ? undefined : "4 5"} />
                <path d="M14 136 C14 96 30 76 50 76 C70 76 86 96 86 136 Z" fill={side ? M.p : "none"} stroke={side ? "none" : "#0A0A0A"} strokeWidth="2" strokeDasharray={side ? undefined : "4 5"} />
                {side === 1 && <motion.path d="M30 110 L42 110 L47 98 L54 122 L60 104 L64 110 L72 110" fill="none" stroke={M.g} strokeWidth="3" strokeLinejoin="round" animate={k >= 3 ? { pathLength: [0, 1] } : { pathLength: 0 }} transition={{ duration: 1.2, repeat: Infinity }} />}
              </svg>
              <span className={`font-mono text-[11px] uppercase tracking-[0.16em] ${side ? "text-[#622FFD]" : "text-[#0A0A0A]/60"}`}>{side ? "pessoa real" : "simulação"}</span>
            </div>
          ))}
        </div>
      </div>
    </Bleed>
  );
}

/* Fim: as perguntas que continuam humanas, reveladas por uma máscara circular. */
export function SceneCircleQuestions({ lead, lead2, questions, last, lastLead }: { lead: string; lead2: string; questions: string[]; last: string; lastLead: string }) {
  return (
    <Bleed tone="violet">
      <Sticky height={260}>{(p) => <CircleInner p={p} {...{ lead, lead2, questions, last, lastLead }} />}</Sticky>
    </Bleed>
  );
}
function CircleInner({ p, lead, lead2, questions, last, lastLead }: { p: MotionValue<number>; lead: string; lead2: string; questions: string[]; last: string; lastLead: string }) {
  const r = useTransform(p, [0.55, 0.9], [0, 150]);
  const clip = useTransform(r, (v) => `circle(${v}% at 50% 50%)`);
  const q = useStep(useRange(p, 0.05, 0.5), questions.length + 1);
  return (
    <div className="relative w-full">
      <div className="container max-w-5xl">
        <p className="text-lg text-white/85">{lead} {lead2}</p>
        <ol className="mt-4 flex flex-col gap-1">
          {questions.map((t, i) => <motion.li key={t} initial={false} animate={{ opacity: i < q ? 1 : 0.35 }} className="font-display text-3xl font-semibold leading-tight md:text-6xl">{t}</motion.li>)}
        </ol>
        <p className="mt-6 text-white/80">{lastLead}</p>
      </div>
      <motion.div style={{ clipPath: clip }} className="absolute inset-0 flex items-center bg-[#A3E635]">
        <div className="container max-w-5xl">
          <p className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.02em] text-[#0d0d12] md:text-7xl">{last}</p>
        </div>
      </motion.div>
      <p className="sr-only">{last}</p>
    </div>
  );
}

/* ─────────────── POST 10 · Contexto: a ambiguidade em órbita ─────────────── */

/* "Quero cancelar.": as interpretações orbitam a frase até o contexto escolher uma. */
export function SceneOrbit({ lead, msg, options, a, b, c }: { lead: string; msg: string; options: string[]; a: string; b: string; c: string }) {
  return (
    <Bleed>
      <Sticky height={280}>{(p) => <OrbitInner p={p} {...{ lead, msg, options, a, b, c }} />}</Sticky>
    </Bleed>
  );
}
function OrbitInner({ p, lead, msg, options, a, b, c }: { p: MotionValue<number>; lead: string; msg: string; options: string[]; a: string; b: string; c: string }) {
  const spin = useTransform(p, [0, 1], [0, 220]);
  const s = useStep(p, 4);
  const pick = 1; // a assinatura, escolhida pelo contexto
  const CTX = ["plano ativo: Pro", "último acesso: hoje", "fidelidade: não"];
  const [R, setR] = useState(150);
  useEffect(() => { const on = () => setR(window.innerWidth < 768 ? 112 : 150); on(); window.addEventListener("resize", on); return () => window.removeEventListener("resize", on); }, []);
  return (
    <div className="container grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1.1fr]">
      <div>
        <p className="text-sm text-white/60">{lead}</p>
        <p className="mt-2 font-display text-4xl font-semibold md:text-6xl">{msg}</p>
        <p className="mt-6 text-white/80">{a}</p>
        <motion.ul initial={false} animate={{ opacity: s >= 2 ? 1 : 0 }} className="mt-4 flex flex-wrap gap-2" aria-hidden="true">
          {CTX.map((x) => <li key={x} className="rounded-full border border-[#A3E635]/50 px-3 py-1 font-mono text-[11px] text-[#A3E635]">{x}</li>)}
        </motion.ul>
        <p className="mt-6 text-white/80">{b} <span className="text-[#A3E635]">{c}</span></p>
      </div>
      <div className="relative mx-auto aspect-square w-full max-w-[420px]">
        <motion.div style={{ rotate: spin }} className="absolute inset-0">
          {options.map((o, i) => {
            const ang = (i / options.length) * Math.PI * 2;
            const chosen = s >= 3 && i === pick;
            return (
              <motion.span key={o} className="absolute left-1/2 top-1/2 whitespace-nowrap rounded-full border px-2.5 py-1 text-xs md:px-3 md:py-1.5 md:text-sm"
                style={{ x: `calc(${Math.round(Math.cos(ang) * R)}px - 50%)`, y: `calc(${Math.round(Math.sin(ang) * R)}px - 50%)` }}
                initial={false}
                animate={{ opacity: s >= 3 && !chosen ? 0.35 : 1, borderColor: chosen ? M.g : "rgba(255,255,255,0.25)", backgroundColor: chosen ? "rgba(163,230,53,0.15)" : "rgba(255,255,255,0.03)" }}>
                <motion.span style={{ rotate: useTransform(spin, (v) => -v) }} className="inline-block text-white">{o}</motion.span>
              </motion.span>
            );
          })}
        </motion.div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#622FFD] px-4 py-3 font-semibold text-white shadow-[0_0_60px_rgba(98,47,253,0.6)]">“{msg.replace(/[“”]/g, "")}”</div>
      </div>
    </div>
  );
}

/* De telas em fila para um grafo de relações. */
export function SceneGraphMorph({ a, chainA, b, chainB }: { a: string; chainA: string; b: string; chainB: string }) {
  return (
    <Bleed tone="light">
      <Sticky height={240}>{(p) => <GraphInner p={p} {...{ a, chainA, b, chainB }} />}</Sticky>
    </Bleed>
  );
}
function GraphInner({ p, a, chainA, b, chainB }: { p: MotionValue<number>; a: string; chainA: string; b: string; chainB: string }) {
  const s = useStep(p, 3);
  const A = chainA.split(" → ");
  const B = chainB.split(" → ");
  const POS = [[8, 50], [28, 22], [28, 78], [52, 50], [74, 24], [92, 60]];
  return (
    <div className="container grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="text-sm text-[#0A0A0A]/60">{a}</p>
        <p className={`mt-1 font-display text-2xl font-semibold transition-opacity md:text-3xl ${s >= 1 ? "opacity-30" : ""}`}>{chainA}</p>
        <p className="mt-6 text-sm text-[#0A0A0A]/60">{b}</p>
        <p className="mt-1 font-display text-2xl font-semibold text-[#622FFD] md:text-3xl">{chainB}</p>
      </div>
      <div className="relative aspect-[16/10] w-full" aria-hidden="true">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          {[[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5], [4, 5], [1, 4]].map(([x, y], i) => (
            <motion.line key={i} x1={POS[x][0]} y1={POS[x][1]} x2={POS[y][0]} y2={POS[y][1]} stroke={M.p} strokeWidth="0.5" vectorEffect="non-scaling-stroke" initial={false} animate={{ pathLength: s >= 2 ? 1 : 0, opacity: s >= 2 ? 0.8 : 0 }} transition={{ duration: 0.6, delay: i * 0.06 }} />
          ))}
        </svg>
        {B.map((n, i) => {
          const linear = [10 + i * 16, 50];
          const pos = s >= 1 ? POS[i] : linear;
          return (
            <motion.div key={n} className="absolute -translate-x-1/2 -translate-y-1/2" initial={false} animate={{ left: `${pos[0]}%`, top: `${pos[1]}%` }} transition={{ duration: 0.8, ease: M.ease, delay: i * 0.05 }}>
              <span className={`block whitespace-nowrap rounded-xl px-3 py-2 text-xs font-semibold md:text-sm ${s >= 1 ? "bg-[#0A0A0A] text-white" : "border border-black/15 bg-white text-[#0A0A0A]"}`}>{s >= 1 ? n : A[Math.min(i, A.length - 1)]}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* O agente transparente: um painel que responde às cinco perguntas, uma por vez. */
export function SceneAgentPanel({ lead, questions, after }: { lead: string; questions: string[]; after: string }) {
  return (
    <Bleed>
      <Sticky height={260}>{(p) => <PanelInner p={p} {...{ lead, questions, after }} />}</Sticky>
    </Bleed>
  );
}
function PanelInner({ p, lead, questions, after }: { p: MotionValue<number>; lead: string; questions: string[]; after: string }) {
  const s = useStep(p, questions.length);
  const ANS = [
    "Você quer cancelar a assinatura Pro.",
    "Verificando cobranças pendentes e a data de renovação.",
    "Não há fidelidade, então o cancelamento pode ser imediato.",
    "Você pode manter o acesso até o fim do ciclo.",
  ];
  return (
    <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
      <div>
        <p className="text-white/80">{lead}</p>
        <ol className="mt-4 flex flex-col gap-1.5">
          {questions.map((q, i) => <motion.li key={q} initial={false} animate={{ opacity: i === s ? 1 : i < s ? 0.55 : 0.35, x: i === s ? 6 : 0 }} className="font-display text-2xl font-semibold md:text-3xl">{q}</motion.li>)}
        </ol>
        <p className="mt-6 text-sm text-white/70">{after}</p>
      </div>
      <div className="rounded-[22px] border border-white/10 bg-[#111118] p-5" aria-hidden="true">
        <div className="flex items-center gap-3"><img src="/cases/clint/ai-logo.webp" alt="" className="h-8 w-8 rounded-full" /><p className="font-semibold text-white">Agente</p><span className="ml-auto rounded-full bg-[#A3E635]/15 px-2 py-0.5 font-mono text-[10px] text-[#A3E635]">ATIVO</span></div>
        <div className="mt-4 min-h-[150px] space-y-2">
          {ANS.slice(0, Math.min(s + 1, 4)).map((t, i) => (
            <motion.p key={t} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className={`rounded-xl px-3 py-2 text-sm ${i === Math.min(s, 3) ? "bg-[#622FFD]/25 text-white" : "bg-white/[0.04] text-white/60"}`}>{t}</motion.p>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <span className="rounded-full bg-[#622FFD] px-4 py-2 text-xs font-semibold text-white">Confirmar</span>
          <motion.span initial={false} animate={{ scale: s >= 4 ? [1, 1.08, 1] : 1, borderColor: s >= 4 ? M.red : "rgba(255,255,255,0.2)" }} transition={{ duration: 0.6 }} className="rounded-full border px-4 py-2 text-xs font-semibold text-white">Interromper</motion.span>
        </div>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">exemplo fictício</p>
      </div>
    </div>
  );
}

/* ─────────────── POST 11 · Quando a IA age: um agente que o leitor controla ─────────────── */

/* Responder × agir: a mesma IA, duas consequências diferentes. */
export function SceneRespondVsAct({ lead1, q1, a1, lead2, q2, a2, steps, maybe, here, why, word }: Record<string, string | string[]>) {
  const { ref, k } = useTimeline([500, 1500, 2300, 3000, 3700, 4400, 5200, 6000]);
  const st = steps as string[];
  return (
    <Bleed>
      <div ref={ref} className="container max-w-6xl py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm text-white/60">{lead1}</p>
            <p className="mt-2 inline-block rounded-2xl rounded-br-sm bg-white/[0.08] px-4 py-3 text-white">{q1}</p>
            <motion.p initial={false} animate={{ opacity: k >= 1 ? 1 : 0 }} className="mt-3 text-white/70">{a1}</motion.p>
          </div>
          <div>
            <p className="text-sm text-white/60">{lead2}</p>
            <p className="mt-2 inline-block rounded-2xl rounded-br-sm bg-[#622FFD] px-4 py-3 font-semibold text-white">{q2}</p>
            <motion.p initial={false} animate={{ opacity: k >= 2 ? 1 : 0 }} className="mt-3 text-white/80">{a2}</motion.p>
            <ol className="mt-3 flex flex-col gap-1.5">
              {st.map((s, i) => (
                <motion.li key={s} initial={false} animate={{ opacity: k >= i + 3 ? 1 : 0.4 }} className="flex items-center gap-2 text-[15px] text-white">
                  <span className={`flex h-4 w-4 items-center justify-center rounded-full text-[10px] ${k >= i + 3 ? "bg-[#A3E635] text-[#0d0d12]" : "bg-white/15"}`}>✓</span>{s}
                </motion.li>
              ))}
            </ol>
            <p className="mt-2 text-sm text-[#fbbf24]">{maybe}</p>
          </div>
        </div>
        <p className="mt-14 text-white/70">{here} {why}</p>
        <p className="mt-2 font-display text-[64px] font-semibold leading-none tracking-[-0.03em] md:text-[150px]">
          <span className={`transition-all duration-700 ${k >= 8 ? "text-[#A3E635]" : "text-transparent [-webkit-text-stroke:2px_#A3E635]"}`}>{word}</span>
        </p>
      </div>
    </Bleed>
  );
}

/* Feed do agente: as mensagens chegam e o leitor decide no final (interativo). */
export function SceneAgentFeed({ lead, msgs, a, b }: { lead: string; msgs: string[]; a: string; b: string }) {
  const { ref, k } = useTimeline([400, 1400, 2400, 3400, 4400]);
  const [choice, setChoice] = useState<"" | "ok" | "no">("");
  return (
    <Bleed tone="light">
      <div ref={ref} className="container grid max-w-6xl grid-cols-1 items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-[15px] text-[#0A0A0A]/70">{lead}</p>
          <p className="mt-6 text-[15px] text-[#0A0A0A]/75">{a}</p>
          <p className="mt-2 font-display text-2xl font-semibold leading-snug md:text-3xl">{b}</p>
        </div>
        <div className="rounded-[22px] border border-black/[0.08] bg-white p-5 shadow-[0_30px_80px_-30px_rgba(98,47,253,0.35)]">
          <div className="flex items-center gap-3 border-b border-black/[0.06] pb-3"><img src="/cases/clint/ai-logo.webp" alt="" className="h-7 w-7 rounded-full" /><span className="font-semibold">Agente</span></div>
          <ul className="mt-3 space-y-2">
            {msgs.map((m, i) => (
              <motion.li key={m} initial={false} animate={{ opacity: i < k ? 1 : 0, y: i < k ? 0 : 8 }} transition={{ duration: 0.4 }} className={`rounded-2xl px-3.5 py-2.5 text-[15px] ${i === msgs.length - 1 ? "bg-[#622FFD]/10 font-semibold text-[#0A0A0A]" : "bg-[#F4F4F6] text-[#0A0A0A]/85"}`}>{m}</motion.li>
            ))}
            {k > 0 && k < msgs.length && <li className="flex gap-1 px-3 py-2" aria-hidden="true">{[0, 1, 2].map((d) => <motion.span key={d} className="h-1.5 w-1.5 rounded-full bg-[#0A0A0A]/40" animate={{ y: [0, -3, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: d * 0.12 }} />)}</li>}
          </ul>
          <AnimatePresence mode="wait">
            {k >= msgs.length && !choice && (
              <motion.div key="btns" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-4 flex gap-2">
                <button type="button" onClick={() => setChoice("ok")} className="rounded-full bg-[#622FFD] px-4 py-2 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#622FFD] focus-visible:ring-offset-2">Confirmar</button>
                <button type="button" onClick={() => setChoice("no")} className="rounded-full border border-black/15 px-4 py-2 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#622FFD]">Cancelar</button>
                <span className="self-center text-xs text-[#0A0A0A]/50">experimente</span>
              </motion.div>
            )}
            {choice && (
              <motion.p key="res" role="status" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className={`mt-4 rounded-xl px-3.5 py-2.5 text-sm font-semibold ${choice === "ok" ? "bg-[#A3E635]/30 text-[#0A0A0A]" : "bg-[#F4F4F6] text-[#0A0A0A]/80"}`}>
                {choice === "ok" ? "✓ Feito. Você aprovou antes de o agente agir." : "Nada foi executado. O controle continua com você."}
                <button type="button" onClick={() => setChoice("")} className="ml-2 underline">refazer</button>
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Bleed>
  );
}

/* Barra de recuperação: o leitor clica e vê cada controle agindo sobre o histórico. */
export function SceneRecoveryBar({ lead, actions, a, b }: { lead: string; actions: string[]; a: string; b: string }) {
  const [log, setLog] = useState(["Reserva feita: sábado, 20h", "Convite enviado a 4 pessoas", "Lembrete criado"]);
  const [last, setLast] = useState<string>("");
  const run = (act: string) => {
    setLast(act);
    if (act === "Desfazer" || act === "Reverter") setLog((l) => l.slice(0, -1));
    if (act === "Editar") setLog((l) => l.map((x, i) => (i === 0 ? "Reserva feita: sábado, 21h" : x)));
    if (act === "Cancelar") setLog((l) => l.map((x) => `${x.replace(" (cancelado)", "")} (cancelado)`));
  };
  const out: Record<string, string> = {
    Desfazer: "A última ação foi desfeita.",
    Editar: "Horário corrigido para 21h.",
    Cancelar: "Tudo cancelado. Nada fica pendente.",
    Reverter: "Voltamos ao estado anterior.",
    "Revisar histórico": "Histórico aberto: cada passo com data e motivo.",
    "Assumir controle manual": "O agente pausou. Você continua daqui.",
  };
  return (
    <Bleed>
      <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-white/80">{lead}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {actions.map((a2) => (
              <button key={a2} type="button" onClick={() => run(a2)} className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A48BFF] ${last === a2 ? "border-[#A3E635] bg-[#A3E635] text-[#0d0d12]" : "border-white/20 text-white hover:border-white/50"}`}>{a2}</button>
            ))}
          </div>
          <p className="mt-2 text-xs text-white/45">Clique nos controles.</p>
          <p className="mt-8 text-white/70">{a}</p>
          <p className="font-display text-2xl font-semibold md:text-3xl">{b}</p>
        </div>
        <div className="rounded-[22px] border border-white/10 bg-[#111118] p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">Ações do agente · exemplo</p>
          <ul className="mt-3 space-y-2">
            <AnimatePresence initial={false}>
              {log.map((l) => (
                <motion.li key={l} layout initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className={`rounded-xl px-3 py-2.5 text-sm ${l.includes("cancelado") ? "bg-white/[0.03] text-white/40 line-through" : "bg-white/[0.06] text-white"}`}>{l}</motion.li>
              ))}
            </AnimatePresence>
          </ul>
          <p role="status" className="mt-4 min-h-[1.5em] text-sm text-[#A3E635]">{last ? out[last] : ""}</p>
          <button type="button" onClick={() => { setLog(["Reserva feita: sábado, 20h", "Convite enviado a 4 pessoas", "Lembrete criado"]); setLast(""); }} className="mt-2 text-xs text-white/50 underline">reiniciar exemplo</button>
        </div>
      </div>
    </Bleed>
  );
}

/* ─────────────── POST 12 · Dados são valiosos: quadro de investigação ─────────────── */

/* O número no centro do quadro, com as perguntas presas por fios. */
export function SceneEvidenceBoard({ lead, num, a, questions, b, c, d }: { lead: string; num: string; a: string; questions: string[]; b: string; c: string; d: string }) {
  const { ref, k } = useTimeline([300, ...questions.map((_, i) => 900 + i * 380), 900 + questions.length * 380 + 400]);
  const POS = [[12, 14], [72, 10], [86, 46], [70, 84], [14, 82], [4, 48], [40, 92]];
  return (
    <Bleed tone="light">
      <div ref={ref} className="container max-w-6xl py-20 md:py-28">
        <p className="text-[15px] text-[#0A0A0A]/65">{lead}</p>
        <div className="relative mt-6 aspect-square w-full md:aspect-[16/8]">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
            {POS.slice(0, questions.length).map(([x, y], i) => (
              <motion.line key={i} x1="50" y1="50" x2={x + 8} y2={y + 4} stroke="#e11d48" strokeWidth="0.35" vectorEffect="non-scaling-stroke" initial={false} animate={{ pathLength: k >= i + 2 ? 1 : 0 }} transition={{ duration: 0.4 }} />
            ))}
          </svg>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="font-display text-[88px] font-semibold leading-none tracking-[-0.04em] md:text-[150px]">{num}</p>
            <p className="mt-1 max-w-[220px] text-sm text-[#0A0A0A]/70">{a}</p>
          </div>
          {questions.map((q, i) => (
            <motion.p key={q} className="absolute w-[34%] rotate-[-2deg] [--maxl:64%] md:[--maxl:80%] rounded-sm bg-[#fde68a] px-2.5 py-2 text-xs font-semibold text-[#0A0A0A] shadow-md md:w-[18%] md:text-sm"
              style={{ left: `min(${POS[i][0]}%, var(--maxl))`, top: `${POS[i][1]}%` }}
              initial={false} animate={{ opacity: k >= i + 2 ? 1 : 0, scale: k >= i + 2 ? 1 : 0.8, rotate: i % 2 ? 2 : -2 }}>
              {q}
            </motion.p>
          ))}
        </div>
        <motion.div initial={false} animate={{ opacity: k >= questions.length + 2 ? 1 : 0.4 }} className="mt-8 grid gap-2 md:grid-cols-3">
          <p className="font-display text-2xl font-semibold">{b}</p>
          <p className="text-[15px] text-[#0A0A0A]/75">{c}</p>
          <p className="text-[15px] text-[#0A0A0A]/75">{d}</p>
        </motion.div>
      </div>
    </Bleed>
  );
}

/* Dossiê: as cartas do caso se abrem em leque, uma por etapa. */
export function SceneCaseFile({ lead, cards, close }: { lead: string; cards: { k: string; v: string }[]; close: string }) {
  return (
    <Bleed>
      <Sticky height={300}>{(p) => <CaseInner p={p} {...{ lead, cards, close }} />}</Sticky>
    </Bleed>
  );
}
function CaseInner({ p, lead, cards, close }: { p: MotionValue<number>; lead: string; cards: { k: string; v: string }[]; close: string }) {
  const s = useStep(useRange(p, 0, 0.9), cards.length + 1);
  return (
    <div className="container max-w-6xl">
      <p className="text-white/70">{lead}</p>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div key={c.k} initial={false} animate={{ opacity: i < s ? 1 : 0.4, y: i < s ? 0 : 16, rotate: i < s ? 0 : (i % 2 ? 2 : -2) }} transition={{ duration: 0.5, ease: M.ease }}
            className={`rounded-2xl border p-4 ${i === cards.length - 1 && i < s ? "border-[#A3E635] bg-[#A3E635]/10" : "border-white/12 bg-white/[0.03]"}`}>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#A48BFF]">{String(i + 1).padStart(2, "0")} · {c.k}</p>
            <p className="mt-2 text-[15px] leading-relaxed text-white">{c.v}</p>
          </motion.div>
        ))}
      </div>
      <motion.p initial={false} animate={{ opacity: s > cards.length ? 1 : 0.35 }} className="mt-6 font-display text-xl font-semibold md:text-2xl">{close}</motion.p>
    </div>
  );
}

/* A soma que vira resultado: cada termo cai no lugar como num placar. */
export function SceneEquation({ lead, terms, after }: { lead: string; terms: string; after: string[] }) {
  const parts = terms.replace(/\.$/, "").split(" + ");
  const { ref, k } = useTimeline(parts.map((_, i) => 300 + i * 450));
  return (
    <Bleed tone="violet">
      <div ref={ref} className="container max-w-6xl py-20 md:py-28">
        <p className="text-white/80">{lead}</p>
        <p className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] md:text-[84px]">
          {parts.map((t, i) => (
            <span key={t} className="inline-flex items-baseline gap-3 overflow-hidden">
              <motion.span initial={false} animate={{ y: i < k ? "0%" : "100%", opacity: i < k ? 1 : 0 }} transition={{ duration: 0.5, ease: M.ease }} className={i === parts.length - 1 ? "text-[#A3E635]" : "text-white"}>{t}</motion.span>
              {i < parts.length - 1 && <span className="text-white/40">+</span>}
            </span>
          ))}
        </p>
        <p className="sr-only">{terms}</p>
        <div className="mt-10 grid gap-2 md:grid-cols-3">{after.map((x) => <p key={x} className="text-white/85">{x}</p>)}</div>
      </div>
    </Bleed>
  );
}

export { Eyebrow };

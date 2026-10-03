"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, useTransform, type MotionValue } from "framer-motion";
import { Bleed, CountUp, Eyebrow, M, Sticky, useRange, useStep } from "./primitives";

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

/* ─────────────── POST 13 · IA acelera: velocidade e freio ─────────────── */

/* As capacidades passam em alta velocidade e a cena freia na pergunta. */
export function SceneSpeedBrake({ a, b, list, c, d, q, e }: { a: string; b: string; list: string[]; c: string; d: string; q: string; e: string }) {
  return (
    <Bleed>
      <Sticky height={260}>{(p) => <SpeedInner p={p} {...{ a, b, list, c, d, q, e }} />}</Sticky>
    </Bleed>
  );
}
function SpeedInner({ p, a, b, list, c, d, q, e }: { p: MotionValue<number>; a: string; b: string; list: string[]; c: string; d: string; q: string; e: string }) {
  const x = useTransform(p, [0, 0.55], ["10%", "-120%"]);
  const blur = useTransform(p, [0, 0.25, 0.5, 0.58], [0, 3, 3, 0]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);
  const brake = useRange(p, 0.55, 0.65);
  const qScale = useTransform(brake, [0, 1], [1.4, 1]);
  const lines = useTransform(p, [0.5, 0.6], [1, 0]);
  // No celular a lista fica parada e quebra em linhas, para ser lida.
  const [wide, setWide] = useState(true);
  useEffect(() => { const on = () => setWide(window.innerWidth >= 768); on(); window.addEventListener("resize", on); return () => window.removeEventListener("resize", on); }, []);
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div aria-hidden="true" style={{ opacity: lines }} className="pointer-events-none absolute inset-0">
        {Array.from({ length: 14 }, (_, i) => <motion.span key={i} className="absolute h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" style={{ top: `${6 + i * 7}%`, width: `${20 + ((i * 37) % 40)}%`, left: useTransform(p, [0, 0.55], [`${100 - ((i * 23) % 60)}%`, `${-60 - ((i * 13) % 40)}%`]) }} />)}
      </motion.div>
      <div className="container relative max-w-6xl">
        <p className="text-lg text-white/85 md:text-2xl">{a} {b}</p>
        <motion.ul style={wide ? { x, filter } : undefined} className={`mt-8 flex gap-2 md:gap-4 ${wide ? "w-max" : "flex-wrap"}`}>
          {list.map((t) => <li key={t} className="whitespace-nowrap rounded-full border border-white/20 px-3 py-1.5 font-display text-base font-semibold md:px-5 md:py-2.5 md:text-4xl">{t}</li>)}
        </motion.ul>
        <p className="mt-8 text-white/75">{c} {d}</p>
        <motion.p style={{ opacity: brake, scale: qScale }} className="mt-6 origin-left font-display text-6xl font-semibold tracking-[-0.03em] text-[#A3E635] md:text-[120px]">{q}</motion.p>
        <motion.p style={{ opacity: brake }} className="mt-3 max-w-xl text-white/80">{e}</motion.p>
      </div>
    </div>
  );
}

/* Mais ideias, mais coisas para avaliar: barras proporcionais aos números do texto. */
export function SceneFunnelMath({ beforeLabel, before, afterLabel, after }: { beforeLabel: string; before: string; afterLabel: string; after: string }) {
  const parse = (s: string) => s.split(" → ").map((t) => ({ n: parseInt(t, 10), l: t.replace(/^\d+\s*/, "") }));
  const B = parse(before), A = parse(after);
  const { ref, k } = useTimeline([300, 1100]);
  const w = (n: number) => `${Math.max(4, (Math.log10(n) + 1) * 33)}%`;
  const Row = ({ items, on, color }: { items: { n: number; l: string }[]; on: boolean; color: string }) => (
    <div className="mt-3 flex flex-col gap-2">
      {items.map((it, i) => (
        <div key={i} className="flex items-center gap-3">
          <motion.div className="h-9 rounded-lg" style={{ background: color }} initial={false} animate={{ width: on ? w(it.n) : "0%" }} transition={{ duration: 0.7, ease: M.ease, delay: i * 0.15 }} />
          <span className="whitespace-nowrap font-display text-xl font-semibold md:text-2xl">{on ? <CountUp to={it.n} /> : 0} <span className="font-sans text-sm font-normal text-[#0A0A0A]/60">{it.l}</span></span>
        </div>
      ))}
    </div>
  );
  return (
    <Bleed tone="light">
      <div ref={ref} className="container grid max-w-6xl grid-cols-1 gap-10 py-20 md:grid-cols-2 md:py-28">
        <div><Eyebrow color="#0A0A0A99">{beforeLabel}</Eyebrow><Row items={B} on={k >= 1} color="rgba(10,10,10,0.18)" /></div>
        <div><Eyebrow color={M.p}>{afterLabel}</Eyebrow><Row items={A} on={k >= 2} color={M.p} /></div>
        <p className="sr-only">{before} · {after}</p>
        <p className="text-sm text-[#0A0A0A]/55 md:col-span-2">Barras em escala logarítmica, com os números do texto.</p>
      </div>
    </Bleed>
  );
}

/* A ampulheta: produção cai rápido, mas tudo passa pelo gargalo da decisão. */
export function SceneHourglass({ items, a, b, c }: { items: { lead: string; q: string }[]; a: string; b: string; c: string }) {
  return (
    <Bleed>
      <Sticky height={260}>{(p) => <GlassInner p={p} {...{ items, a, b, c }} />}</Sticky>
    </Bleed>
  );
}
function GlassInner({ p, items, a, b, c }: { p: MotionValue<number>; items: { lead: string; q: string }[]; a: string; b: string; c: string }) {
  const s = useStep(p, items.length + 1);
  const fall = useTransform(p, [0, 1], [0, 1]);
  return (
    <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-[1.2fr_1fr]">
      <div>
        {items.map((it, i) => (
          <motion.div key={it.q} initial={false} animate={{ opacity: i <= s ? 1 : 0.4 }} className="mb-4">
            <p className="text-sm text-white/60">{it.lead}</p>
            <p className={`font-display text-2xl font-semibold leading-tight md:text-4xl ${i === items.length - 1 ? "text-[#A3E635]" : ""}`}>{it.q}</p>
          </motion.div>
        ))}
        <p className="mt-6 text-white/75">{a} {b}</p>
        <p className="font-display text-3xl font-semibold text-[#fbbf24] md:text-5xl">{c}</p>
      </div>
      <svg viewBox="0 0 200 300" className="mx-auto h-auto w-full max-w-[260px]" aria-hidden="true">
        <path d="M30 20 H170 C170 90 112 120 106 150 C112 180 170 210 170 280 H30 C30 210 88 180 94 150 C88 120 30 90 30 20 Z" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
        <text x="100" y="14" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="10" fontFamily="ui-monospace">PRODUÇÃO</text>
        <text x="100" y="296" textAnchor="middle" fill={M.amb} fontSize="10" fontFamily="ui-monospace">DECISÃO</text>
        {Array.from({ length: 40 }, (_, i) => {
          const sx = 50 + ((i * 37) % 100), sy = 30 + ((i * 23) % 70);
          const ex = 60 + ((i * 29) % 80), ey = 270 - ((i * 17) % 40);
          return <Grain key={i} p={fall} i={i} sx={sx} sy={sy} ex={ex} ey={ey} />;
        })}
      </svg>
    </div>
  );
}
function Grain({ p, i, sx, sy, ex, ey }: { p: MotionValue<number>; i: number; sx: number; sy: number; ex: number; ey: number }) {
  const a = (i / 40) * 0.8;
  const cx = useTransform(p, [a, a + 0.08, a + 0.16], [sx, 100, ex]);
  const cy = useTransform(p, [a, a + 0.08, a + 0.16], [sy, 150, ey]);
  return <motion.circle r={3} fill={i % 5 === 0 ? M.amb : "#ffffff"} style={{ cx, cy }} />;
}

/* ─────────────── POST 14 · Olhar crítico: lupa de inspeção ─────────────── */

/* Uma tela "perfeita" e uma lupa que revela o que a estética esconde (segue o mouse). */
export function SceneLens({ intro, lead, questions, outro }: { intro: string[]; lead: string; questions: string[]; outro: string }) {
  const box = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [pos, setPos] = useState({ x: 30, y: 30 });
  const [manual, setManual] = useState(false);
  const SPOTS = [{ x: 22, y: 22 }, { x: 70, y: 20 }, { x: 50, y: 45 }, { x: 80, y: 55 }, { x: 25, y: 70 }, { x: 60, y: 82 }, { x: 40, y: 32 }];
  const [i, setI] = useState(0);
  useEffect(() => {
    if (manual || reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % SPOTS.length), 1600);
    return () => clearInterval(id);
  }, [manual, reduce]); // eslint-disable-line react-hooks/exhaustive-deps
  const at = manual ? pos : SPOTS[i];
  const near = SPOTS.findIndex((s) => Math.hypot(s.x - at.x, s.y - at.y) < 14);
  return (
    <Bleed>
      <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 py-20 md:grid-cols-[1fr_1.2fr] md:py-28">
        <div>
          <ul className="flex flex-col gap-1 text-sm text-white/60">{intro.map((t) => <li key={t}>{t}</li>)}</ul>
          <p className="mt-6 text-white/80">{lead}</p>
          <ul className="mt-3 flex flex-col gap-1.5">
            {questions.map((q, k) => <li key={q} className={`text-[15px] transition-colors duration-300 md:text-base ${k === near ? "font-semibold text-[#A3E635]" : "text-white/70"}`}>{q}</li>)}
          </ul>
          <p className="mt-6 text-sm text-white/70">{outro}</p>
        </div>
        <div ref={box} className="relative aspect-[4/3] cursor-none overflow-hidden rounded-[22px] border border-white/10 bg-[#111118] p-5"
          onPointerMove={(e) => { const r = box.current!.getBoundingClientRect(); setManual(true); setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 }); }}
          onPointerLeave={() => setManual(false)} aria-hidden="true">
          <div className="h-3 w-1/3 rounded bg-white/70" />
          <div className="mt-4 grid grid-cols-3 gap-3">{[0, 1, 2].map((n) => <div key={n} className="h-16 rounded-xl bg-white/[0.07]" />)}</div>
          <div className="mt-4 h-2 w-full rounded bg-white/15" /><div className="mt-2 h-2 w-3/4 rounded bg-white/15" />
          <div className="mt-6 flex gap-2"><div className="h-9 w-28 rounded-full bg-[#622FFD]" /><div className="h-9 w-28 rounded-full bg-[#622FFD]/80" /></div>
          <motion.div className="pointer-events-none absolute h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#A3E635] bg-[#A3E635]/10 shadow-[0_0_0_9999px_rgba(13,13,18,0.45)]"
            animate={{ left: `${at.x}%`, top: `${at.y}%` }} transition={{ type: "spring", stiffness: manual ? 600 : 90, damping: manual ? 40 : 18 }}>
            {near >= 0 && <span className={`absolute left-1/2 w-44 -translate-x-1/2 rounded-lg bg-[#A3E635] px-2 py-1 text-center text-[11px] font-semibold text-[#0d0d12] ${at.y > 60 ? "bottom-full mb-2" : "top-full mt-2"}`}>{questions[near]}</span>}
          </motion.div>
          <span className="absolute bottom-3 right-4 font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">passe o mouse</span>
        </div>
      </div>
    </Bleed>
  );
}

/* Opinião × análise: dois carimbos. */
export function SceneStamps({ say, opinion, isOpinion, say2, analysis, isAnalysis }: { say: string; opinion: string; isOpinion: string; say2: string; analysis: string; isAnalysis: string }) {
  const { ref, k } = useTimeline([300, 1300]);
  const Stamp = ({ on, label, color }: { on: boolean; label: string; color: string }) => (
    <motion.span initial={false} animate={{ scale: on ? 1 : 2.2, opacity: on ? 1 : 0, rotate: on ? -8 : -20 }} transition={{ type: "spring", stiffness: 300, damping: 14 }}
      className="absolute right-3 -top-4 rounded-md border-[3px] bg-white px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-[0.16em] md:text-sm" style={{ borderColor: color, color }}>{label}</motion.span>
  );
  return (
    <Bleed tone="light">
      <div ref={ref} className="container grid max-w-6xl grid-cols-1 gap-8 py-20 md:grid-cols-2 md:py-28">
        <div className="relative rounded-2xl border border-black/10 bg-white p-6">
          <p className="text-sm text-[#0A0A0A]/55">{say}</p>
          <p className="mt-2 font-display text-3xl font-semibold">{opinion}</p>
          <p className="mt-3 text-sm text-[#0A0A0A]/60">{isOpinion}</p>
          <Stamp on={k >= 1} label="opinião" color="#e11d48" />
        </div>
        <div className="relative rounded-2xl border border-[#622FFD]/30 bg-white p-6">
          <p className="text-sm text-[#0A0A0A]/55">{say2}</p>
          <p className="mt-2 font-display text-xl font-semibold leading-snug md:text-2xl">{analysis}</p>
          <p className="mt-3 text-sm text-[#0A0A0A]/60">{isAnalysis}</p>
          <Stamp on={k >= 2} label="análise" color={M.p} />
        </div>
      </div>
    </Bleed>
  );
}

/* Olhar crítico como alvo: anéis que convergem no julgamento. */
export function SceneRings({ lead, formula, after }: { lead: string; formula: string; after: string }) {
  const parts = formula.replace(/\.$/, "").split(" + ");
  return (
    <Bleed>
      <Sticky height={220}>{(p) => <RingsInner p={p} {...{ lead, parts, formula, after }} />}</Sticky>
    </Bleed>
  );
}
function RingsInner({ p, lead, parts, formula, after }: { p: MotionValue<number>; lead: string; parts: string[]; formula: string; after: string }) {
  const s = useStep(useRange(p, 0, 0.85), parts.length + 1);
  return (
    <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
      <div>
        <p className="text-white/80">{lead}</p>
        <p className="mt-4 font-display text-2xl font-semibold leading-snug md:text-4xl">
          {parts.map((t, i) => <span key={t} className={`transition-colors duration-500 ${i < s ? (i === parts.length - 1 ? "text-[#A3E635]" : "text-white") : "text-white/40"}`}>{t}{i < parts.length - 1 ? " + " : ""}</span>)}
        </p>
        <p className="sr-only">{formula}</p>
        <p className="mt-6 text-white/70">{after}</p>
      </div>
      <svg viewBox="0 0 300 300" className="mx-auto w-full max-w-[340px]" aria-hidden="true">
        {parts.map((t, i) => {
          const r = 140 - i * 26;
          const on = i < s;
          return (
            <g key={t}>
              <motion.circle cx="150" cy="150" r={r} fill={i === parts.length - 1 && on ? M.g : "none"} stroke={on ? (i === parts.length - 1 ? M.g : M.p2) : "rgba(255,255,255,0.15)"} strokeWidth="2" initial={false} animate={{ scale: on ? 1 : 1.08, opacity: on ? 1 : 0.5 }} style={{ transformOrigin: "150px 150px" }} transition={{ duration: 0.5 }} />
              <text x="150" y={150 - r + 16} textAnchor="middle" fontSize="10" fontFamily="ui-monospace" fill={i === parts.length - 1 ? "#0d0d12" : on ? "#fff" : "rgba(255,255,255,0.4)"}>{t.toUpperCase()}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ─────────────── POST 15 · Dados precisam de história: storyboard ─────────────── */

/* Do número solto ao roteiro em quatro quadros. */
export function SceneStoryboard({ lead, kpi, a, b, c, story, d, e, formula, f }: Record<string, string>) {
  return (
    <Bleed tone="light">
      <Sticky height={300}>{(p) => <BoardInner p={p} {...{ lead, kpi, a, b, c, story, d, e, formula, f }} />}</Sticky>
    </Bleed>
  );
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function BoardInner({ p, lead, kpi, a, b, c, story, d, e, formula, f }: { p: MotionValue<number> } & Record<string, any>) {
  const s = useStep(useRange(p, 0.15, 0.95), 5);
  const parts: string[] = String(formula).replace(/\.$/, "").split(" + ");
  const PANELS = [
    <svg key="0" viewBox="0 0 120 70" className="w-full"><polyline points="5,20 35,18 60,22 75,20 85,50 115,52" fill="none" stroke="#0A0A0A" strokeWidth="2.5" /><text x="5" y="14" fontSize="9" fill="#0A0A0A">6,1%</text><text x="92" y="44" fontSize="9" fill="#e11d48">4,2%</text></svg>,
    <div key="1" className="space-y-1.5 p-1"><div className="h-2.5 rounded bg-black/15" /><div className="h-2.5 rounded bg-black/15" /><div className="h-2.5 rounded border-2 border-dashed border-[#e11d48] bg-[#e11d48]/10" /><div className="h-3.5 w-1/2 rounded-full bg-[#622FFD]" /></div>,
    <div key="2" className="flex items-end justify-center gap-3"><div className="h-14 w-8 rounded-md border-2 border-[#e11d48]" /><div className="h-10 w-16 rounded-md border-2 border-black/20" /></div>,
    <div key="3" className="flex items-center justify-center"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#A3E635] text-2xl">?</span></div>,
  ];
  return (
    <div className="container max-w-6xl">
      <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm text-[#0A0A0A]/60">{lead}</p>
          <p className={`mt-1 font-display text-5xl font-semibold transition-opacity md:text-7xl ${s >= 1 ? "opacity-30" : ""}`}>{kpi}</p>
          <p className="mt-2 text-sm text-[#0A0A0A]/60">{a} {b}</p>
          <p className="mt-4 text-sm text-[#0A0A0A]/60">{c}</p>
          <p className="mt-1 text-[15px] leading-relaxed text-[#0A0A0A]/85">{story}</p>
          <p className="mt-3 text-sm text-[#0A0A0A]/60">{d} {e}</p>
          <p className="mt-1 text-sm text-[#0A0A0A]/70">{f}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 self-center">
          {parts.map((t, i) => (
            <motion.div key={t} initial={false} animate={{ opacity: i < s ? 1 : 0.35, y: i < s ? 0 : 12, rotate: i < s ? 0 : (i % 2 ? 1.5 : -1.5) }} transition={{ duration: 0.5, ease: M.ease }}
              className="rounded-xl border-2 border-[#0A0A0A] bg-white p-3 shadow-[4px_4px_0_#0A0A0A]">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#622FFD]">{String(i + 1).padStart(2, "0")} · {t}</p>
              <div className="mt-2 flex h-[72px] items-center" aria-hidden="true">{PANELS[i]}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* As quatro perguntas como páginas que viram. */
export function ScenePageFlip({ first, items, close }: { first: string; items: { lead: string; q: string }[]; close: string }) {
  return (
    <Bleed>
      <Sticky height={260}>{(p) => <FlipInner p={p} {...{ first, items, close }} />}</Sticky>
    </Bleed>
  );
}
function FlipInner({ p, first, items, close }: { p: MotionValue<number>; first: string; items: { lead: string; q: string }[]; close: string }) {
  const all = [{ lead: first, q: "O que aconteceu?" }, ...items];
  const s = useStep(useRange(p, 0, 0.9), all.length);
  return (
    <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
      <div className="relative mx-auto h-[260px] w-full max-w-[420px] [perspective:1400px]" aria-hidden="true">
        {all.map((it, i) => (
          <motion.div key={it.q} className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-white/10 bg-[#17171f] p-6" style={{ transformOrigin: "left center", zIndex: all.length - i }}
            initial={false} animate={{ rotateY: i < s ? -165 : 0, opacity: i < s ? 0 : 1 }} transition={{ duration: 0.8, ease: M.ease }}>
            <span className="font-mono text-[11px] text-[#A48BFF]">{String(i + 1).padStart(2, "0")} / {String(all.length).padStart(2, "0")}</span>
            <span className="font-display text-3xl font-semibold leading-tight md:text-4xl">{it.q}</span>
          </motion.div>
        ))}
      </div>
      <div>
        <ol className="flex flex-col gap-3">
          {all.map((it, i) => <li key={it.q} className={`transition-opacity duration-300 ${i === s ? "opacity-100" : "opacity-50"}`}><p className="text-sm text-white/60">{it.lead}</p><p className="font-display text-xl font-semibold md:text-2xl">{it.q}</p></li>)}
        </ol>
        <p className="mt-6 text-[#A3E635]">{close}</p>
      </div>
    </div>
  );
}

/* A frase-roteiro vira uma linha do tempo anotada. */
export function SceneAnnotatedLine({ lead, chain, after }: { lead: string; chain: string; after: string }) {
  const parts = chain.split(" → ");
  const { ref, k } = useTimeline(parts.map((_, i) => 300 + i * 700));
  const pts = [[20, 70], [90, 30], [170, 70], [250, 50], [330, 80], [410, 40]];
  return (
    <Bleed>
      <div ref={ref} className="container max-w-6xl py-20 md:py-28">
        <p className="text-white/70">{lead}</p>
        <svg viewBox="0 0 430 110" className="mt-6 hidden h-auto w-full md:block" aria-hidden="true">
          <motion.polyline points={pts.slice(0, parts.length).map((q) => q.join(",")).join(" ")} fill="none" stroke={M.p2} strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: Math.min(1, k / parts.length) }} transition={{ duration: 0.6 }} />
          {pts.slice(0, parts.length).map((q, i) => <motion.circle key={i} cx={q[0]} cy={q[1]} r="5" fill={i === parts.length - 1 ? M.g : "#fff"} initial={false} animate={{ scale: i < k ? 1 : 0 }} />)}
        </svg>
        <ol className="mt-6 grid gap-3 md:grid-cols-5">
          {parts.map((t, i) => (
            <motion.li key={t} initial={false} animate={{ opacity: i < k ? 1 : 0.4, y: i < k ? 0 : 8 }} className={`rounded-xl border p-3 text-[15px] ${i === parts.length - 1 ? "border-[#A3E635]/60 text-[#A3E635]" : "border-white/12 text-white"}`}>
              <span className="mb-1 block font-mono text-[10px] text-white/45">{String(i + 1).padStart(2, "0")}</span>{t}
            </motion.li>
          ))}
        </ol>
        <p className="sr-only">{chain}</p>
        <p className="mt-6 font-display text-2xl font-semibold">{after}</p>
      </div>
    </Bleed>
  );
}

/* ─────────────── POST 16 · Acessibilidade: experimente na pele ─────────────── */

/* Os dados do artigo como números que contam, com a fonte embaixo. */
export function SceneA11yStats({ items }: { items: string[] }) {
  const parsed = items.map((t) => {
    const m = t.match(/^(Mais de |Apenas |No Brasil, mais de )?([\d,.]+)\s*(%|bilhões|milhões)?\s*(.*?)\s*\(([^)]+)\)$/);
    return m ? { pre: m[1] ?? "", n: m[2], unit: m[3] ?? "", rest: m[4], src: m[5], raw: t } : { pre: "", n: "", unit: "", rest: t, src: "", raw: t };
  });
  return (
    <Bleed tone="light">
      <div className="container max-w-6xl py-20 md:py-28">
        <ul className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {parsed.map((x) => {
            const num = parseFloat(x.n.replace(",", "."));
            const int = Number.isInteger(num);
            return (
              <li key={x.raw} className="border-t-2 border-[#0A0A0A] pt-4">
                <p className="font-display text-6xl font-semibold leading-none tracking-[-0.03em] text-[#622FFD] md:text-7xl">{int ? <CountUp to={num} /> : x.n}{x.unit === "%" ? "%" : ""}</p>
                <p className="mt-3 text-[15px] text-[#0A0A0A]/85">{x.pre}{x.n}{x.unit === "%" ? "%" : ` ${x.unit}`} {x.rest}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-[#0A0A0A]/55">{x.src}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </Bleed>
  );
}

/* Simulador: a mesma tela vista com baixa visão, daltonismo, só teclado e leitor de tela. */
export function SceneA11ySimulator({ title, body }: { title: string; body: string }) {
  const MODES = [
    { id: "normal", l: "Visão padrão" },
    { id: "low", l: "Baixa visão" },
    { id: "cb", l: "Daltonismo (protanopia)" },
    { id: "kbd", l: "Só teclado" },
    { id: "sr", l: "Leitor de tela" },
  ];
  const [mode, setMode] = useState("normal");
  const [focus, setFocus] = useState(0);
  useEffect(() => {
    if (mode !== "kbd") return;
    setFocus(0);
    const id = setInterval(() => setFocus((f) => (f + 1) % 4), 900);
    return () => clearInterval(id);
  }, [mode]);
  const filter = mode === "low" ? "blur(2.2px) contrast(0.85)" : mode === "cb" ? "url(#protanopia)" : "none";
  const ring = (i: number) => (mode === "kbd" && focus === i ? "outline outline-[3px] outline-offset-2 outline-[#A3E635]" : "");
  return (
    <Bleed>
      <svg width="0" height="0" className="absolute" aria-hidden="true"><filter id="protanopia"><feColorMatrix type="matrix" values="0.567 0.433 0 0 0  0.558 0.442 0 0 0  0 0.242 0.758 0 0  0 0 0 1 0" /></filter></svg>
      <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <div>
          <Eyebrow>Experimente</Eyebrow>
          <p className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">{title}</p>
          <p className="mt-4 text-white/75">{body}</p>
          <div role="group" aria-label="Simulações" className="mt-6 flex flex-wrap gap-2">
            {MODES.map((m) => (
              <button key={m.id} type="button" aria-pressed={mode === m.id} onClick={() => setMode(m.id)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] ${mode === m.id ? "border-[#A3E635] bg-[#A3E635] text-[#0d0d12]" : "border-white/20 text-white hover:border-white/50"}`}>{m.l}</button>
            ))}
          </div>
          <p className="mt-3 text-xs text-white/50">Simulações aproximadas, só para ilustrar.</p>
        </div>
        <div className="relative">
          <div className="rounded-[22px] bg-white p-5 text-[#0A0A0A] transition-[filter] duration-500" style={{ filter }} aria-hidden="true">
            <p className="font-display text-lg font-semibold">Seu pedido</p>
            <p className="mt-1 text-sm text-[#0A0A0A]/60">Chega em 35 min</p>
            <div className="mt-4 flex items-center gap-2"><span className="rounded-full bg-[#16a34a] px-2 py-0.5 text-xs font-semibold text-white">Confirmado</span><span className="rounded-full bg-[#dc2626] px-2 py-0.5 text-xs font-semibold text-white">Atrasado</span></div>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className={`rounded-full bg-[#622FFD] px-4 py-2 text-sm font-semibold text-white ${ring(0)}`}>Acompanhar</span>
              <span className={`rounded-full border border-black/15 px-4 py-2 text-sm font-semibold ${ring(1)}`}>Ajuda</span>
              <span className={`rounded-full px-2 py-2 text-xs text-[#0A0A0A]/40 ${ring(2)}`}>cancelar pedido</span>
              <span className={`rounded-full border border-black/15 px-4 py-2 text-sm ${ring(3)}`}>Voltar</span>
            </div>
          </div>
          {mode === "sr" && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-3 rounded-xl bg-[#111118] p-4 font-mono text-xs leading-6 text-[#A3E635]" role="status">
              🔊 “Seu pedido, título” · “Chega em 35 min” · “Confirmado” · “Atrasado” · “Acompanhar, botão” · “Ajuda, botão” · “cancelar pedido, botão” · “Voltar, botão”
            </motion.div>
          )}
          {mode === "cb" && <p className="mt-3 text-sm text-white/70">“Confirmado” e “Atrasado” ficam quase iguais: cor sozinha não basta para dar status.</p>}
          {mode === "low" && <p className="mt-3 text-sm text-white/70">O link cinza claro “cancelar pedido” praticamente desaparece.</p>}
          {mode === "kbd" && <p className="mt-3 text-sm text-white/70">O foco precisa ficar visível em cada parada, inclusive no “cancelar pedido”.</p>}
          {mode === "sr" && <p className="mt-3 text-sm text-white/70">Sem rótulos claros, o leitor de tela só lê textos soltos.</p>}
        </div>
      </div>
    </Bleed>
  );
}

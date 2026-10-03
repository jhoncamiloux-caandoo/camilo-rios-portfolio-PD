"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion, useTransform, type MotionValue } from "framer-motion";
import { Bleed, Eyebrow, FillText, HorizontalTrack, M, SceneRail, Sticky, SwapText, useRange, useStep, WeightWords } from "./primitives";

/* ─────────────── POST 5 · UX e Growth: tipografia em duelo ─────────────── */

/* Duas vozes: UX (contorno) e GROWTH (sólido) correm em sentidos opostos e
   se encontram na pergunta que as duas compartilham. */
export function SceneTwoVoices({ intro, ux, growth, bridge, question, view, growthSees, uxSees, close }: { intro: string; ux: string; growth: string; bridge: string; question: string; view: string; growthSees: string; uxSees: string; close: string }) {
  return (
    <Bleed>
      <Sticky height={300}>{(p) => <VoicesInner p={p} {...{ intro, ux, growth, bridge, question, view, growthSees, uxSees, close }} />}</Sticky>
    </Bleed>
  );
}
function VoicesInner({ p, intro, ux, growth, bridge, question, view, growthSees, uxSees, close }: { p: MotionValue<number>; intro: string; ux: string; growth: string; bridge: string; question: string; view: string; growthSees: string; uxSees: string; close: string }) {
  const xL = useTransform(p, [0, 0.5], ["-30%", "0%"]);
  const xR = useTransform(p, [0, 0.5], ["30%", "0%"]);
  const meet = useRange(p, 0.45, 0.6);
  const qOp = useTransform(meet, [0, 1], [0, 1]);
  const wordsOp = useTransform(p, [0.42, 0.56], [1, 0.05]);
  const step = useStep(p, 4);
  return (
    <div className="relative w-full">
      <motion.div aria-hidden="true" style={{ opacity: wordsOp }} className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none">
        <motion.p style={{ x: xL }} className="whitespace-nowrap text-center font-display text-[22vw] font-semibold leading-[0.8] tracking-[-0.04em] text-transparent [-webkit-text-stroke:2px_rgba(164,139,255,0.9)] md:text-[17vw]">UX</motion.p>
        <motion.p style={{ x: xR }} className="whitespace-nowrap text-center font-display text-[22vw] font-semibold leading-[0.8] tracking-[-0.04em] text-white md:text-[17vw]">GROWTH</motion.p>
      </motion.div>
      <div className="container relative grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        <motion.p initial={false} animate={{ opacity: step < 2 ? 1 : 0.4 }} className="max-w-3xl font-display text-2xl font-semibold leading-tight md:col-span-2 md:text-4xl">{intro}</motion.p>
        <motion.p initial={false} animate={{ opacity: step < 2 ? 1 : 0.4 }} className="text-[15px] text-white/75 md:text-lg"><span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-[#A48BFF]">UX</span>{ux}</motion.p>
        <motion.p initial={false} animate={{ opacity: step < 2 ? 1 : 0.4 }} className="text-[15px] text-white/75 md:text-right md:text-lg"><span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-[#A3E635]">GROWTH</span>{growth}</motion.p>
        <motion.div style={{ opacity: qOp }} className="md:col-span-2">
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">{bridge}</p>
          <p className="mx-auto mt-4 max-w-4xl text-center font-display text-3xl font-semibold leading-[1.08] md:text-6xl">{question}</p>
        </motion.div>
        <motion.div initial={false} animate={{ opacity: step >= 3 ? 1 : 0, y: step >= 3 ? 0 : 12 }} className="grid gap-3 md:col-span-2 md:grid-cols-3">
          <p className="text-sm text-white/60">{view}</p>
          <p className="text-sm text-white/80"><span className="text-[#A3E635]">●</span> {growthSees}</p>
          <p className="text-sm text-white/80"><span className="text-[#A48BFF]">●</span> {uxSees}</p>
          <p className="text-sm text-white/60 md:col-span-3">{close}</p>
        </motion.div>
      </div>
    </div>
  );
}

/* A jornada como trilha horizontal de palavras gigantes. */
export function SceneJourneyTrack({ lead, stages, after }: { lead: string; stages: string; after: string }) {
  const items = stages.split(" → ");
  return (
    <Bleed tone="light">
      <Sticky height={260}>
        {(p) => (
          <div className="w-full">
            <div className="container max-w-6xl"><p className="max-w-xl text-[15px] text-[#0A0A0A]/70">{lead}</p></div>
            <div className="mt-8 overflow-visible pl-6 md:pl-16">
              <HorizontalTrack p={p} className="gap-6 md:gap-10">
                {items.map((s, i) => (
                  <JourneyWord key={s} p={p} i={i} n={items.length} word={s} last={i === items.length - 1} />
                ))}
              </HorizontalTrack>
            </div>
            <div className="container mt-8 max-w-6xl"><p className="text-[15px] text-[#0A0A0A]/80">{after}</p></div>
          </div>
        )}
      </Sticky>
    </Bleed>
  );
}
function JourneyWord({ p, i, n, word, last }: { p: MotionValue<number>; i: number; n: number; word: string; last: boolean }) {
  const a = 0.05 + (0.9 * i) / n;
  const color = useTransform(p, [a, a + 0.12], ["rgba(10,10,10,0.12)", last ? M.p : "rgba(10,10,10,1)"]);
  return (
    <div className="flex items-center gap-6 md:gap-10">
      <span className="font-mono text-xs text-[#622FFD]">{String(i + 1).padStart(2, "0")}</span>
      <motion.span style={{ color }} className="whitespace-nowrap font-display text-[64px] font-semibold leading-none tracking-[-0.03em] md:text-[150px]">{word}</motion.span>
      {!last && <span aria-hidden="true" className="font-display text-[48px] text-[#0A0A0A]/20 md:text-[110px]">→</span>}
    </div>
  );
}

/* A pergunta que vira: de "como aumentar a conversão" para "por que não avançam". */
export function SceneQuestionFlip({ lead, a, joiner, b, after }: { lead: string; a: string; joiner: string; b: string; after: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-35% 0px" });
  const reduce = useReducedMotion();
  const [flip, setFlip] = useState(!!reduce);
  useEffect(() => {
    if (!inView || reduce) return;
    const t = setTimeout(() => setFlip(true), 1100);
    return () => clearTimeout(t);
  }, [inView, reduce]);
  return (
    <Bleed tone="violet">
      <div ref={ref} className="container flex min-h-[70vh] max-w-5xl flex-col justify-center py-20 [perspective:1200px]">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">{lead}</p>
        <motion.p initial={false} animate={{ rotateX: flip ? -90 : 0, opacity: flip ? 0.0 : 1 }} transition={{ duration: 0.7, ease: M.ease }} style={{ transformOrigin: "50% 100%" }} className="mt-3 font-display text-3xl font-semibold leading-tight text-white/90 md:text-6xl">{a}</motion.p>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">{joiner}</p>
        <motion.p initial={false} animate={{ rotateX: flip ? 0 : 90, opacity: flip ? 1 : 0 }} transition={{ duration: 0.8, ease: M.ease, delay: 0.15 }} style={{ transformOrigin: "50% 0%" }} className="mt-3 font-display text-4xl font-semibold leading-[1.02] text-[#A3E635] md:text-7xl">{b}</motion.p>
        <p className="mt-8 max-w-xl text-white/85 md:text-lg">{after}</p>
      </div>
    </Bleed>
  );
}

/* Frase final que se preenche: crescimento por causa da experiência. */
export function SceneFillClose({ lead, line }: { lead: string; line: string }) {
  return (
    <Bleed>
      <Sticky height={200}>
        {(p) => (
          <div className="container max-w-6xl">
            <WeightWords p={p} from={0} to={0.45} text={lead} className="max-w-4xl text-2xl leading-snug text-white md:text-[40px]" />
            <p className="mt-8 font-display text-[44px] font-semibold leading-[0.98] tracking-[-0.02em] md:text-[110px]">
              <FillText p={p} from={0.45} to={0.9} text={line} color={M.g} />
            </p>
          </div>
        )}
      </Sticky>
    </Bleed>
  );
}

/* ─────────────── POST 6 · Designer e código: editor que ganha vida ─────────────── */

/* A frase do artigo digitada como código, com destaque de sintaxe. */
export function SceneCodeLine({ lead, phrase }: { lead: string; phrase: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30% 0px" });
  const reduce = useReducedMotion();
  const code = `<Designer habilidade="${phrase.replace(/\.$/, "")}" />`;
  const [n, setN] = useState(reduce ? code.length : 0);
  useEffect(() => {
    if (!inView || reduce) return;
    let i = 0;
    const id = setInterval(() => { i++; setN(i); if (i >= code.length) clearInterval(id); }, 38);
    return () => clearInterval(id);
  }, [inView, reduce, code.length]);
  const shown = code.slice(0, n);
  const parts = shown.split(/(<Designer|habilidade=|"[^"]*"?|\/>)/g).filter(Boolean);
  return (
    <Bleed>
      <div ref={ref} className="container max-w-5xl py-20 md:py-28">
        <p className="max-w-2xl text-lg text-white/75 md:text-xl">{lead}</p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a10]">
          <div className="flex items-center gap-2 border-b border-white/[0.07] px-4 py-2.5 font-mono text-[11px] text-white/45">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]/70" /><span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]/70" /><span className="h-2.5 w-2.5 rounded-full bg-[#A3E635]/70" />
            <span className="ml-2">designer.tsx</span>
          </div>
          <p className="p-5 font-mono text-[15px] leading-relaxed md:p-8 md:text-[26px]">
            <span className="mr-4 select-none text-white/25">1</span>
            {parts.map((t, i) => (
              <span key={i} className={t.startsWith("<D") || t === "/>" ? "text-[#A48BFF]" : t.startsWith("habilidade") ? "text-[#fbbf24]" : t.startsWith('"') ? "text-[#A3E635]" : "text-white"}>{t}</span>
            ))}
            <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[3px] animate-pulse bg-white" aria-hidden="true" />
          </p>
        </div>
        <p className="mt-8 font-display text-4xl font-semibold leading-tight md:text-6xl">{phrase}</p>
      </div>
    </Bleed>
  );
}

/* Glossário vivo: cada pergunta técnica vira uma pequena demonstração. */
export function SceneTechGlossary({ lead, questions, close }: { lead: string; questions: string[]; close: string[] }) {
  return (
    <Bleed>
      <Sticky height={380}>{(p) => <GlossaryInner p={p} lead={lead} questions={questions} close={close} />}</Sticky>
    </Bleed>
  );
}
function GlossaryInner({ p, lead, questions, close }: { p: MotionValue<number>; lead: string; questions: string[]; close: string[] }) {
  const i = useStep(p, questions.length);
  return (
    <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_1fr]">
      <div>
        <Eyebrow>{lead}</Eyebrow>
        <div className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
          <SwapText items={questions} index={i} />
        </div>
        <ol className="mt-6 flex flex-wrap gap-1.5" aria-hidden="true">
          {questions.map((q, k) => <li key={q} className={`h-1.5 rounded-full transition-all duration-300 ${k === i ? "w-8 bg-[#A3E635]" : k < i ? "w-3 bg-white/50" : "w-3 bg-white/15"}`} />)}
        </ol>
        <ul className="sr-only">{questions.map((q) => <li key={q}>{q}</li>)}</ul>
        <p className="mt-8 text-sm text-white/70">{close[0]} {close[1]}</p>
      </div>
      <div className="relative h-[260px] rounded-[22px] border border-white/10 bg-[#111118] p-6" aria-hidden="true">
        <AnimatePresence mode="wait">
          <motion.div key={i} className="flex h-full items-center justify-center" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.35 }}>
            <TechDemo i={i} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
function Btn({ s }: { s: string }) {
  const cls: Record<string, string> = { default: "bg-[#622FFD]", hover: "bg-[#7447FF] shadow-[0_0_30px_rgba(98,47,253,0.6)]", loading: "bg-[#622FFD]/60", erro: "bg-[#f87171]" };
  return <span className={`inline-flex min-w-[130px] items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition ${cls[s]}`}>{s === "loading" && <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />}{s === "loading" ? "Salvando" : s === "erro" ? "Tentar de novo" : "Salvar"}</span>;
}
function useCycle(n: number, ms = 900) {
  const reduce = useReducedMotion();
  const [k, setK] = useState(0);
  useEffect(() => { if (reduce) return; const id = setInterval(() => setK((v) => (v + 1) % n), ms); return () => clearInterval(id); }, [n, ms, reduce]);
  return k;
}
function TechDemo({ i }: { i: number }) {
  const k = useCycle(4, 1000);
  if (i === 0) return (
    <div className="flex flex-col items-center gap-3">
      <div className="rounded-xl border border-dashed border-[#A48BFF]/60 p-3"><Btn s="default" /></div>
      <div className="flex gap-2">{["Salvar", "Enviar", "Continuar"].map((l) => <span key={l} className="rounded-full bg-[#622FFD] px-3 py-1.5 text-xs font-semibold text-white">{l}</span>)}</div>
      <p className="font-mono text-[10px] text-white/45">1 COMPONENTE · N USOS</p>
    </div>
  );
  if (i === 1) return (
    <div className="w-full font-mono text-[11px]">
      <div className="flex items-center gap-2"><span className="rounded bg-white/10 px-2 py-1 text-white/80">App</span><motion.span className="h-px flex-1 bg-[#A48BFF]" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.2, repeat: Infinity }} /><span className="rounded bg-white/10 px-2 py-1 text-white/80">API</span></div>
      <p className="mt-3 text-[#A3E635]">GET /pedidos → 200</p>
      <p className="mt-1 text-white/60">{"[{ id: 2481, status: \"novo\" }]"}</p>
    </div>
  );
  if (i === 2) return <div className="flex flex-col items-center gap-3"><Btn s={["default", "hover", "loading", "erro"][k]} /><p className="font-mono text-[10px] uppercase text-white/45">estado: {["default", "hover", "loading", "erro"][k]}</p></div>;
  if (i === 3) return (
    <motion.div className="rounded-xl border border-white/15 p-2" animate={{ width: ["100%", "45%", "100%"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
      <div className="grid gap-1.5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(60px, 1fr))" }}>{[0, 1, 2, 3].map((n) => <div key={n} className="h-12 rounded bg-white/[0.08]" />)}</div>
    </motion.div>
  );
  if (i === 4 || i === 5) {
    const c = ["#622FFD", "#0EA5E9", "#16A34A", "#e11d48"][k];
    return <div className="flex flex-col items-center gap-3"><p className="font-mono text-xs text-white/70">--color-primary: <span style={{ color: c }}>{c}</span></p><span className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-500" style={{ background: c }}>Botão</span></div>;
  }
  if (i === 6) return <div className="w-full space-y-2">{[0, 1, 2].map((n) => <motion.div key={n} className="h-8 rounded-lg bg-white/[0.08]" animate={{ opacity: [0.35, 0.8, 0.35] }} transition={{ duration: 1.2, repeat: Infinity, delay: n * 0.15 }} />)}<p className="font-mono text-[10px] text-white/45">CARREGANDO… (SKELETON EM VEZ DE TELA EM BRANCO)</p></div>;
  return (
    <div className="w-full">
      <p className="text-xs text-white/60">E-mail</p>
      <div className="mt-1 rounded-lg border border-[#f87171] bg-[#f87171]/10 px-3 py-2 text-sm text-white">camilo@</div>
      <p className="mt-1.5 text-xs text-[#f87171]">Falta o domínio. Exemplo: nome@empresa.com</p>
    </div>
  );
}

/* "Design vs. Desenvolvimento" vira "Design + Desenvolvimento". */
export function SceneVersus({ a, b, c, d }: { a: string; b: string; c: string; d: string }) {
  return (
    <Bleed tone="light">
      <Sticky height={200}>{(p) => <VersusInner p={p} a={a} b={b} c={c} d={d} />}</Sticky>
    </Bleed>
  );
}
function VersusInner({ p, a, b, c, d }: { p: MotionValue<number>; a: string; b: string; c: string; d: string }) {
  const [l, r] = b.split(" vs. ");
  const t = useRange(p, 0.25, 0.55);
  const gapL = useTransform(t, [0, 1], ["-8vw", "0vw"]);
  const gapR = useTransform(t, [0, 1], ["8vw", "0vw"]);
  const vsOp = useTransform(t, [0, 0.5], [1, 0]);
  const plusOp = useTransform(t, [0.5, 1], [0, 1]);
  const q = useTransform(useRange(p, 0.6, 0.8), [0, 1], [0, 1]);
  return (
    <div className="container max-w-6xl text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#0A0A0A]/50">{a}</p>
      <div className="mt-6 flex flex-col items-center justify-center gap-2 font-display text-[12vw] font-semibold leading-none tracking-[-0.03em] md:flex-row md:gap-4 md:text-[7vw]">
        <motion.span style={{ x: gapL }}>{l}</motion.span>
        <span className="relative inline-block w-[1.1em] text-[#622FFD]">
          <motion.span style={{ opacity: vsOp }} className="absolute inset-0 text-[0.5em] leading-[2]">vs.</motion.span>
          <motion.span style={{ opacity: plusOp }} className="absolute inset-0">+</motion.span>
          <span className="invisible">+</span>
        </span>
        <motion.span style={{ x: gapR }}>{r}</motion.span>
      </div>
      <motion.div style={{ opacity: q }}>
        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-[#0A0A0A]/50">{c}</p>
        <p className="mx-auto mt-3 max-w-3xl font-display text-3xl font-semibold text-[#622FFD] md:text-5xl">{d}</p>
      </motion.div>
    </div>
  );
}

/* Fim: o wireframe do Figma "compila" e vira interface. */
export function SceneCompile({ a, b }: { a: string; b: string }) {
  return (
    <Bleed>
      <Sticky height={220}>{(p) => <CompileInner p={p} a={a} b={b} />}</Sticky>
    </Bleed>
  );
}
function CompileInner({ p, a, b }: { p: MotionValue<number>; a: string; b: string }) {
  const s = useStep(useRange(p, 0.1, 0.85), 5);
  const LOG = ["› compilando componentes", "› aplicando tokens", "› conectando a API", "✓ no ar"];
  return (
    <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
      <div>
        <p className="text-xl text-white/80 md:text-2xl">{a}</p>
        <p className="mt-4 font-display text-4xl font-semibold leading-[1.02] md:text-6xl">{b}</p>
        <div className="mt-8 font-mono text-xs leading-6">
          {LOG.map((l, i) => <motion.p key={l} initial={false} animate={{ opacity: i < s ? 1 : 0.4 }} className={i === 3 ? "text-[#A3E635]" : "text-white/70"}>{l}</motion.p>)}
        </div>
      </div>
      <div className="relative aspect-[4/3] rounded-2xl" aria-hidden="true">
        {[
          { x: "8%", y: "8%", w: "84%", h: "10%" },
          { x: "8%", y: "24%", w: "40%", h: "40%" },
          { x: "52%", y: "24%", w: "40%", h: "40%" },
          { x: "8%", y: "70%", w: "56%", h: "6%" },
          { x: "8%", y: "82%", w: "30%", h: "10%", btn: true },
        ].map((r, i) => {
          const live = s >= 2;
          return (
            <motion.div key={i} className="absolute rounded-lg" style={{ left: r.x, top: r.y, width: r.w, height: r.h }} initial={false}
              animate={{ backgroundColor: live ? (r.btn ? M.g : i === 0 ? "#ffffff" : "rgba(98,47,253,0.35)") : "rgba(0,0,0,0)", borderColor: live ? "rgba(255,255,255,0)" : "rgba(164,139,255,0.7)", borderRadius: live ? (r.btn ? 999 : 10) : 2 }}
              transition={{ duration: 0.6, ease: M.ease, delay: live ? i * 0.08 : 0 }}>
              <div className={`h-full w-full rounded-[inherit] border ${live ? "border-transparent" : "border-dashed border-[#A48BFF]/70"}`} />
            </motion.div>
          );
        })}
        <motion.span initial={false} animate={{ opacity: s >= 4 ? 1 : 0 }} className="absolute -right-2 -top-3 rounded-full bg-[#A3E635] px-2.5 py-1 font-mono text-[10px] font-bold text-[#0d0d12]">LIVE</motion.span>
      </div>
    </div>
  );
}


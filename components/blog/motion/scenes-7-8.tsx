"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, useTransform, type MotionValue } from "framer-motion";
import { Bleed, CountUp, Eyebrow, FocusText, M, Marker, SceneRail, Sticky, useRange, useStep } from "./primitives";

/* ─────────────── POST 7 · Dados em decisão: ruído virando sinal ─────────────── */

/* Dilúvio de dados: os tipos de dado chegam em massa e colapsam numa única decisão. */
export function SceneDataDeluge({ lines, list }: { lines: string[]; list: string }) {
  const items = list.replace(/\.\.\.$/, "").split(", ");
  return (
    <Bleed>
      <Sticky height={280}>{(p) => <DelugeInner p={p} lines={lines} items={items} list={list} />}</Sticky>
    </Bleed>
  );
}
function DelugeInner({ p, lines, items, list }: { p: MotionValue<number>; lines: string[]; items: string[]; list: string }) {
  const s = useStep(p, 4);
  const many = Array.from({ length: 36 }, (_, i) => items[i % items.length]);
  return (
    <div className="relative w-full">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {many.map((w, i) => {
          const x = ((i * 53) % 100), y = ((i * 37) % 100);
          const wght = 200 + ((i * 97) % 700);
          return (
            <motion.span key={i} className="absolute whitespace-nowrap font-sans text-white" style={{ left: `${x}%`, top: `${y}%`, fontVariationSettings: `"wght" ${wght}`, fontSize: 14 + ((i * 13) % 34) }}
              initial={false}
              animate={{ opacity: s === 0 ? 0 : s === 1 ? 0.55 : s === 2 ? 0.12 : 0, left: s >= 3 ? "50%" : `${x}%`, top: s >= 3 ? "50%" : `${y}%`, scale: s >= 3 ? 0.2 : 1 }}
              transition={{ duration: 0.8, ease: M.ease, delay: s === 1 ? (i % 12) * 0.03 : 0 }}>
              {w}
            </motion.span>
          );
        })}
      </div>
      <div className="container relative max-w-5xl">
        <p className="sr-only">{list}</p>
        {lines.map((l, i) => (
          <motion.p key={l} initial={false} animate={{ opacity: (i < 3 && s <= 1) || (i >= 3 && s >= 2) ? 1 : 0.15 }} transition={{ duration: 0.5 }}
            className={i === lines.length - 1 ? "mt-4 font-display text-4xl font-semibold leading-[1.02] text-[#A3E635] md:text-7xl" : "text-lg text-white md:text-2xl"}>
            {l}
          </motion.p>
        ))}
      </div>
    </div>
  );
}

/* A queda de 15%: o gráfico cai e o ponto da queda se abre em causas possíveis. */
export function SceneDropCauses({ lead, causes, extra, a, b }: { lead: string; causes: string[]; extra: string; a: string; b: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30% 0px" });
  const reduce = useReducedMotion();
  const [k, setK] = useState(reduce ? 3 : 0);
  useEffect(() => {
    if (!inView || reduce) return;
    const ts = [setTimeout(() => setK(1), 200), setTimeout(() => setK(2), 1600), setTimeout(() => setK(3), 2600)];
    return () => ts.forEach(clearTimeout);
  }, [inView, reduce]);
  const all = [...causes, extra];
  return (
    <Bleed tone="light">
      <div ref={ref} className="container grid max-w-6xl grid-cols-1 items-center gap-10 py-20 md:grid-cols-[1fr_1fr] md:py-28">
        <div>
          <p className="text-lg text-[#0A0A0A]/75">{lead}</p>
          <p className="mt-2 font-display text-[96px] font-semibold leading-none tracking-[-0.04em] text-[#f87171] md:text-[160px]">−<CountUp to={15} />%</p>
          <svg viewBox="0 0 400 120" className="mt-4 h-auto w-full" aria-hidden="true">
            <motion.path d="M0 40 L80 36 L160 42 L240 34 L280 38 L300 92 L340 96 L400 94" fill="none" stroke="#0A0A0A" strokeWidth="3" strokeLinejoin="round" initial={{ pathLength: reduce ? 1 : 0 }} animate={k >= 1 ? { pathLength: 1 } : undefined} transition={{ duration: 1.2, ease: M.ease }} />
            <motion.circle cx="300" cy="92" r="7" fill="#f87171" initial={false} animate={{ scale: k >= 2 ? 1 : 0 }} />
          </svg>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            {all.map((c, i) => (
              <motion.li key={c} initial={false} animate={{ opacity: k >= 2 ? (i === 0 ? 1 : 0.9) : 0, x: k >= 2 ? 0 : -16 }} transition={{ duration: 0.45, delay: k === 2 ? i * 0.08 : 0 }}
                className={i === 0 ? "font-display text-xl font-semibold text-[#0A0A0A] md:text-2xl" : "flex items-center gap-3 rounded-xl border border-black/[0.08] bg-white px-4 py-2.5 text-[15px] text-[#0A0A0A]/80"}>
                {i > 0 && <span className="h-2 w-2 shrink-0 rounded-full bg-[#fbbf24]" />}
                {c}
              </motion.li>
            ))}
          </ul>
          <motion.div initial={false} animate={{ opacity: k >= 3 ? 1 : 0 }} className="mt-6">
            <p className="text-[15px] text-[#0A0A0A]/70">{a}</p>
            <p className="font-display text-2xl font-semibold text-[#622FFD] md:text-3xl">{b}</p>
          </motion.div>
        </div>
      </div>
    </Bleed>
  );
}

/* Teleprompter: as perguntas de um bom dashboard, uma de cada vez em destaque. */
export function SceneTeleprompter({ lead, questions, close }: { lead: string; questions: string[]; close: string[] }) {
  return (
    <Bleed>
      <Sticky height={300}>{(p) => <PromptInner p={p} lead={lead} questions={questions} close={close} />}</Sticky>
    </Bleed>
  );
}
function PromptInner({ p, lead, questions, close }: { p: MotionValue<number>; lead: string; questions: string[]; close: string[] }) {
  const i = useStep(useRange(p, 0, 0.9), questions.length);
  const end = useTransform(p, [0.88, 0.98], [0, 1]);
  return (
    <div className="container max-w-6xl">
      <Eyebrow>{lead}</Eyebrow>
      <ol className="mt-6 flex flex-col gap-1">
        {questions.map((q, k) => (
          <motion.li key={q} initial={false}
            animate={{ opacity: k === i ? 1 : k < i ? 0.28 : 0.14, scale: k === i ? 1 : 0.62, color: k === i ? (k === questions.length - 1 ? M.g : "#ffffff") : "#ffffff" }}
            transition={{ duration: 0.5, ease: M.ease }}
            style={{ transformOrigin: "left center" }}
            className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-7xl">
            {q}
          </motion.li>
        ))}
      </ol>
      <motion.p style={{ opacity: end }} className="mt-8 max-w-2xl text-sm text-white/70">{close[0]} {close[1]}</motion.p>
    </div>
  );
}

/* Informação → insight → teste: o texto entra em foco e a cadeia se acende. */
export function SceneInsightFocus({ intro, l1, info, l2, insight, l3, l4, test, l5, l6, l7, chain }: Record<string, string>) {
  return (
    <Bleed>
      <Sticky height={340}>{(p) => <FocusInner p={p} {...{ intro, l1, info, l2, insight, l3, l4, test, l5, l6, l7, chain }} />}</Sticky>
    </Bleed>
  );
}
function FocusInner({ p, intro, l1, info, l2, insight, l3, l4, test, l5, l6, l7, chain }: { p: MotionValue<number>; intro: string; l1: string; info: string; l2: string; insight: string; l3: string; l4: string; test: string; l5: string; l6: string; l7: string; chain: string }) {
  const steps = chain.split(" → ");
  const c = useStep(useRange(p, 0.7, 0.98), steps.length + 1);
  return (
    <div className="container max-w-5xl">
      <p className="text-sm text-white/55">{intro}</p>
      <div className="mt-5 grid gap-6 md:grid-cols-3">
        <FocusText p={p} from={0.02} to={0.15}>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">{l1}</p>
          <p className="mt-2 text-lg text-white/80 md:text-xl">{info}</p>
        </FocusText>
        <FocusText p={p} from={0.18} to={0.34}>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A48BFF]">{l2}</p>
          <p className="mt-2 text-lg text-white md:text-xl">{insight}</p>
          <p className="mt-2 text-sm text-white/55">{l3}</p>
        </FocusText>
        <FocusText p={p} from={0.38} to={0.55}>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A3E635]">{l4}</p>
          <p className="mt-2 text-lg text-white md:text-xl">{test}</p>
          <p className="mt-2 text-sm text-white/55">{l5} {l6}</p>
        </FocusText>
      </div>
      <p className="mt-10 text-sm text-white/60">{l7}</p>
      <ol className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        {steps.map((s, i) => (
          <li key={s} className="flex items-baseline gap-3">
            <motion.span initial={false} animate={{ opacity: i < c ? 1 : 0.18, color: i === steps.length - 1 && i < c ? M.g : "#ffffff" }} className="font-display text-2xl font-semibold md:text-4xl">{s}</motion.span>
            {i < steps.length - 1 && <span className="text-white/25">→</span>}
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ─────────────── POST 8 · IA cria interface: o designer como editor ─────────────── */

/* A pergunta central com marca-texto desenhado. */
export function SceneMarkedQuestion({ lead, q, after }: { lead: string; q: string; after: string }) {
  const [a, rest] = q.split(", quem decide");
  return (
    <Bleed tone="light">
      <div className="container flex min-h-[70vh] max-w-5xl flex-col justify-center py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#0A0A0A]/50">{lead}</p>
        <p className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-7xl">
          {a}, <Marker color={M.g}>quem decide</Marker>{rest.replace(" realmente boa?", " ")}<Marker color="#c4b5fd" delay={0.7}>realmente boa?</Marker>
        </p>
        <p className="mt-8 max-w-2xl text-lg text-[#0A0A0A]/75">{after}</p>
      </div>
    </Bleed>
  );
}

/* A interface que parece certa: passa em todas as regras visuais e ainda falha nas perguntas que importam. */
export function SceneLooksRight({ intro, rules, ruleNote, pull, l1, questions }: { intro: string; rules: string[]; ruleNote: string; pull: string; l1: string; questions: string[] }) {
  return (
    <Bleed>
      <Sticky height={320}>{(p) => <LooksInner p={p} {...{ intro, rules, ruleNote, pull, l1, questions }} />}</Sticky>
    </Bleed>
  );
}
function LooksInner({ p, intro, rules, ruleNote, pull, l1, questions }: { p: MotionValue<number>; intro: string; rules: string[]; ruleNote: string; pull: string; l1: string; questions: string[] }) {
  const r = useStep(useRange(p, 0.05, 0.4), rules.length + 1);
  const scan = useTransform(p, [0.4, 0.55], ["0%", "100%"]);
  const q = useStep(useRange(p, 0.55, 0.95), questions.length + 1);
  const PINS = [{ x: "18%", y: "30%" }, { x: "70%", y: "40%" }, { x: "30%", y: "70%" }, { x: "78%", y: "78%" }];
  return (
    <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1.1fr]">
      <div>
        <p className="text-sm text-white/60">{intro}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {rules.map((t, i) => (
            <motion.li key={t} initial={false} animate={{ opacity: i < r ? 1 : 0.2 }} className="flex items-center gap-1.5 rounded-full border border-[#A3E635]/40 px-3 py-1 text-xs text-white/85">
              <span className="text-[#A3E635]">✓</span>{t}
            </motion.li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-white/70">{ruleNote}</p>
        <p className="mt-4 font-display text-2xl font-semibold leading-tight md:text-4xl">{pull}</p>
        <p className="mt-4 text-sm text-white/60">{l1}</p>
        <ul className="mt-2 flex flex-col gap-1">
          {questions.map((t, i) => <motion.li key={t} initial={false} animate={{ opacity: i < q ? 1 : 0.2, x: i < q ? 0 : -6 }} className="text-lg text-[#f87171] md:text-xl">{t}</motion.li>)}
        </ul>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] border border-white/10 bg-[#111118] p-5" aria-hidden="true">
        <div className="h-3 w-1/3 rounded bg-white/70" />
        <div className="mt-4 grid grid-cols-3 gap-3">{[0, 1, 2].map((i) => <div key={i} className="h-20 rounded-xl bg-white/[0.07]" />)}</div>
        <div className="mt-4 h-2 w-full rounded bg-white/15" /><div className="mt-2 h-2 w-4/5 rounded bg-white/15" />
        <div className="mt-6 h-9 w-36 rounded-full bg-[#622FFD]" />
        <motion.div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-transparent via-[#A3E635]/15 to-transparent" style={{ height: "30%", top: scan }} />
        {PINS.map((pin, i) => (
          <motion.span key={i} className="absolute flex h-7 w-7 items-center justify-center rounded-full bg-[#f87171] font-display text-sm font-bold text-[#0d0d12]" style={{ left: pin.x, top: pin.y }} initial={false} animate={{ scale: i < q ? 1 : 0 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>?</motion.span>
        ))}
      </div>
    </div>
  );
}

/* Crítica de verdade: de "Está bonita." para uma análise anotada sobre a tela. */
export function SceneCritique({ lead, shallow, lead2, deep }: { lead: string; shallow: string; lead2: string; deep: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30% 0px" });
  const reduce = useReducedMotion();
  const [k, setK] = useState(reduce ? 3 : 0);
  useEffect(() => {
    if (!inView || reduce) return;
    const ts = [setTimeout(() => setK(1), 500), setTimeout(() => setK(2), 1500), setTimeout(() => setK(3), 2500)];
    return () => ts.forEach(clearTimeout);
  }, [inView, reduce]);
  const [good, bad] = deep.replace(/[“”]/g, "").split(", mas ");
  return (
    <Bleed tone="light">
      <div ref={ref} className="container grid max-w-6xl grid-cols-1 items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-[15px] text-[#0A0A0A]/60">{lead}</p>
          <p className={`mt-2 font-display text-3xl font-semibold transition-colors duration-500 ${k >= 1 ? "text-[#0A0A0A]/25" : "text-[#0A0A0A]"}`}>{shallow}</p>
          <p className="mt-8 text-[15px] text-[#0A0A0A]/60">{lead2}</p>
          <p className="mt-2 font-display text-2xl font-semibold leading-snug md:text-3xl">
            “<span className={`transition-colors duration-500 ${k >= 2 ? "bg-[#A3E635]/40" : ""}`}>{good}</span>, mas <span className={`transition-colors duration-500 ${k >= 3 ? "bg-[#f87171]/30" : ""}`}>{bad}</span>”
          </p>
        </div>
        <div className="relative rounded-[22px] border border-black/[0.08] bg-white p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]" aria-hidden="true">
          <p className="font-display text-lg font-semibold">Solicitar orçamento</p>
          <div className="mt-4 space-y-2.5">{["Nome", "E-mail", "Mensagem"].map((f) => <div key={f}><p className="text-xs text-[#0A0A0A]/50">{f}</p><div className="mt-1 h-9 rounded-lg border border-black/10" /></div>)}</div>
          <div className="mt-4 h-10 w-32 rounded-full bg-[#622FFD]" />
          <motion.div initial={false} animate={{ opacity: k >= 2 ? 1 : 0, x: k >= 2 ? 0 : 10 }} className="absolute -right-3 top-16 max-w-[180px] rounded-xl bg-[#A3E635] px-3 py-2 text-xs font-semibold text-[#0d0d12] shadow-lg">Só 3 campos: menos carga cognitiva</motion.div>
          <motion.div initial={false} animate={{ opacity: k >= 3 ? 1 : 0, x: k >= 3 ? 0 : 10 }} className="absolute -right-3 bottom-6 max-w-[190px] rounded-xl bg-[#f87171] px-3 py-2 text-xs font-semibold text-[#0d0d12] shadow-lg">E depois do envio? Nada diz o que acontece.</motion.div>
        </div>
      </div>
    </Bleed>
  );
}

/* Folha de contato do editor: gerar muito, questionar, comparar, testar, aprender. */
export function SceneContactSheet({ lead, process, steps, a, b }: { lead: string; process: string; steps: string[]; a: string; b: string }) {
  return (
    <Bleed>
      <Sticky height={320}>{(p) => <SheetInner p={p} {...{ lead, process, steps, a, b }} />}</Sticky>
    </Bleed>
  );
}
function SheetInner({ p, lead, process, steps, a, b }: { p: MotionValue<number>; lead: string; process: string; steps: string[]; a: string; b: string }) {
  const labels = process.split(" → ");
  const s = useStep(useRange(p, 0, 0.92), labels.length);
  const FLAG = new Set([1, 4, 6, 9, 10]);
  const PAIR = [2, 7];
  return (
    <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1.1fr]">
      <div>
        <p className="text-sm text-white/60">{lead}</p>
        <ol className="mt-3 flex flex-col gap-1">
          {labels.map((l, i) => (
            <li key={l}>
              <motion.p initial={false} animate={{ opacity: i === s ? 1 : i < s ? 0.4 : 0.15, x: i === s ? 0 : -4 }} className="font-display text-3xl font-semibold leading-tight md:text-5xl">{l}</motion.p>
              {i === s && <p className="mt-1 text-sm text-white/70">{steps[i]}</p>}
            </li>
          ))}
        </ol>
        <ul className="sr-only">{steps.map((t) => <li key={t}>{t}</li>)}</ul>
        <p className="mt-8 font-display text-2xl font-semibold md:text-3xl">{a.replace(" hipótese.", " ")}<Marker color={M.g}>hipótese.</Marker></p>
        <p className="mt-1 text-white/60">{b}</p>
      </div>
      <div className="grid grid-cols-4 gap-2.5" aria-hidden="true">
        {Array.from({ length: 12 }, (_, i) => {
          const flagged = s >= 1 && FLAG.has(i);
          const paired = s >= 2 && PAIR.includes(i);
          const tested = s >= 3 && i === 7;
          const out = (s >= 2 && !PAIR.includes(i)) || (s >= 3 && i === 2);
          return (
            <motion.div key={i} className="relative aspect-[3/4] rounded-xl border bg-[#111118] p-2" initial={false}
              animate={{ opacity: s === 0 ? 1 : out ? 0.15 : 1, borderColor: tested ? M.g : paired ? M.p2 : flagged ? "rgba(248,113,113,0.7)" : "rgba(255,255,255,0.1)", scale: tested ? 1.1 : 1 }}
              transition={{ duration: 0.5, ease: M.ease, delay: s === 0 ? i * 0.03 : 0 }}>
              <div className="h-1.5 w-2/3 rounded bg-white/40" />
              <div className="mt-1.5 h-7 rounded bg-[#622FFD]/30" />
              <div className="mt-1.5 h-1 w-full rounded bg-white/15" />
              {flagged && !out && <span className="absolute -right-1.5 -top-1.5 h-4 w-4 rounded-full bg-[#f87171] text-center text-[10px] font-bold leading-4 text-[#0d0d12]">?</span>}
              {tested && <span className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 gap-0.5">{[0, 1, 2].map((d) => <span key={d} className="h-2.5 w-2.5 rounded-full bg-[#A3E635]" />)}</span>}
            </motion.div>
          );
        })}
        <motion.p initial={false} animate={{ opacity: s >= 4 ? 1 : 0 }} className="col-span-4 mt-2 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-[#A3E635]">↺ aprender e gerar de novo, com mais contexto</motion.p>
      </div>
    </div>
  );
}

export { SceneRail };

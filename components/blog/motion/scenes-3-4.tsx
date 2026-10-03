"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion, type MotionValue } from "framer-motion";
import { Bleed, Eyebrow, M, SceneRail, Sticky, SwapText, useRange, useStep } from "./primitives";

/* ─────────────── POST 3 · Interface ganhando vida ─────────────── */

/* Janela de produto no estilo Clint: barra de prompt com o logo da IA. */
function ProductWindow({ prompt, typed, children, title = "Clint · Gerador de telas" }: { prompt: string; typed: number; children: React.ReactNode; title?: string }) {
  return (
    <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#111118] shadow-[0_40px_120px_-30px_rgba(98,47,253,0.55)]">
      <div className="flex items-center gap-2 border-b border-white/[0.07] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" /><span className="h-2.5 w-2.5 rounded-full bg-white/15" /><span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/45">{title}</span>
      </div>
      <div className="p-4 md:p-5">{children}</div>
      <div className="flex items-center gap-3 border-t border-white/[0.07] px-4 py-3">
        <img src="/cases/clint/ai-logo.webp" alt="" className="h-7 w-7 shrink-0 rounded-full" />
        <p className="min-h-[1.5em] flex-1 text-[13px] text-white/85 md:text-sm">
          {prompt.slice(0, typed)}
          <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-pulse bg-[#A48BFF]" aria-hidden="true" />
        </p>
        <span className="rounded-full bg-[#622FFD] px-3 py-1.5 text-xs font-semibold text-white">Gerar</span>
      </div>
    </div>
  );
}

/* Digitação ligada ao progresso: quantos caracteres mostrar. */
function useTyped(p: MotionValue<number>, a: number, b: number, len: number) {
  const r = useRange(p, a, b);
  const [n, setN] = useState(0);
  useEffect(() => r.on("change", (v) => setN(Math.round(v * len))), [r, len]);
  useEffect(() => setN(Math.round(r.get() * len)), [r, len]);
  return n;
}

/* "A IA preenche espaços vazios": cada pergunta sem resposta vira uma suposição padrão. */
export function SceneGapFiller({ lead, prompt, open, questions, fills, close }: { lead: string; prompt: string; open: string; questions: string[]; fills: string; close: string[] }) {
  return (
    <Bleed>
      <Sticky height={340}>
        {(p) => <GapInner p={p} lead={lead} prompt={prompt} open={open} questions={questions} fills={fills} close={close} />}
      </Sticky>
    </Bleed>
  );
}
function GapInner({ p, lead, prompt, open, questions, fills, close }: { p: MotionValue<number>; lead: string; prompt: string; open: string; questions: string[]; fills: string; close: string[] }) {
  const typed = useTyped(p, 0.02, 0.16, prompt.length);
  const qStep = useStep(useRange(p, 0.18, 0.5), questions.length + 1);
  const fStep = useStep(useRange(p, 0.55, 0.92), 8);
  const patterns = ["cards", "dashboard", "gráficos", "menu lateral", "hero", "CTA", "métricas"];
  return (
    <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1.15fr]">
      <div>
        <Eyebrow>{lead}</Eyebrow>
        <p className="mt-3 font-display text-2xl font-semibold md:text-4xl">“{prompt}”</p>
        <p className="mt-4 text-[15px] text-white/65">{open}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {questions.map((q, i) => (
            <motion.li key={q} initial={false} animate={{ opacity: i < qStep ? 1 : 0.4, y: i < qStep ? 0 : 6 }} transition={{ duration: 0.4 }}
              className={`rounded-full border border-dashed px-3 py-1 text-xs ${fStep > 0 && i < fStep ? "border-white/10 text-white/35 line-through" : "border-[#fbbf24]/60 text-[#fbbf24]"}`}>{q}</motion.li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-relaxed text-white/70">{close[0]} {close[1]}</p>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{fills}</p>
        <p className="mt-2 text-sm text-white/70">{close[2]} <span className="text-[#f87171]">{close[3]}</span></p>
      </div>
      <ProductWindow prompt={prompt} typed={typed}>
        <div className="grid h-[260px] grid-cols-4 grid-rows-4 gap-2 md:h-[320px]" aria-hidden="true">
          {[
            { c: "col-span-1 row-span-4", l: patterns[3] },
            { c: "col-span-3 row-span-1", l: patterns[4] },
            { c: "col-span-1 row-span-1", l: patterns[0] },
            { c: "col-span-1 row-span-1", l: patterns[6] },
            { c: "col-span-1 row-span-1", l: patterns[0] },
            { c: "col-span-2 row-span-2", l: patterns[2] },
            { c: "col-span-1 row-span-2", l: patterns[1] },
          ].map((b, i) => {
            const on = i < fStep;
            return (
              <motion.div key={i} className={`${b.c} flex items-end rounded-xl border p-2`} initial={false}
                animate={{ opacity: on ? 1 : 0.5, backgroundColor: on ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0)", borderColor: on ? "rgba(255,255,255,0.12)" : "rgba(251,191,36,0.35)", borderStyle: on ? "solid" : "dashed" }}
                transition={{ duration: 0.5 }}>
                <span className={`font-mono text-[9px] uppercase tracking-[0.14em] ${on ? "text-white/45" : "text-[#fbbf24]"}`}>{on ? `suposição · ${b.l}` : "?"}</span>
              </motion.div>
            );
          })}
        </div>
      </ProductWindow>
    </div>
  );
}

/* "Contexto é parte do design": a mesma ferramenta, com contexto, gera a tela certa. */
export function SceneOrdersStory({ lead, shortP, lead2, context, close }: { lead: string; shortP: string; lead2: string; context: string; close: string[] }) {
  return (
    <Bleed>
      <Sticky height={380}>
        {(p) => <OrdersInner p={p} lead={lead} shortP={shortP} lead2={lead2} context={context} close={close} />}
      </Sticky>
    </Bleed>
  );
}
function OrdersInner({ p, lead, shortP, lead2, context, close }: { p: MotionValue<number>; lead: string; shortP: string; lead2: string; context: string; close: string[] }) {
  const sentences = context.split(". ").map((c, i, a) => (i < a.length - 1 ? `${c}.` : c));
  const typed = useTyped(p, 0.02, 0.14, shortP.length);
  const ctx = useStep(useRange(p, 0.24, 0.7), sentences.length + 1);
  const live = useStep(useRange(p, 0.72, 0.98), 3);
  const specific = ctx >= 2;
  const orders = [
    { n: "#2481", t: "2 min", s: "NOVO", c: M.g },
    { n: "#2477", t: "18 min", s: "ATRASADO", c: M.red },
    { n: "#2475", t: "21 min", s: "INTERVIR", c: M.amb },
    { n: "#2473", t: "6 min", s: "NOVO", c: M.g },
  ];
  return (
    <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1.15fr]">
      <div>
        <Eyebrow>{lead}</Eyebrow>
        <p className="mt-3 font-display text-2xl font-semibold md:text-4xl">“{shortP}”</p>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">{lead2}</p>
        <p className="mt-3 text-[15px] leading-relaxed">
          {sentences.map((s, i) => (
            <span key={i} className={`transition-colors duration-500 ${i < ctx ? "text-white" : "text-white/25"}`}>{i === 0 ? "“" : ""}{s}{i === sentences.length - 1 ? "”" : ""} </span>
          ))}
        </p>
        <p className="mt-6 text-sm text-white/70">{close[0]} {close[1]}</p>
        <p className="mt-1 text-sm text-white/70">{close[2]} <span className="text-[#A3E635]">{close[3]}</span></p>
      </div>
      <ProductWindow prompt={ctx > 0 ? `${shortP} + contexto (${Math.min(ctx, sentences.length)}/${sentences.length})` : shortP} typed={ctx > 0 ? 999 : typed} title="Clint · Pedidos">
        <div className="relative h-[280px] md:h-[330px]" aria-hidden="true">
          <AnimatePresence mode="wait">
            {!specific ? (
              <motion.div key="generic" className="grid h-full grid-cols-3 grid-rows-3 gap-2" initial={{ opacity: 0 }} animate={{ opacity: typed > 4 ? 1 : 0 }} exit={{ opacity: 0, scale: 0.97 }}>
                {[0, 1, 2].map((i) => <div key={i} className="rounded-xl bg-white/[0.06]" />)}
                <div className="col-span-3 row-span-2 flex items-end rounded-xl bg-white/[0.04] p-3">
                  <svg viewBox="0 0 200 60" className="h-1/2 w-full"><path d="M0 50 C40 10, 60 60, 100 30 S160 40, 200 10" fill="none" stroke={M.p2} strokeWidth="2" /></svg>
                </div>
              </motion.div>
            ) : (
              <motion.div key="specific" className="flex h-full flex-col gap-2" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: M.ease }}>
                <div className="flex gap-2">
                  {["Todos", "Novos", "Atrasados", "Intervir"].map((f, i) => (
                    <span key={f} className={`rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] ${ctx >= 5 && i === 2 ? "bg-[#f87171]/20 text-[#f87171]" : "bg-white/[0.06] text-white/55"}`}>{f}</span>
                  ))}
                </div>
                <AnimatePresence initial={false}>
                  {live >= 1 && (
                    <motion.div key="new" initial={{ opacity: 0, x: 30, height: 0 }} animate={{ opacity: 1, x: 0, height: "auto" }} className="flex items-center gap-3 rounded-xl border border-[#A3E635]/50 bg-[#A3E635]/[0.08] px-3 py-2.5">
                      <span className="rounded-full px-2 py-0.5 font-mono text-[9px] font-bold text-[#0d0d12]" style={{ background: M.g }}>NOVO</span>
                      <span className="font-mono text-xs text-white">#2484</span><span className="text-xs text-white/50">agora</span>
                      <span className="ml-auto rounded-full bg-[#622FFD] px-2.5 py-1 text-[10px] font-semibold text-white">Aceitar</span>
                    </motion.div>
                  )}
                </AnimatePresence>
                {orders.map((o, i) => {
                  const late = o.s === "ATRASADO" && live >= 2;
                  return (
                    <motion.div key={o.n} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, borderColor: late ? "rgba(248,113,113,0.7)" : "rgba(255,255,255,0.08)" }} transition={{ delay: i * 0.06 }} className="flex items-center gap-3 rounded-xl border bg-white/[0.03] px-3 py-2.5">
                      <motion.span animate={late ? { scale: [1, 1.12, 1] } : { scale: 1 }} transition={late ? { duration: 1, repeat: 2 } : undefined} className="rounded-full px-2 py-0.5 font-mono text-[9px] font-bold text-[#0d0d12]" style={{ background: o.c }}>{o.s}</motion.span>
                      <span className="font-mono text-xs text-white">{o.n}</span><span className="text-xs text-white/50">{o.t}</span>
                      {ctx >= 4 && <span className="ml-auto rounded-full border border-white/15 px-2.5 py-1 text-[10px] text-white/80">1 clique</span>}
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ProductWindow>
      <div className="md:col-span-2"><SceneRail p={p} labels={["Pedido genérico", "Contexto entra", "Status primeiro", "Ao vivo"]} /></div>
    </div>
  );
}

/* ─────────────── POST 4 · Experimental: rotas, números, morph ─────────────── */

/* Duas rotas para a mesma ideia vaga: a de antes tem pontos de checagem; a com IA vai direto. */
export function SceneTwoRoutes({ lead, idea, beforeSteps, beforeNote, withAi, to, result, risk }: { lead: string; idea: string; beforeSteps: string[]; beforeNote: string; withAi: string; to: string; result: string; risk: string[] }) {
  return (
    <Bleed>
      <Sticky height={300}>
        {(p) => <RoutesInner p={p} lead={lead} idea={idea} beforeSteps={beforeSteps} beforeNote={beforeNote} withAi={withAi} to={to} result={result} risk={risk} />}
      </Sticky>
    </Bleed>
  );
}
function RoutesInner({ p, lead, idea, beforeSteps, beforeNote, withAi, to, result, risk }: { p: MotionValue<number>; lead: string; idea: string; beforeSteps: string[]; beforeNote: string; withAi: string; to: string; result: string; risk: string[] }) {
  const slow = useRange(p, 0.08, 0.6);
  const fast = useRange(p, 0.6, 0.7);
  const s1 = useStep(slow, beforeSteps.length + 1);
  const end = useStep(useRange(p, 0.7, 0.95), 4);
  return (
    <div className="container max-w-6xl">
      <Eyebrow>{lead}</Eyebrow>
      <p className="mt-3 font-display text-3xl font-semibold md:text-5xl">“{idea}”</p>
      <div className="mt-10 grid grid-cols-1 gap-8">
        <div>
          <div className="relative h-10">
            <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
            <motion.div className="absolute left-0 top-1/2 h-px origin-left bg-white/70" style={{ scaleX: slow, width: "100%" }} />
            {beforeSteps.map((s, i) => (
              <div key={s} className="absolute top-1/2 -translate-y-1/2" style={{ left: `${((i + 1) / (beforeSteps.length + 1)) * 100}%` }}>
                <motion.span initial={false} animate={{ scale: i < s1 ? 1 : 0.5, backgroundColor: i < s1 ? "#ffffff" : "rgba(255,255,255,0.2)" }} className="block h-3 w-3 -translate-x-1/2 rounded-full" />
              </div>
            ))}
          </div>
          <ol className="mt-2 grid text-[11px] text-white/60 md:text-xs" style={{ gridTemplateColumns: `repeat(${beforeSteps.length + 1}, 1fr)` }}>
            <li />
            {beforeSteps.map((s, i) => <li key={s} className={`-translate-x-1/2 ${i < s1 ? "text-white" : ""}`}>{s}</li>)}
          </ol>
          <p className="mt-3 text-sm text-white/60">{beforeNote}</p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#A48BFF]">{withAi}</p>
          <div className="relative mt-3 h-10">
            <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
            <motion.div className="absolute left-0 top-1/2 h-[3px] -translate-y-px origin-left bg-gradient-to-r from-[#622FFD] to-[#A3E635]" style={{ scaleX: fast, width: "100%" }} />
            <motion.span className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-[#A3E635] px-3 py-1 text-xs font-semibold text-[#0d0d12]" style={{ opacity: fast }}>{to} {result}</motion.span>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap items-baseline gap-x-4 gap-y-1">
        {risk.map((r, i) => (
          <motion.span key={r} initial={false} animate={{ opacity: i < end ? 1 : 0.4 }} className={`font-display text-xl font-semibold md:text-3xl ${i === risk.length - 1 ? "text-[#f87171]" : "text-white"}`}>{r}</motion.span>
        ))}
      </div>
    </div>
  );
}

/* Cinco interfaces geradas: quantas eram necessárias? */
export function SceneFiveInterfaces({ lines, question, after, punch }: { lines: string[]; question: string; after: string[]; punch: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30% 0px" });
  const reduce = useReducedMotion();
  const [k, setK] = useState(reduce ? 3 : 0);
  useEffect(() => {
    if (!inView || reduce) return;
    const ts = [setTimeout(() => setK(1), 300), setTimeout(() => setK(2), 1900), setTimeout(() => setK(3), 3100)];
    return () => ts.forEach(clearTimeout);
  }, [inView, reduce]);
  return (
    <Bleed tone="light">
      <div ref={ref} className="container grid max-w-6xl grid-cols-1 items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <div className="flex flex-col gap-2 text-[17px] leading-relaxed text-[#0A0A0A]/80">
          {lines.map((l) => <p key={l}>{l}</p>)}
          <p className="mt-4 font-display text-2xl font-semibold text-[#0A0A0A] md:text-4xl">{question}</p>
          {after.map((l) => <p key={l} className="mt-2">{l}</p>)}
          <p className="mt-4 font-display text-2xl font-semibold text-[#622FFD] md:text-3xl">{punch}</p>
        </div>
        <div className="grid grid-cols-3 gap-3" aria-hidden="true">
          {Array.from({ length: 5 }, (_, i) => {
            const shown = k >= 1;
            const keep = i === 2;
            const faded = k >= 2 && !keep;
            return (
              <motion.div key={i} className={`aspect-[3/4] rounded-2xl border bg-white p-2 shadow-sm ${i === 3 ? "col-start-1" : ""}`}
                initial={false}
                animate={{ opacity: shown ? (faded ? 0.18 : 1) : 0, y: shown ? 0 : 20, scale: k >= 3 && keep ? 1.08 : 1, borderColor: k >= 3 && keep ? M.p : "rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.5, ease: M.ease, delay: k === 1 ? i * 0.22 : 0 }}>
                <div className="h-2 w-2/3 rounded bg-[#0A0A0A]/15" />
                <div className="mt-2 h-10 rounded bg-[#622FFD]/15" />
                <div className="mt-2 h-1.5 w-full rounded bg-[#0A0A0A]/10" />
                <div className="mt-1 h-1.5 w-4/5 rounded bg-[#0A0A0A]/10" />
                <div className={`mt-3 h-4 w-1/2 rounded-full ${k >= 3 && keep ? "bg-[#622FFD]" : "bg-[#0A0A0A]/15"}`} />
              </motion.div>
            );
          })}
          <div className="col-span-1 flex items-center justify-center font-display text-5xl font-semibold text-[#0A0A0A]">
            {k >= 3 ? <span className="text-[#622FFD]">1</span> : k >= 1 ? "5" : "0"}
          </div>
        </div>
      </div>
    </Bleed>
  );
}

/* "Faça melhor" vira critérios: a frase se reescreve e cada critério ganha uma mini demonstração. */
export function SceneCriteriaMorph({ lead, vague, lead2, open, intro, criteria, close }: { lead: string; vague: string; lead2: string; open: string; intro: string; criteria: string[]; close: string[] }) {
  return (
    <Bleed>
      <Sticky height={360}>
        {(p) => <CriteriaInner p={p} lead={lead} vague={vague} lead2={lead2} open={open} intro={intro} criteria={criteria} close={close} />}
      </Sticky>
    </Bleed>
  );
}
function CriteriaInner({ p, lead, vague, lead2, open, intro, criteria, close }: { p: MotionValue<number>; lead: string; vague: string; lead2: string; open: string; intro: string; criteria: string[]; close: string[] }) {
  const i = useStep(p, criteria.length + 1);
  const idx = Math.max(0, i - 1);
  return (
    <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-[1.2fr_1fr]">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">{lead}</p>
        <p className={`mt-2 font-display text-4xl font-semibold transition-all duration-500 md:text-6xl ${i > 0 ? "text-white/25 line-through decoration-[#f87171]" : "text-white"}`}>“{vague}”</p>
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-[#A48BFF]">{lead2} <span className="text-white">“{open}”</span> · {intro}</p>
        <div className="mt-3 font-display text-2xl font-semibold leading-snug md:text-[34px]">
          <SwapText items={criteria} index={idx} className={i === 0 ? "opacity-30" : ""} />
        </div>
        <ul className="sr-only">{criteria.map((c) => <li key={c}>{c}</li>)}</ul>
        <p className="mt-8 text-sm text-white/70">{close[0]} {close[1]} <span className="text-[#A3E635]">{close[2]}</span></p>
      </div>
      <div className="rounded-[22px] border border-white/10 bg-[#111118] p-5" aria-hidden="true">
        <AnimatePresence mode="wait">
          <motion.div key={idx} initial={{ opacity: 0, y: 12 }} animate={{ opacity: i === 0 ? 0.3 : 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.4 }} className="h-[220px]">
            {idx === 0 && <DemoFilter />}
            {idx === 1 && <DemoError />}
            {idx === 2 && <DemoTable />}
            {idx === 3 && <DemoCta />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
function DemoFilter() {
  return (
    <div>
      <div className="flex items-center gap-2"><span className="rounded-lg bg-[#622FFD] px-3 py-2 text-xs font-semibold text-white">Filtrar</span><span className="h-8 flex-1 rounded-lg bg-white/[0.06]" /></div>
      <motion.div className="mt-6 h-1.5 rounded-full bg-[#A3E635]" initial={{ width: "0%" }} animate={{ width: "38%" }} transition={{ duration: 1.6 }} />
      <p className="mt-2 font-mono text-[10px] text-white/55">ENCONTRADO EM 1,9 S · META &lt; 5 S</p>
      <div className="mt-5 space-y-2">{[0, 1, 2].map((r) => <div key={r} className="h-6 rounded bg-white/[0.04]" />)}</div>
    </div>
  );
}
function DemoError() {
  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-white/10 p-3 font-mono text-xs text-white/40 line-through">Erro 504.</div>
      <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="rounded-xl border border-[#f87171]/50 bg-[#f87171]/10 p-3 text-sm text-white">
        Não conseguimos salvar suas alterações.
        <span className="mt-2 block w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#0d0d12]">Tentar novamente</span>
      </motion.div>
    </div>
  );
}
function DemoTable() {
  return (
    <div className="space-y-1.5">
      {[["Pedido", "Status", "Tempo"], ["#2481", "Novo", "2 min"], ["#2477", "Atrasado", "18 min"], ["#2475", "Em preparo", "9 min"]].map((r, i) => (
        <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.12 }} className={`grid grid-cols-3 rounded-lg px-3 py-2 text-xs ${i === 0 ? "font-mono text-[10px] uppercase text-white/45" : "bg-white/[0.04] text-white/85"}`}>
          {r.map((c) => <span key={c} className={c === "Atrasado" ? "text-[#f87171]" : ""}>{c}</span>)}
        </motion.div>
      ))}
    </div>
  );
}
function DemoCta() {
  return (
    <div className="flex h-full flex-col justify-center gap-3">
      <motion.span initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="w-full rounded-full bg-[#622FFD] py-3 text-center text-sm font-semibold text-white shadow-[0_0_40px_rgba(98,47,253,0.5)]">Confirmar pedido</motion.span>
      <span className="text-center text-xs text-white/45 underline">Salvar rascunho</span>
      <span className="text-center text-xs text-white/35">Cancelar</span>
    </div>
  );
}

/* Forma difusa que vira interface conforme a intenção ganha definição (morph SVG). */
export function SceneIntentMorph({ lines }: { lines: string[] }) {
  return (
    <Bleed tone="violet">
      <Sticky height={240}>
        {(p) => <MorphInner p={p} lines={lines} />}
      </Sticky>
    </Bleed>
  );
}
const BLOB = "M160 40 C230 30 290 90 280 160 C270 230 210 290 150 280 C80 270 30 220 40 150 C50 90 100 50 160 40 Z";
const BOX = "M60 60 C140 60 180 60 260 60 C260 140 260 180 260 260 C180 260 140 260 60 260 C60 180 60 140 60 60 Z";
function MorphInner({ p, lines }: { p: MotionValue<number>; lines: string[] }) {
  const k = useStep(p, lines.length + 1);
  const t = useRange(p, 0.1, 0.8);
  const [d, setD] = useState(BLOB);
  useEffect(() => t.on("change", (v) => setD(lerpPath(BLOB, BOX, v))), [t]);
  useEffect(() => setD(lerpPath(BLOB, BOX, t.get())), [t]);
  const done = k >= lines.length;
  return (
    <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
      <div className="flex flex-col gap-3">
        {lines.map((l, i) => (
          <motion.p key={l} initial={false} animate={{ opacity: i < k ? 1 : 0.4 }} className={`font-display font-semibold leading-tight ${i >= lines.length - 2 ? "text-4xl md:text-6xl" : "text-lg text-white/90 md:text-2xl"} ${i === lines.length - 1 ? "text-[#A3E635]" : ""}`}>{l}</motion.p>
        ))}
      </div>
      <svg viewBox="0 0 320 320" className="mx-auto h-auto w-full max-w-[380px]" aria-hidden="true">
        <defs><filter id="im-blur"><feGaussianBlur stdDeviation={done ? 0 : 6} /></filter></defs>
        <path d={d} fill="rgba(255,255,255,0.16)" stroke="#fff" strokeWidth="2" filter="url(#im-blur)" />
        <motion.g initial={false} animate={{ opacity: done ? 1 : 0 }}>
          <rect x="80" y="80" width="160" height="14" rx="4" fill="#fff" />
          <rect x="80" y="108" width="74" height="60" rx="8" fill="rgba(255,255,255,0.25)" />
          <rect x="166" y="108" width="74" height="60" rx="8" fill="rgba(255,255,255,0.25)" />
          <rect x="80" y="182" width="120" height="8" rx="4" fill="rgba(255,255,255,0.4)" />
          <rect x="80" y="214" width="90" height="26" rx="13" fill={M.g} />
        </motion.g>
      </svg>
    </div>
  );
}
/* Interpola dois caminhos com a mesma estrutura de comandos. */
function lerpPath(a: string, b: string, t: number) {
  const na = a.match(/-?\d+(\.\d+)?/g)!.map(Number);
  const nb = b.match(/-?\d+(\.\d+)?/g)!.map(Number);
  let i = 0;
  return a.replace(/-?\d+(\.\d+)?/g, () => {
    const v = na[i] + (nb[i] - na[i]) * t;
    i++;
    return v.toFixed(1);
  });
}

"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion, type MotionValue } from "framer-motion";
import { Bleed, CountUp, Eyebrow, M, Sticky, useRange, useStep } from "./primitives";

/* Série Métricas, CRO e Landing Pages. Regras da série: nada de número fictício
   apresentado como dado real, nenhuma variante "vencedora" automática, e cada cena
   tem descrição textual equivalente e estado final estático. */

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

/* ─────────────── 16 · Diagnóstico da landing page ─────────────── */

/* A conta da conversão, com os números ilustrativos do próprio texto. */
export function SceneConversionMath() {
  const { ref, k } = useTimeline([300, 1300, 2300]);
  return (
    <Bleed tone="light">
      <div ref={ref} className="container max-w-6xl py-20 md:py-28">
        <Eyebrow color={M.p}>Exemplo ilustrativo do texto</Eyebrow>
        <div className="mt-6 flex flex-wrap items-end gap-x-6 gap-y-4 font-display font-semibold tracking-[-0.03em]">
          <motion.div initial={false} animate={{ opacity: k >= 1 ? 1 : 0.55 }}>
            <p className="text-6xl md:text-8xl">{k >= 1 ? <CountUp to={300} /> : "0"}</p>
            <p className="mt-1 font-sans text-sm font-normal tracking-normal text-[#0A0A0A]/70">leads</p>
          </motion.div>
          <span aria-hidden="true" className="pb-6 text-4xl text-[#0A0A0A]/40 md:text-6xl">÷</span>
          <motion.div initial={false} animate={{ opacity: k >= 2 ? 1 : 0.55 }}>
            <p className="text-6xl md:text-8xl">10.000</p>
            <p className="mt-1 font-sans text-sm font-normal tracking-normal text-[#0A0A0A]/70">sessões</p>
          </motion.div>
          <span aria-hidden="true" className="pb-6 text-4xl text-[#0A0A0A]/40 md:text-6xl">=</span>
          <motion.div initial={false} animate={{ opacity: k >= 3 ? 1 : 0.55, scale: k >= 3 ? 1 : 0.9 }} style={{ transformOrigin: "left bottom" }}>
            <p className="text-6xl text-[#622FFD] md:text-8xl">{k >= 3 ? <CountUp to={3} /> : 0}%</p>
            <p className="mt-1 font-sans text-sm font-normal tracking-normal text-[#0A0A0A]/70">conversão</p>
          </motion.div>
        </div>
        <motion.p initial={false} animate={{ opacity: k >= 3 ? 1 : 0.55 }} className="mt-8 max-w-2xl font-display text-2xl font-semibold leading-snug">
          O número descreve o resultado. <span className="text-[#622FFD]">Não aponta a causa.</span>
        </motion.p>
      </div>
    </Bleed>
  );
}

/* Visitantes atravessam as etapas; em cada uma, parte sai do fluxo. Uma etapa é marcada para investigar. */
export function SceneDiagnosticFlow() {
  return (
    <Bleed>
      <Sticky height={280}>{(p) => <DiagInner p={p} />}</Sticky>
    </Bleed>
  );
}
function DiagInner({ p }: { p: MotionValue<number> }) {
  const STAGES = ["Visita", "Compreensão", "Formulário iniciado", "Conversão"];
  const N = 40;
  const s = useStep(useRange(p, 0.05, 0.85), STAGES.length + 2);
  const reached = (i: number) => (i % 7 === 3 ? 0 : i % 5 === 1 ? 1 : i % 3 === 2 ? 2 : 3);
  const stageX = (k: number) => 10 + k * 26;
  return (
    <div className="container max-w-6xl">
      <p className="sr-only">Pontos representam visitantes avançando por Visita, Compreensão, Formulário iniciado e Conversão. Em cada etapa, parte deles sai do fluxo. A etapa de compreensão é marcada como ponto a investigar, sem afirmar que é sempre o problema.</p>
      <div className="relative h-[300px] w-full md:h-[340px]" aria-hidden="true">
        {STAGES.map((st, k) => (
          <div key={st} className="absolute top-0 h-full" style={{ left: `${stageX(k)}%` }}>
            <div className={`h-full w-px ${s > k ? "bg-white/25" : "bg-white/10"}`} />
            <p className={`absolute -top-1 -translate-x-1/2 whitespace-nowrap text-center font-mono text-[10px] uppercase tracking-[0.12em] md:text-[11px] ${s > k ? "text-white" : "text-white/45"}`}>{st}</p>
            {k === 1 && (
              <motion.span initial={false} animate={{ opacity: s >= STAGES.length ? 1 : 0, y: s >= STAGES.length ? 0 : 6 }} className="absolute bottom-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#fbbf24] px-3 py-1 text-xs font-semibold text-[#0d0d12]">Investigar</motion.span>
            )}
          </div>
        ))}
        {Array.from({ length: N }, (_, i) => {
          const r = reached(i);
          const at = Math.min(s - 1, r);
          const out = s - 1 > r;
          const y = 14 + ((i * 37) % 70);
          return (
            <motion.span key={i} className="absolute h-2.5 w-2.5 rounded-full"
              initial={false}
              animate={{ left: `${stageX(Math.max(0, at)) + (out ? 3 : 0)}%`, top: `${out ? y + 8 : y}%`, opacity: s === 0 ? 0 : out ? 0.18 : 1, backgroundColor: r === 3 && s - 1 >= 3 ? M.g : M.p2 }}
              transition={{ duration: 0.7, ease: M.ease, delay: (i % 10) * 0.02 }} />
          );
        })}
      </div>
      <motion.p initial={false} animate={{ opacity: s >= STAGES.length + 1 ? 1 : 0.35 }} className="mt-6 font-display text-3xl font-semibold md:text-5xl">Onde estamos perdendo pessoas?</motion.p>
    </div>
  );
}

/* As seis etapas da leitura do funil, cada uma com a pergunta que ela responde. */
export function SceneFunnelReading({ steps }: { steps: { t: string; q: string }[] }) {
  const [i, setI] = useState(0);
  return (
    <Bleed tone="light">
      <div className="container grid max-w-6xl grid-cols-1 gap-8 py-20 md:grid-cols-[1fr_1.2fr] md:py-28">
        <ol className="flex flex-col gap-1.5" aria-label="Etapas da jornada">
          {steps.map((s, k) => (
            <li key={s.t}>
              <button type="button" aria-pressed={i === k} onClick={() => setI(k)} onMouseEnter={() => setI(k)}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#622FFD] ${i === k ? "bg-[#0A0A0A] text-white" : "text-[#0A0A0A]/75 hover:bg-black/[0.04]"}`}>
                <span className={`font-mono text-xs ${i === k ? "text-[#A3E635]" : "text-[#622FFD]"}`}>{String(k + 1).padStart(2, "0")}</span>
                <span className="font-display text-lg font-semibold">{s.t}</span>
              </button>
            </li>
          ))}
        </ol>
        <div className="flex flex-col justify-center rounded-[22px] bg-[#622FFD] p-8 text-white" role="tabpanel">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/90">Pergunta da etapa</p>
          <AnimatePresence mode="wait">
            <motion.p key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">{steps[i].q}</motion.p>
          </AnimatePresence>
          <div className="mt-8 flex gap-1.5" aria-hidden="true">{steps.map((_, k) => <span key={k} className={`h-1.5 flex-1 rounded-full ${k <= i ? "bg-[#A3E635]" : "bg-white/25"}`} />)}</div>
        </div>
      </div>
    </Bleed>
  );
}

/* ─────────────── 17 · CRO como ciclo de experimentos ─────────────── */

/* O ciclo de CRO: termina em aprendizado e volta para uma nova hipótese. Sem vencedor automático. */
export function SceneCroLoop() {
  return (
    <Bleed>
      <Sticky height={280}>{(p) => <LoopInner p={p} />}</Sticky>
    </Bleed>
  );
}
function LoopInner({ p }: { p: MotionValue<number> }) {
  const STEPS = ["Observação", "Hipótese", "Variantes A/B", "Resultados", "Aprendizado", "Nova hipótese"];
  const s = useStep(useRange(p, 0, 0.9), STEPS.length);
  const R = 120, cx = 160, cy = 160;
  const pos = (i: number) => { const a = (-90 + (i * 360) / STEPS.length) * (Math.PI / 180); return [Math.round(cx + R * Math.cos(a)), Math.round(cy + R * Math.sin(a))]; };
  return (
    <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
      <div>
        <p className="font-display text-3xl font-semibold leading-tight md:text-5xl">O teste não é o fim. É uma volta do ciclo.</p>
        <p className="mt-4 text-white/75">Observação, hipótese, variantes, resultados e aprendizado. O aprendizado alimenta a próxima hipótese, inclusive quando o resultado é neutro.</p>
        <ol className="sr-only">{STEPS.map((x) => <li key={x}>{x}</li>)}</ol>
      </div>
      <div className="relative mx-auto aspect-square w-full max-w-[380px]" aria-hidden="true">
        <svg viewBox="0 0 320 320" className="absolute inset-0 h-full w-full">
          <circle cx={cx} cy={cy} r={R} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeDasharray="4 8" />
          <motion.circle cx={cx} cy={cy} r={R} fill="none" stroke={M.p2} strokeWidth="2.5" style={{ rotate: -90, transformOrigin: "160px 160px" }} initial={false} animate={{ pathLength: (s + 1) / STEPS.length }} transition={{ duration: 0.6 }} />
        </svg>
        {STEPS.map((st, i) => {
          const [x, y] = pos(i);
          const on = i <= s;
          return (
            <motion.div key={st} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${(x / 320) * 100}%`, top: `${(y / 320) * 100}%` }} initial={false} animate={{ scale: i === s ? 1.08 : 1 }}>
              <span className={`block whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold md:text-sm ${i === s ? "bg-[#A3E635] text-[#0d0d12]" : on ? "bg-[#622FFD] text-white" : "border border-white/20 bg-[#0d0d12] text-white/60"}`}>{st}</span>
            </motion.div>
          );
        })}
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-2">
          {["A", "B"].map((v) => (
            <motion.span key={v} initial={false} animate={{ opacity: s >= 2 ? 1 : 0.25 }} className="flex h-14 w-12 items-center justify-center rounded-lg border border-white/25 bg-white/[0.04] font-display text-xl font-semibold">{v}</motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Matriz de priorização: o leitor muda impacto, confiança e esforço e vê a ordem do backlog mudar. */
export function ScenePriorityMatrix() {
  const [items, setItems] = useState([
    { id: "a", t: "Explicar por que pedimos cada dado", i: 4, c: 4, e: 2 },
    { id: "b", t: "Mudar a cor do CTA", i: 1, c: 1, e: 1 },
    { id: "c", t: "Redesenhar a página inteira", i: 4, c: 2, e: 5 },
    { id: "d", t: "Mostrar o que acontece após o envio", i: 3, c: 3, e: 1 },
  ]);
  const score = (x: { i: number; c: number; e: number }) => Math.round(((x.i * x.c) / x.e) * 10) / 10;
  const sorted = [...items].sort((a, b) => score(b) - score(a));
  const set = (id: string, k: "i" | "c" | "e", v: number) => setItems((l) => l.map((x) => (x.id === id ? { ...x, [k]: v } : x)));
  return (
    <Bleed tone="light">
      <div className="container max-w-6xl py-20 md:py-28">
        <Eyebrow color={M.p}>Experimente priorizar</Eyebrow>
        <p className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight md:text-4xl">Impacto e confiança sobem a prioridade. Esforço desce.</p>
        <p className="mt-3 max-w-2xl text-sm text-[#0A0A0A]/65">Ajuste as notas de 1 a 5. A ordem é só uma forma transparente de organizar o backlog: ela não prova qual experimento vai funcionar. Hipóteses e notas são exemplos.</p>
        <ol className="mt-8 flex flex-col gap-3">
          {sorted.map((x, rank) => (
            <motion.li key={x.id} layout transition={{ duration: 0.4, ease: M.ease }} className="grid grid-cols-1 items-center gap-3 rounded-2xl border border-black/10 bg-white p-4 md:grid-cols-[40px_1fr_auto_auto]">
              <span className="font-display text-2xl font-semibold text-[#622FFD]">{rank + 1}</span>
              <p className="font-semibold">{x.t}</p>
              <div className="flex flex-wrap gap-4 text-xs">
                {(["i", "c", "e"] as const).map((k) => (
                  <label key={k} className="flex items-center gap-2">
                    <span className="w-16 text-[#0A0A0A]/60">{k === "i" ? "Impacto" : k === "c" ? "Confiança" : "Esforço"}</span>
                    <input type="range" min={1} max={5} value={x[k]} onChange={(e) => set(x.id, k, Number(e.target.value))} className="w-20 accent-[#622FFD]" aria-label={`${k === "i" ? "Impacto" : k === "c" ? "Confiança" : "Esforço"} de ${x.t}`} />
                    <span className="w-3 font-mono">{x[k]}</span>
                  </label>
                ))}
              </div>
              <span className="justify-self-start rounded-full bg-[#0A0A0A] px-3 py-1 font-mono text-xs text-white md:justify-self-end">{score(x)}</span>
            </motion.li>
          ))}
        </ol>
      </div>
    </Bleed>
  );
}

/* Espiar o teste cedo: o sinal oscila e parece "vencer" antes de ter evidência suficiente. */
export function ScenePeeking() {
  const { ref, k } = useTimeline([400, 1600, 2800]);
  const path = "M0 60 C 20 20, 40 90, 60 35 S 100 85, 120 50 S 160 70, 180 52 S 230 58, 260 55 S 320 57, 360 56";
  return (
    <Bleed>
      <div ref={ref} className="container grid max-w-6xl grid-cols-1 items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="font-display text-3xl font-semibold leading-tight md:text-5xl">Parar no primeiro sinal positivo engana.</p>
          <p className="mt-4 text-white/75">No começo, com pouco volume, a diferença entre as versões oscila muito. Olhar repetidamente e encerrar quando aparece um número favorável aumenta o risco de concluir algo que a evidência ainda não sustenta.</p>
        </div>
        <div className="rounded-[22px] border border-white/10 bg-[#111118] p-5" aria-hidden="true">
          <svg viewBox="0 0 360 110" className="h-auto w-full">
            <line x1="0" y1="56" x2="360" y2="56" stroke="rgba(255,255,255,0.2)" strokeDasharray="4 6" />
            <motion.path d={path} fill="none" stroke={M.p2} strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: k >= 1 ? 1 : 0 }} transition={{ duration: 2.2, ease: "easeInOut" }} />
            <motion.circle cx="60" cy="35" r="6" fill={M.amb} initial={false} animate={{ scale: k >= 2 ? 1 : 0 }} />
          </svg>
          <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-white/50"><span>pouco volume</span><span>mais volume</span></div>
          <AnimatePresence>
            {k >= 2 && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-sm text-[#fbbf24]">● Aqui parecia “ganhar”. Mais adiante, a diferença se acomodou.</motion.p>}
          </AnimatePresence>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">curva ilustrativa, sem dados reais</p>
        </div>
      </div>
    </Bleed>
  );
}

/* ─────────────── 18 · Promessa, experiência e ação ─────────────── */

/* Message match: no estado desalinhado a corrente quebra; no coerente, flui até o formulário. */
export function SceneMessageMatch() {
  const [ok, setOk] = useState(false);
  const { ref, k } = useTimeline([1500]);
  const [touched, setTouched] = useState(false);
  const aligned = touched ? ok : k >= 1;
  const CHAIN = [
    { l: "Anúncio", a: "Agende uma demonstração gratuita", b: "Agende uma demonstração gratuita" },
    { l: "Título", a: "Consultoria completa para o seu time", b: "Veja o produto funcionando em 30 minutos" },
    { l: "Benefício e prova", a: "Planos a partir de…", b: "O que você vai ver na demonstração" },
    { l: "CTA", a: "Saiba mais", b: "Agendar demonstração" },
    { l: "Formulário", a: "Orçamento, empresa, cargo…", b: "Nome, e-mail e melhor horário" },
  ];
  return (
    <Bleed>
      <div ref={ref} className="container grid max-w-6xl grid-cols-1 items-center gap-10 py-20 md:grid-cols-[1fr_1.1fr] md:py-28">
        <div>
          <Eyebrow>Message match</Eyebrow>
          <p className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">A promessa precisa atravessar a página inteira.</p>
          <p className="mt-4 text-white/75">Compare os dois estados. Coerência não garante uma taxa específica de conversão: ela evita que a pessoa precise se perguntar se chegou ao lugar certo.</p>
          <div role="group" aria-label="Estado da mensagem" className="mt-6 inline-flex rounded-full border border-white/15 p-1">
            {[{ v: false, l: "Mensagem desalinhada" }, { v: true, l: "Mensagem coerente" }].map((o) => (
              <button key={o.l} type="button" aria-pressed={aligned === o.v} onClick={() => { setTouched(true); setOk(o.v); }}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] ${aligned === o.v ? (o.v ? "bg-[#A3E635] text-[#0d0d12]" : "bg-[#f87171] text-[#0d0d12]") : "text-white/70"}`}>{o.l}</button>
            ))}
          </div>
        </div>
        <ol className="relative flex flex-col gap-3">
          {CHAIN.map((c, i) => {
            const broken = !aligned && i > 0 && c.a !== c.b;
            return (
              <li key={c.l} className="relative">
                {i > 0 && (
                  <span aria-hidden="true" className={`absolute -top-3 left-6 h-3 w-0.5 ${broken ? "bg-[repeating-linear-gradient(to_bottom,#f87171_0_3px,transparent_3px_6px)]" : "bg-[#A3E635]"}`} />
                )}
                <motion.div layout className={`rounded-2xl border px-4 py-3 ${broken ? "border-[#f87171]/60 bg-[#f87171]/10" : "border-white/10 bg-white/[0.04]"}`}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/55">{c.l}</p>
                  <AnimatePresence mode="wait">
                    <motion.p key={aligned ? "b" : "a"} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="mt-0.5 text-[15px] text-white">{aligned ? c.b : c.a}</motion.p>
                  </AnimatePresence>
                </motion.div>
              </li>
            );
          })}
        </ol>
        <p className="text-xs text-white/45 md:col-span-2">Textos de exemplo.</p>
      </div>
    </Bleed>
  );
}

/* Contexto mobile: o teclado sobe e cobre o formulário; o ajuste mantém campo e botão visíveis. */
export function SceneMobileKeyboard() {
  const { ref, k } = useTimeline([800, 2000, 3400]);
  const fixed = k >= 3;
  return (
    <Bleed tone="light">
      <div ref={ref} className="container grid max-w-6xl grid-cols-1 items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="font-display text-3xl font-semibold leading-tight md:text-5xl">No celular, o teclado também é parte da interface.</p>
          <p className="mt-4 text-[#0A0A0A]/75">Quando o teclado sobe, ele pode cobrir o campo em foco, a mensagem de erro e o botão. Projetar para mobile é garantir que o fluxo continue visível e fácil de tocar.</p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[#622FFD]">{fixed ? "Ajustado: campo e botão visíveis" : k >= 2 ? "Problema: o teclado cobre o botão" : "Toque no campo…"}</p>
        </div>
        <div className="relative mx-auto h-[460px] w-[236px] overflow-hidden rounded-[36px] border-[8px] border-[#0A0A0A] bg-white" aria-hidden="true">
          <motion.div className="p-4" initial={false} animate={{ y: fixed ? -120 : 0 }} transition={{ duration: 0.6, ease: M.ease }}>
            <p className="font-display text-base font-semibold">Agendar demonstração</p>
            <p className="mt-1 text-[11px] text-[#0A0A0A]/60">Leva menos de 1 minuto</p>
            {["Nome", "E-mail", "Melhor horário"].map((f, i) => (
              <div key={f} className="mt-3">
                <p className="text-[10px] text-[#0A0A0A]/55">{f}</p>
                <div className={`mt-1 h-9 rounded-lg border ${k >= 1 && i === 1 ? "border-[#622FFD] ring-2 ring-[#622FFD]/20" : "border-black/15"}`} />
              </div>
            ))}
            <div className="mt-5 flex h-11 items-center justify-center rounded-full bg-[#622FFD] text-sm font-semibold text-white">Agendar</div>
          </motion.div>
          <motion.div className="absolute inset-x-0 bottom-0 grid grid-cols-10 gap-1 bg-[#d1d5db] p-2" initial={false} animate={{ y: k >= 1 ? 0 : 220 }} transition={{ duration: 0.4, ease: M.ease }} style={{ height: 200 }}>
            {Array.from({ length: 30 }, (_, i) => <span key={i} className="h-9 rounded bg-white" />)}
          </motion.div>
          <motion.span initial={false} animate={{ opacity: k === 2 ? 1 : 0 }} className="absolute left-3 right-3 top-[248px] rounded-lg bg-[#f87171] px-2 py-1 text-center text-[10px] font-semibold text-white">botão escondido atrás do teclado</motion.span>
        </div>
      </div>
    </Bleed>
  );
}

/* Depois do clique: a sequência inteira até a oportunidade, com a etapa escolhida em destaque. */
export function ScenePostClick({ chain }: { chain: string }) {
  const parts = chain.split(" → ");
  return (
    <Bleed>
      <Sticky height={240}>{(p) => <PostInner p={p} parts={parts} chain={chain} />}</Sticky>
    </Bleed>
  );
}
function PostInner({ p, parts, chain }: { p: MotionValue<number>; parts: string[]; chain: string }) {
  const s = useStep(useRange(p, 0, 0.9), parts.length);
  return (
    <div className="container max-w-6xl">
      <p className="font-display text-3xl font-semibold leading-tight md:text-5xl">O clique no CTA não é o fim da história.</p>
      <p className="sr-only">{chain}</p>
      <ol className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7" aria-hidden="true">
        {parts.map((t, i) => (
          <motion.li key={t} initial={false} animate={{ opacity: i <= s ? 1 : 0.35, y: i === s ? -6 : 0 }} transition={{ duration: 0.4 }}
            className={`rounded-2xl border p-3 ${i === s ? "border-[#A3E635] bg-[#A3E635]/10" : i < s ? "border-[#8b6bff]/40 bg-[#622FFD]/10" : "border-white/10"}`}>
            <span className="font-mono text-[10px] text-white/50">{String(i + 1).padStart(2, "0")}</span>
            <p className="mt-1 text-sm font-semibold leading-snug text-white">{t}</p>
          </motion.li>
        ))}
      </ol>
      <p className="mt-8 max-w-2xl text-white/75">Muitos cliques e poucos formulários? Investigue a etapa do meio. Formulários enviados e leads que não avançam? Talvez a promessa esteja atraindo o público errado.</p>
    </div>
  );
}

/* ─────────────── 19 · Métricas em prioridades ─────────────── */

/* Atividade, resultado e qualidade: as métricas caem cada uma no seu grupo. */
export function SceneMetricBuckets() {
  const { ref, k } = useTimeline([400, 1100, 1800]);
  const B = [
    { t: "Atividade", q: "O que as pessoas fazem?", items: ["Visitas", "Cliques", "Início de formulário", "Uso de funcionalidade"], c: M.p2 },
    { t: "Resultado", q: "O que o negócio alcança?", items: ["Conversão", "Ativação", "Receita", "Retenção"], c: M.g },
    { t: "Qualidade e proteção", q: "Há efeito indesejado?", items: ["Leads inválidos", "Cancelamentos", "Erros", "Reclamações"], c: M.amb },
  ];
  return (
    <Bleed>
      <div ref={ref} className="container max-w-6xl py-20 md:py-28">
        <p className="max-w-3xl font-display text-3xl font-semibold leading-tight md:text-5xl">Três perguntas diferentes, três tipos de métrica.</p>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {B.map((b, i) => (
            <motion.div key={b.t} initial={false} animate={{ opacity: i < k ? 1 : 0.35, y: i < k ? 0 : 14 }} transition={{ duration: 0.5, ease: M.ease }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: b.c }}>{b.t}</p>
              <p className="mt-1 text-lg font-semibold text-white">{b.q}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {b.items.map((m, j) => (
                  <motion.li key={m} initial={false} animate={{ opacity: i < k ? 1 : 0, y: i < k ? 0 : -20 }} transition={{ delay: i < k ? j * 0.08 : 0 }} className="rounded-full px-3 py-1 text-sm text-[#0d0d12]" style={{ background: b.c }}>{m}</motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <p className="mt-4 text-xs text-white/45">Não é uma taxonomia universal: é uma forma de evitar celebrar um número sem olhar o resto da jornada.</p>
      </div>
    </Bleed>
  );
}

/* Árvore de métricas: do objetivo às etapas, uma etapa em investigação e hipóteses possíveis. */
export function SceneMetricTree() {
  return (
    <Bleed tone="light">
      <Sticky height={280}>{(p) => <TreeInner p={p} />}</Sticky>
    </Bleed>
  );
}
function TreeInner({ p }: { p: MotionValue<number> }) {
  const s = useStep(useRange(p, 0, 0.9), 5);
  const KIDS = ["Tráfego relevante", "Conversão em lead", "Qualificação", "Reunião"];
  const HYP = ["A oferta atrai o público certo?", "Os campos pedidos fazem sentido?", "O tempo de resposta é adequado?"];
  return (
    <div className="container max-w-6xl">
      <p className="sr-only">O objetivo “Aumentar oportunidades qualificadas” se divide em tráfego relevante, conversão em lead, qualificação e reunião. A qualificação é marcada como ponto de investigação, com três hipóteses possíveis. Conclusão: investigar antes de concluir.</p>
      <div aria-hidden="true">
        <motion.div initial={false} animate={{ opacity: s >= 0 ? 1 : 0 }} className="mx-auto w-fit rounded-2xl bg-[#0A0A0A] px-6 py-4 text-center font-display text-xl font-semibold text-white md:text-2xl">Aumentar oportunidades qualificadas</motion.div>
        <svg viewBox="0 0 400 40" preserveAspectRatio="none" className="mx-auto h-10 w-full max-w-4xl">
          {[50, 150, 250, 350].map((x, i) => <motion.path key={x} d={`M200 0 C200 20, ${x} 20, ${x} 40`} fill="none" stroke={i === 2 && s >= 2 ? M.amb : "#0A0A0A33"} strokeWidth="1.5" vectorEffect="non-scaling-stroke" initial={false} animate={{ pathLength: s >= 1 ? 1 : 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} />)}
        </svg>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
          {KIDS.map((t, i) => (
            <motion.div key={t} initial={false} animate={{ opacity: s >= 1 ? (s >= 2 && i !== 2 ? 0.5 : 1) : 0.2 }} className={`rounded-xl border px-3 py-3 text-center text-sm font-semibold ${s >= 2 && i === 2 ? "border-[#fbbf24] bg-[#fbbf24]/20" : "border-black/10 bg-white"}`}>
              {t}
              {s >= 2 && i === 2 && <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.14em] text-[#b45309]">investigar</span>}
            </motion.div>
          ))}
        </div>
        <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-2 md:grid-cols-3">
          {HYP.map((h, i) => <motion.p key={h} initial={false} animate={{ opacity: s >= 3 ? 1 : 0, y: s >= 3 ? 0 : 8 }} transition={{ delay: s >= 3 ? i * 0.12 : 0 }} className="rounded-xl border border-dashed border-[#622FFD]/50 px-3 py-2 text-center text-sm text-[#0A0A0A]/80">{h}</motion.p>)}
        </div>
        <motion.p initial={false} animate={{ opacity: s >= 4 ? 1 : 0.2 }} className="mt-8 text-center font-display text-3xl font-semibold text-[#622FFD] md:text-5xl">Investigar antes de concluir.</motion.p>
      </div>
    </div>
  );
}

/* Do sinal à próxima ação: quatro cartas que se acendem em sequência. */
export function SceneSignalToAction({ cards, close }: { cards: { k: string; v: string }[]; close: string }) {
  const { ref, k } = useTimeline(cards.map((_, i) => 300 + i * 800));
  return (
    <Bleed>
      <div ref={ref} className="container max-w-6xl py-20 md:py-28">
        <ol className="grid grid-cols-1 gap-3 md:grid-cols-4">
          {cards.map((c, i) => (
            <motion.li key={c.k} initial={false} animate={{ opacity: i < k ? 1 : 0.35, y: i < k ? 0 : 12 }} transition={{ duration: 0.5, ease: M.ease }}
              className={`relative rounded-2xl border p-5 ${i === cards.length - 1 && i < k ? "border-[#A3E635] bg-[#A3E635]/10" : "border-white/12 bg-white/[0.03]"}`}>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#A48BFF]">{String(i + 1).padStart(2, "0")} · {c.k}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-white">{c.v}</p>
              {i < cards.length - 1 && <span aria-hidden="true" className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-white/30 md:block">→</span>}
            </motion.li>
          ))}
        </ol>
        <p className="mt-8 font-display text-2xl font-semibold md:text-3xl">{close}</p>
      </div>
    </Bleed>
  );
}

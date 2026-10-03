"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { Bleed, CountUp, Eyebrow, KineticQuote, M, SceneRail, ScrollWords, Sticky, useRange, useStep } from "./primitives";

/* ─────────────── POST 1 · Tipografia cinética ─────────────── */

/* "Pedir não é especificar": o pedido vago é riscado e o pedido especificado
   acende palavra por palavra, com as decisões destacadas. */
export function SceneSpecExpand({ intro, vague, joiner, spec }: { intro: string; vague: string; joiner: string; spec: string }) {
  return (
    <Bleed>
      <Sticky height={320}>
        {(p) => <SpecExpandInner p={p} intro={intro} vague={vague} joiner={joiner} spec={spec} />}
      </Sticky>
    </Bleed>
  );
}
function SpecExpandInner({ p, intro, vague, joiner, spec }: { p: MotionValue<number>; intro: string; vague: string; joiner: string; spec: string }) {
  const strike = useTransform(useRange(p, 0.12, 0.26), [0, 1], ["0%", "100%"]);
  const vagueOp = useTransform(p, [0.26, 0.34], [1, 0.35]);
  const vagueScale = useTransform(p, [0.26, 0.36], [1, 0.62]);
  return (
    <div className="container max-w-5xl">
      <Eyebrow>{intro}</Eyebrow>
      <motion.div style={{ opacity: vagueOp, scale: vagueScale, transformOrigin: "left center" }} className="relative mt-6 inline-block">
        <p className="font-display text-[34px] font-semibold leading-tight md:text-[64px]">“{vague}”</p>
        <motion.span aria-hidden="true" className="absolute left-0 top-1/2 h-[3px] bg-[#f87171] md:h-[5px]" style={{ width: strike }} />
      </motion.div>
      <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">{joiner}</p>
      <ScrollWords
        p={p}
        from={0.34}
        to={0.92}
        text={`“${spec}”`}
        marks={["gestores", "SaaS B2B", "receita, churn e conversão", "aparecer primeiro", "desktop", "leitura rápida", "comparar períodos", "Evite gráficos decorativos", "design system existente"]}
        className="mt-3 max-w-4xl font-display text-[19px] leading-[1.45] md:text-[30px]"
      />
      <div className="mt-10"><SceneRail p={p} labels={["Pedido", "Ambiguidade", "Especificação"]} /></div>
    </div>
  );
}

/* "Tamanho não é precisão": 1.500 palavras confusas contra 150 precisas. */
export function SceneSizeVsPrecision({ a, b, c, d }: { a: string; b: string; c: string; d: string }) {
  return (
    <>
      <Bleed tone="light">
        <div className="container grid max-w-5xl grid-cols-1 gap-10 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="font-display text-[72px] font-semibold leading-none tracking-tight text-[#0A0A0A]/25 md:text-[120px]"><CountUp to={1500} /></p>
            <p className="mt-4 max-w-xs text-lg text-[#0A0A0A]/70">{a}</p>
            <div aria-hidden="true" className="mt-6 flex flex-wrap gap-1">
              {Array.from({ length: 60 }, (_, i) => <span key={i} className="h-1.5 rounded-full bg-[#0A0A0A]/15" style={{ width: 10 + ((i * 37) % 40) }} />)}
            </div>
          </div>
          <div>
            <p className="font-display text-[72px] font-semibold leading-none tracking-tight text-[#622FFD] md:text-[120px]"><CountUp to={150} /></p>
            <p className="mt-4 max-w-xs text-lg text-[#0A0A0A]/80">{b}</p>
            <div aria-hidden="true" className="mt-6 flex flex-wrap gap-1">
              {Array.from({ length: 6 }, (_, i) => <span key={i} className="h-1.5 rounded-full bg-[#622FFD]" style={{ width: 28 + i * 6 }} />)}
            </div>
          </div>
        </div>
      </Bleed>
      <KineticQuote lines={[c, d]} emphasis={[1]} />
    </>
  );
}

/* "O novo processo": a cadeia de antes se reorganiza na cadeia de agora. */
export function SceneProcessMorph({ beforeLabel, before, afterLabel, after }: { beforeLabel: string; before: string; afterLabel: string; after: string }) {
  const B = before.split(" → ");
  const A = after.split(" → ");
  return (
    <Bleed>
      <Sticky height={240}>
        {(p) => <ProcessInner p={p} beforeLabel={beforeLabel} afterLabel={afterLabel} B={B} A={A} />}
      </Sticky>
    </Bleed>
  );
}
function ProcessInner({ p, beforeLabel, afterLabel, B, A }: { p: MotionValue<number>; beforeLabel: string; afterLabel: string; B: string[]; A: string[] }) {
  const step = useStep(p, 3);
  const NEW = new Set(["Contexto", "Prompt", "Crítica"]);
  return (
    <div className="container max-w-5xl">
      <Eyebrow>{beforeLabel}</Eyebrow>
      <ol className="mt-4 flex flex-wrap items-center gap-2">
        {B.map((s, i) => {
          const gone = step >= 1 && !A.includes(s);
          return (
            <motion.li key={s} initial={false} animate={{ opacity: gone ? 0.25 : 1, filter: gone ? "blur(1px)" : "blur(0px)" }} className="flex items-center gap-2">
              <span className={`rounded-full border px-4 py-2 text-sm md:text-base ${gone ? "border-white/10 text-white/50 line-through" : "border-white/20 text-white"}`}>{s}</span>
              {i < B.length - 1 && <span aria-hidden="true" className="text-white/30">→</span>}
            </motion.li>
          );
        })}
      </ol>
      <div className="mt-14"><Eyebrow color={M.g}>{afterLabel}</Eyebrow></div>
      <ol className="mt-4 flex flex-wrap items-center gap-2">
        {A.map((s, i) => {
          const on = step >= 2 || (step >= 1 && i < 3);
          const fresh = NEW.has(s);
          return (
            <motion.li key={s} initial={false} animate={{ opacity: on ? 1 : 0, y: on ? 0 : 16 }} transition={{ duration: 0.5, ease: M.ease, delay: on ? i * 0.07 : 0 }} className="flex items-center gap-2">
              <span className={`rounded-full px-4 py-2 text-sm md:text-base ${fresh ? "bg-[#622FFD] text-white shadow-[0_0_40px_rgba(98,47,253,0.55)]" : "border border-white/20 text-white"}`}>{s}</span>
              {i < A.length - 1 && <span aria-hidden="true" className="text-[#A3E635]">→</span>}
            </motion.li>
          );
        })}
      </ol>
      <div className="mt-12"><SceneRail p={p} labels={["Antes", "O que sai", "O que entra"]} /></div>
    </div>
  );
}

/* ─────────────── POST 2 · SVG, diagramas e dados ─────────────── */

/* Prompt curto contra prompt com contexto: cada cláusula elimina possibilidades
   (o campo de pontos encolhe). Contagem de palavras é real, do próprio texto. */
export function ScenePossibilitySpace({ shortP, longP, notes }: { shortP: string; longP: string; notes: [string, string, string, string, string, string] }) {
  return (
    <Bleed>
      <Sticky height={320}>
        {(p) => <SpaceInner p={p} shortP={shortP} longP={longP} notes={notes} />}
      </Sticky>
    </Bleed>
  );
}
function SpaceInner({ p, shortP, longP, notes }: { p: MotionValue<number>; shortP: string; longP: string; notes: string[] }) {
  const clauses = longP.split(". ").map((c, i, a) => (i < a.length - 1 ? `${c}.` : c));
  const step = useStep(useRange(p, 0.18, 0.95), clauses.length + 1);
  const words = (s: string) => s.split(/\s+/).length;
  const N = 96;
  const alive = Math.max(3, Math.round(N * Math.pow(0.5, step)));
  return (
    <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1fr]">
      <div>
        <Eyebrow>{notes[0]}</Eyebrow>
        <blockquote className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-[15px] text-white/70">
          “{shortP}” <span className="ml-2 font-mono text-[11px] text-white/40">{words(shortP)} palavras</span>
        </blockquote>
        <p className="mt-2 text-sm text-white/55">{notes[1]} {notes[2]}</p>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">{notes[3]}</p>
        <blockquote className="mt-3 rounded-2xl border border-[#8b6bff]/40 bg-[#622FFD]/10 p-4 text-[15px] leading-relaxed">
          {clauses.map((c, i) => (
            <span key={i} className={`transition-colors duration-500 ${i < step ? "text-white" : "text-white/30"}`}>{i === 0 ? "“" : ""}{c}{i === clauses.length - 1 ? "”" : ""} </span>
          ))}
          <span className="ml-1 font-mono text-[11px] text-white/40">{words(longP)} palavras</span>
        </blockquote>
        <p className="mt-2 text-sm text-white/70">{notes[4]} <span className="text-[#A3E635]">{notes[5]}</span></p>
      </div>
      <div>
        <svg viewBox="0 0 320 320" className="h-auto w-full" role="img" aria-label="Campo de possibilidades que encolhe a cada informação do prompt">
          {Array.from({ length: N }, (_, i) => {
            const x = 20 + (i % 12) * 25.5, y = 20 + Math.floor(i / 12) * 38;
            const keep = i < alive;
            const cx = keep ? 160 + ((i % 12) - 5.5) * (alive / N) * 25 : x;
            const cy = keep ? 160 + (Math.floor(i / 12) - 3.5) * (alive / N) * 38 : y;
            return <motion.circle key={i} r={keep && alive <= 3 ? 9 : 5} initial={false} animate={{ cx, cy, opacity: keep ? 1 : 0.08, fill: keep && alive <= 3 ? M.g : keep ? M.p2 : "#ffffff" }} transition={{ duration: 0.7, ease: M.ease }} />;
          })}
        </svg>
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">possibilidades em aberto · <span className="text-white">{alive}</span></p>
      </div>
    </div>
  );
}

/* O prompt que tenta fazer tudo: a nuvem de pedidos se organiza em 4 decisões. */
export function SceneDecisionSequence({ intro, overloaded, outro, steps, close }: { intro: string; overloaded: string; outro: [string, string, string, string]; steps: { title: string; prompt: string }[]; close: [string, string] }) {
  return (
    <Bleed>
      <Sticky height={340}>
        {(p) => <DecisionInner p={p} intro={intro} overloaded={overloaded} outro={outro} steps={steps} close={close} />}
      </Sticky>
    </Bleed>
  );
}
function DecisionInner({ p, intro, overloaded, outro, steps, close }: { p: MotionValue<number>; intro: string; overloaded: string; outro: string[]; steps: { title: string; prompt: string }[]; close: string[] }) {
  const items = overloaded.replace(/^Crie o produto completo, com /, "").replace(/\.\.\.$/, "").split(", ");
  const phase = useStep(p, 6); // 0 nuvem, 1 caos, 2..5 passos
  const line = useTransform(useRange(p, 0.34, 0.95), [0, 1], [0, 1]);
  return (
    <div className="container max-w-6xl">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_1fr]">
        <div>
          <Eyebrow>{intro}</Eyebrow>
          <p className="mt-3 text-[15px] leading-relaxed text-white/70">“{overloaded}”</p>
          <div className="relative mt-6 h-[180px] md:h-[240px]" aria-hidden="true">
            {items.map((it, i) => {
              const ang = (i / items.length) * Math.PI * 2;
              const chaos = phase >= 1 && phase < 2;
              return (
                <motion.span key={it} className="absolute left-1/2 top-1/2 whitespace-nowrap rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs text-white/80"
                  initial={false}
                  animate={{ x: Math.cos(ang) * (chaos ? 150 : 110) - 40 + (chaos ? Math.sin(i * 7) * 30 : 0), y: Math.sin(ang) * (chaos ? 95 : 70) - 10, rotate: chaos ? (i % 2 ? 8 : -8) : 0, opacity: phase >= 2 ? 0.15 : 1, borderColor: chaos ? "rgba(248,113,113,0.6)" : "rgba(255,255,255,0.15)" }}
                  transition={{ duration: 0.7, ease: M.ease }}>
                  {it}
                </motion.span>
              );
            })}
          </div>
          <p className="mt-2 text-sm text-white/60">{outro[0]} {outro[1]} <span className="text-[#f87171]">{outro[2]}</span></p>
          <p className="mt-2 text-sm text-white/60">{outro[3]}</p>
        </div>
        <div className="relative pl-8">
          <svg className="absolute left-2 top-2 h-[calc(100%-16px)] w-4" viewBox="0 0 16 100" preserveAspectRatio="none" aria-hidden="true">
            <line x1="8" y1="0" x2="8" y2="100" stroke="rgba(255,255,255,0.12)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            <motion.line x1="8" y1="0" x2="8" y2="100" stroke={M.g} strokeWidth="2" vectorEffect="non-scaling-stroke" style={{ pathLength: line }} />
          </svg>
          <ol className="flex flex-col gap-4">
            {steps.map((s, i) => {
              const on = phase >= i + 2;
              return (
                <motion.li key={s.title} initial={false} animate={{ opacity: on ? 1 : 0.25, x: on ? 0 : 10 }} transition={{ duration: 0.5, ease: M.ease }} className={`rounded-2xl border p-4 ${on ? "border-[#8b6bff]/50 bg-[#622FFD]/10" : "border-white/10"}`}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#A3E635]">{s.title}</p>
                  <p className="mt-1.5 text-[15px] text-white/85">{s.prompt}</p>
                </motion.li>
              );
            })}
          </ol>
          <p className="mt-5 text-sm text-white/70">{close[0]} <span className="text-white/45">{close[1]}</span></p>
        </div>
      </div>
      <div className="mt-10"><SceneRail p={p} labels={["Tudo de uma vez", "Caos", "Estrutura", "Experiência", "Comportamento", "Interface"]} /></div>
    </div>
  );
}

export { KineticQuote };

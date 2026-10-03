"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion, useTransform, type MotionValue } from "framer-motion";
import { Bleed, Eyebrow, M, Sticky, useRange, useStep } from "./primitives";

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

const HAND = "'Segoe Print','Bradley Hand','Comic Sans MS',cursive";

/* ─────────────── POST 17 · Whiteboard challenge: quadro branco ao vivo ─────────────── */

/* O raciocínio sendo desenhado no quadro, traço a traço, conforme a leitura. */
export function SceneWhiteboard({ title, note }: { title: string; note: string }) {
  return (
    <Bleed tone="light">
      <Sticky height={260}>{(p) => <BoardInner p={p} title={title} note={note} />}</Sticky>
    </Bleed>
  );
}
function BoardInner({ p, title, note }: { p: MotionValue<number>; title: string; note: string }) {
  const NODES = [
    { x: 70, y: 70, t: "Problema" },
    { x: 250, y: 70, t: "Quem usa?" },
    { x: 430, y: 70, t: "Restrições" },
    { x: 160, y: 200, t: "Fluxo" },
    { x: 340, y: 200, t: "Ideia" },
    { x: 520, y: 200, t: "Trade-offs" },
  ];
  const EDGES = [[0, 1], [1, 2], [1, 3], [3, 4], [4, 5], [2, 5]];
  const s = useStep(useRange(p, 0.05, 0.9), NODES.length + 1);
  return (
    <div className="container grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-[0.8fr_1.2fr]">
      <div>
        <Eyebrow color={M.p}>Quadro ao vivo</Eyebrow>
        <p className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">{title}</p>
        <p className="mt-4 text-[15px] text-[#0A0A0A]/70">{note}</p>
      </div>
      <div className="rounded-[18px] border-[10px] border-[#d4d4d8] bg-white p-3 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.3)]" aria-hidden="true">
        <svg viewBox="0 0 600 270" className="h-auto w-full">
          {EDGES.map(([a, b], i) => {
            const on = s > Math.max(a, b);
            return <motion.path key={i} d={`M${NODES[a].x + 40} ${NODES[a].y} Q ${(NODES[a].x + NODES[b].x) / 2 + 20} ${(NODES[a].y + NODES[b].y) / 2 - 18} ${NODES[b].x - 10} ${NODES[b].y}`} fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" initial={false} animate={{ pathLength: on ? 1 : 0 }} transition={{ duration: 0.6 }} />;
          })}
          {NODES.map((n, i) => {
            const on = i < s;
            return (
              <g key={n.t}>
                <motion.path d={`M${n.x - 50} ${n.y - 22} C ${n.x - 20} ${n.y - 27}, ${n.x + 30} ${n.y - 25}, ${n.x + 52} ${n.y - 20} C ${n.x + 56} ${n.y}, ${n.x + 53} ${n.y + 16}, ${n.x + 48} ${n.y + 22} C ${n.x + 10} ${n.y + 26}, ${n.x - 30} ${n.y + 24}, ${n.x - 52} ${n.y + 20} C ${n.x - 56} ${n.y + 2}, ${n.x - 54} ${n.y - 12}, ${n.x - 50} ${n.y - 22}`}
                  fill="none" stroke={i === NODES.length - 1 ? "#16a34a" : "#0A0A0A"} strokeWidth="2.5" strokeLinecap="round" initial={false} animate={{ pathLength: on ? 1 : 0 }} transition={{ duration: 0.7 }} />
                <motion.text x={n.x} y={n.y + 6} textAnchor="middle" fontSize="17" fontFamily={HAND} fill="#0A0A0A" initial={false} animate={{ opacity: on ? 1 : 0 }} transition={{ delay: on ? 0.4 : 0 }}>{n.t}</motion.text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

/* As dicas aparecem como notas no quadro enquanto o relógio da entrevista corre. */
export function SceneTimerTips({ lead, tips }: { lead: string; tips: string[] }) {
  const { ref, k } = useTimeline(tips.map((_, i) => 500 + i * 900));
  const reduce = useReducedMotion();
  const [sec, setSec] = useState(45 * 60);
  useEffect(() => {
    if (k === 0 || reduce) return;
    const id = setInterval(() => setSec((v) => Math.max(0, v - 37)), 60);
    return () => clearInterval(id);
  }, [k > 0, reduce]); // eslint-disable-line react-hooks/exhaustive-deps
  const mm = String(Math.floor(sec / 60)).padStart(2, "0"), ss = String(sec % 60).padStart(2, "0");
  return (
    <Bleed>
      <div ref={ref} className="container max-w-6xl py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <p className="max-w-xl text-white/80">{lead}</p>
          <p className="font-mono text-5xl font-bold tabular-nums text-[#fbbf24] md:text-7xl" aria-hidden="true">{mm}:{ss}</p>
        </div>
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((t, i) => {
            const [h, ...rest] = t.split(": ");
            return (
              <motion.li key={t} initial={false} animate={{ opacity: i < k ? 1 : 0.4, y: i < k ? 0 : 14, rotate: i < k ? (i % 2 ? 1 : -1) : 0 }} transition={{ duration: 0.5, ease: M.ease }}
                className="rounded-md bg-[#fde68a] p-4 text-[#0A0A0A] shadow-[0_12px_30px_-12px_rgba(0,0,0,0.5)]">
                <p className="text-lg font-bold" style={{ fontFamily: HAND }}>{h}</p>
                {rest.length > 0 && <p className="mt-1 text-sm leading-relaxed">{rest.join(": ")}</p>}
              </motion.li>
            );
          })}
        </ul>
        <p className="mt-3 text-xs text-white/45">Relógio ilustrativo.</p>
      </div>
    </Bleed>
  );
}

/* Pensar em voz alta: as frases do texto aparecem como fala, com o microfone pulsando. */
export function SceneThinkAloud({ lines }: { lines: string[] }) {
  const { ref, k } = useTimeline(lines.map((_, i) => 400 + i * 1100));
  return (
    <Bleed tone="violet">
      <div ref={ref} className="container flex max-w-5xl flex-col gap-4 py-20 md:py-28">
        <div className="flex items-center gap-3" aria-hidden="true">
          <motion.span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl" animate={{ boxShadow: ["0 0 0 0 rgba(163,230,53,0.6)", "0 0 0 18px rgba(163,230,53,0)"] }} transition={{ duration: 1.4, repeat: Infinity }}>🎙️</motion.span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/80">pensando em voz alta</span>
        </div>
        {lines.map((l, i) => (
          <motion.p key={l} initial={false} animate={{ opacity: i < k ? 1 : 0.4, x: i < k ? 0 : -10 }} transition={{ duration: 0.5 }}
            className={`max-w-3xl rounded-3xl rounded-tl-md px-5 py-4 text-lg leading-relaxed md:text-2xl ${i === lines.length - 1 ? "bg-[#A3E635] font-semibold text-[#0d0d12]" : "bg-white/12 text-white"}`}>
            {l}
          </motion.p>
        ))}
      </div>
    </Bleed>
  );
}

/* ─────────────── POST 18 · Design além do design: engrenagens ─────────────── */

function Gear({ cx, cy, r, teeth, rot, color, label }: { cx: number; cy: number; r: number; teeth: number; rot: MotionValue<number>; color: string; label: string }) {
  const d = Array.from({ length: teeth * 2 }, (_, i) => {
    const a = (i / (teeth * 2)) * Math.PI * 2;
    const rr = i % 2 ? r : r + 10;
    return `${i ? "L" : "M"}${Math.round((cx + Math.cos(a) * rr) * 10) / 10} ${Math.round((cy + Math.sin(a) * rr) * 10) / 10}`;
  }).join(" ") + " Z";
  return (
    <g>
      <motion.path d={d} fill={color} style={{ rotate: rot, transformOrigin: `${cx}px ${cy}px` }} />
      <circle cx={cx} cy={cy} r={r - 14} fill="#0d0d12" />
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="11" fontFamily="ui-monospace" fill="#fff">{label}</text>
    </g>
  );
}
/* Design move uso, uso move conversão, conversão move receita. */
export function SceneGears({ lead, labels }: { lead: string; labels: string[] }) {
  return (
    <Bleed>
      <Sticky height={220}>{(p) => <GearsInner p={p} lead={lead} labels={labels} />}</Sticky>
    </Bleed>
  );
}
function GearsInner({ p, lead, labels }: { p: MotionValue<number>; lead: string; labels: string[] }) {
  const r1 = useTransform(p, [0, 1], [0, 360]);
  const r2 = useTransform(p, [0, 1], [0, -480]);
  const r3 = useTransform(p, [0, 1], [0, 360]);
  const r4 = useTransform(p, [0, 1], [0, -540]);
  const s = useStep(p, labels.length + 1);
  return (
    <div className="container grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2">
      <div>
        <p className="font-display text-2xl font-semibold leading-snug md:text-4xl">{lead}</p>
        <ol className="mt-6 flex flex-wrap items-center gap-2">
          {labels.map((l, i) => (
            <li key={l} className="flex items-center gap-2">
              <span className={`rounded-full px-3 py-1.5 text-sm font-semibold transition-colors duration-500 ${i < s ? (i === labels.length - 1 ? "bg-[#A3E635] text-[#0d0d12]" : "bg-[#622FFD] text-white") : "border border-white/25 text-white/70"}`}>{l}</span>
              {i < labels.length - 1 && <span className="text-white/40">→</span>}
            </li>
          ))}
        </ol>
      </div>
      <svg viewBox="0 0 420 300" className="mx-auto w-full max-w-[460px]" aria-hidden="true">
        <Gear cx={90} cy={110} r={60} teeth={12} rot={r1} color={M.p} label={labels[0]?.toUpperCase()} />
        <Gear cx={200} cy={190} r={46} teeth={9} rot={r2} color={M.p2} label={labels[1]?.toUpperCase()} />
        <Gear cx={300} cy={100} r={56} teeth={11} rot={r3} color={M.lilac} label={labels[2]?.toUpperCase()} />
        <Gear cx={360} cy={220} r={36} teeth={7} rot={r4} color={M.g} label={labels[3]?.toUpperCase()} />
      </svg>
    </div>
  );
}

/* Casos clássicos como cartas que viram: o nome na frente, a estratégia atrás. */
export function SceneFlipCases({ lead, items }: { lead: string; items: string[] }) {
  const { ref, k } = useTimeline(items.map((_, i) => 600 + i * 700));
  return (
    <Bleed tone="light">
      <div ref={ref} className="container max-w-6xl py-20 md:py-28">
        <p className="text-[#0A0A0A]/75">{lead}</p>
        <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3 [perspective:1400px]">
          {items.map((t, i) => {
            const [name, ...rest] = t.split(": ");
            const flipped = i < k;
            return (
              <li key={t} className="relative min-h-[260px]">
                <motion.div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-[#0A0A0A] [backface-visibility:hidden]" initial={false} animate={{ rotateY: flipped ? 180 : 0 }} transition={{ duration: 0.8, ease: M.ease }} aria-hidden="true">
                  <span className="font-display text-4xl font-semibold text-white">{name}</span>
                </motion.div>
                <motion.div className="absolute inset-0 overflow-auto rounded-2xl border border-black/10 bg-white p-5 [backface-visibility:hidden]" initial={false} animate={{ rotateY: flipped ? 0 : -180 }} transition={{ duration: 0.8, ease: M.ease }}>
                  <p className="font-display text-xl font-semibold text-[#622FFD]">{name}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#0A0A0A]/85">{rest.join(": ")}</p>
                </motion.div>
              </li>
            );
          })}
        </ul>
      </div>
    </Bleed>
  );
}

/* KPIs como medidores: o ponteiro sobe enquanto o texto explica o porquê. */
export function SceneKpiDials({ lead, items }: { lead: string; items: string[] }) {
  const { ref, k } = useTimeline(items.map((_, i) => 400 + i * 450));
  return (
    <Bleed>
      <div ref={ref} className="container max-w-6xl py-20 md:py-28">
        <p className="text-white/80">{lead}</p>
        <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((t, i) => {
            const [name, ...rest] = t.split(" (");
            const on = i < k;
            return (
              <li key={t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <svg viewBox="0 0 120 70" className="w-full max-w-[160px]" aria-hidden="true">
                  <path d="M10 62 A50 50 0 0 1 110 62" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="10" strokeLinecap="round" />
                  <motion.path d="M10 62 A50 50 0 0 1 110 62" fill="none" stroke={i % 2 ? M.p2 : M.g} strokeWidth="10" strokeLinecap="round" initial={false} animate={{ pathLength: on ? 0.78 : 0.08 }} transition={{ duration: 1, ease: M.ease }} />
                  <motion.line x1="60" y1="62" x2="60" y2="20" stroke="#fff" strokeWidth="3" strokeLinecap="round" style={{ transformOrigin: "60px 62px" }} initial={false} animate={{ rotate: on ? 50 : -80 }} transition={{ duration: 1, ease: M.ease }} />
                </svg>
                <p className="mt-3 font-display text-xl font-semibold">{name}</p>
                {rest.length > 0 && <p className="mt-1 text-sm text-white/70">({rest.join(" (")}</p>}
              </li>
            );
          })}
        </ul>
        <p className="mt-4 text-xs text-white/45">Medidores ilustrativos; os exemplos são do texto.</p>
      </div>
    </Bleed>
  );
}

/* ─────────────── POST 19 · IA na interface: a tela que se reorganiza ─────────────── */

/* Uma tela de streaming que reordena as fileiras conforme o que a pessoa assiste. */
export function SceneAdaptiveRows({ title, note }: { title: string; note: string }) {
  const ROWS0 = ["Em alta", "Documentários", "Comédia", "Ficção científica"];
  const ROWS1 = ["Ficção científica", "Porque você assistiu", "Em alta", "Comédia"];
  const { ref, k } = useTimeline([1200, 2600]);
  const rows = k >= 2 ? ROWS1 : ROWS0;
  return (
    <Bleed>
      <div ref={ref} className="container grid max-w-6xl grid-cols-1 items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <div>
          <Eyebrow>Interface adaptativa</Eyebrow>
          <p className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">{title}</p>
          <p className="mt-4 text-white/75">{note}</p>
          <p className="mt-4 font-mono text-xs text-white/50">{k >= 1 ? "▶ assistiu: 3 títulos de ficção científica" : "…"}</p>
        </div>
        <div className="rounded-[22px] border border-white/10 bg-[#111118] p-4" aria-hidden="true">
          {rows.map((r) => (
            <motion.div key={r} layout transition={{ duration: 0.7, ease: M.ease }} className="mb-3">
              <p className={`mb-1.5 text-xs font-semibold ${r === "Porque você assistiu" || r === "Ficção científica" ? "text-[#A3E635]" : "text-white/70"}`}>{r}</p>
              <div className="flex gap-1.5">{[0, 1, 2, 3, 4].map((n) => <div key={n} className={`aspect-[2/3] flex-1 rounded-md ${r === "Ficção científica" ? "bg-[#622FFD]/50" : r === "Porque você assistiu" ? "bg-[#A3E635]/30" : "bg-white/[0.08]"}`} />)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Bleed>
  );
}

/* Da dor à solução: a página detecta o abandono e o botão sobe para onde as pessoas olham. */
export function SceneLiveFix({ title, steps }: { title: string; steps: string[] }) {
  return (
    <Bleed tone="light">
      <Sticky height={240}>{(p) => <FixInner p={p} title={title} steps={steps} />}</Sticky>
    </Bleed>
  );
}
function FixInner({ p, title, steps }: { p: MotionValue<number>; title: string; steps: string[] }) {
  const s = useStep(p, 4);
  return (
    <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
      <div>
        <p className="font-display text-3xl font-semibold leading-tight md:text-4xl">{title}</p>
        <ol className="mt-6 flex flex-col gap-2">
          {steps.map((t, i) => <li key={t} className={`flex items-center gap-3 text-[15px] transition-opacity duration-500 ${i <= s ? "opacity-100" : "opacity-40"}`}><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#622FFD] font-mono text-[11px] text-white">{i + 1}</span>{t}</li>)}
        </ol>
        <p className="mt-4 text-xs text-[#0A0A0A]/50">Exemplo ilustrativo.</p>
      </div>
      <div className="relative h-[340px] overflow-hidden rounded-[22px] border border-black/10 bg-white p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]" aria-hidden="true">
        <div className="h-3 w-1/2 rounded bg-[#0A0A0A]/80" />
        <div className="mt-2 h-2 w-3/4 rounded bg-[#0A0A0A]/20" />
        <motion.div layout className="mt-4 h-20 rounded-xl bg-[#0A0A0A]/[0.06]" />
        <motion.div layout className="mt-3 space-y-1.5">{[0, 1, 2].map((n) => <div key={n} className="h-2 rounded bg-[#0A0A0A]/12" />)}</motion.div>
        <motion.span layout className={`absolute left-5 rounded-full bg-[#622FFD] px-5 py-2.5 text-sm font-semibold text-white ${s >= 2 ? "top-[78px]" : "top-[290px]"}`}>Começar agora</motion.span>
        <motion.div className="pointer-events-none absolute left-0 right-0 top-0 h-1/2 bg-gradient-to-b from-[#f87171]/35 to-transparent" initial={false} animate={{ opacity: s === 1 ? 1 : 0 }} />
        <motion.div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#93c5fd]/40 to-transparent" initial={false} animate={{ opacity: s === 1 ? 1 : 0 }} />
        <AnimatePresence>
          {s >= 1 && s < 3 && (
            <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute right-4 top-4 max-w-[180px] rounded-xl bg-[#0d0d12] px-3 py-2 text-xs text-white">
              {s === 1 ? "A maioria para de rolar antes do botão." : "Sugestão: subir o botão para a primeira dobra."}
            </motion.p>
          )}
        </AnimatePresence>
        {s >= 3 && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute bottom-4 right-4 rounded-full bg-[#A3E635] px-3 py-1 text-xs font-semibold text-[#0d0d12]">Teste A/B no ar</motion.p>}
      </div>
    </div>
  );
}

/* Prevendo a dúvida: o checkout oferece ajuda antes da pessoa travar. */
export function SceneProactiveHelp({ title, note }: { title: string; note: string }) {
  const { ref, k } = useTimeline([600, 1800, 3000]);
  return (
    <Bleed>
      <div ref={ref} className="container grid max-w-6xl grid-cols-1 items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="font-display text-3xl font-semibold leading-tight md:text-4xl">{title}</p>
          <p className="mt-4 text-white/75">{note}</p>
        </div>
        <div className="rounded-[22px] border border-white/10 bg-[#111118] p-5" aria-hidden="true">
          <div className="flex items-center gap-2">
            {["Carrinho", "Entrega", "Pagamento", "Pronto"].map((t, i) => (
              <div key={t} className="flex flex-1 flex-col gap-1">
                <div className={`h-1.5 rounded-full ${i < 1 || (i === 1 && k >= 3) ? "bg-[#A3E635]" : i === 1 ? "bg-[#fbbf24]" : "bg-white/15"}`} />
                <span className="text-[10px] text-white/60">{t}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 space-y-2">
            <div className="h-9 rounded-lg bg-white/[0.06]" />
            <div className={`relative h-9 rounded-lg border ${k >= 1 && k < 3 ? "border-[#fbbf24]" : "border-white/10"} bg-white/[0.04]`}>
              <span className="absolute left-3 top-2 text-xs text-white/50">Frete</span>
            </div>
          </div>
          <AnimatePresence>
            {k >= 2 && k < 3 && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-3 flex items-start gap-2 rounded-xl bg-[#622FFD]/25 p-3 text-sm text-white">
                <img src="/cases/clint/ai-logo.webp" alt="" className="h-6 w-6 rounded-full" />
                Muita gente para aqui. Quer comparar o frete expresso e o normal?
              </motion.div>
            )}
          </AnimatePresence>
          {k >= 3 && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 text-sm text-[#A3E635]">✓ Etapa concluída sem travar</motion.p>}
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">exemplo fictício</p>
        </div>
      </div>
    </Bleed>
  );
}

/* ─────────────── POST 20 · Não me faça pensar: medidor de esforço ─────────────── */

/* Cada dúvida vira um balão de pensamento; o medidor mostra o esforço até simplificar. */
export function SceneThinkMeter({ title }: { title: string }) {
  return (
    <Bleed>
      <Sticky height={260}>{(p) => <MeterInner p={p} title={title} />}</Sticky>
    </Bleed>
  );
}
function MeterInner({ p, title }: { p: MotionValue<number>; title: string }) {
  const THOUGHTS = ["Onde fica o ingresso?", "É esse menu?", "Preciso de cadastro?", "Qual botão?", "Deu certo?"];
  const s = useStep(useRange(p, 0, 0.6), THOUGHTS.length + 1);
  const simple = useRange(p, 0.65, 0.8);
  const fill = useTransform(p, [0, 0.6, 0.7, 0.8], ["0%", "92%", "92%", "12%"]);
  const sOp = useTransform(simple, [0, 1], [0, 1]);
  const cOp = useTransform(simple, [0, 1], [1, 0]);
  return (
    <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
      <div>
        <p className="font-display text-3xl font-semibold leading-tight md:text-5xl">{title}</p>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">esforço mental</p>
        <div className="mt-2 h-4 w-full overflow-hidden rounded-full bg-white/10" aria-hidden="true">
          <motion.div className="h-full rounded-full bg-gradient-to-r from-[#A3E635] via-[#fbbf24] to-[#f87171]" style={{ width: fill }} />
        </div>
        <p className="mt-3 text-sm text-white/60">Ilustração da ideia de Krug: cada pergunta que o usuário faz a si mesmo é um custo.</p>
      </div>
      <div className="relative h-[320px] rounded-[22px] border border-white/10 bg-[#111118] p-5" aria-hidden="true">
        <motion.div style={{ opacity: cOp }} className="absolute inset-5">
          <div className="flex gap-1.5">{["Shows", "Teatro", "Esportes", "Mais", "Ofertas", "Ajuda"].map((m) => <span key={m} className="rounded bg-white/[0.08] px-1.5 py-1 text-[10px] text-white/60">{m}</span>)}</div>
          <div className="mt-3 grid grid-cols-3 gap-2">{[0, 1, 2, 3, 4, 5].map((n) => <div key={n} className="h-14 rounded-lg bg-white/[0.06]" />)}</div>
          <div className="mt-3 flex gap-2">{["Ver", "Saiba mais", "Comprar?", "Detalhes"].map((b) => <span key={b} className="rounded-full border border-white/20 px-2.5 py-1 text-[10px] text-white/70">{b}</span>)}</div>
          {THOUGHTS.map((t, i) => (
            <motion.span key={t} className="absolute rounded-2xl bg-white px-3 py-1.5 text-xs font-semibold text-[#0d0d12] shadow-lg" style={{ left: `${[8, 46, 18, 52, 30][i]}%`, top: `${[46, 30, 70, 62, 14][i]}%` }}
              initial={false} animate={{ scale: i < s ? 1 : 0, opacity: i < s ? 1 : 0 }} transition={{ type: "spring", stiffness: 380, damping: 18 }}>{t}</motion.span>
          ))}
        </motion.div>
        <motion.div style={{ opacity: sOp }} className="absolute inset-5 flex flex-col items-center justify-center gap-4 text-center">
          <p className="font-display text-xl font-semibold">Show de sexta · 21h</p>
          <span className="rounded-full bg-[#622FFD] px-8 py-3 font-semibold text-white">Comprar ingresso</span>
          <span className="text-xs text-[#A3E635]">Uma ação clara. Nenhuma dúvida.</span>
        </motion.div>
      </div>
    </div>
  );
}

/* O cardápio que explica demais vira uma lista simples. */
export function SceneMenuSimplify({ title }: { title: string }) {
  const { ref, k } = useTimeline([1600]);
  const ITEMS = [
    { n: "Risoto de cogumelos", d: "Arroz arbóreo cozido lentamente em caldo de legumes caseiro, finalizado com manteiga, parmesão envelhecido e uma seleção de cogumelos frescos salteados no azeite com alho e tomilho." },
    { n: "Salmão grelhado", d: "Filé de salmão grelhado na brasa, servido sobre purê de batata-doce com toque de gengibre, legumes da estação e um molho cítrico de laranja e mel." },
    { n: "Massa ao pesto", d: "Talharim fresco feito na casa, envolvido em pesto de manjericão, castanhas e azeite extravirgem, com tomates confitados e lascas de parmesão." },
  ];
  return (
    <Bleed tone="light">
      <div ref={ref} className="container grid max-w-6xl grid-cols-1 items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <p className="font-display text-3xl font-semibold leading-tight md:text-5xl">{title}</p>
        <div className="rounded-[22px] border border-black/10 bg-white p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]" aria-hidden="true">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#622FFD]">{k >= 1 ? "cardápio simples" : "cardápio que faz pensar"}</p>
          <ul className="mt-3 divide-y divide-black/[0.06]">
            {ITEMS.map((it) => (
              <motion.li key={it.n} layout className="flex items-baseline justify-between gap-4 py-3">
                <div>
                  <p className="font-display text-lg font-semibold">{it.n}</p>
                  <AnimatePresence initial={false}>{k < 1 && <motion.p initial={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="text-xs leading-relaxed text-[#0A0A0A]/60">{it.d}</motion.p>}</AnimatePresence>
                </div>
                {k >= 1 && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="shrink-0 rounded-full bg-[#622FFD] px-3 py-1 text-xs font-semibold text-white">Pedir</motion.span>}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Bleed>
  );
}

/* Portal cheio de coisas que se dissolve em uma única caixa de busca. */
export function ScenePortalToSearch({ title }: { title: string }) {
  return (
    <Bleed>
      <Sticky height={200}>{(p) => <PortalInner p={p} title={title} />}</Sticky>
    </Bleed>
  );
}
function PortalInner({ p, title }: { p: MotionValue<number>; title: string }) {
  const t = useRange(p, 0.2, 0.7);
  const clutter = useTransform(t, [0, 1], [1, 0]);
  const scale = useTransform(t, [0, 1], [1, 0.85]);
  const search = useTransform(t, [0.5, 1], [0, 1]);
  return (
    <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
      <p className="font-display text-3xl font-semibold leading-tight md:text-5xl">{title}</p>
      <div className="relative h-[320px] rounded-[22px] border border-white/10 bg-white p-4" aria-hidden="true">
        <motion.div style={{ opacity: clutter, scale }} className="grid h-full grid-cols-4 grid-rows-5 gap-1.5">
          {Array.from({ length: 20 }, (_, i) => <div key={i} className="rounded" style={{ background: ["#fde68a", "#bfdbfe", "#fecaca", "#e9d5ff", "#bbf7d0"][i % 5] }} />)}
        </motion.div>
        <motion.div style={{ opacity: search }} className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="flex w-3/4 items-center gap-2 rounded-full border border-black/15 px-4 py-3 shadow-sm"><span className="text-[#0A0A0A]/40">⌕</span><span className="text-sm text-[#0A0A0A]/45">Buscar</span></div>
          <span className="text-xs text-[#0A0A0A]/50">só o que importa</span>
        </motion.div>
      </div>
    </div>
  );
}

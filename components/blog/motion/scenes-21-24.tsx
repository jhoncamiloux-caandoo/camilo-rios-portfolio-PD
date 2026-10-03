"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion, useTransform, type MotionValue } from "framer-motion";
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

/* ─────────────── POST 21 · Design System: montagem e consistência ─────────────── */

/* Interruptor: sem Design System, cada botão é de um jeito; com ele, todos se alinham. */
export function SceneDsToggle({ title, body }: { title: string; body: string }) {
  const [forced, setForced] = useState<boolean | null>(null);
  const { ref, k } = useTimeline([1400]);
  const sys = forced ?? k >= 1;
  const MESSY = [
    { r: 4, bg: "#622FFD", px: 14, py: 8, fs: 13 },
    { r: 20, bg: "#7c3aed", px: 22, py: 12, fs: 15 },
    { r: 0, bg: "#4f46e5", px: 10, py: 6, fs: 12 },
    { r: 12, bg: "#6d28d9", px: 18, py: 10, fs: 14 },
    { r: 8, bg: "#8b5cf6", px: 16, py: 14, fs: 16 },
    { r: 30, bg: "#5b21b6", px: 12, py: 8, fs: 13 },
  ];
  const LABELS = ["Salvar", "Continuar", "Enviar", "Confirmar", "Comprar", "Avançar"];
  return (
    <Bleed tone="light">
      <div ref={ref} className="container grid max-w-6xl grid-cols-1 items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <div>
          <Eyebrow color={M.p}>Antes e depois</Eyebrow>
          <p className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">{title}</p>
          <p className="mt-4 text-[#0A0A0A]/75">{body}</p>
          <button type="button" role="switch" aria-checked={sys} onClick={() => setForced(!sys)}
            className="mt-6 inline-flex items-center gap-3 rounded-full border border-black/15 bg-white px-2 py-2 pr-4 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#622FFD]">
            <span className={`flex h-7 w-12 items-center rounded-full p-1 transition-colors ${sys ? "bg-[#622FFD]" : "bg-black/15"}`}><span className={`h-5 w-5 rounded-full bg-white transition-transform ${sys ? "translate-x-5" : ""}`} /></span>
            {sys ? "Com Design System" : "Sem Design System"}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 rounded-[22px] border border-black/10 bg-white p-6 sm:grid-cols-3" aria-hidden="true">
          {MESSY.map((m, i) => (
            <div key={i} className="flex h-16 items-center justify-center">
              <motion.span layout initial={false}
                animate={{ borderRadius: sys ? 999 : m.r, backgroundColor: sys ? M.p : m.bg, paddingLeft: sys ? 18 : m.px, paddingRight: sys ? 18 : m.px, paddingTop: sys ? 10 : m.py, paddingBottom: sys ? 10 : m.py, fontSize: sys ? 14 : m.fs, rotate: sys ? 0 : (i % 2 ? 2 : -2) }}
                transition={{ duration: 0.6, ease: M.ease, delay: i * 0.05 }}
                className="inline-block font-semibold text-white">{LABELS[i]}</motion.span>
            </div>
          ))}
        </div>
      </div>
    </Bleed>
  );
}

/* Vista explodida: tokens em camadas que se encaixam e viram um componente. */
export function SceneExploded({ title, body }: { title: string; body: string }) {
  return (
    <Bleed>
      <Sticky height={240}>{(p) => <ExplodedInner p={p} title={title} body={body} />}</Sticky>
    </Bleed>
  );
}
function ExplodedInner({ p, title, body }: { p: MotionValue<number>; title: string; body: string }) {
  const LAYERS = [
    { l: "Cor", c: "rgba(98,47,253,0.85)" },
    { l: "Tipografia", c: "rgba(255,255,255,0.12)" },
    { l: "Espaçamento", c: "rgba(163,230,53,0.25)" },
    { l: "Raio", c: "rgba(164,139,255,0.35)" },
    { l: "Sombra", c: "rgba(255,255,255,0.06)" },
  ];
  const t = useRange(p, 0.15, 0.75);
  const s = useStep(p, LAYERS.length + 2);
  return (
    <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
      <div>
        <p className="font-display text-3xl font-semibold leading-tight md:text-5xl">{title}</p>
        <p className="mt-4 text-white/75">{body}</p>
        <ul className="mt-6 flex flex-wrap gap-2">{LAYERS.map((l, i) => <li key={l.l} className={`rounded-full border px-3 py-1 text-xs transition-colors ${i < s ? "border-[#A3E635] text-[#A3E635]" : "border-white/20 text-white/55"}`}>{l.l}</li>)}</ul>
      </div>
      <div className="relative mx-auto h-[300px] w-full max-w-[380px] [perspective:1000px]" aria-hidden="true">
        <div className="absolute inset-0 [transform-style:preserve-3d] [transform:rotateX(55deg)_rotateZ(-35deg)]">
          {LAYERS.map((l, i) => <Layer key={l.l} t={t} i={i} n={LAYERS.length} color={l.c} label={l.l} />)}
        </div>
        <motion.span style={{ opacity: useTransform(t, [0.85, 1], [0, 1]) }} className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-[#622FFD] px-8 py-3 font-semibold text-white shadow-[0_20px_40px_-10px_rgba(98,47,253,0.7)]">Botão primário</motion.span>
      </div>
    </div>
  );
}
function Layer({ t, i, n, color, label }: { t: MotionValue<number>; i: number; n: number; color: string; label: string }) {
  const z = useTransform(t, [0, 1], [(n - i) * 46, 0]);
  const op = useTransform(t, [0.8, 1], [1, 0.25]);
  const transform = useTransform(z, (v) => `translateZ(${v}px)`);
  return (
    <motion.div style={{ transform, opacity: op }} className="absolute left-[15%] top-[25%] flex h-[45%] w-[70%] items-end rounded-2xl border border-white/20 p-2" >
      <div className="absolute inset-0 rounded-2xl" style={{ background: color }} />
      <span className="relative font-mono text-[10px] uppercase tracking-[0.14em] text-white">{label}</span>
    </motion.div>
  );
}

/* Cemitério × biblioteca governada: sem manutenção, componentes envelhecem. */
export function SceneGovernance({ title }: { title: string }) {
  const { ref, k } = useTimeline([600, 1400, 2200, 3000]);
  const VERS = ["v1.0", "v1.1", "v1.2", "v1.3"];
  return (
    <Bleed tone="light">
      <div ref={ref} className="container grid max-w-6xl grid-cols-1 gap-10 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="font-display text-3xl font-semibold leading-tight md:text-4xl">{title}</p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-[#e11d48]">Sem governança</p>
          <div className="mt-3 grid grid-cols-3 gap-2" aria-hidden="true">
            {["Card v2 final", "Botão NOVO", "Modal (não usar)", "Card antigo", "Botão_v3", "Input copy"].map((c, i) => (
              <motion.span key={c} initial={false} animate={{ opacity: k > i % 4 ? 0.5 : 1, filter: k > i % 4 ? "grayscale(1)" : "grayscale(0)" }} className="rounded-lg border border-dashed border-black/20 bg-white px-2 py-3 text-center text-[11px] text-[#0A0A0A]/60 line-through decoration-black/30">{c}</motion.span>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#622FFD]">Com time responsável e versões</p>
          <ol className="mt-3 space-y-2">
            {VERS.map((v, i) => (
              <motion.li key={v} initial={false} animate={{ opacity: i < k ? 1 : 0.4, x: i < k ? 0 : 10 }} className="flex items-center gap-3 rounded-xl border border-black/10 bg-white px-4 py-3">
                <span className="rounded-full bg-[#622FFD] px-2 py-0.5 font-mono text-[11px] font-bold text-white">{v}</span>
                <span className="text-sm text-[#0A0A0A]/80">{["Base: cor, tipografia, botões", "Formulários e estados de erro", "Cards e listas revisados", "Acessibilidade WCAG 2.2"][i]}</span>
              </motion.li>
            ))}
          </ol>
          <p className="mt-3 text-xs text-[#0A0A0A]/50">Exemplo ilustrativo de changelog.</p>
        </div>
      </div>
    </Bleed>
  );
}

/* ─────────────── POST 22 · Rive e Phase: brinque com o movimento ─────────────── */

/* Três microinterações de verdade: clique e veja a resposta imediata. */
export function SceneMicroPlayground({ title }: { title: string }) {
  const [liked, setLiked] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [save, setSave] = useState<"idle" | "loading" | "done">("idle");
  const doSave = () => { if (save !== "idle") return; setSave("loading"); setTimeout(() => setSave("done"), 1100); setTimeout(() => setSave("idle"), 3200); };
  return (
    <Bleed>
      <div className="container max-w-6xl py-20 md:py-28">
        <Eyebrow>Experimente</Eyebrow>
        <p className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">{title}</p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <button type="button" aria-pressed={liked} aria-label="Curtir" onClick={() => setLiked((v) => !v)} className="relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A48BFF]">
              <motion.svg viewBox="0 0 24 24" className="h-14 w-14" animate={{ scale: liked ? [1, 1.35, 1] : 1 }} transition={{ duration: 0.4 }}>
                <path d="M12 21s-7-4.4-9.5-8.6C.8 9.4 2.4 5.5 6 5c2-.3 3.6.8 4.5 2.1h3C14.4 5.8 16 4.7 18 5c3.6.5 5.2 4.4 3.5 7.4C19 16.6 12 21 12 21z" fill={liked ? "#f43f5e" : "none"} stroke={liked ? "#f43f5e" : "#fff"} strokeWidth="1.6" />
              </motion.svg>
              <AnimatePresence>{liked && Array.from({ length: 8 }, (_, i) => (
                <motion.span key={i} className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-[#f43f5e]" initial={{ x: 0, y: 0, opacity: 1 }} animate={{ x: Math.round(Math.cos((i / 8) * 6.28) * 40), y: Math.round(Math.sin((i / 8) * 6.28) * 40), opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }} />
              ))}</AnimatePresence>
            </button>
            <p className="text-center text-sm text-white/70">Encantar: a resposta tem personalidade.</p>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <button type="button" role="switch" aria-checked={toggle} aria-label="Notificações" onClick={() => setToggle((v) => !v)} className={`flex h-12 w-24 items-center rounded-full p-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A48BFF] ${toggle ? "bg-[#A3E635]" : "bg-white/15"}`}>
              <motion.span layout transition={{ type: "spring", stiffness: 500, damping: 30 }} className={`h-9 w-9 rounded-full bg-white shadow ${toggle ? "ml-auto" : ""}`} />
            </button>
            <p className="text-center text-sm text-white/70">Resposta imediata: o estado muda na hora.</p>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <motion.button type="button" onClick={doSave} layout className={`flex h-12 items-center justify-center gap-2 rounded-full px-6 font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A48BFF] ${save === "done" ? "bg-[#16a34a]" : "bg-[#622FFD]"}`}>
              {save === "loading" && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />}
              {save === "idle" ? "Salvar" : save === "loading" ? "Salvando" : "✓ Salvo"}
            </motion.button>
            <p role="status" className="text-center text-sm text-white/70">Guiar: mostra o que acontece depois do clique.</p>
          </div>
        </div>
      </div>
    </Bleed>
  );
}

/* Transição entre telas: o card se expande e vira a próxima tela (elemento compartilhado). */
export function SceneSharedTransition({ title, body }: { title: string; body: string }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => { if (reduce) return; const id = setInterval(() => setOpen((v) => !v), 2400); return () => clearInterval(id); }, [reduce]);
  return (
    <Bleed tone="light">
      <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="font-display text-3xl font-semibold leading-tight md:text-5xl">{title}</p>
          <p className="mt-4 text-[#0A0A0A]/75">{body}</p>
        </div>
        <div className="relative mx-auto h-[420px] w-[230px] overflow-hidden rounded-[34px] border-[8px] border-[#0A0A0A] bg-[#F4F4F6]" aria-hidden="true">
          {!open ? (
            <div className="space-y-3 p-4">
              <p className="text-xs font-semibold text-[#0A0A0A]/60">Projetos</p>
              <motion.div layoutId="card" className="h-24 rounded-2xl bg-[#622FFD]" />
              <div className="h-16 rounded-2xl bg-white" /><div className="h-16 rounded-2xl bg-white" />
            </div>
          ) : (
            <div>
              <motion.div layoutId="card" className="h-44 rounded-b-3xl bg-[#622FFD]" />
              <div className="space-y-2 p-4"><div className="h-3 w-2/3 rounded bg-[#0A0A0A]/70" /><div className="h-2 w-full rounded bg-[#0A0A0A]/15" /><div className="h-2 w-5/6 rounded bg-[#0A0A0A]/15" /><div className="mt-4 h-9 w-full rounded-full bg-[#0A0A0A]" /></div>
            </div>
          )}
        </div>
      </div>
    </Bleed>
  );
}

/* Máquina de estados: um personagem que olha para o cursor e reage ao toque. */
export function SceneStateMachine({ title, body }: { title: string; body: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "hover" | "pressed">("idle");
  const [eye, setEye] = useState({ x: 0, y: 0 });
  const onMove = (e: React.PointerEvent) => {
    const r = box.current!.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width, dy = (e.clientY - (r.top + r.height / 2)) / r.height;
    setEye({ x: Math.max(-1, Math.min(1, dx * 2)) * 6, y: Math.max(-1, Math.min(1, dy * 2)) * 5 });
    if (state === "idle") setState("hover");
  };
  const STATES = ["idle", "hover", "pressed"] as const;
  return (
    <Bleed>
      <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <div>
          <Eyebrow>Interaja com ele</Eyebrow>
          <p className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">{title}</p>
          <p className="mt-4 text-white/75">{body}</p>
          <ol className="mt-6 flex items-center gap-2 font-mono text-xs" aria-label="Estados">
            {STATES.map((s, i) => (
              <li key={s} className="flex items-center gap-2">
                <span className={`rounded-lg border px-3 py-1.5 transition-colors ${state === s ? "border-[#A3E635] bg-[#A3E635] text-[#0d0d12]" : "border-white/20 text-white/60"}`}>{s}</span>
                {i < STATES.length - 1 && <span className="text-white/30">→</span>}
              </li>
            ))}
          </ol>
        </div>
        <div ref={box} onPointerMove={onMove} onPointerLeave={() => { setState("idle"); setEye({ x: 0, y: 0 }); }}
          onPointerDown={() => setState("pressed")} onPointerUp={() => setState("hover")}
          className="flex aspect-square w-full max-w-[380px] cursor-pointer select-none items-center justify-center justify-self-center rounded-[28px] bg-[#622FFD]/15" aria-hidden="true">
          <motion.svg viewBox="0 0 200 200" className="w-3/4" animate={{ scale: state === "pressed" ? 0.9 : state === "hover" ? 1.04 : 1, y: state === "idle" ? [0, -6, 0] : 0 }} transition={state === "idle" ? { duration: 2.4, repeat: Infinity } : { type: "spring", stiffness: 400, damping: 18 }}>
            <circle cx="100" cy="100" r="80" fill="#fff" />
            <circle cx={72 + eye.x} cy={88 + eye.y} r={state === "pressed" ? 3 : 10} fill="#0d0d12" />
            <circle cx={128 + eye.x} cy={88 + eye.y} r={state === "pressed" ? 3 : 10} fill="#0d0d12" />
            <path d={state === "pressed" ? "M70 130 Q100 160 130 130" : state === "hover" ? "M74 128 Q100 146 126 128" : "M80 132 Q100 138 120 132"} fill="none" stroke="#0d0d12" strokeWidth="6" strokeLinecap="round" />
          </motion.svg>
        </div>
      </div>
    </Bleed>
  );
}

/* ─────────────── POST 23 · Do UX ao CEO: subir de andar ─────────────── */

/* Um elevador de carreira: a cada andar, uma habilidade nova destrava. */
export function SceneCareerElevator({ title, floors }: { title: string; floors: { role: string; skill: string }[] }) {
  return (
    <Bleed>
      <Sticky height={300}>{(p) => <ElevatorInner p={p} title={title} floors={floors} />}</Sticky>
    </Bleed>
  );
}
function ElevatorInner({ p, title, floors }: { p: MotionValue<number>; title: string; floors: { role: string; skill: string }[] }) {
  const s = useStep(useRange(p, 0, 0.92), floors.length);
  const H = 64;
  return (
    <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
      <div>
        <p className="font-display text-3xl font-semibold leading-tight md:text-5xl">{title}</p>
        <AnimatePresence mode="wait">
          <motion.div key={s} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mt-6 rounded-2xl border border-[#A3E635]/40 bg-[#A3E635]/10 p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#A3E635]">andar {s + 1} · {floors[s].role}</p>
            <p className="mt-1 text-lg text-white">{floors[s].skill}</p>
          </motion.div>
        </AnimatePresence>
        <ul className="sr-only">{floors.map((f) => <li key={f.role}>{f.role}: {f.skill}</li>)}</ul>
      </div>
      <div className="relative mx-auto" style={{ height: floors.length * H + 20, width: 300 }} aria-hidden="true">
        {floors.map((f, i) => (
          <div key={f.role} className="absolute inset-x-0 flex items-center border-t border-white/10" style={{ bottom: i * H, height: H }}>
            <span className={`ml-20 text-sm transition-colors ${i <= s ? "text-white" : "text-white/40"}`}>{f.role}</span>
          </div>
        ))}
        <div className="absolute bottom-0 left-4 top-0 w-12 rounded-xl border border-white/15" />
        <motion.div className="absolute left-5 flex h-[54px] w-10 items-center justify-center rounded-lg bg-[#622FFD]" initial={false} animate={{ bottom: s * H + 5 }} transition={{ duration: 0.7, ease: M.ease }}>
          <span className="h-4 w-4 rounded-full bg-white" />
        </motion.div>
      </div>
    </div>
  );
}

/* Trajetórias reais citadas no texto: do design ao cargo de liderança. */
export function SceneTrajectories({ lead, items, close }: { lead: string; items: string[]; close: string }) {
  const { ref, k } = useTimeline(items.map((_, i) => 400 + i * 700));
  return (
    <Bleed tone="light">
      <div ref={ref} className="container max-w-6xl py-20 md:py-28">
        <p className="text-[#0A0A0A]/75">{lead}</p>
        <ul className="mt-8 flex flex-col gap-6">
          {items.map((t, i) => {
            const [name, ...rest] = t.split(": ");
            return (
              <li key={t} className="grid grid-cols-1 items-center gap-3 md:grid-cols-[200px_1fr]">
                <p className="font-display text-2xl font-semibold">{name}</p>
                <div>
                  <div className="relative h-2 rounded-full bg-black/10" aria-hidden="true">
                    <motion.div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#A48BFF] to-[#622FFD]" initial={false} animate={{ width: i < k ? "100%" : "0%" }} transition={{ duration: 0.9, ease: M.ease }} />
                    <motion.span className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-white bg-[#622FFD]" initial={false} animate={{ left: i < k ? "calc(100% - 16px)" : "0%" }} transition={{ duration: 0.9, ease: M.ease }} />
                  </div>
                  <p className="mt-2 text-[15px] text-[#0A0A0A]/80">{rest.join(": ")}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="mt-8 font-display text-xl font-semibold text-[#622FFD] md:text-2xl">{close}</p>
      </div>
    </Bleed>
  );
}

/* ─────────────── POST 24 · Credibilidade: teste da primeira impressão ─────────────── */

/* O número que abre o artigo, grande, com a fonte citada no texto. */
export function SceneBigStat({ value, label, source }: { value: number; label: string; source: string }) {
  return (
    <Bleed tone="violet">
      <div className="container flex max-w-6xl flex-col gap-4 py-20 md:flex-row md:items-end md:gap-10 md:py-28">
        <p className="font-display text-[110px] font-semibold leading-[0.85] tracking-[-0.05em] md:text-[220px]"><CountUp to={value} />%</p>
        <div className="max-w-md pb-4">
          <p className="text-xl text-white md:text-2xl">{label}</p>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/70">{source}</p>
        </div>
      </div>
    </Bleed>
  );
}

/* Teste de meio segundo: duas telas piscam; o leitor escolhe em qual confiaria. */
export function SceneBlinkTest({ title, body }: { title: string; body: string }) {
  const [phase, setPhase] = useState<"ready" | "flash" | "pick" | "done">("ready");
  const [pick, setPick] = useState<"" | "a" | "b">("");
  const start = () => { setPick(""); setPhase("flash"); setTimeout(() => setPhase("pick"), 600); };
  const Site = ({ clean }: { clean: boolean }) => clean ? (
    <div className="h-full rounded-xl bg-white p-3">
      <div className="h-2.5 w-1/3 rounded bg-[#0A0A0A]/80" /><div className="mt-3 h-14 rounded-lg bg-[#622FFD]/20" />
      <div className="mt-3 h-2 w-full rounded bg-black/10" /><div className="mt-1.5 h-2 w-4/5 rounded bg-black/10" /><div className="mt-3 h-6 w-24 rounded-full bg-[#622FFD]" />
    </div>
  ) : (
    <div className="h-full rounded-xl bg-[#fef08a] p-2">
      <div className="flex gap-1">{["#ef4444", "#22c55e", "#3b82f6", "#f97316"].map((c) => <div key={c} className="h-3 flex-1 rounded-sm" style={{ background: c }} />)}</div>
      <div className="mt-1 grid grid-cols-3 gap-1">{Array.from({ length: 9 }, (_, i) => <div key={i} className="h-5 rounded-sm" style={{ background: ["#a855f7", "#14b8a6", "#f43f5e"][i % 3] }} />)}</div>
      <p className="mt-1 text-center text-[9px] font-black text-[#dc2626]">OFERTA!!! CLIQUE AQUI</p>
      <div className="mt-1 h-4 rounded-sm bg-[#0ea5e9]" />
    </div>
  );
  return (
    <Bleed>
      <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <div>
          <Eyebrow>Teste de meio segundo</Eyebrow>
          <p className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">{title}</p>
          <p className="mt-4 text-white/75">{body}</p>
          <button type="button" onClick={start} className="mt-6 rounded-full bg-[#A3E635] px-6 py-3 font-semibold text-[#0d0d12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">{phase === "ready" ? "Começar o teste" : "Repetir"}</button>
        </div>
        <div>
          <div className="grid h-[220px] grid-cols-2 gap-4" aria-hidden={phase !== "pick" && phase !== "done"}>
            {(["a", "b"] as const).map((id) => {
              const clean = id === "b";
              const visible = phase === "flash" || phase === "done";
              return (
                <button key={id} type="button" disabled={phase !== "pick"} onClick={() => { setPick(id); setPhase("done"); }}
                  className={`relative overflow-hidden rounded-2xl border-2 p-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] ${pick === id ? "border-[#A3E635]" : "border-white/15"} ${phase === "pick" ? "cursor-pointer hover:border-white/50" : ""}`}>
                  <span className="sr-only">Site {id.toUpperCase()}</span>
                  <motion.div className="h-full" initial={false} animate={{ opacity: visible ? 1 : 0 }} transition={{ duration: 0.1 }}><Site clean={clean} /></motion.div>
                  {!visible && <span className="absolute inset-0 flex items-center justify-center font-display text-4xl font-semibold text-white/60">{id.toUpperCase()}</span>}
                </button>
              );
            })}
          </div>
          <p role="status" className="mt-4 min-h-[3em] text-white/80">
            {phase === "ready" && "As duas telas vão aparecer por meio segundo."}
            {phase === "flash" && "Olhe rápido…"}
            {phase === "pick" && "Em qual delas você colocaria o número do seu cartão?"}
            {phase === "done" && (pick === "b" ? "A maioria escolhe a tela organizada, sem ler nada. Foi uma decisão de credibilidade em meio segundo." : "Interessante! A maioria escolhe a tela organizada: a impressão vem antes de qualquer leitura.")}
          </p>
        </div>
      </div>
    </Bleed>
  );
}

/* Do visual poluído ao organizado: os elementos se alinham numa grade. */
export function SceneOrderFromChaos({ title }: { title: string }) {
  return (
    <Bleed tone="light">
      <Sticky height={200}>{(p) => <ChaosInner p={p} title={title} />}</Sticky>
    </Bleed>
  );
}
function ChaosInner({ p, title }: { p: MotionValue<number>; title: string }) {
  const t = useRange(p, 0.15, 0.7);
  const ITEMS = Array.from({ length: 12 }, (_, i) => i);
  return (
    <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
      <p className="font-display text-3xl font-semibold leading-tight md:text-5xl">{title}</p>
      <div className="relative h-[300px] rounded-[22px] border border-black/10 bg-white" aria-hidden="true">
        {ITEMS.map((i) => <ChaosItem key={i} t={t} i={i} />)}
      </div>
    </div>
  );
}
function ChaosItem({ t, i }: { t: MotionValue<number>; i: number }) {
  const cx = 8 + ((i * 41) % 75), cy = 6 + ((i * 29) % 78), rot0 = ((i * 37) % 40) - 20;
  const gx = 8 + (i % 4) * 22, gy = 10 + Math.floor(i / 4) * 30;
  const left = useTransform(t, [0, 1], [`${cx}%`, `${gx}%`]);
  const top = useTransform(t, [0, 1], [`${cy}%`, `${gy}%`]);
  const rotate = useTransform(t, [0, 1], [rot0, 0]);
  const bg = useTransform(t, [0, 1], [["#f43f5e", "#22c55e", "#f59e0b", "#3b82f6"][i % 4], i === 0 ? M.p : "#E9E6F7"]);
  return <motion.div style={{ left, top, rotate, backgroundColor: bg }} className="absolute h-[22%] w-[18%] rounded-lg" />;
}

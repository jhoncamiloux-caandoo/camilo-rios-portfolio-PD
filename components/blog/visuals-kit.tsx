"use client";

import { motion, useInView, useReducedMotion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Accessibility, AlertTriangle, ArrowRight, BarChart3, Bot, Brain, Briefcase, Building2, CalendarCheck, Check, CheckCircle2, ClipboardCheck,
  Code2, Compass, Cpu, Crown, Database, Eye, FileText, Filter, FlaskConical, Gauge, GitBranch, Globe, Hand, Heart, Keyboard, Layers as LayersIcon, LayoutGrid,
  Lightbulb, LineChart, ListChecks, Lock, Map, Megaphone, MessageCircle, MessageSquare, MousePointerClick, Palette, PenTool, Puzzle, Repeat,
  Rocket, Route, Search, Settings2, Shield, ShieldCheck, ShoppingCart, Sparkles, Target, TrendingUp, Undo2, User, UserCheck, Users, Wand2,
  Workflow, XCircle, Zap, Contrast, Type, Image as ImageIcon, BookOpen, Presentation, Mic, Scale, Timer, type LucideIcon,
} from "lucide-react";

/* Kit de visuais do blog: cada visual explica uma ideia do texto com ícones
   (Lucide, open source) e movimento que mostra relação, ordem ou mudança.
   Com movimento reduzido tudo aparece no estado final. */

export const ICONS: Record<string, LucideIcon> = {
  accessibility: Accessibility, alert: AlertTriangle, arrow: ArrowRight, chart: BarChart3, bot: Bot, brain: Brain, briefcase: Briefcase, building: Building2,
  calendar: CalendarCheck, check: Check, checkCircle: CheckCircle2, clipboard: ClipboardCheck, code: Code2, compass: Compass, cpu: Cpu, crown: Crown,
  database: Database, eye: Eye, file: FileText, filter: Filter, flask: FlaskConical, gauge: Gauge, branch: GitBranch, globe: Globe, hand: Hand, heart: Heart,
  keyboard: Keyboard, layers: LayersIcon, grid: LayoutGrid, bulb: Lightbulb, line: LineChart, list: ListChecks, lock: Lock, map: Map, megaphone: Megaphone,
  chat: MessageCircle, message: MessageSquare, click: MousePointerClick, palette: Palette, pen: PenTool, puzzle: Puzzle, repeat: Repeat, rocket: Rocket,
  route: Route, search: Search, settings: Settings2, shield: Shield, shieldCheck: ShieldCheck, cart: ShoppingCart, sparkles: Sparkles, target: Target,
  trend: TrendingUp, undo: Undo2, user: User, userCheck: UserCheck, users: Users, wand: Wand2, workflow: Workflow, x: XCircle, zap: Zap,
  contrast: Contrast, type: Type, image: ImageIcon, book: BookOpen, presentation: Presentation, mic: Mic, scale: Scale, timer: Timer,
};

type Item = { label: string; icon?: string; sub?: string };
const asItem = (x: string | Item): Item => (typeof x === "string" ? { label: x } : x);

export type VisualData =
  | { kind: "flow"; steps: (string | Item)[] }
  | { kind: "stats"; items: { value: string; label: string; source?: string; icon?: string }[] }
  | { kind: "checklist"; items: (string | Item)[] }
  | { kind: "compare"; left: { title: string; items: string[]; icon?: string }; right: { title: string; items: string[]; icon?: string } }
  | { kind: "cards"; items: { title: string; body?: string; icon?: string }[] }
  | { kind: "cycle"; nodes: (string | Item)[]; center: string }
  | { kind: "layers"; items: (string | Item)[] }
  | { kind: "people"; count: number; stuck: number[]; label: string }
  | { kind: "rings"; items: string[] }
  | { kind: "ladder"; steps: (string | Item)[] }
  | { kind: "noise"; before: string; after: string; action: string }
  | { kind: "funnel"; stages: { count: number; label: string; icon?: string }[] }
  | { kind: "merge"; a: { title: string; steps: string[]; icon?: string }; b: { title: string; steps: string[]; icon?: string }; result: string[] }
  | { kind: "lanes"; lanes: { title: string; steps: string[]; highlight?: number[] }[] }
  | { kind: "gate"; input: string; checks: (string | Item)[]; pass: string; fail: string }
  | { kind: "levels"; items: { level: string; example: string; control: string; icon?: string }[] };

const P = "#622FFD";
const P2 = "#8b6bff";
const ease = [0.22, 1, 0.36, 1] as const;

function useA() {
  const reduce = useReducedMotion();
  return {
    reduce,
    vp: { once: true, margin: "-60px" } as const,
    tr: (delay = 0, duration = 0.5) => ({ duration: reduce ? 0 : duration, delay: reduce ? 0 : delay, ease }),
  };
}

function Ico({ name, className = "h-5 w-5" }: { name?: string; className?: string }) {
  const I = name ? ICONS[name] : undefined;
  return I ? <I className={className} aria-hidden="true" strokeWidth={1.8} /> : null;
}

function Node({ it, i, active, tr }: { it: Item; i: number; active?: boolean; tr: (d?: number, du?: number) => object }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={tr(0.15 + i * 0.18)} className="flex flex-col items-center gap-2 text-center">
      <span className={`relative flex h-12 w-12 items-center justify-center rounded-2xl border ${active ? "border-[#8b6bff] bg-[#622FFD] text-white shadow-[0_0_0_6px_rgba(98,47,253,0.18)]" : "border-white/15 bg-[#17171d] text-[#c9b8ff]"}`}>
        {it.icon ? <Ico name={it.icon} /> : <span className="font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>}
      </span>
      <span className="text-[13px] font-semibold leading-tight text-white">{it.label}</span>
      {it.sub && <span className="text-[11px] leading-tight text-white/60">{it.sub}</span>}
    </motion.div>
  );
}

/* Conector com ponto que percorre a linha: mostra direção e sequência */
function Connector({ i, vertical = false }: { i: number; vertical?: boolean }) {
  const { reduce, tr } = useA();
  return (
    <div aria-hidden="true" className={`relative ${vertical ? "mx-auto h-6 w-[2px]" : "mt-6 h-[2px] flex-1"} overflow-hidden rounded-full bg-white/10`}>
      <motion.span className={`absolute inset-0 ${vertical ? "origin-top" : "origin-left"} bg-[#8b6bff]`} initial={vertical ? { scaleY: reduce ? 1 : 0 } : { scaleX: reduce ? 1 : 0 }} whileInView={vertical ? { scaleY: 1 } : { scaleX: 1 }} viewport={{ once: true, margin: "-60px" }} transition={tr(0.25 + i * 0.18, 0.4)} />
      {!reduce && !vertical && (
        <motion.span className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_8px_#a48bff]" animate={{ left: ["-5%", "105%"] }} transition={{ duration: 1.8, repeat: Infinity, delay: 1 + i * 0.35, ease: "easeInOut", repeatDelay: 1.2 }} />
      )}
    </div>
  );
}

function Flow({ steps }: { steps: (string | Item)[] }) {
  const { tr } = useA();
  const its = steps.map(asItem);
  return (
    <>
      <div className="hidden items-start md:flex" role="list">
        {its.map((it, i) => (
          <div key={it.label} className="contents" role="listitem">
            <div className="w-28 shrink-0"><Node it={it} i={i} active={i === its.length - 1} tr={tr} /></div>
            {i < its.length - 1 && <Connector i={i} />}
          </div>
        ))}
      </div>
      <div className="flex flex-col md:hidden" role="list">
        {its.map((it, i) => (
          <div key={it.label} role="listitem">
            <Node it={it} i={i} active={i === its.length - 1} tr={tr} />
            {i < its.length - 1 && <div className="py-1"><Connector i={i} vertical /></div>}
          </div>
        ))}
      </div>
    </>
  );
}

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const m = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
  const [txt, setTxt] = useState(m && !reduce ? `${m[1]}0${m[3]}` : value);
  useEffect(() => {
    if (!m || !inView || reduce) return;
    const target = parseFloat(m[2].replace(",", "."));
    const dec = m[2].includes(",") ? 1 : 0;
    const ctl = animate(0, target, { duration: 1.2, ease, onUpdate: (v) => setTxt(`${m[1]}${v.toFixed(dec).replace(".", ",")}${m[3]}`) });
    return () => ctl.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return <span ref={ref}>{txt}</span>;
}

function Stats({ items }: { items: { value: string; label: string; source?: string; icon?: string }[] }) {
  const { tr } = useA();
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <motion.div key={it.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={tr(i * 0.1)} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex items-center justify-between">
            <p className="font-display text-3xl font-semibold text-white"><CountUp value={it.value} /></p>
            <span className="text-[#A48BFF]"><Ico name={it.icon} /></span>
          </div>
          <p className="mt-1 text-sm leading-snug text-white/80">{it.label}</p>
          {it.source && <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-[#A48BFF]">{it.source}</p>}
        </motion.div>
      ))}
    </div>
  );
}

function Checklist({ items }: { items: (string | Item)[] }) {
  const { reduce, tr } = useA();
  const its = items.map(asItem);
  return (
    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {its.map((it, i) => (
        <motion.li key={it.label} initial={{ opacity: 0.25 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={tr(i * 0.14, 0.3)} className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] px-3 py-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#622FFD]/15 text-[#c9b8ff]">{it.icon ? <Ico name={it.icon} className="h-4 w-4" /> : null}</span>
          <span className="flex-1 text-sm leading-snug text-white/85">{it.label}</span>
          <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0" aria-hidden="true">
            <circle cx={10} cy={10} r={9} fill="rgba(52,211,153,0.15)" />
            <motion.path d="M5.5 10.5l3 3 6-7" fill="none" stroke="#6ee7b7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: reduce ? 1 : 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={tr(0.2 + i * 0.14, 0.35)} />
          </svg>
        </motion.li>
      ))}
    </ul>
  );
}

function Compare({ left, right }: { left: { title: string; items: string[]; icon?: string }; right: { title: string; items: string[]; icon?: string } }) {
  const { tr } = useA();
  const side = (s: typeof left, good: boolean, d: number) => (
    <motion.div initial={{ opacity: 0, x: good ? 14 : -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={tr(d)} className={`rounded-2xl border p-5 ${good ? "border-[#8b6bff]/60 bg-[#622FFD]/10" : "border-white/10 bg-white/[0.02]"}`}>
      <div className="flex items-center gap-2.5">
        <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${good ? "bg-[#622FFD] text-white" : "bg-white/10 text-white/70"}`}><Ico name={s.icon ?? (good ? "checkCircle" : "alert")} className="h-4 w-4" /></span>
        <p className={`font-mono text-[11px] uppercase tracking-[0.14em] ${good ? "text-[#c9b8ff]" : "text-white/60"}`}>{s.title}</p>
      </div>
      <ul className="mt-4 flex flex-col gap-2.5">
        {s.items.map((it, i) => (
          <motion.li key={it} initial={{ opacity: 0, y: 4 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={tr(d + 0.15 + i * 0.1, 0.3)} className="flex items-start gap-2 text-sm text-white/85">
            {good ? <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" /> : <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" aria-hidden="true" />}
            <span className={good ? "" : "text-white/70"}>{it}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
  return (
    <div className="grid grid-cols-1 items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
      {side(left, false, 0)}
      <motion.span aria-hidden="true" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={tr(0.45, 0.4)} className="mx-auto flex h-10 w-10 rotate-90 items-center justify-center rounded-full bg-[#622FFD] text-white md:rotate-0">
        <ArrowRight className="h-5 w-5" />
      </motion.span>
      {side(right, true, 0.6)}
    </div>
  );
}

function Cards({ items }: { items: { title: string; body?: string; icon?: string }[] }) {
  const { tr } = useA();
  return (
    <div className={`grid grid-cols-1 gap-3 ${items.length > 3 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"}`}>
      {items.map((it, i) => (
        <motion.div key={it.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={tr(i * 0.1)} className="group rounded-2xl border border-white/10 bg-[#17171d] p-4 transition hover:border-[#8b6bff]/50">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#622FFD]/15 text-[#c9b8ff] transition group-hover:bg-[#622FFD] group-hover:text-white">
            {it.icon ? <Ico name={it.icon} /> : <span className="font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>}
          </span>
          <p className="mt-3 font-display text-base font-semibold text-white">{it.title}</p>
          {it.body && <p className="mt-1 text-sm leading-snug text-white/70">{it.body}</p>}
        </motion.div>
      ))}
    </div>
  );
}

function Cycle({ nodes, center }: { nodes: (string | Item)[]; center: string }) {
  const { reduce, tr } = useA();
  const its = nodes.map(asItem);
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[400px]">
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <circle cx={200} cy={200} r={140} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={2} />
        <motion.circle cx={200} cy={200} r={140} fill="none" stroke={P2} strokeWidth={2} strokeDasharray="6 8" initial={{ pathLength: reduce ? 1 : 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={tr(0.1, 1.4)} style={{ rotate: -90, transformOrigin: "200px 200px" }} />
        {!reduce && (
          <circle r={7} fill={P}>
            <animateMotion dur="6s" repeatCount="indefinite" path="M200 60 A140 140 0 1 1 199.9 60" />
          </circle>
        )}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="rounded-full bg-[#622FFD] px-4 py-2 font-mono text-xs font-semibold text-white shadow-[0_0_40px_rgba(98,47,253,0.6)]">{center}</span>
      </div>
      {its.map((it, i) => {
        const a = (i / its.length) * Math.PI * 2 - Math.PI / 2;
        return (
          <div key={it.label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${50 + Math.cos(a) * 35}%`, top: `${50 + Math.sin(a) * 35}%` }}>
            <div className="w-24"><Node it={it} i={i} tr={tr} /></div>
          </div>
        );
      })}
    </div>
  );
}

function Layers({ items }: { items: (string | Item)[] }) {
  const { tr } = useA();
  const its = items.map(asItem);
  return (
    <div className="mx-auto flex max-w-lg flex-col-reverse gap-2">
      {its.map((it, i) => (
        <motion.div key={it.label} initial={{ opacity: 0, y: -18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={tr(i * 0.2)} className={`mx-auto flex items-center gap-3 rounded-xl border px-4 py-3 ${i === its.length - 1 ? "border-[#8b6bff] bg-[#622FFD] text-white" : "border-white/10 bg-[#17171d] text-white/90"}`} style={{ width: `${100 - i * 9}%` }}>
          <Ico name={it.icon} className="h-4 w-4 shrink-0" />
          <span className="text-sm font-semibold">{it.label}</span>
          <span className="ml-auto font-mono text-[10px] text-white/50">{String(i + 1).padStart(2, "0")}</span>
        </motion.div>
      ))}
    </div>
  );
}

function Ladder({ steps }: { steps: (string | Item)[] }) {
  const { tr } = useA();
  const its = steps.map(asItem);
  return (
    <div className="flex h-64 items-end gap-2">
      {its.map((it, i) => (
        <motion.div key={it.label} initial={{ height: 0, opacity: 0 }} whileInView={{ height: `${30 + (i * 70) / (its.length - 1)}%`, opacity: 1 }} viewport={{ once: true }} transition={tr(i * 0.18, 0.6)} className={`flex flex-1 flex-col items-center justify-start gap-1.5 rounded-t-xl border px-1 pt-3 text-center ${i === its.length - 1 ? "border-[#8b6bff] bg-[#622FFD] text-white" : "border-white/10 bg-[#622FFD]/[0.12] text-white/90"}`}>
          <Ico name={it.icon} className="h-4 w-4" />
          <span className="text-[11px] font-semibold leading-tight">{it.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

function People({ count, stuck, label }: { count: number; stuck: number[]; label: string }) {
  const { tr } = useA();
  return (
    <div>
      <div className="flex justify-center gap-3 sm:gap-6">
        {Array.from({ length: count }).map((_, i) => {
          const s = stuck.includes(i);
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={tr(i * 0.15)} className="relative flex flex-col items-center gap-2">
              <span className={`flex h-14 w-14 items-center justify-center rounded-full border-2 ${s ? "border-rose-400 bg-rose-400/10 text-rose-300" : "border-[#8b6bff] bg-[#17171d] text-[#c9b8ff]"}`}>
                <User className="h-6 w-6" aria-hidden="true" />
              </span>
              {s && (
                <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={tr(0.9 + i * 0.1, 0.3)} className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-rose-400 text-xs font-bold text-[#0d0d12]">?</motion.span>
              )}
              <span className={`h-1.5 w-10 rounded-full ${s ? "bg-rose-400/60" : "bg-emerald-300/70"}`} />
            </motion.div>
          );
        })}
      </div>
      <p className="mt-5 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-white/70">{label}</p>
    </div>
  );
}

function Rings({ items }: { items: string[] }) {
  const { tr } = useA();
  const n = items.length;
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[340px]">
      {[...items].reverse().map((it, ri) => {
        const i = n - 1 - ri;
        const size = 34 + (i * 66) / Math.max(1, n - 1);
        return (
          <motion.div key={it} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={tr(i * 0.3, 0.6)} className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 justify-center rounded-full border ${i === 0 ? "items-center border-[#8b6bff] bg-[#622FFD]" : "items-start border-[#8b6bff]/40 bg-[#622FFD]/[0.06] pt-3"}`} style={{ width: `${size}%`, height: `${size}%` }}>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-white">{it}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

function Noise({ before, after, action }: { before: string; after: string; action: string }) {
  const { reduce, tr } = useA();
  const junk = ["#e95bff", "#43d97b", "#3739ad", "rgba(255,255,255,0.3)", "#e95bff", "#3739ad", "#43d97b"];
  return (
    <div className="grid grid-cols-1 items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
        <p className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white/60"><AlertTriangle className="h-4 w-4 text-rose-300" aria-hidden="true" />{before}</p>
        <div className="relative h-40">
          {junk.map((c, i) => (
            <motion.span key={i} className="absolute rounded" style={{ background: c, left: `${(i * 37) % 70}%`, top: `${(i * 23) % 80}%`, width: `${20 + ((i * 13) % 30)}%`, height: 12 }} animate={reduce ? undefined : { x: [0, (i % 2 ? 6 : -6), 0], rotate: [0, i % 2 ? 4 : -4, 0] }} transition={{ duration: 2 + i * 0.3, repeat: Infinity }} />
          ))}
        </div>
      </div>
      <motion.span aria-hidden="true" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={tr(0.4)} className="mx-auto flex h-10 w-10 rotate-90 items-center justify-center rounded-full bg-[#622FFD] text-white md:rotate-0"><Wand2 className="h-5 w-5" /></motion.span>
      <motion.div initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={tr(0.7)} className="rounded-2xl border border-[#8b6bff]/60 bg-[#622FFD]/10 p-4">
        <p className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#c9b8ff]"><Sparkles className="h-4 w-4" aria-hidden="true" />{after}</p>
        <div className="flex h-40 flex-col justify-center gap-2.5">
          <span className="h-3.5 w-3/5 rounded bg-white/80" />
          <span className="h-2 w-4/5 rounded bg-white/25" />
          <span className="h-2 w-2/3 rounded bg-white/25" />
          <motion.span initial={{ scale: reduce ? 1 : 0.8 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={tr(1.1, 0.4)} className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[#622FFD] px-4 py-2 text-xs font-semibold text-white">
            <MousePointerClick className="h-3.5 w-3.5" aria-hidden="true" />{action}
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
}

/* Funil de seleção: muitas opções viram poucas boas decisões */
function Funnel({ stages }: { stages: { count: number; label: string; icon?: string }[] }) {
  const { tr } = useA();
  return (
    <div className="flex flex-col gap-3">
      {stages.map((s, i) => (
        <motion.div key={s.label} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={tr(i * 0.3)} className="flex items-center gap-4">
          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${i === stages.length - 1 ? "bg-[#622FFD] text-white" : "bg-[#622FFD]/15 text-[#c9b8ff]"}`}><Ico name={s.icon} className="h-4 w-4" /></span>
          <div className="flex flex-1 flex-wrap gap-1.5">
            {Array.from({ length: s.count }).map((_, k) => (
              <motion.span key={k} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={tr(i * 0.3 + 0.1 + k * 0.05, 0.25)} className={`h-8 w-11 rounded-md border ${i === stages.length - 1 ? "border-[#8b6bff] bg-[#622FFD]" : "border-white/15 bg-[#17171d]"}`} />
            ))}
          </div>
          <span className="w-40 shrink-0 text-right text-sm font-semibold text-white/85 sm:w-56">{s.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

/* Dois caminhos que se encontram em um resultado */
function Merge({ a, b, result }: { a: { title: string; steps: string[]; icon?: string }; b: { title: string; steps: string[]; icon?: string }; result: string[] }) {
  const { tr } = useA();
  const lane = (l: typeof a, d: number) => (
    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={tr(d)} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#c9b8ff]"><Ico name={l.icon} className="h-4 w-4" />{l.title}</p>
      <ol className="mt-3 flex flex-wrap items-center gap-1.5">
        {l.steps.map((s, i) => (
          <li key={s} className="flex items-center gap-1.5">
            {i > 0 && <ArrowRight className="h-3.5 w-3.5 text-[#8b6bff]" aria-hidden="true" />}
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={tr(d + 0.2 + i * 0.15, 0.3)} className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-white/85">{s}</motion.span>
          </li>
        ))}
      </ol>
    </motion.div>
  );
  return (
    <div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">{lane(a, 0)}{lane(b, 0.3)}</div>
      <svg viewBox="0 0 400 50" className="h-12 w-full" aria-hidden="true" preserveAspectRatio="none">
        <motion.path d="M100 0 C100 30, 200 20, 200 50" fill="none" stroke={P2} strokeWidth={2} initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={tr(1.1, 0.5)} />
        <motion.path d="M300 0 C300 30, 200 20, 200 50" fill="none" stroke={P2} strokeWidth={2} initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={tr(1.1, 0.5)} />
      </svg>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={tr(1.5)} className="mx-auto flex w-fit flex-wrap items-center justify-center gap-2 rounded-full bg-[#622FFD] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(98,47,253,0.5)]">
        <Lightbulb className="h-4 w-4" aria-hidden="true" />
        {result.join(" → ")}
      </motion.div>
    </div>
  );
}

/* Faixas comparando dois processos (antes / agora) */
function Lanes({ lanes }: { lanes: { title: string; steps: string[]; highlight?: number[] }[] }) {
  const { tr } = useA();
  return (
    <div className="flex flex-col gap-4">
      {lanes.map((l, li) => (
        <motion.div key={l.title} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={tr(li * 0.5)} className={`rounded-2xl border p-4 ${li === lanes.length - 1 ? "border-[#8b6bff]/50 bg-[#622FFD]/[0.07]" : "border-white/10 bg-white/[0.02]"}`}>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">{l.title}</p>
          <ol className="mt-3 flex flex-wrap items-center gap-1.5">
            {l.steps.map((s, i) => {
              const hi = l.highlight?.includes(i);
              return (
                <li key={s} className="flex items-center gap-1.5">
                  {i > 0 && <ArrowRight className="h-3.5 w-3.5 text-white/40" aria-hidden="true" />}
                  <motion.span initial={{ opacity: 0, y: 4 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={tr(li * 0.5 + 0.15 + i * 0.12, 0.3)} className={`rounded-full px-3 py-1.5 text-xs font-medium ${hi ? "bg-[#622FFD] text-white" : "border border-white/15 text-white/85"}`}>
                    {s}
                  </motion.span>
                </li>
              );
            })}
          </ol>
        </motion.div>
      ))}
    </div>
  );
}

/* Filtro crítico: a solução passa por critérios antes de seguir */
function Gate({ input, checks, pass, fail }: { input: string; checks: (string | Item)[]; pass: string; fail: string }) {
  const { tr } = useA();
  const its = checks.map(asItem);
  return (
    <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[auto_1fr_auto]">
      <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={tr(0)} className="mx-auto flex w-36 flex-col items-center gap-2 rounded-2xl border border-white/10 bg-[#17171d] p-4 text-center">
        <Sparkles className="h-6 w-6 text-[#c9b8ff]" aria-hidden="true" />
        <span className="text-xs font-semibold text-white">{input}</span>
      </motion.div>
      <div className="flex flex-col gap-1.5 rounded-2xl border border-[#8b6bff]/40 bg-[#622FFD]/[0.06] p-3">
        {its.map((it, i) => (
          <motion.div key={it.label} initial={{ opacity: 0.2 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={tr(0.3 + i * 0.25, 0.3)} className="flex items-center gap-2.5 rounded-lg bg-black/30 px-3 py-2 text-sm text-white/90">
            <Ico name={it.icon ?? "filter"} className="h-4 w-4 text-[#A48BFF]" />
            {it.label}
            <Check className="ml-auto h-4 w-4 text-emerald-300" aria-hidden="true" />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <motion.span initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={tr(0.4 + its.length * 0.25)} className="inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-3 py-2 text-xs font-semibold text-emerald-300"><CheckCircle2 className="h-4 w-4" aria-hidden="true" />{pass}</motion.span>
        <motion.span initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={tr(0.6 + its.length * 0.25)} className="inline-flex items-center gap-2 rounded-full bg-rose-400/15 px-3 py-2 text-xs font-semibold text-rose-300"><Repeat className="h-4 w-4" aria-hidden="true" />{fail}</motion.span>
      </div>
    </div>
  );
}

/* Níveis de autonomia: quanto maior o impacto, mais controle */
function Levels({ items }: { items: { level: string; example: string; control: string; icon?: string }[] }) {
  const { tr } = useA();
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      {items.map((it, i) => (
        <motion.div key={it.level} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={tr(i * 0.2)} className="rounded-2xl border border-white/10 bg-[#17171d] p-4">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#c9b8ff]">{it.level}</p>
            <span className="flex gap-0.5" aria-hidden="true">
              {[0, 1, 2].map((k) => <span key={k} className={`h-3 w-1.5 rounded-sm ${k <= i ? "bg-[#8b6bff]" : "bg-white/15"}`} />)}
            </span>
          </div>
          <p className="mt-3 text-sm text-white/85">{it.example}</p>
          <p className="mt-3 flex items-center gap-2 rounded-lg bg-[#622FFD]/15 px-3 py-2 text-xs font-semibold text-white"><Ico name={it.icon ?? "shieldCheck"} className="h-4 w-4 text-[#c9b8ff]" />{it.control}</p>
        </motion.div>
      ))}
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GENERIC: Record<VisualData["kind"], React.FC<any>> = {
  flow: Flow, stats: Stats, checklist: Checklist, compare: Compare, cards: Cards, cycle: Cycle, layers: Layers, people: People, rings: Rings,
  ladder: Ladder, noise: Noise, funnel: Funnel, merge: Merge, lanes: Lanes, gate: Gate, levels: Levels,
};

/* Capa animada: ícones do tema conectados ao redor de um núcleo. */
export function CoverArt({ icons, label, size = "card" }: { icons: string[]; label: string; size?: "card" | "hero" }) {
  const reduce = useReducedMotion();
  const pos = [
    { x: 22, y: 34 },
    { x: 78, y: 28 },
    { x: 72, y: 74 },
    { x: 28, y: 72 },
  ];
  return (
    <div role="img" aria-label={label} className={`relative w-full overflow-hidden bg-[#0d0d12] ${size === "hero" ? "aspect-[2/1] rounded-3xl" : "aspect-[16/9]"}`}>
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(60%_70%_at_50%_50%,rgba(98,47,253,0.35),transparent_70%)]" />
      <div aria-hidden="true" className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {icons.slice(0, 4).map((_, i) => (
          <motion.line key={i} x1={50} y1={50} x2={pos[i].x} y2={pos[i].y} stroke={P2} strokeWidth={1.5} vectorEffect="non-scaling-stroke" strokeDasharray="4 5" initial={{ opacity: reduce ? 0.7 : 0 }} animate={reduce ? { opacity: 0.7 } : { opacity: [0.35, 0.9, 0.35], strokeDashoffset: [0, -18] }} transition={reduce ? { duration: 0 } : { duration: 2.4, repeat: Infinity, ease: "linear", delay: i * 0.3 }} />
        ))}
      </svg>
      <motion.span aria-hidden="true" className="absolute left-1/2 top-1/2 flex h-[22%] w-auto -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#622FFD] text-white shadow-[0_0_60px_rgba(98,47,253,0.8)]" style={{ aspectRatio: "1" }} animate={reduce ? undefined : { scale: [1, 1.06, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
        <Ico name={icons[0]} className="h-1/2 w-1/2" />
      </motion.span>
      {icons.slice(1, 5).map((ic, i) => (
        <motion.span key={ic + i} aria-hidden="true" className="absolute flex h-[15%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-white/15 bg-[#17171d] text-[#c9b8ff]" style={{ left: `${pos[i].x}%`, top: `${pos[i].y}%`, aspectRatio: "1" }} animate={reduce ? undefined : { y: [0, i % 2 ? 5 : -5, 0] }} transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}>
          <Ico name={ic} className="h-1/2 w-1/2" />
        </motion.span>
      ))}
      <span aria-hidden="true" className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">{label}</span>
    </div>
  );
}

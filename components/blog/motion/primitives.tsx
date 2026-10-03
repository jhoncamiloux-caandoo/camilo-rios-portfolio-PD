"use client";

import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useMotionValueEvent, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";

/* Sistema de motion do blog: peças pequenas e reutilizáveis.
   Regras: o texto é sempre texto real no DOM (SEO e leitor de tela), o movimento
   acompanha a leitura (scroll ou entrada na tela) e, com movimento reduzido,
   tudo aparece direto no estado final. */

export const M = {
  ink: "#0A0A0A",
  night: "#0d0d12",
  card: "#17171f",
  p: "#622FFD",
  p2: "#8b6bff",
  lilac: "#A48BFF",
  g: "#A3E635",
  red: "#f87171",
  amb: "#fbbf24",
  ease: [0.22, 1, 0.36, 1] as const,
};

/* Seção que vaza para a largura total da tela, com fundo próprio. */
export function Bleed({ children, tone = "dark", className = "" }: { children: ReactNode; tone?: "dark" | "light" | "violet"; className?: string }) {
  const bg = tone === "dark" ? "bg-[#0d0d12] text-white" : tone === "violet" ? "bg-[#622FFD] text-white" : "bg-[#F4F2FF] text-[#0A0A0A]";
  return <section className={`relative mx-[calc(50%-50vw)] my-16 md:my-24 ${bg} ${className}`}>{children}</section>;
}

/* Cena presa à tela enquanto o leitor rola: entrega o progresso 0→1. */
export function Sticky({ height = 300, children, className = "" }: { height?: number; children: (p: MotionValue<number>) => ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  // Telas pequenas ou baixas: sem prender a cena; ela anima enquanto passa pela tela.
  const [pin, setPin] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (min-height: 640px)");
    const on = () => setPin(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: pin ? ["start start", "end end"] : ["start 0.85", "end 0.55"] });
  const done = useTransform(scrollYProgress, () => 1);
  const sticky = pin && !reduce;
  return (
    <div ref={ref} className={`relative ${className}`} style={{ height: sticky ? `${height}vh` : "auto" }}>
      <div className={sticky ? "sticky top-0 flex h-[100svh] items-center overflow-hidden py-10" : "py-16"}>{children(reduce ? done : scrollYProgress)}</div>
    </div>
  );
}

/* Faixa do progresso: valor 0→1 entre a e b. */
export function useRange(p: MotionValue<number>, a: number, b: number) {
  return useTransform(p, [a, b], [0, 1], { clamp: true });
}

/* Índice discreto a partir do progresso (para trocar estados). */
export function useStep(p: MotionValue<number>, steps: number) {
  const [i, setI] = useState(0);
  useMotionValueEvent(p, "change", (v) => setI(Math.min(steps - 1, Math.max(0, Math.floor(v * steps)))));
  useEffect(() => setI(Math.min(steps - 1, Math.max(0, Math.floor(p.get() * steps)))), [p, steps]);
  return i;
}

/* Palavras que acendem conforme a leitura avança. `marks` destaca termos. */
export function ScrollWords({ text, p, from = 0, to = 1, marks = [], className = "", dim = "rgba(255,255,255,0.18)", lit = "#fff", markColor = M.lilac }: { text: string; p: MotionValue<number>; from?: number; to?: number; marks?: string[]; className?: string; dim?: string; lit?: string; markColor?: string }) {
  const words = text.split(" ");
  const norm = (w: string) => w.toLowerCase().replace(/[.,:;!?“”"()]/g, "");
  const markSet = new Set(marks.flatMap((m) => m.split(" ").map(norm)));
  return (
    <p className={className}>
      {words.map((w, i) => {
        const a = from + ((to - from) * i) / words.length;
        return <Word key={i} p={p} a={a} b={a + (to - from) / words.length} w={w} mark={markSet.has(norm(w))} dim={dim} lit={lit} markColor={markColor} />;
      })}
    </p>
  );
}
function Word({ p, a, b, w, mark, dim, lit, markColor }: { p: MotionValue<number>; a: number; b: number; w: string; mark: boolean; dim: string; lit: string; markColor: string }) {
  const color = useTransform(p, [a, b], [dim, mark ? markColor : lit]);
  return (
    <>
      <motion.span style={{ color }} className={mark ? "font-semibold" : undefined}>{w}</motion.span>{" "}
    </>
  );
}

/* Título cinético: palavras sobem de uma máscara. Só CSS, não atrasa o LCP. */
export function KineticTitle({ text, as: Tag = "h1", className = "" }: { text: string; as?: "h1" | "h2" | "p"; className?: string }) {
  return (
    <Tag className={className}>
      {text.split(" ").map((w, i) => (
        <Fragment key={i}>
          <span className="kt-mask">
            <span className="kt-word" style={{ animationDelay: `${0.05 + i * 0.06}s` }}>{w}</span>
          </span>{" "}
        </Fragment>
      ))}
    </Tag>
  );
}

/* Frase forte como cena: cada linha entra por máscara; a ênfase muda de cor. */
export function KineticQuote({ lines, emphasis = [], tone = "dark" }: { lines: string[]; emphasis?: number[]; tone?: "dark" | "violet" }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-25% 0px" });
  const reduce = useReducedMotion();
  return (
    <Bleed tone={tone}>
      <div ref={ref} className="container flex min-h-[60vh] max-w-5xl flex-col justify-center py-24">
        {lines.map((l, i) => (
          <span key={i} className="block overflow-hidden pb-[0.12em]">
            <motion.span
              className={`block font-display text-[44px] font-semibold leading-[1.02] tracking-tight md:text-[88px] ${emphasis.includes(i) ? (tone === "violet" ? "text-[#A3E635]" : "text-[#A48BFF]") : "text-white"}`}
              initial={reduce ? false : { y: "110%" }}
              animate={inView ? { y: "0%" } : undefined}
              transition={{ duration: 0.9, ease: M.ease, delay: i * 0.18 }}
            >
              {l}
            </motion.span>
          </span>
        ))}
      </div>
    </Bleed>
  );
}

/* Número que conta ao entrar na tela. */
export function CountUp({ to, suffix = "", className = "", duration = 1.2 }: { to: number; suffix?: string; className?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const reduce = useReducedMotion();
  const [v, setV] = useState(reduce ? to : 0);
  useEffect(() => {
    if (!inView || reduce) { if (reduce) setV(to); return; }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / (duration * 1000));
      setV(Math.round(to * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, to, duration]);
  return <span ref={ref} className={className}>{v}{suffix}</span>;
}

/* Texto que troca entre frases com deslize vertical (controlado por índice). */
export function SwapText({ items, index, className = "" }: { items: string[]; index: number; className?: string }) {
  return (
    <span className={`relative block overflow-hidden ${className}`}>
      {/* reserva a altura da frase mais longa */}
      <span className="invisible block">{items.reduce((a, b) => (b.length > a.length ? b : a))}</span>
      {items.map((t, i) => (
        <motion.span key={t} className="absolute inset-x-0 top-0 block" initial={false} animate={{ y: i === index ? "0%" : i < index ? "-110%" : "110%", opacity: i === index ? 1 : 0 }} transition={{ duration: 0.6, ease: M.ease }}>
          {t}
        </motion.span>
      ))}
    </span>
  );
}

/* Rótulo mono pequeno, padrão das cenas. */
export function Eyebrow({ children, color = M.lilac }: { children: ReactNode; color?: string }) {
  return <p className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color }}>{children}</p>;
}

/* Barra de progresso da cena (mostra onde o leitor está dentro dela). */
export function SceneRail({ p, labels }: { p: MotionValue<number>; labels: string[] }) {
  const step = useStep(p, labels.length);
  const w = useTransform(p, [0, 1], ["0%", "100%"]);
  return (
    <div className="w-full">
      <div className="h-px w-full bg-white/10"><motion.div className="h-px bg-[#A48BFF]" style={{ width: w }} /></div>
      <ol className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[10px] uppercase tracking-[0.16em]">
        {labels.map((l, i) => <li key={l} className={i === step ? "text-white" : i < step ? "text-white/55" : "text-white/30"}>{String(i + 1).padStart(2, "0")} {l}</li>)}
      </ol>
    </div>
  );
}

/* ── Tipografia expressiva (laboratório 2) ── */

/* Palavras da DM Sans variável que ganham peso conforme a leitura avança. */
export function WeightWords({ text, p, from = 0, to = 1, className = "" }: { text: string; p: MotionValue<number>; from?: number; to?: number; className?: string }) {
  const words = text.split(" ");
  return (
    <p className={className}>
      {words.map((w, i) => {
        const a = from + ((to - from) * i) / words.length;
        return <WeightWord key={i} p={p} a={a} b={a + ((to - from) * 2.5) / words.length} w={w} />;
      })}
    </p>
  );
}
function WeightWord({ p, a, b, w }: { p: MotionValue<number>; a: number; b: number; w: string }) {
  const wght = useTransform(p, [a, b], [200, 820]);
  const op = useTransform(p, [a, b], [0.35, 1]);
  const fv = useTransform(wght, (v) => `"wght" ${Math.round(v)}`);
  return (
    <>
      <motion.span style={{ fontVariationSettings: fv, opacity: op }} className="font-sans">{w}</motion.span>{" "}
    </>
  );
}

/* Texto que se preenche da esquerda para a direita (contorno → sólido). */
export function FillText({ text, p, from = 0, to = 1, className = "", color = "#ffffff" }: { text: string; p: MotionValue<number>; from?: number; to?: number; className?: string; color?: string }) {
  const pct = useTransform(p, [from, to], [0, 100], { clamp: true });
  const bg = useTransform(pct, (v) => `linear-gradient(90deg, ${color} ${v}%, transparent ${v}%)`);
  return (
    <motion.span
      className={`inline bg-clip-text text-transparent [-webkit-background-clip:text] ${className}`}
      style={{ backgroundImage: bg, WebkitTextStroke: `1.5px ${color}` }}
    >
      {text}
    </motion.span>
  );
}

/* Texto que entra em foco (desfocado e apagado → nítido). */
export function FocusText({ children, p, from, to, className = "" }: { children: ReactNode; p: MotionValue<number>; from: number; to: number; className?: string }) {
  const blur = useTransform(p, [from, to], [10, 0], { clamp: true });
  const op = useTransform(p, [from, to], [0.2, 1], { clamp: true });
  const filter = useTransform(blur, (b) => `blur(${b}px)`);
  return <motion.div style={{ filter, opacity: op }} className={className}>{children}</motion.div>;
}

/* Trilha horizontal movida pelo scroll vertical. */
export function HorizontalTrack({ p, children, className = "" }: { p: MotionValue<number>; children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [max, setMax] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const on = () => setMax(Math.max(0, el.scrollWidth - window.innerWidth + 48));
    on();
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  const x = useTransform(p, [0.05, 0.95], [0, -max], { clamp: true });
  return <motion.div ref={ref} style={{ x }} className={`flex w-max items-center ${className}`}>{children}</motion.div>;
}

/* Marca-texto desenhado à mão sob uma palavra, ao entrar na tela. */
export function Marker({ children, color = M.g, delay = 0.2 }: { children: ReactNode; color?: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const reduce = useReducedMotion();
  return (
    <span ref={ref} className="relative inline-block">
      <svg aria-hidden="true" className="absolute -bottom-[0.12em] left-[-2%] h-[0.38em] w-[104%]" viewBox="0 0 200 20" preserveAspectRatio="none">
        <motion.path d="M2 14 C 50 6, 120 18, 198 8" fill="none" stroke={color} strokeWidth="9" strokeLinecap="round" initial={{ pathLength: reduce ? 1 : 0 }} animate={inView ? { pathLength: 1 } : undefined} transition={{ duration: 0.8, ease: M.ease, delay }} opacity={0.85} />
      </svg>
      <span className="relative">{children}</span>
    </span>
  );
}

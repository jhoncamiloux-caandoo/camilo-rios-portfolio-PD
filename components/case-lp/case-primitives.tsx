"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/* Ease padrão do case: cubic-bezier(0.22,1,0.36,1) */
export const ease = [0.22, 1, 0.36, 1] as const;

/* ── Eyebrow de capítulo ─────────────────────────────────────────── */
export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <motion.p
      className={`font-sans text-xs font-semibold uppercase tracking-[0.22em] ${
        light ? "text-[#8E6BFF]" : "text-[#622FFD]"
      }`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease }}
    >
      {children}
    </motion.p>
  );
}

/* ── Título com blur reveal palavra por palavra ──────────────────── */
export function BlurTitle({
  text,
  className = "",
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.035 } },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          style={{ display: "inline-block", marginRight: "0.24em" }}
          variants={{
            hidden: reduce
              ? { opacity: 1 }
              : { opacity: 0, y: 32, filter: "blur(14px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.7, ease },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
}

/* ── Reveal genérico: fade + translateY ao entrar na viewport ────── */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* ── CountUp com easeOutQuart, decimais e delay ──────────────────── */
export function useCountUp(
  target: number,
  {
    duration = 1400,
    decimals = 0,
    startDelay = 0,
    enabled = true,
  }: {
    duration?: number;
    decimals?: number;
    startDelay?: number;
    enabled?: boolean;
  } = {}
) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let raf: number;
    const timeout = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const e = 1 - Math.pow(1 - t, 4);
        const factor = Math.pow(10, decimals);
        setValue(Math.round(e * target * factor) / factor);
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [target, duration, decimals, startDelay, enabled]);

  return value;
}

/* ── Número gigante animado ──────────────────────────────────────── */
export function BigNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
  duration = 1600,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(value, { duration, decimals, enabled: inView });

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {prefix}
      {count.toLocaleString("pt-BR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

/* ── Linha vertical que se desenha ao scroll ─────────────────────── */
export function DrawnLine({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={`w-px origin-top ${
        light ? "bg-gradient-to-b from-[#622FFD] to-white/10" : "bg-gradient-to-b from-[#622FFD] to-black/10"
      } ${className}`}
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, ease }}
    />
  );
}

/* ── Grade de métricas — número gigante + rótulo, em linha ───────── */
export interface MetricItem {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function MetricGrid({
  items,
  dark = false,
  className = "",
}: {
  items: MetricItem[];
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap justify-center gap-x-10 gap-y-10 ${className}`}>
      {items.map((m, i) => (
        <Reveal
          key={m.label}
          delay={i * 0.08}
          className="flex min-w-[120px] flex-col items-center gap-2 text-center"
        >
          <BigNumber
            value={m.value}
            prefix={m.prefix}
            suffix={m.suffix}
            decimals={m.decimals ?? 0}
            className={`font-display text-4xl font-semibold tracking-tight md:text-5xl ${
              dark ? "text-white" : "text-[#0A0A0A]"
            }`}
          />
          <span className={`font-sans text-sm ${dark ? "text-white/40" : "text-[#0A0A0A]/45"}`}>
            {m.label}
          </span>
        </Reveal>
      ))}
    </div>
  );
}

/* ── Timeline vertical — etapas alternando de lado ────────────────── */
export interface TimelineStep {
  title: string;
  description: string;
}

export function Timeline({
  steps,
  dark = false,
}: {
  steps: TimelineStep[];
  dark?: boolean;
}) {
  return (
    <div className="relative mx-auto max-w-2xl">
      <DrawnLine
        light={dark}
        className="absolute left-[7px] top-2 h-[calc(100%-16px)] md:left-1/2"
      />
      <div className="flex flex-col gap-14 md:gap-20">
        {steps.map((step, i) => {
          const left = i % 2 === 0;
          return (
            <Reveal key={step.title} className="relative">
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-[3px] md:left-1/2 md:-translate-x-1/2 ${
                  dark ? "border-white bg-[#0A0A0A]" : "border-[#622FFD] bg-white"
                }`}
              />
              <div
                className={`pl-10 md:w-[calc(50%-32px)] md:pl-0 ${
                  left ? "md:pr-0 md:text-right" : "md:ml-auto"
                }`}
              >
                <h3
                  className={`font-display text-xl font-semibold tracking-tight md:text-2xl ${
                    dark ? "text-white" : "text-[#0A0A0A]"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`mt-2 font-sans text-sm leading-relaxed md:text-base ${
                    dark ? "text-white/50" : "text-[#0A0A0A]/50"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

/* ── Diagrama de fluxo — nós conectados por setas, texto→texto ───── */
export function FlowDiagram({
  nodes,
  activeIndex,
  dark = false,
  direction = "horizontal",
}: {
  nodes: string[];
  activeIndex?: number;
  dark?: boolean;
  direction?: "horizontal" | "vertical";
}) {
  const vertical = direction === "vertical";
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-3 md:gap-4 ${
        vertical ? "flex-col" : ""
      }`}
    >
      {nodes.map((node, i) => (
        <div
          key={node}
          className={`flex items-center gap-3 md:gap-4 ${vertical ? "flex-col" : ""}`}
        >
          {i > 0 && (
            <svg
              viewBox="0 0 24 24"
              className={`h-4 w-4 shrink-0 ${vertical ? "rotate-90" : ""} ${
                dark ? "text-white/40" : "text-[#622FFD]"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          )}
          <span
            className={`rounded-full px-5 py-2.5 text-center font-sans text-sm font-semibold md:text-base ${
              i === activeIndex
                ? "bg-[#622FFD] text-white shadow-[0_8px_28px_-8px_rgba(98,47,253,0.6)]"
                : dark
                  ? "border border-white/15 bg-white/5 text-white"
                  : "border border-black/[0.08] bg-white text-[#0A0A0A]"
            }`}
          >
            {node}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ── Browser mockup genérico — chrome + screenshot real ───────────── */
export function BrowserMockup({
  src,
  alt,
  url = "clintdigital.com.br",
  className = "",
}: {
  src: string;
  alt: string;
  url?: string;
  className?: string;
}) {
  return (
    <div className={`relative w-full select-none ${className}`} aria-hidden={alt ? undefined : "true"}>
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[28px] bg-[#622FFD]/8 blur-3xl"
      />
      <div className="relative overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_32px_80px_-16px_rgba(10,10,10,0.22)]">
        <div className="flex h-9 shrink-0 items-center gap-2 border-b border-black/[0.06] bg-[#F5F5F5] px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <div className="mx-auto flex h-5 w-48 items-center justify-center rounded bg-white/70 px-3">
            <span className="font-mono text-[9px] text-[#9AA0A6]">{url}</span>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="block w-full object-cover object-top" draggable={false} />
      </div>
    </div>
  );
}

/* ── Device mockup genérico — frame de celular + screenshot real ──── */
export function DeviceMockup({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto w-full max-w-[280px] select-none ${className}`}>
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[40px] bg-[#622FFD]/8 blur-3xl"
      />
      <div className="relative overflow-hidden rounded-[32px] border-[6px] border-[#0A0A0A] bg-[#0A0A0A] shadow-[0_32px_80px_-16px_rgba(10,10,10,0.28)]">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-[#0A0A0A]"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="block w-full object-cover" draggable={false} />
      </div>
    </div>
  );
}

/* ── Antes/depois — slider arrastável, acessível via input range ─── */
export function BeforeAfter({
  before,
  after,
  beforeLabel = "Antes",
  afterLabel = "Depois",
  className = "",
}: {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}) {
  const [percent, setPercent] = useState(50);

  return (
    <div
      className={`relative w-full select-none overflow-hidden rounded-2xl border border-black/[0.08] ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={after} alt={afterLabel} className="block w-full" draggable={false} />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={before} alt={beforeLabel} className="block w-full" draggable={false} />
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_2px_rgba(0,0,0,0.15)]"
        style={{ left: `${percent}%` }}
      />
      <input
        type="range"
        min={0}
        max={100}
        value={percent}
        onChange={(e) => setPercent(Number(e.target.value))}
        aria-label={`Arraste para comparar ${beforeLabel.toLowerCase()} e ${afterLabel.toLowerCase()}`}
        className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
      />
      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 font-sans text-xs font-semibold text-white">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 font-sans text-xs font-semibold text-white">
        {afterLabel}
      </span>
    </div>
  );
}

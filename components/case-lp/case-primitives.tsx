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

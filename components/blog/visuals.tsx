"use client";

import { motion, useReducedMotion } from "framer-motion";

/* SVGs animados do blog, na linha visual do portfólio: fundo escuro,
   roxo #622FFD / #8b6bff, rótulos em mono. Animam ao entrar na tela;
   com movimento reduzido aparecem no estado final. */

const P = "#622FFD";
const P2 = "#8b6bff";
const MUTED = "rgba(255,255,255,0.12)";
const TXT = "rgba(255,255,255,0.86)";
const SUB = "rgba(255,255,255,0.6)";
const MONO = "ui-monospace, SFMono-Regular, Menlo, monospace";

function useAnim() {
  const reduce = useReducedMotion();
  return {
    reduce,
    view: { once: true, margin: "-80px" } as const,
    t: (delay = 0, duration = 0.9) => ({ duration: reduce ? 0 : duration, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] as const }),
  };
}

function Label({ x, y, children, anchor = "start", color = SUB, size = 11 }: { x: number; y: number; children: React.ReactNode; anchor?: "start" | "middle" | "end"; color?: string; size?: number }) {
  return (
    <text x={x} y={y} fill={color} fontSize={size} fontFamily={MONO} textAnchor={anchor} letterSpacing="0.06em">
      {children}
    </text>
  );
}

/* UX → Conversão / Retenção / CAC → Receita */
function UxKpiMap() {
  const { view, t, reduce } = useAnim();
  const mid = [
    { y: 70, label: "CONVERSÃO" },
    { y: 150, label: "RETENÇÃO" },
    { y: 230, label: "CAC ↓" },
  ];
  return (
    <svg viewBox="0 0 600 300" className="h-auto w-full" role="img" aria-label="Diagrama: melhoria de UX alimenta conversão, retenção e redução de CAC, que juntos geram receita">
      {mid.map((m, i) => (
        <g key={m.label}>
          <motion.path d={`M140 150 C 220 150, 200 ${m.y}, 250 ${m.y}`} stroke={P2} strokeWidth={2} fill="none" initial={{ pathLength: reduce ? 1 : 0 }} whileInView={{ pathLength: 1 }} viewport={view} transition={t(0.3 + i * 0.15)} />
          <motion.path d={`M370 ${m.y} C 420 ${m.y}, 400 150, 470 150`} stroke={P2} strokeWidth={2} fill="none" initial={{ pathLength: reduce ? 1 : 0 }} whileInView={{ pathLength: 1 }} viewport={view} transition={t(0.9 + i * 0.15)} />
          <motion.g initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={view} transition={t(0.6 + i * 0.15, 0.5)}>
            <rect x={250} y={m.y - 22} width={120} height={44} rx={10} fill="rgba(98,47,253,0.12)" stroke="rgba(139,107,255,0.45)" />
            <Label x={310} y={m.y + 4} anchor="middle" color={TXT}>{m.label}</Label>
          </motion.g>
        </g>
      ))}
      <rect x={30} y={120} width={110} height={60} rx={12} fill="rgba(255,255,255,0.05)" stroke={MUTED} />
      <Label x={85} y={147} anchor="middle" color={TXT} size={13}>UX</Label>
      <Label x={85} y={165} anchor="middle" size={9}>melhoria</Label>
      <motion.g initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={view} transition={t(1.4, 0.6)} style={{ transformOrigin: "525px 150px" }}>
        <rect x={470} y={115} width={110} height={70} rx={14} fill={P} />
        <Label x={525} y={147} anchor="middle" color="#fff" size={13}>RECEITA</Label>
        <Label x={525} y={166} anchor="middle" color="rgba(255,255,255,0.8)" size={9}>↑ crescimento</Label>
      </motion.g>
    </svg>
  );
}

/* Formulário longo → curto, conversão sobe 17% (exemplo do artigo) */
function CheckoutFields() {
  const { view, t, reduce } = useAnim();
  const fields = [0, 1, 2, 3, 4, 5, 6, 7];
  const keep = [0, 3, 6];
  return (
    <svg viewBox="0 0 600 300" className="h-auto w-full" role="img" aria-label="Formulário de checkout com 8 campos reduzido para 3, e barra de conversão subindo 17% no exemplo">
      <Label x={40} y={34}>CHECKOUT</Label>
      <rect x={30} y={44} width={250} height={232} rx={14} fill="rgba(255,255,255,0.04)" stroke={MUTED} />
      {fields.map((f) => {
        const kept = keep.includes(f);
        return (
          <motion.rect
            key={f}
            x={50}
            y={62 + f * 25}
            width={210}
            height={16}
            rx={5}
            fill={kept ? "rgba(139,107,255,0.35)" : "rgba(255,255,255,0.12)"}
            initial={{ opacity: 1, scaleX: 1 }}
            whileInView={kept ? { opacity: 1 } : { opacity: reduce ? 0.15 : 0.12, scaleX: reduce ? 1 : 0.2 }}
            viewport={view}
            transition={t(0.3 + f * 0.06, 0.6)}
            style={{ transformOrigin: "50px 0px" }}
          />
        );
      })}
      <Label x={330} y={34}>TAXA DE CONVERSÃO</Label>
      <Label x={330} y={110} size={10}>ANTES</Label>
      <rect x={330} y={120} width={240} height={18} rx={9} fill={MUTED} />
      <rect x={330} y={120} width={120} height={18} rx={9} fill="rgba(255,255,255,0.35)" />
      <Label x={330} y={190} size={10}>DEPOIS</Label>
      <rect x={330} y={200} width={240} height={18} rx={9} fill={MUTED} />
      <motion.rect x={330} y={200} height={18} rx={9} fill={P} initial={{ width: reduce ? 140 : 120 }} whileInView={{ width: 140 }} viewport={view} transition={t(0.9, 1)} />
      <motion.g initial={{ opacity: reduce ? 1 : 0 }} whileInView={{ opacity: 1 }} viewport={view} transition={t(1.6, 0.4)}>
        <Label x={570} y={256} anchor="end" color={P2} size={22}>+17%</Label>
      </motion.g>
    </svg>
  );
}

/* Curva de retenção antes/depois do onboarding */
function RetentionCurve() {
  const { view, t, reduce } = useAnim();
  return (
    <svg viewBox="0 0 600 300" className="h-auto w-full" role="img" aria-label="Gráfico de retenção: a curva depois do novo onboarding cai menos que a curva anterior">
      {[60, 120, 180, 240].map((y) => (
        <line key={y} x1={60} x2={570} y1={y} y2={y} stroke="rgba(255,255,255,0.06)" />
      ))}
      <Label x={60} y={36}>RETENÇÃO DE NOVOS USUÁRIOS</Label>
      <Label x={60} y={270} size={10}>SEMANA 1</Label>
      <Label x={570} y={270} anchor="end" size={10}>SEMANA 8</Label>
      <motion.path d="M60 60 C 140 180, 220 215, 570 235" stroke="rgba(255,255,255,0.35)" strokeWidth={2.5} fill="none" strokeDasharray="6 6" initial={{ pathLength: reduce ? 1 : 0 }} whileInView={{ pathLength: 1 }} viewport={view} transition={t(0.2, 1.2)} />
      <motion.path d="M60 60 C 140 120, 220 160, 570 180" stroke={P2} strokeWidth={3} fill="none" initial={{ pathLength: reduce ? 1 : 0 }} whileInView={{ pathLength: 1 }} viewport={view} transition={t(0.8, 1.2)} />
      <motion.g initial={{ opacity: reduce ? 1 : 0 }} whileInView={{ opacity: 1 }} viewport={view} transition={t(1.8, 0.5)}>
        <Label x={575} y={232} anchor="end" size={10}>antes</Label>
        <Label x={575} y={170} anchor="end" color={P2} size={10}>novo onboarding</Label>
        <line x1={480} x2={480} y1={182} y2={230} stroke={P2} strokeWidth={1.5} />
        <Label x={470} y={212} anchor="end" color={TXT} size={14}>+20%</Label>
      </motion.g>
    </svg>
  );
}

/* Ciclo de indicação reduz CAC */
function ReferralLoop() {
  const { view, t, reduce } = useAnim();
  const nodes = [
    { x: 300, y: 60, l: "USUÁRIO FELIZ" },
    { x: 480, y: 150, l: "INDICA" },
    { x: 300, y: 240, l: "NOVO USUÁRIO" },
    { x: 120, y: 150, l: "BOA EXPERIÊNCIA" },
  ];
  return (
    <svg viewBox="0 0 600 300" className="h-auto w-full" role="img" aria-label="Ciclo: boa experiência gera usuário feliz, que indica, que traz novo usuário, reduzindo o custo de aquisição">
      <motion.circle cx={300} cy={150} r={90} stroke={P2} strokeWidth={2} fill="none" initial={{ pathLength: reduce ? 1 : 0 }} whileInView={{ pathLength: 1 }} viewport={view} transition={t(0.2, 1.4)} style={{ rotate: -90, transformOrigin: "300px 150px" }} />
      {!reduce && (
        <motion.circle r={6} fill={P} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={view} transition={t(1.4, 0.3)}>
          <animateMotion dur="4s" repeatCount="indefinite" path="M300 60 A90 90 0 1 1 299.9 60" />
        </motion.circle>
      )}
      {nodes.map((n, i) => (
        <motion.g key={n.l} initial={{ opacity: reduce ? 1 : 0 }} whileInView={{ opacity: 1 }} viewport={view} transition={t(0.4 + i * 0.25, 0.4)}>
          <rect x={n.x - 70} y={n.y - 16} width={140} height={32} rx={16} fill="#17171d" stroke="rgba(139,107,255,0.5)" />
          <Label x={n.x} y={n.y + 4} anchor="middle" color={TXT} size={10}>{n.l}</Label>
        </motion.g>
      ))}
      <Label x={300} y={146} anchor="middle" color={P2} size={18}>CAC ↓</Label>
      <Label x={300} y={166} anchor="middle" size={9}>menos mídia paga</Label>
    </svg>
  );
}

/* Mesmo KPI antes e depois, ligado à mudança de UX */
function BeforeAfter() {
  const { view, t, reduce } = useAnim();
  const before = [70, 64, 72, 66, 68];
  const after = [96, 110, 124, 132, 140];
  return (
    <svg viewBox="0 0 600 300" className="h-auto w-full" role="img" aria-label="Gráfico de barras do mesmo KPI antes e depois de uma mudança de UX marcada no meio">
      <Label x={40} y={34}>KPI DA EMPRESA</Label>
      <line x1={40} x2={570} y1={250} y2={250} stroke={MUTED} />
      {before.map((h, i) => (
        <motion.rect key={`b${i}`} x={50 + i * 46} width={30} rx={5} fill="rgba(255,255,255,0.25)" initial={{ height: reduce ? h : 0, y: reduce ? 250 - h : 250 }} whileInView={{ height: h, y: 250 - h }} viewport={view} transition={t(0.1 + i * 0.07, 0.6)} />
      ))}
      <motion.g initial={{ opacity: reduce ? 1 : 0 }} whileInView={{ opacity: 1 }} viewport={view} transition={t(0.6, 0.4)}>
        <line x1={300} x2={300} y1={60} y2={250} stroke={P2} strokeDasharray="4 5" />
        <rect x={244} y={50} width={112} height={26} rx={13} fill={P} />
        <Label x={300} y={67} anchor="middle" color="#fff" size={10}>MUDANÇA DE UX</Label>
      </motion.g>
      {after.map((h, i) => (
        <motion.rect key={`a${i}`} x={330 + i * 46} width={30} rx={5} fill={P2} initial={{ height: reduce ? h : 0, y: reduce ? 250 - h : 250 }} whileInView={{ height: h, y: 250 - h }} viewport={view} transition={t(0.8 + i * 0.07, 0.6)} />
      ))}
      <Label x={165} y={272} anchor="middle" size={10}>ANTES</Label>
      <Label x={445} y={272} anchor="middle" color={P2} size={10}>DEPOIS</Label>
    </svg>
  );
}


import { GENERIC, type VisualData } from "./visuals-kit";
import { PROMPT_VISUALS } from "./prompt-visuals";
import { METRIC_VISUALS } from "./metric-visuals";
import { LOTTIE_VISUALS } from "./lottie-demo";
export type { VisualData };

const VISUALS: Record<string, React.FC> = {
  "ux-kpi-map": UxKpiMap,
  "checkout-fields": CheckoutFields,
  "retention-curve": RetentionCurve,
  "referral-loop": ReferralLoop,
  "before-after": BeforeAfter,
  ...PROMPT_VISUALS,
  ...METRIC_VISUALS,
  ...LOTTIE_VISUALS,
};

export function BlogVisual({ id, caption, data }: { id?: string; caption: string; data?: VisualData }) {
  const V: React.FC<any> | undefined = data ? GENERIC[data.kind] : id ? VISUALS[id] : undefined;
  if (!V) return null;
  return (
    <figure className="my-10 overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d12] shadow-[0_32px_80px_-24px_rgba(98,47,253,0.35)]">
      <div className="p-4 md:p-8">
        {data ? <V {...data} /> : <V />}
      </div>
      <figcaption className="border-t border-white/[0.07] px-5 py-4 font-sans text-sm leading-relaxed text-white/70 md:px-8">{caption}</figcaption>
    </figure>
  );
}

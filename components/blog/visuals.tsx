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


/* ── Visuais genéricos, configurados por dados em cada artigo ───────────── */

export type VisualData =
  | { kind: "flow"; steps: string[] }
  | { kind: "stats"; items: { value: string; label: string; source?: string }[] }
  | { kind: "checklist"; items: string[] }
  | { kind: "compare"; left: { title: string; items: string[] }; right: { title: string; items: string[] } }
  | { kind: "cards"; items: { title: string; body?: string }[] }
  | { kind: "cycle"; nodes: string[]; center: string }
  | { kind: "layers"; items: string[] }
  | { kind: "people"; count: number; stuck: number[]; label: string }
  | { kind: "rings"; items: string[] }
  | { kind: "ladder"; steps: string[] }
  | { kind: "noise"; before: string; after: string; action: string };

function Flow({ steps }: { steps: string[] }) {
  const { view, t, reduce } = useAnim();
  const n = steps.length;
  const w = 600 / n;
  return (
    <svg viewBox="0 0 600 160" className="h-auto w-full" role="img" aria-label={steps.join(" → ")}>
      <motion.line x1={w / 2} x2={600 - w / 2} y1={60} y2={60} stroke={P2} strokeWidth={2} initial={{ pathLength: reduce ? 1 : 0 }} whileInView={{ pathLength: 1 }} viewport={view} transition={t(0.1, 1.2)} />
      {steps.map((st, i) => (
        <motion.g key={st} initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={view} transition={t(0.2 + i * 0.18, 0.45)}>
          <circle cx={w * i + w / 2} cy={60} r={18} fill={i === n - 1 ? P : "#17171d"} stroke={P2} strokeWidth={2} />
          <Label x={w * i + w / 2} y={64} anchor="middle" color="#fff" size={11}>{String(i + 1).padStart(2, "0")}</Label>
          <foreignObject x={w * i + 4} y={88} width={w - 8} height={64}>
            <p style={{ color: TXT, fontSize: 12, lineHeight: 1.3, textAlign: "center", fontFamily: "inherit" }}>{st}</p>
          </foreignObject>
        </motion.g>
      ))}
    </svg>
  );
}

function Stats({ items }: { items: { value: string; label: string; source?: string }[] }) {
  const { view, t, reduce } = useAnim();
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <motion.div key={it.label} initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={view} transition={t(i * 0.1, 0.5)} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="font-display text-3xl font-semibold text-white">{it.value}</p>
          <p className="mt-1 text-sm leading-snug text-white/80">{it.label}</p>
          {it.source && <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-[#A48BFF]">{it.source}</p>}
        </motion.div>
      ))}
    </div>
  );
}

function Checklist({ items }: { items: string[] }) {
  const { view, t, reduce } = useAnim();
  return (
    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {items.map((it, i) => (
        <motion.li key={it} initial={{ opacity: reduce ? 1 : 0.2 }} whileInView={{ opacity: 1 }} viewport={view} transition={t(i * 0.12, 0.3)} className="flex items-start gap-3 rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-2.5">
          <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true">
            <rect x={1} y={1} width={18} height={18} rx={5} fill="rgba(98,47,253,0.2)" stroke={P2} />
            <motion.path d="M5.5 10.5l3 3 6-7" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: reduce ? 1 : 0 }} whileInView={{ pathLength: 1 }} viewport={view} transition={t(0.15 + i * 0.12, 0.35)} />
          </svg>
          <span className="text-sm leading-snug text-white/85">{it}</span>
        </motion.li>
      ))}
    </ul>
  );
}

function Compare({ left, right }: { left: { title: string; items: string[] }; right: { title: string; items: string[] } }) {
  const { view, t, reduce } = useAnim();
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
      {[left, right].map((side, si) => (
        <motion.div key={side.title} initial={{ opacity: reduce ? 1 : 0, x: reduce ? 0 : si ? 12 : -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={view} transition={t(si * 0.5, 0.5)} className={`rounded-xl border p-4 ${si ? "border-[#8b6bff]/60 bg-[#622FFD]/10 md:order-3" : "border-white/10 bg-white/[0.02] md:order-1"}`}>
          <p className={`font-mono text-[11px] uppercase tracking-[0.14em] ${si ? "text-[#c9b8ff]" : "text-white/60"}`}>{side.title}</p>
          <ul className="mt-3 flex flex-col gap-2">
            {side.items.map((it) => (
              <li key={it} className="flex gap-2 text-sm text-white/85">
                <span aria-hidden="true" className={si ? "text-emerald-300" : "text-rose-300"}>{si ? "✓" : "✗"}</span>
                {it}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
      <div className="flex items-center justify-center md:order-2" aria-hidden="true">
        <motion.span initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={view} transition={t(0.35, 0.4)} className="flex h-9 w-9 items-center justify-center rounded-full bg-[#622FFD] text-white md:rotate-0">→</motion.span>
      </div>
    </div>
  );
}

function Cards({ items }: { items: { title: string; body?: string }[] }) {
  const { view, t, reduce } = useAnim();
  return (
    <div className={`grid grid-cols-1 gap-3 ${items.length > 3 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"}`}>
      {items.map((it, i) => (
        <motion.div key={it.title} initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={view} transition={t(i * 0.1, 0.45)} className="rounded-xl border border-white/10 bg-[#17171d] p-4">
          <span className="font-mono text-[11px] text-[#A48BFF]">{String(i + 1).padStart(2, "0")}</span>
          <p className="mt-2 font-display text-base font-semibold text-white">{it.title}</p>
          {it.body && <p className="mt-1 text-sm leading-snug text-white/70">{it.body}</p>}
        </motion.div>
      ))}
    </div>
  );
}

function Cycle({ nodes, center }: { nodes: string[]; center: string }) {
  const { view, t, reduce } = useAnim();
  const R = 105;
  return (
    <svg viewBox="0 0 600 300" className="h-auto w-full" role="img" aria-label={`${nodes.join(" → ")} → ${center}`}>
      <motion.circle cx={300} cy={150} r={R} stroke={P2} strokeWidth={2} fill="none" initial={{ pathLength: reduce ? 1 : 0 }} whileInView={{ pathLength: 1 }} viewport={view} transition={t(0.1, 1.3)} style={{ rotate: -90, transformOrigin: "300px 150px" }} />
      {!reduce && (
        <circle r={6} fill={P}>
          <animateMotion dur="5s" repeatCount="indefinite" path={`M300 ${150 - R} A${R} ${R} 0 1 1 299.9 ${150 - R}`} />
        </circle>
      )}
      {nodes.map((n, i) => {
        const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const x = 300 + Math.cos(a) * R;
        const y = 150 + Math.sin(a) * R;
        return (
          <motion.g key={n} initial={{ opacity: reduce ? 1 : 0 }} whileInView={{ opacity: 1 }} viewport={view} transition={t(0.3 + i * 0.2, 0.4)}>
            <rect x={x - 72} y={y - 16} width={144} height={32} rx={16} fill="#17171d" stroke="rgba(139,107,255,0.5)" />
            <Label x={x} y={y + 4} anchor="middle" color={TXT} size={10}>{n.toUpperCase()}</Label>
          </motion.g>
        );
      })}
      <Label x={300} y={155} anchor="middle" color={P2} size={16}>{center}</Label>
    </svg>
  );
}

function Layers({ items }: { items: string[] }) {
  const { view, t, reduce } = useAnim();
  const n = items.length;
  return (
    <svg viewBox="0 0 600 300" className="h-auto w-full" role="img" aria-label={items.join(", ")}>
      {items.map((it, i) => {
        const y = 250 - i * (220 / n);
        const w = 420 - i * 40;
        return (
          <motion.g key={it} initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={view} transition={t(i * 0.22, 0.5)}>
            <rect x={300 - w / 2} y={y - 20} width={w} height={36} rx={10} fill={i === n - 1 ? P : `rgba(98,47,253,${0.1 + i * 0.08})`} stroke="rgba(139,107,255,0.5)" />
            <Label x={300} y={y + 3} anchor="middle" color="#fff" size={11}>{it.toUpperCase()}</Label>
          </motion.g>
        );
      })}
    </svg>
  );
}

function People({ count, stuck, label }: { count: number; stuck: number[]; label: string }) {
  const { view, t, reduce } = useAnim();
  const gap = 600 / (count + 1);
  return (
    <svg viewBox="0 0 600 220" className="h-auto w-full" role="img" aria-label={label}>
      <line x1={40} x2={560} y1={150} y2={150} stroke={MUTED} strokeWidth={2} />
      {Array.from({ length: count }).map((_, i) => {
        const x = gap * (i + 1);
        const isStuck = stuck.includes(i);
        return (
          <motion.g key={i} initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={view} transition={t(i * 0.15, 0.4)}>
            <circle cx={x} cy={88} r={14} fill={isStuck ? "#3a2340" : "#17171d"} stroke={isStuck ? "#fb7185" : P2} strokeWidth={2} />
            <path d={`M${x - 20} 132 Q${x} 104 ${x + 20} 132`} fill="none" stroke={isStuck ? "#fb7185" : P2} strokeWidth={2} />
            {isStuck && (
              <motion.g initial={{ opacity: reduce ? 1 : 0 }} whileInView={{ opacity: 1 }} viewport={view} transition={t(0.9 + i * 0.1, 0.3)}>
                <circle cx={x + 16} cy={68} r={10} fill="#fb7185" />
                <Label x={x + 16} y={72} anchor="middle" color="#0d0d12" size={12}>?</Label>
              </motion.g>
            )}
          </motion.g>
        );
      })}
      <Label x={300} y={190} anchor="middle" color={TXT} size={11}>{label.toUpperCase()}</Label>
    </svg>
  );
}

function Rings({ items }: { items: string[] }) {
  const { view, t, reduce } = useAnim();
  const n = items.length;
  return (
    <svg viewBox="0 0 600 320" className="h-auto w-full" role="img" aria-label={items.join(" dentro de ")}>
      {[...items].reverse().map((it, ri) => {
        const i = n - 1 - ri;
        const r = 50 + i * 48;
        return (
          <motion.g key={it} initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={view} transition={t(i * 0.3, 0.6)} style={{ transformOrigin: "300px 165px" }}>
            <circle cx={300} cy={165} r={r} fill={i === 0 ? P : `rgba(98,47,253,${0.16 - i * 0.04})`} stroke="rgba(139,107,255,0.55)" strokeWidth={1.5} />
            <Label x={300} y={i === 0 ? 169 : 165 - r + 22} anchor="middle" color="#fff" size={11}>{it.toUpperCase()}</Label>
          </motion.g>
        );
      })}
    </svg>
  );
}

function Ladder({ steps }: { steps: string[] }) {
  const { view, t, reduce } = useAnim();
  const n = steps.length;
  const sw = 520 / n;
  return (
    <svg viewBox="0 0 600 280" className="h-auto w-full" role="img" aria-label={steps.join(" → ")}>
      {steps.map((st, i) => {
        const h = 50 + i * (180 / n);
        const x = 40 + i * sw;
        return (
          <motion.g key={st} initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={view} transition={t(i * 0.18, 0.5)}>
            <rect x={x} y={250 - h} width={sw - 10} height={h} rx={8} fill={i === n - 1 ? P : `rgba(98,47,253,${0.12 + i * 0.07})`} stroke="rgba(139,107,255,0.5)" />
            <foreignObject x={x + 2} y={250 - h + 8} width={sw - 14} height={44}>
              <p style={{ color: "#fff", fontSize: 11, lineHeight: 1.2, textAlign: "center", fontFamily: MONO }}>{st}</p>
            </foreignObject>
          </motion.g>
        );
      })}
    </svg>
  );
}

function Noise({ before, after, action }: { before: string; after: string; action: string }) {
  const { view, t, reduce } = useAnim();
  const junk = [
    [40, 50, 120], [180, 40, 90], [60, 100, 160], [240, 90, 60], [40, 150, 80], [140, 150, 140], [60, 200, 200], [210, 230, 70],
  ];
  return (
    <svg viewBox="0 0 600 300" className="h-auto w-full" role="img" aria-label={`${before} → ${after}`}>
      <Label x={30} y={26}>{before.toUpperCase()}</Label>
      <rect x={20} y={36} width={270} height={240} rx={14} fill="rgba(255,255,255,0.03)" stroke={MUTED} />
      {junk.map(([x, y, w], i) => (
        <motion.rect key={i} x={x} y={y} width={w} height={14} rx={4} fill={["#e95bff", "#43d97b", "#3739ad", "rgba(255,255,255,0.25)"][i % 4]} initial={{ opacity: 0.9 }} whileInView={{ opacity: reduce ? 0.9 : 0.35 }} viewport={view} transition={t(0.6 + i * 0.05, 0.6)} />
      ))}
      <motion.path d="M300 156 L330 156" stroke={P2} strokeWidth={2} initial={{ pathLength: reduce ? 1 : 0 }} whileInView={{ pathLength: 1 }} viewport={view} transition={t(0.8, 0.4)} />
      <Label x={340} y={26}>{after.toUpperCase()}</Label>
      <motion.g initial={{ opacity: reduce ? 1 : 0, x: reduce ? 0 : -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={view} transition={t(1.1, 0.6)}>
        <rect x={340} y={36} width={240} height={240} rx={14} fill="rgba(98,47,253,0.08)" stroke="rgba(139,107,255,0.5)" />
        <rect x={365} y={80} width={150} height={16} rx={5} fill="rgba(255,255,255,0.7)" />
        <rect x={365} y={108} width={190} height={8} rx={4} fill="rgba(255,255,255,0.25)" />
        <rect x={365} y={124} width={160} height={8} rx={4} fill="rgba(255,255,255,0.25)" />
        <rect x={365} y={170} width={150} height={40} rx={20} fill={P} />
        <Label x={440} y={194} anchor="middle" color="#fff" size={11}>{action}</Label>
      </motion.g>
    </svg>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GENERIC: Record<VisualData["kind"], React.FC<any>> = {
  flow: Flow, stats: Stats, checklist: Checklist, compare: Compare, cards: Cards, cycle: Cycle, layers: Layers, people: People, rings: Rings, ladder: Ladder, noise: Noise,
};

const VISUALS: Record<string, React.FC> = {
  "ux-kpi-map": UxKpiMap,
  "checkout-fields": CheckoutFields,
  "retention-curve": RetentionCurve,
  "referral-loop": ReferralLoop,
  "before-after": BeforeAfter,
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

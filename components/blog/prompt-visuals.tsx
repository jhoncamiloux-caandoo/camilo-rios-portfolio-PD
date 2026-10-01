"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/* SVGs da série "Prompt e Design": cada um conta a ideia do trecho em etapas,
   em loop enquanto está na tela. Com movimento reduzido mostram o estado final. */

const P = "#622FFD";
const P2 = "#8b6bff";
const G = "#A3E635";
const LINE = "rgba(255,255,255,0.14)";
const CARD = "#17171f";
const TXT = "rgba(255,255,255,0.88)";
const SUB = "rgba(255,255,255,0.58)";
const MONO = "ui-monospace, SFMono-Regular, Menlo, monospace";
const ease = [0.22, 1, 0.36, 1] as const;

/* Avança de 0 até `steps` (com pausa no final) e recomeça, só quando visível. */
function useSteps(steps: number, ms = 1100, hold = 3) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { margin: "-80px" });
  const reduce = useReducedMotion();
  const [k, setK] = useState(0);
  useEffect(() => {
    if (reduce) { setK(steps); return; }
    if (!inView) return;
    const id = setInterval(() => setK((v) => (v >= steps + hold ? 0 : v + 1)), ms);
    return () => clearInterval(id);
  }, [inView, reduce, steps, ms, hold]);
  return { ref, k: Math.min(k, steps), reduce: !!reduce };
}

function T({ x, y, children, a = "start", c = SUB, s = 11, w = 400 }: { x: number; y: number; children: React.ReactNode; a?: "start" | "middle" | "end"; c?: string; s?: number; w?: number }) {
  return <text x={x} y={y} fill={c} fontSize={s} fontWeight={w} fontFamily={MONO} textAnchor={a} letterSpacing="0.05em">{children}</text>;
}

const tr = (reduce: boolean, d = 0.6) => ({ duration: reduce ? 0 : d, ease });

/* 1. Do pedido à especificação: cada item do briefing organiza um pedaço da interface. */
export function SpecBuilder() {
  const SPEC = ["OBJETIVO", "CONTEXTO", "USUÁRIO", "COMPORTAMENTO", "RESTRIÇÕES", "CRITÉRIOS"];
  const { ref, k, reduce } = useSteps(SPEC.length);
  // Blocos da interface: posição no caos e posição final; `s` = etapa que organiza o bloco
  const B = [
    { s: 1, c: [430, 40, 90, 22, -18], o: [372, 58, 236, 18, 0], f: P },
    { s: 2, c: [600, 190, 70, 50, 24], o: [372, 90, 112, 56, 0], f: CARD },
    { s: 2, c: [380, 220, 80, 40, -30], o: [496, 90, 112, 56, 0], f: CARD },
    { s: 3, c: [560, 70, 60, 60, 40], o: [372, 158, 236, 70, 0], f: CARD },
    { s: 4, c: [470, 150, 110, 30, 12], o: [372, 240, 150, 14, 0], f: "rgba(255,255,255,0.22)" },
    { s: 5, c: [640, 260, 50, 24, -40], o: [372, 264, 100, 12, 0], f: "rgba(255,255,255,0.14)" },
    { s: 6, c: [400, 120, 70, 26, 60], o: [528, 254, 80, 26, 0], f: G },
  ];
  const noise = Math.max(0, 1 - k / SPEC.length);
  return (
    <svg ref={ref} viewBox="0 0 640 320" className="h-auto w-full" role="img" aria-label="Seis itens de briefing organizam uma interface caótica">
      <T x={20} y={26} c={P2}>BRIEFING</T>
      {SPEC.map((s, i) => {
        const on = k > i;
        return (
          <g key={s}>
            <motion.rect x={20} y={40 + i * 42} width={230} height={32} rx={9} animate={{ fill: on ? "rgba(98,47,253,0.22)" : "rgba(255,255,255,0.03)", stroke: on ? P2 : LINE }} transition={tr(reduce, 0.4)} />
            <motion.circle cx={38} cy={56 + i * 42} r={7} animate={{ fill: on ? G : "rgba(255,255,255,0.08)" }} transition={tr(reduce, 0.3)} />
            {on && <path d={`M34 ${56 + i * 42} l3 3 l5 -6`} stroke="#0d0d12" strokeWidth={2} fill="none" />}
            <T x={54} y={60 + i * 42} c={on ? TXT : SUB}>{s}</T>
          </g>
        );
      })}
      {/* Seta de tradução */}
      <motion.path d="M262 160 H340" stroke={P2} strokeWidth={2} strokeDasharray="5 6" animate={{ strokeDashoffset: [0, -22] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
      <path d="M334 154 l8 6 l-8 6" stroke={P2} strokeWidth={2} fill="none" />
      {/* Tela */}
      <rect x={356} y={34} width={268} height={268} rx={14} fill="#101016" stroke={LINE} />
      {B.map((b, i) => {
        const on = k >= b.s;
        const [x, y, w, h, r] = on ? b.o : b.c;
        return <motion.rect key={i} rx={6} fill={b.f} initial={false} animate={{ x, y, width: w, height: h, rotate: r, opacity: on ? 1 : 0.45 }} transition={tr(reduce, 0.7)} style={{ transformBox: "fill-box", transformOrigin: "center" }} />;
      })}
      <T x={356} y={318} s={10}>RUÍDO NO RESULTADO</T>
      <rect x={510} y={310} width={114} height={6} rx={3} fill="rgba(255,255,255,0.08)" />
      <motion.rect x={510} y={310} height={6} rx={3} animate={{ width: 114 * noise + 4, fill: noise > 0.4 ? "#f87171" : G }} transition={tr(reduce, 0.5)} />
    </svg>
  );
}

/* 2. Prompt como funil: cada etapa descarta possibilidades até sobrar uma solução. */
export function PromptFunnel() {
  const ST = [
    { label: "POSSIBILIDADES", n: 24 },
    { label: "CONTEXTO", n: 12 },
    { label: "DECISÃO", n: 5 },
    { label: "PROMPT", n: 2 },
    { label: "RESULTADO", n: 1 },
  ];
  const { ref, k, reduce } = useSteps(ST.length - 1, 1300);
  const cols = ST.map((_, i) => 60 + i * 130);
  // Pontos determinísticos dentro do funil
  const dots = Array.from({ length: 24 }, (_, i) => ({ dx: ((i * 37) % 60) - 30, dy: ((i * 53) % 150) - 75 }));
  const alive = ST[k].n;
  return (
    <svg ref={ref} viewBox="0 0 640 320" className="h-auto w-full" role="img" aria-label="Funil: de 24 possibilidades a uma solução">
      <path d="M20 40 L620 130 L620 190 L20 280 Z" fill="rgba(98,47,253,0.08)" stroke={LINE} />
      {cols.map((x, i) => (
        <g key={i}>
          <motion.line x1={x} x2={x} y1={40 + i * 22} y2={280 - i * 22} animate={{ stroke: k >= i ? P2 : LINE }} strokeDasharray="3 5" />
          <motion.g animate={{ opacity: k >= i ? 1 : 0.4 }}>
            <T x={x} y={306} a="middle" c={k >= i ? TXT : SUB} s={10}>{ST[i].label}</T>
            <T x={x} y={24} a="middle" c={k >= i ? P2 : SUB} s={13} w={700}>{ST[i].n}</T>
          </motion.g>
        </g>
      ))}
      {dots.map((d, i) => {
        const on = i < alive;
        const x = cols[k];
        const spread = 1 - k * 0.22;
        const final = alive === 1 && i === 0;
        return (
          <motion.circle
            key={i}
            initial={false}
            animate={{ cx: on ? x + d.dx * spread * 0.6 : cols[Math.max(0, k - 1)] + d.dx * 0.5, cy: final ? 160 : on ? 160 + d.dy * spread : 300, r: final ? 12 : 5, opacity: on ? 1 : 0, fill: final ? G : i % 3 ? P2 : "rgba(255,255,255,0.7)" }}
            transition={tr(reduce, 0.8)}
          />
        );
      })}
      {alive === 1 && <motion.path d={`M${cols[4] - 5} 160 l4 4 l7 -8`} stroke="#0d0d12" strokeWidth={2.4} fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={tr(reduce, 0.4)} />}
    </svg>
  );
}

/* 2b. Tudo de uma vez vs briefing + ajustes: quanto texto cada abordagem gasta. */
export function TokenBudget() {
  const { ref, k, reduce } = useSteps(4, 1000);
  const A = [100, 100, 100, 100];
  const B = [100, 18, 14, 12];
  const row = (y: number, vals: number[], color: string, title: string) => (
    <g>
      <T x={20} y={y - 12} c={TXT}>{title}</T>
      {vals.map((v, i) => (
        <motion.rect key={i} y={y} height={30} rx={6} x={20 + vals.slice(0, i).reduce((a, b) => a + b * 1.3 + 8, 0)} initial={false} animate={{ width: k > i ? v * 1.3 : 0 }} fill={i === 0 ? color : `${color}aa`} transition={tr(reduce, 0.6)} />
      ))}
    </g>
  );
  return (
    <svg ref={ref} viewBox="0 0 640 240" className="h-auto w-full" role="img" aria-label="Reexplicar tudo a cada pedido gasta muito mais do que um briefing seguido de ajustes">
      {row(56, A, "#f87171", "REEXPLICAR TUDO A CADA PEDIDO")}
      {row(156, B, G, "BRIEFING + AJUSTES INCREMENTAIS")}
      {["1", "2", "3", "4"].map((n, i) => (
        <motion.g key={n} animate={{ opacity: k > i ? 1 : 0.25 }}>
          <T x={20 + i * 138} y={226} s={10}>{`PEDIDO ${n}`}</T>
        </motion.g>
      ))}
      <T x={620} y={226} a="end" s={10}>TAMANHO RELATIVO, SÓ ILUSTRAÇÃO</T>
    </svg>
  );
}

/* 3. Genérico vs contextual: a mesma tela vira uma solução específica quando o contexto entra. */
export function GenericVsContext() {
  const CTX = ["OPERADOR EM PICO", "STATUS PRIMEIRO", "POUCOS CLIQUES", "COMPONENTES DO DS"];
  const { ref, k, reduce } = useSteps(CTX.length, 1300);
  const rows = [
    { s: "NOVO", c: G },
    { s: "ATRASADO", c: "#f87171" },
    { s: "INTERVIR", c: "#fbbf24" },
    { s: "NOVO", c: G },
  ];
  const Generic = ({ x, o = 1 }: { x: number; o?: number }) => (
    <g opacity={o}>
      <rect x={x} y={70} width={250} height={190} rx={12} fill="#101016" stroke={LINE} />
      {[0, 1, 2].map((i) => <rect key={i} x={x + 14 + i * 78} y={86} width={66} height={44} rx={6} fill={CARD} />)}
      <path d={`M${x + 18} 230 q30 -50 60 -20 t60 -30 t60 10 t40 -30`} stroke={P2} strokeWidth={2} fill="none" />
      <rect x={x + 14} y={142} width={222} height={104} rx={6} fill="none" stroke={LINE} />
    </g>
  );
  return (
    <svg ref={ref} viewBox="0 0 640 320" className="h-auto w-full" role="img" aria-label="Prompt genérico gera telas parecidas; com contexto surge uma tela de pedidos específica">
      <T x={20} y={28} c={SUB}>PROMPT GENÉRICO</T>
      <T x={20} y={46} c={TXT} s={10}>“crie uma tela de pedidos”</T>
      <Generic x={36} o={0.25} />
      <Generic x={28} o={0.45} />
      <Generic x={20} />
      <T x={145} y={290} a="middle" s={10}>MUITAS SOLUÇÕES PARECIDAS</T>

      <line x1={320} x2={320} y1={20} y2={300} stroke={LINE} strokeDasharray="4 6" />

      <T x={350} y={28} c={P2}>PROMPT COM CONTEXTO</T>
      {CTX.map((c, i) => (
        <motion.g key={c} initial={false} animate={{ opacity: k > i ? 1 : 0.2, y: k > i ? 0 : -4 }} transition={tr(reduce, 0.4)}>
          <rect x={350 + (i % 2) * 138} y={38 + Math.floor(i / 2) * 22} width={130} height={18} rx={9} fill="rgba(98,47,253,0.22)" stroke={P2} />
          <T x={415 + (i % 2) * 138} y={51 + Math.floor(i / 2) * 22} a="middle" c={TXT} s={8.5}>{c}</T>
        </motion.g>
      ))}
      <rect x={350} y={90} width={270} height={170} rx={12} fill="#101016" stroke={k >= 4 ? G : LINE} />
      {/* Antes do contexto: igual ao lado genérico; depois, lista de pedidos por status */}
      <motion.g animate={{ opacity: k >= 2 ? 0 : 1 }} transition={tr(reduce, 0.4)}>
        {[0, 1, 2].map((i) => <rect key={i} x={364 + i * 84} y={104} width={72} height={40} rx={6} fill={CARD} />)}
        <path d="M368 240 q30 -50 60 -20 t60 -30 t60 10 t40 -30" stroke={P2} strokeWidth={2} fill="none" />
      </motion.g>
      {rows.map((r, i) => (
        <motion.g key={i} initial={false} animate={{ opacity: k >= 2 ? 1 : 0, x: k >= 2 ? 0 : 20 }} transition={{ ...tr(reduce, 0.5), delay: reduce ? 0 : i * 0.08 }}>
          <rect x={364} y={104 + i * 36} width={242} height={28} rx={6} fill={CARD} />
          <motion.rect x={372} y={111 + i * 36} height={14} rx={7} fill={r.c} animate={{ width: k >= 1 ? 72 : 30 }} transition={tr(reduce, 0.4)} />
          <T x={408} y={122 + i * 36} a="middle" c="#0d0d12" s={8} w={700}>{k >= 1 ? r.s : ""}</T>
          <rect x={454} y={114 + i * 36} width={80} height={8} rx={4} fill="rgba(255,255,255,0.2)" />
          <motion.rect x={566} y={110 + i * 36} width={32} height={16} rx={8} animate={{ fill: k >= 3 ? P : "rgba(255,255,255,0.1)" }} />
        </motion.g>
      ))}
      <T x={485} y={290} a="middle" c={k >= 4 ? G : SUB} s={10}>{k >= 4 ? "SOLUÇÃO ESPECÍFICA" : "…"}</T>
    </svg>
  );
}

/* 3b. Graus de liberdade: onde a IA explora e onde não deve improvisar. */
export function FreedomDial() {
  const FREE = ["Composição", "Layout", "Microinterações", "Variações visuais"];
  const LOCK = ["Identidade", "Componentes", "Acessibilidade", "Regras de negócio"];
  const { ref, k, reduce } = useSteps(4, 900);
  return (
    <svg ref={ref} viewBox="0 0 640 260" className="h-auto w-full" role="img" aria-label="A IA explora composição e layout; identidade, componentes, acessibilidade e regras ficam travados">
      <T x={160} y={26} a="middle" c={G}>IA PODE EXPLORAR</T>
      <T x={480} y={26} a="middle" c={P2}>DESIGNER DEFINE</T>
      {FREE.map((f, i) => (
        <motion.g key={f} initial={false} animate={{ opacity: k > i ? 1 : 0.2 }} transition={tr(reduce, 0.4)}>
          <motion.rect x={40} y={44 + i * 50} width={240} height={38} rx={10} fill="rgba(163,230,53,0.08)" stroke={G} strokeDasharray="4 4" animate={reduce ? {} : { x: [40, 46, 36, 40] }} transition={{ duration: 3 + i, repeat: Infinity }} />
          <T x={160} y={68 + i * 50} a="middle" c={TXT} s={12}>{f}</T>
        </motion.g>
      ))}
      {LOCK.map((f, i) => (
        <motion.g key={f} initial={false} animate={{ opacity: k > i ? 1 : 0.2 }} transition={tr(reduce, 0.4)}>
          <rect x={360} y={44 + i * 50} width={240} height={38} rx={10} fill="rgba(98,47,253,0.18)" stroke={P2} />
          <rect x={376} y={60 + i * 50} width={12} height={10} rx={2} fill={P2} />
          <path d={`M379 60 v-4 a3 3 0 0 1 6 0 v4`} transform={`translate(0 ${i * 50})`} stroke={P2} strokeWidth={2} fill="none" />
          <T x={490} y={68 + i * 50} a="middle" c={TXT} s={12}>{f}</T>
        </motion.g>
      ))}
    </svg>
  );
}

/* 4. Da intenção à interface: a intenção difusa ganha forma a cada etapa e a avaliação volta ao início. */
export function IntentLoop() {
  const S = ["INTENÇÃO", "PROBLEMA", "CONTEXTO", "RESTRIÇÕES", "PROMPT", "INTERFACE", "AVALIAÇÃO"];
  const { ref, k, reduce } = useSteps(S.length - 1, 1000);
  const x = (i: number) => 50 + i * 90;
  const blur = Math.max(0, 8 - k * 2);
  const size = 70 - Math.min(k, 4) * 8;
  return (
    <svg ref={ref} viewBox="0 0 640 300" className="h-auto w-full" role="img" aria-label="Intenção, problema, contexto, restrições, prompt, interface e avaliação, em loop">
      <defs>
        <filter id="il-blur"><feGaussianBlur stdDeviation={blur} /></filter>
      </defs>
      {/* Forma central: começa difusa e fica nítida */}
      <g transform="translate(320 100)">
        <motion.rect initial={false} animate={{ x: -size, y: -size / 1.6, width: size * 2, height: size * 1.25, rx: k >= 5 ? 10 : size / 2 }} fill={k >= 5 ? "#101016" : "rgba(98,47,253,0.35)"} stroke={k >= 5 ? G : P2} filter="url(#il-blur)" transition={tr(reduce, 0.7)} />
        {k >= 5 && (
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={tr(reduce, 0.5)}>
            <rect x={-size + 12} y={-size / 1.6 + 12} width={size * 2 - 24} height={10} rx={3} fill={P} />
            <rect x={-size + 12} y={-size / 1.6 + 30} width={size - 18} height={22} rx={4} fill={CARD} />
            <rect x={6} y={-size / 1.6 + 30} width={size - 18} height={22} rx={4} fill={CARD} />
            <rect x={size - 52} y={-size / 1.6 + size * 1.25 - 20} width={40} height={10} rx={5} fill={G} />
          </motion.g>
        )}
      </g>
      {/* Linha de etapas */}
      <line x1={x(0)} x2={x(6)} y1={220} y2={220} stroke={LINE} />
      <motion.line x1={x(0)} y1={220} y2={220} initial={false} animate={{ x2: x(k) }} stroke={P2} strokeWidth={2} transition={tr(reduce, 0.6)} />
      {S.map((s, i) => (
        <g key={s}>
          <motion.circle cx={x(i)} cy={220} r={9} initial={false} animate={{ fill: k >= i ? (i === 6 ? G : P) : "#1b1b24", stroke: k === i ? "#fff" : LINE }} transition={tr(reduce, 0.3)} />
          <T x={x(i)} y={248} a="middle" c={k >= i ? TXT : SUB} s={9}>{s}</T>
        </g>
      ))}
      {/* Volta da avaliação para o problema */}
      <motion.path d={`M${x(6)} 230 C ${x(6)} 290, ${x(1)} 290, ${x(1)} 232`} fill="none" stroke={G} strokeWidth={1.6} strokeDasharray="5 5" initial={false} animate={{ opacity: k >= 6 ? 1 : 0, strokeDashoffset: [0, -20] }} transition={{ opacity: tr(reduce, 0.4), strokeDashoffset: { duration: 1, repeat: Infinity, ease: "linear" } }} />
      <T x={320} y={292} a="middle" c={k >= 6 ? G : "transparent"} s={10}>PROMPT NÃO É O FIM DO PENSAMENTO</T>
    </svg>
  );
}

/* 4b. "Faça melhor" vs "Faça com que...": o pedido vago não diz o que testar. */
export function CriteriaRewrite() {
  const C = ["encontre o filtro em menos de 5 s", "o erro explique o que fazer", "a tabela se entenda sem abrir linhas", "o CTA principal tenha prioridade"];
  const { ref, k, reduce } = useSteps(C.length, 1000);
  return (
    <svg ref={ref} viewBox="0 0 640 250" className="h-auto w-full" role="img" aria-label="Trocar faça melhor por critérios verificáveis">
      <rect x={20} y={40} width={200} height={60} rx={12} fill="rgba(248,113,113,0.08)" stroke="#f87171" />
      <T x={120} y={76} a="middle" c={TXT} s={14}>“faça melhor”</T>
      <T x={120} y={124} a="middle" s={10}>NADA PARA VERIFICAR</T>
      <motion.path d="M230 70 H290" stroke={P2} strokeWidth={2} strokeDasharray="5 6" animate={reduce ? {} : { strokeDashoffset: [0, -22] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
      <T x={300} y={30} c={P2}>“FAÇA COM QUE…”</T>
      {C.map((c, i) => (
        <motion.g key={c} initial={false} animate={{ opacity: k > i ? 1 : 0.15, x: k > i ? 0 : 12 }} transition={tr(reduce, 0.45)}>
          <rect x={300} y={44 + i * 48} width={320} height={38} rx={10} fill={CARD} stroke={k > i ? P2 : LINE} />
          <circle cx={320} cy={63 + i * 48} r={8} fill={k > i ? G : "#222"} />
          <path d={`M316 ${63 + i * 48} l3 3 l5 -6`} stroke="#0d0d12" strokeWidth={2} fill="none" />
          <T x={338} y={67 + i * 48} c={TXT} s={11}>{c}</T>
        </motion.g>
      ))}
    </svg>
  );
}

/* Média vs segmentos: os mesmos 5% escondem quatro realidades (números do próprio texto). */
export function AverageTrap() {
  const SEG = [
    { l: "MOBILE", v: 2 },
    { l: "DESKTOP", v: 8 },
    { l: "NOVOS", v: 3 },
    { l: "RECORRENTES", v: 9 },
  ];
  const { ref, k, reduce } = useSteps(SEG.length + 1, 1100);
  const y = (v: number) => 250 - v * 22;
  return (
    <svg ref={ref} viewBox="0 0 640 300" className="h-auto w-full" role="img" aria-label="Conversão média de 5% esconde mobile 2%, desktop 8%, novos 3% e recorrentes 9%">
      {[0, 2, 4, 6, 8, 10].map((v) => <g key={v}><line x1={60} x2={620} y1={y(v)} y2={y(v)} stroke="rgba(255,255,255,0.06)" /><T x={48} y={y(v) + 4} a="end" s={9}>{v}%</T></g>)}
      <motion.line x1={60} x2={620} y1={y(5)} y2={y(5)} stroke="#fff" strokeWidth={2} strokeDasharray="6 6" initial={false} animate={{ opacity: k >= 1 ? 0.35 : 1 }} />
      <T x={620} y={y(5) - 8} a="end" c={TXT} s={11} w={700}>MÉDIA 5%</T>
      {SEG.map((g, i) => {
        const on = k > i + 0;
        const x = 100 + i * 130;
        const bad = g.v < 5;
        return (
          <g key={g.l}>
            <motion.rect x={x} width={70} rx={8} initial={false} animate={{ y: on ? y(g.v) : y(5), height: on ? 250 - y(g.v) : 250 - y(5), fill: on ? (bad ? "#f87171" : G) : "rgba(255,255,255,0.12)" }} transition={tr(reduce, 0.7)} />
            <motion.g initial={false} animate={{ opacity: on ? 1 : 0 }}>
              <T x={x + 35} y={y(g.v) - 8} a="middle" c={TXT} s={13} w={700}>{`${g.v}%`}</T>
            </motion.g>
            <T x={x + 35} y={272} a="middle" s={10}>{g.l}</T>
          </g>
        );
      })}
      <T x={340} y={294} a="middle" c={k > SEG.length ? P2 : "transparent"} s={10}>A SEGMENTAÇÃO MOSTRA ONDE AGIR</T>
    </svg>
  );
}

/* Começar pela decisão: de um painel cheio para as poucas métricas que respondem a pergunta. */
export function DecisionFirst() {
  const { ref, k, reduce } = useSteps(3, 1400);
  const KEEP = [3, 8, 14];
  const LBL = ["CONCLUSÃO DO ONBOARDING", "ABANDONO POR ETAPA", "TEMPO ATÉ 1ª AÇÃO"];
  return (
    <svg ref={ref} viewBox="0 0 640 300" className="h-auto w-full" role="img" aria-label="Uma pergunta filtra um painel com dezenas de métricas até as três que levam a uma decisão">
      <T x={20} y={26} c={SUB}>DASHBOARD COM TUDO</T>
      {Array.from({ length: 18 }, (_, i) => {
        const keep = KEEP.indexOf(i);
        const on = k >= 2 ? keep >= 0 : true;
        const cx = 20 + (i % 6) * 40, cy = 40 + Math.floor(i / 6) * 40;
        const tx = 370, ty = 90 + Math.max(keep, 0) * 56;
        return (
          <motion.rect key={i} rx={5} initial={false}
            animate={{ x: k >= 2 && keep >= 0 ? tx : cx, y: k >= 2 && keep >= 0 ? ty : cy, width: k >= 2 && keep >= 0 ? 250 : 32, height: k >= 2 && keep >= 0 ? 40 : 32, opacity: on ? 1 : 0.08, fill: k >= 1 && keep >= 0 ? P : "rgba(255,255,255,0.14)" }}
            transition={tr(reduce, 0.8)} />
        );
      })}
      <motion.g initial={false} animate={{ opacity: k >= 1 ? 1 : 0.2 }}>
        <rect x={20} y={180} width={230} height={70} rx={12} fill="rgba(98,47,253,0.18)" stroke={P2} />
        <T x={34} y={202} c={P2} s={10}>PERGUNTA</T>
        <T x={34} y={222} c={TXT} s={10}>Por que novos usuários não</T>
        <T x={34} y={238} c={TXT} s={10}>chegam ao 1º valor?</T>
      </motion.g>
      {LBL.map((l, i) => <motion.g key={l} initial={false} animate={{ opacity: k >= 2 ? 1 : 0 }} transition={{ delay: reduce ? 0 : 0.6 }}><T x={386} y={115 + i * 56} c="#fff" s={10} w={700}>{l}</T></motion.g>)}
      <motion.g initial={false} animate={{ opacity: k >= 3 ? 1 : 0 }}>
        <rect x={370} y={44} width={250} height={30} rx={15} fill={G} />
        <T x={495} y={63} a="middle" c="#0d0d12" s={11} w={700}>DECISÃO DE PRODUTO</T>
      </motion.g>
    </svg>
  );
}

/* A nona pessoa: o resumo agrupa oito iguais, mas quem não se encaixa revela a necessidade. */
export function NinthPerson() {
  const { ref, k, reduce } = useSteps(3, 1300);
  const pos = Array.from({ length: 8 }, (_, i) => ({ x: 80 + (i % 4) * 60, y: 90 + Math.floor(i / 4) * 70 }));
  const Person = ({ c }: { c: string }) => (<g><circle cy={-14} r={10} fill={c} /><rect x={-14} y={0} width={28} height={26} rx={10} fill={c} /></g>);
  return (
    <svg ref={ref} viewBox="0 0 640 280" className="h-auto w-full" role="img" aria-label="Oito pessoas com o mesmo comportamento e uma nona diferente, que revela uma necessidade nova">
      {pos.map((p, i) => <motion.g key={i} initial={false} animate={{ x: k >= 1 ? 170 + (i % 4) * 18 - 27 : p.x, y: k >= 1 ? 140 + Math.floor(i / 4) * 16 - 8 : p.y }} transition={tr(reduce, 0.8)}><Person c={P2} /></motion.g>)}
      <motion.rect x={110} y={100} width={130} height={86} rx={16} fill="none" stroke={P2} strokeDasharray="5 5" initial={false} animate={{ opacity: k >= 1 ? 1 : 0 }} />
      <T x={175} y={214} a="middle" c={k >= 1 ? P2 : "transparent"} s={10}>PADRÃO: 8 PESSOAS</T>
      <motion.g initial={false} animate={{ x: 470, y: k >= 2 ? 130 : 160, scale: k >= 2 ? 1.25 : 1 }} transition={tr(reduce, 0.6)}><Person c={k >= 2 ? G : "rgba(255,255,255,0.5)"} /></motion.g>
      {k >= 2 && <motion.circle cx={470} cy={130} r={40} fill="none" stroke={G} initial={{ r: 20, opacity: 1 }} animate={reduce ? {} : { r: [30, 54], opacity: [0.8, 0] }} transition={{ duration: 1.4, repeat: Infinity }} />}
      <motion.g initial={false} animate={{ opacity: k >= 3 ? 1 : 0 }}>
        <rect x={380} y={200} width={180} height={50} rx={12} fill="rgba(163,230,53,0.1)" stroke={G} />
        <T x={470} y={222} a="middle" c={G} s={10} w={700}>A NONA PESSOA</T>
        <T x={470} y={238} a="middle" c={TXT} s={9}>revela uma necessidade nova</T>
      </motion.g>
      <T x={20} y={30} c={SUB}>RESUMO RÁPIDO DA IA</T>
      <T x={620} y={30} a="end" c={SUB}>O QUE NÃO SE ENCAIXA</T>
    </svg>
  );
}

/* Autonomia com limites: quanto maior o impacto, mais controle antes da ação. */
export function AutonomyMeter() {
  const L = [
    { l: "BAIXO IMPACTO", ex: "organizar, resumir", c: "AGE E AVISA", col: G },
    { l: "MÉDIO IMPACTO", ex: "enviar mensagem", c: "PEDE CONFIRMAÇÃO", col: "#fbbf24" },
    { l: "ALTO IMPACTO", ex: "excluir, cobrar", c: "EXIGE APROVAÇÃO", col: "#f87171" },
  ];
  const { ref, k, reduce } = useSteps(3, 1500, 2);
  const a = Math.min(k, 3);
  const ang = a === 0 ? -180 : -150 + (a - 1) * 60;
  return (
    <svg ref={ref} viewBox="0 0 640 290" className="h-auto w-full" role="img" aria-label="Medidor: baixo impacto age e avisa, médio pede confirmação, alto exige aprovação">
      <g transform="translate(170 190)">
        {L.map((x, i) => {
          const s = (-180 + i * 60) * Math.PI / 180, e = (-120 + i * 60) * Math.PI / 180;
          return <motion.path key={i} d={`M${130 * Math.cos(s)} ${130 * Math.sin(s)} A130 130 0 0 1 ${130 * Math.cos(e)} ${130 * Math.sin(e)}`} stroke={x.col} strokeWidth={22} fill="none" initial={false} animate={{ opacity: a === i + 1 ? 1 : 0.25 }} />;
        })}
        <motion.g initial={false} animate={{ rotate: ang }} transition={tr(reduce, 0.8)}>
          <line x1={0} y1={0} x2={105} y2={0} stroke="#fff" strokeWidth={4} strokeLinecap="round" />
        </motion.g>
        <circle r={12} fill="#fff" />
        <T x={0} y={44} a="middle" c={SUB} s={10}>AUTONOMIA DA IA</T>
      </g>
      {L.map((x, i) => (
        <motion.g key={x.l} initial={false} animate={{ opacity: a === i + 1 ? 1 : 0.3, x: a === i + 1 ? 0 : 6 }} transition={tr(reduce, 0.4)}>
          <rect x={340} y={40 + i * 76} width={280} height={62} rx={12} fill={CARD} stroke={a === i + 1 ? x.col : LINE} />
          <T x={356} y={62 + i * 76} c={x.col} s={10} w={700}>{x.l}</T>
          <T x={356} y={80 + i * 76} c={SUB} s={10}>{x.ex}</T>
          <T x={604} y={72 + i * 76} a="end" c={TXT} s={10} w={700}>{x.c}</T>
        </motion.g>
      ))}
    </svg>
  );
}

/* O que e por quê: o dado aponta a queda, a pesquisa explica, o teste valida. */
export function WhatAndWhy() {
  const STEPS = [100, 82, 46, 38];
  const { ref, k, reduce } = useSteps(3, 1400);
  return (
    <svg ref={ref} viewBox="0 0 640 300" className="h-auto w-full" role="img" aria-label="Dados mostram a queda na etapa 2, pesquisa explica o motivo e o teste valida a solução">
      <T x={20} y={26} c={P2}>DADOS: O QUE ACONTECE</T>
      {STEPS.map((v, i) => (
        <g key={i}>
          <motion.rect x={30 + i * 70} width={50} rx={6} initial={false} animate={{ y: 230 - v * 1.6, height: v * 1.6, fill: k >= 1 && i === 2 ? "#f87171" : P }} transition={tr(reduce, 0.6)} />
          <T x={55 + i * 70} y={250} a="middle" s={9}>{`ETAPA ${i + 1}`}</T>
        </g>
      ))}
      {k >= 1 && <motion.circle cx={195} cy={150} r={44} fill="none" stroke="#f87171" strokeWidth={2} initial={{ opacity: 0 }} animate={{ opacity: 1 }} />}
      <motion.path d="M245 140 C 300 100, 330 100, 360 110" stroke={P2} strokeWidth={2} strokeDasharray="5 5" fill="none" initial={false} animate={{ opacity: k >= 2 ? 1 : 0, strokeDashoffset: [0, -20] }} transition={{ strokeDashoffset: { duration: 1, repeat: Infinity, ease: "linear" } }} />
      <motion.g initial={false} animate={{ opacity: k >= 2 ? 1 : 0.15 }}>
        <T x={370} y={26} c={P2}>PESQUISA: POR QUÊ</T>
        <rect x={370} y={44} width={250} height={44} rx={22} fill={CARD} stroke={LINE} />
        <T x={390} y={71} c={TXT} s={11}>entrevistas e sessões gravadas</T>
        <rect x={400} y={98} width={220} height={44} rx={22} fill={CARD} stroke={LINE} />
        <T x={420} y={125} c={TXT} s={11}>testes de usabilidade</T>
      </motion.g>
      <motion.g initial={false} animate={{ opacity: k >= 3 ? 1 : 0.15 }}>
        <T x={370} y={180} c={G}>TESTE: FUNCIONA?</T>
        <rect x={370} y={194} width={250} height={40} rx={10} fill="rgba(163,230,53,0.1)" stroke={G} />
        <T x={386} y={219} c={TXT} s={11}>nova versão da etapa 2 em teste</T>
      </motion.g>
      <T x={20} y={286} s={9}>BARRAS ILUSTRATIVAS</T>
    </svg>
  );
}

/* Ferramentas produzem, designers decidem: muitas variações, poucas passam pela crítica. */
export function CritiqueFilter() {
  const { ref, k, reduce } = useSteps(4, 1100);
  const Q = ["RESOLVE O PROBLEMA?", "SERVE A ESTE USUÁRIO?", "É CONSISTENTE?"];
  const keep = 4;
  return (
    <svg ref={ref} viewBox="0 0 640 290" className="h-auto w-full" role="img" aria-label="Doze variações geradas passam por três perguntas críticas e só uma segue">
      <T x={20} y={26} c={SUB}>GERADO EM SEGUNDOS</T>
      {Array.from({ length: 12 }, (_, i) => {
        const out = (k >= 1 && i % 2 === 1) || (k >= 2 && i % 3 === 0 && i !== keep) || (k >= 3 && i !== keep);
        const win = k >= 4 && i === keep;
        return (
          <motion.g key={i} initial={false} animate={{ x: win ? 470 - (20 + (i % 4) * 56) : 0, y: win ? 120 - (44 + Math.floor(i / 4) * 66) : 0, opacity: out && !win ? 0.12 : 1 }} transition={tr(reduce, 0.7)}>
            <rect x={20 + (i % 4) * 56} y={44 + Math.floor(i / 4) * 66} width={46} height={56} rx={6} fill={win ? "#101016" : CARD} stroke={win ? G : LINE} />
            <rect x={26 + (i % 4) * 56} y={50 + Math.floor(i / 4) * 66} width={34} height={8} rx={3} fill={i % 3 ? P2 : "rgba(255,255,255,0.3)"} />
            <rect x={26 + (i % 4) * 56} y={64 + Math.floor(i / 4) * 66} width={22} height={18} rx={3} fill="rgba(255,255,255,0.12)" />
          </motion.g>
        );
      })}
      {Q.map((q, i) => (
        <motion.g key={q} initial={false} animate={{ opacity: k > i ? 1 : 0.2 }}>
          <rect x={256} y={56 + i * 66} width={170} height={32} rx={16} fill="rgba(98,47,253,0.18)" stroke={k > i ? P2 : LINE} />
          <T x={341} y={76 + i * 66} a="middle" c={TXT} s={9}>{q}</T>
        </motion.g>
      ))}
      <T x={493} y={210} a="middle" c={k >= 4 ? G : "transparent"} s={10} w={700}>DECISÃO COM ARGUMENTO</T>
    </svg>
  );
}

/* Design System como linguagem comum: o mesmo token no Figma e no código. */
export function TokenBridge() {
  const TOK = [
    { n: "color.primary", v: "#622FFD", sw: P },
    { n: "space.4", v: "16px", sw: null },
    { n: "radius.md", v: "12px", sw: null },
  ];
  const { ref, k, reduce } = useSteps(3, 1200);
  return (
    <svg ref={ref} viewBox="0 0 640 280" className="h-auto w-full" role="img" aria-label="Os mesmos tokens no Figma e no código mantêm design e desenvolvimento sincronizados">
      <rect x={20} y={30} width={230} height={220} rx={14} fill="#101016" stroke={LINE} />
      <T x={36} y={54} c={P2}>FIGMA</T>
      <rect x={390} y={30} width={230} height={220} rx={14} fill="#101016" stroke={LINE} />
      <T x={406} y={54} c={P2}>CÓDIGO</T>
      {TOK.map((t, i) => {
        const on = k > i;
        const y = 72 + i * 56;
        return (
          <g key={t.n}>
            <rect x={36} y={y} width={198} height={40} rx={8} fill={CARD} stroke={on ? P2 : LINE} />
            {t.sw ? <rect x={46} y={y + 10} width={20} height={20} rx={5} fill={t.sw} /> : <rect x={46} y={y + 17} width={20} height={6} rx={3} fill={P2} />}
            <T x={76} y={y + 24} c={TXT} s={10}>{t.n}</T>
            <rect x={406} y={y} width={198} height={40} rx={8} fill={CARD} stroke={on ? P2 : LINE} />
            <T x={418} y={y + 24} c={on ? TXT : SUB} s={10}>{`--${t.n.replace(".", "-")}: ${t.v}`}</T>
            <line x1={234} x2={406} y1={y + 20} y2={y + 20} stroke={LINE} />
            {on && <motion.circle r={5} cy={y + 20} fill={G} initial={{ cx: 234 }} animate={reduce ? { cx: 406 } : { cx: [234, 406] }} transition={{ duration: 1.2, repeat: reduce ? 0 : Infinity, ease: "easeInOut" }} />}
          </g>
        );
      })}
      <T x={320} y={272} a="middle" c={k >= 3 ? G : "transparent"} s={10} w={700}>UMA LINGUAGEM COMPARTILHADA</T>
    </svg>
  );
}

export const PROMPT_VISUALS: Record<string, React.FC> = {
  "spec-builder": SpecBuilder,
  "prompt-funnel": PromptFunnel,
  "token-budget": TokenBudget,
  "generic-vs-context": GenericVsContext,
  "freedom-dial": FreedomDial,
  "intent-loop": IntentLoop,
  "criteria-rewrite": CriteriaRewrite,
  "average-trap": AverageTrap,
  "decision-first": DecisionFirst,
  "ninth-person": NinthPerson,
  "autonomy-meter": AutonomyMeter,
  "what-and-why": WhatAndWhy,
  "critique-filter": CritiqueFilter,
  "token-bridge": TokenBridge,
};

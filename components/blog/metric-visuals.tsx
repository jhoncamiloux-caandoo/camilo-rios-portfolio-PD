"use client";

import { motion } from "framer-motion";
import { CARD, G, LINE, P, P2, SUB, T, TXT, tr, useSteps } from "./prompt-visuals";

/* Um SVG por métrica do artigo "12 métricas de UX": mostra como a pessoa responde
   e como a nota é calculada. Valores de resposta são exemplos, marcados como tal. */

const RED = "#f87171";
const AMB = "#fbbf24";
const Ex = ({ y = 252 }: { y?: number }) => <T x={620} y={y} a="end" s={9}>RESPOSTAS DE EXEMPLO</T>;

/* Barra horizontal com rótulo e preenchimento animado. */
function Bar({ x, y, w, v, label, on, reduce, color = P, max = 1 }: { x: number; y: number; w: number; v: number; label: string; on: boolean; reduce: boolean; color?: string; max?: number }) {
  return (
    <g>
      <T x={x} y={y - 6} c={TXT} s={10}>{label}</T>
      <rect x={x} y={y} width={w} height={12} rx={6} fill="rgba(255,255,255,0.07)" />
      <motion.rect x={x} y={y} height={12} rx={6} fill={color} initial={false} animate={{ width: on ? (w * v) / max : 0 }} transition={tr(reduce, 0.7)} />
    </g>
  );
}

/* Lista de itens que viram fatores/subescalas: cada item ganha a cor do seu fator. */
const FC = [P, P2, G, AMB, "#38bdf8"];
function ItemsToFactors({ n, factors, vals, k, reduce, title }: { n: number; factors: string[]; vals: number[]; k: number; reduce: boolean; title: string }) {
  const cols = Math.ceil(n / 10);
  return (
    <>
      <T x={20} y={24} c={P2}>{title}</T>
      {Array.from({ length: n }, (_, i) => {
        const f = i % factors.length;
        const gx = 20 + (i % 10) * 18, gy = 40 + Math.floor(i / 10) * 18 * (5 / cols);
        return (
          <motion.rect key={i} width={12} height={12} rx={3} initial={false}
            x={gx} y={gy} animate={{ opacity: k >= 2 ? 0.55 : 1, fill: k >= 1 ? FC[f % FC.length] : "rgba(255,255,255,0.3)" }}
            transition={{ ...tr(reduce, 0.8), delay: reduce ? 0 : (i % 10) * 0.02 }} />
        );
      })}
      {factors.map((f, i) => (
        <Bar key={f} x={290} y={58 + i * (180 / factors.length)} w={320} v={vals[i]} label={f} on={k >= 2} reduce={reduce} color={FC[i % FC.length]} />
      ))}
    </>
  );
}

/* SUPR-Q: 8 itens, 4 fatores. */
export function SuprQ() {
  const { ref, k, reduce } = useSteps(3, 1300);
  return (
    <svg ref={ref} viewBox="0 0 640 260" className="h-auto w-full" role="img" aria-label="SUPR-Q: oito itens agrupados em usabilidade, confiança, aparência e lealdade">
      <ItemsToFactors n={8} factors={["Usabilidade", "Confiança", "Aparência", "Lealdade"]} vals={[0.78, 0.62, 0.7, 0.48]} k={k} reduce={reduce} title="8 ITENS" />
      <T x={290} y={250} c={k >= 3 ? G : "transparent"} s={10}>COMPARE O MESMO QUESTIONÁRIO COM CONCORRENTES</T>
      <Ex y={24} />
    </svg>
  );
}

/* SUS: 10 itens alternados, conta e nota de 0 a 100. */
export function Sus() {
  const ANS = [4, 2, 5, 1, 4, 2, 4, 2, 5, 2];
  const { ref, k, reduce } = useSteps(3, 1500, 3);
  const pts = ANS.map((a, i) => (i % 2 === 0 ? a - 1 : 5 - a));
  const score = pts.reduce((s, v) => s + v, 0) * 2.5;
  const px = (v: number) => 340 + (v / 100) * 270;
  return (
    <svg ref={ref} viewBox="0 0 640 270" className="h-auto w-full" role="img" aria-label="SUS: dez afirmações alternando positivas e negativas, convertidas em uma nota de 0 a 100">
      <T x={20} y={22} c={P2}>10 AFIRMAÇÕES · ESCALA 1 A 5</T>
      {ANS.map((a, i) => (
        <g key={i}>
          <T x={20} y={48 + i * 21} c={i % 2 ? RED : G} s={10} w={700}>{i % 2 ? "−" : "+"}</T>
          {[1, 2, 3, 4, 5].map((v) => (
            <motion.circle key={v} cx={44 + v * 22} cy={44 + i * 21} r={6} initial={false} animate={{ fill: k >= 1 && v === a ? (i % 2 ? RED : G) : "rgba(255,255,255,0.1)" }} transition={{ ...tr(reduce, 0.3), delay: reduce ? 0 : i * 0.06 }} />
          ))}
          <motion.g initial={false} animate={{ opacity: k >= 2 ? 1 : 0 }}>
            <T x={200} y={48 + i * 21} c={TXT} s={10}>{i % 2 ? `5 − ${a} = ${pts[i]}` : `${a} − 1 = ${pts[i]}`}</T>
          </motion.g>
        </g>
      ))}
      <motion.g initial={false} animate={{ opacity: k >= 2 ? 1 : 0.2 }}>
        <T x={340} y={60} c={SUB} s={10}>SOMA × 2,5</T>
        <T x={340} y={96} c="#fff" s={30} w={700}>{k >= 3 ? score.toFixed(1) : "…"}</T>
      </motion.g>
      <rect x={340} y={150} width={270} height={10} rx={5} fill="rgba(255,255,255,0.08)" />
      <line x1={px(68)} x2={px(68)} y1={140} y2={170} stroke={P2} strokeDasharray="3 3" />
      <T x={px(68)} y={186} a="middle" s={9}>68 · MÉDIA DE REFERÊNCIA</T>
      <T x={340} y={186} s={9}>0</T>
      <T x={610} y={186} a="end" s={9}>100</T>
      <motion.circle cy={155} r={10} initial={false} animate={{ cx: k >= 3 ? px(score) : px(0), fill: score >= 68 ? G : AMB, opacity: k >= 3 ? 1 : 0 }} transition={tr(reduce, 0.8)} />
      <Ex y={262} />
    </svg>
  );
}

/* NPS: escala 0 a 10, três grupos e a conta. */
export function Nps() {
  const R = [10, 9, 9, 10, 8, 7, 9, 3, 10, 8, 6, 9, 10, 7, 5, 9, 10, 8, 2, 9];
  const { ref, k, reduce } = useSteps(3, 1500);
  const prom = R.filter((r) => r >= 9).length, det = R.filter((r) => r <= 6).length;
  const nps = Math.round(((prom - det) / R.length) * 100);
  const col = (r: number) => (r >= 9 ? G : r >= 7 ? AMB : RED);
  const x = (v: number) => 50 + v * 54;
  const stack: Record<number, number> = {};
  return (
    <svg ref={ref} viewBox="0 0 640 280" className="h-auto w-full" role="img" aria-label="NPS: notas de 0 a 10 divididas em detratores, neutros e promotores">
      <T x={20} y={22} c={TXT} s={11}>“De 0 a 10, quanto você recomendaria?”</T>
      {Array.from({ length: 11 }, (_, v) => (
        <g key={v}>
          <rect x={x(v) - 22} y={170} width={44} height={26} rx={6} fill={k >= 2 ? `${col(v)}33` : CARD} stroke={k >= 2 ? col(v) : LINE} />
          <T x={x(v)} y={188} a="middle" c={TXT} s={11}>{v}</T>
        </g>
      ))}
      {R.map((r, i) => {
        stack[r] = (stack[r] ?? 0) + 1;
        const h = stack[r];
        return <motion.circle key={i} cx={x(r)} r={7} initial={false} animate={{ cy: k >= 1 ? 170 - h * 16 : 40, opacity: k >= 1 ? 1 : 0, fill: k >= 2 ? col(r) : P2 }} transition={{ ...tr(reduce, 0.6), delay: reduce ? 0 : i * 0.04 }} />;
      })}
      <motion.g initial={false} animate={{ opacity: k >= 2 ? 1 : 0 }}>
        <T x={x(3)} y={216} a="middle" c={RED} s={10} w={700}>{`DETRATORES (0 a 6): ${det}`}</T>
        <T x={x(7.5)} y={216} a="middle" c={AMB} s={10} w={700}>NEUTROS</T>
        <T x={x(9.5)} y={216} a="middle" c={G} s={10} w={700}>{`PROMOTORES: ${prom}`}</T>
      </motion.g>
      <motion.g initial={false} animate={{ opacity: k >= 3 ? 1 : 0 }}>
        <T x={320} y={252} a="middle" c="#fff" s={13} w={700}>{`NPS = ${Math.round((prom / R.length) * 100)}% promotores − ${Math.round((det / R.length) * 100)}% detratores = ${nps}`}</T>
      </motion.g>
      <Ex y={274} />
    </svg>
  );
}

/* SEQ: uma pergunta depois de cada tarefa; compara tarefas. */
export function Seq() {
  const TASKS = [{ l: "Emitir boleto", v: 6.2 }, { l: "Gerar relatório", v: 3.1 }, { l: "Exportar planilha", v: 5.4 }];
  const { ref, k, reduce } = useSteps(TASKS.length + 1, 1400);
  return (
    <svg ref={ref} viewBox="0 0 640 260" className="h-auto w-full" role="img" aria-label="SEQ: uma pergunta de 1 a 7 depois de cada tarefa, revelando qual tarefa é mais difícil">
      <rect x={20} y={14} width={600} height={34} rx={17} fill="rgba(98,47,253,0.16)" stroke={P2} />
      <T x={320} y={36} a="middle" c={TXT} s={11}>“No geral, quão fácil ou difícil foi esta tarefa?”  1 = muito difícil · 7 = muito fácil</T>
      {[1, 2, 3, 4, 5, 6, 7].map((v) => <T key={v} x={200 + (v - 1) * 64} y={80} a="middle" s={10}>{v}</T>)}
      {TASKS.map((t, i) => {
        const on = k > i;
        const hard = t.v < 4;
        return (
          <g key={t.l}>
            <T x={20} y={114 + i * 48} c={TXT} s={11}>{t.l}</T>
            <line x1={200} x2={584} y1={110 + i * 48} y2={110 + i * 48} stroke={LINE} />
            <motion.circle cy={110 + i * 48} r={11} initial={false} animate={{ cx: on ? 200 + (t.v - 1) * 64 : 200, opacity: on ? 1 : 0.2, fill: k > TASKS.length && hard ? RED : P }} transition={tr(reduce, 0.7)} />
            <motion.g initial={false} animate={{ opacity: on ? 1 : 0 }}><T x={620} y={114 + i * 48} a="end" c={TXT} s={11} w={700}>{t.v.toFixed(1)}</T></motion.g>
          </g>
        );
      })}
      <T x={20} y={250} c={k > TASKS.length ? RED : "transparent"} s={10} w={700}>“GERAR RELATÓRIO” É A TAREFA PARA INVESTIGAR PRIMEIRO</T>
      <Ex />
    </svg>
  );
}

/* UMUX-LITE: duas afirmações, uma nota. */
export function UmuxLite() {
  const Q = [{ l: "As funcionalidades atendem o que eu preciso.", v: 6 }, { l: "É fácil de usar.", v: 5 }];
  const { ref, k, reduce } = useSteps(3, 1400);
  return (
    <svg ref={ref} viewBox="0 0 640 240" className="h-auto w-full" role="img" aria-label="UMUX-LITE: duas afirmações de 1 a 7 combinadas em uma nota de usabilidade percebida">
      <T x={20} y={24} c={P2}>2 AFIRMAÇÕES · ESCALA 1 A 7</T>
      {Q.map((q, i) => (
        <g key={q.l}>
          <T x={20} y={64 + i * 70} c={TXT} s={11}>{q.l}</T>
          {[1, 2, 3, 4, 5, 6, 7].map((v) => (
            <motion.rect key={v} x={20 + (v - 1) * 40} y={76 + i * 70} width={32} height={22} rx={6} initial={false} animate={{ fill: k > i && v === q.v ? P : CARD, stroke: k > i && v === q.v ? P2 : LINE }} transition={tr(reduce, 0.3)} />
          ))}
          {[1, 7].map((v) => <T key={v} x={36 + (v - 1) * 40} y={92 + i * 70} a="middle" c={SUB} s={9}>{v}</T>)}
        </g>
      ))}
      <motion.path d="M310 120 H390" stroke={P2} strokeWidth={2} strokeDasharray="5 6" initial={false} animate={{ opacity: k >= 3 ? 1 : 0.2 }} />
      <motion.g initial={false} animate={{ opacity: k >= 3 ? 1 : 0.15 }}>
        <rect x={400} y={70} width={220} height={100} rx={14} fill="#101016" stroke={G} />
        <T x={510} y={100} a="middle" c={SUB} s={10}>MÉDIA DAS DUAS</T>
        <T x={510} y={134} a="middle" c="#fff" s={26} w={700}>5,5 / 7</T>
        <T x={510} y={158} a="middle" c={G} s={9}>em segundos, no fim da sessão</T>
      </motion.g>
      <Ex y={232} />
    </svg>
  );
}

/* Radar genérico para métricas com várias dimensões. */
function Radar({ dims, vals, k, reduce, cx = 470, cy = 140, r = 90 }: { dims: string[]; vals: number[]; k: number; reduce: boolean; cx?: number; cy?: number; r?: number }) {
  const pt = (i: number, v: number) => { const a = (-90 + (i * 360) / dims.length) * (Math.PI / 180); return [cx + r * v * Math.cos(a), cy + r * v * Math.sin(a)]; };
  const poly = (f: (i: number) => number) => dims.map((_, i) => pt(i, f(i)).join(",")).join(" ");
  return (
    <g>
      {[0.33, 0.66, 1].map((g) => <polygon key={g} points={poly(() => g)} fill="none" stroke={LINE} />)}
      {dims.map((d, i) => { const [x, y] = pt(i, 1.22); return <T key={d} x={x} y={y + 4} a="middle" c={TXT} s={9}>{d}</T>; })}
      <motion.polygon initial={false} animate={{ points: k >= 2 ? poly((i) => vals[i]) : poly(() => 0.05) }} fill="rgba(98,47,253,0.35)" stroke={P2} strokeWidth={2} transition={tr(reduce, 0.9)} />
    </g>
  );
}

/* WAMMI: 20 afirmações, 5 dimensões. */
export function Wammi() {
  const { ref, k, reduce } = useSteps(3, 1400);
  const D = ["Atratividade", "Controle", "Eficiência", "Utilidade", "Aprendizado"];
  return (
    <svg ref={ref} viewBox="0 0 640 280" className="h-auto w-full" role="img" aria-label="WAMMI: vinte afirmações resumidas em cinco dimensões de satisfação com o site">
      <T x={20} y={24} c={P2}>20 AFIRMAÇÕES SOBRE O SITE</T>
      {Array.from({ length: 20 }, (_, i) => (
        <motion.rect key={i} x={20 + (i % 5) * 40} y={44 + Math.floor(i / 5) * 40} width={32} height={30} rx={6} initial={false} animate={{ fill: k >= 1 ? (i % 5 === 1 ? RED : P) : CARD, opacity: k >= 1 ? 0.9 : 1 }} transition={{ ...tr(reduce, 0.4), delay: reduce ? 0 : i * 0.03 }} />
      ))}
      <T x={20} y={226} s={10}>CADA COLUNA ALIMENTA UMA DIMENSÃO</T>
      <Radar dims={D} vals={[0.8, 0.38, 0.7, 0.82, 0.66]} k={k} reduce={reduce} />
      <T x={470} y={272} a="middle" c={k >= 3 ? RED : "transparent"} s={10} w={700}>CONTROLE É O PONTO FRACO</T>
      <Ex y={24} />
    </svg>
  );
}

/* PSSUQ: 16 itens, 3 subescalas, quanto menor melhor. */
export function Pssuq() {
  const { ref, k, reduce } = useSteps(3, 1400);
  const S = [{ l: "Utilidade do sistema", v: 2.4 }, { l: "Qualidade da informação", v: 4.6 }, { l: "Qualidade da interface", v: 2.9 }];
  return (
    <svg ref={ref} viewBox="0 0 640 250" className="h-auto w-full" role="img" aria-label="PSSUQ: dezesseis itens em três subescalas de 1 a 7, onde notas menores são melhores">
      <T x={20} y={24} c={P2}>16 ITENS · 3 SUBESCALAS · ESCALA 1 A 7</T>
      <T x={620} y={24} a="end" c={G} s={10} w={700}>MENOR = MELHOR</T>
      {[1, 4, 7].map((v) => <T key={v} x={250 + ((v - 1) / 6) * 360} y={56} a="middle" s={9}>{v}</T>)}
      {S.map((s, i) => {
        const on = k > i;
        const bad = s.v > 4;
        return (
          <g key={s.l}>
            <T x={20} y={94 + i * 52} c={TXT} s={11}>{s.l}</T>
            <rect x={250} y={84} width={360} height={14} rx={7} fill="rgba(255,255,255,0.07)" transform={`translate(0 ${i * 52})`} />
            <motion.rect x={250} y={84 + i * 52} height={14} rx={7} initial={false} animate={{ width: on ? ((s.v - 1) / 6) * 360 : 0, fill: bad ? RED : G }} transition={tr(reduce, 0.7)} />
            <motion.g initial={false} animate={{ opacity: on ? 1 : 0 }}><T x={250 + ((s.v - 1) / 6) * 360 + 8} y={96 + i * 52} c={TXT} s={10} w={700}>{s.v.toFixed(1)}</T></motion.g>
          </g>
        );
      })}
      <T x={20} y={240} c={k >= 3 ? RED : "transparent"} s={10} w={700}>A INTERFACE VAI BEM, MAS AS MENSAGENS E A AJUDA PRECISAM DE ATENÇÃO</T>
    </svg>
  );
}

/* SUMI: 50 itens, 5 subescalas. */
export function Sumi() {
  const { ref, k, reduce } = useSteps(3, 1400);
  const F = ["Eficiência", "Afeto", "Utilidade", "Controle", "Aprendizagem"];
  return (
    <svg ref={ref} viewBox="0 0 640 260" className="h-auto w-full" role="img" aria-label="SUMI: cinquenta itens agrupados em cinco subescalas">
      <ItemsToFactors n={50} factors={F} vals={[0.72, 0.6, 0.8, 0.5, 0.42]} k={k} reduce={reduce} title="50 ITENS · CONCORDO, INDECISO OU DISCORDO" />
      <T x={290} y={252} c={k >= 3 ? AMB : "transparent"} s={10}>MAIS LONGO, MAIS DIAGNÓSTICO: BOM PARA SOFTWARE COMPLEXO</T>
      <Ex y={24} />
    </svg>
  );
}

/* QUIS: escalas bipolares de 9 pontos por seção da interface. */
export function Quis() {
  const R = [
    { s: "TELA", a: "confusa", b: "clara", v: 7 },
    { s: "TERMINOLOGIA", a: "inconsistente", b: "consistente", v: 4 },
    { s: "APRENDIZADO", a: "difícil", b: "fácil", v: 8 },
    { s: "CAPACIDADES", a: "lento", b: "rápido", v: 6 },
  ];
  const { ref, k, reduce } = useSteps(R.length, 1200);
  const x = (v: number) => 250 + (v - 1) * 34;
  return (
    <svg ref={ref} viewBox="0 0 640 250" className="h-auto w-full" role="img" aria-label="QUIS: pares de adjetivos opostos em escalas de 1 a 9 para cada parte da interface">
      <T x={20} y={24} c={P2}>PARES OPOSTOS · ESCALA 1 A 9</T>
      {R.map((r, i) => (
        <g key={r.s}>
          <T x={20} y={66 + i * 48} c={SUB} s={9}>{r.s}</T>
          <T x={240} y={66 + i * 48} a="end" c={TXT} s={10}>{r.a}</T>
          <T x={x(9) + 14} y={66 + i * 48} c={TXT} s={10}>{r.b}</T>
          {Array.from({ length: 9 }, (_, j) => <circle key={j} cx={x(j + 1)} cy={62 + i * 48} r={4} fill="rgba(255,255,255,0.14)" />)}
          <motion.circle cy={62 + i * 48} r={10} initial={false} animate={{ cx: k > i ? x(r.v) : x(5), fill: r.v <= 4 ? RED : P, opacity: k > i ? 1 : 0.2 }} transition={tr(reduce, 0.6)} />
        </g>
      ))}
      <T x={20} y={244} c={k >= R.length ? RED : "transparent"} s={10} w={700}>A TERMINOLOGIA É O QUE MAIS ATRAPALHA</T>
      <Ex y={244} />
    </svg>
  );
}

/* PURE: especialistas pontuam cada passo de 1 a 3. */
export function Pure() {
  const S = [{ l: "Abrir app", v: 1 }, { l: "Achar a entrega", v: 2 }, { l: "Ver a rota", v: 3 }, { l: "Confirmar", v: 1 }];
  const { ref, k, reduce } = useSteps(S.length + 1, 1100);
  const col = (v: number) => (v === 1 ? G : v === 2 ? AMB : RED);
  const total = S.slice(0, Math.min(k, S.length)).reduce((a, s) => a + s.v, 0);
  return (
    <svg ref={ref} viewBox="0 0 640 250" className="h-auto w-full" role="img" aria-label="PURE: cada passo da tarefa recebe nota 1, 2 ou 3 de especialistas, e a soma é a nota da tarefa">
      <T x={20} y={24} c={P2}>TAREFA: CONSULTAR UMA ENTREGA · NOTA DE ESPECIALISTAS POR PASSO</T>
      {S.map((s, i) => {
        const on = k > i;
        return (
          <g key={s.l}>
            {i > 0 && <line x1={40 + i * 140 - 30} x2={40 + i * 140 - 10} y1={100} y2={100} stroke={LINE} />}
            <motion.rect x={30 + i * 140} y={60} width={110} height={80} rx={14} initial={false} animate={{ fill: on ? `${col(s.v)}26` : CARD, stroke: on ? col(s.v) : LINE }} transition={tr(reduce, 0.4)} />
            <T x={85 + i * 140} y={92} a="middle" c={TXT} s={10}>{s.l}</T>
            <motion.g initial={false} animate={{ opacity: on ? 1 : 0 }}><T x={85 + i * 140} y={124} a="middle" c={col(s.v)} s={22} w={700}>{s.v}</T></motion.g>
          </g>
        );
      })}
      <T x={20} y={180} s={10}>1 = FÁCIL · 2 = ALGUM ESFORÇO · 3 = DIFÍCIL</T>
      <T x={620} y={180} a="end" c="#fff" s={14} w={700}>{`PURE = ${total}`}</T>
      <T x={20} y={226} c={k > S.length ? RED : "transparent"} s={10} w={700}>O PASSO VERMELHO É O PRIMEIRO A REDESENHAR · MENOR NOTA = MELHOR</T>
    </svg>
  );
}

/* NASA-TLX: seis dimensões de carga, antes e depois. */
export function NasaTlx() {
  const D = ["Demanda mental", "Demanda física", "Pressão de tempo", "Desempenho", "Esforço", "Frustração"];
  const A = [0.85, 0.3, 0.75, 0.55, 0.8, 0.7];
  const B = [0.55, 0.25, 0.45, 0.3, 0.5, 0.35];
  const { ref, k, reduce } = useSteps(2, 1800, 2);
  const v = k >= 2 ? B : A;
  return (
    <svg ref={ref} viewBox="0 0 640 270" className="h-auto w-full" role="img" aria-label="NASA-TLX: seis dimensões de carga de trabalho de 0 a 100, comparando o sistema atual com o novo">
      <T x={20} y={24} c={P2}>6 DIMENSÕES · ESCALA 0 A 100</T>
      <T x={620} y={24} a="end" c={k >= 2 ? G : RED} s={11} w={700}>{k >= 2 ? "SISTEMA NOVO" : "SISTEMA ATUAL"}</T>
      {D.map((d, i) => (
        <g key={d}>
          {k >= 2 && <rect x={200} y={46 + i * 34} width={400 * A[i]} height={14} rx={7} fill="none" stroke={RED} strokeDasharray="3 3" opacity={0.6} />}
          <T x={20} y={58 + i * 34} c={TXT} s={10}>{d}</T>
          <rect x={200} y={46 + i * 34} width={400} height={14} rx={7} fill="rgba(255,255,255,0.06)" />
          <motion.rect x={200} y={46 + i * 34} height={14} rx={7} initial={false} animate={{ width: k >= 1 ? 400 * v[i] : 0, fill: k >= 2 ? G : RED }} transition={{ ...tr(reduce, 0.8), delay: reduce ? 0 : i * 0.06 }} />
        </g>
      ))}
      <T x={20} y={262} c={SUB} s={9}>{k >= 2 ? "TRACEJADO = ANTES" : ""}</T>
      <Ex y={262} />
    </svg>
  );
}

/* UEQ: pares de adjetivos em seis escalas. */
export function Ueq() {
  const R = [
    { s: "ATRATIVIDADE", a: "desagradável", b: "agradável", v: 6 },
    { s: "CLAREZA", a: "confuso", b: "claro", v: 6 },
    { s: "EFICIÊNCIA", a: "lento", b: "rápido", v: 3 },
    { s: "CONFIABILIDADE", a: "imprevisível", b: "previsível", v: 5 },
    { s: "ESTIMULAÇÃO", a: "chato", b: "empolgante", v: 5 },
    { s: "NOVIDADE", a: "convencional", b: "inovador", v: 4 },
  ];
  const { ref, k, reduce } = useSteps(R.length, 900);
  const x = (v: number) => 300 + (v - 1) * 36;
  return (
    <svg ref={ref} viewBox="0 0 640 290" className="h-auto w-full" role="img" aria-label="UEQ: pares de adjetivos opostos de 1 a 7 agrupados em seis escalas de experiência">
      <T x={20} y={22} c={P2}>26 PARES OPOSTOS · 6 ESCALAS · AQUI UM PAR DE CADA</T>
      {R.map((r, i) => (
        <g key={r.s}>
          <T x={20} y={60 + i * 36} c={SUB} s={9}>{r.s}</T>
          <T x={290} y={60 + i * 36} a="end" c={TXT} s={10}>{r.a}</T>
          <T x={x(7) + 14} y={60 + i * 36} c={TXT} s={10}>{r.b}</T>
          {Array.from({ length: 7 }, (_, j) => <circle key={j} cx={x(j + 1)} cy={56 + i * 36} r={4} fill="rgba(255,255,255,0.14)" />)}
          <motion.circle cy={56 + i * 36} r={9} initial={false} animate={{ cx: k > i ? x(r.v) : x(4), fill: r.v <= 3 ? RED : P, opacity: k > i ? 1 : 0.2 }} transition={tr(reduce, 0.5)} />
        </g>
      ))}
      <T x={20} y={282} c={k >= R.length ? RED : "transparent"} s={10} w={700}>AGRADA E É CLARO, MAS PARECE LENTO</T>
      <Ex y={282} />
    </svg>
  );
}

export const METRIC_VISUALS: Record<string, React.FC> = {
  "m-suprq": SuprQ,
  "m-sus": Sus,
  "m-nps": Nps,
  "m-seq": Seq,
  "m-umux": UmuxLite,
  "m-wammi": Wammi,
  "m-pssuq": Pssuq,
  "m-sumi": Sumi,
  "m-quis": Quis,
  "m-pure": Pure,
  "m-nasatlx": NasaTlx,
  "m-ueq": Ueq,
};

"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Bleed, Eyebrow, M } from "./primitives";
import { useT } from "../i18n";

/* Série "Product Design, métricas, dashboards, CRO e IA" (artigos 20 a 23).
   Regras: números são sempre ilustrativos e marcados como tal, nenhuma animação sugere
   causalidade, nada depende só de cor, e todo estado final é legível sem movimento. */

export function useTimeline(times: number[]) {
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

export const Illustrative = ({ dark = true }: { dark?: boolean }) => {
  const t = useT();
  return (
  <p className={`font-mono text-[11px] uppercase tracking-[0.16em] ${dark ? "text-white/60" : "text-[#0A0A0A]/65"}`}>{t("Dados ilustrativos")}</p>
  );
};

export function Segmented<T extends string>({ value, options, onChange, label }: { value: T; options: { v: T; l: string }[]; onChange: (v: T) => void; label: string }) {
  return (
    <div role="group" aria-label={label} className="inline-flex flex-wrap gap-1 rounded-2xl border border-white/15 p-1">
      {options.map((o) => (
        <button key={o.v} type="button" aria-pressed={value === o.v} onClick={() => onChange(o.v)}
          className={`rounded-xl px-3.5 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] ${value === o.v ? "bg-white text-[#0d0d12]" : "text-white/75 hover:text-white"}`}>
          {o.l}
        </button>
      ))}
    </div>
  );
}

/* ─────────────── 20 · IA: uso não é valor ─────────────── */

type AiTab = "uso" | "qualidade" | "resultado" | "protecao";

/* Dashboard ilustrativo com quatro blocos. Nenhum bloco sozinho diz se a IA gera valor. */
export function SceneAiValueDashboard() {
  const t = useT();
  const [tab, setTab] = useState<AiTab>("uso");
  const ANSWER: Record<AiTab, string> = {
    uso: "Mostra que as pessoas experimentam. Não mostra se o resultado foi aproveitado.",
    qualidade: "Precisa de critérios definidos antes e de amostras revisadas por pessoas.",
    resultado: "Compara a tarefa com a linha de base. Diferenças de público e complexidade importam.",
    protecao: "Sinais definidos antes do lançamento para saber se a otimização prejudica a experiência.",
  };
  return (
    <Bleed>
      <div className="container grid max-w-6xl grid-cols-1 gap-10 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-28">
        <div>
          <Eyebrow>ai-feature-value-dashboard</Eyebrow>
          <p className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">{t("Uso, qualidade, resultado e proteção.")}</p>
          <p className="mt-4 text-white/75">{t("Alterne os blocos. Cada um responde uma pergunta diferente, e nenhum deles, sozinho, prova que a funcionalidade melhorou o trabalho.")}</p>
          <div className="mt-6"><Segmented label={t("Bloco do painel")} value={tab} onChange={setTab} options={[{ v: "uso", l: t("Uso") }, { v: "qualidade", l: t("Qualidade") }, { v: "resultado", l: t("Resultado") }, { v: "protecao", l: t("Proteção") }]} /></div>
          <AnimatePresence mode="wait">
            <motion.p key={tab} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="mt-6 max-w-md border-l-2 border-[#A3E635] pl-4 text-[15px] leading-relaxed text-white">{t(ANSWER[tab])}</motion.p>
          </AnimatePresence>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-7">
          <div className="flex items-center justify-between gap-3"><p className="font-display text-lg font-semibold">{t("Sugestão de resposta · painel")}</p><Illustrative /></div>
          <AnimatePresence mode="wait">
            <motion.div key={tab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="mt-6 min-h-[230px]">
              {tab === "uso" && (
                <div className="grid grid-cols-2 gap-3">
                  {[{ k: "Gerações por semana", v: "12.400" }, { k: "Pessoas que usaram", v: "1.850" }, { k: "Voltaram a usar", v: "41%" }, { k: "Cliques no botão de IA", v: "9.300" }].map((c) => (
                    <div key={c.k} className="rounded-2xl bg-white/[0.05] p-4"><p className="text-xs text-white/65">{t(c.k)}</p><p className="mt-1 font-display text-3xl font-semibold">{t(c.v)}</p></div>
                  ))}
                  <p className="col-span-2 text-sm text-white/65">{t("Volume alto. A pergunta \"ajudou?\" continua aberta.")}</p>
                </div>
              )}
              {tab === "qualidade" && (
                <div>
                  <p className="text-sm text-white/75">{t("O que acontece depois da geração")}</p>
                  <div className="mt-4 space-y-3">
                    {[{ l: "Aceita sem edição", v: 38, c: M.g, pat: "" }, { l: "Editada", v: 44, c: M.lilac, pat: "bg-[repeating-linear-gradient(45deg,rgba(0,0,0,.25)_0_4px,transparent_4px_8px)]" }, { l: "Rejeitada", v: 18, c: M.red, pat: "bg-[repeating-linear-gradient(90deg,rgba(0,0,0,.3)_0_2px,transparent_2px_6px)]" }].map((b) => (
                      <div key={b.l}>
                        <div className="flex justify-between text-sm"><span>{t(b.l)}</span><span className="font-mono">{b.v}%</span></div>
                        <div className="mt-1 h-3 rounded-full bg-white/10"><motion.div initial={{ width: 0 }} animate={{ width: `${b.v}%` }} transition={{ duration: 0.7, ease: M.ease }} className={`h-3 rounded-full ${b.pat}`} style={{ backgroundColor: b.c }} /></div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 rounded-xl border border-[#fbbf24]/40 bg-[#fbbf24]/10 p-3 text-sm text-white">{t("Nota: aceitar sem editar pode ser utilidade ou um erro não percebido. A qualidade precisa de avaliação humana.")}</p>
                </div>
              )}
              {tab === "resultado" && (
                <div>
                  <p className="text-sm text-white/75">{t("Tempo para concluir a tarefa (hipotético)")}</p>
                  {[{ l: "Linha de base", v: 100, t: "8 min" }, { l: "Com a funcionalidade", v: 70, t: "5,6 min" }].map((b, i) => (
                    <div key={b.l} className="mt-4">
                      <div className="flex justify-between text-sm"><span>{t(b.l)}</span><span className="font-mono">{t(b.t)}</span></div>
                      <div className="mt-1 h-6 rounded-lg bg-white/10"><motion.div initial={{ width: 0 }} animate={{ width: `${b.v}%` }} transition={{ duration: 0.7, delay: i * 0.15, ease: M.ease }} className={`h-6 rounded-lg ${i ? "bg-[#A48BFF]" : "bg-white/40"}`} /></div>
                    </div>
                  ))}
                  <p className="mt-5 text-sm text-white/70">{t("Comparação antes e depois: indica mudança, não prova a causa. Público, complexidade e frequência também mudam.")}</p>
                </div>
              )}
              {tab === "protecao" && (
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {["Taxa de correção", "Escalonamento para uma pessoa", "Erro crítico", "Reclamações", "Retrabalho", "Abandono"].map((g) => (
                    <li key={g} className="flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2.5 text-sm"><span aria-hidden="true" className="grid h-5 w-5 place-items-center rounded-full border border-[#fbbf24] text-[10px] text-[#fbbf24]">!</span>{t(g)}</li>
                  ))}
                  <li className="text-sm text-white/65 sm:col-span-2">{t("Nem todas valem para todo produto. Escolha antes de lançar.")}</li>
                </ul>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Bleed>
  );
}

/* Árvore de métricas: quatro dimensões que se abrem a partir da tarefa. */
export function SceneAiMetricTree() {
  const t = useT();
  const { ref, k } = useTimeline([300, 900, 1500, 2100, 2700]);
  const DIMS = [
    { t: "Descoberta e ativação", q: "Encontram o recurso e completam a primeira tarefa?" },
    { t: "Qualidade", q: "O resultado é correto, útil, relevante e compreensível?" },
    { t: "Resultado para o usuário", q: "A tarefa fica mais rápida, simples ou confiável?" },
    { t: "Negócio e risco", q: "Retenção, custo, qualidade. Aumentam erros ou retrabalho?" },
  ];
  return (
    <Bleed tone="light">
      <div ref={ref} className="container max-w-6xl py-20 md:py-28">
        <Eyebrow color={M.p}>{t("Árvore de métricas")}</Eyebrow>
        <motion.div initial={false} animate={{ opacity: k >= 1 ? 1 : 0.5 }} className="mx-auto mt-8 max-w-md rounded-2xl bg-[#0A0A0A] px-5 py-4 text-center text-white">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#A3E635]">{t("Tarefa")}</p>
          <p className="mt-1 font-display text-xl font-semibold">{t("Resumir uma conversa de atendimento")}</p>
        </motion.div>
        <div aria-hidden="true" className="mx-auto h-8 w-px bg-[#0A0A0A]/25" />
        <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {DIMS.map((d, i) => (
            <motion.li key={d.t} initial={false} animate={{ opacity: i + 2 <= k ? 1 : 0.5, y: i + 2 <= k ? 0 : 10 }} transition={{ duration: 0.5, ease: M.ease }}
              className="rounded-2xl border border-[#0A0A0A]/10 bg-white p-5">
              <p className="font-mono text-xs text-[#622FFD]">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-1 font-display text-lg font-semibold">{t(d.t)}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#0A0A0A]/75">{t(d.q)}</p>
            </motion.li>
          ))}
        </ol>
        <p className="mt-8 max-w-2xl font-display text-2xl font-semibold leading-snug">{t("Um número alto de gerações não diz se o resultado foi")} <span className="text-[#622FFD]">{t("aproveitado")}</span>.</p>
      </div>
    </Bleed>
  );
}

/* Correção humana: cada comportamento tem mais de uma leitura possível. */
export function SceneHumanCorrection() {
  const t = useT();
  const [i, setI] = useState(0);
  const CASES = [
    { l: "Copiada sem alterações", a: "A resposta foi útil.", b: "A pessoa não percebeu um erro." },
    { l: "Muito editada", a: "Ajudou a começar.", b: "Ainda exige bastante trabalho." },
    { l: "Rejeitada", a: "Baixa relevância ou falta de confiança.", b: "A pessoa só queria explorar outra alternativa." },
  ];
  const c = CASES[i];
  return (
    <Bleed>
      <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <div>
          <Eyebrow>{t("Depois da geração")}</Eyebrow>
          <p className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">{t("O mesmo evento, duas leituras.")}</p>
          <p className="mt-4 text-white/75">{t("Escolha um comportamento. O evento de produto não diz qual leitura é a certa: combine com amostras revisadas, feedback e testes de usabilidade.")}</p>
          <div className="mt-6 flex flex-col gap-2">
            {CASES.map((x, k) => (
              <button key={x.l} type="button" aria-pressed={i === k} onClick={() => setI(k)}
                className={`rounded-xl border px-4 py-3 text-left text-[15px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] ${i === k ? "border-white bg-white text-[#0d0d12]" : "border-white/15 text-white/80 hover:border-white/40"}`}>{t(x.l)}</button>
            ))}
          </div>
        </div>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} className="grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"><p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/60">{t("Evento")}</p><p className="mt-1 font-display text-2xl font-semibold">{t(c.l)}</p></div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#A3E635]/40 p-5"><p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#A3E635]">{t("Pode indicar")}</p><p className="mt-2 text-[15px]">{t(c.a)}</p></div>
                <div className="rounded-2xl border border-dashed border-[#fbbf24]/60 p-5"><p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#fbbf24]">{t("Ou pode indicar")}</p><p className="mt-2 text-[15px]">{t(c.b)}</p></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Bleed>
  );
}

/* ─────────────── 21 · Dashboard que ajuda a decidir ─────────────── */

/* O mesmo número, com e sem contexto. */
export function SceneNumberContext() {
  const t = useT();
  const { ref, k } = useTimeline([600, 1200, 1800, 2400]);
  const CTX = [
    { k: "Período", v: "Últimos 28 dias" },
    { k: "Comparação", v: "vs. 28 dias anteriores: 4,6%" },
    { k: "Definição", v: "Formulários enviados ÷ sessões elegíveis" },
    { k: "Volume", v: "3.100 sessões · 130 envios" },
  ];
  return (
    <Bleed tone="light">
      <div ref={ref} className="container grid max-w-6xl grid-cols-1 items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <div>
          <Eyebrow color={M.p}>{t("Dê contexto ao número")}</Eyebrow>
          <div className="mt-6 rounded-3xl border border-[#0A0A0A]/10 bg-white p-6 shadow-[0_24px_60px_-30px_rgba(10,10,10,0.25)]">
            <p className="text-sm text-[#0A0A0A]/70">{t("Conversão")}</p>
            <p className="font-display text-7xl font-semibold tracking-tight md:text-8xl">4,2%</p>
            <Illustrative dark={false} />
          </div>
        </div>
        <ol className="flex flex-col gap-3">
          {CTX.map((c, i) => (
            <motion.li key={c.k} initial={false} animate={{ opacity: i < k ? 1 : 0.5, x: i < k ? 0 : 12 }} transition={{ duration: 0.45, ease: M.ease }}
              className="flex items-baseline gap-4 rounded-2xl border border-[#0A0A0A]/10 bg-white px-5 py-4">
              <span className="w-28 shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-[#622FFD]">{t(c.k)}</span>
              <span className="text-[15px]">{t(c.v)}</span>
            </motion.li>
          ))}
          <li className="pt-2 text-sm text-[#0A0A0A]/70">{t("Sem esses dados, uma seta verde ou vermelha não diz se a diferença é relevante ou só variação normal.")}</li>
        </ol>
      </div>
    </Bleed>
  );
}

/* Escolha o gráfico pela pergunta. */
export function SceneChartChooser() {
  const t = useT();
  const OPTS = [
    { v: "linha", q: "Como isso evoluiu ao longo do tempo?", c: "Linha" },
    { v: "barras", q: "Qual segmento é maior ou menor?", c: "Barras" },
    { v: "funil", q: "Em qual etapa as pessoas desistem?", c: "Funil" },
    { v: "dispersao", q: "Duas variáveis se movem juntas?", c: "Dispersão" },
    { v: "tabela", q: "Qual é o valor exato de cada item?", c: "Tabela" },
    { v: "cohort", q: "Grupos que começaram em meses diferentes retêm igual?", c: "Cohort" },
  ] as const;
  const [v, setV] = useState<(typeof OPTS)[number]["v"]>("linha");
  const cur = OPTS.find((o) => o.v === v)!;
  const draw = { initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: 0.8, ease: M.ease } };
  return (
    <Bleed>
      <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <div>
          <Eyebrow>{t("Gráfico pela pergunta")}</Eyebrow>
          <p className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">{t("Primeiro a pergunta. Depois o formato.")}</p>
          <ul className="mt-6 flex flex-col gap-2">
            {OPTS.map((o) => (
              <li key={o.v}>
                <button type="button" aria-pressed={v === o.v} onClick={() => setV(o.v)}
                  className={`w-full rounded-xl border px-4 py-3 text-left text-[15px] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] ${v === o.v ? "border-white bg-white font-semibold text-[#0d0d12]" : "border-white/12 text-white/80 hover:border-white/35"}`}>{t(o.q)}</button>
              </li>
            ))}
          </ul>
        </div>
        <figure className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <AnimatePresence mode="wait">
            <motion.div key={v} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <svg viewBox="0 0 320 200" className="h-auto w-full" role="img" aria-label={t("Exemplo de gráfico: {c}", { c: t(cur.c) })}>
                <line x1="30" y1="175" x2="310" y2="175" stroke="rgba(255,255,255,.25)" />
                <line x1="30" y1="15" x2="30" y2="175" stroke="rgba(255,255,255,.25)" />
                {v === "linha" && <motion.path {...draw} d="M30 150 L80 130 L130 138 L180 100 L230 92 L300 60" fill="none" stroke={M.lilac} strokeWidth="3" />}
                {v === "barras" && [60, 110, 85, 140, 50].map((h, i) => <motion.rect key={i} initial={{ height: 0, y: 175 }} animate={{ height: h, y: 175 - h }} transition={{ duration: 0.5, delay: i * 0.06 }} x={48 + i * 52} width="34" rx="4" fill={i === 3 ? M.g : M.lilac} />)}
                {v === "funil" && [260, 200, 130, 80].map((w, i) => <motion.rect key={i} initial={{ width: 0 }} animate={{ width: w }} transition={{ duration: 0.5, delay: i * 0.08 }} x={170 - w / 2} y={25 + i * 38} height="30" rx="4" fill={M.lilac} opacity={1 - i * 0.15} />)}
                {v === "dispersao" && [[60, 140], [80, 120], [110, 130], [140, 95], [160, 105], [200, 80], [230, 70], [260, 85], [290, 50], [120, 150], [250, 110]].map(([x, y], i) => <motion.circle key={i} initial={{ r: 0 }} animate={{ r: 5 }} transition={{ delay: i * 0.04 }} cx={x} cy={y} fill={M.lilac} />)}
                {v === "tabela" && [0, 1, 2, 3].map((r) => <g key={r}>{[0, 1, 2].map((c) => <motion.rect key={c} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: (r * 3 + c) * 0.03 }} x={40 + c * 90} y={25 + r * 36} width="80" height="26" rx="4" fill={r === 0 ? "rgba(164,139,255,.45)" : "rgba(255,255,255,.08)"} />)}</g>)}
                {v === "cohort" && [0, 1, 2, 3].map((r) => <g key={r}>{[0, 1, 2, 3, 4].filter((c) => c < 5 - r).map((c) => <motion.rect key={c} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: (r + c) * 0.05 }} x={45 + c * 52} y={25 + r * 36} width="46" height="30" rx="4" fill={M.lilac} fillOpacity={Math.max(0.2, 1 - c * 0.2)} />)}</g>)}
              </svg>
              <figcaption className="mt-4 flex items-baseline justify-between gap-3">
                <span className="font-display text-2xl font-semibold">{t(cur.c)}</span>
                <span className="text-sm text-white/65">{v === "dispersao" ? t("Relação, não causa.") : t("Formato que facilita a comparação.")}</span>
              </figcaption>
            </motion.div>
          </AnimatePresence>
        </figure>
      </div>
    </Bleed>
  );
}

/* Do painel sobrecarregado à hierarquia por decisão. */
export function SceneDashboardHierarchy() {
  const t = useT();
  const [org, setOrg] = useState(false);
  const CARDS = [
    { id: "res", lvl: 0, l: "Oportunidades qualificadas", v: "212" },
    { id: "f1", lvl: 1, l: "CTA clicado", v: "18%" },
    { id: "f2", lvl: 1, l: "Formulário enviado", v: "6,1%" },
    { id: "seg", lvl: 2, l: "Mobile × desktop", v: "−1,4 p.p." },
    { id: "ch", lvl: 2, l: "Por canal", v: "5 canais" },
    { id: "pr1", lvl: 3, l: "Erros no formulário", v: "2,3%" },
    { id: "pr2", lvl: 3, l: "Leads inválidos", v: "9%" },
    { id: "pv", lvl: 4, l: "Pageviews", v: "48.200" },
    { id: "tm", lvl: 4, l: "Tempo médio", v: "1m 42s" },
  ];
  const LV = ["Resultado principal", "Indicadores explicativos", "Segmentações", "Métricas de proteção", "Detalhamento"];
  const messy = [4, 7, 0, 2, 8, 1, 5, 3, 6];
  return (
    <Bleed>
      <div className="container max-w-6xl py-20 md:py-28">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>dashboard-to-decision</Eyebrow>
            <p className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">{t("Mesmos dados. Outra hierarquia.")}</p>
          </div>
          <div className="flex flex-col items-start gap-2 md:items-end">
            <Segmented label={t("Organização do painel")} value={org ? "o" : "s"} onChange={(x) => setOrg(x === "o")} options={[{ v: "s", l: t("Sobrecarregado") }, { v: "o", l: t("Por decisão") }]} />
            <Illustrative />
          </div>
        </div>
        {!org ? (
          <div className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-3">
            {messy.map((m) => {
              const c = CARDS[m];
              return (
                <motion.div layout key={c.id} transition={{ duration: 0.5, ease: M.ease }} className="rounded-xl border border-white/10 bg-white/[0.05] p-4">
                  <p className="text-xs text-white/65">{t(c.l)}</p><p className="mt-1 font-display text-2xl font-semibold">{t(c.v)}</p>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="mt-8 flex flex-col gap-4">
            {LV.map((lv, li) => (
              <div key={lv} className="grid grid-cols-1 gap-2 md:grid-cols-[200px_1fr] md:items-center">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#A48BFF]">{String(li + 1).padStart(2, "0")} · {t(lv)}</p>
                <div className="flex flex-wrap gap-2">
                  {CARDS.filter((c) => c.lvl === li).map((c) => (
                    <motion.div layout key={c.id} transition={{ duration: 0.5, ease: M.ease }}
                      className={`rounded-xl border p-4 ${li === 0 ? "min-w-[240px] border-[#A3E635] bg-[#A3E635]/10" : li === 3 ? "border-dashed border-[#fbbf24]/60" : li === 4 ? "border-white/10 opacity-80" : "border-white/12 bg-white/[0.04]"}`}>
                      <p className="text-xs text-white/70">{t(c.l)}</p><p className={`mt-1 font-display font-semibold ${li === 0 ? "text-4xl" : "text-xl"}`}>{t(c.v)}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Bleed>
  );
}

/* ─────────────── 22 · CRO em 2026 ─────────────── */

/* A conversão como sequência de decisões: cada pergunta precisa de resposta para seguir. */
export function SceneCroQuestions() {
  const t = useT();
  const Q = ["Estou no lugar certo?", "Entendo o que está sendo oferecido?", "Isso resolve um problema que tenho?", "Tenho evidências para confiar?", "Sei o que acontece se clicar?", "Vale fornecer meus dados agora?"];
  const { ref, k } = useTimeline(Q.map((_, i) => 300 + i * 650));
  return (
    <Bleed tone="light">
      <div ref={ref} className="container max-w-6xl py-20 md:py-28">
        <Eyebrow color={M.p}>{t("Uma sequência de decisões")}</Eyebrow>
        <ol className="mt-8 flex flex-col gap-2">
          {Q.map((q, i) => (
            <motion.li key={q} initial={false} animate={{ opacity: i < k ? 1 : 0.45, x: i < k ? 0 : -8 }} transition={{ duration: 0.45, ease: M.ease }}
              style={{ marginLeft: `min(${i * 6}%, ${i * 48}px)` }}
              className="flex items-center gap-3 rounded-2xl border border-[#0A0A0A]/10 bg-white px-4 py-3 md:px-5 md:py-4">
              <span className="font-mono text-xs text-[#622FFD]">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-display text-lg font-semibold md:text-2xl">{t(q)}</span>
            </motion.li>
          ))}
        </ol>
        <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-[#0A0A0A]/80">{t("A ordem e o peso variam conforme público, oferta e risco percebido. O trabalho de CRO é descobrir")} <strong>{t("qual delas está impedindo o avanço")}</strong>.</p>
      </div>
    </Bleed>
  );
}

/* Mapa de investigação: funil, ponto para investigar, fontes de evidência e ciclo. */
export function SceneCroInvestigationMap() {
  const t = useT();
  const { ref, k } = useTimeline([300, 1100, 1900, 2700, 3500]);
  const FUNNEL = [{ l: "Sessão", v: 100 }, { l: "CTA clicado", v: 22 }, { l: "Formulário iniciado", v: 15 }, { l: "Formulário enviado", v: 6 }, { l: "Lead qualificado", v: 3 }];
  const SRC = ["Analytics", "Pesquisa com usuários", "Feedback"];
  const LOOP = ["Evidência", "Hipótese", "Método", "Aprendizado"];
  return (
    <Bleed>
      <div ref={ref} className="container max-w-6xl py-20 md:py-28">
        <div className="flex items-baseline justify-between gap-4"><Eyebrow>cro-investigation-map</Eyebrow><Illustrative /></div>
        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <ol className="flex flex-col gap-2">
            {FUNNEL.map((f, i) => {
              const flag = i === 3 && k >= 2;
              return (
                <li key={f.l} className="grid grid-cols-[140px_1fr] items-center gap-3 sm:grid-cols-[170px_1fr]">
                  <span className="text-sm text-white/80">{t(f.l)}</span>
                  <div className="relative h-9 rounded-lg bg-white/[0.06]">
                    <motion.div initial={false} animate={{ width: k >= 1 ? `${Math.max(f.v, 4)}%` : "0%" }} transition={{ duration: 0.7, delay: i * 0.08, ease: M.ease }}
                      className={`h-9 rounded-lg ${flag ? "bg-[repeating-linear-gradient(45deg,#fbbf24_0_6px,#f59e0b_6px_12px)]" : "bg-[#A48BFF]"}`} />
                    <span className="absolute inset-y-0 right-2 flex items-center font-mono text-xs text-white/75">{f.v}%</span>
                  </div>
                  {flag && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-start-2 -mt-1 text-xs font-semibold text-[#fbbf24]">{t("⚑ Ponto para investigar, não causa confirmada")}</motion.p>}
                </li>
              );
            })}
          </ol>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/60">{t("Fontes de evidência")}</p>
            <ul className="mt-3 flex flex-col gap-2">
              {SRC.map((s, i) => (
                <motion.li key={s} initial={false} animate={{ opacity: k >= 3 ? 1 : 0.45, x: k >= 3 ? 0 : 10 }} transition={{ delay: i * 0.12 }} className="flex items-center gap-3 rounded-xl border border-white/12 px-4 py-3">
                  <span aria-hidden="true" className="h-px w-6 border-t border-dashed border-[#fbbf24]" />{t(s)}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        <ol className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-4">
          {LOOP.map((l, i) => (
            <motion.li key={l} initial={false} animate={{ opacity: k >= 4 ? 1 : 0.45 }} transition={{ delay: i * 0.15 }}
              className={`rounded-2xl border p-4 text-center font-display text-lg font-semibold ${i === 3 && k >= 5 ? "border-[#A3E635] bg-[#A3E635]/10" : "border-white/12"}`}>
              {t(l)}{i < 3 && <span aria-hidden="true" className="ml-2 text-white/35">→</span>}
            </motion.li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-white/65">{t("Sinais de funil ajudam a escolher onde investigar. A causa vem da combinação de métodos.")}</p>
      </div>
    </Bleed>
  );
}

/* Uma hipótese que pode ser refutada, montada campo a campo com o exemplo do texto. */
export function SceneHypothesisCard() {
  const t = useT();
  const F = [
    { k: "Observação", v: "Muitas pessoas abandonam o formulário depois de chegar ao campo de telefone." },
    { k: "Hipótese", v: "Parte dos visitantes hesita porque não entende por que o telefone é necessário e teme contatos inesperados." },
    { k: "Mudança proposta", v: "Explicar a finalidade do campo e como o contato será utilizado." },
    { k: "Métrica principal", v: "Conclusão do formulário entre quem o iniciou." },
    { k: "Métricas de proteção", v: "Validade dos contatos, qualificação dos leads, reclamações sobre contato comercial." },
  ];
  const { ref, k } = useTimeline(F.map((_, i) => 300 + i * 700));
  return (
    <Bleed tone="violet">
      <div ref={ref} className="container grid max-w-6xl grid-cols-1 gap-10 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-28">
        <div>
          <Eyebrow color="#ffffff">{t("Hipótese refutável")}</Eyebrow>
          <p className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">{t("Explica um comportamento e prevê algo observável.")}</p>
          <p className="mt-4 text-white/85">{t("Se o resultado não mudar, a equipe revê a explicação, a relevância do campo ou o diagnóstico.")}</p>
        </div>
        <div className="rounded-3xl bg-white p-5 text-[#0A0A0A] md:p-7">
          {F.map((f, i) => (
            <motion.div key={f.k} initial={false} animate={{ opacity: i < k ? 1 : 0.5 }} transition={{ duration: 0.4 }} className="border-b border-[#0A0A0A]/10 py-3 last:border-0">
              <p className={`font-mono text-[11px] uppercase tracking-[0.16em] ${i === 4 ? "text-[#B45309]" : "text-[#622FFD]"}`}>{t(f.k)}</p>
              <p className="mt-1 text-[15px] leading-relaxed">{t(f.v)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Bleed>
  );
}

/* ─────────────── 23 · Impacto de UX sem ROI forçado ─────────────── */

/* Três níveis ligados por relações a validar. Tudo legível sem interação; tocar expande exemplos. */
export function SceneUxImpactEvidence() {
  const t = useT();
  const [open, setOpen] = useState<number | null>(null);
  const LV = [
    { t: "Experiência", q: "Completa a tarefa? Quantos erros? Quanto esforço relata?", ex: ["Taxa de conclusão", "Tempo de tarefa", "Erros", "Esforço percebido"] },
    { t: "Comportamento do produto", q: "Conclui onboarding, usa a funcionalidade principal, retorna?", ex: ["Onboarding concluído", "Uso da funcionalidade principal", "Retorno", "Abandono"] },
    { t: "Resultado de negócio", q: "Ativação, retenção, custo de suporte, receita, oportunidades?", ex: ["Ativação", "Retenção", "Custo de suporte", "Oportunidades qualificadas"] },
  ];
  return (
    <Bleed tone="light">
      <div className="container max-w-4xl py-20 md:py-28">
        <Eyebrow color={M.p}>ux-impact-evidence</Eyebrow>
        <p className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">{t("Três níveis. A ligação entre eles precisa ser validada.")}</p>
        <ol className="mt-10 flex flex-col">
          {LV.map((l, i) => (
            <li key={l.t}>
              {i > 0 && (
                <div className="flex items-center gap-3 py-2 pl-6" aria-hidden="true">
                  <span className="h-10 w-0 border-l-2 border-dashed border-[#0A0A0A]/40" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#0A0A0A]/65">{t("relação a validar")}</span>
                </div>
              )}
              <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}
                className="w-full rounded-2xl border border-[#0A0A0A]/12 bg-white p-5 text-left transition hover:border-[#622FFD]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#622FFD]">
                <span className="flex items-baseline justify-between gap-3">
                  <span className="font-display text-2xl font-semibold">{t(l.t)}</span>
                  <span aria-hidden="true" className="font-mono text-sm text-[#622FFD]">{open === i ? "−" : "+"}</span>
                </span>
                <span className="mt-1 block text-[15px] text-[#0A0A0A]/75">{t(l.q)}</span>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.span initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="block overflow-hidden">
                      <span className="mt-4 flex flex-wrap gap-2">{l.ex.map((e) => <span key={e} className="rounded-full bg-[#F4F2FF] px-3 py-1 text-sm">{t(e)}</span>)}</span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
              <p className="sr-only">{t("Exemplos: {list}.", { list: l.ex.map((e) => t(e)).join(", ") })}</p>
            </li>
          ))}
        </ol>
        <ol className="mt-10 flex flex-wrap items-center gap-2 font-display text-xl font-semibold">
          {["Evidência", "Interpretação", "Decisão"].map((s, i) => (
            <li key={s} className="flex items-center gap-2"><span className={`rounded-full px-4 py-2 ${i === 2 ? "bg-[#0A0A0A] text-white" : "border border-[#0A0A0A]/15"}`}>{t(s)}</span>{i < 2 && <span aria-hidden="true" className="text-[#0A0A0A]/40">→</span>}</li>
          ))}
        </ol>
      </div>
    </Bleed>
  );
}

/* O que cada método mostra e o que ele não prova. */
export function SceneEvidenceMethods() {
  const t = useT();
  const M4 = [
    { t: "Antes e depois", s: 1, show: "Mudança ao longo do tempo.", not: "Pode ser campanha, sazonalidade, preço ou tráfego." },
    { t: "Segmentação", s: 2, show: "Onde a mudança é mais visível.", not: "Não prova a causa por si só." },
    { t: "Teste controlado", s: 4, show: "Evidência mais forte de efeito causal, quando bem desenhado.", not: "Exige volume, instrumentação e plano de análise." },
    { t: "Pesquisa qualitativa", s: 3, show: "O mecanismo, a percepção e as dificuldades.", not: "Não estima sozinha o tamanho do efeito." },
  ];
  const { ref, k } = useTimeline(M4.map((_, i) => 300 + i * 600));
  return (
    <Bleed>
      <div ref={ref} className="container max-w-6xl py-20 md:py-28">
        <Eyebrow>{t("Evidência não é atribuição")}</Eyebrow>
        <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
          {M4.map((m, i) => (
            <motion.div key={m.t} initial={false} animate={{ opacity: i < k ? 1 : 0.45, y: i < k ? 0 : 10 }} transition={{ duration: 0.45, ease: M.ease }} className="rounded-2xl border border-white/12 bg-white/[0.03] p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="font-display text-xl font-semibold">{t(m.t)}</p>
                <span className="flex gap-1" aria-label={t("Força para inferir causa: {s} de 4", { s: m.s })} role="img">
                  {[1, 2, 3, 4].map((d) => <span key={d} className={`h-2 w-5 rounded-full ${d <= m.s ? "bg-[#A48BFF]" : "bg-white/15"}`} />)}
                </span>
              </div>
              <p className="mt-3 text-[15px]"><span className="font-semibold text-[#A3E635]">{t("Mostra:")}</span> {t(m.show)}</p>
              <p className="mt-1 text-[15px] text-white/80"><span className="font-semibold text-[#fbbf24]">{t("Não prova:")}</span> {t(m.not)}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-sm text-white/65">{t("A barra indica, de forma qualitativa, quanto cada método ajuda a inferir causa. Os métodos se complementam.")}</p>
      </div>
    </Bleed>
  );
}

/* A narrativa de impacto em sete passos, terminando em uma decisão. */
export function SceneImpactNarrative() {
  const t = useT();
  const S = ["Problema", "Evidência inicial", "Intervenção", "Métrica", "Resultado observado", "Limitações", "Decisão"];
  const { ref, k } = useTimeline(S.map((_, i) => 300 + i * 450));
  return (
    <Bleed tone="light">
      <div ref={ref} className="container max-w-6xl py-20 md:py-28">
        <Eyebrow color={M.p}>{t("Narrativa de impacto")}</Eyebrow>
        <ol className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
          {S.map((s, i) => (
            <motion.li key={s} initial={false} animate={{ opacity: i < k ? 1 : 0.45, y: i < k ? 0 : 8 }} transition={{ duration: 0.4, ease: M.ease }}
              className={`rounded-2xl border p-4 ${i === 5 ? "border-dashed border-[#B45309]/60 bg-[#FFF7ED]" : i === 6 ? "border-[#0A0A0A] bg-[#0A0A0A] text-white" : "border-[#0A0A0A]/10 bg-white"}`}>
              <p className={`font-mono text-xs ${i === 6 ? "text-[#A3E635]" : "text-[#622FFD]"}`}>{i + 1}</p>
              <p className="mt-1 font-display text-lg font-semibold leading-tight">{t(s)}</p>
            </motion.li>
          ))}
        </ol>
        <p className="mt-8 max-w-2xl font-display text-2xl font-semibold leading-snug">{t("Stakeholders entendem o raciocínio, não só o número final. E as")} <span className="text-[#B45309]">{t("limitações")}</span> {t("fazem parte da história.")}</p>
      </div>
    </Bleed>
  );
}

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Bleed, Eyebrow, M } from "./primitives";
import { Segmented, useTimeline } from "./scenes-advanced";

/* Série "UX, Product Design e tendências atuais" (artigos 24 a 27).
   Exemplos são hipotéticos e marcados; estados usam ícone e texto além da cor;
   todo estado final é legível sem movimento. */

/* ─────────────── 24 · Agentes: desenhar limites ─────────────── */

const LEVELS = [
  { t: "Sugerir", ex: "Recomenda três horários para a reunião.", who: "A pessoa decide" },
  { t: "Preparar", ex: "Preenche o pedido e espera a revisão.", who: "A pessoa revisa e envia" },
  { t: "Executar com confirmação", ex: "Explica que vai cancelar o plano e pede autorização.", who: "A pessoa autoriza cada ação" },
  { t: "Executar dentro de regras", ex: "Reorganiza a agenda dentro dos limites definidos antes.", who: "A pessoa define as regras" },
];

/* Escada de autonomia com eixo de impacto e reversibilidade. Escolher uma ação mostra um nível possível. */
export function SceneAutonomyLadder() {
  const ACTIONS = [
    { v: "lista", l: "Organizar uma lista", lvl: 3, why: "Baixo impacto e fácil de desfazer. Mesmo assim, a pessoa acompanha o que mudou." },
    { v: "mensagem", l: "Enviar mensagem em nome da pessoa", lvl: 2, why: "Fala por alguém e não dá para retirar depois de lida. Pede confirmação." },
    { v: "dinheiro", l: "Transferir dinheiro", lvl: 1, why: "Alto impacto e difícil de reverter. O agente prepara, a pessoa decide." },
  ] as const;
  const [a, setA] = useState<(typeof ACTIONS)[number]["v"]>("mensagem");
  const cur = ACTIONS.find((x) => x.v === a)!;
  return (
    <Bleed>
      <div className="container grid max-w-6xl grid-cols-1 gap-10 py-20 md:grid-cols-[0.85fr_1.15fr] md:py-28">
        <div>
          <Eyebrow>agent-autonomy-ladder</Eyebrow>
          <p className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">Mais autonomia exige mais limites e visibilidade.</p>
          <p className="mt-4 text-white/75">Escolha uma ação. O nível adequado depende do impacto, da reversibilidade e do risco. É uma ferramenta de design, não uma regra universal.</p>
          <div className="mt-6 flex flex-col gap-2">
            {ACTIONS.map((x) => (
              <button key={x.v} type="button" aria-pressed={a === x.v} onClick={() => setA(x.v)}
                className={`rounded-xl border px-4 py-3 text-left text-[15px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] ${a === x.v ? "border-white bg-white text-[#0d0d12]" : "border-white/15 text-white/80 hover:border-white/40"}`}>{x.l}</button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.p key={a} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-5 border-l-2 border-[#A3E635] pl-4 text-[15px] text-white">{cur.why}</motion.p>
          </AnimatePresence>
        </div>
        <div className="relative pl-8">
          <div aria-hidden="true" className="absolute bottom-2 left-0 top-2 flex w-6 flex-col items-center">
            <span className="text-[10px] text-white/60">↑</span>
            <span className="w-px flex-1 bg-gradient-to-b from-[#fbbf24] to-white/20" />
          </div>
          <p className="absolute -left-1 top-1/2 hidden origin-center -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.16em] text-white/60 sm:block">mais autonomia</p>
          <ol className="flex flex-col-reverse gap-2">
            {LEVELS.map((l, i) => {
              const on = i === cur.lvl;
              return (
                <motion.li key={l.t} layout animate={{ scale: on ? 1 : 0.98, opacity: on ? 1 : 0.6 }} transition={{ duration: 0.35, ease: M.ease }}
                  style={{ marginLeft: `${i * 4}%` }}
                  className={`rounded-2xl border p-4 ${on ? "border-[#A3E635] bg-[#A3E635]/10" : "border-white/12 bg-white/[0.03]"}`}>
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-display text-lg font-semibold md:text-xl"><span className="mr-2 font-mono text-xs text-[#A48BFF]">{i + 1}</span>{l.t}</p>
                    {on && <span className="shrink-0 rounded-full bg-[#A3E635] px-2 py-0.5 text-[11px] font-semibold text-[#0d0d12]">nível possível</span>}
                  </div>
                  <p className="mt-1 text-sm text-white/80">{l.ex}</p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white/60">Decisão final: {l.who}</p>
                </motion.li>
              );
            })}
          </ol>
          <p className="mt-4 text-xs text-white/60">Exemplos hipotéticos. Quanto maior o impacto e menor a reversibilidade, mais confirmação explícita.</p>
        </div>
      </div>
    </Bleed>
  );
}

/* Impacto, reversibilidade e ambiguidade definem quando pedir confirmação. */
export function SceneConfirmationDial() {
  const [imp, setImp] = useState(2);
  const [rev, setRev] = useState(2);
  const [amb, setAmb] = useState(1);
  const out = amb >= 3
    ? { t: "Esclarecer antes de agir", d: "O objetivo ou os dados não estão claros. Perguntar evita executar a coisa errada.", c: "border-[#A48BFF] bg-[#A48BFF]/10", icon: "?" }
    : imp >= 3 || rev <= 1
      ? { t: "Explicar e pedir confirmação explícita", d: "Consequência alta ou difícil de desfazer.", c: "border-[#fbbf24] bg-[#fbbf24]/10", icon: "!" }
      : { t: "Executar e mostrar o que aconteceu", d: "Baixo risco e reversível, desde que a pessoa consiga acompanhar e desfazer.", c: "border-[#A3E635] bg-[#A3E635]/10", icon: "✓" };
  const Slider = ({ label, v, set, lo, hi }: { label: string; v: number; set: (n: number) => void; lo: string; hi: string }) => (
    <label className="block">
      <span className="flex justify-between text-sm"><span className="font-semibold">{label}</span><span className="text-[#0A0A0A]/65">{v <= 1 ? lo : v >= 3 ? hi : "médio"}</span></span>
      <input type="range" min={1} max={3} step={1} value={v} onChange={(e) => set(+e.target.value)} className="mt-2 w-full accent-[#622FFD]" aria-valuetext={v <= 1 ? lo : v >= 3 ? hi : "médio"} />
    </label>
  );
  return (
    <Bleed tone="light">
      <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <div>
          <Eyebrow color={M.p}>Confirmação no momento certo</Eyebrow>
          <p className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">Ajuste os três fatores.</p>
          <div className="mt-6 space-y-5 rounded-3xl border border-[#0A0A0A]/10 bg-white p-6">
            <Slider label="Impacto se der errado" v={imp} set={setImp} lo="baixo" hi="alto" />
            <Slider label="Reversibilidade" v={rev} set={setRev} lo="difícil desfazer" hi="fácil desfazer" />
            <Slider label="Ambiguidade do objetivo" v={amb} set={setAmb} lo="claro" hi="ambíguo" />
          </div>
        </div>
        <div aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div key={out.t} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              className={`rounded-3xl border-2 p-7 ${out.c}`}>
              <span aria-hidden="true" className="grid h-10 w-10 place-items-center rounded-full bg-[#0A0A0A] font-display text-lg text-white">{out.icon}</span>
              <p className="mt-4 font-display text-2xl font-semibold leading-snug md:text-3xl">{out.t}</p>
              <p className="mt-2 text-[15px] text-[#0A0A0A]/80">{out.d}</p>
            </motion.div>
          </AnimatePresence>
          <p className="mt-4 text-sm text-[#0A0A0A]/70">Pedir confirmação para tudo cansa. Não pedir para ações irreversíveis cria risco.</p>
        </div>
      </div>
    </Bleed>
  );
}

/* Estado da tarefa: concluída, hipótese, pendente e erro, cada um com ícone e texto. Depois, a recuperação. */
export function SceneAgentTaskState() {
  const reduce = useReducedMotion();
  const [k, setK] = useState(reduce ? 5 : 0);
  const [recovered, setRecovered] = useState(false);
  useEffect(() => {
    if (reduce) return;
    const ts = [400, 1200, 2000, 2800, 3600].map((t, i) => setTimeout(() => setK(i + 1), t));
    return () => ts.forEach(clearTimeout);
  }, [reduce]);
  const STEPS = [
    { l: "Encontrando opções", s: "done" },
    { l: "Comparando critérios", s: "done" },
    { l: "Preparando uma recomendação", s: "hyp" },
    { l: "Reservando o horário", s: recovered ? "done" : "err" },
    { l: "Aguardando sua confirmação para pagar", s: "wait" },
  ] as const;
  const META = {
    done: { i: "✓", t: "Concluída", c: "border-[#A3E635] text-[#A3E635]" },
    hyp: { i: "~", t: "Sugestão, não ação", c: "border-[#A48BFF] text-[#A48BFF]" },
    wait: { i: "⏸", t: "Pendente", c: "border-[#fbbf24] text-[#fbbf24]" },
    err: { i: "✕", t: "Falhou", c: "border-[#f87171] text-[#f87171]" },
  };
  return (
    <Bleed>
      <div className="container grid max-w-6xl grid-cols-1 gap-10 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-28">
        <div>
          <Eyebrow>Estado da tarefa</Eyebrow>
          <p className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">Melhor que "trabalhando...".</p>
          <p className="mt-4 text-white/75">Cada etapa diz o que é: concluída, sugestão, pendente ou erro. Uma sugestão nunca aparece como tarefa concluída.</p>
          {k >= 5 && !recovered && (
            <div className="mt-6 rounded-2xl border border-[#f87171]/50 bg-[#f87171]/10 p-4">
              <p className="text-sm">A reserva falhou: o horário não estava mais disponível. As duas primeiras etapas continuam concluídas. Nada foi cobrado.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button type="button" onClick={() => setRecovered(true)} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0d0d12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635]">Tentar com outro horário</button>
                <span className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80">Editar dados</span>
              </div>
            </div>
          )}
          {recovered && <p className="mt-6 rounded-2xl border border-[#A3E635]/50 bg-[#A3E635]/10 p-4 text-sm">Reserva feita sem duplicar a etapa anterior. O pagamento continua esperando sua confirmação.</p>}
        </div>
        <ol className="relative flex flex-col gap-3" aria-live="polite">
          {STEPS.map((s, i) => {
            const m = META[s.s];
            const shown = i < k;
            return (
              <motion.li key={s.l} initial={false} animate={{ opacity: shown ? 1 : 0.4, x: shown ? 0 : 10 }} transition={{ duration: 0.4, ease: M.ease }}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5">
                <span aria-hidden="true" className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 text-sm font-bold ${shown ? m.c : "border-white/20 text-white/40"}`}>{shown ? m.i : i + 1}</span>
                <span className="flex-1 text-[15px]">{s.l}</span>
                {shown && <span className={`shrink-0 font-mono text-[11px] uppercase tracking-[0.12em] ${m.c.split(" ")[1]}`}>{m.t}</span>}
              </motion.li>
            );
          })}
        </ol>
      </div>
    </Bleed>
  );
}

/* ─────────────── 25 · Descoberta mediada por IA ─────────────── */

/* Mapa não linear: quatro entradas, caminhos com retornos e desvios. */
export function SceneDiscoveryMap() {
  const reduce = useReducedMotion();
  const IN = [{ id: "busca", l: "Busca tradicional", y: 40 }, { id: "ia", l: "Assistente de IA", y: 110 }, { id: "rec", l: "Recomendação de alguém", y: 180 }, { id: "dir", l: "Acesso direto", y: 250 }];
  const N = { prod: { x: 330, y: 70, l: "Página de produto" }, comp: { x: 330, y: 200, l: "Comparação" }, docs: { x: 520, y: 40, l: "Documentação" }, prova: { x: 520, y: 230, l: "Prova social" }, dec: { x: 680, y: 140, l: "Decisão" } };
  const PATHS = [
    "M150 40 C 230 40, 250 70, 330 70 C 420 70, 440 40, 520 40 C 600 40, 610 140, 680 140",
    "M150 110 C 240 110, 250 200, 330 200 C 400 200, 380 70, 330 70 C 420 70, 600 140, 680 140",
    "M150 180 C 230 180, 260 230, 520 230 C 600 230, 620 140, 680 140",
    "M150 250 C 230 250, 250 70, 330 70 C 380 70, 400 200, 330 200 C 450 200, 600 140, 680 140",
  ];
  return (
    <Bleed>
      <div className="container max-w-6xl py-20 md:py-28">
        <Eyebrow>ai-assisted-discovery-map</Eyebrow>
        <p className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight md:text-5xl">A jornada não começa necessariamente no seu site.</p>
        <div className="mt-10 overflow-x-auto">
          <svg viewBox="0 0 760 290" className="h-auto w-full min-w-[640px]" role="img" aria-labelledby="dm-t dm-d">
            <title id="dm-t">Mapa de descoberta assistida por IA</title>
            <desc id="dm-d">Quatro pontos de entrada (busca tradicional, assistente de IA, recomendação de outra pessoa e acesso direto) levam por caminhos diferentes, com retornos, a página de produto, comparação, documentação, prova social e decisão. Nem todas as pessoas passam por todas as etapas.</desc>
            {PATHS.map((d, i) => <path key={i} d={d} fill="none" stroke="rgba(164,139,255,.35)" strokeWidth="2" strokeDasharray={i % 2 ? "5 5" : undefined} />)}
            {!reduce && PATHS.map((d, i) => (
              <circle key={`c${i}`} r="5" fill={i === 1 ? M.g : "#fff"}>
                <animateMotion dur={`${6 + i * 1.3}s`} repeatCount="indefinite" begin={`${i * 0.8}s`} path={d} />
              </circle>
            ))}
            {IN.map((n) => (
              <g key={n.id}>
                <rect x="0" y={n.y - 16} width="150" height="32" rx="16" fill={n.id === "ia" ? "rgba(163,230,53,.15)" : "rgba(255,255,255,.06)"} stroke={n.id === "ia" ? M.g : "rgba(255,255,255,.25)"} />
                <text x="75" y={n.y + 4} textAnchor="middle" fill="#fff" fontSize="12">{n.l}</text>
              </g>
            ))}
            {Object.values(N).map((n) => (
              <g key={n.l}>
                <rect x={n.x - 70} y={n.y - 18} width="140" height="36" rx="10" fill={n.l === "Decisão" ? M.p : "#17171f"} stroke={n.l === "Decisão" ? M.p : "rgba(255,255,255,.3)"} />
                <text x={n.x} y={n.y + 4} textAnchor="middle" fill="#fff" fontSize="12.5" fontWeight="600">{n.l}</text>
              </g>
            ))}
          </svg>
        </div>
        <p className="mt-8 max-w-2xl font-display text-2xl font-semibold leading-snug md:text-3xl">A informação necessária para decidir está clara <span className="text-[#A3E635]">em cada ponto</span>?</p>
      </div>
    </Bleed>
  );
}

/* Matriz de coerência: pergunta, resposta, fonte responsável e onde aparece. Lacunas aparecem aos poucos. */
export function SceneAnswerMatrix() {
  const ROWS = [
    { q: "Que problema resolve e para quem?", a: "Sim", f: "Produto", w: "Página inicial", gap: false },
    { q: "Com quais ferramentas se integra?", a: "Parcial", f: "Engenharia", w: "Só na documentação", gap: true },
    { q: "Quais são os limites?", a: "Não", f: "Sem responsável", w: "Em nenhum lugar", gap: true },
    { q: "Quanto custa e o que está incluído?", a: "Sim", f: "Comercial", w: "Página de preços", gap: false },
    { q: "Como são tratados os dados?", a: "Contraditória", f: "Jurídico", w: "Ajuda × marketing", gap: true },
  ];
  const { ref, k } = useTimeline(ROWS.map((_, i) => 300 + i * 500).concat([3200]));
  return (
    <Bleed tone="light">
      <div ref={ref} className="container max-w-6xl py-20 md:py-28">
        <div className="flex items-baseline justify-between gap-4"><Eyebrow color={M.p}>Matriz de respostas</Eyebrow><p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#0A0A0A]/65">Exemplo hipotético</p></div>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-[#0A0A0A]/10 bg-white">
          <table className="w-full min-w-[620px] text-left text-[14px]">
            <thead className="bg-[#0A0A0A] text-white"><tr>{["Pergunta do usuário", "Resposta disponível", "Fonte responsável", "Onde aparece"].map((h) => <th key={h} scope="col" className="px-4 py-3 font-semibold">{h}</th>)}</tr></thead>
            <tbody>
              {ROWS.map((r, i) => {
                const flag = r.gap && k >= ROWS.length + 1;
                return (
                  <motion.tr key={r.q} initial={false} animate={{ opacity: i < k ? 1 : 0.4 }} className={`border-t border-[#0A0A0A]/8 ${flag ? "bg-[#FFF7ED]" : ""}`}>
                    <td className="px-4 py-3 font-semibold">{r.q}</td>
                    <td className="px-4 py-3">{flag && <span aria-hidden="true" className="mr-1.5 font-bold text-[#B45309]">⚑</span>}{r.a}{flag && <span className="sr-only"> (lacuna)</span>}</td>
                    <td className="px-4 py-3">{r.f}</td>
                    <td className="px-4 py-3">{r.w}</td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-2xl text-[17px] text-[#0A0A0A]/80">As lacunas e contradições aparecem antes de qualquer conteúdo novo. <span className="font-semibold text-[#B45309]">⚑ marca o que resolver primeiro.</span></p>
      </div>
    </Bleed>
  );
}

/* Comparação: lista de recursos × critérios de decisão. */
export function SceneDecisionComparison() {
  const [mode, setMode] = useState<"lista" | "criterios">("lista");
  const FEAT = ["Painel personalizável", "Exportação", "API", "Integrações", "Automação", "Relatórios", "Permissões", "Temas", "Webhooks", "SSO", "Logs", "Modo offline"];
  const CRIT = [
    { c: "Para quem é", a: "Times pequenos", b: "Operações com vários times" },
    { c: "Integra com seu CRM", a: "Sim, nativo", b: "Via API" },
    { c: "Limite importante", a: "Até 5 usuários", b: "Exige implantação" },
    { c: "Preço e o que inclui", a: "Mensal, suporte por e-mail", b: "Anual, suporte dedicado" },
  ];
  return (
    <Bleed>
      <div className="container max-w-6xl py-20 md:py-28">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Comparação que apoia a decisão</Eyebrow>
            <p className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">Menos recursos listados. Mais critérios claros.</p>
          </div>
          <div className="flex flex-col items-start gap-2 md:items-end">
            <Segmented label="Tipo de comparação" value={mode} onChange={setMode} options={[{ v: "lista", l: "Lista de recursos" }, { v: "criterios", l: "Critérios de decisão" }]} />
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/60">Exemplo hipotético</p>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {mode === "lista" ? (
            <motion.div key="l" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-8 grid grid-cols-[1fr_auto_auto] gap-x-6 gap-y-1 text-sm">
              <span /><span className="font-semibold">Plano A</span><span className="font-semibold">Plano B</span>
              {FEAT.map((f, i) => <div key={f} className="contents"><span className="border-t border-white/8 py-1.5 text-white/75">{f}</span><span className="border-t border-white/8 py-1.5 text-center">{i % 4 === 3 ? "–" : "✓"}</span><span className="border-t border-white/8 py-1.5 text-center">✓</span></div>)}
              <p className="col-span-3 mt-3 text-white/70">Quase tudo tem ✓. Fica difícil justificar uma escolha.</p>
            </motion.div>
          ) : (
            <motion.div key="c" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
              {CRIT.map((c, i) => (
                <motion.div key={c.c} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className={`rounded-2xl border p-5 ${c.c === "Limite importante" ? "border-dashed border-[#fbbf24]/70" : "border-white/12"}`}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#A48BFF]">{c.c}</p>
                  <div className="mt-2 grid grid-cols-2 gap-3 text-[15px]"><p><span className="text-white/60">A · </span>{c.a}</p><p><span className="text-white/60">B · </span>{c.b}</p></div>
                </motion.div>
              ))}
              <p className="text-white/70 md:col-span-2">Limites e condições aparecem junto das vantagens. Dá para justificar a escolha.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Bleed>
  );
}

/* ─────────────── 26 · Personalização com contexto ─────────────── */

/* Preferência declarada × comportamento inferido. */
export function SceneDeclaredInferred() {
  const { ref, k } = useTimeline([400, 1400, 2400]);
  return (
    <Bleed tone="light">
      <div ref={ref} className="container max-w-6xl py-20 md:py-28">
        <Eyebrow color={M.p}>Declarada × inferida</Eyebrow>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <motion.div initial={false} animate={{ opacity: k >= 1 ? 1 : 0.45, y: k >= 1 ? 0 : 10 }} className="rounded-3xl border border-[#0A0A0A]/10 bg-white p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#15803D]">✓ Preferência declarada</p>
            <p className="mt-3 font-display text-2xl font-semibold">"Quero notificações semanais."</p>
            <p className="mt-2 text-[15px] text-[#0A0A0A]/75">A pessoa escolheu. É fácil explicar e corrigir.</p>
          </motion.div>
          <motion.div initial={false} animate={{ opacity: k >= 2 ? 1 : 0.45, y: k >= 2 ? 0 : 10 }} className="rounded-3xl border-2 border-dashed border-[#B45309]/50 bg-[#FFF7ED] p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#B45309]">~ Comportamento inferido</p>
            <p className="mt-3 font-display text-2xl font-semibold">"Abriu várias notificações, então quer mais."</p>
            <p className="mt-2 text-[15px] text-[#0A0A0A]/75">Uma suposição. Pode estar errada ou perder validade.</p>
            <motion.div initial={false} animate={{ opacity: k >= 3 ? 1 : 0, height: k >= 3 ? "auto" : 0 }} className="overflow-hidden">
              <div className="mt-4 flex flex-wrap gap-2">
                {["Por que estou vendo isso?", "Ajustar", "Desativar"].map((b) => <span key={b} className="rounded-full border border-[#0A0A0A]/20 bg-white px-3 py-1.5 text-sm font-semibold">{b}</span>)}
              </div>
            </motion.div>
          </motion.div>
        </div>
        <p className="mt-8 max-w-2xl font-display text-2xl font-semibold leading-snug">Evite apresentar <span className="text-[#B45309]">suposições como fatos</span>.</p>
      </div>
    </Bleed>
  );
}

/* Ciclo de controle: contexto, recomendação, avaliação da pessoa e ajuste, com aceitar ou corrigir. */
export function ScenePersonalizationLoop() {
  const [path, setPath] = useState<"none" | "aceita" | "corrige">("none");
  const [edit, setEdit] = useState(false);
  const STEPS = ["Contexto relevante", "Recomendação", "Avaliação da pessoa", "Ajuste"];
  const active = path === "none" ? 2 : 3;
  return (
    <Bleed>
      <div className="container grid max-w-6xl grid-cols-1 items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <div>
          <Eyebrow>personalization-control-loop</Eyebrow>
          <p className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">Útil, transparente e corrigível.</p>
          <div className="mt-6 rounded-3xl border border-white/12 bg-white/[0.04] p-5">
            <p className="text-xs text-white/65">Recomendado porque você salvou artigos sobre pesquisa</p>
            <p className="mt-1 font-display text-xl font-semibold">Guia de entrevistas com usuários</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button type="button" aria-pressed={path === "aceita"} onClick={() => setPath("aceita")} className={`rounded-full px-4 py-2 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] ${path === "aceita" ? "bg-[#A3E635] text-[#0d0d12]" : "border border-white/20"}`}>✓ Útil</button>
              <button type="button" aria-pressed={path === "corrige"} onClick={() => setPath("corrige")} className={`rounded-full px-4 py-2 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] ${path === "corrige" ? "bg-[#fbbf24] text-[#0d0d12]" : "border border-white/20"}`}>Mostrar menos disto</button>
              <button type="button" aria-expanded={edit} onClick={() => setEdit((v) => !v)} className="rounded-full border border-[#A48BFF] px-4 py-2 text-sm font-semibold text-[#c9b8ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635]">Editar preferências</button>
            </div>
            <AnimatePresence>
              {edit && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <div className="mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-4 text-sm">
                    {["Pesquisa", "Métricas", "Design systems", "Carreira"].map((t, i) => <span key={t} className={`rounded-full px-3 py-1 ${i < 2 ? "bg-white text-[#0d0d12]" : "border border-white/20 text-white/75"}`}>{i < 2 ? "✓ " : "+ "}{t}</span>)}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <p className="mt-4 min-h-[48px] text-[15px] text-white/80" aria-live="polite">
            {path === "aceita" && "A avaliação confirma este contexto. O sistema continua sem tratar a inferência como verdade definitiva."}
            {path === "corrige" && "A correção volta para o sistema e muda as próximas recomendações. A pessoa recebe feedback do ajuste."}
          </p>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[400px]">
          <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <circle cx="100" cy="100" r="72" fill="none" stroke="rgba(255,255,255,.15)" strokeWidth="1.5" strokeDasharray="4 5" />
          </svg>
          {STEPS.map((s, i) => {
            const ang = (i / 4) * Math.PI * 2 - Math.PI / 2;
            const x = Math.round(50 + Math.cos(ang) * 32);
            const y = Math.round(50 + Math.sin(ang) * 34);
            const on = i <= active;
            return (
              <motion.div key={s} animate={{ scale: i === active ? 1.06 : 1 }} style={{ left: `${x}%`, top: `${y}%`, x: "-50%", y: "-50%" }}
                className={`absolute w-[37%] rounded-2xl border px-2 py-2.5 text-center text-[13px] font-semibold sm:px-3 sm:text-sm ${i === active ? (path === "corrige" && i === 3 ? "border-[#fbbf24] bg-[#fbbf24]/15" : "border-[#A3E635] bg-[#A3E635]/15") : on ? "border-white/30 bg-[#17171f]" : "border-white/12 bg-[#17171f] text-white/65"}`}>
                <span className="block font-mono text-[10px] text-[#A48BFF]">{i + 1}</span>{s}
              </motion.div>
            );
          })}
        </div>
      </div>
    </Bleed>
  );
}

/* Ciclo de feedback que estreita a variedade, e a métrica de diversidade que o revela. */
export function SceneFeedbackNarrowing() {
  const [div, setDiv] = useState(false);
  const TOPICS = ["Pesquisa", "Métricas", "IA", "Carreira", "Acessibilidade"];
  const ROUNDS = div
    ? [[30, 20, 20, 15, 15], [32, 20, 18, 15, 15], [30, 22, 18, 15, 15]]
    : [[30, 20, 20, 15, 15], [55, 15, 15, 10, 5], [82, 8, 5, 5, 0]];
  const COL = [M.p, M.lilac, M.g, M.amb, "#67e8f9"];
  return (
    <Bleed tone="light">
      <div className="container max-w-6xl py-20 md:py-28">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow color={M.p}>Ciclo de feedback</Eyebrow>
            <p className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight md:text-4xl">O que está visível vira "preferência". A variedade encolhe.</p>
          </div>
          <label className="flex items-center gap-3 rounded-full border border-[#0A0A0A]/15 bg-white px-4 py-2 text-sm font-semibold">
            <input type="checkbox" checked={div} onChange={(e) => setDiv(e.target.checked)} className="h-4 w-4 accent-[#622FFD]" />
            Medir diversidade como métrica de proteção
          </label>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          {ROUNDS.map((r, ri) => (
            <div key={ri} className="grid grid-cols-[90px_1fr] items-center gap-3">
              <span className="font-mono text-xs text-[#0A0A0A]/70">Rodada {ri + 1}</span>
              <div className="flex h-9 overflow-hidden rounded-lg bg-[#0A0A0A]/5">
                {r.map((v, i) => (
                  <motion.div key={i} animate={{ width: `${v}%` }} transition={{ duration: 0.7, ease: M.ease }} className="flex items-center justify-center overflow-hidden text-[11px] font-semibold text-[#0A0A0A]" style={{ backgroundColor: COL[i] + (i === 0 ? "" : "cc"), color: i === 0 ? "#fff" : "#0A0A0A" }} title={TOPICS[i]}>
                    {v >= 12 ? TOPICS[i] : ""}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-[#0A0A0A]/70">Proporção de temas recomendados, valores ilustrativos. {div ? "Com a diversidade monitorada, o produto mantém alternativas visíveis." : "Cliques sobem, mas a pessoa vê cada vez menos alternativas."}</p>
      </div>
    </Bleed>
  );
}

/* ─────────────── 27 · Acessibilidade como qualidade ─────────────── */

/* O componente passa no contraste; o fluxo ainda falha. */
export function SceneFlowNotComponent() {
  const { ref, k } = useTimeline([400, 1300, 2200, 3100]);
  const ISSUES = [
    { t: "Foco do teclado invisível", d: "Quem usa Tab não sabe onde está." },
    { t: "Rótulo não explica a ação", d: '"Continuar" para quê?' },
    { t: "Carregamento não anunciado", d: "O leitor de tela fica em silêncio." },
  ];
  return (
    <Bleed>
      <div ref={ref} className="container grid max-w-6xl grid-cols-1 items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
          <span className="inline-flex rounded-xl bg-[#622FFD] px-6 py-3 font-semibold text-white">Continuar</span>
          <motion.p initial={false} animate={{ opacity: k >= 1 ? 1 : 0.4 }} className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#A3E635]/15 px-3 py-1 text-sm text-[#A3E635]">✓ Contraste 6,3:1 · componente aprovado</motion.p>
        </div>
        <div>
          <Eyebrow>Fluxo, não só componente</Eyebrow>
          <ol className="mt-4 flex flex-col gap-3">
            {ISSUES.map((x, i) => (
              <motion.li key={x.t} initial={false} animate={{ opacity: i + 2 <= k ? 1 : 0.4, x: i + 2 <= k ? 0 : 10 }} transition={{ duration: 0.4, ease: M.ease }}
                className="flex gap-3 rounded-2xl border border-[#f87171]/40 bg-[#f87171]/[0.07] p-4">
                <span aria-hidden="true" className="grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-[#f87171] text-xs font-bold text-[#f87171]">✕</span>
                <span><span className="block font-semibold">{x.t}</span><span className="text-sm text-white/75">{x.d}</span></span>
              </motion.li>
            ))}
          </ol>
          <p className="mt-6 font-display text-2xl font-semibold leading-snug">A acessibilidade está na combinação de conteúdo, comportamento, foco e estados.</p>
        </div>
      </div>
    </Bleed>
  );
}

/* Ciclo de qualidade em cinco etapas, cada uma com uma verificação concreta. */
export function SceneA11yQualityLoop() {
  const S = [
    { t: "Requisito", c: "Contraste e foco definidos no briefing" },
    { t: "Design", c: "Semântica, estados e ordem de leitura" },
    { t: "Implementação", c: "Navegação por teclado" },
    { t: "Teste", c: "Leitor de tela, zoom e auditoria automática" },
    { t: "Melhoria", c: "Corrigir e retestar" },
  ];
  const { ref, k } = useTimeline(S.map((_, i) => 300 + i * 600));
  return (
    <Bleed tone="light">
      <div ref={ref} className="container max-w-6xl py-20 md:py-28">
        <Eyebrow color={M.p}>accessibility-quality-loop</Eyebrow>
        <ol className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {S.map((s, i) => (
            <motion.li key={s.t} initial={false} animate={{ opacity: i < k ? 1 : 0.45, y: i < k ? 0 : 10 }} transition={{ duration: 0.45, ease: M.ease }}
              className="relative rounded-2xl border border-[#0A0A0A]/10 bg-white p-5">
              <p className="font-mono text-xs text-[#622FFD]">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-1 font-display text-xl font-semibold">{s.t}</p>
              <p className="mt-2 text-sm text-[#0A0A0A]/75">{s.c}</p>
              <span aria-hidden="true" className="absolute -right-2.5 top-1/2 hidden -translate-y-1/2 text-[#0A0A0A]/30 lg:block">{i < 4 ? "→" : "↺"}</span>
            </motion.li>
          ))}
        </ol>
        <p className="mt-8 max-w-2xl rounded-2xl border border-dashed border-[#0A0A0A]/25 bg-white p-4 text-[15px] text-[#0A0A0A]/80"><strong>Auditoria automática é uma das fontes de verificação, não a única.</strong> Não existe selo de "100% acessível" que substitua testes manuais e com pessoas.</p>
      </div>
    </Bleed>
  );
}

/* Métodos de teste encontram tipos diferentes de problema. */
export function SceneA11yMethods() {
  const METHODS = [
    { v: "teclado", l: "Teclado", f: ["Foco invisível ou perdido", "Ordem de foco diferente da leitura", "Armadilhas de foco em modais"] },
    { v: "leitor", l: "Leitor de tela", f: ["Controles sem nome acessível", "Estados não anunciados", "Estrutura de títulos confusa"] },
    { v: "zoom", l: "Zoom", f: ["Conteúdo cortado ou sobreposto", "Rolagem horizontal", "Texto que não reflui"] },
    { v: "auto", l: "Auditoria automática", f: ["Contraste insuficiente", "Imagens sem texto alternativo", "Atributos ARIA inválidos"] },
    { v: "pessoas", l: "Teste com pessoas", f: ["Confusão no fluxo", "Mensagem de erro que não ajuda", "Barreiras que nenhuma lista técnica mostra"] },
  ] as const;
  const [m, setM] = useState<(typeof METHODS)[number]["v"]>("teclado");
  const cur = METHODS.find((x) => x.v === m)!;
  return (
    <Bleed>
      <div className="container grid max-w-6xl grid-cols-1 gap-10 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-28">
        <div>
          <Eyebrow>Cada método, um tipo de problema</Eyebrow>
          <p className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">Nenhum método encontra tudo.</p>
          <ul className="mt-6 flex flex-col gap-2">
            {METHODS.map((x) => (
              <li key={x.v}>
                <button type="button" aria-pressed={m === x.v} onClick={() => setM(x.v)}
                  className={`w-full rounded-xl border px-4 py-3 text-left text-[15px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] ${m === x.v ? "border-white bg-white text-[#0d0d12]" : "border-white/12 text-white/80 hover:border-white/35"}`}>{x.l}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8" aria-live="polite">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#A48BFF]">{cur.l} costuma revelar</p>
          <AnimatePresence mode="wait">
            <motion.ul key={m} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-4 flex flex-col gap-3">
              {cur.f.map((f, i) => (
                <motion.li key={f} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} className="flex items-center gap-3 rounded-xl bg-white/[0.05] px-4 py-3 text-[15px]">
                  <span aria-hidden="true" className="text-[#A3E635]">→</span>{f}
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
          <p className="mt-6 text-sm text-white/70">Planeje tempo para corrigir e retestar. Encontrar sem validar a correção deixa o trabalho incompleto.</p>
        </div>
      </div>
    </Bleed>
  );
}

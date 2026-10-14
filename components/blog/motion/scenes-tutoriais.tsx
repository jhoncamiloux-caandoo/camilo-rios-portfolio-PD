"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Bleed, Eyebrow, M } from "./primitives";
import { Segmented } from "./scenes-advanced";

/* Série "Tutoriais de motion com IA". Exemplos vêm do carrossel real da Clint feito para estes tutoriais. */

/* ─────────────── T1 · Como a IA faz vídeo ─────────────── */

const spring = (x: number, w = 15, z = 0.8) => {
  if (x <= 0) return 0;
  const wd = w * Math.sqrt(1 - z * z);
  const e = Math.exp(-z * w * x);
  return x > 3 ? 1 : 1 - e * (Math.cos(wd * x) + ((z * w) / wd) * Math.sin(wd * x));
};
const linear = (x: number) => Math.min(1, Math.max(0, x / 0.4));

const STEPS = [
  { t: "Briefing", d: "O que cada slide diz, em quantos segundos e em qual batida." },
  { t: "HTML com seek(t)", d: "Cada quadro é uma função do tempo. Mesmo t, mesma imagem." },
  { t: "Navegador fotografa", d: "Playwright chama seek(0), seek(1/30)… e tira 30 fotos por segundo." },
  { t: "ffmpeg junta", d: "As fotos viram um MP4 em H.264, com a trilha por cima." },
];

/* Linha de produção + régua de tempo: arrastar t mostra que o quadro depende só do tempo. */
export function SceneVideoPipeline() {
  const [t, setT] = useState(1.2);
  const [mode, setMode] = useState<"cru" | "regras">("regras");
  const f = mode === "regras" ? spring : linear;
  const msgs = [1.0, 1.5, 3.0].map((a) => Math.min(1, Math.max(0, f(t - a))));
  const frame = Math.round(t * 30);
  return (
    <Bleed>
      <div className="container grid max-w-6xl grid-cols-1 gap-10 py-20 md:grid-cols-[1fr_0.9fr] md:py-28">
        <div>
          <Eyebrow>video-pipeline</Eyebrow>
          <p className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">A IA não filma. Ela escreve uma página que sabe desenhar qualquer instante.</p>
          <ol className="mt-8 flex flex-col gap-3">
            {STEPS.map((s, i) => (
              <motion.li key={s.t} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.4, ease: M.ease }}
                className="flex gap-4 rounded-2xl border border-white/12 bg-white/[0.03] p-4">
                <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-[#622FFD] text-sm font-bold">{i + 1}</span>
                <span><b className="block text-white">{s.t}</b><span className="text-[15px] text-white/70">{s.d}</span></span>
              </motion.li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Segmented label="Tipo de movimento" value={mode} onChange={setMode} options={[{ v: "cru", l: "Sem regras" }, { v: "regras", l: "Com regras" }]} />
          <div className="relative aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#2a1d6b] via-[#0e0d16] to-[#07060c] p-5">
            <p className="text-center text-lg font-semibold">Seu lead <span className="text-[#c4b0ff]">não espera.</span></p>
            <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/40 p-4">
              {["Oi! 👋", "Vocês ainda estão atendendo?", "Alguém aí?"].map((m, i) => (
                <p key={m} style={{ opacity: msgs[i], transform: `translateY(${16 * (1 - msgs[i])}px) scale(${0.92 + 0.08 * msgs[i]})`, transformOrigin: "0% 100%" }}
                  className="self-start rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-sm">{m}</p>
              ))}
            </div>
            <p className="absolute bottom-4 left-0 right-0 text-center font-mono text-[11px] text-white/60">quadro {frame} de 180 · t = {t.toFixed(2)} s</p>
          </div>
          <label className="w-full max-w-[340px] text-sm text-white/75">
            Arraste o tempo
            <input type="range" min={0} max={6} step={1 / 30} value={t} onChange={(e) => setT(Number(e.target.value))} className="mt-2 w-full accent-[#A3E635]" />
          </label>
          <p className="max-w-[340px] text-center text-[13px] text-white/60">As mensagens entram em 1,0 s, 1,5 s e 3,0 s, na batida da música. Volte o tempo: o quadro é sempre o mesmo para o mesmo t.</p>
        </div>
      </div>
    </Bleed>
  );
}

/* ─────────────── T2 · O CLAUDE.md ─────────────── */

const DEFECTS = [
  {
    v: "pequeno",
    l: "Cartões pequenos demais",
    seen: "No slide 1, o texto dos cartões tinha 30 px e sobrava um vão vazio no quadro 0. No celular, ninguém lia.",
    rule: "Texto de apoio com no mínimo 36 px em 1080×1350.\nO quadro 0 precisa ser legível sozinho, sem esperar a animação.",
  },
  {
    v: "poluido",
    l: "Tela poluída no começo",
    seen: "No slide 3, o painel real aparecia por cima das colunas desde o primeiro quadro. Duas coisas brigando pela atenção.",
    rule: "Um foco por batida.\nElemento secundário só entra depois que o principal assentou.",
  },
  {
    v: "vazando",
    l: "Texto vazando do cartão",
    seen: "\"Responsável: Time comercial\" passava da borda do cartão. Troquei pelo termo que a própria interface usa: \"Dono\".",
    rule: "Conferir cada texto no maior tamanho que ele atinge na animação.\nPreferir o vocabulário da interface real.",
  },
  {
    v: "escondido",
    l: "Indicador escondido",
    seen: "O \"digitando…\" do slide 2 ficava cortado pelo contêiner da conversa.",
    rule: "Contêiner cresce junto com o conteúdo.\nNada aparece cortado em nenhum quadro.",
  },
  {
    v: "contorno",
    l: "Destaque desalinhado",
    seen: "O contorno que deveria abraçar o gráfico do slide 5 ficou fora do lugar. Troquei por um pulso de escala no próprio painel.",
    rule: "Destaque se aplica ao elemento, não a uma forma desenhada por cima dele.",
  },
  {
    v: "linear",
    l: "Movimento de robô",
    seen: "É o defeito mais comum quando a IA anima sem regra nenhuma: tudo entra em velocidade constante e para de uma vez. Dá para ver na versão sem regras do slide 1.",
    rule: "Proibido movimento linear.\nMolas com amortecimento 0,8: no máximo um rebote mínimo.",
  },
] as const;

/* Defeito visto na folha de contato → regra que entrou no CLAUDE.md. */
export function SceneRuleFixes() {
  const [d, setD] = useState<(typeof DEFECTS)[number]["v"]>("pequeno");
  const cur = DEFECTS.find((x) => x.v === d)!;
  return (
    <Bleed>
      <div className="container grid max-w-6xl grid-cols-1 gap-10 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-28">
        <div>
          <Eyebrow>defeito-vira-regra</Eyebrow>
          <p className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">Todo defeito que aparece duas vezes vira uma linha no arquivo.</p>
          <div className="mt-6 flex flex-col gap-2">
            {DEFECTS.map((x) => (
              <button key={x.v} type="button" aria-pressed={d === x.v} onClick={() => setD(x.v)}
                className={`rounded-xl border px-4 py-3 text-left text-[15px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] ${d === x.v ? "border-white bg-white text-[#0d0d12]" : "border-white/15 text-white/80 hover:border-white/40"}`}>{x.l}</button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={d} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.3, ease: M.ease }} className="flex flex-col gap-4 self-center">
            <div className="rounded-2xl border border-[#ff2d6f]/40 bg-[#ff2d6f]/10 p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#ffb3c8]">O que eu vi</p>
              <p className="mt-2 text-[16px] leading-relaxed text-white">{cur.seen}</p>
            </div>
            <motion.div aria-hidden="true" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.15, duration: 0.3 }} className="mx-auto h-8 w-px origin-top bg-white/40" />
            <div className="rounded-2xl border border-[#A3E635]/40 bg-[#0d0d12] p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#A3E635]">CLAUDE.md · regra nova</p>
              <pre className="mt-2 whitespace-pre-wrap font-mono text-[14px] leading-relaxed text-white/90">{cur.rule.split("\n").map((l) => `- ${l}`).join("\n")}</pre>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Bleed>
  );
}

/* ─────────────── T3 · Do briefing à batida ─────────────── */

type Cue = [number, "pop" | "cl" | "wh" | "th", string];
const SOUND: Record<Cue[1], { l: string; c: string }> = {
  pop: { l: "pop", c: "#c4b0ff" },
  cl: { l: "clique", c: "#8fa2ff" },
  wh: { l: "whoosh", c: "#ff9ccf" },
  th: { l: "batida forte", c: "#A3E635" },
};
const BOARD: { n: number; t: string; d: number; cues: Cue[] }[] = [
  { n: 1, t: "Seu lead não espera.", d: 6, cues: [[1.0, "pop", "\"Oi!\" chega"], [1.5, "pop", "\"Vocês ainda estão atendendo?\""], [2.0, "wh", "selo de espera entra"], [3.0, "th", "\"Alguém aí?\" e o contador pula para 25 min"], [4.0, "cl", "selo pulsa"]] },
  { n: 2, t: "A IA responde na hora.", d: 8, cues: [[1.5, "pop", "Aura responde"], [2.5, "pop", "Beto conta que são 12 vendedores"], [3.0, "wh", "Aura pensa"], [3.5, "cl", "pontos coloridos"], [4.0, "pop", "Aura propõe a reunião"], [4.5, "th", "Lead qualificado em 38 s"], [5.0, "pop", "Oportunidade criada"], [6.0, "wh", "tudo sai para o loop"]] },
  { n: 3, t: "Cada conversa vira oportunidade.", d: 8, cues: [[1.0, "cl", "campo \"Dono\" escreve"], [1.5, "cl", "cursor pega o cartão"], [2.0, "wh", "arrasta para Qualificação"], [2.5, "th", "cartão pousa e achata"], [3.5, "wh", "painel real desliza"], [4.5, "pop", "✓ de confirmação"], [5.5, "cl", "cursor pega de novo"], [6.0, "wh", "volta para Novo"]] },
  { n: 4, t: "O próximo passo já acontece.", d: 8, cues: [[1.0, "pop", "\"Quinta à tarde fica bom\""], [2.0, "cl", "clique em Qui 14:00"], [2.5, "wh", "horário vira bloco de agenda"], [3.0, "th", "Reunião confirmada"], [4.0, "pop", "Confirmação enviada"], [4.5, "pop", "Lembrete"], [5.0, "pop", "Lembrete 1h antes"], [6.0, "wh", "régua recolhe"]] },
  { n: 5, t: "Você pergunta. A Aura age.", d: 8, cues: [[1.0, "cl", "começa a digitar"], [1.25, "cl", ""], [1.5, "cl", ""], [2.0, "cl", "envia"], [3.0, "pop", "Aura responde com o dado"], [4.0, "cl", "clique em Criar follow-up"], [4.5, "th", "3 tarefas criadas"], [6.0, "wh", "conversa sai"]] },
  { n: 6, t: "Você pensa. A Clint faz.", d: 6, cues: [[1.0, "wh", "pílula assenta"], [2.5, "cl", "clique"], [3.0, "th", "onda e 7 DIAS"]] },
];

/* Partitura do slide: grade de batidas (0,5 s), compassos (2 s) e cada som com o que acontece na tela. */
export function SceneBeatBoard() {
  const [n, setN] = useState("1");
  const s = BOARD[Number(n) - 1];
  const beats = Array.from({ length: s.d * 2 + 1 }, (_, i) => i / 2);
  return (
    <Bleed>
      <div className="container max-w-6xl py-20 md:py-28">
        <Eyebrow>partitura-por-batida</Eyebrow>
        <p className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight md:text-5xl">120 batidas por minuto. Uma a cada meio segundo. Tudo que se mexe cai numa delas.</p>
        <div className="mt-8"><Segmented label="Slide" value={n} onChange={setN} options={BOARD.map((b) => ({ v: String(b.n), l: `Slide ${b.n}` }))} /></div>
        <p className="mt-5 text-lg font-semibold text-white">{s.t} <span className="font-normal text-white/60">· {s.d} s · {s.d / 2} compassos</span></p>
        <div className="mt-6 overflow-x-auto pb-2">
          <div className="relative h-16 min-w-[640px]">
            {beats.map((b) => (
              <span key={b} aria-hidden="true" className={`absolute top-0 w-px ${b % 2 === 0 ? "h-16 bg-white/40" : "h-8 bg-white/15"}`} style={{ left: `${(b / s.d) * 100}%` }}>
                {b % 2 === 0 && <span className="absolute left-1 top-10 font-mono text-[10px] text-white/50">{b}s</span>}
              </span>
            ))}
            <AnimatePresence>
              {s.cues.map(([t, k], i) => (
                <motion.span key={`${n}-${i}`} aria-hidden="true" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.06, type: "spring", stiffness: 400, damping: 18 }}
                  className="absolute top-2 h-4 w-4 -translate-x-1/2 rounded-full" style={{ left: `${(t / s.d) * 100}%`, background: SOUND[k].c }} />
              ))}
            </AnimatePresence>
          </div>
        </div>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {s.cues.filter((c) => c[2]).map(([t, k, l]) => (
            <li key={`${n}-${t}`} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-[15px]">
              <span className="w-12 font-mono text-sm text-white/60">{t.toFixed(1)}s</span>
              <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-semibold text-[#0d0d12]" style={{ background: SOUND[k].c }}>{SOUND[k].l}</span>
              <span className="text-white/85">{l}</span>
            </li>
          ))}
        </ul>
      </div>
    </Bleed>
  );
}

/* ─────────────── T4 · Movimento com peso ─────────────── */

const easeInOut = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

/* Três bolinhas, mesma distância e mesmo tempo: linear, suavizada e mola. Achatar é opcional. */
export function SceneEasingLab() {
  const [t, setT] = useState(0);
  const [squash, setSquash] = useState("sim");
  const play = () => {
    const t0 = performance.now();
    const loop = (now: number) => {
      const e = (now - t0) / 1000;
      setT(Math.min(e, 1.4));
      if (e < 1.4) requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  };
  const rows = [
    { l: "Linear", d: "Velocidade constante, para de uma vez. Parece máquina.", v: Math.min(1, t / 0.6), sq: 0 },
    { l: "Suavizada", d: "Acelera e freia. Bom para coisas que só mudam de lugar.", v: easeInOut(Math.min(1, t / 0.6)), sq: 0 },
    { l: "Mola", d: "Acelera, passa um tiquinho e assenta. Parece ter peso.", v: spring(t), sq: 1 },
  ];
  return (
    <Bleed>
      <div className="container max-w-5xl py-20 md:py-28">
        <Eyebrow>linear-suave-mola</Eyebrow>
        <p className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight md:text-5xl">Mesma distância, mesmo tempo. Só a curva muda.</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button type="button" onClick={play} className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-[#0d0d12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635]">▶ Rodar</button>
          <Segmented label="Achatar ao chegar" value={squash} onChange={setSquash} options={[{ v: "sim", l: "Com achatamento" }, { v: "nao", l: "Sem achatamento" }]} />
        </div>
        <div className="mt-8 flex flex-col gap-6">
          {rows.map((r) => {
            const vel = r.sq && squash === "sim" && t > 0 && t < 1.4 ? Math.round(Math.max(-0.15, Math.min(0.15, (spring(t + 0.016) - spring(t)) * 4)) * 1000) / 1000 : 0;
            return (
              <div key={r.l}>
                <div className="flex items-baseline justify-between gap-4"><b className="text-white">{r.l}</b><span className="text-right text-[14px] text-white/60">{r.d}</span></div>
                <div className="relative mt-2 h-14 rounded-full border border-white/10 bg-white/[0.03]">
                  <span aria-hidden="true" className="absolute top-1/2 h-10 w-10 rounded-full bg-gradient-to-br from-[#c4b0ff] to-[#622FFD]"
                    style={{ left: `calc(${(r.v * 100).toFixed(2)}% - ${(r.v * 48).toFixed(1)}px + 4px)`, transform: `translateY(-50%) scale(${1 + vel}, ${1 - vel})` }} />
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-[14px] text-white/60">O achatamento conserva o volume: estica de um lado o que encolhe do outro. Fica sutil de propósito.</p>
      </div>
    </Bleed>
  );
}

/* ─────────────── T5 · Referência sem cópia ─────────────── */

const TOKENS = [
  { k: "Luz", v: "Faixa diagonal azul, violeta e lilás, com granulado", sw: "linear-gradient(118deg,#1b1640 20%,#4b3cf0 45%,#c4b0ff 55%,#1b1640 80%)" },
  { k: "Vidro", v: "Cartão escuro translúcido, borda clara de 1 px", sw: "rgba(28,26,38,0.85)" },
  { k: "Pílula", v: "Selo arredondado com ícone à esquerda", sw: "linear-gradient(90deg,#8b5cf6,#ff7ab8,#8fa2ff)" },
  { k: "Símbolo da Aura", v: "Orbe em malha magenta, violeta, azul e pêssego", sw: "conic-gradient(#ff2e9a,#c64bff,#3e6bff,#ffd9c7,#ff2e9a)" },
  { k: "Tipografia", v: "Sora nos textos, Poppins Light nas etapas", sw: "#ffffff" },
];

/* Antes e depois de olhar a marca de verdade, com o que foi extraído dela. */
export function SceneReferenceExtract() {
  const [slide, setSlide] = useState("01");
  const [side, setSide] = useState<"antes" | "depois">("depois");
  return (
    <Bleed>
      <div className="container grid max-w-6xl grid-cols-1 gap-10 py-20 md:grid-cols-[1fr_0.9fr] md:py-28">
        <div>
          <Eyebrow>referencia-sem-copia</Eyebrow>
          <p className="mt-3 font-display text-3xl font-semibold leading-tight md:text-5xl">Da referência eu levo o sistema, não a tela.</p>
          <ul className="mt-8 flex flex-col gap-3">
            {TOKENS.map((t, i) => (
              <motion.li key={t.k} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 rounded-2xl border border-white/12 bg-white/[0.03] p-3">
                <span aria-hidden="true" className="h-11 w-11 flex-none rounded-xl border border-white/20" style={{ background: t.sw }} />
                <span><b className="block text-white">{t.k}</b><span className="text-[14px] text-white/65">{t.v}</span></span>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-2">
            <Segmented label="Slide" value={slide} onChange={setSlide} options={[{ v: "01", l: "Slide 1" }, { v: "05", l: "Slide 5" }]} />
            <Segmented label="Versão" value={side} onChange={setSide} options={[{ v: "antes", l: "Antes" }, { v: "depois", l: "Depois" }]} />
          </div>
          <AnimatePresence mode="wait">
            <motion.img key={slide + side} src={`/blog/carrossel-clint/${side}-${slide}.webp`} width={720} height={900} loading="lazy"
              alt={`Slide ${Number(slide)} do carrossel da Clint, versão ${side === "antes" ? "anterior, escura e lisa" : "com a identidade da marca"}`}
              initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              className="aspect-[4/5] w-full max-w-[360px] rounded-2xl border border-white/15" />
          </AnimatePresence>
        </div>
      </div>
    </Bleed>
  );
}

/* ─────────────── T6 · O diretor e o crítico ─────────────── */

const CRIT = ["Gancho no quadro 0", "Leitura no celular", "Suavidade", "Peso", "Sincronia do som", "Loop sem emenda"];
const SCORES = [
  [9, 8, 8, 8, 8, 9],
  [8, 7, 8, 8, 7, 9],
  [8, 8, 8, 8, 8, 8],
  [8, 8, 9, 8, 8, 8],
  [8, 8, 8, 8, 8, 8],
  [9, 9, 9, 9, 9, 9],
];

/* Ficha do crítico: notas de 1 a 10 por slide (rodada 1 do carrossel). Abaixo de 8 volta para o diretor. */
export function SceneCritiqueScores() {
  const { ref, k } = useTimelineLocal();
  return (
    <Bleed>
      <div ref={ref} className="container max-w-5xl py-20 md:py-28">
        <Eyebrow>ficha-do-critico</Eyebrow>
        <p className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight md:text-5xl">Abaixo de 8, volta para a mesa.</p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[560px] border-separate border-spacing-1 text-center text-[14px]">
            <caption className="sr-only">Notas de 1 a 10 por critério e por slide</caption>
            <thead><tr><th className="text-left font-normal text-white/60">Critério</th>{[1, 2, 3, 4, 5, 6].map((n) => <th key={n} scope="col" className="font-semibold text-white/80">S{n}</th>)}</tr></thead>
            <tbody>
              {CRIT.map((c, i) => (
                <tr key={c}>
                  <th scope="row" className="pr-3 text-left font-normal text-white/80">{c}</th>
                  {SCORES[i].map((s, j) => (
                    <motion.td key={j} initial={{ opacity: 0, scale: 0.6 }} animate={k ? { opacity: 1, scale: 1 } : {}} transition={{ delay: (i * 6 + j) * 0.02 }}
                      className={`rounded-lg py-2 font-semibold ${s < 8 ? "bg-[#ff2d6f]/20 text-[#ffb3c8] ring-1 ring-[#ff2d6f]/50" : "bg-white/[0.05] text-white"}`}>
                      {s}{s < 8 && <span className="sr-only"> (abaixo da meta)</span>}
                    </motion.td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-[14px] text-white/60">Notas da rodada que antecedeu a mudança de identidade. As duas notas 7 vinham do texto pequeno dentro das capturas reais. A correção foi redesenhar esses slides com elementos nativos, maiores.</p>
      </div>
    </Bleed>
  );
}

function useTimelineLocal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  return { ref, k: inView ? 1 : 0 };
}

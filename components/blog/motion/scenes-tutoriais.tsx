"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

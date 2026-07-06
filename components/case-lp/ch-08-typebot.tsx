"use client";

import { motion } from "framer-motion";
import { ease, Eyebrow, BlurTitle, Reveal } from "./case-primitives";

/* Conversa do fluxo Typebot */
const CHAT = [
  { from: "bot", text: "Olá! Que bom ter você aqui. Para direcionar ao especialista certo, qual é o segmento do seu negócio?" },
  { from: "user", text: "Tenho uma clínica odontológica." },
  { from: "bot", text: "Perfeito! E qual o faturamento mensal aproximado da clínica?" },
  { from: "user", text: "Entre R$ 50 mil e R$ 100 mil." },
  { from: "bot", text: "Ótimo. Você busca uma solução para agora ou está pesquisando para o futuro?" },
  { from: "user", text: "Preciso resolver isso o quanto antes." },
  { from: "bot", text: "Entendido! Vou te conectar com o especialista ideal. Escolha o melhor horário na agenda abaixo." },
];

/* O que o fluxo identifica */
const QUALIFIERS = [
  { label: "Segmento", value: "Saúde · Odontologia" },
  { label: "Faturamento", value: "R$ 50k a R$ 100k / mês" },
  { label: "Urgência", value: "Alta" },
  { label: "Maturidade", value: "Operação estruturada" },
  { label: "Especialista", value: "Closer definido automaticamente" },
];

const PIPELINE = ["Typebot", "Calendly", "Closer Especialista", "CRM"];

export function Ch08Typebot() {
  return (
    <section className="bg-[#F8F8F8] py-32 md:py-48" aria-label="Fluxo conversacional Typebot">
      <div className="container">
        {/* Cabeçalho */}
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow>08 · Depois do clique</Eyebrow>
          <BlurTitle
            text="A experiência continuava depois do clique."
            className="font-display text-4xl font-semibold leading-[1.06] tracking-tight text-[#0A0A0A] md:text-6xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
              O clique não encerrava a jornada. Ele iniciava uma nova etapa: um
              fluxo conversacional criado com Typebot para qualificar leads sem
              a sensação de preencher um formulário.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-10 md:mt-28 md:grid-cols-2 md:gap-16">

          {/* Chat */}
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-black/[0.07] bg-white shadow-[0_24px_64px_-24px_rgba(10,10,10,0.18)]">
              <div className="flex items-center gap-3 border-b border-black/[0.05] bg-[#0A0A0A] px-6 py-4">
                <span className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-[#622FFD] to-[#A78BFA]" />
                <div>
                  <p className="font-sans text-sm font-semibold text-white">Fluxo de qualificação</p>
                  <p className="font-sans text-xs text-[#25D366]">Typebot · ativo</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 p-6">
                {CHAT.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.14, ease }}
                    className={`max-w-[85%] rounded-2xl px-4 py-3 font-sans text-sm leading-relaxed ${
                      msg.from === "bot"
                        ? "self-start rounded-tl-md bg-[#F2F0FF] text-[#0A0A0A]"
                        : "self-end rounded-tr-md bg-[#622FFD] text-white"
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                ))}
                {/* Calendly aparece ao final */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: CHAT.length * 0.14 + 0.2, ease }}
                  className="mt-2 flex items-center justify-between rounded-2xl border border-[#622FFD]/25 bg-[#622FFD]/[0.05] px-5 py-4"
                >
                  <div>
                    <p className="font-sans text-sm font-semibold text-[#0A0A0A]">Agendar reunião</p>
                    <p className="font-sans text-xs text-[#0A0A0A]/45">Calendly · horários do especialista</p>
                  </div>
                  <span className="rounded-full bg-[#622FFD] px-4 py-2 font-sans text-xs font-semibold text-white">
                    Ver agenda
                  </span>
                </motion.div>
              </div>
            </div>
          </Reveal>

          {/* Painel de qualificação */}
          <div className="flex flex-col justify-center gap-8">
            <Reveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#0A0A0A]/35">
                O que o fluxo identifica em tempo real
              </p>
            </Reveal>
            <div className="flex flex-col gap-3">
              {QUALIFIERS.map((q, i) => (
                <motion.div
                  key={q.label}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  className="flex items-center justify-between rounded-xl border border-black/[0.06] bg-white px-5 py-4"
                >
                  <span className="font-sans text-sm text-[#0A0A0A]/45">{q.label}</span>
                  <span className="font-sans text-sm font-semibold text-[#0A0A0A]">{q.value}</span>
                </motion.div>
              ))}
            </div>

            {/* Pipeline pós-qualificação */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-2.5">
                {PIPELINE.map((step, i) => (
                  <div key={step} className="flex items-center gap-2.5">
                    {i > 0 && (
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-[#622FFD]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    )}
                    <span className="rounded-full border border-black/[0.08] bg-white px-4 py-2 font-sans text-xs font-semibold text-[#0A0A0A] md:text-sm">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="font-sans text-base leading-relaxed text-[#0A0A0A]/55">
                O resultado: menos atrito para o usuário e oportunidades muito
                mais qualificadas chegando ao time comercial.
              </p>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

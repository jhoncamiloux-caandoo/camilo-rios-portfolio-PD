"use client";

import { motion } from "framer-motion";
import { ease, Eyebrow, BlurTitle, Reveal } from "./case-primitives";

/* Etapas do discovery reveladas em timeline */
const STEPS = [
  {
    title: "ICP",
    desc: "Mapeamento do perfil de cliente ideal: quem compra, por que compra e o que impede a compra.",
  },
  {
    title: "Equipe Comercial",
    desc: "Entrevistas com vendedores para entender objeções reais ouvidas todos os dias.",
  },
  {
    title: "Objeções",
    desc: "Catálogo das dúvidas mais frequentes que travavam a decisão.",
  },
  {
    title: "Benchmark",
    desc: "Análise de referências do mercado para identificar padrões que geram confiança.",
  },
  {
    title: "Google Analytics",
    desc: "Dados de comportamento das campanhas existentes: origens, quedas e gargalos.",
  },
  {
    title: "Microsoft Clarity",
    desc: "Sessões gravadas e heatmaps revelando como as pessoas realmente navegavam.",
  },
  {
    title: "Hipóteses",
    desc: "Cada insight virou uma hipótese clara, mensurável e revisável.",
  },
];

const QUESTIONS = [
  "O que impede alguém de clicar?",
  "O que gera confiança?",
  "Quais informações realmente influenciam a decisão?",
  "Em que momento devemos convidar o usuário para conversar?",
];

export function Ch04Discovery() {
  return (
    <section className="bg-[#F8F8F8] py-32 md:py-48" aria-label="Processo de discovery">
      <div className="container">
        {/* Cabeçalho */}
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow>04 · Discovery</Eyebrow>
          <BlurTitle
            text="Toda decisão começou antes do Figma."
            className="font-display text-4xl font-semibold leading-[1.06] tracking-tight text-[#0A0A0A] md:text-6xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
              Antes de desenhar qualquer interface, mergulhei no contexto do
              produto, do mercado e das pessoas. As respostas definiram toda a
              arquitetura da experiência.
            </p>
          </Reveal>
        </div>

        {/* Perguntas norteadoras */}
        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {QUESTIONS.map((q, i) => (
            <Reveal key={q} delay={i * 0.1}>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-black/[0.06] bg-white p-6">
                <span className="mt-0.5 font-display text-sm font-semibold text-[#622FFD]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-sans text-base font-medium leading-snug text-[#0A0A0A] md:text-lg">
                  {q}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Timeline vertical */}
        <div className="relative mx-auto mt-24 max-w-2xl md:mt-32">
          {/* Linha central que se desenha */}
          <motion.div
            aria-hidden="true"
            className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px origin-top bg-gradient-to-b from-[#622FFD] via-[#622FFD]/40 to-transparent md:left-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
            transition={{ duration: 1.6, ease }}
          />

          <div className="flex flex-col gap-14 md:gap-20">
            {STEPS.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={step.title} className="relative">
                  {/* Nó */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-[3px] border-[#622FFD] bg-white md:left-1/2 md:-translate-x-1/2"
                  />
                  <div
                    className={`pl-10 md:w-[calc(50%-32px)] md:pl-0 ${
                      left ? "md:pr-0 md:text-right" : "md:ml-auto"
                    }`}
                  >
                    <h3 className="font-display text-xl font-semibold tracking-tight text-[#0A0A0A] md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-[#0A0A0A]/50 md:text-base">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Diagrama de síntese */}
        <Reveal className="mt-24 md:mt-32">
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3 md:gap-4">
            {["ICP", "Pesquisa", "Hipóteses", "Estratégia"].map((node, i) => (
              <div key={node} className="flex items-center gap-3 md:gap-4">
                {i > 0 && (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-[#622FFD]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                )}
                <span
                  className={`rounded-full px-5 py-2.5 font-sans text-sm font-semibold md:text-base ${
                    node === "Estratégia"
                      ? "bg-[#622FFD] text-white shadow-[0_8px_28px_-8px_rgba(98,47,253,0.6)]"
                      : "border border-black/[0.08] bg-white text-[#0A0A0A]"
                  }`}
                >
                  {node}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

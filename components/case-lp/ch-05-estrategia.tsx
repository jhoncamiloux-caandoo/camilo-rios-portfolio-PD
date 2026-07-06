"use client";

import { motion } from "framer-motion";
import { ease, Eyebrow, BlurTitle, Reveal } from "./case-primitives";

/* Arquitetura da LP: cada bloco responde uma objeção */
const ARCHITECTURE = [
  { section: "Hero", answers: "Isso é para mim?" },
  { section: "Benefícios", answers: "O que eu ganho com isso?" },
  { section: "Demonstração", answers: "Como isso funciona na prática?" },
  { section: "Provas", answers: "Quem mais já usou e aprovou?" },
  { section: "Autoridade", answers: "Posso confiar em quem está por trás?" },
  { section: "CTA", answers: "Qual é o próximo passo?" },
];

const PILLARS = [
  { title: "Reduzir esforço cognitivo", desc: "Hierarquia visual clara e UX Writing direto: cada dobra comunica uma única ideia." },
  { title: "Aumentar confiança", desc: "Prova social e demonstração visual posicionadas antes de cada pedido de ação." },
  { title: "Incentivar ação", desc: "CTAs presentes ao longo de toda a jornada, sempre após um momento de convencimento." },
];

export function Ch05Estrategia() {
  return (
    <section className="bg-white py-32 md:py-48" aria-label="Estratégia de conversão">
      <div className="container">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-gutter">

          {/* Narrativa à esquerda */}
          <div className="flex flex-col gap-8 md:col-span-6 lg:col-span-5">
            <Eyebrow>05 · Estratégia</Eyebrow>
            <BlurTitle
              text="Projetando uma jornada de conversão."
              className="font-display text-4xl font-semibold leading-[1.06] tracking-tight text-[#0A0A0A] md:text-5xl lg:text-6xl"
            />
            <Reveal delay={0.15}>
              <p className="font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
                Cada seção da Landing Page foi construída para responder uma
                objeção específica. Em vez de apresentar funcionalidades, a
                narrativa foi organizada para reduzir dúvidas, gerar confiança
                e aproximar o visitante da ação desejada.
              </p>
            </Reveal>

            <div className="flex flex-col gap-6">
              {PILLARS.map((p, i) => (
                <Reveal key={p.title} delay={0.1 * i}>
                  <div className="border-l-2 border-[#622FFD] pl-5">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-[#0A0A0A] md:text-xl">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 font-sans text-sm leading-relaxed text-[#0A0A0A]/50 md:text-base">
                      {p.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Arquitetura à direita: blocos acendem em sequência */}
          <div className="md:col-span-5 md:col-start-8">
            <div className="sticky top-28 flex flex-col gap-3">
              <Reveal>
                <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#0A0A0A]/35">
                  Arquitetura da experiência
                </p>
              </Reveal>
              {ARCHITECTURE.map((block, i) => (
                <motion.div
                  key={block.section}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease }}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-black/[0.07] bg-[#F8F8F8] px-6 py-4 transition-colors duration-300 hover:border-[#622FFD]/40 hover:bg-[#622FFD]/[0.04]"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-display text-xs font-semibold text-[#622FFD]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-base font-semibold tracking-tight text-[#0A0A0A] md:text-lg">
                      {block.section}
                    </span>
                  </div>
                  <span className="text-right font-sans text-xs italic text-[#0A0A0A]/40 md:text-sm">
                    &ldquo;{block.answers}&rdquo;
                  </span>
                </motion.div>
              ))}
              <Reveal delay={0.8}>
                <p className="mt-3 text-center font-sans text-sm text-[#0A0A0A]/40">
                  Um único sistema de conversão, não uma soma de seções.
                </p>
              </Reveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

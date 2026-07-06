"use client";

import { motion } from "framer-motion";
import { ease, Eyebrow, BlurTitle, Reveal, BigNumber } from "./case-primitives";

/* Jornada: CTAs de WhatsApp intercalados nos momentos de confiança */
const JOURNEY = [
  { label: "Hero", cta: false },
  { label: "CTA WhatsApp", cta: true },
  { label: "Benefícios", cta: false },
  { label: "CTA WhatsApp", cta: true },
  { label: "Prova Social", cta: false },
  { label: "CTA WhatsApp", cta: true },
  { label: "Autoridade", cta: false },
  { label: "CTA Final", cta: true },
];

const RESULTS = [
  { value: 10722, label: "cliques nos botões de WhatsApp" },
  { value: 37, suffix: "%", label: "de conversão" },
  { value: 1.27, prefix: "R$ ", decimals: 2, label: "por conversa iniciada" },
];

function WhatsGlyph({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M11.955 0C5.354 0 0 5.354 0 11.955c0 2.094.543 4.05 1.494 5.748L0 24l6.443-1.473A11.928 11.928 0 0011.955 24c6.6 0 11.955-5.354 11.955-11.955C23.91 5.353 18.556 0 11.955 0zm0 21.818a9.828 9.828 0 01-5.022-1.374l-.36-.215-3.73.852.876-3.646-.237-.379A9.846 9.846 0 012.091 11.955c0-5.44 4.424-9.864 9.864-9.864 5.44 0 9.864 4.424 9.864 9.864 0 5.44-4.424 9.863-9.864 9.863z" />
    </svg>
  );
}

export function Ch07Whatsapp() {
  return (
    <section className="bg-white py-32 md:py-48" aria-label="A decisão mais importante">
      <div className="container">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-gutter">

          {/* Narrativa */}
          <div className="flex flex-col gap-8 md:col-span-6 lg:col-span-5">
            <Eyebrow>07 · A decisão mais importante</Eyebrow>
            <BlurTitle
              text="Reduzindo atrito para aumentar conversões."
              className="font-display text-4xl font-semibold leading-[1.06] tracking-tight text-[#0A0A0A] md:text-5xl lg:text-6xl"
            />
            <Reveal delay={0.15}>
              <p className="font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
                Uma das decisões mais importantes foi substituir formulários
                tradicionais por conversas imediatas no WhatsApp. Os botões
                foram distribuídos estrategicamente ao longo da página,
                aparecendo sempre após momentos de maior confiança.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <blockquote className="border-l-2 border-[#25D366] pl-5">
                <p className="font-display text-xl font-medium leading-snug tracking-tight text-[#0A0A0A] md:text-2xl">
                  O usuário nunca precisa procurar como entrar em contato. O
                  próximo passo está sempre disponível.
                </p>
              </blockquote>
            </Reveal>

            {/* Resultados da decisão */}
            <div className="mt-4 flex flex-col gap-6 border-t border-black/[0.06] pt-8">
              {RESULTS.map((r, i) => (
                <Reveal key={r.label} delay={0.1 * i}>
                  <div className="flex items-baseline gap-4">
                    <BigNumber
                      value={r.value}
                      prefix={r.prefix}
                      suffix={r.suffix}
                      decimals={r.decimals ?? 0}
                      className="font-display text-4xl font-semibold tracking-tight text-[#0A0A0A] md:text-5xl"
                    />
                    <span className="font-sans text-sm text-[#0A0A0A]/45 md:text-base">
                      {r.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Diagrama da jornada */}
          <div className="md:col-span-5 md:col-start-8">
            <div className="sticky top-24 flex flex-col items-center">
              {JOURNEY.map((node, i) => (
                <div key={i} className="flex w-full flex-col items-center">
                  {i > 0 && (
                    <motion.div
                      aria-hidden="true"
                      className="h-7 w-px origin-top bg-black/10"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.4, delay: i * 0.08, ease }}
                    />
                  )}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease }}
                    className={
                      node.cta
                        ? "flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-white shadow-[0_10px_32px_-10px_rgba(37,211,102,0.65)]"
                        : "w-full max-w-[300px] rounded-xl border border-black/[0.07] bg-[#F8F8F8] px-6 py-3.5 text-center"
                    }
                  >
                    {node.cta && <WhatsGlyph />}
                    <span
                      className={`font-sans text-sm font-semibold md:text-base ${
                        node.cta ? "text-white" : "text-[#0A0A0A]"
                      }`}
                    >
                      {node.label}
                    </span>
                  </motion.div>
                </div>
              ))}
              <Reveal delay={0.7}>
                <p className="mt-6 max-w-xs text-center font-sans text-sm text-[#0A0A0A]/40">
                  Cada botão aparece exatamente após um momento de redução de
                  objeções.
                </p>
              </Reveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

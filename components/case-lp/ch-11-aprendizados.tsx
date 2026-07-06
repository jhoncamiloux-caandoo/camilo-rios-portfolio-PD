"use client";

import { Eyebrow, BlurTitle, Reveal } from "./case-primitives";

const LESSONS = [
  "Clareza converte mais do que complexidade.",
  "Dados são melhores que opiniões.",
  "Pequenas otimizações geram grandes impactos ao longo do tempo.",
  "Conversão começa antes do primeiro CTA.",
  "Product Design é sobre resolver problemas de negócio, não apenas criar interfaces.",
];

export function Ch11Aprendizados() {
  return (
    <section className="bg-white py-32 md:py-48" aria-label="Aprendizados do projeto">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-6">
            <Eyebrow>11 · Aprendizados</Eyebrow>
            <BlurTitle
              text="O que este projeto me ensinou."
              className="font-display text-4xl font-semibold leading-[1.06] tracking-tight text-[#0A0A0A] md:text-6xl"
            />
          </div>

          <div className="mt-16 flex flex-col md:mt-24">
            {LESSONS.map((lesson, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="flex items-start gap-6 border-t border-black/[0.07] py-10 last:border-b md:gap-10 md:py-12">
                  <span className="font-display text-sm font-semibold leading-[1.9] text-[#622FFD] md:text-base">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-2xl font-medium leading-snug tracking-tight text-[#0A0A0A] md:text-4xl">
                    {lesson}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

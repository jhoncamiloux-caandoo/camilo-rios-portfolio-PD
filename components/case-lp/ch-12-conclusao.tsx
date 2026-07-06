"use client";

import Link from "next/link";
import { BlurTitle, Reveal } from "./case-primitives";

export function Ch12Conclusao() {
  return (
    <section
      className="relative flex min-h-[90vh] items-center bg-[#F8F8F8] py-32 md:py-48"
      aria-label="Conclusão do case"
    >
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 text-center">
          <BlurTitle
            text="Grandes resultados raramente surgem de uma única ideia."
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-[#0A0A0A] md:text-6xl"
          />
          <Reveal delay={0.3}>
            <p className="max-w-xl font-sans text-lg leading-relaxed text-[#0A0A0A]/55 md:text-xl">
              Eles são consequência de centenas de pequenas decisões orientadas
              por dados. Este projeto representa exatamente essa forma de
              pensar: transformar problemas complexos em experiências digitais
              que geram impacto mensurável.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="https://agente-de-ia-para-vendas-no-whatsap.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-[#0A0A0A] px-7 font-sans text-base font-semibold text-white transition-all duration-250 hover:bg-[#622FFD] hover:shadow-[0_8px_28px_-6px_rgba(98,47,253,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#622FFD] focus-visible:ring-offset-2"
              >
                Ver Landing Page
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
              <Link
                href="/#cases"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-black/[0.12] px-7 font-sans text-base font-semibold text-[#0A0A0A] transition-colors duration-250 hover:border-[#622FFD] hover:text-[#622FFD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#622FFD] focus-visible:ring-offset-2"
              >
                Voltar ao portfólio
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

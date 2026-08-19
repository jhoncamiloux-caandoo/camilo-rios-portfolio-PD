import { Eyebrow, BlurTitle, Reveal } from "@/components/case-lp/case-primitives";
import { ClintBotaoCTA, ClintChipAgente, ClintBarraPrompt } from "./clint-components-live";

const TAGS = ["Design System", "Growth", "UX/UI", "Figma", "Storybook"];

export function Ch01Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-40 md:pb-32 md:pt-48" aria-label="Apresentação do case Scale">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(60%_60%_at_70%_0%,rgba(98,47,253,0.07),transparent_72%)]"
      />

      <div className="container relative grid grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-gutter">
        <div className="flex flex-col gap-7 md:col-span-6 lg:col-span-5">
          <Eyebrow>03 · Scale</Eyebrow>

          <BlurTitle
            text="Criando um sistema para escalar Growth."
            className="font-display text-[34px] font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] sm:text-[42px] md:text-[52px]"
          />

          <Reveal delay={0.4}>
            <p className="max-w-md font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
              Como transformar padrões visuais e operacionais em uma
              infraestrutura compartilhada para acelerar experimentos sem
              perder consistência.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/[0.08] px-3.5 py-1.5 font-sans text-xs font-medium text-[#0A0A0A]/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Vitrine: o design system real, vivo */}
        <div className="md:col-span-6 md:col-start-7">
          <Reveal delay={0.2}>
            <div className="relative overflow-hidden rounded-3xl bg-[#060309] p-8 shadow-[0_32px_80px_-16px_rgba(10,10,10,0.35)] md:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_0%,rgba(166,0,255,0.18),transparent_70%)]"
              />
              <div className="relative flex flex-col gap-6">
                <ClintBarraPrompt />
                <div className="flex flex-wrap gap-2.5">
                  <ClintChipAgente rotulo="Crie um funil de vendas" />
                  <ClintChipAgente rotulo="Atender contatos" variante="grande" />
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <ClintBotaoCTA rotulo="Crie seu agente" selo="novo" />
                  <ClintBotaoCTA rotulo="Falar com um consultor" variante="contorno" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

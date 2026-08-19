import { Eyebrow, BlurTitle, Reveal, MetricGrid, BrowserMockup } from "@/components/case-lp/case-primitives";

const TAGS = ["Product Design", "UX Strategy", "CRO", "Growth"];

export function Ch01Hero() {
  return (
    <section
      className="relative bg-white pb-24 pt-40 md:pb-32 md:pt-48"
      aria-label="Apresentação do case Acquire"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(60%_60%_at_70%_0%,rgba(98,47,253,0.07),transparent_72%)]"
      />

      <div className="container relative grid grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-gutter">
        {/* Coluna esquerda: texto */}
        <div className="flex flex-col gap-7 md:col-span-6 lg:col-span-5">
          <Eyebrow>01 · Acquire — CRO / Produto</Eyebrow>

          <BlurTitle
            text="Projetando a jornada de aquisição da Clint."
            className="font-display text-[34px] font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] sm:text-[42px] md:text-[52px]"
          />

          <Reveal delay={0.4}>
            <p className="max-w-md font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
              Transformando pontos de contato, narrativa e hierarquia de
              informação em uma experiência mais clara para aquisição e
              conversão.
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

          <Reveal delay={0.6} className="mt-1 border-t border-black/[0.06] pt-6">
            <MetricGrid
              size="sm"
              align="start"
              items={[
                { value: 37, suffix: "%", label: "Conversão" },
                { value: 10722, label: "Conversas" },
                { value: 79, suffix: "%", label: "da demanda" },
              ]}
            />
          </Reveal>
        </div>

        {/* Coluna direita: produto real */}
        <div className="md:col-span-6 md:col-start-7">
          <Reveal delay={0.2}>
            <BrowserMockup
              src="/lp-hero.webp"
              alt="Landing Page Clint — Agente de IA para Vendas no WhatsApp"
              url="clintdigital.com.br/agente-ia"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

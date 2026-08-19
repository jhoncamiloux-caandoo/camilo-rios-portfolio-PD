import { Eyebrow, BlurTitle, Reveal, MetricGrid } from "@/components/case-lp/case-primitives";

export function Ch02Impact() {
  return (
    <section className="relative bg-[#0A0A0A] py-28 md:py-40" aria-label="Impacto do projeto">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(50%_50%_at_50%_0%,rgba(98,47,253,0.12),transparent_70%)]"
      />
      <div className="container relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow light>Antes do processo</Eyebrow>
          <BlurTitle
            text="Prefiro mostrar o impacto antes de mostrar o processo."
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-lg font-sans text-base leading-relaxed text-white/50 md:text-lg">
              Estes números não são o objetivo do case, são a consequência de
              decisões de Product Design que estão detalhadas a seguir.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 md:mt-28">
          <MetricGrid
            dark
            items={[
              { value: 28967, label: "cliques nas campanhas" },
              { value: 10722, label: "conversas iniciadas" },
              { value: 37, suffix: "%", label: "de conversão" },
              { value: 1.27, prefix: "R$ ", decimals: 2, label: "por conversa" },
              { value: 79, suffix: "%", label: "de toda a demanda" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

import { Eyebrow, BlurTitle, Reveal, FlowDiagram } from "@/components/case-lp/case-primitives";

export function Ch03Architecture() {
  return (
    <section className="bg-white py-28 md:py-40" aria-label="Arquitetura do design system">
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow>Arquitetura do design system</Eyebrow>
          <BlurTitle
            text="Uma decisão no token, herdada por todo o produto."
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-5xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
              Cada camada existe para que a de cima nunca precise pensar na de
              baixo. O designer escolhe um token; o produto inteiro herda a
              decisão.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 overflow-x-auto md:mt-28">
          <Reveal className="flex min-w-max justify-center px-4 md:min-w-0">
            <FlowDiagram
              direction="vertical"
              nodes={["Tokens", "Componentes", "Telas", "Produto"]}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

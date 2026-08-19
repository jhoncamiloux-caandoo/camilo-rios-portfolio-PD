import { Eyebrow, BlurTitle, Reveal, FlowDiagram } from "@/components/case-lp/case-primitives";

export function Ch08GrowthSystem() {
  return (
    <section className="bg-white py-28 md:py-40" aria-label="Design System conectado ao Growth">
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow>Growth System</Eyebrow>
          <BlurTitle
            text="Um Design System só importa se acelera o próximo experimento."
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-5xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
              Essa é a diferença entre um case genérico de Design System e um
              case alinhado ao posicionamento de Growth: o sistema existe
              para que cada campanha nova comece na metade do caminho.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 overflow-x-auto md:mt-28">
          <Reveal className="flex min-w-max justify-center px-4 md:min-w-0">
            <FlowDiagram
              direction="vertical"
              activeIndex={3}
              nodes={["Design System", "Componentes reutilizáveis", "Landing / Campanha", "Experimento", "Aprendizado", "Iteração"]}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { Eyebrow, BlurTitle, Reveal, FlowDiagram } from "@/components/case-lp/case-primitives";

export function Ch07FigmaStorybook() {
  return (
    <section className="bg-[#F8F8F8] py-28 md:py-40" aria-label="Ponte entre design e desenvolvimento">
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow>Figma → Storybook</Eyebrow>
          <BlurTitle
            text="A ponte entre design e desenvolvimento."
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-5xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
              Tokens e variantes nascem no Figma e se tornam a referência que
              o time de desenvolvimento consulta para implementar cada
              componente — o objetivo é colaboração, não uma integração
              automatizada entre as ferramentas.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 overflow-x-auto md:mt-20">
          <Reveal className="flex min-w-max justify-center px-4 md:min-w-0">
            <FlowDiagram nodes={["Figma", "Tokens", "Componente", "Storybook", "Produto"]} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

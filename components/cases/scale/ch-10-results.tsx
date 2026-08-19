import { Eyebrow, BlurTitle, Reveal, BigNumber } from "@/components/case-lp/case-primitives";

export function Ch10Results() {
  return (
    <section className="relative bg-[#0A0A0A] py-28 md:py-40" aria-label="Resultado do sistema">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(50%_50%_at_50%_0%,rgba(98,47,253,0.12),transparent_70%)]"
      />
      <div className="container relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow light>Resultado</Eyebrow>
          <BlurTitle
            text="Um sistema compartilhado torna cada página nova mais rápida de nascer."
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-white/50 md:text-lg">
              Tokens e componentes prontos removem a decisão visual repetida
              de cada nova página, e isso também muda como agentes de IA
              trabalham dentro do projeto.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-10 md:mt-20 md:grid-cols-2">
          {/* Velocidade — dado real, com fonte */}
          <Reveal className="flex flex-col items-center gap-3 text-center">
            <BigNumber
              value={47}
              suffix="%"
              duration={1600}
              className="font-display text-6xl font-semibold tracking-tight text-white md:text-7xl"
            />
            <span className="font-sans text-sm text-white/50">
              mais rápido para construir a mesma página
            </span>
            <span className="max-w-xs font-sans text-xs leading-relaxed text-white/30">
              Estudo controlado da Sparkbox: 8 desenvolvedores construíram o
              mesmo formulário do zero e reutilizando o Design System Carbon
              da IBM. Tempo mediano caiu de 4h12 para 2h.
            </span>
          </Reveal>

          {/* Tokens de IA — estimativa raciocinada, não dado publicado */}
          <Reveal delay={0.15} className="flex flex-col items-center gap-3 text-center">
            <span className="font-display text-6xl font-semibold tracking-tight text-white md:text-7xl">
              70&#8211;85%
            </span>
            <span className="font-sans text-sm text-white/50">
              menos tokens para um agente de IA gerar a mesma interface
            </span>
            <span className="max-w-xs font-sans text-xs leading-relaxed text-white/30">
              Estimativa minha, não um estudo publicado: escrever uma seção do
              zero (cores, espaçamento, estados, responsivo) custa
              1.200&#8211;2.000 tokens; importar um componente já pronto
              custa 150&#8211;300.
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

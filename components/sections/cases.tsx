import { FadeIn } from "@/components/motion/fade-in";

const cases = [
  {
    title: "Arquitetura de conversão para SaaS",
    tag: "CRO / Produto",
    body: "Reorganizar narrativa, hierarquia de valor e pontos de decisão para aumentar clareza em jornadas de aquisição.",
  },
  {
    title: "Experiências com inteligência artificial",
    tag: "AI / UX",
    body: "Desenhar fluxos onde modelos, automações e feedback humano trabalham sem transformar complexidade técnica em carga cognitiva.",
  },
  {
    title: "Sistemas para times de crescimento",
    tag: "Growth / Design System",
    body: "Criar padrões visuais e operacionais que aceleram experimentos sem comprometer consistência ou qualidade percebida.",
  },
];

export function Cases() {
  return (
    <section id="cases" className="bg-light pb-28 text-dark">
      <div className="container">
        <FadeIn className="max-w-4xl">
          <p className="mb-6 text-caption uppercase tracking-[0.22em] text-dark/50">
            Cases
          </p>
          <h2 className="font-display text-[48px] font-semibold leading-[1.08] md:text-h2">
            Projetos pensados para usuários, funis e times.
          </h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-gutter lg:grid-cols-3">
          {cases.map((item, index) => (
            <FadeIn
              className="rounded-md border border-dark/10 bg-white p-7 shadow-[0_24px_80px_rgba(10,10,10,0.06)]"
              delay={index * 0.08}
              key={item.title}
            >
              <p className="text-caption font-medium uppercase tracking-[0.18em] text-primary">
                {item.tag}
              </p>
              <h3 className="mt-10 font-display text-[34px] font-semibold leading-[1.12]">
                {item.title}
              </h3>
              <p className="mt-6 text-sm leading-6 text-dark/58">{item.body}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

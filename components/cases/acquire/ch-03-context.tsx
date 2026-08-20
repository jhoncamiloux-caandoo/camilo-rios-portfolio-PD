import { Eyebrow, BlurTitle, Reveal } from "@/components/case-lp/case-primitives";

const FACTS = [
  { label: "Cliente", value: "Clint" },
  { label: "Área", value: "CRM / Vendas / Growth" },
  { label: "Papel", value: "Product Designer" },
  { label: "Foco", value: "Produto · UX · CRO · Growth" },
];

export function Ch03Context() {
  return (
    <section className="bg-white py-28 md:py-40" aria-label="Contexto do projeto">
      <div className="container">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-gutter">
          <div className="flex flex-col gap-6 md:col-span-6 lg:col-span-5">
            <Eyebrow>Contexto</Eyebrow>
            <BlurTitle
              text="Traduzindo tecnologia em compreensão."
              className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-5xl"
            />
            <Reveal delay={0.15}>
              <p className="font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
                A Clint atua na interseção entre CRM, vendas, marketing,
                automação e aquisição. Nesse contexto, a experiência digital
                precisa fazer mais do que apresentar funcionalidades: ela
                precisa ajudar o usuário a entender valor, reconhecer
                relevância e avançar para a próxima ação.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <div className="grid grid-cols-2 gap-4">
              {FACTS.map((fact, i) => (
                <Reveal key={fact.label} delay={0.1 * i}>
                  <div className="rounded-xl border border-black/[0.06] bg-[#F8F8F8] p-5">
                    <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[#0A0A0A]/40">
                      {fact.label}
                    </p>
                    <p className="mt-2 font-display text-base font-semibold tracking-tight text-[#0A0A0A] md:text-lg">
                      {fact.value}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

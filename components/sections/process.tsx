import { FadeIn } from "@/components/motion/fade-in";

const steps = [
  "Diagnóstico de negócio e comportamento",
  "Arquitetura de experiência e narrativa",
  "Prototipagem, teste e refinamento",
  "Sistema visual pronto para escala",
];

export function Process() {
  return (
    <section className="bg-dark py-28 text-light">
      <div className="container grid grid-cols-1 gap-gutter md:grid-cols-12">
        <FadeIn className="md:col-span-5">
          <p className="mb-6 text-caption uppercase tracking-[0.22em] text-white/44">
            Método
          </p>
          <h2 className="font-display text-[48px] font-semibold leading-[1.08] md:text-h2">
            Clareza antes de superficie.
          </h2>
        </FadeIn>

        <div className="md:col-span-6 md:col-start-7">
          {steps.map((step, index) => (
            <FadeIn
              className="flex gap-8 border-t border-white/10 py-7 last:border-b"
              delay={index * 0.06}
              key={step}
            >
              <span className="w-8 shrink-0 text-sm text-white/38">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-xl font-medium text-white">{step}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Eyebrow, BlurTitle, Reveal } from "@/components/case-lp/case-primitives";

const JOURNEY = [
  { label: "Hero", cta: false },
  { label: "CTA WhatsApp", cta: true },
  { label: "Benefícios", cta: false },
  { label: "CTA WhatsApp", cta: true },
  { label: "Prova social", cta: false },
  { label: "CTA WhatsApp", cta: true },
  { label: "CTA final", cta: true },
];

export function Ch08Solution() {
  return (
    <section className="bg-[#F8F8F8] py-28 md:py-40" aria-label="A decisão mais importante">
      <div className="container">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-gutter">
          <div className="flex flex-col gap-6 md:col-span-6 lg:col-span-5">
            <Eyebrow>A decisão mais importante</Eyebrow>
            <BlurTitle
              text="Reduzindo atrito para aumentar conversões."
              className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-4xl"
            />
            <Reveal delay={0.15}>
              <p className="font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
                Substituir formulários tradicionais por conversas imediatas no
                WhatsApp. Os botões foram distribuídos estrategicamente ao
                longo da página, aparecendo sempre depois de um momento de
                maior confiança.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <blockquote className="border-l-2 border-[#25D366] pl-5">
                <p className="font-display text-lg font-medium leading-snug tracking-tight text-[#0A0A0A] md:text-xl">
                  O usuário nunca precisa procurar como entrar em contato. O
                  próximo passo está sempre disponível.
                </p>
              </blockquote>
            </Reveal>
          </div>

          <div className="flex flex-col justify-center gap-3 md:col-span-5 md:col-start-8">
            {JOURNEY.map((node, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <div
                  className={`w-full rounded-xl px-6 py-3.5 text-center font-sans text-sm font-semibold md:text-base ${
                    node.cta
                      ? "bg-[#25D366] text-white shadow-[0_10px_28px_-10px_rgba(37,211,102,0.55)]"
                      : "border border-black/[0.07] bg-white text-[#0A0A0A]"
                  }`}
                >
                  {node.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Eyebrow, BlurTitle, Reveal } from "@/components/case-lp/case-primitives";

const INSIGHTS = [
  {
    n: "01",
    title: "Clareza",
    description: "O usuário precisa entender rapidamente o valor antes de decidir.",
  },
  {
    n: "02",
    title: "Hierarquia",
    description: "O conteúdo precisa acompanhar a ordem mental da decisão, não a ordem técnica do produto.",
  },
  {
    n: "03",
    title: "Conversão",
    description: "O CTA precisa aparecer como consequência da informação, não como interrupção.",
  },
];

export function Ch06Insight() {
  return (
    <section className="bg-[#F8F8F8] py-28 md:py-40" aria-label="Insights">
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow>Insight</Eyebrow>
          <BlurTitle
            text="Três princípios guiaram cada decisão a partir daqui."
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-5xl"
          />
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-3">
          {INSIGHTS.map((insight, i) => (
            <Reveal key={insight.n} delay={i * 0.1}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-black/[0.07] bg-white p-7">
                <span className="font-display text-sm font-semibold text-[#622FFD]">{insight.n}</span>
                <h3 className="font-display text-xl font-semibold tracking-tight text-[#0A0A0A] md:text-2xl">
                  {insight.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-[#0A0A0A]/55 md:text-base">
                  {insight.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

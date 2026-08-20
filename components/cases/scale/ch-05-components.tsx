import { Eyebrow, BlurTitle, Reveal } from "@/components/case-lp/case-primitives";
import { ClintBotaoCTA, ClintChipAgente, ClintBarraPrompt, ClintBalaoChat } from "@/components/case-lp/clint-components-live";

function ComponentPanel({
  name,
  file,
  description,
  children,
}: {
  name: string;
  file: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="rounded-2xl border border-black/[0.07] bg-white p-6 md:p-7">
        <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-lg font-semibold tracking-tight text-[#0A0A0A] md:text-xl">
            {name}
          </h3>
          <span className="font-mono text-[11px] text-[#0A0A0A]/35">{file}</span>
        </div>
        <p className="mb-5 font-sans text-sm leading-relaxed text-[#0A0A0A]/50">{description}</p>
        <div className="flex flex-wrap items-center gap-3 rounded-xl bg-[#060309] p-6">{children}</div>
      </div>
    </Reveal>
  );
}

export function Ch05Components() {
  return (
    <section className="bg-[#F8F8F8] py-28 md:py-40" aria-label="Componentes do design system">
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow>Componentes</Eyebrow>
          <BlurTitle
            text="Um componente, todas as páginas."
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-5xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
              Edite um arquivo em <code className="font-mono text-[#622FFD]">componentes/</code> e a
              mudança aparece em toda página que o usa. Estas são recriações
              fiéis dos componentes reais em produção, mesma paleta, mesmo
              comportamento.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 md:mt-20">
          <ComponentPanel
            name="BotaoCTA"
            file="componentes/BotaoCTA.dc.html"
            description="Props: rótulo, selo, variante (primário | contorno). O primário usa gradiente roxo com glow; o contorno é reservado para ações secundárias."
          >
            <ClintBotaoCTA rotulo="Crie um agente de Pré-vendas" selo="novo" />
            <ClintBotaoCTA rotulo="Baixar app" variante="contorno" />
          </ComponentPanel>

          <ComponentPanel
            name="BarraPrompt"
            file="componentes/BarraPrompt.dc.html"
            description="Barra de prompt com borda em gradiente e digitação animada: a mesma peça se repete no hero e dentro do produto."
          >
            <div className="w-full max-w-md">
              <ClintBarraPrompt />
            </div>
          </ComponentPanel>

          <ComponentPanel
            name="ChipAgente"
            file="componentes/ChipAgente.dc.html"
            description="Props: rótulo, variante (compacto | grande), ícone. Usado para sugestões rápidas de ação em toda a plataforma."
          >
            <ClintChipAgente rotulo="Crie um funil de vendas" />
            <ClintChipAgente rotulo="Atender contatos" variante="grande" />
          </ComponentPanel>

          <ComponentPanel
            name="BalaoChat"
            file="componentes/BalaoChat.dc.html"
            description="Balão de conversa com avatar circular ou quadrado: a peça visual que sustenta toda a narrativa de produto em torno do WhatsApp."
          >
            <ClintBalaoChat texto="Quero saber como funciona" hora="22:45" />
          </ComponentPanel>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Eyebrow, BlurTitle, Reveal } from "@/components/case-lp/case-primitives";
import { ClintBotaoCTA, ClintChipAgente, ClintBarraPrompt, ClintBalaoChat } from "@/components/case-lp/clint-components-live";
import { useLocale } from "@/lib/i18n/locale-context";

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
          <span className="font-mono text-[11px] text-[#0A0A0A]/65">{file}</span>
        </div>
        <p className="mb-5 font-sans text-sm leading-relaxed text-[#0A0A0A]/65">{description}</p>
        <div className="flex flex-wrap items-center gap-3 rounded-xl bg-[#060309] p-6">{children}</div>
      </div>
    </Reveal>
  );
}

export function Ch05Components() {
  const { t } = useLocale();
  const c = t.scale.ch05;
  const [panelCTA, panelPrompt, panelChip, panelChat] = c.panels;

  return (
    <section className="bg-[#F8F8F8] py-28 md:py-40" aria-label={c.ariaLabel}>
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <BlurTitle
            text={c.title}
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-5xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/65 md:text-lg">
              {c.description}
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 md:mt-20">
          <ComponentPanel
            name={panelCTA.name}
            file={panelCTA.file}
            description={panelCTA.description}
          >
            <ClintBotaoCTA rotulo={c.ctaCreateAgent} selo={c.ctaBadgeNew} />
            <ClintBotaoCTA rotulo={c.ctaDownloadApp} variante="contorno" />
          </ComponentPanel>

          <ComponentPanel
            name={panelPrompt.name}
            file={panelPrompt.file}
            description={panelPrompt.description}
          >
            <div className="w-full max-w-md">
              <ClintBarraPrompt />
            </div>
          </ComponentPanel>

          <ComponentPanel
            name={panelChip.name}
            file={panelChip.file}
            description={panelChip.description}
          >
            <ClintChipAgente rotulo={c.chipSalesFunnel} />
            <ClintChipAgente rotulo={c.chipAttendContacts} variante="grande" />
          </ComponentPanel>

          <ComponentPanel
            name={panelChat.name}
            file={panelChat.file}
            description={panelChat.description}
          >
            <ClintBalaoChat texto={c.chatMessage} hora={c.chatTime} />
          </ComponentPanel>
        </div>
      </div>
    </section>
  );
}

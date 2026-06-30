/* Mockup coded de um browser mostrando a Landing Page do projeto.
   Sem imagens externas — layout em Tailwind puro, carrega instantâneo.
   Representa fielmente a hierarquia visual da LP real:
   hero escuro → métricas → benefícios → CTA branco */

export function NotebookMockup() {
  return (
    <div className="relative w-full select-none" aria-hidden="true">
      {/* Sombra de profundidade */}
      <div className="absolute -inset-4 rounded-[28px] bg-[#622FFD]/8 blur-3xl" />

      {/* Frame do browser */}
      <div className="relative overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_32px_80px_-16px_rgba(10,10,10,0.22)]">

        {/* Chrome bar */}
        <div className="flex h-9 shrink-0 items-center gap-2 border-b border-black/[0.06] bg-[#F5F5F5] px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <div className="mx-auto flex h-5 w-48 items-center justify-center rounded bg-white/70 px-3">
            <span className="font-mono text-[9px] text-[#9AA0A6]">
              clintdigital.com.br/agente-ia
            </span>
          </div>
        </div>

        {/* LP — Hero section (escuro) */}
        <div className="bg-[#080808] px-5 pb-5 pt-6">
          {/* Badge */}
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#25D366]" />
            <span className="font-sans text-[9px] font-medium text-white/60">
              Inteligência Artificial · WhatsApp
            </span>
          </div>

          {/* H1 da LP */}
          <h3 className="mb-2 font-display text-[15px] font-semibold leading-tight tracking-tight text-white md:text-[18px]">
            Feche mais vendas com IA no WhatsApp
          </h3>
          <p className="mb-4 font-sans text-[10px] leading-relaxed text-white/50">
            Qualifique, atenda e converta clientes automaticamente,{" "}
            <br className="hidden md:block" />
            sem aumentar sua equipe.
          </p>

          {/* CTA WhatsApp */}
          <button className="flex items-center gap-1.5 rounded-lg bg-[#25D366] px-4 py-2 shadow-[0_4px_18px_-4px_rgba(37,211,102,0.55)] transition hover:scale-[1.02]">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-white" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M11.955 0C5.354 0 0 5.354 0 11.955c0 2.094.543 4.05 1.494 5.748L0 24l6.443-1.473A11.928 11.928 0 0011.955 24c6.6 0 11.955-5.354 11.955-11.955C23.91 5.353 18.556 0 11.955 0zm0 21.818a9.828 9.828 0 01-5.022-1.374l-.36-.215-3.73.852.876-3.646-.237-.379A9.846 9.846 0 012.091 11.955c0-5.44 4.424-9.864 9.864-9.864 5.44 0 9.864 4.424 9.864 9.864 0 5.44-4.424 9.863-9.864 9.863z" />
            </svg>
            <span className="font-sans text-[10px] font-semibold text-white">
              Falar com especialista
            </span>
          </button>
        </div>

        {/* Barra de métricas */}
        <div className="flex divide-x divide-black/[0.06] border-y border-black/[0.06] bg-[#F9F9F9]">
          {[
            { value: "10K+", label: "Conversas" },
            { value: "37%", label: "Conversão" },
            { value: "24/7", label: "Atendimento" },
          ].map((m) => (
            <div key={m.label} className="flex flex-1 flex-col items-center py-2.5">
              <span className="font-display text-sm font-semibold text-[#622FFD]">
                {m.value}
              </span>
              <span className="font-sans text-[8px] text-[#0A0A0A]/40">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Benefícios */}
        <div className="grid grid-cols-3 divide-x divide-black/[0.05] bg-white">
          {[
            { icon: "⚡", title: "Resposta imediata", desc: "IA responde em segundos" },
            { icon: "🎯", title: "Qualificação inteligente", desc: "Filtra leads automaticamente" },
            { icon: "📅", title: "Agenda automatizada", desc: "Calendly integrado" },
          ].map((b) => (
            <div key={b.title} className="px-3 py-3">
              <span className="text-sm">{b.icon}</span>
              <p className="mt-1 font-sans text-[9px] font-semibold leading-tight text-[#0A0A0A]">
                {b.title}
              </p>
              <p className="mt-0.5 font-sans text-[8px] leading-tight text-[#0A0A0A]/40">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA final da LP */}
        <div className="border-t border-black/[0.05] bg-[#622FFD] px-5 py-4 text-center">
          <p className="font-display text-[11px] font-semibold text-white">
            Comece agora. Sem contrato.
          </p>
          <div className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-white/15 px-3 py-1.5">
            <span className="font-sans text-[9px] font-medium text-white">
              Agendar demonstração →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

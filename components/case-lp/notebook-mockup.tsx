export function NotebookMockup() {
  return (
    <div className="relative w-full select-none" aria-hidden="true">
      {/* Glow de profundidade */}
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

        {/* Screenshot real da LP */}
        <img
          src="/lp-hero.webp"
          alt="Landing Page Clint — Agente de IA para Vendas no WhatsApp"
          className="block w-full object-cover object-top"
          draggable={false}
        />
      </div>
    </div>
  );
}

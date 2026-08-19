import Link from "next/link";

/* Rodapé minimalista de encerramento de um case. */
export function CaseFooter() {
  return (
    <footer className="bg-white py-10">
      <div className="container flex flex-col items-center justify-between gap-4 border-t border-black/[0.06] pt-8 text-center md:flex-row md:text-left">
        <p className="font-sans text-xs text-[#0A0A0A]/40">
          © {new Date().getFullYear()} Jhon Camilo Rios · Senior Product Designer
        </p>
        <Link
          href="/"
          className="font-sans text-xs font-semibold text-[#0A0A0A]/60 transition-colors hover:text-primary"
        >
          Voltar ao portfólio
        </Link>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

// Poppins é a tipografia do WhatsApp Next; carregada só neste case para a seção de identidade.
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  title: "Case: WhatsApp Next · Content, UX & Growth",
  description:
    "Como as mudanças no WhatsApp viraram um ecossistema de conteúdo e aquisição para a Clint: identidade visual, blog, landing page, criativos e captação de leads.",
  keywords: ["Product Design", "UX/UI", "Content Design", "Acessibilidade", "Motion", "Growth", "WhatsApp", "Clint"],
  openGraph: {
    title: "Case: WhatsApp Next · Jhon Camilo Rios",
    description: "Conteúdo, identidade, landing page e captação trabalhando como uma única experiência.",
    locale: "pt_BR",
    type: "article",
  },
  alternates: { canonical: "/cases/whatsapp-next" },
};

export default function CaseWhatsappNextLayout({ children }: { children: React.ReactNode }) {
  return <div className={poppins.variable}>{children}</div>;
}

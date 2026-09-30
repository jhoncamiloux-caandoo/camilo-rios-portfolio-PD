import type { Metadata } from "next";
import { Chivo_Mono } from "next/font/google";

// Chivo Mono é a mono do projeto; Satoshi vem do Fontshare, como no site original. Carregadas só neste case.
const chivoMono = Chivo_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-sv-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Case: Servientrega · UI, AI & Creative Development | Jhon Camilo Rios",
  description:
    "A jornada de uma encomenda transformada em narrativa interativa: scroll como storytelling, cena WebGL, direção de arte com IA e UI multilíngue.",
  keywords: ["UI Design", "Creative Development", "WebGL", "Three.js", "GSAP", "Motion", "AI", "Scroll storytelling"],
  openGraph: {
    title: "Case: Servientrega · Jhon Camilo Rios",
    description: "Uma caixa, uma jornada, seis etapas, uma experiência.",
    locale: "pt_BR",
    type: "article",
  },
  alternates: { canonical: "/cases/servientrega" },
};

export default function CaseServientregaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={chivoMono.variable}>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,700,900&display=swap" />
      {children}
    </div>
  );
}

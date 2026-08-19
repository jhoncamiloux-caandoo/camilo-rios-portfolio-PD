import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case: Clint Intelligence · AI / UX | Jhon Camilo Rios",
  description:
    "Projetando experiências de IA para equipes comerciais. Como transformar modelos, automações e recomendações em interações compreensíveis e controláveis.",
  openGraph: {
    title: "Case: Clint Intelligence · Jhon Camilo Rios",
    description: "AI / UX: experiências de inteligência artificial da Clint.",
    locale: "pt_BR",
    type: "article",
  },
  alternates: {
    canonical: "/cases/intelligence",
  },
};

export default function CaseIntelligenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case: Clint Scale — Growth & Design System | Jhon Camilo Rios",
  description:
    "Criando um sistema para escalar Growth. Como padrões visuais e operacionais aceleram experimentos sem perder consistência.",
  openGraph: {
    title: "Case: Clint Scale · Jhon Camilo Rios",
    description: "Growth / Design System — a infraestrutura visual da Clint.",
    locale: "pt_BR",
    type: "article",
  },
  alternates: {
    canonical: "/cases/scale",
  },
};

export default function CaseScaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

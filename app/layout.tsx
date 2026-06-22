import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const dmSans = localFont({
  src: [
    {
      path: "../public/fonts/DMSans-latin-var.woff2",
      weight: "100 1000",
      style: "normal",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

const degular = localFont({
  src: [
    {
      path: "../public/fonts/Degular-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Degular-Semibold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-degular",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jhon Camilo Rios | Senior Product Designer",
  description:
    "Portfolio premium de Jhon Camilo Rios, Senior Product Designer especializado em Growth, Inteligência Artificial, CRO e SaaS.",
  openGraph: {
    title: "Jhon Camilo Rios | Senior Product Designer",
    description: "Growth, IA e SaaS com precisão de produto.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} ${degular.variable} dark`}
    >
      <body className="bg-dark text-light font-sans antialiased selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}

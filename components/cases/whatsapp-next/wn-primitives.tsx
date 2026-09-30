"use client";

import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/case-lp/case-primitives";

/* Paleta real do blog WhatsApp Next (tokens publicados em blog.min.css). */
export const WN = {
  bg: "#020403",
  bg2: "#07100a",
  green: "#87ff0b",
  green2: "#42e884",
  white: "#f5fff8",
  text: "#c8d6cc",
  muted: "#9bada1",
  dim: "#6b7d71",
} as const;

export const ASSET = "/cases/clint/whatsapp-next";

export function WnEyebrow({ children, dark = true }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.22em] ${
        dark ? "text-[#87ff0b]" : "text-[#2f7a00]"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-[#87ff0b]" : "bg-[#2f7a00]"}`} aria-hidden="true" />
      {children}
    </span>
  );
}

export function WnHeading({
  eyebrow,
  title,
  description,
  dark = true,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: "center" | "start";
}) {
  const center = align === "center";
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-5 ${center ? "mx-auto items-center text-center" : "items-start"}`}>
      <WnEyebrow dark={dark}>{eyebrow}</WnEyebrow>
      <h2
        className={`font-display text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl ${
          dark ? "text-[#f5fff8]" : "text-[#0A0A0A]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`max-w-xl font-sans text-base leading-relaxed md:text-lg ${dark ? "text-[#9bada1]" : "text-[#0A0A0A]/65"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}

/* Fluxo horizontal de etapas com setas; quebra em coluna no mobile. */
export function WnFlow({ items, dark = true, highlightLast = true }: { items: string[]; dark?: boolean; highlightLast?: boolean }) {
  return (
    <ol className="flex flex-col items-center justify-center gap-2 md:flex-row md:flex-wrap md:gap-3">
      {items.map((item, i) => {
        const last = highlightLast && i === items.length - 1;
        return (
          <li key={item} className="flex flex-col items-center gap-2 md:flex-row md:gap-3">
            {i > 0 && (
              <svg
                viewBox="0 0 24 24"
                className={`h-4 w-4 rotate-90 md:rotate-0 ${dark ? "text-[#87ff0b]" : "text-[#2f7a00]"}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            )}
            <span
              className={`rounded-full px-4 py-2 font-sans text-sm font-semibold ${
                last
                  ? "bg-[#87ff0b] text-[#020403]"
                  : dark
                    ? "border border-white/15 bg-white/[0.04] text-[#f5fff8]"
                    : "border border-black/[0.08] bg-white text-[#0A0A0A]"
              }`}
            >
              {item}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

/* Moldura de navegador escura, no clima do projeto. */
export function WnBrowser({ src, alt, url, className = "" }: { src: string; alt: string; url: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 bg-[#07100a] shadow-[0_40px_100px_-30px_rgba(135,255,11,0.25)] ${className}`}>
      <div className="flex h-9 items-center gap-2 border-b border-white/[0.08] px-4" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="mx-auto rounded bg-white/[0.06] px-3 py-0.5 font-mono text-[10px] text-[#9bada1]">{url}</span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="block w-full" loading="lazy" />
    </div>
  );
}

export function WnPhone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[28px] border-[5px] border-[#1a211c] bg-[#020403] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="block w-full" loading="lazy" />
    </div>
  );
}

/* CTA de destino real: botão verde + URL visível, para o recrutador abrir o projeto. */
export function WnCtaLink({ href, label, url, className = "" }: { href: string; label: string; url: string; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex flex-col items-center gap-2 focus-visible:outline-none ${className}`}
    >
      <span className="inline-flex h-14 items-center gap-2 rounded-full bg-[#87ff0b] px-7 font-sans text-base font-semibold text-[#020403] shadow-[0_12px_40px_-12px_rgba(135,255,11,0.7)] transition-transform group-hover:-translate-y-0.5 group-focus-visible:ring-2 group-focus-visible:ring-[#87ff0b] group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-[#020403]">
        {label}
        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
      <span className="font-mono text-xs text-[#9bada1]">{url}</span>
    </a>
  );
}

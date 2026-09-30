"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow, BlurTitle, Reveal } from "@/components/case-lp/case-primitives";
import { useLocale } from "@/lib/i18n/locale-context";
import { initPd } from "./pd-engine";
import "./pd.css";

// Demo do produto guiada pelo scroll (portada de clinicas-theta.vercel.app). O motor é JS puro;
// aqui ele recebe o nó raiz e os textos do idioma, e é recriado quando o idioma muda.
export function Ch05Showcase() {
  const { t, locale } = useLocale();
  const c = t.intelligence.ch05;
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    return initPd(root.current, c.demo);
  }, [locale, c.demo]);

  return (
    <section ref={root} className="pd relative bg-white pt-28 md:pt-40" aria-label={c.ariaLabel}>
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <BlurTitle
            text={c.title}
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-5xl"
          />
          <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/65">{c.description}</p>
          <p className="max-w-xl rounded-full border border-black/[0.08] bg-[#F8F8F8] px-4 py-2 font-sans text-xs leading-relaxed text-[#0A0A0A]/65">
            {c.nicheNote}
          </p>
        </div>
      </div>

      <div className="pd-track">
        <div className="pd-sticky">
          <div className="wrap pd-row">
            <div className="pd-cap" aria-hidden="true">
              <div className="pd-dots"><span /><span /><span /><span /><span /></div>
              <div className="pd-cap-h"><span className="pd-cap-n">·</span><span className="pd-cap-t">{c.demo.capTitle}</span></div>
              <div className="pd-cap-d">{c.demo.capDesc}</div>
              <div className="pd-hint">
                <span className="pd-hint-t">{c.demo.stepOf.replace("{n}", "0")}</span>
                <span className="pd-hint-s">{c.hint} <i aria-hidden="true">↓</i></span>
              </div>
            </div>
            <div className="pd-steps">
              <div className="pd-bar"><span /></div>
              <ol>
                {c.steps.map((s, i) => (
                  <li key={s.title}>
                    <div className="pd-st-h"><span className="pd-n">{i + 1}</span><span>{s.title}</span></div>
                    <p>{s.body}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="pd-stage" aria-hidden="true"><div className="pd-app" /></div>
          </div>
        </div>
      </div>

      <Reveal className="container flex flex-col items-center gap-4 pb-24 pt-10 text-center md:pb-32">
        <p className="max-w-lg font-sans text-sm leading-relaxed text-[#0A0A0A]/65 md:text-base">{c.ctaText}</p>
        <a
          href="https://clinicas-theta.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 font-sans text-sm font-semibold text-white transition-colors hover:bg-[#7447FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          {c.ctaButton}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </Reveal>
    </section>
  );
}

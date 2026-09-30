"use client";

import { useState } from "react";
import { Bot, LayoutTemplate, Clapperboard, Sparkles, Play, type LucideIcon } from "lucide-react";
import { Eyebrow, BlurTitle, Reveal } from "@/components/case-lp/case-primitives";
import { useLocale } from "@/lib/i18n/locale-context";

const VIDEO_ID = "g22oso2dm9Y";
const STEP_ICONS: LucideIcon[] = [Bot, LayoutTemplate, Clapperboard, Sparkles];

// Carrega o iframe do YouTube só no clique: evita ~1MB de JS de terceiros no load da página.
function LiteYouTube({ title }: { title: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-black/[0.07] bg-[#0A0A0A] shadow-[0_24px_60px_-28px_rgba(10,10,10,0.45)]">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 flex items-end justify-start p-5 md:p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label={title}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
            loading="lazy"
          />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-[0_12px_32px_-8px_rgba(98,47,253,0.7)] transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-1 h-6 w-6" fill="currentColor" aria-hidden="true" />
          </span>
        </button>
      )}
    </div>
  );
}

export function Ch08bOwnership() {
  const { t } = useLocale();
  const c = t.acquire.ownership;

  return (
    <section className="bg-[#F8F8F8] py-28 md:py-40" aria-label={c.sectionAriaLabel}>
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <BlurTitle
            text={c.title}
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-5xl"
          />
          <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/65">{c.description}</p>
        </div>

        {/* Fluxo: agente → LP → vídeos → animação */}
        <div role="list" className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-20">
          {c.steps.map((step, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <Reveal key={step.title} delay={i * 0.08}>
                <div role="listitem" className="relative flex h-full flex-col gap-4 rounded-2xl border border-black/[0.07] bg-white p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#0A0A0A]/65">
                      {step.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#0A0A0A]">{step.title}</h3>
                  <p className="font-sans text-sm leading-relaxed text-[#0A0A0A]/65">{step.body}</p>
                  {i < c.steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-black/[0.07] bg-white text-xs text-primary lg:flex"
                    >
                      →
                    </span>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-14 max-w-4xl">
          <LiteYouTube title={c.videoTitle} />
          <p className="mt-4 text-center font-sans text-xs text-[#0A0A0A]/65">{c.videoCaption}</p>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/case-lp/case-primitives";
import { useLocale } from "@/lib/i18n/locale-context";
import { MONO, SANS, SV, SV_ASSET, SvEyebrow, SvHeading } from "./sv-part-1";

/* ── Jornada: seção fixa, o scroll avança 01 → 06 ────────────────── */
export function SvJourney() {
  const { t } = useLocale();
  const c = t.servientrega.journey;
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => setActive(Math.min(5, Math.floor(v * 6))));
  const line = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const n = c.steps.length;

  return (
    <section className="bg-[#07080b]" aria-label={c.ariaLabel}>
      <div className="container pb-10 pt-24 md:pt-36">
        <SvHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />
        <Reveal className="mt-8 flex flex-wrap items-center gap-2" delay={0.1}>
          {c.loop.map((l, i) => (
            <span key={l} className="flex items-center gap-2 text-sm text-white" style={{ fontFamily: MONO }}>
              {i > 0 && <span className="text-[#56C271]" aria-hidden="true">→</span>}
              <span className="rounded-full border border-white/15 px-3 py-1">{l}</span>
            </span>
          ))}
        </Reveal>
      </div>

      {/* Desktop: palco fixo */}
      {!reduce && (
        <div ref={ref} className="relative hidden md:block" style={{ height: `${n * 90}vh` }}>
          <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <div className="container grid grid-cols-[280px_1fr] items-center gap-12 lg:grid-cols-[340px_1fr]">
              {/* Trilho SVG 01 → 06 */}
              <div className="flex flex-col gap-8">
                <div className="flex items-baseline gap-2" style={{ fontFamily: MONO }}>
                  <span className="text-7xl font-medium tabular-nums text-white">{String(active + 1).padStart(2, "0")}</span>
                  <span className="text-lg text-white/60">/ {String(n).padStart(2, "0")}</span>
                </div>
                <svg viewBox="0 0 40 360" className="h-[360px] w-10" aria-hidden="true">
                  <line x1="20" y1="10" x2="20" y2="350" stroke="#ffffff1f" strokeWidth="2" />
                  <motion.line x1="20" y1="10" x2="20" y2="350" stroke={SV.greenLight} strokeWidth="2" style={{ pathLength: line }} />
                  {c.steps.map((_, i) => {
                    const cy = 10 + (340 / (n - 1)) * i;
                    const on = i <= active;
                    return (
                      <g key={i}>
                        <circle cx="20" cy={cy} r={i === active ? 9 : 6} fill={on ? SV.green : SV.ink} stroke={on ? SV.greenLight : "#ffffff40"} strokeWidth="2" style={{ transition: "all .4s" }} />
                        {i === active && <circle cx="20" cy={cy} r="15" fill="none" stroke={SV.greenLight} strokeOpacity=".4" className="animate-ping" style={{ transformOrigin: `20px ${cy}px` }} />}
                      </g>
                    );
                  })}
                </svg>
                <ol className="sr-only">
                  {c.steps.map((s) => <li key={s.title}>{s.title}: {s.body}</li>)}
                </ol>
              </div>

              {/* Imagem + texto da etapa ativa */}
              <div className="relative">
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10">
                  <AnimatePresence mode="popLayout">
                    <motion.img
                      key={active}
                      src={`${SV_ASSET}/j0${active + 1}.webp`}
                      alt={c.steps[active].alt}
                      className="absolute inset-0 h-full w-full object-cover"
                      initial={{ opacity: 0, scale: 1.08 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </AnimatePresence>
                  <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <AnimatePresence mode="wait">
                      <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
                        <span className="text-xs uppercase tracking-[0.2em] text-[#56C271]" style={{ fontFamily: MONO }}>
                          {c.stepLabel} {String(active + 1).padStart(2, "0")}
                        </span>
                        <h3 className="mt-2 text-4xl font-bold tracking-[-0.03em] text-white lg:text-5xl" style={{ fontFamily: SANS }}>{c.steps[active].title}</h3>
                        <p className="mt-2 max-w-md text-lg text-white/80">{c.steps[active].body}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
                {/* Barra de progresso por etapa */}
                <div className="mt-4 grid grid-cols-6 gap-2" aria-hidden="true">
                  {c.steps.map((s, i) => (
                    <span key={s.title} className={`h-1 rounded-full transition-colors duration-500 ${i <= active ? "bg-[#56C271]" : "bg-white/15"}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile e movimento reduzido: lista vertical */}
      <ol className={`container flex flex-col gap-10 pb-24 ${reduce ? "" : "md:hidden"}`}>
        {c.steps.map((s, i) => (
          <li key={s.title}>
            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${SV_ASSET}/j0${i + 1}.webp`} alt={s.alt} loading="lazy" className="block w-full" />
              </div>
              <span className="mt-4 block text-xs text-[#56C271]" style={{ fontFamily: MONO }}>
                {c.stepLabel} {String(i + 1).padStart(2, "0")} / 06
              </span>
              <h3 className="mt-1 text-2xl font-bold text-white" style={{ fontFamily: SANS }}>{s.title}</h3>
              <p className="mt-1 text-white/70">{s.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ── WebGL film: sequência de quadros controlada pelo scroll ──────── */
const FRAMES = 48;
const frameSrc = (i: number) => `${SV_ASSET}/box/f${String(i).padStart(2, "0")}.webp`;

export function SvFilm() {
  const { t } = useLocale();
  const c = t.servientrega.film;
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgs = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(0);
  const [pct, setPct] = useState(0);
  const [frame, setFrame] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // Pré-carrega só quando a seção se aproxima. No celular, um quadro a cada dois.
  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const step = window.matchMedia("(max-width: 767px)").matches ? 2 : 1;
        for (let i = 0; i < FRAMES; i += step) {
          const img = new Image();
          img.decoding = "async";
          img.src = frameSrc(i);
          img.onload = () => {
            setLoaded((n) => n + 1);
            if (i === 0) draw(0);
          };
          imgs.current[i] = img;
        }
      },
      { rootMargin: "1200px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  function draw(i: number) {
    const cv = canvasRef.current;
    let img = imgs.current[i];
    for (let k = i; !img?.complete && k >= 0; k--) img = imgs.current[k];
    if (!cv || !img?.complete) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    if (cv.width !== img.naturalWidth) {
      cv.width = img.naturalWidth;
      cv.height = img.naturalHeight;
    }
    ctx.drawImage(img, 0, 0);
  }

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(FRAMES - 1, Math.round(v * (FRAMES - 1)));
    setPct(Math.round(v * 100));
    setFrame(i);
    requestAnimationFrame(() => draw(i));
  });

  const beatIndex = Math.min(c.beats.length - 1, Math.floor((pct / 100) * c.beats.length));

  return (
    <section className="bg-[#07080b]" aria-label={c.ariaLabel}>
      <div className="container pb-12 pt-24 md:pt-36">
        <SvHeading eyebrow={c.eyebrow} title={c.title} description={c.description} />
      </div>

      {reduce ? (
        <div className="container pb-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${SV_ASSET}/webgl-stages.webp`} alt={c.beats[3].text} className="w-full rounded-3xl border border-white/10" />
        </div>
      ) : (
        <div ref={ref} className="relative" style={{ height: "420vh" }}>
          <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden pt-14">
            <div className="container">
              <div className="mx-auto" style={{ maxWidth: "min(100%, calc((100svh - 200px) * 1.6))" }}>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black">
                <canvas ref={canvasRef} className="block aspect-[16/10] w-full" aria-label={c.beats[beatIndex].text} role="img" />
                {loaded < 4 && (
                  <span className="absolute inset-0 flex items-center justify-center text-xs text-white/60" style={{ fontFamily: MONO }}>
                    LOADING {loaded}/{FRAMES}
                  </span>
                )}
                {/* HUD */}
                <div className="pointer-events-none absolute left-4 top-4 flex flex-col gap-1 text-[11px] text-[#56C271] md:left-6 md:top-6" style={{ fontFamily: MONO }}>
                  <span>WEBGL FILM</span>
                  <span className="text-white/80">{c.progressLabel.toUpperCase()} {String(pct).padStart(3, "0")}%</span>
                  <span className="text-white/80">FRAME {String(frame + 1).padStart(2, "0")}/{FRAMES}</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-white/10" aria-hidden="true">
                  <div className="h-full bg-[#56C271]" style={{ width: `${pct}%` }} />
                </div>
              </div>

              {/* Batidas: 0 / 25 / 50 / 75 / 100 */}
              <ol className="mt-5 grid grid-cols-5 gap-2">
                {c.beats.map((b, i) => (
                  <li key={b.at} className={`rounded-xl border p-2 transition-colors duration-300 md:p-3 ${i === beatIndex ? "border-[#56C271]/60 bg-[#009A44]/15" : "border-white/10"}`}>
                    <span className="block text-[11px] text-[#56C271]" style={{ fontFamily: MONO }}>{b.at}</span>
                    <span className={`mt-1 hidden text-xs leading-snug md:block ${i === beatIndex ? "text-white" : "text-white/60"}`}>{b.text}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-3 text-sm text-white md:hidden">{c.beats[beatIndex].text}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container pb-24 md:pb-36">
        {/* Vídeo da cidade */}
        <Reveal className="mt-10">
          <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-white/60" style={{ fontFamily: MONO }}>{c.videoLabel}</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {["film-town.webp", "film-truck.webp"].map((f, i) => (
              <div key={f} className="overflow-hidden rounded-2xl border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${SV_ASSET}/${f}`} alt={c.videoAlt[i]} loading="lazy" className="block w-full" />
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-14">
          <SvEyebrow>{c.evidenceLabel}</SvEyebrow>
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {c.evidence.map((e, i) => (
              <li key={e.title}>
                <Reveal delay={i * 0.05} className="h-full rounded-2xl border border-white/10 p-5">
                  <p className="text-base font-bold text-white" style={{ fontFamily: SANS }}>{e.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">{e.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

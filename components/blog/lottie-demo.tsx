"use client";

import { useEffect, useRef, useState } from "react";
import type { AnimationItem } from "lottie-web";

/* Player de Lottie editorial: carrega só quando chega perto da tela, toca uma vez
   e para no estado final. As etapas (markers do arquivo) viram botões para rever
   cada passo. No modo "scroll", a animação acompanha a rolagem.
   Com movimento reduzido, mostra direto o último quadro. */

type Marker = { tm: number; cm: string; dr: number };

export function LottieDemo({ name, mode = "view" }: { name: string; mode?: "view" | "scroll" }) {
  const box = useRef<HTMLDivElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const anim = useRef<AnimationItem | null>(null);
  const [markers, setMarkers] = useState<Marker[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let disposed = false;
    let played = false;
    let onScroll: (() => void) | null = null;

    const io = new IntersectionObserver(
      async (entries) => {
        const e = entries[0];
        if (!e.isIntersecting) return;
        if (!anim.current) {
          const [{ default: lottie }, data] = await Promise.all([
            import("lottie-web/build/player/lottie_light"),
            fetch(`/lottie/${name}.json`).then((r) => r.json()),
          ]);
          if (disposed) return;
          setMarkers(data.markers ?? []);
          anim.current = lottie.loadAnimation({ container: el, renderer: "svg", loop: false, autoplay: false, animationData: data, rendererSettings: { preserveAspectRatio: "xMidYMid meet" } });
          anim.current.addEventListener("enterFrame", () => {
            const f = anim.current?.currentFrame ?? 0;
            const ms: Marker[] = data.markers ?? [];
            let idx = 0;
            ms.forEach((m, i) => { if (f >= m.tm - 1) idx = i; });
            setActive(idx);
          });
          if (reduce) {
            anim.current.goToAndStop(anim.current.totalFrames - 1, true);
            setActive((data.markers ?? []).length - 1);
            return;
          }
          if (mode === "scroll") {
            onScroll = () => {
              const r = wrap.current?.getBoundingClientRect();
              if (!r || !anim.current) return;
              const vh = window.innerHeight;
              // 0 quando o topo entra pela base da tela, 1 quando o centro passa do meio
              const prog = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.5 + r.height * 0.5)));
              anim.current.goToAndStop(prog * (anim.current.totalFrames - 1), true);
            };
            window.addEventListener("scroll", onScroll, { passive: true });
            onScroll();
            return;
          }
        }
        if (mode === "view" && !played && anim.current) {
          played = true;
          anim.current.play();
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.35 },
    );
    io.observe(el);
    return () => {
      disposed = true;
      io.disconnect();
      if (onScroll) window.removeEventListener("scroll", onScroll);
      anim.current?.destroy();
      anim.current = null;
    };
  }, [name, mode]);

  const goTo = (i: number) => {
    const a = anim.current;
    if (!a) return;
    const m = markers[i];
    const end = i + 1 < markers.length ? markers[i + 1].tm : a.totalFrames - 1;
    if (mode === "scroll") {
      a.goToAndStop(end - 1, true);
      setActive(i);
      return;
    }
    a.playSegments([m.tm, end], true);
  };

  return (
    <div ref={wrap}>
      <div ref={box} className="aspect-[16/9] w-full" aria-hidden="true" />
      {markers.length > 0 && (
        <ol className="mt-3 flex flex-wrap gap-2" aria-label="Etapas da animação">
          {markers.map((m, i) => (
            <li key={m.cm}>
              <button
                type="button"
                onClick={() => goTo(i)}
                aria-current={active === i ? "step" : undefined}
                className={`rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A48BFF] ${
                  active === i ? "border-[#8b6bff] bg-[#622FFD]/25 text-white" : i < active ? "border-white/15 text-white/70" : "border-white/10 text-white/45 hover:text-white/80"
                }`}
              >
                <span className="mr-1.5 text-[#A3E635]">{String(i + 1).padStart(2, "0")}</span>
                {m.cm}
              </button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

/* Registro: id do bloco visual → arquivo e modo. */
const LOTTIES: Record<string, { name: string; mode?: "view" | "scroll" }> = {
  "lt-hierarchy": { name: "hierarchy" },
  "lt-checkout": { name: "checkout" },
  "lt-usability": { name: "usability" },
  "lt-empathy": { name: "empathy" },
  "lt-iterate": { name: "iterate" },
  "lt-double-diamond": { name: "double-diamond", mode: "scroll" },
  "lt-atomic": { name: "atomic" },
  "lt-atomize": { name: "atomize" },
};

export const LOTTIE_VISUALS: Record<string, React.FC> = Object.fromEntries(
  Object.entries(LOTTIES).map(([id, cfg]) => {
    const C = () => <LottieDemo name={cfg.name} mode={cfg.mode} />;
    C.displayName = `Lottie(${cfg.name})`;
    return [id, C];
  }),
);

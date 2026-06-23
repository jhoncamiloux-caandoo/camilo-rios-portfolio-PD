"use client";

import { useEffect, useRef, type ReactNode } from "react";

const FRAME_COUNT = 100;
const frameSrc = (index: number) =>
  `/frames/camilo_${String(index).padStart(3, "0")}.webp`;

function drawCover(
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  width: number,
  height: number,
) {
  const imageRatio = image.width / image.height;
  const canvasRatio = width / height;
  const renderWidth = imageRatio > canvasRatio ? height * imageRatio : width;
  const renderHeight = imageRatio > canvasRatio ? height : width / imageRatio;
  const offsetX = (width - renderWidth) / 2;
  const offsetY = (height - renderHeight) / 2;

  context.clearRect(0, 0, width, height);
  context.drawImage(image, offsetX, offsetY, renderWidth, renderHeight);
}

/**
 * Casca animada do hero: ocupa 240vh de scroll com um canvas "sticky" que
 * percorre os 100 frames do rosto conforme o usuário rola a página.
 * O conteúdo (texto/CTAs/resultados) é passado como children e fica por cima.
 */
export function HeroCanvas({ children }: { children: ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    const image = imagesRef.current[index];
    if (!canvas || !image?.complete || image.naturalWidth === 0) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const pixelRatio = window.devicePixelRatio || 1;
    const { width, height } = canvas.getBoundingClientRect();
    if (width === 0 || height === 0) return;

    canvas.width = Math.floor(width * pixelRatio);
    canvas.height = Math.floor(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    drawCover(context, image, width, height);
  };

  // Pré-carrega os frames e desenha o primeiro assim que disponível.
  useEffect(() => {
    let isMounted = true;
    const images = Array.from({ length: FRAME_COUNT }, (_, index) => {
      const image = new Image();
      image.src = frameSrc(index);
      return image;
    });
    imagesRef.current = images;

    const drawFirst = () => {
      if (isMounted) renderFrame(0);
    };
    if (images[0].complete) drawFirst();
    else images[0].onload = drawFirst;

    return () => {
      isMounted = false;
    };
  }, []);

  // Liga o frame ao progresso de scroll da seção.
  useEffect(() => {
    let animationFrame = 0;

    const update = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      // Guarda contra divisão por zero/negativo (seção menor que a viewport).
      const progress = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0;
      const nextFrame = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.round(progress * (FRAME_COUNT - 1))),
      );

      if (nextFrame !== frameRef.current) {
        frameRef.current = nextFrame;
        renderFrame(nextFrame);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(update);
    };

    const onResize = () => renderFrame(frameRef.current);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    update();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative h-[240vh] bg-light text-dark"
    >
      {/*
        Mobile: coluna — texto em cima (fluxo), imagem animada num box embaixo.
        Desktop (md+): overlay clássico — canvas full-bleed atrás do texto.
      */}
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden md:block">
        {/* TEXTO — fluxo no topo (mobile) / overlay centralizado (desktop) */}
        <div className="relative z-20 shrink-0 pt-16 md:absolute md:inset-0 md:z-10 md:flex md:h-full md:items-center md:pt-0">
          {children}
        </div>

        {/* IMAGEM ANIMADA — box emoldurado embaixo (mobile) / full-bleed atrás (desktop) */}
        <div className="relative z-0 mx-4 mb-4 min-h-0 flex-1 overflow-hidden rounded-3xl border border-black/[0.06] bg-[#f2f2f4] shadow-[0_20px_60px_-24px_rgba(10,10,10,0.18)] md:absolute md:inset-0 md:m-0 md:flex-none md:rounded-none md:border-0 md:shadow-none">
          <canvas
            ref={canvasRef}
            aria-label="Sequência animada de Jhon Camilo Rios"
            className="absolute inset-0 h-full w-full"
          />
        </div>

        {/* Véu de luz: apenas desktop à esquerda — mantém a área de texto limpa */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[5] hidden md:block bg-[linear-gradient(90deg,#f2f2f4_0%,rgba(242,242,244,0.86)_30%,rgba(242,242,244,0)_58%)]"
        />
      </div>
    </section>
  );
}

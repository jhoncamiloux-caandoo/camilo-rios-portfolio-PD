"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

// --- SHADER: fundo claro #F8F8F8, linhas escuras 35% opacidade, distorção por mouse ---
function CyberneticGridShader() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const clock = new THREE.Clock();

    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec2 iMouse;

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
        vec2 mouse = (iMouse - 0.5 * iResolution.xy) / iResolution.y;

        float t = iTime * 0.15;
        float mouseDist = length(uv - mouse);

        // Distorção sutil orientada pelo cursor
        float warp = sin(mouseDist * 12.0 - t * 3.0) * 0.04;
        warp *= smoothstep(0.5, 0.0, mouseDist);
        uv += warp;

        // Grade matemática
        vec2 gridUv = abs(fract(uv * 12.0) - 0.5);
        float line = pow(1.0 - min(gridUv.x, gridUv.y), 40.0);

        // Fundo Branco Gelo (#F8F8F8 ≈ 0.972)
        vec3 bg = vec3(0.972, 0.972, 0.972);

        // Linhas pretas suaves, intensidade máx 35%
        float gridAlpha = line * 0.35;
        vec3 finalColor = mix(bg, vec3(0.05, 0.05, 0.05), gridAlpha);

        // Pulso cinza suave para profundidade
        float pulse = sin(uv.x * 10.0 + t * 2.0) * cos(uv.y * 10.0 + t * 1.5);
        pulse = smoothstep(0.7, 1.0, pulse);
        finalColor -= vec3(pulse * 0.03) * line;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2() },
      iMouse: {
        value: new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2),
      },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    });
    const geometry = new THREE.PlaneGeometry(2, 2);
    scene.add(new THREE.Mesh(geometry, material));

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.iResolution.value.set(w, h);
    };
    window.addEventListener("resize", onResize);
    onResize();

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      uniforms.iMouse.value.set(
        e.clientX - rect.left,
        rect.height - (e.clientY - rect.top),
      );
    };
    window.addEventListener("mousemove", onMouseMove);

    renderer.setAnimationLoop(() => {
      uniforms.iTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    });

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      renderer.setAnimationLoop(null);
      renderer.domElement.parentNode?.removeChild(renderer.domElement);
      material.dispose();
      geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  );
}

// --- DADOS ---
const pillars = [
  {
    title: "Growth",
    desc: "Arquitetura orientada por dados de conversão. Construção de loops de engajamento baseados em testes A/B estruturados e leitura analítica do funil para escalar canais de tração.",
  },
  {
    title: "AI",
    desc: "Implementação de camadas inteligentes nas interfaces. Fluxos adaptativos orientados a contexto com automação de ponta para otimizar processos analíticos e operacionais.",
  },
  {
    title: "CRO",
    desc: "Eliminação sistemática de atritos em checkouts e funis de aquisição. Redesenho de jornadas focado em usabilidade cognitiva e elevação de conversões líquidas em tempo real.",
  },
  {
    title: "SaaS",
    desc: "Desenvolvimento de Design Systems e ecossistemas consistentes de alta fidelidade. Estruturas pensadas para sustentar escalabilidade técnica e uso diário intenso.",
  },
];

// --- SEÇÃO ---
export function Impact() {
  return (
    <section
      id="impacto"
      className="relative overflow-hidden border-b border-neutral-200 bg-[#F8F8F8] py-32 text-[#0A0A0A]"
    >
      <CyberneticGridShader />

      <div className="container relative z-10 flex flex-col gap-24">
        {/* Cabeçalho: grid 12 cols — H2 em 7, parágrafo em 5 */}
        <div className="grid grid-cols-1 items-start gap-gutter md:grid-cols-12">
          <div className="flex flex-col gap-3 md:col-span-7">
            <span className="block font-sans text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
              Impacto &amp; Negócios
            </span>
            <h2 className="font-display text-[48px] font-semibold leading-[1.05] tracking-tight text-[#0A0A0A] md:text-[56px]">
              Design como motor de crescimento.
            </h2>
          </div>

          <div className="pt-0 md:col-span-5 md:pt-8">
            <p className="font-sans text-lg leading-relaxed text-neutral-600">
              O trabalho combina estratégia de produto de ponta, sistemas
              visuais robustos e execução técnica detalhada para transformar
              problemas ambiciosos em jornadas de produto extremamente limpas,
              mensuráveis e escaláveis.
            </p>
          </div>
        </div>

        {/* Cards glassmorphic 4 colunas */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {pillars.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col gap-4 rounded-2xl border border-neutral-200/60 bg-white/50 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-neutral-300 hover:bg-white/80 hover:shadow-md"
            >
              <h3 className="font-display text-2xl font-semibold tracking-tight text-[#0A0A0A] transition-colors duration-300 group-hover:text-primary">
                {item.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-neutral-500">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

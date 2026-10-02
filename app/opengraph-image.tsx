import { ImageResponse } from "next/og";

export const alt = "Jhon Camilo Rios, Senior Product Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Imagem padrão de compartilhamento: vale para as páginas sem capa própria. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "linear-gradient(135deg, #0A0A0A 0%, #1a1038 60%, #622FFD 140%)", color: "white", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: "#A48BFF" }}>PRODUCT DESIGN · GROWTH · IA</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>Jhon Camilo Rios</div>
          <div style={{ fontSize: 40, marginTop: 16, color: "rgba(255,255,255,0.8)" }}>Senior Product Designer em SaaS B2B</div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "rgba(255,255,255,0.6)" }}>camilo-rios-portfolio.vercel.app</div>
      </div>
    ),
    size,
  );
}

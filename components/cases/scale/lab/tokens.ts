/* Tokens do Scale usados nos capítulos interativos (mesmos valores do case). */
export type Tier = { id: string; value: string; ref?: string };

export const PRIMITIVES: Tier[] = [
  { id: "violet.500", value: "#622FFD" },
  { id: "violet.300", value: "#A48BFF" },
  { id: "neutral.950", value: "#0A0A0A" },
  { id: "neutral.0", value: "#FFFFFF" },
  { id: "neutral.400", value: "#9D9D9D" },
];
export const SEMANTIC: Tier[] = [
  { id: "accent.solid", value: "#622FFD", ref: "violet.500" },
  { id: "accent.text", value: "#A48BFF", ref: "violet.300" },
  { id: "bg.canvas", value: "#0A0A0A", ref: "neutral.950" },
  { id: "fg.default", value: "#FFFFFF", ref: "neutral.0" },
  { id: "fg.muted", value: "#9D9D9D", ref: "neutral.400" },
];
export const COMPONENT: Tier[] = [
  { id: "button.primary.bg", value: "#622FFD", ref: "accent.solid" },
  { id: "link.fg", value: "#A48BFF", ref: "accent.text" },
  { id: "card.bg", value: "#0A0A0A", ref: "bg.canvas" },
  { id: "button.primary.fg", value: "#FFFFFF", ref: "fg.default" },
  { id: "caption.fg", value: "#9D9D9D", ref: "fg.muted" },
];

// Luminância relativa e contraste WCAG 2.x
export function luminance(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const v = parseInt(hex.slice(i, i + 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
export function contrast(a: string, b: string) {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

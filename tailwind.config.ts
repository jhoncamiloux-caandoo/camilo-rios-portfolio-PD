import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1440px" },
    },
    extend: {
      colors: {
        primary: "#622FFD",
        secondary: "#F94706",
        dark: "#0A0A0A",
        surface: "#121212",
        light: "#F8F8F8",
        white: "#FFFFFF",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #6670FF, #3841B9)',
      },
      fontFamily: {
        display: ['var(--font-degular)', 'sans-serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      fontSize: {
        'h1': ['96px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['72px', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h3': ['48px', { lineHeight: '1.2' }],
        'body': ['18px', { lineHeight: '1.6' }],
        'caption': ['14px', { lineHeight: '1.5' }],
      },
      gridTemplateColumns: { '12': 'repeat(12, minmax(0, 1fr))' },
      gap: { 'gutter': '32px' }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

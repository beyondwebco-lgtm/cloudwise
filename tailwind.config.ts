import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          midnight: "#0B1220",
          navy: "#142B4A",
          electric: "#2563EB",
          cyan: "#22D3EE",
          gold: "#D4AF37",
          softgrey: "#F3F6FA",
          slate: "#64748B",
          text: "#172033",
        },
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        'premium': '0 20px 40px -15px rgba(11, 18, 32, 0.08), 0 0 1px 1px rgba(11, 18, 32, 0.04)',
        'premium-hover': '0 30px 60px -15px rgba(37, 99, 235, 0.15), 0 0 1px 1px rgba(34, 211, 238, 0.2)',
        'glow-cyan': '0 0 25px -5px rgba(34, 211, 238, 0.3)',
        'glow-electric': '0 0 30px -5px rgba(37, 99, 235, 0.35)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-grid': 'radial-gradient(circle, rgba(34, 211, 238, 0.12) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
export default config;

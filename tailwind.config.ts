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
        navy: {
          DEFAULT: "#071B38",
          dark: "#051329",
          light: "#0D274D",
        },
        corporate: {
          DEFAULT: "#123B73",
          dark: "#0E2F5C",
          light: "#1B4F99",
        },
        primary: {
          blue: "#2563EB",
          hover: "#1D4ED8",
          dark: "#1E40AF",
        },
        sky: {
          DEFAULT: "#60A5FA",
          light: "#93C5FD",
          subtle: "#BFDBFE",
        },
        ice: {
          DEFAULT: "#EFF6FF",
          light: "#F5F9FF",
        },
        surface: {
          DEFAULT: "#F8FAFC",
          card: "#FFFFFF",
        },
        slate: {
          primary: "#0F172A",
          secondary: "#475569",
          muted: "#64748B",
          border: "#DBE5F0",
        },
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(7, 27, 56, 0.05), 0 1px 2px rgba(7, 27, 56, 0.03)',
        'card': '0 4px 20px -2px rgba(7, 27, 56, 0.06), 0 2px 6px -1px rgba(7, 27, 56, 0.03)',
        'card-hover': '0 16px 36px -4px rgba(37, 99, 235, 0.12), 0 4px 12px -2px rgba(7, 27, 56, 0.04)',
        'glow-blue': '0 0 35px -5px rgba(37, 99, 235, 0.25)',
        'glow-sky': '0 0 25px -3px rgba(96, 165, 250, 0.3)',
      },
      animation: {
        'flow-energy': 'flowEnergy 12s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'node-ping': 'nodePing 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        flowEnergy: {
          '0%, 100%': { strokeDashoffset: '0' },
          '50%': { strokeDashoffset: '-120' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        nodePing: {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
export default config;

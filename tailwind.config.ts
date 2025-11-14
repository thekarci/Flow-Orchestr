import type { Config } from "next/font";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        card: "#1A1A1A",
        primary: "#3B82F6",
        accent: "#06B6D4",
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'spin-reverse': 'spin-reverse 20s linear infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'neural-pulse': 'neural-pulse 2s ease-in-out infinite',
        'move-across': 'move-across 8s linear infinite',
        'grid-pulse': 'grid-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.15)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(12deg)' },
          '50%': { transform: 'translateY(-25px) rotate(12deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(45deg)' },
          '33%': { transform: 'translateY(-20px) translateX(15px) rotate(60deg)' },
          '66%': { transform: 'translateY(10px) translateX(-15px) rotate(30deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.3)' },
        },
        'neural-pulse': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)', boxShadow: '0 0 10px currentColor' },
          '50%': { opacity: '1', transform: 'scale(1.3)', boxShadow: '0 0 20px currentColor, 0 0 30px currentColor' },
        },
        'move-across': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'grid-pulse': {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
};
export default config;


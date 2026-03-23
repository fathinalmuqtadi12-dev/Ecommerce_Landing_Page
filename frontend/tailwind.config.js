import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default  {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        formula: ["Formula", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        "poppins-bold": ["Poppins-Bold", "sans-serif"],
      },
      colors: {
        primary: "#1E293B",
        secondary: "#10B981",
        dark: "#111827",
      },
      keyframes: {
        runtext: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeUp: {
          "0%": { transform: "translateY(0%), opacity(50%)"},
          "100%": {transform: "translateY(100%), opacity(100%)"},
        },
        updown: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        runtext: "runtext 20s linear infinite",
        fadeUp: "fadeUp 2s ease-in-out",
        updown: "updown 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};



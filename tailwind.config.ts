import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        clay: {         // couleur “brun rosé” pour titres & CTA
          50:  "#fbf7f5",
          100: "#f5ebe7",
          200: "#ead6ce",
          300: "#d9b7aa",
          400: "#c69685",
          500: "#b5836d", // ★ ton principal
          600: "#9c6f5d",
          700: "#7f594a", // pour textes accentués
          800: "#684a3f",
          900: "#573e36",
        },
        ink:  "#2f3a40",   // gris ardoise foncé pour le texte
        mist: "#f5f5f4",   // fond très clair (sections)
        line: "#cfa996",   // bordures/clés (proche du clay-300/400)
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,.06)",
      },
      borderRadius: {
        xl2: "14px",
      },
    },
  },
  plugins: [],
} satisfies Config;

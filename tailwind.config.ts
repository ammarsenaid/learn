import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F5EF",
        navy: "#0F1D3A",
        amber: "#C69226",
        skysoft: "#DDEBFF",
      },
      borderRadius: {"2xl": "1rem"},
      boxShadow: {premium: "0 12px 30px rgba(15,29,58,0.12)"}
    },
  },
  plugins: [],
} satisfies Config;

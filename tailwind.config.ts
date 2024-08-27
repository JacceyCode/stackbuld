import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-montserrat)"],
      },
      colors: {
        background: "#434343",
        background2: "#d8d8d8",
      },
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
export default config;

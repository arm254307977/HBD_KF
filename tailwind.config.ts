import type { Config } from "tailwindcss";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        cute: ["Pacifico", "cursive"],
        fun: ["Fredoka", "sans-serif"],
      },
      lineHeight: {
        relaxed: "1.8",
      },
    },
  },
  plugins: [],
} satisfies Config;

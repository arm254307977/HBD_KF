import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hot-pink": "#E37893",
        "seafoam-green": "#B5EECB",
        cream: "#FBFBEB",
        nude: "#C38F6B",
      },
      fontFamily: {},
      lineHeight: {
        relaxed: "1.8",
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        repoCardEnter: "cardEnter 1s forwards"
      },
      keyframes: {
        cardEnter: {
          "0%": { opacity: "0%", translate: "0px 160px" },
          "100%": { opacity: "100%", translate: "0px 0px" }
        }
      },
      fontFamily: {
        Kodemono: ["Kode-Mono", "monospace"]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

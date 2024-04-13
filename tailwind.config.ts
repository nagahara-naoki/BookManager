import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      gray: "var(--color-gray)",
      white: "var(--color-white)",
      green: "var(--color-green)",
      red: "var(--color-red)",
      radious: "var(--radious)",
      // 他の色を定義する場合はここに追加してください
    },
  },
  plugins: [],
};
export default config;

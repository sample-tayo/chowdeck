import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0c513f",
        white: "#ffffff",
        lightYellow: "#fff3cc",
        gold: "#ffc501",
        orange: "#ff884d",
        green: "#02c27f",
        purple: "#8c77ec",
        gray: "#d1d5d8",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        default: "#981B1E",
      },
      transitionProperty: {
        height: "height",
      },
      colors: {
        default: "#981B1E",
        defaultText: "#3B4358",
        company: "rgba(152, 27, 30, 0.1)",
        type: "rgba(128,130,241,0.1)",
        hoverJob: "rgb(255 249 249 / 70%)",
      },
    },
  },
  plugins: [],
};
export default config;

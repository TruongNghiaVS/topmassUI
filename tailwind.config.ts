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
      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
      screens: {
        "max-1280": { max: "1280px" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        bgHeaderJobCustom:
          "linear-gradient(180deg, rgba(248,158,27,0.8491990546218487) 0%, rgba(244,222,191,0.6) 45%, rgba(234,233,232,1) 100%)",
      },
      backgroundColor: {
        default: "#981B1E",
        swiperPagin: "#F37A20",
      },
      transitionProperty: {
        height: "height",
      },
      colors: {
        default: "#D14B00",
        defaultText: "#D14B00",
        company: "rgba(152, 27, 30, 0.1)",
        type: "rgba(128,130,241,0.1)",
        hoverJob: "rgb(255 249 249 / 70%)",
        swiperPagin: "#F37A20",
      },
      boxShadow: {
        hoverShadow: "0 10px 30px rgba(241, 182, 182, 0.2)",
        popup: "0 4px 8px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;

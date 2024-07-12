import { Barlow, Public_Sans } from "next/font/google";

export const secondaryFont = Barlow({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const typography = {
  fontSecondaryFamily: secondaryFont.style.fontFamily,
} as const;

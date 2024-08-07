"use client";
import "./globals.css";
import { Header } from "@/partial/header";
import { Footer } from "@/partial/footer";
// import ThemeProvider from "@/theme";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import LoadingScreen from "@/component/loading-screen";

const roboto = localFont({
  src: [
    {
      path: "../../public/fonts/Roboto-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-roboto", // Optional: Define a CSS variable for the font
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const pathValidated = ["/dang-ky"];
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-roboto`}>
        {!pathValidated.includes(path) && <Header />}
        <main className="min-h-screen m-auto relative bg-[#EAE9E8]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

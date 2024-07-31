import "./globals.css";
import { Header } from "@/partial/header";
import { Footer } from "@/partial/footer";
// import ThemeProvider from "@/theme";
import localFont from "next/font/local";

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
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-roboto`}>
        <Header />
        <main className="min-h-screen m-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

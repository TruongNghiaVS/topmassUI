"use client";
import "./globals.css";
import { Header } from "@/partial/header";
import { Footer } from "@/partial/footer";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { LoadingProvider } from "./context/loading";
import GlobalLoadingIndicator from "@/component/loading-componet";
import useAuth from "@/component/hook/useAuthToken";
import { Suspense } from "react";
import { SWRConfig } from "swr";
import { ModalLogin } from "@/component/modal-login";

dayjs.extend(customParseFormat);

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
  const pathValidated = [
    "/dang-ky",
    "/dang-nhap",
    "/quen-mat-khau",
    "/khoi-tao-mat-khau",
    "/share-link",
  ];

  useAuth();
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/imgs/favicon.png" type="image/png" />
        <meta
          name="google-site-verification"
          content="FfUAN2J0OdNel1OUtwxakoT5ylsBMqkatd1dVc1azh8"
        />
      </head>
      <body className={`${roboto.variable} font-roboto`}>
        <LoadingProvider>
          <Suspense>
            <SWRConfig
              value={{
                revalidateOnFocus: false, // Disable revalidation on focus
              }}
            >
              <GlobalLoadingIndicator />
              {!pathValidated.some((link) => path.includes(link)) && (
                <div className="relative z-[10]">
                  <Header />
                </div>
              )}
              <main className="min-h-screen m-auto relative bg-[#EAE9E8]">
                {children}
                <ToastContainer autoClose={2000} />
              </main>
              {!pathValidated.includes(path) && <Footer />}
            </SWRConfig>
          </Suspense>
          <ModalLogin />
        </LoadingProvider>
      </body>
    </html>
  );
}

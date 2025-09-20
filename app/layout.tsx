"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      // Wait for the page to load before registering the service worker
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log(
              "Service Worker registered with scope:",
              registration.scope
            );
          })
          .catch((error) => {
            console.error("Service Worker registration failed:", error);
          });
      });
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Fam Trip Chypre</title>
        <meta name="description" content="Secret AfterWork App" />
        <link
          rel="apple-touche-icon"
          href="/images/icons/apple-touch-icon.png"
        ></link>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-startup-image"
          href="/images/icons/android-chrome-512x512.png"
          sizes="512x512"
        />
        <meta name="theme-color" content="#398024" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`${inter.variable} relative antialiased md:mx-auto md:max-w-3xl`}
      >
        {children}
      </body>
    </html>
  );
}

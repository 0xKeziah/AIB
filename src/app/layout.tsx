import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
title: "Agents In Black | $AIB",
  description:
    "Two AI agents. One mission. Buyback $AIB. Powered by pump.fun tokenized agents.",
  openGraph: {
    title: "Agents In Black | $AIB",
    description:
      "Two AI agents. One mission. Buyback $AIB.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agents In Black | $AIB",
    description:
      "Two AI agents. One mission. Buyback $AIB.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./../components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rizal Kalinga",
  description:
    "The Local History and Rich Cultural Heritage of Rizal Province of Kalinga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-body-bg antialiased"
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main className="grow w-full text-body-text bg-body-bg">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

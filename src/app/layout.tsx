import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Personal Website",
  description: "Welcome to my personal website featuring my projects, about me, and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans">
      <body
        className={`${interTight.variable} antialiased font-sans`}
      >
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

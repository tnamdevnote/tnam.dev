import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { ThemeProvider } from "./components/theme/theme-provider";

export const metadata: Metadata = {
  title: "Taek B. Nam",
  description: "Welcome to tnamdevnote",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}

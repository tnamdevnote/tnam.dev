import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DarkModeProvider } from "./context/darkmodeContext";
// import { ThemeProvider } from "./components/theme/theme-provider";

export const metadata: Metadata = {
  title: "tnamdevnote",
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
      <DarkModeProvider>
        <body className="dark:bg-dark-background bg-background transition-colors">
          {children}
        </body>
      </DarkModeProvider>
    </html>
  );
}

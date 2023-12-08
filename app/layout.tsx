import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { DarkModeProvider } from "./context/darkmodeContext";
import { ThemeProvider } from "./context/themeProvider";

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
    <html suppressHydrationWarning lang="en" className={inter.className}>
      <body className="bg-background transition-colors dark:bg-dark-background">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

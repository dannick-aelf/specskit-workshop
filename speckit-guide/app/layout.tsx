import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReadingModeProvider } from "./reading-mode-provider";
import { ThemeProvider } from "./theme-provider";
import { LanguageProvider } from "./language-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SpecKit - Turn Ideas Into Reality",
  description: "SpecKit helps teams turn ideas into working software through structured planning and clear communication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <ReadingModeProvider>
              {children}
            </ReadingModeProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

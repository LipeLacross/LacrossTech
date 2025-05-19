import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/main.sass";

const geistSans = Geist({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-geist-sans'
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  title: "LacrossTech",
  description: "Soluções digitais de alta performance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning={true}
    >
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}

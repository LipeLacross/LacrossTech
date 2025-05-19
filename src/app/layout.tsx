import type { Metadata } from "next";
import { Montserrat, Krona_One } from "next/font/google";
import "./styles/main.sass";

const kronaOne = Krona_One({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-krona-one'
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['400', '600'],
  variable: '--font-montserrat'
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
      className={`${kronaOne.variable} ${montserrat.variable}`}
      suppressHydrationWarning={true}
    >
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}

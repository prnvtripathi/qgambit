import type { Metadata } from "next";
import "./globals.css";
import { Inter, Instrument_Serif, Italianno } from "next/font/google";
import Providers from "@/components/providers";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"]
});

const italianno = Italianno({
  subsets: ["latin"],
  variable: "--font-italianno",
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "QGambit: Your Friends and Chess",
  description: "A platform for playing chess with friends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${serif.variable} ${italianno.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

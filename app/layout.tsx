import type { Metadata } from "next";
import { Geist, Unbounded, Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const unbounded = Unbounded({
  weight: ["700", "800", "900"],
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Vortex Студио — Креатив маркетингийн агентлаг",
  description:
    "Брэндийг амьдруулдаг креатив студио. Брэнд систем, дизайн, мотион, кампанит ажил — нэг дороос.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="mn"
      className={`${geistSans.variable} ${unbounded.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-clip font-[var(--font-manrope)]">
        {children}
      </body>
    </html>
  );
}

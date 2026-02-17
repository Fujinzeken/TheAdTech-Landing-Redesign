import type { Metadata } from "next";
import { Space_Grotesk, Inter, Syne } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title:
    "The AdTech — Custom Software Development from Uzbekistan's Expert Team",
  description:
    "We build software that redefines what's possible. Expert-led web, mobile, cloud, and backend development from Uzbekistan's top engineering team.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${syne.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}

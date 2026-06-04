import type { Metadata } from "next";
import { Montserrat, Mulish, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";

const displayFont = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const sansFont = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Gedo Holdings Ltd: Building Dreams, Enhancing Lives.",
  description:
    "NCA registered construction company in Nairobi, Kenya. Home construction, office partitioning, and repair & renovation services since 2018.",
  verification: {
    google: "HSV5p3dNoVTDLsFGcLba_wPYgvOzxzsIxBxkEXR-RSM",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-concrete-50 text-ink-900">
        <Header />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}

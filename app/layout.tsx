import type { Metadata } from "next";
import { Montserrat, Mulish, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import { SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";

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

const ogImageUrl = `${SITE_URL}/opengraph-image.png`;
const logoUrl = `${SITE_URL}/icon.png`;

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: SITE_NAME,
  legalName: "Gedo Holdings Ltd",
  url: SITE_URL,
  logo: logoUrl,
  image: ogImageUrl,
  telephone: "+254722901959",
  email: "gedohomes@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Grey Park Annex, Eastern Bypass",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  areaServed: "Kenya",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/gedoholdings",
    "https://www.instagram.com/gedohomes",
  ],
  priceRange: "$$",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Gedo Holdings",
  },
  description:
    "Building across Kenya since 2018. NCA registered for home construction, architectural design, office partitioning, cabro, precast panels and renovations.",
  openGraph: {
    title: SITE_TITLE,
    description:
      "Building across Kenya since 2018. NCA registered for home construction, architectural design, office partitioning, cabro, precast panels and renovations.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Gedo Holdings construction and design portfolio across Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Building across Kenya since 2018. NCA registered for home construction, architectural design, office partitioning, cabro, precast panels and renovations.",
    images: [ogImageUrl],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-concrete-50 text-ink-900">
        <Header />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}

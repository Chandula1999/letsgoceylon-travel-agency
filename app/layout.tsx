import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://letsgoceylon.com"),
  title: "Lets Go Ceylon Tours | Sri Lanka Travel Agency & Taxi Service",
  description: "Experience the magic of Sri Lanka with curated tour packages and reliable taxi services. Book your island adventure today.",
  keywords: ["Sri Lanka tours", "Ceylon travel", "Sri Lanka taxi", "tour packages", "travel agency Sri Lanka"],
  authors: [{ name: "Lets Go Ceylon Tours" }],
  creator: "Lets Go Ceylon Tours",
  publisher: "Lets Go Ceylon Tours",

  // Open Graph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://letsgoceylon.com",
    siteName: "Lets Go Ceylon Tours",
    title: "Lets Go Ceylon Tours | Sri Lanka Travel Agency & Taxi Service",
    description: "Experience the magic of Sri Lanka with curated tour packages and reliable taxi services. Book your island adventure today.",
    images: [
      {
        url: "/logo-icon.png",
        width: 512,
        height: 512,
        alt: "Lets Go Ceylon Tours Logo",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary",
    title: "Lets Go Ceylon Tours | Sri Lanka Travel Agency & Taxi Service",
    description: "Experience the magic of Sri Lanka with curated tour packages and reliable taxi services.",
    images: ["/logo-icon.png"],
  },

  // Icons configuration
  icons: {
    icon: [
      { url: "/icon.png", sizes: "any" },
      { url: "/logo-icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/logo-icon.png"],
  },

  // Manifest for PWA
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

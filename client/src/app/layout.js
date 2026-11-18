import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site"; //The buisness name will added there, from it the name will be used elsewhere. MQ
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ShowroomActions from "@/components/layout/ShowroomActions";
import LocalBusinessJsonLd from "@/components/seo/LocalBusinessJsonLd";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
});

// "cover" lets the page reach the edges of phones with a home bar, so the
// bottom bar can pad itself with env(safe-area-inset-bottom).
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`, //Getting the name from site.js file, so that it can be used in other places as well. MQ
  },
  description: `Custom kitchen cabinets, bathroom vanities, closets and countertops, made and installed across the GTA. Visit our ${site.address.city} showroom.`,
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_CA",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="focus:rounded-button focus:bg-primary focus:text-surface sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2"
        >
          Skip to main content
        </a>

        <Header />

        <main
          id="main-content"
          tabIndex={-1}
          className="flex-1 focus:outline-none"
        >
          {children}
        </main>

        <Footer />

        <ShowroomActions />
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}

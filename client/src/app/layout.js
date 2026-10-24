import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site"; //The buisness name will added there, from it the name will be used elsewhere. MQ
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`, //Getting the name from site.js file, so that it can be used in other places as well. MQ
  },
  description: "TODO: client description",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${body.variable} h-full scroll-pt-16 antialiased`}
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
      </body>
    </html>
  );
}

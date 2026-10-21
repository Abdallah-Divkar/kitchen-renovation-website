import { Inter } from "next/font/google";
import "./globals.css";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "TODO: Business Name",
    template: "%s | TODO: Business Name",
  },
  description: "TODO: client description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

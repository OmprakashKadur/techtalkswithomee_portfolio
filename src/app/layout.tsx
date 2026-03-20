import type { Metadata } from "next";
import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import CustomCursor from "@/components/shared/CustomCursor";
import { Analytics } from "@vercel/analytics/next";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Omprakash Kadur | Websites That Convert — Lead Generation for Local India",
  description:
    "I build high-performance, multi-tenant websites for salons, clinics, and businesses in Tier 2 & 3 cities. WhatsApp lead capture, Google Business, and measurable ROI. techtalkswithomee.com",
  keywords: [
    "web developer bangalore",
    "freelance web developer",
    "next.js developer",
    "website design india",
    "lead generation",
    "business website",
    "multi-tenant websites",
    "whatsapp lead capture",
    "local seo",
    "techtalkswithomee",
  ],
  authors: [{ name: "Omprakash Kadur" }],
  openGraph: {
    title: "Omprakash Kadur | techtalkswithomee.com",
    description:
      "Helping local Indian businesses grow online with high-converting websites.",
    type: "website",
    url: "https://techtalkswithomee.com",
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
      className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

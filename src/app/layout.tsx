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
  metadataBase: new URL("https://www.techtalkswithomee.com"),
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Omprakash Kadur | Websites That Convert — techtalkswithomee.com",
    description:
      "Helping local Indian businesses grow online with high-converting websites. 8+ live projects across salons, clinics, cafes, and more.",
    type: "website",
    url: "https://www.techtalkswithomee.com",
    siteName: "techtalkswithomee",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Omprakash Kadur — Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omprakash Kadur | Websites That Convert",
    description:
      "Helping local Indian businesses grow online with high-converting websites.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "UlofXwZWQkyTKXOMawEtHSzrrKfvFioimGc-SIYpxF8",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Omprakash Kadur",
  url: "https://www.techtalkswithomee.com",
  jobTitle: "Web Developer",
  worksFor: {
    "@type": "Organization",
    name: "techtalkswithomee",
  },
  sameAs: [
    "https://github.com/OmprakashKadur",
    "https://linkedin.com/in/omprakashkm",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressCountry: "IN",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "techtalkswithomee",
  url: "https://www.techtalkswithomee.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.techtalkswithomee.com/work?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B16RSMNLH1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B16RSMNLH1');
            `,
          }}
        />
      </head>
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

import type { Metadata } from "next";
import WorkPageClient from "./WorkPageClient";

export const metadata: Metadata = {
  title: "Projects & Client Sites | Omprakash Kadur — techtalkswithomee.com",
  description:
    "Portfolio of 8+ live websites built for salons, clinics, cafes, and local businesses across India. View live demos of Next.js projects deployed on Vercel.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Projects & Client Sites | Omprakash Kadur",
    description:
      "8+ live websites built for salons, clinics, cafes, and local businesses across India. View live demos.",
    type: "website",
    url: "https://www.techtalkswithomee.com/work",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Omprakash Kadur — Portfolio Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects & Client Sites | Omprakash Kadur",
    description:
      "8+ live websites built for salons, clinics, cafes, and local businesses across India.",
    images: ["/og-image.jpg"],
  },
};

export default function WorkPage() {
  return <WorkPageClient />;
}

import type { Metadata } from "next";
import Link from "next/link";
import HireMeCTA from "@/components/shared/HireMeCTA";

export const metadata: Metadata = {
  title: "Restaurant Website Design India: Menu, Booking & SEO | techtalkswithomee.com",
  description:
    "What makes a restaurant website actually bring customers? Learn the must-have features for restaurant and cafe websites in India, with real examples from Urban Brew Cafe.",
  keywords: [
    "restaurant website design india",
    "cafe website india",
    "restaurant website features",
    "food website design",
    "online menu website india",
    "restaurant seo india",
  ],
  alternates: {
    canonical: "/blog/restaurant-website-design-india",
  },
  openGraph: {
    title: "Restaurant Website Design India: Menu, Booking & SEO",
    description:
      "Must-have features for restaurant and cafe websites in India. Real examples from Urban Brew Cafe.",
    type: "article",
    url: "https://www.techtalkswithomee.com/blog/restaurant-website-design-india",
    publishedTime: "2026-04-23",
    tags: ["Restaurant", "Food", "Website Design", "India"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Website Design India: Menu, Booking & SEO",
    description: "Must-have features for restaurant websites in India.",
  },
};

const features = [
  {
    num: "01",
    title: "Digital Menu with Photos",
    desc: "A beautiful, easy-to-read menu with high-quality photos of your dishes. Organize by category: starters, mains, desserts, beverages. Include prices, dietary tags (veg, vegan, gluten-free), and spice levels.",
    why: "78% of customers check a restaurant's menu online before visiting. A digital menu with photos increases table bookings by 35%.",
  },
  {
    num: "02",
    title: "Table Reservation System",
    desc: "Let customers book tables directly through your website. Collect date, time, party size, and special requests. Send confirmation via WhatsApp and email.",
    why: "Online reservations reduce no-shows by 40% and free up staff from phone booking duties. Customers prefer booking at their convenience.",
  },
  {
    num: "03",
    title: "WhatsApp Ordering",
    desc: "A floating WhatsApp button that opens a pre-filled message for table booking, takeaway orders, or enquiries. Include your menu PDF link in the auto-response.",
    why: "Indians love WhatsApp for everything. A restaurant that takes orders via WhatsApp sees 50% more enquiries than one that only takes phone calls.",
  },
  {
    num: "04",
    title: "Food Photo Gallery",
    desc: "A dedicated gallery showcasing your best dishes, restaurant ambiance, and happy customers. Professional food photography makes mouths water and drives visits.",
    why: "Restaurants with professional food photos on their website get 30% more online orders. Visual appeal is everything in the food business.",
  },
  {
    num: "05",
    title: "Google Maps Integration",
    desc: "Embed Google Maps with a Get Directions button. Show your exact location, parking information, and nearby landmarks. Link to your Google Business Profile.",
    why: "64% of customers use Google Maps to find restaurants. A direct directions button removes friction and increases foot traffic.",
  },
  {
    num: "06",
    title: "Customer Reviews & Testimonials",
    desc: "Display your best Google and Zomato reviews directly on your homepage. Show ratings, customer photos, and highlight specific dishes people loved.",
    why: "92% of diners read online reviews before choosing a restaurant. Social proof from real customers builds trust instantly.",
  },
  {
    num: "07",
    title: "Mobile-First Design",
    desc: "Your website must look perfect on mobile. Most customers browse restaurant websites on their phones while deciding where to eat. Large buttons, readable text, and fast loading are essential.",
    why: "70% of restaurant searches happen on mobile. A slow or clunky mobile site sends customers straight to your competitors.",
  },
];

const mustAvoid = [
  "PDF-only menus — they are impossible to read on mobile",
  "No prices — customers will assume you are expensive and leave",
  "Outdated menu items — nothing frustrates customers more than ordering something unavailable",
  "No contact information — make it easy to call or message you",
  "Auto-playing music — it annoys visitors and slows your site",
  "No SSL certificate — customers will not trust a non-HTTPS site for payments",
  "Stock photos of food — use real photos of your actual dishes",
  "No opening hours — customers need to know when you are open",
];

export default function RestaurantWebsitePage() {
  return (
    <div style={{ paddingTop: "120px", minHeight: "100vh" }}>
      <article className="container" style={{ maxWidth: "800px" }}>
        {/* Breadcrumb */}
        <nav style={{ marginBottom: "var(--space-8)" }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              color: "var(--text-muted)",
            }}
          >
            <Link href="/" style={{ color: "var(--text-muted)" }}>
              Home
            </Link>
            <span style={{ margin: "0 var(--space-2)" }}>/</span>
            <Link href="/blog" style={{ color: "var(--text-muted)" }}>
              Blog
            </Link>
            <span style={{ margin: "0 var(--space-2)" }}>/</span>
            <span style={{ color: "var(--text-secondary)" }}>
              Restaurant Website Design India
            </span>
          </div>
        </nav>

        {/* Tags */}
        <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
          {["Restaurant", "Food", "Website Design", "India"].map((tag) => (
            <span
              key={tag}
              className="badge badge-accent"
              style={{ fontSize: "11px", padding: "3px 10px" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 style={{ marginTop: "var(--space-4)" }}>
          Restaurant Website Design{" "}
          <span className="text-gradient">India</span>: Menu, Booking & SEO
        </h1>

        <div
          style={{
            marginTop: "var(--space-4)",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
            color: "var(--text-muted)",
            display: "flex",
            gap: "var(--space-4)",
          }}
        >
          <span>April 23, 2026</span>
          <span>·</span>
          <span>7 min read</span>
          <span>·</span>
          <span>By Omprakash Kadur</span>
        </div>

        <hr
          style={{
            margin: "var(--space-10) 0",
            border: "none",
            borderTop: "1px solid var(--border)",
          }}
        />

        {/* Intro */}
        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8, fontSize: "var(--text-lg)" }}>
          A restaurant website is your digital storefront. Before a customer ever steps through
          your door, they have browsed your menu, checked your reviews, and looked at your photos
          online. A great restaurant website does not just inform — it makes people hungry and
          drives them to visit.
        </p>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          I built the{" "}
          <Link href="/work/cafe-restaurant" style={{ color: "var(--accent)" }}>
            Urban Brew Cafe website
          </Link>{" "}
          which showcases how a modern cafe website should look and function. In this article,
          I will share the 7 features that make restaurant and cafe websites actually work in India.
        </p>

        {/* Features */}
        {features.map((feature) => (
          <div key={feature.num} style={{ marginTop: "var(--space-12)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", marginBottom: "var(--space-4)" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-2xl)",
                  fontWeight: 700,
                  color: "var(--accent)",
                  opacity: 0.4,
                }}
              >
                {feature.num}
              </span>
              <h2 style={{ margin: 0 }}>
                {feature.title}
              </h2>
            </div>

            <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
              {feature.desc}
            </p>

            <div
              className="card"
              style={{
                padding: "var(--space-5)",
                borderLeft: "3px solid var(--accent)",
              }}
            >
              <div style={{ fontSize: "var(--text-sm)", lineHeight: 1.7 }}>
                <strong style={{ color: "var(--accent)" }}>
                  Why it matters:
                </strong>{" "}
                {feature.why}
              </div>
            </div>
          </div>
        ))}

        {/* Case Study Reference */}
        <div
          className="card"
          style={{
            padding: "var(--space-8)",
            margin: "var(--space-12) 0",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "var(--text-xl)" }}>
            Real Project: Urban Brew Cafe
          </h3>
          <p
            style={{
              marginTop: "var(--space-3)",
              color: "var(--text-secondary)",
              maxWidth: "560px",
              margin: "var(--space-3) auto 0",
            }}
          >
            A modern cafe website with digital menu, reservation system, WhatsApp ordering,
            photo gallery, and Google Maps integration. Built with Next.js and live in 24 hours.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "var(--space-4)",
              marginTop: "var(--space-6)",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://caferestaurant.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              View Live Site →
            </a>
            <Link href="/work/cafe-restaurant" className="btn btn-outline">
              View Project Details
            </Link>
          </div>
        </div>

        {/* What to Avoid */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          What to <span className="text-gradient">Avoid</span>
        </h2>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          Here are common mistakes that hurt restaurant websites:
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", margin: "var(--space-4) 0" }}>
          {mustAvoid.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "var(--space-3)",
                padding: "var(--space-3) var(--space-4)",
                background: "var(--black-1)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <span style={{ color: "#ef4444", fontWeight: 700 }}>✕</span>
              <span style={{ fontSize: "var(--text-sm)", lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
        </div>

        {/* SEO Keywords */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          SEO Keywords for Restaurants in{" "}
          <span className="text-gradient">India</span>
        </h2>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          Your website content should target these keywords to attract hungry customers:
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "var(--space-3)",
            margin: "var(--space-4) 0",
          }}
        >
          {[
            "restaurant near me",
            "best restaurant [city]",
            "cafe near me",
            "veg restaurant [area]",
            "fine dining [city]",
            "family restaurant [city]",
            "romantic dinner [city]",
            "buffet restaurant [city]",
            "rooftop restaurant [city]",
            "late night food [city]",
          ].map((kw) => (
            <span
              key={kw}
              className="badge"
              style={{ fontSize: "var(--text-sm)", padding: "6px 12px", textAlign: "center" }}
            >
              {kw}
            </span>
          ))}
        </div>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          Replace [city] and [area] with your actual location. Create dedicated pages for
          special offerings like catering, private dining, or events.
        </p>

        {/* Cost */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          How Much Does a Restaurant Website{" "}
          <span className="text-gradient">Cost?</span>
        </h2>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          A professional restaurant website in India typically costs between{" "}
          <strong>₹5,000 and ₹12,000</strong>. This includes:
        </p>

        <ul style={{ marginLeft: "var(--space-6)", marginBottom: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
          <li>Custom design matching your brand</li>
          <li>Digital menu with photos</li>
          <li>Table reservation system</li>
          <li>WhatsApp ordering integration</li>
          <li>Photo gallery</li>
          <li>Google Maps integration</li>
          <li>Google Business Profile setup</li>
          <li>Mobile responsiveness</li>
        </ul>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          I build restaurant and cafe websites starting at{" "}
          <strong style={{ color: "var(--accent)" }}>₹3,999</strong> with all the features
          mentioned above. Live in 24-48 hours.
        </p>

        {/* CTA */}
        <div
          className="card"
          style={{
            padding: "var(--space-10)",
            margin: "var(--space-12) 0",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "var(--text-xl)" }}>
            Need a Restaurant Website?
          </h3>
          <p
            style={{
              marginTop: "var(--space-3)",
              color: "var(--text-secondary)",
              maxWidth: "500px",
              margin: "var(--space-3) auto 0",
            }}
          >
            I build restaurant and cafe websites that bring customers. Starting at ₹3,999.
            WhatsApp me for a free consultation.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "var(--space-4)",
              marginTop: "var(--space-6)",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://wa.me/919964185119?text=Hi%20Omprakash,%20I%20read%20your%20restaurant%20website%20article.%20I%20need%20a%20website%20for%20my%20restaurant."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              💬 Get a Free Quote
            </a>
            <Link href="/work/cafe-restaurant" className="btn btn-outline btn-lg">
              View Urban Brew Cafe
            </Link>
          </div>
        </div>

        {/* Related */}
        <div style={{ marginTop: "var(--space-12)" }}>
          <h3 style={{ marginBottom: "var(--space-4)" }}>Related Articles</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <Link
              href="/blog/website-cost-india-2026"
              style={{ color: "var(--accent)", textDecoration: "none", fontSize: "var(--text-sm)" }}
            >
              → How Much Does a Website Cost in India? (2026 Guide)
            </Link>
            <Link
              href="/blog/google-maps-ranking-india"
              style={{ color: "var(--accent)", textDecoration: "none", fontSize: "var(--text-sm)" }}
            >
              → How to Rank on Google Maps in India: Complete Guide
            </Link>
            <Link
              href="/services/website-development"
              style={{ color: "var(--accent)", textDecoration: "none", fontSize: "var(--text-sm)" }}
            >
              → Website Development Services — Starting at ₹3,999
            </Link>
          </div>
        </div>
      </article>

      <HireMeCTA text="Need a restaurant website that brings customers?" />
    </div>
  );
}

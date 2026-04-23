import type { Metadata } from "next";
import Link from "next/link";
import HireMeCTA from "@/components/shared/HireMeCTA";

export const metadata: Metadata = {
  title: "How Much Does a Website Cost in India? (2026 Complete Guide) | techtalkswithomee.com",
  description:
    "A complete breakdown of website pricing in India for 2026. From ₹3,000 basic sites to ₹50,000+ custom builds — what you actually get at each price point. Transparent pricing guide.",
  keywords: [
    "website cost india",
    "website price india",
    "how much does a website cost in india",
    "website development cost bangalore",
    "freelance web developer india pricing",
    "business website cost india",
    "website design india price",
  ],
  alternates: {
    canonical: "/blog/website-cost-india-2026",
  },
  openGraph: {
    title: "How Much Does a Website Cost in India? (2026 Complete Guide)",
    description:
      "Complete breakdown of website pricing in India. From ₹3,000 to ₹50,000+ — what you get at every price point.",
    type: "article",
    url: "https://www.techtalkswithomee.com/blog/website-cost-india-2026",
    publishedTime: "2026-04-23",
    tags: ["Pricing", "India", "Web Development", "Business"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much Does a Website Cost in India? (2026 Guide)",
    description: "Complete pricing breakdown for websites in India. From ₹3,000 to ₹50,000+.",
  },
};

const pricingTable = [
  {
    type: "Basic Landing Page",
    price: "₹3,000 – ₹8,000",
    pages: "1",
    design: "Template-based",
    seo: "Basic",
    speed: "60-80/100",
    bestFor: "Cafes, salons, clinics starting online",
  },
  {
    type: "Multi-Page Business Site",
    price: "₹8,000 – ₹25,000",
    pages: "5-10",
    design: "Custom",
    seo: "Advanced",
    speed: "80-90/100",
    bestFor: "Established businesses, coaching centers",
  },
  {
    type: "E-Commerce Website",
    price: "₹25,000 – ₹75,000",
    pages: "10-50+",
    design: "Custom + UX",
    seo: "Full package",
    speed: "70-85/100",
    bestFor: "Boutiques, stores with online sales",
  },
  {
    type: "Custom Web Application",
    price: "₹75,000+",
    pages: "Unlimited",
    design: "Premium custom",
    seo: "Enterprise",
    speed: "90+/100",
    bestFor: "Startups, SaaS, marketplaces",
  },
];

const hiddenCosts = [
  { item: "Domain (.com)", price: "₹800 – ₹1,200/year", note: "Buy yourself, never let the developer own it" },
  { item: "Hosting", price: "₹3,000 – ₹12,000/year", note: "Vercel/Netlify free tier works for most" },
  { item: "SSL Certificate", price: "Free – ₹5,000/year", note: "Let's Encrypt is free" },
  { item: "Content Writing", price: "₹2,000 – ₹10,000", note: "Often overlooked but critical" },
  { item: "Maintenance", price: "₹2,000 – ₹5,000/month", note: "Updates, backups, security patches" },
  { item: "Stock Photos", price: "₹0 – ₹5,000", note: "Use free sources like Unsplash" },
];

const redFlags = [
  "No portfolio — Always check live sites they have built",
  "No contract — Get everything in writing before paying",
  "They own your domain — You should always own your domain",
  "No maintenance plan — Websites need regular updates",
  "Too cheap (₹1,000) — Usually templates with no support",
  "No SEO included — A website without SEO is invisible",
  "No mobile optimization — 70% of Indians browse on mobile",
];

export default function WebsiteCostIndiaPage() {
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
              Website Cost in India 2026
            </span>
          </div>
        </nav>

        {/* Tags */}
        <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
          {["Pricing", "India", "Web Development", "Business"].map((tag) => (
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
          How Much Does a Website Cost in India?{" "}
          <span className="text-gradient">(2026 Complete Guide)</span>
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
          <span>10 min read</span>
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
          If you are a business owner in India wondering how much a website costs in 2026,
          you are not alone. Pricing varies wildly — from freelancers charging ₹3,000 to
          agencies quoting ₹5,00,000. This guide breaks down what you actually get at every
          price point, so you can make an informed decision.
        </p>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          I have built <Link href="/work" style={{ color: "var(--accent)" }}>9+ websites</Link> for
          businesses across India, and I have seen every pricing scenario. Here is the honest truth
          about website costs in India.
        </p>

        {/* Quick Answer */}
        <div
          className="card"
          style={{
            padding: "var(--space-6)",
            margin: "var(--space-8) 0",
            borderLeft: "3px solid var(--accent)",
          }}
        >
          <h3 style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-2)" }}>
            Quick Answer
          </h3>
          <p style={{ lineHeight: 1.7 }}>
            For most Indian businesses, a professional website costs between{" "}
            <strong style={{ color: "var(--accent)" }}>₹8,000 and ₹25,000</strong>. This includes
            custom design, mobile responsiveness, basic SEO, and 5-10 pages. My flat rate for
            most local business websites is <strong style={{ color: "var(--accent)" }}>₹3,999</strong>,
            which includes everything a small business needs to get online.
          </p>
        </div>

        {/* Pricing Breakdown */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          Website Cost Breakdown in <span className="text-gradient">India</span>
        </h2>

        <div style={{ overflowX: "auto", margin: "var(--space-6) 0" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "var(--text-sm)",
            }}
          >
            <thead>
              <tr style={{ borderBottom: "2px solid var(--border)" }}>
                <th style={{ textAlign: "left", padding: "12px 8px", fontFamily: "var(--font-display)" }}>
                  Type
                </th>
                <th style={{ textAlign: "left", padding: "12px 8px", fontFamily: "var(--font-display)" }}>
                  Price
                </th>
                <th style={{ textAlign: "left", padding: "12px 8px", fontFamily: "var(--font-display)" }}>
                  Pages
                </th>
                <th style={{ textAlign: "left", padding: "12px 8px", fontFamily: "var(--font-display)" }}>
                  Speed
                </th>
              </tr>
            </thead>
            <tbody>
              {pricingTable.map((row, i) => (
                <tr
                  key={row.type}
                  style={{
                    borderBottom: "1px solid var(--border)",
                    background: i % 2 === 0 ? "var(--black-1)" : "transparent",
                  }}
                >
                  <td style={{ padding: "12px 8px", fontWeight: 600 }}>{row.type}</td>
                  <td style={{ padding: "12px 8px", color: "var(--accent)" }}>{row.price}</td>
                  <td style={{ padding: "12px 8px" }}>{row.pages}</td>
                  <td style={{ padding: "12px 8px" }}>{row.speed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detailed Sections */}
        <h3 style={{ marginTop: "var(--space-10)", marginBottom: "var(--space-3)" }}>
          1. Basic Landing Page (₹3,000 – ₹8,000)
        </h3>
        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          A single-page website with your business name, services, contact info, and a
          WhatsApp button. Best for businesses just starting online who need a quick
          digital presence.
        </p>
        <ul style={{ marginLeft: "var(--space-6)", marginBottom: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
          <li>Single-page scrollable design</li>
          <li>Mobile responsive</li>
          <li>Contact form + WhatsApp button</li>
          <li>Basic SEO setup</li>
          <li>SSL certificate</li>
        </ul>

        <h3 style={{ marginTop: "var(--space-8)", marginBottom: "var(--space-3)" }}>
          2. Multi-Page Business Website (₹8,000 – ₹25,000)
        </h3>
        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          The sweet spot for most Indian businesses. 5-10 pages with custom design,
          full SEO, and lead capture features. This is what I deliver for{" "}
          <strong style={{ color: "var(--accent)" }}>₹3,999 – ₹7,999</strong>.
        </p>
        <ul style={{ marginLeft: "var(--space-6)", marginBottom: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
          <li>5-10 pages (Home, About, Services, Contact, Gallery, Blog)</li>
          <li>Custom design matching your brand</li>
          <li>Google Business Profile integration</li>
          <li>Blog section for content marketing</li>
          <li>Speed optimized (90+ PageSpeed)</li>
          <li>Advanced on-page SEO</li>
        </ul>

        <h3 style={{ marginTop: "var(--space-8)", marginBottom: "var(--space-3)" }}>
          3. E-Commerce Website (₹25,000 – ₹75,000)
        </h3>
        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          For businesses selling products online. Includes product catalog, payment
          gateway integration, order management, and inventory tracking.
        </p>
        <ul style={{ marginLeft: "var(--space-6)", marginBottom: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
          <li>Product catalog with categories and filters</li>
          <li>Payment gateway (Razorpay, PayU, Stripe)</li>
          <li>Shopping cart and checkout</li>
          <li>Order management dashboard</li>
          <li>Customer accounts and order history</li>
        </ul>

        <h3 style={{ marginTop: "var(--space-8)", marginBottom: "var(--space-3)" }}>
          4. Custom Web Application (₹75,000+)
        </h3>
        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          For startups and businesses needing custom functionality like user dashboards,
          APIs, real-time features, or complex workflows.
        </p>
        <ul style={{ marginLeft: "var(--space-6)", marginBottom: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
          <li>User authentication and roles</li>
          <li>Custom dashboards and analytics</li>
          <li>API integrations</li>
          <li>Admin panel</li>
          <li>Real-time features (chat, notifications)</li>
        </ul>

        {/* Hidden Costs */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          Hidden Costs to <span className="text-gradient">Watch For</span>
        </h2>
        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          The quoted price is rarely the final price. Here are the hidden costs that
          catch business owners off guard:
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "var(--space-4)",
            margin: "var(--space-6) 0",
          }}
        >
          {hiddenCosts.map((cost) => (
            <div key={cost.item} className="card" style={{ padding: "var(--space-5)" }}>
              <div style={{ fontWeight: 600, fontSize: "var(--text-base)" }}>{cost.item}</div>
              <div style={{ color: "var(--accent)", fontWeight: 600, marginTop: "var(--space-1)" }}>
                {cost.price}
              </div>
              <div style={{ color: "var(--text-muted)", fontSize: "var(--text-xs)", marginTop: "var(--space-1)" }}>
                {cost.note}
              </div>
            </div>
          ))}
        </div>

        {/* My Pricing */}
        <div
          className="card"
          style={{
            padding: "var(--space-8)",
            margin: "var(--space-10) 0",
            border: "2px solid var(--accent)",
          }}
        >
          <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-3)" }}>
            Why I Charge ₹3,999 for a Business Website
          </h3>
          <p style={{ lineHeight: 1.7, marginBottom: "var(--space-4)" }}>
            I have built a multi-tenant system that lets me deploy high-quality Next.js
            websites in 24-48 hours. This efficiency means:
          </p>
          <ul style={{ marginLeft: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <li>
              <strong>You get a ₹25,000-quality site</strong> for a fraction of the cost
            </li>
            <li>
              <strong>No compromises on speed</strong> — 90+ PageSpeed scores guaranteed
            </li>
            <li>
              <strong>Everything included:</strong> domain setup, Google Business, WhatsApp integration
            </li>
            <li>
              <strong>Monthly growth reports</strong> so you see real ROI
            </li>
            <li>
              <strong>No monthly fees</strong> for the website itself
            </li>
          </ul>
        </div>

        {/* Red Flags */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          Red Flags When Hiring a <span className="text-gradient">Web Developer</span>
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-3)",
            margin: "var(--space-4) 0",
          }}
        >
          {redFlags.map((flag) => (
            <div
              key={flag}
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
              <span style={{ fontSize: "var(--text-sm)", lineHeight: 1.6 }}>{flag}</span>
            </div>
          ))}
        </div>

        {/* City Pricing */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          Website Costs by <span className="text-gradient">City</span>
        </h2>
        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          Pricing varies slightly by city due to cost of living and competition:
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "var(--space-4)",
            margin: "var(--space-4) 0",
          }}
        >
          {[
            { city: "Bangalore", range: "₹8,000 – ₹30,000", note: "High competition, many freelancers" },
            { city: "Mumbai", range: "₹10,000 – ₹35,000", note: "Premium pricing, quality varies" },
            { city: "Delhi", range: "₹8,000 – ₹30,000", note: "Large market, mixed quality" },
            { city: "Hyderabad", range: "₹7,000 – ₹25,000", note: "Growing tech hub" },
            { city: "Chennai", range: "₹7,000 – ₹25,000", note: "Competitive pricing" },
            { city: "Tier 2/3 Cities", range: "₹5,000 – ₹20,000", note: "Lower costs, fewer specialists" },
          ].map((c) => (
            <div key={c.city} className="card" style={{ padding: "var(--space-5)" }}>
              <div style={{ fontWeight: 600, fontSize: "var(--text-base)" }}>{c.city}</div>
              <div style={{ color: "var(--accent)", fontWeight: 600, marginTop: "var(--space-1)" }}>
                {c.range}
              </div>
              <div style={{ color: "var(--text-muted)", fontSize: "var(--text-xs)", marginTop: "var(--space-1)" }}>
                {c.note}
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          Final <span className="text-gradient">Verdict</span>
        </h2>
        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          For most Indian businesses, a <strong>₹8,000–₹15,000 website</strong> is the sweet spot.
          It gives you a professional presence without breaking the bank. The key is finding
          a developer who understands local SEO and can deliver fast, mobile-first sites.
        </p>
        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          If you are on a tight budget, my <strong style={{ color: "var(--accent)" }}>₹3,999 package</strong>{" "}
          gives you everything a small business needs: a fast, SEO-optimized website with
          WhatsApp integration and Google Business setup. No hidden costs. No monthly fees.
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
            Need a Website for Your Business?
          </h3>
          <p
            style={{
              marginTop: "var(--space-3)",
              color: "var(--text-secondary)",
              maxWidth: "500px",
              margin: "var(--space-3) auto 0",
            }}
          >
            I build fast, SEO-optimized websites for Indian businesses starting at ₹3,999.
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
              href="https://wa.me/919964185119?text=Hi%20Omprakash,%20I%20read%20your%20article%20on%20website%20pricing.%20I%20need%20a%20website%20for%20my%20business.%20Can%20we%20discuss?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              💬 Get a Free Quote
            </a>
            <Link href="/work" className="btn btn-outline btn-lg">
              View My Work
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div style={{ marginTop: "var(--space-12)" }}>
          <h3 style={{ marginBottom: "var(--space-4)" }}>Related Articles</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <Link
              href="/blog/best-website-builder-salon-india"
              style={{
                color: "var(--accent)",
                textDecoration: "none",
                fontSize: "var(--text-sm)",
              }}
            >
              → Best Website Builder for Salons & Spas in India (2026)
            </Link>
            <Link
              href="/blog/google-business-profile-local-seo"
              style={{
                color: "var(--accent)",
                textDecoration: "none",
                fontSize: "var(--text-sm)",
              }}
            >
              → Why Every Local Business Needs a Google Business Profile
            </Link>
            <Link
              href="/services/website-development"
              style={{
                color: "var(--accent)",
                textDecoration: "none",
                fontSize: "var(--text-sm)",
              }}
            >
              → Website Development Services — Starting at ₹3,999
            </Link>
          </div>
        </div>
      </article>

      <HireMeCTA text="Ready to get your business online?" />
    </div>
  );
}

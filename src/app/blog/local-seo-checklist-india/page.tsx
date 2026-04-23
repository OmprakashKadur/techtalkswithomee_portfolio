import type { Metadata } from "next";
import Link from "next/link";
import HireMeCTA from "@/components/shared/HireMeCTA";

export const metadata: Metadata = {
  title: "Local SEO Checklist for Indian Small Businesses (2026) | techtalkswithomee.com",
  description:
    "A complete 20-point local SEO checklist for Indian small businesses. Optimize your Google Business Profile, get reviews, build citations, and rank higher in local search.",
  keywords: [
    "local seo checklist india",
    "local seo tips for small business",
    "google business profile checklist",
    "local seo guide india",
    "small business seo india",
    "local search optimization",
  ],
  alternates: {
    canonical: "/blog/local-seo-checklist-india",
  },
  openGraph: {
    title: "Local SEO Checklist for Indian Small Businesses (2026)",
    description:
      "Complete 20-point local SEO checklist for Indian businesses. Optimize Google Business Profile, get reviews, build citations.",
    type: "article",
    url: "https://www.techtalkswithomee.com/blog/local-seo-checklist-india",
    publishedTime: "2026-04-23",
    tags: ["Local SEO", "Checklist", "Small Business", "India"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Checklist for Indian Small Businesses",
    description: "20-point checklist to dominate local search in India.",
  },
};

const checklist = [
  {
    category: "Google Business Profile",
    items: [
      { task: "Claim and verify your Google Business Profile", priority: "Critical" },
      { task: "Use exact business name (no keyword stuffing)", priority: "Critical" },
      { task: "Select accurate primary category", priority: "Critical" },
      { task: "Add 9 relevant secondary categories", priority: "High" },
      { task: "Write 750-character description with keywords", priority: "High" },
      { task: "Add complete address with postal code", priority: "Critical" },
      { task: "Set accurate business hours including holidays", priority: "High" },
      { task: "Add phone matching your website exactly", priority: "Critical" },
      { task: "Upload at least 10 high-quality photos", priority: "High" },
      { task: "Add logo and cover photo", priority: "Medium" },
      { task: "List all products and services", priority: "Medium" },
      { task: "Add business attributes", priority: "Medium" },
      { task: "Enable messaging and respond quickly", priority: "Medium" },
      { task: "Add Q&A with common questions", priority: "Medium" },
    ],
  },
  {
    category: "Reviews & Reputation",
    items: [
      { task: "Ask every happy customer for a review", priority: "Critical" },
      { task: "Respond to every review within 24 hours", priority: "High" },
      { task: "Aim for 4+ star average rating", priority: "High" },
      { task: "Get at least 20 reviews to start", priority: "High" },
    ],
  },
  {
    category: "Website & On-Page SEO",
    items: [
      { task: "Ensure NAP matches Google Business Profile exactly", priority: "Critical" },
      { task: "Add LocalBusiness schema markup", priority: "High" },
      { task: "Create location-specific pages if multi-location", priority: "Medium" },
      { task: "Add embedded Google Map on contact page", priority: "Medium" },
      { task: "Optimize title tags with location keywords", priority: "High" },
      { task: "Add location to meta descriptions", priority: "Medium" },
    ],
  },
  {
    category: "Citations & Directories",
    items: [
      { task: "Submit to Justdial with exact NAP", priority: "High" },
      { task: "Submit to Sulekha with exact NAP", priority: "High" },
      { task: "Submit to IndiaMart (if B2B)", priority: "Medium" },
      { task: "Ensure Facebook page has exact NAP", priority: "High" },
      { task: "Add business to local directories in your city", priority: "Medium" },
    ],
  },
  {
    category: "Content & Activity",
    items: [
      { task: "Post on Google Business weekly", priority: "High" },
      { task: "Add new photos monthly", priority: "Medium" },
      { task: "Create blog content targeting local keywords", priority: "Medium" },
      { task: "Share updates about offers and events", priority: "Medium" },
    ],
  },
];

export default function LocalSEOChecklistPage() {
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
              Local SEO Checklist India
            </span>
          </div>
        </nav>

        {/* Tags */}
        <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
          {["Local SEO", "Checklist", "Small Business", "India"].map((tag) => (
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
          Local SEO Checklist for{" "}
          <span className="text-gradient">Indian Small Businesses</span> (2026)
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
          <span>8 min read</span>
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
          Local SEO is the most cost-effective marketing strategy for small businesses in India.
          It is free, targets customers who are ready to buy, and delivers measurable results.
          But most local businesses barely scratch the surface of what is possible.
        </p>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          This checklist covers everything I do for my clients to help them rank on Google Maps
          and local search. Work through it systematically, and you will see results within 2-4 weeks.
        </p>

        {/* Progress Summary */}
        <div
          className="card"
          style={{
            padding: "var(--space-6)",
            margin: "var(--space-8) 0",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "var(--space-4)",
            }}
          >
            {[
              { num: "37", label: "Total Tasks" },
              { num: "14", label: "Critical Priority" },
              { num: "13", label: "High Priority" },
              { num: "10", label: "Medium Priority" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: "var(--text-2xl)",
                    fontWeight: 700,
                    color: "var(--accent)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {stat.num}
                </div>
                <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", marginTop: "var(--space-1)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Checklist Sections */}
        {checklist.map((section) => (
          <div key={section.category} style={{ marginTop: "var(--space-12)" }}>
            <h2 style={{ marginBottom: "var(--space-6)" }}>
              {section.category}{" "}
              <span className="text-gradient">({section.items.length} tasks)</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {section.items.map((item, i) => (
                <div
                  key={item.task}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "var(--space-3)",
                    padding: "var(--space-3) var(--space-4)",
                    background: "var(--black-1)",
                    borderRadius: "var(--radius-md)",
                    borderLeft: `3px solid ${
                      item.priority === "Critical"
                        ? "#ef4444"
                        : item.priority === "High"
                        ? "var(--accent)"
                        : "#888888"
                    }`,
                  }}
                >
                  <span
                    style={{
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-xs)",
                      minWidth: "24px",
                    }}
                  >
                    {i + 1}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "var(--text-sm)", lineHeight: 1.6 }}>
                      {item.task}
                    </div>
                    <span
                      className="badge badge-accent"
                      style={{
                        fontSize: "9px",
                        padding: "1px 6px",
                        marginTop: "var(--space-1)",
                        display: "inline-block",
                      }}
                    >
                      {item.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* NAP Consistency Deep Dive */}
        <h2 style={{ marginTop: "var(--space-16)", marginBottom: "var(--space-4)" }}>
          NAP Consistency: The Foundation of{" "}
          <span className="text-gradient">Local SEO</span>
        </h2>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          NAP stands for <strong>Name, Address, Phone</strong>. It is the foundation of local SEO.
          If your NAP is inconsistent across platforms, Google gets confused and ranks you lower.
        </p>

        <div
          className="card"
          style={{ padding: "var(--space-6)", margin: "var(--space-4) 0" }}
        >
          <h4 style={{ marginBottom: "var(--space-3)" }}>Where to Check NAP Consistency:</h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "var(--space-2)",
            }}
          >
            {[
              "Google Business Profile",
              "Your website",
              "Justdial",
              "Sulekha",
              "Facebook page",
              "Instagram bio",
              "IndiaMart (if B2B)",
              "Local directories",
              "Business cards",
              "Signage",
            ].map((platform) => (
              <div
                key={platform}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-2)",
                  fontSize: "var(--text-sm)",
                }}
              >
                <span style={{ color: "var(--accent)" }}>☐</span>
                {platform}
              </div>
            ))}
          </div>
        </div>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          <strong>Pro tip:</strong> Create a NAP document with your exact business name, address,
          and phone format. Copy-paste from this document every time you create a new listing.
        </p>

        {/* Review Strategy */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          Review Collection{" "}
          <span className="text-gradient">Strategy</span>
        </h2>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          Reviews are the strongest ranking signal for Google Maps. Here is a simple system
          to collect more reviews:
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", margin: "var(--space-4) 0" }}>
          {[
            {
              step: "1. Ask at the right time",
              desc: "Request reviews immediately after a positive interaction — a successful service, a happy customer, a completed project.",
            },
            {
              step: "2. Make it easy",
              desc: "Send a direct link to your Google review page via WhatsApp or SMS. Do not make customers search for it.",
            },
            {
              step: "3. Follow up once",
              desc: "If they do not review within 3 days, send one gentle reminder. Do not spam.",
            },
            {
              step: "4. Respond to every review",
              desc: "Thank positive reviewers. Address negative reviews professionally and offer to make it right.",
            },
            {
              step: "5. Display reviews on your website",
              desc: "Embed your Google reviews widget to show social proof to website visitors.",
            },
          ].map((item) => (
            <div key={item.step} className="card" style={{ padding: "var(--space-5)" }}>
              <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-base)" }}>
                {item.step}
              </h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", lineHeight: 1.7, marginTop: "var(--space-1)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          Expected{" "}
          <span className="text-gradient">Timeline</span>
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", margin: "var(--space-4) 0" }}>
          {[
            { week: "Week 1", result: "Complete Google Business Profile setup and optimization" },
            { week: "Week 2", result: "Fix NAP inconsistencies across all platforms" },
            { week: "Week 3", result: "Start review collection campaign, submit to directories" },
            { week: "Week 4", result: "Begin weekly Google Posts, add website schema markup" },
            { week: "Month 2", result: "Ranking improvements visible, more profile views and clicks" },
            { week: "Month 3", result: "Significant ranking gains, consistent lead generation" },
          ].map((t) => (
            <div key={t.week} style={{ display: "flex", gap: "var(--space-4)", alignItems: "flex-start" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-sm)",
                  color: "var(--accent)",
                  fontWeight: 600,
                  minWidth: "80px",
                }}
              >
                {t.week}
              </span>
              <span style={{ fontSize: "var(--text-sm)", lineHeight: 1.7, color: "var(--text-secondary)" }}>
                {t.result}
              </span>
            </div>
          ))}
        </div>

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
            Need Help with Local SEO?
          </h3>
          <p
            style={{
              marginTop: "var(--space-3)",
              color: "var(--text-secondary)",
              maxWidth: "500px",
              margin: "var(--space-3) auto 0",
            }}
          >
            I help local businesses in India rank on Google Maps. Starting at ₹999/month.
            WhatsApp me for a free audit.
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
              href="https://wa.me/919964185119?text=Hi%20Omprakash,%20I%20read%20your%20local%20SEO%20checklist.%20I%20need%20help%20with%20local%20SEO%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              💬 Get a Free Audit
            </a>
            <Link href="/services/local-seo" className="btn btn-outline btn-lg">
              View SEO Services
            </Link>
          </div>
        </div>

        {/* Related */}
        <div style={{ marginTop: "var(--space-12)" }}>
          <h3 style={{ marginBottom: "var(--space-4)" }}>Related Articles</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <Link
              href="/blog/google-maps-ranking-india"
              style={{ color: "var(--accent)", textDecoration: "none", fontSize: "var(--text-sm)" }}
            >
              → How to Rank on Google Maps in India: Complete Guide
            </Link>
            <Link
              href="/blog/google-business-profile-local-seo"
              style={{ color: "var(--accent)", textDecoration: "none", fontSize: "var(--text-sm)" }}
            >
              → Why Every Local Business Needs a Google Business Profile
            </Link>
            <Link
              href="/services/local-seo"
              style={{ color: "var(--accent)", textDecoration: "none", fontSize: "var(--text-sm)" }}
            >
              → Local SEO Services — Starting at ₹999/month
            </Link>
          </div>
        </div>
      </article>

      <HireMeCTA text="Need help with local SEO for your business?" />
    </div>
  );
}

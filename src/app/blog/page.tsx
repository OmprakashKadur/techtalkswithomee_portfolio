import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | Web Development Tips for Local Businesses — techtalkswithomee.com",
  description:
    "Practical guides on website pricing, local SEO, Google Business Profile, and lead generation for Indian businesses. Written by Omprakash Kadur.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Web Development Tips for Local Businesses",
    description:
      "Practical guides on website pricing, local SEO, and lead generation for Indian businesses.",
    type: "website",
    url: "https://www.techtalkswithomee.com/blog",
  },
};

export default function BlogPage() {
  return (
    <div style={{ paddingTop: "120px", minHeight: "100vh" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
          <span className="label">{"// blog"}</span>
          <h1 style={{ marginTop: "var(--space-4)" }}>
            Tips to Grow Your{" "}
            <span className="text-gradient">Business Online</span>
          </h1>
          <p
            style={{
              marginTop: "var(--space-4)",
              maxWidth: "560px",
              margin: "var(--space-4) auto 0",
            }}
          >
            Practical guides on websites, SEO, and lead generation for local
            businesses in India.
          </p>
        </div>

        <div
          style={{
            marginTop: "var(--space-16)",
            display: "grid",
            gap: "var(--space-8)",
            maxWidth: "800px",
            margin: "var(--space-16) auto 0",
          }}
        >
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none" }}
            >
              <article
                className="card"
                style={{
                  padding: "var(--space-8)",
                  transition: "transform 0.2s ease, border-color 0.2s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "var(--space-2)",
                    flexWrap: "wrap",
                    marginBottom: "var(--space-4)",
                  }}
                >
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="badge badge-accent"
                      style={{ fontSize: "10px", padding: "2px 8px" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-xl)",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    lineHeight: 1.3,
                  }}
                >
                  {post.title}
                </h3>

                <p
                  style={{
                    marginTop: "var(--space-3)",
                    fontSize: "var(--text-sm)",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  {post.description}
                </p>

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
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

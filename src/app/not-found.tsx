import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | techtalkswithomee.com",
  description:
    "The page you are looking for does not exist. Explore my portfolio, blog, or get in touch for web development and SEO services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div
      style={{
        paddingTop: "160px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container" style={{ textAlign: "center", maxWidth: "600px" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
            color: "var(--accent)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          404 — Page Not Found
        </span>

        <h1 style={{ marginTop: "var(--space-4)", fontSize: "var(--text-4xl)" }}>
          Oops, this page does not exist.
        </h1>

        <p
          style={{
            marginTop: "var(--space-4)",
            color: "var(--text-secondary)",
            maxWidth: "480px",
            margin: "var(--space-4) auto 0",
          }}
        >
          The page you are looking for might have been moved, deleted, or never existed.
          But do not worry — I can help you find what you need.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "var(--space-4)",
            marginTop: "var(--space-10)",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" className="btn btn-primary btn-lg">
            ← Back to Home
          </Link>
          <Link href="/work" className="btn btn-outline btn-lg">
            View My Work
          </Link>
        </div>

        <div
          style={{
            marginTop: "var(--space-16)",
            padding: "var(--space-8)",
            background: "var(--black-1)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-xl)",
          }}
        >
          <h3 style={{ fontSize: "var(--text-xl)" }}>
            Looking for something specific?
          </h3>
          <p
            style={{
              marginTop: "var(--space-3)",
              color: "var(--text-secondary)",
              fontSize: "var(--text-sm)",
            }}
          >
            I build websites and help businesses rank on Google. Let us talk.
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
              href="https://wa.me/919964185119?text=Hi%20Omprakash,%20I%20need%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              💬 WhatsApp Me
            </a>
            <Link href="/blog" className="btn btn-outline">
              Read the Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

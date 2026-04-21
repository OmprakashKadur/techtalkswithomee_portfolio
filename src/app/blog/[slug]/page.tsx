import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/data/blog";
import HireMeCTA from "@/components/shared/HireMeCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | techtalkswithomee.com`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://www.techtalkswithomee.com/blog/${post.slug}`,
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `https://www.techtalkswithomee.com/blog/${post.slug}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Omprakash Kadur",
      url: "https://www.techtalkswithomee.com",
    },
    publisher: {
      "@type": "Organization",
      name: "techtalkswithomee",
      logo: {
        "@type": "ImageObject",
        url: "https://www.techtalkswithomee.com/favicon.ico",
      },
    },
    keywords: post.tags.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.techtalkswithomee.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.techtalkswithomee.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.techtalkswithomee.com/blog/${post.slug}`,
      },
    ],
  };

  // Simple markdown-like to HTML conversion
  const contentHtml = post.content
    .trim()
    .split("\n\n")
    .map((paragraph) => {
      const trimmed = paragraph.trim();
      if (trimmed.startsWith("## ")) {
        return `<h2 style="margin-top:var(--space-12);margin-bottom:var(--space-4);font-family:var(--font-display);font-size:var(--text-2xl);font-weight:600;">${trimmed.slice(3)}</h2>`;
      }
      if (trimmed.startsWith("### ")) {
        return `<h3 style="margin-top:var(--space-8);margin-bottom:var(--space-3);font-family:var(--font-display);font-size:var(--text-xl);font-weight:600;">${trimmed.slice(4)}</h3>`;
      }
      if (trimmed.startsWith("- ")) {
        const items = trimmed
          .split("\n")
          .map((line) => `<li style="margin-bottom:var(--space-2);">${line.slice(2)}</li>`)
          .join("");
        return `<ul style="margin-left:var(--space-6);margin-bottom:var(--space-4);">${items}</ul>`;
      }
      if (trimmed.startsWith("| ") && trimmed.includes(" | ")) {
        // Skip table rendering for simplicity, convert to list
        const rows = trimmed
          .split("\n")
          .filter((r) => r.startsWith("| ") && !r.includes("---"))
          .map((r) => {
            const cells = r
              .split("|")
              .filter((c) => c.trim())
              .map((c) => c.trim());
            return `<li><strong>${cells[0]}</strong>: ${cells.slice(1).join(" — ")}</li>`;
          })
          .join("");
        return `<ul style="margin-left:var(--space-6);margin-bottom:var(--space-4);">${rows}</ul>`;
      }
      if (trimmed.startsWith("> ")) {
        return `<blockquote style="border-left:2px solid var(--accent);padding-left:var(--space-6);margin:var(--space-6) 0;font-style:italic;color:var(--text-secondary);">${trimmed.slice(2)}</blockquote>`;
      }
      if (trimmed.startsWith("[x] ") || trimmed.startsWith("[ ] ")) {
        const items = trimmed
          .split("\n")
          .map((line) => {
            const checked = line.startsWith("[x] ");
            return `<li style="margin-bottom:var(--space-2);">${checked ? "✅" : "⬜"} ${line.slice(4)}</li>`;
          })
          .join("");
        return `<ul style="margin-left:var(--space-6);margin-bottom:var(--space-4);">${items}</ul>`;
      }
      if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
        return `<p style="font-weight:600;color:var(--text-primary);margin-bottom:var(--space-4);">${trimmed.slice(2, -2)}</p>`;
      }
      return `<p style="margin-bottom:var(--space-4);line-height:1.8;">${trimmed}</p>`;
    })
    .join("\n");

  return (
    <div style={{ paddingTop: "120px", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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
            <Link href="/" style={{ color: "var(--text-muted)" }}>Home</Link>
            <span style={{ margin: "0 var(--space-2)" }}>/</span>
            <Link href="/blog" style={{ color: "var(--text-muted)" }}>Blog</Link>
            <span style={{ margin: "0 var(--space-2)" }}>/</span>
            <span style={{ color: "var(--text-secondary)" }}>{post.title}</span>
          </div>
        </nav>

        {/* Tags */}
        <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="badge badge-accent"
              style={{ fontSize: "11px", padding: "3px 10px" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 style={{ marginTop: "var(--space-4)" }}>{post.title}</h1>

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

        <div
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          style={{ fontSize: "var(--text-base)", lineHeight: 1.8 }}
        />

        <hr
          style={{
            margin: "var(--space-16) 0 var(--space-8)",
            border: "none",
            borderTop: "1px solid var(--border)",
          }}
        />

        <HireMeCTA text="Need a Website for Your Business?" />
      </article>
    </div>
  );
}

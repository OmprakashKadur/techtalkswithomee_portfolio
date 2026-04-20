import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const title = `${project.name} — ${project.category} Website | Omprakash Kadur`;
  const description = `${project.description} Built with Next.js and deployed on Vercel. View the live demo.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://www.techtalkswithomee.com/work/${project.slug}`,
      images: project.thumbnail
        ? [
            {
              url: project.thumbnail,
              width: 1200,
              height: 630,
              alt: `${project.name} — ${project.category} website built by Omprakash Kadur`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: project.thumbnail ? [project.thumbnail] : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    url: `https://www.techtalkswithomee.com/work/${project.slug}`,
    image: project.thumbnail
      ? `https://www.techtalkswithomee.com${project.thumbnail}`
      : undefined,
    creator: {
      "@type": "Person",
      name: "Omprakash Kadur",
      url: "https://www.techtalkswithomee.com",
    },
    genre: project.category,
    keywords: project.tags.join(", "),
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
        name: "Work",
        item: "https://www.techtalkswithomee.com/work",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: `https://www.techtalkswithomee.com/work/${project.slug}`,
      },
    ],
  };

  return (
    <div style={{ paddingTop: "120px", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container">
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
            <Link href="/work" style={{ color: "var(--text-muted)" }}>
              Work
            </Link>
            <span style={{ margin: "0 var(--space-2)" }}>/</span>
            <span style={{ color: "var(--text-secondary)" }}>
              {project.name}
            </span>
          </div>
        </nav>

        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              color: "var(--accent)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            {project.category}
          </span>
          <h1 style={{ marginTop: "var(--space-4)" }}>
            {project.name}{" "}
            <span style={{ color: project.color }}>{project.emoji}</span>
          </h1>
          <p
            style={{
              marginTop: "var(--space-4)",
              fontSize: "var(--text-lg)",
              maxWidth: "640px",
              margin: "var(--space-4) auto 0",
            }}
          >
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "var(--space-2)",
            marginTop: "var(--space-6)",
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="badge"
              style={{ fontSize: "12px", padding: "4px 12px" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Thumbnail */}
        {project.thumbnail && (
          <div
            style={{
              marginTop: "var(--space-12)",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              border: "1px solid var(--border)",
              position: "relative",
              aspectRatio: "16 / 9",
            }}
          >
            <Image
              src={project.thumbnail}
              alt={`${project.name} — ${project.category} website built by Omprakash Kadur`}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        )}

        {/* CTA */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "var(--space-4)",
            marginTop: "var(--space-10)",
            flexWrap: "wrap",
          }}
        >
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            View Live Demo →
          </a>
          <Link href="/work" className="btn btn-outline btn-lg">
            ← Back to All Projects
          </Link>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div style={{ marginTop: "var(--space-20)" }}>
            <h3 style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
              More{" "}
              <span className="text-gradient">{project.category}</span>{" "}
              Projects
            </h3>
            <div className="projects-grid">
              {relatedProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="project-card"
                    style={{
                      padding: "var(--space-6)",
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--space-4)",
                    }}
                  >
                    <span style={{ fontSize: "32px" }}>{p.emoji}</span>
                    <div>
                      <h5 style={{ fontSize: "var(--text-base)" }}>{p.name}</h5>
                      <p
                        style={{
                          fontSize: "var(--text-sm)",
                          marginTop: "var(--space-1)",
                        }}
                      >
                        {p.description.slice(0, 80)}...
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

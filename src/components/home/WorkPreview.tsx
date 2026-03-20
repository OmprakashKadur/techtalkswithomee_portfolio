"use client";

import Link from "next/link";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import ProjectCard from "@/components/work/ProjectCard";
import { projects } from "@/data/projects";

export default function WorkPreview() {
  const previewProjects = projects.slice(0, 6);

  return (
    <section className="section">
      <div className="container">
        <RevealOnScroll>
          <span className="label">{"// my work"}</span>
          <h2 style={{ marginTop: "var(--space-4)" }}>
            Projects & <span className="text-gradient">Client Sites</span>
          </h2>
          <p style={{ marginTop: "var(--space-3)" }}>
            Hover to preview. Click to open live demo.
          </p>
        </RevealOnScroll>

        <div className="work-preview-grid" style={{ marginTop: "var(--space-12)" }}>
          {previewProjects.map((project, i) => (
            <RevealOnScroll key={project.id} delay={i * 0.05}>
              <ProjectCard project={project} />
            </RevealOnScroll>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "var(--space-12)" }}>
          <Link href="/work" className="btn btn-primary">
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}

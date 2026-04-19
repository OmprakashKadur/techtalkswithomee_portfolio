"use client";

import { useState } from "react";
import CategoryFilter from "@/components/work/CategoryFilter";
import ProjectsGrid from "@/components/work/ProjectsGrid";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { projects } from "@/data/projects";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div style={{ paddingTop: "120px", minHeight: "100vh" }}>
      <div className="container">
        {/* Header */}
        <RevealOnScroll>
          <div style={{ textAlign: "center" }}>
            <span className="label">{"// my work"}</span>
            <h1 style={{ marginTop: "var(--space-4)" }}>
              Projects &{" "}
              <span className="text-gradient">Client Sites</span>
            </h1>
            <p
              style={{
                marginTop: "var(--space-4)",
                maxWidth: "560px",
                margin: "var(--space-4) auto 0",
              }}
            >
              Config-driven websites across 12 industries. Each deployed on
              Vercel with a custom domain.
            </p>
          </div>
        </RevealOnScroll>

        {/* Stats Row */}
        <RevealOnScroll delay={0.1}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "var(--space-3)",
              marginTop: "var(--space-8)",
              flexWrap: "wrap",
            }}
          >
            {[
              "8+ Projects",
              "7 Categories",
              "All Live on Vercel",
            ].map((stat) => (
              <span
                key={stat}
                className="badge badge-accent"
                style={{ fontSize: "12px", padding: "6px 14px" }}
              >
                {stat}
              </span>
            ))}
          </div>
        </RevealOnScroll>

        {/* Category Filter */}
        <RevealOnScroll delay={0.2}>
          <div style={{ marginTop: "var(--space-10)" }}>
            <CategoryFilter
              activeCategory={activeCategory}
              onChange={setActiveCategory}
            />
          </div>
        </RevealOnScroll>

        {/* Projects Grid */}
        <div style={{ marginTop: "var(--space-10)", paddingBottom: "var(--space-16)" }}>
          <ProjectsGrid projects={filteredProjects} />
        </div>
      </div>
    </div>
  );
}

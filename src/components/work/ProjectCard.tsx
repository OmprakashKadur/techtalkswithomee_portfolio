"use client";

import { type Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card-link"
      style={{ textDecoration: "none", display: "block" }}
    >
      <div className="project-card">
        {/* Color Bar */}
        <div
          className="project-card-bar"
          style={{
            height: "3px",
            background: project.color,
            borderRadius: "12px 12px 0 0",
            transition: "box-shadow 0.3s ease",
          }}
        />

        {/* Thumbnail Area */}
        <div
          className="project-card-thumb"
          style={{
            aspectRatio: "16 / 10",
            background: `${project.color}14`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            transition: "transform 0.3s ease",
          }}
        >
          <span style={{ fontSize: "64px", lineHeight: 1 }}>
            {project.emoji}
          </span>
          {project.featured && (
            <span
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                fontWeight: 500,
                background: "var(--accent)",
                color: "var(--black)",
                padding: "3px 10px",
                borderRadius: "var(--radius-full)",
                letterSpacing: "0.05em",
              }}
            >
              Featured
            </span>
          )}
        </div>

        {/* Card Body */}
        <div style={{ padding: "20px" }}>
          {/* Category */}
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-secondary)",
              letterSpacing: "0.05em",
            }}
          >
            {project.category}
          </span>

          {/* Name */}
          <h5
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "17px",
              color: "var(--text-primary)",
              marginTop: "var(--space-2)",
              lineHeight: 1.3,
            }}
          >
            {project.name}
          </h5>

          {/* Description */}
          <p
            style={{
              fontWeight: 300,
              fontSize: "var(--text-sm)",
              color: "var(--text-secondary)",
              marginTop: "var(--space-2)",
              lineHeight: 1.6,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-2)",
              marginTop: "var(--space-4)",
            }}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="badge"
                style={{
                  fontSize: "10px",
                  padding: "2px 8px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "var(--space-4)",
              paddingTop: "var(--space-4)",
              borderTop: "1px solid var(--border)",
            }}
          >
            <span
              className="btn btn-primary btn-sm"
              style={{ fontSize: "11px", padding: "4px 12px" }}
            >
              View Live Demo →
            </span>
            <span
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                color: "var(--text-secondary)",
                transition: "all 0.2s ease",
              }}
            >
              ↗
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

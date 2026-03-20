"use client";

import { categories } from "@/data/projects";

interface CategoryFilterProps {
  activeCategory: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({
  activeCategory,
  onChange,
}: CategoryFilterProps) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--space-2)",
        justifyContent: "center",
      }}
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            letterSpacing: "0.05em",
            padding: "6px 16px",
            borderRadius: "var(--radius-full)",
            border:
              activeCategory === category
                ? "1px solid var(--accent)"
                : "1px solid var(--border)",
            background:
              activeCategory === category
                ? "var(--accent)"
                : "transparent",
            color:
              activeCategory === category
                ? "var(--black)"
                : "var(--text-secondary)",
            cursor: "pointer",
            transition: "all 0.2s ease",
            whiteSpace: "nowrap",
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

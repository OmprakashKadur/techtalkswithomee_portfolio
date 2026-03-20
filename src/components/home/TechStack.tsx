"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

const coreTech = [
  "Next.js 14",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
];

const infraTech = [
  "MongoDB",
  "PostgreSQL",
  "Vercel",
  "Google Places API",
  "Puppeteer",
  "Razorpay",
  "REST APIs",
];

function BadgeRow({
  items,
  variant,
}: {
  items: string[];
  variant: "accent" | "default";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "var(--space-3)",
      }}
    >
      {items.map((item, i) => (
        <motion.span
          key={item}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.4,
            delay: i * 0.03,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            borderRadius: "6px",
            padding: "6px 14px",
            border:
              variant === "accent"
                ? "1px solid rgba(198, 241, 53, 0.25)"
                : "1px solid rgba(255, 255, 255, 0.08)",
            background:
              variant === "accent"
                ? "rgba(198, 241, 53, 0.08)"
                : "rgba(255, 255, 255, 0.03)",
            color:
              variant === "accent" ? "var(--accent)" : "var(--text-secondary)",
          }}
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center" }}>
        <RevealOnScroll>
          <span className="label">{"// built with"}</span>
          <h2 style={{ marginTop: "var(--space-4)" }}>
            My <span className="text-gradient">Stack</span>
          </h2>
        </RevealOnScroll>

        <div style={{ marginTop: "var(--space-12)" }}>
          <BadgeRow items={coreTech} variant="accent" />
        </div>

        <div style={{ marginTop: "var(--space-6)" }}>
          <BadgeRow items={infraTech} variant="default" />
        </div>
      </div>
    </section>
  );
}

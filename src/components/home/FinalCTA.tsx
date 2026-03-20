"use client";

import RevealOnScroll from "@/components/shared/RevealOnScroll";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="section"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--black-1)",
      }}
    >
      {/* Radial Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(198, 241, 53, 0.12), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "var(--space-24) var(--space-6)",
        }}
      >
        <RevealOnScroll>
          <span className="label">{"// let's work together"}</span>

          <h2 style={{ marginTop: "var(--space-4)" }}>
            Is Your Business{" "}
            <span className="text-gradient">Invisible Online?</span>
          </h2>

          <p
            style={{
              marginTop: "var(--space-4)",
              maxWidth: "520px",
              margin: "var(--space-4) auto 0",
              fontSize: "var(--text-lg)",
            }}
          >
            I&apos;ll have a working demo of your website ready within 24 hours.
            No commitment needed.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "var(--space-4)",
              marginTop: "var(--space-8)",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://wa.me/919964185119"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              WhatsApp Me Now
            </a>
            <a
              href="mailto:kaduromee@gmail.com"
              className="btn btn-ghost btn-lg"
            >
              Send an Email
            </a>
          </div>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-sm)",
              color: "var(--text-muted)",
              marginTop: "var(--space-8)",
            }}
          >
            📱 9964185119 &nbsp;|&nbsp; ✉️ kaduromee@gmail.com
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

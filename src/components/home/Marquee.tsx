"use client";

export default function Marquee() {
  const text =
    "Next.js  ✦  React  ✦  TypeScript  ✦  MongoDB  ✦  Config-Driven  ✦  Multi-Tenant  ✦  Vercel  ✦  WhatsApp Leads  ✦  Local SEO  ✦  AI Apps  ✦  ";

  return (
    <div
      style={{
        height: "52px",
        background: "var(--black-2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="marquee-track">
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            whiteSpace: "nowrap",
            paddingRight: "16px",
          }}
        >
          {text}
          {text}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            whiteSpace: "nowrap",
            paddingRight: "16px",
          }}
        >
          {text}
          {text}
        </span>
      </div>
    </div>
  );
}

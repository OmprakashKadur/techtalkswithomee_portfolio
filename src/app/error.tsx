"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
          Something Went Wrong
        </span>

        <h1 style={{ marginTop: "var(--space-4)", fontSize: "var(--text-4xl)" }}>
          Oops, an error occurred.
        </h1>

        <p
          style={{
            marginTop: "var(--space-4)",
            color: "var(--text-secondary)",
            maxWidth: "480px",
            margin: "var(--space-4) auto 0",
          }}
        >
          Something unexpected happened. Please try again or get in touch if the problem persists.
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
          <button onClick={reset} className="btn btn-primary btn-lg">
            Try Again
          </button>
          <Link href="/" className="btn btn-outline btn-lg">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

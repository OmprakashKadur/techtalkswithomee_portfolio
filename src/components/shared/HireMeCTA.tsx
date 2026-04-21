import Link from "next/link";

interface HireMeCTAProps {
  variant?: "primary" | "outline" | "section";
  text?: string;
}

export default function HireMeCTA({
  variant = "section",
  text = "Ready to grow your business online?",
}: HireMeCTAProps) {
  if (variant === "section") {
    return (
      <section
        style={{
          padding: "var(--space-16) 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <div
            style={{
              background: "var(--black-1)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
              padding: "var(--space-12) var(--space-8)",
            }}
          >
            <h2 style={{ fontSize: "var(--text-3xl)" }}>
              {text}
            </h2>
            <p
              style={{
                marginTop: "var(--space-4)",
                maxWidth: "500px",
                margin: "var(--space-4) auto 0",
              }}
            >
              I build fast, SEO-optimized websites that bring you customers.
              Starting at ₹3,999. WhatsApp me for a free consultation.
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
                href="https://wa.me/919964185119?text=Hi%20Omprakash,%20I%20need%20a%20website%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                💬 WhatsApp Me →
              </a>
              <Link href="/#contact" className="btn btn-outline btn-lg">
                📧 Send an Email
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <a
      href="https://wa.me/919964185119?text=Hi%20Omprakash,%20I%20need%20a%20website%20for%20my%20business."
      target="_blank"
      rel="noopener noreferrer"
      className={variant === "primary" ? "btn btn-primary" : "btn btn-outline"}
    >
      Hire Me →
    </a>
  );
}

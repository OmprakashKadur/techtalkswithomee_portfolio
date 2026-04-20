"use client";

import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/OmprakashKadur",
    icon: "⌨️",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/omprakashkm",
    icon: "💼",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919964185119",
    icon: "💬",
  },
];

export default function Footer() {
  return (
    <footer className="footer" style={{ background: "var(--black)" }}>
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Column 1 — Brand */}
          <div>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "18px",
                fontWeight: 600,
                color: "var(--text-primary)",
                textDecoration: "none",
              }}
            >
              <span>&lt;</span>techtalks
              <span style={{ color: "var(--accent)" }}> /</span>
              <span>&gt;</span>
            </Link>
            <p
              style={{
                marginTop: "var(--space-4)",
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                color: "var(--text-secondary)",
                fontSize: "var(--text-sm)",
                lineHeight: 1.7,
                maxWidth: "320px",
              }}
            >
              Helping local businesses in Tier 2 & 3 cities getfound online. techtalkswithomee.com
            </p>
            <div
              style={{
                display: "flex",
                gap: "var(--space-6)",
                marginTop: "var(--space-6)",
              }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-1)",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  <span>{link.icon}</span> {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Links */}
          <div>
            <h6
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                letterSpacing: "0.12em",
                marginBottom: "var(--space-4)",
              }}
            >
              Links
            </h6>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-3)",
              }}
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 300,
                    fontSize: "var(--text-sm)",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h6
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                letterSpacing: "0.12em",
                marginBottom: "var(--space-4)",
              }}
            >
              Contact
            </h6>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-3)",
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: "var(--text-sm)",
                color: "var(--text-secondary)",
              }}
            >
              <span>📱 9964185119</span>
              <span>✉️ kaduromee@gmail.com</span>
              <span>📍 Bangalore, India</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            marginTop: "var(--space-12)",
            paddingTop: "var(--space-6)",
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "var(--space-4)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-muted)",
            }}
          >
            © {new Date().getFullYear()} Omprakash Kadur. All rights reserved.
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-muted)",
            }}
          >
            Built with Next.js · Deployed on Vercel
          </span>
        </div>
      </div>
    </footer>
  );
}

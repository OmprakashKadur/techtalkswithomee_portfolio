"use client";

import RevealOnScroll from "@/components/shared/RevealOnScroll";

const services = [
  {
    emoji: "💻",
    title: "Business Website",
    desc: "Fast, mobile-first, config-driven websites. Built with Next.js 14. Live in 24–48 hours.",
    tag: "Next.js · TypeScript · Vercel",
    price: "From ₹3,999",
  },
  {
    emoji: "📍",
    title: "Google Presence",
    desc: "Setup Google Business Profile, local SEO, and Maps listing so customers find you first.",
    tag: "SEO · Google Maps · Local Search",
    price: "Included",
  },
  {
    emoji: "📲",
    title: "WhatsApp Integration",
    desc: "One-tap WhatsApp button on every page. Leads arrive directly on the owner's phone.",
    tag: "Lead Gen · Conversion · Zero Friction",
    price: "Included",
  },
  {
    emoji: "📊",
    title: "Growth Tracking",
    desc: "Monthly report: page views, WhatsApp clicks, call clicks. Clients see real ROI.",
    tag: "MongoDB · Analytics · Reports",
    price: "₹999/mo",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <RevealOnScroll>
          <span className="label">{"// services"}</span>
          <h2 style={{ marginTop: "var(--space-4)" }}>
            What I <span className="text-gradient">Deliver</span>
          </h2>
        </RevealOnScroll>

        <div className="services-grid" style={{ marginTop: "var(--space-12)" }}>
          {services.map((service, i) => (
            <RevealOnScroll key={service.title} delay={i * 0.1}>
              <div className="service-card card card-glow">
                {/* Price Badge */}
                <span
                  style={{
                    position: "absolute",
                    top: "var(--space-4)",
                    right: "var(--space-4)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    color: "var(--accent)",
                    fontWeight: 500,
                  }}
                >
                  {service.price}
                </span>

                {/* Emoji Icon */}
                <div
                  style={{
                    fontSize: "48px",
                    marginBottom: "var(--space-4)",
                    lineHeight: 1,
                  }}
                >
                  {service.emoji}
                </div>

                {/* Title */}
                <h5
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "var(--text-primary)",
                    marginBottom: "var(--space-3)",
                  }}
                >
                  {service.title}
                </h5>

                {/* Description */}
                <p
                  style={{
                    fontWeight: 300,
                    fontSize: "var(--text-sm)",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: "var(--space-6)",
                  }}
                >
                  {service.desc}
                </p>

                {/* Bottom Tag */}
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {service.tag}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

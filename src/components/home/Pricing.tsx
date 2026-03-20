"use client";

import RevealOnScroll from "@/components/shared/RevealOnScroll";

interface PricingTier {
  name: string;
  price: string;
  subtitle: string;
  features: { text: string; included: boolean }[];
  cta: string;
  featured: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "STARTER",
    price: "₹3,999",
    subtitle: "Get online fast",
    features: [
      { text: "1-Page Website", included: true },
      { text: "Mobile Responsive", included: true },
      { text: "WhatsApp Button", included: true },
      { text: "Google Maps Embed", included: true },
      { text: "1 Revision", included: true },
      { text: "SEO Setup", included: false },
      { text: "Analytics", included: false },
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "GROWTH",
    price: "₹7,999",
    subtitle: "For most businesses",
    features: [
      { text: "5-Page Website", included: true },
      { text: "Mobile Responsive", included: true },
      { text: "WhatsApp Lead Capture", included: true },
      { text: "Google Business Setup", included: true },
      { text: "SEO Optimised", included: true },
      { text: "Analytics Dashboard", included: true },
      { text: "3 Revisions", included: true },
      { text: "1 Month Support", included: true },
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "PRO",
    price: "₹14,999",
    subtitle: "Serious growth",
    features: [
      { text: "10-Page Website", included: true },
      { text: "Everything in Growth", included: true },
      { text: "Custom Analytics", included: true },
      { text: "Call + WhatsApp Tracking", included: true },
      { text: "3 Months Support", included: true },
      { text: "Unlimited Revisions", included: true },
      { text: "Priority 2hr Response", included: true },
    ],
    cta: "Get Started",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <RevealOnScroll>
          <div style={{ textAlign: "center" }}>
            <span className="label">{"// pricing"}</span>
            <h2 style={{ marginTop: "var(--space-4)" }}>
              Simple <span className="text-gradient">Pricing</span>
            </h2>
            <p style={{ marginTop: "var(--space-3)" }}>
              One-time payment. No hidden fees. No contracts.
            </p>
          </div>
        </RevealOnScroll>

        <div className="pricing-grid" style={{ marginTop: "var(--space-12)" }}>
          {tiers.map((tier, i) => (
            <RevealOnScroll key={tier.name} delay={i * 0.15}>
              <div
                className="card"
                style={{
                  background: tier.featured
                    ? "rgba(198, 241, 53, 0.03)"
                    : "var(--black-1)",
                  border: tier.featured
                    ? "1px solid rgba(198, 241, 53, 0.4)"
                    : "1px solid var(--border)",
                  borderRadius: "var(--radius-xl)",
                  padding: "var(--space-8)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  position: "relative",
                }}
              >
                {/* Featured Badge */}
                {tier.featured && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-12px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "var(--accent)",
                      color: "var(--black)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      fontWeight: 500,
                      padding: "4px 16px",
                      borderRadius: "var(--radius-full)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Most Popular
                  </span>
                )}

                {/* Plan Name */}
                <h6
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    letterSpacing: "0.15em",
                    color: tier.featured
                      ? "var(--accent)"
                      : "var(--text-muted)",
                    marginBottom: "var(--space-2)",
                    textTransform: "uppercase",
                  }}
                >
                  {tier.name}
                </h6>

                {/* Price */}
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "var(--text-4xl)",
                    color: "var(--text-primary)",
                    marginBottom: "var(--space-1)",
                  }}
                >
                  {tier.price}
                </h3>

                {/* Subtitle */}
                <p
                  style={{
                    fontWeight: 300,
                    fontSize: "var(--text-sm)",
                    color: "var(--text-secondary)",
                    marginBottom: "var(--space-8)",
                  }}
                >
                  {tier.subtitle}
                </p>

                {/* Features */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-3)",
                    flex: 1,
                    marginBottom: "var(--space-8)",
                  }}
                >
                  {tier.features.map((feature) => (
                    <div
                      key={feature.text}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "var(--space-3)",
                        fontSize: "var(--text-sm)",
                        fontWeight: 300,
                        color: feature.included
                          ? "var(--text-secondary)"
                          : "var(--text-muted)",
                        textDecoration: feature.included
                          ? "none"
                          : "line-through",
                      }}
                    >
                      <span
                        style={{
                          color: feature.included
                            ? "var(--accent)"
                            : "var(--text-muted)",
                          fontWeight: 500,
                          fontSize: "14px",
                          width: "20px",
                          flexShrink: 0,
                        }}
                      >
                        {feature.included ? "✓" : "✗"}
                      </span>
                      {feature.text}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/919964185119"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${
                    tier.featured ? "btn-primary" : "btn-outline"
                  }`}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {tier.cta}
                </a>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

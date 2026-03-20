"use client";

import RevealOnScroll from "@/components/shared/RevealOnScroll";

const steps = [
  {
    num: "01",
    title: "Scrape & Identify",
    desc: "Find businesses with no website or poor online presence in Tier 2 & 3 cities.",
  },
  {
    num: "02",
    title: "Setup in 24hrs",
    desc: "Optimized multi-tenant system means lightning fast delivery — sites go live the same day.",
  },
  {
    num: "03",
    title: "Deploy + Domain",
    desc: "Deployed on Vercel with a custom domain. SSL, CDN, and speed — all included.",
  },
  {
    num: "04",
    title: "Track & Report",
    desc: "WhatsApp clicks, call clicks, page views — clients see real, measurable growth.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section"
      style={{ padding: "120px 0" }}
    >
      <div className="container">
        <div className="about-layout">
          {/* Left Column */}
          <RevealOnScroll direction="left" className="about-left">
            <span className="label">{"// about.me"}</span>
            <h2 style={{ marginTop: "var(--space-4)" }}>
              I Turn Invisible Businesses Into{" "}
              <span className="text-gradient">Digital Magnets.</span>
            </h2>
            <p style={{ marginTop: "var(--space-6)" }}>
              I specialise in building high-performance, multi-tenant websites
              that help local businesses grow. One robust system that powers
              premium client sites, each on their own domain, all deployed in
              minutes on Vercel.
            </p>
            <p style={{ marginTop: "var(--space-4)" }}>
              My clients are local businesses in Tier 2 & 3 cities across India.
              Salons, clinics, coaching classes, restaurants — businesses that
              are great at what they do but invisible online.
            </p>
            <p style={{ marginTop: "var(--space-4)" }}>
              Every site I ship comes with WhatsApp lead capture, Google
              Business setup, and monthly analytics so clients see real,
              measurable ROI.
            </p>
          </RevealOnScroll>

          {/* Right Column — Process Card */}
          <RevealOnScroll direction="right" delay={0.2} className="about-right">
            <div
              className="card"
              style={{
                background: "var(--black-1)",
                padding: "var(--space-8)",
                borderRadius: "var(--radius-xl)",
              }}
            >
              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  marginBottom: "var(--space-8)",
                }}
              >
                My Process
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-8)",
                }}
              >
                {steps.map((step) => (
                  <div
                    key={step.num}
                    style={{
                      display: "flex",
                      gap: "var(--space-4)",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "40px",
                        fontWeight: 400,
                        color: "var(--accent)",
                        opacity: 0.3,
                        lineHeight: 1,
                        minWidth: "56px",
                      }}
                    >
                      {step.num}
                    </span>
                    <div>
                      <h6
                        style={{
                          fontFamily: "var(--font-body)",
                          fontWeight: 500,
                          fontSize: "var(--text-base)",
                          color: "var(--text-primary)",
                          lineHeight: 1.2,
                        }}
                      >
                        {step.title}
                      </h6>
                      <p
                        style={{
                          fontWeight: 300,
                          fontSize: "var(--text-sm)",
                          color: "var(--text-secondary)",
                          marginTop: "var(--space-1)",
                          lineHeight: 1.6,
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

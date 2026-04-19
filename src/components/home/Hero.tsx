"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "var(--black)",
      }}
      className="bg-dots"
    >
      {/* Floating Orbs */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          left: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "rgba(198, 241, 53, 0.08)",
          filter: "blur(120px)",
          animation: "float 8s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(79, 195, 247, 0.06)",
          filter: "blur(120px)",
          animation: "float 8s ease-in-out infinite reverse",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="hero-layout">
          {/* Left Side */}
          <div className="hero-left">
            {/* Available Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="badge badge-accent badge-dot">
                available for projects
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                marginTop: "var(--space-6)",
                fontWeight: 800,
                lineHeight: 1.05,
              }}
            >
              I Build Websites
              <br />
              That Bring You
              <br />
              <span className="text-gradient">Customers.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                marginTop: "var(--space-6)",
                maxWidth: "520px",
                fontSize: "var(--text-base)",
                lineHeight: 1.8,
                color: "var(--text-secondary)",
                fontWeight: 300,
              }}
            >
              I build high-performance, multi-tenant websites for salons, clinics,
              and local businesses in Tier 2 & 3 cities. techtalkswithomee.com
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                display: "flex",
                gap: "var(--space-4)",
                marginTop: "var(--space-8)",
                flexWrap: "wrap",
              }}
            >
              <Link href="/work" className="btn btn-primary">
                View My Work →
              </Link>
              <a
                href="https://wa.me/919964185119"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                WhatsApp Me
              </a>
            </motion.div>

            {/* Stat Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                display: "flex",
                gap: "var(--space-3)",
                marginTop: "var(--space-8)",
                flexWrap: "wrap",
              }}
            >
              {[
                { value: "20+", label: "Projects" },
                { value: "5", label: "Stacks" },
                { value: "₹0", label: "Hidden Fees" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="badge badge-accent"
                  style={{
                    padding: "var(--space-2) var(--space-4)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "2px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontWeight: 500,
                      fontSize: "var(--text-base)",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      opacity: 0.7,
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side — Code Card */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="animate-float" style={{ width: "100%" }}>
              <div
                style={{
                  background: "var(--black-1)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "24px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  lineHeight: 1.8,
                  width: "100%",
                  maxWidth: "480px",
                }}
              >
                {/* Window Dots + LIVE badge */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "var(--space-4)",
                  }}
                >
                  <div style={{ display: "flex", gap: "6px" }}>
                    <span
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#ff5f56",
                        display: "inline-block",
                      }}
                    />
                    <span
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#ffbd2e",
                        display: "inline-block",
                      }}
                    />
                    <span
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#27c93f",
                        display: "inline-block",
                      }}
                    />
                  </div>
                  <span className="badge badge-accent badge-dot" style={{ fontSize: "10px" }}>
                    LIVE
                  </span>
                </div>

                {/* File name */}
                <div style={{ color: "var(--text-muted)", marginBottom: "var(--space-3)" }}>
                  {"// website.config.ts"}
                </div>

                {/* Code */}
                <div>
                  <span style={{ color: "var(--text-muted)" }}>export </span>
                  <span style={{ color: "var(--text-muted)" }}>const </span>
                  <span style={{ color: "var(--text-primary)" }}>config </span>
                  <span style={{ color: "var(--text-muted)" }}>= {"{"}</span>
                </div>
                <div style={{ paddingLeft: "16px" }}>
                  <span style={{ color: "var(--blue)" }}>slug</span>
                  <span style={{ color: "var(--text-muted)" }}>: </span>
                  <span style={{ color: "var(--accent)" }}>&quot;glam-studio&quot;</span>
                  <span style={{ color: "var(--text-muted)" }}>,</span>
                </div>
                <div style={{ paddingLeft: "16px" }}>
                  <span style={{ color: "var(--blue)" }}>business</span>
                  <span style={{ color: "var(--text-muted)" }}>: </span>
                  <span style={{ color: "var(--accent)" }}>&quot;Glam Studio Salon&quot;</span>
                  <span style={{ color: "var(--text-muted)" }}>,</span>
                </div>
                <div style={{ paddingLeft: "16px" }}>
                  <span style={{ color: "var(--blue)" }}>category</span>
                  <span style={{ color: "var(--text-muted)" }}>: </span>
                  <span style={{ color: "var(--accent)" }}>&quot;Beauty &amp; Salon&quot;</span>
                  <span style={{ color: "var(--text-muted)" }}>,</span>
                </div>
                <div style={{ paddingLeft: "16px" }}>
                  <span style={{ color: "var(--blue)" }}>theme</span>
                  <span style={{ color: "var(--text-muted)" }}>: {"{"}</span>
                </div>
                <div style={{ paddingLeft: "32px" }}>
                  <span style={{ color: "var(--blue)" }}>primary</span>
                  <span style={{ color: "var(--text-muted)" }}>: </span>
                  <span style={{ color: "var(--accent)" }}>&quot;#EC4899&quot;</span>
                  <span style={{ color: "var(--text-muted)" }}>,</span>
                </div>
                <div style={{ paddingLeft: "16px" }}>
                  <span style={{ color: "var(--text-muted)" }}>{"}"}</span>
                  <span style={{ color: "var(--text-muted)" }}>,</span>
                </div>
                <div style={{ paddingLeft: "16px" }}>
                  <span style={{ color: "var(--blue)" }}>sections</span>
                  <span style={{ color: "var(--text-muted)" }}>: [</span>
                </div>
                <div style={{ paddingLeft: "32px" }}>
                  <span style={{ color: "var(--accent)" }}>&quot;Hero&quot;</span>
                  <span style={{ color: "var(--text-muted)" }}>, </span>
                  <span style={{ color: "var(--accent)" }}>&quot;Services&quot;</span>
                  <span style={{ color: "var(--text-muted)" }}>,</span>
                </div>
                <div style={{ paddingLeft: "32px" }}>
                  <span style={{ color: "var(--accent)" }}>&quot;Gallery&quot;</span>
                  <span style={{ color: "var(--text-muted)" }}>, </span>
                  <span style={{ color: "var(--accent)" }}>&quot;Contact&quot;</span>
                </div>
                <div style={{ paddingLeft: "16px" }}>
                  <span style={{ color: "var(--text-muted)" }}>]</span>
                </div>
                <div>
                  <span style={{ color: "var(--text-muted)" }}>{"}"}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

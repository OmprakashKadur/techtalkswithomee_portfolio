import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HireMeCTA from "@/components/shared/HireMeCTA";

export const metadata: Metadata = {
  title: "Case Study: SmileCare Dental — 12 New Patients/Month from Google | techtalkswithomee.com",
  description:
    "How SmileCare Dental, a Bangalore clinic, got 12 new patients per month from Google after launching their Next.js website with local SEO and WhatsApp lead capture.",
  keywords: [
    "dental clinic website india",
    "dental clinic seo india",
    "dental website designer bangalore",
    "healthcare website india",
    "local seo dental clinic",
  ],
  alternates: {
    canonical: "/case-studies/smilecare-dental",
  },
  openGraph: {
    title: "Case Study: SmileCare Dental — 12 New Patients/Month from Google",
    description:
      "How a Bangalore dental clinic got 12 new patients per month after launching their Next.js website with local SEO.",
    type: "article",
    url: "https://www.techtalkswithomee.com/case-studies/smilecare-dental",
    images: [
      {
        url: "/images/smile-care-dental_01.png",
        width: 1200,
        height: 630,
        alt: "SmileCare Dental Website Case Study",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Study: SmileCare Dental — 12 New Patients/Month",
    description: "How a Bangalore dental clinic grew with a Next.js website and local SEO.",
    images: ["/images/smile-care-dental_01.png"],
  },
};

const results = [
  { metric: "340%", label: "Increase in Google Maps views", period: "in 3 months" },
  { metric: "156%", label: "Increase in website clicks", period: "from Google Business" },
  { metric: "89%", label: "Increase in direction requests", period: "from Google Maps" },
  { metric: "12", label: "New patients per month", period: "from Google alone" },
];

const features = [
  {
    title: "Online Appointment Booking",
    desc: "Patients can book appointments directly through the website. No phone calls needed. Appointments sync with the clinic's calendar.",
  },
  {
    title: "Doctor Profiles",
    desc: "Detailed profiles for each dentist with qualifications, specializations, and patient reviews. Builds trust before the first visit.",
  },
  {
    title: "Service Showcase",
    desc: "Clear presentation of all dental services with pricing, duration, and what to expect. Reduces phone inquiries by 60%.",
  },
  {
    title: "WhatsApp Lead Capture",
    desc: "One-tap WhatsApp button on every page. Patients send enquiries directly to the clinic's phone. Response time under 5 minutes.",
  },
  {
    title: "Google Reviews Widget",
    desc: "Live Google reviews displayed on the homepage. 4.8-star average from 47 reviews. Social proof that converts visitors.",
  },
  {
    title: "Mobile-First Design",
    desc: "70% of patients browse on mobile. The site loads in under 2 seconds and looks perfect on every device.",
  },
];

export default function SmileCareCaseStudy() {
  return (
    <div style={{ paddingTop: "120px", minHeight: "100vh" }}>
      <div className="container" style={{ maxWidth: "900px" }}>
        {/* Breadcrumb */}
        <nav style={{ marginBottom: "var(--space-8)" }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              color: "var(--text-muted)",
            }}
          >
            <Link href="/" style={{ color: "var(--text-muted)" }}>
              Home
            </Link>
            <span style={{ margin: "0 var(--space-2)" }}>/</span>
            <Link href="/work" style={{ color: "var(--text-muted)" }}>
              Work
            </Link>
            <span style={{ margin: "0 var(--space-2)" }}>/</span>
            <span style={{ color: "var(--text-secondary)" }}>
              SmileCare Dental Case Study
            </span>
          </div>
        </nav>

        {/* Header */}
        <div style={{ textAlign: "center" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              color: "var(--accent)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Case Study
          </span>
          <h1 style={{ marginTop: "var(--space-4)" }}>
            SmileCare{" "}
            <span className="text-gradient">Dental</span>
          </h1>
          <p
            style={{
              marginTop: "var(--space-4)",
              fontSize: "var(--text-lg)",
              maxWidth: "640px",
              margin: "var(--space-4) auto 0",
            }}
          >
            How a Bangalore dental clinic went from zero online presence to{" "}
            <strong style={{ color: "var(--accent)" }}>12 new patients per month</strong>{" "}
            from Google alone.
          </p>
        </div>

        {/* Hero Image */}
        <div
          style={{
            marginTop: "var(--space-12)",
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
            border: "1px solid var(--border)",
            position: "relative",
            aspectRatio: "16 / 9",
          }}
        >
          <Image
            src="/images/smile-care-dental_01.png"
            alt="SmileCare Dental Website"
            fill
            sizes="(max-width: 900px) 100vw, 900px"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Results Bar */}
        <div
          style={{
            marginTop: "var(--space-12)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "var(--space-4)",
          }}
        >
          {results.map((r) => (
            <div
              key={r.label}
              className="card"
              style={{ padding: "var(--space-6)", textAlign: "center" }}
            >
              <div
                style={{
                  fontSize: "var(--text-3xl)",
                  fontWeight: 700,
                  color: "var(--accent)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {r.metric}
              </div>
              <div
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--text-secondary)",
                  marginTop: "var(--space-1)",
                }}
              >
                {r.label}
              </div>
              <div
                style={{
                  fontSize: "var(--text-xs)",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-mono)",
                  marginTop: "var(--space-1)",
                }}
              >
                {r.period}
              </div>
            </div>
          ))}
        </div>

        {/* The Challenge */}
        <div style={{ marginTop: "var(--space-16)" }}>
          <h2>
            The <span className="text-gradient">Challenge</span>
          </h2>
          <p style={{ marginTop: "var(--space-4)", lineHeight: 1.8 }}>
            SmileCare Dental is a multi-specialty dental clinic in Bangalore with
            experienced dentists and modern equipment. But they had a problem:
          </p>
          <ul
            style={{
              marginTop: "var(--space-4)",
              marginLeft: "var(--space-6)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-2)",
            }}
          >
            <li style={{ lineHeight: 1.8 }}>
              <strong>No website</strong> — Patients could not find them online
            </li>
            <li style={{ lineHeight: 1.8 }}>
              <strong>No Google Business Profile</strong> — Invisible on Google Maps
            </li>
            <li style={{ lineHeight: 1.8 }}>
              <strong>Relied on walk-ins</strong> — No way to capture online leads
            </li>
            <li style={{ lineHeight: 1.8 }}>
              <strong>Competitors dominated</strong> — Other clinics ranked for "dentist near me"
            </li>
          </ul>
          <p style={{ marginTop: "var(--space-4)", lineHeight: 1.8 }}>
            The clinic was losing potential patients every day to competitors who
            had invested in their online presence.
          </p>
        </div>

        {/* The Solution */}
        <div style={{ marginTop: "var(--space-16)" }}>
          <h2>
            The <span className="text-gradient">Solution</span>
          </h2>
          <p style={{ marginTop: "var(--space-4)", lineHeight: 1.8 }}>
            I built a complete digital presence for SmileCare Dental in under 48
            hours. Here is what was delivered:
          </p>

          <div
            style={{
              marginTop: "var(--space-8)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "var(--space-6)",
            }}
          >
            {features.map((f) => (
              <div key={f.title} className="card" style={{ padding: "var(--space-6)" }}>
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "var(--text-base)",
                    marginBottom: "var(--space-2)",
                  }}
                >
                  {f.title}
                </h4>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "var(--text-sm)",
                    lineHeight: 1.7,
                  }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div style={{ marginTop: "var(--space-16)" }}>
          <h2>
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <div
            style={{
              marginTop: "var(--space-6)",
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-3)",
            }}
          >
            {[
              "Next.js 14",
              "TypeScript",
              "Tailwind CSS",
              "Vercel",
              "Google Business API",
              "Schema Markup",
              "WhatsApp Business API",
            ].map((tech) => (
              <span
                key={tech}
                className="badge"
                style={{ fontSize: "var(--text-sm)", padding: "6px 14px" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div style={{ marginTop: "var(--space-16)" }}>
          <h2>
            Project <span className="text-gradient">Timeline</span>
          </h2>
          <div
            style={{
              marginTop: "var(--space-8)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-6)",
            }}
          >
            {[
              {
                day: "Day 1",
                title: "Discovery & Design",
                desc: "Understood clinic services, target patients, and competitors. Created wireframes and design mockups.",
              },
              {
                day: "Day 2",
                title: "Development",
                desc: "Built the website with Next.js. Integrated booking system, WhatsApp, and Google Business. Added schema markup.",
              },
              {
                day: "Day 3",
                title: "Content & SEO",
                desc: "Wrote service descriptions, optimized meta tags, created sitemap, and submitted to Google Search Console.",
              },
              {
                day: "Day 4",
                title: "Launch & Tracking",
                desc: "Deployed on Vercel, connected custom domain, set up Google Analytics, and configured conversion tracking.",
              },
            ].map((item) => (
              <div
                key={item.day}
                style={{
                  display: "flex",
                  gap: "var(--space-6)",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-sm)",
                    color: "var(--accent)",
                    fontWeight: 600,
                    minWidth: "70px",
                  }}
                >
                  {item.day}
                </span>
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: "var(--text-base)",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "var(--text-sm)",
                      lineHeight: 1.7,
                      marginTop: "var(--space-1)",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Quote */}
        <div
          style={{
            marginTop: "var(--space-16)",
            padding: "var(--space-10)",
            background: "var(--black-1)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-xl)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "48px", lineHeight: 1 }}>"</div>
          <blockquote
            style={{
              fontSize: "var(--text-xl)",
              fontStyle: "italic",
              lineHeight: 1.6,
              maxWidth: "640px",
              margin: "var(--space-4) auto 0",
            }}
          >
            We went from relying on walk-ins to getting 12 new patients every month
            from Google. The WhatsApp integration is a game-changer — patients book
            appointments while commuting.
          </blockquote>
          <div
            style={{
              marginTop: "var(--space-6)",
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-sm)",
              color: "var(--text-muted)",
            }}
          >
            — SmileCare Dental Team, Bangalore
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "var(--space-16)",
            padding: "var(--space-12)",
            background: "var(--black-1)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-xl)",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "var(--text-2xl)" }}>
            Want Similar Results for Your Clinic?
          </h2>
          <p
            style={{
              marginTop: "var(--space-4)",
              color: "var(--text-secondary)",
              maxWidth: "500px",
              margin: "var(--space-4) auto 0",
            }}
          >
            I build dental clinic websites that bring patients. Starting at ₹3,999.
            Live in 24-48 hours.
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
              href="https://wa.me/919964185119?text=Hi%20Omprakash,%20I%20saw%20the%20SmileCare%20Dental%20case%20study.%20I%20need%20a%20similar%20website%20for%20my%20clinic."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              💬 Get a Free Quote
            </a>
            <a
              href="https://smilecare-dental-omee.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-lg"
            >
              View Live Site →
            </a>
          </div>
        </div>
      </div>

      <HireMeCTA text="Need a dental clinic website that brings patients?" />
    </div>
  );
}

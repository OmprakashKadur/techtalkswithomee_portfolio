import type { Metadata } from "next";
import Link from "next/link";
import HireMeCTA from "@/components/shared/HireMeCTA";

export const metadata: Metadata = {
  title: "Dental Clinic Website Design: 7 Features That Bring New Patients | techtalkswithomee.com",
  description:
    "What makes a dental clinic website actually bring patients? Learn the 7 must-have features for dental websites in India, with real examples from SmileCare Dental.",
  keywords: [
    "dental clinic website designer",
    "dental clinic website india",
    "dental website design bangalore",
    "healthcare website india",
    "dental clinic seo india",
    "dental website features",
    "patient booking website",
  ],
  alternates: {
    canonical: "/blog/dental-clinic-website-design",
  },
  openGraph: {
    title: "Dental Clinic Website Design: 7 Features That Bring New Patients",
    description:
      "The 7 must-have features for dental clinic websites in India. Real examples from SmileCare Dental.",
    type: "article",
    url: "https://www.techtalkswithomee.com/blog/dental-clinic-website-design",
    publishedTime: "2026-04-23",
    tags: ["Dental", "Healthcare", "Website Design", "India"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Clinic Website Design: 7 Features That Bring Patients",
    description: "Must-have features for dental websites in India. Real case study examples.",
  },
};

const features = [
  {
    num: "01",
    title: "Online Appointment Booking",
    desc: "Patients can book appointments directly through your website without calling. This one feature can increase bookings by 40%. The booking system should let patients choose their preferred date, time, and dentist.",
    why: "67% of patients prefer online booking over phone calls. It removes friction and captures leads 24/7.",
  },
  {
    num: "02",
    title: "Doctor Profiles with Credentials",
    desc: "Detailed profiles for each dentist showing qualifications, specializations, years of experience, and patient reviews. Include professional photos — patients want to see who will be treating them.",
    why: "Trust is the #1 factor in choosing a dentist. Detailed profiles with real credentials build confidence before the first visit.",
  },
  {
    num: "03",
    title: "Clear Service Menu with Pricing",
    desc: "List all dental services with transparent pricing: consultations, cleanings, fillings, root canals, crowns, implants, whitening, and braces. Include estimated time for each procedure.",
    why: "Transparent pricing filters out price shoppers and attracts serious patients. It also reduces phone inquiries by 60%.",
  },
  {
    num: "04",
    title: "WhatsApp Lead Capture",
    desc: "A floating WhatsApp button on every page that opens a pre-filled message like: 'Hi, I am interested in booking a dental consultation. Please share available slots.'",
    why: "Indians prefer WhatsApp over phone calls and contact forms. This one feature can double your lead generation.",
  },
  {
    num: "05",
    title: "Before/After Gallery",
    desc: "Visual proof of your work. Show real patient transformations (with permission) for whitening, braces, veneers, and implants. Organize by treatment type.",
    why: "Before/after photos are the most convincing content on a dental website. They demonstrate expertise and set realistic expectations.",
  },
  {
    num: "06",
    title: "Google Reviews Integration",
    desc: "Display your live Google reviews directly on your homepage. Show your star rating, number of reviews, and recent testimonials. Include a 'Leave a Review' button.",
    why: "92% of patients read online reviews before choosing a healthcare provider. Social proof increases appointment bookings by 34%.",
  },
  {
    num: "07",
    title: "Mobile-First, Fast Loading Design",
    desc: "Your website must load in under 2 seconds and look perfect on mobile. 70% of Indian patients browse on smartphones. Use large tap targets, readable fonts, and click-to-call buttons.",
    why: "53% of mobile users abandon sites that take longer than 3 seconds to load. Speed is also a Google ranking factor.",
  },
];

const mustAvoid = [
  "Stock photos of random dentists — use real photos of your team",
  "Hidden pricing — patients will call just to ask about cost",
  "No contact information on every page — make it easy to reach you",
  "PDF-only service menus — they are not mobile-friendly",
  "Auto-playing videos — they annoy visitors and slow down your site",
  "No SSL certificate — patients will not trust a non-HTTPS site",
  "Outdated content — old blog posts and expired offers hurt credibility",
];

export default function DentalClinicWebsitePage() {
  return (
    <div style={{ paddingTop: "120px", minHeight: "100vh" }}>
      <article className="container" style={{ maxWidth: "800px" }}>
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
            <Link href="/blog" style={{ color: "var(--text-muted)" }}>
              Blog
            </Link>
            <span style={{ margin: "0 var(--space-2)" }}>/</span>
            <span style={{ color: "var(--text-secondary)" }}>
              Dental Clinic Website Design
            </span>
          </div>
        </nav>

        {/* Tags */}
        <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
          {["Dental", "Healthcare", "Website Design", "India"].map((tag) => (
            <span
              key={tag}
              className="badge badge-accent"
              style={{ fontSize: "11px", padding: "3px 10px" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 style={{ marginTop: "var(--space-4)" }}>
          Dental Clinic Website Design:{" "}
          <span className="text-gradient">7 Features</span> That Bring New Patients
        </h1>

        <div
          style={{
            marginTop: "var(--space-4)",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
            color: "var(--text-muted)",
            display: "flex",
            gap: "var(--space-4)",
          }}
        >
          <span>April 23, 2026</span>
          <span>·</span>
          <span>7 min read</span>
          <span>·</span>
          <span>By Omprakash Kadur</span>
        </div>

        <hr
          style={{
            margin: "var(--space-10) 0",
            border: "none",
            borderTop: "1px solid var(--border)",
          }}
        />

        {/* Intro */}
        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8, fontSize: "var(--text-lg)" }}>
          A dental clinic website is not just a digital brochure — it is a patient acquisition
          machine. The difference between a website that sits idle and one that brings 12 new
          patients per month comes down to specific features that convert visitors into appointments.
        </p>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          I built the{" "}
          <Link href="/case-studies/smilecare-dental" style={{ color: "var(--accent)" }}>
            SmileCare Dental website
          </Link>{" "}
          which now generates 12 new patients every month from Google alone. In this article,
          I will share the 7 features that make dental clinic websites actually work.
        </p>

        {/* Features */}
        {features.map((feature) => (
          <div key={feature.num} style={{ marginTop: "var(--space-12)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", marginBottom: "var(--space-4)" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-2xl)",
                  fontWeight: 700,
                  color: "var(--accent)",
                  opacity: 0.4,
                }}
              >
                {feature.num}
              </span>
              <h2 style={{ margin: 0 }}>
                {feature.title}
              </h2>
            </div>

            <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
              {feature.desc}
            </p>

            <div
              className="card"
              style={{
                padding: "var(--space-5)",
                borderLeft: "3px solid var(--accent)",
              }}
            >
              <div style={{ fontSize: "var(--text-sm)", lineHeight: 1.7 }}>
                <strong style={{ color: "var(--accent)" }}>Why it matters:</strong>{" "}
                {feature.why}
              </div>
            </div>
          </div>
        ))}

        {/* Case Study Reference */}
        <div
          className="card"
          style={{
            padding: "var(--space-8)",
            margin: "var(--space-12) 0",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "var(--text-xl)" }}>
            Real Results: SmileCare Dental
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "var(--space-4)",
              margin: "var(--space-6) 0",
            }}
          >
            {[
              { num: "340%", label: "More Maps views" },
              { num: "156%", label: "More site clicks" },
              { num: "12", label: "New patients/month" },
              { num: "4.8★", label: "Google rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: "var(--text-2xl)",
                    fontWeight: 700,
                    color: "var(--accent)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {stat.num}
                </div>
                <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", marginTop: "var(--space-1)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/case-studies/smilecare-dental"
            className="btn btn-outline"
          >
            Read Full Case Study →
          </Link>
        </div>

        {/* What to Avoid */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          What to <span className="text-gradient">Avoid</span>
        </h2>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          Just as important as what to include is what to leave out. Here are common mistakes
          that hurt dental clinic websites:
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", margin: "var(--space-4) 0" }}>
          {mustAvoid.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "var(--space-3)",
                padding: "var(--space-3) var(--space-4)",
                background: "var(--black-1)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <span style={{ color: "#ef4444", fontWeight: 700 }}>✕</span>
              <span style={{ fontSize: "var(--text-sm)", lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
        </div>

        {/* SEO for Dental */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          SEO Keywords for Dental Clinics in{" "}
          <span className="text-gradient">India</span>
        </h2>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          Your website content should target these keywords to attract local patients:
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "var(--space-3)",
            margin: "var(--space-4) 0",
          }}
        >
          {[
            "dentist near me",
            "dental clinic [city]",
            "best dentist in [area]",
            "root canal treatment [city]",
            "dental implants [city]",
            "teeth whitening [city]",
            "braces cost [city]",
            "pediatric dentist [city]",
            "emergency dentist [city]",
            "dental cleaning [city]",
          ].map((kw) => (
            <span
              key={kw}
              className="badge"
              style={{ fontSize: "var(--text-sm)", padding: "6px 12px", textAlign: "center" }}
            >
              {kw}
            </span>
          ))}
        </div>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          Replace [city] and [area] with your actual location. Create dedicated pages for
          each major service you offer.
        </p>

        {/* Cost */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          How Much Does a Dental Clinic Website{" "}
          <span className="text-gradient">Cost?</span>
        </h2>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          A professional dental clinic website in India typically costs between{" "}
          <strong>₹5,000 and ₹15,000</strong>. This includes:
        </p>

        <ul style={{ marginLeft: "var(--space-6)", marginBottom: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
          <li>Custom design (not a template)</li>
          <li>Online appointment booking</li>
          <li>Doctor profiles</li>
          <li>Service pages with pricing</li>
          <li>WhatsApp integration</li>
          <li>Google Business Profile setup</li>
          <li>Basic SEO optimization</li>
          <li>Mobile responsiveness</li>
        </ul>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          I build dental clinic websites starting at{" "}
          <strong style={{ color: "var(--accent)" }}>₹3,999</strong> with all the features
          mentioned above. Live in 24-48 hours.
        </p>

        {/* CTA */}
        <div
          className="card"
          style={{
            padding: "var(--space-10)",
            margin: "var(--space-12) 0",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "var(--text-xl)" }}>
            Need a Dental Clinic Website?
          </h3>
          <p
            style={{
              marginTop: "var(--space-3)",
              color: "var(--text-secondary)",
              maxWidth: "500px",
              margin: "var(--space-3) auto 0",
            }}
          >
            I build dental clinic websites that bring patients. Starting at ₹3,999.
            WhatsApp me for a free consultation.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "var(--space-4)",
              marginTop: "var(--space-6)",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://wa.me/919964185119?text=Hi%20Omprakash,%20I%20read%20your%20dental%20clinic%20website%20article.%20I%20need%20a%20website%20for%20my%20clinic."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              💬 Get a Free Quote
            </a>
            <Link href="/case-studies/smilecare-dental" className="btn btn-outline btn-lg">
              View Case Study
            </Link>
          </div>
        </div>

        {/* Related */}
        <div style={{ marginTop: "var(--space-12)" }}>
          <h3 style={{ marginBottom: "var(--space-4)" }}>Related Articles</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <Link
              href="/case-studies/smilecare-dental"
              style={{ color: "var(--accent)", textDecoration: "none", fontSize: "var(--text-sm)" }}
            >
              → Case Study: How SmileCare Dental Got 12 Patients/Month from Google
            </Link>
            <Link
              href="/blog/google-maps-ranking-india"
              style={{ color: "var(--accent)", textDecoration: "none", fontSize: "var(--text-sm)" }}
            >
              → How to Rank on Google Maps in India: Complete Guide
            </Link>
            <Link
              href="/services/website-development"
              style={{ color: "var(--accent)", textDecoration: "none", fontSize: "var(--text-sm)" }}
            >
              → Website Development Services — Starting at ₹3,999
            </Link>
          </div>
        </div>
      </article>

      <HireMeCTA text="Need a dental clinic website that brings patients?" />
    </div>
  );
}

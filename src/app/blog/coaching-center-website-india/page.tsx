import type { Metadata } from "next";
import Link from "next/link";
import HireMeCTA from "@/components/shared/HireMeCTA";

export const metadata: Metadata = {
  title: "Coaching Center Website: How to Get More Admissions Online | techtalkswithomee.com",
  description:
    "What makes a coaching center website actually bring admissions? Learn the 7 must-have features for coaching websites in India, with examples from The Tution Hub.",
  keywords: [
    "coaching center website india",
    "coaching website designer",
    "tuition website india",
    "education website design",
    "admission website india",
    "coaching center seo",
  ],
  alternates: {
    canonical: "/blog/coaching-center-website-india",
  },
  openGraph: {
    title: "Coaching Center Website: How to Get More Admissions Online",
    description:
      "The 7 must-have features for coaching center websites in India. Real examples from The Tution Hub.",
    type: "article",
    url: "https://www.techtalkswithomee.com/blog/coaching-center-website-india",
    publishedTime: "2026-04-23",
    tags: ["Education", "Coaching", "Website Design", "India"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coaching Center Website: How to Get More Admissions Online",
    description: "Must-have features for coaching websites in India. Real case study examples.",
  },
};

const features = [
  {
    num: "01",
    title: "Course & Batch Showcase",
    desc: "Display all your courses with clear details: subjects covered, class schedule, batch timings, fees, and duration. Parents want to see exactly what their child will learn before they enquire.",
    why: "73% of parents research courses online before visiting a coaching center. A detailed course page answers their questions and filters out unqualified leads.",
  },
  {
    num: "02",
    title: "Faculty Profiles with Credentials",
    desc: "Showcase your teachers with photos, qualifications, teaching experience, and subject expertise. Highlight top faculty members who have produced rank holders.",
    why: "The quality of faculty is the #1 factor parents consider when choosing a coaching center. Real credentials and success stories build instant trust.",
  },
  {
    num: "03",
    title: "Student Results & Testimonials",
    desc: "Display past student results — board exam scores, competitive exam ranks, and success stories. Include photos of toppers (with permission) and video testimonials from parents.",
    why: "Social proof is everything in education. 89% of parents trust peer recommendations over advertising. Real results sell your coaching better than any ad.",
  },
  {
    num: "04",
    title: "WhatsApp Admission Enquiry",
    desc: "A floating WhatsApp button that opens a pre-filled message: 'Hi, I am interested in admission for [Class/Subject]. Please share batch details and fees.'",
    why: "Indian parents prefer WhatsApp over phone calls and forms. Response time under 5 minutes increases admission conversion by 60%.",
  },
  {
    num: "05",
    title: "Online Admission Form",
    desc: "A simple admission form that collects student name, class, subjects interested in, parent contact, and preferred batch timing. Send confirmations via WhatsApp.",
    why: "An online form captures leads 24/7. Parents browsing at night can submit enquiries and receive responses the next morning.",
  },
  {
    num: "06",
    title: "Study Material Downloads",
    desc: "Offer free sample study materials, previous year papers, or chapter summaries as downloadable PDFs. Gate some premium content behind an email or WhatsApp opt-in.",
    why: "Free study materials attract serious students and parents. They position your coaching as knowledgeable and generous, building goodwill before admission.",
  },
  {
    num: "07",
    title: "Mobile-First, Fast Loading Design",
    desc: "70% of Indian parents browse on smartphones. Your site must load in under 2 seconds, with large tap targets, readable fonts, and click-to-call buttons.",
    why: "Slow websites lose admissions. A parent comparing 3 coaching centers will choose the one with the fastest, most professional website.",
  },
];

const mustAvoid = [
  "Hidden fees — parents will find out and lose trust",
  "No faculty information — parents want to know who will teach their child",
  "Outdated results — showing 3-year-old toppers looks suspicious",
  "No contact on every page — make it effortless to reach you",
  "PDF-only brochures — they are not mobile-friendly",
  "Auto-playing videos — they annoy visitors and slow your site",
  "No SSL certificate — parents will not trust a non-HTTPS site",
];

export default function CoachingCenterWebsitePage() {
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
              Coaching Center Website Design
            </span>
          </div>
        </nav>

        {/* Tags */}
        <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
          {["Education", "Coaching", "Website Design", "India"].map((tag) => (
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
          Coaching Center Website:{" "}
          <span className="text-gradient">How to Get More Admissions</span> Online
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
          A coaching center website is not just a digital brochure — it is an admission
          generation machine. The difference between a website that sits idle and one that
          brings 20+ admission enquiries per month comes down to specific features that
          convert visitors into enrolled students.
        </p>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          I built the{" "}
          <Link href="/work/the-tution-hub" style={{ color: "var(--accent)" }}>
            The Tution Hub website
          </Link>{" "}
          which helps a coaching institute capture leads and showcase their courses.
          In this article, I will share the 7 features that make coaching center websites
          actually work in India.
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
                <strong style={{ color: "var(--accent)" }}>
                  Why it matters:
                </strong>{" "}
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
            Real Project: The Tution Hub
          </h3>
          <p
            style={{
              marginTop: "var(--space-3)",
              color: "var(--text-secondary)",
              maxWidth: "560px",
              margin: "var(--space-3) auto 0",
            }}
          >
            A coaching institute website with course showcase, faculty profiles,
            online enquiry form, and WhatsApp lead capture. Built with Next.js
            and live in 24 hours.
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
              href="https://the-tution-hub.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              View Live Site →
            </a>
            <Link href="/work/the-tution-hub" className="btn btn-outline">
              View Project Details
            </Link>
          </div>
        </div>

        {/* What to Avoid */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          What to <span className="text-gradient">Avoid</span>
        </h2>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          Just as important as what to include is what to leave out. Here are common mistakes
          that hurt coaching center websites:
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

        {/* SEO Keywords */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          SEO Keywords for Coaching Centers in{" "}
          <span className="text-gradient">India</span>
        </h2>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          Your website content should target these keywords to attract local students and parents:
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
            "coaching center near me",
            "tuition classes [city]",
            "best coaching for [subject]",
            "NEET coaching [city]",
            "JEE coaching [city]",
            "CBSE tuition [city]",
            "maths tuition near me",
            "science coaching [city]",
            "board exam preparation [city]",
            "home tuition [city]",
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
          Replace [city] with your actual location. Create dedicated pages for each major
          course and competitive exam you prepare students for.
        </p>

        {/* Cost */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          How Much Does a Coaching Center Website{" "}
          <span className="text-gradient">Cost?</span>
        </h2>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          A professional coaching center website in India typically costs between{" "}
          <strong>₹5,000 and ₹12,000</strong>. This includes:
        </p>

        <ul style={{ marginLeft: "var(--space-6)", marginBottom: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
          <li>Custom design (not a template)</li>
          <li>Course and batch showcase</li>
          <li>Faculty profiles</li>
          <li>Student results section</li>
          <li>Online admission enquiry form</li>
          <li>WhatsApp integration</li>
          <li>Google Business Profile setup</li>
          <li>Mobile responsiveness</li>
        </ul>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          I build coaching center websites starting at{" "}
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
            Need a Coaching Center Website?
          </h3>
          <p
            style={{
              marginTop: "var(--space-3)",
              color: "var(--text-secondary)",
              maxWidth: "500px",
              margin: "var(--space-3) auto 0",
            }}
          >
            I build coaching center websites that bring admissions. Starting at ₹3,999.
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
              href="https://wa.me/919964185119?text=Hi%20Omprakash,%20I%20read%20your%20coaching%20center%20website%20article.%20I%20need%20a%20website%20for%20my%20coaching%20institute."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              💬 Get a Free Quote
            </a>
            <Link href="/work/the-tution-hub" className="btn btn-outline btn-lg">
              View The Tution Hub
            </Link>
          </div>
        </div>

        {/* Related */}
        <div style={{ marginTop: "var(--space-12)" }}>
          <h3 style={{ marginBottom: "var(--space-4)" }}>Related Articles</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <Link
              href="/blog/website-cost-india-2026"
              style={{ color: "var(--accent)", textDecoration: "none", fontSize: "var(--text-sm)" }}
            >
              → How Much Does a Website Cost in India? (2026 Guide)
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

      <HireMeCTA text="Need a coaching center website that brings admissions?" />
    </div>
  );
}

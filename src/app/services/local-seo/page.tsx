import type { Metadata } from "next";
import Link from "next/link";
import HireMeCTA from "@/components/shared/HireMeCTA";

export const metadata: Metadata = {
  title: "Local SEO Services in India | Google Business Profile Expert — Starting at ₹999/mo",
  description:
    "Freelance SEO expert in Bangalore helping local businesses rank on Google Maps and local search. Google Business Profile optimization, local SEO, review management. Starting at ₹999/month.",
  keywords: [
    "seo expert india",
    "local seo expert india",
    "google business profile expert",
    "local seo services bangalore",
    "google my business optimization",
    "rank on google maps india",
    "local seo for small business",
    "seo services pricing india",
  ],
  alternates: {
    canonical: "/services/local-seo",
  },
  openGraph: {
    title: "Local SEO Services in India | Google Business Profile Expert",
    description:
      "Help local businesses rank on Google Maps and local search. Google Business Profile optimization, review management, and monthly growth reports.",
    type: "website",
    url: "https://www.techtalkswithomee.com/services/local-seo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Local SEO Services - Omprakash Kadur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Services in India | Google Business Profile Expert",
    description: "Rank on Google Maps and local search. Starting at ₹999/month.",
    images: ["/og-image.jpg"],
  },
};

const services = [
  {
    title: "Google Business Profile Setup",
    desc: "Complete setup and verification of your Google Business Profile. Includes business description, categories, attributes, and initial optimization.",
    icon: "📍",
  },
  {
    title: "Local SEO Optimization",
    desc: "On-page SEO tailored for local search. NAP consistency, local schema markup, location-based keywords, and citation building.",
    icon: "🔍",
  },
  {
    title: "Review Management",
    desc: "Strategy to collect positive reviews, respond to all feedback, and maintain a 4+ star rating. Templates and follow-up systems included.",
    icon: "⭐",
  },
  {
    title: "Google Posts & Updates",
    desc: "Weekly Google Posts to keep your profile active. Promotions, new services, events, and seasonal updates.",
    icon: "📝",
  },
  {
    title: "Competitor Analysis",
    desc: "Analyze what your local competitors are doing on Google. Identify gaps and opportunities to outrank them.",
    icon: "📊",
  },
  {
    title: "Monthly Growth Reports",
    desc: "Detailed reports showing views, clicks, calls, direction requests, and keyword rankings. See your ROI clearly.",
    icon: "📈",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "₹999/mo",
    desc: "For businesses just starting with local SEO",
    features: [
      "Google Business Profile setup",
      "Basic optimization",
      "4 Google Posts per month",
      "Review response templates",
      "Monthly performance report",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "₹2,499/mo",
    desc: "For businesses serious about dominating local search",
    features: [
      "Everything in Starter",
      "Advanced local SEO audit",
      "NAP consistency check",
      "8 Google Posts per month",
      "Review collection campaign",
      "Competitor tracking",
      "Citation building (5/month)",
      "Bi-weekly reports",
      "WhatsApp support",
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Domination",
    price: "₹4,999/mo",
    desc: "For businesses that want to own their local market",
    features: [
      "Everything in Growth",
      "Full website SEO audit",
      "Schema markup implementation",
      "Unlimited Google Posts",
      "Active review management",
      "Local link building",
      "Content strategy",
      "Weekly reports",
      "Priority support",
      "Strategy calls",
    ],
    cta: "Dominate Now",
    popular: false,
  },
];

const results = [
  { metric: "340%", label: "Increase in Google Maps views", client: "SmileCare Dental" },
  { metric: "156%", label: "More website clicks", client: "The Tution Hub" },
  { metric: "89%", label: "More direction requests", client: "Urban Brew Cafe" },
  { metric: "12", label: "New patients/month", client: "SmileCare Dental" },
];

const industries = [
  "Dental Clinics",
  "Salons & Spas",
  "Restaurants & Cafes",
  "Coaching Centers",
  "Boutiques",
  "Interior Designers",
  "Wellness Centers",
  "Export Companies",
];

export default function LocalSEOPage() {
  return (
    <div style={{ paddingTop: "120px", minHeight: "100vh" }}>
      <div className="container">
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
            <span style={{ color: "var(--text-secondary)" }}>Services</span>
            <span style={{ margin: "0 var(--space-2)" }}>/</span>
            <span style={{ color: "var(--text-secondary)" }}>
              Local SEO
            </span>
          </div>
        </nav>

        {/* Hero */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <span className="label">{"// services"}</span>
          <h1 style={{ marginTop: "var(--space-4)" }}>
            Local SEO &{" "}
            <span className="text-gradient">Google Business</span>
          </h1>
          <p
            style={{
              marginTop: "var(--space-4)",
              fontSize: "var(--text-lg)",
              maxWidth: "640px",
              margin: "var(--space-4) auto 0",
            }}
          >
            Rank on Google Maps and local search. Get found by customers in your
            area. Starting at{" "}
            <strong style={{ color: "var(--accent)" }}>₹999/month</strong>.
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
              href="https://wa.me/919964185119?text=Hi%20Omprakash,%20I%20need%20help%20with%20local%20SEO%20and%20Google%20Business%20Profile.%20Can%20we%20discuss?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              💬 Get a Free Audit
            </a>
            <Link href="/case-studies/smilecare-dental" className="btn btn-outline btn-lg">
              See Results
            </Link>
          </div>
        </div>

        {/* Results Bar */}
        <div
          style={{
            marginTop: "var(--space-16)",
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
                {r.client}
              </div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div style={{ marginTop: "var(--space-20)" }}>
          <h2 style={{ textAlign: "center", marginBottom: "var(--space-4)" }}>
            What&apos;s <span className="text-gradient">Included</span>
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-secondary)",
              maxWidth: "560px",
              margin: "0 auto var(--space-12)",
            }}
          >
            Everything you need to dominate local search and get more customers
            from Google.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "var(--space-6)",
            }}
          >
            {services.map((s) => (
              <div
                key={s.title}
                className="card"
                style={{ padding: "var(--space-8)" }}
              >
                <div style={{ fontSize: "40px", marginBottom: "var(--space-4)" }}>
                  {s.icon}
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "var(--text-lg)",
                    marginBottom: "var(--space-2)",
                  }}
                >
                  {s.title}
                </h4>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "var(--text-sm)",
                    lineHeight: 1.7,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div style={{ marginTop: "var(--space-20)" }}>
          <h2 style={{ textAlign: "center", marginBottom: "var(--space-4)" }}>
            Industries I <span className="text-gradient">Serve</span>
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-secondary)",
              maxWidth: "560px",
              margin: "0 auto var(--space-12)",
            }}
          >
            Local SEO works for any business with a physical location. Here are
            the industries I have helped.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "var(--space-3)",
            }}
          >
            {industries.map((ind) => (
              <span
                key={ind}
                className="badge"
                style={{ fontSize: "var(--text-sm)", padding: "8px 16px" }}
              >
                {ind}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div style={{ marginTop: "var(--space-20)" }}>
          <h2 style={{ textAlign: "center", marginBottom: "var(--space-4)" }}>
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-secondary)",
              maxWidth: "560px",
              margin: "0 auto var(--space-12)",
            }}
          >
            No long-term contracts. Cancel anytime. You see results or you stop.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "var(--space-6)",
              alignItems: "start",
            }}
          >
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className="card"
                style={{
                  padding: "var(--space-8)",
                  borderColor: tier.popular ? "var(--accent)" : undefined,
                  position: "relative",
                }}
              >
                {tier.popular && (
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
                      fontWeight: 600,
                      padding: "4px 16px",
                      borderRadius: "var(--radius-full)",
                    }}
                  >
                    MOST POPULAR
                  </span>
                )}
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-xl)",
                    fontWeight: 600,
                  }}
                >
                  {tier.name}
                </h3>
                <div
                  style={{
                    fontSize: "var(--text-3xl)",
                    fontWeight: 700,
                    color: "var(--accent)",
                    marginTop: "var(--space-2)",
                  }}
                >
                  {tier.price}
                </div>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "var(--text-sm)",
                    marginTop: "var(--space-2)",
                  }}
                >
                  {tier.desc}
                </p>
                <ul
                  style={{
                    marginTop: "var(--space-6)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--space-3)",
                  }}
                >
                  {tier.features.map((feat) => (
                    <li
                      key={feat}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "var(--space-2)",
                        fontSize: "var(--text-sm)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <span style={{ color: "var(--accent)" }}>✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/919964185119?text=Hi%20Omprakash,%20I%20am%20interested%20in%20the%20${tier.name}%20local%20SEO%20package.%20Can%20we%20discuss?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${tier.popular ? "btn-primary" : "btn-outline"}`}
                  style={{ width: "100%", marginTop: "var(--space-8)" }}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Why Local SEO */}
        <div style={{ marginTop: "var(--space-20)", maxWidth: "800px", margin: "var(--space-20) auto 0" }}>
          <h2 style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
            Why Local SEO <span className="text-gradient">Matters</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            {[
              {
                stat: "46%",
                title: "of Google searches are local",
                desc: "Nearly half of all searches are looking for local information. If you are not optimized for local search, you are invisible to half your potential customers.",
              },
              {
                stat: "78%",
                title: "of local mobile searches result in a purchase",
                desc: "People searching for local businesses are ready to buy. A dentist near me search means someone needs a dentist now.",
              },
              {
                stat: "44%",
                title: "of local search clicks go to the Local Pack",
                desc: "The map section at the top of Google results gets nearly half of all clicks. Being in the top 3 is everything.",
              },
              {
                stat: "70%",
                title: "more clicks for businesses with 4+ stars",
                desc: "Reviews matter. Businesses with higher ratings and more reviews get significantly more clicks and calls.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card"
                style={{ padding: "var(--space-6) var(--space-8)", display: "flex", gap: "var(--space-6)", alignItems: "flex-start" }}
              >
                <div
                  style={{
                    fontSize: "var(--text-3xl)",
                    fontWeight: 700,
                    color: "var(--accent)",
                    fontFamily: "var(--font-display)",
                    minWidth: "100px",
                  }}
                >
                  {item.stat}
                </div>
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

        {/* Process */}
        <div style={{ marginTop: "var(--space-20)" }}>
          <h2 style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
            My <span className="text-gradient">Process</span>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "var(--space-8)",
            }}
          >
            {[
              { step: "01", title: "Audit", desc: "I analyze your current Google presence, competitors, and identify quick wins." },
              { step: "02", title: "Optimize", desc: "Complete Google Business Profile setup, on-page SEO, and citation building." },
              { step: "03", title: "Content", desc: "Regular Google Posts, review collection, and local content strategy." },
              { step: "04", title: "Report", desc: "Monthly reports showing views, clicks, calls, and ranking improvements." },
            ].map((s) => (
              <div key={s.step} style={{ textAlign: "center" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-3xl)",
                    fontWeight: 700,
                    color: "var(--accent)",
                    opacity: 0.3,
                  }}
                >
                  {s.step}
                </span>
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "var(--text-lg)",
                    marginTop: "var(--space-2)",
                  }}
                >
                  {s.title}
                </h4>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "var(--text-sm)",
                    lineHeight: 1.7,
                    marginTop: "var(--space-2)",
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: "var(--space-20)", maxWidth: "800px", margin: "var(--space-20) auto 0" }}>
          <h2 style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            {[
              {
                q: "How long does it take to see results?",
                a: "Most clients see improvements within 2-4 weeks. Significant ranking changes typically take 2-3 months of consistent effort.",
              },
              {
                q: "Do I need a website for local SEO?",
                a: "A website helps, but it is not required to start. Google Business Profile alone can drive significant traffic. I recommend having at least a basic landing page.",
              },
              {
                q: "What is NAP consistency?",
                a: "NAP stands for Name, Address, Phone. Consistency means your business information is identical across Google, your website, directories, and social media. Inconsistent NAP hurts rankings.",
              },
              {
                q: "Can you guarantee first-page rankings?",
                a: "No ethical SEO expert can guarantee rankings. What I guarantee is best-practice optimization, transparent reporting, and continuous improvement based on data.",
              },
              {
                q: "What if I already have a Google Business Profile?",
                a: "I will audit your existing profile, fix issues, and optimize it further. Most profiles I see are under-optimized and missing key features.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="card"
                style={{ padding: "var(--space-6) var(--space-8)" }}
              >
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "var(--text-base)",
                  }}
                >
                  {faq.q}
                </h4>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "var(--text-sm)",
                    lineHeight: 1.7,
                    marginTop: "var(--space-2)",
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <HireMeCTA text="Ready to rank on Google Maps?" />
    </div>
  );
}

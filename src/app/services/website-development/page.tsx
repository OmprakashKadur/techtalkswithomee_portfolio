import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import HireMeCTA from "@/components/shared/HireMeCTA";

export const metadata: Metadata = {
  title: "Website Development Services in Bangalore | Omprakash Kadur — Starting at ₹3,999",
  description:
    "Freelance web developer in Bangalore building fast, SEO-optimized websites for salons, clinics, restaurants & local businesses. Next.js, 90+ PageSpeed, live in 24-48 hours. Starting at ₹3,999.",
  keywords: [
    "website developer bangalore",
    "freelance web developer india",
    "website design india",
    "next.js developer",
    "business website india",
    "website cost bangalore",
    "local business website",
    "web developer near me",
  ],
  alternates: {
    canonical: "/services/website-development",
  },
  openGraph: {
    title: "Website Development Services in Bangalore | Starting at ₹3,999",
    description:
      "Fast, SEO-optimized websites for local businesses. Next.js, 90+ PageSpeed, live in 24-48 hours. View 9+ live projects.",
    type: "website",
    url: "https://www.techtalkswithomee.com/services/website-development",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Website Development Services - Omprakash Kadur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Services in Bangalore | Starting at ₹3,999",
    description:
      "Fast, SEO-optimized websites for local businesses. Next.js, 90+ PageSpeed, live in 24-48 hours.",
    images: ["/og-image.jpg"],
  },
};

const features = [
  {
    title: "Next.js 14 + TypeScript",
    desc: "Modern, type-safe codebase that scales. Server components for blazing speed.",
    icon: "⚡",
  },
  {
    title: "90+ PageSpeed Score",
    desc: "Google rewards fast sites with better rankings. Every site I build scores 90+ on mobile.",
    icon: "🚀",
  },
  {
    title: "Mobile-First Design",
    desc: "70% of Indian users browse on mobile. Your site looks perfect on every screen.",
    icon: "📱",
  },
  {
    title: "WhatsApp Lead Capture",
    desc: "One-tap WhatsApp button. Leads arrive directly on your phone. No forms to fill.",
    icon: "💬",
  },
  {
    title: "Google Business Profile",
    desc: "Full setup and optimization. Rank on Google Maps and local search.",
    icon: "📍",
  },
  {
    title: "SEO Built-In",
    desc: "Schema markup, meta tags, sitemap, robots.txt — everything search engines need.",
    icon: "🔍",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "₹3,999",
    desc: "Perfect for small businesses just getting online",
    features: [
      "Single-page website",
      "Mobile responsive",
      "WhatsApp button",
      "Google Business setup",
      "Basic SEO",
      "SSL certificate",
      "1 revision round",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Business",
    price: "₹7,999",
    desc: "For established businesses needing a full online presence",
    features: [
      "Up to 5 pages",
      "Custom design",
      "WhatsApp + Contact form",
      "Google Business + Maps",
      "Blog section",
      "Advanced SEO",
      "Speed optimization (90+)",
      "3 revision rounds",
      "1 month free support",
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Premium",
    price: "₹14,999",
    desc: "For businesses that want to dominate their local market",
    features: [
      "Up to 10 pages",
      "Premium custom design",
      "Online booking system",
      "Photo gallery",
      "Testimonials section",
      "Full SEO package",
      "Schema markup",
      "Performance monitoring",
      "Unlimited revisions",
      "3 months free support",
    ],
    cta: "Go Premium",
    popular: false,
  },
];

const industries = [
  { name: "Salons & Spas", emoji: "💇", slug: "smilecare-dental" },
  { name: "Dental Clinics", emoji: "🦷", slug: "smilecare-dental" },
  { name: "Coaching Centers", emoji: "📚", slug: "the-tution-hub" },
  { name: "Restaurants & Cafes", emoji: "☕", slug: "cafe-restaurant" },
  { name: "Boutiques", emoji: "👗", slug: "fashion-boutique" },
  { name: "Interior Designers", emoji: "🏠", slug: "interior-design" },
  { name: "Wellness & Ayurveda", emoji: "🧘", slug: "ayurwellness" },
  { name: "Export Companies", emoji: "🌾", slug: "npp-exports" },
];

export default function WebsiteDevelopmentPage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

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
              Website Development
            </span>
          </div>
        </nav>

        {/* Hero */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <span className="label">{"// services"}</span>
          <h1 style={{ marginTop: "var(--space-4)" }}>
            Website Development{" "}
            <span className="text-gradient">in Bangalore</span>
          </h1>
          <p
            style={{
              marginTop: "var(--space-4)",
              fontSize: "var(--text-lg)",
              maxWidth: "640px",
              margin: "var(--space-4) auto 0",
            }}
          >
            Fast, SEO-optimized websites for local businesses. Built with Next.js,
            live in 24-48 hours, starting at{" "}
            <strong style={{ color: "var(--accent)" }}>₹3,999</strong>.
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
              href="https://wa.me/919964185119?text=Hi%20Omprakash,%20I%20need%20a%20website%20for%20my%20business.%20Can%20we%20discuss?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              💬 Get a Free Quote
            </a>
            <Link href="/work" className="btn btn-outline btn-lg">
              View My Work
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div style={{ marginTop: "var(--space-20)" }}>
          <h2 style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
            What You <span className="text-gradient">Get</span>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "var(--space-6)",
            }}
          >
            {features.map((f) => (
              <div
                key={f.title}
                className="card"
                style={{ padding: "var(--space-8)" }}
              >
                <div style={{ fontSize: "40px", marginBottom: "var(--space-4)" }}>
                  {f.icon}
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "var(--text-lg)",
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

        {/* Industries */}
        <div style={{ marginTop: "var(--space-20)" }}>
          <h2 style={{ textAlign: "center", marginBottom: "var(--space-4)" }}>
            Industries I <span className="text-gradient">Specialize In</span>
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-secondary)",
              maxWidth: "560px",
              margin: "0 auto var(--space-12)",
            }}
          >
            I have built websites for businesses across India. Here are the
            industries I know best.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "var(--space-4)",
            }}
          >
            {industries.map((ind) => (
              <Link
                key={ind.name}
                href={`/work/${ind.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="card"
                  style={{
                    padding: "var(--space-6)",
                    textAlign: "center",
                    transition: "transform 0.2s ease, border-color 0.2s ease",
                  }}
                >
                  <div style={{ fontSize: "36px", marginBottom: "var(--space-2)" }}>
                    {ind.emoji}
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: "var(--text-base)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {ind.name}
                  </span>
                </div>
              </Link>
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
            No hidden fees. No monthly charges for the website. You own everything.
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
                  href={`https://wa.me/919964185119?text=Hi%20Omprakash,%20I%20am%20interested%20in%20the%20${tier.name}%20website%20package.%20Can%20we%20discuss?`}
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

        {/* Portfolio Preview */}
        <div style={{ marginTop: "var(--space-20)" }}>
          <h2 style={{ textAlign: "center", marginBottom: "var(--space-4)" }}>
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-secondary)",
              maxWidth: "560px",
              margin: "0 auto var(--space-12)",
            }}
          >
            9+ live websites. All built with Next.js, all scoring 90+ on PageSpeed.
          </p>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="project-card card"
                  style={{
                    overflow: "hidden",
                    position: "relative",
                    aspectRatio: "16 / 10",
                  }}
                >
                  {project.thumbnail && (
                    <Image
                      src={project.thumbnail}
                      alt={`${project.name} — ${project.category} website`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                    />
                  )}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "var(--space-6)",
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,0.9))",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-xs)",
                        color: "var(--accent)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {project.category}
                    </span>
                    <h4
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        fontSize: "var(--text-lg)",
                        marginTop: "var(--space-1)",
                      }}
                    >
                      {project.name}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "var(--space-10)" }}>
            <Link href="/work" className="btn btn-outline btn-lg">
              View All Projects →
            </Link>
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
              { step: "01", title: "Discovery", desc: "You tell me about your business, goals, and preferences. I research your competitors and target audience." },
              { step: "02", title: "Design", desc: "I create a custom design mockup based on your brand. You review and approve before I build." },
              { step: "03", title: "Build", desc: "I develop your site with Next.js, optimize for speed and SEO, and integrate all features." },
              { step: "04", title: "Launch", desc: "Your site goes live on your domain. I set up Google Business, analytics, and tracking." },
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
                q: "How long does it take to build a website?",
                a: "Most business websites are live within 24-48 hours. Complex projects with custom features may take 3-5 days.",
              },
              {
                q: "Do I own my domain and website?",
                a: "Absolutely. I help you purchase your own domain so you own it forever. The website code is yours too.",
              },
              {
                q: "What about hosting?",
                a: "I deploy on Vercel's free tier which includes CDN, SSL, and global edge network. For high-traffic sites, paid plans start at ₹1,500/month.",
              },
              {
                q: "Will my website rank on Google?",
                a: "Yes. Every site includes on-page SEO, fast loading speeds, mobile optimization, structured data, and Google Business Profile integration. Most clients see first-page rankings within 2-4 weeks.",
              },
              {
                q: "Can I update the website myself?",
                a: "I use a config-driven approach. Content updates (text, images, prices) are simple JSON changes. I also offer monthly maintenance at ₹999/month if you prefer I handle updates.",
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

      <HireMeCTA text="Ready to get your business online?" />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import HireMeCTA from "@/components/shared/HireMeCTA";

export const metadata: Metadata = {
  title: "How to Rank on Google Maps in India: Complete Local Business Guide (2026)",
  description:
    "Step-by-step guide to ranking on Google Maps in India. Learn how to optimize your Google Business Profile, get reviews, and dominate local search for your business.",
  keywords: [
    "how to rank on google maps",
    "google maps ranking india",
    "google business profile optimization",
    "local seo tips for small business",
    "rank on google maps india",
    "google my business ranking",
    "local search optimization india",
  ],
  alternates: {
    canonical: "/blog/google-maps-ranking-india",
  },
  openGraph: {
    title: "How to Rank on Google Maps in India: Complete Guide",
    description:
      "Step-by-step guide to ranking on Google Maps. Optimize your Google Business Profile and dominate local search.",
    type: "article",
    url: "https://www.techtalkswithomee.com/blog/google-maps-ranking-india",
    publishedTime: "2026-04-23",
    tags: ["Local SEO", "Google Maps", "Google Business", "India"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Rank on Google Maps in India: Complete Guide",
    description: "Step-by-step guide to dominate local search on Google Maps.",
  },
};

const checklist = [
  "Claim and verify your Google Business Profile",
  "Use exact business name (no keyword stuffing)",
  "Select the most accurate primary category",
  "Add 9 relevant secondary categories",
  "Write a 750-character business description with keywords",
  "Add complete address with postal code",
  "Set accurate business hours including holidays",
  "Add phone number that matches your website",
  "Upload at least 10 high-quality photos",
  "Add logo and cover photo",
  "List all products and services",
  "Add business attributes (wheelchair access, WiFi, etc.)",
  "Enable messaging and respond quickly",
  "Add Q&A section with common questions",
  "Ensure NAP consistency across all platforms",
];

const rankingFactors = [
  {
    factor: "Relevance",
    weight: "High",
    desc: "How well your business matches what someone is searching for. Use accurate categories and detailed descriptions.",
  },
  {
    factor: "Distance",
    weight: "High",
    desc: "How close your business is to the searcher or the location specified in the search. You cannot control this, but you can ensure your address is accurate.",
  },
  {
    factor: "Prominence",
    weight: "High",
    desc: "How well-known your business is. Based on reviews, ratings, backlinks, and overall web presence. This is where SEO effort pays off.",
  },
  {
    factor: "Reviews",
    weight: "Very High",
    desc: "Quantity, quality, and recency of reviews. Businesses with 4+ stars and regular new reviews rank significantly higher.",
  },
  {
    factor: "Photos",
    weight: "Medium",
    desc: "Businesses with photos get 42% more requests for directions. Add interior, exterior, products, team, and work photos.",
  },
  {
    factor: "Google Posts",
    weight: "Medium",
    desc: "Regular posts signal an active business. Post weekly about offers, events, and updates.",
  },
];

export default function GoogleMapsRankingPage() {
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
              Google Maps Ranking Guide
            </span>
          </div>
        </nav>

        {/* Tags */}
        <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
          {["Local SEO", "Google Maps", "Google Business", "India"].map((tag) => (
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
          How to Rank on Google Maps in{" "}
          <span className="text-gradient">India</span>
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
          <span>8 min read</span>
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
          If you run a local business in India — a salon, dental clinic, restaurant, or coaching
          center — ranking on Google Maps is the single most important thing you can do for your
          online presence. The Local Pack (the map with 3 business listings) gets{" "}
          <strong>44% of all local search clicks</strong>.
        </p>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          In this guide, I will show you exactly how to rank on Google Maps in India. I have used
          these strategies to help clients like{" "}
          <Link href="/case-studies/smilecare-dental" style={{ color: "var(--accent)" }}>
            SmileCare Dental
          </Link>{" "}
          get 340% more Google Maps views and 12 new patients per month.
        </p>

        {/* Quick Answer */}
        <div
          className="card"
          style={{
            padding: "var(--space-6)",
            margin: "var(--space-8) 0",
            borderLeft: "3px solid var(--accent)",
          }}
        >
          <h3 style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-2)" }}>
            Quick Answer
          </h3>
          <p style={{ lineHeight: 1.7 }}>
            To rank on Google Maps, you need: (1) a claimed and verified Google Business Profile,
            (2) accurate NAP (Name, Address, Phone) information, (3) the right business categories,
            (4) regular positive reviews, (5) high-quality photos, (6) weekly Google Posts, and
            (7) a fast, mobile-friendly website. Most businesses see ranking improvements within
            2-4 weeks of proper optimization.
          </p>
        </div>

        {/* Step 1 */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          Step 1: Claim and Verify Your{" "}
          <span className="text-gradient">Google Business Profile</span>
        </h2>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          If you have not claimed your Google Business Profile yet, do it today. Go to{" "}
          <a
            href="https://business.google.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)" }}
          >
            business.google.com
          </a>{" "}
          and search for your business. If it exists, claim it. If not, create it.
        </p>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          Verification methods in India:
        </p>

        <ul style={{ marginLeft: "var(--space-6)", marginBottom: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
          <li><strong>Postcard</strong> — Google sends a postcard with a code to your business address (takes 5-14 days)</li>
          <li><strong>Phone</strong> — Automated call with verification code (instant)</li>
          <li><strong>Email</strong> — Verification link sent to your business email (instant)</li>
          <li><strong>Video verification</strong> — Record a video showing your business location and operations</li>
        </ul>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          <strong>Pro tip:</strong> If postcard verification is taking too long, try video
          verification. It is faster and more reliable for Indian addresses.
        </p>

        {/* Step 2 */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          Step 2: Optimize Every{" "}
          <span className="text-gradient">Section</span>
        </h2>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          A complete Google Business Profile ranks higher than an incomplete one. Here is your
          optimization checklist:
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-3)",
            margin: "var(--space-4) 0",
          }}
        >
          {checklist.map((item, i) => (
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
              <span style={{ color: "var(--accent)", fontWeight: 700 }}>{i + 1}.</span>
              <span style={{ fontSize: "var(--text-sm)", lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
        </div>

        {/* Step 3 */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          Step 3: Choose the Right{" "}
          <span className="text-gradient">Categories</span>
        </h2>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          Your primary category is the most important ranking factor. Choose the one that most
          accurately describes your main business activity.
        </p>

        <div
          className="card"
          style={{ padding: "var(--space-6)", margin: "var(--space-4) 0" }}
        >
          <h4 style={{ marginBottom: "var(--space-3)" }}>Examples for Indian Businesses:</h4>
          <ul style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <li><strong>Dental Clinic:</strong> Primary: "Dental Clinic" | Secondary: "Dentist", "Orthodontist", "Dental Implants Periodontist"</li>
            <li><strong>Salon:</strong> Primary: "Hair Salon" | Secondary: "Beauty Salon", "Nail Salon", "Spa"</li>
            <li><strong>Restaurant:</strong> Primary: "Restaurant" | Secondary: "Indian Restaurant", "Vegetarian Restaurant", "Cafe"</li>
            <li><strong>Coaching Center:</strong> Primary: "Educational Institution" | Secondary: "Tutoring Service", "Test Preparation Center"</li>
          </ul>
        </div>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          <strong>Important:</strong> Do not stuff keywords into your business name. "Best Dental
          Clinic Bangalore" will get you penalized. Use your real business name.
        </p>

        {/* Step 4 */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          Step 4: Get More{" "}
          <span className="text-gradient">Reviews</span>
        </h2>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          Reviews are the strongest ranking signal for Google Maps. Businesses with 4+ stars and
          20+ reviews consistently outrank competitors.
        </p>

        <h3 style={{ marginTop: "var(--space-8)", marginBottom: "var(--space-3)" }}>
          How to Get More Reviews:
        </h3>

        <ul style={{ marginLeft: "var(--space-6)", marginBottom: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
          <li><strong>Ask every happy customer</strong> — Right after service, when satisfaction is highest</li>
          <li><strong>Send a follow-up SMS/WhatsApp</strong> — Include a direct link to your review page</li>
          <li><strong>Create a QR code</strong> — Place it at reception, on receipts, and in follow-up emails</li>
          <li><strong>Respond to every review</strong> — Thank positive reviewers, address negative ones professionally</li>
          <li><strong>Never buy fake reviews</strong> — Google detects and penalizes this</li>
        </ul>

        <div
          className="card"
          style={{
            padding: "var(--space-6)",
            margin: "var(--space-4) 0",
            borderLeft: "3px solid var(--accent)",
          }}
        >
          <p style={{ lineHeight: 1.7 }}>
            <strong>Review Request Template (WhatsApp):</strong>
            <br /><br />
            Hi [Name], thank you for visiting [Business Name] today. We would love
            to hear about your experience. Would you mind leaving us a quick review
            on Google? It helps other patients find us: [Review Link]. Thank you!
          </p>
        </div>

        {/* Step 5 */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          Step 5: Add High-Quality{" "}
          <span className="text-gradient">Photos</span>
        </h2>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          Businesses with photos get <strong>42% more requests for directions</strong> and{" "}
          <strong>35% more clicks to their website</strong>. Here is what to upload:
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "var(--space-4)",
            margin: "var(--space-4) 0",
          }}
        >
          {[
            { type: "Exterior", desc: "Help customers find your location", count: "3-5" },
            { type: "Interior", desc: "Show ambiance and cleanliness", count: "5-8" },
            { type: "Products/Services", desc: "What you offer", count: "5-10" },
            { type: "Team", desc: "Build personal connection", count: "3-5" },
            { type: "At Work", desc: "Show expertise in action", count: "3-5" },
            { type: "Logo & Cover", desc: "Brand recognition", count: "2" },
          ].map((photo) => (
            <div key={photo.type} className="card" style={{ padding: "var(--space-5)" }}>
              <div style={{ fontWeight: 600, fontSize: "var(--text-base)" }}>{photo.type}</div>
              <div style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", marginTop: "var(--space-1)" }}>
                {photo.desc}
              </div>
              <div style={{ color: "var(--accent)", fontSize: "var(--text-xs)", fontFamily: "var(--font-mono)", marginTop: "var(--space-1)" }}>
                {photo.count} photos
              </div>
            </div>
          ))}
        </div>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          <strong>Photo tips:</strong> Use natural lighting, ensure images are at least 720px wide,
          add new photos monthly, and geotag images with your business location.
        </p>

        {/* Step 6 */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          Step 6: Post Regular{" "}
          <span className="text-gradient">Updates</span>
        </h2>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          Google Posts are like mini-ads that appear in your Business Profile. Posting regularly
          signals to Google that your business is active and engaged.
        </p>

        <h3 style={{ marginTop: "var(--space-8)", marginBottom: "var(--space-3)" }}>
          Types of Google Posts:
        </h3>

        <ul style={{ marginLeft: "var(--space-6)", marginBottom: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
          <li><strong>Offers</strong> — Discounts, special deals, seasonal promotions</li>
          <li><strong>Updates</strong> — New services, hours changes, announcements</li>
          <li><strong>Events</strong> — Workshops, open houses, special days</li>
          <li><strong>Products</strong> — New arrivals, featured items, bestsellers</li>
        </ul>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          <strong>Best practice:</strong> Post at least once per week. Include a call-to-action
          button (Call Now, Book, Order Online) and a relevant image.
        </p>

        {/* Ranking Factors */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          Google Maps Ranking{" "}
          <span className="text-gradient">Factors</span>
        </h2>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          Google uses three main factors to rank businesses on Maps. Understanding these helps you
          focus your efforts:
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", margin: "var(--space-4) 0" }}>
          {rankingFactors.map((rf) => (
            <div key={rf.factor} className="card" style={{ padding: "var(--space-6)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-2)" }}>
                <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-base)" }}>
                  {rf.factor}
                </h4>
                <span
                  className="badge badge-accent"
                  style={{ fontSize: "10px", padding: "2px 8px" }}
                >
                  {rf.weight}
                </span>
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", lineHeight: 1.7 }}>
                {rf.desc}
              </p>
            </div>
          ))}
        </div>

        {/* NAP Consistency */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          NAP Consistency: The Secret{" "}
          <span className="text-gradient">Weapon</span>
        </h2>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          NAP stands for <strong>Name, Address, Phone</strong>. Consistency means your business
          information is identical everywhere it appears online — your website, Google Business
          Profile, Justdial, Sulekha, Facebook, and every directory.
        </p>

        <div
          className="card"
          style={{
            padding: "var(--space-6)",
            margin: "var(--space-4) 0",
            borderLeft: "3px solid #ef4444",
          }}
        >
          <h4 style={{ color: "#ef4444", marginBottom: "var(--space-2)" }}>Common NAP Mistakes:</h4>
          <ul style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <li>"Dr. Smith's Dental Clinic" vs "Dr Smith Dental Clinic" (apostrophe inconsistency)</li>
            <li>"123 Main Road" vs "123 Main Rd" (abbreviation inconsistency)</li>
            <li>"+91 99641 85119" vs "09964185119" (phone format inconsistency)</li>
            <li>Different addresses on different platforms</li>
          </ul>
        </div>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          Use a spreadsheet to track every place your NAP appears. Update them all to match exactly.
        </p>

        {/* Common Mistakes */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          Common Mistakes to{" "}
          <span className="text-gradient">Avoid</span>
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", margin: "var(--space-4) 0" }}>
          {[
            { mistake: "Keyword stuffing in business name", fix: "Use your real business name only" },
            { mistake: "Wrong primary category", fix: "Choose the most specific and accurate category" },
            { mistake: "Ignoring reviews", fix: "Respond to every review within 24 hours" },
            { mistake: "No photos", fix: "Upload at least 10 photos to start" },
            { mistake: "Inconsistent NAP", fix: "Ensure identical information across all platforms" },
            { mistake: "No website", fix: "Create at least a basic landing page" },
            { mistake: "Fake reviews", fix: "Never buy reviews — Google will penalize you" },
            { mistake: "Set-and-forget", fix: "Update your profile weekly with posts and photos" },
          ].map((item) => (
            <div
              key={item.mistake}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "var(--space-3)",
                padding: "var(--space-3) var(--space-4)",
                background: "var(--black-1)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <span style={{ color: "#ef4444", fontWeight: 700, minWidth: "20px" }}>✕</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: "var(--text-sm)" }}>{item.mistake}</div>
                <div style={{ color: "var(--accent)", fontSize: "var(--text-xs)", marginTop: "var(--space-1)" }}>
                  → {item.fix}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          Expected{" "}
          <span className="text-gradient">Timeline</span>
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", margin: "var(--space-4) 0" }}>
          {[
            { week: "Week 1-2", result: "Profile optimization complete, initial ranking assessment" },
            { week: "Week 3-4", result: "First review collection push, Google Posts begin" },
            { week: "Month 2", result: "Ranking improvements visible, more profile views and clicks" },
            { week: "Month 3", result: "Significant ranking gains, consistent lead generation" },
            { week: "Month 6+", result: "Top 3 rankings for primary keywords, dominant local presence" },
          ].map((t) => (
            <div key={t.week} style={{ display: "flex", gap: "var(--space-4)", alignItems: "flex-start" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-sm)",
                  color: "var(--accent)",
                  fontWeight: 600,
                  minWidth: "100px",
                }}
              >
                {t.week}
              </span>
              <span style={{ fontSize: "var(--text-sm)", lineHeight: 1.7, color: "var(--text-secondary)" }}>
                {t.result}
              </span>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <h2 style={{ marginTop: "var(--space-12)", marginBottom: "var(--space-4)" }}>
          Final <span className="text-gradient">Thoughts</span>
        </h2>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          Ranking on Google Maps is not magic — it is consistent, strategic effort. The businesses
          that dominate local search are the ones that treat their Google Business Profile as a
          critical marketing channel, not an afterthought.
        </p>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          Start with the basics: claim your profile, fill out every section, get reviews, add photos,
          and post regularly. Then layer on advanced tactics like schema markup, local link building,
          and content marketing.
        </p>

        <p style={{ marginBottom: "var(--space-4)", lineHeight: 1.8 }}>
          If you do not have time to do this yourself, I offer{" "}
          <Link href="/services/local-seo" style={{ color: "var(--accent)" }}>
            local SEO services
          </Link>{" "}
          starting at ₹999/month. Every client gets a complete Google Business Profile optimization,
          review management, and monthly growth reports.
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
            Need Help Ranking on Google Maps?
          </h3>
          <p
            style={{
              marginTop: "var(--space-3)",
              color: "var(--text-secondary)",
              maxWidth: "500px",
              margin: "var(--space-3) auto 0",
            }}
          >
            I help local businesses in India rank on Google Maps. Starting at ₹999/month.
            WhatsApp me for a free audit.
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
              href="https://wa.me/919964185119?text=Hi%20Omprakash,%20I%20read%20your%20Google%20Maps%20guide.%20I%20need%20help%20ranking%20my%20business%20on%20Google%20Maps."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              💬 Get a Free Audit
            </a>
            <Link href="/services/local-seo" className="btn btn-outline btn-lg">
              View SEO Services
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div style={{ marginTop: "var(--space-12)" }}>
          <h3 style={{ marginBottom: "var(--space-4)" }}>Related Articles</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <Link
              href="/blog/google-business-profile-local-seo"
              style={{ color: "var(--accent)", textDecoration: "none", fontSize: "var(--text-sm)" }}
            >
              → Why Every Local Business Needs a Google Business Profile
            </Link>
            <Link
              href="/blog/website-cost-india-2026"
              style={{ color: "var(--accent)", textDecoration: "none", fontSize: "var(--text-sm)" }}
            >
              → How Much Does a Website Cost in India? (2026 Guide)
            </Link>
            <Link
              href="/case-studies/smilecare-dental"
              style={{ color: "var(--accent)", textDecoration: "none", fontSize: "var(--text-sm)" }}
            >
              → Case Study: How SmileCare Dental Got 12 Patients/Month from Google
            </Link>
          </div>
        </div>
      </article>

      <HireMeCTA text="Need help ranking on Google Maps?" />
    </div>
  );
}

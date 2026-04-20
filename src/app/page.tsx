import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import TechStack from "@/components/home/TechStack";
import WorkPreview from "@/components/home/WorkPreview";
import Pricing from "@/components/home/Pricing";
import FinalCTA from "@/components/home/FinalCTA";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a website cost in Bangalore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A professional business website in Bangalore typically costs between ₹3,999 and ₹15,000. This includes custom design, mobile responsiveness, Google Business setup, WhatsApp integration, and SEO optimization. I offer a flat rate of ₹3,999 for most local business websites.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most business websites are live within 24–48 hours. My multi-tenant system allows rapid deployment without compromising quality. Complex projects with custom features may take 3–5 days.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide domain and hosting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I help you purchase your own domain (₹800–₹1,200/year) so you own it. Hosting is free on Vercel's generous tier with CDN, SSL, and global edge network included.",
      },
    },
    {
      "@type": "Question",
      name: "Will my website rank on Google?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every website I build includes on-page SEO, fast loading speeds (90+ PageSpeed), mobile optimization, structured data markup, and Google Business Profile integration. Most clients see first-page rankings for their business name and local keywords within 2–4 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I specialize in local businesses: salons, dental clinics, coaching centers, restaurants, cafes, boutiques, interior designers, wellness centers, and export companies. I have built 8+ live websites across these industries.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer website maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I offer monthly maintenance at ₹999/month which includes content updates, security patches, performance monitoring, backup, and a monthly growth report showing calls, clicks, and leads.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <TechStack />
      <WorkPreview />
      {/* <Pricing /> */}
      <FinalCTA />
    </>
  );
}

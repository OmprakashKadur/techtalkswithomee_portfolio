# SEO Audit Report — techtalkswithomee.com

**Site**: https://www.techtalkswithomee.com
**Pages Analyzed**: 2 (Homepage `/`, Work page `/work`)
**Overall Score**: 48/100
**Audit Date**: 2026-04-20

---

## Critical Issues (Must Fix)

### 1. `noindex` Tag Blocking Entire Site from Google
- **Issue**: The live site returns `<meta name="robots" content="noindex" />` on every page. This tells search engines NOT to index the site.
- **Impact**: The site will not appear in Google search results at all.
- **File/URL**: `layout.tsx:32` (metadata object) / Every page on the live site
- **Solution**: Remove the `noindex` directive. If this was added for a staging environment, ensure the production build does not include it. Check `next.config.js` or Vercel environment variables for `ROBOTS_META=noindex`.

### 2. Missing `robots.txt`
- **Issue**: `https://www.techtalkswithomee.com/robots.txt` returns a 404 page (HTML response with `noindex`).
- **Impact**: Search engine crawlers cannot find crawl instructions or the sitemap location.
- **Solution**: Create `public/robots.txt` with:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://www.techtalkswithomee.com/sitemap.xml
  ```

### 3. Missing `sitemap.xml`
- **Issue**: `https://www.techtalkswithomee.com/sitemap.xml` returns a 404 page.
- **Impact**: Google cannot discover all pages efficiently. No pages are being submitted for indexing.
- **Solution**: Generate a sitemap. Options:
  - Use `next-sitemap` package (recommended for Next.js)
  - Create a dynamic sitemap at `app/sitemap.ts` using Next.js 14 built-in support
  - Include URLs: `/`, `/work`, and any future pages

### 4. `/work` Page Has No Unique Metadata
- **Issue**: The `/work` page (`src/app/work/page.tsx`) does not export any `metadata` object. It inherits the generic homepage title and description from `layout.tsx`.
- **Impact**: Both `/` and `/work` compete for the same keywords. The work page will not rank for project-related searches.
- **Solution**: Add page-specific metadata to `work/page.tsx`:
  ```tsx
  export const metadata: Metadata = {
    title: "Projects & Client Sites | Omprakash Kadur — techtalkswithomee.com",
    description: "Portfolio of 8+ live websites built for salons, clinics, cafes, and local businesses across India. View live demos.",
    // ... Open Graph, Twitter Card
  };
  ```

### 5. Missing Canonical URLs
- **Issue**: No `<link rel="canonical">` tag is present on any page.
- **Impact**: Risk of duplicate content issues if the site is accessible with/without `www` or with query parameters.
- **Solution**: Add canonical URLs in metadata:
  ```tsx
  // layout.tsx
  metadataBase: new URL("https://www.techtalkswithomee.com"),
  alternates: {
    canonical: "/",
  },
  ```

---

## Warnings (Should Fix)

### 6. Missing Open Graph Image (`og:image`)
- **Issue**: No `og:image` or `twitter:image` meta tags are set.
- **Impact**: Social shares (LinkedIn, WhatsApp, Twitter) will appear without a preview image, reducing click-through rates.
- **Solution**: Create a 1200x630px branded OG image and add to `layout.tsx` metadata:
  ```tsx
  openGraph: {
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Omprakash Kadur — Web Developer Portfolio",
    }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
  ```

### 7. Missing Structured Data (JSON-LD)
- **Issue**: No Schema.org markup (Person, WebSite, ProfessionalService, BreadcrumbList).
- **Impact**: Google cannot display rich snippets (knowledge panel, site links, breadcrumbs).
- **Solution**: Add JSON-LD to `layout.tsx` or `page.tsx`:
  ```tsx
  // Person schema for the developer
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Omprakash Kadur",
    "url": "https://www.techtalkswithomee.com",
    "jobTitle": "Web Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "techtalkswithomee"
    },
    "sameAs": [
      "https://github.com/OmprakashKadur",
      "https://linkedin.com/in/omprakashkm"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bangalore",
      "addressCountry": "IN"
    }
  };
  ```
  Also add `WebSite` schema with `SearchAction` for sitelinks searchbox.

### 8. Footer Copyright Year is Outdated
- **Issue**: Footer shows "© 2024 Omprakash Kadur" — it is 2026.
- **Impact**: Signals the site may be unmaintained to both users and search engines.
- **File**: `src/components/shared/Footer.tsx:205`
- **Solution**: Update to `© 2026` or make it dynamic: `© {new Date().getFullYear()}`.

### 9. Missing H1 on Homepage
- **Issue**: The Hero section uses `<h1>` ("I Build Websites That Bring You Customers."), which is good. However, the `/work` page also has an `<h1>` ("Projects & Client Sites"). This is correct per-page.
- **But**: The homepage `<h1>` is inside a motion animation component. Verify it renders as actual `<h1>` in the DOM (it does). No action needed here, but confirm no hidden `<h1>` duplicates exist.

### 10. Image Alt Text Could Be More Descriptive
- **Issue**: Project card images use `alt={project.name}` (e.g., "NPP Exports"). This is acceptable but could be more descriptive for SEO.
- **Impact**: Image search rankings and accessibility could be improved.
- **Solution**: Use more descriptive alt text:
  ```tsx
  alt={`${project.name} — ${project.category} website built by Omprakash Kadur`}
  ```

### 11. No Blog or Content Pages
- **Issue**: The site has only 2 pages (`/` and `/work`). No blog, case studies, or service detail pages.
- **Impact**: Very limited keyword targeting. Hard to rank for long-tail keywords.
- **Solution**: Consider adding:
  - `/blog` — Articles about web development, local SEO tips
  - `/case-studies/[project]` — Individual project pages with detailed write-ups
  - `/services/[service]` — Dedicated pages for each service (Business Website, Google Presence, etc.)

---

## Opportunities (Nice to Have)

### 12. Add BreadcrumbList Schema
- **Issue**: No breadcrumb navigation or schema markup.
- **Solution**: Add breadcrumbs for `/work` and any future sub-pages.

### 13. Add FAQ Schema to Services Section
- **Issue**: The Services section on the homepage has 4 service cards. These could be marked up as FAQ or Service schema.
- **Solution**: Add FAQPage schema for common questions (pricing, timeline, process).

### 14. Internal Linking Improvements
- **Issue**: The homepage links to `/work` and `#services`, `#contact`. The work page links to external demo URLs. There are no links between project cards and detail pages.
- **Solution**: If project detail pages are created, link from the project cards. Add "Related Projects" links.

### 15. Performance: All Components Are Client Components
- **Issue**: Every component (`Hero`, `About`, `Services`, `WorkPreview`, `Navbar`, `Footer`, `CustomCursor`) is marked `"use client"`. This means the entire page hydrates client-side.
- **Impact**: Slower initial page load, worse Core Web Vitals (LCP, FCP).
- **Solution**: Convert static sections (`About`, `Services`, `TechStack`, `Footer`) to Server Components. Keep `"use client"` only for interactive parts (Navbar scroll state, mobile menu, animations, cursor).

### 16. Custom Cursor Overrides Native Cursor
- **Issue**: `globals.css:173` sets `* { cursor: none !important; }`. This removes the native cursor for all users.
- **Impact**: Accessibility issue — users relying on default cursor behavior (e.g., high contrast mode, screen reader users) may be confused. Also, if the custom cursor JS fails, users have no cursor at all.
- **Solution**: Only hide cursor on non-touch devices where the custom cursor is active. Already partially handled in `CustomCursor.tsx` but the CSS rule is global.

### 17. Missing `lang="en-IN"`
- **Issue**: The HTML tag has `lang="en"`. For an India-focused business, `lang="en-IN"` is more precise.
- **Solution**: Update `layout.tsx:66` to `lang="en-IN"`.

### 18. No Hreflang Tags
- **Issue**: The site targets Indian businesses but has no hreflang or geo-targeting signals.
- **Solution**: Add geo-targeting in Google Search Console. Consider hreflang if you add regional language pages.

---

## Passing (What's Done Well)

- **Title Tag**: Present, descriptive, includes target keywords ("Websites That Convert", "Lead Generation", "Local India")
- **Meta Description**: Present, compelling, includes keywords and value proposition
- **Viewport Meta**: Present (`width=device-width, initial-scale=1`)
- **Author Meta**: Present (`Omprakash Kadur`)
- **Keywords Meta**: Present (note: Google ignores this, but other engines may use it)
- **Open Graph Tags**: `og:title`, `og:description`, `og:url`, `og:type` are present
- **Twitter Card Tags**: `twitter:card`, `twitter:title`, `twitter:description` are present
- **Favicon**: Present (`/favicon.ico`)
- **Semantic HTML**: Proper use of `<main>`, `<nav>`, `<footer>`, `<section>`
- **Heading Hierarchy**: Logical h1 > h2 > h3 structure on both pages
- **Responsive Design**: Mobile-first with breakpoints at 768px and 1024px
- **Next.js Image Component**: Used in `ProjectCard.tsx` with proper `sizes` attribute
- **External Links**: All external links use `rel="noopener noreferrer"`
- **Vercel Analytics**: Integrated (`@vercel/analytics`)

---

## Action Plan (Priority Order)

| Priority | Action | File | Effort |
|----------|--------|------|--------|
| **P0** | Remove `noindex` from production | `layout.tsx` or build config | 5 min |
| **P0** | Create `robots.txt` | `public/robots.txt` | 5 min |
| **P0** | Create `sitemap.xml` | `app/sitemap.ts` or `next-sitemap` | 15 min |
| **P0** | Add unique metadata to `/work` | `app/work/page.tsx` | 10 min |
| **P1** | Add canonical URLs | `layout.tsx` | 5 min |
| **P1** | Create and add OG image | `public/og-image.jpg` + `layout.tsx` | 20 min |
| **P1** | Add JSON-LD structured data | `layout.tsx` or `app/page.tsx` | 20 min |
| **P1** | Fix copyright year | `components/shared/Footer.tsx` | 2 min |
| **P2** | Convert static components to Server Components | Multiple files | 30 min |
| **P2** | Improve image alt text | `components/work/ProjectCard.tsx` | 5 min |
| **P2** | Fix custom cursor accessibility | `globals.css` + `CustomCursor.tsx` | 10 min |
| **P3** | Add blog/case study pages | New files | 2-4 hours |
| **P3** | Add FAQ schema | `app/page.tsx` | 15 min |

---

## Estimated Score After Fixes

| Scenario | Score |
|----------|-------|
| After P0 fixes (noindex, robots, sitemap, work metadata) | ~65/100 |
| After P0 + P1 fixes (+ canonical, OG, schema, copyright) | ~78/100 |
| After all fixes (+ server components, blog, accessibility) | ~88/100 |

---

*Report generated by SearchFit.ai SEO Audit Skill*

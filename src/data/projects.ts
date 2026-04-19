export interface Project {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  demoUrl: string;
  tags: string[];
  color: string;
  featured: boolean;
  emoji: string;
  thumbnail?: string;
}

export const projects: Project[] = [
  {
    id: "15",
    slug: "npp-exports",
    name: "NPP Exports",
    category: "Agriculture",
    description:
      "A premium agricultural export company website showcasing products like coconut, onion, garlic, spices, and corn. Features global shipping info, quality certifications, and an enquiry form for international buyers.",
    demoUrl: "https://www.nppexports.com",
    tags: ["Agriculture", "Export", "Next.js", "International Trade"],
    color: "#10B981",
    featured: true,
    emoji: "🌾",
    thumbnail: "/images/npp-exports.png",
  },
  {
    id: "8",
    slug: "the-tution-hub",
    name: "The Tution Hub",
    category: "Education",
    description:
      "Best Tution institute for students from 1st to 10th with best results, faculty profiles, and online enquiry form.",
    demoUrl: "https://the-tution-hub.vercel.app",
    tags: ["Education", "Courses", "Lead Gen"],
    color: "#8B5CF6",
    featured: true,
    emoji: "📚",
    thumbnail: "/images/the-tution-hub.png",
  },

  {
    id: "17",
    slug: "ayurwellness",
    name: "AyurWellness",
    category: "Wellness",
    description:
      "Ancient wisdom meets modern rituals. A holistic wellness website featuring Ayurvedic treatments, therapies, and wellness programs.",
    demoUrl: "https://ayurwellness.vercel.app/",
    tags: ["Wellness", "Ayurveda", "Health"],
    color: "#059669",
    featured: true,
    emoji: "🧘",
    thumbnail: "/images/ayure-wellness.png",
  },
  {
    id: "18",
    slug: "fashion-boutique",
    name: "Fashion Boutique",
    category: "Fashion",
    description:
      "Luxury fashion boutique website with elegant product showcases, collections, and a modern shopping experience.",
    demoUrl: "https://fashionboutique.vercel.app/",
    tags: ["Fashion", "Luxury", "E-commerce"],
    color: "#D946EF",
    featured: true,
    emoji: "👗",
    thumbnail: "/images/fashionboutique-01.png",
  },
  {
    id: "19",
    slug: "cafe-restaurant",
    name: "Urban Brew Cafe",
    category: "Food",
    description:
      "Fresh, warm & delicious. A modern cafe and restaurant website featuring menu, ambiance, and reservation options.",
    demoUrl: "https://caferestaurant.vercel.app/",
    tags: ["Food", "Cafe", "Restaurant"],
    color: "#F97316",
    featured: true,
    emoji: "☕",
    thumbnail: "/images/cafe-restro.png",
  },

  {
    id: "13",
    slug: "smilecare-dental",
    name: "SmileCare Dental",
    category: "Health",
    description:
      "A premium dental clinic website with online booking, doctor profiles, and service showcase. Features a modern design and patient-focused experience.",
    demoUrl: "https://smilecare-dental-omee.vercel.app",
    tags: ["Health", "Booking", "Dental care"],
    color: "#3B82F6",
    featured: true,
    emoji: "🦷",
    thumbnail: "/images/smile-care-dental_01.png",
  },
  {
    id: "14",
    slug: "smile-dental-care-clinic",
    name: "Smile Dental Care Clinic",
    category: "Health",
    description:
      "A modern dental clinic website featuring service listings, appointment booking, and patient testimonials. Clean design focused on trust and professionalism.",
    demoUrl: "https://smile-dental-care-clinic.vercel.app",
    tags: ["Health", "Dental", "Clinic"],
    color: "#14B8A6",
    featured: true,
    emoji: "🦷",
    thumbnail: "/images/smile-dental-care-01.png",
  },
  {
    id: "16",
    slug: "interior-design",
    name: "Maison & Co",
    category: "Interior Design",
    description:
      "Luxury interior design studio website showcasing portfolio, services, and design philosophy. Features elegant visuals and project galleries.",
    demoUrl: "https://interior-design-omee.vercel.app/",
    tags: ["Interior Design", "Portfolio", "Luxury"],
    color: "#8B7355",
    featured: true,
    emoji: "🏠",
    thumbnail: "/images/interior-design-01.png",
  },
];

export const categories = [
  "All",
  "Interior Design",
  "Wellness",
  "Fashion",
  "Food",
  "Agriculture",
  "Education",
  "Health",
  "Beauty & Salon",
  "Construction",
  "Real Estate",
  "Fitness",
  "Events",
  "Home Services",
  "Automotive",
];

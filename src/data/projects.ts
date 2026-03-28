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
}

export const projects: Project[] = [
  // {
  //   id: "1",
  //   slug: "glam-studio-salon",
  //   name: "Glam Studio Salon",
  //   category: "Beauty & Salon",
  //   description:
  //     "A premium salon website with online booking, service showcase, gallery, and WhatsApp lead capture. Designed to convert walk-ins into loyal customers.",
  //   demoUrl: "https://glam-studio.demo.vercel.app",
  //   tags: ["Next.js", "Config-Driven", "WhatsApp"],
  //   color: "#EC4899",
  //   featured: true,
  //   emoji: "💇",
  // },
  // {
  //   id: "2",
  //   slug: "pink-bliss-beauty",
  //   name: "Pink Bliss Beauty",
  //   category: "Beauty & Salon",
  //   description:
  //     "Elegant beauty parlour website with service pricing, before-after gallery, and Google Maps integration for local discovery.",
  //   demoUrl: "https://pink-bliss.demo.vercel.app",
  //   tags: ["React", "SEO", "Google Maps"],
  //   color: "#A855F7",
  //   featured: false,
  //   emoji: "💅",
  // },
  // {
  //   id: "3",
  //   slug: "buildright-construction",
  //   name: "BuildRight Construction",
  //   category: "Construction",
  //   description:
  //     "Professional construction company website showcasing completed projects, services, team, and a lead generation form for new enquiries.",
  //   demoUrl: "https://buildright.demo.vercel.app",
  //   tags: ["TypeScript", "Portfolio", "Lead Gen"],
  //   color: "#F59E0B",
  //   featured: true,
  //   emoji: "🏗️",
  // },
  // {
  //   id: "4",
  //   slug: "nova-fashion-store",
  //   name: "Nova Fashion Store",
  //   category: "Fashion",
  //   description:
  //     "A trendy fashion e-commerce landing page with product showcases, lookbook gallery, and WhatsApp-based ordering system.",
  //   demoUrl: "https://nova-fashion.demo.vercel.app",
  //   tags: ["E-commerce", "Tailwind", "Vercel"],
  //   color: "#D4AF37",
  //   featured: true,
  //   emoji: "👗",
  // },
  // {
  //   id: "5",
  //   slug: "city-smile-dental",
  //   name: "City Smile Dental",
  //   category: "Health",
  //   description:
  //     "Modern dental clinic website with appointment booking, service descriptions, doctor profiles, and patient testimonials.",
  //   demoUrl: "https://city-smile.demo.vercel.app",
  //   tags: ["Health", "Booking", "SEO"],
  //   color: "#3B82F6",
  //   featured: false,
  //   emoji: "🦷",
  // },
  // {
  //   id: "6",
  //   slug: "fitzone-gym",
  //   name: "FitZone Gym",
  //   category: "Fitness",
  //   description:
  //     "High-energy gym website with membership plans, trainer profiles, class schedules, and a trial class signup form.",
  //   demoUrl: "https://fitzone.demo.vercel.app",
  //   tags: ["Fitness", "Membership", "CTA"],
  //   color: "#EF4444",
  //   featured: true,
  //   emoji: "🏋️",
  // },
  // {
  //   id: "7",
  //   slug: "spice-garden-restaurant",
  //   name: "Spice Garden Restaurant",
  //   category: "Food",
  //   description:
  //     "Mouth-watering restaurant website with digital menu, table reservation via WhatsApp, photo gallery, and Google reviews integration.",
  //   demoUrl: "https://spice-garden.demo.vercel.app",
  //   tags: ["Food", "Menu", "WhatsApp"],
  //   color: "#F97316",
  //   featured: false,
  //   emoji: "🍽️",
  // },
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
  },

  // {
  //   id: "9",
  //   slug: "homenest-real-estate",
  //   name: "HomeNest Real Estate",
  //   category: "Real Estate",
  //   description:
  //     "Property listing website with advanced filters, virtual tour links, neighbourhood info, and direct WhatsApp enquiry for each listing.",
  //   demoUrl: "https://homenest.demo.vercel.app",
  //   tags: ["Real Estate", "Listings", "Filters"],
  //   color: "#10B981",
  //   featured: false,
  //   emoji: "🏠",
  // },
  // {
  //   id: "10",
  //   slug: "spark-electricals",
  //   name: "Spark Electricals",
  //   category: "Home Services",
  //   description:
  //     "Service-based website for an electrical contractor with service areas, pricing estimates, emergency contact, and customer reviews.",
  //   demoUrl: "https://spark-electrical.demo.vercel.app",
  //   tags: ["Services", "Local SEO", "Contact"],
  //   color: "#EAB308",
  //   featured: false,
  //   emoji: "⚡",
  // },
  // {
  //   id: "11",
  //   slug: "royal-wedding-planners",
  //   name: "Royal Wedding Planners",
  //   category: "Events",
  //   description:
  //     "Luxurious wedding planning website with portfolio gallery, package pricing, vendor network, and consultation booking via WhatsApp.",
  //   demoUrl: "https://royal-wedding.demo.vercel.app",
  //   tags: ["Events", "Gallery", "Premium"],
  //   color: "#F43F5E",
  //   featured: true,
  //   emoji: "💒",
  // },
  // {
  //   id: "12",
  //   slug: "speeddrive-auto-service",
  //   name: "SpeedDrive Auto Service",
  //   category: "Automotive",
  //   description:
  //     "Auto service centre website with service menu, online booking, location map, and maintenance reminders via WhatsApp.",
  //   demoUrl: "https://speeddrive.demo.vercel.app",
  //   tags: ["Automotive", "Booking", "Maps"],
  //   color: "#6366F1",
  //   featured: false,
  //   emoji: "🚗",
  // },
];

export const categories = [
  "All",
  "Beauty & Salon",
  "Construction",
  "Fashion",
  "Health",
  "Food",
  "Education",
  "Real Estate",
  "Fitness",
  "Events",
  "Home Services",
  "Automotive",
];

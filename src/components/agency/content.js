import hotelImage from "../../assets/hotel-project.jpg";
import restaurantImage from "../../assets/restaurant-project.jpg";
import commerceImage from "../../assets/commerce-project.jpg";

export const brand = {
  name: "BION STUDIO",
  shortName: "BION",
  tagline: "Build. Innovate. Optimize. Navigate.",
  email: "bionstudio3@gmail.com",
  phone: "+91 91585 29196",
  phoneHref: "tel:+919158529196",
  whatsapp: "https://wa.me/919158529196",
  instagram: "https://www.instagram.com/bionstudioo/",
  location: "Based in Nashik, India · Working remotely worldwide",
};

export const navItems = ["Home", "Services", "Work", "About", "Process", "Contact"];

export const services = [
  {
    n: "01",
    title: "Websites & Web Experiences",
    text: "Fast, considered websites that carry a brand's ambition — designed to be remembered and built to convert.",
    tags: ["Brand sites", "Landing pages", "E-commerce", "CMS"],
  },
  {
    n: "02",
    title: "Web Apps & Platforms",
    text: "Dashboards, portals and platforms designed around real workflows — never forced into a template.",
    tags: ["SaaS", "Client portals", "Dashboards", "APIs"],
  },
  {
    n: "03",
    title: "Mobile Applications",
    text: "iOS and Android apps that put your product in every customer's pocket, with native-grade polish.",
    tags: ["iOS", "Android", "Flutter", "React Native"],
  },
  {
    n: "04",
    title: "Custom Software",
    text: "Purpose-built systems for the problems that off-the-shelf tools were never designed to solve.",
    tags: ["Internal tools", "Booking systems", "CRM", "Integrations"],
  },
  {
    n: "05",
    title: "UI / UX Design",
    text: "Interfaces shaped by clarity and restraint — research, design systems and prototypes that feel inevitable.",
    tags: ["Research", "Design systems", "Prototyping", "Branding"],
  },
  {
    n: "06",
    title: "Business Automation",
    text: "Workflows and integrations that remove repetitive work, so your team can spend its time on growth.",
    tags: ["Workflows", "Payments", "Notifications", "AI tooling"],
  },
];

export const capabilities = [
  "Websites",
  "Web Apps",
  "Mobile Apps",
  "UI / UX Design",
  "E-commerce",
  "Custom Software",
  "Automation",
  "Brand Systems",
];

export const transformation = [
  { title: "Idea", text: "The spark, the problem, the ambition worth building around." },
  { title: "Strategy", text: "Positioning, goals and a scope everyone agrees on." },
  { title: "Design", text: "Identity, interface and interaction shaped with intent." },
  { title: "Technology", text: "Engineering that is fast, secure and easy to maintain." },
  { title: "Experience", text: "A product your customers genuinely enjoy using." },
  { title: "Growth", text: "Measured, refined and compounded long after launch." },
];

export const projects = [
  {
    n: "01",
    title: "Aurelia Retreat",
    industry: "Hospitality",
    built:
      "A cinematic booking platform built around stillness — turning quiet, beautiful storytelling into direct reservations.",
    scope: ["Brand & UI", "Booking flow", "CMS"],
    tech: ["Next.js", "Booking Engine", "CMS"],
    image: hotelImage,
  },
  {
    n: "02",
    title: "House of Ember",
    industry: "Food & Beverage",
    built:
      "A sensory brand and ordering experience designed to turn late-night discovery into full tables.",
    scope: ["Identity", "Menu & ordering", "Local SEO"],
    tech: ["React", "Motion", "Local SEO"],
    image: restaurantImage,
  },
  {
    n: "03",
    title: "Form / Object",
    industry: "Retail",
    built:
      "A restrained commerce storefront where product, texture and motion lead the story — and checkout stays effortless.",
    scope: ["Storefront", "Product pages", "Analytics"],
    tech: ["Shopify", "Headless Commerce", "Analytics"],
    image: commerceImage,
  },
];

export const whyBion = [
  {
    n: "01",
    title: "Think",
    text: "We start with the business problem, not the brief. Every decision is tied to an outcome you can measure.",
  },
  {
    n: "02",
    title: "Design",
    text: "Interfaces reduced to what earns its place — clear hierarchy, considered motion, nothing decorative for its own sake.",
  },
  {
    n: "03",
    title: "Build",
    text: "Modern, maintainable engineering chosen for the problem at hand — quick on day one, easy to extend on day 500.",
  },
  {
    n: "04",
    title: "Evolve",
    text: "Launch is a checkpoint, not a finish line. We keep measuring, refining and improving what we ship.",
  },
];

export const bionPrinciples = [
  {
    letter: "B",
    word: "Build",
    text: "We turn ideas and business requirements into real digital products, websites, applications and software.",
  },
  {
    letter: "I",
    word: "Innovate",
    text: "We use modern technology, creative thinking and new approaches to build meaningful digital experiences.",
  },
  {
    letter: "O",
    word: "Optimize",
    text: "We improve digital experiences, workflows and business processes to make them simpler, faster and more effective.",
  },
  {
    letter: "N",
    word: "Navigate",
    text: "We help businesses move confidently through the digital world with the right technology and strategy.",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Discover",
    text: "We understand the business, its customers and what success looks like.",
  },
  {
    n: "02",
    title: "Define",
    text: "We scope the structure, content and priorities before anything gets built.",
  },
  {
    n: "03",
    title: "Design",
    text: "We shape a visual direction the product can carry for years, not months.",
  },
  {
    n: "04",
    title: "Develop",
    text: "We engineer the product using modern, maintainable technology.",
  },
  { n: "05", title: "Launch", text: "We test, optimize and ship the work to production." },
  {
    n: "06",
    title: "Grow",
    text: "We keep measuring, refining and compounding results after launch.",
  },
];

export const about = {
  headline:
    "We believe every business deserves a digital presence that feels as good as the business behind it.",
  paragraphs: [
    "Bion Studio is a small, focused team of designers and engineers helping businesses build and grow their digital presence.",
    "Strategy, design and engineering live together here — fewer handoffs, clearer thinking, and work built around the whole business, not only the screen.",
  ],
};

export const stats = [
  ["40+", "Projects delivered"],
  ["12", "Industries served"],
  ["3", "Years in motion"],
];

export const techRings = [
  {
    label: "Experience layer",
    sub: "What people see and touch",
    items: [
      { name: "React", icon: "Atom" },
      { name: "Next.js", icon: "Layers" },
      { name: "TypeScript", icon: "FileCode2" },
    ],
  },
  {
    label: "Logic & data",
    sub: "What powers it underneath",
    items: [
      { name: "Node.js", icon: "Hexagon" },
      { name: "Express", icon: "Server" },
      { name: "MongoDB", icon: "Leaf" },
      { name: "MySQL", icon: "Database" },
    ],
  },
  {
    label: "Mobile & cloud",
    sub: "Where it runs and scales",
    items: [
      { name: "Flutter", icon: "Feather" },
      { name: "React Native", icon: "Smartphone" },
      { name: "Firebase", icon: "Flame" },
      { name: "AWS", icon: "Cloud" },
      { name: "Vercel", icon: "Triangle" },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "The kind of digital partner that sees the business problem before opening the design file.",
    name: "Founder",
    role: "Hospitality group",
  },
  {
    quote: "Clear thinking, premium execution, and a product that finally feels like our ambition.",
    name: "Managing Director",
    role: "Retail brand",
  },
  {
    quote: "A small, responsive team with the strategic depth of a much larger studio.",
    name: "Co-founder",
    role: "Growth-stage company",
  },
];

export const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most websites launch in 3–6 weeks. Larger platforms and mobile apps usually take 8–16 weeks. After a short discovery call you'll get a clear, dated timeline.",
  },
  {
    q: "How do you price projects?",
    a: "Fixed-scope proposals after discovery, so there are no surprises. For ongoing work we offer flexible monthly retainers.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. We're remote-first and work with businesses across time zones, with regular check-ins and a shared project space.",
  },
  {
    q: "What happens after launch?",
    a: "We stay involved. Support, performance monitoring and continuous improvement plans keep your product fast, secure and growing.",
  },
  {
    q: "Do I own the code and the designs?",
    a: "Yes. Once the project is complete you own everything we build for you — source code, design files and assets.",
  },
];

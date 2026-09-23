import { createFileRoute } from "@tanstack/react-router";
import AgencyApp from "../components/agency/App";
import { brand, faqs, services } from "../components/agency/content";

// Change this one value if the live domain is different.
export const SITE_URL = "https://bionstudio.in";

const TITLE = "Bion Studio | Website, App & Software Development Agency in Nashik";
const DESCRIPTION =
  "Bion Studio is a web design and development studio in Nashik, Maharashtra. We build premium websites, web apps, mobile apps, e-commerce stores and custom software for businesses across India and worldwide.";
const KEYWORDS = [
  "Bion Studio",
  "website development Nashik",
  "web design company Nashik",
  "website designer in Nashik",
  "web development agency Maharashtra",
  "app development company Nashik",
  "mobile app development India",
  "custom software development",
  "e-commerce website development",
  "UI UX design agency",
  "business automation",
  "hotel website design",
  "restaurant website design",
  "digital agency India",
  "React Next.js development",
].join(", ");
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Bion Studio",
      alternateName: "BION STUDIO",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/icon-512.png`,
      image: OG_IMAGE,
      email: brand.email,
      telephone: "+919158529196",
      sameAs: [brand.instagram],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+919158529196",
        email: brand.email,
        contactType: "sales",
        areaServed: ["IN", "Worldwide"],
        availableLanguage: ["English", "Hindi", "Marathi"],
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "Bion Studio",
      slogan: brand.tagline,
      description: DESCRIPTION,
      url: `${SITE_URL}/`,
      image: OG_IMAGE,
      logo: `${SITE_URL}/icon-512.png`,
      email: brand.email,
      telephone: "+919158529196",
      priceRange: "₹₹",
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nashik",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: 19.9975, longitude: 73.7898 },
      areaServed: [
        { "@type": "City", name: "Nashik" },
        { "@type": "State", name: "Maharashtra" },
        { "@type": "Country", name: "India" },
        "Worldwide",
      ],
      sameAs: [brand.instagram],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.text },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Bion Studio",
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: KEYWORDS },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "geo.region", content: "IN-MH" },
      { name: "geo.placename", content: "Nashik" },
      { name: "geo.position", content: "19.9975;73.7898" },
      { name: "ICBM", content: "19.9975, 73.7898" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:secure_url", content: OG_IMAGE },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Bion Studio — Ideas. Design. Technology." },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: "Bion Studio logo" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(structuredData) }],
  }),
  component: AgencyApp,
});

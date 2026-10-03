// Change this one value if the live domain is different.
export const SITE_URL = "https://www.bionstudio.in";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const ORG = { "@type": "Organization", name: "Bion Studio", url: `${SITE_URL}/` };

export function breadcrumbLd(crumbs) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

export function faqLd(faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceLd({ name, description, path }) {
  return {
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: ORG,
    areaServed: [
      { "@type": "City", name: "Nashik" },
      { "@type": "State", name: "Maharashtra" },
      { "@type": "Country", name: "India" },
    ],
  };
}

// Route `head()` payload for an inner page: title, description, canonical,
// Open Graph / Twitter tags and optional JSON-LD nodes.
export function pageHead({ title, description, path, keywords, ld = [] }) {
  const url = `${SITE_URL}${path}`;
  const meta = [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: OG_IMAGE },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: OG_IMAGE },
  ];
  if (keywords) meta.push({ name: "keywords", content: keywords });
  return {
    meta,
    links: [{ rel: "canonical", href: url }],
    scripts: ld.length
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({ "@context": "https://schema.org", "@graph": ld }),
          },
        ]
      : [],
  };
}

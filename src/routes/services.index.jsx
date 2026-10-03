import { createFileRoute } from "@tanstack/react-router";
import { ServicesIndexPage } from "../components/agency/InnerPages";
import { servicePages } from "../components/agency/pages";
import { SITE_URL, breadcrumbLd, pageHead } from "../lib/seo";

export const Route = createFileRoute("/services/")({
  head: () =>
    pageHead({
      title: "Web, App, SEO & Branding Services in Nashik | Bion Studio",
      description:
        "Website and app development, e-commerce, custom software, SEO, Google Business Profile, branding, social media, redesign and maintenance — all from one studio in Nashik.",
      path: "/services",
      ld: [
        {
          "@type": "ItemList",
          name: "Bion Studio services",
          itemListElement: servicePages.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.navTitle,
            url: `${SITE_URL}/services/${s.slug}`,
          })),
        },
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]),
      ],
    }),
  component: ServicesIndexPage,
});

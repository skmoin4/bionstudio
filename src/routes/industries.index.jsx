import { createFileRoute } from "@tanstack/react-router";
import { IndustriesIndexPage } from "../components/agency/InnerPages";
import { industryPages } from "../components/agency/pages";
import { SITE_URL, breadcrumbLd, pageHead } from "../lib/seo";

export const Route = createFileRoute("/industries/")({
  head: () =>
    pageHead({
      title: "Industries We Build For — Websites & Software | Bion Studio",
      description:
        "Websites, apps and software for hotels, restaurants, retail, wineries, real estate, clinics, institutes, manufacturers, gyms, travel, agri-business, professionals and startups.",
      path: "/industries",
      ld: [
        {
          "@type": "ItemList",
          name: "Industries served by Bion Studio",
          itemListElement: industryPages.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.navTitle,
            url: `${SITE_URL}/industries/${s.slug}`,
          })),
        },
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ]),
      ],
    }),
  component: IndustriesIndexPage,
});

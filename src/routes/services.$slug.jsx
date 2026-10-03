import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePage } from "../components/agency/InnerPages";
import { findService } from "../components/agency/pages";
import { breadcrumbLd, faqLd, pageHead, serviceLd } from "../lib/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const page = findService(params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData: page }) => {
    if (!page) return {};
    const path = `/services/${page.slug}`;
    return pageHead({
      title: page.metaTitle,
      description: page.metaDescription,
      path,
      keywords: [...page.tags, `${page.navTitle} Nashik`, "Bion Studio"].join(", "),
      ld: [
        serviceLd({ name: page.navTitle, description: page.metaDescription, path }),
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: page.navTitle, path },
        ]),
        faqLd(page.faqs),
      ],
    });
  },
  component: function ServiceRoute() {
    return <ServicePage page={Route.useLoaderData()} />;
  },
});

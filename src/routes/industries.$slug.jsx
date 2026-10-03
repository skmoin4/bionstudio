import { createFileRoute, notFound } from "@tanstack/react-router";
import { IndustryPage } from "../components/agency/InnerPages";
import { findIndustry } from "../components/agency/pages";
import { breadcrumbLd, faqLd, pageHead, serviceLd } from "../lib/seo";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const page = findIndustry(params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData: page }) => {
    if (!page) return {};
    const path = `/industries/${page.slug}`;
    return pageHead({
      title: page.metaTitle,
      description: page.metaDescription,
      path,
      keywords: [...page.tags, `${page.navTitle} website Nashik`, "Bion Studio"].join(", "),
      ld: [
        serviceLd({ name: `${page.navTitle} websites`, description: page.metaDescription, path }),
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: page.navTitle, path },
        ]),
        faqLd(page.faqs),
      ],
    });
  },
  component: function IndustryRoute() {
    return <IndustryPage page={Route.useLoaderData()} />;
  },
});

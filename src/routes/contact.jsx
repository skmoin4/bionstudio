import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "../components/agency/InnerPages";
import { brand } from "../components/agency/content";
import { SITE_URL, breadcrumbLd, pageHead } from "../lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact Bion Studio | Website & App Developers in Nashik",
      description:
        "Talk to Bion Studio about your website, app or software project. Call or WhatsApp +91 91585 29196, or send an enquiry — we reply within 24 hours.",
      path: "/contact",
      ld: [
        {
          "@type": "ContactPage",
          name: "Contact Bion Studio",
          url: `${SITE_URL}/contact`,
          mainEntity: {
            "@type": "Organization",
            name: "Bion Studio",
            email: brand.email,
            telephone: "+919158529196",
          },
        },
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]),
      ],
    }),
  component: ContactPage,
});

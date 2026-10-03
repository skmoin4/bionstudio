import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "../components/agency/InnerPages";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    pageHead({
      title: "Privacy Policy | Bion Studio",
      description:
        "How Bion Studio collects, uses and protects the information you share when you visit our website or contact us.",
      path: "/privacy-policy",
    }),
  component: function PrivacyRoute() {
    return <PrivacyPage updated="3 October 2026" />;
  },
});

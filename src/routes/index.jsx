import { createFileRoute } from "@tanstack/react-router";
import AgencyApp from "../components/agency/App";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexora Studio | Web Development & Digital Growth Agency" },
      { name: "description", content: "We build premium websites and digital experiences for ambitious businesses." },
      { property: "og:title", content: "Nexora Studio | Web Development & Digital Growth Agency" },
      { property: "og:description", content: "We build premium websites and digital experiences for ambitious businesses." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <AgencyApp />;
}

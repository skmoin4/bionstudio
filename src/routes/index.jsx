import { createFileRoute } from "@tanstack/react-router";
import AgencyApp from "../components/agency/App";

const TITLE = "Bion Studio | Digital Experiences Built for Growth";
const DESCRIPTION =
  "Bion Studio builds premium websites, applications, software and digital solutions that help businesses grow.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bion Studio",
  slogan: "Build. Innovate. Optimize. Navigate.",
  description: DESCRIPTION,
  url: "/",
  areaServed: "Worldwide",
  serviceType: [
    "Website Development",
    "Web Applications",
    "Mobile App Development",
    "Custom Software",
    "UI/UX Design",
    "E-Commerce Development",
    "Business Automation",
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <AgencyApp />
    </>
  );
}

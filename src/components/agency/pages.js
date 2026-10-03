import hotelImage from "../../assets/hotel-project.jpg";
import restaurantImage from "../../assets/restaurant-project.jpg";
import commerceImage from "../../assets/commerce-project.jpg";

// Detail content for the /services/* and /industries/* pages. The homepage
// lists stay in content.js; slugs here must match the `slug` fields there.

export const serviceGroups = [
  { id: "build", label: "Build", sub: "Websites, apps & software" },
  { id: "grow", label: "Grow", sub: "Get found & get customers" },
  { id: "improve", label: "Improve & support", sub: "Make what you have better" },
];

export const servicePages = [
  {
    slug: "website-development",
    group: "build",
    icon: "Globe",
    navTitle: "Website Development",
    navDesc: "Business websites, landing pages & CMS",
    metaTitle: "Website Development Company in Nashik | Bion Studio",
    metaDescription:
      "Fast, mobile-first business websites designed and built in Nashik. SEO-ready from day one, easy to update, and built to turn visitors into enquiries.",
    eyebrow: "Website development",
    h1: ["Websites that make your business", "look as good as it is."],
    lede: "We design and build fast, mobile-first websites for businesses in Nashik and across India — clear about what you do, easy to find on Google, and built to turn visitors into enquiries.",
    tags: ["Business websites", "Landing pages", "WordPress", "Next.js", "CMS"],
    includes: [
      {
        title: "Custom design",
        text: "A design made for your brand and your customers — not a template with your logo dropped in.",
      },
      {
        title: "Mobile-first build",
        text: "Most of your visitors are on a phone. Every page is designed for small screens first, then scaled up.",
      },
      {
        title: "SEO set-up",
        text: "Meta tags, sitemap, structured data, Google Search Console and fast loading — done before launch, not after.",
      },
      {
        title: "Easy content updates",
        text: "Update text, photos and offers yourself through a simple admin panel, without calling a developer.",
      },
      {
        title: "Enquiry forms & WhatsApp",
        text: "Contact forms, click-to-call and WhatsApp buttons placed where customers actually look for them.",
      },
      {
        title: "Hosting & domain help",
        text: "We set up hosting, domain, SSL and business email so everything works together from day one.",
      },
    ],
    benefits: [
      "Show up when customers in Nashik search for what you offer",
      "Load in under a few seconds, even on mobile data",
      "Look professional enough to win bigger clients",
      "Own your code, design files and content completely",
    ],
    idealFor: ["Local businesses", "Startups", "Clinics & consultants", "Hotels & restaurants", "Manufacturers", "Personal brands"],
    faqs: [
      {
        q: "How long does a business website take?",
        a: "A typical business website takes 3–6 weeks from the first call to launch, depending on the number of pages and how quickly content is ready.",
      },
      {
        q: "Will I be able to update the website myself?",
        a: "Yes. We set up an easy admin panel (WordPress or a headless CMS) so you can change text, photos and offers without any coding.",
      },
      {
        q: "Do you also provide hosting and a domain?",
        a: "We help you buy and set up the domain, hosting, SSL certificate and business email in your own name, so you stay in control.",
      },
      {
        q: "Can you redesign my existing website?",
        a: "Yes. We'll review your current site for free, show you what's holding it back and propose a clear plan for the redesign.",
      },
    ],
    related: ["ui-ux-design", "web-app-development", "business-automation"],
  },
  {
    slug: "web-app-development",
    group: "build",
    icon: "LayoutDashboard",
    navTitle: "Web Apps & Platforms",
    navDesc: "Dashboards, portals & SaaS products",
    metaTitle: "Web App & Dashboard Development in Nashik | Bion Studio",
    metaDescription:
      "Custom web applications, dashboards, client portals and SaaS platforms built around your real workflows. Designed and developed by Bion Studio, Nashik.",
    eyebrow: "Web apps & platforms",
    h1: ["Web apps built around", "the way you actually work."],
    lede: "Dashboards, client portals and SaaS platforms designed around your real workflows — so your team and your customers get exactly the tool they need, not a compromise.",
    tags: ["Dashboards", "Client portals", "SaaS", "APIs", "React", "Node.js"],
    includes: [
      {
        title: "Workflow discovery",
        text: "We map how your team works today before designing a single screen, so the app fits your process.",
      },
      {
        title: "Role-based access",
        text: "Admins, staff and customers each see only what they need, with secure login and permissions.",
      },
      {
        title: "Dashboards & reports",
        text: "Live numbers, charts and exports that help you make decisions without digging through spreadsheets.",
      },
      {
        title: "Integrations & APIs",
        text: "Connect payments, WhatsApp, email, SMS, accounting tools or your existing software.",
      },
      {
        title: "Scalable architecture",
        text: "Built on modern, maintainable technology that grows with your users instead of slowing down.",
      },
      {
        title: "Ongoing improvements",
        text: "We launch a solid first version, then keep improving it based on how people actually use it.",
      },
    ],
    benefits: [
      "Replace scattered spreadsheets and manual follow-ups",
      "Give customers a professional self-service portal",
      "See your business numbers in real time",
      "Start small and add features as you grow",
    ],
    idealFor: ["Startups building a product", "Service businesses", "Coaching institutes", "Distributors", "Agencies", "Internal teams"],
    faqs: [
      {
        q: "Can you build an MVP for my startup idea?",
        a: "Yes. We help you define the smallest version that proves your idea, build it quickly, and plan the next features based on real user feedback.",
      },
      {
        q: "Which technology do you use for web apps?",
        a: "Usually React or Next.js on the front end with Node.js or Laravel on the back end, and MySQL or MongoDB for data — chosen based on what your project needs.",
      },
      {
        q: "Will the app work on mobile phones?",
        a: "Yes. Every web app we build is responsive and works in mobile browsers. If you need a native app as well, we can build that too.",
      },
      {
        q: "Who owns the source code?",
        a: "You do. Once the project is complete, the full source code, database and design files belong to you.",
      },
    ],
    related: ["custom-software-development", "mobile-app-development", "ui-ux-design"],
  },
  {
    slug: "mobile-app-development",
    group: "build",
    icon: "Smartphone",
    navTitle: "Mobile App Development",
    navDesc: "Android & iOS apps with Flutter",
    metaTitle: "Mobile App Development Company in Nashik | Bion Studio",
    metaDescription:
      "Android and iOS app development in Nashik with Flutter and React Native. From idea and design to Play Store and App Store launch.",
    eyebrow: "Mobile app development",
    h1: ["Apps that put your business", "in every customer's pocket."],
    lede: "We design and build Android and iOS apps with Flutter and React Native — one codebase, native-grade polish, and a smooth path from idea to the Play Store and App Store.",
    tags: ["Android", "iOS", "Flutter", "React Native", "Firebase"],
    includes: [
      {
        title: "App strategy & scope",
        text: "We help you decide what the first version must do, so you launch sooner and spend wisely.",
      },
      {
        title: "UI/UX design",
        text: "Screens designed for thumbs, not mice — simple flows that customers understand without a tutorial.",
      },
      {
        title: "Cross-platform build",
        text: "One Flutter or React Native codebase for both Android and iOS, saving time and cost.",
      },
      {
        title: "Backend & admin panel",
        text: "Secure APIs, database and an admin panel to manage users, orders and content.",
      },
      {
        title: "Notifications & payments",
        text: "Push notifications, UPI and card payments, OTP login and other features customers expect.",
      },
      {
        title: "Store launch",
        text: "We handle Play Store and App Store submission, listings and review guidelines for you.",
      },
    ],
    benefits: [
      "Reach customers directly with push notifications",
      "Build loyalty with bookings, orders or rewards in one tap",
      "One codebase for Android and iOS keeps costs lower",
      "Full ownership of the app, code and store accounts",
    ],
    idealFor: ["Startups", "Restaurants & delivery", "Service bookings", "Retail & loyalty", "Education", "Field teams"],
    faqs: [
      {
        q: "Do you build for both Android and iOS?",
        a: "Yes. We usually use Flutter or React Native so a single codebase runs on both Android and iOS with a native feel.",
      },
      {
        q: "How long does it take to build an app?",
        a: "Most apps take 8–16 weeks depending on features. After a discovery call you'll get a clear, dated timeline.",
      },
      {
        q: "Will you publish the app on the Play Store and App Store?",
        a: "Yes. We prepare the listings and handle the submission and review process. The developer accounts are created in your name.",
      },
      {
        q: "Can the app work with my existing website or software?",
        a: "Yes. We can connect the app to your existing website, database or tools through APIs.",
      },
    ],
    related: ["ui-ux-design", "web-app-development", "custom-software-development"],
  },
  {
    slug: "custom-software-development",
    group: "build",
    icon: "Boxes",
    navTitle: "Custom Software",
    navDesc: "CRM, booking systems & internal tools",
    metaTitle: "Custom Software Development in Nashik | Bion Studio",
    metaDescription:
      "Custom CRM, booking systems, inventory and internal tools built for the way your business works. Software development by Bion Studio, Nashik.",
    eyebrow: "Custom software",
    h1: ["Software built for the problems", "off-the-shelf tools can't solve."],
    lede: "CRMs, booking systems, inventory tools and internal dashboards made for exactly how your business runs — no paying for features you don't use, no forcing your team into someone else's process.",
    tags: ["CRM", "Booking systems", "Inventory", "Internal tools", "Integrations"],
    includes: [
      {
        title: "Process mapping",
        text: "We sit with your team to understand the real workflow, the bottlenecks and what a better day looks like.",
      },
      {
        title: "Custom CRM",
        text: "Track leads, follow-ups, customers and sales in one place, with reminders your team will actually use.",
      },
      {
        title: "Booking & scheduling",
        text: "Appointments, rooms, tables or services — with availability, confirmations and reminders.",
      },
      {
        title: "Inventory & billing",
        text: "Stock, purchase, invoices and GST-ready reports tailored to your products and pricing.",
      },
      {
        title: "Data migration",
        text: "We move your existing data from spreadsheets or old software so nothing gets lost.",
      },
      {
        title: "Training & support",
        text: "Simple training for your team and support after launch, so the software actually gets adopted.",
      },
    ],
    benefits: [
      "Stop juggling multiple apps and spreadsheets",
      "Pay once for software you own, not monthly per-user fees",
      "Fit the software to your process, not the other way round",
      "Add features later as your business changes",
    ],
    idealFor: ["Growing SMEs", "Hotels & resorts", "Clinics", "Distributors", "Service companies", "Institutes"],
    faqs: [
      {
        q: "Why choose custom software over a ready-made tool?",
        a: "Ready-made tools are great until your process doesn't fit them. Custom software matches how you work, has no per-user fees, and you own it outright.",
      },
      {
        q: "Can you connect it with Tally, WhatsApp or payment gateways?",
        a: "In most cases, yes. We regularly integrate payments, WhatsApp, email, SMS and accounting exports. We'll confirm feasibility during discovery.",
      },
      {
        q: "Can we start with a small version first?",
        a: "Yes, and we recommend it. We launch the most valuable features first, then add more in phases.",
      },
      {
        q: "Is our business data safe?",
        a: "We use secure hosting, encrypted connections, role-based access and regular backups. Your data stays yours.",
      },
    ],
    related: ["business-automation", "web-app-development", "mobile-app-development"],
  },
  {
    slug: "ui-ux-design",
    group: "improve",
    icon: "PenTool",
    navTitle: "UI / UX Design",
    navDesc: "Research, design systems & prototypes",
    metaTitle: "UI/UX Design Agency in Nashik | Bion Studio",
    metaDescription:
      "UI/UX design for websites, web apps and mobile apps — research, wireframes, design systems and clickable Figma prototypes. Bion Studio, Nashik.",
    eyebrow: "UI / UX design",
    h1: ["Interfaces that feel", "obvious to use."],
    lede: "Research, wireframes, design systems and clickable prototypes in Figma — so your website or app is clear, consistent and easy for customers to use before a line of code is written.",
    tags: ["Research", "Wireframes", "Figma", "Design systems", "Prototyping"],
    includes: [
      {
        title: "User research",
        text: "We learn who your users are, what they need and where they get stuck today.",
      },
      {
        title: "Wireframes & flows",
        text: "The structure of every screen and journey, agreed before visual design begins.",
      },
      {
        title: "Visual design",
        text: "A distinctive look built on your brand — typography, colour, imagery and motion.",
      },
      {
        title: "Clickable prototypes",
        text: "Interactive Figma prototypes you can test with real users and share with investors.",
      },
      {
        title: "Design systems",
        text: "Reusable components and guidelines that keep every new screen consistent.",
      },
      {
        title: "Developer handoff",
        text: "Clean, organised files and specs so development is faster — whether we build it or your team does.",
      },
    ],
    benefits: [
      "Fewer confused users and abandoned sign-ups",
      "Test ideas cheaply before building them",
      "A consistent brand across website and app",
      "Faster, smoother development later",
    ],
    idealFor: ["Startups", "Product teams", "App redesigns", "Website redesigns", "Investor pitches", "Brand refreshes"],
    faqs: [
      {
        q: "Do you only design, or also develop?",
        a: "Both. We can design and build the whole product, or hand over polished Figma files to your own developers.",
      },
      {
        q: "Which tools do you use?",
        a: "We design in Figma and share clickable prototypes you can open in any browser or on your phone.",
      },
      {
        q: "Can you redesign our existing app or website?",
        a: "Yes. We start with a quick review of what's not working, then redesign the most important journeys first.",
      },
      {
        q: "Do I get the design files?",
        a: "Yes. All Figma files, assets and the design system are handed over to you.",
      },
    ],
    related: ["website-development", "mobile-app-development", "web-app-development"],
  },
  {
    slug: "business-automation",
    group: "improve",
    icon: "Workflow",
    navTitle: "Business Automation",
    navDesc: "Workflows, payments & notifications",
    metaTitle: "Business Automation Services in Nashik | Bion Studio",
    metaDescription:
      "Automate repetitive work — WhatsApp and email notifications, payment reminders, lead follow-ups, reports and integrations. Bion Studio, Nashik.",
    eyebrow: "Business automation",
    h1: ["Let software do the", "repetitive work."],
    lede: "We connect your tools and automate the tasks your team repeats every day — follow-ups, reminders, reports and data entry — so people can spend their time on customers and growth.",
    tags: ["Workflows", "WhatsApp", "Payments", "Notifications", "Integrations"],
    includes: [
      {
        title: "Automation audit",
        text: "We find the repetitive tasks that cost your team the most hours each week.",
      },
      {
        title: "Lead follow-ups",
        text: "New enquiries automatically saved, assigned and followed up by WhatsApp or email.",
      },
      {
        title: "Payment reminders",
        text: "Automatic invoices, payment links and polite reminders so you get paid on time.",
      },
      {
        title: "Notifications",
        text: "Booking confirmations, order updates and alerts sent instantly to customers and staff.",
      },
      {
        title: "Reports on autopilot",
        text: "Daily or weekly summaries delivered to your inbox or WhatsApp, without manual work.",
      },
      {
        title: "Tool integrations",
        text: "Connect your website, forms, spreadsheets, CRM, payment gateway and other apps.",
      },
    ],
    benefits: [
      "Save hours of manual work every week",
      "Never miss a lead or a follow-up again",
      "Fewer human errors in data and billing",
      "Customers get instant, professional updates",
    ],
    idealFor: ["Sales teams", "Service businesses", "Hotels & restaurants", "Clinics", "E-commerce stores", "Institutes"],
    faqs: [
      {
        q: "What kind of tasks can be automated?",
        a: "Anything rule-based and repetitive: lead capture, follow-ups, reminders, invoices, notifications, data entry between tools and regular reports.",
      },
      {
        q: "Do we need to change our existing software?",
        a: "Usually not. We connect the tools you already use wherever they allow it, and only suggest changes when they clearly save time.",
      },
      {
        q: "Can you automate WhatsApp messages?",
        a: "Yes, using the official WhatsApp Business API or approved providers for confirmations, reminders and updates.",
      },
      {
        q: "How quickly will we see results?",
        a: "Most automations go live within 1–3 weeks, and the time saved shows up from the first week of use.",
      },
    ],
    related: ["custom-software-development", "web-app-development", "website-development"],
  },
  {
    slug: "ecommerce-development",
    group: "build",
    icon: "ShoppingCart",
    navTitle: "E-commerce Stores",
    navDesc: "Shopify, WooCommerce & custom stores",
    metaTitle: "E-commerce Store Development in Nashik | Bion Studio",
    metaDescription:
      "Online stores built on Shopify, WooCommerce or custom code — product catalogue, UPI and card payments, shipping and order management. Bion Studio, Nashik.",
    eyebrow: "E-commerce development",
    h1: ["Online stores that are", "easy to buy from — and run."],
    lede: "We build online stores on Shopify, WooCommerce or fully custom code — with fast product pages, trusted Indian payments, shipping integrations and an admin panel you can manage yourself.",
    tags: ["Shopify", "WooCommerce", "Custom stores", "UPI & cards", "Shipping"],
    includes: [
      {
        title: "Platform advice",
        text: "Shopify, WooCommerce or custom — we recommend what fits your products, volume and budget.",
      },
      {
        title: "Store design",
        text: "A storefront that looks like your brand, with product pages built to convert.",
      },
      {
        title: "Payments",
        text: "UPI, cards, net banking, wallets and cash on delivery through trusted Indian gateways.",
      },
      {
        title: "Shipping & tracking",
        text: "Courier integrations for pickups, tracking links and delivery updates to customers.",
      },
      {
        title: "Catalogue set-up",
        text: "Products, variants, categories, photos and pricing uploaded and organised for you.",
      },
      {
        title: "Store training",
        text: "We show you how to add products, process orders and run offers on your own.",
      },
    ],
    benefits: [
      "Sell 24/7 beyond your physical shop",
      "Take orders without back-and-forth on WhatsApp",
      "Keep more margin than marketplaces allow",
      "Build a customer list you own",
    ],
    idealFor: ["Retail shops", "D2C brands", "Clothing & jewellery", "Home décor", "Food products", "Wholesalers"],
    faqs: [
      {
        q: "Shopify or WooCommerce — which should I choose?",
        a: "Shopify is quickest to launch and very low-maintenance. WooCommerce gives more control and no platform fee. Custom builds suit unusual catalogues or workflows. We'll recommend one after understanding your products.",
      },
      {
        q: "Can I sell on Amazon or Flipkart too?",
        a: "Yes. Your own store and marketplaces can run side by side, and we can help keep products and stock organised across them.",
      },
      {
        q: "Do you add GST invoices?",
        a: "Yes. We set up GST-compliant invoices and tax settings as part of the store.",
      },
    ],
    related: ["website-development", "seo-services", "social-media-marketing"],
  },
  {
    slug: "wordpress-development",
    group: "build",
    icon: "PanelsTopLeft",
    navTitle: "WordPress Development",
    navDesc: "Custom themes, plugins & WooCommerce",
    metaTitle: "WordPress Website Development in Nashik | Bion Studio",
    metaDescription:
      "Custom WordPress websites, themes and plugins — fast, secure and easy to update. WordPress and WooCommerce development by Bion Studio, Nashik.",
    eyebrow: "WordPress development",
    h1: ["WordPress websites", "without the bloat."],
    lede: "Custom WordPress sites that are fast, secure and genuinely easy to update — not a heavy theme with fifty plugins slowing everything down.",
    tags: ["Custom themes", "Plugins", "WooCommerce", "Speed", "Security"],
    includes: [
      {
        title: "Custom theme",
        text: "A theme built for your design, so pages load fast and look exactly right.",
      },
      {
        title: "Easy editing",
        text: "Content blocks set up so you can edit pages without breaking the layout.",
      },
      {
        title: "Custom plugins",
        text: "Features built to order when an off-the-shelf plugin doesn't fit.",
      },
      {
        title: "Speed optimisation",
        text: "Caching, image optimisation and clean code for high page-speed scores.",
      },
      {
        title: "Security hardening",
        text: "Secure settings, backups, updates and protection against common attacks.",
      },
      {
        title: "Migration & fixes",
        text: "Move an existing site, fix a broken one, or clean up an old, slow install.",
      },
    ],
    benefits: [
      "Update your website yourself, any time",
      "A huge ecosystem of tools when you need them",
      "Fast and secure when built properly",
      "No lock-in — any WordPress developer can work on it",
    ],
    idealFor: ["Business websites", "Blogs & news", "Schools", "NGOs", "Small online stores", "Portfolios"],
    faqs: [
      {
        q: "Is WordPress good enough for a business website?",
        a: "Yes — when it's built properly. A lightweight custom theme with only essential plugins is fast, secure and easy to manage.",
      },
      {
        q: "My WordPress site is very slow. Can you fix it?",
        a: "Usually, yes. We audit plugins, theme, hosting and images, then fix what's slowing it down — or recommend a rebuild if that's cheaper long-term.",
      },
      {
        q: "Do you offer WordPress maintenance?",
        a: "Yes. We can handle updates, backups, security monitoring and small changes on a monthly plan.",
      },
    ],
    related: ["website-development", "website-maintenance", "ecommerce-development"],
  },
  {
    slug: "seo-services",
    group: "grow",
    icon: "Search",
    navTitle: "SEO & Local SEO",
    navDesc: "Rank higher on Google & Maps",
    metaTitle: "SEO & Local SEO Services in Nashik | Bion Studio",
    metaDescription:
      "SEO and local SEO for businesses in Nashik — technical fixes, on-page optimisation, Google Business Profile and content that helps customers find you on Google.",
    eyebrow: "SEO & local SEO",
    h1: ["Be found when customers", "search for you."],
    lede: "Technical SEO, on-page optimisation and local SEO that help people in Nashik and beyond find your business on Google and Maps — with honest reporting and no fake promises of overnight #1 rankings.",
    tags: ["Technical SEO", "On-page SEO", "Local SEO", "Google Maps", "Search Console"],
    includes: [
      {
        title: "SEO audit",
        text: "A clear report on what's stopping your site from ranking, in plain language.",
      },
      {
        title: "Technical fixes",
        text: "Speed, mobile-friendliness, indexing, sitemaps and structured data sorted out.",
      },
      {
        title: "Keyword research",
        text: "The searches your customers actually use — including local \"near me\" terms.",
      },
      {
        title: "On-page optimisation",
        text: "Titles, descriptions, headings and content tuned for each important page.",
      },
      {
        title: "Local SEO",
        text: "Google Business Profile, local listings and reviews to win Maps results.",
      },
      {
        title: "Monthly reporting",
        text: "Rankings, traffic and enquiries tracked in Search Console and explained simply.",
      },
    ],
    benefits: [
      "More enquiries without paying for every click",
      "Show up on Google Maps in your area",
      "Traffic that keeps coming month after month",
      "Clear reports on what's working",
    ],
    idealFor: ["Local businesses", "Clinics", "Hotels & restaurants", "Service providers", "E-commerce", "Institutes"],
    faqs: [
      {
        q: "How long does SEO take to show results?",
        a: "Technical fixes help quickly, but meaningful ranking improvements usually take 3–6 months. SEO is a steady, compounding investment.",
      },
      {
        q: "Can you guarantee the #1 position on Google?",
        a: "No honest agency can — Google decides rankings. What we guarantee is doing the work properly and reporting transparently on progress.",
      },
      {
        q: "Do you do SEO for websites you didn't build?",
        a: "Yes. We start with an audit of your existing site and fix what's holding it back.",
      },
    ],
    related: ["google-business-profile", "website-redesign", "social-media-marketing"],
  },
  {
    slug: "google-business-profile",
    group: "grow",
    icon: "MapPin",
    navTitle: "Google Business Profile",
    navDesc: "Maps listing, reviews & local reach",
    metaTitle: "Google Business Profile Setup in Nashik | Bion Studio",
    metaDescription:
      "Get your business on Google Maps. Google Business Profile setup, verification, optimisation and review strategy for businesses in Nashik.",
    eyebrow: "Google Business Profile",
    h1: ["Show up on Google Maps", "when it matters."],
    lede: "When someone searches \"near me\", your Google Business Profile is often the first thing they see. We set it up, verify it and optimise it so more local customers call, visit and book.",
    tags: ["Google Maps", "Verification", "Reviews", "Photos", "Local search"],
    includes: [
      {
        title: "Setup & verification",
        text: "We create or claim your profile and guide you through Google's verification.",
      },
      {
        title: "Complete optimisation",
        text: "Categories, services, hours, description, attributes and service areas filled in properly.",
      },
      {
        title: "Photos & posts",
        text: "Quality photos and regular posts that make your listing look active and trustworthy.",
      },
      {
        title: "Review strategy",
        text: "A simple QR and WhatsApp flow that makes it easy for happy customers to leave reviews.",
      },
      {
        title: "Website connection",
        text: "Your profile and website linked and consistent, which strengthens both.",
      },
      {
        title: "Insights",
        text: "See how many people found you, called, asked for directions or visited your site.",
      },
    ],
    benefits: [
      "Appear in Google Maps and the local 3-pack",
      "Get more calls and direction requests",
      "Build trust with real customer reviews",
      "Free visibility that works every day",
    ],
    idealFor: ["Shops", "Restaurants & cafés", "Clinics", "Salons & gyms", "Hotels", "Service centres"],
    faqs: [
      {
        q: "Is a Google Business Profile free?",
        a: "Yes, the profile itself is free from Google. We charge only for setting it up and optimising it properly.",
      },
      {
        q: "I don't have a shop address. Can I still get listed?",
        a: "Yes. Service-area businesses can hide their address and show the areas they serve instead.",
      },
      {
        q: "Can you remove negative reviews?",
        a: "We can't remove genuine reviews, but we help you reply professionally and collect more positive reviews from happy customers.",
      },
    ],
    related: ["seo-services", "website-development", "social-media-marketing"],
  },
  {
    slug: "social-media-marketing",
    group: "grow",
    icon: "Megaphone",
    navTitle: "Social Media & Ads",
    navDesc: "Instagram, Meta & Google Ads",
    metaTitle: "Social Media Marketing & Google Ads in Nashik | Bion Studio",
    metaDescription:
      "Instagram and Facebook marketing, Meta Ads and Google Ads campaigns for Nashik businesses — content, targeting, landing pages and clear reporting.",
    eyebrow: "Social media & ads",
    h1: ["Ads and content that bring", "real enquiries."],
    lede: "Instagram and Facebook content, Meta Ads and Google Ads campaigns — connected to landing pages and tracking, so you can see exactly which rupee brought which enquiry.",
    tags: ["Instagram", "Facebook", "Meta Ads", "Google Ads", "Landing pages"],
    includes: [
      {
        title: "Strategy & audience",
        text: "Who to reach, where they spend time and what will make them act.",
      },
      {
        title: "Content creation",
        text: "Posts, reels and creatives that match your brand and stop the scroll.",
      },
      {
        title: "Meta Ads",
        text: "Facebook and Instagram campaigns for enquiries, bookings, sales or footfall.",
      },
      {
        title: "Google Ads",
        text: "Search and local campaigns that appear when people are actively looking.",
      },
      {
        title: "Landing pages",
        text: "Focused pages built to convert ad clicks into calls, forms and WhatsApp chats.",
      },
      {
        title: "Tracking & reports",
        text: "Pixel and conversion tracking, with simple reports on cost per enquiry.",
      },
    ],
    benefits: [
      "Reach customers in Nashik or anywhere you choose",
      "Start getting enquiries within days",
      "Know your cost per lead, not just likes",
      "Content and website that work together",
    ],
    idealFor: ["Real estate", "Restaurants", "Clinics", "Institutes", "Events", "E-commerce"],
    faqs: [
      {
        q: "What budget do I need for ads?",
        a: "You can start small and scale what works. We'll suggest a test budget based on your goals and industry before spending anything.",
      },
      {
        q: "Is the ad spend included in your fee?",
        a: "No. Ad spend is paid directly to Meta or Google from your account, so you always see exactly where your money goes.",
      },
      {
        q: "Do you also create the posts and reels?",
        a: "Yes. We can plan and design regular content, or work with content you already create.",
      },
    ],
    related: ["seo-services", "branding-logo-design", "website-development"],
  },
  {
    slug: "branding-logo-design",
    group: "grow",
    icon: "Palette",
    navTitle: "Branding & Logo Design",
    navDesc: "Logos, identity & brand guidelines",
    metaTitle: "Logo Design & Branding Agency in Nashik | Bion Studio",
    metaDescription:
      "Logo design, brand identity, colour palettes, typography and brand guidelines for startups and businesses in Nashik. Bion Studio.",
    eyebrow: "Branding & logo design",
    h1: ["A brand people remember", "— and trust."],
    lede: "Logos, colours, typography and brand guidelines that make your business look established from day one — and stay consistent across your website, social media, signage and print.",
    tags: ["Logo design", "Brand identity", "Colour & type", "Guidelines", "Social kits"],
    includes: [
      {
        title: "Brand discovery",
        text: "What you stand for, who you serve and how you want to be seen.",
      },
      {
        title: "Logo design",
        text: "Original logo concepts, refined into a final mark with variations.",
      },
      {
        title: "Colour & typography",
        text: "A palette and font system that feels like you on every surface.",
      },
      {
        title: "Brand guidelines",
        text: "A simple guide so everyone uses your brand the right way.",
      },
      {
        title: "Business stationery",
        text: "Visiting cards, letterheads, email signatures and invoice templates.",
      },
      {
        title: "Social media kit",
        text: "Profile images, covers and post templates for a consistent feed.",
      },
    ],
    benefits: [
      "Look professional before your first sale",
      "Stand out from competitors in your area",
      "Stay consistent across every channel",
      "Own all logo files in every format",
    ],
    idealFor: ["New businesses", "Startups", "Rebrands", "Restaurants & cafés", "Clinics", "Product brands"],
    faqs: [
      {
        q: "How many logo options will I get?",
        a: "We present a few distinct concepts, then refine your favourite through feedback rounds until it's right.",
      },
      {
        q: "Which files do I receive?",
        a: "Vector and image files (SVG, PDF, PNG) in colour, black and white, plus the brand guide.",
      },
      {
        q: "Can you refresh our existing logo?",
        a: "Yes. A refresh keeps what customers already recognise while making it cleaner and more modern.",
      },
    ],
    related: ["ui-ux-design", "website-development", "social-media-marketing"],
  },
  {
    slug: "website-redesign",
    group: "improve",
    icon: "RefreshCw",
    navTitle: "Website Redesign",
    navDesc: "Modernise an old or slow website",
    metaTitle: "Website Redesign Services in Nashik | Bion Studio",
    metaDescription:
      "Redesign an outdated, slow or hard-to-use website. Free review, modern design, faster performance and SEO kept intact. Bion Studio, Nashik.",
    eyebrow: "Website redesign",
    h1: ["Your business has grown.", "Your website should too."],
    lede: "If your website looks dated, loads slowly or doesn't bring enquiries, we'll redesign it — keeping what works, fixing what doesn't, and protecting the Google rankings you already have.",
    tags: ["Free review", "Modern design", "Speed", "Mobile-first", "SEO-safe"],
    includes: [
      {
        title: "Free website review",
        text: "We show you what's holding your current site back, before you commit to anything.",
      },
      {
        title: "Fresh design",
        text: "A modern look that matches where your business is today.",
      },
      {
        title: "Content clean-up",
        text: "Clearer messaging and structure, so visitors understand you in seconds.",
      },
      {
        title: "Speed & mobile",
        text: "Rebuilt to load fast and work beautifully on phones.",
      },
      {
        title: "SEO-safe migration",
        text: "Redirects and page mapping so you don't lose existing Google rankings.",
      },
      {
        title: "Better conversions",
        text: "Clear calls to action, WhatsApp buttons and forms that turn visitors into leads.",
      },
    ],
    benefits: [
      "Make a better first impression",
      "Get more enquiries from the same traffic",
      "Keep your existing Google rankings",
      "Easier to update going forward",
    ],
    idealFor: ["Outdated websites", "Slow websites", "Non-mobile sites", "Rebrands", "Growing businesses", "DIY sites"],
    faqs: [
      {
        q: "Will I lose my Google rankings after a redesign?",
        a: "Not if it's done carefully. We map old pages to new ones and set up redirects so search engines and visitors land in the right place.",
      },
      {
        q: "Can you reuse my existing content?",
        a: "Yes. We keep what's valuable, rewrite what's unclear and fill gaps where needed.",
      },
      {
        q: "Do I have to change my domain or hosting?",
        a: "No. We can keep your domain and recommend hosting changes only if they'll make the site faster or more reliable.",
      },
    ],
    related: ["website-development", "seo-services", "ui-ux-design"],
  },
  {
    slug: "website-maintenance",
    group: "improve",
    icon: "Wrench",
    navTitle: "Maintenance & Support",
    navDesc: "Updates, backups & monthly care",
    metaTitle: "Website Maintenance & Support Plans in Nashik | Bion Studio",
    metaDescription:
      "Monthly website maintenance — updates, backups, security monitoring, uptime checks and small content changes. Keep your website fast and safe. Bion Studio.",
    eyebrow: "Maintenance & support",
    h1: ["Your website, looked after", "every month."],
    lede: "Updates, backups, security monitoring and small changes handled for you every month — so your website stays fast, safe and up to date while you focus on running your business.",
    tags: ["Updates", "Backups", "Security", "Uptime", "Content changes"],
    includes: [
      {
        title: "Software updates",
        text: "Core, theme, plugin and package updates applied and tested safely.",
      },
      {
        title: "Regular backups",
        text: "Automatic backups stored safely, so your site can be restored quickly.",
      },
      {
        title: "Security monitoring",
        text: "Malware scans, SSL checks and protection against common attacks.",
      },
      {
        title: "Uptime monitoring",
        text: "We're alerted if your site goes down, often before you notice.",
      },
      {
        title: "Content changes",
        text: "Small text, photo and offer updates included every month.",
      },
      {
        title: "Monthly report",
        text: "A short summary of what was done and how your website is performing.",
      },
    ],
    benefits: [
      "No more broken or hacked websites",
      "One team to call when something needs changing",
      "Predictable monthly cost",
      "Peace of mind for your online presence",
    ],
    idealFor: ["Business websites", "WordPress sites", "Online stores", "Web apps", "Institutes", "Busy owners"],
    faqs: [
      {
        q: "Can you maintain a website you didn't build?",
        a: "Yes. We'll do a quick health check first and fix any urgent issues before starting the monthly plan.",
      },
      {
        q: "What counts as a small change?",
        a: "Things like updating text, photos, prices, offers or adding a simple page. Larger features are quoted separately.",
      },
      {
        q: "Is there a long-term contract?",
        a: "No lock-in. Plans run month to month and you can stop with notice.",
      },
    ],
    related: ["wordpress-development", "website-redesign", "seo-services"],
  },
];

export const industryPages = [
  {
    slug: "hotels-resorts",
    icon: "BedDouble",
    image: hotelImage,
    navTitle: "Hotels, Resorts & Homestays",
    navDesc: "Direct bookings & guest experience",
    metaTitle: "Hotel & Resort Website Design in Nashik | Bion Studio",
    metaDescription:
      "Websites for hotels, resorts, vineyard stays and homestays in Nashik, Igatpuri and Trimbak — with direct booking, galleries, WhatsApp enquiries and local SEO.",
    eyebrow: "Hotels, resorts & homestays",
    h1: ["More direct bookings,", "less commission."],
    lede: "Websites for hotels, resorts, vineyard stays and homestays in and around Nashik — built to show off your property and let guests book directly with you instead of through commission-heavy portals.",
    tags: ["Direct booking", "Room galleries", "WhatsApp enquiries", "Google Maps", "Local SEO"],
    problems: [
      {
        title: "Paying high OTA commissions",
        text: "Every booking through a portal costs you a large share. A strong website brings guests to book with you directly.",
      },
      {
        title: "Photos that don't do justice",
        text: "Guests decide with their eyes. Small, slow or outdated galleries lose bookings to the property next door.",
      },
      {
        title: "Hard to find on Google",
        text: "If you don't show up for \"resort near Nashik\" or \"hotel in Igatpuri\", those guests go elsewhere.",
      },
    ],
    features: [
      { title: "Direct booking engine", text: "Room availability, rates and online payment — or a simple enquiry flow if you prefer." },
      { title: "Immersive galleries", text: "Large, fast-loading photos and videos of rooms, views, dining and experiences." },
      { title: "WhatsApp & call buttons", text: "Guests reach your front desk in one tap from any page." },
      { title: "Google reviews & maps", text: "Show real guest reviews and directions right on your website." },
      { title: "Local SEO", text: "Optimised for searches like \"resort near Nashik\" and your Google Business Profile." },
      { title: "Offers & packages", text: "Promote weekend deals, wine tours, weddings or corporate stays — update them yourself." },
    ],
    services: ["website-development", "custom-software-development", "business-automation"],
    faqs: [
      {
        q: "Can guests book and pay directly on the website?",
        a: "Yes. We can add a full booking engine with online payment, or a simpler enquiry and WhatsApp flow — whichever suits how you run reservations.",
      },
      {
        q: "Can it connect with booking portals?",
        a: "We can work with channel managers you already use, or keep direct bookings separate. We'll suggest the best option during discovery.",
      },
      {
        q: "Do you help with Google Business Profile?",
        a: "Yes. We help set up or improve your Google Business Profile so your property shows up on Maps and local searches.",
      },
    ],
  },
  {
    slug: "restaurants-cafes",
    icon: "UtensilsCrossed",
    image: restaurantImage,
    navTitle: "Restaurants, Cafés & Bakeries",
    navDesc: "Menus, reservations & online orders",
    metaTitle: "Restaurant & Café Website Design in Nashik | Bion Studio",
    metaDescription:
      "Websites for restaurants, cafés and bakeries in Nashik — digital QR menus, table reservations, online ordering, Google Business setup and Instagram integration.",
    eyebrow: "Restaurants, cafés & bakeries",
    h1: ["Turn \"near me\" searches", "into full tables."],
    lede: "Digital menus, table reservations and online ordering for restaurants, cafés and bakeries — so people who discover you on Google or Instagram become customers walking through your door.",
    tags: ["Digital menu & QR", "Reservations", "Online ordering", "Google Business", "Instagram"],
    problems: [
      {
        title: "Menu stuck in a PDF or photo",
        text: "Customers can't read it on a phone, Google can't read it at all, and updating prices is a hassle.",
      },
      {
        title: "Losing margin to delivery apps",
        text: "Delivery platforms take a big cut. Your own ordering keeps more of every order.",
      },
      {
        title: "Missing from \"near me\" results",
        text: "Hungry customers search nearby options — if your listing and website are weak, they pick someone else.",
      },
    ],
    features: [
      { title: "Digital QR menu", text: "A fast, mobile-friendly menu you can update yourself — prices, specials and photos." },
      { title: "Table reservations", text: "Let guests book a table online, with confirmations sent automatically." },
      { title: "Direct online ordering", text: "Takeaway and delivery orders with UPI payment, without third-party commissions." },
      { title: "Google Business setup", text: "Correct timings, photos, menu and reviews so you show up on Maps." },
      { title: "Instagram integration", text: "Show your latest posts and reels on the website automatically." },
      { title: "Events & offers", text: "Promote live music nights, festive menus and combo deals in minutes." },
    ],
    services: ["website-development", "mobile-app-development", "business-automation"],
    faqs: [
      {
        q: "Can I update the menu and prices myself?",
        a: "Yes. You get a simple admin panel to change dishes, prices, photos and daily specials from your phone.",
      },
      {
        q: "Can customers order and pay online?",
        a: "Yes. We can add takeaway and delivery ordering with UPI and card payments, and order alerts on WhatsApp.",
      },
      {
        q: "Will this help us show up on Google Maps?",
        a: "We optimise your website for local search and help set up your Google Business Profile, which is what powers Maps results.",
      },
    ],
  },
  {
    slug: "retail-ecommerce",
    icon: "ShoppingBag",
    image: commerceImage,
    navTitle: "Retail & Online Stores",
    navDesc: "E-commerce, UPI payments & orders",
    metaTitle: "Retail Shop & Online Store Websites in Nashik | Bion Studio",
    metaDescription:
      "Online stores for retail brands and shops in Nashik — product catalogues, UPI and card payments, order management and Shopify or custom e-commerce builds.",
    eyebrow: "Retail & online stores",
    h1: ["Take your shop online —", "and keep it easy to run."],
    lede: "Online stores with fast product pages, UPI and card payments, and an admin panel you can run yourself — whether you sell locally in Nashik or ship across India.",
    tags: ["Product catalogue", "UPI & cards", "Order management", "Shopify", "Custom stores"],
    problems: [
      {
        title: "Selling only through DMs",
        text: "Taking orders over Instagram and WhatsApp works — until it doesn't scale and orders get missed.",
      },
      {
        title: "Slow, clunky checkout",
        text: "Every extra step at checkout loses customers. Payment has to be quick and trusted.",
      },
      {
        title: "Hard to manage stock",
        text: "Keeping inventory in sync between shop and online is painful without the right system.",
      },
    ],
    features: [
      { title: "Beautiful product pages", text: "Large photos, variants, sizes and clear pricing that sell the product." },
      { title: "UPI & card payments", text: "Trusted payment gateways with UPI, cards, net banking and COD options." },
      { title: "Order management", text: "Track orders, payments and shipping from one simple dashboard." },
      { title: "Inventory sync", text: "Stock updates automatically as orders come in, online and offline." },
      { title: "Shipping integrations", text: "Connect courier partners for pickup, tracking and delivery updates." },
      { title: "Discounts & analytics", text: "Coupons, offers and clear reports on what sells and where customers come from." },
    ],
    services: ["website-development", "mobile-app-development", "business-automation"],
    faqs: [
      {
        q: "Shopify or a custom store — which is better?",
        a: "Shopify is quick to launch and easy to manage. A custom store gives more flexibility and no monthly platform fees. We'll recommend one based on your products and budget.",
      },
      {
        q: "Which payment options can you add?",
        a: "UPI, debit and credit cards, net banking, wallets and cash on delivery through trusted Indian payment gateways.",
      },
      {
        q: "Can I manage products and orders myself?",
        a: "Yes. You'll be able to add products, update stock and process orders from an admin panel, including on your phone.",
      },
    ],
  },
  {
    slug: "wineries-vineyards",
    icon: "Wine",
    navTitle: "Wineries & Vineyards",
    navDesc: "Wine tours, tastings & stays",
    metaTitle: "Winery & Vineyard Website Design in Nashik | Bion Studio",
    metaDescription:
      "Websites for wineries and vineyards in Nashik — wine tour and tasting bookings, vineyard stays, events, product showcases and age-gate compliance.",
    eyebrow: "Wineries & vineyards",
    h1: ["Bring the vineyard experience", "online."],
    lede: "Nashik is India's wine capital. We build websites for wineries and vineyards that sell the experience — tours, tastings, stays and events — and make booking a visit effortless.",
    tags: ["Tour bookings", "Tastings", "Vineyard stays", "Events", "Age gate"],
    problems: [
      {
        title: "Visitors can't book easily",
        text: "Tours and tastings booked over phone calls and DMs mean missed bookings on busy weekends.",
      },
      {
        title: "The story isn't told",
        text: "Your terroir, process and people are what make you special — most winery sites barely show them.",
      },
      {
        title: "Competing for wine tourists",
        text: "Visitors compare several vineyards online before choosing where to spend their day.",
      },
    ],
    features: [
      { title: "Tour & tasting booking", text: "Time slots, group sizes and online payment for visits." },
      { title: "Wine showcase", text: "Beautiful pages for each label with tasting notes and pairings." },
      { title: "Stays & dining", text: "Promote vineyard rooms, restaurants and packages." },
      { title: "Events & weddings", text: "Enquiry flows for harvest festivals, private events and weddings." },
      { title: "Age verification", text: "A responsible age gate in line with alcohol advertising norms." },
      { title: "Local & tourist SEO", text: "Found for searches like \"wine tour Nashik\" and \"vineyard stay\"." },
    ],
    services: ["website-development", "seo-services", "social-media-marketing"],
    faqs: [
      {
        q: "Can visitors book and pay for tours online?",
        a: "Yes. We can add slot-based booking with group sizes, add-ons and online payment.",
      },
      {
        q: "Can we sell wine online?",
        a: "Online alcohol sales depend on state rules and licences. We can showcase wines and take enquiries or reservations, and add online sales where your licence allows.",
      },
      {
        q: "Do you handle event and wedding enquiries?",
        a: "Yes. We build dedicated pages and enquiry forms for events, so your team gets complete details upfront.",
      },
    ],
  },
  {
    slug: "real-estate",
    icon: "Building2",
    navTitle: "Real Estate & Builders",
    navDesc: "Project sites & lead capture",
    metaTitle: "Real Estate & Builder Website Design in Nashik | Bion Studio",
    metaDescription:
      "Websites for builders, developers and real estate agents in Nashik — project pages, floor plans, virtual walkthroughs, RERA details and lead capture.",
    eyebrow: "Real estate & builders",
    h1: ["Project websites that", "turn visits into site visits."],
    lede: "Websites and landing pages for builders, developers and real estate agents — with project details, floor plans, amenities, RERA information and lead capture that sends enquiries straight to your sales team.",
    tags: ["Project pages", "Floor plans", "RERA details", "Lead capture", "Landing pages"],
    problems: [
      {
        title: "Leads lost after ads",
        text: "Ad clicks land on weak pages and never become calls or site visits.",
      },
      {
        title: "Brochures that don't work online",
        text: "A PDF brochure isn't a website — buyers want to explore plans, prices and location quickly.",
      },
      {
        title: "Slow follow-ups",
        text: "Enquiries sitting in inboxes for hours go cold or call your competitor instead.",
      },
    ],
    features: [
      { title: "Project showcase", text: "Gallery, amenities, location map and construction updates for each project." },
      { title: "Floor plans & pricing", text: "Interactive plans by configuration, with price on request or ranges." },
      { title: "RERA & documents", text: "RERA number, approvals and downloadable brochures, presented clearly." },
      { title: "Lead capture & CRM", text: "Enquiries sent instantly to your sales team via WhatsApp, email or CRM." },
      { title: "Ad landing pages", text: "High-converting pages for Meta and Google campaigns." },
      { title: "Site visit booking", text: "Let buyers pick a date and time for a site visit." },
    ],
    services: ["website-development", "social-media-marketing", "custom-software-development"],
    faqs: [
      {
        q: "Can we have one website with all our projects?",
        a: "Yes. A main brand site with separate pages for each project works well, and we can add dedicated landing pages for ad campaigns.",
      },
      {
        q: "Can enquiries go directly to our sales team?",
        a: "Yes. Leads can be sent instantly to WhatsApp, email or a CRM so your team can call back within minutes.",
      },
      {
        q: "Do you show RERA details?",
        a: "Yes. We display RERA registration numbers and other required details clearly on each project page.",
      },
    ],
  },
  {
    slug: "healthcare-clinics",
    icon: "Stethoscope",
    navTitle: "Clinics & Hospitals",
    navDesc: "Appointments & patient trust",
    metaTitle: "Clinic & Hospital Website Design in Nashik | Bion Studio",
    metaDescription:
      "Websites for doctors, dentists, clinics and hospitals in Nashik — online appointments, doctor profiles, treatments, reviews and Google Maps visibility.",
    eyebrow: "Clinics & hospitals",
    h1: ["Websites that help patients", "choose you with confidence."],
    lede: "Websites for doctors, dentists, physiotherapists, clinics and hospitals — with clear treatment information, doctor profiles, online appointments and the trust signals patients look for.",
    tags: ["Appointments", "Doctor profiles", "Treatments", "Reviews", "Google Maps"],
    problems: [
      {
        title: "Phone lines always busy",
        text: "Patients who can't get through to book often go to another clinic instead.",
      },
      {
        title: "Patients can't find information",
        text: "Timings, treatments, fees and directions should be one tap away, not a phone call.",
      },
      {
        title: "Low visibility on Google",
        text: "\"Dentist near me\" searches decide where many patients go — you need to be there.",
      },
    ],
    features: [
      { title: "Online appointments", text: "Patients pick a doctor, date and slot, with confirmations by WhatsApp or SMS." },
      { title: "Doctor profiles", text: "Qualifications, experience and specialities that build confidence." },
      { title: "Treatment pages", text: "Clear, patient-friendly information about each service you offer." },
      { title: "Reviews & testimonials", text: "Real patient reviews from Google shown on your website." },
      { title: "Location & timings", text: "Maps, directions, OPD timings and emergency contact always visible." },
      { title: "Local SEO", text: "Optimised for local searches and your Google Business Profile." },
    ],
    services: ["website-development", "google-business-profile", "custom-software-development"],
    faqs: [
      {
        q: "Can patients book appointments online?",
        a: "Yes. We can add appointment booking by doctor and time slot, with automatic confirmations and reminders.",
      },
      {
        q: "Can you build a patient management system?",
        a: "Yes. For larger clinics we build custom systems for appointments, patient records, billing and reports.",
      },
      {
        q: "Do you follow medical advertising guidelines?",
        a: "We keep content factual and avoid claims that breach medical advertising norms. You review and approve all content before it goes live.",
      },
    ],
  },
  {
    slug: "education-institutes",
    icon: "GraduationCap",
    navTitle: "Schools & Institutes",
    navDesc: "Admissions, coaching & IT training",
    metaTitle: "School, Coaching & Institute Websites in Nashik | Bion Studio",
    metaDescription:
      "Websites and portals for schools, colleges, coaching classes and software training institutes in Nashik — admissions, courses, fee payments and student portals.",
    eyebrow: "Schools, coaching & training institutes",
    h1: ["More admissions,", "less paperwork."],
    lede: "Websites and portals for schools, colleges, coaching classes and software or skill-training institutes — with course pages, admission enquiries, online fee payment and student portals.",
    tags: ["Course pages", "Admissions", "Fee payments", "Student portal", "Results"],
    problems: [
      {
        title: "Enquiries during admission season",
        text: "Hundreds of calls and WhatsApp messages that are hard to track and follow up.",
      },
      {
        title: "Courses not clearly explained",
        text: "Parents and students compare institutes online — unclear details lose admissions.",
      },
      {
        title: "Manual fees and records",
        text: "Fee collection, attendance and results managed in registers and spreadsheets.",
      },
    ],
    features: [
      { title: "Course & batch pages", text: "Syllabus, duration, faculty, fees and upcoming batches for every course." },
      { title: "Admission enquiries", text: "Enquiry and application forms that feed straight into a follow-up list." },
      { title: "Online fee payment", text: "UPI and card payments with automatic receipts." },
      { title: "Student portal", text: "Notes, assignments, attendance, results and announcements in one login." },
      { title: "Placement & results", text: "Showcase toppers, placements and achievements with permission." },
      { title: "Local SEO", text: "Found for searches like \"coaching classes in Nashik\" or \"Java course Nashik\"." },
    ],
    services: ["website-development", "web-app-development", "business-automation"],
    faqs: [
      {
        q: "Can you build a student and parent portal?",
        a: "Yes. We can build portals for attendance, results, notes, fees and announcements, on web and mobile.",
      },
      {
        q: "Do you work with software and IT training institutes?",
        a: "Yes. We build course websites, batch schedules, demo-class booking and student dashboards for training institutes.",
      },
      {
        q: "Can admission enquiries be followed up automatically?",
        a: "Yes. New enquiries can trigger WhatsApp and email follow-ups and be assigned to counsellors.",
      },
    ],
  },
  {
    slug: "manufacturing-industrial",
    icon: "Factory",
    navTitle: "Manufacturing & Industrial",
    navDesc: "B2B catalogues & export enquiries",
    metaTitle: "Manufacturer & Industrial Websites in Nashik | Bion Studio",
    metaDescription:
      "B2B websites for manufacturers and industrial companies in Nashik MIDC — product catalogues, capabilities, certifications, RFQ forms and export enquiries.",
    eyebrow: "Manufacturing & industrial",
    h1: ["Show buyers what you", "can really make."],
    lede: "B2B websites for manufacturers and industrial units in Satpur, Ambad, Sinnar and beyond — with product catalogues, capabilities, certifications and quote-request forms that win domestic and export enquiries.",
    tags: ["Product catalogue", "Capabilities", "Certifications", "RFQ forms", "Export"],
    problems: [
      {
        title: "An outdated website",
        text: "Buyers and procurement teams judge a supplier by their website before making contact.",
      },
      {
        title: "Products hard to find",
        text: "Specifications buried in PDFs make it hard for buyers to shortlist you.",
      },
      {
        title: "Missing export enquiries",
        text: "International buyers search online — without a credible site, they never find you.",
      },
    ],
    features: [
      { title: "Product catalogue", text: "Categories, specifications, drawings and downloadable datasheets." },
      { title: "Capabilities & machinery", text: "Show your plant, processes, capacity and quality systems." },
      { title: "Certifications", text: "ISO and other certifications, clients and industries served." },
      { title: "RFQ forms", text: "Request-for-quote forms that capture exactly what your sales team needs." },
      { title: "Multi-language ready", text: "Structure ready for English and other languages for export markets." },
      { title: "Dealer & distributor portal", text: "Optional login area for price lists, orders and documents." },
    ],
    services: ["website-development", "custom-software-development", "seo-services"],
    faqs: [
      {
        q: "Can you build an online product catalogue?",
        a: "Yes. A searchable catalogue with specifications and datasheets is often the most valuable part of a manufacturer's website.",
      },
      {
        q: "Can you build internal software too?",
        a: "Yes. We build inventory, production tracking, dealer portals and other internal tools for manufacturers.",
      },
      {
        q: "Will the website help with export enquiries?",
        a: "A professional, fast website with clear specifications, certifications and English-language SEO makes you much easier for international buyers to find and trust.",
      },
    ],
  },
  {
    slug: "fitness-wellness",
    icon: "Dumbbell",
    navTitle: "Gyms, Salons & Spas",
    navDesc: "Memberships, bookings & offers",
    metaTitle: "Gym, Salon & Spa Website Design in Nashik | Bion Studio",
    metaDescription:
      "Websites for gyms, fitness studios, yoga centres, salons and spas in Nashik — class schedules, online booking, memberships, offers and Google reviews.",
    eyebrow: "Gyms, salons & spas",
    h1: ["Fill your schedule,", "not your inbox."],
    lede: "Websites for gyms, fitness studios, yoga centres, salons and spas — with class schedules, online booking, membership plans and offers that bring new clients through the door.",
    tags: ["Online booking", "Memberships", "Class schedules", "Offers", "Reviews"],
    problems: [
      {
        title: "Bookings over phone and DMs",
        text: "Appointments and trial requests get lost in chats and missed calls.",
      },
      {
        title: "No-shows",
        text: "Without reminders, clients forget appointments and slots go to waste.",
      },
      {
        title: "Hard to stand out",
        text: "There are many options nearby — your reviews, photos and offers need to shine.",
      },
    ],
    features: [
      { title: "Online booking", text: "Clients book services, stylists, trainers or classes in a few taps." },
      { title: "Membership plans", text: "Plans and packages with clear pricing and online payment." },
      { title: "Class schedules", text: "Weekly timetables for gym, yoga, dance or fitness classes." },
      { title: "Reminders", text: "Automatic WhatsApp or SMS reminders to cut down no-shows." },
      { title: "Offers & referrals", text: "Promote festive offers, trial passes and referral rewards." },
      { title: "Before & after gallery", text: "Showcase results and transformations with client consent." },
    ],
    services: ["website-development", "google-business-profile", "business-automation"],
    faqs: [
      {
        q: "Can clients book appointments with a specific stylist or trainer?",
        a: "Yes. Booking can be set up by service, staff member and time slot.",
      },
      {
        q: "Can members pay online?",
        a: "Yes. Membership plans and packages can be paid online via UPI and cards, with automatic receipts.",
      },
      {
        q: "Can you send automatic reminders?",
        a: "Yes. WhatsApp or SMS reminders before appointments help reduce no-shows significantly.",
      },
    ],
  },
  {
    slug: "automobile-services",
    icon: "Car",
    navTitle: "Car Wash & Automobile",
    navDesc: "Service booking & pickup requests",
    metaTitle: "Car Wash, Garage & Auto Dealer Websites in Nashik | Bion Studio",
    metaDescription:
      "Websites for car wash centres, garages, service centres and vehicle dealers in Nashik — service booking, packages, pickup requests and Google Maps visibility.",
    eyebrow: "Car wash & automobile",
    h1: ["Bookings for every bay,", "every day."],
    lede: "Websites for car wash and detailing centres, garages, service centres and vehicle dealers — with service packages, online booking, pickup requests and the local visibility that brings cars in.",
    tags: ["Service booking", "Packages", "Pickup & drop", "Dealers", "Google Maps"],
    problems: [
      {
        title: "Empty slots on weekdays",
        text: "Without online booking and offers, quieter days stay quiet.",
      },
      {
        title: "Prices only on the phone",
        text: "Customers want to compare packages before they call — or they move on.",
      },
      {
        title: "Missing from local search",
        text: "\"Car wash near me\" is where most customers start looking.",
      },
    ],
    features: [
      { title: "Service packages", text: "Wash, detailing, coating and servicing packages with clear pricing." },
      { title: "Online booking", text: "Customers choose a service, date and time slot." },
      { title: "Pickup & drop", text: "Request forms for doorstep pickup and delivery." },
      { title: "Vehicle listings", text: "For dealers: new and used vehicle listings with enquiry forms." },
      { title: "Service reminders", text: "Automatic reminders for the next wash or service." },
      { title: "Local SEO", text: "Google Business Profile and local search optimisation." },
    ],
    services: ["website-development", "google-business-profile", "business-automation"],
    faqs: [
      {
        q: "Can customers book a wash or service online?",
        a: "Yes. We can add booking by service type and time slot, with WhatsApp confirmations.",
      },
      {
        q: "Can you build a website for a vehicle dealership?",
        a: "Yes. Dealers get vehicle listings, finance and test-drive enquiry forms, and branch details.",
      },
      {
        q: "Can we send customers service reminders?",
        a: "Yes. Automatic WhatsApp or SMS reminders bring customers back for their next service.",
      },
    ],
  },
  {
    slug: "travel-tourism",
    icon: "Plane",
    navTitle: "Travel & Tourism",
    navDesc: "Tour packages & pilgrimage trips",
    metaTitle: "Travel Agent & Tour Operator Websites in Nashik | Bion Studio",
    metaDescription:
      "Websites for travel agents, tour operators and pilgrimage tour companies in Nashik — tour packages, itineraries, enquiries and online booking.",
    eyebrow: "Travel & tourism",
    h1: ["Tour packages that", "sell themselves."],
    lede: "Websites for travel agents, tour operators and pilgrimage tour companies — Trimbakeshwar, Shirdi, Saptashrungi and beyond — with beautiful package pages, day-wise itineraries and easy booking enquiries.",
    tags: ["Tour packages", "Itineraries", "Pilgrimage tours", "Enquiries", "Online booking"],
    problems: [
      {
        title: "Packages shared only on WhatsApp",
        text: "Images and PDFs get lost in chats, and customers can't compare options easily.",
      },
      {
        title: "Competing with big portals",
        text: "Travellers need a reason to book with you directly instead of a large booking site.",
      },
      {
        title: "Seasonal rush",
        text: "Festival and holiday enquiries spike all at once and are hard to manage.",
      },
    ],
    features: [
      { title: "Package pages", text: "Destinations, inclusions, prices and photos for every tour." },
      { title: "Day-wise itineraries", text: "Clear, printable itineraries customers can share with family." },
      { title: "Enquiry & booking", text: "Quick enquiry forms, WhatsApp buttons and optional online payment." },
      { title: "Pilgrimage tours", text: "Dedicated pages for temple circuits and yatra packages." },
      { title: "Reviews & photos", text: "Traveller reviews and trip galleries that build trust." },
      { title: "Seasonal offers", text: "Promote festival, summer and group offers in minutes." },
    ],
    services: ["website-development", "seo-services", "social-media-marketing"],
    faqs: [
      {
        q: "Can I update tour packages and prices myself?",
        a: "Yes. You'll be able to add and edit packages, prices, photos and dates from an admin panel.",
      },
      {
        q: "Can customers pay a booking advance online?",
        a: "Yes. We can add advance or full payment via UPI and cards.",
      },
      {
        q: "Do you build pages for pilgrimage tours?",
        a: "Yes. Pilgrimage circuits around Nashik, Shirdi and beyond can each get dedicated, search-friendly pages.",
      },
    ],
  },
  {
    slug: "agriculture-agribusiness",
    icon: "Sprout",
    navTitle: "Agriculture & Agri-business",
    navDesc: "Farm produce, exports & FPOs",
    metaTitle: "Agri-business & Exporter Websites in Nashik | Bion Studio",
    metaDescription:
      "Websites for agri-businesses, farm produce exporters, FPOs, nurseries and agri-input companies in Nashik — product catalogues, export enquiries and dealer networks.",
    eyebrow: "Agriculture & agri-business",
    h1: ["From Nashik's farms", "to buyers everywhere."],
    lede: "Websites for grape and onion exporters, farmer producer organisations, nurseries and agri-input companies — with produce catalogues, quality certifications, export enquiries and dealer networks.",
    tags: ["Produce catalogue", "Export enquiries", "FPOs", "Dealer network", "Certifications"],
    problems: [
      {
        title: "Buyers can't verify you",
        text: "Importers and bulk buyers look for a credible website before trusting a new supplier.",
      },
      {
        title: "Dealers and farmers not connected",
        text: "Product info, prices and orders shared manually with every dealer or member.",
      },
      {
        title: "Seasonal information changes fast",
        text: "Availability, varieties and prices change through the season and are hard to communicate.",
      },
    ],
    features: [
      { title: "Produce catalogue", text: "Varieties, grades, packaging and seasonal availability." },
      { title: "Export enquiry forms", text: "Capture quantity, destination and specifications from buyers." },
      { title: "Certifications & quality", text: "Showcase GlobalGAP, APEDA and other certifications you hold." },
      { title: "Dealer locator", text: "Help farmers find your nearest dealer or collection centre." },
      { title: "Member portals", text: "For FPOs: member information, notices and records." },
      { title: "Multi-language ready", text: "English, Marathi and Hindi content where it helps your audience." },
    ],
    services: ["website-development", "custom-software-development", "seo-services"],
    faqs: [
      {
        q: "Can the website be in Marathi?",
        a: "Yes. We can build websites in English, Marathi and Hindi, with a simple language switch.",
      },
      {
        q: "Can you build a system for FPO members?",
        a: "Yes. We can build portals for member records, collections, payments and notices.",
      },
      {
        q: "Will this help with export buyers?",
        a: "A professional website with clear produce details, certifications and enquiry forms makes you much easier for importers to find and trust.",
      },
    ],
  },
  {
    slug: "professional-services",
    icon: "Briefcase",
    navTitle: "Professionals & Consultants",
    navDesc: "CAs, lawyers, architects & advisors",
    metaTitle: "Websites for CAs, Lawyers & Consultants in Nashik | Bion Studio",
    metaDescription:
      "Professional websites for chartered accountants, lawyers, architects, interior designers and consultants in Nashik — services, credentials, portfolios and enquiries.",
    eyebrow: "Professionals & consultants",
    h1: ["Credibility that starts", "before the first meeting."],
    lede: "Clean, professional websites for chartered accountants, lawyers, architects, interior designers and consultants — presenting your expertise, credentials and work so clients feel confident reaching out.",
    tags: ["Services", "Credentials", "Portfolio", "Appointments", "Client portal"],
    problems: [
      {
        title: "Referrals check you online",
        text: "Even word-of-mouth clients look you up first — a weak website loses their confidence.",
      },
      {
        title: "Services not clearly explained",
        text: "Potential clients aren't sure whether you handle their specific need.",
      },
      {
        title: "Document sharing by email",
        text: "Sending files back and forth with clients is slow and insecure.",
      },
    ],
    features: [
      { title: "Service pages", text: "Clear explanations of every service you offer and who it's for." },
      { title: "Profile & credentials", text: "Qualifications, memberships and experience presented professionally." },
      { title: "Portfolio", text: "For architects and designers: projects with photos and details." },
      { title: "Appointment booking", text: "Clients request consultations at a time that suits them." },
      { title: "Client portal", text: "Secure document upload and sharing with clients." },
      { title: "Articles & updates", text: "Share insights and updates that show your expertise." },
    ],
    services: ["website-development", "branding-logo-design", "custom-software-development"],
    faqs: [
      {
        q: "Do you follow professional advertising rules?",
        a: "Yes. For professions with advertising restrictions (such as lawyers and CAs), we keep content informational and you approve everything before launch.",
      },
      {
        q: "Can clients upload documents securely?",
        a: "Yes. We can add a secure client area for sharing documents.",
      },
      {
        q: "Can architects and designers show a portfolio?",
        a: "Yes. Project galleries with categories, photos and descriptions are a core part of these websites.",
      },
    ],
  },
  {
    slug: "startups-saas",
    icon: "Rocket",
    navTitle: "Startups & SaaS",
    navDesc: "MVPs, product sites & dashboards",
    metaTitle: "MVP & SaaS Development for Startups in Nashik | Bion Studio",
    metaDescription:
      "MVP development, SaaS products, landing pages and investor-ready prototypes for startups in Nashik and across India. Design and development by Bion Studio.",
    eyebrow: "Startups & SaaS",
    h1: ["From idea to MVP —", "without wasting runway."],
    lede: "We help founders turn ideas into real products — clickable prototypes for investors, MVPs that prove the idea, landing pages that collect users, and SaaS platforms built to scale.",
    tags: ["MVP", "SaaS", "Prototypes", "Landing pages", "Dashboards"],
    problems: [
      {
        title: "Building too much, too soon",
        text: "Months spent on features nobody asked for before testing the core idea.",
      },
      {
        title: "No technical co-founder",
        text: "Great ideas stall without a reliable team to design and build them.",
      },
      {
        title: "Pitching without a product",
        text: "Investors and early users want to see something real, not slides.",
      },
    ],
    features: [
      { title: "Product discovery", text: "Define users, core problem and the smallest valuable first version." },
      { title: "Clickable prototype", text: "A Figma prototype for user testing and investor pitches." },
      { title: "MVP development", text: "A working web or mobile product built quickly on a solid foundation." },
      { title: "Landing page & waitlist", text: "A launch page to collect sign-ups and validate demand." },
      { title: "Analytics", text: "Know how users behave from day one." },
      { title: "Scale-ready architecture", text: "Clean code and infrastructure that can grow with traction." },
    ],
    services: ["web-app-development", "mobile-app-development", "ui-ux-design"],
    faqs: [
      {
        q: "How quickly can you build an MVP?",
        a: "Most MVPs take 6–12 weeks depending on scope. We'll help you cut scope to launch as early as possible.",
      },
      {
        q: "Will you sign an NDA?",
        a: "Yes. We're happy to sign an NDA before you share the details of your idea.",
      },
      {
        q: "Who owns the code and IP?",
        a: "You do. All code, designs and intellectual property belong to your company.",
      },
    ],
  },
];

export const findService = (slug) => servicePages.find((s) => s.slug === slug);
export const findIndustry = (slug) => industryPages.find((s) => s.slug === slug);

import hotelImage from "../../assets/hotel-project.jpg";
import restaurantImage from "../../assets/restaurant-project.jpg";
import commerceImage from "../../assets/commerce-project.jpg";

// Detail content for the /services/* and /industries/* pages. The homepage
// lists stay in content.js; slugs here must match the `slug` fields there.

export const servicePages = [
  {
    slug: "website-development",
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
    icon: "LayoutDashboard",
    navTitle: "Web Apps & Platforms",
    navDesc: "Dashboards, portals & SaaS products",
    metaTitle: "Web App Development in Nashik — Dashboards & Portals | Bion Studio",
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
    metaTitle: "E-commerce Website Development in Nashik | Bion Studio",
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
];

export const findService = (slug) => servicePages.find((s) => s.slug === slug);
export const findIndustry = (slug) => industryPages.find((s) => s.slug === slug);

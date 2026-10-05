import { ArrowUpRight, Check, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import SiteShell from "./SiteShell";
import { Contact, FAQ, FinalCTA } from "./Sections";
import { MagneticLink, Reveal } from "./MotionKit";
import { brand, faqs, processSteps } from "./content";
import { findService, industryPages, serviceGroups, servicePages } from "./pages";
import { icons } from "./Navbar";

function Crumbs({ items }) {
  return (
    <nav className="pg-crumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((c, i) => (
          <li key={c.name}>
            {i < items.length - 1 ? (
              <a href={c.href}>{c.name}</a>
            ) : (
              <span aria-current="page">{c.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function PageHero({ crumbs, eyebrow, h1, lede, tags, image, aside }) {
  return (
    <section className={`pg-hero ${image || aside ? "has-media" : ""}`}>
      <div className="pg-hero-glow" aria-hidden="true" />
      <div className="shell pg-hero-grid">
        <div className="pg-hero-copy">
          <Crumbs items={crumbs} />
          <Reveal>
            <p className="eyebrow-mono">{eyebrow}</p>
          </Reveal>
          <Reveal delay={0.06} as="h1">
            {h1[0]} <em>{h1[1]}</em>
          </Reveal>
          {lede && (
            <Reveal delay={0.1} as="p" className="pg-lede">
              {lede}
            </Reveal>
          )}
          <Reveal delay={0.14}>
            <div className="hero-actions">
              <MagneticLink href="/contact" variant="electric">
                Get a free quote
              </MagneticLink>
              <MagneticLink href={brand.whatsapp} variant="outline-light" external>
                Chat on WhatsApp
              </MagneticLink>
            </div>
          </Reveal>
          {tags && (
            <Reveal delay={0.18} as="ul" className="pg-tags">
              {tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </Reveal>
          )}
        </div>
        {image && (
          <Reveal delay={0.12} className="pg-hero-media">
            <img src={image} alt="" width="1200" height="900" />
            <span>Sample design</span>
          </Reveal>
        )}
        {!image && aside}
      </div>
    </section>
  );
}

function Head({ index, label, title, lede }) {
  return (
    <div className="sec-head">
      <div>
        <Reveal>
          <p className="eyebrow-mono">
            <b>{index}</b> {label}
          </p>
        </Reveal>
        <Reveal delay={0.06} as="h2">
          {title[0]} <em>{title[1]}</em>
        </Reveal>
      </div>
      {lede && (
        <Reveal delay={0.12} as="p" className="sec-lede">
          {lede}
        </Reveal>
      )}
    </div>
  );
}

function CardGrid({ items }) {
  return (
    <div className="pg-cards">
      {items.map((it, i) => (
        <Reveal key={it.title} delay={(i % 3) * 0.06} as="article" className="pg-card">
          <span className="pg-card-num">{String(i + 1).padStart(2, "0")}</span>
          <h3>{it.title}</h3>
          <p>{it.text}</p>
        </Reveal>
      ))}
    </div>
  );
}

function Steps() {
  return (
    <section className="section pg-steps">
      <div className="shell">
        <Head
          index="03"
          label="How we work"
          title={["A clear process,", "start to finish."]}
          lede="You always know what's happening next — with a dated plan, weekly updates and one team from first call to launch."
        />
        <ol className="pg-step-list">
          {processSteps.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.06} as="li">
              <span>{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function IconBadge({ name }) {
  const Icon = icons[name];
  return (
    <span className="pg-card-ico" aria-hidden="true">
      <Icon size={20} />
    </span>
  );
}

function IndexCard({ href, icon, kicker, title, text, index = 0, cta = "Explore" }) {
  return (
    <Reveal as="a" href={href} delay={(index % 3) * 0.06} className="pg-related-card is-index">
      <span className="pg-card-sheen" aria-hidden="true" />
      <IconBadge name={icon} />
      {kicker && <span className="pg-related-kicker">{kicker}</span>}
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="pg-card-foot">
        <b>{cta}</b>
        <span className="row-arrow" aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      </span>
    </Reveal>
  );
}

function ServicesHeroPanel() {
  return (
    <Reveal delay={0.12} className="pg-hero-panel">
      <div className="pg-hero-panel-top">
        <span className="pg-hero-panel-num">{servicePages.length}</span>
        <div>
          <b>services under one roof</b>
          <small>One team, one point of contact — from first call to launch and after.</small>
        </div>
      </div>
      <ul className="pg-hero-panel-list">
        {serviceGroups.map((g) => {
          const items = servicePages.filter((s) => s.group === g.id);
          return (
            <li key={g.id}>
              <span className="pg-hero-panel-row">
                <b>{g.label}</b>
                <i>{String(items.length).padStart(2, "0")}</i>
              </span>
              <small>{g.sub}</small>
              <span className="pg-hero-panel-icons">
                {items.slice(0, 6).map((s) => {
                  const Icon = icons[s.icon];
                  return (
                    <em key={s.slug} title={s.navTitle}>
                      <Icon size={14} />
                    </em>
                  );
                })}
              </span>
            </li>
          );
        })}
      </ul>
    </Reveal>
  );
}

export function ServicesIndexPage() {
  return (
    <SiteShell>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Services" }]}
        eyebrow="Services"
        h1={["Everything you need to", "build and grow online."]}
        lede="Websites, apps and software to build with — SEO, branding and marketing to grow with — and redesign, automation and support to keep everything running well. One team, start to finish."
        tags={serviceGroups.map((g) => g.label)}
        aside={<ServicesHeroPanel />}
      />
      <section className="section theme-light">
        <div className="shell">
          {serviceGroups.map((g, gi) => {
            const items = servicePages.filter((s) => s.group === g.id);
            return (
              <div key={g.id} className="pg-index-group">
                <div className="pg-index-head">
                  <div className="pg-index-head-main">
                    <span className="pg-index-head-num">{String(gi + 1).padStart(2, "0")}</span>
                    <h2>{g.label}</h2>
                  </div>
                  <p>
                    {g.sub} <i>{items.length} services</i>
                  </p>
                </div>
                <div className="pg-index-grid">
                  {items.map((s, i) => (
                    <IndexCard
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      icon={s.icon}
                      title={s.navTitle}
                      text={s.navDesc}
                      index={i}
                      cta="Explore service"
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <FinalCTA ctaHref="/contact" />
    </SiteShell>
  );
}

export function IndustriesIndexPage() {
  return (
    <SiteShell>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Industries" }]}
        eyebrow="Industries"
        h1={["Built for the way", "your business works."]}
        lede="From hotels and clinics to manufacturers, institutes and startups — we build websites, apps and software for businesses of every kind, in Nashik and across India."
      />
      <section className="section theme-light">
        <div className="shell">
          <div className="pg-index-grid">
            {industryPages.map((s, i) => (
              <IndexCard
                key={s.slug}
                href={`/industries/${s.slug}`}
                icon={s.icon}
                kicker={s.eyebrow}
                title={s.navTitle}
                text={s.navDesc}
                index={i}
                cta="Explore industry"
              />
            ))}
          </div>
          <p className="pg-index-note">
            Don't see your industry? We build for almost any business —{" "}
            <a href="/contact">tell us about yours</a>.
          </p>
        </div>
      </section>
      <FinalCTA ctaHref="/contact" />
    </SiteShell>
  );
}

function ServiceLinks({ index, label, title, slugs }) {
  return (
    <section className="section theme-light pg-related">
      <div className="shell">
        <Head index={index} label={label} title={title} />
        <div className="pg-related-grid">
          {slugs.map((slug, i) => {
            const s = findService(slug);
            return (
              <Reveal key={slug} delay={i * 0.06} as="a" href={`/services/${slug}`} className="pg-related-card">
                <IconBadge name={s.icon} />
                <span className="pg-related-kicker">{s.eyebrow}</span>
                <h3>{s.navTitle}</h3>
                <p>{s.navDesc}</p>
                <span className="row-arrow" aria-hidden="true">
                  <ArrowUpRight size={18} />
                </span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServicePage({ page }) {
  return (
    <SiteShell>
      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: page.navTitle },
        ]}
        eyebrow={page.eyebrow}
        h1={page.h1}
        lede={page.lede}
        tags={page.tags}
      />
      <section className="section theme-light">
        <div className="shell">
          <Head
            index="01"
            label="What's included"
            title={["Everything you need,", "handled by one team."]}
          />
          <CardGrid items={page.includes} />
        </div>
      </section>
      <section className="section pg-benefits">
        <div className="shell pg-split">
          <div>
            <Reveal>
              <p className="eyebrow-mono">
                <b>02</b> Why it matters
              </p>
            </Reveal>
            <Reveal delay={0.06} as="h2">
              What this does <em>for your business.</em>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="pg-ideal-label">Ideal for</p>
              <ul className="pg-tags">
                {page.idealFor.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <ul className="pg-checks">
            {page.benefits.map((b, i) => (
              <Reveal key={b} delay={i * 0.06} as="li">
                <span aria-hidden="true">
                  <Check size={16} />
                </span>
                {b}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <Steps />
      <FAQ items={page.faqs} index="04" />
      <ServiceLinks
        index="05"
        label="Related services"
        title={["Often paired", "with this."]}
        slugs={page.related}
      />
      <FinalCTA ctaHref="/contact" />
    </SiteShell>
  );
}

export function IndustryPage({ page }) {
  return (
    <SiteShell>
      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: page.navTitle },
        ]}
        eyebrow={page.eyebrow}
        h1={page.h1}
        lede={page.lede}
        tags={page.tags}
        image={page.image}
      />
      <section className="section pg-benefits">
        <div className="shell">
          <Head
            index="01"
            label="Sound familiar?"
            title={["The problems", "we solve."]}
            lede="Most businesses we talk to are dealing with at least one of these. A well-built website fixes all three."
          />
          <div className="pg-problems">
            {page.problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06} as="article">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section theme-light">
        <div className="shell">
          <Head
            index="02"
            label="What you get"
            title={["Built for how", "your business works."]}
          />
          <CardGrid items={page.features} />
        </div>
      </section>
      <Steps />
      <FAQ items={page.faqs} index="04" />
      <ServiceLinks
        index="05"
        label="Recommended services"
        title={["Services that", "fit this industry."]}
        slugs={page.services}
      />
      <FinalCTA ctaHref="/contact" />
    </SiteShell>
  );
}

const nextSteps = [
  { title: "We reply within 24 hours", text: "By WhatsApp, call or email — whichever you prefer." },
  { title: "Free discovery call", text: "A short conversation about your business, goals and timeline." },
  { title: "Clear written proposal", text: "Scope, timeline and a fixed quote — before any work begins." },
];

export function ContactPage() {
  return (
    <SiteShell solidNav>
      <Contact headingAs="h1" index="01" />
      <section className="section pg-benefits">
        <div className="shell">
          <Head
            index="02"
            label="What happens next"
            title={["Simple, quick", "and no pressure."]}
          />
          <div className="pg-problems">
            {nextSteps.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06} as="article">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
          <div className="pg-contact-cards">
            <a href={brand.whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} />
              <b>WhatsApp</b>
              <span>Chat with us</span>
            </a>
            <a href={brand.phoneHref}>
              <Phone size={20} />
              <b>Call</b>
              <span>{brand.phone}</span>
            </a>
            <a href={`mailto:${brand.email}`}>
              <Mail size={20} />
              <b>Email</b>
              <span>{brand.email}</span>
            </a>
            <div>
              <MapPin size={20} />
              <b>Location</b>
              <span>Nashik, Maharashtra · Remote worldwide</span>
            </div>
          </div>
        </div>
      </section>
      <FAQ items={faqs} index="03" />
    </SiteShell>
  );
}

export function PrivacyPage({ updated }) {
  return (
    <SiteShell>
      <PageHero
        crumbs={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]}
        eyebrow="Legal"
        h1={["Privacy", "Policy"]}
        lede={`How ${brand.name} collects, uses and protects your information. Last updated ${updated}.`}
      />
      <section className="section theme-light">
        <div className="shell pg-prose">
          <h2>Who we are</h2>
          <p>
            Bion Studio is a web design and development studio based in Nashik, Maharashtra, India.
            This policy explains how we handle personal information when you visit{" "}
            <a href="/">bionstudio.in</a> or contact us.
          </p>
          <h2>Information we collect</h2>
          <p>We only collect information you choose to share with us, such as:</p>
          <ul>
            <li>Your name, business name, phone number and email address</li>
            <li>Details about your project that you include in an enquiry</li>
            <li>Messages you send us by email, WhatsApp, phone or social media</li>
          </ul>
          <p>
            Our hosting provider may also record basic technical information (such as IP address,
            browser type and pages visited) in server logs, to keep the website secure and working.
          </p>
          <h2>How we use your information</h2>
          <ul>
            <li>To reply to your enquiry and discuss your project</li>
            <li>To prepare proposals, quotes and invoices</li>
            <li>To deliver and support the work you hire us for</li>
          </ul>
          <p>
            We do not sell, rent or trade your personal information, and we do not send marketing
            messages unless you ask us to.
          </p>
          <h2>Third-party services</h2>
          <p>
            Our website uses trusted third-party services to work properly, including website
            hosting and Google Fonts. When you contact us through email or WhatsApp, those services
            process your messages under their own privacy policies.
          </p>
          <h2>How long we keep it</h2>
          <p>
            We keep enquiry and project information only as long as needed to work with you and to
            meet legal, accounting or tax requirements.
          </p>
          <h2>Your choices</h2>
          <p>
            You can ask us at any time to see, correct or delete the personal information we hold
            about you. Just email{" "}
            <a href={`mailto:${brand.email}`}>{brand.email}</a> and we'll respond within a few
            working days.
          </p>
          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The latest version will always be on this
            page, with the date it was last updated.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about this policy? Email <a href={`mailto:${brand.email}`}>{brand.email}</a>{" "}
            or call <a href={brand.phoneHref}>{brand.phone}</a>.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}


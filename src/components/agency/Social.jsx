import { Facebook, Instagram, Mail } from "lucide-react";
import { brand } from "./content";

function WhatsAppGlyph({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.14.17-.25.25-.41.09-.17.04-.31-.02-.43-.06-.13-.56-1.35-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07s.9 2.4 1.02 2.56c.12.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

export const socials = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    handle: brand.phone,
    href: brand.whatsapp,
    Icon: WhatsAppGlyph,
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: "@bionstudioo",
    href: brand.instagram,
    Icon: Instagram,
  },
  {
    id: "facebook",
    label: "Facebook",
    handle: "/BionStudio",
    href: brand.facebook,
    Icon: Facebook,
  },
  {
    id: "email",
    label: "Email",
    handle: brand.email,
    href: `mailto:${brand.email}`,
    Icon: Mail,
  },
];

export function SocialRow({ compact = false, onNavigate }) {
  return (
    <ul className={`social-row ${compact ? "is-compact" : ""}`}>
      {socials.map(({ id, label, handle, href, Icon }) => {
        const external = href.startsWith("http");
        return (
          <li key={id}>
            <a
              className={`social-chip social-${id}`}
              href={href}
              aria-label={`${label} — ${handle}`}
              onClick={onNavigate}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className="social-ico" aria-hidden="true">
                <Icon size={compact ? 16 : 18} />
              </span>
              {!compact && (
                <span className="social-copy">
                  <b>{label}</b>
                  <small>{handle}</small>
                </span>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

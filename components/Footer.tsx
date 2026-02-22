import { Youtube, Instagram, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Prateek Singh. All rights reserved.
        </p>

        <div className="flex gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

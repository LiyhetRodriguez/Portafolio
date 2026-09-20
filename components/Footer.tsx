import { Github, Linkedin, Mail } from "lucide-react";
import { profile, socialLinks } from "@/data/social";
import { currentYear } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-content px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {currentYear} {profile.name}. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-5">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-ink transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-ink transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            aria-label="Correo electrónico"
            className="text-muted hover:text-ink transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

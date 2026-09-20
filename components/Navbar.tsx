"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/social";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-base/70 backdrop-blur-lg border-b border-line"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="mx-auto max-w-content px-6 h-20 flex items-center justify-between">
        <a
          href="#inicio"
          className="font-display font-semibold text-lg text-ink tracking-tight"
        >
          {profile.name}
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center rounded-full border border-line bg-surface/60 px-4 py-2 text-sm text-ink hover:border-accent-soft hover:text-accent-soft transition-colors"
        >
          Contáctame
        </a>

        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ink p-2 -mr-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-base/95 backdrop-blur-lg border-b border-line"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base text-ink/90 hover:text-accent-soft transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

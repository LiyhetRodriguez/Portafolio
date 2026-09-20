"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import TerminalWindow from "./TerminalWindow";
import { profile, socialLinks } from "@/data/social";
import { heroTags } from "@/data/skills";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32"
    >
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-[100px] animate-drift" />
      <div className="pointer-events-none absolute top-40 -right-16 h-80 w-80 rounded-full bg-amber/10 blur-[110px] animate-drift-slow" />

      <div className="relative mx-auto max-w-content px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-sm text-accent-soft mb-4">
            Hola, soy {profile.name}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] text-ink text-balance">
            {profile.role}
          </h1>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs text-ink/80 font-mono hover:border-accent-soft hover:text-accent-soft transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-[0_0_0_0_rgba(124,108,240,0.5)] hover:shadow-[0_0_28px_2px_rgba(124,108,240,0.45)] transition-shadow"
            >
              Ver proyectos
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink hover:border-accent-soft hover:text-accent-soft transition-colors"
            >
              Contáctame
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted hover:text-ink transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted hover:text-ink transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              aria-label="Correo electrónico"
              className="text-muted hover:text-ink transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <TerminalWindow />
        </motion.div>
      </div>
    </section>
  );
}

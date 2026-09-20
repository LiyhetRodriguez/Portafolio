"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl border border-line bg-surface overflow-hidden hover:border-accent-soft/50 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Imagen del proyecto: sustituye este bloque por
          <Image src="/proyectos/tu-imagen.jpg" alt={project.name} fill className="object-cover" />
          dentro de un contenedor relative cuando tengas capturas reales. */}
      <div className="relative h-44 flex items-center justify-center bg-gradient-to-br from-surface-hi to-base overflow-hidden">
        <Code2
          size={40}
          className="text-line group-hover:text-accent-dim transition-colors"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-base/80 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="font-display font-semibold text-ink text-lg">
          {project.name}
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono rounded-md bg-surface-hi px-2 py-1 text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 pt-4 border-t border-line">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-accent-soft hover:text-accent transition-colors"
          >
            <ExternalLink size={15} />
            Ver proyecto
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink transition-colors"
          >
            <Github size={15} />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}

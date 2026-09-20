"use client";

import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          title="Mis proyectos"
          description="Una selección de trabajos donde he combinado diseño, código y buenas prácticas para resolver problemas reales."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

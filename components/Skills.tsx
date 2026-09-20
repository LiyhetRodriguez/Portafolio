"use client";

import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Braces,
  Code2,
  Coffee,
  Container,
  Database,
  FileCode2,
  Github,
  GitBranch,
  Layers,
  Leaf,
  Palette,
  Route,
  Server,
  TerminalSquare,
  Wind,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import SkillBadge from "./SkillBadge";
import { skillCategories } from "@/data/skills";

const ICONS: Record<string, LucideIcon> = {
  HTML: Code2,
  CSS: Palette,
  JavaScript: Braces,
  TypeScript: FileCode2,
  React: Atom,
  "Next.js": Layers,
  "Tailwind CSS": Wind,
  Java: Coffee,
  "Node.js": Server,
  Express: Route,
  MySQL: Database,
  PostgreSQL: Database,
  MongoDB: Leaf,
  Git: GitBranch,
  GitHub: Github,
  Docker: Container,
  "VS Code": TerminalSquare,
};

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 md:py-32 bg-surface/40">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          title="Tecnologías que utilizo"
          description="Un vistazo a las herramientas con las que construyo, organizadas por su lugar en el flujo de trabajo."
        />

        <div className="space-y-10">
          {skillCategories.map((category) => (
            <div key={category.id}>
              <h3 className="text-sm font-medium text-muted mb-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {category.skills.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    icon={ICONS[skill.name] ?? Code2}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

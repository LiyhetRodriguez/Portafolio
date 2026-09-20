export type Skill = {
  name: string;
  level?: "Básico" | "Intermedio" | "Avanzado";
};

export type SkillCategory = {
  id: string;
  title: string;
  skills: Skill[];
};

export const heroTags: string[] = [
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "MySQL",
  "PostgreSQL",
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [{ name: "Java" }, { name: "Node.js" }, { name: "Express" }],
  },
  {
    id: "databases",
    title: "Bases de datos",
    skills: [{ name: "MySQL" }, { name: "PostgreSQL" }, { name: "MongoDB" }],
  },
  {
    id: "tools",
    title: "Herramientas",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "VS Code" },
    ],
  },
];

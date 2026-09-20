export type ExperienceItem = {
  id: string;
  type: "estudio" | "curso" | "certificacion" | "laboral" | "proyecto";
  title: string;
  place: string;
  period: string;
  description: string;
};

// Ordena del más reciente al más antiguo.
export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    type: "laboral",
    title: "Desarrollador Frontend",
    place: "Nova Studio",
    period: "2023 — Actualidad",
    description: "Diseño e implementación de interfaces para productos web con React, Next.js y mejoras de UX/UI. También colabore con backend y optimización de rendimiento para mejorar la conversión y la experiencia del usuario.",
  },
  {
    id: "exp-2",
    type: "certificacion",
    title: "Desarrollo Web Profesional",
    place: "Platzi",
    period: "2024",
    description: "Certificación enfocada en JavaScript, React, Next.js, diseño de interfaces y buenas prácticas de desarrollo frontend moderno.",
  },
  {
    id: "exp-3",
    type: "curso",
    title: "Arquitectura de Software y APIs",
    place: "Coursera",
    period: "2023",
    description: "Curso enfocado en arquitectura de soluciones, buenas prácticas de backend, diseño de APIs y escalabilidad de sistemas.",
  },
  {
    id: "exp-4",
    type: "estudio",
    title: "Ingeniería de Sistemas",
    place: "Universidad de Bogotá",
    period: "2018 — 2023",
    description: "Formación en desarrollo de software, bases de datos, programación estructurada, ingeniería de requisitos y gestión de proyectos.",
  },
];

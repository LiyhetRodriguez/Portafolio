export type Project = {
  id: string;
  name: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

// Agrega o edita proyectos aquí. El diseño ya soporta cualquier cantidad,
// se muestran mínimo 6 espacios de ejemplo.
export const projects: Project[] = [
  {
    id: "proyecto-1",
    name: "E-commerce Studio",
    description:
      "Plataforma de ventas online diseñada para marcas emergentes con catálogo dinámico, carrito y flujo de compra optimizado para móviles.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com/ecommerce-studio",
    githubUrl: "https://github.com/mateosilva/ecommerce-studio",
    featured: true,
  },
  {
    id: "proyecto-2",
    name: "Dashboard de Operaciones",
    description:
      "Panel administrativo para monitorear métricas, ventas y tareas en tiempo real con visualizaciones claras y vistas personalizadas.",
    tech: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com/dashboard-operaciones",
    githubUrl: "https://github.com/mateosilva/dashboard-operaciones",
  },
  {
    id: "proyecto-3",
    name: "Reserva Pro",
    description:
      "Sistema de reservas para servicios agendados con gestión de horarios, disponibilidad y experiencia de usuario enfocada en conversiones.",
    tech: ["Java", "Spring", "MySQL"],
    liveUrl: "https://example.com/reserva-pro",
    githubUrl: "https://github.com/mateosilva/reserva-pro",
  },
  {
    id: "proyecto-4",
    name: "MarketHub CRM",
    description:
      "CRM para equipos de ventas y atención al cliente, con seguimiento de leads, automatización de tareas y reportes accionables.",
    tech: ["React", "Express", "MongoDB"],
    liveUrl: "https://example.com/markethub-crm",
    githubUrl: "https://github.com/mateosilva/markethub-crm",
  },
  {
    id: "proyecto-5",
    name: "Finanzas IA",
    description:
      "Aplicación para gestión financiera personal con análisis de gastos, alertas y reportes automatizados para mejorar la toma de decisiones.",
    tech: ["Next.js", "Docker", "PostgreSQL"],
    liveUrl: "https://example.com/finanzas-ia",
    githubUrl: "https://github.com/mateosilva/finanzas-ia",
  },
  {
    id: "proyecto-6",
    name: "BlogTech",
    description:
      "Plataforma editorial con publicación de artículos, categorización y experiencia moderna para comunidades o marcas de contenido.",
    tech: ["TypeScript", "Node.js", "MySQL"],
    liveUrl: "https://example.com/blogtech",
    githubUrl: "https://github.com/mateosilva/blogtech",
  },
];

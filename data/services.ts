export type Service = {
  id: string;
  icon:
    | "code"
    | "smartphone"
    | "server"
    | "database"
    | "workflow"
    | "wrench";
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "web",
    icon: "code",
    title: "Desarrollo web",
    description:
      "Sitios y aplicaciones web rápidos, accesibles y responsive, construidos con tecnología moderna.",
  },
  {
    id: "apps",
    icon: "smartphone",
    title: "Creación de aplicaciones",
    description:
      "Aplicaciones a medida que resuelven problemas reales, desde la idea hasta la puesta en producción.",
  },
  {
    id: "backend",
    icon: "server",
    title: "Backend y APIs",
    description:
      "APIs sólidas, seguras y bien documentadas para conectar tus productos con cualquier cliente.",
  },
  {
    id: "databases",
    icon: "database",
    title: "Bases de datos",
    description:
      "Diseño, modelado y optimización de bases de datos relacionales y no relacionales.",
  },
  {
    id: "automation",
    icon: "workflow",
    title: "Automatización",
    description:
      "Flujos y scripts que eliminan tareas repetitivas y reducen errores operativos.",
  },
  {
    id: "maintenance",
    icon: "wrench",
    title: "Mantenimiento de software",
    description:
      "Soporte, mejoras y correcciones para mantener tu producto estable y al día.",
  },
];

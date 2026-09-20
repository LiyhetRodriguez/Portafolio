# Portafolio — Desarrollador de Software

Portafolio profesional construido con Next.js (App Router), React, TypeScript,
Tailwind CSS y Framer Motion.

## Empezar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

```
app/                Rutas y layout raíz (metadata, fuentes, SEO)
components/         Componentes de UI reutilizables
data/               Contenido editable (sin tocar los componentes)
lib/                Utilidades pequeñas
public/             Assets estáticos (favicon, imágenes, og-image)
```

## Personalizar tu contenido

Todo el contenido real vive en `data/`, así que puedes actualizarlo sin tocar
ningún componente:

- **`data/social.ts`** — tu nombre, rol, descripción, estado, ubicación y
  enlaces de contacto (GitHub, LinkedIn, correo, WhatsApp).
- **`data/skills.ts`** — tecnologías del hero y por categoría (frontend,
  backend, bases de datos, herramientas).
- **`data/projects.ts`** — tus proyectos (agrega tantos como quieras al
  arreglo).
- **`data/services.ts`** — los servicios que ofreces.
- **`data/experience.ts`** — tu línea de tiempo de estudios, cursos,
  certificaciones y experiencia laboral.

Busca cualquier texto entre `[corchetes]` — son los marcadores de contenido
pendiente por completar.

## Imágenes reales

Cuando tengas tu fotografía y capturas de tus proyectos:

1. Colócalas en `public/` (por ejemplo `public/foto-perfil.jpg`).
2. En `components/ProfileCard.tsx` y `components/ProjectCard.tsx`, reemplaza
   el bloque de marcador de posición por `next/image`:

```tsx
import Image from "next/image";

<Image src="/foto-perfil.jpg" alt="Tu nombre" width={96} height={96}
  className="rounded-2xl object-cover" />
```

## Formulario de contacto

El formulario de `components/Contact.tsx` envía un `POST` a
`contactFormEndpoint` (definido en `data/social.ts`). Conéctalo a un servicio
como Formspree, Resend o tu propia API, y actualiza esa constante con la URL
real.

## Despliegue

Este proyecto está listo para desplegarse en [Vercel](https://vercel.com):

```bash
npm run build
```

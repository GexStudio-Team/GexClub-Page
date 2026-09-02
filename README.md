# GEX CLUB

> **Crear · Innovar · Conectar**

Sitio oficial de **Gex Club**, la comunidad de tecnología de **GexStudio Team**. Un espacio para aprender, crear software, diseñar videojuegos y conectar ideas con personas que quieren construir el futuro.

[![Next.js](https://img.shields.io/badge/Next.js-16.3.0-0b1020?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-1687ff?logo=react)](https://react.dev/)
[![Static export](https://img.shields.io/badge/deploy-static%20export-7c3aed)](#publicar-en-hostinger)

---

## ✦ ¿Qué encontrarás?

| Área | Qué ofrece |
|---|---|
| **Inicio** | Presentación de los cuatro pilares de Gex Club y próximos eventos. |
| **Comunidad** | Espacio abierto para aprender, colaborar y construir en equipo. |
| **Hackathons** | Información del reto activo e inscripción mediante Google Forms. |
| **Proyectos** | Proyectos de GexStudio Team con fichas internas y repositorios. |
| **Mentores y aliados** | Directorio interno del equipo, accesible desde Contacto. |
| **FAQ y contacto** | Respuestas clave, Instagram y correo de contacto. |

La comunidad está pensada para personas de todas las edades. Algunas actividades puntuales —como el Hackathon 2026— tienen requisitos propios; actualmente está dirigido a jóvenes de 14 a 18 años.

## 🧭 Sitio estático, fácil de publicar

Gex Club no necesita servidor Node.js, base de datos ni cuentas de usuario para funcionar. Todo el contenido público vive en archivos del proyecto y Next.js genera una versión estática lista para Hostinger.

```text
src/lib/content.js  → eventos, proyectos, perfiles, enlaces y datos editables
public/brand/       → activos visuales de Gex Club
out/                → versión lista para subir al hosting (generada al compilar)
```

## 🚀 Desarrollo local

### Requisitos

- Node.js 20 o superior
- npm

### Instalar y ejecutar

```bash
git clone https://github.com/GexStudio-Team/GexClub-Page.git
cd GexClub-Page
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Si ya tienes otra copia ejecutándose, usa otro puerto:

```bash
npm run dev -- -p 3001
```

## ✏️ Actualizar contenido

La fuente principal de datos es [`src/lib/content.js`](src/lib/content.js).

| Para actualizar… | Edita… |
|---|---|
| Hackathons y horario | `EVENTS` |
| Enlace de inscripción | `HACKATHON_FORM_URL` |
| Proyectos y tecnologías | `PROJECTS` |
| Perfiles del equipo | objetos de perfil y su línea de tiempo |
| Correo y redes | `CONTACT_EMAIL` y `SOCIALS` |

Al añadir un proyecto a `PROJECTS`, el contador visible del sitio se ajusta automáticamente al generar una nueva versión.

## 📦 Publicar en Hostinger

Genera la versión final:

```bash
npm run build
```

El resultado queda en `out/`. Sube **el contenido interno** de esa carpeta a la raíz del dominio en Hostinger, normalmente `public_html`.

```text
public_html/
├── index.html
├── _next/
├── about/
├── aliados/
├── brand/
├── community/
├── contacto/
├── faq/
├── hackathons/
├── projects/
├── robots.txt
└── sitemap.xml
```

No subas `node_modules`, `src`, `.next` ni el repositorio Git. Solo el contenido generado en `out/`.

## 🏗️ Arquitectura

```text
src/
├── app/              # Rutas y páginas de Next.js
│   ├── aliados/       # Directorio interno de GexStudio Team
│   ├── projects/      # Catálogo y fichas de proyectos
│   └── ...
├── components/        # Componentes reutilizables por sección
└── lib/content.js     # Contenido centralizado
```

### Stack

- [Next.js](https://nextjs.org/) 16, App Router y exportación estática
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide](https://lucide.dev/) y [Simple Icons](https://github.com/icons-pack/react-simple-icons)
- Google Forms para inscripciones de hackathons

## 🌿 Flujo de ramas

| Rama | Propósito |
|---|---|
| `main` | Versión aprobada para publicar. |
| `main-anterior` | Respaldo del estado anterior de `main`. |
| `codex/site-updates` | Cambios revisados antes de integrarse a `main`. |
| `edition` | Espacio separado para probar ideas visuales. |

Trabajamos y verificamos los cambios en una rama; cuando estén aprobados, se integran a `main`.

## 🔒 Datos y privacidad

La web no almacena cuentas de usuarios. Las inscripciones se realizan mediante Google Forms. Para actividades de menores de edad, el formulario solicita datos de acudiente y contacto de emergencia únicamente con fines de organización y seguridad.

---

<p align="center">
  Hecho por <strong>GexStudio Team</strong><br />
  <a href="https://www.instagram.com/joingexclub/">Instagram</a> ·
  <a href="https://github.com/GexStudio-Team">GitHub</a> ·
  <a href="mailto:gexstudioteam@gmail.com">Contacto</a>
</p>

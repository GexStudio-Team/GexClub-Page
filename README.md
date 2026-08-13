# Gex Club

**Global Ecosystem for eXcellence**

Sitio web oficial de Gex Club, un ecosistema tecnológico juvenil donde jóvenes de 14 a 18 años desarrollan software, crean videojuegos, participan en hackathons y construyen una comunidad real de creadores de tecnología.

> Create. Learn. Collaborate. Excel.

---

## ¿Qué es Gex Club?

Gex Club no es un club escolar de programación: es una organización tecnológica juvenil que busca convertirse en un punto de encuentro para jóvenes creadores en Latinoamérica. A través de proyectos reales, hackathons, mentorías y una comunidad activa, impulsamos el talento tecnológico joven ofreciendo un espacio donde las ideas se transforman en productos reales.

### Áreas principales

- **Desarrollo tecnológico** — aplicaciones web, software, herramientas digitales y soluciones a problemas reales.
- **Desarrollo de videojuegos** — programación, diseño, arte y narrativa, en equipos multidisciplinarios.
- **Comunidad tecnológica** — talleres, charlas, retos y colaboraciones entre miembros.
- **Hackathons** — competiciones enfocadas en jóvenes de 14 a 18 años, con mentores, formación previa y premios.

## ¿A quién va dirigido?

A jóvenes de 14 a 18 años interesados en tecnología, desarrollo de software, videojuegos, diseño o creación digital — sin importar su nivel de experiencia previa. También a mentores, instituciones y empresas que quieran apoyar el desarrollo de talento tecnológico joven.

## Stack técnico

- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **UI:** React + Tailwind CSS
- **Íconos:** [Lucide](https://lucide.dev) + [Simple Icons](https://github.com/icons-pack/react-simple-icons) (para íconos de marca)
- **Backend:** API Routes de Next.js con almacenamiento en memoria (ver sección de Backend abajo)

## Empezar

\`\`\`bash
git clone https://github.com/GexStudio-Team/GexClub-Page.git
cd GexClub-Page
npm install
npm run dev
\`\`\`

Abre [http://localhost:3000](http://localhost:3000) para ver el sitio.

## Estructura del proyecto

\`\`\`
src/
├── app/                  # Páginas (App Router) y rutas de API
│   ├── about/
│   ├── community/
│   ├── hackathons/
│   ├── projects/
│   ├── api/              # Backend (events, members, projects)
│   ├── layout.js         # Layout raíz (nav, footer, estilos globales)
│   └── page.js           # Home
├── components/           # Componentes de UI organizados por sección
│   ├── layout/
│   ├── home/
│   ├── hackathons/
│   ├── community/
│   └── projects/
└── lib/                  # Datos y utilidades compartidas
\`\`\`

## Backend

El proyecto incluye un backend simple basado en **API Routes de Next.js**, con datos almacenados en memoria (\`src/lib/data.js\`). Esto permite probar flujos completos (registrarse a un evento, unirse a la comunidad) sin depender de una base de datos externa. Los datos se reinician cada vez que el servidor se reinicia — es un punto de partida pensado para conectarse más adelante a una base de datos real (Supabase, PostgreSQL, etc.) sin tener que modificar los componentes de UI.

## Contribuir

Este proyecto es mantenido por el equipo fundador de Gex Club. Si eres miembro de la comunidad y quieres contribuir, contáctanos a través de nuestros canales oficiales.

## Redes

- Instagram
- Discord
- GitHub — [github.com/GexStudio-Team](https://github.com/GexStudio-Team)

---

© 2026 Gex Club — Building the future together.

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
- **Publicación:** exportación estática compatible con Hostinger

## Empezar

```bash
git clone https://github.com/GexStudio-Team/GexClub-Page.git
cd GexClub-Page
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el sitio.

### Formulario de hackathons

El botón **Unirme** abre el formulario público de inscripción de Gex Club. Allí se solicitan datos del participante, del acudiente responsable y un contacto de emergencia para actividades dirigidas a jóvenes de 14 a 18 años.

### Publicar en Hostinger

```bash
npm run build
```

El sitio listo para publicar queda en la carpeta `out/`. Sube **el contenido** de esa carpeta al directorio público de Hostinger (normalmente `public_html`). No requiere Node.js, base de datos ni variables de entorno.

## Estructura del proyecto

| Ruta | Contenido |
|---|---|
| `src/app/` | Páginas estáticas (App Router) |
| `src/app/about/`, `community/`, `hackathons/`, `projects/`, `faq/`, `contacto/` | Páginas de cada sección |
| `src/app/layout.js` | Layout raíz (nav, footer, estilos globales) |
| `src/app/page.js` | Home |
| `src/components/` | Componentes de UI organizados por sección |
| `src/components/layout/`, `home/`, `hackathons/`, `community/`, `projects/` | Componentes por sección |
| `src/lib/content.js` | Datos editables, enlaces y eventos temporales |
| `public/brand/` | Activos de marca de Gex Club |

## Contenido y datos

La web no usa cuentas ni backend. Eventos, proyectos y enlaces viven en `src/lib/content.js`, para que puedas actualizarlos sin depender de una base de datos. Los datos recibidos en las inscripciones se gestionan desde Google Forms.

## Contribuir

Este proyecto es mantenido por el equipo fundador de Gex Club. Si eres miembro de la comunidad y quieres contribuir, contáctanos a través de nuestros canales oficiales.

## Redes

- Instagram — [instagram.com/joingexclub](https://www.instagram.com/joingexclub/)
- GitHub — [github.com/GexStudio-Team](https://github.com/GexStudio-Team)

---

© 2026 Gex Club — Building the future together.

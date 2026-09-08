# GEX CLUB — Sitio Oficial (v0.2.0)

> **Crear · Innovar · Conectar**

Sitio web oficial de **Gex Club**, la comunidad de tecnología de **GexStudio Team**: un espacio para aprender, crear software, diseñar videojuegos y conectar ideas con personas que quieren construir el futuro.

[![Next.js](https://img.shields.io/badge/Next.js-16.3.0-0b1020?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-1687ff?logo=react)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.185-000000?logo=threedotjs)](https://threejs.org/)
[![Static export](https://img.shields.io/badge/deploy-static%20export-7c3aed)](#publicar)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)

---

## Estado del repositorio

| Rama | Estado |
|---|---|
| `main` | **Fuente oficial y publicada.** Cambios de la "G 3D" ya incorporados. |
| `edition` | Variante de experimentación visual (archivo histórico, ver `03-`). |
| `main-anterior` | Respaldo del estado anterior de `main`. |
| `codex/site-updates` | Cambios revisados antes de integrarse a `main`. |

> El sitio publica una **exportación estática** (`out/`); no requiere Node.js, base de datos ni variables de entorno en producción.

---

## ✦ ¿Qué encontrarás?

| Área | Qué ofrece |
|---|---|
| **Inicio** | Pilares de Gex Club, próximos eventos y la **G 3D animada** de marca. |
| **Comunidad** | Espacio abierto para aprender, colaborar y construir en equipo. |
| **Hackathons** | Información del reto activo e inscripción mediante Google Forms. |
| **Proyectos** | Proyectos de GexStudio Team con fichas internas y repositorios. |
| **Aliados** | Directorio de aliados y equipo (accesible desde Contacto). |
| **FAQ y contacto** | Respuestas clave, Instagram y correo de contacto. |

## ✦ La "G" 3D (`src/components/brand/`)

El logo del Hero es una escena **Three.js** generada por código (dependencia `three@^0.185`):

- **Geometría**: cajas `BoxGeometry` formando la G — grafito metálico (`metalness 0.85`), bloques de vidrio translúcido (`transmission`) y una espina neón central.
- **Iluminación**: `RoomEnvironment` (lighting de estudio) vía `Environment`.
- **Conexiones neón lima** (`#c8ff3d`) como tubos entre bloques, con nodos esféricos luminosos en cada unión.
- **Postprocesado**: `UnrealBloomPass` para que el neón tenga brillo real.
- **Partículas** de "polvo digital" (lima, blanco, cian) rotando en el fondo.
- **Auto-fit**: la cámara se recalculó sobre el tamaño real de la pieza para que la G **llene el panel completo** del Hero en cualquier resolución.
- **Accesibilidad**: respeta `prefers-reduced-motion`.

`GexMark.jsx` conserva una variante 2D (SVG) como referencia.

## 🧭 Estructura

```text
src/
├── app/              # Rutas y páginas (App Router)
│   ├── about/        # Quiénes somos
│   ├── aliados/      # Directorio de aliados y equipo
│   ├── community/    # Comunidad
│   ├── contacto/     # Contacto
│   ├── faq/          # Preguntas frecuentes
│   ├── hackathons/   # Reto activo e inscripción
│   ├── projects/     # Catálogo y fichas de proyectos
│   ├── layout.js     # Layout raíz (nav, footer, estilos)
│   └── page.js       # Home (Hero con G 3D)
├── components/       # UI por sección
│   └── brand/        # GexMark (SVG) y GexMark3D (Three.js)
├── lib/content.js    # Contenido centralizado y editable
└── globals.css       # Estilos globales (Tailwind + tema)
public/brand/         # Activos estáticos de marca
out/                  # Export estática lista para publicar (generada)
```

### Stack

- [Next.js](https://nextjs.org/) 16 (App Router, exportación estática)
- [React](https://react.dev/) 19 · [Three.js](https://threejs.org/) 0.185
- [Tailwind CSS](https://tailwindcss.com/) 4 + `tw-animate-css`
- [Lucide](https://lucide.dev/) + [Simple Icons](https://github.com/icons-pack/react-simple-icons)
- Google Forms para inscripciones de hackathons

## 🚀 Desarrollo local

```bash
git clone https://github.com/GexStudio-Team/GexClub-Page.git
cd GexClub-Page
npm install
npm run dev            # http://localhost:3000
# si hay otra copia usando el puerto:
npm run dev -- -p 3001
```

Requisitos: **Node.js 20 o superior** y npm.

## ✏️ Actualizar contenido

Fuente principal de datos: [`src/lib/content.js`](src/lib/content.js).

| Para actualizar… | Edita… |
|---|---|
| Hackathons y horario | `EVENTS` |
| Enlace de inscripción | `HACKATHON_FORM_URL` |
| Proyectos y tecnologías | `PROJECTS` |
| Perfiles / aliados | objetos de perfil y su línea de tiempo |
| Correo y redes | `CONTACT_EMAIL` y `SOCIALS` |

## 📦 Publicar

```bash
npm run build
```

El resultado queda en `out/`. Sube **el contenido interno** de `out/` a la raíz del dominio en Hostinger (normalmente `public_html`):

```text
public_html/
├── index.html
├── _next/
├── about/ · aliados/ · brand/ · community/ · contacto/ · faq/ · hackathons/ · projects/
├── robots.txt
└── sitemap.xml
```

No subas `node_modules`, `src`, `.next` ni `.git`. Antes de desplegar, revisa el estado de `main` con `git status` y `git diff`.

## 🔒 Datos y privacidad

La web no almacena cuentas de usuario. Las inscripciones se gestionan con Google Forms (para menores se solicitan datos de acudiente y contacto de emergencia, solo con fines de organización y seguridad).

## 🤝 Contribuir

Gex Club es una comunidad abierta: las mejoras y correcciones son bienvenidas.

Lee [CONTRIBUTING.md](CONTRIBUTING.md) antes de abrir un issue o pull request. Todas las contribuciones están bajo la licencia [MIT](LICENSE).

---

<p align="center">
  Hecho por <strong>GexStudio Team</strong> ·
  <a href="https://www.instagram.com/joingexclub/">Instagram</a> ·
  <a href="https://github.com/GexStudio-Team">GitHub</a> ·
  <a href="mailto:gexstudioteam@gmail.com">Contacto</a>
</p>
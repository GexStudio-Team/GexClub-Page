# Changelog — Gex Club · Sitio Oficial

Todos los cambios notables de este repositorio se documentan en este archivo.
Formato basado en [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Las marcas de tiempo corresponden a la zona horaria `America/Bogota` (UTC−05:00).

---

## [Unreleased]

### Added

- **GEX_OS v1.0** — Terminal interactiva en `/gexos` (feature/gex-os-terminal):
  - Librería de comandos (`src/lib/commands.js`) alimentada por `src/lib/content.js`.
  - Componentes: `Terminal.jsx` (shell con historial y autocompletado), `MatrixRain.jsx` (lluvia digital en Canvas), `GexAscii.jsx` (logo ASCII), `TerminalLauncher.jsx` (acceso global).
  - Comandos: `help`, `ls`, `cat <slug>`, `hackathon`, `social`, `contacto`, `whoami`, `neofetch`, `matrix`, `sudo`, `clear`, `exit`, `pwd`, `date` (con alias en español).
  - Acceso global: botón flotante tras scroll + atajo `Ctrl+K` desde cualquier página.
  - Ruta `/gexos` integrada a la navegación (sidebar y menú móvil) y al `sitemap.xml`.
  - Registro de GEX_OS como proyecto en el vault (`PROJECTS` en `content.js`) con ficha dinámica (`/projects/gex-os`).

### Fixed

- **`clear`/`matrix`/`exit` en GEX_OS**: los comandos especiales fallaban porque el objeto `LINE` no exponía los tons reservados y el filtro `OUTPUT_TYPES` los descartaba antes de procesarlos. Se reordenó la evaluación en `Terminal.jsx` (tones especiales primero) y los runners de `commands.js` ahora devuelven el tone correcto directamente.

### Fixed (pendiente confirmar en revisión)

- `npm run lint` presenta un error de configuración **pre-existente** (FlatCompat + ESLint 9, `next/core-web-vitals`) no relacionado con GEX_OS; el build estático se genera correctamente.

### Planeado

- Auditoría SEO: imagen OG, Twitter Cards, JSON-LD y metadatos canónicos.
- Formulario de inscripción a hackathons con identidad de marca (embebido, sin salir del sitio).
- Pipeline CI/CD con GitHub Actions y artefacto de publicación.
- Documentación técnica profesional: `docs/`, arquitectura y guía de despliegue.
- Resolver error de configuración de ESLint (FlatCompat).

---

## [0.2.0] — 2026-09-08

### Added

- `LICENSE` (MIT) con titularidad de GexStudio Team.
- `CONTRIBUTING.md` con estándares de colaboración para la comunidad.
- `CHANGELOG.md` con política de documentación continua.

### Changed

- `README.md`: incorpora badge de licencia y sección de contribución.
- `.gitignore`: se ignoran notas locales del entorno (`EXPLICACION_LOCAL.md`).

### Removed

- `EXPLICACION_LOCAL.md` del control de versiones (se conserva como nota local del equipo; contenía rutas del entorno de desarrollo).

---

## [0.1.0] — 2026-09-05

Versión base publicada del sitio oficial.

### Added

- Hero con marca "G" 3D a pantalla completa (`Three.js`): geometría de bloques metálicos/translúcidos, conexiones neón lima, `UnrealBloomPass` y partículas de polvo digital.
- Auto-fit de cámara sobre el tamaño real de la pieza para adaptarse a toda resolución.
- Respeto de `prefers-reduced-motion`.

### Fixed (relevantes de fases previas)

- Estructura interna de carpetas del repositorio reorganizada.
- Contenido centralizado en `src/lib/content.js` (eventos, proyectos, aliados, contacto).

---

## [0.0.1] — Inicios (historia temprana)

Construcción inicial del sitio: rutas institucionales, estructura Next.js App Router,
paleta oscura con acentos azul/violeta, tipografía JetBrains Mono, y memoria del proyecto
conservada en ramas de respaldo (`edition`, `main-anterior`, `legacy-*`).

---

<!-- Enlaces de comparación entre versiones (se activan al crearse tags):
[Unreleased]: https://github.com/GexStudio-Team/GexClub-Page/compare/v0.2.0...HEAD
[0.2.0]:      https://github.com/GexStudio-Team/GexClub-Page/releases/tag/v0.2.0
[0.1.0]:      https://github.com/GexStudio-Team/GexClub-Page/releases/tag/v0.1.0
-->
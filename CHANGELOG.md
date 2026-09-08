# Changelog — Gex Club · Sitio Oficial

Todos los cambios notables de este repositorio se documentan en este archivo.
Formato basado en [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Las marcas de tiempo corresponden a la zona horaria `America/Bogota` (UTC−05:00).

---

## [Unreleased]

### Planeado

- Auditoría SEO: imagen OG, Twitter Cards, JSON-LD y metadatos canónicos.
- Formulario de inscripción a hackathons con identidad de marca (embebido, sin salir del sitio).
- Pipeline CI/CD con GitHub Actions y artefacto de publicación.
- Documentación técnica profesional: `docs/`, arquitectura y guía de despliegue.

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
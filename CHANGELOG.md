# Changelog — Gex Club · Sitio Oficial

Todos los cambios notables de este repositorio se documentan en este archivo.
Formato basado en [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Las marcas de tiempo corresponden a la zona horaria `America/Bogota` (UTC−05:00).

---

## [Unreleased]

### Changed

- **Experiencia móvil (Fase 2)**: los **4 pilares** ahora son un carrusel horizontal deslizable (`snap-x`, scrollbar oculta, hint "swipe →") en móvil/tablet y conservan la grilla en desktop (`lg`); las tarjetas de **eventos** se compactaron en móvil (fecha y estado en la misma fila, paddings reducidos, metadatos inline) manteniendo el layout de escritorio.
- **Footer móvil**: la columna de **Redes** ahora queda a la **derecha** de **Navegación** en pantallas pequeñas (grilla de 2 columnas); en desktop se conserva el orden original (1.5fr / 1fr / 1fr).
- **Espaciado superior del layout móvil**: el `main` ahora reserva `pt-[88px]` en móvil (statusbar 32px + header 56px) para que la frase "Global Ecosystem for eXcellence" del hero no quede oculta bajo el nav fijo; desktop mantiene `pt-8`.
- **Imagen del vault** (`/projects`): reducida en móvil (`h-36 w-36` vs `h-64 w-64`) y pegada más a la derecha para que no sobresalga de la franja de título; en desktop conserva proporciones grandes (`h-52 w-52 md`).
- **Experiencia móvil de la home (Fase 1)**: espaciados adaptativos (`py-12 lg:py-24` en Pillars, Misión, Eventos y CTA; padding interior del CTA compacto), hero con **texto primero** en móvil (se invirtió el orden de la visual 3D), **hero compacto** (`lg:min-h-[88vh]`, título `text-4xl` en móvil, visual 3D `min-h` reducida) y **TerminalLauncher oculto cerca del final de página** (260px del bottom) para no tapar CTA ni footer. Sin cambios en desktop (`lg:` preserva el layout original).
- **`next.config.mjs`**: se añadió `allowedDevOrigins: ['192.168.1.23']` para permitir ver el sitio en desarrollo desde la red local (advertencias de cross-origin de Next.js al acceder por IP de red). Sin efecto en producción (solo aplica al modo dev).

### Fixed

- **Bug de fecha en eventos**: `2026-10-03` se mostraba como "02 oct" (o "2") porque `new Date('YYYY-MM-DD')` interpreta la fecha como medianoche UTC y en `America/Bogota` (UTC−5) caía en el día anterior. Se añadió `parseLocalDate`/`formatDateEs` en `src/lib/utils.js` (parsing local) y se aplicó en `EventsPreview.jsx` y `EventList.jsx`. El countdown se alimenta de `startAt` con offset `-05:00`, por lo que ya era correcto.

### Docs

- **Documentación técnica actualizada** a la realidad del proyecto v0.3.0 (`public/Docs/DOCUMENTACION_TECNICA.md`): se reemplazó la versión obsoleta (backend en memoria, API Routes) por la arquitectura actual (export estático, `content.js`, GEX_OS, "G" 3D, estrategia de contenido, versionado y backlog).
- `README.md`: la tabla de ramas refleja `main` como única rama activa (post-merge de GEX_OS) y enlaza a la documentación técnica y a Releases.
- `CONTRIBUTING.md`: el Definition of Done usa `npm run build` como verificación principal (el `lint` arrastra un fallo de configuración pre-existente) y documenta el flujo de squash merge.
- **Perfil de la organización `GexStudio-Team/.github`** (`8710048`): se corrigió la codificación UTF-8 de `profile/README.md` y `CONTRIBUTING.md`, que mostraba texto ilegible en la portada de la org. El README del perfil ahora incluye GEX_OS como proyecto activo.

### Planeado

- Auditoría SEO: imagen OG, Twitter Cards, JSON-LD y metadatos canónicos.
- Formulario de inscripción a hackathons con identidad de marca (embebido, sin salir del sitio).
- Pipeline CI/CD con GitHub Actions y artefacto de publicación.
- Resolver error de configuración de ESLint 9 (FlatCompat).

---

## [0.3.0] — 2026-09-08

### Added

- **GEX_OS v1.0** — Terminal interactiva en `/gexos` (PR #2):
  - Librería de comandos (`src/lib/commands.js`) alimentada por `src/lib/content.js`.
  - Componentes: `Terminal.jsx` (shell con historial y autocompletado), `MatrixRain.jsx` (lluvia digital en Canvas), `GexAscii.jsx` (logo ASCII), `TerminalLauncher.jsx` (acceso global).
  - Comandos: `help`, `ls`, `cat <slug>`, `hackathon`, `social`, `contacto`, `whoami`, `neofetch`, `matrix`, `sudo`, `clear`, `exit`, `pwd`, `date` (con alias en español).
  - Acceso global: botón flotante tras scroll + atajo `Ctrl+K` desde cualquier página.
  - Ruta `/gexos` integrada a la navegación (sidebar y menú móvil) y al `sitemap.xml`.
  - Registro de GEX_OS como proyecto en el vault (`PROJECTS` en `content.js`) con ficha dinámica (`/projects/gex-os`).

### Fixed

- **`clear`/`matrix`/`exit` en GEX_OS**: los comandos especiales fallaban porque el objeto `LINE` no exponía los tones reservados y el filtro `OUTPUT_TYPES` los descartaba antes de procesarlos. Se reordenó la evaluación en `Terminal.jsx` (tones especiales primero) y los runners de `commands.js` ahora devuelven el tone correcto directamente.

> Nota: `npm run lint` presenta un error de configuración **pre-existente** (FlatCompat + ESLint 9, `next/core-web-vitals`) no relacionado con GEX_OS; el build estático se genera correctamente. Pendiente en `Unreleased`.

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
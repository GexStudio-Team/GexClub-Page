# Documentación técnica — Gex Club

Documentación interna del proyecto. Explica decisiones de arquitectura, convenciones y estado actual para cualquier persona del equipo (o colaboradora externa) que trabaje en el código.

**Versión del proyecto:** v0.3.0 — 2026-09-08 (America/Bogota)

---

## 1. Resumen del sistema

Gex Club es un **sitio estático** generado con Next.js (App Router) en modo `output: 'export'`: el resultado del build es una carpeta `out/` con HTML/CSS/JS puro, lista para publicar en cualquier hosting estático (Hostinger). **No hay backend, base de datos ni variables de entorno en producción.**

Todo lo demás es contenido centralizado en un solo módulo de datos (`src/lib/content.js`) para que el sitio siempre esté sincronizado y sea editable sin tocar componentes.

## 2. Stack y por qué

| Decisión | Elegido | Razón |
|---|---|---|
| Framework | Next.js 16 (App Router, export estático) | Control total del código, ruta a mejoras (SSG/ISR) si algún día se agrega backend, sin depender de plataformas cerradas |
| Lenguaje | JavaScript (JSX), no TypeScript | Velocidad de desarrollo en esta fase. Migrar a TypeScript es viable a futuro, archivo por archivo |
| Estilos | Tailwind CSS v4 + `tw-animate-css` | Consistencia visual rápida, utilidades declarativas |
| Íconos | Lucide + Simple Icons | Lucide para íconos generales; Simple Icons para logos de marca (GitHub, Instagram, Discord), que Lucide eliminó en su v1.0 |
| 3D | Three.js 0.185 | La "G" del Hero es una escena 3D generada por código (creada y afinada por CTO) |
| Formularios | Google Forms (enlace externo) | Inscripciones a hackathons sin infraestructura propia; datos centralizados en la hoja del equipo |

## 3. Origen del proyecto

El diseño visual y de contenido se prototipó primero en **Base44** (generador de apps con IA) y luego se migró manualmente a Next.js para tener control total del código. Del prototipo se conservó:

- Identidad visual (paleta verde neón, tipografía JetBrains Mono / Inter, estética "terminal").
- Estructura de contenido y *copy* de cada sección.
- Componentes de UI (adaptados de React + Vite a Next.js).

**No** se migró el backend propietario de Base44 (autenticación, `AuthContext`, login/registro): dependía de esa plataforma. El sitio actual es 100% estático por decisión.

## 4. Estructura de carpetas (estado actual)

```
src/
├── app/                      # Rutas y páginas (App Router)
│   ├── page.js               # Home → Hero con la "G" 3D
│   ├── about/                # /about — quiénes somos
│   ├── aliados/              # /aliados — directorio de aliados y equipo
│   ├── community/            # /community — comunidad y membresía
│   ├── contacto/             # /contacto — contacto + acceso a aliados
│   ├── faq/                  # /faq — preguntas frecuentes
│   ├── gexos/                # /gexos — GEX_OS (terminal interactiva)
│   ├── hackathons/           # /hackathons — reto activo + inscripción
│   ├── projects/             # /projects y /projects/[slug] — catálogo y fichas
│   ├── layout.js             # Layout raíz: nav, footer, TerminalLauncher, estilos
│   ├── globals.css           # Tema, variables de color, tipografías
│   ├── sitemap.js            # Sitemap estático (incluye /gexos)
│   └── robots.txt/route.js   # Robots
├── components/               # UI por sección
│   ├── brand/                # GexMark (SVG 2D) y GexMark3D (Three.js)
│   ├── community/            # Componentes de /community
│   ├── gexos/                # Terminal.jsx · MatrixRain.jsx · GexAscii.jsx · TerminalLauncher.jsx
│   ├── hackathons/           # CountdownTimer, EventList, etc.
│   ├── home/                 # Hero, Pilares, Misión, Eventos, CTA
│   ├── layout/               # Statusbar, Footer, SectionHeader
│   └── projects/             # ProjectCard y fichas
├── lib/
│   ├── content.js            # ★ FUENTE ÚNICA de contenido editable (EVENTS, PROJECTS, SOCIALS…)
│   ├── commands.js           # Lógica de comandos de GEX_OS
│   └── utils.js              # Helper cn() para clases de Tailwind
public/
├── brand/                    # Activos de marca
└── Docs/                     # Documentación técnica pública (este archivo)
out/                          # Export estática generada por npm run build (no editar)
```

## 5. Estrategia de contenido (importante)

`src/lib/content.js` es la **fuente única de verdad** para el contenido editable:

| Sección del sitio | Constante en `content.js` |
|---|---|
| Eventos y horario | `EVENTS` |
| Enlace de inscripción a hackathons | `HACKATHON_FORM_URL` |
| Proyectos y tecnologías | `PROJECTS` (incluye a GEX_OS, id 0) |
| Perfiles / aliados | objetos de perfil y su línea de tiempo |
| Correo y redes | `CONTACT_EMAIL` y `SOCIALS` |

**Regla**: no duplicar datos dentro de componentes; si un texto es dinámico, vive en `content.js`. Esto mantiene el sitio coherente y centraliza las ediciones (por ejemplo, los comandos `ls`/`cat` de GEX_OS leen de `PROJECTS`).

## 6. GEX_OS — Terminal interactiva (`src/components/gexos/` + `src/lib/commands.js`)

Terminal navegable con estética de sistema operativo:

- **Ruta dedicada** `/gexos` + **acceso global** (botón flotante tras scroll y atajo `Ctrl+K`, gestionado por `TerminalLauncher.jsx` en el layout raíz).
- **Comandos**: `help`, `ls`, `cat <slug>`, `hackathon`, `social`, `contacto`, `whoami`, `neofetch`, `matrix`, `sudo`, `clear`, `exit`, `pwd`, `date` — con alias en español (`ayuda`, `salir`, `cerrar`, etc.).
- **Autocompletado** con `TAB` e **historial** con `↑/↓`.
- **Modo matrix**: lluvia digital en Canvas (`MatrixRain.jsx`), respeta `prefers-reduced-motion`.
- **Logo ASCII** propio (`GexAscii.jsx`) para `neofetch`.

### Arquitectura interna

- `commands.js` expone `RUNNERS` (tabla de comandos), `ALIASES`, `PROMPT` y fabricantes de líneas (`LINE`) + `runCommand(raw)`.
- Los comandos especiales (`matrix`, `clear`, `exit`) se comunican con la interfaz mediante **tons reservados**: el runner devuelve `{ text: '', tone: 'clear' | 'matrix' | 'exit' }`.
- `Terminal.jsx` procesa esos tons **antes** de aplicar el filtro de estilos (`OUTPUT_TYPES`). El orden es crítico: evaluar primero los tons especiales y solo después filtrar por estilos; de lo contrario los comandos especiales se descartan silenciosamente (bug histórico corregido en v0.3.0).

## 7. La "G" 3D (`src/components/brand/GexMark3D.jsx`)

Logo del Hero como escena Three.js generada por código:

- **Geometría**: `BoxGeometry` formando la G — grafito metálico (`metalness 0.85`), bloques de vidrio translúcido (`transmission`) y una espina neón central.
- **Iluminación**: `RoomEnvironment` vía `Environment`.
- **Conexiones neón lima** (`#c8ff3d`) como tubos entre bloques, con nodos esféricos luminosos.
- **Postprocesado**: `UnrealBloomPass` (brillo real del neón).
- **Partículas** de "polvo digital" (lima, blanco, cian) rotando en el fondo.
- **Auto-fit**: la cámara se recalculó sobre el tamaño real de la pieza para que la G llene el panel completo en cualquier resolución.
- **Accesibilidad**: respeta `prefers-reduced-motion`.
- `GexMark.jsx` conserva una variante 2D (SVG) como referencia.

## 8. Convenciones de código

- Componentes interactivos (con `useState`, `useEffect`, manejadores de eventos) llevan `'use client'` al inicio. Los presentacionales sin estado se quedan como Server Components.
- Rutas de import con alias `@/` → `src/` (`jsconfig.json`).
- Colores, tipografías y radios de borde salen de variables CSS en `globals.css` (`--primary`, `--font-display`, etc.), nunca hardcodeados.
- Los fondos con patrón de grid/líneas neón se generan con gradientes CSS inline, no con imágenes.
- Animaciones nuevas deben respetar `prefers-reduced-motion`.
- Comunicación de commits: convencional (`feat:` / `fix:` / `docs:` / `refactor:`).

## 9. Build, verificación y publicación

```bash
npm install
npm run dev        # desarrollo → http://localhost:3000
npm run build      # genera out/ (verificación previa al PR)
```

- El build genera `out/` con export estático (18 páginas actuales) — verificado con `npm run build`.
- **Publicación**: subir el contenido interno de `out/` a `public_html` en Hostinger (nunca `node_modules`, `src`, `.next` ni `.git`).

> **Nota sobre lint**: `npm run lint` arrastra un error de configuración **pre-existente** (FlatCompat vs. ESLint 9, `next/core-web-vitals`). No está relacionado con las funcionalidades; el build y el sitio publicado son correctos. El arreglo de esa configuración está en el backlog.

## 10. Versionado y releases

- El historial principal vive en `main`. Los desarrollos se hacen en ramas (`feature/*`, `fix/*`, `docs/*`) y entran por **Pull Request** con squash merge.
- Cada versión publicable se marca con tag semántico (`v0.1.0`, `v0.2.0`, `v0.3.0`) y release en GitHub con notas formales.
- `README.md` describe el proyecto para el público; `CHANGELOG.md` usa el formato (Tipo / Qué / Por qué) con timestamp America/Bogota; `TODO.md` lleva el backlog.

| Versión | Contenido |
|---|---|
| v0.1.0 | "G" 3D a pantalla completa en el Hero |
| v0.2.0 | Repositorio profesionalizado: licencia, CONTRIBUTING, changelog, perfil de org |
| v0.3.0 | GEX_OS v1.0 (terminal interactiva + acceso global) y fix de comandos especiales |

## 11. Pendientes conocidos (backlog)

- [ ] Resolver configuración de ESLint 9 (FlatCompat circular) — pre-existente.
- [ ] Auditoría SEO: imagen OG, Twitter Cards, JSON-LD, canonical.
- [ ] Formulario de inscripción embebido con identidad de marca (hoy Google Forms externo).
- [ ] Pipeline CI/CD con GitHub Actions y artefacto de publicación.
- [ ] Accesibilidad: revisar tooltips sin foco, `aria-expanded` en menú móvil, contraste.
- [ ] Analytics de tráfico y conversión del formulario.
- [ ] Revisar peso/rendimiento de la "G" 3D en móviles (LCP).
- [ ] Evaluar GEX_OS como modal global (tecla `` ` ``) en lugar de navegación a `/gexos`.

## 12. Historial de decisiones relevantes

- Se descartó exportar el código completo desde Base44 (requiere plan pago): se copiaron manualmente los componentes útiles y se reescribió el resto en Next.js.
- Se descartó TypeScript en esta fase por velocidad; mejora futura no bloqueante.
- Se reemplazaron los íconos de marca de `lucide-react` (GitHub, Instagram, Discord) por `@icons-pack/react-simple-icons` (Lucide eliminó íconos de marcas registradas en su v1.0).
- Se adoptó **export estático** (`output: 'export'`) como modo de publicación definitivo; el "backend en memoria" de las primeras versiones fue descartado: no hay API routes ni datos de servidor.
- GEX_OS se integra como **proyecto oficial** del vault (`PROJECTS[0]`) además de ser una herramienta del sitio.
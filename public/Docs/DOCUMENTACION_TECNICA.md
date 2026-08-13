# Documentación técnica — Gex Club

Documentación interna del proyecto. Explica decisiones de arquitectura, convenciones y estado actual, para cualquiera del equipo que trabaje en el código.

## Stack y por qué

| Decisión | Elegido | Razón |
|---|---|---|
| Framework | Next.js (App Router) | Escalable, control total del código, sin dependencia de plataformas de terceros |
| Lenguaje | JavaScript (JSX), no TypeScript | Priorizar velocidad de desarrollo en esta fase. Migrar a TypeScript es viable a futuro, archivo por archivo, sin reescribir el proyecto |
| Estilos | Tailwind CSS v4 | Consistencia visual rápida, cero CSS suelto que mantener |
| Íconos | Lucide + Simple Icons | Lucide para íconos generales; Simple Icons específicamente para logos de marca (GitHub, Instagram, Discord), ya que Lucide los eliminó en su versión 1.0 |
| Backend | API Routes de Next.js, datos en memoria | Simple, sin dependencias externas, suficiente para maquetar y probar flujos completos mientras se decide la base de datos definitiva |

## Origen del proyecto

El diseño visual y de contenido se prototipó primero en Base44 (generador de apps con IA), y luego se migró manualmente a Next.js para tener control total del código y evitar la dependencia de una plataforma cerrada. Del prototipo original se conservó:

- Toda la identidad visual (paleta verde neón, tipografía JetBrains Mono/Inter, estética "terminal")
- La estructura de contenido y copys de cada sección
- Los componentes de UI (adaptados de React + Vite a Next.js)

Lo que **no** se migró del prototipo: el sistema de autenticación y backend propios de Base44 (`base44Client`, `AuthContext`, login/registro), porque dependían de esa plataforma. Ese es un pendiente a resolver con una solución propia (ver "Pendientes").

## Estructura de carpetas

```
src/
├── app/
│   ├── page.js                  → Home (/)
│   ├── about/page.js            → /about
│   ├── community/page.js        → /community
│   ├── hackathons/page.js       → /hackathons
│   ├── projects/page.js         → /projects
│   ├── api/
│   │   ├── events/route.js      → GET, POST /api/events
│   │   ├── members/route.js     → GET, POST /api/members
│   │   └── projects/route.js    → GET /api/projects
│   ├── layout.js                → Layout raíz: nav lateral/móvil, Statusbar, Footer
│   └── globals.css              → Variables de tema, colores, fuentes
├── components/
│   ├── layout/                  → Statusbar, Footer, SectionHeader (compartidos)
│   ├── home/                    → Hero, PillarsGrid, MissionSection, EventsPreview, CtaBand
│   ├── hackathons/               → CountdownTimer, EventList
│   ├── community/                → MemberGrid, JoinFlow
│   └── projects/                 → ProjectCard
└── lib/
    ├── data.js                  → "Base de datos" en memoria + funciones de acceso
    └── utils.js                 → Helper `cn()` para clases de Tailwind
```

## Backend (estado actual)

`src/lib/data.js` mantiene los datos en `globalThis.__GEX_STORE__`, lo que los hace sobrevivir al hot-reload de desarrollo pero **no** a un reinicio del servidor ni a un despliegue serverless (cada función podría arrancar con datos limpios en producción).

**Funciones expuestas:**
- `getEvents()`, `registerEvent(id)`
- `getMembers()`, `addMember({ name, role, github })`
- `getProjects()`

**Rutas API que las usan:**
- `GET /api/events` — lista eventos
- `POST /api/events` `{ id }` — incrementa registrados en un evento
- `GET /api/members` — lista miembros
- `POST /api/members` `{ name, role, github }` — crea un miembro nuevo
- `GET /api/projects` — lista proyectos

### Migrar a una base de datos real

Cuando se decida la solución definitiva (Supabase, PostgreSQL, etc.), el cambio se limita a `src/lib/data.js`: reemplazar las funciones internas por consultas reales, manteniendo la misma firma (mismos nombres de función, mismos parámetros, mismo formato de retorno). Ni las API routes ni los componentes de UI deberían necesitar cambios.

## Convenciones de código

- Componentes interactivos (con `useState`, `useEffect`, manejadores de eventos) llevan `'use client'` al inicio del archivo.
- Componentes puramente presentacionales, sin estado, se quedan como Server Components (sin la directiva).
- Rutas de import usan el alias `@/` → `src/` (configurado en `jsconfig.json`).
- Colores, tipografía y radios de borde salen de variables CSS en `globals.css` (`--primary`, `--font-display`, etc.), nunca hardcodeados en los componentes.
- Los fondos con patrón de grid/líneas neón se generan con `style` inline (gradientes CSS), no con imágenes — evita depender de assets externos.

## Pendientes conocidos

- [ ] **Autenticación real** — login, registro, recuperar contraseña. No implementado (se descartó la versión de Base44 por depender de su backend).
- [ ] **Base de datos persistente** — reemplazar `src/lib/data.js` por una fuente real.
- [ ] **Imágenes reales** — actualmente varias secciones (Hero, About, Projects) usan fondos con gradiente/grid en vez de fotografías, para evitar depender de imágenes generadas por Base44 (con dominio externo bloqueado por Next.js).
- [ ] **Identidad visual definitiva** — logo, isotipo y sistema gráfico propios (actualmente el sitio usa una "G" tipográfica como placeholder).

## Historial de decisiones relevantes

- Se descartó exportar el código completo desde Base44 (requiere plan pago) en favor de copiar manualmente los componentes útiles y reescribir el resto.
- Se descartó TypeScript en esta fase por velocidad; queda como mejora futura, no bloqueante.
- Se reemplazaron los íconos de marca de `lucide-react` (GitHub, Instagram, Discord) por `@icons-pack/react-simple-icons`, ya que Lucide eliminó los íconos de marcas registradas en su versión 1.0.

---
name: documentation
description: Manage project documentation in docs/ folder: ROADMAP, TDD, CHANGELOG, TODO. Apply project web-app code standards (Next.js App Router + FastAPI, services layer, feature modules, path alias @/, no secrets, Spanish tuteo, accessibility). Use when creating, updating, or reviewing project documentation OR when writing/refactoring web code. Always update docs at the end of each task. Always iterate until the program is functional and the build is clean.
license: MIT
compatibility: opencode
metadata:
  audience: developers
  workflow: documentation
---

# Documentation Skill

Manage all project documentation in the `docs/` folder and enforce project-wide code architecture rules. This skill defines the structure, format, update rules, and coding standards for the project.

## Documentation Structure

```
docs/
├── ROADMAP.md      # Project roadmap with phases
├── TDD.md          # Technical Design Document
├── CHANGELOG.md    # Chronological change history
└── TODO.md         # Pending tasks and backlog
```

> Nota: `GDD.md` (Game Design Document) no aplica a este proyecto. Es un sitio web y una API, no un juego.

## When to Use

- At the **end of every task**: update CHANGELOG and TODO
- When starting a **new feature**: update ROADMAP and TDD if architecture changes
- When **backend schema/endpoints** change: update TDD (DB schema + endpoints)
- When **adding/removing modules**: update TDD
- When writing or refactoring web code: apply the Code Architecture Rules below

## Definition of Done

1. **Iterate until functional**: the program must actually run without errors before a task is considered complete.
   - Frontend: `npm run build` must succeed.
   - Backend: `python -m backend.test_api` must pass.
2. **Check for errors**: after EVERY change, inspect the build output and backend tests for errors and new warnings.
3. Only update CHANGELOG/TODO after passing both checks above.

## Changelog Format

```
## DD:MM:YYYY

- **category** (status - HH:MM): Description of the change
```

### Categories
- `feature` - New functionality
- `fix` - Bug fix
- `refactor` - Code restructuring
- `docs` - Documentation changes
- `polish` - Visual/UX/accessibility improvements
- `infra` - Tooling, build, deployment, config

### Status
- `completed` - Finished
- `in_progress` - Started but not finished
- `created` - File/section created
- `updated` - Existing content modified
- `removed` - Feature/content removed

### Example
```
## 14:08:2026

- **feature** (completed - 08:20): Registro real a hackathons por usuario.
- **polish** (completed - 08:40): Dark mode y consistencia de idioma.
```

## Update Rules

1. **CHANGELOG**: Add entry at the top (newest first), use current date/time
2. **TODO**: Mark completed tasks, add tasks discovered during work
3. **ROADMAP**: Update phase status when milestones are reached
4. **TDD**: Update when architecture changes (new modules, DB schema, endpoints)
5. **GDD**: Not applicable (no game)

## Cross-References

- Link between documents instead of duplicating information
- TDD references ROADMAP phases
- TODO references ROADMAP phases
- README.md is the source of truth for high-level project description

---

# Code Architecture Rules

Standards for the web application. These rules take priority over pre-existing legacy code — new code must follow them, and refactors should migrate legacy code toward them.

## Project Structure

```
src/
├── app/          # Páginas (App Router) y rutas de API
├── components/   # Componentes de UI organizados por sección (home, layout, hackathons, community, projects, profile, gallery)
├── features/     # Módulos de funcionalidad por dominio (auth, theme)
├── lib/          # Datos y utilidades compartidas (blog, gallery, hackathons)
├── services/     # Cliente HTTP centralizado hacia FastAPI
└── app/layout.js # Server Component raíz; la lógica de cliente vive en RootLayoutClient
```

## Path Alias

- Usar siempre el alias `@/*` → `./src/*` (configurado en `tsconfig.json`). No usar imports relativos largos (`../../../`).

## Frontend (Next.js 16 App Router)

- **Server Components por defecto**; añadir `'use client'` solo cuando se necesite estado, hooks o interactividad.
- **`metadata`** solo se exporta desde Server Components (o desde un `layout.js` server por ruta). Las páginas `'use client'` no pueden exportar metadata.
- Estados con hooks localizados en componentes cliente; delegar la lógica de datos a `src/services/api.js`.
- No duplicar `fetch` inline: centralizar en los servicios (`authService`, `eventsService`, `projectsService`, `meService`).
- Íconos de `lucide-react` (UI) y `@icons-pack/react-simple-icons` (marcas).

## Backend (FastAPI + SQLite)

- Modelos SQLAlchemy en `backend/models.py`; esquemas Pydantic en `backend/schemas.py`.
- Cada dominio tiene su router en `backend/routers/` (auth, events, projects, me).
- Endpoints protegidos usan `get_current_user`; lectura pública opcional usa `get_optional_current_user`.
- La autenticación es JWT + bcrypt (`backend/auth.py`). No escribir nunca secretos en el código (usar variables de entorno).
- Migraciones: `Base.metadata.create_all` crea tablas nuevas pero no altera columnas. Para alterar tablas existentes usar `backend/seed.py`; en producción adoptar Alembic.

## UI / Estética

- Tokens semánticos (CSS variables en `globals.css`): `bg-background`, `text-foreground`, `text-primary`, `border-border`, `bg-card`, `text-muted-foreground`, `text-destructive`.
- Soporte de tema claro/oscuro: la paleta clara vive en `:root` y la oscura en `.dark`. Los cambios de tema usan `ThemeProvider` + `ThemeToggle`.
- Estética "cyber/brutalist": fuentes `Inter` (body) y `JetBrains Mono` (mono/display), bordes y grillas tipo blueprint, etiquetas `[ Nº ]`, texto en mayúsculas con `tracking-widest`.

## Idioma y Accesibilidad

- **Idioma consistente en tuteo** ("eres", "tu", "construye") — no mezclar con voseo ("sos", "querés").
- Añadir `aria-label` a botones de solo icono, `aria-current="page"` en enlaces de navegación activos, y HTML semántico (`nav`, `section`, `article`, `time`).
- Respetar `prefers-reduced-motion` (hay bloque global en `globals.css`).

## No Secrets

- Nunca commitear secretos, claves API o contraseñas. Usar variables de entorno (`process.env.NEXT_PUBLIC_*`, `os.getenv`).

## Naming Conventions

- Archivos JS/JSX: `kebab-case.jsx` (p. ej. `PastEditions.jsx`, `ThemeProvider.jsx`)
- Backend Python: `snake_case` (p. ej. `get_current_user`, `create_event`)
- Componentes: `PascalCase` (p. ej. `GallerySection`)

## Golden Rule

Si un archivo supera 300–500 líneas, evaluar dividirlo en módulos más pequeños.

---

# Templates

## TDD Sections
1. Arquitectura General
2. Diagrama de Módulos y Flujo de Datos
3. Esquema de Base de Datos (SQLite)
4. Endpoints de la API
5. Notas de Migración

## ROADMAP Sections
1. Phase Name
2. Goals
3. Features
4. Status (Not Started / In Progress / Completed)

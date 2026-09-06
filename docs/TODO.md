# TODO - GexClub

## Tareas Completadas

- [x] Crear documentación técnica inicial (`docs/ROADMAP.md`, `docs/TDD.md`, `docs/CHANGELOG.md`, `docs/TODO.md`)
- [x] Configurar entorno de Python y dependencias (`fastapi`, `uvicorn`, `sqlalchemy`, `bcrypt`, `pyjwt`, `pydantic`)
- [x] Crear base de datos SQLite y ORM (`backend/database.py`, `backend/models.py`)
- [x] Implementar esquema de autenticación JWT y Hashing Bcrypt (`backend/auth.py`, `backend/schemas.py`)
- [x] Implementar endpoints de Registro, Login y Perfil (`/api/auth/register`, `/api/auth/login`, `/api/auth/me`)
- [x] Implementar endpoints de Eventos y Proyectos con persistencia en SQLite (`/api/events`, `/api/projects`)
- [x] Crear e implementar suite de pruebas (`backend/test_api.py`) pasando 100% exitosa
- [x] Reestructurar Frontend Next.js con servicios centralizados en `src/services/api.js`
- [x] Crear `AuthContext` en el frontend (`src/features/auth/AuthContext.jsx`) para persistir token y usuario
- [x] Implementar páginas y formularios UI de Login y Registro (`/login`, `/register`)
- [x] Integrar botones y estado de sesión en la navegación principal (`src/app/layout.js`)
- [x] Dark mode (toggle con persistencia en `localStorage` y anti-FOUC)
- [x] Layout como Server Component con `metadata` raíz y `RootLayoutClient`
- [x] Página de perfil de miembro (`/profile`)
- [x] Blog (`/blog`, `/blog/[slug]`) y FAQ (`/faq`) + enlaces reales de redes
- [x] SEO: metadata por página, `sitemap.ts`, `robots.ts`
- [x] Accesibilidad y consistencia de idioma (tuteo)
- [x] Modelo `Registration` y columnas de `Event` para la UI
- [x] Endpoints `/api/events/{id}/register`, `/api/events/{id}`, `/api/me/events`
- [x] Migración/seed `backend/seed.py`
- [x] Migrar `/hackathons` a FastAPI con registro autenticado
- [x] Galería de eventos en `/community` (`GallerySection`)
- [x] Hackathons pasados con podio en `/hackathons` (`PastEditions`)

## Tareas Pendientes

- [ ] Migrar la preview de eventos de la home (`EventsPreview`) a FastAPI (hoy usa la API en memoria `/api/events`)
- [ ] Arreglar `npm run lint` (falla `eslint.config.mjs` por un error circular de configuración)
- [ ] "Mis proyectos" en el perfil conectar a backend real (hoy es placeholder)
- [ ] Búsqueda/paginación en `/projects`
- [ ] Agregar fotos reales en `public/gallery/` para la galería
- [ ] Considerar migraciones Alembic para producción (hoy `seed.py` hace ALTER manual)

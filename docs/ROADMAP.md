# ROADMAP - GexClub

## Fases del Proyecto

### Fase 1: Arquitectura Backend (FastAPI + SQLite) 🟢 (Completado)
- [x] Configuración de entorno Python y estructura del directorio `/backend`
- [x] Conexión a SQLite mediante SQLAlchemy (`backend/database.py`)
- [x] Modelos ORM de Base de Datos: Usuarios, Eventos, Proyectos (`backend/models.py`)
- [x] Seguridad y Autenticación JWT + Bcrypt (`backend/auth.py`)
- [x] Endpoints de Autenticación (`/api/auth/register`, `/api/auth/login`, `/api/auth/me`)
- [x] Endpoints de Eventos y Proyectos con persistencia en SQLite

### Fase 2: Reestructuración Modular del Frontend (Next.js) 🟢 (Completado)
- [x] Creación de `src/services/api.js` cliente HTTP para FastAPI
- [x] Creación de `AuthContext` (`src/features/auth/AuthContext.jsx`) y manejador de sesión global
- [x] Organización modular bajo `src/features/auth`

### Fase 3: Vistas de Autenticación y Conexión 🟢 (Completado)
- [x] Formulario e interfaz de Login (`/login`) con `LoginForm.jsx`
- [x] Formulario e interfaz de Registro (`/register`) con `RegisterForm.jsx`
- [x] Integración de botones y menú de usuario en `src/app/layout.js`

### Fase 4: Experiencia, Contenido y SEO 🟢 (Completado)
- [x] Dark mode (toggle con persistencia y respeto a `prefers-color-scheme`)
- [x] Layout como Server Component con `metadata` raíz + `RootLayoutClient`
- [x] Página de perfil de miembro (`/profile`)
- [x] Blog (`/blog`) y FAQ (`/faq`) + enlaces reales de redes
- [x] SEO: metadata por página, `sitemap.ts`, `robots.ts`
- [x] Accesibilidad y consistencia de idioma

### Fase 5: Registro Real a Hackathons y Contenido Comunitario 🟢 (Completado)
- [x] Modelo `Registration` y columnas de `Event` para la UI (name/type/status/capacity)
- [x] Endpoints `/api/events/{id}/register`, `/api/events/{id}`, `/api/me/events`
- [x] Migración/seed `backend/seed.py`
- [x] Migrar `/hackathons` a FastAPI con registro autenticado
- [x] Galería de eventos en `/community`
- [x] Sección de hackathons pasados con podio en `/hackathons`

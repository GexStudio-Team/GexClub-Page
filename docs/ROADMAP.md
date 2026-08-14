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

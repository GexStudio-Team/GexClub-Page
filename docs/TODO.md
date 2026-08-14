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

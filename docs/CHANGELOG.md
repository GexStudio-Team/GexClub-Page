# CHANGELOG - GexClub

## 14:08:2026

- **feature** (completed - 07:18): Implementación de las Fases 2 y 3 (Frontend Next.js & Autenticación).
  - Creado cliente de API HTTP centralizado en `src/services/api.js`.
  - Creado proveedor de estado global de autenticación `AuthContext` en `src/features/auth/AuthContext.jsx`.
  - Creados componentes de formulario `LoginForm.jsx` y `RegisterForm.jsx` con estilos temáticos cyber/brutalist.
  - Creadas las páginas públicas `/login` y `/register` en Next.js.
  - Actualizado `src/app/layout.js` para envolver la app en `AuthProvider` e integrar indicadores y botones de inicio/cierre de sesión en la navegación móvil y desktop.
  - Verificada la compilación limpia de Next.js (`npm run build`).
- **feature** (completed - 07:09): Construcción completa de la Fase 1 del Backend en Python (FastAPI + SQLite).
  - Configurado entorno `backend/venv` y `backend/requirements.txt`.
  - Base de datos SQLite `backend/gexclub.db` con modelos SQLAlchemy (`User`, `Event`, `Project`).
  - Módulo de autenticación segura JWT + Bcrypt (`backend/auth.py`).
  - Endpoints de autenticación (`/api/auth/register`, `/api/auth/login`, `/api/auth/me`).
  - Endpoints de recursos (`/api/events`, `/api/projects`).
  - Suite de pruebas de integración `backend/test_api.py` verificada y funcional.
- **docs** (completed - 07:09): Creada la documentación completa bajo `docs/` (`ROADMAP.md`, `TDD.md`, `TODO.md`, `CHANGELOG.md`) de acuerdo al estándar `SKILL.md`.

# Technical Design Document (TDD) - GexClub

## 1. Arquitectura General
El proyecto GexClub utiliza una arquitectura desacoplada:
- **Frontend**: Next.js 16 (React 19) con Tailwind CSS v4 para la interfaz de usuario.
- **Backend**: FastAPI (Python 3.12) con ORM SQLAlchemy y base de datos SQLite persistente.
- **Autenticación**: JSON Web Tokens (JWT) firmados con clave secreta y hashing de contraseñas mediante `passlib[bcrypt]`.

## 2. Diagrama de Módulos y Flujo de Datos

```
[ Next.js Client ] <--- HTTP (JSON / JWT) ---> [ FastAPI Backend ] <---> [ SQLite Database ]
  ├── AuthContext                                  ├── Auth Router             └── gexclub.db
  ├── Features (Auth, Theme)                      ├── Events Router
  ├── Components (layout, home, hackathons,       ├── Projects Router
  │   community, projects, profile, gallery)      └── Me Router
  ├── Services (API Client)
  └── Data (lib: blog, gallery, hackathons)
```

## 3. Esquema de Base de Datos (SQLite)

### Tabla `users`
- `id`: INTEGER PRIMARY KEY AUTOINCREMENT
- `email`: VARCHAR(255) UNIQUE NOT NULL
- `hashed_password`: VARCHAR(255) NOT NULL
- `full_name`: VARCHAR(255) NOT NULL
- `role`: VARCHAR(50) DEFAULT 'member'
- `created_at`: DATETIME DEFAULT CURRENT_TIMESTAMP
- Relación `registrations` (1:N con `registrations`)

### Tabla `events`
- `id`: INTEGER PRIMARY KEY AUTOINCREMENT
- `title`: VARCHAR(255) NOT NULL
- `name`: VARCHAR(255) NULL (nombre mostrado en la UI)
- `description`: TEXT
- `date`: VARCHAR(100)
- `location`: VARCHAR(255)
- `category`: VARCHAR(100)
- `type`: VARCHAR(100) DEFAULT 'hackathon' (hackathon | meetup | workshop)
- `status`: VARCHAR(100) DEFAULT 'proximamente' (proximamente | activo | finalizado)
- `capacity`: INTEGER DEFAULT 40
- Propiedad `registered` (count de `registrations`)
- Relación `registrations` (1:N con `registrations`)

### Tabla `registrations` (nueva)
- `id`: INTEGER PRIMARY KEY AUTOINCREMENT
- `user_id`: INTEGER FK → `users.id` NOT NULL
- `event_id`: INTEGER FK → `events.id` NOT NULL
- `created_at`: DATETIME DEFAULT CURRENT_TIMESTAMP
- Constraint UNIQUE (`user_id`, `event_id`) → evita inscripciones duplicadas

### Tabla `projects`
- `id`: INTEGER PRIMARY KEY AUTOINCREMENT
- `title`: VARCHAR(255) NOT NULL
- `description`: TEXT
- `tech_stack`: VARCHAR(255)
- `github_url`: VARCHAR(255)

## 4. Endpoints de la API

### Autenticación (`/api/auth`)
- `POST /register` → crea usuario, devuelve token + user
- `POST /login` → valida credenciales, devuelve token + user
- `GET /me` → perfil del usuario actual (Bearer)

### Eventos (`/api/events`)
- `GET /` → lista eventos (token opcional) con `registered` y `registered_by_me`
- `GET /{event_id}` → detalle de un evento
- `POST /` → crear evento (auth)
- `POST /{event_id}/register` → inscribe al usuario actual (auth)

### Usuario actual (`/api/me`)
- `GET /events` → eventos a los que el usuario está inscrito (auth)

### Proyectos (`/api/projects`)
- `GET /` → lista proyectos
- `POST /` → crear proyecto (auth)

## 5. Notas de Migración

- `Base.metadata.create_all` crea tablas nuevas (p. ej. `registrations`) pero **no** altera columnas de tablas existentes.
- `backend/seed.py` aplica ALTER TABLE para agregar `name`, `type`, `status`, `capacity` a `events` y siembra los eventos base si la tabla está vacía.
- Para producción se recomienda adoptar migraciones Alembic.

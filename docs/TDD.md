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
  ├── Features (Auth, Events)                      ├── Events Router
  └── Services (API Client)                        └── Projects Router
```

## 3. Esquema de Base de Datos (SQLite)

### Tabla `users`
- `id`: INTEGER PRIMARY KEY AUTOINCREMENT
- `email`: VARCHAR(255) UNIQUE NOT NULL
- `hashed_password`: VARCHAR(255) NOT NULL
- `full_name`: VARCHAR(255) NOT NULL
- `role`: VARCHAR(50) DEFAULT 'member'
- `created_at`: DATETIME DEFAULT CURRENT_TIMESTAMP

### Tabla `events`
- `id`: INTEGER PRIMARY KEY AUTOINCREMENT
- `title`: VARCHAR(255) NOT NULL
- `description`: TEXT
- `date`: VARCHAR(100)
- `location`: VARCHAR(255)
- `category`: VARCHAR(100)

### Tabla `projects`
- `id`: INTEGER PRIMARY KEY AUTOINCREMENT
- `title`: VARCHAR(255) NOT NULL
- `description`: TEXT
- `tech_stack`: VARCHAR(255)
- `github_url`: VARCHAR(255)

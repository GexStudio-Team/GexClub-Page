from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base
from .routers import auth, events, projects

# Crear las tablas en la base de datos SQLite si no existen
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="GexClub API",
    description="API RESTful en FastAPI + SQLite con autenticación JWT para el club de desarrollo GexClub",
    version="1.0.0"
)

# Configuración de CORS para permitir solicitudes del Frontend Next.js (http://localhost:3000)
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:3001"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir enrutadores
app.include_router(auth.router)
app.include_router(events.router)
app.include_router(projects.router)

@app.get("/")
def read_root():
    return {
        "status": "online",
        "service": "GexClub Backend Service",
        "database": "SQLite",
        "docs_url": "/docs"
    }

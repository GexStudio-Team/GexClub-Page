"""Migración y seed para el backend de GexClub.

- Agrega columnas faltantes a la tabla `events` (no las crea create_all).
- Crea la tabla `registrations` (nueva).
- Siembra los eventos base si la tabla está vacía.

Uso:
    cd backend && python -m seed
"""
import os
import sqlite3

from .database import BASE_DIR, engine, Base
from .models import Event  # noqa: F401  (importa los modelos para create_all)

EVENTS = [
    {
        "name": "Game Jam: Pixel Revolution",
        "description": "Game jam de 72h con temática sorpresa. Arte, diseño, narrativa y programación unidos en un mismo juego.",
        "date": "2026-09-19",
        "status": "proximamente",
        "type": "hackathon",
        "capacity": 40,
    },
    {
        "name": "Meetup #12 — Demos & Code Review",
        "description": "Evento mensual donde los miembros presentan avances de proyectos y reciben feedback de mentores.",
        "date": "2026-08-29",
        "status": "proximamente",
        "type": "meetup",
        "capacity": 50,
    },
    {
        "name": "Workshop: Intro a la IA Generativa",
        "description": "Sesión hands-on sobre cómo integrar modelos de lenguaje en tus proyectos. De cero a primer prototipo.",
        "date": "2026-08-23",
        "status": "activo",
        "type": "workshop",
        "capacity": 30,
    },
    {
        "name": "Gex Hackathon Vol.06 — Code the Future",
        "description": "48 horas para construir un proyecto que resuelva un problema real de tu ciudad. Equipos de hasta 4 miembros.",
        "date": "2026-08-15",
        "status": "activo",
        "type": "hackathon",
        "capacity": 60,
    },
    {
        "name": "Hackathon Nacional Juvenil 2025",
        "description": "Edición anterior. 80 jóvenes, 20 proyectos, 3 ganadores. El estándar que queremos superar.",
        "date": "2025-11-09",
        "status": "finalizado",
        "type": "hackathon",
        "capacity": 80,
    },
]


def ensure_columns(db_path: str):
    """Agrega columnas faltantes a la tabla events."""
    conn = sqlite3.connect(db_path)
    cur = conn.cursor()
    existing = {row[1] for row in cur.execute("PRAGMA table_info(events)").fetchall()}
    for col, ddl in {
        "name": "TEXT",
        "type": "VARCHAR DEFAULT 'hackathon'",
        "status": "VARCHAR DEFAULT 'proximamente'",
        "capacity": "INTEGER DEFAULT 40",
    }.items():
        if col not in existing:
            cur.execute(f"ALTER TABLE events ADD COLUMN {col} {ddl}")
            print(f"[seed] columna events.{col} agregada")
    conn.commit()
    conn.close()


def main():
    db_path = os.path.join(BASE_DIR, "gexclub.db")
    ensure_columns(db_path)
    Base.metadata.create_all(bind=engine)

    # Seed si la tabla está vacía
    from sqlalchemy.orm import Session
    from .database import SessionLocal

    db: Session = SessionLocal()
    try:
        count = db.query(Event).count()
        if count == 0:
            for data in EVENTS:
                db.add(Event(title=data["name"], **data))
            db.commit()
            print(f"[seed] {len(EVENTS)} eventos sembrados")
        else:
            print(f"[seed] {count} eventos ya existentes, sin sembrar")
    finally:
        db.close()


if __name__ == "__main__":
    main()
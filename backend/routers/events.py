from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List, Optional
from ..database import get_db
from ..models import Event, User, Registration
from ..schemas import EventCreate, EventResponse, RegistrationResponse
from ..auth import get_current_user, get_optional_current_user

router = APIRouter(prefix="/api/events", tags=["Events"])


def _event_response(event: Event, current_user: Optional[User]) -> EventResponse:
    registered = len(event.registrations) if event.registrations is not None else 0
    registered_by_me = False
    if current_user is not None:
        registered_by_me = any(r.user_id == current_user.id for r in (event.registrations or []))
    resp = EventResponse.model_validate(event)
    resp.registered = registered
    resp.registered_by_me = registered_by_me
    return resp


@router.get("/", response_model=List[EventResponse])
def get_events(
    db: Session = Depends(get_db),
    current_user: Optional[User] = Depends(get_optional_current_user),
):
    events = db.query(Event).order_by(Event.date.desc()).all()
    return [_event_response(e, current_user) for e in events]


@router.get("/{event_id}", response_model=EventResponse)
def get_event(
    event_id: int,
    db: Session = Depends(get_db),
    current_user: Optional[User] = Depends(get_optional_current_user),
):
    event = db.query(Event).filter(Event.id == event_id).first()
    if not event:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Evento no encontrado")
    return _event_response(event, current_user)


@router.post("/", response_model=EventResponse, status_code=status.HTTP_201_CREATED)
def create_event(
    event_data: EventCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    payload = event_data.model_dump(exclude_unset=True)
    if payload.get("name") is None and payload.get("title"):
        payload["name"] = payload["title"]
    new_event = Event(**payload)
    db.add(new_event)
    db.commit()
    db.refresh(new_event)
    return _event_response(new_event, current_user)


@router.post("/{event_id}/register", response_model=EventResponse)
def register_to_event(
    event_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    event = db.query(Event).filter(Event.id == event_id).first()
    if not event:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Evento no encontrado")

    if event.status == "finalizado":
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Este evento ya finalizó y no admite inscripciones.",
        )

    existing = (
        db.query(Registration)
        .filter(
            Registration.user_id == current_user.id,
            Registration.event_id == event_id,
        )
        .first()
    )
    if existing:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Ya estás registrado en este evento.",
        )

    if event.capacity and len(event.registrations) >= event.capacity:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Este evento ya no tiene cupos disponibles.",
        )

    db.add(Registration(user_id=current_user.id, event_id=event.id))
    db.commit()
    db.refresh(event)
    return _event_response(event, current_user)

from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from typing import List
from ..database import get_db
from ..models import Event, User
from ..schemas import EventCreate, EventResponse
from ..auth import get_current_user

router = APIRouter(prefix="/api/events", tags=["Events"])

@router.get("/", response_model=List[EventResponse])
def get_events(db: Session = Depends(get_db)):
    return db.query(Event).all()

@router.post("/", response_model=EventResponse, status_code=status.HTTP_201_CREATED)
def create_event(
    event_data: EventCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    new_event = Event(**event_data.model_dump())
    db.add(new_event)
    db.commit()
    db.refresh(new_event)
    return new_event

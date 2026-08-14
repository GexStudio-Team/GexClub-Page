from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from ..database import get_db
from ..models import User, Registration
from ..schemas import EventResponse
from ..auth import get_current_user
from .events import _event_response

router = APIRouter(prefix="/api/me", tags=["Me"])


@router.get("/events", response_model=List[EventResponse])
def get_my_events(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    registrations = (
        db.query(Registration)
        .filter(Registration.user_id == current_user.id)
        .order_by(Registration.created_at.desc())
        .all()
    )
    return [_event_response(r.event, current_user) for r in registrations]
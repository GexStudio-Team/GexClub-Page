from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

# Esquemas de Autenticación y Usuario
class UserCreate(BaseModel):
    email: EmailStr
    password: str
    full_name: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: int
    email: EmailStr
    full_name: str
    role: str
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserResponse

# Esquemas de Evento
class EventCreate(BaseModel):
    title: str
    description: Optional[str] = None
    date: Optional[str] = None
    location: Optional[str] = None
    category: Optional[str] = "general"

class EventResponse(EventCreate):
    id: int
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True

# Esquemas de Proyecto
class ProjectCreate(BaseModel):
    title: str
    description: Optional[str] = None
    tech_stack: Optional[str] = None
    github_url: Optional[str] = None

class ProjectResponse(ProjectCreate):
    id: int
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True

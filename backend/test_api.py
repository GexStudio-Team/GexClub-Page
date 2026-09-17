import uuid
from fastapi.testclient import TestClient
from backend.main import app

client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json()["service"] == "GexClub Backend Service"

def test_register_and_login():
    random_email = f"user_{uuid.uuid4().hex[:8]}@gexclub.com"
    password = "Password123!"

    # 1. Registrar usuario
    user_data = {
        "email": random_email,
        "password": password,
        "full_name": "Test User"
    }
    response = client.post("/api/auth/register", json=user_data)
    assert response.status_code == 201, response.text
    data = response.json()
    assert "access_token" in data
    assert data["user"]["email"] == random_email
    token = data["access_token"]

    # 2. Login con el usuario creado
    login_data = {
        "email": random_email,
        "password": password
    }
    login_res = client.post("/api/auth/login", json=login_data)
    assert login_res.status_code == 200
    login_json = login_res.json()
    assert "access_token" in login_json

    # 3. Obtener perfil del usuario actual (/api/auth/me) con Bearer token
    me_res = client.get("/api/auth/me", headers={"Authorization": f"Bearer {token}"})
    assert me_res.status_code == 200
    assert me_res.json()["email"] == random_email
    print("✅ Pruebas de Registro, Login, JWT y SQLite pasaron exitosamente!")

if __name__ == "__main__":
    test_root()
    test_register_and_login()

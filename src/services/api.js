const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

/**
 * Wrapper genérico para realizar peticiones HTTP a la API FastAPI
 */
export async function apiFetch(endpoint, options = {}) {
  const token = typeof window !== 'undefined' ? localStorage.getItem('gex_token') : null;

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.detail || 'Ocurrió un error en la solicitud.');
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
}

// Servicios de Autenticación
export const authService = {
  login: (email, password) =>
    apiFetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  register: (fullName, email, password) =>
    apiFetch('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ full_name: fullName, email, password }),
    }),

  getMe: () => apiFetch('/auth/me'),
};

// Servicios de Eventos
export const eventsService = {
  getAll: () => apiFetch('/events/'),
  getById: (id) => apiFetch(`/events/${id}`),
  create: (eventData) =>
    apiFetch('/events/', {
      method: 'POST',
      body: JSON.stringify(eventData),
    }),
  register: (eventId) =>
    apiFetch(`/events/${eventId}/register`, {
      method: 'POST',
    }),
};

// Servicios del usuario actual
export const meService = {
  getEvents: () => apiFetch('/me/events'),
};

// Servicios de Proyectos
export const projectsService = {
  getAll: () => apiFetch('/projects/'),
  create: (projectData) =>
    apiFetch('/projects/', {
      method: 'POST',
      body: JSON.stringify(projectData),
    }),
};

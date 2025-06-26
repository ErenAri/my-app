// frontend/src/services/auth.ts
const API_URL = 'http://localhost:5000/api/auth';


export const signup = async (email: string, password: string) => {
  const res = await fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Signup failed');
  }

  return res.json();
};

export const login = async (email: string, password: string) => {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Login failed');
  }

  return res.json();
};

export const getProfile = async (token: string) => {
  const res = await fetch('http://localhost:5000/api/auth/profile', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Failed to fetch profile');
  }

  return res.json();
};


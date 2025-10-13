import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  // Reset password with token - no auth required
  resetPassword: async (email, token, newPassword) => {
    const response = await api.post('/api/auth/reset-password', {
      email,
      token,
      newPassword
    });
    return response.data;
  },

  // Verify reset token (optional - for validation)
  verifyResetToken: async (email, token) => {
    const response = await api.post('/api/auth/verify-reset-token', {
      email,
      token
    });
    return response.data;
  }
};

export default api;
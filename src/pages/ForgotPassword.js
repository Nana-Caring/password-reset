import React, { useState } from 'react';
import { authAPI } from '../services/api';
import Button from '../components/Button';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await authAPI.forgotPassword(email);
      
      if (response.success) {
        setMessage('If an account with that email exists, a password reset link has been sent.');
      } else {
        setError(response.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Forgot password error:', error);
      setError('Failed to send reset email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <img 
            src="https://nanacaring-backend.onrender.com/assets/logo.jpg" 
            alt="NANA Logo" 
            className="logo"
          />
          <h2>Forgot Password</h2>
          <p>Enter your email address and we'll send you a link to reset your password.</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              disabled={loading}
            />
          </div>

          {error && <div className="error-message">{error}</div>}
          {message && <div className="success-message">{message}</div>}

          <Button 
            type="submit" 
            loading={loading}
            className="auth-button"
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </Button>
        </form>

        <div className="auth-footer">
          <p>Remember your password? <a href="/login">Back to Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

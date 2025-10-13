import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../services/api';
import Button from '../components/Button';
import PasswordStrengthIndicator from '../components/PasswordStrengthIndicator';
import { validatePassword } from '../utils/validation';

const ChangePassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate passwords
    if (formData.newPassword !== formData.confirmPassword) {
      setError('New passwords do not match.');
      setLoading(false);
      return;
    }

    if (formData.currentPassword === formData.newPassword) {
      setError('New password must be different from current password.');
      setLoading(false);
      return;
    }

    const passwordValidation = validatePassword(formData.newPassword);
    if (!passwordValidation.isValid) {
      setError(passwordValidation.message);
      setLoading(false);
      return;
    }

    try {
      const response = await authAPI.changePassword(
        formData.currentPassword, 
        formData.newPassword
      );
      
      if (response.success) {
        navigate('/success?type=change');
      } else {
        setError(response.message || 'Failed to change password. Please try again.');
      }
    } catch (error) {
      console.error('Change password error:', error);
      if (error.response?.status === 401) {
        setError('Current password is incorrect.');
      } else {
        setError('Failed to change password. Please try again.');
      }
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
          <h2>Change Password</h2>
          <p>Update your account password.</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="currentPassword">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              placeholder="Enter current password"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="Enter new password"
              required
              disabled={loading}
            />
            <PasswordStrengthIndicator password={formData.newPassword} />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm new password"
              required
              disabled={loading}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <Button 
            type="submit" 
            loading={loading}
            className="auth-button"
          >
            {loading ? 'Changing...' : 'Change Password'}
          </Button>
        </form>

        <div className="auth-footer">
          <p><a href="/dashboard">Back to Dashboard</a></p>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
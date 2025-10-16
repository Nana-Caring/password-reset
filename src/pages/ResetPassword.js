import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { authAPI } from '../services/api';
import Button from '../components/Button';
import PasswordStrengthIndicator from '../components/PasswordStrengthIndicator';
import { validatePassword } from '../utils/validation';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const email = searchParams.get('email');
  const token = searchParams.get('token');

  const handleChange = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value
    };
    
    setFormData(newFormData);
    setError('');
    
    // Check if passwords match in real-time
    if (e.target.name === 'confirmPassword' && newFormData.newPassword) {
      setPasswordsMatch(newFormData.newPassword === e.target.value);
    } else if (e.target.name === 'newPassword' && newFormData.confirmPassword) {
      setPasswordsMatch(e.target.value === newFormData.confirmPassword);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate passwords
    if (formData.newPassword !== formData.confirmPassword) {
      setError('Passwords do not match.');
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
      const response = await authAPI.resetPassword(email, token, formData.newPassword);
      
      if (response.success) {
        navigate('/success?type=reset');
      } else {
        setError(response.message || 'Failed to reset password. Please try again.');
      }
    } catch (error) {
      console.error('Reset password error:', error);
      setError('Failed to reset password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <img 
            src={require('../utils/newlogo.jpg')} 
            alt="NANA Logo" 
            className="logo"
          />
          <h2>Create New Password</h2>
          <p>Please enter your new password below.</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <div className="password-input-container">
              <input
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Enter new password"
                required
                disabled={loading}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowNewPassword(!showNewPassword)}
                disabled={loading}
              >
                {showNewPassword ? '🙈' : '👁️'}
              </button>
            </div>
            <PasswordStrengthIndicator password={formData.newPassword} />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="password-input-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm new password"
                required
                disabled={loading}
                className={formData.confirmPassword && !passwordsMatch ? 'password-mismatch' : ''}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                disabled={loading}
              >
                {showConfirmPassword ? '🙈' : '👁️'}
              </button>
            </div>
            {formData.confirmPassword && formData.newPassword && (
              <div className={`password-match-indicator ${passwordsMatch ? 'match' : 'no-match'}`}>
                {passwordsMatch ? (
                  <span>✅ Passwords match</span>
                ) : (
                  <span>❌ Passwords do not match</span>
                )}
              </div>
            )}
          </div>

          {error && <div className="error-message">{error}</div>}

          <Button 
            type="submit" 
            loading={loading}
            disabled={loading || !passwordsMatch || !formData.newPassword || !formData.confirmPassword}
            className="auth-button"
          >
            {loading ? 'Resetting...' : 'Reset Password'}
          </Button>
        </form>

        <div className="auth-footer">
          <p className="help-text">After resetting, you can log in to your NANA account with your new password.</p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

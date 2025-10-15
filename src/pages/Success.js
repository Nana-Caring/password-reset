import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Success = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const type = searchParams.get('type'); // 'reset' or 'change'

  const isReset = type === 'reset';
  const title = isReset ? 'Password Reset Successful!' : 'Password Changed Successfully!';
  const message = isReset 
    ? 'Your password has been reset successfully. You can now log in with your new password.'
    : 'Your password has been changed successfully. Your new password is now active.';

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <img 
            src="https://nanacaring-backend.onrender.com/assets/logo.jpg" 
            alt="NANA Logo" 
            className="logo"
          />
          <div className="success-icon">✅</div>
          <h2>{title}</h2>
          <p>{message}</p>
        </div>

        <div className="success-actions">
          <Button 
            onClick={() => window.location.href = '/login'}
            className="auth-button primary"
          >
            Go to Login
          </Button>
          
          {!isReset && (
            <Button 
              onClick={() => navigate('/dashboard')}
              className="auth-button secondary"
            >
              Back to Dashboard
            </Button>
          )}
        </div>

        <div className="auth-footer">
          <p className="success-note">
            🔒 Your account is now secured with your new password.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
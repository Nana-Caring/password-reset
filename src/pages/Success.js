import React from 'react';
import Button from '../components/Button';

const Success = () => {
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
          <h2>Password Reset Successful!</h2>
          <p>Your password has been reset successfully. You can now log in with your new password.</p>
        </div>

        <div className="success-actions">
          <Button 
            onClick={() => window.location.href = 'http://localhost:5000/login'}
            className="auth-button primary"
          >
            Go to Login
          </Button>
        </div>

        <div className="auth-footer">
          <p className="success-note">
            🔒 Your account is now secured with your new password.
          </p>
          <p className="help-text">
            If you continue to have issues, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
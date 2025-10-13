import React from 'react';
import { validatePassword } from '../utils/validation';

const PasswordStrengthIndicator = ({ password }) => {
  if (!password) return null;

  const validation = validatePassword(password);
  const strength = validation.strength;

  const getStrengthColor = () => {
    switch (strength) {
      case 'weak': return '#dc2626';
      case 'medium': return '#f59e0b';
      case 'strong': return '#059669';
      default: return '#6b7280';
    }
  };

  const getStrengthWidth = () => {
    switch (strength) {
      case 'weak': return '33%';
      case 'medium': return '66%';
      case 'strong': return '100%';
      default: return '0%';
    }
  };

  return (
    <div className="password-strength">
      <div className="strength-bar">
        <div 
          className="strength-fill"
          style={{
            width: getStrengthWidth(),
            backgroundColor: getStrengthColor()
          }}
        ></div>
      </div>
      <div className="strength-text" style={{ color: getStrengthColor() }}>
        Password strength: {strength}
      </div>
      {validation.suggestions.length > 0 && (
        <ul className="strength-suggestions">
          {validation.suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PasswordStrengthIndicator;
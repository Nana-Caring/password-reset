export const validatePassword = (password) => {
  const result = {
    isValid: false,
    strength: 'weak',
    message: '',
    suggestions: []
  };

  if (!password) {
    result.message = 'Password is required';
    return result;
  }

  if (password.length < 6) {
    result.message = 'Password must be at least 6 characters long';
    result.suggestions.push('Use at least 6 characters');
    return result;
  }

  let score = 0;
  const suggestions = [];

  // Length check
  if (password.length >= 8) score += 1;
  else suggestions.push('Use at least 8 characters');

  // Uppercase check
  if (/[A-Z]/.test(password)) score += 1;
  else suggestions.push('Include uppercase letters');

  // Lowercase check
  if (/[a-z]/.test(password)) score += 1;
  else suggestions.push('Include lowercase letters');

  // Number check
  if (/\d/.test(password)) score += 1;
  else suggestions.push('Include numbers');

  // Special character check
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1;
  else suggestions.push('Include special characters');

  // Determine strength
  if (score <= 2) {
    result.strength = 'weak';
  } else if (score <= 3) {
    result.strength = 'medium';
  } else {
    result.strength = 'strong';
  }

  result.isValid = password.length >= 6;
  result.suggestions = suggestions;

  return result;
};

export const validateConfirmPassword = (newPassword, confirmPassword) => {
    const isMatch = newPassword === confirmPassword;

    return {
        isMatch,
        message: isMatch ? '' : 'Confirmation password does not match the new password.'
    };
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
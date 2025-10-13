import React from 'react';

const Button = ({ 
  children, 
  loading, 
  disabled, 
  className = '', 
  type = 'button',
  onClick,
  ...props 
}) => {
  return (
    <button
      type={type}
      className={`btn ${className} ${loading ? 'loading' : ''}`}
      disabled={loading || disabled}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <>
          <span className="spinner"></span>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
import React from 'react';
import './SubmitButton.css';

const SubmitButton = ({
  children,
  type = 'submit',
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  icon,
  className = '',
  onClick,
  ...props
}) => {
  const handleClick = (e) => {
    if (loading || disabled) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size} ${loading ? 'loading' : ''} ${className}`}
      disabled={disabled || loading}
      onClick={handleClick}
      {...props}
    >
      {loading ? (
        <div className="btn-spinner">
          <div className="spinner"></div>
          <span>Loading...</span>
        </div>
      ) : (
        <>
          {icon && <span className="btn-icon">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default SubmitButton;
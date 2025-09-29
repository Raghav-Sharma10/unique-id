import React from 'react';
import { Link } from 'react-router-dom';
import './Unauthorized.css';

const Unauthorized = () => {
  return (
    <div className="unauthorized">
      <div className="container">
        <div className="error-content">
          <div className="error-icon">🚫</div>
          <h1>Access Denied</h1>
          <p>You don't have permission to access this page.</p>
          <div className="error-actions">
            <Link to="/" className="btn btn-primary">Go Home</Link>
            <Link to="/login" className="btn btn-outline">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
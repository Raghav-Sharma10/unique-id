import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <div className="error-content">
          <div className="error-code">404</div>
          <h1>Page Not Found</h1>
          <p>The page you're looking for doesn't exist or has been moved.</p>
          <div className="error-actions">
            <Link to="/" className="btn btn-primary">Go Home</Link>
            <Link to="/dashboard" className="btn btn-outline">Dashboard</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './HomePage.css';

const HomePage = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Digital India Portal</h2>
          </div>
          <div className="nav-menu">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/services" className="nav-link">Services</Link>
            {isAuthenticated ? (
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
            ) : (
              <Link to="/login" className="nav-link">Login</Link>
            )}
          </div>
        </div>
      </nav>

      <main className="main-content">
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to Digital India Portal</h1>
            <p>Your one-stop solution for all government services</p>
            <div className="hero-buttons">
              {isAuthenticated ? (
                <Link to="/dashboard" className="btn btn-primary">Go to Dashboard</Link>
              ) : (
                <>
                  <Link to="/login" className="btn btn-primary">Login</Link>
                  <Link to="/register" className="btn btn-secondary">Register</Link>
                </>
              )}
            </div>
          </div>
        </section>

        <section className="services">
          <div className="container">
            <h2>Our Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>UID Application</h3>
                <p>Apply for your unique identification number</p>
                <Link to="/citizen/apply-uid" className="btn btn-outline">Apply Now</Link>
              </div>
              <div className="service-card">
                <h3>Passport Services</h3>
                <p>Apply for passport and track your application</p>
                <Link to="/citizen/apply-passport" className="btn btn-outline">Apply Now</Link>
              </div>
              <div className="service-card">
                <h3>Driving License</h3>
                <p>Apply for driving license and renewals</p>
                <Link to="/citizen/apply-license" className="btn btn-outline">Apply Now</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Digital India Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      borderTop: '1px solid rgba(59, 130, 246, 0.2)',
      padding: '40px 20px 20px',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
        marginBottom: '30px'
      }}>
        {/* Company Info */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '12px',
              fontSize: '18px',
              fontWeight: 'bold',
              color: 'white'
            }}>
              UID
            </div>
            <span style={{ fontSize: '20px', fontWeight: '600', color: 'white' }}>
              Unique ID System
            </span>
          </div>
          <p style={{ color: '#9ca3af', lineHeight: '1.6', marginBottom: '20px' }}>
            A comprehensive digital identity management system for citizens, 
            government departments, and administrative services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ color: 'white', marginBottom: '20px', fontSize: '18px' }}>Quick Links</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link to="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>Home</Link>
            <Link to="/login" style={{ color: '#9ca3af', textDecoration: 'none' }}>Login</Link>
            <Link to="/register" style={{ color: '#9ca3af', textDecoration: 'none' }}>Register</Link>
            <Link to="/dashboard/citizen" style={{ color: '#9ca3af', textDecoration: 'none' }}>Citizen Dashboard</Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 style={{ color: 'white', marginBottom: '20px', fontSize: '18px' }}>Services</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ color: '#9ca3af' }}>UID Application</span>
            <span style={{ color: '#9ca3af' }}>Passport Services</span>
            <span style={{ color: '#9ca3af' }}>License Applications</span>
            <span style={{ color: '#9ca3af' }}>Crime Records</span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 style={{ color: 'white', marginBottom: '20px', fontSize: '18px' }}>Contact</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ color: '#9ca3af' }}>📧 support@uniqueid.gov</span>
            <span style={{ color: '#9ca3af' }}>📞 +1 (555) 123-4567</span>
            <span style={{ color: '#9ca3af' }}>📍 Government Building, Capital City</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: '1px solid rgba(59, 130, 246, 0.2)',
        paddingTop: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <p style={{ color: '#9ca3af', margin: 0 }}>
          © 2024 Unique ID System. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <span style={{ color: '#9ca3af', fontSize: '14px' }}>Privacy Policy</span>
          <span style={{ color: '#9ca3af', fontSize: '14px' }}>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

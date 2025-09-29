import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{
      background: 'rgba(15, 15, 35, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(59, 130, 246, 0.2)',
      padding: '0 20px',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '70px'
      }}>
        {/* Logo */}
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          color: 'white'
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
            fontWeight: 'bold'
          }}>
            UID
          </div>
          <span style={{ fontSize: '20px', fontWeight: '600' }}>Unique ID System</span>
        </Link>

        {/* Desktop Menu */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '30px'
        }}>
          <Link 
            to="/" 
            style={{
              color: isActive('/') ? '#3b82f6' : '#e5e7eb',
              textDecoration: 'none',
              fontWeight: isActive('/') ? '600' : '400',
              transition: 'color 0.3s ease'
            }}
          >
            Home
          </Link>
          
          {!isAuthenticated ? (
            <>
              <Link 
                to="/login" 
                style={{
                  color: isActive('/login') ? '#3b82f6' : '#e5e7eb',
                  textDecoration: 'none',
                  fontWeight: isActive('/login') ? '600' : '400',
                  transition: 'color 0.3s ease'
                }}
              >
                Login
              </Link>
              <Link 
                to="/register" 
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'transform 0.3s ease'
                }}
              >
                Register
              </Link>
            </>
          ) : (
            <>
              {user?.role === 'citizen' && (
                <Link 
                  to="/dashboard/citizen" 
                  style={{
                    color: isActive('/dashboard/citizen') ? '#3b82f6' : '#e5e7eb',
                    textDecoration: 'none',
                    fontWeight: isActive('/dashboard/citizen') ? '600' : '400'
                  }}
                >
                  Dashboard
                </Link>
              )}
              {user?.role === 'admin' && (
                <Link 
                  to="/dashboard/admin" 
                  style={{
                    color: isActive('/dashboard/admin') ? '#3b82f6' : '#e5e7eb',
                    textDecoration: 'none',
                    fontWeight: isActive('/dashboard/admin') ? '600' : '400'
                  }}
                >
                  Admin Panel
                </Link>
              )}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <span style={{ color: '#9ca3af' }}>
                  Welcome, {user?.firstName || user?.email}
                </span>
                <button
                  onClick={handleLogout}
                  style={{
                    background: 'rgba(239, 68, 68, 0.1)',
                    color: '#ef4444',
                    border: '1px solid #ef4444',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Logout
                </button>
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer'
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{
          background: 'rgba(15, 15, 35, 0.98)',
          padding: '20px',
          borderTop: '1px solid rgba(59, 130, 246, 0.2)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Link to="/" style={{ color: '#e5e7eb', textDecoration: 'none' }}>Home</Link>
            {!isAuthenticated ? (
              <>
                <Link to="/login" style={{ color: '#e5e7eb', textDecoration: 'none' }}>Login</Link>
                <Link to="/register" style={{ color: '#e5e7eb', textDecoration: 'none' }}>Register</Link>
              </>
            ) : (
              <>
                {user?.role === 'citizen' && (
                  <Link to="/dashboard/citizen" style={{ color: '#e5e7eb', textDecoration: 'none' }}>
                    Dashboard
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  style={{
                    background: 'rgba(239, 68, 68, 0.1)',
                    color: '#ef4444',
                    border: '1px solid #ef4444',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    alignSelf: 'flex-start'
                  }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

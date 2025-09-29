import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Dashboard.css';

const CitizenDashboard = () => {
  const { user, logout } = useAuth();
  const [applications, setApplications] = useState([]);
  const [stats, setStats] = useState({
    totalApplications: 0,
    pendingApplications: 0,
    approvedApplications: 0,
    rejectedApplications: 0
  });

  useEffect(() => {
    // Mock data for demonstration
    const mockApplications = [
      {
        id: 1,
        type: 'UID',
        status: 'pending',
        submittedDate: '2024-01-15',
        lastUpdated: '2024-01-20'
      },
      {
        id: 2,
        type: 'Passport',
        status: 'approved',
        submittedDate: '2024-01-10',
        lastUpdated: '2024-01-18'
      },
      {
        id: 3,
        type: 'Driving License',
        status: 'rejected',
        submittedDate: '2024-01-05',
        lastUpdated: '2024-01-12'
      }
    ];

    setApplications(mockApplications);
    
    const newStats = {
      totalApplications: mockApplications.length,
      pendingApplications: mockApplications.filter(app => app.status === 'pending').length,
      approvedApplications: mockApplications.filter(app => app.status === 'approved').length,
      rejectedApplications: mockApplications.filter(app => app.status === 'rejected').length
    };
    
    setStats(newStats);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return '#f59e0b';
      case 'approved': return '#10b981';
      case 'rejected': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'Pending Review';
      case 'approved': return 'Approved';
      case 'rejected': return 'Rejected';
      default: return 'Unknown';
    }
  };

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <div className="nav-container">
          <h2>Citizen Dashboard</h2>
          <div className="nav-actions">
            <span>Welcome, {user?.firstName} {user?.lastName}</span>
            <button onClick={logout} className="btn btn-outline">Logout</button>
          </div>
        </div>
      </nav>

      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>Welcome back, {user?.firstName}!</h1>
          <p>Manage your government service applications</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">📋</div>
            <div className="stat-content">
              <h3>{stats.totalApplications}</h3>
              <p>Total Applications</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⏳</div>
            <div className="stat-content">
              <h3>{stats.pendingApplications}</h3>
              <p>Pending</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h3>{stats.approvedApplications}</h3>
              <p>Approved</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">❌</div>
            <div className="stat-content">
              <h3>{stats.rejectedApplications}</h3>
              <p>Rejected</p>
            </div>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="quick-actions">
            <h2>Quick Actions</h2>
            <div className="action-grid">
              <Link to="/citizen/apply-uid" className="action-card">
                <div className="action-icon">🆔</div>
                <h3>Apply for UID</h3>
                <p>Get your unique identification number</p>
              </Link>
              <Link to="/citizen/apply-passport" className="action-card">
                <div className="action-icon">📘</div>
                <h3>Apply for Passport</h3>
                <p>Apply for passport services</p>
              </Link>
              <Link to="/citizen/apply-license" className="action-card">
                <div className="action-icon">🚗</div>
                <h3>Apply for License</h3>
                <p>Get your driving license</p>
              </Link>
              <Link to="/citizen/status" className="action-card">
                <div className="action-icon">📊</div>
                <h3>Check Status</h3>
                <p>Track your applications</p>
              </Link>
            </div>
          </div>

          <div className="recent-applications">
            <h2>Recent Applications</h2>
            <div className="applications-list">
              {applications.length > 0 ? (
                applications.map(application => (
                  <div key={application.id} className="application-item">
                    <div className="application-info">
                      <h4>{application.type} Application</h4>
                      <p>Submitted: {new Date(application.submittedDate).toLocaleDateString()}</p>
                    </div>
                    <div className="application-status">
                      <span 
                        className="status-badge"
                        style={{ backgroundColor: getStatusColor(application.status) }}
                      >
                        {getStatusText(application.status)}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-applications">
                  <p>No applications found. Start by applying for a service!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CitizenDashboard;
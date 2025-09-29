import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Dashboard.css';

const OfficerDashboard = () => {
  const { user, logout } = useAuth();
  const [stats, setStats] = useState({
    assignedApplications: 0,
    completedToday: 0,
    pendingReview: 0,
    overdueApplications: 0
  });

  useEffect(() => {
    // Mock data for demonstration
    const mockStats = {
      assignedApplications: 25,
      completedToday: 8,
      pendingReview: 12,
      overdueApplications: 3
    };
    
    setStats(mockStats);
  }, []);

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <div className="nav-container">
          <h2>Officer Dashboard</h2>
          <div className="nav-actions">
            <span>Welcome, {user?.firstName} {user?.lastName}</span>
            <button onClick={logout} className="btn btn-outline">Logout</button>
          </div>
        </div>
      </nav>

      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>Officer Control Panel</h1>
          <p>Review and process applications assigned to you</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">📋</div>
            <div className="stat-content">
              <h3>{stats.assignedApplications}</h3>
              <p>Assigned Applications</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h3>{stats.completedToday}</h3>
              <p>Completed Today</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⏳</div>
            <div className="stat-content">
              <h3>{stats.pendingReview}</h3>
              <p>Pending Review</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⚠️</div>
            <div className="stat-content">
              <h3>{stats.overdueApplications}</h3>
              <p>Overdue</p>
            </div>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="officer-actions">
            <h2>Department Actions</h2>
            <div className="action-grid">
              <Link to="/dept/passport" className="action-card">
                <div className="action-icon">📘</div>
                <h3>Passport Department</h3>
                <p>Review passport applications</p>
              </Link>
              <Link to="/dept/rta" className="action-card">
                <div className="action-icon">🚗</div>
                <h3>RTA Department</h3>
                <p>Process driving license applications</p>
              </Link>
              <Link to="/dept/crime" className="action-card">
                <div className="action-icon">🚨</div>
                <h3>Crime Department</h3>
                <p>Handle crime-related applications</p>
              </Link>
            </div>
          </div>

          <div className="assigned-applications">
            <h2>Your Assigned Applications</h2>
            <div className="applications-list">
              <div className="application-item">
                <div className="application-info">
                  <h4>Passport Application #P001</h4>
                  <p>Applicant: John Doe | Submitted: 2024-01-15</p>
                </div>
                <div className="application-actions">
                  <button className="btn btn-primary btn-sm">Review</button>
                  <span className="priority high">High Priority</span>
                </div>
              </div>
              <div className="application-item">
                <div className="application-info">
                  <h4>Driving License #DL002</h4>
                  <p>Applicant: Jane Smith | Submitted: 2024-01-14</p>
                </div>
                <div className="application-actions">
                  <button className="btn btn-primary btn-sm">Review</button>
                  <span className="priority medium">Medium Priority</span>
                </div>
              </div>
              <div className="application-item">
                <div className="application-info">
                  <h4>UID Application #UID003</h4>
                  <p>Applicant: Mike Johnson | Submitted: 2024-01-13</p>
                </div>
                <div className="application-actions">
                  <button className="btn btn-primary btn-sm">Review</button>
                  <span className="priority low">Low Priority</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OfficerDashboard;
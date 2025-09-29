import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Dashboard.css';

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const [stats, setStats] = useState({
    totalCitizens: 0,
    pendingApplications: 0,
    approvedApplications: 0,
    rejectedApplications: 0
  });

  useEffect(() => {
    // Mock data for demonstration
    const mockStats = {
      totalCitizens: 1250,
      pendingApplications: 45,
      approvedApplications: 320,
      rejectedApplications: 15
    };
    
    setStats(mockStats);
  }, []);

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <div className="nav-container">
          <h2>Admin Dashboard</h2>
          <div className="nav-actions">
            <span>Welcome, {user?.firstName} {user?.lastName}</span>
            <button onClick={logout} className="btn btn-outline">Logout</button>
          </div>
        </div>
      </nav>

      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>Admin Control Panel</h1>
          <p>Manage the entire system and oversee all operations</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-content">
              <h3>{stats.totalCitizens.toLocaleString()}</h3>
              <p>Total Citizens</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⏳</div>
            <div className="stat-content">
              <h3>{stats.pendingApplications}</h3>
              <p>Pending Applications</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h3>{stats.approvedApplications}</h3>
              <p>Approved Applications</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">❌</div>
            <div className="stat-content">
              <h3>{stats.rejectedApplications}</h3>
              <p>Rejected Applications</p>
            </div>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="admin-actions">
            <h2>Administrative Actions</h2>
            <div className="action-grid">
              <Link to="/admin/citizens" className="action-card">
                <div className="action-icon">👥</div>
                <h3>Manage Citizens</h3>
                <p>View and manage citizen accounts</p>
              </Link>
              <Link to="/admin/verify-license" className="action-card">
                <div className="action-icon">🚗</div>
                <h3>Verify Licenses</h3>
                <p>Review and approve driving licenses</p>
              </Link>
              <Link to="/admin/verify-passport" className="action-card">
                <div className="action-icon">📘</div>
                <h3>Verify Passports</h3>
                <p>Review and approve passport applications</p>
              </Link>
              <Link to="/admin/reports" className="action-card">
                <div className="action-icon">📊</div>
                <h3>Generate Reports</h3>
                <p>View system analytics and reports</p>
              </Link>
            </div>
          </div>

          <div className="recent-activity">
            <h2>Recent System Activity</h2>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">✅</div>
                <div className="activity-content">
                  <p><strong>John Doe</strong> - Passport application approved</p>
                  <span>2 hours ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">📝</div>
                <div className="activity-content">
                  <p><strong>Jane Smith</strong> - New UID application submitted</p>
                  <span>4 hours ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">🚗</div>
                <div className="activity-content">
                  <p><strong>Mike Johnson</strong> - Driving license application pending review</p>
                  <span>6 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
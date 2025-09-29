import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './ApplicationStatus.css';

const ApplicationStatus = () => {
  const { user } = useAuth();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data
    const mockApplications = [
      {
        id: 1,
        type: 'UID',
        applicationId: 'UID2024001',
        status: 'pending',
        submittedDate: '2024-01-15',
        lastUpdated: '2024-01-20',
        estimatedCompletion: '2024-02-15'
      },
      {
        id: 2,
        type: 'Passport',
        applicationId: 'PP2024001',
        status: 'approved',
        submittedDate: '2024-01-10',
        lastUpdated: '2024-01-18',
        estimatedCompletion: '2024-01-25'
      },
      {
        id: 3,
        type: 'Driving License',
        applicationId: 'DL2024001',
        status: 'rejected',
        submittedDate: '2024-01-05',
        lastUpdated: '2024-01-12',
        estimatedCompletion: null,
        rejectionReason: 'Incomplete documentation'
      }
    ];

    setTimeout(() => {
      setApplications(mockApplications);
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return '#f59e0b';
      case 'approved': return '#10b981';
      case 'rejected': return '#ef4444';
      case 'in_progress': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'Pending Review';
      case 'approved': return 'Approved';
      case 'rejected': return 'Rejected';
      case 'in_progress': return 'In Progress';
      default: return 'Unknown';
    }
  };

  if (loading) {
    return (
      <div className="application-status">
        <div className="container">
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading your applications...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="application-status">
      <div className="container">
        <div className="page-header">
          <h1>Application Status</h1>
          <p>Track the status of your government service applications</p>
        </div>

        <div className="applications-list">
          {applications.length > 0 ? (
            applications.map(application => (
              <div key={application.id} className="application-card">
                <div className="application-header">
                  <div className="application-info">
                    <h3>{application.type} Application</h3>
                    <p className="application-id">ID: {application.applicationId}</p>
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

                <div className="application-details">
                  <div className="detail-row">
                    <span className="label">Submitted:</span>
                    <span className="value">{new Date(application.submittedDate).toLocaleDateString()}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Last Updated:</span>
                    <span className="value">{new Date(application.lastUpdated).toLocaleDateString()}</span>
                  </div>
                  {application.estimatedCompletion && (
                    <div className="detail-row">
                      <span className="label">Estimated Completion:</span>
                      <span className="value">{new Date(application.estimatedCompletion).toLocaleDateString()}</span>
                    </div>
                  )}
                  {application.rejectionReason && (
                    <div className="detail-row">
                      <span className="label">Rejection Reason:</span>
                      <span className="value error">{application.rejectionReason}</span>
                    </div>
                  )}
                </div>

                <div className="application-actions">
                  <button className="btn btn-outline">View Details</button>
                  {application.status === 'rejected' && (
                    <button className="btn btn-primary">Reapply</button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="no-applications">
              <div className="no-applications-icon">📋</div>
              <h3>No Applications Found</h3>
              <p>You haven't submitted any applications yet.</p>
              <Link to="/citizen/apply-uid" className="btn btn-primary">Apply Now</Link>
            </div>
          )}
        </div>

        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <Link to="/citizen/apply-uid" className="action-btn">
              <span className="icon">🆔</span>
              Apply for UID
            </Link>
            <Link to="/citizen/apply-passport" className="action-btn">
              <span className="icon">📘</span>
              Apply for Passport
            </Link>
            <Link to="/citizen/apply-license" className="action-btn">
              <span className="icon">🚗</span>
              Apply for License
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationStatus;
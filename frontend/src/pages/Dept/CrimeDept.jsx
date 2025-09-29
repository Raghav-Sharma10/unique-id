import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import './CrimeDept.css';

const CrimeDept = () => {
  const { user } = useAuth();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data
    const mockApplications = [
      {
        id: 1,
        applicantName: 'John Doe',
        applicationId: 'CR2024001',
        submittedDate: '2024-01-15',
        status: 'pending',
        crimeType: 'Theft',
        priority: 'high'
      },
      {
        id: 2,
        applicantName: 'Jane Smith',
        applicationId: 'CR2024002',
        submittedDate: '2024-01-14',
        status: 'in_progress',
        crimeType: 'Fraud',
        priority: 'normal'
      }
    ];

    setTimeout(() => {
      setApplications(mockApplications);
      setLoading(false);
    }, 1000);
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setApplications(applications.map(app => 
      app.id === id ? { 
        ...app, 
        status: newStatus,
        updatedBy: user?.firstName + ' ' + user?.lastName,
        updatedDate: new Date().toISOString().split('T')[0]
      } : app
    ));
  };

  if (loading) {
    return (
      <div className="crime-dept">
        <div className="container">
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading applications...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="crime-dept">
      <div className="container">
        <div className="page-header">
          <h1>Crime Department</h1>
          <p>Manage crime-related applications and processing</p>
        </div>

        <div className="applications-list">
          {applications.map(application => (
            <div key={application.id} className="application-card">
              <div className="application-header">
                <div className="application-info">
                  <h3>{application.applicantName}</h3>
                  <p className="application-id">ID: {application.applicationId}</p>
                  <p className="application-date">
                    Submitted: {new Date(application.submittedDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="application-status">
                  <span className={`status-badge ${application.status}`}>
                    {application.status}
                  </span>
                  <span className={`priority-badge ${application.priority}`}>
                    {application.priority}
                  </span>
                </div>
              </div>

              <div className="application-details">
                <div className="detail-item">
                  <label>Crime Type:</label>
                  <span>{application.crimeType}</span>
                </div>
                {application.updatedBy && (
                  <div className="detail-item">
                    <label>Last Updated by:</label>
                    <span>{application.updatedBy}</span>
                  </div>
                )}
              </div>

              <div className="application-actions">
                <button 
                  onClick={() => handleStatusChange(application.id, 'in_progress')}
                  className="btn btn-primary"
                  disabled={application.status === 'in_progress'}
                >
                  Start Processing
                </button>
                <button 
                  onClick={() => handleStatusChange(application.id, 'completed')}
                  className="btn btn-success"
                  disabled={application.status === 'completed'}
                >
                  Mark Complete
                </button>
                <button 
                  onClick={() => handleStatusChange(application.id, 'rejected')}
                  className="btn btn-danger"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrimeDept;
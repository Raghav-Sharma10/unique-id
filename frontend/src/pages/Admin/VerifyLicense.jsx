import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import './VerifyLicense.css';

const VerifyLicense = () => {
  const { user } = useAuth();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data
    const mockApplications = [
      {
        id: 1,
        applicantName: 'John Doe',
        applicationId: 'DL2024001',
        submittedDate: '2024-01-15',
        status: 'pending',
        vehicleType: 'Car',
        documents: ['Aadhar Card', 'Medical Certificate', 'Address Proof']
      },
      {
        id: 2,
        applicantName: 'Jane Smith',
        applicationId: 'DL2024002',
        submittedDate: '2024-01-14',
        status: 'pending',
        vehicleType: 'Motorcycle',
        documents: ['Aadhar Card', 'Medical Certificate', 'Address Proof']
      }
    ];

    setTimeout(() => {
      setApplications(mockApplications);
      setLoading(false);
    }, 1000);
  }, []);

  const handleVerify = (id, action) => {
    setApplications(applications.map(app => 
      app.id === id ? { 
        ...app, 
        status: action === 'approve' ? 'approved' : 'rejected',
        verifiedBy: user?.firstName + ' ' + user?.lastName,
        verifiedDate: new Date().toISOString().split('T')[0]
      } : app
    ));
  };

  if (loading) {
    return (
      <div className="verify-license">
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
    <div className="verify-license">
      <div className="container">
        <div className="page-header">
          <h1>Verify Driving License Applications</h1>
          <p>Review and verify driving license applications</p>
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
                </div>
              </div>

              <div className="application-details">
                <div className="detail-item">
                  <label>Vehicle Type:</label>
                  <span>{application.vehicleType}</span>
                </div>
                <div className="detail-item">
                  <label>Documents Submitted:</label>
                  <ul>
                    {application.documents.map((doc, index) => (
                      <li key={index}>{doc}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="application-actions">
                {application.status === 'pending' ? (
                  <>
                    <button 
                      onClick={() => handleVerify(application.id, 'approve')}
                      className="btn btn-success"
                    >
                      Approve
                    </button>
                    <button 
                      onClick={() => handleVerify(application.id, 'reject')}
                      className="btn btn-danger"
                    >
                      Reject
                    </button>
                  </>
                ) : (
                  <div className="verified-info">
                    <p>Verified by: {application.verifiedBy}</p>
                    <p>Date: {new Date(application.verifiedDate).toLocaleDateString()}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerifyLicense;
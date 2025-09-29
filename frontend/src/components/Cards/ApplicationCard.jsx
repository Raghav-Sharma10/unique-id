import React from 'react';
import './ApplicationCard.css';

const ApplicationCard = ({
  application,
  onView,
  onApprove,
  onReject,
  onEdit,
  showActions = true,
  className = ''
}) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'approved': return 'success';
      case 'pending': return 'warning';
      case 'rejected': return 'error';
      case 'under_review': return 'info';
      default: return 'muted';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high': return 'error';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'muted';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className={`application-card ${className}`}>
      <div className="card-header">
        <div className="application-info">
          <h3 className="application-title">{application.title || application.type}</h3>
          <p className="application-id">ID: {application.id}</p>
        </div>
        <div className="status-badges">
          <span className={`status-badge status-${getStatusColor(application.status)}`}>
            {application.status}
          </span>
          {application.priority && (
            <span className={`priority-badge priority-${getPriorityColor(application.priority)}`}>
              {application.priority}
            </span>
          )}
        </div>
      </div>

      <div className="card-content">
        <div className="application-details">
          <div className="detail-item">
            <span className="detail-label">Applicant:</span>
            <span className="detail-value">{application.applicantName || application.name}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Submitted:</span>
            <span className="detail-value">{formatDate(application.submittedDate || application.createdAt)}</span>
          </div>
          {application.processedDate && (
            <div className="detail-item">
              <span className="detail-label">Processed:</span>
              <span className="detail-value">{formatDate(application.processedDate)}</span>
            </div>
          )}
          {application.documents && (
            <div className="detail-item">
              <span className="detail-label">Documents:</span>
              <span className="detail-value">{application.documents} files</span>
            </div>
          )}
        </div>

        {application.description && (
          <div className="application-description">
            <p>{application.description}</p>
          </div>
        )}

        {application.notes && (
          <div className="application-notes">
            <h4>Notes:</h4>
            <p>{application.notes}</p>
          </div>
        )}
      </div>

      {showActions && (
        <div className="card-actions">
          <button 
            className="btn btn-outline btn-sm"
            onClick={() => onView && onView(application)}
          >
            View Details
          </button>
          
          {application.status === 'pending' && (
            <>
              <button 
                className="btn btn-success btn-sm"
                onClick={() => onApprove && onApprove(application)}
              >
                Approve
              </button>
              <button 
                className="btn btn-danger btn-sm"
                onClick={() => onReject && onReject(application)}
              >
                Reject
              </button>
            </>
          )}
          
          {application.status === 'rejected' && (
            <button 
              className="btn btn-outline btn-sm"
              onClick={() => onEdit && onEdit(application)}
            >
              Edit & Resubmit
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ApplicationCard;

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import './Reports.css';

const Reports = () => {
  const { user } = useAuth();
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data
    const mockReports = [
      {
        id: 1,
        title: 'Monthly Application Summary',
        type: 'summary',
        generatedDate: '2024-01-20',
        status: 'ready',
        description: 'Overview of all applications processed this month'
      },
      {
        id: 2,
        title: 'Citizen Registration Report',
        type: 'registration',
        generatedDate: '2024-01-19',
        status: 'ready',
        description: 'New citizen registrations and account activations'
      },
      {
        id: 3,
        title: 'Department Performance Analysis',
        type: 'performance',
        generatedDate: '2024-01-18',
        status: 'generating',
        description: 'Performance metrics for all departments'
      }
    ];

    setTimeout(() => {
      setReports(mockReports);
      setLoading(false);
    }, 1000);
  }, []);

  const handleGenerateReport = (type) => {
    // Simulate report generation
    const newReport = {
      id: Date.now(),
      title: `New ${type} Report`,
      type: type,
      generatedDate: new Date().toISOString().split('T')[0],
      status: 'generating',
      description: `Generated ${type} report`
    };
    
    setReports([newReport, ...reports]);
    
    // Simulate completion
    setTimeout(() => {
      setReports(reports.map(r => 
        r.id === newReport.id ? { ...r, status: 'ready' } : r
      ));
    }, 3000);
  };

  if (loading) {
    return (
      <div className="reports">
        <div className="container">
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading reports...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="reports">
      <div className="container">
        <div className="page-header">
          <h1>Reports & Analytics</h1>
          <p>Generate and view system reports and analytics</p>
        </div>

        <div className="report-actions">
          <h2>Generate New Report</h2>
          <div className="action-buttons">
            <button 
              onClick={() => handleGenerateReport('summary')}
              className="btn btn-primary"
            >
              📊 Application Summary
            </button>
            <button 
              onClick={() => handleGenerateReport('registration')}
              className="btn btn-primary"
            >
              👥 Registration Report
            </button>
            <button 
              onClick={() => handleGenerateReport('performance')}
              className="btn btn-primary"
            >
              📈 Performance Analysis
            </button>
            <button 
              onClick={() => handleGenerateReport('audit')}
              className="btn btn-primary"
            >
              🔍 Audit Report
            </button>
          </div>
        </div>

        <div className="reports-list">
          <h2>Recent Reports</h2>
          <div className="reports-grid">
            {reports.map(report => (
              <div key={report.id} className="report-card">
                <div className="report-header">
                  <h3>{report.title}</h3>
                  <span className={`status-badge ${report.status}`}>
                    {report.status}
                  </span>
                </div>
                <p className="report-description">{report.description}</p>
                <div className="report-meta">
                  <span className="report-date">
                    Generated: {new Date(report.generatedDate).toLocaleDateString()}
                  </span>
                  <span className="report-type">{report.type}</span>
                </div>
                <div className="report-actions">
                  {report.status === 'ready' ? (
                    <>
                      <button className="btn btn-outline btn-sm">View</button>
                      <button className="btn btn-primary btn-sm">Download</button>
                    </>
                  ) : (
                    <div className="generating">
                      <div className="spinner-small"></div>
                      <span>Generating...</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
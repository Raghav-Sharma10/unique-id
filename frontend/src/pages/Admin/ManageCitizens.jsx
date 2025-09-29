import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import './ManageCitizens.css';

const ManageCitizens = () => {
  const { user } = useAuth();
  const [citizens, setCitizens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  useEffect(() => {
    // Mock data
    const mockCitizens = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        role: 'citizen',
        status: 'active',
        joinDate: '2024-01-15',
        applications: 3
      },
      {
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane@example.com',
        role: 'citizen',
        status: 'active',
        joinDate: '2024-01-10',
        applications: 1
      },
      {
        id: 3,
        firstName: 'Mike',
        lastName: 'Johnson',
        email: 'mike@example.com',
        role: 'citizen',
        status: 'inactive',
        joinDate: '2024-01-05',
        applications: 0
      }
    ];

    setTimeout(() => {
      setCitizens(mockCitizens);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredCitizens = citizens.filter(citizen => {
    const matchesSearch = citizen.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         citizen.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         citizen.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || citizen.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const handleStatusChange = (id, newStatus) => {
    setCitizens(citizens.map(citizen => 
      citizen.id === id ? { ...citizen, status: newStatus } : citizen
    ));
  };

  if (loading) {
    return (
      <div className="manage-citizens">
        <div className="container">
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading citizens...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="manage-citizens">
      <div className="container">
        <div className="page-header">
          <h1>Manage Citizens</h1>
          <p>View and manage citizen accounts and applications</p>
        </div>

        <div className="filters">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search citizens..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-select">
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
            >
              <option value="all">All Roles</option>
              <option value="citizen">Citizens</option>
              <option value="admin">Admins</option>
            </select>
          </div>
        </div>

        <div className="citizens-table">
          <div className="table-header">
            <div className="header-cell">Name</div>
            <div className="header-cell">Email</div>
            <div className="header-cell">Role</div>
            <div className="header-cell">Status</div>
            <div className="header-cell">Applications</div>
            <div className="header-cell">Join Date</div>
            <div className="header-cell">Actions</div>
          </div>

          {filteredCitizens.map(citizen => (
            <div key={citizen.id} className="table-row">
              <div className="table-cell">
                <div className="citizen-info">
                  <div className="citizen-avatar">
                    {citizen.firstName[0]}{citizen.lastName[0]}
                  </div>
                  <div>
                    <div className="citizen-name">{citizen.firstName} {citizen.lastName}</div>
                    <div className="citizen-id">ID: {citizen.id}</div>
                  </div>
                </div>
              </div>
              <div className="table-cell">{citizen.email}</div>
              <div className="table-cell">
                <span className="role-badge">{citizen.role}</span>
              </div>
              <div className="table-cell">
                <span className={`status-badge ${citizen.status}`}>
                  {citizen.status}
                </span>
              </div>
              <div className="table-cell">{citizen.applications}</div>
              <div className="table-cell">
                {new Date(citizen.joinDate).toLocaleDateString()}
              </div>
              <div className="table-cell">
                <div className="action-buttons">
                  <button className="btn btn-sm btn-outline">View</button>
                  <button 
                    className="btn btn-sm btn-primary"
                    onClick={() => handleStatusChange(citizen.id, 
                      citizen.status === 'active' ? 'inactive' : 'active'
                    )}
                  >
                    {citizen.status === 'active' ? 'Deactivate' : 'Activate'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCitizens.length === 0 && (
          <div className="no-citizens">
            <p>No citizens found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageCitizens;
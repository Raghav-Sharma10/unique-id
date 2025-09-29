import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

// Import all pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import NotFound from './pages/NotFound';
import Unauthorized from './pages/Unauthorized';

// Import dashboards
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import CitizenDashboard from './pages/Dashboard/CitizenDashboard';
import OfficerDashboard from './pages/Dashboard/OfficerDashboard';

// Import citizen pages
import ApplyUID from './pages/Citizen/ApplyUID';
import ApplyPassport from './pages/Citizen/ApplyPassport';
import ApplyLicense from './pages/Citizen/ApplyLicense';
import ApplicationStatus from './pages/Citizen/ApplicationStatus';
import Profile from './pages/Citizen/Profile';

// Import admin pages
import ManageCitizens from './pages/Admin/ManageCitizens';
import Reports from './pages/Admin/Reports';
import VerifyLicense from './pages/Admin/VerifyLicense';
import VerifyPassport from './pages/Admin/VerifyPassport';

// Import department pages
import PassportDept from './pages/Dept/PassportDept';
import RTADepartment from './pages/Dept/RTADepartment';
import CrimeDept from './pages/Dept/CrimeDept';

// Import components
import ProtectedRoute from './components/ProtectedRoute';

const AppRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          border: '4px solid #3b82f6',
          borderTop: '4px solid transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          marginBottom: '20px'
        }}></div>
        <h2 style={{ color: 'white', margin: 0 }}>Loading...</h2>
      </div>
    );
  }

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/404" element={<NotFound />} />

      {/* Protected Routes */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          {user?.role === 'admin' ? <AdminDashboard /> :
           user?.role === 'citizen' ? <CitizenDashboard /> :
           <OfficerDashboard />}
        </ProtectedRoute>
      } />

      {/* Citizen Routes */}
      <Route path="/citizen/apply-uid" element={
        <ProtectedRoute requiredRole="citizen">
          <ApplyUID />
        </ProtectedRoute>
      } />
      <Route path="/citizen/apply-passport" element={
        <ProtectedRoute requiredRole="citizen">
          <ApplyPassport />
        </ProtectedRoute>
      } />
      <Route path="/citizen/apply-license" element={
        <ProtectedRoute requiredRole="citizen">
          <ApplyLicense />
        </ProtectedRoute>
      } />
      <Route path="/citizen/status" element={
        <ProtectedRoute requiredRole="citizen">
          <ApplicationStatus />
        </ProtectedRoute>
      } />
      <Route path="/citizen/profile" element={
        <ProtectedRoute requiredRole="citizen">
          <Profile />
        </ProtectedRoute>
      } />

      {/* Admin Routes */}
      <Route path="/admin/citizens" element={
        <ProtectedRoute requiredRole="admin">
          <ManageCitizens />
        </ProtectedRoute>
      } />
      <Route path="/admin/reports" element={
        <ProtectedRoute requiredRole="admin">
          <Reports />
        </ProtectedRoute>
      } />
      <Route path="/admin/verify-license" element={
        <ProtectedRoute requiredRole="admin">
          <VerifyLicense />
        </ProtectedRoute>
      } />
      <Route path="/admin/verify-passport" element={
        <ProtectedRoute requiredRole="admin">
          <VerifyPassport />
        </ProtectedRoute>
      } />

      {/* Department Routes */}
      <Route path="/dept/passport" element={
        <ProtectedRoute requiredRole="passport_dept">
          <PassportDept />
        </ProtectedRoute>
      } />
      <Route path="/dept/rta" element={
        <ProtectedRoute requiredRole="rta_dept">
          <RTADepartment />
        </ProtectedRoute>
      } />
      <Route path="/dept/crime" element={
        <ProtectedRoute requiredRole="crime_dept">
          <CrimeDept />
        </ProtectedRoute>
      } />

      {/* Catch all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
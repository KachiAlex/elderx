import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/config';
import Layout from './components/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Medications from './pages/Medications';
import VitalSigns from './pages/VitalSigns';
import Appointments from './pages/Appointments';
import Profile from './pages/Profile';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Routes>
      {/* Public routes */}
      <Route 
        path="/login" 
        element={user ? <Navigate to="/dashboard" replace /> : <Login />} 
      />
      <Route 
        path="/signup" 
        element={user ? <Navigate to="/dashboard" replace /> : <Signup />} 
      />
      
      {/* Protected routes */}
      <Route 
        path="/" 
        element={user ? <Layout /> : <Navigate to="/login" replace />} 
      >
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="medications" element={<Medications />} />
        <Route path="vital-signs" element={<VitalSigns />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      
      {/* Catch all route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

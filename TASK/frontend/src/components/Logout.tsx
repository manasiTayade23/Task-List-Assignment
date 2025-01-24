// src/components/Logout.tsx
import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout(); // Call logout function
    navigate('/login'); // Redirect to login page after logout
  }, [logout, navigate]);

  return <div>Logging out...</div>;
};

export default Logout;
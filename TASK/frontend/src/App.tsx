// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import ProtectedRoute from './components/ProtectedRoute';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ViewTask from 'components/ViewTask';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to login */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/tasks" element={<ProtectedRoute element={<TaskList />} />} />
        <Route path="/task-form" element={<ProtectedRoute element={<TaskForm />} />} />
        <Route path="/tasks/view/:taskId" element={<ViewTask />} />
      </Routes>
    </Router>
  );
};

export default App;
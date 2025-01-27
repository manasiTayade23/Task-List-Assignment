import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('OPEN');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post('/tasks/createTask', { title, description, status }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate('/tasks'); // Redirect to task list after creating a task
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Create a New Task</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          required
          style={styles.input}
          onFocus={(e) => e.target.style.borderColor = '#4F46E5'}
          onBlur={(e) => e.target.style.borderColor = '#ddd'}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
          required
          style={styles.textarea}
          onFocus={(e) => e.target.style.borderColor = '#4F46E5'}
          onBlur={(e) => e.target.style.borderColor = '#ddd'}
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={styles.select}
        >
          <option value="Open">Open</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Finished">Finished</option>
        </select>
        <button type="submit" style={styles.submitButton}>Create Task</button>
      </form>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f4f8',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    boxSizing: 'border-box',
  },
  header: {
    fontSize: '2rem',
    color: '#4F46E5',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  form: {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  input: {
    padding: '1rem',
    fontSize: '1rem',
    border: '2px solid #ddd',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  textarea: {
    padding: '1rem',
    fontSize: '1rem',
    border: '2px solid #ddd',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    height: '150px',
  },
  select: {
    padding: '1rem',
    fontSize: '1rem',
    border: '2px solid #ddd',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  submitButton: {
    padding: '1rem 2rem',
    fontSize: '1rem',
    backgroundColor: '#4F46E5',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default TaskForm;

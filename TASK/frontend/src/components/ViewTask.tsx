import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ViewTask: React.FC = () => {
  const { taskId } = useParams<{ taskId: string }>(); // Extract taskId from the URL parameters
  const [task, setTask] = useState<any>(null); // State to store the task data
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch task details when component is mounted
    const fetchTask = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(`/tasks/getTask/${taskId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTask(response.data); // Set task data from API response
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    };

    if (taskId) {
      fetchTask();
    }
  }, [taskId]);

  // If the task is not found or still loading, show loading or an error message
  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Task Details</h2>
      <div style={styles.taskDetail}>
        <div style={styles.field}>
          <strong>Title:</strong> {task.title}
        </div>
        <div style={styles.field}>
          <strong>Description:</strong> {task.description}
        </div>
        <div style={styles.field}>
          <strong>Status:</strong> {task.status}
        </div>
      </div>
      <button onClick={() => navigate('/tasks')} style={styles.button}>
        Back to Task List
      </button>
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
  taskDetail: {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  field: {
    marginBottom: '1rem',
    fontSize: '1.2rem',
  },
  button: {
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

export default ViewTask;

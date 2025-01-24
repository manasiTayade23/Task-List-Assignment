// src/components/TaskList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the Task type
interface Task {
  id: number; // or string, depending on your backend
  title: string;
  description: string; // Optional, if you want to display it
  status: string;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // Use the Task type for the state

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('/tasks', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTasks(response.data); // Assuming response.data is an array of tasks
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Task List</h1>
      <ul style={styles.list}>
        {tasks.map((task) => (
          <li key={task.id} style={styles.taskItem}>
            <div style={styles.taskContent}>
              <h3 style={styles.title}>{task.title}</h3>
              <p style={styles.status}>{task.status}</p>
            </div>
            <button style={styles.actionButton}>View Task</button>
          </li>
        ))}
      </ul>
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
  },
  header: {
    fontSize: '2rem',
    color: '#4F46E5',
    marginBottom: '2rem',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
    width: '100%',
    maxWidth: '600px',
  },
  taskItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: '1rem',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  taskItemHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 12px rgba(0, 0, 0, 0.15)',
  },
  taskContent: {
    flex: 1,
  },
  title: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '0.5rem',
  },
  status: {
    fontSize: '1rem',
    color: '#4F46E5',
    fontWeight: 'bold',
  },
  actionButton: {
    backgroundColor: '#4F46E5',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  },
};

export default TaskList;


# Task Management Application

A full-stack task management application built with React (TypeScript) for the frontend and Node.js for the backend.

## Features

- User Authentication (Login/Register)
- Task Management (Create, Read, Update, Delete)
- JWT-based Authentication
- Responsive Design

## Tech Stack

### Frontend
- React
- TypeScript
- React Router
- Axios
- Local Storage for token management

### Backend
- Node.js
- Express
- JWT Authentication
- PostgreSQL Database

## Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL

## Installation

### Frontend Setup
bash
cd frontend
npm install

### Backend Setupbash
cd backend
npm install


## Running the Application

### Start Frontend
bash
cd frontend
npm start

The frontend will run on http://localhost:3001

### Start Backendbash
cd backend
npm start

he backend will run on http://localhost:3000## Authentication Flow

1. User logs in through the frontend
2. Backend validates credentials and returns JWT token
3. Frontend stores token in localStorage
4. Token is included in Authorization header for subsequent requests


## API Endpoints

### Authentication
- POST /auth/login - Login user
- POST /auth/register - Register new user

### Tasks
- GET /tasks - Get all tasks
- POST /tasks - Create new task
- PUT /tasks/:id - Update task
- DELETE /tasks/:id - Delete task

## Authentication Flow

1. User logs in through the frontend
2. Backend validates credentials and returns JWT token
3. Frontend stores token in localStorage
4. Token is included in Authorization header for subsequent requests

import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Check if there's an existing token in localStorage and redirect to tasks page
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/tasks");
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await login(email, password);

    if (response && "access_token" in response) {
      const access_token = response.access_token;
      localStorage.setItem("authToken", access_token);
      navigate("/tasks");
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #6a11cb, #2575fc)", // Gradient background
      padding: "2rem",
      fontFamily: "'Poppins', sans-serif",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      borderRadius: "12px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
      maxWidth: "400px",
      width: "100%",
      transition: "transform 0.3s ease-in-out",
    },
    header: {
      fontSize: "2rem",
      marginBottom: "1.5rem",
      color: "#333",
      fontWeight: "700",
      letterSpacing: "1px",
      textAlign: "center",
    },
    input: {
      width: "100%",
      padding: "1rem",
      margin: "0.75rem 0",
      border: "2px solid #ddd",
      borderRadius: "8px",
      fontSize: "1rem",
      outline: "none",
      transition: "border 0.3s ease",
    },
    inputFocus: {
      borderColor: "#4f46e5", // Highlighted input border color
    },
    button: {
      width: "100%",
      padding: "1rem",
      marginTop: "1.5rem",
      backgroundColor: "#4f46e5",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontSize: "1.1rem",
      cursor: "pointer",
      fontWeight: "600",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#3b38d1", // Button hover effect
    },
    link: {
      marginTop: "1.5rem",
      fontSize: "1rem",
      color: "#4f46e5",
      cursor: "pointer",
      textDecoration: "underline",
      fontWeight: "600",
      textAlign: "center",
    },
    terms: {
      fontSize: "0.9rem",
      color: "#777",
      textAlign: "center",
      marginTop: "1.5rem",
    },
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = "#4f46e5";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = "#ddd";
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.header}>Welcome Back</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          style={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        />
        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#3b38d1")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#4f46e5")
          }
        >
          Login
        </button>

        <div style={styles.link} onClick={() => navigate("/signup")}>
          Don't have an account? Sign up here
        </div>
        <div style={styles.link} onClick={() => navigate("/forgot-password")}>
          Forgot Password?
        </div>

        <div style={styles.terms}>
          By logging in, you agree to our{" "}
          <a href="/terms" style={{ color: "#4f46e5" }}>
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" style={{ color: "#4f46e5" }}>
            Privacy Policy
          </a>
          .
        </div>
      </form>
    </div>
  );
};

export default Login;

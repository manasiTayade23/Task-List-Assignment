import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        // Replace this with your API call to create a user
        // Example:
        // await signUpAPI({ email, password });

        // Navigate to the task creation page on successful sign-up
        navigate("/createTask");
      } catch (error) {
        alert("An error occurred during sign-up. Please try again.");
      }
    } else {
      alert("Passwords do not match. Please try again.");
    }
  };

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #5f72be, #9b8dca)",
      padding: "2rem",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "3rem 2rem",
      borderRadius: "12px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
      backgroundColor: "#fff",
      maxWidth: "400px",
      width: "100%",
      transition: "transform 0.3s ease",
    },
    header: {
      fontSize: "2rem",
      marginBottom: "1rem",
      color: "#333",
      fontWeight: "700",
      fontFamily: "'Poppins', sans-serif",
      textAlign: "center",
      letterSpacing: "1px",
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
    terms: {
      marginTop: "1.5rem",
      fontSize: "0.9rem",
      color: "#777",
      textAlign: "center",
    },
    link: {
      marginTop: "1rem",
      fontSize: "1rem",
      color: "#4f46e5",
      cursor: "pointer",
      textDecoration: "underline",
      fontWeight: "600",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.header}>Create Your Account</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={styles.input}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create a password"
          style={styles.input}
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Sign Up
        </button>
        <div style={styles.terms}>
          By signing up, you agree to our{" "}
          <a href="/terms" style={{ color: "#4f46e5" }}>
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" style={{ color: "#4f46e5" }}>
            Privacy Policy
          </a>.
        </div>
        <div style={styles.link} onClick={() => navigate("/login")}>
          Already have an account? Log in here
        </div>
      </form>
    </div>
  );
};

export default SignUp;

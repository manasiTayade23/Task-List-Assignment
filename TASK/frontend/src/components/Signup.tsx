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
      // Simulate successful sign-up (replace with real logic)
      navigate("/tasks");
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
    inputFocus: {
      borderColor: "#4f46e5",
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
      backgroundColor: "#3b38d1",
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
    terms: {
      marginTop: "1.5rem",
      fontSize: "0.9rem",
      color: "#777",
      textAlign: "center",
    },
    animation: {
      animation: "fadeIn 1s ease-in-out",
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
      <form onSubmit={handleSubmit} style={{ ...styles.form, ...styles.animation }}>
        <h2 style={styles.header}>Create Your Account</h2>
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
          placeholder="Create a password"
          style={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
          style={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required
        />
        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#3b38d1")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4f46e5")}
        >
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

        <div
          style={styles.link}
          onClick={() => navigate("/login")}
        >
          Already have an account? Log in here
        </div>
      </form>
    </div>
  );
};

export default SignUp;

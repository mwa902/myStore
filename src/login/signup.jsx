import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext.jsx";

export default function Signup() {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (
      !formData.username.trim() ||
      !formData.password.trim() ||
      !formData.confirmPassword.trim()
    ) {
      setError("Please fill in every field to create your account.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    const result = signup(formData.username, formData.password);
    if (!result.success) {
      setError(result.message);
      return;
    }

    setSuccess("Signup successful! Redirecting to login...");
    setTimeout(() => navigate("/login"), 1200);
  };

  return (
    <main className="auth-page">
      <div className="auth-panel">
        <h1>Create your account</h1>
        <p className="auth-subtitle">
          Join MyStore and start shopping with a friendly experience.
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            Username
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Choose a username"
            />
          </label>

          <label>
            Password
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
            />
          </label>

          <label>
            Confirm Password
            <input
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Repeat your password"
            />
          </label>

          {error && <div className="form-error">{error}</div>}
          {success && <div className="success-banner">{success}</div>}

          <button type="submit" className="btn btn-primary auth-submit">
            Sign Up
          </button>
        </form>

        <p className="auth-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </main>
  );
}

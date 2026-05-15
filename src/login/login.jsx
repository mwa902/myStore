import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext.jsx";

export default function Login() {
  const { currentUser, login } = useAuth();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!formData.username.trim() || !formData.password.trim()) {
      setError("Please enter both username and password.");
      return;
    }

    const result = login(formData.username, formData.password);
    if (!result.success) {
      setError(result.message);
      return;
    }

    setMessage(
      `Welcome back, ${result.user.username}! Redirecting you home...`,
    );
  };

  return (
    <main className="auth-page">
      <div className="auth-panel">
        <h1>Welcome Back</h1>
        <p className="auth-subtitle">
          Log in with employee1/admin credentials or your new account.
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            Username
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </label>

          <label>
            Password
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </label>

          {error && <div className="form-error">{error}</div>}
          {message && <div className="success-banner">{message}</div>}

          <button type="submit" className="btn btn-primary auth-submit">
            Login
          </button>
        </form>

        <p className="auth-link">
          Need an account? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    </main>
  );
}

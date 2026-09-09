import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";

    try {
      const res = await axios.post(`${API_URL}/signup`, formData, {
        withCredentials: true,
      });
      if (res.data.success) {
        setSuccess("Account created successfully! Redirecting...");
        setTimeout(() => {
          window.location.href = "http://localhost:3000"; // Redirect to dashboard
        }, 1500);
      }
    } catch (err) {
      setError(err.response?.data?.error || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center mt-5">
        <div className="col-6 p-5">
          <img
            src="/images/signup.png"
            alt="Zerodha Signup"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-6 p-5 text-start">
          <h1 className="fs-2 mb-3">Signup now</h1>
          <p className="text-muted mb-4">
            Or track your existing application.
          </p>

          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label text-muted">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-muted">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-muted">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="p-2 btn btn-primary fs-5 mb-4"
              style={{ width: "100%", backgroundColor: "#387ed1", border: "none" }}
            >
              Sign up
            </button>
          </form>
          <p className="text-muted" style={{ fontSize: "12px" }}>
            By proceeding, you agree to Zerodha's terms & privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
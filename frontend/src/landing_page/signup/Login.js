import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const res = await axios.post("http://localhost:3002/login", {
        email,
        password,
      });

      if (res.data.success) {
        window.location.href = "http://localhost:3000";
      }
    } catch (err) {
      setErrorMsg(
        err.response?.data?.message || "Login failed. Please check your credentials."
      );
    }
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-6 p-5">
          <img
            src="/images/signup.png"
            alt="Login"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-6 p-5">
          <h2>Login to Kite</h2>
          <p className="text-muted">Access your account and trading dashboard.</p>

          {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Log in
            </button>
          </form>

          <div className="mt-3 text-center">
            <p className="text-muted">
              Don't have an account? <Link to="/signup">Sign up here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
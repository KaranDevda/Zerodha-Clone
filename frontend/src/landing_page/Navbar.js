import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom sticky-top"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2 d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">
          <img
            src="/images/logo.svg"
            style={{ width: "130px" }}
            alt="Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-4">
              <Link className="nav-link active" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link active" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link active" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
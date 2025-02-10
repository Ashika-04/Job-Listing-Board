import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Jobcy
        </Link>

        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
          <li>
            <Link to="/post-job">Post a Job</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="nav-auth">
          <Link to="/login" className="nav-button login">
            Login
          </Link>
          <Link to="/register" className="nav-button register">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

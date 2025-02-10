import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>JobHub</h3>
          <p>
            Your one-stop platform to find and post jobs easily. Helping job seekers and employers connect efficiently.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Job Listings</a></li>
            <li><a href="#">Post a Job</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>For Job Seekers</h4>
          <ul>
            <li><a href="#">Browse Jobs</a></li>
            <li><a href="#">Saved Jobs</a></li>
            <li><a href="#">Job Alerts</a></li>
            <li><a href="#">Upload Resume</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>For Employers</h4>
          <ul>
            <li><a href="#">Post a Job</a></li>
            <li><a href="#">Manage Jobs</a></li>
            <li><a href="#">Employer Dashboard</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} JobHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

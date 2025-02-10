import React from "react";
import "../styles/Home.css";
import jobSearchImage from "../assets/home.jpg";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Find Your Dream Job with <span className="brand-name">JobHub</span></h1>
          <p>
            Search, apply, and get hired by top companies. Explore thousands of job opportunities today!
          </p>

          {/* Search Section with Image */}
          <div className="search-container">
            <form className="search-form">
              <input type="text" placeholder="Job title, keywords..." className="input-field" />
              <select className="input-field">
                <option value="">Select Location</option>
                <option value="new-york">New York</option>
                <option value="san-francisco">San Francisco</option>
                <option value="remote">Remote</option>
              </select>
              <button type="submit" className="find-jobs">Find Jobs</button>
            </form>
          </div>
        </div>
        <div className="hero-image">
        <img src={jobSearchImage} alt="Job Search" className="search-image" />
        </div>
      </header>

      {/* Featured Jobs Section */}
      <section className="featured-jobs">
        <h2>Featured Jobs</h2>
        <div className="job-list">
          <div className="job-card">
            <h3>Software Engineer</h3>
            <p>Google - New York, NY</p>
            <p><strong>$120,000 - $150,000/year</strong></p>
            <button className="view-details">View Details</button>
          </div>
          <div className="job-card">
            <h3>Data Scientist</h3>
            <p>Facebook - San Francisco, CA</p>
            <p><strong>$110,000 - $140,000/year</strong></p>
            <button className="view-details">View Details</button>
          </div>
          <div className="job-card">
            <h3>UI/UX Designer</h3>
            <p>Amazon - Remote</p>
            <p><strong>$90,000 - $120,000/year</strong></p>
            <button className="view-details">View Details</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

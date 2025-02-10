import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Find Your Dream Job with JobHub</h1>
          <p>
            Search, apply, and get hired by top companies. Explore thousands of job opportunities today!
          </p>
          <form className="search-form">
            <input type="text" placeholder="Job title, keywords..." />
            <select>
              <option value="">Select Location</option>
              <option value="new-york">New York</option>
              <option value="san-francisco">San Francisco</option>
              <option value="remote">Remote</option>
            </select>
            <button type="submit">Find Jobs</button>
          </form>
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
            <button>View Details</button>
          </div>
          <div className="job-card">
            <h3>Data Scientist</h3>
            <p>Facebook - San Francisco, CA</p>
            <p><strong>$110,000 - $140,000/year</strong></p>
            <button>View Details</button>
          </div>
          <div className="job-card">
            <h3>UI/UX Designer</h3>
            <p>Amazon - Remote</p>
            <p><strong>$90,000 - $120,000/year</strong></p>
            <button>View Details</button>
          </div>
        </div>
      </section>

      {/* Top Hiring Companies */}
      <section className="top-companies">
        <h2>Top Hiring Companies</h2>
        <div className="companies-grid">
          <img src="https://via.placeholder.com/150" alt="Company Logo" />
          <img src="https://via.placeholder.com/150" alt="Company Logo" />
          <img src="https://via.placeholder.com/150" alt="Company Logo" />
          <img src="https://via.placeholder.com/150" alt="Company Logo" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Are you an employer?</h2>
        <p>Post jobs and find the right talent for your company.</p>
        <button className="post-job-btn">Post a Job</button>
      </section>
    </div>
  );
};

export default Home;

import React from "react";
import "../styles/AboutUs.css";


const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <header className="about-hero">
        <div className="about-hero-content">
          <h1>About JobHub</h1>
          <p>Connecting talented professionals with top employers.</p>
        </div>
      </header>

      {/* Our Mission & Vision */}
      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            At JobHub, our mission is to simplify the job search and hiring process by
            providing an efficient, user-friendly platform for job seekers and employers.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            We aim to be the most trusted job marketplace, helping millions of
            professionals find opportunities that align with their skills and career goals.
          </p>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Jane Smith</h3>
            <p>Head of Marketing</p>
          </div>
          <div className="team-card">
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Michael Lee</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories">
        <h2>Success Stories</h2>
        <div className="testimonial">
          <p>
            "Thanks to JobHub, I found my dream job at a top tech company! The
            process was smooth and stress-free."
          </p>
          <h4>- Sarah Williams</h4>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Join Us Today</h2>
        <p>Find your dream job or post your next job opening on JobHub.</p>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  );
};

export default AboutUs;

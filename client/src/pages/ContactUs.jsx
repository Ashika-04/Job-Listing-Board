import React from "react";
import "../styles/ContactUs.css";


const ContactUs = () => {
  return (
    <div className="contact-container">
      {/* Hero Section */}
      <header className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>We are here to help you. Reach out to us anytime!</p>
        </div>
      </header>

      {/* Contact Form */}
      <section className="contact-form-section">
        <h2>Get in Touch</h2>
        <p>Fill out the form below and our team will get back to you shortly.</p>
        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="Enter subject" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Write your message here..." required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>

      {/* Contact Details */}
      <section className="contact-details">
        <h2>Contact Information</h2>
        <div className="details-grid">
          <div className="detail-card">
            <h3>Email</h3>
            <p>support@jobhub.com</p>
          </div>
          <div className="detail-card">
            <h3>Phone</h3>
            <p>+1 234 567 890</p>
          </div>
          <div className="detail-card">
            <h3>Address</h3>
            <p>123 JobHub Street, Tech City, USA</p>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="map-section">
        <h2>Find Us</h2>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093667!2d144.95373531532215!3d-37.817209742021734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f6cbbd%3A0xa2e9a57de7c9fbd!2sTech%20City!5e0!3m2!1sen!2sus!4v1644891078753!5m2!1sen!2sus"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactUs;

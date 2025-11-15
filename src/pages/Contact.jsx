import React, { useState } from 'react';
import { Mail, Linkedin, FileText, Calendar, Send } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder action
    console.log('Form submitted:', formData);
    alert('Thank you for your message! This is a placeholder action.');
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="contact-header">
        <h1 className="contact-page-title">Contact Me</h1>
        <h2 className="contact-subtitle">Let's Build Something Together</h2>
        <p className="contact-intro">
          Whether it's product design, manufacturing innovation, or material testing, I'm always open to meaningful collaborations and opportunities.
        </p>
        <p className="contact-intro">
          You can reach me through the form below or directly via the links provided.
        </p>
      </section>

      {/* Main Contact Section */}
      <div className="contact-main-grid">
        {/* Contact Form */}
        <section className="contact-form-section">
          <h2 className="contact-section-title">Contact Form</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Share your message or project idea here…"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              <Send size={18} /> Send Message
            </button>
          </form>
        </section>

        {/* Direct Links Section */}
        <section className="direct-links-section">
          <h2 className="contact-section-title">Direct Contact Links</h2>
          <div className="direct-links-container">
            <a href="mailto:shreyas.ca14@gmail.com" className="direct-link-card">
              <div className="link-icon-wrapper">
                <Mail className="link-icon" size={24} />
              </div>
              <div className="link-content">
                <h3 className="link-title">Email</h3>
                <p className="link-value">shreyas.ca14@gmail.com</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/shreyas-wankhede/" target="_blank" rel="noopener noreferrer" className="direct-link-card">
              <div className="link-icon-wrapper">
                <Linkedin className="link-icon" size={24} />
              </div>
              <div className="link-content">
                <h3 className="link-title">LinkedIn</h3>
                <p className="link-value">linkedin.com/in/shreyas-wankhede</p>
              </div>
            </a>
            <a href="https://docs.google.com/document/d/1QQ7zEFBypIEtSoi6EnlHqugsrhoHP3zu/edit?usp=sharing&ouid=110245284201745936676&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="direct-link-card">
              <div className="link-icon-wrapper">
                <FileText className="link-icon" size={24} />
              </div>
              <div className="link-content">
                <h3 className="link-title">Resume</h3>
                <p className="link-value">View Resume</p>
              </div>
            </a>
          </div>
        </section>
      </div>

      {/* 1-on-1 Meeting Booking Section */}
      <section className="meeting-booking-section">
        <div className="meeting-booking-card">
          <div className="meeting-icon-wrapper">
            <Calendar size={48} />
          </div>
          <div className="meeting-content">
            <h2 className="meeting-title">Book a 1-on-1 Meeting</h2>
            <p className="meeting-description">
              Schedule a quick call to discuss collaboration, opportunities, or portfolio work.
            </p>
            <a href="https://calendly.com/shreyas-ca14/30min" target="_blank" rel="noopener noreferrer" className="btn-book-meeting">
              <Calendar size={18} /> Book Meeting
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
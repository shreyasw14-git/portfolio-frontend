import React from 'react';
import { Download, MapPin, Calendar } from 'lucide-react';
import '../styles/About.css';
import CircularSlideshow from '../components/CircularSlideshow';
import { imageConfig } from '../imageConfig';

const About = () => {
  return (
    <div className="about-page">
      {/* Header Section */}
      <section className="about-header">
        <h1 className="about-page-title">About Me</h1>
        <p className="about-intro">
          A brief overview of my professional background, education, and interests in mechanical engineering and manufacturing innovation.
        </p>
      </section>

      {/* Profile Summary Section */}
      <section className="profile-summary-section">
        <div className="profile-summary-card">
          <div className="profile-image-wrapper">
            <CircularSlideshow 
              images={imageConfig.profilePhotoCircular} 
              size="200px"
            />
          </div>
          <div className="profile-content">
            <h2 className="profile-name">Shreyas Wankhede</h2>
            <p className="profile-title">Mechanical Engineer</p>
            <div className="profile-bio">
              <p>I'm Shreyas Wankhede, a Mechanical and Manufacturing Engineer with a strong focus on polymer composites, additive manufacturing, and product design.</p>
              <p>I completed my <span className="highlight-text">Master of Engineering in Mechanical & Industrial Engineering</span> at the <span className="highlight-text">University of Toronto</span>, specializing in <span className="highlight-text">Advanced Manufacturing</span>, where my research at the Smart Polymers & Composites Lab focused on multilayer thermoplastic composites for high-temperature applications.</p>
              <p>I hold a <span className="highlight-text">B.Tech in Mechanical Engineering</span> from <span className="highlight-text">IIT Bombay</span>, where I built a deep foundation in CAD design, materials, and experimental analysis, supported by hands-on experience through technical internships and research projects.</p>
              <p>My background bridges materials engineering, design simulation, and process optimization, making me particularly drawn to roles in <span className="highlight-text">Product Development</span>, <span className="highlight-text">Manufacturing Engineering</span>, and <span className="highlight-text">R&D</span>.</p>
            </div>
            <button className="btn-download-resume">
              <Download size={18} /> Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* Education Timeline Section */}
      <section className="education-timeline-section">
        <h2 className="about-section-title">Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="education-header">
                <div>
                  <h3 className="education-degree">Master of Engineering - Mechanical & Industrial Engineering</h3>
                  <p className="education-institution">University of Toronto</p>
                </div>
                <span className="education-duration">2024-2025</span>
              </div>
              <p className="education-focus"><strong>Technical Emphasis:</strong> Mechanical and Industrial Engineering (Advanced Manufacturing & Composites)</p>
              <p className="education-project"><strong>Project:</strong> Multilayer Polymer Composite Optimization (with industry collaboration)</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="education-header">
                <div>
                  <h3 className="education-degree">Bachelor of Technology - Mechanical Engineering</h3>
                  <p className="education-institution">Indian Institute of Technology Bombay</p>
                </div>
                <span className="education-duration">2020-2024</span>
              </div>
              <p className="education-project"><strong>Technical Team:</strong> Veloce Hyperloop (Mechanical Subsystem Lead)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Engineering Section */}
      <section className="beyond-engineering-section">
        <h2 className="about-section-title">Beyond Engineering</h2>
        <div className="beyond-content">
          <p className="beyond-paragraph">
            Outside of work, I enjoy exploring the intersection of design and technology, from 3D printing new concepts to studying how materials innovation can solve real-world problems.
          </p>
          <p className="beyond-paragraph">
            I also volunteer as a <span className="highlight-text">3D Printing Workshop Instructor</span> for students from Canada, the U.S., and China, helping them bring creative ideas to life through hands-on design and prototyping.
          </p>
          <p className="beyond-paragraph">
            In my spare time, I like cooking, dancing, and discovering new tools that merge creativity with engineering.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
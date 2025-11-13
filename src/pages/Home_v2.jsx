import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Download, Mail, Linkedin, ExternalLink } from 'lucide-react';
import CircularSlideshow from '../components/CircularSlideshow';
import { imageConfig } from '../imageConfig';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const metrics = [
    { 
      stat: "86%",
      description: "Achieved 86% of target polymer adhesion; doubled durability benchmarks."
    },
    { 
      stat: "25%",
      description: "Improved production workflow efficiency."
    },
    { 
      stat: "3",
      description: "Functional prototypes within ±0.1 mm."
    },
    { 
      stat: "4.5V",
      description: "Motion-based energy harvesting per dynamo."
    }
  ];

  const featuredProjects = [
    "Range-Controlled Ball Launcher",
    "Energy-Harvesting Gym Equipment",
    "Scapular Motion Tracking Device"
  ];

  const experience = [
    {
      title: "Research Assistant – U of T",
      description: "Multilayer polymers, DMA/TMA, adhesion testing."
    },
    {
      title: "Technical Process Intern – Bindwel & Stelda",
      description: "Packaging line redesign, setup-time reduction."
    }
  ];

  const research = [
    {
      title: "Graduate: Multilayer Polymer Composites",
      description: "Outer jacket, tie layer, inner liner optimization."
    },
    {
      title: "Undergraduate: Two-Photon Polymerization",
      description: "Sub-micron AM in bio and optics."
    }
  ];

  const skills = ["SolidWorks", "ANSYS", "GD&T", "DfAM", "Composites", "CFD"];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'fade-in' : ''}`}>
            <h1 className="hero-title">Shreyas Wankhede</h1>
            <p className="hero-tagline">Mechanical Engineer</p>
            <p className="hero-subtext">
              Design, validate, and optimize mechanical systems with a materials-first mindset.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => navigate('/projects')}>
                View Projects <ArrowRight className="icon-right" size={18} />
              </button>
              <button className="btn-secondary" onClick={() => navigate('/contact')}>
                Get In Touch
              </button>
            </div>
          </div>
          <div className={`hero-image-container ${isVisible ? 'fade-in-delay' : ''}`}>
            <CircularSlideshow 
              images={imageConfig.profilePhoto} 
              size="350px"
              square={true}
            />
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="metrics-section">
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <div className="metric-stat">{metric.stat}</div>
              <p className="metric-description">{metric.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="highlights-section">
        <div className="highlights-grid">
          {/* Featured Projects */}
          <div className="highlight-card" onClick={() => navigate('/projects')}>
            <h2 className="highlight-title">Featured Projects</h2>
            <div className="highlight-list">
              {featuredProjects.map((project, index) => (
                <div key={index} className="highlight-item">
                  <span className="item-bullet">•</span>
                  <span className="item-text">{project}</span>
                </div>
              ))}
            </div>
            <button className="btn-highlight">
              View all projects <ArrowRight size={16} />
            </button>
          </div>

          {/* Industry Experience */}
          <div className="highlight-card" onClick={() => navigate('/experience')}>
            <h2 className="highlight-title">Industry Experience</h2>
            <div className="highlight-list">
              {experience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-description">{exp.description}</p>
                </div>
              ))}
            </div>
            <button className="btn-highlight">
              View experience <ArrowRight size={16} />
            </button>
          </div>

          {/* Research */}
          <div className="highlight-card" onClick={() => navigate('/research')}>
            <h2 className="highlight-title">Research</h2>
            <div className="highlight-list">
              {research.map((item, index) => (
                <div key={index} className="experience-item">
                  <h3 className="experience-title">{item.title}</h3>
                  <p className="experience-description">{item.description}</p>
                </div>
              ))}
            </div>
            <button className="btn-highlight">
              View research <ArrowRight size={16} />
            </button>
          </div>

          {/* Skills Snapshot */}
          <div className="highlight-card" onClick={() => navigate('/skills')}>
            <h2 className="highlight-title">Skills Snapshot</h2>
            <div className="skills-badges">
              {skills.map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
            <button className="btn-highlight">
              View skills <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Quick Links Strip */}
      <section className="quick-links-section">
        <div className="quick-links-container">
          <a href="#" className="quick-link-btn">
            <Download size={18} /> View Resume
          </a>
          <a 
            href="https://www.linkedin.com/in/shreyas-wankhede/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="quick-link-btn"
          >
            <Linkedin size={18} /> LinkedIn <ExternalLink size={14} />
          </a>
          <a 
            href="mailto:shreyas.ca14@gmail.com" 
            className="quick-link-btn"
          >
            <Mail size={18} /> Email
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

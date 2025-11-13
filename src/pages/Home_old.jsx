import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Download, Mail, TestTube, Settings, Box, Zap } from 'lucide-react';
import { metrics, featuredProjects, heroContent, ctaContent } from '../mock';
import CircularSlideshow from '../components/CircularSlideshow';
import { imageConfig } from '../imageConfig';

const iconMap = {
  TestTube: TestTube,
  Settings: Settings,
  Box: Box,
  Zap: Zap
};

const Home = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'fade-in' : ''}`}>
            <h1 className="hero-title">
              Shreyas Wankhede
            </h1>
            <p className="hero-tagline">
              {heroContent.tagline}
            </p>
            <p className="hero-subtext">
              {heroContent.subtext}
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => navigate('/projects')}>
                View Projects <ArrowRight className="icon-right" size={18} />
              </button>
              <button className="btn-secondary" onClick={() => navigate('/contact')}>
                <Mail size={18} /> Get In Touch
              </button>
              <button className="btn-outline">
                <Download size={18} /> View Resume
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

      {/* Metrics Bar - Horizontal Cards */}
      <section className="metrics-section">
        <div className="metrics-container-horizontal">
          {metrics.map((metric, index) => {
            const IconComponent = iconMap[metric.icon];
            return (
              <div key={index} className="metric-card-horizontal">
                <div className="metric-icon-wrapper">
                  <IconComponent className="metric-icon" size={32} />
                </div>
                <div className="metric-content">
                  <div className="metric-stat">{metric.stat}</div>
                  <p className="metric-description">{metric.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-section">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <button className="view-all-btn" onClick={() => navigate('/projects')}>
            View All Projects <ArrowRight size={18} />
          </button>
        </div>
        <div className="featured-projects-preview">
          {featuredProjects.map((project) => (
            <div key={project.id} className="featured-preview-card">
              <h3 className="featured-preview-title">{project.title}</h3>
              <p className="featured-preview-description">{project.description}</p>
              <button className="btn-preview-link" onClick={() => navigate('/projects')}>
                View Details <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">{ctaContent.title}</h2>
          <p className="cta-text">
            {ctaContent.description}
          </p>
          <button className="btn-primary-large" onClick={() => navigate('/contact')}>
            Contact Me <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
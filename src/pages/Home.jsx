import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Download, Mail, Linkedin, Calendar, Briefcase, Wrench, FlaskConical, Code, Hammer, TestTube, GraduationCap } from 'lucide-react';
import CircularSlideshow from '../components/CircularSlideshow';
import ImageSlideshow from '../components/ImageSlideshow';
import { imageConfig } from '../imageConfig';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'fade-in' : ''}`}>
            <h1 className="hero-title">Shreyas Wankhede</h1>
            <p className="hero-role">Advanced Design and Manufacturing</p>
            <p className="hero-academic">MEng, University of Toronto • BTech, IIT Bombay</p>
            <p className="hero-description">
              Designing, testing, and optimizing advanced materials, manufacturing systems, and product prototypes for high-performance engineering applications.
            </p>
            <div className="hero-actions">
              <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
                Get in Touch
              </button>
              <a href="https://docs.google.com/document/d/1QQ7zEFBypIEtSoi6EnlHqugsrhoHP3zu/edit?usp=sharing&ouid=110245284201745936676&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Download size={18} /> View Resume
              </a>
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

      {/* Featured Experience */}
      <section className="featured-experience-section" id="featured-experience">
        <div className="section-header">
          <h2 className="section-title">Featured Experience</h2>
          <p className="section-subtitle">A quick look at my most relevant hands-on engineering roles.</p>
        </div>
        <div className="featured-experience-grid">
          <div className="featured-experience-card">
            <div className="featured-experience-image">
              <ImageSlideshow 
                images={imageConfig.experience.uoftResearch} 
                height="240px"
                borderRadius="10px"
                objectFit="contain"
              />
            </div>
            <div className="featured-experience-content">
              <h3 className="featured-experience-title">Research Assistant – Smart Polymers & Composites Lab</h3>
              <p className="featured-experience-location">University of Toronto</p>
              <p className="featured-experience-text">
                Developed and tested multilayer polymer composites for extreme environments, achieving 86 percent of target adhesion strength and doubling durability benchmarks under elevated temperature testing.
              </p>
              <Link to="/experience" className="featured-experience-link">
                View full experience <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="featured-experience-card">
            <div className="featured-experience-image">
              <ImageSlideshow 
                images={imageConfig.experience.bindwelStelda} 
                height="240px"
                borderRadius="10px"
                objectFit="contain"
              />
            </div>
            <div className="featured-experience-content">
              <h3 className="featured-experience-title">Technical Process Intern – Bindwel & Stelda</h3>
              <p className="featured-experience-location">Impel Services, Bangalore</p>
              <p className="featured-experience-text">
                Supported design and manufacturing of packaging equipment, including a custom machine that can handle 14 box sizes, while improving workflow efficiency on the shop floor.
              </p>
              <Link to="/experience" className="featured-experience-link">
                View full experience <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects-section" id="featured-projects">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Selected design, testing, and manufacturing projects.</p>
        </div>
        <div className="featured-projects-grid">
          <div className="featured-project-card">
            <div className="featured-project-image">
              <ImageSlideshow 
                images={imageConfig.projects.ballLauncher} 
                height="200px"
                borderRadius="10px"
                objectFit="contain"
              />
            </div>
            <div className="featured-project-content">
              <h3 className="featured-project-title">Range Controlled Ball Launcher</h3>
              <p className="featured-project-text">
                Designed and prototyped a ping-pong ball launcher with 95 percent range accuracy through DOE, DFMEA, and tolerance stack-up analysis.
              </p>
              <Link to="/projects" className="featured-project-link">
                View project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="featured-project-card">
            <div className="featured-project-image">
              <ImageSlideshow 
                images={imageConfig.projects.energyHarvesting} 
                height="200px"
                borderRadius="10px"
                objectFit="contain"
              />
            </div>
            <div className="featured-project-content">
              <h3 className="featured-project-title">Energy Harvesting Gym Equipment</h3>
              <p className="featured-project-text">
                Designed motion-based energy harvesting systems that convert workout motion into electrical power, demonstrating applied mechatronics and testing capability.
              </p>
              <Link to="/projects" className="featured-project-link">
                View project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="featured-project-card">
            <div className="featured-project-image">
              <ImageSlideshow 
                images={imageConfig.projects.scapularMotion} 
                height="200px"
                borderRadius="10px"
                objectFit="contain"
              />
            </div>
            <div className="featured-project-content">
              <h3 className="featured-project-title">Scapular Motion Tracking Device</h3>
              <p className="featured-project-text">
                Developed a wearable device concept for capturing shoulder blade motion for clinical and sports analysis.
              </p>
              <Link to="/projects" className="featured-project-link">
                View project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="research-highlights-section" id="research-highlights">
        <div className="section-header">
          <h2 className="section-title">Research Highlights</h2>
        </div>
        <div className="research-highlights-grid">
          <div className="research-highlight-card">
            <div className="research-highlight-image">
              <img src="/images/research/grad_research.png" alt="Graduate Research - Composite testing" />
            </div>
            <div className="research-highlight-content">
              <h3 className="research-highlight-title">Graduate Research</h3>
              <p className="research-highlight-text">
                Developed multilayer thermoplastic composites with 86% adhesion performance and doubled durability under elevated temperatures.
              </p>
              <Link to="/research" className="research-highlight-link">
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="research-highlight-card">
            <div className="research-highlight-image">
              <img src="/images/research/undergrad_research.png" alt="Undergraduate Study - Two-Photon Polymerization" />
            </div>
            <div className="research-highlight-content">
              <h3 className="research-highlight-title">Undergraduate Study</h3>
              <p className="research-highlight-text">
                Explored Two-Photon Polymerization for sub-100 nm precision in biomedical and microrobotic applications.
              </p>
              <Link to="/research" className="research-highlight-link">
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Snapshot */}
      <section className="skills-snapshot-section" id="skills-snapshot">
        <div className="section-header">
          <h2 className="section-title">Skills Snapshot</h2>
          <p className="section-subtitle">A quick view of my core technical strengths.</p>
        </div>
        <div className="skills-snapshot-content">
          <div className="skills-snapshot-row">
            <span className="skill-pill">
              <Hammer size={16} /> Advanced composites and polymers
            </span>
            <span className="skill-pill">
              <Code size={16} /> Product design and CAD (SolidWorks, AutoCAD, CATIA)
            </span>
            <span className="skill-pill">
              <Wrench size={16} /> Manufacturing and process optimization
            </span>
          </div>
          <div className="skills-snapshot-row">
            <span className="skill-pill">
              <TestTube size={16} /> FEA and CFD analysis
            </span>
            <span className="skill-pill">
              <Briefcase size={16} /> GD&T and tolerance stack-up
            </span>
            <span className="skill-pill">
              <FlaskConical size={16} /> Testing, data analysis, and DOE
            </span>
          </div>
        </div>
        <div className="section-cta">
          <button className="btn-cta-secondary" onClick={() => navigate('/skills')}>
            View Full Skillset <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="contact-content">
          <h2 className="contact-title">Let's Build Something Impactful.</h2>
          <p className="contact-subtitle">Connect for opportunities in product development, manufacturing engineering, or R&D.</p>
          <div className="contact-buttons">
            <a href="mailto:shreyas.ca14@gmail.com" className="contact-btn">
              <Mail size={20} /> Get In Touch
            </a>
            <a href="https://www.linkedin.com/in/shreyas-wankhede/" target="_blank" rel="noopener noreferrer" className="contact-btn">
              <Linkedin size={20} /> Connect on LinkedIn
            </a>
            <a href="https://calendly.com/shreyas-ca14/30min" target="_blank" rel="noopener noreferrer" className="contact-btn">
              <Calendar size={20} /> Book 1-on-1 Meeting
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Download, Mail, Linkedin, Calendar, ExternalLink } from 'lucide-react';
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
            <p className="hero-description">
              Designing, testing, and optimizing advanced materials, manufacturing systems, and product prototypes for high-performance engineering applications.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => scrollToSection('impact')}>
                View Highlights
              </button>
              <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
                Get in Touch
              </button>
              <a href="#" className="btn-outline">
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

      {/* Impact Highlights */}
      <section className="impact-section" id="impact">
        <div className="section-header">
          <h2 className="section-title">Impact Highlights</h2>
          <p className="section-subtitle">A summary of engineering results and measurable outcomes.</p>
        </div>
        <div className="impact-grid">
          <div className="impact-card">
            <span className="impact-icon">⚙️</span>
            <div className="impact-metric">25%</div>
            <p className="impact-text">Faster production workflow achieved through CAD-driven design and standardized processes.</p>
          </div>
          <div className="impact-card">
            <span className="impact-icon">🧪</span>
            <div className="impact-metric">95%</div>
            <p className="impact-text">Precision ping-pong launcher designed and tested with ±0.1 mm tolerance validation.</p>
          </div>
          <div className="impact-card">
            <span className="impact-icon">🧩</span>
            <div className="impact-metric">86%</div>
            <p className="impact-text">Achieved 86% target adhesion strength and doubled mechanical durability in multilayer composites.</p>
          </div>
          <div className="impact-card">
            <span className="impact-icon">⚡</span>
            <div className="impact-metric">4.5V</div>
            <p className="impact-text">Developed motion-based energy harvesting system demonstrating applied mechatronics and testing capability.</p>
          </div>
        </div>
      </section>

      {/* Work Experience Snapshot */}
      <section className="experience-snapshot-section" id="experience-snapshot">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Hands-on research and process improvement through industrial and academic roles.</p>
        </div>
        <div className="experience-snapshot-grid">
          <div className="experience-snapshot-card">
            <div className="experience-snapshot-image">
              <ImageSlideshow 
                images={imageConfig.experience.uoftResearch} 
                height="280px"
                borderRadius="10px"
                objectFit="contain"
              />
            </div>
            <div className="experience-snapshot-content">
              <h3 className="experience-snapshot-title">Research Assistant – University of Toronto</h3>
              <p className="experience-snapshot-text">
                Enhanced tie-layer performance in multilayer composites through adhesion, rheology, and thermal-mechanical testing.
              </p>
              <Link to="/experience" className="experience-snapshot-link">
                View Experience <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="experience-snapshot-card alternate">
            <div className="experience-snapshot-image">
              <ImageSlideshow 
                images={imageConfig.experience.bindwelStelda.slice(0, 5)} 
                height="280px"
                borderRadius="10px"
                objectFit="contain"
              />
            </div>
            <div className="experience-snapshot-content">
              <h3 className="experience-snapshot-title">Technical Process Intern – Bindwel & Stelda</h3>
              <p className="experience-snapshot-text">
                Designed adaptive packaging machine for 14 box sizes and optimized workflow efficiency by 25%.
              </p>
              <Link to="/experience" className="experience-snapshot-link">
                View Experience <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research Spotlight */}
      <section className="research-spotlight-section" id="research-spotlight">
        <div className="section-header">
          <h2 className="section-title">Research Spotlight</h2>
          <p className="section-subtitle">Advancing polymer composites and micro/nano fabrication through experimentation and analysis.</p>
        </div>
        <div className="research-spotlight-grid">
          <div className="research-spotlight-card">
            <div className="research-spotlight-image">
              <img src="/images/research/grad_research.png" alt="Graduate Research - Composite testing" />
            </div>
            <div className="research-spotlight-content">
              <h3 className="research-spotlight-title">Graduate Research</h3>
              <p className="research-spotlight-text">
                Developed multilayer thermoplastic composites with 86% adhesion performance and doubled durability under elevated temperatures.
              </p>
              <Link to="/research" className="research-spotlight-link">
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="research-spotlight-card">
            <div className="research-spotlight-image">
              <img src="/images/research/undergrad_research.png" alt="Undergraduate Study - Two-Photon Polymerization" />
            </div>
            <div className="research-spotlight-content">
              <h3 className="research-spotlight-title">Undergraduate Study</h3>
              <p className="research-spotlight-text">
                Explored Two-Photon Polymerization for sub-100 nm precision in biomedical and microrobotic applications.
              </p>
              <Link to="/research" className="research-spotlight-link">
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="selected-work-section" id="selected-work">
        <div className="section-header">
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle">Designs, prototypes, and experiments reflecting diverse technical expertise.</p>
        </div>
        <div className="selected-work-grid">
          <div className="selected-work-card">
            <div className="selected-work-image">
              <ImageSlideshow 
                images={imageConfig.projects.ballLauncher} 
                height="220px"
                borderRadius="10px"
                objectFit="contain"
              />
            </div>
            <div className="selected-work-content">
              <h3 className="selected-work-title">Range-Controlled Ball Launcher</h3>
              <p className="selected-work-text">
                Precision spring-actuated launcher achieving 100% range accuracy with ±0.1 mm tolerance validation.
              </p>
              <Link to="/projects" className="selected-work-link">
                View Project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="selected-work-card">
            <div className="selected-work-image">
              <ImageSlideshow 
                images={imageConfig.projects.energyHarvesting} 
                height="220px"
                borderRadius="10px"
                objectFit="contain"
              />
            </div>
            <div className="selected-work-content">
              <h3 className="selected-work-title">Energy-Harvesting Gym Equipment</h3>
              <p className="selected-work-text">
                Motion-to-electricity conversion system generating 4.5V per dynamo with >20% efficiency improvement.
              </p>
              <Link to="/projects" className="selected-work-link">
                View Project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="selected-work-card">
            <div className="selected-work-image">
              <ImageSlideshow 
                images={imageConfig.projects.scapularMotion} 
                height="220px"
                borderRadius="10px"
                objectFit="contain"
              />
            </div>
            <div className="selected-work-content">
              <h3 className="selected-work-title">Scapular Motion Tracking Device</h3>
              <p className="selected-work-text">
                Wearable IMU and computer vision system achieving 0.95 mAP accuracy for biomechanics research.
              </p>
              <Link to="/projects" className="selected-work-link">
                View Project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
        <div className="section-cta">
          <button className="btn-cta" onClick={() => navigate('/projects')}>
            See All Projects <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="skills-section" id="skills">
        <div className="section-header">
          <h2 className="section-title">Skills & Tools Overview</h2>
          <p className="section-subtitle">Technical and software expertise applied across research and design.</p>
        </div>
        <div className="skills-content">
          <div className="skills-row">
            <span className="skills-category">Core Skills:</span>
            <div className="skills-badges">
              <span className="skill-badge">Advanced Composites</span>
              <span className="skill-badge">DfAM</span>
              <span className="skill-badge">GD&T</span>
              <span className="skill-badge">Tolerance Analysis</span>
              <span className="skill-badge">CFD</span>
            </div>
          </div>
          <div className="skills-row">
            <span className="skills-category">Software:</span>
            <div className="skills-badges">
              <span className="skill-badge">SolidWorks</span>
              <span className="skill-badge">ANSYS</span>
              <span className="skill-badge">CATIA</span>
              <span className="skill-badge">Minitab</span>
              <span className="skill-badge">Python</span>
            </div>
          </div>
        </div>
        <div className="section-cta">
          <button className="btn-cta-secondary" onClick={() => navigate('/skills')}>
            View Full Skillset <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="education-section" id="education">
        <div className="section-header">
          <h2 className="section-title">Education & Certifications</h2>
        </div>
        <div className="education-timeline">
          <div className="education-item">
            <span className="education-icon">🎓</span>
            <div className="education-content">
              <h3 className="education-degree">MEng – University of Toronto</h3>
              <p className="education-focus">Mechanical and Industrial Engineering (Advanced Manufacturing & Composites)</p>
            </div>
          </div>
          <div className="education-item">
            <span className="education-icon">🎓</span>
            <div className="education-content">
              <h3 className="education-degree">BTech – IIT Bombay</h3>
              <p className="education-focus">Mechanical Engineering</p>
            </div>
          </div>
          <div className="education-item">
            <span className="education-icon">📜</span>
            <div className="education-content">
              <p className="education-certs">Certified SolidWorks Associate (CSWA) | ASME GD&T | Lean Six Sigma Foundations</p>
            </div>
          </div>
        </div>
        <div className="section-cta">
          <button className="btn-cta-secondary" onClick={() => navigate('/courses')}>
            View Courses <ArrowRight size={18} />
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
              <Mail size={20} /> Email
            </a>
            <a href="https://www.linkedin.com/in/shreyas-wankhede/" target="_blank" rel="noopener noreferrer" className="contact-btn">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="#" className="contact-btn">
              <Download size={20} /> View Resume
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

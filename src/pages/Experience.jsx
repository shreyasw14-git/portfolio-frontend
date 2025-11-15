import React from 'react';
import { Briefcase } from 'lucide-react';
import '../styles/Experience.css';
import ImageSlideshow from '../components/ImageSlideshow';
import { imageConfig } from '../imageConfig';

const featuredExperience = [
  {
    id: 1,
    organization: "University of Toronto, Smart Polymers & Composites Lab",
    location: "Toronto, Canada",
    role: "Research Assistant",
    dates: "2024–2025",
    bullets: [
      "Conducted experiments on multilayer polymer composites to improve tie-layer adhesion at elevated temperatures.",
      "Performed DMA, TMA, rheology, and peel tests; analyzed data to guide material selection and process tuning.",
      "Prepared compounded and compression-molded samples; documented repeatable processing parameters.",
      "Collaborated with an industry partner on performance targets and reporting."
    ],
    tools: "Anton Paar MCR | DMA | TMA | Compression Molding | SolidWorks | Minitab",
    keyResult: "Achieved 86% of the required adhesion strength and doubled mechanical durability.",
    imageKey: "uoftResearch",
    links: [
      { type: "presentation", label: "View Presentation", url: "https://drive.google.com/file/d/1yV3s3W16T7NLN189O6YIyUPoS9rsOCYh/view?usp=sharing" }
    ]
  },
  {
    id: 2,
    organization: "Bindwel & Stelda (Impel Services)",
    location: "Bangalore, India",
    role: "Technical Process Intern",
    dates: "2023",
    bullets: [
      "Supported design and manufacturing activities across Bindwel (book-binding machines) and Stelda (packaging solutions).",
      "Developed process-sheet documentation in AutoCAD to standardize production workflows.",
      "Designed the Random Box Erector in SolidWorks, a packaging system handling 14 box sizes, as the key project highlight.",
      "Collaborated with cross-functional teams for fabrication trials and timing studies."
    ],
    tools: "SolidWorks | AutoCAD | Fabrication Shop Tools | Process Optimization",
    keyResult: "Reduced setup time by 25% and improved production efficiency by ~20%.",
    imageKey: "bindwelStelda",
    links: [
      { type: "documentation", label: "View Documentation", url: "https://docs.google.com/document/d/1lmSfjTVj_tXYVC-DycptkujfILRSyLNvyhs2N-8ZUvA/edit?usp=sharing" },
      { type: "presentation", label: "View Presentation", url: "https://drive.google.com/file/d/1iTiTvMJxfcZs2A6WhiKenLLXnFUb6Q1b/view?usp=sharing" }
    ]
  }
];

const otherExperience = [
  {
    id: 3,
    organization: "MARSE Pvt. Ltd.",
    location: "India",
    role: "Design Intern",
    dates: "2022",
    bullets: [
      "Modeled engine and drivetrain parts in CATIA and UG NX; prepared manufacturing drawings and BOMs.",
      "Performed tolerance checks and design revisions for machining fit accuracy.",
      "Coordinated with shop floor teams to verify design feasibility."
    ],
    tools: "CATIA | UG NX | GD&T"
  },
  {
    id: 4,
    organization: "Team Veloce Hyperloop (IIT Bombay)",
    location: "India",
    role: "Mechanical R&D Lead; Aerodynamics Engineer",
    dates: "2020–2021",
    bullets: [
      "Led mechanical subsystem design covering structures, levitation, and braking modules.",
      "Optimized Al-6061 components for weight and stiffness; validated aero performance via CFD.",
      "Directed integration between aero shell and chassis assemblies to improve pod efficiency."
    ],
    tools: "SolidWorks | ANSYS | CFD | Test Planning"
  }
];

const Experience = () => {
  return (
    <div className="experience-page">
      {/* Header Section */}
      <section className="experience-header">
        <h1 className="experience-page-title">Experience</h1>
        <p className="experience-intro">
          Industry and research experience combining design, manufacturing, and testing.
        </p>
      </section>

      {/* Featured Experience Section */}
      <section className="featured-experience-section">
        <h2 className="experience-section-title">Featured Experience</h2>

        {/* changed this div to force vertical stacking */}
        <div
          className="featured-experience-grid"
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          {featuredExperience.map((exp) => (
            <div key={exp.id} className="featured-experience-card-with-image">
              <div className="experience-content-main">
                <div className="experience-header-info">
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <p className="experience-organization">{exp.organization}</p>
                    <p className="experience-location">
                      {exp.location} | {exp.dates}
                    </p>
                  </div>
                </div>
                <ul className="experience-bullets">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
                <div className="experience-meta">
                  <div className="meta-item">
                    <span className="meta-label">Tools:</span>
                    <span className="meta-value">{exp.tools}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">
                      Key Result{exp.id === 2 ? 's' : ''}:
                    </span>
                    <span className="meta-value">{exp.keyResult}</span>
                  </div>
                </div>
                {exp.links && exp.links.length > 0 && (
                  <div className="experience-links">
                    {exp.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        className="experience-link-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="link-icon">
                          {link.type === 'documentation' ? '📝' : '🎞'}
                        </span>{' '}
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <div className="experience-image-wrapper">
                <ImageSlideshow
                  images={imageConfig.experience[exp.imageKey]}
                  height="320px"
                  borderRadius="10px"
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Experience Section */}
      <section className="other-experience-section">
        <h2 className="experience-section-title">Other Experience</h2>
        <div className="other-experience-grid">
          {otherExperience.map((exp) => (
            <div key={exp.id} className="other-experience-card">
              <div className="other-experience-header">
                <div className="experience-logo-small">
                  <Briefcase size={24} />
                </div>
                <div className="experience-title-block">
                  <h3 className="other-experience-role">{exp.role}</h3>
                  <p className="other-experience-organization">
                    {exp.organization}
                  </p>
                  <span className="other-experience-dates">
                    {exp.location} | {exp.dates}
                  </span>
                </div>
              </div>
              <ul className="other-experience-bullets">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
              <div className="other-experience-tools">
                <span className="tools-label">Tools:</span>
                <span className="tools-value">{exp.tools}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;

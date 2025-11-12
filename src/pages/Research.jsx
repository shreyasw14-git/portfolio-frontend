import React from 'react';
import { ExternalLink } from 'lucide-react';
import '../styles/Research.css';

const currentResearch = {
  id: 1,
  title: "Material Evaluation and Optimization of Multilayer Polymer Composites",
  institution: "Smart Polymers & Composites Laboratory, University of Toronto",
  dates: "Nov 2024 - Aug 2025",
  overview: "Investigated multilayer thermoplastic composites for high-performance piping systems under extreme conditions. The study focused on balancing thermal stability, interfacial adhesion, and cost efficiency across the PPS jacket, Orevac tie layer, and reinforced PERT liner.",
  approach: [
    "Conducted rheology and DMA to compare PPS formulations and identify the critical AX8840 compatibilizer threshold (~19 wt %).",
    "Fabricated PPS-Orevac-PPS laminates and performed peel, DMA, and TMA tests to quantify temperature-dependent adhesion.",
    "Compounded fiber-reinforced PERT composites via twin-screw extrusion and evaluated stiffness, anisotropy, and cyclic durability."
  ],
  findings: [
    "New PPS grade delivered improved viscosity stability and modulus retention up to 300 °C.",
    "Tie-layer adhesion doubled from RT → 95 °C due to cohesive stress relaxation.",
    "PERT + 15 wt % Technora composite achieved optimum stiffness-ductility balance with >85 % modulus retention under cyclic loading."
  ],
  skills: "Polymer compounding | DMA | TMA | Rheometry | Peel testing | Material characterization | Minitab | SolidWorks",
  links: [
    { type: "report", label: "View Report", url: "https://drive.google.com/file/d/1SHXthsitcd_uc8IqsBa2TSmHDMRWG5ma/view?usp=sharing" }
  ]
};

const previousResearch = [
  {
    id: 2,
    title: "Applications of Two-Photon Polymerization (2PP) Technique",
    institution: "IIT Bombay",
    course: "ME800 - Additive Manufacturing Design, Processes & Inspection",
    summary: "Conducted a comprehensive review on Two-Photon Polymerization (2PP), a laser-based micro-fabrication process achieving sub-micron 3D precision. The study examined material selection, printing parameters, and dimensional accuracy, emphasizing 2PP's role in biomedical, microfluidic, and optical device manufacturing.",
    focus: [
      "Analyzed recent literature to map critical process variables and photoresist behavior.",
      "Highlighted emerging applications in tissue scaffolds, microneedle arrays, and micro-actuators.",
      "Identified key challenges in scaling 2PP for industrial use, including cost and throughput limits."
    ],
    outcome: "Provided a framework summarizing state-of-the-art industrial and research applications of 2PP; achieved 10/10 grade for analytical depth and technical rigor.",
    tools: "Literature review | Process parameter mapping | Additive manufacturing analysis",
    links: [
      { type: "report", label: "View Report", url: "https://drive.google.com/file/d/1k6xiTgfqodMwJtdQIldAA0o20XD4vfG1/view?usp=sharing" }
    ]
  }
];

const Research = () => {
  return (
    <div className="research-page">
      {/* Header Section */}
      <section className="research-header">
        <h1 className="research-page-title">Research</h1>
        <p className="research-intro">
          Exploring advanced materials, composites, and manufacturing technologies through experimentation and analysis.
        </p>
      </section>

      {/* Current Research Section */}
      <section className="current-research-section">
        <h2 className="research-section-title">Graduate Research</h2>
        <div className="current-research-card-full">
          <div className="research-header-with-dates">
            <h3 className="research-title">{currentResearch.title}</h3>
            <p className="research-institution">{currentResearch.institution} | {currentResearch.dates}</p>
          </div>
          
          <div className="research-section-block">
            <h4 className="section-heading">Overview:</h4>
            <p className="research-text">{currentResearch.overview}</p>
          </div>

          <div className="research-section-block">
            <h4 className="section-heading">Approach:</h4>
            <ul className="research-bullets">
              {currentResearch.approach.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="research-section-block">
            <h4 className="section-heading">Key Findings:</h4>
            <ul className="research-bullets">
              {currentResearch.findings.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="research-meta-section">
            <div className="meta-item-research">
              <span className="meta-label">Skills & Tools:</span>
              <span className="meta-value">{currentResearch.skills}</span>
            </div>
          </div>

          {currentResearch.links && currentResearch.links.length > 0 && (
            <div className="research-links">
              {currentResearch.links.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  className="research-link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="link-icon">{link.type === 'report' ? '📄' : '🎞'}</span> {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Previous Research Section */}
      <section className="previous-research-section">
        <h2 className="research-section-title">Undergraduate Research</h2>
        <div className="previous-research-grid">
          {previousResearch.map((research) => (
            <div key={research.id} className="previous-research-card-full">
              <div className="research-header-with-course">
                <h3 className="research-title-secondary">{research.title}</h3>
                <p className="research-institution-secondary">{research.institution}</p>
                <p className="research-course">Course: {research.course}</p>
              </div>

              <div className="research-section-block">
                <h4 className="section-heading">Summary:</h4>
                <p className="research-text">{research.summary}</p>
              </div>

              <div className="research-section-block">
                <h4 className="section-heading">Focus & Insights:</h4>
                <ul className="research-bullets-secondary">
                  {research.focus.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="research-section-block">
                <h4 className="section-heading">Outcome:</h4>
                <p className="research-text">{research.outcome}</p>
              </div>

              <div className="research-meta-section">
                <div className="meta-item-research">
                  <span className="meta-label">Tools & Techniques:</span>
                  <span className="meta-value">{research.tools}</span>
                </div>
              </div>

              {research.links && research.links.length > 0 && (
                <div className="research-links">
                  {research.links.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url} 
                      className="research-link-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="link-icon">{link.type === 'report' ? '📄' : '🎞'}</span> {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Research;
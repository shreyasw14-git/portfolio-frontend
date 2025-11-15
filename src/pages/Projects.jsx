import React, { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import '../styles/Projects.css';
import ImageSlideshow from '../components/ImageSlideshow';
import { imageConfig } from '../imageConfig';

const featuredProjects = [
  {
    id: 1,
    title: "Range-Controlled Ball Launcher",
    category: "Product Design & Robust Engineering",
    filterCategory: "Design",
    description: "Designed and fabricated a precision spring-actuated launcher capable of consistent ball trajectories through iterative mechanical prototyping and robust design methods.",
    technicalFocus: "Applied DOE and DFMEA to identify performance-critical variables, performed tolerance stack-up analysis, and optimized spring constants for reproducibility.",
    tools: "SolidWorks | Arduino | FDM 3D Printing | Digital Caliper Measurements",
    impact: "Achieved 100% range accuracy under repeated trials; validated design tolerance within ±0.1 mm; delivered a fully documented CAD-to-prototype workflow.",
    imageKey: "ballLauncher",
    links: [
      { type: "article", label: "Read Article", url: "https://www.linkedin.com/pulse/from-springs-flywheels-engineering-precision-ping-pong-wankhede-jkpsf" }
    ]
  },
  {
    id: 2,
    title: "Energy-Harvesting Gym Equipment",
    category: "Sustainable Mechanical Systems",
    filterCategory: "Design",
    description: "Developed an innovative motion-to-electricity conversion system for a Lat Pull-Down machine to recover mechanical energy during workouts.",
    technicalFocus: "Integrated gear-train and dynamo subsystems, optimized gear ratios in ANSYS for structural and fatigue limits, and selected low-loss materials for efficiency.",
    tools: "SolidWorks | ANSYS | Lathe & Fabrication Tools | Multimeter Testing",
    impact: "Generated 4.5 V per dynamo with consistent output; improved system efficiency by >20%; demonstrated scalable sustainable-energy concept for gym installations.",
    imageKey: "energyHarvesting",
    links: [
      { type: "article", label: "Read Article", url: "https://www.linkedin.com/pulse/turning-workouts-power-energy-harvesting-from-gym-shreyas-wankhede-3qmcf" }
    ]
  },
  {
    id: 3,
    title: "Scapular motion tracking device",
    category: "Biomechanics & Sensor Integration",
    filterCategory: "R&D",
    description: "Built a wearable system integrating IMUs and computer vision to measure scapular motion for rehabilitation and biomechanics research.",
    technicalFocus: "Designed sensor harness, programmed Arduino UNO for 3-axis motion capture, and trained YOLOv8 model in Python for visual tracking validation.",
    tools: "Arduino UNO | Python (YOLOv8) | MATLAB | Fusion 360 Design",
    impact: "Achieved 0.95 mAP object-detection accuracy and <2° angular deviation; produced synchronized data streams for quantitative scapular kinematics analysis.",
    imageKey: "scapularMotion",
    links: [
      { type: "report", label: "View Report", url: "https://drive.google.com/file/d/1McSbvfgJnLUN5FtcmPk2go5lOxegw1HD/view?usp=sharing" }
    ]
  }
];

const otherProjects = [
  {
    id: 4,
    title: "Modular Desk Organizer (B.O.B) - DfAM",
    filterCategory: "Design",
    description: "Edge-mounted, modular organizer with universal rail interface; optimized for print time, material use, and single-material recyclability.",
    tools: "SolidWorks, FDM (Prusa)",
    highlight: "Total print cost ≈ $10–15; >85% cheaper than commercial alternatives; same-day customization.",
    links: [
      { type: "report", label: "View Report", url: "https://drive.google.com/file/d/1UGs0p9PgM2qJYWu9DiNlx7gi0YmsOW0X/view?usp=sharing" }
    ]
  },
  {
    id: 5,
    title: "Additive Manufacturing Design Project - CAD Modeling & 3D Printing",
    filterCategory: "Manufacturing",
    description: "Created precise CAD models in CATIA and SolidWorks for printability; fabricated parts via SLA and FDM; performed dimensional checks and process comparison.",
    tools: "CATIA, SolidWorks, SLA & FDM printers, dimensional inspection",
    highlight: "Validated print accuracy across geometries; scored 10/10 for excellence in AM design.",
    links: []
  },
  {
    id: 6,
    title: "Self-Healing Brake Disc - PM + Polymer Infiltration",
    filterCategory: "R&D",
    description: "Hybrid Al–SiC porous disc via press-sinter, infiltrated with Diels–Alder polymer for thermal microcrack healing.",
    tools: "PM design, materials selection, process modeling",
    highlight: "16–26% wear reduction; up to 90% fracture toughness recovery after thermal cycling; healing at 150–200 °C.",
    links: [
      { type: "report", label: "View Report", url: "https://drive.google.com/file/d/1SU6MAyZsE0q8o43dL9rPnU52fz-1OS6r/view?usp=sharing" },
      { type: "presentation", label: "View Presentation", url: "https://drive.google.com/file/d/18Tq2h8GszFaSGFXNgZr40QYpmbloiNIn/view?usp=sharing" }
    ]
  },
  {
    id: 7,
    title: "MEMS Multiphysics Set - TEG, V-Beam, Comb Drive",
    filterCategory: "R&D",
    description: "Three ANSYS studies linking analytical models to FEM for thermoelectric generation, electrothermal actuation, and electrostatic motion.",
    tools: "ANSYS Workbench, PiezoAndMEMS, analytical modeling",
    highlight: "TEG power +332% with SnSe; V-beam nonlinear thermo-mechanical response mapped; comb-drive µm-scale displacement validated.",
    links: []
  },
  {
    id: 8,
    title: "Applied CFD Series - Internal, External, DPM",
    filterCategory: "R&D",
    description: "Fluent simulations across duct flow, cylinder heat transfer, and particle-laden transport with mesh and physics validation.",
    tools: "ANSYS Fluent, grid convergence, validation vs theory",
    highlight: "Cd ≈ 1.41 and Nu ≈ 6.07 within 5–7% of theory; battery cooling velocity threshold identified; 9× delta in particle trapping with flow-rate change.",
    links: []
  },
  {
    id: 9,
    title: "Edinburgh Trams - PM Lessons Learned",
    filterCategory: "R&D",
    description: "Stakeholder, scope, and contract insights mapped to PMBOK; WBS + schedule used to analyze overrun drivers.",
    tools: "MS Project, risk/stakeholder analysis",
    highlight: "Actionable governance and change-control recommendations for large public works.",
    links: [
      { type: "report", label: "View Report", url: "https://drive.google.com/file/d/1gQQ6VdeF1rwNeeorqfAVUDsEiH7PfKBK/view?usp=sharing" }
    ]
  },
  {
    id: 10,
    title: "Dual-Stimuli Wettability Surfaces - Light + Heat",
    filterCategory: "R&D",
    description: "Concept for azobenzene + pNIPAm heterogeneous coatings enabling reversible, spatially controlled wetting.",
    tools: "Process plan with spin-coat, photolithography, soft lithography; characterization plan (SEM, AFM, XPS, FTIR)",
    highlight: "Framework targeting >100° contact-angle swing; >85% retention after 100 cycles; anti-icing and separation use-cases.",
    links: [
      { type: "report", label: "View Report", url: "https://drive.google.com/file/d/1XbTeY5jWTTrN4ybNlXX0F_7qZ9e52usH/view?usp=drive_link" }
    ]
  },
  {
    id: 11,
    title: "Microneedle Shape vs Penetration - Design & Test",
    filterCategory: "Testing",
    description: "Four geometries designed and evaluated via mechanical and absorption protocols to maximize penetration and delivery.",
    tools: "SolidWorks, ANSYS, lab test protocols",
    highlight: "Geometry–performance correlations established; ten-stage validation workflow documented.",
    links: [
      { type: "report", label: "View Report", url: "https://drive.google.com/file/d/1Ubr3uzIG8EyiEmkzmhdp_GE3RxB7gG2j/view?usp=sharing" }
    ]
  },
  {
    id: 12,
    title: "Collet Mechanism - MSC Adams Kinematics",
    filterCategory: "Design",
    description: "Cam-driven collet modeled with static torque map and dynamic response; robustness tested to geometry and clearance changes.",
    tools: "MSC Adams, MATLAB (cam profile)",
    highlight: "Required torque ≈ 11 Nm mapped; <1% deviation between theory and simulation; low sensitivity to 5–10% cam size changes.",
    links: [
      { type: "report", label: "View Report (Part 1)", url: "https://drive.google.com/file/d/13f_TofWQSlW4xuMFzIj-RErUEwho5CIn/view?usp=sharing" },
      { type: "report", label: "View Report (Part 2)", url: "https://drive.google.com/file/d/1eS3bS0JCPfzqIV5chDLkt2aMssQdi5hV/view?usp=sharing" }
    ]
  },
  {
    id: 13,
    title: "Sewing Needle - Material & Process Selection",
    filterCategory: "Manufacturing",
    description: "Cost-driven selection study with failure modes and process route from shaping to finishing.",
    tools: "Material indices, process charts",
    highlight: "End-to-end manufacturing plan with performance/cost justification.",
    links: [
      { type: "presentation", label: "View Presentation", url: "https://drive.google.com/file/d/1UiJoBxCvIfF_5sETsrw7tFkV8_XqM2vl/view?usp=sharing" }
    ]
  },
  {
    id: 14,
    title: "MEMS Accelerometer Cantilever - Beam Optimization",
    filterCategory: "Design",
    description: "22 CAD variants with slot patterns; COMSOL simulations to maximize tip deflection under set mass and decel load.",
    tools: "CATIA, COMSOL Multiphysics",
    highlight: "Optimal geometry and hole placement identified; tapered profile improves sensitivity.",
    links: [
      { type: "presentation", label: "View Presentation", url: "https://drive.google.com/file/d/1uTrqSjNT9jL5kRk2zP0dmkZWZQaoLs37/view?usp=sharing" }
    ]
  },
  {
    id: 15,
    title: "EV Truck Gear Ratio Optimization",
    filterCategory: "Design",
    description: "Efficiency and energy models under RPM/torque constraints to select ratios balancing range and performance.",
    tools: "Analytical modeling, contour analysis",
    highlight: "Proposed 3-speed box: 45.94, 27.66, 18.43; top speeds 36.1, 60, 90 km/h at >90% efficiency.",
    links: [
      { type: "report", label: "View Report", url: "https://drive.google.com/file/d/1zDf1IpXI3ngz2NygcjNv8JzMjPyjTqdI/view?usp=sharing" }
    ]
  },
  {
    id: 16,
    title: "Orthogonal Cutting - Temperature Prediction",
    filterCategory: "Manufacturing",
    description: "ABAQUS-based thermo-mechanical simulation vs literature model to estimate chip/tool/workpiece temperatures.",
    tools: "Johnson-Cook plasticity, 2D heat equation, FEM",
    highlight: "1308 °C predicted at tool-chip interface vs 1297 °C reference (~98% agreement).",
    links: [
      { type: "presentation", label: "View Presentation", url: "https://drive.google.com/file/d/1UgLw5zRntoPOhEjLnVkTa7-1lYFGBCJR/view?usp=sharing" }
    ]
  },
  {
    id: 17,
    title: "Mold Damage Detection - Point-Cloud + Python",
    filterCategory: "Testing",
    description: "Defect mapping from laser-scan point clouds via CloudCompare and a custom Python normal/segmentation pipeline.",
    tools: "CloudCompare, Python, CSV point clouds",
    highlight: "Contour-based defect visualization; algorithm blocks 1 and 3 validated, segmentation flagged for iteration.",
    links: [
      { type: "report", label: "View Report", url: "https://drive.google.com/file/d/1cJYd1GPe-dJTJB12TRIJhYM7Hmv99Qa8/view?usp=drive_link" }
    ]
  },
  {
    id: 18,
    title: "Stress Concentration vs Fillet Radius - DIC",
    filterCategory: "Testing",
    description: "Al-6063 plates with varied fillets tested on MTS; DIC used to compute Kt under tensile load.",
    tools: "DIC (NCorr), MATLAB, tensile testing",
    highlight: "Kt decreased from 1.80 to 1.76 with larger fillets; experimental workflow validated for design guidance.",
    links: [
      { type: "report", label: "View Report", url: "https://drive.google.com/file/d/1pFc1DIsIg912QQZf9eU3-8iu7WSYoZVP/view?usp=sharing" }
    ]
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filterCategories = ['All', 'Design', 'Manufacturing', 'R&D', 'Testing'];
  
  const filteredFeaturedProjects = activeFilter === 'All' 
    ? featuredProjects 
    : featuredProjects.filter(project => project.filterCategory === activeFilter);
    
  const filteredOtherProjects = activeFilter === 'All' 
    ? otherProjects 
    : otherProjects.filter(project => project.filterCategory === activeFilter);
  
  return (
    <div className="projects-page">
      {/* Header Section */}
      <section className="projects-header">
        <h1 className="projects-page-title">Projects</h1>
        <p className="projects-intro">
          Selected works showcasing design, testing, and innovation across mechanical systems, manufacturing processes, and advanced materials.
        </p>
        
        {/* Filter Buttons */}
        <div className="project-filters">
          {filterCategories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      {filteredFeaturedProjects.length > 0 && (
        <section className="featured-projects-section">
          <h2 className="projects-section-title">Featured Projects</h2>
          <div className="featured-projects-grid">
            {filteredFeaturedProjects.map((project) => (
              <div key={project.id} className="featured-project-card">
                <div className="featured-project-image">
                  <ImageSlideshow 
                    images={imageConfig.projects[project.imageKey]} 
                    height="320px"
                    borderRadius="12px 12px 0 0"
                    objectFit="contain"
                  />
                  <div className="featured-project-overlay">
                    <span className="project-category-badge">{project.category}</span>
                  </div>
                </div>
                <div className="featured-project-content">
                  <h3 className="featured-project-title">{project.title}</h3>
                  <p className="featured-project-description">{project.description}</p>
                  <div className="project-meta">
                    <div className="meta-item">
                      <span className="meta-label">Technical Focus:</span>
                      <span className="meta-value">{project.technicalFocus}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Tools Used:</span>
                      <span className="meta-value">{project.tools}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Key Results:</span>
                      <span className="meta-value">{project.impact}</span>
                    </div>
                  </div>
                  {project.links && project.links.length > 0 && (
                    <div className="project-links">
                      {project.links.map((link, index) => (
                        <a 
                          key={index} 
                          href={link.url} 
                          className="project-link-btn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="link-icon">
                            {link.type === 'article' ? '📰' : link.type === 'report' ? '📄' : '🎞'}
                          </span> 
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Other Projects Section */}
      {filteredOtherProjects.length > 0 && (
        <section className="other-projects-section">
          <h2 className="projects-section-title">Other Projects</h2>
          <div className="other-projects-grid">
            {filteredOtherProjects.map((project) => (
              <div key={project.id} className="other-project-card">
                <div className="other-project-header">
                  <h3 className="other-project-title">{project.title}</h3>
                </div>
                <p className="other-project-description">{project.description}</p>
                <div className="other-project-meta">
                  <div className="meta-item">
                    <span className="meta-label">Tools:</span>
                    <span className="meta-value">{project.tools}</span>
                  </div>
                  <div className="meta-item highlight">
                    <span className="meta-label">Key Outcome:</span>
                    <span className="meta-value">{project.highlight}</span>
                  </div>
                </div>
                {project.links && project.links.length > 0 && (
                  <div className="project-links">
                    {project.links.map((link, index) => (
                      <a 
                        key={index} 
                        href={link.url} 
                        className="project-link-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="link-icon">
                          {link.type === 'report' ? '📄' : '🎞'}
                        </span> 
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Projects;

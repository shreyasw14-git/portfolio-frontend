import React from 'react';
import { Award, CheckCircle, Cpu, Wrench, BarChart3, Lightbulb, Users, MessageSquare, Target } from 'lucide-react';
import '../styles/Skills.css';

const technicalSkills = [
  {
    id: 1,
    icon: 'Wrench',
    category: 'Advanced Composites & Materials',
    skills: [
      'Polymer Engineering and Processing',
      'Composite Design and Layer Optimization',
      'Material Selection and Compatibility Analysis',
      'Mechanical and Thermal Testing (DMA, TMA, Rheometry)'
    ]
  },
  {
    id: 2,
    icon: 'Cpu',
    category: 'Product Design & Manufacturing Processes',
    skills: [
      'CAD Modeling and 3D Design for Manufacturability (DFM/DFA)',
      'Process Optimization and Line Balancing',
      'Rapid Prototyping and Additive Manufacturing (SLA/FDM)',
      'Tooling Design and Fabrication Coordination'
    ]
  },
  {
    id: 3,
    icon: 'BarChart3',
    category: 'FEA & CFD Analysis',
    skills: [
      'Structural and Thermal Simulations',
      'Computational Fluid Dynamics for Heat and Flow Studies',
      'Static/Dynamic Stress and Fatigue Analysis',
      'Model Validation and Mesh Convergence'
    ]
  },
  {
    id: 4,
    icon: 'CheckCircle',
    category: 'GD&T & Tolerance Stack-up Analysis',
    skills: [
      'Geometric Dimensioning & Tolerancing per ASME Y14.5',
      'Tolerance Stack-up and Fit Analysis (CP, RSS, WOW)',
      'Quality Control and Inspection Planning',
      'Design Validation and Failure Analysis'
    ]
  }
];

const softwareTools = [
  { name: 'SolidWorks', category: 'CAD', logo: '/logos/logo_solidworks.png' },
  { name: 'AutoCAD', category: 'CAD', logo: '/logos/logo_autocad.png' },
  { name: 'CATIA', category: 'CAD', logo: '/logos/logo_catia.png' },
  { name: 'UG NX', category: 'CAD', logo: '/logos/logo_ugnx.png' },
  { name: 'ANSYS', category: 'Simulation & Analysis', logo: '/logos/logo_ansys.png' },
  { name: 'ABAQUS', category: 'Simulation & Analysis', logo: '/logos/logo_abaqus.png' },
  { name: 'COMSOL', category: 'Simulation & Analysis', logo: '/logos/logo_comsol.png' },
  { name: 'Minitab', category: 'Simulation & Analysis', logo: '/logos/logo_minitab.png' },
  { name: 'MATLAB', category: 'Programming & Modeling', logo: '/logos/logo_matlab.png' },
  { name: 'Python', category: 'Programming & Modeling', logo: '/logos/logo_python.png' },
  { name: 'Arduino', category: 'Programming & Modeling', logo: '/logos/logo_arduino.png' },
  { name: 'MS Office Suite', category: 'Productivity & Documentation', logo: '/logos/logo_msoffice.png' },
  { name: 'Notion', category: 'Productivity & Documentation', logo: '/logos/logo_notion.png' },
  { name: 'Google Workspace', category: 'Productivity & Documentation', logo: '/logos/logo_google.png' }
];

const certifications = [
  {
    id: 1,
    name: 'Certified SolidWorks Associate (CSWA)',
    issuer: 'Dassault Systèmes',
    description: 'Professional certification in 3D CAD modeling and mechanical design fundamentals.'
  },
  {
    id: 2,
    name: 'ASME GD&T Professional Certification',
    issuer: 'Udemy',
    description: 'Comprehensive training in geometric tolerancing, datum structures, and fit control following ASME Y14.5 standards.'
  },
  {
    id: 3,
    name: 'Lean Six Sigma Foundations',
    issuer: 'LinkedIn Learning',
    description: 'Certification in process improvement, waste reduction, and data-driven quality optimization.'
  }
];

const softSkills = [
  { icon: 'Users', skill: 'Team Collaboration', description: 'Cross-functional teamwork, engineering documentation, and project coordination.' },
  { icon: 'Lightbulb', skill: 'Analytical Thinking', description: 'Data-driven problem-solving and process improvement mindset.' },
  { icon: 'MessageSquare', skill: 'Technical Communication', description: 'Clear presentation of technical information to diverse audiences.' },
  { icon: 'CheckCircle', skill: 'Adaptability', description: 'Quick learner with flexibility to handle evolving technologies and project scopes.' },
  { icon: 'Award', skill: 'Leadership & Initiative', description: 'Experience leading design tasks, delegating responsibilities, and mentoring peers.' },
  { icon: 'Target', skill: 'Attention to Detail', description: 'Precision in CAD design, testing documentation, and analytical validation.' }
];

const iconMap = {
  Wrench: Wrench,
  Cpu: Cpu,
  BarChart3: BarChart3,
  CheckCircle: CheckCircle,
  Users: Users,
  Lightbulb: Lightbulb,
  MessageSquare: MessageSquare,
  Award: Award,
  Target: Target
};

const Skills = () => {
  return (
    <div className="skills-page">
      {/* Header Section */}
      <section className="skills-header">
        <h1 className="skills-page-title">Skills & Certifications</h1>
        <p className="skills-intro">
          Core technical expertise, software proficiency, and professional certifications.
        </p>
      </section>

      {/* Technical Skills Section */}
      <section className="technical-skills-section">
        <h2 className="skills-section-title">Technical Skills</h2>
        <div className="technical-skills-grid">
          {technicalSkills.map((item) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div key={item.id} className="technical-skill-card">
                <div className="skill-icon-wrapper">
                  <IconComponent className="skill-icon" size={32} />
                </div>
                <h3 className="skill-category">{item.category}</h3>
                <ul className="skill-list">
                  {item.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Software Proficiency Section */}
      <section className="software-section">
        <h2 className="skills-section-title">Software Proficiency</h2>
        <div className="software-logo-grid">
          {softwareTools.map((tool, idx) => (
            <div key={idx} className="software-logo-card">
              <img 
                src={tool.logo} 
                alt={`${tool.name} logo`}
                className="software-logo"
              />
              <h4 className="software-name">{tool.name}</h4>
              <p className="software-category-label">{tool.category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <h2 className="skills-section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <div className="cert-icon-wrapper">
                <Award className="cert-icon" size={36} />
              </div>
              <div className="cert-content">
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-description">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="soft-skills-section">
        <h2 className="skills-section-title">Soft Skills</h2>
        <div className="soft-skills-list">
          {softSkills.map((item, idx) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div key={idx} className="soft-skill-item">
                <div className="soft-skill-icon">
                  <IconComponent size={24} />
                </div>
                <div className="soft-skill-content">
                  <h4 className="soft-skill-name">{item.skill}</h4>
                  <p className="soft-skill-description">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Skills;
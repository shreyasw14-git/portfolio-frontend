import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';
import '../styles/Courses.css';

const graduateCourses = [
  {
    id: 1,
    code: 'MSE1068',
    title: 'Additive Manufacturing of Metals, Ceramics and Composites',
    university: 'University of Toronto',
    topics: [
      'Powder bed fusion, binder jetting, vat and extrusion routes for metals and ceramics, multi-material joining, defects and post-processing.',
      'Project: Process maps and design rules for AM of porous brake discs and multi-material parts.'
    ],
    hasButton: false
  },
  {
    id: 2,
    code: 'MIE519',
    title: 'Advanced Manufacturing Technologies',
    university: 'University of Toronto',
    topics: [
      'Additive and smart manufacturing, hybrid processes, and multi-material systems.',
      'Project: Self-healing brake disc via press-sinter base and Diels-Alder polymer infiltration.'
    ],
    hasButton: false
  },
  {
    id: 3,
    code: 'MIE506',
    title: 'MEMS Design and Microfabrication',
    university: 'University of Toronto',
    topics: [
      'Device design, lithography, deposition, and etch sequences with multiphysics validation.',
      'Project: V-beam actuator, thermoelectric generator, and comb drive modeled and verified.'
    ],
    hasButton: false
  },
  {
    id: 4,
    code: 'MIE1745',
    title: 'Surface Engineering',
    university: 'University of Toronto',
    topics: [
      'Thin films, surface modification, adhesion and wettability, durability under service.',
      'Project: Contact angle and surface energy analysis after plasma treatment.'
    ],
    hasButton: false
  },
  {
    id: 5,
    code: 'MIE504',
    title: 'Applied Computational Fluid Dynamics',
    university: 'University of Toronto',
    topics: [
      'Internal and external flows in Fluent, meshing strategy and validation.',
      'Project: Laminar flow over heated cylinders and flow through multi-cylinder arrays.'
    ],
    hasButton: false
  },
  {
    id: 6,
    code: 'MIE540',
    title: 'Product Design',
    university: 'University of Toronto',
    topics: [
      'Product development, DOE, robust design, and tolerance analysis.',
      'Project: Robust paper gyrocopter design with test planning.'
    ],
    hasButton: false
  },
  {
    id: 7,
    code: 'APS1001',
    title: 'Project Management',
    university: 'University of Toronto',
    topics: [
      'PMBOK frameworks, stakeholder and risk management, governance and scheduling.',
      'Project: Edinburgh Trams case analysis with WBS and schedule.'
    ],
    hasButton: false
  }
];

const undergraduateCourses = [
  {
    id: 1,
    code: 'ME',
    title: 'Manufacturing Processes and Automation',
    university: 'IIT Bombay',
    topics: []
  },
  {
    id: 2,
    code: 'ME',
    title: 'Machine Design and Dynamics',
    university: 'IIT Bombay',
    topics: []
  },
  {
    id: 3,
    code: 'ME',
    title: 'Thermodynamics and Heat Transfer',
    university: 'IIT Bombay',
    topics: []
  },
  {
    id: 4,
    code: 'ME',
    title: 'Fluid Mechanics',
    university: 'IIT Bombay',
    topics: []
  },
  {
    id: 5,
    code: 'ME',
    title: 'Materials Science and Metallurgy',
    university: 'IIT Bombay',
    topics: []
  },
  {
    id: 6,
    code: 'ME',
    title: 'Control Systems and Mechatronics',
    university: 'IIT Bombay',
    topics: []
  },
  {
    id: 7,
    code: 'ME',
    title: 'Finite Element Methods',
    university: 'IIT Bombay',
    topics: []
  },
  {
    id: 8,
    code: 'ME',
    title: 'CAD/CAM Systems',
    university: 'IIT Bombay',
    topics: []
  }
];

const Courses = () => {
  return (
    <div className="courses-page">
      {/* Header Section */}
      <section className="courses-header">
        <h1 className="courses-page-title">Courses</h1>
        <p className="courses-intro">
          Graduate and undergraduate coursework forming the foundation of my mechanical and manufacturing expertise.
        </p>
      </section>

      {/* Graduate Courses Section */}
      <section className="graduate-courses-section">
        <div className="section-header-with-icon">
          <GraduationCap className="section-icon" size={32} />
          <div>
            <h2 className="courses-section-title">Graduate Courses</h2>
            <p className="section-subtitle">University of Toronto</p>
          </div>
        </div>
        <div className="courses-grid">
          {graduateCourses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-header">
                <span className="course-code">{course.code}</span>
              </div>
              <h3 className="course-title">{course.title}</h3>
              <ul className="course-topics">
                {course.topics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
              {course.hasButton && (
                <a href="#" className="course-presentation-btn">
                  <span className="link-icon">🎞</span> View Presentation
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Undergraduate Courses Section */}
      <section className="undergraduate-courses-section">
        <div className="section-header-with-icon">
          <BookOpen className="section-icon" size={32} />
          <div>
            <h2 className="courses-section-title">Undergraduate Courses</h2>
            <p className="section-subtitle">IIT Bombay</p>
          </div>
        </div>
        <div className="courses-grid">
          {undergraduateCourses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-header">
                <span className="course-code">{course.code}</span>
              </div>
              <h3 className="course-title">{course.title}</h3>
              {course.topics && course.topics.length > 0 && (
                <ul className="course-topics">
                  {course.topics.map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="undergraduate-note">
          <p>Key Focus: Strong foundation in mechanical systems design, material behavior, and computational tools.</p>
        </div>
      </section>
    </div>
  );
};

export default Courses;
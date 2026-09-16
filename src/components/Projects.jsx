import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  CheckCircle, 
  Clock, 
  Layers, 
  Info,
  X,
  HeartPulse,
  ChefHat
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import './Projects.css';

export default function Projects() {
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [demoNotice, setDemoNotice] = useState(null);

  const handleLinkClick = (e, linkUrl, projectName, type) => {
    // If it's an example/placeholder link or '#', show clear notice modal
    if (linkUrl.includes('example.com') || linkUrl === '#') {
      e.preventDefault();
      setDemoNotice({
        projectName,
        type,
        url: linkUrl
      });
    }
  };

  return (
    <section id="projects" className="section-wrapper projects-section">
      <div className="portfolio-container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Practical Work</span>
          </div>
          <h2 className="section-title">
            Featured <span className="highlight">Projects</span>
          </h2>
          <p className="section-subtitle">
            Concept prototypes and web applications built to address practical needs, demonstrate modern frontend architecture, and explore intelligent workflows.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => {
            const isComingSoon = project.isComingSoon;

            if (isComingSoon) {
              return (
                <div key={project.id} className="project-card coming-soon-card glass-card">
                  <div className="coming-soon-content">
                    <div className="coming-soon-badge">
                      <Clock size={14} className="text-amber" />
                      <span>In Ideation</span>
                    </div>
                    <h3 className="project-title coming-soon-title">{project.title}</h3>
                    <p className="project-category text-muted">{project.category}</p>
                    <p className="project-desc">{project.description}</p>
                    
                    <div className="coming-soon-features">
                      <div className="feature-chip">
                        <Sparkles size={13} className="text-cyan" />
                        <span>AI/ML problem solving</span>
                      </div>
                      <div className="feature-chip">
                        <Layers size={13} className="text-primary" />
                      </div>
                      <div className="feature-chip">
                        <span>Hackathon explorations</span>
                      </div>
                    </div>

                    <div className="tech-tags-list">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="coming-soon-footer">
                      <span className="coming-soon-pulse">
                        <span className="pulse-dot" />
                        <span>Actively planning next builds</span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={project.id} className={`project-card glass-card ${project.featured ? 'featured-card' : ''}`}>
                
                {/* Project Header Bar */}
                <div className="project-card-header">
                  <div className="project-header-left">
                    <div className="project-icon-box">
                      {project.id === 'rasoi-gen-ai' ? (
                        <ChefHat size={22} className="text-cyan" />
                      ) : (
                        <Layers size={22} className="text-primary" />
                      )}
                    </div>
                    <div>
                      <span className="project-category">{project.category}</span>
                      <h3 className="project-title">{project.title}</h3>
                    </div>
                  </div>

                  {project.highlight && (
                    <span className="project-highlight-badge">
                      <Sparkles size={12} />
                      <span>{project.highlight}</span>
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="project-desc">{project.description}</p>

                {/* Key Features List */}
                <div className="project-features-box">
                  <h4 className="features-subheading">Key Highlights & Architecture:</h4>
                  <ul className="features-checklist">
                    {project.features.slice(0, 4).map((feat, idx) => (
                      <li key={idx} className="feature-line">
                        <CheckCircle size={14} className="feature-check-icon text-cyan" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  {project.features.length > 4 && (
                    <button 
                      type="button" 
                      className="view-more-concept-btn"
                      onClick={() => setSelectedConcept(project)}
                    >
                      + View all {project.features.length} architecture features
                    </button>
                  )}
                </div>

                {/* Tech Tags */}
                <div className="tech-tags-list">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Actions / Buttons */}
                <div className="project-card-actions">
                  <a
                    href={project.links?.demo || '#'}
                    target={project.links?.demo?.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm project-action-btn"
                    onClick={(e) => handleLinkClick(e, project.links?.demo || '#', project.title, 'Live Demo')}
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={15} />
                  </a>

                  <a
                    href={project.links?.github || '#'}
                    target={project.links?.github?.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm project-action-btn"
                    onClick={(e) => handleLinkClick(e, project.links?.github || '#', project.title, 'GitHub')}
                  >
                    <Github size={15} />
                    <span>Source Code</span>
                  </a>

                  {project.id === 'rasoi-gen-ai' && (
                    <button
                      type="button"
                      className="btn btn-outline btn-sm details-btn"
                      onClick={() => setSelectedConcept(project)}
                    >
                      <Info size={15} />
                      <span>Details</span>
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Concept Architecture Modal */}
      {selectedConcept && (
        <div className="modal-backdrop" onClick={() => setSelectedConcept(null)}>
          <div className="modal-card glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-group">
                <ChefHat size={22} className="text-cyan" />
                <div>
                  <h3 className="modal-title">{selectedConcept.title} — Concept Overview</h3>
                  <p className="modal-category">{selectedConcept.category}</p>
                </div>
              </div>
              <button 
                type="button" 
                className="modal-close-btn"
                onClick={() => setSelectedConcept(null)}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <p className="modal-desc">{selectedConcept.description}</p>
              
              <h4 className="modal-subheading">Core Functional Architecture:</h4>
              <div className="modal-features-grid">
                {selectedConcept.features.map((item, idx) => (
                  <div key={idx} className="modal-feature-item">
                    <CheckCircle size={16} className="text-cyan flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="modal-tech-section">
                <h4 className="modal-subheading">Technology Stack & Methodology:</h4>
                <div className="tech-tags-list">
                  {selectedConcept.techStack.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary btn-sm"
                onClick={() => setSelectedConcept(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Demo / Source Placeholder Notice Modal */}
      {demoNotice && (
        <div className="modal-backdrop" onClick={() => setDemoNotice(null)}>
          <div className="modal-card notice-modal glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">{demoNotice.projectName} — {demoNotice.type}</h3>
              <button 
                type="button" 
                className="modal-close-btn"
                onClick={() => setDemoNotice(null)}
                aria-label="Close notice"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div className="notice-box">
                <Info size={20} className="text-cyan flex-shrink-0" />
                <p className="notice-text">
                  This project uses an identifiable placeholder URL (<strong>{demoNotice.url}</strong>).
                </p>
              </div>
              <p className="notice-subtext">
                As a 1st-year student actively developing this concept, you can update this link anytime inside <code>src/data/portfolioData.js</code> under the <code>projects</code> array once your repository or deployment is live!
              </p>
            </div>

            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-primary btn-sm"
                onClick={() => setDemoNotice(null)}
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

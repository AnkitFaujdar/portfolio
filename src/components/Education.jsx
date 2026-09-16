import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Building2, 
  Sparkles, 
  CheckCircle2, 
  Edit3, 
  Award,
  BookMarked
} from 'lucide-react';
import { educationData } from '../data/portfolioData';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section-wrapper education-section">
      <div className="portfolio-container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            My <span className="highlight">Education</span>
          </h2>
          <p className="section-subtitle">
            Formal academic foundation in Computer Science, Artificial Intelligence, and analytical science.
          </p>
        </div>

        {/* Education Cards */}
        <div className="education-grid">
          {educationData.map((edu, idx) => {
            const isCurrent = edu.isCurrent;

            return (
              <div 
                key={idx} 
                className={`education-card glass-card ${isCurrent ? 'current-edu-card' : 'placeholder-edu-card'}`}
              >
                {/* Status / Year Badge */}
                <div className="edu-card-top">
                  <div className="edu-icon-badge">
                    <GraduationCap size={22} className={isCurrent ? 'text-primary' : 'text-cyan'} />
                  </div>
                  
                  <div className="edu-time-badge">
                    <Calendar size={13} />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <div className="edu-card-body">
                  <div className="edu-status-indicator">
                    {isCurrent ? (
                      <span className="edu-active-status">
                        <span className="pulse-dot" />
                        <span>Currently Pursuing • 1st Year</span>
                      </span>
                    ) : (
                      <span className="edu-completed-status">
                        <BookMarked size={13} />
                        <span>Foundation Stream (PCM)</span>
                      </span>
                    )}
                  </div>

                  <h3 className="edu-degree-title">{edu.degree}</h3>

                  <div className="edu-institution-line">
                    <Building2 size={16} className="text-cyan flex-shrink-0" />
                    <span className="edu-institution-name">{edu.institution}</span>
                  </div>

                  {/* Highlights or Placeholder Info */}
                  <ul className="edu-highlights-list">
                    {edu.highlights.map((point, hIdx) => (
                      <li key={hIdx} className="edu-highlight-point">
                        <CheckCircle2 size={15} className="text-cyan flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Editable Placeholder Callout for Class XII */}
                  {!isCurrent && (
                    <div className="school-placeholder-box">
                      <div className="placeholder-info-row">
                        <span className="placeholder-label">School Name:</span>
                        <span className="placeholder-value">{edu.institution}</span>
                      </div>
                      <div className="placeholder-info-row">
                        <span className="placeholder-label">Percentage / Score:</span>
                        <span className="placeholder-value">{edu.gradePlaceholder}</span>
                      </div>
                      <div className="placeholder-note">
                        <Edit3 size={13} />
                        <span>Easily update with your school name & percentage in <code>src/data/portfolioData.js</code></span>
                      </div>
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

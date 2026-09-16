import React from 'react';
import { 
  GraduationCap, 
  Terminal, 
  Layout, 
  Rocket, 
  BrainCircuit, 
  Calendar, 
  Sparkles 
} from 'lucide-react';
import { learningJourney } from '../data/portfolioData';
import './LearningJourney.css';

const iconMap = {
  GraduationCap,
  Terminal,
  Layout,
  Rocket,
  BrainCircuit,
};

export default function LearningJourney() {
  return (
    <section id="journey" className="section-wrapper journey-section">
      <div className="portfolio-container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Rocket size={14} />
            <span>Path to Mastery</span>
          </div>
          <h2 className="section-title">
            My Learning <span className="highlight">Journey</span>
          </h2>
          <p className="section-subtitle">
            An honest, transparent progression of my computer science education, practical milestones, and evolving technical focus.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          <div className="timeline-track-line" />

          {learningJourney.map((step, idx) => {
            const StepIcon = iconMap[step.icon] || Sparkles;
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={step.title} 
                className={`timeline-item ${isEven ? 'timeline-left' : 'timeline-right'}`}
              >
                {/* Node Indicator */}
                <div className="timeline-node">
                  <div className="node-outer-glow">
                    <div className="node-inner-dot">
                      <StepIcon size={16} className="text-cyan" />
                    </div>
                  </div>
                </div>

                {/* Timeline Card */}
                <div className="timeline-card glass-card">
                  <div className="timeline-card-header">
                    <div className="timeline-year-chip">
                      <Calendar size={12} />
                      <span>{step.year}</span>
                    </div>

                    {step.badge && (
                      <span className="timeline-badge">
                        {step.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="timeline-title">{step.title}</h3>
                  <h4 className="timeline-subtitle">{step.subtitle}</h4>
                  <p className="timeline-desc">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

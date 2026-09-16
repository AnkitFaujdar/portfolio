import React from 'react';
import { 
  Target, 
  Code2, 
  Globe, 
  Brain, 
  Cpu, 
  Layers, 
  Briefcase, 
  Compass, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { goals } from '../data/portfolioData';
import './Goals.css';

const iconMap = {
  Code2,
  Globe,
  Brain,
  Cpu,
  Layers,
  Briefcase,
  Target,
  Compass,
};

export default function Goals() {
  return (
    <section id="goals" className="section-wrapper goals-section">
      <div className="portfolio-container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Target size={14} />
            <span>Future Roadmap</span>
          </div>
          <h2 className="section-title">
            What I'm <span className="highlight">Working Toward</span>
          </h2>
          <p className="section-subtitle">
            Clear milestones and forward-looking ambitions shaping my technical preparation throughout my engineering degree.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="goals-grid">
          {goals.map((goal, idx) => {
            const GoalIcon = iconMap[goal.icon] || Sparkles;

            return (
              <div key={idx} className="goal-card glass-card">
                <div className="goal-card-top">
                  <div className="goal-icon-box">
                    <GoalIcon size={20} className="text-cyan" />
                  </div>
                  <span className="goal-category-badge">{goal.category}</span>
                </div>

                <h3 className="goal-title">{goal.title}</h3>
                <p className="goal-description">{goal.description}</p>

                <div className="goal-card-footer">
                  <span className="goal-status-indicator">
                    <span className="goal-indicator-dot" />
                    <span>In Active Progress</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Aspirations Banner */}
        <div className="aspirations-banner glass-card">
          <div className="aspirations-icon-box">
            <Compass size={28} className="text-cyan" />
          </div>
          <div className="aspirations-text">
            <h4 className="aspirations-title">Engineering Philosophy</h4>
            <p className="aspirations-desc">
              "Great software engineers aren't created overnight—they are built day after day through disciplined consistency, inquisitive problem-solving, and a genuine curiosity for how things work under the hood."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

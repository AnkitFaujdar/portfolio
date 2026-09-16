import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Wrench, 
  Brain, 
  Sparkles, 
  BookOpen, 
  Check, 
  Terminal, 
  Cpu, 
  Layers, 
  GitBranch, 
  Github, 
  Laptop, 
  Zap, 
  Bot, 
  BarChart3, 
  Network, 
  Smartphone,
  Info
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import './Skills.css';

// Dynamic icon resolver
const iconMap = {
  Code2,
  Layout,
  Wrench,
  Brain,
  Terminal,
  Cpu,
  Layers,
  GitBranch,
  Github,
  Laptop,
  Zap,
  Bot,
  BarChart3,
  Network,
  Smartphone,
  Sparkles
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="section-wrapper skills-section">
      <div className="portfolio-container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Toolkit</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="highlight">Competencies</span>
          </h2>
          <p className="section-subtitle">
            Core technologies and tools I utilize for development, alongside active exploration in artificial intelligence and data science.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => {
            const CatIcon = iconMap[category.icon] || Code2;
            const isLearning = category.isLearningArea;

            return (
              <div 
                key={category.title} 
                className={`skill-category-card glass-card ${isLearning ? 'learning-card-glow' : ''}`}
              >
                {/* Card Top Header */}
                <div className="category-header">
                  <div className="category-icon-title">
                    <div className={`category-icon-box ${isLearning ? 'learning-icon-box' : ''}`}>
                      <CatIcon size={22} className={isLearning ? 'text-amber' : 'text-primary'} />
                    </div>
                    <div>
                      <h3 className="category-title">{category.title}</h3>
                      <p className="category-desc">{category.description}</p>
                    </div>
                  </div>

                  {/* Badge for AI & Data Science (Clearly marked as learning area) */}
                  {category.badge && (
                    <span className="learning-badge">
                      <BookOpen size={12} />
                      <span>{category.badge}</span>
                    </span>
                  )}
                </div>

                {/* Skill Items Pills / Grid */}
                <div className="skills-pill-list">
                  {category.skills.map((skill, sIdx) => {
                    const SkillIcon = iconMap[skill.icon] || Code2;
                    const isHovered = hoveredSkill === `${catIndex}-${sIdx}`;

                    return (
                      <div
                        key={skill.name}
                        className={`skill-pill-item ${isHovered ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredSkill(`${catIndex}-${sIdx}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="skill-pill-left">
                          <SkillIcon size={16} className="skill-icon text-cyan" />
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-level-badge">{skill.level}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Footer Note for AI learning card */}
                {isLearning && (
                  <div className="learning-disclaimer">
                    <Info size={14} className="disclaimer-icon text-amber" />
                    <p className="disclaimer-text">
                      Currently exploring foundational math, machine learning algorithms, and modern generative AI tools as part of my 1st-year B.Tech specialization.
                    </p>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

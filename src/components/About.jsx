import React from 'react';
import { 
  GraduationCap, 
  Brain, 
  Code, 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  Target,
  Layers
} from 'lucide-react';
import { personalInfo, aboutStats } from '../data/portfolioData';
import './About.css';

export default function About() {
  const highlights = [
    "First-year undergraduate at JECRC University focusing on Computer Science with AI & Data Science",
    "Gaining hands-on experience in modern frontend web development (HTML, CSS, JavaScript, React)",
    "Strengthening core programming and problem-solving skills primarily with Python, C, and C++",
    "Exploring foundational Artificial Intelligence, Machine Learning concepts, and modern GenAI tools",
    "Active participant in hackathons, collaborative coding sessions, and practical project builds",
    "Long-term career objective: to develop into a high-impact Software & AI Engineer"
  ];

  return (
    <section id="about" className="section-wrapper about-section">
      <div className="portfolio-container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Discover My Path</span>
          </div>
          <h2 className="section-title">
            About <span className="highlight">Me</span>
          </h2>
          <p className="section-subtitle">
            An ambitious first-year engineer building strong foundations across software development, algorithms, and artificial intelligence.
          </p>
        </div>

        {/* Content Layout */}
        <div className="about-grid">
          
          {/* Main Narrative Card */}
          <div className="about-narrative-card glass-card">
            <div className="narrative-header">
              <div className="avatar-chip">
                <span className="avatar-letter">A</span>
              </div>
              <div className="narrative-meta">
                <h3 className="narrative-name">{personalInfo.name}</h3>
                <p className="narrative-role">{personalInfo.title} • {personalInfo.institution}</p>
              </div>
            </div>

            <div className="narrative-body">
              <p>
                Hello! I am a <strong>first-year B.Tech student in Computer Science & Engineering</strong> specializing in <strong>Artificial Intelligence & Data Science</strong> at <strong>JECRC University</strong>. 
              </p>
              <p>
                My passion lies at the intersection of practical software engineering and emerging intelligent technologies. I spend my time exploring programming fundamentals with <strong>Python</strong>, crafting responsive and intuitive web interfaces with <strong>React</strong>, and strengthening my core problem-solving mindset.
              </p>
              <p>
                Rather than remaining confined to textbook theory, I prioritize learning by building—developing conceptual web applications, diving into collaborative student hackathons, and deconstructing real-world systems. My ultimate aspiration is to grow into a resilient, forward-thinking software and AI professional capable of engineering solutions that create genuine value.
              </p>
            </div>

            {/* Key Focus Highlights */}
            <div className="about-highlights-wrapper">
              <h4 className="highlights-title">Core Focus & Values</h4>
              <div className="highlights-list">
                {highlights.map((point, index) => (
                  <div key={index} className="highlight-item">
                    <CheckCircle2 size={16} className="highlight-icon text-cyan" />
                    <span className="highlight-text">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Statistics & Highlights (Honest, No fake counts) */}
          <div className="about-stats-column">
            
            {/* Stat Cards Grid */}
            <div className="stats-cards-grid">
              {aboutStats.map((stat, idx) => (
                <div key={idx} className="stat-card glass-card">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-sub">{stat.sub}</span>
                </div>
              ))}
            </div>

            {/* Quick Overview Card */}
            <div className="overview-callout glass-card">
              <div className="callout-icon-box">
                <Target size={22} className="text-cyan" />
              </div>
              <div className="callout-text">
                <h4 className="callout-title">Current Academic Trajectory</h4>
                <p className="callout-desc">
                  Enrolled in the 2026 undergraduate cohort at JECRC University. Focused on semester coursework, algorithmic foundations, web applications, and exploratory AI projects.
                </p>
              </div>
            </div>

            <div className="overview-callout glass-card">
              <div className="callout-icon-box">
                <Layers size={22} className="text-primary" />
              </div>
              <div className="callout-text">
                <h4 className="callout-title">Practical Project Mindset</h4>
                <p className="callout-desc">
                  Believing that the best way to master computer science is by shipping code. Currently prototyping concepts like Rasoi-Gen AI while refining web development skills.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

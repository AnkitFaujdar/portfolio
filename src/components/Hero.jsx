import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Terminal as TerminalIcon, 
  Code2, 
  Sparkles, 
  Copy, 
  Check, 
  FileCode, 
  Cpu, 
  Compass, 
  ExternalLink 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  const codeSnippets = {
    profile: `# student_profile.py
class StudentDeveloper:
    def __init__(self):
        self.name = "Ankit Faujdar"
        self.degree = "B.Tech CSE (AI & Data Science)"
        self.university = "JECRC University"
        self.status = "1st Year Undergrad"
        self.passions = ["Web Dev", "Python", "AI/ML"]
        self.open_for = "Learning & Opportunities"

    def current_mission(self):
        return "Building practical tech solutions"

developer = StudentDeveloper()
print(developer.current_mission())
# Output: "Building practical tech solutions"`,

    stack: `// tech_stack.json
{
  "focus": "Computer Science & AI",
  "languages": ["Python", "C", "C++", "JavaScript"],
  "frontend": ["HTML5", "CSS3", "React", "Responsive UI"],
  "tools": ["Git", "GitHub", "VS Code", "Vite"],
  "exploring": [
    "Artificial Intelligence",
    "Data Science",
    "Machine Learning",
    "Generative AI"
  ]
}`,

    terminal: `$ whoami
ankit_faujdar@jecrc-hub:~$ 

$ python -m dev.status
[✓] Core fundamentals: IN_PROGRESS
[✓] Web development: ACTIVE_BUILDER
[✓] AI & Data Science: DEEP_LEARNING
[✓] Collaboration: OPEN_TO_CONNECT

$ echo "Ready to collaborate and build!"`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-ambient-glow" />
      <div className="portfolio-container hero-container">
        
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-badge-wrapper">
            <span className="hero-status-badge">
              <span className="pulse-dot" />
              <span>{personalInfo.statusBadge}</span>
            </span>
          </div>

          {/* Main Headings */}
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name-gradient">{personalInfo.name}</span>
          </h1>

          <p className="hero-subtitle">
            <span className="highlight-tag">{personalInfo.title}</span>
          </p>

          <p className="hero-university-tag">
            <Compass size={16} className="inline-icon text-cyan" />
            <span>{personalInfo.institution} • {personalInfo.year}</span>
          </p>

          {/* Description */}
          <p className="hero-description">
            {personalInfo.tagline}
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a 
              href="#projects" 
              className="btn btn-primary"
              onClick={(e) => scrollToSection(e, 'projects')}
            >
              <span>View My Projects</span>
              <ArrowRight size={18} />
            </a>

            <a 
              href="#contact" 
              className="btn btn-secondary"
              onClick={(e) => scrollToSection(e, 'contact')}
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Quick Mini Badges */}
          <div className="hero-tech-pills">
            <span className="tech-pill"><Code2 size={13} /> Python & Web Dev</span>
            <span className="tech-pill"><Sparkles size={13} /> AI & Data Science</span>
            <span className="tech-pill"><Cpu size={13} /> First-Year Builder</span>
          </div>
        </div>

        {/* Right Column: Interactive Code Terminal Card */}
        <div className="hero-visual">
          <div className="code-terminal-window glass-card">
            
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              
              <div className="terminal-tabs">
                <button 
                  className={`terminal-tab ${activeTab === 'profile' ? 'active' : ''}`}
                  onClick={() => setActiveTab('profile')}
                >
                  <FileCode size={13} />
                  <span>profile.py</span>
                </button>
                <button 
                  className={`terminal-tab ${activeTab === 'stack' ? 'active' : ''}`}
                  onClick={() => setActiveTab('stack')}
                >
                  <Code2 size={13} />
                  <span>stack.json</span>
                </button>
                <button 
                  className={`terminal-tab ${activeTab === 'terminal' ? 'active' : ''}`}
                  onClick={() => setActiveTab('terminal')}
                >
                  <TerminalIcon size={13} />
                  <span>bash</span>
                </button>
              </div>

              <button 
                className="terminal-copy-btn" 
                onClick={handleCopyCode}
                title="Copy snippet"
                aria-label="Copy code snippet"
              >
                {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
              </button>
            </div>

            {/* Terminal Code Body */}
            <div className="terminal-body">
              <pre className="terminal-code">
                <code>{codeSnippets[activeTab]}</code>
              </pre>
            </div>

            {/* Terminal Footer Status */}
            <div className="terminal-footer">
              <div className="terminal-status-left">
                <span className="pulse-dot" />
                <span className="status-label">B.Tech CSE Undergrad • JECRC University</span>
              </div>
              <span className="terminal-status-right">UTF-8</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { 
  Terminal, 
  Github, 
  Linkedin, 
  Mail, 
  Heart, 
  ArrowUp,
  Sparkles
} from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="portfolio-footer">
      <div className="portfolio-container">
        
        {/* Main Footer Row */}
        <div className="footer-top-row">
          
          {/* Brand Info */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-logo" onClick={(e) => handleNavClick(e, '#home')}>
              <div className="brand-icon">
                <Terminal size={18} className="text-cyan" />
              </div>
              <div className="brand-text">
                <span className="brand-name">ANKIT</span>
                <span className="brand-sub">FAUJDAR</span>
              </div>
            </a>

            <p className="footer-degree">
              {personalInfo.title}
            </p>
            <p className="footer-uni">
              {personalInfo.institution} • Jaipur, India
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="footer-link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="footer-social-col">
            <h4 className="footer-col-title">Connect & Profiles</h4>
            <p className="footer-social-desc">
              Explore my code repositories, connect professionally, or send a direct email.
            </p>

            <div className="footer-social-icons">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="social-icon-btn"
                aria-label="Email Ankit"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © 2026 {personalInfo.name}. All rights reserved.
          </p>

          <p className="built-with-tag">
            <span>Designed & Built with</span>
            <span className="react-highlight">React</span>
            <span>& Vite</span>
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>

      </div>
    </footer>
  );
}

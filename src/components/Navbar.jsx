import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolioData';
import './Navbar.css';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="portfolio-container navbar-inner">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="brand-logo" 
          onClick={(e) => handleNavClick(e, '#home')}
          aria-label="Ankit Faujdar Home"
        >
          <div className="brand-icon">
            <Terminal size={18} className="text-cyan" />
          </div>
          <div className="brand-text">
            <span className="brand-name">ANKIT</span>
            <span className="brand-sub">FAUJDAR</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name} className="nav-item">
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.name}
                    {isActive && <span className="active-glow-pill" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="navbar-actions">
          <a
            href="#contact"
            className="btn btn-primary btn-sm connect-btn desktop-only"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-toggle-btn mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop & Drawer */}
      <div 
        className={`mobile-menu-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="brand-text">
            <span className="brand-name">ANKIT</span>
            <span className="brand-sub">FAUJDAR</span>
          </div>
          <button
            type="button"
            className="mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-nav" aria-label="Mobile Navigation">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name} className="mobile-nav-item">
                  <a
                    href={link.href}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="mobile-active-dot" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mobile-menu-footer">
          <a
            href="#contact"
            className="btn btn-primary w-full"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={16} />
          </a>
          <p className="mobile-footer-text">
            {personalInfo.title} • {personalInfo.institution}
          </p>
        </div>
      </div>
    </header>
  );
}

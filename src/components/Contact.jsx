import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  Info
} from 'lucide-react';
import { contactInfo, personalInfo } from '../data/portfolioData';
import './Contact.css';

const iconMap = {
  Mail,
  Github,
  Linkedin,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Email format validation helper
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!validateEmail(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please provide a subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error upon typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Client-side simulation of message submission
    // NOTE FOR ANKIT: Integrate your EmailJS, Formspree, or backend endpoint here!
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setErrors({});
    }, 600);
  };

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="portfolio-container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Direct Reach</span>
          </div>
          <h2 className="section-title">
            Let's Build <span className="highlight">Something Together</span>
          </h2>
          <p className="section-subtitle">
            {contactInfo.description}
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-grid">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="contact-info-column">
            
            <div className="contact-intro-card glass-card">
              <h3 className="intro-heading">Get in Touch</h3>
              <p className="intro-text">
                Whether you have an interesting student project, a hackathon idea, want to discuss AI & web development, or simply want to connect with a passionate first-year engineering student, feel free to reach out!
              </p>

              <div className="location-item">
                <MapPin size={18} className="text-cyan flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Social & Channel Cards */}
            <div className="channels-list">
              {contactInfo.channels.map((channel) => {
                const ChannelIcon = iconMap[channel.icon] || Mail;
                const isEmail = channel.name === 'Email';

                return (
                  <div key={channel.name} className="channel-card glass-card">
                    <div className="channel-card-left">
                      <div className="channel-icon-box">
                        <ChannelIcon size={20} className="text-cyan" />
                      </div>
                      <div>
                        <h4 className="channel-name">{channel.name}</h4>
                        <p className="channel-value">{channel.value}</p>
                        <span className="channel-note">{channel.note}</span>
                      </div>
                    </div>

                    <div className="channel-card-actions">
                      {isEmail ? (
                        <button
                          type="button"
                          className="btn btn-outline btn-sm"
                          onClick={() => handleCopyEmail(channel.value)}
                          title="Copy email to clipboard"
                        >
                          {copiedEmail ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                          <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                        </button>
                      ) : (
                        <a
                          href={channel.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline btn-sm"
                        >
                          <span>Visit</span>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Developer Backend Notice Callout */}
            <div className="backend-callout glass-card">
              <Info size={16} className="text-cyan flex-shrink-0" />
              <p className="backend-callout-text">
                <strong>Developer Note:</strong> The form on the right validates inputs client-side and is ready to be bound to EmailJS, Formspree, or your custom Node.js server.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-column">
            <div className="contact-form-card glass-card">
              
              <h3 className="form-title">Send a Message</h3>
              <p className="form-subtitle">Fill in the details below to send me a direct inquiry.</p>

              {submitSuccess ? (
                <div className="form-success-banner">
                  <div className="success-icon-box">
                    <CheckCircle2 size={32} className="text-emerald" />
                  </div>
                  <h4 className="success-title">Message Received!</h4>
                  <p className="success-desc">
                    Thank you for reaching out! Your form inputs were validated successfully. In production, this form connects to your preferred email/webhook service.
                  </p>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => setSubmitSuccess(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  
                  {/* Name Input */}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name <span className="required-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className={`form-input ${errors.name ? 'input-error' : ''}`}
                    />
                    {errors.name && (
                      <span className="error-message">
                        <AlertCircle size={13} /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="required-star">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className={`form-input ${errors.email ? 'input-error' : ''}`}
                    />
                    {errors.email && (
                      <span className="error-message">
                        <AlertCircle size={13} /> {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Subject Input */}
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subject <span className="required-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Project collaboration / Discussion"
                      className={`form-input ${errors.subject ? 'input-error' : ''}`}
                    />
                    {errors.subject && (
                      <span className="error-message">
                        <AlertCircle size={13} /> {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message <span className="required-star">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message or project thoughts here..."
                      className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
                    />
                    {errors.message && (
                      <span className="error-message">
                        <AlertCircle size={13} /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-primary w-full form-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Validating & Submitting...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

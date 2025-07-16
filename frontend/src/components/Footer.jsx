import React from 'react';
import '../styles/Home.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">🔍</span>
            ResearchStarter
          </div>
          <p className="footer-description">
            The fastest way to discover and understand research papers.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4 className="footer-heading">Product</h4>
            <ul>
              <li><a href="/features">Features</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/domains">Domains</a></li>
              <li><a href="/chat">Research Chat</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Resources</h4>
            <ul>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/tutorials">Tutorials</a></li>
              <li><a href="/help">Help Center</a></li>
              <li><a href="/api">API</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Company</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">© 2023 ResearchStarter. All rights reserved.</p>
        <div className="footer-social">
          <a href="/twitter" aria-label="Twitter">🐦</a>
          <a href="/linkedin" aria-label="LinkedIn">🔗</a>
          <a href="/github" aria-label="GitHub">🐙</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
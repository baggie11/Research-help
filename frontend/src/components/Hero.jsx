import React from 'react';
import '../styles/Home.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Your Research Journey Starts Here</h1>
        <p className="hero-subtitle">
          Discover trending papers, explore foundational research, and chat with AI to accelerate your learning.
        </p>
        <div className="hero-buttons">
          <button className="hero-button primary">Explore Domains</button>
          <button className="hero-button secondary">Try Research Chat</button>
        </div>
      </div>
      <div className="hero-image">
        <div className="paper-stack">
          <div className="paper paper-1"></div>
          <div className="paper paper-2"></div>
          <div className="paper paper-3"></div>
          <div className="paper paper-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
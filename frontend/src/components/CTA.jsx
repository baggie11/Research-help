import React from 'react';
import '../styles/Home.css'

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2 className="cta-title">Ready to accelerate your research?</h2>
        <p className="cta-subtitle">Join thousands of students and researchers discovering papers faster</p>
        <div className="cta-buttons">
          <button className="cta-button primary">Get Started - It's Free</button>
          <button className="cta-button secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
import React from 'react';
import '../styles/Home.css'

const DomainCard = ({ name, papersCount, color }) => {
  return (
    <div className="domain-card" style={{ borderTop: `5px solid ${color}` }}>
      <h3 className="domain-name">{name}</h3>
      <p className="domain-count">{papersCount} papers</p>
      <button className="domain-button">Explore</button>
    </div>
  );
};

const Domains = () => {
  const domains = [
    { name: 'Artificial Intelligence', papersCount: '1,240', color: '#3498db' },
    { name: 'Bioinformatics', papersCount: '856', color: '#2ecc71' },
    { name: 'Quantum Computing', papersCount: '572', color: '#9b59b6' },
    { name: 'Neuroscience', papersCount: '932', color: '#e74c3c' },
    { name: 'Climate Science', papersCount: '674', color: '#f39c12' },
    { name: 'Materials Science', papersCount: '783', color: '#1abc9c' }
  ];

  return (
    <section className="domains">
      <h2 className="section-title">Popular Research Domains</h2>
      <p className="section-subtitle">Browse trending research areas and their foundational papers</p>
      <div className="domains-grid">
        {domains.map((domain, index) => (
          <DomainCard key={index} {...domain} />
        ))}
      </div>
      <button className="view-all-button">View All Domains</button>
    </section>
  );
};

export default Domains;
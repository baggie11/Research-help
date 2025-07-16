import React from 'react';
import '../styles/Home.css';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: '📊',
      title: 'Trending Research',
      description: 'Discover the latest impactful papers in your field with automated summaries to stay current with cutting-edge developments.'
    },
    {
      icon: '🏛️',
      title: 'Foundational Papers',
      description: 'Access curated lists of seminal papers that established your research domain, helping you understand core concepts and theories.'
    },
    {
      icon: '🤖',
      title: 'Paper Chat Assistant',
      description: 'Get instant explanations, ask questions, and discuss concepts with any paper in our database through our AI-powered chat interface.'
    },
    {
      icon: '📂',
      title: 'Personal Library',
      description: 'Save, organize, and annotate important papers with tags and notes to build your personalized research collection.'
    },
    {
      icon: '🔍',
      title: 'Smart Recommendations',
      description: 'Get personalized paper suggestions based on your reading history and research interests.'
    },
    {
      icon: '📈',
      title: 'Visual Analysis',
      description: 'See citation networks and trends to understand a paper\'s impact and relationships within the research landscape.'
    }
  ];

  return (
    <section className="features-section">
      <div className="features-header">
        <p className="section-subtitle">
          ResearchStarter eliminates the overwhelm of beginning academic research by providing 
          intelligent tools and curated knowledge in one platform
        </p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
import React, { useState } from 'react';
import '../styles/ResearchTrends.css';

const ResearchTrends = () => {
  const [topic, setTopic] = useState('');
  const [papers, setPapers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPapers = async (searchTopic) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:5000/api/recent/getPapers?query=${encodeURIComponent(searchTopic)}&max_results=5`
      );

      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response.json();

      const processedData = data.map((paper) => ({
        id: paper.id,
        title: paper.title,
        authors: paper.authors,
        topics: paper.topics,
        abstract: paper.abstract,
        short_summary: paper.short_summary,
        published: paper.published,
        url: paper.url,
        pdfUrl: paper.pdfUrl,
      }));

      console.log(processedData);

      setPapers(processedData);
    } catch (err) {
      setError("Failed to fetch papers. Please try another topic.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (topic.trim()) {
      fetchPapers(topic);
    }
  };

const suggestions = {
  "Artificial Intelligence": "cs.AI",
  "Computation and Language (NLP)": "cs.CL",
  "Computer Vision and Pattern Recognition": "cs.CV",
  "Machine Learning": "cs.LG",
  "Neural and Evolutionary Computing": "cs.NE",
  "Robotics": "cs.RO",
  "Cryptography and Security": "cs.CR",
  "Software Engineering": "cs.SE",
  "Distributed and Cluster Computing": "cs.DC",
  "Databases": "cs.DB",
  "Human-Computer Interaction": "cs.HC",
  "Social and Information Networks": "cs.SI",

  "Probability (Mathematics)": "math.PR",
  "Optimization and Control": "math.OC",
  "Statistics": "math.ST",
  "Statistical Machine Learning": "stat.ML",
  "Statistics Theory": "stat.TH",

  "Optics (Physics)": "physics.optics",
  "Computational Physics": "physics.comp-ph",

  "Neurons and Cognition (Quantitative Biology)": "q-bio.NC",
  "Populations and Evolution (Quantitative Biology)": "q-bio.PE",

  "Economics (Quantitative Finance)": "q-fin.EC",
  "Mathematical Finance": "q-fin.MF",
  "Econometrics": "econ.EM",

  "Systems and Control (Electrical Engineering)": "eess.SY",
  "Signal Processing": "eess.SP",
  "Audio and Speech Processing": "eess.AS",

  "Statistics Applications": "stat.AP",
  "Statistics Computation": "stat.CO",

  "Materials Science (Condensed Matter)": "cond-mat.mtrl-sci",

  "Astrophysics of Galaxies": "astro-ph.GA",
  "High Energy Physics - Theory": "hep-th",
  "General Relativity and Quantum Cosmology": "gr-qc"
};




  return (
    <div className="trends-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Discover What Researchers Are Exploring</h1>
          <p className="subtitle">
            Stay ahead with the latest breakthroughs in any field
          </p>
          <div className="search-container">
            <form onSubmit={handleSubmit}>
              <div className="search-group">
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Enter a research topic (e.g., quantum machine learning)"
                  required
                />
                <button type="submit" className="search-button">
                  {isLoading ? <span className="spinner"></span> : 'Discover Trends'}
                </button>
              </div>
            </form>
            <p className="search-tip">
              Try specific terms or choose from trending topics:
            </p>
            <div className="suggestions">
  {Object.entries(suggestions).map(([label, code], idx) => (
    <button
      key={idx}
      className="suggestion-button"
      onClick={() => {
        setTopic(label);
        fetchPapers(code);  // use the arXiv category code for fetching
      }}
    >
      {label}
    </button>
  ))}
</div>

          </div>
        </div>
        <div className="hero-gradient"></div>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="results-section">
        {papers.length > 0 && (
          <>
            <h2 className="results-title">
              Recent Papers on <span className="topic-highlight">{topic}</span>
            </h2>
            <div className="papers-grid">
              {papers.map((paper) => (
                <div key={paper.id} className="paper-card enhanced-layout">
                  <div className="paper-header">
                    <h3 className="paper-title">{paper.title}</h3>
                    <span className="paper-badge">New</span>
                  </div>

                  <div className="paper-meta">
                    <p><strong>Authors:</strong> {paper.authors}</p>
                    <p><strong>Published:</strong> {paper.published}</p>
                    <p><strong>Topics:</strong> {paper.topics}</p>
                  </div>

                  <div className="short-summary">
                    <h4>Summary</h4>
                    <p>{paper.short_summary}</p>
                  </div>

                  <details className="full-abstract">
                    <summary>Read Full Abstract</summary>
                    <p>{paper.abstract}</p>
                  </details>

                  <div className="paper-actions">
                    <a
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="paper-link"
                    >
                      View on arXiv
                    </a>
                    <a
                      href={paper.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pdf-link"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className='h-[80px]'>

      </div>
    </div>
  );
};

export default ResearchTrends;

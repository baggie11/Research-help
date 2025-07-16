import React, { useState } from 'react';
import '../styles/UrlInput.css';

const UrlInput = ({ onUrlSubmit }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim()) {
      onUrlSubmit(url);
    }
  };

  return (
    <div className="url-input-container">
      <h2>Enter Research Paper URL</h2>
      <p>Paste the link to the paper you want to discuss</p>
      <form onSubmit={handleSubmit} className="url-form">
        <div className="input-group">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://arxiv.org/abs/..."
            required
          />
          <button type="submit" className="submit-btn">
            Analyze
          </button>
        </div>
      </form>
    </div>
  );
};

export default UrlInput;
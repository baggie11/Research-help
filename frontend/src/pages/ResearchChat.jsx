import React, { useState } from 'react';
import UrlInput from '../components/URLInput';
import ChatInterface from '../components/ChatInterface';

function App() {
  const [paperUrl, setPaperUrl] = useState('');
  const [chatStarted, setChatStarted] = useState(false);

  const handleUrlSubmit = (url) => {
    setPaperUrl(url);
    setChatStarted(true);
  };

  return (
    <div className="app">
      {!chatStarted ? (
        <UrlInput onUrlSubmit={handleUrlSubmit} />
      ) : (
        <ChatInterface paperUrl={paperUrl} />
      )}
    </div>
  );
}

export default App;
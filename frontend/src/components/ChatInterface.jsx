import React, { useState } from 'react';
import '../styles/ChatInterface.css';

const ChatInterface = ({ paperUrl }) => {
  const [messages, setMessages] = useState([
    { sender: 'AI', text: `I've loaded the paper from ${paperUrl}. What would you like to know about it?` }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages([...messages, { sender: 'You', text: inputValue }]);
      setInputValue('');
      // Here you would typically call your AI API
      setTimeout(() => {
        setMessages(prev => [...prev, { sender: 'AI', text: 'This would be the AI response from analyzing the paper.' }]);
      }, 1000);
    }
  };

  return (
    <div className="chat-container">
      <div className="paper-info">
        <h3>Discussing: <span>{paperUrl}</span></h3>
      </div>
      
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === 'AI' ? 'ai-message' : 'user-message'}`}>
            <div className="message-text">{message.text}</div>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSendMessage} className="chat-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask about the research paper..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatInterface;
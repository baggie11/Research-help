import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🔍</span>
          ResearchStarter
        </Link>
        <div className="navbar-links">
          <Link to="/recent" className="nav-link">Recent advancements</Link>
          <Link to =  "/" className = "nav-link"> Foundational Papers </Link>
          <Link to="/chat" className="nav-link">Research Chat</Link>
          <Link to="/auth" className="nav-button">Sign In</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import AuthComponent from './pages/Auth';
import ResearchChatComponent from './pages/ResearchChat';
import ResearchTrends from './components/ResearchTrends';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/auth" element = {<AuthComponent/>} />
          <Route path = "/chat" element = {<ResearchChatComponent/>}/>
          <Route path = "/recent" element = {<ResearchTrends/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
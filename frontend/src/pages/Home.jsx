import React from 'react';
import CTA from '../components/CTA';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Domains from '../components/Domains';
import Features from '../components/Feature';
import Hero from '../components/Hero';
import '../styles/Home.css'
import '../App.css'

const Home = () => {
  return (
    <div className="App">
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
    </div>
  );
};

export default Home;
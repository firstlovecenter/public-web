import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Founder from './components/Founder';
import FirstLoveChannel from './components/FirstLoveChannel';
import DagSermons from './components/DagSermons';
import FirstLoveMusic from './components/FirstLoveMusic';
import Giving from './components/Giving';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-black">
      <Navbar />
      <Hero />
      <About />
      <Founder />
      <FirstLoveChannel />
      <DagSermons />
      <FirstLoveMusic />
      <Giving />
      <Footer />
    </div>
  );
}

export default App;
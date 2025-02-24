import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Founder from './components/Founder';
import FirstLoveChannel from './components/FirstLoveChannel';
import DagSermons from './components/DagSermons';
import FirstLoveMusic from './components/FirstLoveMusic';
import Giving from './components/Giving';
import Footer from './components/Footer';
import Global from './components/Global';
import Salvation from './components/Salvation';
import GetInvolved from './components/GetInvolved';

// Scroll restoration component
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const MainContent = () => {
  const location = useLocation();
  
  // Only show home page components if we're on the root path
  if (location.pathname === '/') {
    return (
      <>
        <Hero />
        <About />
        <Founder />
        <FirstLoveChannel />
        <DagSermons />
        <FirstLoveMusic />
        <Giving />
      </>
    );
  }
  
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen overflow-hidden bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/global" element={<Global />} />
          <Route path="/salvation" element={<Salvation />} />
          <Route path="/get-involved" element={<GetInvolved />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
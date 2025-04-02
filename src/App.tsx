import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Founder from './components/Founder';
import FirstLoveChannel from './components/FirstLoveChannel';
import DagSermons from './components/DagSermons';
import FirstLoveMusic from './components/FirstLoveMusic';
import HealingJesus from './components/HealingJesus';
import Giving from './components/Giving';
import Footer from './components/Footer';
import Global from './components/Global';
import Salvation from './components/Salvation';
import GetInvolved from './components/GetInvolved';
import Events from './components/Events.tsx';
import Connect from './components/Connect.tsx';
import Location from './components/Location';
import RedirectToGive from './components/RedirectToGive';

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
  
  // Only show home page ccomponents if we're on the root path
  if (location.pathname === '/') {
    return (
      <>
        <Hero />
        <About />
        <Founder />
        <FirstLoveChannel />
        <DagSermons />
        <FirstLoveMusic />
        <HealingJesus />
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
          <Route path="/events" element={<Events />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/location" element={<Location />} />
          <Route path="/give" element={<RedirectToGive />} />
          <Route
            path="*"
            element={
              <div className="text-white text-center mt-32 text-4xl font-bold">
                404 - Page Not Found
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
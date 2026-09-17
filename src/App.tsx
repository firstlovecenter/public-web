import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Founder from './components/Founder';
import FirstLoveChannel from './components/FirstLoveChannel';
import DagSermons from './components/DagSermons';
import FirstLoveMusic from './components/FirstLoveMusic';
import HealingJesus from './components/HealingJesus';
import Footer from './components/Footer';
import Hero from './components/Hero';

const Global = lazy(() => import('./components/Global'));
const Salvation = lazy(() => import('./components/Salvation'));
const GetInvolved = lazy(() => import('./components/GetInvolved'));
const Events = lazy(() => import('./components/Events'));
const Connect = lazy(() => import('./components/Connect'));
const Location = lazy(() => import('./components/Location'));
const RedirectToGive = lazy(() => import('./components/RedirectToGive'));
const NotFound = lazy(() => import('./components/NotFound'));

const PageLoader = () => <div className="min-h-screen bg-black" aria-label="Loading page" role="status" />;

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);
  return null;
};

const MainContent = () => {
  return <main><Hero /><About /><Founder /><FirstLoveChannel /><DagSermons /><FirstLoveMusic /><HealingJesus /></main>;
};

function App() {
  return <Router><ScrollToTop /><div className="min-h-screen overflow-hidden bg-black"><Navbar /><Suspense fallback={<PageLoader />}><Routes><Route path="/" element={<MainContent />} /><Route path="/global" element={<Global />} /><Route path="/salvation" element={<Salvation />} /><Route path="/get-involved" element={<GetInvolved />} /><Route path="/events" element={<Events />} /><Route path="/connect" element={<Connect />} /><Route path="/location" element={<Location />} /><Route path="/give" element={<RedirectToGive />} /><Route path="*" element={<NotFound />} /></Routes></Suspense><Footer /></div></Router>;
}

export default App;

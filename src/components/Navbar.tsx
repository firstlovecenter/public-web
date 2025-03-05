import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconBrandFacebook, IconBrandInstagram, IconBrandX, IconBrandYoutube, IconBrandTiktok } from '@tabler/icons-react';
import logo from '../assets/images/FL_Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'JESUS', href: '/salvation' },
    { name: 'WHO WE ARE', href: '/#who-we-are' },
    { name: 'EVENTS', href: '/events' },
    { name: 'BOOKS', href: 'https://daghewardmillsbooks.org/new/', external: true },
    { name: 'GLOBAL', href: '/global' },
    { name: 'OUR STORIES', href: '/#founder' },
    { name: 'GET INVOLVED', href: '/get-involved' },
    { name: 'CONNECT', href: '/connect' },
    { name: 'LOCATION', href: '/location' },
    { name: 'GIVING', href: '/#giving' },
  ];

  const socialLinks = [
    { 
      icon: IconBrandFacebook, 
      href: 'https://www.facebook.com/firstlovecenter/',
      color: 'hover:text-[#1877F2]' 
    },
    { 
      icon: IconBrandInstagram, 
      href: 'https://www.instagram.com/firstlovecenter',
      color: 'hover:text-[#E4405F]'
    },
    { 
      icon: IconBrandX, 
      href: 'https://x.com/FirstLoveCenter',
      color: 'hover:text-white'
    },
    { 
      icon: IconBrandYoutube, 
      href: 'https://www.youtube.com/channel/UCEBUZZ9Gyaek_l92J728Yuw',
      color: 'hover:text-[#FF0000]'
    },
    { 
      icon: IconBrandTiktok, 
      href: 'https://www.tiktok.com/@firstlovecenter',
      color: 'hover:text-white'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }

    const isHashLink = href.startsWith('/#');
    
    if (isHashLink) {
      const sectionId = href.replace('/#', '');
      
      if (location.pathname === '/') {
        // Already on homepage, just scroll
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to homepage first, then scroll after a delay
        navigate('/');
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      navigate(href);
    }
    setIsOpen(false);
  };

  // Add effect to handle initial scroll when navigating directly to a section
  useEffect(() => {
    if (location.hash) {
      // Wait for component mount
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <nav className="bg-black/80 backdrop-blur-md fixed w-full z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <button onClick={handleLogoClick} className="flex-shrink-0 flex items-center group">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <img src={logo} alt="First Love Church Logo" className="relative w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500" />
              </div>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleClick(item.href, item.external)}
                  className={`relative text-sm font-medium text-white hover:text-purple-400 transition-colors duration-300 group ${
                    (item.href === '/global' && location.pathname === '/global') ? 'text-purple-400' : ''
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            <div className="h-6 w-px bg-white/10"></div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-400 focus:outline-none transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-20 transform ${
          isOpen 
            ? 'translate-y-0 opacity-100 pointer-events-auto' 
            : '-translate-y-4 opacity-0 pointer-events-none'
        } transition-all duration-300 ease-in-out`}
      >
        <div className="bg-black/95 backdrop-blur-lg border-t border-white/5 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleClick(item.href, item.external)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-white hover:bg-white/5 hover:text-purple-400 text-sm font-medium transition-all duration-300 ${
                    (item.href === '/global' && location.pathname === '/global') ? 'text-purple-400 bg-white/5' : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            
            <div className="border-t border-white/5 pt-4">
              <div className="flex items-center justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full hover:bg-white/5 text-gray-400 ${social.color} transition-all duration-300`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
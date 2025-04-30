import { Facebook, Instagram, Youtube, Twitter, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import flLogo from '../assets/images/FL_Logo.webp';

const Footer = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/firstlovecenter/', label: 'Facebook', bgColor: 'bg-[#1877F2]' },
    { icon: Youtube, href: 'https://www.youtube.com/channel/UCEBUZZ9Gyaek_l92J728Yuw', label: 'YouTube', bgColor: 'bg-[#FF0000]' },
    { icon: Instagram, href: 'https://www.instagram.com/firstlovecenter', label: 'Instagram', bgColor: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]' },
    { icon: Twitter, href: 'https://x.com/FirstLoveCenter', label: 'Twitter', bgColor: 'bg-[#1DA1F2]' },
  ];

  const quickLinks = [
    { name: 'About Us', path: '/#who-we-are' },
    { name: 'Our Founder', path: '/#founder' },
    { name: 'First Love Channel', path: '/#firstlovechannel' },
    { name: 'First Love Music', path: '/#firstlovemusic' },
    { name: 'Give', path: '/#giving' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={sectionRef} className="relative bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:24px_24px] animate-subtle-drift"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:32px_32px] animate-subtle-drift-slow opacity-50"></div>
      </div>
      
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 mb-16">
          {/* Column 1 - About & Social */}
          <div className="lg:col-span-3 space-y-6 animate-on-scroll opacity-0 translate-y-10 [transition-delay:100ms]">
            {/* Logo */}
            <div className="w-20 h-20 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img 
                src={flLogo} 
                alt="First Love Church Logo" 
                className="relative w-full h-full object-contain filter brightness-0 invert transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-blue-400">
                First Love Center
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We believe in Jesus, soul winning and working for the Lord all day long.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={social.label}
                >
                  <div className={`w-9 h-9 ${social.bgColor} rounded flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                    <social.icon className="w-4 h-4 text-white" />
                  </div>
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="lg:col-span-3 space-y-5 animate-on-scroll opacity-0 translate-y-10 [transition-delay:200ms]">
            <h3 className="text-lg font-semibold text-purple-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Service Times */}
          <div className="lg:col-span-3 space-y-5 animate-on-scroll opacity-0 translate-y-10 [transition-delay:300ms]">
            <h3 className="text-lg font-semibold text-pink-400">
              Service Times
            </h3>
            <ul className="space-y-4">
              {/* <li className="group">
                <p className="font-medium text-white/90 text-sm mb-2">Saturday Services</p>
                <div className="space-y-1.5 text-gray-400 text-sm">
                  <p>8:30 AM - Anagkazo Encounter</p>
                  <p>6:30 PM - Gospel Encounter</p>
                </div>
              </li> */}
              <li className="group">
                <p className="font-medium text-white/90 text-sm mb-2">Sunday Services</p>
                <div className="space-y-1.5 text-gray-400 text-sm">
                  <p>8:30 AM - Holy Ghost Encounter</p>
                  <p>12:00 PM - First Love Experience</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4 - Connect With Us */}
          <div className="lg:col-span-3 space-y-5 animate-on-scroll opacity-0 translate-y-10 [transition-delay:400ms]">
            <h3 className="text-lg font-semibold text-red-400">
              Connect With Us
            </h3>
            <p className="text-gray-400 text-sm">Catch the latest sermon from the First Love Center</p>

            {/* App Links */}
            <div className="space-y-2.5 pt-1">
              <a
                href="https://podcasts.apple.com/us/podcast/dag-heward-mills/id1560919244"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-4 py-2 rounded bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 block"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 group-hover:text-white transition-colors duration-300 text-sm">iOS App</span>
                  <ArrowUpRight className="w-3 h-3 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </a>
              <a
                href="https://daghewardmillsfirstlove.podbean.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-4 py-2 rounded bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 block"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 group-hover:text-white transition-colors duration-300 text-sm">Android App</span>
                  <ArrowUpRight className="w-3 h-3 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} First Love Center. All rights reserved.
            </p>
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              Back to top
              <ArrowUpRight className="w-3 h-3 transform group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
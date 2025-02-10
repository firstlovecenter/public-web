import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/FL-Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'JESUS', href: '#' },
    { name: 'WHO WE ARE', href: '#who-we-are' },
    { name: 'GLOBAL', href: '#' },
    { name: 'GET INVOLVED', href: '#' },
    { name: 'GIVING', href: '#' },
    { name: 'EVENTS', href: '#' },
    { name: 'BOOKS', href: '#' },
    { name: 'OUR STORIES', href: '#' },
    { name: 'CONNECT', href: '#' },
    { name: 'LOCATION', href: '#' }
  ];

  const handleClick = (href: string) => {
    setIsOpen(false); // Close mobile menu when clicking a link
    if (href.startsWith('#') && href !== '#') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="bg-black fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src={logo} alt="First Love Church Logo" className="h-12 w-12 object-contain" />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.href);
                }}
                className="text-white hover:text-red-400 px-2 py-2 text-sm font-medium whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-400 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.href);
                }}
                className="block px-3 py-2 text-white hover:text-red-400 text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
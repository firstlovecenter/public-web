import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import SocialLinks from './SocialLinks';
import logo from '../assets/images/FL_Logo.webp';

const menuItems = [
  { name: 'JESUS', href: '/salvation' }, { name: 'WHO WE ARE', href: '/#who-we-are' }, { name: 'EVENTS', href: '/events' },
  { name: 'BOOKS', href: 'https://dagbooks.org/', external: true }, { name: 'GLOBAL', href: '/global' }, { name: 'OUR STORIES', href: '/#founder' },
  { name: 'GET INVOLVED', href: '/get-involved' }, { name: 'CONNECT', href: '/connect' }, { name: 'LOCATION', href: '/location' },
];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) return;
    const timer = window.setTimeout(() => document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' }), 0);
    return () => window.clearTimeout(timer);
  }, [location.hash]);
  const closeMenu = () => setIsOpen(false);
  const itemClass = 'group relative whitespace-nowrap text-sm font-medium text-white transition-colors hover:text-purple-400 focus-visible:text-purple-300';

  const renderMenuItem = (item: typeof menuItems[number], mobile = false) => {
    const className = mobile ? 'block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-white transition-colors hover:bg-white/5 hover:text-purple-400' : itemClass;
    return item.external ? <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className={className} onClick={closeMenu}>{item.name}</a> : <Link key={item.name} to={item.href} className={className} onClick={closeMenu}>{item.name}{!mobile && <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-blue-500 transition-all group-hover:w-full" />}</Link>;
  };

  return (
    <nav className="fixed z-50 w-full border-b border-white/5 bg-black" aria-label="Primary navigation">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" onClick={closeMenu} className="group flex flex-shrink-0 items-center" aria-label="First Love Church home">
            <div className="relative h-12 w-12">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-xl" />
              <img src={logo} alt="" width="48" height="48" className="relative h-full w-full object-contain" />
            </div>
          </Link>
          <div className="hidden items-center gap-6 xl:flex">
            <div className="flex items-center space-x-6">{menuItems.map((item) => renderMenuItem(item))}</div>
            <div className="h-6 w-px bg-white/10" aria-hidden="true" />
            <SocialLinks navigation />
          </div>
          <div className="xl:hidden">
            <button type="button" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-controls="mobile-navigation" className="inline-flex items-center justify-center rounded-md p-2 text-white transition-colors hover:text-purple-400" aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}>
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
      <div id="mobile-navigation" hidden={!isOpen} className="fixed inset-x-0 top-20 xl:hidden">
        <div className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-white/5 bg-black p-4 shadow-xl">
          <div className="space-y-2">{menuItems.map((item) => renderMenuItem(item, true))}</div>
          <div className="mt-4 border-t border-white/5 pt-4"><SocialLinks navigation /></div>
        </div>
        <button type="button" onClick={closeMenu} className="fixed inset-0 -z-10 h-screen w-full cursor-default bg-black/20" aria-label="Close navigation menu" />
      </div>
    </nav>
  );
};

export default Navbar;

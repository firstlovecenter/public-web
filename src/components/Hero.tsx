import { useEffect, useRef, useState } from 'react';
import { ArrowDown, MapPin, Clock, X } from 'lucide-react';

const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsContentVisible(true);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;
    const dialog = dialogRef.current;
    const closeButton = dialog?.querySelector<HTMLButtonElement>('[data-dialog-close]');
    const opener = openerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') return setIsModalOpen(false);
      if (event.key !== 'Tab' || !dialog) return;
      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener('keydown', handleKeyDown); opener?.focus(); };
  }, [isModalOpen]);

  const scrollToNextSection = () => document.getElementById('who-we-are')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative h-screen overflow-hidden bg-[linear-gradient(to_bottom,rgb(17,24,39),rgb(0,0,0))]" aria-labelledby="hero-heading">
      <div className="absolute inset-0" aria-hidden="true">
        <img src="/images/hero-poster.webp" alt="" width="1280" height="720" fetchPriority="high" decoding="sync" className="absolute h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        <div className="absolute inset-0 backdrop-blur-[1px]" />
      </div>
      {!prefersReducedMotion && <video autoPlay loop muted playsInline preload="metadata" poster="/images/hero-poster.webp" className={`absolute h-full w-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-40' : 'opacity-0'}`} onCanPlay={() => setIsVideoLoaded(true)} aria-hidden="true"><source src="/videos/background-video-optimized.webm" type="video/webm" /></video>}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true"><div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:32px_32px] opacity-30 animate-drift" /><div className="absolute -top-1/4 -left-1/4 h-1/2 w-1/2 rounded-full bg-purple-500/30 blur-3xl animate-float" /><div className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-blue-500/30 blur-3xl animate-float-slow" /></div>
      <div className={`relative z-10 flex h-full flex-col items-center justify-center px-4 text-center transition-all duration-1000 ${isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}><div className="max-w-5xl space-y-8"><div className="space-y-6"><h1 id="hero-heading" className="text-6xl font-bold tracking-tight text-white md:text-8xl">First Love Church</h1><div className="relative mx-auto h-1 w-48 overflow-hidden rounded-full md:w-64" aria-hidden="true"><div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500" /></div><p className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-3xl font-medium text-transparent md:text-4xl">Welcome Home</p></div><div className="flex flex-col items-center justify-center gap-6 pt-8 sm:flex-row"><button ref={openerRef} type="button" onClick={() => setIsModalOpen(true)} className="w-64 rounded-xl bg-white/10 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-white/20 sm:w-auto">Join Us This Weekend</button><a href="https://www.youtube.com/channel/UCEBUZZ9Gyaek_l92J728Yuw" target="_blank" rel="noopener noreferrer" className="w-64 rounded-xl border border-white/20 px-8 py-4 text-lg font-medium text-white transition-colors hover:border-white/60 sm:w-auto">Watch Online</a></div></div></div>
      <button type="button" onClick={scrollToNextSection} className="absolute bottom-8 left-1/2 z-40 -translate-x-1/2 text-white/80 transition-colors hover:text-white" aria-label="Scroll to the First Love Center section"><span className="flex flex-col items-center space-y-2"><span className="text-sm font-medium">Scroll Down</span><ArrowDown className="h-6 w-6 animate-bounce" /></span></button>
      {isModalOpen && <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"><button type="button" aria-label="Close service times dialog" className="absolute inset-0 cursor-default bg-black/80 backdrop-blur-lg" onClick={() => setIsModalOpen(false)} /><div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="service-times-title" className="relative max-h-[85vh] w-full max-w-[95vw] overflow-y-auto rounded-2xl bg-gradient-to-br from-gray-900 to-black shadow-2xl sm:max-h-[90vh] sm:rounded-3xl md:max-w-4xl"><button data-dialog-close type="button" onClick={() => setIsModalOpen(false)} className="absolute right-2 top-2 z-10 rounded p-2 text-white/70 transition-colors hover:text-white sm:right-4 sm:top-4" aria-label="Close service times dialog"><X className="h-5 w-5 sm:h-6 sm:w-6" /></button><div className="grid md:grid-cols-2"><div className="bg-white/5 p-6 sm:p-8 md:p-12"><h2 id="service-times-title" className="mb-6 text-2xl font-bold text-white sm:mb-8 sm:text-3xl">Join Us This Weekend</h2><div className="space-y-6 sm:space-y-8"><section><h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-white/90 sm:text-xl"><Clock className="h-5 w-5 text-purple-400" />Saturday Services</h3><div className="space-y-3 pl-7 text-white"><p><strong>8:30 AM — Anagkazo Encounter</strong><br /><span className="text-white/70">Great Hall, Anagkazo Campus</span></p><p><strong>6:30 PM — Gospel Encounter</strong><br /><span className="text-white/70">First Love Center</span></p></div></section><section><h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-white/90 sm:text-xl"><Clock className="h-5 w-5 text-purple-400" />Sunday Services</h3><div className="space-y-3 pl-7 text-white"><p><strong>8:30 AM — Holy Ghost Encounter</strong><br /><span className="text-white/70">First Love Center</span></p><p><strong>12:00 PM — The First Love Experience</strong><br /><span className="text-white/70">First Love Center</span></p></div></section></div></div><div className="border-t border-white/10 bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 sm:p-8 md:border-l md:border-t-0 md:p-12"><h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-white/90 sm:text-xl"><MapPin className="h-5 w-5 text-purple-400" />Our Locations</h3><div className="mb-8 space-y-6 text-white"><p><strong>First Love Center</strong><br /><span className="text-white/70">East Legon, Accra, Ghana</span></p><p><strong>Anagkazo Campus</strong><br /><span className="text-white/70">Great Hall</span></p></div><a href="https://maps.google.com/?q=First+Love+Church+East+Legon" target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-500/20 py-4 font-medium text-white transition-colors hover:bg-purple-500/50"><MapPin className="h-5 w-5" />Get Directions</a></div></div></div></div>}
    </section>
  );
};

export default Hero;

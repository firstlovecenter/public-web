import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowDown, MapPin } from 'lucide-react';

const speakers = [
  'Nathan Morris',
  'David Oyedepo Jnr',
  'David Hall',
  'Kong Hee',
  'John Bevere',
  'Yvan Castanou',
  'Joshua McCauley',
  'Ben Fitzgerald',
];

const FirstLoveConference = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleLearnMore = () => {
    navigate('/events');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollDown = () => {
    const next = document.querySelector('#who-we-are') as HTMLElement | null;
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="first-love-conference"
      ref={sectionRef}
      className="relative h-[100svh] min-h-[580px] overflow-hidden bg-black flex flex-col"
    >
      {/* ── Background image ── */}
      <div className="absolute inset-0">
        {/* Mobile + tablet image */}
        <img
          src="/images/events/Final Conference 2026_mobile.webp"
          alt="First Love Conference 2026"
          className="w-full h-full object-cover object-center block lg:hidden"
        />
        {/* Desktop image */}
        <img
          src="/images/events/Final Conference 2026.webp"
          alt="First Love Conference 2026"
          className="w-full h-full object-cover object-center hidden lg:block"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(109,40,217,0.12)_0%,transparent_60%)]" />
      </div>

      {/* ── Content layer ── */}
      <div className="relative z-10 flex-1 flex flex-col">

        {/* Centre: Explore button */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-white/5 blur-md" />
              <button
                onClick={handleLearnMore}
                className="relative group/cta flex items-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl hover:bg-white/15 hover:border-white/50 transition-all duration-300 hover:scale-105"
              >
                <span className="text-white font-semibold text-sm sm:text-base lg:text-lg tracking-wide">Explore Conference</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 group-hover/cta:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Bottom glass info panel ── */}
        <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="absolute bottom-0 left-0 right-0 h-72 sm:h-80 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 pb-6 sm:pb-10">

            {/* Glass panel */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 backdrop-blur-md bg-white/[0.04]">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

              <div className="px-4 sm:px-7 py-3.5 sm:py-5">

                {/* Title row */}
                <div className="flex items-center justify-between gap-3">

                  <div className="flex flex-col gap-0.5 sm:gap-1 min-w-0">
                    {/* Mobile: stacked. Desktop: one line */}
                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-baseline gap-x-3 gap-y-0.5">
                      <span className="text-base sm:text-xl lg:text-2xl font-black text-white tracking-tight leading-tight">
                        First Love Conference 2026
                      </span>
                      <span className="text-sm sm:text-base lg:text-lg font-normal text-white/55 leading-tight">
                        8th – 12th August
                      </span>
                    </div>
                    {/* Venue */}
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-400 flex-shrink-0" />
                      <span className="text-[11px] sm:text-xs text-white/45 font-medium tracking-wide">First Love Center, Accra, Ghana</span>
                    </div>
                  </div>

                  {/* Animated arrow */}
                  <button
                    onClick={handleLearnMore}
                    aria-label="Learn more about First Love Conference"
                    className="group/arrow flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/15 hover:border-white/40 transition-all duration-300 hover:scale-110"
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 group-hover/arrow:text-white transition-colors duration-300 animate-nudge" />
                  </button>
                </div>

                {/* Divider */}
                <div className="my-2.5 sm:my-3.5 border-t border-white/8" />

                {/* Speaker strip */}
                <div className="flex flex-wrap items-baseline gap-x-0.5 gap-y-1">
                  <span className="text-[8px] sm:text-[9px] text-white/25 uppercase tracking-[0.2em] font-bold mr-1.5 sm:mr-2">Speakers</span>
                  {speakers.map((name, i) => (
                    <span key={name} className="inline-flex items-baseline">
                      <span className="text-[10px] sm:text-[11px] text-white/50 font-medium">{name}</span>
                      {i < speakers.length - 1 && <span className="mx-1.5 sm:mx-2 text-white/15 text-[9px]">·</span>}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-4 right-5 z-20 transition-all duration-700 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <button
          onClick={scrollDown}
          className="flex flex-col items-center gap-1 text-white/20 hover:text-white/50 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default FirstLoveConference;

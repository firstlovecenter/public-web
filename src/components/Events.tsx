import { useRef, useEffect, useState } from 'react';
import { MapPin, Clock } from 'lucide-react';

// ─── Speaker data ────────────────────────────────────────────────────────────
const speakers = [
  {
    name: 'Nathan Morris',
    title: 'Evangelist & Revivalist',
    image: '/images/events/speakers/nathan_morris.jpg',
    infoImage: '/images/events/speakers/nathan_morris_2.jpg',
  },
  {
    name: 'David Oyedepo Jnr',
    title: 'Senior Pastor, Faith Tabernacle',
    image: '/images/events/speakers/david_oyedepo_jnr.jpg',
    infoImage: '/images/events/speakers/david_oyedepo_jnr_2.jpg',
  },
  {
    name: 'David Hall',
    title: 'Pastor & Author',
    image: '/images/events/speakers/david_hall.jpg',
    infoImage: '/images/events/speakers/david_hall_2.jpg',
  },
  {
    name: 'John Bevere',
    title: 'Author & Minister',
    image: '/images/events/speakers/john_bevere.jpg',
    infoImage: '/images/events/speakers/john_bevere_2.jpg',
  },
  // {
  //   name: 'Kong Hee',
  //   title: 'Founder, City Harvest Church',
  //   image: null,
  //   infoImage: null,
  // },
  // {
  //   name: 'Yvan Castanou',
  //   title: 'Bishop & Apostle',
  //   image: null,
  //   infoImage: null,
  // },
  // {
  //   name: 'Joshua McCauley',
  //   title: 'Pastor & Revivalist',
  //   image: null,
  //   infoImage: null,
  // },
  // {
  //   name: 'Ben Fitzgerald',
  //   title: 'Founder, Awakening Europe',
  //   image: null,
  //   infoImage: null,
  // },
];

// ─── Weekly events data ───────────────────────────────────────────────────────
const weeklyEvents = [
  {
    day: 'Sunday',
    events: [
      { name: 'Holy Ghost Encounter Service', time: '8:30 AM', image: '/images/events/HGE.webp', description: 'Start your Sunday with a powerful encounter with the Holy Spirit' },
      { name: 'The First Love Experience Service', time: '12:00 PM', image: '/images/events/Experience.webp', description: 'Experience the presence of God' },
    ],
  },
  {
    day: 'Monday',
    events: [
      { name: 'First Love Conversations', time: '7:00 PM', image: '/images/events/Convo.webp', description: 'Join us for enriching conversations' },
    ],
  },
  {
    day: 'Tuesday',
    events: [
      { name: 'Flow Prayer', time: '4:00 AM', image: '/images/events/prayer.webp', description: 'Early morning prayer time with Bishop Dag Heward-Mills' },
    ],
  },
  {
    day: 'Wednesday',
    events: [
      { name: 'Preventing the Dawn', time: '5:00 AM', image: '/images/events/prevent.webp', description: 'Rise before dawn in worship' },
    ],
  },
  {
    day: 'Thursday',
    events: [
      { name: 'Feed the FLOC', time: '7:00 PM', image: '/images/events/flock.webp', description: 'Nourishing the flock with the Word' },
    ],
  },
  {
    day: 'Friday',
    events: [
      { name: 'Flow Prayer', time: '4:00 AM', image: '/images/events/prayer.webp', description: 'Early morning prayer time with Bishop Dag Heward-Mills' },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
const Events = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [conferenceVideoPlaying, setConferenceVideoPlaying] = useState(false);

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
      { threshold: 0.08 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* ══════════════════════════════════════════
          CONFERENCE HERO
      ══════════════════════════════════════════ */}
      <div className="relative pt-20">

        {/* ── Speaker photo collage background ── */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Panel 1 – far left (Nathan Morris) */}
          <div className="absolute top-0 left-0 w-1/4 h-full">
            <img
              src="/images/events/speakers/nathan_morris.jpg"
              alt=""
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-black z-10" />
          </div>

          {/* Panel 2 – centre-left (David Hall) */}
          <div className="absolute top-0 left-1/4 w-1/4 h-full">
            <img
              src="/images/events/speakers/david_hall.jpg"
              alt=""
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-black z-10" />
          </div>

          {/* Panel 3 – centre-right (John Bevere) */}
          <div className="absolute top-0 right-1/4 w-1/4 h-full">
            <img
              src="/images/events/speakers/john_bevere.jpg"
              alt=""
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black via-black/30 to-black z-10" />
          </div>

          {/* Panel 4 – far right (David Oyedepo Jnr) */}
          <div className="absolute top-0 right-0 w-1/4 h-full">
            <img
              src="/images/events/speakers/david_oyedepo_jnr.jpg"
              alt=""
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-black/10 to-black z-10" />
          </div>

          {/* Global overlays */}
          <div className="absolute inset-0 bg-black/40 z-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(88,28,135,0.2)_0%,transparent_65%)] z-20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:28px_28px] z-20" />
        </div>

        {/* Text content */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">

          {/* Heading */}
          <div className="text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none">
              <span className="block text-white/50 text-4xl sm:text-5xl md:text-6xl font-medium tracking-[0.3em] uppercase mb-2">First Love</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/70">
                CONFERENCE
              </span>
            </h1>
            <p className="text-6xl sm:text-7xl md:text-8xl font-black text-white/20 -mt-4 select-none">
              2026
            </p>
          </div>

          {/* Date — prominent */}
          <div className="mt-10 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-150">
            <div className="inline-flex flex-col items-center gap-3">
              <p className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
                8<span className="text-white/50 font-light">th</span> – 12<span className="text-white/50 font-light">th</span> August 2026
              </p>
              <div className="flex items-center gap-2 text-white/45">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-sm font-medium tracking-wide">First Love Center, Accra, Ghana</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Conference video (Flyer Speakers thumbnail) ── */}
        <div className="relative z-30 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/7' }}>
            {conferenceVideoPlaying ? (
              <div className="relative w-full h-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/SRFmsRQqA7c?autoplay=1&rel=0"
                  title="First Love Conference"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                {/* Close button */}
                <button
                  onClick={() => setConferenceVideoPlaying(false)}
                  aria-label="Close video"
                  className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/90 hover:scale-110 transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ) : (
              <>
                <img
                  src="/images/events/Flyer Speakers.webp"
                  alt="First Love Conference 2026 – featured speakers"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setConferenceVideoPlaying(true)}
                    aria-label="Play conference video"
                    className="group/play w-20 h-20 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-600/40"
                  >
                    <svg className="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>


      {/* ══════════════════════════════════════════
          SPEAKERS SECTION
      ══════════════════════════════════════════ */}
      <div className="relative py-24 bg-gradient-to-b from-black via-neutral-950 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.08)_0%,transparent_70%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 font-semibold mb-4">Meet the voices</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Featured Speakers</h2>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto" />
          </div>

          {/* Speaker grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {speakers.map((speaker, i) => (
              <div
                key={speaker.name}
                className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 group relative"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {speaker.image ? (
                  /* ── Speaker with photos: hover crossfade ── */
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/8 cursor-default" style={{ aspectRatio: '3/4' }}>
                    {/* Portrait (base) */}
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                    />
                    {/* Info card (hover) */}
                    <img
                      src={speaker.infoImage!}
                      alt={`${speaker.name} – bio`}
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
                    />
                    {/* Subtle bottom gradient on portrait view */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-700" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 group-hover:opacity-0 transition-opacity duration-500">
                      <p className="text-sm font-bold text-white leading-tight drop-shadow">{speaker.name}</p>
                      <p className="text-xs text-white/60 mt-0.5">{speaker.title}</p>
                    </div>
                  </div>
                ) : (
                  /* ── Speaker without photos: styled placeholder ── */
                  <div className="relative rounded-2xl overflow-hidden border border-white/8 bg-white/5 hover:border-white/20 hover:bg-white/8 transition-all duration-300" style={{ aspectRatio: '3/4' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
                      <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <span className="text-2xl font-black text-white/20">{speaker.name.charAt(0)}</span>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-bold text-white leading-tight">{speaker.name}</p>
                        <p className="text-xs text-white/40 mt-1">{speaker.title}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          DIVIDER
      ══════════════════════════════════════════ */}
      <div className="relative py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>

      {/* ══════════════════════════════════════════
          WEEKLY EVENTS
      ══════════════════════════════════════════ */}
      <div className="relative py-24">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-20 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 font-semibold">Join us every week</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
              Weekly Events
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500 rounded-full mx-auto" />
            <p className="text-lg text-white/60 leading-relaxed font-light">
              Join us throughout the week for various events and services
            </p>
          </div>

          {/* Events grid */}
          <div className="grid gap-8">
            {weeklyEvents.map((day, dayIndex) => (
              <div
                key={day.day}
                className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
                style={{ transitionDelay: `${dayIndex * 80}ms` }}
              >
                {/* Day header */}
                <div className="flex items-center space-x-4 mb-5">
                  <h3 className="text-2xl font-black text-white">{day.day}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
                </div>

                {/* Events */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {day.events.map((event) => (
                    <div
                      key={event.name}
                      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Image */}
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      </div>

                      {/* Details */}
                      <div className="relative p-5 space-y-3">
                        <div className="space-y-1.5">
                          <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                            {event.name}
                          </h4>
                          <p className="text-sm text-white/50">{event.description}</p>
                        </div>
                        <div className="flex items-center space-x-2 text-purple-400">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-semibold">{event.time}</span>
                        </div>
                      </div>

                      {/* Hover glow */}
                      <div className="absolute -inset-px bg-gradient-to-r from-purple-500/15 to-blue-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/15 via-blue-900/8 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
      </div>

    </section>
  );
};

export default Events;
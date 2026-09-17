import { useRef, useEffect, useState } from 'react';

const FirstLoveChannel = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

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

  return (
    <section id="firstlovechannel" ref={sectionRef} className="relative min-h-screen bg-black py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/firstLove.webp"
          alt=""
          width="1920"
          height="1080"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-75"
        />
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:24px_24px] mix-blend-overlay"></div>
      </div>

      {/* Additional Ambient Light */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 transform transition-all duration-1000">
                First Love Channel
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 rounded-full transform transition-all duration-1000 delay-300"></div>
            </div>

            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed font-light transform transition-all duration-1000 delay-500">
              Your ALL ACCESS PASS to everything that is happening at FirstLove around the globe!
            </p>

            <div className="transform transition-all duration-1000 delay-700">
              <a
                href="https://www.youtube.com/@firstlovecenter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/10 hover:border-white/20 rounded-2xl text-white font-medium transition-all duration-300"
              >
                <span>WATCH FREE</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="relative animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-500">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {isVideoPlaying ? (
                <div className="relative" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-3xl"
                    src="https://www.youtube.com/embed/GSECrQ7vKo8?autoplay=1&rel=0"
                    title="First Love Channel Video"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="block relative group w-full"
                  aria-label="Play First Love Channel video"
                >
                  <img
                    src="https://img.youtube.com/vi/GSECrQ7vKo8/maxresdefault.jpg"
                    alt="First Love Channel Video"
                    className="w-full rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 rounded-3xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-600/40">
                      <svg className="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              )}
            </div>

            {/* Glow Effects */}
            <div className="absolute -inset-8 bg-blue-600/20 blur-2xl rounded-full -z-10 animate-pulse" />
            <div className="absolute -inset-16 bg-purple-600/20 blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </div>

      {/* Additional Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 via-purple-900/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

    </section>
  );
};

export default FirstLoveChannel;

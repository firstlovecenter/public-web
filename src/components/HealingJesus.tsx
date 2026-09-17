import { useRef, useEffect, useState } from 'react';

const HEALING_JESUS_VIDEO_ID = '4RL5-9u_mtU';

const HealingJesus = () => {
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

  const handleChannelClick = () => {
    window.open('https://www.youtube.com/@healingjesuscampaign', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <section ref={sectionRef} className="relative min-h-screen bg-black py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/souls.webp"
            alt="Healing Jesus Campaign"
            width="1920"
            height="1080"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center opacity-75"
          />
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:24px_24px] mix-blend-overlay"></div>
        </div>

        {/* Additional Ambient Light */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-yellow-900/20"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center md:text-left space-y-10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                  Because we can
                </h2>
                <div className="h-1.5 w-32 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 rounded-full md:mx-0 mx-auto"></div>
              </div>

              <p className="text-2xl md:text-3xl text-white/90 leading-relaxed font-light max-w-xl">
                Over 100 million salvation decisions recorded and counting!
              </p>
              
              {/* Channel Button */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 pt-8">
                <button
                  onClick={handleChannelClick}
                  className="group inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl text-white font-medium transition-all duration-300 backdrop-blur-sm"
                >
                  <span>HEALING JESUS CAMPAIGN</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column - Video */}
            <div className="relative animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300">
              <div className="relative w-full max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] mx-auto">
                {/* Video Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  {isVideoPlaying ? (
                    <div className="relative" style={{ paddingTop: '56.25%' }}>
                      <iframe
                        className="absolute inset-0 w-full h-full rounded-3xl"
                        src={`https://www.youtube.com/embed/${HEALING_JESUS_VIDEO_ID}?autoplay=1&rel=0`}
                        title="Healing Jesus Campaign"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="block relative group w-full"
                      aria-label="Play Healing Jesus Campaign video"
                    >
                      <img
                        src={`https://img.youtube.com/vi/${HEALING_JESUS_VIDEO_ID}/maxresdefault.jpg`}
                        alt="Healing Jesus Campaign Video"
                        width="1280"
                        height="720"
                        loading="lazy"
                        decoding="async"
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
                <div className="absolute -inset-4 bg-orange-600/20 blur-2xl rounded-full -z-10 animate-pulse" />
                <div className="absolute -inset-8 bg-yellow-600/20 blur-3xl rounded-full -z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-900/20 via-yellow-900/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </section>

    </>
  );
};

export default HealingJesus;

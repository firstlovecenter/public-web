import { useRef, useEffect, useState } from 'react';

const HealingJesus = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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

  const handleVideoClick = () => {
    setIsVideoModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section ref={sectionRef} className="relative min-h-screen bg-black py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/souls.webp"
            alt="Healing Jesus Campaign"
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
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-1000">
                  <button
                    onClick={handleVideoClick}
                    className="block relative group w-full"
                  >
                    <img
                      src="https://img.youtube.com/vi/ScEaZ7edDkc/maxresdefault.jpg"
                      alt="Healing Jesus Campaign Video"
                      className="w-full rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Glow Effects */}
                <div className="absolute -inset-4 bg-orange-600/20 blur-2xl rounded-full -z-10 animate-pulse"></div>
                <div className="absolute -inset-8 bg-yellow-600/20 blur-3xl rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-900/20 via-yellow-900/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 animate-fade-in" onClick={closeVideoModal}>
          <div className="relative w-full max-w-6xl mx-auto transform transition-all duration-300 scale-95 animate-scale-up" onClick={e => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Container with 16:9 Aspect Ratio */}
            <div className="relative pb-[56.25%] h-0 bg-black rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/ScEaZ7edDkc?autoplay=1"
                title="Healing Jesus Campaign"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HealingJesus; 
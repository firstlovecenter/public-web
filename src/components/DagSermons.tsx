import { useRef, useEffect } from 'react';

const DagSermons = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleStoreClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/dhm2.webp"
          alt=""
          className="w-full h-full object-cover object-center opacity-75"
        />
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:24px_24px] mix-blend-overlay"></div>
      </div>

      {/* Additional Ambient Light */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-indigo-900/20"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left space-y-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 order-2 md:order-1">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                Dag Sermons
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500 rounded-full md:mx-0 mx-auto"></div>
            </div>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light max-w-xl mx-auto md:mx-0">
              The Dag Sermons App is out! This collection of sound teachings will transform your life and ministry.
            </p>

            {/* App Preview - Mobile Only */}
            <div className="block md:hidden -mt-4 -mb-8">
              <div className="relative max-w-[400px] mx-auto transform scale-125">
                <img
                  src="/images/dag_sermons_mockup.webp"
                  alt="Dag Sermons App Preview"
                  className="w-full h-auto drop-shadow-2xl"
                />
                {/* Glow Effects */}
                <div className="absolute -inset-8 bg-purple-600/20 blur-2xl rounded-full -z-10"></div>
                <div className="absolute -inset-16 bg-indigo-600/20 blur-3xl rounded-full -z-10"></div>
              </div>
            </div>
            
            {/* Store Buttons */}
            <div className="flex flex-col items-center md:items-start gap-4 pt-8">
              {/* App Store Button */}
              <button 
                onClick={() => handleStoreClick('https://apps.apple.com/us/app/dag-sermons/id6502289149')}
                className="w-full max-w-sm transition-all duration-300 ease-out transform hover:scale-105"
              >
                <div className="flex items-center justify-center md:justify-start px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 transition-colors duration-300 hover:bg-white/20 hover:border-white/20">
                  <svg className="w-10 h-10 text-white mr-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-sm text-white/80">Download on the</div>
                    <div className="text-lg text-white font-semibold -mt-1">App Store</div>
                  </div>
                </div>
              </button>

              {/* Google Play Button */}
              <button 
                onClick={() => handleStoreClick('https://play.google.com/store/apps/details?id=io.bemasolution.dagsermons')}
                className="w-full max-w-sm transition-all duration-300 ease-out transform hover:scale-105"
              >
                <div className="flex items-center justify-center md:justify-start px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 transition-colors duration-300 hover:bg-white/20 hover:border-white/20">
                  <svg className="w-10 h-10 text-white mr-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.28-.293-.44-.686-.44-1.1V2.91c0-.413.16-.806.44-1.096zM14.835 13.045l2.94-1.703 3.17 1.834c.492.284.492.99-.002 1.275l-3.17 1.834-2.94-1.703 2.312-1.268-2.31-1.27zM5.654 1.12l8.682 5.01L3.61 1.814c.374-.392.956-.49 1.442-.214l.602.348zm0 21.76c-.487.277-1.07.178-1.444-.214L13.792 13l-8.682 5.01-.602.348c-.162.093-.333.137-.503.137-.34 0-.675-.124-.935-.35z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-sm text-white/80">GET IT ON</div>
                    <div className="text-lg text-white font-semibold -mt-1">Google Play</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* App Preview - Desktop Only */}
          <div className="hidden md:block relative animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300 order-1 md:order-2">
            <div className="relative max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] mx-auto md:-mr-32 lg:-mr-48 xl:-mr-64">
              <img
                src="/images/dag_sermons_mockup.webp"
                alt="Dag Sermons App Preview"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
              />
              {/* Glow Effects */}
              <div className="absolute -inset-8 bg-purple-600/20 blur-2xl rounded-full -z-10"></div>
              <div className="absolute -inset-16 bg-indigo-600/20 blur-3xl rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/20 via-indigo-900/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
    </section>
  );
};

export default DagSermons; 
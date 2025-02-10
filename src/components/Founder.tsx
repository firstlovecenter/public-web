import { useEffect, useRef } from 'react';

const Founder = () => {
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
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="founder" ref={sectionRef} className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Mobile Background Image */}
      <div className="absolute inset-0 md:hidden">
        <div className="absolute inset-0 -top-32 h-[calc(100%+8rem)]">
          <img
            src="/images/dhm.png"
            alt=""
            className="w-full h-full object-cover object-[center_30%] opacity-90"
          />
        </div>
        {/* Vertical gradient - lighter in the middle where the face is */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/30 to-black/70"></div>
        {/* Horizontal gradient - more transparent on the right side */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
        {/* Additional gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent"></div>
      </div>
      
      {/* Background Gradient - Desktop Only */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2">
          {/* Content */}
          <div className="relative z-10 space-y-8 px-4 sm:px-6 lg:px-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300">
            <h2 className="text-4xl md:text-5xl font-bold text-white hover:scale-105 transform transition-transform duration-500">
              Dag Heward-Mills
            </h2>
            <div className="space-y-6 text-gray-300/90">
              <p className="text-lg hover:text-white transition-colors duration-300">
                Dag Heward-Mills is a mega church pastor, and the founder of 
                the United Denominations Originating from the Lighthouse 
                Group of Churches. Spanning ten denominations, he oversees over 
                3000 churches on every continent of the globe. Amongst these 
                denominations is the First Love Church.
              </p>
              <p className="text-lg hover:text-white transition-colors duration-300">
                He is also a prolific, best-selling author, with the best selling 
                Makarios collection of 60 books. His writings have been translated 
                into over 50 languages all over the world.
              </p>
              <p className="text-lg hover:text-white transition-colors duration-300">
                Dag Heward-Mills' Healing Jesus Campaigns holds large evangelistic 
                crusades all over Africa and are among the largest evangelistic 
                efforts on the continent.
              </p>
              <p className="text-lg hover:text-white transition-colors duration-300">
                Dag can be heard or watched ministering to millions on various 
                television, radio and internet platforms.
              </p>
              <div className="pt-4">
                <p className="text-lg font-light text-white/90 hover:text-white transition-colors duration-300">
                  Click below to find out more about our leader!
                </p>
              </div>
            </div>
            <a 
              href="https://www.daghewardmills.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white border-2 border-white/20 rounded-full font-medium backdrop-blur-sm hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-white/10 animate-pulse"
            >
              Dag Heward-Mills
            </a>
          </div>

          {/* Desktop Image - Hidden on Mobile */}
          <div className="relative hidden md:block z-20 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-500">
            <div className="absolute -top-64 -right-48 left-0 h-[160%] group">
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-white/10 via-white/5 to-transparent blur-2xl transition-opacity duration-500 group-hover:opacity-75"></div>
              <img
                src="/images/dhm.png"
                alt="Bishop Dag Heward-Mills"
                className="relative h-full w-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder; 